import React from 'react'
import { notFound } from 'next/navigation'
import { servicesData, articles } from '@/content'

// Feature Pages
import {
  AboutPage,
  OurStoryPage,
  FounderLeadershipPage,
  OurPhilosophyPage,
  OurApproachPage,
  FaqPage,
  PrivacyPage,
  TermsPage,
  DisclaimerPage
} from '@/features/company'

import {
  ServicesOverviewPage,
  ServiceCategoryPage,
  ProductsLandingPage,
  ServiceDetailPage
} from '@/features/services'

import { WealthArchitectPage } from '@/features/wealth-architect'

import {
  LifeStrategistPage,
  FinancialAwarenessPage,
  CollegeProgrammesPage,
  CorporateProgrammesPage
} from '@/features/life-strategist'

import { CommunityPage } from '@/features/community'

import {
  KnowledgeHubPage,
  KnowledgeArticleDetailPage
} from '@/features/knowledge-hub'

import {
  BookSessionPage,
  ContactPage
} from '@/features/consultation'

export const dynamicParams = false

export async function generateStaticParams() {
  const params: { slug: string[] }[] = []

  // 1. Standalone pages handled by [...slug]
  const standalonePages = [
    'about',
    'services',
    'products',
    'blog',
    'wealth-architect',
    'life-strategist',
    'strategy',
    'community',
    'learn',
    'earn',
    'knowledge-hub',
    'book-session',
    'contact',
    'faq',
    'privacy',
    'terms',
    'disclaimer'
  ]
  standalonePages.forEach((page) => {
    params.push({ slug: [page] })
  })

  // 2. Service categories: /services/:category
  const serviceCategories = ['insurance', 'investments', 'loans', 'real-estate']
  serviceCategories.forEach((cat) => {
    params.push({ slug: ['services', cat] })
  })

  // 3. Service detail pages: /services/:id and /wealth-architect/:id
  servicesData.forEach((s) => {
    params.push({ slug: ['services', s.id] })
    params.push({ slug: ['wealth-architect', s.id] })
  })
  params.push({ slug: ['services', 'family-health-security'] })
  params.push({ slug: ['wealth-architect', 'family-health-security'] })

  // 4. Articles: /blog/:slug and /knowledge-hub/:slug
  articles.forEach((a) => {
    params.push({ slug: ['blog', a.slug] })
    params.push({ slug: ['knowledge-hub', a.slug] })
  })

  // 5. Dedicated About subpages: /about/:sub
  const aboutSubpages = [
    'story',
    'our-story',
    'founder',
    'leadership',
    'philosophy',
    'our-philosophy',
    'approach',
    'our-approach',
    'community'
  ]
  aboutSubpages.forEach((sub) => {
    params.push({ slug: ['about', sub] })
  })

  // 6. Dedicated Product subpages: /products/:sub
  const productSubpages = [
    'wealth-architect',
    'life-strategist',
    'financial-awareness',
    'college-programmes',
    'college-programs',
    'corporate-programmes',
    'corporate-programs'
  ]
  productSubpages.forEach((sub) => {
    params.push({ slug: ['products', sub] })
  })

  return params
}

export default async function Subpage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const primarySlug = slug[0]
  const secondarySlug = slug[1]

  // Category routes under /services/:category (insurance, investments, loans, real-estate)
  if (primarySlug === 'services' && secondarySlug && ['insurance', 'investments', 'loans', 'real-estate'].includes(secondarySlug)) {
    return <ServiceCategoryPage categorySlug={secondarySlug} />
  }

  // Dynamic Service Detail: /services/:id or /wealth-architect/:id
  if ((primarySlug === 'services' || primarySlug === 'wealth-architect') && secondarySlug) {
    const targetId = secondarySlug === 'family-health-security' ? 'health-insurance' : secondarySlug
    const service = servicesData.find((s) => s.id === targetId)
    if (!service) {
      notFound()
    }
    return <ServiceDetailPage service={service} />
  }

  // Dynamic Article Detail: /knowledge-hub/:slug or /blog/:slug
  if ((primarySlug === 'knowledge-hub' || primarySlug === 'blog') && secondarySlug) {
    const article = articles.find((a) => a.slug === secondarySlug)
    if (!article) {
      notFound()
    }
    return <KnowledgeArticleDetailPage article={article} />
  }

  // Dedicated About Subpages: /about/:sub
  if (primarySlug === 'about' && secondarySlug) {
    if (secondarySlug === 'story' || secondarySlug === 'our-story') return <OurStoryPage />
    if (secondarySlug === 'founder' || secondarySlug === 'leadership') return <FounderLeadershipPage />
    if (secondarySlug === 'philosophy' || secondarySlug === 'our-philosophy') return <OurPhilosophyPage />
    if (secondarySlug === 'approach' || secondarySlug === 'our-approach') return <OurApproachPage />
    if (secondarySlug === 'community') return <CommunityPage />
  }

  // Dedicated Product Subpages: /products/:sub
  if (primarySlug === 'products' && secondarySlug) {
    if (secondarySlug === 'wealth-architect') return <WealthArchitectPage />
    if (secondarySlug === 'life-strategist') return <LifeStrategistPage />
    if (secondarySlug === 'financial-awareness') return <FinancialAwarenessPage />
    if (secondarySlug === 'college-programmes' || secondarySlug === 'college-programs') return <CollegeProgrammesPage />
    if (secondarySlug === 'corporate-programmes' || secondarySlug === 'corporate-programs') return <CorporateProgrammesPage />
  }

  // Static Pages
  if (primarySlug === 'about' && !secondarySlug) {
    return <AboutPage />
  }

  if ((primarySlug === 'wealth-architect' || primarySlug === 'services') && !secondarySlug) {
    return <ServicesOverviewPage />
  }

  if (primarySlug === 'products' && !secondarySlug) {
    return <ProductsLandingPage />
  }

  if ((primarySlug === 'life-strategist' || primarySlug === 'strategy') && !secondarySlug) {
    return <LifeStrategistPage />
  }

  if ((primarySlug === 'community' || primarySlug === 'learn' || primarySlug === 'earn') && !secondarySlug) {
    return <CommunityPage />
  }

  if ((primarySlug === 'knowledge-hub' || primarySlug === 'blog') && !secondarySlug) {
    return <KnowledgeHubPage />
  }

  if (primarySlug === 'book-session' && !secondarySlug) {
    return <BookSessionPage />
  }

  if (primarySlug === 'contact' && !secondarySlug) {
    return <ContactPage />
  }

  if (primarySlug === 'faq' && !secondarySlug) {
    return <FaqPage />
  }

  if (primarySlug === 'privacy' && !secondarySlug) {
    return <PrivacyPage />
  }

  if (primarySlug === 'terms' && !secondarySlug) {
    return <TermsPage />
  }

  if (primarySlug === 'disclaimer' && !secondarySlug) {
    return <DisclaimerPage />
  }

  // 404 for unhandled routes
  notFound()
}
