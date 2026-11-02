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
- Contact form built on a Server Action that sends email through Microsoft Graph (the client's Microsoft 365
  account), with the Resend HTTP API as an optional fallback (`lib/mailer.js`).

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
| `MS_TENANT_ID` | Microsoft Entra tenant (directory) ID. With the next two set, the contact form sends through Microsoft Graph. |
| `MS_CLIENT_ID` | Application (client) ID of the Entra app registration that has the `Mail.Send` application permission. |
| `MS_CLIENT_SECRET` | Client secret of that app registration. Secret: set it in Vercel only, never in a committed file. |
| `MAIL_SENDER_UPN` | Shared mailbox the form sends from (`lai-website@elevatelogisticsolutions.com`, display name "LAI Healthcare Solutions"). Never the recipient's own mailbox: Outlook files self-sent mail under "Note to self". |
| `MAIL_TO` | Inbox that receives contact form messages (`stephanie@elevatelogisticsolutions.com`). Falls back to `CONTACT_TO_EMAIL`, then `hello@laihealthcaresolutions.com`. |
| `RESEND_API_KEY` | Optional fallback. API key from [Resend](https://resend.com), used only when the Microsoft Graph variables are not set. |
| `CONTACT_TO_EMAIL` | Optional fallback. Inbox that receives contact form messages when `MAIL_TO` is not set. |
| `CONTACT_FROM_EMAIL` | Optional fallback. Resend sender address on a domain verified in Resend. |

The contact form uses Microsoft Graph when `MS_TENANT_ID`, `MS_CLIENT_ID` and `MS_CLIENT_SECRET` are all set, and
Resend when only `RESEND_API_KEY` is set. With neither, it logs submissions to the server console in development and
shows visitors a "please email us directly" message in production. Delivery failures are logged with the `[contact]`
prefix and include the provider's status code and error text (for example Microsoft's `ErrorAccessDenied`).

Messages arrive with the subject `LAI website inquiry: <topic> (<visitor name>)`, and Reply-To is set to the
visitor's email address.

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
- Review the copy for the new AI Translation & Change Management service (`lib/services.js`), drafted from the
  client's feedback.
- Review the "Other authored work" list on the About page (`articles` and `otherPublications` in `lib/site.js`).
- Update the LAI LinkedIn page with the new branding and logo.
