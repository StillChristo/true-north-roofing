import { site, serviceAreas } from '@/lib/site';

const ID = `${site.url}/#business`;

function Json({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped below to prevent breaking out of the script tag.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}

/**
 * Site-wide RoofingContractor + WebSite graph. Rendered once in the root layout.
 *
 * NOTE: aggregateRating is deliberately omitted. Google penalises self-serving
 * review markup that is not backed by on-page reviews you actually collected.
 * Add it only once you have real reviews rendered on the page.
 */
export function BusinessSchema() {
  const sameAs = Object.values(site.profiles).filter(Boolean);

  return (
    <Json
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': ['RoofingContractor', 'LocalBusiness'],
            '@id': ID,
            name: site.name,
            legalName: site.legalName,
            url: site.url,
            telephone: site.phone,
            email: site.email,
            slogan: site.tagline,
            description:
              'Roof replacement, roof repair, standing seam metal roofing and seamless gutters serving Asheville and Western North Carolina. Photo-documented installs backed by a Lifetime Craftsmanship Warranty.',
            image: `${site.url}/images/hero-standing-seam.webp`,
            logo: `${site.url}/icon.png`,
            priceRange: '$$',
            address: {
              '@type': 'PostalAddress',
              ...(site.address.street ? { streetAddress: site.address.street } : {}),
              addressLocality: site.address.city,
              addressRegion: site.address.region,
              postalCode: site.address.postalCode,
              addressCountry: site.address.country,
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: site.geo.lat,
              longitude: site.geo.lng,
            },
            areaServed: serviceAreas.towns.map((t) => ({
              '@type': 'City',
              name: `${t}, NC`,
            })),
            openingHoursSpecification: site.openingHours.map((h) => ({
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: h.days,
              opens: h.opens,
              closes: h.closes,
            })),
            ...(sameAs.length ? { sameAs } : {}),
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Roofing services',
              itemListElement: [
                'Roof replacement',
                'Roof repair and emergency tarping',
                'Standing seam metal roofing',
                'Seamless gutter installation',
                'Gutter cleaning and maintenance',
                'Roof inspections',
              ].map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s },
              })),
            },
          },
          {
            '@type': 'WebSite',
            '@id': `${site.url}/#website`,
            url: site.url,
            name: site.name,
            alternateName: 'True North Roofing Solutions',
            publisher: { '@id': ID },
            inLanguage: 'en-US',
          },
        ],
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <Json
      data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url,
        serviceType: name,
        provider: { '@id': ID },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Western North Carolina',
        },
      }}
    />
  );
}

export function FaqSchema({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <Json
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({ trail }: { trail: { name: string; href: string }[] }) {
  return (
    <Json
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: trail.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: t.name,
          item: `${site.url}${t.href}`,
        })),
      }}
    />
  );
}
