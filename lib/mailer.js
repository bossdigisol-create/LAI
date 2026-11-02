// Sends contact form email. The backend is chosen at runtime from the environment:
//   1. Microsoft Graph, when MS_TENANT_ID, MS_CLIENT_ID and MS_CLIENT_SECRET are all set. Mail goes out through the
//      client's Microsoft 365 tenant with the OAuth2 client-credentials flow (application permission Mail.Send).
//   2. Resend, when RESEND_API_KEY is set. Kept as a fallback.
// Server-only: import it from Server Actions or route handlers. It is deliberately not a "use server" file, which
// would expose every export as a public endpoint.

export function mailBackend() {
  const { MS_TENANT_ID, MS_CLIENT_ID, MS_CLIENT_SECRET, RESEND_API_KEY } = process.env;
  if (MS_TENANT_ID && MS_CLIENT_ID && MS_CLIENT_SECRET) return "graph";
  if (RESEND_API_KEY) return "resend";
  return null;
}

// `mail` is { to, replyTo: { name, address }, subject, html, text }. Throws with the provider's status code and
// response text when delivery fails, so the caller can log Microsoft's or Resend's exact error.
export async function sendMail(mail) {
  const backend = mailBackend();
  if (backend === "graph") return sendViaGraph(mail);
  if (backend === "resend") return sendViaResend(mail);
  throw new Error("No email backend is configured.");
}

async function graphToken() {
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
  const { access_token: token } = await response.json();
  if (!token) throw new Error("Graph token response had no access_token.");
  return token;
}

async function sendViaGraph({ to, replyTo, subject, html }) {
  // The shared mailbox the message is sent from. Outlook shows that mailbox's own display name as the sender. The
  // message carries no "from" field, because naming any other address there is rejected with a 403.
  const sender = process.env.MAIL_SENDER_UPN;
  if (!sender) throw new Error("MAIL_SENDER_UPN is not set, so Microsoft Graph has no mailbox to send from.");
  // Outlook files mail a mailbox sends to itself under "Note to self" instead of the Inbox.
  if (sender.toLowerCase() === to.toLowerCase()) {
    throw new Error(`MAIL_SENDER_UPN and the recipient are both ${to}. Send from a separate shared mailbox.`);
  }

  const token = await graphToken();
  const response = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      message: {
        subject,
        body: { contentType: "HTML", content: html },
        toRecipients: [{ emailAddress: { address: to } }],
        replyTo: [{ emailAddress: replyTo }],
      },
      saveToSentItems: true,
    }),
  });
  // Success is 202 Accepted with an empty body.
  if (!response.ok) throw new Error(`Graph sendMail failed (${response.status}): ${await response.text()}`);
}

async function sendViaResend({ to, replyTo, subject, html, text }) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "LAI Healthcare Solutions <onboarding@resend.dev>",
      to: [to],
      reply_to: replyTo.address,
      subject,
      text,
      html,
    }),
  });
  if (!response.ok) throw new Error(`Resend rejected the message (${response.status}): ${await response.text()}`);
}
