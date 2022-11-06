/** @type {import('next').NextConfig} */
const nextConfig = {
  image: {
    domains: ['https://source.unsplash.com'],
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
