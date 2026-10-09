// Numbered steps with a connecting rule on wide screens.
export default function ProcessSteps({ steps, dark = false }) {
  return (
    <ol className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <span
        aria-hidden="true"
        className={`absolute left-8 right-8 top-[3.25rem] hidden h-px lg:block ${
          dark
            ? "bg-linear-to-r from-azure-300/0 via-azure-300/50 to-azure-300/0"
            : "bg-linear-to-r from-brand-500/0 via-brand-500/40 to-brand-500/0"
        }`}
      />
      {steps.map((step, i) => (
        <li
          key={step.title}
          data-reveal
          style={{ "--d": `${i * 100}ms` }}
          className={`relative rounded-[1.75rem] border p-7 transition-transform duration-500 hover:-translate-y-1 ${
            dark ? "border-pearl/10 bg-white/[0.04]" : "border-ink/[0.07] bg-white shadow-soft"
          }`}
        >
          <span
            className={`relative z-10 grid h-12 w-12 place-items-center rounded-full font-display text-lg ${
              dark ? "bg-azure-300 text-ink" : "bg-brand-500 text-white"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-7 text-h3 ${dark ? "text-pearl" : "text-ink"}`}>{step.title}</h3>
          <p className={`mt-3 leading-relaxed ${dark ? "text-mist-300" : "text-mist-600"}`}>{step.body}</p>
        </li>
      ))}
    </ol>
  );
}
