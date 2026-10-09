import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/page-transition";
import SectionLabel from "@/components/section-label";
import { ButtonLink } from "@/components/button";
import HeroPortrait from "@/components/hero-portrait";
import JournalMarquee from "@/components/journal-marquee";
import EcgLine from "@/components/ecg-line";
import StatCallout from "@/components/stat-callout";
import ServiceCard from "@/components/service-card";
import ProcessSteps from "@/components/process-steps";
import Faq from "@/components/faq";
import CtaSection from "@/components/cta-section";
import JsonLd from "@/components/json-ld";
import {
  ArrowRight,
  Check,
  Cpu,
  Graduation,
  Hospital,
  Layers,
  Quote,
  Scale,
  ServiceIcon,
  Stethoscope,
  Target,
  Users,
} from "@/components/icons";
import { services, speakingCard, serviceHref } from "@/lib/services";
import { founder, site } from "@/lib/site";
import { pageMetadata, websiteJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LAI Healthcare Solutions | Clinician-Led Healthcare AI Strategy",
  absoluteTitle: true,
  description:
    "Clinician-led consulting for responsible healthcare AI. AI governance, clinical informatics, nursing workforce optimization and leadership development for hospitals and health systems.",
  path: "/",
});

const painPoints = [
  {
    title: "Too much technology, not enough clarity",
    body: "New tools arrive faster than teams can evaluate or absorb them, and no one can say with confidence which ones are worth keeping.",
  },
  {
    title: "Workflows that were never designed for the tool",
    body: "Bottlenecks, workarounds and alert fatigue follow when technology is layered onto broken processes instead of fixing them first.",
  },
  {
    title: "Decisions made without clinical grounding",
    body: "Leaders are asked to approve AI without the evidence, governance or frontline insight they need to decide well.",
  },
];

const approach = [
  {
    title: "Listen and assess",
    body: "We start on the ground with interviews, workflow observation and a review of your data, tools and governance.",
  },
  {
    title: "Design the strategy",
    body: "You get a prioritized roadmap with clear owners, measures and the governance to support it.",
  },
  {
    title: "Implement and validate",
    body: "We work alongside your teams to pilot, test and refine, with frontline staff involved at every step.",
  },
  {
    title: "Measure and sustain",
    body: "We track outcomes, build internal capability and hand over the tools to keep improving.",
  },
];

const differentiators = [
  {
    icon: Stethoscope,
    title: "Clinicians in the room",
    body: "Our perspective comes from years of bedside care and nursing leadership, so recommendations account for how work actually gets done.",
  },
  {
    icon: Target,
    title: "Evidence before enthusiasm",
    body: "A researcher’s discipline shapes every decision: clear baselines, honest evaluation and no claims the data cannot support.",
  },
  {
    icon: Scale,
    title: "Independent advice",
    body: "We are not a technology vendor. Recommendations follow your goals and the evidence, not a product we need to sell.",
  },
  {
    icon: Layers,
    title: "Capability that stays",
    body: "We build skills, structures and tools your teams own, so progress continues after our work is done.",
  },
];

const audiences = [
  {
    icon: Hospital,
    title: "Hospitals and health systems",
    body: "AI governance, implementation, analytics and workforce strategy, from community hospitals to multi-hospital systems.",
  },
  {
    icon: Graduation,
    title: "Academic medical centers and schools of nursing",
    body: "Research strategy, evidence translation, academic-practice partnerships and AI education.",
  },
  {
    icon: Users,
    title: "Physician and ambulatory practices",
    body: "Practical AI readiness, workflow redesign and responsible adoption sized for smaller teams.",
  },
  {
    icon: Cpu,
    title: "Health technology companies",
    body: "Clinical workflow insight, validation design and preparation for health system governance review.",
  },
];

