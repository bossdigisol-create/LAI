// The brand guide's signature device: a rounded pill tag, optionally sitting on a hairline rule.
export default function SectionLabel({ children, tone = "brand", rule = false, filled = false, className = "" }) {
  const tones = {
    brand: filled ? "bg-brand-500 text-white border-brand-500" : "border-brand-500/50 text-brand-600 bg-white/70",
    light: filled ? "bg-pearl text-ink border-pearl" : "border-pearl/35 text-pearl bg-white/5",
    azure: filled ? "bg-azure-300 text-ink border-azure-300" : "border-azure-300/60 text-azure-300 bg-white/5",
  };
  const ruleColor = { brand: "text-brand-500", light: "text-pearl", azure: "text-azure-300" }[tone];

  const pill = (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-eyebrow backdrop-blur-sm ${tones[tone]}`}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );

  if (!rule) return <div className={className}>{pill}</div>;
  return <div className={`pill-rule ${ruleColor} ${className}`}>{pill}</div>;
}
