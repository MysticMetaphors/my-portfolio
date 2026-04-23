import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [50, 60, 75], 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagsapi.com',
        port: '',
        pathname: '/PH/flat/**',
      },
    ],
  },
};

export default nextConfig;
