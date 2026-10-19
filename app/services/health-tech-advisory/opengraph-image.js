import { renderOgImage } from "@/lib/og";
import { getService } from "@/lib/services";

const service = getService("health-tech-advisory");

export const alt = "Health Tech & Start-up Advisory | LAI Healthcare Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({ eyebrow: "Services", title: service.title, subtitle: service.summary });
}
