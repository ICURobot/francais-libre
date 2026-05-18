import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/.next/**",
          "**/audio-backup/**",
          "**/FrenchBooks/**",
          "**/public/audio/**",
          "**/temp/**",
        ],
      };
    }

    return config;
  },
};

export default nextConfig;
