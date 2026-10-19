import Image from "next/image";
import PageTransition from "@/components/page-transition";
import PageHero from "@/components/page-hero";
import SectionLabel from "@/components/section-label";
import { ButtonLink } from "@/components/button";
import Faq from "@/components/faq";
import CtaSection from "@/components/cta-section";
import HealthTechBand from "@/components/health-tech-band";
import { Calendar, Check, Compass, Graduation, Layers, Mic, Target, Users } from "@/components/icons";
import { founder, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Healthcare AI Keynote Speaker | Stephanie O. Frisch, PhD, RN",
  description:
    "Book Stephanie O. Frisch, PhD, RN, for evidence-based keynotes and workshops on responsible AI, nursing leadership, workforce transformation and clinical decision-making.",
  path: "/speaking",
});

const topics = [
  {
    title: "Responsible AI in healthcare: separating promise from hype",
    body: "What AI can and cannot do in clinical care today, how to tell a strong product from a weak one, and the governance every organization needs before it scales.",
    takeaways: [
      "The questions to ask before adopting any clinical AI tool",
      "Why models that perform well elsewhere can fail locally",
      "What responsible AI governance looks like in practice",
    ],
    audience: "Executive teams, boards, nursing and medical leadership",
  },
  {
    title: "Nursing leadership and workforce transformation",
    body: "How nurse leaders can shape AI adoption, redesign work and build teams that stay, drawn from frontline experience and current evidence.",
    takeaways: [
      "Where technology can genuinely give time back to nurses",
      "How to bring frontline staff into technology decisions",
      "Leadership habits that protect teams through change",
    ],
    audience: "Nursing conferences, chief nursing officer forums, leadership retreats",
  },
  {
    title: "From algorithm to bedside: building clinical AI that works",
    body: "Lessons from research on machine learning for emergency triage and ECG interpretation, and what they teach about validation, bias and adoption.",
    takeaways: [
      "How clinical prediction models are built and tested",
      "Why validation in your own population matters",
      "How to recognize and reduce bias in clinical data",
    ],
    audience: "Informatics, research, innovation and academic audiences",
  },
  {
    title: "Digital health, innovation and clinical excellence",
    body: "How to judge new digital tools against the standards that matter most: patient outcomes, safety and the clinician experience.",
    takeaways: [
      "A practical lens for evaluating digital health tools",
      "Designing pilots that produce trustworthy results",
      "Keeping safety and equity at the center of innovation",
    ],
    audience: "Quality, patient safety and innovation events",
  },
  {
    title: "Evidence-based decision-making for leaders",
    body: "A practical framework for making sound decisions with imperfect data, from reading research critically to building a culture of inquiry.",
    takeaways: [
      "How to question the evidence behind a proposal",
      "When a pilot is enough and when it is not",
      "Building a team culture of curiosity and inquiry",
    ],
    audience: "Leadership programs, academic and professional associations",
  },
];

const formats = [
  { icon: Mic, title: "Conference keynotes", body: "Opening and closing keynotes for regional, national and specialty conferences." },
  { icon: Compass, title: "Leadership retreats", body: "Interactive sessions for executive and nursing leadership teams." },
  { icon: Layers, title: "Workshops", body: "Half-day and full-day working sessions on AI governance, decision-making or leadership." },
  { icon: Users, title: "Panels and fireside chats", body: "Moderated conversations and expert panels on AI and the clinical workforce." },
  { icon: Graduation, title: "Grand rounds and education", body: "Clinical and academic sessions for hospitals, health systems and schools of nursing." },
  { icon: Target, title: "Virtual events", body: "Webinars and virtual keynotes designed to keep remote audiences engaged." },
];

const expectations = [
  "A planning call to understand your audience, theme and goals",
  "Content tailored to your event rather than a stock presentation",
  "Evidence-based material with practical takeaways attendees can use",
  "Learning objectives, an abstract and a speaker bio to support continuing education applications",
];

function SpeakerAside() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-brand-950 p-8 text-pearl shadow-lift md:p-9">
      <div aria-hidden="true" className="band-azure opacity-[0.12]" />
      <div className="relative flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-azure-300 text-ink">
          <Mic className="h-6 w-6" />
        </span>
        <div>
          <p className="font-display text-xl leading-tight">{founder.name}</p>
          <p className="mt-1 text-sm text-mist-300">{founder.credentials}</p>
        </div>
      </div>
      <dl className="relative mt-8 grid gap-5 border-t border-pearl/10 pt-6 text-[0.95rem]">
        <div>
          <dt className="text-eyebrow text-azure-300">Formats</dt>
          <dd className="mt-2 leading-relaxed text-pearl/90">Keynotes, workshops, panels, grand rounds and webinars</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-azure-300">Audiences</dt>
          <dd className="mt-2 leading-relaxed text-pearl/90">Nursing, executive, academic and health technology</dd>
        </div>
        <div>
          <dt className="text-eyebrow text-azure-300">Delivery</dt>
          <dd className="mt-2 leading-relaxed text-pearl/90">In person or virtual, tailored to your theme</dd>
        </div>
      </dl>
    </div>
  );
}

const speakingFaqs = [
  {
    q: "Does Stephanie speak virtually?",
    a: "Yes. Talks can be delivered in person or virtually, and virtual sessions are designed for remote engagement rather than adapted from a stage talk.",
  },
  {
    q: "Can a talk be customized for our audience?",
    a: "Every talk is tailored. We start with a planning conversation about your audience, theme and goals, then shape the content around them.",
  },
  {
    q: "How far in advance should we book?",
    a: "As early as you can, particularly for conferences. Use the scheduling link to check availability, or send an inquiry with your event date, location and audience.",
  },
  {
    q: "Can you support continuing education accreditation?",
    a: "Yes. We can provide learning objectives, a session abstract, references and a speaker bio to support your accreditation process.",
  },
];

