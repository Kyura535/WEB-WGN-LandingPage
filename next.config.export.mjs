import nextPWA from 'next-pwa'

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Konfigurasi untuk static export
  output: 'export',
  // Menonaktifkan fitur yang tidak kompatibel dengan static export
  // Menonaktifkan output standalone karena masalah kompatibilitas Windows
  // output: 'standalone',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  // Disable features that don't work with static export
  reactStrictMode: false,
  // Ensure trailing slash for better compatibility
  trailingSlash: true,
}

export default withPWA(nextConfig)