/**
 * ─────────────────────────────────────────────────────────────
 *  COPY DECK + PAGE DATA
 *  Voice: Confident Authority × Technical Precision
 *         ("technical consultant, not door-knocker")
 *  Persuasion model: PASPA, cold→warm search traffic
 *
 *  Anything marked NEEDS REAL DATA must be replaced before launch.
 * ─────────────────────────────────────────────────────────────
 */

/* ══════════════════════════════════════════════════════════════
   HOMEPAGE
   ══════════════════════════════════════════════════════════════ */

export const hero = {
  eyebrow: 'Asheville · Hendersonville · Waynesville · Brevard',
  title: ['Roofing built for the mountains.', 'Proven photo by photo.'],
  sub: 'Roof replacement, repair, standing seam metal and seamless gutters across Western North Carolina — installed to manufacturer spec, documented from tear-off to final sweep, and backed by a Lifetime Craftsmanship Warranty.',
  assurances: [
    'BBB Accredited',
    'Licensed & insured in NC',
    'Free inspection, no obligation',
    'We never waive deductibles',
  ],
};

export const failureModes = [
  {
    tag: 'Failure mode 01 — Water',
    title: 'The stain on your ceiling is the last thing to happen',
    body: 'By the time water shows up in drywall, it has usually been moving through the decking for a season or more. The leak is rarely where the stain is — which is why a patch in the wrong spot buys you nothing but another winter.',
    img: '/images/leak-ceiling-stain.webp',
    alt: 'Water stain spreading across an interior ceiling from a roof leak',
  },
  {
    tag: 'Failure mode 02 — Wind',
    title: 'Mountain wave wind hits at angles flatland roofs never see',
    body: 'Air accelerating down the leeward slopes of the Blue Ridge strikes roof planes perpendicular rather than along them. Three-tab shingles rated to 60–70 mph lift at the tab line, and the failure spreads across a whole slope in one event.',
    img: '/images/storm-damage.webp',
    alt: 'Residential roof with shingles torn away after a high-wind storm',
  },
  {
    tag: 'Failure mode 03 — Water management',
    title: 'The gutter goes first, and it takes the fascia with it',
    body: 'Under WNC tree cover, gutters pack with needles and leaf litter every fall. Water then sheets behind the gutter, saturates the fascia board and rots the decking edge — a repair that costs several times what keeping the gutter clear would have.',
    img: '/images/clogged-gutter.webp',
    alt: 'Roof gutter completely packed with dried leaves and debris',
  },
];

export const elevationBands = [
  {
    zone: 'Valley Floor',
    alt: 'Below 2,500 ft',
    towns: 'Asheville · Fletcher · Arden',
    risk: 'Occasional freeze/thaw cycles, gutter freezing, heavy rain volume and humidity that drives moss and algae growth on north-facing slopes.',
    specs: [
      'Ice & water shield at eaves, valleys and penetrations',
      'Algae-resistant (copper granule) architectural shingle',
      'Balanced 50/50 intake-to-exhaust ventilation',
    ],
  },
  {
    zone: 'Mid-Elevation',
    alt: '2,500 – 3,500 ft',
    towns: 'Hendersonville · Brevard · Waynesville',
    risk: 'Consistent snow load with daily melt-and-refreeze cycles. This is prime ice dam country — and an ice dam is a ventilation and insulation failure, not a shingle failure.',
    specs: [
      'Double-row ice & water shield (6 ft coverage)',
      'R-38 attic insulation with clear soffit baffles',
      'Continuous ridge vent to drive the stack effect',
    ],
  },
  {
    zone: 'High Elevation',
    alt: 'Above 3,500 ft',
    towns: 'Maggie Valley · Beech · Cataloochee',
    risk: 'Heavy accumulation, prolonged freezing and wind-driven snow that gets under any roof covering not sealed as a complete system.',
    specs: [
      'Full-deck ice & water shield membrane',
      'Standing seam metal with concealed clip fasteners',
      'Snow retention system and metal fascia cladding',
    ],
  },
];

export const services = [
  {
    n: '01',
    title: 'Roof Replacement',
    href: '/roof-replacement',
    blurb: 'Full tear-off, decking inspection and a complete engineered system — underlayment, flashing, ventilation and shingle or panel.',
    img: '/images/shingle-residential.webp',
    alt: 'New architectural shingle roof on a Western North Carolina home',
    size: 'lg' as const,
  },
  {
    n: '02',
    title: 'Standing Seam Metal',
    href: '/metal-roofing',
    blurb: 'Concealed-fastener panels built to move with the temperature. The forever roof for mountain elevations.',
    img: '/images/hero-standing-seam.webp',
    alt: 'Black standing seam metal roof installed on a wooded mountain property',
    size: 'md' as const,
  },
  {
    n: '03',
    title: 'Roof Repair & Emergency Tarping',
    href: '/roof-repair',
    blurb: 'Find the actual source, fix the system around it, and show you the photos. Same-day tarp on active leaks.',
    img: '/images/repair-detail.webp',
    alt: 'Close-up of a repaired metal roof transition on an awkward roof angle',
    size: 'sm' as const,
  },
  {
    n: '04',
    title: 'Seamless Gutters',
    href: '/gutters',
    blurb: 'Formed on site to the exact run. Correct slope, correct hanger spacing, guards that actually shed WNC leaf litter.',
    img: '/images/gutter-guard.webp',
    alt: 'Seamless gutter with micro-mesh gutter guard installed along a roof edge',
    size: 'sm' as const,
  },
  {
    n: '05',
    title: 'Roof Inspections',
    href: '/roof-inspections',
    blurb: 'A free, photo-documented Roof Health Report with honest remaining service life — even when the answer is "you don\'t need us yet."',
    img: '/images/steep-pitch-shingle.webp',
    alt: 'Roofer working on a steep-pitch shingle roof during an inspection',
    size: 'sm' as const,
  },
];

