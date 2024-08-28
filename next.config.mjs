import createNextIntlPlugin from 'next-intl/plugin';


 
/** @type {import('next').NextConfig} */
const nextConfig = {reactStrictMode: true,
images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'magicui.design',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'guezelsoezler.com',
        pathname: '**',
      },
    ],
  },};


export default (nextConfig);