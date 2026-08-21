# True North Roofing — Website

A conversion-focused marketing site for True North Roofing (Asheville & Western NC),
built with Next.js 15 (App Router) + TypeScript.

**Design direction:** "Survey North" — the site reads like a field inspection report
rather than a brochure. Slate + bone + ember palette with the brand azure (`#008FFE`)
carried through from the logo, Archivo over IBM Plex Sans, and IBM Plex Mono on every
label and specification.

---

## 1. Safety notes (read first)

This project deliberately has **only three runtime dependencies**: `next`, `react` and
`react-dom` — all published by Vercel and Meta. Plus four `@types/*` dev dependencies
and TypeScript itself. No UI kit, no icon library, no animation library, no analytics
SDK, no random npm packages.

That is intentional. Supply-chain attacks in the npm ecosystem almost always arrive
through deep transitive dependencies of convenience packages. Keeping the tree this
shallow means there is very little surface to attack.

Everything else — the design system, animations, form handling, scroll reveals, the
FAQ accordion — is hand-written CSS and vanilla React in this repo. You can read all
of it.

Before you install, you can verify nothing unexpected is being pulled in:

```bash
npm install --dry-run          # see exactly what would be downloaded
npm audit                      # after install, check for known vulnerabilities
```

---

## 2. Running it locally

You need **Node.js 18.18 or newer** (Node 20 or 22 recommended). Get it from
<https://nodejs.org> — take the LTS build.

```bash
cd true-north-roofing
npm install
npm run dev
```

Then open <http://localhost:3000>.

Other commands:

```bash
npm run build       # production build — run this before deploying
npm run start       # serve the production build locally
npm run typecheck   # TypeScript check, no build
npm run lint        # Next.js lint (optional; will prompt to add ESLint config)
```

---

## 3. Before you launch — the punch list

These are the things that must be real before this site goes live. Nothing here is
cosmetic.

### Must do

- [ ] **Replace the placeholder reviews.** `lib/content.ts` → `reviews`. Three entries
      are marked `DRAFT — replace with real Google review`. Copy real reviews from your
      Google Business Profile **verbatim** — do not clean up the grammar. Imperfect
      wording is what makes a review read as real. Add the first name and town.
- [ ] **Confirm the email address.** `lib/site.ts` → `site.email` currently reads
      `office@truenorthroofingsolutions.com`. Change it if that is not a live inbox.
- [ ] **Add your Google Business Profile link.** `lib/site.ts` → `site.profiles.google`.
      This feeds the `sameAs` field in the schema markup and helps Google connect the
      site to the GBP listing.
- [ ] **Wire up the lead form** (see section 4). Until you do, the form falls back to
      opening the visitor's email client — functional, but you will lose leads.
- [ ] **Check the NAP.** Name, address and phone in `lib/site.ts` must match your Google
      Business Profile **character for character**. Inconsistent NAP is one of the most
      common local-SEO own-goals.

### Should do

- [ ] Add a street address in `lib/site.ts` → `site.address.street` if you list one
      publicly on GBP, and refine `site.geo` to your actual coordinates.
- [ ] Add Facebook / Instagram URLs to `site.profiles`.
- [ ] Add your GTM container ID (see section 5).
- [ ] Take a proper photo of a crew member with a visible CraftsmanCert badge. The About
      page currently uses a stock crew image, and a real one would carry more weight.
- [ ] Once you have 10+ real reviews, consider adding `aggregateRating` to the schema in
      `components/Schema.tsx`. It is deliberately left out for now — Google penalises
      self-serving review markup that is not backed by reviews shown on the page.

---

## 4. Connecting the lead form

The form posts JSON to whatever URL you put in `NEXT_PUBLIC_FORM_ENDPOINT`. Copy
`.env.example` to `.env.local` and fill it in.

The payload looks like:

```json
{
  "name": "Jane Doe",
  "phone": "(828) 555-0100",
  "email": "jane@example.com",
  "address": "12 Ridge Rd, Hendersonville",
  "service": "Roof replacement",
  "urgency": "Within the next month",
  "notes": "…",
  "source": "/roof-replacement",
  "submittedAt": "2026-08-06T14:22:11.000Z"
}
```

Options, easiest first:

| Service | What to do |
| --- | --- |
| **Formspree** | Create a form, paste `https://formspree.io/f/xxxxxxx` into the env var. Free tier is fine to start. |
| **Web3Forms** | Free, no account. Use `https://api.web3forms.com/submit` and add your access key as a hidden field. |
| **GoHighLevel** | Create an inbound webhook in a workflow, paste its URL. Leads land straight in your CRM. |
| **JobNimbus** | JobNimbus has no direct inbound webhook — put Zapier or Make in between. |
| **Netlify Forms** | Only if you host on Netlify. Add `data-netlify="true"` to the `<form>` in `components/LeadForm.tsx`. |

Note that `source` tells you which page the lead came from, which is genuinely useful
for deciding where to spend ad budget.

**Spam:** the form has a honeypot field that silently swallows bot submissions. Roofing
is one of the most bot-attacked verticals in paid search, so this matters. If you start
running significant ad spend, add reCAPTCHA v3 or Cloudflare Turnstile on top.

---

## 5. Analytics & conversion tracking

Put your GTM container ID in `NEXT_PUBLIC_GTM_ID` and the container loads automatically.

When a lead form submits successfully it pushes a `generate_lead` event to `dataLayer`:

```js
{ event: 'generate_lead', form_name: 'roof_health_report' }
```

Create a GA4 event tag in GTM triggered on that custom event, and mark it as a key
event (conversion) in GA4. That is what Google Ads will optimise toward.

