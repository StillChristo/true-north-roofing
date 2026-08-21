import Link from 'next/link';
import { site } from '@/lib/site';

/** Sticky bottom bar on mobile — call and quote are always one thumb away. */
export default function ActionBar() {
  return (
    <div className="action-bar" role="navigation" aria-label="Quick actions">
      <a href={site.phoneHref} className="action-bar__call">
        <strong>{site.phone}</strong>
        <span>Call now</span>
      </a>
      <Link href="/contact" className="action-bar__quote">
        <strong>Free Inspection</strong>
        <span>No obligation</span>
      </Link>
    </div>
  );
}
