import { LOGO_VIEWBOX, MARK_PATHS, MARK_VIEWBOX, WORDMARK_PATHS } from "./logo-paths";

// Vector logo traced directly from the brand source file. Colour follows `currentColor`,
// so the same component serves the purple, white and charcoal variations.
// Pass `decorative` when the logo is ornamental so assistive technology skips it.
function a11yProps(decorative, title) {
  return decorative ? { "aria-hidden": true, focusable: "false" } : { role: "img", "aria-label": title };
}

export function Logo({ className = "", title = "LAI Healthcare Solutions", decorative = false }) {
  return (
    <svg viewBox={LOGO_VIEWBOX} className={className} fill="currentColor" {...a11yProps(decorative, title)}>
      {MARK_PATHS.concat(WORDMARK_PATHS).map((p, i) => (
        <path key={i} transform={p.t} d={p.d} />
      ))}
    </svg>
  );
}

export function LogoMark({ className = "", title = "LAI", decorative = false }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className={className} fill="currentColor" {...a11yProps(decorative, title)}>
      {MARK_PATHS.map((p, i) => (
        <path key={i} transform={p.t} d={p.d} />
      ))}
    </svg>
  );
}
