import SectionLabel from "./section-label";
import { ButtonLink } from "./button";
import { Layers, Stethoscope, Target } from "./icons";
import { serviceHref } from "@/lib/services";

const pillars = [
  {
    icon: Stethoscope,
    title: "Clinical lens",
    body: "Product and workflow decisions checked against how care is actually delivered.",
  },
  {
    icon: Layers,
    title: "Operational expertise",
    body: "Implementation and adoption plans built on how hospitals really run.",
  },
  {
    icon: Target,
    title: "Growth strategy",
    body: "Positioning and evidence that earn the trust of health system buyers.",
  },
];

// Appears on every main page so healthcare companies know LAI consults for them, not only for providers.
export default function HealthTechBand() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container-x">
        <div
          data-reveal
          className="grid gap-10 rounded-[2rem] border border-ink/[0.07] bg-white p-7 shadow-soft sm:p-10 md:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16"
        >
          <div>
            <SectionLabel>For healthcare companies</SectionLabel>
            <h2 className="mt-6 text-h2">Building for healthcare? We advise health tech companies too.</h2>
            <p className="mt-5 text-lead text-mist-600">
              Healthcare tech start-ups, established health tech companies and healthcare-related businesses get a
              clinical lens, operational expertise and growth strategy from clinicians who have worked inside the
              system.
            </p>
            <div className="mt-8">
              <ButtonLink href={serviceHref("health-tech-advisory")}>Explore health tech advisory</ButtonLink>
            </div>
          </div>
          <ul className="grid gap-4">
            {pillars.map((p) => (
              <li key={p.title} className="flex gap-5 rounded-[1.5rem] bg-pearl p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-azure-100 text-azure-700">
                  <p.icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block font-display text-xl leading-snug text-ink">{p.title}</span>
                  <span className="mt-1.5 block leading-relaxed text-mist-600">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
