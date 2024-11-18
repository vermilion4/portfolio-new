/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: '/portfolio-new/',
  basePath: '/portfolio-new',
  output: 'export'
}

module.exports = nextConfig
