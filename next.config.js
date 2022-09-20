/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    minimumCacheTTL: 60,
    loader: "imgix",
    path: "",
    domains: ["images.prismic.io"],
  },
};
module.exports = nextConfig;
