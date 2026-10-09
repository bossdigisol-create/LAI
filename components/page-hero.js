import SectionLabel from "./section-label";
import Breadcrumbs from "./breadcrumbs";

// Opening section for inner pages. Animates on load with CSS so it never waits for JavaScript.
export default function PageHero({ eyebrow, title, intro, breadcrumbs, children, aside, compact = false }) {
  return (
    <section
      className={`relative overflow-hidden pt-[calc(var(--header-h)+3rem)] md:pt-[calc(var(--header-h)+4.5rem)] ${
        compact ? "pb-10 md:pb-14" : "pb-16 md:pb-24"
      }`}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid" />
      <div
        aria-hidden="true"
        className="absolute -top-48 right-[-12%] h-[34rem] w-[34rem] rounded-full bg-azure-300/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-[-18%] h-[26rem] w-[26rem] rounded-full bg-brand-300/20 blur-3xl"
      />
      <div className="container-x relative">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <div className={aside ? "grid gap-12 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:gap-16" : ""}>
          <div>
            {eyebrow && <SectionLabel className="rise-in">{eyebrow}</SectionLabel>}
            <h1 className="rise-in mt-6 max-w-4xl text-h1 text-ink" style={{ "--d": "80ms" }}>
              {title}
            </h1>
            {intro && (
              <p className="rise-in mt-6 max-w-2xl text-lead text-mist-600" style={{ "--d": "160ms" }}>
                {intro}
              </p>
            )}
            {children && (
              <div className="rise-in mt-9 flex flex-wrap gap-3" style={{ "--d": "240ms" }}>
                {children}
              </div>
            )}
          </div>
          {aside && (
            <div className="rise-in" style={{ "--d": "320ms" }}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
