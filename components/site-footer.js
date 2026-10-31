import Link from "next/link";
import { Logo } from "./logo";
import EmailText from "./email-text";
import { ArrowUpRight, Calendar, LinkedIn, Mail } from "./icons";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const company = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Speaking", href: "/speaking" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy & terms", href: "/legal" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-pearl">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.07] bg-dots" />
      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_2fr]">
          <div className="max-w-sm">
            <Link href="/" className="inline-block text-pearl" aria-label="LAI Healthcare Solutions, home">
              <Logo className="h-9 w-auto" title="LAI Healthcare Solutions" />
            </Link>
            <p className="mt-6 font-display text-xl leading-snug text-pearl">{site.footerLines[0]}</p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-300">{site.footerLines[1]}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <h2 className="text-eyebrow font-sans text-azure-300">Services</h2>
              <ul className="mt-5 space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="link-underline text-[0.95rem] text-mist-300 transition-colors hover:text-white"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-eyebrow font-sans text-azure-300">Company</h2>
              <ul className="mt-5 space-y-3">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="link-underline text-[0.95rem] text-mist-300 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-eyebrow font-sans text-azure-300">Connect</h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="group inline-flex items-start gap-3 text-[0.95rem] text-mist-300 transition-colors hover:text-white"
                  >
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-azure-300" />
                    <EmailText email={site.emailDisplay} />
                  </a>
                </li>
                <li>
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 text-[0.95rem] text-mist-300 transition-colors hover:text-white"
                  >
                    <Calendar className="h-5 w-5 shrink-0 text-azure-300" />
                    Schedule a call
                    <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
                <li className="flex gap-3 pt-2">
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-11 w-11 place-items-center rounded-full border border-pearl/15 text-pearl transition-colors hover:border-azure-300 hover:bg-azure-300 hover:text-ink"
                  >
                    <LinkedIn className="h-[1.05rem] w-[1.05rem]" />
                    <span className="sr-only">LinkedIn (opens in a new tab)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-pearl/10 pt-8 text-sm text-mist-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {process.env.BUILD_YEAR} {site.name}. All rights reserved.
          </p>
          <p className="max-w-md sm:text-right">
            Consulting and education only. Nothing on this site is medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
