/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    CLIENT: process.env.NEXT_PUBLIC_CLIENT,
    ADMIN: process.env.NEXT_PUBLIC_ADMIN,
    PROJECT: process.env.NEXT_PUBLIC_PROJECT,
  },
  async rewrites() {
    return [
      {
        basePath: false,
        source: "/api/v1/login",
        destination: `http://localhost:4000/api/login`,
      },
      {
        basePath: false,
        source: "/api/v1/logout",
        destination: `http://localhost:4000/api/logout`,
      },
      {
        basePath: false,
        source: "/api/v2/:path*",
        destination: `${process.env.NEXT_PUBLIC_ADMIN}/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/work",
        destination: "https://studio-sandbox.vercel.app/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
