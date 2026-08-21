import Link from 'next/link';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import { BreadcrumbSchema } from '@/components/Schema';
import { site, serviceAreas } from '@/lib/site';

export const metadata: Metadata = {
  title: { absolute: 'Request a Free Roof Inspection | True North Roofing, Asheville NC' },
  description:
    'Book a free, photo-documented roof inspection anywhere in the Asheville metro and Western North Carolina. Call (828) 507-0778 or request a Roof Health Report online.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="section section--ink" style={{ paddingBottom: 'clamp(44px, 5vw, 72px)' }}>
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            Contact
          </nav>
          <div className="cta-block" style={{ alignItems: 'start' }}>
            <Reveal>
              <div>
                <p className="eyebrow">Free inspection</p>
                <h1 style={{ color: '#fff', marginBottom: 20 }}>
                  Let&rsquo;s find out what is actually happening up there.
                </h1>
                <p className="lead">
                  About an hour on site. Every roof plane photographed, the attic checked,
                  ventilation assessed and decking evaluated. You get a written Roof Health Report
                  with an honest remaining service life — and it is yours to keep whether you hire
                  us or not.
                </p>

                <ul className="checkpoints" style={{ marginTop: 30 }}>
                  <li>No fee, no obligation, no high-pressure close</li>
                  <li>Same-day tarping if water is actively coming in</li>
                  <li>Three line-itemed options if you do need work done</li>
                  <li>We will tell you if your roof has good years left</li>
                </ul>

                <div
                  style={{
                    marginTop: 40,
                    paddingTop: 32,
                    borderTop: '1px solid var(--color-ink-line)',
                    display: 'grid',
                    gap: 26,
                  }}
                >
                  <div>
                    <p className="mono" style={{ color: 'var(--color-brand)', marginBottom: 8 }}>
                      Call or text
                    </p>
                    <a
                      href={site.phoneHref}
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.7rem, 3vw, 2.4rem)',
                        fontWeight: 700,
                        color: '#fff',
                        letterSpacing: '-0.025em',
                        textDecoration: 'none',
                      }}
                    >
                      {site.phone}
                    </a>
                    <p style={{ marginTop: 6, fontSize: '0.9rem' }}>
                      24-hour leak hotline for active leaks
                    </p>
                  </div>

                  <div>
                    <p className="mono" style={{ color: 'var(--color-brand)', marginBottom: 8 }}>
                      Email
                    </p>
                    <a
                      href={site.emailHref}
                      style={{
                        color: '#fff',
                        fontSize: '1.05rem',
                        display: 'inline-block',
                        paddingBlock: 4,
                      }}
                    >
                      {site.email}
                    </a>
                  </div>

                  <div>
                    <p className="mono" style={{ color: 'var(--color-brand)', marginBottom: 8 }}>
                      Hours
                    </p>
                    {site.hours.map((h) => (
                      <p key={h.days} style={{ fontSize: '0.95rem' }}>
                        <span style={{ color: 'var(--color-text-onDark)' }}>{h.days}</span> —{' '}
                        {h.time}
                      </p>
                    ))}
                  </div>

                  <div>
                    <p className="mono" style={{ color: 'var(--color-brand)', marginBottom: 8 }}>
                      Based in
                    </p>
                    <p style={{ fontSize: '0.95rem' }}>
                      {site.address.city}, {site.address.region} {site.address.postalCode} —
                      serving the Asheville metro and surrounding mountain counties.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="quote-card">
                <p className="quote-card__title">Request your Roof Health Report</p>
                <p className="quote-card__sub">
                  We will call you back to schedule — usually the same business day. If water is
                  coming in right now, please call instead so we can get a tarp on it.
                </p>
                <LeadForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--tight section--sand">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Service area</p>
              <h2>Towns we cover</h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <ul className="area-list">
              {serviceAreas.towns.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90}>
            <p className="lead" style={{ marginTop: 26 }}>
              Covering {serviceAreas.counties.join(', ')} counties. Not sure whether you are in
              range? Call and ask — we will give you a straight answer rather than driving out to
              find out.
            </p>
          </Reveal>
        </div>
      </section>

      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
      />
    </>
  );
}
