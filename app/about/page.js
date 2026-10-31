import Image from "next/image";
import PageTransition from "@/components/page-transition";
import PageHero from "@/components/page-hero";
import SectionLabel from "@/components/section-label";
import { ButtonLink } from "@/components/button";
import CtaSection from "@/components/cta-section";
import JsonLd from "@/components/json-ld";
import { LogoMark } from "@/components/logo";
import { ArrowUpRight, Book, Check, Graduation, HeartPulse, Quote, Shield, Spark } from "@/components/icons";
import { articles, founder, otherPublications, publications, site } from "@/lib/site";
import { founderJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About LAI & Founder Stephanie Frisch, PhD, RN",
  description:
    "LAI Healthcare Solutions was founded by Stephanie Frisch, PhD, MSN, RN, CEN, CCRN-K, a critical care, emergency and flight nurse turned nurse scientist, AI researcher and healthcare technology executive.",
  path: "/about",
  type: "profile",
});

// Founder biography, grouped under the subheadings Stephanie provided.
const founderStory = [
  {
    heading: "From the bedside to healthcare innovation",
    subheading: "A career built at the intersection of healthcare, science and technology",
    paragraphs: [
      "Stephanie’s career reflects more than two decades of experience spanning clinical practice, nursing leadership, scientific research, healthcare technology and the clinical workforce. Her journey from the bedside to healthcare innovation has been driven by a commitment to understanding complex healthcare challenges and developing practical, data-driven solutions.",
      "Her career began in critical care, emergency and flight nursing, where she cared for critically ill patients in high-acuity environments. These experiences established her understanding of clinical decision-making, patient safety, healthcare workflows and the realities clinicians face every day.",
      "As she advanced into nursing leadership, her perspective expanded beyond individual patients to include clinical operations, workforce management, organizational strategy and healthcare system performance. She gained firsthand insight into how clinical workflows, organizational processes and technology influence both clinician experiences and patient outcomes.",
    ],
  },
  {
    heading: "Advancing healthcare through nursing science and AI",
    paragraphs: [
      "Driven by a desire to improve early recognition of critical illness, Stephanie pursued her PhD in Nursing Science at the University of Pittsburgh, where she was selected as a Robert Wood Johnson Foundation (RWJF) Future of Nursing Scholar and received predoctoral and postdoctoral research funding.",
      "Her doctoral research was supported by a competitive fellowship from the National Institutes of Health’s National Institute of Nursing Research (NINR), funding her development of predictive machine learning algorithms designed to identify critically ill patients and recognize time-sensitive conditions, including acute coronary syndrome, at emergency department arrival.",
      "Following her doctoral training, Stephanie completed an RWJF-funded postdoctoral fellowship in biomedical informatics at the University of Pittsburgh School of Medicine. Her research focused on applying natural language processing (NLP) and machine learning to validate a predictive tool for identifying acute coronary syndrome at emergency department triage, using clinical documentation and objective patient data.",
      "This work strengthened her expertise in artificial intelligence, predictive analytics, clinical data science and translating complex research into solutions with practical clinical applications.",
    ],
  },
  {
    heading: "Translating clinical expertise into healthcare technology",
    paragraphs: [
      "Building on her clinical, leadership and scientific foundation, Stephanie transitioned into healthcare technology, where she brought a unique perspective to the development, implementation and scaling of technology-enabled healthcare solutions.",
      "Working across engineering, product development, client success and integration teams, she recognized a persistent challenge: healthcare and technology often speak different languages, even when working toward the same goal.",
      "Technology teams understand how to build solutions. Clinicians understand the complexities of delivering care. Healthcare executives understand organizational priorities and operational constraints. Yet successful innovation requires these perspectives to be connected.",
      "Stephanie’s multidisciplinary background allows her to bridge these worlds, translating clinical needs into technical requirements, aligning product strategy with operational realities and helping cross-functional teams develop solutions grounded in real-world healthcare delivery.",
    ],
  },
  {
    heading: "The foundation of LAI Healthcare Solutions",
    paragraphs: [
      "Stephanie founded LAI Healthcare Solutions to address this disconnect between healthcare and technology.",
      "Drawing on her experience as a bedside nurse, nursing leader, nurse scientist and healthcare technology executive, she recognized the need for a partner capable of connecting clinical expertise, scientific evidence, operational strategy and technical innovation.",
      "LAI Healthcare Solutions works with healthcare organizations and technology companies to translate complex clinical challenges into actionable strategies, guide AI and technology development, and support meaningful implementation.",
      "Her career reflects a defining belief: healthcare innovation should not be driven by technological capabilities alone. It must also be informed by the people delivering care, the systems in which they work and the patients those innovations are intended to serve.",
    ],
  },
];

