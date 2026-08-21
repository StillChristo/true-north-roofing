import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import { BreadcrumbSchema } from '@/components/Schema';
import { site, serviceAreas } from '@/lib/site';
import { checklist, process } from '@/lib/content';

export const metadata: Metadata = {
  title: { absolute: 'About True North Roofing | Asheville, NC Roofing Contractor' },
  description:
    'Who we are, how we install, and what the Lifetime Craftsmanship Warranty actually covers. CraftsmanCert crews, the 30-point checklist and the Zero Punch List protocol.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__media">
          <Image
            src="/images/church-metal-roof.webp"
            alt="Historic church in Western North Carolina with a newly installed metal roof by True North Roofing"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="page-hero__scrim" aria-hidden="true" />
        <div className="wrap page-hero__inner">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            About
          </nav>
          <p className="hero__eyebrow">{site.motto}</p>
          <h1>Where craftsmanship meets conviction.</h1>
          <p>
            We are a permanent local roofing company in Asheville — not a storm-response crew that
            arrives after hail and disappears before the warranty matters.
          </p>
        </div>
      </section>

      {/* ── Positioning ─────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="checklist-layout">
            <Reveal>
              <div className="prose">
                <p className="eyebrow">Who we are</p>
                <h2 style={{ marginTop: 0 }}>We would rather teach than close.</h2>
                <p>
                  Roofing has a trust problem, and it is earned. Storm chasers roll into Western
                  North Carolina after every significant hail event with out-of-state plates and
                  a pitch about a free roof. Homeowners sign, the crew leaves, and five years later
                  there is nobody to call.
                </p>
                <p>
                  We built True North to be the opposite of that. Our sales philosophy is
                  literally &ldquo;teach first, then sell&rdquo; — we would rather lose a job to a
                  homeowner who did not need one than sell a roof that had eight good years left in
                  it. We give you the photographs, we explain what they mean, and then we let you
                  decide.
                </p>
                <p>
                  That is not altruism. It is the referral engine. In a market this size,
                  reputation compounds faster than advertising does.
                </p>

                <h2>What we refuse to do</h2>
                <ul className="checkpoints" style={{ marginTop: 18 }}>
                  <li>
                    <strong>We never waive deductibles.</strong> It is insurance fraud, and a
                    contractor willing to commit it for you is telling you exactly what they are
                    willing to do to you.
                  </li>
                  <li>
                    <strong>We do not chase storms.</strong> We work the market we live in, year
                    round, including the winter months when it is not profitable to be visible.
                  </li>
                  <li>
                    <strong>No same-day discount.</strong> If a price is only good while the
                    salesperson is standing in your kitchen, it was never a real price.
                  </li>
                  <li>
                    <strong>No single lump-sum quotes.</strong> Every proposal is line-itemed
                    across three scoped options so you can see exactly what changes between them.
                  </li>
                </ul>

                <h2 id="warranty">The Lifetime Craftsmanship Warranty</h2>
                <p>
                  Our warranty covers our workmanship — the installation itself — for as long as
                  you own the home. It is written in plain English with no appendix of exclusions,
                  and the clock starts the day you sign off on the final walkthrough rather than
                  the day we started the job.
                </p>
                <p>
                  Material defects are covered separately by the manufacturer&rsquo;s warranty,
                  which we register on your behalf within 24 hours of completion. You receive a PDF
                  certificate and care instructions.
                </p>
                <p>
                  Warranty claims are triaged within one business day. An active safety leak gets a
                  same-day tarp. Anything else gets an inspection within 48 hours, root-cause
                  analysis, and photo documentation of the resolution.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div style={{ display: 'grid', gap: 22 }}>
                <figure style={{ margin: 0 }}>
                  <Image
                    src="/images/crew-handoff.webp"
                    alt="Two roofing crew members in safety helmets handing over tools on site"
                    width={1000}
                    height={667}
                    sizes="(max-width: 940px) 100vw, 40vw"
                    style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-large)' }}
                  />
                  <figcaption className="mono" style={{ marginTop: 10, color: 'var(--color-text-muted)' }}>
                    CraftsmanCert crews — badged and identifiable on site
                  </figcaption>
                </figure>

                <div
                  style={{
                    border: 'var(--border-default)',
                    borderRadius: 'var(--radius-large)',
                    padding: '26px 26px 28px',
                    background: 'var(--color-surface)',
                  }}
                >
                  <p className="mono" style={{ color: 'var(--color-brand-deep)', marginBottom: 16 }}>
                    CraftsmanCert™ — 7 stages
                  </p>
                  <ol
                    style={{
                      paddingLeft: '1.1em',
                      display: 'grid',
                      gap: 9,
                      fontSize: '0.94rem',
                      color: 'var(--color-text-muted)',
                    }}
                  >
                    <li>Orientation — culture, safety policy, customer promise</li>
                    <li>Safety core — fall protection, ladder, heat, OSHA basics</li>
                    <li>Roofing fundamentals — tear-off, decking, underlayment, flashing</li>
                    <li>Systems &amp; photo standards</li>
                    <li>Specialties — chimneys, valleys, penetrations, standing seam</li>
                    <li>On-roof practicum with photo audits</li>
                    <li>Badge check — written and field evaluation</li>
                  </ol>
                  <p style={{ marginTop: 16, fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                    Annual recertification, random PM audits, and a revoke-or-renew policy on
                    quality issues.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────── */}
      <section className="section section--paper">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">How a job runs</p>
              <h2>Six steps, in the same order, every time.</h2>
            </div>
          </Reveal>
          <div className="process">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 50}>
                <div className="process__step">
                  <span className="process__n">{p.n}</span>
                  <h3 className="process__title">{p.title}</h3>
                  <p className="process__body">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Checklist ───────────────────────────────────────── */}
      <section className="section section--ink" id="checklist">
        <div className="wrap">
          <Reveal>
            <div className="sec-head sec-head--split">
              <div>
                <p className="eyebrow">Quality assurance</p>
                <h2>The full 30-point foreman checklist.</h2>
              </div>
              <p className="lead">
                Published in full, because a standard nobody can see is not a standard. Your
                foreman works this list on every install, and the dumpster does not leave until
                every item passes and you have walked the property with them.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                gap: 'clamp(18px, 2vw, 30px)',
              }}
            >
              {checklist.map((group, gi) => {
                const offset = checklist.slice(0, gi).reduce((a, g) => a + g.items.length, 0);
                return (
                  <div
                    key={group.group}
                    style={{
                      border: '1px solid var(--color-ink-line)',
                      borderRadius: 'var(--radius-large)',
                      padding: '20px 22px 22px',
                      background: 'var(--color-ink-2)',
                    }}
                  >
                    <p className="checklist__group-name" style={{ padding: '0 0 12px' }}>
                      {group.group}
                    </p>
                    <ul className="checklist__items" style={{ padding: 0 }}>
                      {group.items.map((item, ii) => (
                        <li className="checklist__item" key={item}>
                          <span className="checklist__n">
                            {String(offset + ii + 1).padStart(2, '0')}
                          </span>
                          <span className="checklist__tick" aria-hidden="true">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Area + CTA ──────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="sec-head sec-head--split">
              <div>
                <p className="eyebrow">Where we work</p>
                <h2>Permanently local to Western North Carolina.</h2>
              </div>
              <p className="lead">
                {serviceAreas.counties.join(' · ')} counties. We will be here when a warranty claim
                comes in five years from now — which is the entire point.
              </p>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <ul className="area-list">
              {serviceAreas.towns.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="btn-row" style={{ marginTop: 40 }}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Get My Free Roof Health Report
              </Link>
              <a href={site.phoneHref} className="btn btn--outline btn--lg">
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />
    </>
  );
}
