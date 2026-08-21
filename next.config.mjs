/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Your current sitemap has URLs this site renames. Uncomment before the DNS
  // switch so Google carries the existing ranking over instead of hitting a 404.
  // async redirects() {
  //   return [
  //     { source: '/roof-replacements', destination: '/roof-replacement', permanent: true },
  //     { source: '/roof-repairs', destination: '/roof-repair', permanent: true },
  //     { source: '/metal-roofing', destination: '/metal-roofing', permanent: true },
  //     { source: '/asphalt-shingle-roofing', destination: '/roof-replacement', permanent: true },
  //     { source: '/gutter-cleaning', destination: '/gutters', permanent: true },
  //     { source: '/flatlow-slope-roofing-tpoepdm', destination: '/roof-replacement', permanent: true },
  //     { source: '/services-content', destination: '/', permanent: true },
  //     { source: '/appointments', destination: '/contact', permanent: true },
  //     { source: '/home', destination: '/', permanent: true },
  //   ];
  // },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
