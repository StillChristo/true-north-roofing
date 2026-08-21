import type { Metadata, Viewport } from 'next';
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ActionBar from '@/components/ActionBar';
import { BusinessSchema } from '@/components/Schema';
import { site } from '@/lib/site';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Roofing in Asheville & Western NC | True North Roofing',
    template: '%s | True North Roofing',
  },
  description:
    'Roof replacement, repair, standing seam metal and seamless gutters across Asheville and Western North Carolina. Photo-documented installs, a 30-point checklist and a Lifetime Craftsmanship Warranty.',
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    'roofing Asheville NC',
    'roof replacement Asheville',
    'roof repair Western North Carolina',
    'metal roofing Asheville',
    'standing seam metal roof NC',
    'seamless gutters Asheville',
    'roof inspection Hendersonville',
    'roofing contractor Waynesville NC',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: 'Roofing in Asheville & Western NC | True North Roofing',
    description:
      'Roofs built for the mountains and documented photo by photo. Free inspection and Roof Health Report — no obligation.',
    images: [
      {
        url: '/images/hero-standing-seam.webp',
        width: 1920,
        height: 1080,
        alt: 'Standing seam metal roof installed by True North Roofing in Western North Carolina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing in Asheville & Western NC | True North Roofing',
    description: 'Roofs built for the mountains. Documented photo by photo.',
    images: ['/images/hero-standing-seam.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: { icon: '/icon.png', apple: '/icon.png' },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: '#0c1a24',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <ActionBar />
        <BusinessSchema />
        {site.gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${site.gtmId}');`}
          </Script>
        )}
      </body>
    </html>
  );
}
