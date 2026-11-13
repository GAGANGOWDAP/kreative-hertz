import { MetadataRoute } from 'next'
import { servicesData, articles } from '@/lib/site-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kreativehertz.in'

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

