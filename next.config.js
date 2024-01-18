/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiKey: ""
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.thecatapi.com"
      }
    ]
  }
}

module.exports = nextConfig
