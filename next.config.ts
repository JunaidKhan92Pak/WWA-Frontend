// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
  
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Proxy all requests starting with /api/
        destination: 'https://your-backend.vercel.app/api/:path*', // Your backend URL
      },
    ];
  },
};

module.exports = nextConfig;