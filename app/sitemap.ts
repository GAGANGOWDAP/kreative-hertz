import { MetadataRoute } from 'next'
import { servicesData, articles } from '@/lib/site-data'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const isGithubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true'
  const baseUrl = isGithubPages ? 'https://gagangowdap.github.io/kreative-hertz' : 'https://kreativehertz.in'

  const staticRoutes = [
    '',
    '/about',
    '/wealth-architect',
    '/life-strategist',
    '/community',
    '/knowledge-hub',
    '/book-session',
    '/contact',
    '/faq',
    '/privacy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const serviceRoutes = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/knowledge-hub/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...articleRoutes]
}

