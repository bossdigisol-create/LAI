// Service pages that lived at the site root on the previous WordPress site.
const legacyServiceSlugs = [
  "ai-governance-strategy",
  "clinical-analytics-informatics",
  "healthcare-ai-innovation",
  "research-strategy-evidence-translation",
  "workforce-optimization",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  // Inlined at build time so the footer year needs no request-time work.
  env: {
    BUILD_YEAR: String(new Date().getFullYear()),
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Keep links and rankings from the WordPress site working after the move.
  async redirects() {
    return [
      { source: "/speaking-engagements-keynotes", destination: "/speaking", permanent: true },
      ...legacyServiceSlugs.map((slug) => ({
        source: `/${slug}`,
        destination: `/services/${slug}`,
        permanent: true,
      })),
      // Leadership Mentorship & Development was retired as a service.
      { source: "/leadership-mentorship-development", destination: "/services", permanent: true },
      { source: "/services/leadership-mentorship-development", destination: "/services", permanent: true },
      { source: "/classes", destination: "/contact", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/about", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
