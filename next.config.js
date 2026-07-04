/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio-Website' : ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
