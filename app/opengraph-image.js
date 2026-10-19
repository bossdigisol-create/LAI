import { renderOgImage } from "@/lib/og";

export const alt = "LAI Healthcare Solutions: clinician-led healthcare consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Clinician-led consulting",
    title: "Clinical expertise you can count on. Strategy driven by data and transparency.",
    subtitle: "Responsible AI and clinical strategy for health systems, and growth strategy for health tech companies.",
  });
}
