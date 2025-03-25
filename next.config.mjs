/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kenyaforestservice.org",
      },
      {
        protocol: "https",
        hostname: "whatthelogo.com",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
      },
      {
        protocol: "https",
        hostname: "cdn.standardmedia.co.ke",
      },
      {
        protocol: "https",
        hostname: "www.flaticon.com",
      },
    ],
  },
};

export default nextConfig;
