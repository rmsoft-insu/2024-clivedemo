/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT: process.env.NEXT_PUBLIC_CLIENT,
    ADMIN: process.env.NEXT_PUBLIC_ADMIN,
    PROJECT: process.env.NEXT_PUBLIC_PROJECT,
  },
};

export default nextConfig;