/** The real 30-Point Foreman Checklist, straight from the SOP. */
export const checklist = [
  {
    group: 'Pre-install — safety & setup',
    items: [
      'Safety brief; PPE issued; harness anchors set',
      'Ladder placement and fall zones marked',
      'Property protection: tarps, landscaping, AC unit',
      'Dumpster placement confirmed with homeowner',
      'Material checked against scope; colours verified',
    ],
  },
  {
    group: 'Decking & underlayment',
    items: [
      'Decking inspected; rot and soft spots addressed',
      'Ice & water shield at eaves, valleys, perimeters',
      'Synthetic underlayment laid to correct overlap',
      'Drip edge installed in correct sequence',
    ],
  },
  {
    group: 'Flashings & penetrations',
    items: [
      'Step and counter flashing integrated with underlayment',
      'Chimney and cricket details built to spec',
      'Pipe boots and vents sealed and fastened',
      'Skylight flashing kits installed per manufacturer',
    ],
  },
  {
    group: 'Shingle & metal',
    items: [
      'Starter course and exposure correct',
      'Nailing pattern and depth within spec (6-nail)',
      'Valleys built to plan (woven or metal)',
      'Ridges and caps set; ridge vent where specified',
    ],
  },
  {
    group: 'Gutters',
    items: [
      'Correct slope; hangers at 24–32" on centre',
      'Seams sealed; outlets and downspouts secured',
      'Splash blocks or extensions placed',
    ],
  },
  {
    group: 'Ventilation',
    items: [
      'Intake (soffit) clear; baffles installed if needed',
      'Exhaust balanced against intake',
    ],
  },
  {
    group: 'Cleanup & handover',
    items: [
      'Jobsite magnet sweep completed twice',
      'Yard, beds and driveway cleared',
      'All material removed or neatly stored',
      'Photos captured: eaves, valleys, penetrations, ridge, gutters',
      'Punch list zeroed',
      'Homeowner walkthrough completed; questions answered',
      'Warranty and care instructions provided',
      'Final photos uploaded; dumpster released',
    ],
  },
];

export const process = [
  {
    n: 'Step 01',
    title: 'Intake',
    body: 'A real conversation, not a qualification script. We ask about roof age, where you have seen water, how long you plan to be in the home, and whether access is going to be a problem. Then we book the inspection around your calendar.',
  },
  {
    n: 'Step 02',
    title: 'Forensic inspection',
    body: 'We measure the roof, get into the attic, and photograph every plane, valley, penetration and flashing detail. We check ventilation balance and decking condition — the two things most estimates skip entirely.',
  },
  {
    n: 'Step 03',
    title: 'Roof Health Report',
    body: 'You get the photos and a plain-English read on what is actually happening up there, including honest remaining service life. If the roof has good years left, we will tell you so and put the report in writing.',
  },
  {
    n: 'Step 04',
    title: 'Three options at the table',
    body: 'Good, better and best — each line-itemed so you can see exactly what changes between them. Financing shown alongside. Then one question: which option fits best? No same-day discount, no manufactured deadline.',
  },
  {
    n: 'Step 05',
    title: 'Install to the checklist',
    body: 'A CraftsmanCert-badged crew works the 30-point checklist. Magnet sweeps twice daily. Photos at every stage, uploaded as we go, so you can watch the job from your phone while you are at work.',
  },
  {
    n: 'Step 06',
    title: 'Zero-punch walkthrough',
    body: 'The dumpster does not leave until the foreman and you have walked the property together and every item on the checklist has passed. Your warranty clock starts the day you sign off — not the day we started.',
  },
];

export const gallery = [
  { img: '/images/hero-standing-seam.webp', cap: 'Standing seam metal · Buncombe County', alt: 'Black standing seam metal roof with clean panel lines in a wooded setting' },
  { img: '/images/church-metal-roof.webp', cap: 'Church re-roof · metal over steep pitch', alt: 'Historic brick church with a newly installed dark metal roof' },
  { img: '/images/shingle-residential.webp', cap: 'Architectural shingle · full replacement', alt: 'Newly installed architectural shingle roof viewed along the ridge' },
  { img: '/images/school-metal-roof.webp', cap: 'School building · commercial metal', alt: 'Long metal roof installed across a school building' },
  { img: '/images/metal-underlayment.webp', cap: 'Underlayment stage · synthetic + ice shield', alt: 'Roof deck covered in synthetic underlayment before metal panel installation' },
  { img: '/images/copper-overhang.webp', cap: 'Copper detail · entry overhang', alt: 'Custom copper roof over a residential entry overhang' },
  { img: '/images/commercial-tpo.webp', cap: 'Low-slope commercial · membrane system', alt: 'Commercial low-slope roof with white membrane being installed' },
  { img: '/images/steep-pitch-shingle.webp', cap: 'Steep pitch · fall protection required', alt: 'Extremely steep pitched shingle roof mid-installation' },
];

/**
 * Real reviews, pulled from Google Business Profile. Jacki Berry's and Shay Webb's
 * are close to verbatim; Andy R.'s was trimmed from a much longer original down to
 * a representative pull-quote (his full review is worth reading in the GBP dashboard
 * if it's ever useful elsewhere — e.g. a testimonials page).
 * The homepage "What homeowners say" section (app/page.tsx) shows this section
 * automatically now that this array is non-empty — no other file needs to change.
 *
 * Shape for each entry:
 *   { stars: 5, quote: 'Exact review text…', who: 'First name, Town' }
 */
export const reviews: { stars: number; quote: string; who: string }[] = [
  {
    stars: 5,
    quote:
      'Wes, Jerry and Daniel are absolute gems and we are lucky to have stumbled upon them. It\'s very hard to find honest business owners that care about the work they do and these guys delivered in spades. Jerry is a problem solver and can think outside the box and was able to work through a few complications we had. Thanks again for your exceptional workmanship — if I ever need anything roofing related, y\'all are the first people I will call.',
    who: 'Andy R.',
  },
  {
    stars: 5,
    quote:
      'True North showed up in one day after I called about roof damage from wind and a broken tree limb. The work was done fast and clean. We will have them do our whole roof soon. They did a great job and I would highly recommend!',
    who: 'Jacki Berry',
  },
  {
    stars: 5,
    quote:
      'Wes, Jerry and Crew did a phenomenal job on my new standing seam roof. The product turned out better than I could have imagined. The pricing, professionalism, and value were all top tier. The cleanup from the guys left my jobsite better than they found it. Highly recommend.',
    who: 'Shay Webb',
  },
];

