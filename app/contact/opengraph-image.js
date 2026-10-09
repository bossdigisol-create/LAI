import { renderOgImage } from "@/lib/og";

export const alt = "Contact LAI Healthcare Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Let’s build what your organization needs next",
    subtitle: "Book a consultation or send us a note about your goals.",
  });
}
