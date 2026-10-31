import ServicePage, { serviceMetadata } from "@/components/service-page";

const slug = "ai-translation-change-management";

export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
