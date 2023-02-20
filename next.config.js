/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
      remotePatterns: [
      // path for imgur images, now using for LinkedIn and GitHub .png logo
      // https://imgur.com/{imageId}
      {
        protocol: 'https',
        hostname: 'imgur.com',
        port: '',
        pathname: '/*.png'
      }
    ],
  },
};

module.exports = nextConfig;