export const faqs = [
  {
    q: 'How much does a roof replacement cost in Asheville?',
    a: 'For a typical 1,500–2,000 sq ft roof in the Asheville area, asphalt shingle replacement generally runs about $6,000–$15,000, and metal roofing typically runs $8.50–$13 per square foot installed. Steep mountain pitches, limited access, decking repairs and ventilation upgrades all move the number. We line-item everything so you can see exactly where the cost comes from rather than getting a single lump sum.',
  },
  {
    q: 'Do you chase storms or knock doors after hail?',
    a: 'No. We are a permanent local business with a physical presence in Western North Carolina, and we will still be here when a warranty claim comes in five years from now. We do knock doors on streets where we are already installing, because neighbours reasonably want to know who is on the roof next door.',
  },
  {
    q: 'Will you waive my insurance deductible?',
    a: 'Never. Waiving or absorbing a deductible is insurance fraud, and any contractor offering it is telling you what they are willing to do when nobody is watching. What we will do is document the damage thoroughly, explain how ACV and RCV actually work, and show you financing options for the out-of-pocket portion.',
  },
  {
    q: 'How long does a roof replacement take?',
    a: 'Most replacements on an average home take two to five days. Complex roofs, steep pitches, hidden decking damage or weather delays extend that. You get a written schedule before we start and a dedicated point of contact for the duration.',
  },
  {
    q: 'Can I stay in my home while you work?',
    a: 'Yes, most homeowners do. There is real noise during tear-off and installation, and you should expect some vibration in the ceilings. We will let you know in advance if we need to interrupt power or move vehicles, and we tarp the attic on older open-deck homes so falling granules and dust do not end up in your insulation.',
  },
  {
    q: 'What does the Lifetime Craftsmanship Warranty actually cover?',
    a: 'It covers our workmanship — the installation itself — in plain English, with no hidden exclusions page. Materials carry their own manufacturer warranty, which we register on your behalf. The warranty clock starts the day you sign off on the walkthrough, not the day we started the job.',
  },
  {
    q: 'Do you handle insurance claims?',
    a: 'We document storm damage with photos, measurements and a written scope, and we will meet your adjuster on site. We do not act as a public adjuster or negotiate your claim for you, because in North Carolina that is a licensed role. What we do is make sure the adjuster sees everything that is actually wrong with the roof.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Our flagship market is the Asheville metro and the surrounding mountain counties — Buncombe, Henderson, Haywood, Transylvania, Madison, Jackson and McDowell. That includes Hendersonville, Waynesville, Brevard, Black Mountain, Weaverville, Fletcher, Arden, Candler, Maggie Valley and Canton.',
  },
];

/* ══════════════════════════════════════════════════════════════
   SERVICE PAGES
   ══════════════════════════════════════════════════════════════ */

export type SpecRow = { label: string; cells: string[] };

export type ServicePageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroImg: string;
  heroAlt: string;
  eyebrow: string;
  /** Left column: long-form educational body */
  sections: { h2: string; body: string[]; list?: string[] }[];
  /** Optional comparison table */
  table?: { caption: string; head: string[]; rows: SpecRow[]; note?: string };
  callout?: { title: string; body: string };
  /** Images placed between sections */
  figures?: { img: string; alt: string; cap: string }[];
  faqs: { q: string; a: string }[];
  /** Aside proof points */
  aside: string[];
  ctaTitle: string;
  ctaBody: string;
};

