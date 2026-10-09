import { Piazzolla, Poppins } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import SmoothScroll from "@/components/smooth-scroll";
import RevealObserver from "@/components/reveal-observer";
import JsonLd from "@/components/json-ld";
import { mainNav, site } from "@/lib/site";
import { services, speakingCard } from "@/lib/services";
import { organizationJsonLd } from "@/lib/seo";

// Every page on this site is fully prerendered; the build fails if request-time work sneaks in.
export const ensureStatic = "navigation";

// Headings: Piazzolla stands in for the brand's CDA Independence Display (not available for web
// licensing here). Swap in the licensed font with next/font/local if it becomes available.
const display = Piazzolla({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-piazzolla",
  display: "swap",
});

// Body: Poppins, as specified in the brand guide.
const sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "LAI Healthcare Solutions | Clinician-Led Healthcare AI Strategy",
    template: "%s | LAI Healthcare Solutions",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "health",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  themeColor: "#f7faf8",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  // Only the fields the navigation needs are sent to the client component.
  const menuServices = services.map(({ slug, title, summary, icon }) => ({ slug, title, summary, icon }));

  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Lets CSS hide scroll-reveal content only when JavaScript is available to reveal it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="bg-pearl font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-pearl"
        >
          Skip to main content
        </a>
        <SmoothScroll />
        <RevealObserver />
        <SiteHeader
          nav={mainNav}
          services={menuServices}
          speaking={speakingCard}
          email={site.email}
          emailDisplay={site.emailDisplay}
        />
        <main id="main">{children}</main>
        <SiteFooter />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
