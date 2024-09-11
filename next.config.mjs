/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',  // if you have a custom port, you can specify it here
        pathname: '/images/**',  // allows all images under the `/images` path
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
        pathname: '/assets/**',  // allows all images under the `/assets` path
      },
    ],
  },

    reactStrictMode: true,

    // reactStrictMode: true, // or false depending on your needs
};

export default nextConfig;
