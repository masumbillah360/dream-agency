/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz'
      },
      {
        protocol: 'https',
        hostname: 'landingfoliocom.imgix.net'
      }
    ],
  },
};

export default nextConfig;
