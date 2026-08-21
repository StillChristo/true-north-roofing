/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — edit this file first.
 *  Everything the business owner is likely to change lives here.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: 'True North Roofing',
  legalName: 'True North Roofing, LLC',
  tagline: 'Where craftsmanship meets conviction.',
  motto: 'Steady. Strong. True.',

  // ── Contact ────────────────────────────────────────────────
  phone: '(828) 507-0778',
  phoneHref: 'tel:+18285070778',
  email: 'office@truenorthroofingsolutions.com', // TODO: confirm real inbox
  emailHref: 'mailto:office@truenorthroofingsolutions.com',

  // ── Location (NAP — must match Google Business Profile exactly) ──
  address: {
    street: '', // TODO: add street address if you list one publicly on GBP
    city: 'Asheville',
    region: 'NC',
    regionFull: 'North Carolina',
    postalCode: '28803',
    country: 'US',
  },
  geo: { lat: 35.5951, lng: -82.5515 }, // Asheville, NC — refine to your actual office

  url: 'https://www.truenorthroofingsolutions.com',

  hours: [
    { days: 'Monday – Friday', time: '7:30 AM – 6:00 PM' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Emergency leak line only' },
  ],
  // Machine-readable hours for schema.org
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '14:00' },
  ],

  // ── Social / profiles (used for schema sameAs + footer) ────
  profiles: {
    google: '', // TODO: paste your Google Business Profile share link
    facebook: '',
    instagram: '',
    bbb: 'https://www.bbb.org/us/nc/asheville/profile/roofing-contractors/true-north-roofing-llc-0473-92036979',
  },

  /**
   * ── LEAD FORM ENDPOINT ───────────────────────────────────
   * The quote form POSTs JSON here. Leave blank and the form
   * falls back to a mailto: hand-off so it never silently fails.
   *
   * Drop in whichever backend you choose:
   *   Formspree   → https://formspree.io/f/xxxxxxx
   *   Web3Forms   → https://api.web3forms.com/submit
   *   GoHighLevel → your inbound webhook URL
   *   JobNimbus   → your Zapier/Make webhook URL
   *   Netlify     → leave blank and add data-netlify="true"
   */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? '',

  /** Online scheduler for the free inspection (Calendly, GHL, Housecall, etc.). */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? '',

  /** Google Analytics 4 / Google Tag Manager. Leave blank to disable. */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? '',
} as const;

export const serviceAreas = {
  primary: 'Asheville & Western North Carolina',
  counties: ['Buncombe', 'Henderson', 'Haywood', 'Transylvania', 'Madison', 'Jackson', 'McDowell'],
  towns: [
    'Asheville', 'Hendersonville', 'Waynesville', 'Brevard', 'Black Mountain',
    'Weaverville', 'Arden', 'Fletcher', 'Candler', 'Fairview',
    'Swannanoa', 'Leicester', 'Maggie Valley', 'Canton', 'Mars Hill',
    'Marion', 'Sylva', 'Flat Rock', 'Mills River', 'Woodfin',
  ],
} as const;

/** Verifiable trust signals only. Do not add a claim here you cannot prove. */
export const trustSignals = [
  { label: 'BBB Accredited', detail: 'A-rated, accredited business' },
  { label: 'Licensed & Insured', detail: 'Fully insured in North Carolina' },
  { label: 'Lifetime Craftsmanship Warranty', detail: 'In plain English' },
  { label: 'Photo-Documented', detail: 'Every job, start to finish' },
  { label: '24-Hour Leak Hotline', detail: 'Tracked response times' },
] as const;

export const nav = [
  { label: 'Roof Replacement', href: '/roof-replacement' },
  { label: 'Roof Repair', href: '/roof-repair' },
  { label: 'Metal Roofing', href: '/metal-roofing' },
  { label: 'Gutters', href: '/gutters' },
  { label: 'Roof Inspections', href: '/roof-inspections' },
  { label: 'About', href: '/about' },
] as const;
