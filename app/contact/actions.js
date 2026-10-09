"use server";

import { inquiryReasons, site } from "@/lib/site";

const LIMITS = { name: 120, email: 200, organization: 160, role: 120, phone: 40, reason: 80, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (value, max) =>
  String(value ?? "")
    .trim()
    .slice(0, max);

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Handles the contact form. Validates on the server, filters obvious bots and sends the message
// to the inbox configured in CONTACT_TO_EMAIL through Resend's HTTP API.
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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || "LAI Healthcare Solutions <onboarding@resend.dev>";

  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] RESEND_API_KEY is not set, so this submission was logged instead of emailed:", values);
      return { status: "success" };
    }
    console.error("[contact] RESEND_API_KEY is not set. The message could not be delivered.");
    return {
      status: "error",
      message: `We couldn't send your message just now. Please email us directly at ${site.emailDisplay}.`,
      values,
    };
  }

  const rows = [
    ["Name", values.name],
    ["Email", values.email],
    ["Organization", values.organization || "Not provided"],
    ["Role", values.role || "Not provided"],
    ["Phone", values.phone || "Not provided"],
    ["Topic", values.reason],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMessage:\n${values.message}`;
  const html = `<table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px;color:#171a18">${rows
    .map(([k, v]) => `<tr><td style="color:#535c57"><strong>${k}</strong></td><td>${escapeHtml(v)}</td></tr>`)
    .join("")}</table><p style="font-family:Arial,sans-serif;font-size:14px;color:#171a18;white-space:pre-wrap">${escapeHtml(
    values.message
  )}</p>`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `Website inquiry: ${values.reason} (${values.name})`,
        text,
        html,
      }),
    });
    if (!response.ok) {
      console.error("[contact] Resend rejected the message:", response.status, await response.text());
      throw new Error("Email provider error");
    }
    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: `Something went wrong while sending your message. Please try again, or email us at ${site.emailDisplay}.`,
      values,
    };
  }
}