export const servicePages: Record<string, ServicePageData> = {
  /* ───────────────────────── ROOF REPLACEMENT ───────────────────────── */
  'roof-replacement': {
    slug: 'roof-replacement',
    metaTitle: 'Roof Replacement in Asheville & Western NC | True North Roofing',
    metaDescription:
      'Full roof replacement in Asheville, Hendersonville, Waynesville and Brevard. Line-itemed pricing, photo-documented install, 30-point checklist and a Lifetime Craftsmanship Warranty.',
    h1: 'Roof replacement in Asheville & Western North Carolina',
    eyebrow: 'Service · Full system replacement',
    intro:
      'Every roof has an expiration date. When patchwork repairs stop holding and the decking underneath is compromised, replacement stops being an expense and starts being the cheaper option. Here is how to tell where you are — and what a complete system actually costs.',
    heroImg: '/images/shingle-residential.webp',
    heroAlt: 'Newly installed architectural shingle roof on a Western North Carolina home',
    sections: [
      {
        h2: 'Do you actually need a new roof?',
        body: [
          'Most homeowners start asking this question after a leak. But a leak is a symptom, not a diagnosis — and the honest answer is that plenty of roofs that leak do not need replacing. These are the signals that tip the decision toward a full system replacement rather than another repair.',
        ],
        list: [
          'Age and wear. Architectural shingles last 20–30 years in this climate. If yours are near 25, with curling edges, bald patches where granules have washed off, or areas that look sunken, replacement is usually more cost-effective than continuing to repair.',
          'Widespread damage. Isolated damage is a repair. When roughly 30% or more of the roof shows cracking, missing shingles or hail bruising, a patch will not restore weatherproofing.',
          'Repeated leaks or deck rot. Leaks in multiple locations, or decking that shows rot or mould, mean the failure is in the system rather than in one detail. Chasing leaks one at a time gets expensive fast.',
          'Insurance pressure. Carriers are increasingly using roof age of 15–20 years as a hard non-renewal trigger regardless of condition. If you have received one of those letters, the clock is real.',
        ],
      },
      {
        h2: 'What a replacement costs here',
        body: [
          'Roof replacement pricing depends on size, material, complexity and access. In the Asheville area, replacing a 1,500–2,000 sq ft roof with asphalt shingles generally lands around $6,000–$15,000. Statewide guides put a standard 2,200 sq ft asphalt replacement between $8,200 and $20,000. Metal runs considerably higher.',
          'Labour is 40–60% of the total. In Western NC it typically runs $2.00–$4.00 per square foot, with Asheville at the upper end — $2.50–$4.25 — because of steep terrain, difficult access and the fall-protection requirements that come with both. Tear-off and disposal add $1,000–$3,000. Buncombe County permits generally run $100–$300.',
          'What moves the number most is what we find under the old roof. Rotted decking, a chimney that needs a proper cricket, or an attic with blocked soffit vents all change the scope. We photograph anything we find and get your approval before the cost changes — never after.',
        ],
      },
      {
        h2: 'What is actually in the system',
        body: [
          'A roof is not a shingle. It is an assembly, and it fails at whichever component is weakest. Every replacement we install includes the following as standard, not as an upsell line.',
        ],
        list: [
          'Synthetic underlayment throughout — no felt. Felt tears during install and wrinkles when it gets wet.',
          'Ice & water shield in all valleys, at eaves and around every penetration. At mid and high elevation we run double-row coverage.',
          'Proper drip edge, installed in the correct sequence relative to the underlayment (this is the single most common thing we find done backwards).',
          'Six-nail fastening pattern — required for the high-wind warranty on virtually every architectural shingle.',
          'Step and counter flashing replaced, not reused and re-caulked.',
          'Ventilation balanced intake-to-exhaust, with baffles installed where insulation has blocked the soffits.',
        ],
      },
    ],
    table: {
      caption: 'Installed cost and lifespan by material (2025–2026 Western NC ranges)',
      head: ['Material', 'Installed cost / sq ft', 'Lifespan', 'Notes'],
      rows: [
        { label: '3-tab asphalt shingle', cells: ['~$3.50–$4', '15–20 yrs', 'Affordable, limited wind resistance. We rarely recommend it here.'] },
        { label: 'Architectural shingle', cells: ['~$5–$7', '22–25 yrs', 'Thicker profile, 30-year material warranties, 130 mph wind ratings.'] },
        { label: 'Luxury / designer shingle', cells: ['~$8–$10', '25–30 yrs', 'Heavier weight, slate or shake appearance.'] },
        { label: 'Exposed-fastener metal', cells: ['~$4.50–$8', '30–40 yrs', 'Visible screws; needs periodic re-tightening.'] },
        { label: 'Standing seam metal', cells: ['~$8.50–$16', '40–70 yrs', 'Concealed clips, thermal movement handled, best in snow country.'] },
        { label: 'Flat / low-slope (TPO, EPDM)', cells: ['~$14', '15–30 yrs', 'Low-slope residential sections and commercial.'] },
      ],
      note: 'Ranges include material and labour and are drawn from published 2025 regional pricing. Your quote will be line-itemed to your actual roof — these figures are for orientation, not an estimate.',
    },
    callout: {
      title: 'On deductibles',
      body: 'If a contractor offers to waive, absorb or "work around" your insurance deductible, that is fraud, and it tells you exactly what they will do on your roof when nobody is watching. We never do it. We will show you financing for the out-of-pocket portion instead.',
    },
    figures: [
      { img: '/images/underlayment-flat.webp', alt: 'Roof deck fully covered in synthetic underlayment before final roofing goes on', cap: 'Underlayment stage — photographed on every job before it gets covered' },
      { img: '/images/steep-pitch-2.webp', alt: 'Crew working on an extremely steep pitched shingle roof', cap: 'Steep-pitch work carries different fall-protection and labour costs' },
    ],
    faqs: [
      { q: 'How long does a roof replacement take?', a: 'Two to five days for most homes. Complex roofs, steep pitches and weather extend it. You get a written schedule before we begin.' },
      { q: 'Can I stay in the house?', a: 'Yes. Expect real noise and some ceiling vibration during tear-off. We tarp the attic on older open-deck homes so dust and granules do not end up in your insulation.' },
      { q: 'Will insurance cover it?', a: 'Insurance may cover replacement caused by a covered peril — hail, wind, a fallen tree. Age and ordinary wear are not covered. We document damage thoroughly and will meet your adjuster on site.' },
      { q: 'Can I go over the existing shingles instead of tearing off?', a: 'Sometimes it is code-legal, but we almost never recommend it. A layover hides the decking, and the decking is where we find the problems that actually matter.' },
      { q: 'What happens if you find rotted decking?', a: 'We photograph it, send it to you, and get written approval on the additional cost before we replace a single sheet. You will never see a surprise decking charge on a final invoice.' },
    ],
    aside: [
      'Free photo-documented inspection before any quote',
      'Line-itemed proposal — three scoped options',
      '30-point foreman checklist on every install',
      'Lifetime Craftsmanship Warranty on our workmanship',
      'Financing available on the out-of-pocket portion',
    ],
    ctaTitle: 'Find out where your roof actually stands',
    ctaBody:
      'A free inspection and Roof Health Report, with photos and an honest read on remaining service life. If your roof has good years left, we will put that in writing too.',
  },

  /* ───────────────────────── ROOF REPAIR ───────────────────────── */
  'roof-repair': {
    slug: 'roof-repair',
    metaTitle: 'Roof Repair & Emergency Leak Service | Asheville, NC | True North Roofing',
    metaDescription:
      'Roof repair and emergency tarping across Asheville and Western NC. We find the actual source of the leak, show you the photos, and fix the system — not just the symptom.',
    h1: 'Roof repair & emergency leak service',
    eyebrow: 'Service · Diagnosis and repair',
    intro:
      'A leak is rarely where the stain is. Water travels along rafters and underlayment before it finds a place to drop, which is why a patch placed under the stain so often fails by the next hard rain. Our job is to find the real entry point and fix the detail that failed.',
    heroImg: '/images/repair-detail.webp',
    heroAlt: 'Detail of a repaired metal roof transition at an awkward roof angle',
    sections: [
      {
        h2: 'Where roofs actually leak',
        body: [
          'After enough inspections in this region, the pattern is consistent. The shingle field itself is almost never the problem. The failures are at the transitions — the places where the roof stops being a flat plane and has to interact with something else.',
        ],
        list: [
          'Step and counter flashing at walls and chimneys, especially where a previous repair relied on sealant instead of properly integrated metal.',
          'Valleys, where volume concentrates and debris collects. Woven valleys on old roofs wear through at the centre line.',
          'Pipe boots. The rubber collar cracks with UV exposure, usually somewhere around year twelve, and it is one of the cheapest fixes there is.',
          'Skylight curbs and the flashing kit around them.',
          'Ice dam backup at the eaves — where the roof is not leaking at all, it is being submerged.',
          'Nail pops and blown-off shingles from a wind event, which are the only failures that actually look like what people expect a leak to look like.',
        ],
      },
      {
        h2: 'How we diagnose it',
        body: [
          'We start in the attic when access allows, because the underside of the deck tells the truth. Staining patterns, rusted nail shanks and daylight all point back to an entry point. Then we work the roof surface itself, photographing each suspect detail.',
          'You get the photos either way — including the ones that show the problem is not what you were told it was. More than once we have inspected a roof that a previous company had quoted for full replacement and found a $400 flashing repair instead. That report is yours to keep regardless of whether you hire us.',
        ],
      },
      {
        h2: 'Emergency tarping',
        body: [
          'If water is actively coming into the house, the first job is to stop it. We run a 24-hour leak line and treat an active interior leak as a same-day tarp, weather and daylight permitting. Tarping is a stabilisation measure, not a repair — it buys you a dry ceiling while we schedule the actual fix and, when relevant, while your insurer processes the claim.',
          'Do not go up there yourself in the rain. Wet roof surfaces at WNC pitches are genuinely dangerous, and the fall is what hurts people, not the leak.',
        ],
      },
      {
        h2: 'When repair stops making sense',
        body: [
          'We will tell you when you are throwing money at a roof that is finished. The honest thresholds: when the same slope needs its third repair, when the decking under the failure is soft rather than just wet, or when the shingles have lost enough granule that they crack instead of flex when you lift a tab. At that point every repair is temporary by definition.',
          'Below those thresholds, repair is almost always the right call, and we will say so.',
        ],
      },
    ],
    callout: {
      title: 'Active leak right now?',
      body: 'Put a bucket under it, move anything valuable, and photograph the interior damage before you clean anything up — your insurer will want it. Then call us. Same-day tarping on active interior leaks, weather permitting.',
    },
    figures: [
      { img: '/images/leak-ceiling-stain.webp', alt: 'Water stain spreading across an interior ceiling', cap: 'The stain is where water landed — not where it got in' },
      { img: '/images/soffit-underside.webp', alt: 'Clean finished soffit and roof underside after repair work', cap: 'Soffit and underside detail after repair' },
    ],
    faqs: [
      { q: 'How much does a roof repair cost?', a: 'Most common repairs — a pipe boot, a section of step flashing, a handful of blown shingles — land in the low hundreds. Structural repairs involving decking replacement or chimney reflashing run higher. We quote the repair after we diagnose it, never before.' },
      { q: 'Do you charge for the inspection?', a: 'No. The inspection and the photo report are free, and the report is yours whether or not you hire us.' },
      { q: 'How fast can you get here for an active leak?', a: 'We treat active interior leaks as same-day tarping, weather and daylight permitting, and we track our response times on the leak line.' },
      { q: 'Will a repair void my manufacturer warranty?', a: 'A properly executed repair using matching, manufacturer-approved materials will not. A repair done with the wrong sealant or an incompatible product can. This is worth asking any contractor before they touch the roof.' },
      { q: 'Can you match my existing shingles?', a: 'Usually close, rarely perfect. Shingle colours are discontinued and existing shingles fade. We will show you the closest available match on site before we install it so there are no surprises from the driveway.' },
    ],
    aside: [
      '24-hour leak hotline with tracked response times',
      'Free photo diagnosis — the report is yours to keep',
      'Same-day tarping on active interior leaks',
      'We tell you when repair is the better call than replacement',
      'Repairs photographed before, during and after',
    ],
    ctaTitle: 'Get the leak diagnosed properly',
    ctaBody:
      'Free inspection with photos of the actual entry point. If it is a small fix, we will tell you it is a small fix.',
  },

  /* ───────────────────────── METAL ROOFING ───────────────────────── */
  'metal-roofing': {
    slug: 'metal-roofing',
    metaTitle: 'Standing Seam Metal Roofing | Asheville & Western NC | True North Roofing',
    metaDescription:
      'Standing seam and exposed-fastener metal roofing across Western North Carolina. Concealed clips, thermal movement handled correctly, 40–70 year service life. Free consultation.',
    h1: 'Metal roofing built for mountain weather',
    eyebrow: 'Service · Standing seam & metal systems',
    intro:
      'Metal sheds debris, sheds snow, will not burn, and lasts two to three times longer than asphalt. In a region with dense tree cover, heavy rain, ice dams at elevation and a post-Helene wildfire fuel load, that combination is hard to argue with. Here is what actually separates a good metal roof from a cheap one.',
    heroImg: '/images/hero-standing-seam.webp',
    heroAlt: 'Black standing seam metal roof with clean panel lines on a wooded property',
    sections: [
      {
        h2: 'Standing seam vs. exposed fastener',
        body: [
          'This is the decision that matters most, and it is worth understanding before anyone quotes you a number.',
          'Exposed-fastener panels — sometimes called through-fastened or R-panel — are screwed directly through the metal into the deck. The screw heads and neoprene washers are visible. They cost meaningfully less, install faster, and they work. The catch is that every screw is a hole through the weather barrier, and metal expands and contracts with temperature. Over years of that cycle the screws back out, the washers harden, and you get a maintenance obligation: periodic re-tightening and eventual replacement.',
          'Standing seam panels have raised ribs that conceal the fasteners underneath. The panels attach with clips that let the metal float as it expands and contracts, rather than fighting it. There are dramatically fewer penetrations, it handles low slopes down to 1:12, it takes solar mounting without new holes, and it looks like what most people picture when they picture a metal roof. It costs more and it takes a crew that knows what they are doing.',
          'Our honest position: if the budget reaches, standing seam is the better long-term buy in this climate, particularly above 2,500 feet. Exposed-fastener is a legitimate choice on outbuildings, on lower-visibility slopes, and when the budget is the constraint — as long as you go in understanding the maintenance.',
        ],
      },
      {
        h2: 'Why metal makes sense in Western NC specifically',
        body: [
          'Three regional factors push the case for metal harder here than they would in a flatter, drier market.',
        ],
        list: [
          'Debris shedding. Under WNC tree cover, an asphalt roof holds needles and leaf litter in its texture. That organic material holds moisture against the surface and grows moss. Metal sheds it.',
          'Snow and ice. Metal sheds snow load rather than accumulating it, which reduces ice dam formation. Paired with a snow retention system it drops in a controlled place rather than onto your walkway.',
          'Fire. Hurricane Helene left an enormous fuel bed of damaged timber across the region, and North Carolina already ranks first nationally for acreage inside the wildland-urban interface. Metal is non-combustible and Class A rated inherently, and its debris-shedding property removes the fuel that embers land in.',
        ],
      },
      {
        h2: 'The details that decide whether it lasts',
        body: [
          'Metal is unforgiving of a sloppy install in a way asphalt is not. These are the things we specify and the things worth asking any other bidder about.',
        ],
        list: [
          'Deck flatness. Metal telegraphs every irregularity underneath as visible waviness — "oil canning". We correct uneven sheathing before a panel goes down.',
          'Clip type and spacing. Floating clips, correctly spaced for panel length, are what allow thermal movement. Fixed attachment on a long panel run will buckle it.',
          'Paint system. A Kynar 500 / PVDF finish holds colour and resists chalking for decades. Cheaper polyester finishes fade noticeably inside ten years, and it is not a difference you can see on the sample board.',
          'Panel fabrication. We order panels cut to exact length — and roll standing seam on site where the run calls for it — so there are no unnecessary transverse seams.',
          'Underlayment. High-temperature synthetic underlayment, because the cavity under metal gets hot enough to degrade standard product.',
        ],
      },
      {
        h2: 'What about the noise, and the other things people ask',
        body: [
          'Modern metal installed over solid decking and underlayment is not appreciably louder in rain than asphalt. The loud-metal-roof reputation comes from barn roofs screwed to open purlins with nothing underneath.',
          'Metal does not attract lightning. It is non-combustible and, if struck, disperses the charge rather than igniting.',
          'Metal does not make the house hotter. Reflective coatings send a significant share of solar radiation back, which in most cases lowers summer cooling load.',
        ],
      },
    ],
    table: {
      caption: 'Metal system comparison',
      head: ['System', 'Installed cost / sq ft', 'Lifespan', 'Maintenance'],
      rows: [
        { label: 'Exposed-fastener steel', cells: ['~$4.50–$8', '30–40 yrs', 'Periodic screw re-tightening; washer replacement over time'] },
        { label: 'Standing seam steel', cells: ['~$8.50–$16', '40–70 yrs', 'Minimal — inspect flashings and sealants periodically'] },
        { label: 'Aluminium standing seam', cells: ['Varies', '50+ yrs', 'Corrosion-proof; well suited to high-moisture exposure'] },
        { label: 'Copper', cells: ['~$30–$50', '100+ yrs', 'Effectively none; develops natural patina'] },
      ],
      note: 'Costs include material and labour. Complexity, panel gauge, finish system and access all move these figures.',
    },
    callout: {
      title: 'If you live in an HOA or covenant community',
      body: 'Highlands, Cashiers, Lake Toxaway and Balsam Mountain all restrict metal in different ways — some prohibit it on primary roofs entirely, some require pre-patinated copper on accessory roofs, some cap the pitch it can go on. Bring us the covenant before you fall in love with a profile. Where metal is not permitted, Class A synthetic slate or shake usually satisfies both the review board and the fire rating.',
    },
    figures: [
      { img: '/images/mountain-cabin-metal.webp', alt: 'Mountain cabin with a newly installed dark metal roof', cap: 'Mountain cabin re-roof — metal over a historic log structure' },
      { img: '/images/church-metal-roof.webp', alt: 'Brick church with newly installed dark metal roof', cap: 'Steep-pitch metal on a historic church' },
    ],
    faqs: [
      { q: 'Is a metal roof noisy when it rains?', a: 'Not when installed over solid decking with underlayment. The noise reputation comes from agricultural roofs fastened to open purlins with nothing underneath them.' },
      { q: 'Can metal go over my existing shingles?', a: 'Often yes, if the deck is sound and the structure can carry the added weight. We inspect the decking and ventilation first. Our default recommendation is still tear-off, because covering the deck means not seeing it.' },
      { q: 'Does metal attract lightning?', a: 'No. Metal does not increase strike probability. It is non-combustible and disperses charge safely if struck.' },
      { q: 'How long will a metal roof last?', a: 'Steel standing seam runs 40–70 years with proper installation. Copper exceeds a century. The failure point is almost always a badly executed detail, not the metal itself.' },
      { q: 'Is standing seam worth the extra cost over exposed fastener?', a: 'In this climate, above about 2,500 feet, we think yes — the hidden fasteners remove the leak risk and the maintenance obligation entirely. Below that, on a budget, a well-installed exposed-fastener roof is a legitimate choice as long as you plan for periodic screw service.' },
      { q: 'Can I put solar on a metal roof later?', a: 'Standing seam is the best roof surface there is for solar. Mounting clamps grip the seam without any new penetrations, so the array does not compromise the roof.' },
    ],
    aside: [
      'Standing seam rolled on site where the run calls for it',
      'Kynar 500 / PVDF finish systems',
      'Floating clip attachment — thermal movement handled',
      'Snow retention systems for elevation properties',
      'HOA and architectural review board experience',
    ],
    ctaTitle: 'Talk through metal options for your roof',
    ctaBody:
      'We will bring samples, look at your roof structure and covenants, and give you a line-itemed comparison against staying with asphalt.',
  },

  /* ───────────────────────── GUTTERS ───────────────────────── */
  gutters: {
    slug: 'gutters',
    metaTitle: 'Seamless Gutters & Gutter Guards | Asheville, NC | True North Roofing',
    metaDescription:
      'Seamless gutters formed on site, correct slope and hanger spacing, and gutter guards that handle Western NC leaf litter. Serving Asheville, Hendersonville and Waynesville.',
    h1: 'Seamless gutters, formed on site',
    eyebrow: 'Service · Water management',
    intro:
      'Gutters are the least glamorous part of a roof and one of the most consequential. They are the reason your fascia rots, your basement takes water, and your foundation settles — or the reason none of that happens. Under WNC tree cover they need to be specified for the debris load, not just installed.',
    heroImg: '/images/gutter-guard.webp',
    heroAlt: 'Seamless gutter fitted with micro-mesh gutter guard along a roof edge',
    sections: [
      {
        h2: 'Why seamless matters',
        body: [
          'Sectional gutter comes in pre-cut lengths joined with connectors, and every one of those joints is a future leak. Seamless gutter is rolled from a coil on site in one continuous piece for the entire run, so the only seams on the whole system are at corners and outlets.',
          'We form on site, which means the run is cut to your actual fascia length rather than to the nearest stock size. Available in aluminium in a range of colours, and in copper where the architecture calls for it.',
        ],
      },
      {
        h2: 'The specifications that decide performance',
        body: [
          'Most failed gutters were installed wrong, not worn out. Four things determine whether a gutter system works for twenty years.',
        ],
        list: [
          'Slope. A gutter needs roughly a quarter-inch of fall for every ten feet of run toward the outlet. Too flat and it holds standing water and breeds mosquitoes; too steep and it looks wrong and overshoots.',
          'Hanger spacing. Hidden hangers every 24–32 inches on centre. Wider than that and the gutter sags under wet leaf load, which permanently deforms the front lip.',
          'Sizing. Five-inch K-style handles most homes. Steep pitches and large roof planes concentrate water volume and need six-inch with oversized outlets — this is common on WNC roofs and routinely under-specified.',
          'Downspout placement and discharge. A downspout that dumps against the foundation has moved the problem, not solved it. Extensions, splash blocks or buried discharge get the water away from the structure.',
        ],
      },
      {
        h2: 'Gutter guards under tree cover',
        body: [
          'Every guard product on the market claims to be maintenance-free. Under mature hardwood and pine in Western North Carolina, none of them are. What a good guard does is change the maintenance from a twice-yearly obligation involving a ladder into an occasional rinse.',
          'What we have found holds up: micro-mesh over a rigid frame, mounted so it does not lift the shingle course. What we steer people away from: foam inserts, which pack with pine needles and hold moisture in the gutter, and reverse-curve designs, which overshoot in heavy rain — and heavy rain is the condition that actually matters here.',
        ],
      },
      {
        h2: 'Cleaning and maintenance',
        body: [
          'If you have not put guards on, WNC gutters generally need clearing twice a year — once mid-autumn after the hardwood drop, and once in late spring after the pollen and seed load. Properties under heavy pine may need a third pass.',
          'We photograph the gutters before and after so you can see what came out, and we flag anything we notice about the roof edge, drip edge or fascia while we are up there. It is the cheapest roof inspection you will ever get.',
        ],
      },
    ],
    callout: {
      title: 'Gutters are where we usually meet people',
      body: 'A gutter job is a small commitment, and it is a fair way to find out how a company actually operates before you hand them a roof. Watch how we protect the landscaping, whether the crew cleans up, and whether the photos show up when we said they would.',
    },
    figures: [
      { img: '/images/clogged-gutter.webp', alt: 'Gutter completely packed with dried leaves and needles', cap: 'What an unguarded WNC gutter looks like by November' },
      { img: '/images/gutter-guard-stock.webp', alt: 'Roof edge showing gutter with guard protection installed', cap: 'Micro-mesh guard over a rigid frame' },
    ],
    faqs: [
      { q: 'How much do seamless gutters cost?', a: 'Pricing depends on linear footage, material, gutter size and how many corners and downspouts the run needs. Two-storey work and difficult access add labour. We measure and line-item it rather than quoting per foot sight-unseen.' },
      { q: 'Do I need 5-inch or 6-inch gutter?', a: 'Five-inch handles most homes. Six-inch is worth it where a large or steep roof plane concentrates a lot of water into one run — common on mountain roofs, and frequently under-specified.' },
      { q: 'Are gutter guards worth it?', a: 'Under heavy tree cover, generally yes — not because they eliminate maintenance, but because they turn a twice-yearly ladder job into an occasional rinse. Be sceptical of anyone claiming zero maintenance.' },
      { q: 'How often should gutters be cleaned here?', a: 'Twice a year for most WNC properties: mid-autumn after the hardwood drop and late spring after pollen and seed. Heavy pine cover may need a third.' },
      { q: 'Can you match my existing gutter colour?', a: 'Usually. Aluminium coil comes in a wide colour range and we can bring samples to compare against what is on the house.' },
    ],
    aside: [
      'Seamless aluminium formed on site — no joint leaks',
      'Hidden hangers at 24–32" on centre',
      '5" and 6" K-style; copper available',
      'Micro-mesh guards over rigid frame',
      'Before-and-after photos on every cleaning',
    ],
    ctaTitle: 'Get a gutter measurement and quote',
    ctaBody:
      'We will measure the runs, check your fascia and drip edge condition while we are there, and give you a line-itemed number.',
  },

  /* ───────────────────────── ROOF INSPECTIONS ───────────────────────── */
  'roof-inspections': {
    slug: 'roof-inspections',
    metaTitle: 'Free Roof Inspection & Roof Health Report | Asheville, NC | True North Roofing',
    metaDescription:
      'Free photo-documented roof inspection in Asheville and Western NC. Honest remaining service life, ventilation and decking assessment, and a written Roof Health Report you keep.',
    h1: 'Free roof inspection & Roof Health Report',
    eyebrow: 'Service · Assessment',
    intro:
      'An inspection should tell you the truth about your roof, including when the truth is that you do not need us yet. Ours is free, it is documented with photographs, and the report is yours to keep whether or not you ever hire us.',
    heroImg: '/images/inspector-photo-proof.webp',
    heroAlt: 'Roofing inspector photographing roof condition with a smartphone',
    sections: [
      {
        h2: 'When to get one',
        body: [
          'There are five moments when an inspection earns its time, and only one of them involves a visible leak.',
        ],
        list: [
          'After any significant wind or hail event, whether or not you can see damage from the ground. Insurance claim windows are finite and most policies require prompt reporting.',
          'When your roof reaches roughly fifteen years, because that is when carriers start using age as a non-renewal trigger and you want documentation of actual condition.',
          'Before you buy or sell. A roof is the single largest line item in most inspection reports and the one most likely to move a price.',
          'When you receive a non-renewal or "roof condition" letter from your insurer. A documented condition report is your evidence.',
          'When someone knocks on your door after a storm and tells you that you have damage. Get an independent look before you sign anything.',
        ],
      },
      {
        h2: 'What we actually check',
        body: [
          'A walk-around from the driveway is not an inspection. Ours takes about an hour on a typical home and covers the whole assembly, not just the surface.',
        ],
        list: [
          'Every roof plane, photographed — surface condition, granule loss, cracking, lifted or missing material.',
          'All flashings: step, counter, chimney, sidewall, skylight curbs. This is where the failures are.',
          'Valleys and penetrations — pipe boots, vents, satellite mounts, anything that puts a hole in the roof.',
          'Decking condition where it is visible, and from the attic underside where access allows.',
          'Ventilation balance — intake at the soffits versus exhaust at the ridge. Blocked soffit vents are the root cause of a large share of the "shingle problems" we get called about.',
          'Gutters, drip edge and fascia condition at the roof edge.',
          'Attic inspection for moisture staining, rusted nail shanks, daylight and insulation condition.',
        ],
      },
      {
        h2: 'What you receive',
        body: [
          'A written Roof Health Report with the photographs, an assessment of each system component, an honest estimate of remaining service life, and a prioritised list of anything that needs attention — separated into what needs doing now, what can wait a season, and what is simply worth knowing about.',
          'If your roof is in good condition, the report says so, and you can hand that document to your insurer. We would rather be the company you call in six years because we told you the truth in year one.',
        ],
      },
      {
        h2: 'Insurability audits',
        body: [
          'A newer service line, and one worth knowing about given where the North Carolina insurance market is heading. The rate bureau has requested an unprecedented statewide increase for dwelling policies, and carriers are simultaneously migrating from flat deductibles to percentage-based wind and hail deductibles.',
          'That combination means two things for homeowners. First, the "free roof for a $500 deductible" era is over — on a $500,000 home a 1% deductible is $5,000 out of pocket. Second, documented wind mitigation features are among the few things that still earn premium relief. We can inspect and document those features specifically, and certify remaining roof life if you are fighting a non-renewal.',
        ],
      },
    ],
    callout: {
      title: 'There is no catch',
      body: 'The inspection is free and the report is yours. We do not sell your information, we do not put you into a drip sequence you cannot escape, and we will not tell you that you need a roof you do not need. Teaching first is not a marketing line — it is how we get referrals.',
    },
    figures: [
      { img: '/images/interior-clean.webp', alt: 'Clean interior finish after roofing work with no debris left behind', cap: 'Interior left as we found it — part of the CleanSite Promise' },
      { img: '/images/metal-underlayment.webp', alt: 'Roof deck with underlayment and ice shield installed before final covering', cap: 'What we photograph before anything gets covered up' },
    ],
    faqs: [
      { q: 'Is the inspection really free?', a: 'Yes, and so is the report. There is no obligation and no fee, including when the answer is that your roof is fine.' },
      { q: 'How long does it take?', a: 'About an hour on a typical single-family home, longer for complex roofs or when attic access is difficult.' },
      { q: 'Do I need to be home?', a: 'It helps for the attic portion and for the walkthrough of the findings, but it is not strictly required. We can send the report and walk you through it by phone.' },
      { q: 'Will you get on the roof or just look from the ground?', a: 'We get on the roof whenever it is safe to do so. Where pitch or conditions make that unsafe, we use drone imagery rather than guessing from the driveway.' },
      { q: 'What if you find nothing wrong?', a: 'Then the report says so, and you have documentation of your roof condition — which is genuinely useful if you are dealing with an insurer.' },
    ],
    aside: [
      'Free, with no obligation and no fee',
      'Every roof plane photographed',
      'Attic and ventilation assessment included',
      'Honest remaining-service-life estimate',
      'Written report is yours to keep',
    ],
    ctaTitle: 'Book your free inspection',
    ctaBody:
      'About an hour on site. A written, photo-documented report afterwards. No obligation and no pressure to do anything with it.',
  },
};

