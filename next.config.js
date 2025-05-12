/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        pathname: "**",
      },
      // Tambahkan hostname lain jika diperlukan
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.lyxkall.my.id' }],
        destination: 'https://lyxkall.my.id/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig