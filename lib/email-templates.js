// Contact form emails. Table-based layout with inline styles, the only approach that renders consistently in
// Outlook, Gmail and Apple Mail. The logo travels as an inline attachment (see lib/email-logo.js).
import { EMAIL_LOGO } from "@/lib/email-logo";
import { site } from "@/lib/site";

export const LOGO_CID = "lai-logo@laihealthcaresolutions";

export const logoAttachment = {
  name: "lai-logo.png",
  contentType: "image/png",
  contentBytes: EMAIL_LOGO.base64,
  contentId: LOGO_CID,
};

const PURPLE = "#605cf0";
const AZURE = "#88cdf6";
const INK = "#171a18";
const MUTED = "#535c57";
const PEARL = "#f7faf8";
const LINE = "#e6e9e7";
const SANS = "Poppins,'Segoe UI',Helvetica,Arial,sans-serif";
const SERIF = "Piazzolla,Georgia,'Times New Roman',serif";

const siteHost = new URL(site.url).host.replace(/^www\./, "");

export const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const nl2br = (value) => escapeHtml(value).replace(/\r?\n/g, "<br>");

// Subjects are a single header line, so collapse any line breaks a visitor typed into their name.
const oneLine = (value) => String(value).replace(/\s+/g, " ").trim();

function layout({ preheader, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(site.name)}</title>
</head>
<body style="margin:0;padding:0;background:${PEARL};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${PEARL};">
<tr><td align="center" style="padding:32px 12px;">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid ${LINE};border-radius:20px;overflow:hidden;">
    <tr><td height="6" bgcolor="${PURPLE}" style="height:6px;line-height:6px;font-size:0;background:${PURPLE};background-image:linear-gradient(90deg,${PURPLE},${AZURE});">&nbsp;</td></tr>
    <tr><td align="center" style="padding:32px 24px 8px;">
      <img src="cid:${LOGO_CID}" width="${EMAIL_LOGO.width}" height="${EMAIL_LOGO.height}" alt="${escapeHtml(site.name)}" style="display:block;margin:0 auto;border:0;outline:none;width:${EMAIL_LOGO.width}px;height:auto;">
    </td></tr>
    <tr><td style="padding:24px 36px 32px;font-family:${SANS};color:${INK};font-size:15px;line-height:1.65;">
      ${body}
    </td></tr>
    <tr><td align="center" bgcolor="${INK}" style="background:${INK};padding:22px 24px;font-family:${SANS};font-size:12px;line-height:1.6;color:#c9d0cc;">
      <strong style="color:#ffffff;">${escapeHtml(site.name)}</strong><br>
      ${escapeHtml(site.tagline)}<br>
      <a href="${site.url}" style="color:${AZURE};text-decoration:none;">${escapeHtml(siteHost)}</a>
    </td></tr>
  </table>
</td></tr>
</table>
</body>
</html>`;
}

const button = (href, label) =>
  `<a href="${escapeHtml(href)}" style="display:inline-block;padding:13px 28px;border-radius:999px;background:${PURPLE};color:#ffffff;font-family:${SANS};font-size:15px;font-weight:600;text-decoration:none;">${escapeHtml(label)}</a>`;

// The inquiry Stephanie receives in her Outlook inbox. The "[LAI Website]" subject tag, the "LAI website inquiry"
// eyebrow and the LAI logo make it obvious which of her businesses the lead belongs to.
export function inquiryEmail(values, submittedAt) {
  const rows = [
    ["Name", escapeHtml(values.name)],
    [
      "Email",
      `<a href="mailto:${escapeHtml(values.email)}" style="color:${PURPLE};text-decoration:none;">${escapeHtml(values.email)}</a>`,
    ],
    ["Organization", escapeHtml(values.organization || "Not provided")],
    ["Role", escapeHtml(values.role || "Not provided")],
    [
      "Phone",
      values.phone
        ? `<a href="tel:${escapeHtml(values.phone.replace(/[^\d+]/g, ""))}" style="color:${PURPLE};text-decoration:none;">${escapeHtml(values.phone)}</a>`
        : "Not provided",
    ],
    ["Topic", escapeHtml(values.reason)],
  ];

  const table = rows
    .map(
      ([label, value], i) => `<tr>
        <td width="34%" style="padding:11px 16px;background:${i % 2 ? "#ffffff" : PEARL};border-bottom:1px solid ${LINE};font-size:13px;font-weight:600;color:${MUTED};">${label}</td>
        <td style="padding:11px 16px;background:${i % 2 ? "#ffffff" : PEARL};border-bottom:1px solid ${LINE};font-size:15px;color:${INK};">${value}</td>
      </tr>`
    )
    .join("");

  const replyHref = `mailto:${values.email}?subject=${encodeURIComponent(`Re: Your inquiry to ${site.name}`)}`;

  const body = `
    <p style="margin:0 0 10px;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${PURPLE};">LAI website inquiry</p>
    <h1 style="margin:0 0 8px;font-family:${SERIF};font-size:26px;font-weight:500;line-height:1.25;color:${INK};">New message from ${escapeHtml(values.name)}</h1>
    <p style="margin:0 0 24px;font-size:14px;color:${MUTED};">Sent through the contact form on ${escapeHtml(siteHost)} on ${escapeHtml(submittedAt)}.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border:1px solid ${LINE};border-radius:12px;border-collapse:separate;overflow:hidden;font-family:${SANS};">
      ${table}
    </table>
    <p style="margin:28px 0 10px;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${PURPLE};">Message</p>
    <div style="padding:16px 18px;background:${PEARL};border-left:4px solid ${PURPLE};border-radius:8px;color:${INK};">${nl2br(values.message)}</div>
    <p style="margin:30px 0 0;text-align:center;">${button(replyHref, `Reply to ${values.name}`)}</p>
    <p style="margin:14px 0 0;text-align:center;font-size:13px;color:${MUTED};">Pressing Reply on this email also answers ${escapeHtml(values.name)} directly.</p>`;

  const text = [
    "LAI WEBSITE INQUIRY",
    `New message from ${values.name}`,
    `Sent through the contact form on ${siteHost} on ${submittedAt}.`,
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Organization: ${values.organization || "Not provided"}`,
    `Role: ${values.role || "Not provided"}`,
    `Phone: ${values.phone || "Not provided"}`,
    `Topic: ${values.reason}`,
    "",
    "Message:",
    values.message,
    "",
    `Reply to this email to answer ${values.name} directly.`,
  ].join("\n");

  return {
    subject: `[LAI Website] New inquiry: ${values.reason} (${oneLine(values.name)})`,
    html: layout({ preheader: `${values.name} sent a message about ${values.reason}.`, body }),
    text,
  };
}

