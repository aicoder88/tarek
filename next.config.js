import createNextIntlPlugin from 'next-intl/plugin';
import path from 'node:path';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force file tracing root to this workspace to avoid monorepo lockfile confusion
  outputFileTracingRoot: path.resolve('.'),
  images: {
    domains: ['images.unsplash.com', 'api.dicebear.com']
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  },
  // Disable TypeScript checking during build for deployment
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withNextIntl(nextConfig);