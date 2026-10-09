import ServicePage, { serviceMetadata } from "@/components/service-page";

const slug = "leadership-mentorship-development";

export const metadata = serviceMetadata(slug);

export default function Page() {
  return <ServicePage slug={slug} />;
}