const homeFaqs = [
  {
    q: "What does LAI Healthcare Solutions do?",
    a: "We are a clinician-led consulting firm. We help healthcare organizations adopt AI responsibly, strengthen clinical analytics and informatics, optimize the nursing workforce, develop leaders and translate research into practice. We also deliver keynotes and education on these topics.",
  },
  {
    q: "Who founded LAI Healthcare Solutions?",
    a: "LAI was founded by Stephanie O. Frisch, PhD, MSN, RN, CEN, CCRN-K. Stephanie is a critical care, emergency and flight nurse who became a nurse scientist, researching machine learning for emergency triage at the University of Pittsburgh.",
  },
  {
    q: "What difference does a clinician-led approach make?",
    a: "Clinicians understand the workflows, risks and culture that technology has to fit into. That perspective helps organizations avoid tools that impress in a demonstration but fail on the unit, and design governance that frontline staff trust.",
  },
  {
    q: "Do you work on-site or remotely?",
    a: "Both. Many engagements combine virtual work with on-site visits for observation, workshops and key meetings. We work with organizations across the United States.",
  },
  {
    q: "How do we get started?",
    a: "Book a consultation or send a note through our contact form. We will set up an initial conversation to understand your goals and then recommend a scope that fits.",
  },
];

export default function HomePage() {
  const [featured, ...rest] = services;
  const spans = ["lg:col-span-7", "lg:col-span-7", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden pb-8 pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4rem)]">
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />
        <div aria-hidden="true" className="absolute -top-64 right-[-10%] h-[44rem] w-[44rem] rounded-full bg-azure-300/35 blur-3xl" />
        <div aria-hidden="true" className="absolute left-[-22%] top-32 h-[32rem] w-[32rem] rounded-full bg-brand-300/20 blur-3xl" />

        <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
          <div>
            <SectionLabel className="rise-in">Clinician-led healthcare AI</SectionLabel>
            <h1 className="rise-in mt-7 text-display text-ink" style={{ "--d": "80ms" }}>
              <span className="block">AI strategy you can trust.</span>
              <span className="block text-brand-500">Clinical outcomes you can measure.</span>
            </h1>
            <p className="rise-in mt-7 max-w-xl text-lead text-mist-600" style={{ "--d": "170ms" }}>
              We help hospitals, health systems and academic medical centers adopt AI responsibly, redesign the
              workflows around it and develop the leaders who make change last, with bedside experience and research
              rigor behind every recommendation.
            </p>
            <div className="rise-in mt-10 flex flex-wrap gap-3" style={{ "--d": "250ms" }}>
              <ButtonLink href="/contact" size="lg">
                Book a consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="lg" icon={null}>
                Explore our services
              </ButtonLink>
            </div>
            <p className="rise-in mt-12 max-w-xl border-l-2 border-brand-500/40 pl-5 text-[0.95rem] leading-relaxed text-mist-600" style={{ "--d": "330ms" }}>
              Founded by <span className="font-medium text-ink">{founder.name}, {founder.credentials}</span>, a
              critical care and emergency nurse turned AI researcher.
            </p>
          </div>
          <HeroPortrait />
        </div>

        <div className="relative mt-16 md:mt-10">
          <EcgLine id="hero-ecg" className="h-auto w-full" delay={500} />
        </div>
      </section>

      <JournalMarquee />

      {/* The challenge */}
      <section className="section-y">
        <div className="container-x">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div data-reveal>
              <SectionLabel>The challenge</SectionLabel>
              <h2 className="mt-6 text-h2">AI isn’t the problem. The approach is.</h2>
              <p className="mt-6 text-lead text-mist-600">
                Healthcare teams are being asked to adopt more technology, faster, with fewer people. When tools arrive
                without a clear strategy, clinical input or a plan for the workflow around them, the result is wasted
                spend, frustrated staff and risk nobody signed up for.
              </p>
              <p className="mt-5 leading-relaxed text-mist-600">
                LAI helps close that gap as a partner, not another vendor, so the technology you choose actually
                serves your patients and the people caring for them.
              </p>
            </div>
            <StatCallout />
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {painPoints.map((p, i) => (
              <article
                key={p.title}
                data-reveal
                style={{ "--d": `${i * 100}ms` }}
                className="rounded-[1.75rem] border border-ink/[0.07] bg-white p-8 shadow-soft"
              >
                <span className="font-display text-lg text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-h3">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-mist-600">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-y relative overflow-hidden bg-white">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div data-reveal className="max-w-2xl">
              <SectionLabel rule>What we do</SectionLabel>
              <h2 className="mt-6 text-h2">Where clinical expertise meets responsible AI</h2>
              <p className="mt-5 text-lead text-mist-600">
                Seven ways we help healthcare organizations make technology work for patients and for the people who
                care for them.
              </p>
            </div>
            <div data-reveal style={{ "--d": "120ms" }}>
              <ButtonLink href="/services" variant="outline" icon="arrow">
                All services
              </ButtonLink>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            <Link
              href={serviceHref(featured.slug)}
              data-reveal
              className="group relative isolate flex flex-col overflow-hidden rounded-[1.75rem] bg-brand-950 p-8 text-pearl transition-transform duration-500 hover:-translate-y-1 md:col-span-2 md:p-10 lg:col-span-5 lg:row-span-2"
            >
              <div
                aria-hidden="true"
                className="band-azure -z-10 opacity-[0.16] transition-opacity duration-500 [clip-path:polygon(0_88%,100%_60%,100%_72%,0_100%)] group-hover:opacity-25"
              />
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-azure-300 text-ink">
                  <ServiceIcon name={featured.icon} className="h-6 w-6" />
                </span>
                <span className="font-display text-sm text-azure-300">01</span>
              </div>
              <h3 className="mt-10 text-[clamp(1.7rem,1.3rem+1.4vw,2.4rem)] leading-[1.1] tracking-[-0.02em] text-pearl">
                {featured.title}
              </h3>
              <p className="mt-4 leading-relaxed text-mist-300">{featured.summary}</p>
              <ul className="mt-8 space-y-3 border-t border-pearl/10 pt-8">
                {featured.included.slice(0, 4).map((item) => (
                  <li key={item.title} className="flex gap-3 text-[0.95rem] text-pearl/90">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-azure-300" />
                    {item.title}
                  </li>
                ))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-2 pt-10 text-sm font-medium text-azure-300">
                Explore AI governance
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>

            {rest.map((s, i) => (
              <ServiceCard
                key={s.slug}
                href={serviceHref(s.slug)}
                icon={s.icon}
                title={s.title}
                summary={s.summary}
                index={i + 2}
                className={spans[i]}
                style={{ "--d": `${(i % 3) * 90}ms` }}
              />
            ))}

            <Link
              href={speakingCard.href}
              data-reveal
              className="group relative flex flex-col gap-6 overflow-hidden rounded-[1.75rem] border border-ink/[0.07] bg-pearl p-8 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-lift md:col-span-2 md:flex-row md:items-center md:justify-between md:p-10 lg:col-span-12"
            >
              <div className="flex items-start gap-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-500 text-white">
                  <ServiceIcon name={speakingCard.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-h3">{speakingCard.title}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-mist-600">{speakingCard.summary}</p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand-600">
                Explore speaking topics
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-y relative overflow-hidden bg-ink text-pearl">
        <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-[0.06]" />
        <div className="container-x relative">
          <div data-reveal className="max-w-2xl">
            <SectionLabel tone="azure">How we work</SectionLabel>
            <h2 className="mt-6 text-h2 text-pearl">A clear path from question to measurable result</h2>
            <p className="mt-5 text-lead text-mist-300">
              Every engagement is scoped to your goals. The discipline behind it stays the same.
            </p>
          </div>
          <div className="mt-14">
            <ProcessSteps steps={approach} dark />
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-y relative overflow-hidden">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal className="relative mx-auto w-full max-w-md">
            <div aria-hidden="true" className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-brand-500" />
            <div className="relative overflow-hidden rounded-[2.25rem] shadow-lift">
              <Image
                src={founder.image}
                alt="Portrait of Stephanie O. Frisch"
                width={founder.imageWidth}
                height={founder.imageHeight}
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="aspect-[4/4.4] h-auto w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 rounded-2xl bg-white px-5 py-4 shadow-lift sm:-right-8">
              <p className="font-display text-3xl leading-none text-brand-500">PhD</p>
              <p className="mt-1 text-xs text-mist-600">University of Pittsburgh</p>
            </div>
          </div>

          <div data-reveal style={{ "--d": "120ms" }}>
            <SectionLabel>Meet the founder</SectionLabel>
            <h2 className="mt-6 text-h2">Built by a clinician who has worked on both sides of the algorithm</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-mist-600">
              <p>
                Stephanie O. Frisch began her career in the surgical ICU and went on to work in emergency departments,
                as a flight nurse and in nursing leadership for Level I emergency and trauma programs. Those years
                showed her how quickly decisions are made at the bedside, and how much they depend on the right
                information arriving at the right moment.
              </p>
              <p>
                As a nurse scientist at the University of Pittsburgh, she studied how machine learning could help
                triage nurses recognize critically ill patients sooner. She saw how much these tools could offer, and
                how often they faltered for lack of clinical insight. LAI exists to close that gap.
              </p>
            </div>
            <blockquote className="relative mt-9 rounded-[1.5rem] bg-brand-50 p-7 pl-16">
              <Quote className="absolute left-5 top-6 h-8 w-8 text-brand-500" />
              <p className="font-display text-[1.35rem] leading-snug text-ink">
                Healthcare doesn’t have a technology problem. It has a translation problem.
              </p>
              <footer className="mt-3 text-sm text-mist-600">{founder.name}</footer>
            </blockquote>
            <div className="mt-9">
              <ButtonLink href="/about" variant="dark">
                Read Stephanie’s story
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Why LAI */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div data-reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel className="flex justify-center">Why LAI</SectionLabel>
            <h2 className="mt-6 text-h2">A partner who understands the work</h2>
            <p className="mt-5 text-lead text-mist-600">
              Healthcare leaders do not need another vendor pitch. They need someone who knows the unit, the evidence
              and the stakes.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <article
                key={d.title}
                data-reveal
                style={{ "--d": `${i * 90}ms` }}
                className="rounded-[1.75rem] border border-ink/[0.07] bg-pearl p-7 transition-colors duration-500 hover:border-brand-200 hover:bg-brand-50/60"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-600 shadow-soft">
                  <d.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-7 text-h3">{d.title}</h3>
                <p className="mt-3 leading-relaxed text-mist-600">{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div data-reveal className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
            <SectionLabel>Who we serve</SectionLabel>
            <h2 className="mt-6 text-h2">For the organizations that deliver and shape care</h2>
            <p className="mt-5 text-lead text-mist-600">
              From multi-hospital systems to the teams building the next generation of clinical tools, our work adapts
              to your size, maturity and goals.
            </p>
            <div className="mt-9">
              <ButtonLink href="/contact">Talk to us about your goals</ButtonLink>
            </div>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2">
            {audiences.map((a, i) => (
              <li
                key={a.title}
                data-reveal
                style={{ "--d": `${(i % 2) * 100}ms` }}
                className="rounded-[1.75rem] border border-ink/[0.07] bg-white p-7 shadow-soft"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-azure-100 text-azure-700">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-h3">{a.title}</h3>
                <p className="mt-3 leading-relaxed text-mist-600">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Speaking */}
      <section className="relative isolate overflow-hidden bg-brand-950 text-pearl">
        <div aria-hidden="true" className="band-azure -z-10 opacity-[0.12]" />
        <div className="container-x section-y grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div data-reveal>
            <SectionLabel tone="azure">Speaking</SectionLabel>
            <h2 className="mt-6 text-h2 text-pearl">Bring evidence-based clarity to your next event</h2>
            <p className="mt-6 text-lead text-mist-300">
              Stephanie speaks to nursing, executive and academic audiences about responsible AI, the future of the
              clinical workforce and leading through change. Every talk is grounded in research and real clinical
              experience, and tailored to the room.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/speaking" variant="light">
                Explore speaking topics
              </ButtonLink>
              <ButtonLink href={site.bookingUrl} variant="outline-light" icon="external">
                Check availability
              </ButtonLink>
            </div>
          </div>
          <ul data-reveal style={{ "--d": "120ms" }} className="grid gap-3">
            {[
              "Responsible AI in healthcare",
              "Nursing leadership and workforce transformation",
              "From algorithm to bedside",
              "Digital health and clinical excellence",
              "Evidence-based decision-making for leaders",
            ].map((topic, i) => (
              <li
                key={topic}
                className="flex items-center justify-between gap-4 rounded-2xl border border-pearl/10 bg-white/[0.04] px-6 py-5 transition-colors hover:border-azure-300/50 hover:bg-white/[0.07]"
              >
                <span className="font-display text-lg text-pearl md:text-xl">{topic}</span>
                <span className="font-display text-sm text-azure-300">{String(i + 1).padStart(2, "0")}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={homeFaqs} intro="Short answers to the questions healthcare leaders ask us most." />

      <CtaSection />

      <JsonLd data={websiteJsonLd()} />
    </PageTransition>
  );
}
