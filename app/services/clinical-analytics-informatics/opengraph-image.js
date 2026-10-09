import { renderOgImage } from "@/lib/og";
import { getService } from "@/lib/services";

const service = getService("clinical-analytics-informatics");

export const alt = "Clinical Analytics & Informatics | LAI Healthcare Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage({ eyebrow: "Services", title: service.title, subtitle: service.summary });
}
