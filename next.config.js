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
  // TypeScript checking enabled for better code quality
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow ESLint warnings during build (but still show them)
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default withNextIntl(nextConfig);