import ServicePage, { serviceMetadata } from "@/components/service-page";

const slug = "workforce-optimization";

export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
