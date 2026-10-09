import PageTransition from "@/components/page-transition";
import PageHero from "@/components/page-hero";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy & Terms of Use",
  description:
    "How LAI Healthcare Solutions handles personal information, the terms for using this website, our professional disclaimer and our accessibility commitment.",
  path: "/legal",
});

const EFFECTIVE_DATE = "October 9, 2026";

const toc = [
  { id: "privacy", label: "Privacy policy" },
  { id: "terms", label: "Terms of use" },
  { id: "disclaimer", label: "Professional disclaimer" },
  { id: "accessibility", label: "Accessibility" },
];

function Block({ title, children }) {
  return (
    <div className="mt-10">
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <div className="mt-3 space-y-4 leading-relaxed text-mist-600">{children}</div>
    </div>
  );
}

const mail = (
  <a href={`mailto:${site.email}`} className="font-medium text-brand-600 underline underline-offset-2">
    {site.emailDisplay}
  </a>
);

export default function LegalPage() {
  return (
    <PageTransition>
      <PageHero
        breadcrumbs={[{ name: "Privacy & terms", path: "/legal" }]}
        eyebrow="Legal"
        title="Privacy policy and terms of use"
        intro={`How we handle your information and the terms that apply when you use this website. Effective ${EFFECTIVE_DATE}.`}
        compact
      />

      <section className="pb-24 md:pb-32">
        <div className="container-x grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
          <nav aria-label="On this page" className="lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:self-start">
            <p className="text-eyebrow text-mist-600">On this page</p>
            <ul className="mt-4 space-y-2 border-l border-ink/10">
              {toc.map((t) => (
                <li key={t.id}>
                  <a
                    href={`#${t.id}`}
                    className="-ml-px block border-l border-transparent py-1 pl-4 text-[0.95rem] text-mist-600 transition-colors hover:border-brand-500 hover:text-brand-600"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-3xl">
            <article id="privacy" className="rounded-[2rem] border border-ink/[0.07] bg-white p-7 sm:p-10">
              <h2 className="text-h2">Privacy policy</h2>
              <p className="mt-5 leading-relaxed text-mist-600">
                {site.name} (“LAI”, “we”, “us”) provides consulting, education and speaking services to healthcare
                organizations. This policy explains how we handle personal information collected through this website.
              </p>

              <Block title="Information we collect">
                <p>
                  <strong className="font-medium text-ink">Information you give us.</strong> When you use our contact
                  form we collect your name, email address and message, along with your organization, role and phone
                  number if you choose to provide them. We also receive the information you include when you email us
                  or book a call through our scheduling page.
                </p>
                <p>
                  <strong className="font-medium text-ink">Technical information.</strong> Like most websites, our
                  hosting provider automatically processes technical data such as your IP address, browser type and
                  the pages you request, so the site can be delivered securely. We do not use advertising cookies,
                  tracking pixels or cross-site tracking on this website.
                </p>
              </Block>

              <Block title="How we use information">
                <p>
                  We use the information you provide to respond to your inquiry, schedule and deliver services,
                  communicate about an engagement, keep the website secure and meet our legal obligations. We do not
                  sell personal information, and we do not share it with third parties for their own marketing.
                </p>
              </Block>

              <Block title="Service providers">
                <p>
                  We rely on trusted providers to run this website and our communications, including website hosting,
                  email delivery for contact form messages and an online scheduling service. They process information
                  only on our behalf and for these purposes. Our scheduling page and social media profiles are operated
                  by third parties and are governed by their own privacy policies.
                </p>
              </Block>

              <Block title="Patient and health information">
                <p>
                  This website is not designed to collect protected health information. Please do not include patient
                  names or any other patient information in messages sent through the site. If an engagement requires
                  access to protected health information, it will be governed by a separate written agreement, such as
                  a business associate agreement where required.
                </p>
              </Block>

              <Block title="Retention and security">
                <p>
                  We keep inquiry information only as long as needed to respond and to maintain reasonable business
                  records, then delete it. We use reasonable safeguards to protect personal information, though no
                  method of transmission or storage is completely secure.
                </p>
              </Block>

              <Block title="Your choices">
                <p>
                  You may ask us to access, correct or delete personal information you have shared with us by emailing{" "}
                  {mail}. We will respond as required by applicable law. This website is not directed to children, and
                  we do not knowingly collect information from them.
                </p>
              </Block>

              <Block title="Changes to this policy">
                <p>
                  We may update this policy from time to time. When we do, we will post the revised version here and
                  update the effective date above.
                </p>
              </Block>
            </article>

            <article id="terms" className="mt-6 rounded-[2rem] border border-ink/[0.07] bg-white p-7 sm:p-10">
              <h2 className="text-h2">Terms of use</h2>
              <p className="mt-5 leading-relaxed text-mist-600">
                By using this website you agree to these terms. If you do not agree, please do not use the site.
              </p>

              <Block title="Information only">
                <p>
                  Content on this website describes our services and shares general perspectives on healthcare,
                  technology and leadership. It is provided for information only. Visiting the site, sending us a
                  message or attending a presentation does not create a consulting or professional relationship. Any
                  engagement is governed by a separate written agreement.
                </p>
              </Block>

              <Block title="Intellectual property">
                <p>
                  The text, graphics, logos and design of this website belong to {site.name} or its licensors. You are
                  welcome to share links and brief excerpts with attribution. Please contact us before reproducing
                  content for any other purpose.
                </p>
              </Block>

              <Block title="Links to other websites">
                <p>
                  This website links to third-party sites, including research publishers, our scheduling page and
                  social media profiles. We are not responsible for the content or practices of those sites.
                </p>
              </Block>

              <Block title="No warranties and limitation of liability">
                <p>
                  The website is provided “as is” without warranties of any kind. To the fullest extent permitted by
                  law, {site.name} is not liable for any loss or damage arising from your use of the website or reliance
                  on its content.
                </p>
              </Block>

              <Block title="Changes to these terms">
                <p>
                  We may revise these terms at any time by updating this page. Continued use of the website means you
                  accept the current terms.
                </p>
              </Block>
            </article>

            <article id="disclaimer" className="mt-6 rounded-[2rem] border border-ink/[0.07] bg-white p-7 sm:p-10">
              <h2 className="text-h2">Professional disclaimer</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-mist-600">
                <p>
                  {site.name} provides consulting, education and speaking services to organizations. We do not provide
                  patient care, diagnosis or treatment through this website, and nothing on it is medical, legal or
                  regulatory advice for any individual or organization.
                </p>
                <p>
                  If you have a medical concern, contact a qualified healthcare professional. In an emergency, call 911
                  or your local emergency number.
                </p>
              </div>
            </article>

            <article id="accessibility" className="mt-6 rounded-[2rem] border border-ink/[0.07] bg-white p-7 sm:p-10">
              <h2 className="text-h2">Accessibility</h2>
              <div className="mt-5 space-y-4 leading-relaxed text-mist-600">
                <p>
                  We want this website to work for everyone. It is designed to follow the Web Content Accessibility
                  Guidelines (WCAG) 2.2 at level AA, including keyboard navigation, sufficient color contrast and
                  support for reduced-motion preferences.
                </p>
                <p>If anything on the site is difficult to use, please tell us at {mail} and we will help.</p>
              </div>
            </article>

            <p className="mt-8 text-sm text-mist-600">
              Questions about this page? Email {mail}.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
