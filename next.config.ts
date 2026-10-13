import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media3.giphy.com",
      },
    ],
  },
  ...(process.env.ALLOWED_DEV_ORIGINS
    ? {
        allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS.split(",").map((s) =>
          s.trim()
        ),
      }
    : {}),
};

export default nextConfig;


