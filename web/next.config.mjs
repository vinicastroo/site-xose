/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'guilherme-schulze-files.s3.us-east-1.amazonaws.com',
        pathname: '**',
      },
    ],
  },
}

export default nextConfig
