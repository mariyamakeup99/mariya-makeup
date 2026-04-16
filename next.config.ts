import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  async redirects() {
    return [
      // 🔁 non-www → www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'makeupbymariya.com',
          },
        ],
        destination: 'https://www.makeupbymariya.com/:path*',
        permanent: true,
      },

      // 🔁 http → https (handled by Vercel automatically, but keep safe)
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;