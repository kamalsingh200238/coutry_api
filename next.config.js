/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagcdn.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
