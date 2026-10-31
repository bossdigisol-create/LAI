import { renderOgImage } from "@/lib/og";

export const alt = "About LAI Healthcare Solutions and founder Stephanie Frisch, PhD, RN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "About LAI",
    title: "Built by clinicians. Designed for innovative healthcare.",
    subtitle: "Founded by Stephanie Frisch, PhD, MSN, RN, CEN, CCRN-K.",
  });
}
