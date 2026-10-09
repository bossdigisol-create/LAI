import Link from "next/link";
import PageTransition from "@/components/page-transition";
import PageHero from "@/components/page-hero";
import SectionLabel from "@/components/section-label";
import { ButtonLink } from "@/components/button";
import ProcessSteps from "@/components/process-steps";
import CtaSection from "@/components/cta-section";
import { ArrowRight, Check, ServiceIcon } from "@/components/icons";
import { services, speakingCard, serviceHref } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Healthcare AI, Informatics & Nursing Consulting Services",
  description:
    "Clinician-led consulting services: AI governance and strategy, healthcare AI implementation, clinical analytics and informatics, workforce optimization, leadership development and research strategy.",
  path: "/services",
});

const engagementModels = [
  {
    title: "Focused assessments",
    body: "A defined review of a specific question, such as AI readiness, governance maturity or staffing models, with clear recommendations.",
  },
  {
    title: "Project engagements",
    body: "Hands-on support to design and implement a solution, from governance programs to care model pilots.",
  },
  {
    title: "Ongoing advisory",
    body: "A clinical advisor for executives and boards as AI, workforce and quality decisions arise.",
  },
  {
    title: "Education and workshops",
    body: "AI literacy, leadership development and evidence-based practice sessions for your teams.",
  },
];

const startingPoints = [
  { need: "We need to govern the AI we already use", slug: "ai-governance-strategy" },
  { need: "We want to deploy a new AI tool safely", slug: "healthcare-ai-innovation" },
  { need: "Our data is not driving decisions", slug: "clinical-analytics-informatics" },
  { need: "Our staffing model is not working", slug: "workforce-optimization" },
  { need: "Our leaders need more support", slug: "leadership-mentorship-development" },
  { need: "We want research to change practice", slug: "research-strategy-evidence-translation" },
];

function WhereToStart() {
  return (
    <div className="rounded-[1.75rem] border border-ink/[0.07] bg-white/90 p-3 shadow-lift backdrop-blur">
      <p className="px-4 pb-2 pt-4 text-eyebrow text-mist-600">Where to start</p>
      <ul>
        {startingPoints.map((p) => (
          <li key={p.slug}>
            <Link
              href={serviceHref(p.slug)}
              className="group flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5 text-[0.95rem] text-ink transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              <span>“{p.need}”</span>
              <ArrowRight className="h-4 w-4 shrink-0 text-brand-500 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const approach = [
  { title: "Listen and assess", body: "Interviews, workflow observation and a review of your data, tools and governance." },
  { title: "Design the strategy", body: "A prioritized roadmap with owners, measures and the governance to support it." },
  { title: "Implement and validate", body: "Pilot, test and refine alongside your teams, with frontline staff involved throughout." },
  { title: "Measure and sustain", body: "Track outcomes, build internal capability and hand over the tools to keep improving." },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHero
        breadcrumbs={[{ name: "Services", path: "/services" }]}
        eyebrow="Services"
        title="Consulting for safer, smarter, more human care"
        intro="From AI governance to workforce design, every service is led by clinical expertise and grounded in evidence. Engage us for a focused assessment, a defined project or ongoing advisory support."
        aside={<WhereToStart />}
      >
        <ButtonLink href="/contact">Book a consultation</ButtonLink>
        <ButtonLink href="#services-list" variant="outline" icon={null}>
          Browse services
        </ButtonLink>
      </PageHero>

      <section id="services-list" className="section-y bg-white">
        <div className="container-x">
          <ul className="grid gap-5 lg:grid-cols-2">
            {services.map((s, i) => (
              <li key={s.slug} data-reveal style={{ "--d": `${(i % 2) * 100}ms` }}>
                <Link
                  href={serviceHref(s.slug)}
                  className="group flex h-full flex-col rounded-[2rem] border border-ink/[0.07] bg-pearl p-8 transition-[transform,box-shadow,border-color,background-color] duration-500 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-lift md:p-10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500 text-white">
                      <ServiceIcon name={s.icon} className="h-7 w-7" />
                    </span>
                    <span className="font-display text-sm text-mist-500">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="mt-8 text-[clamp(1.45rem,1.2rem+0.9vw,1.95rem)] leading-[1.2] tracking-[-0.01em]">
                    {s.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-mist-600">{s.summary}</p>
                  <ul className="mt-7 grid gap-3 border-t border-ink/[0.07] pt-7">
                    {s.included.slice(0, 3).map((item) => (
                      <li key={item.title} className="flex gap-3 text-[0.95rem] text-ink/85">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                        {item.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-brand-600">
                    Explore {s.topic}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
            <li data-reveal className="lg:col-span-2">
              <Link
                href={speakingCard.href}
                className="group relative isolate flex flex-col gap-6 overflow-hidden rounded-[2rem] bg-brand-950 p-8 text-pearl transition-transform duration-500 hover:-translate-y-1 md:flex-row md:items-center md:justify-between md:p-10"
              >
                <div aria-hidden="true" className="band-azure -z-10 opacity-[0.14]" />
                <div className="flex items-start gap-6">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-azure-300 text-ink">
                    <ServiceIcon name={speakingCard.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h2 className="text-h3 text-pearl">{speakingCard.title}</h2>
                    <p className="mt-2 max-w-2xl leading-relaxed text-mist-300">{speakingCard.summary}</p>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-azure-300">
                  Explore speaking
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal>
            <SectionLabel>Ways to work with us</SectionLabel>
            <h2 className="mt-6 text-h2">Engagements sized to the question</h2>
            <p className="mt-5 text-lead text-mist-600">
              Some organizations need a fresh perspective on one decision. Others want a partner for a multi-year
              transformation. We shape every engagement around your goals, timeline and internal capacity.
            </p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {engagementModels.map((m, i) => (
              <li
                key={m.title}
                data-reveal
                style={{ "--d": `${(i % 2) * 100}ms` }}
                className="rounded-[1.75rem] border border-ink/[0.07] bg-white p-7 shadow-soft"
              >
                <span className="font-display text-lg text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-h3">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-mist-600">{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y relative overflow-hidden bg-ink text-pearl">
        <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-[0.06]" />
        <div className="container-x relative">
          <div data-reveal className="max-w-2xl">
            <SectionLabel tone="azure">How we work</SectionLabel>
            <h2 className="mt-6 text-h2 text-pearl">The same discipline, every engagement</h2>
          </div>
          <div className="mt-14">
            <ProcessSteps steps={approach} dark />
          </div>
        </div>
      </section>

      <div className="pt-24 md:pt-32">
        <CtaSection
          title="Not sure which service fits?"
          body="Tell us what you are trying to solve. We will point you to the right starting place, even if it is not us."
        />
      </div>
    </PageTransition>
  );
}
