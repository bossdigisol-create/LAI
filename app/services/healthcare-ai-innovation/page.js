import ServicePage, { serviceMetadata } from "@/components/service-page";

const slug = "healthcare-ai-innovation";

export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
