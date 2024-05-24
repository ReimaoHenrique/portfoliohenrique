/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/Pages/home",
      },
      {
        source: "/about",
        destination: "/Pages/about",
      },
      {
        source: "/service",
        destination: "/Pages/service",
      },
      {
        source: "/contact",
        destination: "/Pages/contact",
      },
    ];
  },
};

export default nextConfig;
