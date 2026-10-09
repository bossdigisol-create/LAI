import { renderOgImage } from "@/lib/og";

export const alt = "LAI Healthcare Solutions: clinician-led healthcare AI strategy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Clinician-led consulting",
    title: "AI strategy you can trust. Clinical outcomes you can measure.",
    subtitle: "Responsible AI, clinical informatics, workforce and leadership consulting for health systems.",
  });
}
