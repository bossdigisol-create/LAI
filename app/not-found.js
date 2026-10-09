import Link from "next/link";
import SectionLabel from "@/components/section-label";
import { ButtonLink } from "@/components/button";
import { ArrowRight } from "@/components/icons";

export const metadata = {
  title: "Page not found",
  description: "The page you are looking for has moved or no longer exists.",
};

const destinations = [
  { label: "About LAI", href: "/about", body: "Our story and founder" },
  { label: "Services", href: "/services", body: "How we help healthcare organizations" },
  { label: "Speaking", href: "/speaking", body: "Keynotes and workshops" },
  { label: "Contact", href: "/contact", body: "Book a consultation" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pb-28 pt-[calc(var(--header-h)+5rem)]">
      <div aria-hidden="true" className="absolute inset-0 bg-grid" />
      <div aria-hidden="true" className="absolute -top-48 right-[-12%] h-[34rem] w-[34rem] rounded-full bg-azure-300/30 blur-3xl" />
      <div className="container-x relative">
        <SectionLabel className="rise-in">Page not found</SectionLabel>
        <h1 className="rise-in mt-6 max-w-3xl text-h1" style={{ "--d": "80ms" }}>
          This page has moved or no longer exists.
        </h1>
        <p className="rise-in mt-6 max-w-2xl text-lead text-mist-600" style={{ "--d": "160ms" }}>
          Our website has a new home, so some older links have changed. These are the best places to continue.
        </p>
        <div className="rise-in mt-10 flex flex-wrap gap-3" style={{ "--d": "240ms" }}>
          <ButtonLink href="/">Go to the homepage</ButtonLink>
          <ButtonLink href="/contact" variant="outline" icon={null}>
            Contact us
          </ButtonLink>
        </div>
        <ul className="rise-in mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" style={{ "--d": "320ms" }}>
          {destinations.map((d) => (
            <li key={d.href}>
              <Link
                href={d.href}
                className="group flex h-full flex-col rounded-[1.5rem] border border-ink/[0.07] bg-white p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="font-display text-xl text-ink">{d.label}</span>
                <span className="mt-2 flex-1 text-[0.95rem] text-mist-600">{d.body}</span>
                <ArrowRight className="mt-6 h-5 w-5 text-brand-600 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
