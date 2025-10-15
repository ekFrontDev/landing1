import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./styles'],
  },
  experimental: {
    cssChunking: true, // default
  },
};

export default nextConfig;
