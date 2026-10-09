import { renderOgImage } from "@/lib/og";

export const alt = "Healthcare AI keynote speaker Stephanie O. Frisch, PhD, RN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Speaking & keynotes",
    title: "Keynotes on AI, nursing leadership and the future of care",
    subtitle: "Evidence-based talks for nursing, executive and academic audiences.",
  });
}
