import ServicePage, { serviceMetadata } from "@/components/service-page";

const slug = "research-strategy-evidence-translation";

export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
