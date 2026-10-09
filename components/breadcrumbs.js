import Link from "next/link";
import JsonLd from "./json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

// Visible breadcrumb trail plus matching BreadcrumbList structured data.
export default function Breadcrumbs({ items }) {
  const trail = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="rise-in mb-8">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-mist-600">
          {trail.map((item, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="font-medium text-ink">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.path} className="link-underline hover:text-brand-600">
                    {item.name}
                  </Link>
                )}
                {!last && (
                  <span aria-hidden="true" className="text-mist-400">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(trail)} />
    </>
  );
}
