# LAI Healthcare Solutions website

Marketing website for [LAI Healthcare Solutions](https://www.laihealthcaresolutions.com), a clinician-led consultancy
for healthcare AI innovation, health tech start-up advisory, AI translation and change management, clinical
informatics, workforce optimization, research strategy and AI governance. Rebuilt from WordPress on Next.js with the new LAI brand identity.

## Stack

- **Next.js 16** (App Router, JavaScript) with Cache Components and Partial Prefetching. Every page is fully
  prerendered (`ensureStatic = "navigation"` in `app/layout.js`), so the site is served as static HTML.
- **React 19** with the **React Compiler** enabled.
- **Tailwind CSS v4** with brand tokens in `app/globals.css`.
- **Lenis** for smooth wheel scrolling, React `<ViewTransition>` for page transitions and a lightweight
  IntersectionObserver for scroll reveals. All motion respects `prefers-reduced-motion`.
- Contact form built on a Server Action that sends email through the Resend HTTP API.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used in metadata, sitemap and structured data. Defaults to `https://www.laihealthcaresolutions.com`. |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) for contact form delivery. |
| `CONTACT_TO_EMAIL` | Inbox that receives contact form messages. Defaults to `hello@laihealthcaresolutions.com`. |
| `CONTACT_FROM_EMAIL` | Sender address on a domain verified in Resend. |

Without `RESEND_API_KEY`, the contact form logs submissions to the server console in development and shows visitors
a "please email us directly" message in production. **Verify the sending domain in Resend before launch**, otherwise
messages will not be delivered.

## Where to edit content

| What | File |
| --- | --- |
| Company details, email, booking link, social links, founder credentials, publications and articles | `lib/site.js` |
| All seven service pages (copy, deliverables, FAQs, SEO titles and descriptions) and their display order | `lib/services.js` |
| "For healthcare companies" section (home page plus services flagged with `healthTechBand`) | `components/health-tech-band.js` |
| Home page sections | `app/page.js` |
| About, Speaking, Contact, Legal pages | `app/<page>/page.js` |
| Navigation, footer | `components/site-header.js`, `components/site-footer.js` |
| Share images (Open Graph) | `opengraph-image.js` files next to each page, rendered by `lib/og.js` |

## Brand system

From the LAI brand guide:

| Token | Hex | Use |
| --- | --- | --- |
| Electric Purple | `#605cf0` | Primary brand color, buttons, accents |
| Azure Blue | `#88cdf6` | Secondary brand color, highlights on dark backgrounds |
| Charcoal Black | `#171a18` | Body text, dark sections, footer |
| Pearl White | `#f7faf8` | Page background |

Tints and neutral scales are defined in `app/globals.css` and were checked against WCAG AA contrast.

**Typography.** Body text uses **Poppins**, as specified. The brand's heading face, *CDA Independence Display*, is
not available for web licensing here, so headings use **Piazzolla**, the closest open-source match (flared stems,
wedge serifs, similar weight). If you hold a web license for CDA Independence Display, add the font files to the
project and swap the `Piazzolla` import in `app/layout.js` for `next/font/local`.

**Logos.** The logo is rendered from vector paths extracted from the original `.ai` source file
(`components/logo-paths.js`), so it stays sharp at every size and can switch between the purple, white and charcoal
variations through CSS. Standalone files are in `public/brand/`.

## SEO

- Unique titles, descriptions and canonical URLs on every page, plus per-page Open Graph images.
- JSON-LD structured data: Organization, WebSite, Person (founder), Service, FAQPage and BreadcrumbList.
- `sitemap.xml`, `robots.txt` and a web app manifest are generated from `app/sitemap.js`, `app/robots.js` and
  `app/manifest.js`. Update `LAST_UPDATED` in `app/sitemap.js` when content changes.
- Permanent redirects from the old WordPress URLs (for example `/ai-governance-strategy/` →
  `/services/ai-governance-strategy`) live in `next.config.mjs`.

## Deploying to Vercel

1. Import the GitHub repository in Vercel (framework preset: Next.js).
2. Add every environment variable above in **Project → Settings → Environment Variables**.
3. Add the custom domain and point DNS at Vercel.
4. After the first deploy, submit the contact form and confirm the email arrives, and submit
   `https://www.laihealthcaresolutions.com/sitemap.xml` in Google Search Console.

## Before launch: items to confirm with LAI

- Founder biography, credentials and career details were compiled from Stephanie's public profiles and publications.
  Please review them for accuracy and current titles.
- The previous site claimed "100+ hospitals and startups". It has been left out because it could not be verified.
  Add it back, along with client logos or testimonials, once there is permission to publish them.
- Review the privacy policy and terms in `app/legal/page.js` with legal counsel.
- Replace the scheduling link (`bookingUrl` in `lib/site.js`) with the booking page Stephanie uses with her current
  calendar once she confirms it. It is the single link used for consultations and speaking requests site-wide.
- Swap in the updated founder photo when Stephanie provides it (`public/images/`, referenced by `founder.image` in
  `lib/site.js`).
- Replace `founder.linkedin` in `lib/site.js` with Stephanie's personal LinkedIn profile URL. The "Founded by" link on
  the home page points to the LAI company page until then.
- Review the copy for the new AI Translation & Change Management service (`lib/services.js`), drafted from the
  client's feedback.
- Review the "Other authored work" list on the About page (`articles` and `otherPublications` in `lib/site.js`).
- Update the LAI LinkedIn page with the new branding and logo.