Per your off-season plan: do **not** optimise campaigns for form submissions until the
account has clean data. Optimise for engagement first and let the platform learn what a
real visitor looks like.

---

## 6. Deploying (Vercel — recommended)

Vercel is made by the same people who make Next.js, the free tier is genuinely
sufficient for a site this size, and SSL is automatic.

1. Push this folder to a GitHub repository (private is fine).
2. Go to <https://vercel.com>, sign in with GitHub, click **Add New → Project**, pick
   the repo. Vercel auto-detects Next.js — leave every build setting on default.
3. Add your environment variables under **Settings → Environment Variables** (see
   `.env.example`).
4. Deploy. You will get a `.vercel.app` URL immediately.
5. Add your domain under **Settings → Domains**, then update DNS at your registrar:
   - `A` record on the root: `76.76.21.21`
   - `CNAME` on `www`: `cname.vercel-dns.com`
   - DNS can take up to 48 hours, though it is usually minutes. SSL provisions itself.

**Careful:** `truenorthroofingsolutions.com` currently points at your existing site.
Deploy to the Vercel preview URL first, check every page, and only repoint DNS once
you are happy. Nothing breaks while you are testing.

### After the DNS switch

- [ ] Submit `https://www.truenorthroofingsolutions.com/sitemap.xml` in Google Search
      Console.
- [ ] Test the rich results: <https://search.google.com/test/rich-results>
- [ ] Run PageSpeed Insights on the homepage and a service page.
- [ ] Submit a real test lead through the form and confirm it arrives.
- [ ] Check that the old URLs redirect. Your current sitemap has `/roof-replacements`
      (plural) and `/flatlow-slope-roofing-tpoepdm`; this site uses
      `/roof-replacement` (singular) and does not have a flat-roof page yet. Add
      redirects in `next.config.mjs` so you do not lose the indexed URLs — there is a
      commented example in that file.

---

## 7. Project structure

```
app/
  layout.tsx            Root layout — fonts, metadata, header/footer, schema
  page.tsx              Homepage
  globals.css           The entire design system. Start here for any style change.
  about/                About — philosophy, CraftsmanCert, full 30-point checklist
  contact/              Contact & inspection request
  roof-replacement/     ─┐
  roof-repair/           │ Service pages. Each is ~15 lines; all the content
  metal-roofing/         │ lives in lib/content.ts and renders through
  gutters/               │ components/ServicePage.tsx
  roof-inspections/     ─┘
  sitemap.ts            Auto-generated XML sitemap
  robots.ts             robots.txt — explicitly allows AI crawlers
  not-found.tsx         404

components/
  SiteHeader.tsx        Sticky header + mobile nav
  SiteFooter.tsx
  ActionBar.tsx         Sticky call/quote bar on mobile
  LeadForm.tsx          Quote form with validation, honeypot, GA4 event
  FAQ.tsx               Accessible accordion
  Reveal.tsx            Scroll-triggered reveal
  ServicePage.tsx       Shared template for all five service pages
  Schema.tsx            JSON-LD: RoofingContractor, Service, FAQPage, BreadcrumbList

lib/
  site.ts               ALL business config — phone, address, hours, endpoints
  content.ts            ALL copy and page data

public/
  images/               Optimised WebP — your real project photos
  llms.txt              For AI answer engines (ChatGPT, Claude, Perplexity)
  icon.png              Favicon (your compass mark)
```

**The important thing:** you should almost never need to touch a page file. Text lives
in `lib/content.ts`, business details live in `lib/site.ts`, and styling lives in
`app/globals.css`. All three are heavily commented.

---

## 8. Adding a new page

To add a sixth service page (say, commercial / flat roofing):

1. Add an entry to `servicePages` in `lib/content.ts`, following the shape of the
   existing ones. TypeScript will tell you if you miss a required field.
2. Create `app/commercial-roofing/page.tsx` — copy one of the existing service page
   files and change the two slug strings.
3. Add the route to `app/sitemap.ts` and to `nav` in `lib/site.ts`.
4. Add it to `public/llms.txt`.

---

## 9. What was checked before handover

Every page was server-rendered and inspected in Chromium at 320px, 390px and 1440px:

- No horizontal overflow at any width down to 320px
- Exactly one `<h1>` per page; no heading-level skips
- All images have `alt` text; all form controls have associated labels
- No duplicate element IDs (the lead form renders twice on the homepage and uses
  React `useId()` to namespace)
- All internal links resolve to real routes
- All JSON-LD blocks parse as valid JSON
- Colour contrast checked against WCAG AA on all 17 foreground/background pairs used
  in the design system — all pass
- All referenced image paths exist in `public/images`
- `prefers-reduced-motion` disables every animation

One thing that could **not** be verified here: Google Fonts could not be downloaded in
the build sandbox, so the screenshots used fallback fonts. Archivo and IBM Plex are
metrically similar to the fallbacks, but check the headline line-breaks on the
homepage and service page heroes when you first run `npm run dev`, since real Archivo
is slightly narrower and may pull a word up a line.

---

## 10. Content notes

The service page copy is adapted from your own drafts in `TNR Core/Web Pages/`, and the
technical positioning — elevation bands, the ice-dam explanation, the WUI fire argument,
the insurance deductible position — comes from your Brand Core and Master Strategy
documents. The 30-point checklist is your actual SOP, published verbatim.

Cost figures cite published 2025 regional pricing (Southern Star Roofing's Asheville
guide, Bill Ragan's national update). They are presented as orientation ranges, not
estimates, and the page says so. Re-check them annually.
