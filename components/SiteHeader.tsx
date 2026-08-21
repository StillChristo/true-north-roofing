'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { site, nav } from '@/lib/site';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div className="utility-bar">
        <div className="wrap-wide utility-bar__inner">
          <ul className="utility-bar__badges" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li className="utility-bar__badge">
              <span className="utility-bar__dot" aria-hidden="true" />
              Asheville &amp; Western NC
            </li>
            <li className="utility-bar__badge" style={{ display: 'none' }} data-wide>
              <span className="utility-bar__dot" aria-hidden="true" />
              BBB Accredited
            </li>
            <li className="utility-bar__badge">
              <span className="utility-bar__dot" aria-hidden="true" />
              Licensed &amp; Insured
            </li>
          </ul>
          <div>
            24-hr leak line{' '}
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="wrap-wide site-header__inner">
          <Link href="/" className="brand" aria-label={`${site.name} — home`}>
            <Image
              src="/icon.png"
              alt=""
              width={42}
              height={42}
              className="brand__mark"
              priority
            />
            <span className="brand__text">
              <span className="brand__name">True North Roofing</span>
              <span className="brand__motto">{site.motto}</span>
            </span>
          </Link>

          <nav className="nav" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <a href={site.phoneHref} className="header-phone">
              <span className="header-phone__label">Call now</span>
              <span className="header-phone__num">{site.phone}</span>
            </a>
            <Link href="/contact" className="btn btn--primary" data-desktop-cta>
              Free Inspection
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden="true" />
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          className={`mobile-nav${open ? ' is-open' : ''}`}
          aria-label="Mobile"
          hidden={!open}
        >
          <div className="wrap-wide">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/contact">Contact</Link>
            <Link href="/contact" className="btn btn--primary btn--block">
              Get My Free Roof Health Report
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
