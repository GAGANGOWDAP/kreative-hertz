const isProduction = process.env.NODE_ENV === 'production'
const isGithubPages = isProduction && (process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true')
const basePath = isGithubPages ? '/kreative-hertz' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig

