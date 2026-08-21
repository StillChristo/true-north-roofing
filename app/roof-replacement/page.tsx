import type { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { servicePages } from '@/lib/content';

const data = servicePages['roof-replacement'];

export const metadata: Metadata = {
  title: { absolute: data.metaTitle },
  description: data.metaDescription,
  alternates: { canonical: '/roof-replacement' },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    url: '/roof-replacement',
    images: [{ url: data.heroImg, width: 1600, height: 900, alt: data.heroAlt }],
  },
};

export default function Page() {
  return <ServicePage data={data} />;
}