/* ══════════════════════════════════════════════════════════════
   HERO MATERIAL SWATCHES
   Small tactile chips in the hero — concrete beats abstract.
   ══════════════════════════════════════════════════════════════ */
export const materials = [
  { label: 'Standing Seam', img: '/images/mat-standing-seam.webp', alt: 'Close-up of a standing seam metal roof panel', href: '/metal-roofing' },
  { label: 'Architectural Shingle', img: '/images/mat-shingle.webp', alt: 'Close-up of architectural asphalt shingle courses', href: '/roof-replacement' },
  { label: 'Seamless Gutter', img: '/images/mat-gutter.webp', alt: 'Close-up of a seamless gutter with guard', href: '/gutters' },
];

/* ══════════════════════════════════════════════════════════════
   WHY US — differentiators competitors cannot copy quickly
   ══════════════════════════════════════════════════════════════ */
export const whyUs = [
  {
    title: 'Photo proof, not promises',
    body: 'Decking, underlayment, flashing and ventilation are all photographed before they get covered. You see the parts of your roof nobody else would ever show you.',
  },
  {
    title: 'Line-itemed, never lump-sum',
    body: 'Three scoped options with the cost of every component broken out, so you can see exactly what changes between good, better and best.',
  },
  {
    title: 'Spec by elevation, not catalogue',
    body: 'Ice shield coverage, insulation R-value and ventilation strategy are set by where your house actually sits on the mountain.',
  },
  {
    title: 'We stay for the warranty',
    body: 'Permanently local to Western NC. No out-of-state plates, no post-storm disappearing act, no phone number that stops working in year three.',
  },
];

