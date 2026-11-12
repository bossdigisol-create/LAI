"use server";

import { confirmationEmail, inquiryEmail, logoAttachment } from "@/lib/email-templates";
import { mailBackend, sendMail } from "@/lib/mailer";
import { inquiryReasons, site } from "@/lib/site";

const LIMITS = { name: 120, email: 200, organization: 160, role: 120, phone: 40, reason: 80, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (value, max) =>
  String(value ?? "")
    .trim()
    .slice(0, max);

// Handles the contact form. Validates on the server, filters obvious bots, sends the inquiry to the inbox in MAIL_TO
// (or CONTACT_TO_EMAIL) and then a confirmation to the visitor, through Microsoft Graph or through Resend as a
// fallback (see lib/mailer.js). Email layouts live in lib/email-templates.js.
export async function submitContact(_previousState, formData) {
  // Honeypot field and a minimum fill time catch most automated submissions.
  // Bots are told the message was sent so they do not retry.
  if (clean(formData.get("company_website"), 200)) return { status: "success" };
  const startedAt = Number(formData.get("started_at"));
  if (Number.isFinite(startedAt) && startedAt > 0 && Date.now() - startedAt < 2500) return { status: "success" };

  const values = {
    name: clean(formData.get("name"), LIMITS.name),
    email: clean(formData.get("email"), LIMITS.email),
    organization: clean(formData.get("organization"), LIMITS.organization),
    role: clean(formData.get("role"), LIMITS.role),
    phone: clean(formData.get("phone"), LIMITS.phone),
    reason: clean(formData.get("reason"), LIMITS.reason),
    message: clean(formData.get("message"), LIMITS.message),
  };

  const errors = {};
  if (!values.name) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!inquiryReasons.includes(values.reason)) errors.reason = "Please choose the topic that fits best.";
  if (values.message.length < 10) errors.message = "Please share a little more about how we can help.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please check the highlighted fields and try again.", errors, values };
  }

  if (!mailBackend()) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] No email backend is configured, so this submission was logged instead of emailed:", values);
      return { status: "success" };
    }
    console.error("[contact] No email backend is configured (Microsoft Graph or Resend). The message could not be delivered.");
    return {
      status: "error",
      message: `We couldn't send your message just now. Please email us directly at ${site.emailDisplay}.`,
      values,
    };
  }

  const submittedAt = `${new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "long",
    timeStyle: "short",
  })} ET`;

  // 1. The inquiry, delivered to Stephanie's Outlook inbox. Reply-To is the visitor, so pressing Reply answers them.
  try {
    const inquiry = inquiryEmail(values, submittedAt);
    await sendMail({
      to: process.env.MAIL_TO || process.env.CONTACT_TO_EMAIL || site.email,
      replyTo: { name: values.name, address: values.email },
      ...inquiry,
      attachments: [logoAttachment],
    });
  } catch (error) {
    console.error("[contact] The inquiry could not be sent:", error.message);
    return {
      status: "error",
      message: `Something went wrong while sending your message. Please try again, or email us at ${site.emailDisplay}.`,
      values,
    };
  }

  // 2. The automatic confirmation to the visitor, from the no-reply mailbox. Replies go to hello@. The inquiry has
  // already arrived, so a failure here is logged without telling the visitor their message failed.
  try {
    const confirmation = confirmationEmail(values);
    await sendMail({
      to: { name: values.name, address: values.email },
      replyTo: { name: site.name, address: site.email },
      ...confirmation,
      attachments: [logoAttachment],
    });
    return { status: "success", confirmationSent: true };
  } catch (error) {
    console.error("[contact] The confirmation to the visitor could not be sent:", error.message);
    return { status: "success" };
  }
}
