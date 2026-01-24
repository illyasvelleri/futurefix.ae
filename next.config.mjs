/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // port: '',          // optional, usually leave empty for default https (443)
        pathname: '/**',     // allows any path under the domain (e.g. /photo-..., /...)
      },
    ],
  },
};

export default nextConfig;