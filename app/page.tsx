import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import { FaqSchema } from '@/components/Schema';
import { site, trustSignals, serviceAreas } from '@/lib/site';
import {
  hero,
  failureModes,
  elevationBands,
  services,
  checklist,
  process,
  gallery,
  reviews,
  faqs,
  materials,
  whyUs,
  tiers,
} from '@/lib/content';

export const metadata: Metadata = {
  title: 'Roofing in Asheville & Western NC | True North Roofing',
  description:
    'Roof replacement, repair, standing seam metal and seamless gutters in Asheville, Hendersonville, Waynesville and Brevard. Free photo-documented inspection and a Lifetime Craftsmanship Warranty.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* ═══════════════ HERO — problem framing + primary CTA ═══════════════ */}
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/images/hero-standing-seam.webp"
            alt="Standing seam metal roof installed by True North Roofing on a wooded Western North Carolina property"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: '35% 55%' }}
          />
        </div>
        <div className="hero__scrim" aria-hidden="true" />

        <div className="wrap-wide hero__inner">
          <div className="hero__copy">
            <p className="hero__eyebrow">{hero.eyebrow}</p>
            <h1 className="hero__title">
              {hero.title[0]}
              <br />
              <em>{hero.title[1]}</em>
            </h1>
            <p className="hero__sub">{hero.sub}</p>

            <div className="btn-row">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Get My Free Roof Health Report
              </Link>
              <a href={site.phoneHref} className="btn btn--onDark btn--lg">
                Call {site.phone}
              </a>
            </div>

            <ul className="hero__assurance">
              {hero.assurances.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>

            {/* Material swatches — concrete beats abstract in the first viewport */}
            <div className="materials">
              {materials.map((m) => (
                <Link key={m.label} href={m.href} className="material">
                  <span className="material__img">
                    <Image src={m.img} alt={m.alt} width={220} height={165} sizes="120px" />
                  </span>
                  <span className="material__label">{m.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <div className="quote-card">
              <p className="quote-card__title">Book a free inspection</p>
              <p className="quote-card__sub">
                About an hour on site. Photos and an honest read on remaining service life — even
                if the answer is that you do not need us yet.
              </p>
              <LeadForm compact />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ TRUST STRIP ═══════════════ */}
      <section className="trust-strip" aria-label="Credentials">
        <div className="wrap-wide">
          <div className="trust-strip__inner">
            {trustSignals.map((t) => (
              <div className="trust-strip__item" key={t.label}>
                <span className="trust-strip__label">{t.label}</span>
                <span className="trust-strip__detail">{t.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ PROBLEM / AGITATION ═══════════════ */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="sec-head sec-head--split">
              <div>
                <p className="eyebrow">The problem</p>
                <h2>In these mountains, a roof almost never fails all at once.</h2>
              </div>
              <p className="lead">
                It fails at one detail, quietly, for two or three seasons — and by the time you can
                see it from inside the house, the repair has already gotten expensive.
              </p>
            </div>
          </Reveal>

          <div className="failure-grid">
            {failureModes.map((f, i) => (
              <Reveal key={f.tag} delay={i * 90}>
                <article className="failure-card">
                  <div className="failure-card__img">
                    <Image
                      src={f.img}
                      alt={f.alt}
                      width={800}
                      height={500}
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  </div>
                  <div className="failure-card__body">
                    <span className="failure-card__tag">{f.tag}</span>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ELEVATION BANDS — signature local expertise ═══════════════ */}
      <section className="section section--ink">
        <div className="wrap">
          <Reveal>
            <div className="sec-head sec-head--split">
              <div>
                <p className="eyebrow">Local specification</p>
                <h2>What your roof is fighting depends on your elevation.</h2>
              </div>
              <p className="lead">
                A roof in Arden and a roof in Maggie Valley are solving completely different
                physics problems. We spec to the elevation band, not to a catalogue.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="elevation">
              <div className="elev-row elev-row--head" aria-hidden="true">
                <span>Zone</span>
                <span>What fails</span>
                <span>What we specify</span>
              </div>
              {elevationBands.map((b) => (
                <div className="elev-row" key={b.zone}>
                  <div>
                    <p className="elev-zone__name">{b.zone}</p>
                    <p className="elev-zone__alt">{b.alt}</p>
                    <p
                      style={{
                        fontSize: '0.83rem',
                        color: 'var(--color-text-onDark-muted)',
                        marginTop: 8,
                      }}
                    >
                      {b.towns}
                    </p>
                  </div>
                  <div className="elev-risk">{b.risk}</div>
                  <div className="elev-spec">
                    <ul>
                      {b.specs.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ SERVICES ═══════════════ */}
      <section className="section">
        <div className="wrap-wide">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">What we do</p>
              <h2>Six services. One standard of documentation.</h2>
            </div>
          </Reveal>

          <div className="svc-grid">
            {services.map((s, i) => (
              <Reveal key={s.href} delay={i * 70} className={`svc-card--${s.size}`}>
                <Link href={s.href} className={`svc-card svc-card--${s.size}`} style={{ height: '100%' }}>
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="svc-card__body">
                    <span className="svc-card__num">{s.n}</span>
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                    <span className="svc-card__go">See the detail</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY US — credibility density ═══════════════ */}
      <section className="section section--sand">
        <div className="wrap">
          <div className="whyus">
            <Reveal>
              <div className="whyus__media">
                <Image
                  src="/images/inspector-photo-proof.webp"
                  alt="True North Roofing inspector photographing roof condition during an inspection"
                  width={1000}
                  height={1250}
                  sizes="(max-width: 940px) 100vw, 45vw"
                  loading="lazy"
                />
                <div className="stat-badge">
                  <div className="stat-badge__num">30</div>
                  <div className="stat-badge__label">Checkpoints before the dumpster leaves</div>
                </div>
                <div className="float-quote">
                  <p>
                    &ldquo;Here is what we found, here is what it means, and here are your best-fit
                    options.&rdquo;
                  </p>
                  <span>What we say at the table — every time</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div>
                <p className="eyebrow">Why homeowners pick us</p>
                <h2>Four things a storm chaser cannot copy.</h2>
                <p className="lead" style={{ marginTop: 18 }}>
                  Anyone can buy shingles. What separates a roof that lasts twenty-five years from
                  one that fails in nine is documentation, specification and whether the company is
                  still here when it matters.
                </p>
                <div className="whyus__grid">
                  {whyUs.map((w) => (
                    <div className="whyus__cell" key={w.title}>
                      <h3>{w.title}</h3>
                      <p>{w.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ GOOD / BETTER / BEST ═══════════════ */}
      <section className="section section--ink" id="options">
        <div className="wrap">
          <Reveal>
            <div className="sec-head sec-head--split">
              <div>
                <p className="eyebrow">At the table</p>
                <h2>Three options. Published before you ever call us.</h2>
              </div>
              <p className="lead">
                Most contractors keep the option structure secret until a salesperson is sitting in
                your kitchen. Here it is up front, so you can work out what you actually want before
                anyone tries to sell you anything.
              </p>
            </div>
          </Reveal>

          <div className="tiers">
            {tiers.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className={`tier${t.featured ? ' tier--featured' : ''}`}>
                  {t.featured && <span className="tier__flag">Most homeowners</span>}
                  <div className="tier__name">{t.name}</div>
                  <p className="tier__tagline">{t.tagline}</p>
                  <p className="tier__summary">{t.summary}</p>
                  <ul className="tier__list">
                    {t.includes.map((inc) => (
                      <li key={inc}>{inc}</li>
                    ))}
                  </ul>
                  <div className="tier__best">
                    <strong>Best for</strong>
                    <span>{t.best}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p
              className="lead"
              style={{ marginTop: 'clamp(28px, 3vw, 44px)', maxWidth: '76ch' }}
            >
              We do not publish prices, because a price quoted without seeing your roof is a guess
              dressed up as a number. What we will do is line-item all three options against your
              actual measurements and let you compare them side by side.
            </p>
            <div className="btn-row" style={{ marginTop: 26 }}>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Get all three options priced
              </Link>
              <a href={site.phoneHref} className="btn btn--onDark btn--lg">
                Call {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════ 30-POINT CHECKLIST — proof of process ═══════════════ */}
      <section className="section section--ink" id="checklist">
        <div className="wrap">
          <div className="checklist-layout">
            <Reveal>
              <div>
                <p className="eyebrow">The Zero Punch List protocol</p>
                <h2>The dumpster does not leave until all thirty pass.</h2>
                <p className="lead" style={{ marginTop: 20 }}>
                  Most roofing complaints in this region are not about watertightness. They are
                  about process — nails in the driveway, granules in the attic, a crew that
                  disappeared before anyone walked the property together.
                </p>
                <p className="lead" style={{ marginTop: 16 }}>
                  So we made the process the product. Every install runs against the same
                  thirty-point foreman checklist, and the homeowner walks it with the foreman
                  before the dumpster is released. This is the actual list. Nothing is held back.
                </p>
                <ul className="checkpoints" style={{ marginTop: 28 }}>
                  <li>Magnet sweeps twice daily, plus a final grid sweep on completion</li>
                  <li>Attic tarped on older open-deck homes before tear-off begins</li>
                  <li>Photos at every stage, uploaded as the job runs</li>
                  <li>Warranty clock starts the day you sign off — not the day we started</li>
                </ul>
                <div className="btn-row" style={{ marginTop: 30 }}>
                  <Link href="/contact" className="btn btn--primary">
                    Get My Free Roof Health Report
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="checklist">
                <div className="checklist__head">
                  <span>Foreman 30-point checklist</span>
                  <span>Rev. 2026</span>
                </div>
                {checklist.map((group, gi) => {
                  const offset = checklist
                    .slice(0, gi)
                    .reduce((acc, g) => acc + g.items.length, 0);
                  return (
                    <div className="checklist__group" key={group.group}>
                      <p className="checklist__group-name">{group.group}</p>
                      <ul className="checklist__items">
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
        </div>
      </section>

      {/* ═══════════════ PROCESS ═══════════════ */}
      <section className="section section--paper">
        <div className="wrap">
          <Reveal>
            <div className="sec-head sec-head--split">
              <div>
                <p className="eyebrow">How it goes</p>
                <h2>Teach first. Then sell — if there is anything to sell.</h2>
              </div>
              <p className="lead">
                Six steps from your first call to your warranty registration. No same-day
                discount, no manufactured deadline, no pressure at the table.
              </p>
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

      {/* ═══════════════ PROOF — work + reviews ═══════════════ */}
      <section className="section">
        <div className="wrap-wide">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Recent work</p>
              <h2>Roofs we have actually installed.</h2>
              <p className="lead" style={{ marginTop: 14 }}>
                Not stock photography. These are Western North Carolina jobs — steep pitches,
                historic structures, commercial low-slope and mountain cabins.
              </p>
            </div>
          </Reveal>

          <div className="projects">
            {gallery.map((g, i) => {
              const [title, place] = g.cap.split(' · ');
              return (
                <Reveal key={g.img + g.cap} delay={(i % 4) * 70}>
                  <article className="project">
                    <div className="project__img">
                      <Image
                        src={g.img}
                        alt={g.alt}
                        width={800}
                        height={600}
                        sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="project__card">
                      <h3>{title}</h3>
                      <p>{place ?? 'Western North Carolina'}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {reviews.length > 0 && (
            <>
              <Reveal>
                <div className="sec-head" style={{ marginTop: 'var(--space-section)' }}>
                  <p className="eyebrow">What homeowners say</p>
                  <h2>The reviews we care about are the ones about cleanup.</h2>
                </div>
              </Reveal>

              <div className="reviews">
                {reviews.map((r, i) => (
                  <Reveal key={r.quote} delay={i * 80}>
                    <blockquote className="review">
                      <div className="review__stars" aria-label={`${r.stars} out of 5 stars`}>
                        {'★'.repeat(r.stars)}
                      </div>
                      <p className="review__quote">&ldquo;{r.quote}&rdquo;</p>
                      <footer className="review__who">{r.who}</footer>
                    </blockquote>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ═══════════════ GUARANTEE / RISK REVERSAL ═══════════════ */}
      <section className="section section--ink" id="warranty">
        <div className="wrap">
          <div className="guarantee">
            <Reveal>
              <div>
                <p className="eyebrow">Risk reversal</p>
                <h2>A warranty written to be read, not to be survived.</h2>
                <p className="lead" style={{ marginTop: 20 }}>
                  Most roofing warranties are a page of exclusions with a headline on top. Ours
                  covers our workmanship in plain English, the material warranty is registered on
                  your behalf, and the clock starts the day you sign off on the walkthrough.
                </p>
                <p className="lead" style={{ marginTop: 16 }}>
                  We can write it that way because of the checklist. It is a lot cheaper to install
                  it correctly the first time than to argue about it in year seven.
                </p>
                <div className="btn-row" style={{ marginTop: 30 }}>
                  <Link href="/about" className="btn btn--onDark">
                    How we work
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <dl className="guarantee__seal">
                <dt>Lifetime Craftsmanship Warranty</dt>
                <dd>
                  Our installation workmanship, covered for as long as you own the home. Plain
                  language, no exclusions appendix.
                </dd>
                <dt>Zero Punch List Protocol</dt>
                <dd>
                  Thirty checkpoints, a joint walkthrough, and a dumpster that stays until you are
                  satisfied.
                </dd>
                <dt>CleanSite Promise</dt>
                <dd>
                  Magnet sweeps twice a day and a filmed final sweep sent to you on completion.
                </dd>
                <dt>24-Hour Leak Hotline</dt>
                <dd>
                  Warranty claims triaged within one business day. Active leaks get a same-day
                  tarp.
                </dd>
                <dt>No deductible games</dt>
                <dd>
                  We will never offer to waive or absorb your insurance deductible. It is fraud,
                  and it tells you what a contractor is willing to do when nobody is watching.
                </dd>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ SERVICE AREA ═══════════════ */}
      <section className="section section--tight section--sand">
        <div className="wrap">
          <Reveal>
            <div className="sec-head sec-head--split">
              <div>
                <p className="eyebrow">Where we work</p>
                <h2>Asheville metro and the surrounding mountain counties.</h2>
              </div>
              <p className="lead">
                {serviceAreas.counties.join(' · ')} counties. If you are not sure whether you are
                in range, call and ask — we will tell you honestly rather than driving out to find
                out.
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
        </div>
      </section>

      {/* ═══════════════ OBJECTION HANDLING ═══════════════ */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="sec-head">
              <p className="eyebrow">Straight answers</p>
              <h2>The questions people actually ask us.</h2>
            </div>
          </Reveal>
          <div className="faq-layout">
            <Reveal>
              <aside className="faq-aside">
                <div className="faq-aside__img">
                  <Image
                    src="/images/crew-handoff.webp"
                    alt="True North Roofing crew members in safety gear on a job site"
                    width={900}
                    height={1200}
                    sizes="(max-width: 900px) 100vw, 340px"
                    loading="lazy"
                  />
                </div>
                <a href={site.phoneHref} className="call-card">
                  <span className="call-card__icon" aria-hidden="true">
                    ☎
                  </span>
                  <span>
                    <span className="call-card__label">Rather just ask someone?</span>
                    <span className="call-card__num">{site.phone}</span>
                  </span>
                </a>
              </aside>
            </Reveal>
            <Reveal delay={80}>
              <FAQ items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="section section--ink" id="quote">
        <div className="wrap">
          <div className="cta-block">
            <Reveal>
              <div>
                <p className="eyebrow">Next step</p>
                <h2>Find out what is actually happening on your roof.</h2>
                <p className="lead" style={{ marginTop: 20 }}>
                  About an hour on site. Every plane photographed, the attic checked, ventilation
                  assessed. You get a written Roof Health Report with an honest remaining service
                  life — and it is yours to keep whether you hire us or not.
                </p>
                <ul className="checkpoints" style={{ marginTop: 28 }}>
                  <li>Free, with no obligation and no fee</li>
                  <li>No high-pressure table close and no same-day discount</li>
                  <li>If your roof is fine, the report says so in writing</li>
                </ul>
                <div className="btn-row" style={{ marginTop: 30 }}>
                  <a href={site.phoneHref} className="btn btn--onDark btn--lg">
                    Call {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="quote-card">
                <p className="quote-card__title">Request your inspection</p>
                <p className="quote-card__sub">
                  We will call you back to schedule — usually the same business day.
                </p>
                <LeadForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSchema items={faqs} />
    </>
  );
}
