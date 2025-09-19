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
  webpack: (config) => {
    // Fix for the webpack runtime issue
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    
    return config
  },
  // Ensure proper escaping of special characters in HTML output
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error'],
    } : false,
  },
  // Disable features that don't work with static export
  reactStrictMode: false,
  // Ensure trailing slash for better compatibility
  trailingSlash: true,
}

export default withPWA(nextConfig)