const timeline = [
  {
    stage: "Critical care",
    body: "Began in the surgical intensive care unit at the University of Chicago and spent eight years across adult critical care units.",
  },
  {
    stage: "Emergency and flight nursing",
    body: "Moved into emergency nursing, flew as a flight nurse with STAT MedEvac and volunteered as an EMT.",
  },
  {
    stage: "Clinical leadership",
    body: "Served on the nursing leadership team of a Level I adult and pediatric emergency department in New York, worked in quality and patient safety, and served as Administrator on Duty at a Level I trauma center.",
  },
  {
    stage: "Research",
    body: "Earned her PhD in Artificial Intelligence and Nursing at the University of Pittsburgh as a Robert Wood Johnson Foundation Future of Nursing Scholar with NIH funding, then completed an RWJF postdoctoral research fellowship in biomedical informatics, natural language processing (NLP) and machine learning (ML).",
  },
  {
    stage: "Healthcare tech executive",
    body: "Led cross-functional teams across product development, engineering, client success and implementation, translating clinical insights into scalable technology solutions that improve healthcare operations, patient experiences and outcomes.",
  },
  {
    stage: "LAI Healthcare Solutions",
    body: "Founded LAI in 2024 to help healthcare organizations adopt technology responsibly and build stronger clinical systems.",
  },
];

const aboutFacts = [
  { label: "Founded", value: "2024" },
  { label: "Led by", value: "Clinical experience, scientific curiosity, and the courage to think differently" },
  { label: "Serving", value: "Health systems and healthcare companies across the U.S." },
];

