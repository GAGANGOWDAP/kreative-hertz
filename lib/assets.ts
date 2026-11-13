/**
 * Helper to safely resolve asset URLs for both local development and GitHub Pages static hosting.
 * Automatically prepends the base path (e.g. /kreative-hertz) when running in production on GitHub Pages.
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}

