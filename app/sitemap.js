import { services } from "@/lib/services";
import { founder, site } from "@/lib/site";

// Update when page content changes materially.
const LAST_UPDATED = "2026-11-01";

const absolute = (path) => new URL(path, site.url).toString();

export default function sitemap() {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...services.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
    { path: "/about", priority: 0.8, images: [absolute(founder.image)] },
    { path: "/speaking", priority: 0.8, images: [absolute(founder.image)] },
    { path: "/contact", priority: 0.7 },
    { path: "/legal", priority: 0.2, changeFrequency: "yearly" },
  ];

  return pages.map(({ path, priority, changeFrequency = "monthly", images }) => ({
    url: absolute(path),
    lastModified: LAST_UPDATED,
    changeFrequency,
    priority,
    ...(images ? { images } : {}),
  }));
}
