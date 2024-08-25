/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['magicui.design', 'picsum.photos', 'guezelsoezler.com', 'example.com'], // Füge hier die erlaubten Domains hinzu
  },
};

export default nextConfig;