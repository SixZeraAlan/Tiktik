/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['drive.google.com', 'lh3.googleusercontent.com',
    'cdn.pixabay.com',
    'p16-amd-va.tiktokcdn.com',
    'image.shutterstock.com', 'commondatastorage.googleapis.com'],
  },
};

module.exports = nextConfig;
