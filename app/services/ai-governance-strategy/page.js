import ServicePage, { serviceMetadata } from "@/components/service-page";

const slug = "ai-governance-strategy";

export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
