import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; freq: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1.0, freq: 'weekly' },
    { path: '/roof-replacement', priority: 0.9, freq: 'monthly' },
    { path: '/metal-roofing', priority: 0.9, freq: 'monthly' },
    { path: '/roof-repair', priority: 0.9, freq: 'monthly' },
    { path: '/roof-inspections', priority: 0.85, freq: 'monthly' },
    { path: '/gutters', priority: 0.8, freq: 'monthly' },
    { path: '/about', priority: 0.7, freq: 'monthly' },
    { path: '/contact', priority: 0.8, freq: 'monthly' },
  ];

  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
