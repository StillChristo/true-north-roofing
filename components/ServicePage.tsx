import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import LeadForm from '@/components/LeadForm';
import FAQ from '@/components/FAQ';
import { FaqSchema, ServiceSchema, BreadcrumbSchema } from '@/components/Schema';
import { site } from '@/lib/site';
import type { ServicePageData } from '@/lib/content';

export default function ServicePage({ data }: { data: ServicePageData }) {
  const url = `${site.url}/${data.slug}`;

  return (
    <>
      {/* ── Page hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="page-hero__media">
          <Image
            src={data.heroImg}
            alt={data.heroAlt}
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
            {data.h1}
          </nav>
          <p className="hero__eyebrow">{data.eyebrow}</p>
          <h1>{data.h1}</h1>
          <p>{data.intro}</p>
          <div className="btn-row" style={{ marginTop: 30 }}>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Get My Free Roof Health Report
            </Link>
            <a href={site.phoneHref} className="btn btn--onDark btn--lg">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────── */}
      <section className="section">
        <div className="wrap">
          <div className="svc-layout">
            <div>
              <div className="prose">
                {data.sections.map((s, i) => (
                  <Reveal key={s.h2}>
                    <div style={{ marginBottom: 'clamp(34px, 4vw, 56px)' }}>
                      <h2 style={{ marginBottom: '0.6em' }}>{s.h2}</h2>
                      {s.body.map((p) => (
                        <p key={p.slice(0, 40)} style={{ marginBottom: '1.05em' }}>
                          {p}
                        </p>
                      ))}
                      {s.list && (
                        <ul className="checkpoints" style={{ marginTop: 20 }}>
                          {s.list.map((li) => (
                            <li key={li}>{li}</li>
                          ))}
                        </ul>
                      )}
                      {/* Interleave a photograph after the first and third block */}
                      {data.figures?.[i === 0 ? 0 : i === 2 ? 1 : -1] && (
                        <figure style={{ margin: '34px 0 0' }}>
                          <Image
                            src={data.figures[i === 0 ? 0 : 1].img}
                            alt={data.figures[i === 0 ? 0 : 1].alt}
                            width={1200}
                            height={720}
                            sizes="(max-width: 1020px) 100vw, 60vw"
                            loading="lazy"
                            style={{
                              width: '100%',
                              height: 'auto',
                              borderRadius: 'var(--radius-medium)',
                            }}
                          />
                          <figcaption
                            className="mono"
                            style={{ marginTop: 10, color: 'var(--color-text-muted)' }}
                          >
                            {data.figures[i === 0 ? 0 : 1].cap}
                          </figcaption>
                        </figure>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              {data.table && (
                <Reveal>
                  <div style={{ marginBottom: 'clamp(34px, 4vw, 56px)' }}>
                    <div className="table-scroll">
                      <table className="spec-table">
                        <caption>{data.table.caption}</caption>
                        <thead>
                          <tr>
                            {data.table.head.map((h) => (
                              <th key={h} scope="col">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {data.table.rows.map((r) => (
                            <tr key={r.label}>
                              <th scope="row">{r.label}</th>
                              {r.cells.map((c) => (
                                <td key={c}>{c}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {data.table.note && (
                      <p style={{ marginTop: 14, fontSize: '0.86rem', color: 'var(--color-text-muted)' }}>
                        {data.table.note}
                      </p>
                    )}
                  </div>
                </Reveal>
              )}

              {data.callout && (
                <Reveal>
                  <div className="callout" style={{ marginBottom: 'clamp(34px, 4vw, 56px)' }}>
                    <p className="callout__title">{data.callout.title}</p>
                    <p>{data.callout.body}</p>
                  </div>
                </Reveal>
              )}

              <Reveal>
                <div>
                  <h2 style={{ marginBottom: 22 }}>Common questions</h2>
                  <FAQ items={data.faqs} />
                </div>
              </Reveal>
            </div>

            {/* ── Sticky aside ───────────────────────────────── */}
            <aside className="svc-aside">
              <div className="quote-card">
                <p className="quote-card__title">{data.ctaTitle}</p>
                <p className="quote-card__sub">{data.ctaBody}</p>
                <LeadForm compact />
              </div>

              <div
                style={{
                  border: 'var(--border-default)',
                  borderRadius: 'var(--radius-large)',
                  padding: '24px 24px 26px',
                  background: 'var(--color-surface)',
                }}
              >
                <p className="mono" style={{ color: 'var(--color-brand-deep)', marginBottom: 16 }}>
                  What you get
                </p>
                <ul className="checkpoints">
                  {data.aside.map((a) => (
                    <li key={a} style={{ fontSize: '0.94rem' }}>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="section section--ink">
        <div className="wrap">
          <div className="cta-block">
            <Reveal>
              <div>
                <p className="eyebrow">Next step</p>
                <h2>{data.ctaTitle}</h2>
                <p className="lead" style={{ marginTop: 18 }}>
                  {data.ctaBody}
                </p>
                <div className="btn-row" style={{ marginTop: 28 }}>
                  <a href={site.phoneHref} className="btn btn--onDark btn--lg">
                    Call {site.phone}
                  </a>
                  <Link href="/contact" className="btn btn--primary btn--lg">
                    Request an inspection
                  </Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ul className="checkpoints" style={{ gap: 16 }}>
                <li>Free, with no obligation and no fee</li>
                <li>Photo-documented report you keep either way</li>
                <li>Three line-itemed options — never a single lump sum</li>
                <li>Lifetime Craftsmanship Warranty on our workmanship</li>
                <li>We never waive insurance deductibles</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <ServiceSchema name={data.h1} description={data.metaDescription} url={url} />
      <FaqSchema items={data.faqs} />
      <BreadcrumbSchema
        trail={[
          { name: 'Home', href: '/' },
          { name: data.h1, href: `/${data.slug}` },
        ]}
      />
    </>
  );
}
