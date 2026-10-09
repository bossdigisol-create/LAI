import SectionLabel from "./section-label";
import JsonLd from "./json-ld";
import { Plus } from "./icons";
import { faqJsonLd } from "@/lib/seo";

// Accessible accordion built on native <details>, so it works without JavaScript.
export default function Faq({
  items,
  heading = "Questions we hear often",
  eyebrow = "FAQ",
  intro,
  id = "faq",
  className = "",
}) {
  return (
    <section id={id} className={`section-y ${className}`}>
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:gap-20">
        <div data-reveal className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
          <SectionLabel>{eyebrow}</SectionLabel>
          <h2 className="mt-6 text-h2">{heading}</h2>
          {intro && <p className="mt-5 max-w-md text-mist-600">{intro}</p>}
        </div>
        <div data-reveal className="divide-y divide-ink/10 border-y border-ink/10" style={{ "--d": "120ms" }}>
          {items.map((f) => (
            <details key={f.q} className="faq group" name={id}>
              <summary className="flex items-start justify-between gap-6 py-6 text-left">
                <span className="font-display text-[1.2rem] leading-snug text-ink transition-colors group-hover:text-brand-600 md:text-[1.35rem]">
                  {f.q}
                </span>
                <span className="faq-icon mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand-500/30 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Plus className="h-4 w-4" />
                </span>
              </summary>
              <p className="pb-7 pr-4 leading-relaxed text-mist-600 md:pr-16">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqJsonLd(items)} />
    </section>
  );
}
