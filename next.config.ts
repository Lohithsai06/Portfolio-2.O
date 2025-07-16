import type { NextConfig } from "next";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
,
  images: {
    domains: ['media3.giphy.com'],
  },
  /* config options here */
};

export default nextConfig;