function AboutAside() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div aria-hidden="true" className="absolute -inset-3 rotate-3 rounded-[2.25rem] bg-azure-300/70" />
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-500 p-8 text-white shadow-lift md:p-10">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-azure-300/30 blur-2xl"
        />
        <LogoMark decorative className="relative h-14 w-auto text-white" />
        <p className="relative mt-6 font-display text-2xl leading-snug">
          A name inspired by 3 kids. Built to challenge what healthcare could become.
        </p>
        <dl className="relative mt-8 grid gap-4 border-t border-white/25 pt-6">
          {aboutFacts.map((f) => (
            <div key={f.label} className="flex items-baseline justify-between gap-6">
              <dt className="shrink-0 text-sm text-white/80">{f.label}</dt>
              <dd className="text-right text-sm font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

const principles = [
  { title: "Clinicians stay in charge", body: "Technology should support clinical judgment, never replace it." },
  { title: "Evidence over enthusiasm", body: "We measure before and after, and we are honest about what the data shows." },
  { title: "Workflow first", body: "Fix the process, then add the tool." },
  { title: "Equity by design", body: "We check how tools perform for every population an organization serves." },
  { title: "Capability, not dependency", body: "We leave teams stronger and more self-sufficient than we found them." },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <PageHero
        breadcrumbs={[{ name: "About", path: "/about" }]}
        eyebrow="About LAI"
        title={site.tagline}
        intro="LAI Healthcare Solutions is a consulting firm rooted in nursing leadership, clinical research and responsible AI. We help healthcare organizations turn complexity into clarity, and we give healthcare tech start-ups and companies a clinical lens, operational expertise and growth strategy."
        aside={<AboutAside />}
      >
        <ButtonLink href="/contact">Work with us</ButtonLink>
        <ButtonLink href="/services" variant="outline" icon={null}>
          Our services
        </ButtonLink>
      </PageHero>

      {/* Story */}
      <section className="section-y bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div data-reveal>
            <SectionLabel>Our story</SectionLabel>
            <h2 className="mt-6 text-h2">Healthcare doesn’t have a technology problem. It has a translation problem.</h2>
          </div>
          <div data-reveal style={{ "--d": "120ms" }} className="space-y-6 text-lead text-mist-600">
            <p>
              Healthcare is evolving faster than the systems, workflows and workforce supporting it. As AI and emerging
              technologies reshape the industry, healthcare organizations face increasing pressure to innovate, improve
              efficiency and deliver better outcomes, often without the clinical and technical alignment needed to
              succeed.
            </p>
            <p className="font-medium text-ink">LAI Healthcare Solutions was founded to close that gap.</p>
            <p>
              We bridge healthcare and technology, translating real-world clinical challenges into actionable strategies
              and practical solutions. By connecting clinical expertise with engineering, product and operational teams,
              we help organizations move beyond the promise of innovation to meaningful, measurable impact.
            </p>
            <p>Because the future of healthcare shouldn’t be built without the people who understand it.</p>
            <p>
              The work is personal. Stephanie named LAI after her 3 kids, a reminder that the systems we build today
              shape the care the next generation will receive.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="stephanie-frisch" className="section-y">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div data-reveal className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <div className="relative mx-auto max-w-md">
              <div aria-hidden="true" className="absolute -inset-4 -rotate-3 rounded-[2.5rem] bg-azure-300/70" />
              <div className="relative overflow-hidden rounded-[2.25rem] shadow-lift">
                <Image
                  src={founder.image}
                  alt={`${founder.name}, ${founder.credentials}`}
                  width={founder.imageWidth}
                  height={founder.imageHeight}
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>

          <div data-reveal style={{ "--d": "120ms" }}>
            <SectionLabel>Founder</SectionLabel>
            <h2 className="mt-6 text-h2">{founder.name}</h2>
            <p className="mt-3 text-lg font-medium text-brand-600">{founder.credentials}</p>
            <div className="mt-10 space-y-10">
              {founderStory.map((part) => (
                <div key={part.heading}>
                  <h3 className="text-h3">{part.heading}</h3>
                  {part.subheading && <p className="mt-2 font-medium text-brand-600">{part.subheading}</p>}
                  <div className="mt-4 space-y-5 leading-relaxed text-mist-600">
                    {part.paragraphs.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="relative mt-10 rounded-[1.5rem] border border-brand-500/15 bg-white p-8 pl-[4.5rem] shadow-soft">
              <Quote className="absolute left-6 top-7 h-8 w-8 text-brand-500" />
              <p className="font-display text-[1.35rem] leading-snug text-ink">
                LAI Healthcare Solutions exists to ensure clinical insight is not an afterthought in healthcare
                innovation. It is part of the foundation.
              </p>
              <footer className="mt-3 text-sm text-mist-600">{founder.name}</footer>
            </blockquote>

            <div className="mt-10 grid gap-5">
              <div className="rounded-[1.5rem] border border-ink/[0.07] bg-white p-6">
                <div className="flex items-center gap-3 text-brand-600">
                  <Graduation className="h-5 w-5" />
                  <h3 className="text-eyebrow font-sans">Education</h3>
                </div>
                <ul className="mt-5 grid gap-5 sm:grid-cols-2">
                  {founder.education.map((e) => (
                    <li key={e.degree}>
                      <p className="font-medium text-ink">
                        {e.degree}, {e.school}
                      </p>
                      {e.field && <p className="text-sm font-medium text-brand-600">{e.field}</p>}
                      {e.details.map((d) => (
                        <p key={d} className="text-sm text-mist-600">
                          {d}
                        </p>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-ink/[0.07] bg-white p-6">
                <div className="flex items-center gap-3 text-brand-600">
                  <Shield className="h-5 w-5" />
                  <h3 className="text-eyebrow font-sans">Certifications &amp; recognition</h3>
                </div>
                <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {[
                    ...founder.certifications,
                    { abbr: "RWJF", name: "Future of Nursing Scholar" },
                    { abbr: "NIH", name: "NINR predoctoral fellowship (F31)" },
                  ].map((c) => (
                    <li key={c.abbr} className="flex gap-3 text-[0.95rem]">
                      <span className="w-16 shrink-0 font-medium text-ink">{c.abbr}</span>
                      <span className="text-mist-600">{c.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career path */}
      <section className="section-y relative overflow-hidden bg-ink text-pearl">
        <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-[0.06]" />
        <div className="container-x relative">
          <div data-reveal className="max-w-2xl">
            <SectionLabel tone="azure">Career path</SectionLabel>
            <h2 className="mt-6 text-h2 text-pearl">From the trauma bay to the data lab</h2>
            <p className="mt-5 text-lead text-mist-300">
              Each stage added a perspective that now shapes how LAI advises healthcare organizations.
            </p>
          </div>
          <ol className="relative mt-14 border-l border-pearl/15 pl-8 md:pl-12">
            {timeline.map((t, i) => (
              <li key={t.stage} data-reveal style={{ "--d": `${i * 80}ms` }} className="relative pb-12 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.6rem] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-azure-300 bg-ink md:-left-[3.6rem]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-azure-300" />
                </span>
                <p className="text-eyebrow text-azure-300">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-h3 text-pearl">{t.stage}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-mist-300">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Publications */}
      <section className="section-y">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div data-reveal className="max-w-2xl">
              <SectionLabel rule>Selected research</SectionLabel>
              <h2 className="mt-6 text-h2">Peer-reviewed work behind our approach</h2>
              <p className="mt-5 text-lead text-mist-600">
                A selection of Stephanie’s published research on emergency triage, clinical prediction and machine
                learning.
              </p>
            </div>
            <span data-reveal className="inline-flex items-center gap-2 text-sm text-mist-600">
              <HeartPulse className="h-5 w-5 text-brand-500" />
              Emergency triage &amp; clinical AI
            </span>
          </div>
          <ul className="mt-12 grid gap-4">
            {publications.map((p, i) => (
              <li key={p.doi} data-reveal style={{ "--d": `${(i % 3) * 70}ms` }}>
                <a
                  href={`https://doi.org/${p.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-4 rounded-[1.5rem] border border-ink/[0.07] bg-white p-6 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft md:grid-cols-[7rem_1fr_auto] md:items-center md:gap-8 md:p-7"
                >
                  <span className="font-display text-2xl text-brand-500">{p.year}</span>
                  <span>
                    <span className="block font-medium leading-snug text-ink transition-colors group-hover:text-brand-600">
                      {p.title}
                    </span>
                    <span className="mt-2 block text-sm text-mist-600">
                      <em className="not-italic font-medium text-ink/80">{p.journal}</em> · {p.role}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                    Read
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    <span className="sr-only">{p.title} (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Other authored work */}
      <section className="pb-24 md:pb-32">
        <div className="container-x">
          <div data-reveal className="max-w-2xl">
            <SectionLabel rule>Other authored work</SectionLabel>
            <h2 className="mt-6 text-h2">Writing for clinicians, leaders and researchers</h2>
            <p className="mt-5 text-lead text-mist-600">
              Articles and case studies on nursing and AI written for healthcare leaders, and more of the peer-reviewed
              research Stephanie has co-authored.
            </p>
          </div>
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-8">
            <div data-reveal>
              <h3 className="flex items-center gap-3 text-eyebrow font-sans text-brand-600">
                <Spark className="h-5 w-5" />
                Articles, case studies &amp; commentary
              </h3>
              <ul className="mt-5 grid gap-4">
                {articles.map((a) => (
                  <li key={a.url}>
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-[1.5rem] border border-ink/[0.07] bg-white p-6 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft md:p-7"
                    >
                      <span className="block text-sm text-mist-600">
                        <span className="font-medium text-ink/80">{a.outlet}</span> · {a.year}
                      </span>
                      <span className="mt-2 block font-display text-xl leading-snug text-ink transition-colors group-hover:text-brand-600">
                        {a.title}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                        Read article
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal style={{ "--d": "120ms" }}>
              <h3 className="flex items-center gap-3 text-eyebrow font-sans text-brand-600">
                <Book className="h-5 w-5" />
                More peer-reviewed research
              </h3>
              <ul className="mt-5 grid gap-4">
                {otherPublications.map((p) => (
                  <li key={p.doi}>
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-[1.5rem] border border-ink/[0.07] bg-white p-6 transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft md:p-7"
                    >
                      <span className="block text-sm text-mist-600">
                        <em className="not-italic font-medium text-ink/80">{p.journal}</em> · {p.year} · {p.role}
                      </span>
                      <span className="mt-2 block font-medium leading-snug text-ink transition-colors group-hover:text-brand-600">
                        {p.title}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600">
                        Read
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div data-reveal className="max-w-2xl">
            <SectionLabel>What guides us</SectionLabel>
            <h2 className="mt-6 text-h2">Five principles behind every engagement</h2>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((p, i) => (
              <li
                key={p.title}
                data-reveal
                style={{ "--d": `${i * 80}ms` }}
                className="flex flex-col rounded-[1.75rem] border border-ink/[0.07] bg-pearl p-7"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl leading-snug text-ink">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-mist-600">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="pt-24 md:pt-32">
        <CtaSection
          title="Let’s build what your organization needs next"
          body="Whether you are setting AI strategy, building a healthcare product or redesigning care, we would like to hear what you are working on."
        />
      </div>

      <JsonLd data={founderJsonLd()} />
    </PageTransition>
  );
}
