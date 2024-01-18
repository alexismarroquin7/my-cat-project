/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiKey: "live_vyZA32nnKlXi2b5g8xeMfTfc0CgVfiprA3F8Vk5PcQp9mqfqKclSG74bmT0R4mOY"
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
