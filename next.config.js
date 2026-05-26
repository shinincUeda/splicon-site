/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/blog", destination: "/en/blog", permanent: true },
      { source: "/blog/:slug", destination: "/en/blog/:slug", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/index.html" },
        { source: "/en", destination: "/index-en.html" },
        { source: "/privacy-policy", destination: "/privacy-policy.html" },
        { source: "/privacy-policy-en", destination: "/privacy-policy-en.html" },
        { source: "/support", destination: "/support.html" },
        { source: "/support-en", destination: "/support-en.html" },
      ],
    };
  },
};

module.exports = nextConfig;
