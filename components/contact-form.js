"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/contact/actions";
import { ArrowRight, Calendar, Check } from "./icons";

const initialState = { status: "idle" };

const fieldBase =
  "block w-full rounded-2xl border bg-white px-4 text-base text-ink placeholder:text-mist-500 transition-[border-color,box-shadow] duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15";

function Field({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? (
          <span className="text-brand-600" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-mist-500"> (optional)</span>
        )}
      </label>
      {children}
      {hint && !error && <p className="mt-2 text-xs text-mist-600">{hint}</p>}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-[#b42318]">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm({ reasons, bookingUrl }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const startedRef = useRef(null);
  const successRef = useRef(null);

  // Records when the form was first shown, for the server-side timing check.
  useEffect(() => {
    if (startedRef.current && !startedRef.current.value) startedRef.current.value = String(Date.now());
  });

  useEffect(() => {
    if (state.status === "success") successRef.current?.focus();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="py-6 text-center outline-none sm:py-10">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-500 text-white shadow-glow">
          <Check className="h-8 w-8" strokeWidth={2} />
        </span>
        <h2 className="mt-8 text-h3">Thank you. Your message is on its way.</h2>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-mist-600">
          We will review the details you shared and follow up with next steps. If you would rather talk sooner, choose
          a time that suits you.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-pearl transition-colors hover:bg-mist-800"
        >
          <Calendar className="h-4 w-4" />
          Schedule a call
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    );
  }

  const values = state.values ?? {};
  const errors = state.errors ?? {};
  const describedBy = (id) => (errors[id] ? `${id}-error` : undefined);

  return (
    <form action={formAction} className="grid gap-6">
      {/* Spam traps: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedRef} type="hidden" name="started_at" defaultValue="" />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            defaultValue={values.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            className={`${fieldBase} h-12 ${errors.name ? "border-[#b42318]" : "border-ink/15"}`}
          />
        </Field>
        <Field id="email" label="Work email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={values.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy("email")}
            className={`${fieldBase} h-12 ${errors.email ? "border-[#b42318]" : "border-ink/15"}`}
          />
        </Field>
        <Field id="organization" label="Organization">
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            defaultValue={values.organization}
            className={`${fieldBase} h-12 border-ink/15`}
          />
        </Field>
        <Field id="role" label="Role or title">
          <input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            defaultValue={values.role}
            className={`${fieldBase} h-12 border-ink/15`}
          />
        </Field>
        <Field id="phone" label="Phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            defaultValue={values.phone}
            className={`${fieldBase} h-12 border-ink/15`}
          />
        </Field>
        <Field id="reason" label="What can we help with?" required error={errors.reason}>
          <select
            id="reason"
            name="reason"
            required
            defaultValue={values.reason ?? ""}
            aria-invalid={errors.reason ? true : undefined}
            aria-describedby={describedBy("reason")}
            className={`${fieldBase} h-12 appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23535c57' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")] bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10 ${
              errors.reason ? "border-[#b42318]" : "border-ink/15"
            }`}
          >
            <option value="" disabled>
              Choose a topic
            </option>
            {reasons.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id="message"
        label="How can we help?"
        required
        error={errors.message}
        hint="Goals, challenges, timelines, event details. Please do not include patient information."
      >
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          minLength={10}
          defaultValue={values.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message")}
          className={`${fieldBase} resize-y py-3.5 ${errors.message ? "border-[#b42318]" : "border-ink/15"}`}
        />
      </Field>

      <div aria-live="polite" className="min-h-0">
        {state.status === "error" && state.message && (
          <p className="rounded-2xl border border-[#b42318]/20 bg-[#fef3f2] px-4 py-3 text-sm text-[#b42318]">
            {state.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-mist-600 sm:max-w-xs">
          By sending this form you agree to our{" "}
          <Link href="/legal#privacy" className="underline underline-offset-2 hover:text-brand-600">
            privacy policy
          </Link>
          .
        </p>
        <button
          type="submit"
          disabled={pending}
          className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-brand-500 px-8 font-medium text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 disabled:translate-y-0 disabled:cursor-wait disabled:opacity-70"
        >
          {pending ? "Sending…" : "Send message"}
          {!pending && <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />}
        </button>
      </div>
    </form>
  );
}
