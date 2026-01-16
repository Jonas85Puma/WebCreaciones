/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.web-creaciones.com',
      },
      {
        protocol: 'https',
        hostname: 'web-creaciones.vercel.app',
      },
    ],
  },
}

module.exports = nextConfig
