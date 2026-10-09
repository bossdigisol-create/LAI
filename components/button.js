import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "./icons";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-offset-4 select-none whitespace-nowrap";

const sizes = {
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-7 text-base",
  sm: "h-10 px-5 text-sm",
};

const variants = {
  primary:
    "bg-brand-500 text-white shadow-glow hover:bg-brand-600 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-18px_rgb(96_92_240/0.7)] active:translate-y-0",
  dark: "bg-ink text-pearl hover:bg-mist-800 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-ink/15 bg-white/60 text-ink backdrop-blur hover:border-brand-500 hover:text-brand-600 hover:-translate-y-0.5 active:translate-y-0",
  light: "bg-pearl text-ink hover:bg-white hover:-translate-y-0.5 active:translate-y-0",
  "outline-light":
    "border border-pearl/30 text-pearl hover:border-pearl hover:bg-pearl/10 hover:-translate-y-0.5 active:translate-y-0",
};

// One component for internal links, external links and mailto links, styled as buttons.
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = "arrow",
  className = "",
  external,
  ...rest
}) {
  const isExternal = external ?? /^(https?:|mailto:)/.test(href);
  const Icon = icon === "external" ? ArrowUpRight : icon === "arrow" ? ArrowRight : null;
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {Icon && (
        <Icon className="h-[1.1em] w-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
        {newTab && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
