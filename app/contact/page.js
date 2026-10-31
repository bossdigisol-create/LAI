import PageTransition from "@/components/page-transition";
import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact-form";
import EmailText from "@/components/email-text";
import { ArrowUpRight, Calendar, LinkedIn, Mail } from "@/components/icons";
import { inquiryReasons, site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us | Book a Consultation",
  description:
    "Contact LAI Healthcare Solutions to discuss healthcare AI, health tech advisory, AI translation and change management, clinical informatics, workforce optimization, research strategy or a speaking engagement.",
  path: "/contact",
});

const nextSteps = [
  { title: "We review your note", body: "Stephanie and the team read every inquiry personally." },
  { title: "A short discovery call", body: "We talk through your goals, constraints and timeline." },
  { title: "A clear recommendation", body: "You receive a proposed scope and next steps, with no obligation." },
];

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact"
        title="Let’s build what your organization needs next."
        intro="If you are here, something in your organization is ready for its next step: clearer strategy, stronger leadership, safer systems, smarter use of AI or a healthcare product ready to grow. Share a few details and we will follow up with practical next steps."
        compact
      />

      <section className="pb-24 md:pb-32">
        <div className="container-x grid items-start gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div
            className="rise-in rounded-[2rem] border border-ink/[0.07] bg-white p-6 shadow-lift sm:p-10"
            style={{ "--d": "300ms" }}
          >
            <h2 className="text-h3">Send us a message</h2>
            <p className="mt-2 text-[0.95rem] text-mist-600">Fields marked with an asterisk are required.</p>
            <div className="relative mt-8">
              <ContactForm reasons={inquiryReasons} bookingUrl={site.bookingUrl} />
            </div>
          </div>

          <aside
            style={{ "--d": "400ms" }}
            className="rise-in grid gap-5 lg:sticky lg:top-[calc(var(--header-h)+1.5rem)]"
          >
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 p-8 text-pearl">
              <div aria-hidden="true" className="band-azure opacity-[0.14]" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-azure-300 text-ink">
                  <Calendar className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-display text-2xl leading-snug">Prefer to talk directly?</h2>
                <p className="mt-3 leading-relaxed text-mist-300">
                  Choose a time that works for you and book a call with our team.
                </p>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-pearl px-6 text-[0.95rem] font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-white"
                >
                  Schedule a call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-ink/[0.07] bg-white p-8">
              <h2 className="text-eyebrow font-sans text-mist-600">Email</h2>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 inline-flex items-start gap-3 font-medium text-ink hover:text-brand-600"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <EmailText email={site.emailDisplay} />
              </a>
              <h2 className="mt-8 text-eyebrow font-sans text-mist-600">Follow</h2>
              <div className="mt-3 flex gap-3">
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white"
                >
                  <LinkedIn className="h-[1.05rem] w-[1.05rem]" />
                  <span className="sr-only">LinkedIn (opens in a new tab)</span>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-ink/[0.07] bg-white p-8">
              <h2 className="text-eyebrow font-sans text-mist-600">What happens next</h2>
              <ol className="mt-6 space-y-6">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 font-display text-sm text-brand-600">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-medium text-ink">{step.title}</span>
                      <span className="mt-1 block text-[0.95rem] leading-relaxed text-mist-600">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </PageTransition>
  );
}
