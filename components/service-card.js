import Link from "next/link";
import { ArrowRight, ServiceIcon } from "./icons";

export default function ServiceCard({ href, icon, title, summary, index, className = "", style }) {
  return (
    <Link
      href={href}
      data-reveal
      style={style}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-ink/[0.07] bg-white p-7 shadow-soft transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift md:p-8 ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-500 group-hover:text-white">
          <ServiceIcon name={icon} className="h-6 w-6" />
        </span>
        {index != null && (
          <span className="font-display text-sm text-mist-500">{String(index).padStart(2, "0")}</span>
        )}
      </div>
      <h3 className="mt-8 text-h3 text-ink">{title}</h3>
      <p className="mt-3 flex-1 leading-relaxed text-mist-600">{summary}</p>
      <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-brand-600">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
