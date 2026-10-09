import { ButtonLink } from "./button";
import { LogoMark } from "./logo";
import { site } from "@/lib/site";

export default function CtaSection({
  title = "Ready to bring responsible AI into your organization?",
  body = "Tell us what is slowing your teams down. We will help you find where complexity is costing you and how responsible innovation can work in your clinical environment.",
  primary = { label: "Book a consultation", href: "/contact" },
  secondary = { label: "Email us", href: `mailto:${site.email}` },
}) {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-x">
        <div
          data-reveal="scale"
          className="relative isolate overflow-hidden rounded-[2rem] bg-brand-500 px-6 py-16 text-white sm:px-12 md:rounded-[2.5rem] md:px-16 md:py-24"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-azure-300 [clip-path:polygon(62%_100%,100%_26%,100%_54%,80%_100%)] max-md:opacity-40"
          />
          <LogoMark
            decorative
            className="pointer-events-none absolute -right-10 -top-6 -z-10 h-48 w-auto text-white/[0.07] md:h-72"
          />
          <div className="max-w-2xl">
            <h2 className="text-h2 text-white">{title}</h2>
            <p className="mt-6 text-lead text-white/85">{body}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={primary.href} variant="light" size="lg">
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} variant="outline-light" size="lg" icon={null}>
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
