/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'cdn.mos.cms.futurecdn.net',
      'scontent-bcn1-1.cdninstagram.com',
    ],
  },
};

module.exports = nextConfig;
