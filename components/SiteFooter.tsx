import Link from 'next/link';
import { site, serviceAreas, nav } from '@/lib/site';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap-wide">
        <div className="footer-grid">
          <div className="footer-col">
            <h2 className="footer-h">True North Roofing</h2>
            <p style={{ fontSize: '1.02rem', color: 'var(--color-text-onDark)', marginBottom: 18, maxWidth: '34ch' }}>
              {site.tagline}
            </p>
            <p style={{ fontSize: '0.94rem', marginBottom: 16 }}>
              Roof replacement, repair, metal roofing and seamless gutters across the Asheville metro
              and the surrounding mountain counties.
            </p>
            <p className="mono" style={{ color: 'var(--color-brand)' }}>
              {site.motto}
            </p>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">Services</h2>
            <ul>
              {nav
                .filter((n) => n.href !== '/about')
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
              <li>
                <Link href="/contact">Request an inspection</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">Company</h2>
            <ul>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/about#warranty">Our warranty</Link>
              </li>
              <li>
                <Link href="/about#checklist">The 30-point checklist</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              {site.profiles.bbb && (
                <li>
                  <a href={site.profiles.bbb} target="_blank" rel="noopener noreferrer">
                    BBB profile
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">Contact</h2>
            <ul>
              <li>
                <a href={site.phoneHref} style={{ fontSize: '1.12rem', color: '#fff', fontWeight: 600 }}>
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={site.emailHref}>{site.email}</a>
              </li>
              <li style={{ marginTop: 6 }}>
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </li>
            </ul>
            <h2 className="footer-h" style={{ marginTop: 26 }}>
              Hours
            </h2>
            <ul>
              {site.hours.map((h) => (
                <li key={h.days} style={{ fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-text-onDark)' }}>{h.days}</span>
                  <br />
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 'clamp(34px, 4vw, 56px)' }}>
          <h2 className="footer-h">Service area</h2>
          <ul className="area-list">
            {serviceAreas.towns.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {site.legalName}. All rights reserved.
          </span>
          <span>Licensed &amp; insured in North Carolina · BBB Accredited</span>
        </div>
      </div>
    </footer>
  );
}
