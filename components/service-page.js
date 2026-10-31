import Link from "next/link";
import PageTransition from "./page-transition";
import PageHero from "./page-hero";
import SectionLabel from "./section-label";
import { ButtonLink } from "./button";
import StatCallout from "./stat-callout";
import ProcessSteps from "./process-steps";
import ServiceCard from "./service-card";
import Faq from "./faq";
import CtaSection from "./cta-section";
import HealthTechBand from "./health-tech-band";
import JsonLd from "./json-ld";
import { ArrowRight, Check, ServiceIcon } from "./icons";
import { getService, serviceHref } from "@/lib/services";
import { site } from "@/lib/site";
import { pageMetadata, serviceJsonLd } from "@/lib/seo";

export function serviceMetadata(slug) {
  const s = getService(slug);
  return pageMetadata({ title: s.seoTitle, description: s.metaDescription, path: serviceHref(slug) });
}

function AtAGlance({ service }) {
  return (
    <aside className="relative overflow-hidden rounded-[1.75rem] border border-ink/[0.07] bg-white/85 p-7 shadow-lift backdrop-blur">
      <div className="flex items-center gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white">
          <ServiceIcon name={service.icon} className="h-6 w-6" />
        </span>
        <p className="font-display text-xl leading-tight text-ink">At a glance</p>
      </div>
      <dl className="mt-7 space-y-6 text-[0.95rem]">
        <div>
          <dt className="text-eyebrow text-mist-600">Best for</dt>
          <dd className="mt-2 leading-relaxed text-ink">{service.audience.slice(0, 3).join(" · ")}</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-mist-600">Grounded in</dt>
          <dd className="mt-3 flex flex-wrap gap-2">
            {service.frameworks.map((f) => (
              <span key={f} className="rounded-full bg-brand-50 px-3 py-1.5 text-[0.8rem] font-medium text-brand-700">
                {f}
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-eyebrow text-mist-600">Engagement</dt>
          <dd className="mt-2 leading-relaxed text-ink">Assessment, project or ongoing advisory, on-site or virtual</dd>
        </div>
      </dl>
    </aside>
  );
}

export default function ServicePage({ slug }) {
  const s = getService(slug);
  const related = s.related.map(getService);

  return (
    <PageTransition>
      <PageHero
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: s.title, path: serviceHref(s.slug) },
        ]}
        eyebrow={s.eyebrow}
        title={s.headline}
        intro={s.intro}
        aside={<AtAGlance service={s} />}
      >
        <ButtonLink href="/contact">Discuss your goals</ButtonLink>
        <ButtonLink href={site.bookingUrl} variant="outline" icon="external">
          Schedule a call
        </ButtonLink>
      </PageHero>

      {/* Challenge */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <SectionLabel>The challenge</SectionLabel>
            <h2 className="mt-6 text-h2">{s.challenge.heading}</h2>
          </div>
          <div data-reveal style={{ "--d": "120ms" }} className="space-y-5 text-lead text-mist-600">
            {s.challenge.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </div>
        {s.challenge.stat && (
          <div className="container-x mt-14">
            <StatCallout />
          </div>
        )}
      </section>

      {/* What's included */}
      <section className="section-y">
        <div className="container-x">
          <div data-reveal className="max-w-2xl">
            <SectionLabel>What’s included</SectionLabel>
            <h2 className="mt-6 text-h2">How we help</h2>
            <p className="mt-5 text-lead text-mist-600">{s.summary}</p>
          </div>
          <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.included.map((item, i) => (
              <li
                key={item.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 90}ms` }}
                className="rounded-[1.75rem] border border-ink/[0.07] bg-white p-8 shadow-soft transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="font-display text-lg text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-h3">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-mist-600">{item.body}</p>
              </li>
            ))}
            <li data-reveal style={{ "--d": "180ms" }}>
              <Link
                href="/contact"
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] bg-brand-500 p-8 text-white transition-transform duration-500 hover:-translate-y-1"
              >
                <div aria-hidden="true" className="band-azure opacity-25" />
                <p className="relative font-display text-2xl leading-snug">
                  Not sure where to start? Tell us what you are trying to solve.
                </p>
                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-medium">
                  Start the conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* Approach */}
      <section className="section-y relative overflow-hidden bg-ink text-pearl">
        <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-[0.06]" />
        <div className="container-x relative">
          <div data-reveal className="max-w-2xl">
            <SectionLabel tone="azure">Our approach</SectionLabel>
            <h2 className="mt-6 text-h2 text-pearl">How an engagement unfolds</h2>
          </div>
          <div className="mt-14">
            <ProcessSteps steps={s.approach} dark />
          </div>
        </div>
      </section>

      {/* Outcomes and audience */}
      <section className="section-y">
        <div className="container-x grid gap-5 lg:grid-cols-2">
          <div data-reveal className="relative overflow-hidden rounded-[2rem] bg-brand-950 p-8 text-pearl md:p-12">
            <div aria-hidden="true" className="band-azure opacity-[0.12]" />
            <div className="relative">
              <SectionLabel tone="azure">Outcomes</SectionLabel>
              <h2 className="mt-6 text-h2 text-pearl">What you can expect</h2>
              <ul className="mt-9 space-y-5">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex gap-4 leading-relaxed text-pearl/90">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-azure-300 text-ink">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div data-reveal style={{ "--d": "120ms" }} className="rounded-[2rem] border border-ink/[0.07] bg-white p-8 md:p-12">
            <SectionLabel>Who it’s for</SectionLabel>
            <h2 className="mt-6 text-h2">Who we work with</h2>
            <ul className="mt-8 divide-y divide-ink/[0.07]">
              {s.audience.map((a) => (
                <li key={a} className="flex items-center gap-4 py-4 text-ink">
                  <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq
        items={s.faqs}
        heading={`Questions about ${s.topic}`}
        className="bg-white"
      />

      {/* Related services */}
      <section className="section-y">
        <div className="container-x">
          <div data-reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Related services</SectionLabel>
              <h2 className="mt-6 text-h2">Often paired with</h2>
            </div>
            <ButtonLink href="/services" variant="outline">
              All services
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((r, i) => (
              <ServiceCard
                key={r.slug}
                href={serviceHref(r.slug)}
                icon={r.icon}
                title={r.title}
                summary={r.summary}
                style={{ "--d": `${i * 90}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {s.healthTechBand && <HealthTechBand />}

      <CtaSection
        title={`Let’s talk about ${s.topic}`}
        body="Share a few details about your goals or challenges. We will review them and follow up with practical next steps."
      />

      <JsonLd data={serviceJsonLd(s)} />
    </PageTransition>
  );
}
