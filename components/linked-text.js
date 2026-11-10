import Link from "next/link";

const linkClass =
  "font-medium text-brand-600 underline decoration-brand-500/40 underline-offset-4 transition-colors hover:decoration-brand-600";

// Renders plain text with selected phrases turned into links, so content can stay as
// simple strings (which also feed structured data) while still carrying inline links.
// links: [{ text: "exact phrase in the string", href: "/path" or "https://..." }]
export default function LinkedText({ text, links = [] }) {
  if (!links.length) return text;

  const parts = [];
  let rest = text;
  for (const link of links) {
    const i = rest.indexOf(link.text);
    if (i === -1) continue;
    if (i > 0) parts.push(rest.slice(0, i));
    parts.push(link);
    rest = rest.slice(i + link.text.length);
  }
  if (rest) parts.push(rest);

  return parts.map((part, i) => {
    if (typeof part === "string") return part;
    if (part.href.startsWith("/")) {
      return (
        <Link key={i} href={part.href} className={linkClass}>
          {part.text}
        </Link>
      );
    }
    return (
      <a key={i} href={part.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
        {part.text}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  });
}
