import { researchJournals } from "@/lib/site";

// Journals that have published the founder's research, shown as text only.
export default function JournalMarquee() {
  const items = researchJournals.concat(researchJournals);
  return (
    <section aria-labelledby="research-heading" className="border-y border-ink/[0.07] bg-white/70 py-8">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <h2 id="research-heading" className="shrink-0 text-eyebrow font-sans text-mist-600 md:max-w-[12rem] md:leading-relaxed">
          Stephanie’s research has appeared in
        </h2>
        <div className="marquee relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <ul className="sr-only">
            {researchJournals.map((j) => (
              <li key={j}>{j}</li>
            ))}
          </ul>
          <div aria-hidden="true" className="marquee-track flex w-max items-center gap-12 pr-12">
            {items.map((j, i) => (
              <span key={`${j}-${i}`} className="flex items-center gap-12 whitespace-nowrap font-display text-xl text-ink/75 md:text-2xl">
                {j}
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500/60" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
