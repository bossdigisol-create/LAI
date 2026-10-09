import { renderOgImage } from "@/lib/og";

export const alt = "About LAI Healthcare Solutions and founder Stephanie O. Frisch, PhD, RN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({
    eyebrow: "About LAI",
    title: "Built by clinicians. Designed for the future of care.",
    subtitle: "Founded by Stephanie O. Frisch, PhD, MSN, RN, CEN, CCRN-K.",
  });
}
