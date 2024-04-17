/** @type {import('next').NextConfig} */
const nextConfig = {
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
