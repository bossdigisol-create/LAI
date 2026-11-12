// Sends contact form email. The backend is chosen at runtime from the environment:
//   1. Microsoft Graph, when MS_TENANT_ID, MS_CLIENT_ID and MS_CLIENT_SECRET are all set. Mail goes out through the
//      client's Microsoft 365 tenant with the OAuth2 client-credentials flow (application permission Mail.Send),
//      from the mailbox in MAIL_SENDER_UPN (noreply@laihealthcaresolutions.com once that domain is in the tenant).
//   2. Resend, when RESEND_API_KEY is set. Kept as a fallback.
// Server-only: import it from Server Actions or route handlers. It is deliberately not a "use server" file, which
// would expose every export as a public endpoint.

export function mailBackend() {
  const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, RESEND_API_KEY } = process.env;
  if (MS_TENANT_ID && MS_CLIENT_ID && MS_CLIENT_SECRET) return "graph";
  if (RESEND_API_KEY) return "resend";
  return null;
}

// `mail` is { to, replyTo, subject, html, text, attachments }. `to` and `replyTo` are an address string or
// { name, address }. `attachments` are inline images: { name, contentType, contentBytes (base64), contentId }.
// Throws with the provider's status code and response text when delivery fails, so the caller can log Microsoft's or
// Resend's exact error.
export async function sendMail(mail) {
  const backend = mailBackend();
  const normalized = { ...mail, to: asAddress(mail.to), replyTo: mail.replyTo && asAddress(mail.replyTo) };
  if (backend === "graph") return sendViaGraph(normalized);
  if (backend === "resend") return sendViaResend(normalized);
  throw new Error("No email backend is configured.");
}

const asAddress = (value) => (typeof value === "string" ? { address: value } : value);

const formatAddress = ({ name, address }) => (name ? `${name.replace(/["\r\n]/g, "")} <${address}>` : address);

// One token covers both emails a submission sends. Tokens last about an hour; refresh a minute early.
let cachedToken = null;

async function graphToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value;

  const response = await fetch(
    `https://login.microsoftonline.com/${encodeURIComponent(process.env.MS_TENANT_ID)}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: process.env.MS_CLIENT_ID,
        client_secret: process.env.MS_CLIENT_SECRET,
        scope: "https://graph.microsoft.com/.default",
        grant_type: "client_credentials",
      }),
    }
  );
  if (!response.ok) throw new Error(`Graph token request failed (${response.status}): ${await response.text()}`);
  const { access_token: value, expires_in: expiresIn } = await response.json();
  if (!value) throw new Error("Graph token response had no access_token.");
  cachedToken = { value, expiresAt: Date.now() + (Number(expiresIn) || 3600) * 1000 };
  return value;
}

async function sendViaGraph({ to, replyTo, subject, html, attachments = [] }) {
  // The mailbox the message is sent from. Outlook shows that mailbox's own display name and primary address as the
  // sender. The message carries no "from" field, because naming any other address there is rejected with a 403.
  const sender = process.env.MAIL_SENDER_UPN;
  if (!sender) throw new Error("MAIL_SENDER_UPN is not set, so Microsoft Graph has no mailbox to send from.");
  // Outlook files mail a mailbox sends to itself under "Note to self" instead of the Inbox.
  if (sender.toLowerCase() === to.address.toLowerCase()) {
    throw new Error(`MAIL_SENDER_UPN and the recipient are both ${to.address}. Send from a separate shared mailbox.`);
  }

  const message = {
    subject,
    body: { contentType: "HTML", content: html },
    toRecipients: [{ emailAddress: to }],
    attachments: attachments.map((file) => ({
      "@odata.type": "#microsoft.graph.fileAttachment",
      name: file.name,
      contentType: file.contentType,
      contentBytes: file.contentBytes,
      contentId: file.contentId,
      isInline: true,
    })),
  };
  if (replyTo) message.replyTo = [{ emailAddress: replyTo }];

  const token = await graphToken();
  const response = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ message, saveToSentItems: true }),
  });
  // Success is 202 Accepted with an empty body.
  if (!response.ok) throw new Error(`Graph sendMail failed (${response.status}): ${await response.text()}`);
}

async function sendViaResend({ to, replyTo, subject, html, text, attachments = [] }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "LAI Healthcare Solutions <onboarding@resend.dev>",
      to: [formatAddress(to)],
      ...(replyTo && { reply_to: replyTo.address }),
      subject,
      text,
      html,
      attachments: attachments.map((file) => ({
        filename: file.name,
        content: file.contentBytes,
        content_type: file.contentType,
        content_id: file.contentId,
      })),
    }),
  });
  if (!response.ok) throw new Error(`Resend rejected the message (${response.status}): ${await response.text()}`);
}
