/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["pbs.twimg.com", "instagram.fist2-4.fna.fbcdn.net"],
  },
};

module.exports = nextConfig;
