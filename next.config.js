const withPWA = require("next-pwa");
const path = require("path");
const runtimeCaching = require("next-pwa/cache");
/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: process.env.NODE_ENV === "development"
  },

  reactStrictMode: false,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: ["career-utility.dedicateddevelopers.us"]
  },
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  devIndicators: {
    autoPrerender: false,
    buildActivityPosition: "bottom-right"
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  // output: "export",
  env: {
    NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL
  },
  typescript: { ignoreBuildErrors: false }
});
