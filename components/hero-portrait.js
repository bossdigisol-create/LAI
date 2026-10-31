import Image from "next/image";
import { founder } from "@/lib/site";
import { HeartPulse } from "./icons";

// Founder portrait framed with brand shapes. It is the page's largest image, so it loads eagerly.
export default function HeroPortrait() {
  return (
    <div className="rise-in relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem]" style={{ "--d": "220ms" }}>
      <div aria-hidden="true" className="absolute -inset-3 rotate-[-4deg] rounded-[2.6rem] bg-azure-300/70 sm:-inset-4" />
      <div aria-hidden="true" className="absolute -right-8 -top-8 hidden h-32 w-32 bg-dots opacity-80 sm:block" />

      <div className="relative overflow-hidden rounded-[2.25rem] bg-brand-100 shadow-lift">
        <Image
          src={founder.image}
          alt={`${founder.name}, PhD, RN, founder of LAI Healthcare Solutions`}
          width={founder.imageWidth}
          height={founder.imageHeight}
          sizes="(min-width: 1024px) 30rem, (min-width: 640px) 26rem, 90vw"
          loading="eager"
          fetchPriority="high"
          className="h-auto w-full"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-ink/70 via-ink/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="font-display text-2xl leading-tight text-pearl">{founder.name}</p>
          <p className="mt-1 text-sm text-pearl/80">{founder.credentials}</p>
        </div>
      </div>

      <div className="float-slow absolute -left-2 -top-9 max-w-[11.5rem] rounded-2xl border border-ink/5 bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:-left-10 sm:top-8 sm:max-w-[12.5rem]">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-mist-600">Research published in</p>
        <p className="mt-1 font-display text-[0.95rem] leading-snug text-ink">European Heart Journal &amp; Nature Communications</p>
      </div>

      <div className="float-slower absolute -right-3 bottom-28 flex items-center gap-3 rounded-2xl bg-brand-950 px-4 py-3 text-pearl shadow-lift sm:-right-8">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-azure-300 text-ink">
          <HeartPulse className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-[0.7rem] uppercase tracking-[0.12em] text-azure-300">Bedside to boardroom</span>
          <span className="block text-sm font-medium">ICU, ED &amp; flight nurse</span>
        </span>
      </div>
    </div>
  );
}
