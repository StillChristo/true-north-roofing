import Link from 'next/link';
import { site, nav } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="section section--ink" style={{ minHeight: '58vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap-narrow">
        <p className="eyebrow">Error 404</p>
        <h1 style={{ color: '#fff', marginBottom: 18 }}>That page is not on this roof.</h1>
        <p className="lead">
          The link may have moved or never existed. Here is where most people are heading:
        </p>
        <ul className="area-list" style={{ marginTop: 28 }}>
          {nav.map((n) => (
            <li key={n.href} style={{ padding: 0, border: 'none', background: 'none' }}>
              <Link href={n.href} style={{ display: 'block', padding: '8px 13px', border: '1px solid var(--color-ink-line)', background: 'var(--color-ink-2)' }}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="btn-row" style={{ marginTop: 34 }}>
          <Link href="/" className="btn btn--primary">
            Back to the homepage
          </Link>
          <a href={site.phoneHref} className="btn btn--onDark">
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
