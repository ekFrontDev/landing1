import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./app/styles'],
  },
  experimental: {
    cssChunking: true, // default
  },
};

export default nextConfig;
