import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};


module.exports = {
  images: {
    // domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};


export default nextConfig;
