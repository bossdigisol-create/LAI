import { founder, site } from "./site";

const absolute = (path = "/") => new URL(path, site.url).toString();

// Builds page metadata. Per-page openGraph replaces the root object, so shared fields are repeated here.
export function pageMetadata({ title, description, path = "/", absoluteTitle = false, type = "website" }) {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: site.name,
      locale: "en_US",
      title: absoluteTitle ? title : `${title} | ${site.name}`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ? title : `${title} | ${site.name}`,
      description,
    },
  };
}

const organizationId = absolute("/#organization");
const founderId = absolute("/about#stephanie-frisch");

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    alternateName: "LAI",
    url: site.url,
    logo: absolute("/brand/lai-logo.png"),
    image: absolute("/brand/lai-logo.png"),
    description: site.description,
    slogan: site.tagline,
    email: site.email,
    foundingDate: site.foundingYear,
    areaServed: { "@type": "Country", name: site.areaServed },
    founder: { "@id": founderId },
    sameAs: [site.social.linkedin],
    knowsAbout: [
      "Healthcare artificial intelligence",
      "AI governance",
      "Clinical informatics",
      "Clinical analytics",
      "Nursing workforce optimization",
      "Nursing leadership development",
      "Evidence-based practice",
      "Nursing research",
      "Healthcare technology strategy",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      areaServed: "US",
      availableLanguage: ["English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absolute("/#website"),
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": organizationId },
    inLanguage: "en-US",
  };
}

export function founderJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": founderId,
    name: founder.name,
    honorificSuffix: founder.credentials,
    jobTitle: "Founder",
    description: founder.shortBio,
    image: absolute(founder.image),
    url: absolute("/about"),
    worksFor: { "@id": organizationId },
    alumniOf: founder.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    hasCredential: founder.certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: c.name,
    })),
    knowsAbout: [
      "Emergency nursing",
      "Critical care nursing",
      "Machine learning for emergency triage",
      "Responsible AI in healthcare",
      "Nursing leadership",
    ],
  };
}

export function serviceJsonLd(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absolute(`/services/${service.slug}#service`),
    name: service.title,
    serviceType: service.seoTitle,
    description: service.metaDescription,
    url: absolute(`/services/${service.slug}`),
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: site.areaServed },
    audience: { "@type": "Audience", audienceType: service.audience.join(", ") },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
