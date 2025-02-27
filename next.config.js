/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SG_API_KEY: process.env.NEXT_PUBLIC_BARBIERE_MAIL,
  },
  swcMinify: true,
  images: {
    // minimumCacheTTL: 90,
    // loader: "imgix",
    path: "",
    domains: ["images.prismic.io"],
  },
  swcMinify: true, // Assure-toi d'utiliser SWC sans WebAssembly
};
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
