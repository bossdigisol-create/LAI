import ServicePage, { serviceMetadata } from "@/components/service-page";

const slug = "clinical-analytics-informatics";

export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