// Greets the visitor by first name, unless the name looks like a link or an address. The confirmation goes to
// whatever address was typed into the form, so it deliberately repeats none of the visitor's free text beyond this.
function firstName(name) {
  const first = oneLine(name).split(" ")[0].slice(0, 40);
  return !first || /[@:/]|www\./i.test(first) ? "there" : first;
}

// The automatic "we received your message" email sent to the visitor from the no-reply mailbox.
export function confirmationEmail(values) {
  const first = firstName(values.name);

  const body = `
    <h1 style="margin:0 0 16px;font-family:${SERIF};font-size:26px;font-weight:500;line-height:1.25;color:${INK};">Thank you, ${escapeHtml(first)}.</h1>
    <p style="margin:0 0 14px;">We have received your message to <strong>${escapeHtml(site.name)}</strong> about <strong>${escapeHtml(values.reason)}</strong>.</p>
    <p style="margin:0 0 24px;">Stephanie and the team read every inquiry personally and will follow up with practical next steps. If you would rather talk sooner, choose a time that suits you.</p>
    <p style="margin:0 0 28px;text-align:center;">${button(site.bookingUrl, "Schedule a call")}</p>
    <p style="margin:0;">Need to add anything? Write to us at <a href="mailto:${site.email}" style="color:${PURPLE};text-decoration:none;font-weight:600;">${escapeHtml(site.emailDisplay)}</a>.</p>
    <p style="margin:24px 0 0;">Warm regards,<br><strong style="color:${PURPLE};">The ${escapeHtml(site.name)} team</strong></p>
    <p style="margin:28px 0 0;padding-top:18px;border-top:1px solid ${LINE};font-size:12px;line-height:1.6;color:${MUTED};">This is an automatic confirmation from a no-reply address. You are receiving it because this email address was entered in the contact form at ${escapeHtml(siteHost)}. If that was not you, you can ignore this message.</p>`;

  const text = [
    `Thank you, ${first}.`,
    "",
    `We have received your message to ${site.name} about ${values.reason}.`,
    "Stephanie and the team read every inquiry personally and will follow up with practical next steps.",
    "",
    `If you would rather talk sooner, schedule a call: ${site.bookingUrl}`,
    `Need to add anything? Write to us at ${site.emailDisplay}.`,
    "",
    `Warm regards,`,
    `The ${site.name} team`,
    "",
    `This is an automatic confirmation from a no-reply address. You are receiving it because this email address was entered in the contact form at ${siteHost}. If that was not you, you can ignore this message.`,
  ].join("\n");

  return {
    subject: `We received your message | ${site.name}`,
    html: layout({ preheader: "Thank you for contacting LAI Healthcare Solutions. We will be in touch soon.", body }),
    text,
  };
}
