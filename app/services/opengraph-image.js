import { renderOgImage } from "@/lib/og";

export const alt = "Consulting services from LAI Healthcare Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "Services",
    title: "Consulting for safer, smarter, more human care",
    subtitle: "Healthcare AI, health tech advisory, change management, analytics, workforce, research and governance.",
  });
}
