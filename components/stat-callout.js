import { governanceStat } from "@/lib/site";

// The HFMA adoption-versus-governance statistic, always shown with its source.
export default function StatCallout({ className = "" }) {
  return (
    <figure
      data-reveal
      className={`relative overflow-hidden rounded-[1.75rem] bg-brand-950 p-8 text-pearl md:p-10 ${className}`}
    >
      <div aria-hidden="true" className="band-azure opacity-[0.14]" />
      <div className="relative grid gap-8 sm:grid-cols-2">
        <div>
          <p className="font-display text-6xl leading-none text-azure-300 md:text-7xl">{governanceStat.adoption}</p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-mist-300">of health systems now use AI internally.</p>
        </div>
        <div>
          <p className="font-display text-6xl leading-none text-pearl md:text-7xl">{governanceStat.mature}</p>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-mist-300">
            have a mature governance structure and a fully formed AI strategy.
          </p>
        </div>
      </div>
      <figcaption className="relative mt-8 border-t border-pearl/10 pt-5 text-xs leading-relaxed text-mist-400">
        Source:{" "}
        <a
          href={governanceStat.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-pearl/30 underline-offset-2 hover:text-pearl"
        >
          {governanceStat.source}
        </a>
      </figcaption>
    </figure>
  );
}