export default function SpeakingPage() {
  return (
    <PageTransition>
      <PageHero
        breadcrumbs={[{ name: "Speaking", path: "/speaking" }]}
        eyebrow="Speaking engagements & keynotes"
        title="Keynotes on AI, nursing leadership and the future of care"
        intro="Healthcare is changing fast, and leaders need clarity they can trust. Stephanie O. Frisch, PhD, RN, delivers evidence-based talks that cut through the hype, challenge assumptions and leave audiences with practical next steps."
        aside={<SpeakerAside />}
      >
        <ButtonLink href={site.bookingUrl} icon="external">
          Check availability
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline" icon={null}>
          Send a speaking inquiry
        </ButtonLink>
      </PageHero>

      {/* Speaker */}
      <section className="section-y bg-white">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div data-reveal className="relative mx-auto w-full max-w-md">
            <div aria-hidden="true" className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-brand-500" />
            <div className="relative overflow-hidden rounded-[2.25rem] shadow-lift">
              <Image
                src={founder.image}
                alt="Keynote speaker Stephanie O. Frisch, PhD, RN"
                width={founder.imageWidth}
                height={founder.imageHeight}
                sizes="(min-width: 1024px) 28rem, 90vw"
                className="h-auto w-full"
              />
            </div>
          </div>
          <div data-reveal style={{ "--d": "120ms" }}>
            <SectionLabel>Meet the speaker</SectionLabel>
            <h2 className="mt-6 text-h2">A speaker who has done the work</h2>
            <div className="mt-6 space-y-5 text-lead text-mist-600">
              <p>
                Stephanie brings a rare mix of perspectives to the stage: years of critical care, emergency and flight
                nursing; leadership in Level I emergency and trauma settings; and research on machine learning for
                emergency triage at the University of Pittsburgh.
              </p>
              <p>
                Audiences get the clinical reality behind the headlines, explained clearly and without jargon, along
                with practical steps they can take back to their organizations.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["PhD, University of Pittsburgh", "MSN, Duke University", "RWJF Future of Nursing Scholar", "CEN · CCRN-K"].map(
                (c) => (
                  <li key={c} className="rounded-full border border-brand-500/25 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
                    {c}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-y">
        <div className="container-x">
          <div data-reveal className="max-w-2xl">
            <SectionLabel rule>Signature topics</SectionLabel>
            <h2 className="mt-6 text-h2">Talks built around what your audience needs to know</h2>
            <p className="mt-5 text-lead text-mist-600">
              Each topic can be delivered as a keynote, workshop or panel, and adapted to your theme.
            </p>
          </div>
          <ol className="mt-14 grid gap-5">
            {topics.map((t, i) => (
              <li
                key={t.title}
                data-reveal
                className="grid gap-8 rounded-[2rem] border border-ink/[0.07] bg-white p-8 shadow-soft md:grid-cols-[auto_1.2fr_1fr] md:p-10"
              >
                <span className="font-display text-4xl leading-none text-brand-500/40 md:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-h3">{t.title}</h3>
                  <p className="mt-3 leading-relaxed text-mist-600">{t.body}</p>
                  <p className="mt-5 text-sm text-mist-600">
                    <span className="font-medium text-ink">Ideal for:</span> {t.audience}
                  </p>
                </div>
                <div className="rounded-[1.5rem] bg-pearl p-6">
                  <p className="text-eyebrow text-brand-600">Audiences leave with</p>
                  <ul className="mt-4 space-y-3">
                    {t.takeaways.map((k) => (
                      <li key={k} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink/85">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Formats */}
      <section className="section-y relative overflow-hidden bg-ink text-pearl">
        <div aria-hidden="true" className="absolute inset-0 bg-dots opacity-[0.06]" />
        <div className="container-x relative">
          <div data-reveal className="max-w-2xl">
            <SectionLabel tone="azure">Formats</SectionLabel>
            <h2 className="mt-6 text-h2 text-pearl">On stage, in the room or online</h2>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {formats.map((f, i) => (
              <li
                key={f.title}
                data-reveal
                style={{ "--d": `${(i % 3) * 90}ms` }}
                className="rounded-[1.75rem] border border-pearl/10 bg-white/[0.04] p-7 transition-colors hover:border-azure-300/40"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-azure-300 text-ink">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-h3 text-pearl">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-mist-300">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expectations */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <SectionLabel>For event organizers</SectionLabel>
            <h2 className="mt-6 text-h2">What you can expect</h2>
            <p className="mt-5 text-lead text-mist-600">
              From the first call to the final slide, the goal is a session your audience remembers and uses.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={site.bookingUrl} icon="external">
                Check availability
              </ButtonLink>
            </div>
          </div>
          <ul data-reveal style={{ "--d": "120ms" }} className="grid gap-4">
            {expectations.map((e) => (
              <li key={e} className="flex gap-4 rounded-[1.5rem] border border-ink/[0.07] bg-white p-6">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                  <Calendar className="h-4 w-4" />
                </span>
                <span className="leading-relaxed text-ink/85">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={speakingFaqs} heading="Booking questions" className="bg-white" />

      <div className="pt-24 md:pt-32">
        <HealthTechBand />
        <CtaSection
          title="Planning an event? Let’s talk."
          body="Share your date, audience and theme, and we will follow up with availability and ideas for a session that fits."
          primary={{ label: "Send a speaking inquiry", href: "/contact" }}
          secondary={{ label: "Check availability", href: site.bookingUrl }}
        />
      </div>
    </PageTransition>
  );
}