/* ══════════════════════════════════════════════════════════════
   GOOD / BETTER / BEST
   This is True North's actual table presentation, published up front.
   No prices — the honest position is that the number depends on the roof.
   ══════════════════════════════════════════════════════════════ */
export const tiers = [
  {
    name: 'Good',
    tagline: 'A sound, code-correct roof',
    summary:
      'Everything required to make the roof watertight and warrantable. Nothing padded, nothing skipped.',
    includes: [
      'Full tear-off to the deck',
      'Decking inspection and rot repair',
      'Synthetic underlayment throughout',
      'Ice & water shield at eaves and valleys',
      'Architectural shingle, 6-nail pattern',
      'New drip edge and pipe boots',
      'Lifetime Craftsmanship Warranty',
    ],
    best: 'Rental properties, homes you plan to sell inside five years, and budgets that need to work right now.',
    featured: false,
  },
  {
    name: 'Better',
    tagline: 'The system, not just the covering',
    summary:
      'Adds the components that decide how long the roof actually lasts — ventilation, flashing and water management.',
    includes: [
      'Everything in Good',
      'All step and counter flashing replaced',
      'Ventilation balanced intake-to-exhaust',
      'Soffit baffles where insulation blocks intake',
      'Continuous ridge vent',
      'Double-row ice & water shield at elevation',
      'Seamless gutter integration',
    ],
    best: 'Most Western NC homeowners. This is the option that stops the roof failing early for reasons that have nothing to do with the shingle.',
    featured: true,
  },
  {
    name: 'Best',
    tagline: 'Built to outlast the mortgage',
    summary:
      'Standing seam metal and the full envelope upgrade. The roof you install once and stop thinking about.',
    includes: [
      'Everything in Better',
      'Standing seam metal, concealed clip fasteners',
      'Kynar 500 / PVDF finish system',
      'High-temperature synthetic underlayment',
      'Deck flattening to prevent oil canning',
      'Snow retention system at elevation',
      'Attic insulation upgrade to R-38+',
    ],
    best: 'Forever homes, high-elevation properties, wildland-interface lots and anyone who would rather solve this once.',
    featured: false,
  },
];
