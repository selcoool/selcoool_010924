/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['example.com'], // Add your allowed image domains here
        formats: ['image/avif', 'image/webp'], // Supported formats
      },

    reactStrictMode: true,

    // reactStrictMode: true, // or false depending on your needs
};

export default nextConfig;
