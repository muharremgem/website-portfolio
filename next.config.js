/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "pbs.twimg.com",
      "instagram.fist2-4.fna.fbcdn.net",
      "w7.pngwing.com",
    ],
  },
};

module.exports = nextConfig;
