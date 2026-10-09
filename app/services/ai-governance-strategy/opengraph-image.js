import { renderOgImage } from "@/lib/og";
import { getService } from "@/lib/services";

const service = getService("ai-governance-strategy");

export const alt = "AI Governance & Strategy | LAI Healthcare Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({ eyebrow: "Services", title: service.title, subtitle: service.summary });
}
