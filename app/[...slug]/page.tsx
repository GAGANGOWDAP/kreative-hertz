import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  HelpCircle,
  Award,
  Users,
  Compass,
  Briefcase,
  ChevronRight,
  Clock,
  MapPin,
  AlertCircle,
  Home,
  Check
} from 'lucide-react'
import {
  PageShell,
  SectionBadge,
  ServicesExplorer,
  StrategyExplorer,
  FinancialGapAnalysisSection,
  RealEstateSection,
  CollegeProgramsSection,
  CommunityReferEarnSection,
  BookSessionSection,
  KnowledgeHubExplorer,
  ServiceIcon
} from '@/components/site'
import {
  servicesData,
  strategyPillars,
  gapAnalysisAreas,
  personalFinanceAwareness,
  collegeProgramModules,
  communityEcosystem,
  articles,
  companyDetails,
  ServiceItem,
  KnowledgeArticle
} from '@/lib/site-data'

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

function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <Image
        src={getAssetPath('/hero-architecture.jpg')}
        alt="Modern glass architecture with subtle greenery"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(248, 248, 242, 0.87)' }}
      />
    </div>
  )
}

export default async function Subpage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const primarySlug = slug[0]
  const secondarySlug = slug[1]

  // Category routes under /services/:category (insurance, investments, loans, real-estate)
  if (primarySlug === 'services' && secondarySlug && ['insurance', 'investments', 'loans', 'real-estate'].includes(secondarySlug)) {
    return <ServicesCategoryView categorySlug={secondarySlug} />
  }

  // Dynamic Service Detail: /services/:id or /wealth-architect/:id
  if ((primarySlug === 'services' || primarySlug === 'wealth-architect') && secondarySlug) {
    const targetId = secondarySlug === 'family-health-security' ? 'health-insurance' : secondarySlug
    const service = servicesData.find((s) => s.id === targetId)
    if (!service) {
      notFound()
    }
    return <ServiceDetailView service={service} />
  }

  // Dynamic Article Detail: /knowledge-hub/:slug or /blog/:slug
  if ((primarySlug === 'knowledge-hub' || primarySlug === 'blog') && secondarySlug) {
    const article = articles.find((a) => a.slug === secondarySlug)
    if (!article) {
      notFound()
    }
    return <KnowledgeArticleDetailView article={article} />
  }

  // Dedicated About Subpages: /about/:sub
  if (primarySlug === 'about' && secondarySlug) {
    if (secondarySlug === 'story' || secondarySlug === 'our-story') return <OurStoryDetailView />
    if (secondarySlug === 'founder' || secondarySlug === 'leadership') return <FounderLeadershipDetailView />
    if (secondarySlug === 'philosophy' || secondarySlug === 'our-philosophy') return <OurPhilosophyDetailView />
    if (secondarySlug === 'approach' || secondarySlug === 'our-approach') return <OurApproachDetailView />
    if (secondarySlug === 'community') return <CommunityMainView />
  }

  // Dedicated Product Subpages: /products/:sub
  if (primarySlug === 'products' && secondarySlug) {
    if (secondarySlug === 'wealth-architect') return <WealthArchitectMainView />
    if (secondarySlug === 'life-strategist') return <LifeStrategistMainView />
    if (secondarySlug === 'financial-awareness') return <FinancialAwarenessDetailView />
    if (secondarySlug === 'college-programmes' || secondarySlug === 'college-programs') return <CollegeProgrammesDetailView />
    if (secondarySlug === 'corporate-programmes' || secondarySlug === 'corporate-programs') return <CorporateProgrammesDetailView />
  }

  // Static Pages
  if (primarySlug === 'about' && !secondarySlug) {
    return <AboutUsView />
  }

  if ((primarySlug === 'wealth-architect' || primarySlug === 'services') && !secondarySlug) {
    return <ServicesOverviewLandingView />
  }

  if (primarySlug === 'products' && !secondarySlug) {
    return <ProductsLandingView />
  }

  if ((primarySlug === 'life-strategist' || primarySlug === 'strategy') && !secondarySlug) {
    return <LifeStrategistMainView />
  }

  if ((primarySlug === 'community' || primarySlug === 'learn' || primarySlug === 'earn') && !secondarySlug) {
    return <CommunityMainView />
  }

  if ((primarySlug === 'knowledge-hub' || primarySlug === 'blog') && !secondarySlug) {
    return <BlogLandingView />
  }

  if (primarySlug === 'book-session' && !secondarySlug) {
    return <BookSessionPageView />
  }

  if (primarySlug === 'contact' && !secondarySlug) {
    return <ContactPageView />
  }

  if (primarySlug === 'faq' && !secondarySlug) {
    return <FaqPageView />
  }

  if (primarySlug === 'privacy' && !secondarySlug) {
    return <PrivacyPageView />
  }

  if (primarySlug === 'terms' && !secondarySlug) {
    return <TermsPageView />
  }

  if (primarySlug === 'disclaimer' && !secondarySlug) {
    return <DisclaimerPageView />
  }

  // 404 for unhandled routes
  notFound()
}

// -------------------------------------------------------------
// 1. ABOUT US PAGE
// -------------------------------------------------------------
function AboutUsView() {
  return (
    <PageShell>
      {/* 1. Header & Dedicated Directory Navigation */}
      <section className="relative w-full section-institutional overflow-hidden bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-5xl">
          <SectionBadge>Corporate Background & Practice</SectionBadge>
          <h1 className="h1 mb-3 font-heading text-[#172B3A]">About Kreative Hertz</h1>
          <p className="text-base text-[#4F615A] leading-relaxed mb-6 max-w-3xl">
            Founded in June 2022 in Bengaluru, Karnataka with a single uncompromising conviction: financial contracts and market instruments are inherently complex, but understanding and acting on them should be straightforward.
          </p>

          {/* Dedicated Sub-Navigation & Directory Cards */}
          <div className="pt-6 border-t border-[#E2EBE5]">
            <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-3">
              Sections in this Overview
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="#overview"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">About Kreative Hertz</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Founding background, evolutionary progression, and our dual-discipline practice.
                </p>
              </a>

              <a
                href="#mission"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Our Mission & Vision</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Fiduciary accountability, client suitability, and multi-decade wealth resilience.
                </p>
              </a>

              <a
                href="#approach"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Our Approach</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  &ldquo;Don&apos;t Sell First. Educate First&rdquo; — zero pressure, diagnostic auditing.
                </p>
              </a>

              <a
                href="#founder"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Founder Biography</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Karthik R&apos;s credentials, institutional advisory experience, and direct desk.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl space-y-12">
          {/* Section 1: Overview & Evolution */}
          <div id="overview" className="scroll-mt-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8 space-y-4">
                <SectionBadge>Evolutionary Philosophy</SectionBadge>
                <h2 className="h2 text-[#172B3A] font-heading">Complexity 2 Simplicity</h2>
                <p className="text-sm text-[#4F615A] leading-relaxed">
                  Over time, Kreative Hertz has evolved into a structured advisory platform addressing financial awareness, diagnostic portfolio architecture, and multi-decade wealth resilience.
                </p>
                <p className="text-sm text-[#4F615A] leading-relaxed">
                  Our practice operates through two integrated disciplines: <strong>Wealth Architecture</strong> — examining protection needs, auditing existing investments, identifying debt drains, and configuring tailored financial structures; and <strong>Life Strategy</strong> — empowering individuals and students with financial literacy, risk psychology, and disciplined habits.
                </p>
                <div className="p-4 rounded border border-[#CAD9D0] bg-[#FFFFFF] text-xs font-semibold text-[#1F5138]">
                  Client Progression Principle: Confusion → Clarity → Understanding → Action → Better Financial Habits.
                </div>

                {/* Quick Route Buttons */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Link
                    href="/wealth-architect"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5138] bg-[#EAF3EC] px-3 py-1.5 rounded hover:bg-[#CAD9D0] transition-colors"
                  >
                    <span>Explore Wealth Architect Practice</span>
                    <ArrowRight size={12} />
                  </Link>
                  <Link
                    href="/life-strategist"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5138] bg-[#FFFFFF] border border-[#CAD9D0] px-3 py-1.5 rounded hover:bg-[#EAF3EC] transition-colors"
                  >
                    <span>Explore Life Strategist Curriculum</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Founder Card with ID */}
              <div id="founder" className="md:col-span-4 scroll-mt-28">
                <div className="institutional-card p-6 text-center border-[#CAD9D0]">
                  <div className="brand-crest w-16 h-16 mx-auto mb-3">
                    <Image
                      src={getAssetPath('/logo-icon.png')}
                      alt="Kreative Hertz Crest"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#172B3A] font-heading">Karthik R</h3>
                  <p className="text-xs text-[#1F5138] font-semibold">Founder & Advisor</p>
                  <p className="text-[11px] text-[#4F615A] mt-1">Established June 2022 • Bengaluru</p>
                  <div className="mt-4 pt-3 border-t border-[#E2EBE5] space-y-2">
                    <a
                      href="https://wa.me/919482897253"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs font-bold text-[#1F5138] hover:underline"
                    >
                      Direct WhatsApp Desk →
                    </a>
                    <Link
                      href="/book-session"
                      className="block text-xs font-bold text-[#1F5138] hover:underline"
                    >
                      Book 1-on-1 Consultation →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Mission & Vision */}
          <div id="mission" className="scroll-mt-28">
            <div className="section-title-wrap mb-4">
              <SectionBadge>Institutional Principles</SectionBadge>
              <h2 className="h2 text-[#172B3A] font-heading">Our Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="institutional-card p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                    Fiduciary Commitment
                  </span>
                  <h3 className="text-base font-bold text-[#172B3A] mb-2 font-heading">Our Mission</h3>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                    To deliver objective, conflict-free financial architecture and literacy education, ensuring families and individuals make informed, uncoerced decisions for their financial security.
                  </p>
                </div>
                <Link
                  href="/wealth-architect#gap-analysis"
                  className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1"
                >
                  <span>Learn how we audit policy gaps</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="institutional-card p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                    Long-Term Outlook
                  </span>
                  <h3 className="text-base font-bold text-[#172B3A] mb-2 font-heading">Our Vision</h3>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                    To build an enduring community of financially aware families, professionals, and students equipped to protect capital, mitigate risks, and build multi-generational wealth.
                  </p>
                </div>
                <Link
                  href="/community"
                  className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore the Community Network</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 3: Guidance Approach */}
          <div id="approach" className="scroll-mt-28">
            <div className="institutional-card p-6 md:p-8 border-[#159568]/40 bg-[#EAF3EC]/30">
              <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                Fiduciary Advisory Standard
              </span>
              <h2 className="text-xl font-bold text-[#172B3A] mb-3 font-heading">
                Our Guidance Approach: &ldquo;Don&apos;t Sell First. Educate First&rdquo;
              </h2>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Most financial friction occurs because customers are sold products before they understand their structural needs. At Kreative Hertz, our first obligation is always diagnostic clarity: auditing your existing policies, uncovering restrictive terms or sub-limits, and explaining financial mechanics in plain language before any decision is made.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded bg-[#FFFFFF] border border-[#CAD9D0] text-xs">
                  <strong className="block text-[#1F5138] mb-1">✓ Zero Sales Pressure</strong>
                  <p className="text-[11px] text-[#4F615A]">We never push unneeded endowment policies or ULIP products.</p>
                </div>
                <div className="p-3 rounded bg-[#FFFFFF] border border-[#CAD9D0] text-xs">
                  <strong className="block text-[#1F5138] mb-1">✓ Mathematical Diagnostics</strong>
                  <p className="text-[11px] text-[#4F615A]">Coverage limits calculated according to your real family liabilities.</p>
                </div>
                <div className="p-3 rounded bg-[#FFFFFF] border border-[#CAD9D0] text-xs">
                  <strong className="block text-[#1F5138] mb-1">✓ Direct Advisor Access</strong>
                  <p className="text-[11px] text-[#4F615A]">Work directly with Karthik R for policy reviews and claims guidance.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/wealth-architect"
                  className="btn-primary text-xs py-2 px-4"
                >
                  <span>Explore All 15 Services</span>
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/knowledge-hub"
                  className="btn-secondary text-xs py-2 px-4"
                >
                  <span>Read Educational Guides</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Section 4: Professional Biography */}
          <div className="institutional-card p-8">
            <h3 className="text-lg font-bold text-[#172B3A] mb-3 font-heading">Professional Biography — Karthik R</h3>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              {companyDetails.founder.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2EBE5] text-xs text-[#26332D]">
              <div>
                <strong className="block text-[#172B3A] mb-1 font-heading">Wealth Architect Practice</strong>
                <p className="text-[#4F615A] text-[11.5px] mb-2">Pure term protection, family health cover, SIP compounding, NPS accounts, and debt refinancing across 15 core services.</p>
                <Link href="/wealth-architect" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                  <span>View Services Directory</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
              <div>
                <strong className="block text-[#172B3A] mb-1 font-heading">Life Strategist Practice</strong>
                <p className="text-[#4F615A] text-[11.5px] mb-2">Financial psychology coaching, institutional college programs, and 7 foundational literacy pillars.</p>
                <Link href="/life-strategist" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                  <span>View Curriculum Modules</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 5: Closing CTA */}
          <div className="institutional-card p-8 text-center bg-[#FFFFFF] border-[#CAD9D0]">
            <h3 className="text-xl font-bold text-[#172B3A] mb-2 font-heading">
              Ready to Simplify Your Financial Architecture?
            </h3>
            <p className="text-xs text-[#4F615A] max-w-md mx-auto mb-6">
              Connect directly with Karthik R for a confidential, no-obligation policy review or strategy session.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/book-session" className="btn-primary text-xs py-2.5 px-6">
                <span>Book a Consultation</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-secondary text-xs py-2.5 px-6">
                <span>Contact Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Dedicated Subpage: /about/story
function OurStoryDetailView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/" className="hover:text-[#1F5138]">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#1F5138]">About Us</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">Our Story</span>
          </div>
          <SectionBadge>Founding Background & Evolution</SectionBadge>
          <h1 className="h1 mb-3 font-heading">The Story of Kreative Hertz</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl">
            Established in June 2022 in Bengaluru, Karnataka, Kreative Hertz was created to address a systemic problem in Indian personal finance: the dangerous mixing of insurance, investments, and debt under misleading sales targets.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl space-y-8">
          <div className="institutional-card p-8">
            <h2 className="text-xl font-bold text-[#172B3A] mb-3 font-heading">Evolutionary Progression</h2>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              When Karthik R founded Kreative Hertz in June 2022, the personal finance landscape was dominated by agents selling high-commission endowment plans and apps pushing high-interest consumer debt. Families were consistently accumulating products rather than building resilient balance sheets.
            </p>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              Kreative Hertz introduced an objective diagnostic framework built on three non-negotiable principles: <strong>Understand</strong> the household balance sheet, <strong>Analyse</strong> contract clauses and interest drains, and <strong>Strategise</strong> durable solutions.
            </p>
            <div className="p-4 rounded border border-[#CAD9D0] bg-[#FFFFFF] text-xs font-semibold text-[#1F5138]">
              Tagline Philosophy: Complexity 2 Simplicity — transforming complex financial terms into transparent, straightforward decisions.
            </div>
          </div>

          <div className="text-center pt-4">
            <Link href="/about" className="text-xs font-bold text-[#1F5138] hover:underline flex items-center justify-center gap-1.5">
              <span>← Back to About Us Overview</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Dedicated Subpage: /about/founder
function FounderLeadershipDetailView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/" className="hover:text-[#1F5138]">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#1F5138]">About Us</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">Founder & Leadership</span>
          </div>
          <SectionBadge>Leadership Profile</SectionBadge>
          <h1 className="h1 mb-2 font-heading">{companyDetails.founder.name}</h1>
          <p className="text-xs font-bold text-[#1F5138] uppercase tracking-wider mb-4">
            {companyDetails.title}
          </p>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl">
            Founder and Principal Consultant at Kreative Hertz. Advising individuals, families, and academic institutions on objective wealth architecture and financial psychology.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl space-y-8">
          <div className="institutional-card p-8">
            <h3 className="text-lg font-bold text-[#172B3A] mb-3 font-heading">Professional Biography</h3>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-6">
              {companyDetails.founder.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2EBE5] text-xs text-[#26332D]">
              <div>
                <strong className="block text-[#172B3A] mb-1 font-heading">Wealth Architecture Advisory</strong>
                <p className="text-[#4F615A] text-[11.5px]">Pure term life cover, family health shields, disciplined SIP compounding, home loan balance transfers, and real estate due diligence across 15 core services.</p>
              </div>
              <div>
                <strong className="block text-[#172B3A] mb-1 font-heading">Life Strategy Education</strong>
                <p className="text-[#4F615A] text-[11.5px]">Campus financial workshops, youth debt prevention, first salary architecture, and moral financial psychology principles.</p>
              </div>
            </div>
          </div>

          <div className="institutional-card p-6 bg-white">
            <h4 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">Direct Consultation Protocol</h4>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              All initial gap analysis reviews and policy evaluations are conducted directly by Karthik R under strict confidentiality.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-session" className="btn-primary text-xs py-2 px-4">
                <span>Book Direct Session</span>
                <ArrowRight size={13} />
              </Link>
              <a href={`tel:${companyDetails.phone}`} className="btn-secondary text-xs py-2 px-4">
                <span>Call {companyDetails.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Dedicated Subpage: /about/philosophy
function OurPhilosophyDetailView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/" className="hover:text-[#1F5138]">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#1F5138]">About Us</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">Our Philosophy</span>
          </div>
          <SectionBadge>Core Principles</SectionBadge>
          <h1 className="h1 mb-3 font-heading">The Kreative Hertz Philosophy</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-4">
            Mindset · Moral · Awareness
          </p>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl">
            Financial stability is not created by high incomes alone; it is cultivated through disciplined delayed gratification, moral family protection, and structural awareness of predatory credit traps.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl space-y-6">
          {personalFinanceAwareness.map((p, idx) => (
            <div key={idx} className="institutional-card p-6">
              <span className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-1 block">
                Pillar 0{idx + 1}
              </span>
              <h3 className="text-xl font-bold text-[#172B3A] mb-1 font-heading">{p.title}</h3>
              <div className="text-xs font-semibold text-[#1F5138] mb-3">{p.tagline}</div>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">{p.desc}</p>
              <div className="border-t border-[#E2EBE5] pt-3">
                <div className="text-[10px] font-bold text-[#172B3A] uppercase tracking-wider mb-2">Core Tenants</div>
                <ul className="space-y-1 text-xs text-[#26332D]">
                  {p.corePrinciples.map((cp, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#159568]">✓</span>
                      <span>{cp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="text-center pt-4">
            <Link href="/about" className="text-xs font-bold text-[#1F5138] hover:underline">
              ← Return to About Us Overview
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Dedicated Subpage: /about/approach
function OurApproachDetailView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/" className="hover:text-[#1F5138]">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#1F5138]">About Us</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">Our Approach</span>
          </div>
          <SectionBadge>Advisory Methodology</SectionBadge>
          <h1 className="h1 mb-3 font-heading">Our Fiduciary Advisory Approach</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-4">
            Don&apos;t Sell First. Educate First.
          </p>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl">
            We follow an uncompromising fiduciary standard: diagnosing structural leaks, policy traps, and debt drains before recommending any action.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategyPillars.map((p) => (
              <div key={p.id} className="institutional-card p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#1F5138] mb-1">{p.badge}</div>
                  <h3 className="text-lg font-bold text-[#172B3A] mb-1 font-heading">{p.title}</h3>
                  <div className="text-xs font-semibold text-[#1F5138] mb-3">{p.subtitle}</div>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-4">{p.desc}</p>
                </div>
                <div className="border-t border-[#E2EBE5] pt-3 text-[11px] font-semibold text-[#1F5138]">
                  Actionable diagnostic deliverable
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link href="/book-session" className="btn-primary text-xs py-3 px-6">
              <span>Experience Our Approach</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 2. SERVICES OVERVIEW LANDING VIEW (/services)
// Dedicated landing page with 4 clear categories + 15 services
// -------------------------------------------------------------
function ServicesOverviewLandingView() {
  const categories = [
    {
      title: 'Insurance Advisory',
      slug: 'insurance',
      badge: 'Risk Transfer',
      count: '6 Core Solutions',
      desc: 'Pure risk transfer structuring covering term life, family health, motor, travel, and commercial risks without investment traps.',
      services: servicesData.filter((s) => s.category === 'Insurance')
    },
    {
      title: 'Investments & Compounding',
      slug: 'investments',
      badge: 'Wealth Architecture',
      count: '4 Core Solutions',
      desc: 'Goal-oriented asset allocation across diversified mutual funds, step-up SIPs, inflation-adjusted retirement, and child education funds.',
      services: servicesData.filter((s) => s.category === 'Investments' || s.category === 'Investments & Wealth Creation')
    },
    {
      title: 'Loans & Credit Structuring',
      slug: 'loans',
      badge: 'Debt Architecture',
      count: '4 Core Solutions',
      desc: 'External benchmark-linked home loans, balance transfer refinancing, credit card consolidation, and business working capital.',
      services: servicesData.filter((s) => s.category === 'Loans' || s.category === 'Loans & Credit Solutions')
    },
    {
      title: 'Real Estate Due Diligence',
      slug: 'real-estate',
      badge: 'Buyer Representation',
      count: '1 Core Solution',
      desc: 'Conflict-free buyer advisory, Karnataka RERA verification, realistic rental yield audits, and title deed scrutiny.',
      services: servicesData.filter((s) => s.category === 'Real Estate')
    }
  ]

  return (
    <PageShell>
      {/* 1. Hero */}
      <section className="relative w-full section-institutional overflow-hidden bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl text-center mx-auto">
          <SectionBadge>Financial Advisory Services</SectionBadge>
          <h1 className="h1 mb-3 font-heading text-[#172B3A]">Comprehensive Financial Services</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-4">
            Understand · Analyse · Strategise
          </p>
          <p className="text-base text-[#4F615A] leading-relaxed max-w-2xl mx-auto mb-6">
            Explore 15 institutional financial solutions organized into four transparent practice areas. Every service is provided under a fiduciary standard of objective clarity.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book-session" className="btn-primary text-xs py-2.5 px-5">
              <span>Book Discovery Session</span>
              <ArrowRight size={14} />
            </Link>
            <Link href="/about" className="btn-secondary text-xs py-2.5 px-5">
              <span>About Our Fiduciary Model</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Four Main Categories Grid */}
      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container">
          <div className="section-title-wrap max-w-3xl mb-8">
            <SectionBadge>Practice Divisions</SectionBadge>
            <h2 className="h2 mb-2 font-heading">Explore by Category</h2>
            <p className="text-sm text-[#4F615A]">
              Click into any category to view its dedicated overview, methodologies, and individual service specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {categories.map((cat) => (
              <div key={cat.slug} className="institutional-card p-6 flex flex-col justify-between hover:border-[#1F5138] transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-[#1F5138] uppercase tracking-wider">
                      {cat.badge}
                    </span>
                    <span className="text-xs font-semibold text-[#1F5138] bg-[#EAF3EC] px-2.5 py-1 rounded">
                      {cat.count}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#172B3A] mb-2 font-heading group-hover:text-[#1F5138] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-6">
                    {cat.desc}
                  </p>

                  <div className="space-y-1.5 border-t border-[#E2EBE5] pt-4 mb-6">
                    <div className="text-[10px] font-bold text-[#172B3A] uppercase tracking-wider mb-2">
                      Included Solutions:
                    </div>
                    {cat.services.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        className="flex items-center justify-between text-xs text-[#26332D] hover:text-[#1F5138] py-1 border-b border-[#F8F8F2]"
                      >
                        <span className="flex items-center gap-2">
                          <CheckCircle2 size={13} className="text-[#159568]" />
                          <span>{svc.title}</span>
                        </span>
                        <ArrowRight size={12} className="text-[#8C9EA8]" />
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/services/${cat.slug}`}
                  className="btn-secondary w-full justify-center text-xs py-2.5 font-bold group-hover:border-[#1F5138] group-hover:text-[#1F5138]"
                >
                  <span>Explore {cat.title} Hub</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>

          {/* Interactive Filterable Explorer */}
          <div className="pt-8 border-t border-[#E2EBE5]">
            <div className="section-title-wrap max-w-3xl mb-6">
              <SectionBadge>Searchable Directory</SectionBadge>
              <h2 className="h2 mb-2 font-heading">All 15 Financial Services</h2>
              <p className="text-sm text-[#4F615A]">
                Use the directory below to search by keyword or filter across all offerings.
              </p>
            </div>
            <ServicesExplorer />
          </div>
        </div>
      </section>

      {/* 3. Diagnostic Section */}
      <FinancialGapAnalysisSection />

      {/* 4. Closing Action */}
      <section className="section-institutional bg-[#FFFFFF] border-t border-[#E2EBE5]">
        <div className="container max-w-3xl text-center">
          <h2 className="h2 mb-3 font-heading">Need Assistance Navigating Solutions?</h2>
          <p className="text-xs text-[#4F615A] mb-6">
            Schedule a diagnostic consultation with Karthik R to evaluate which solutions fit your family or business balance sheet.
          </p>
          <Link href="/book-session" className="btn-primary text-xs py-3 px-6">
            <span>Book a Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}

// Dedicated Category Landing Page: /services/:category
function ServicesCategoryView({ categorySlug }: { categorySlug: string }) {
  const categoryMap: Record<string, { title: string; categoryName: string; desc: string }> = {
    insurance: {
      title: 'Insurance Advisory & Risk Transfer',
      categoryName: 'Insurance',
      desc: 'Pure protection structuring without investment conflicts. We evaluate coverage adequacy across Human Life Value, hospital room-rent terms, and corporate risk limits.'
    },
    investments: {
      title: 'Investments & Compounding Architecture',
      categoryName: 'Investments',
      desc: 'Disciplined compounding through goal-linked mutual funds, step-up SIPs, and inflation-adjusted retirement planning.'
    },
    loans: {
      title: 'Loan Financing & Credit Architecture',
      categoryName: 'Loans',
      desc: 'Repo rate benchmark-linked home loans, interest-saving balance transfers, and high-interest debt consolidation.'
    },
    'real-estate': {
      title: 'Real Estate Due Diligence & Advisory',
      categoryName: 'Real Estate',
      desc: 'Conflict-free buyer representation, Karnataka RERA scrutiny, builder financial audits, and rental yield analysis.'
    }
  }

  const info = categoryMap[categorySlug] || {
    title: 'Financial Services Category',
    categoryName: 'All Services',
    desc: 'Explore dedicated solutions tailored to your financial goals.'
  }

  const categoryServices = servicesData.filter((s) => {
    if (categorySlug === 'insurance') return s.category === 'Insurance'
    if (categorySlug === 'investments') return s.category === 'Investments' || s.category === 'Investments & Wealth Creation'
    if (categorySlug === 'loans') return s.category === 'Loans' || s.category === 'Loans & Credit Solutions'
    if (categorySlug === 'real-estate') return s.category === 'Real Estate'
    return true
  })

  return (
    <PageShell>
      <section className="relative w-full section-institutional overflow-hidden bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/" className="hover:text-[#1F5138]">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#1F5138]">Services</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">{info.title}</span>
          </div>
          <SectionBadge>Specialized Category Hub</SectionBadge>
          <h1 className="h1 mb-3 font-heading text-[#172B3A]">{info.title}</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl mb-6">
            {info.desc}
          </p>
          <div className="flex items-center gap-3">
            <Link href="/services" className="text-xs font-bold text-[#1F5138] hover:underline flex items-center gap-1">
              <span>← Back to All 15 Services</span>
            </Link>
            <span className="text-[#CAD9D0]">|</span>
            <Link href="/book-session" className="btn-primary text-xs py-2 px-4">
              <span>Book Category Consultation</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container">
          <div className="section-title-wrap max-w-3xl mb-8">
            <h2 className="h2 mb-2 font-heading">Solutions in this Category ({categoryServices.length})</h2>
            <p className="text-sm text-[#4F615A]">
              Click into any service below for comprehensive specifications, common pitfalls, and deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categoryServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="institutional-card p-6 flex flex-col justify-between hover:border-[#1F5138] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-[#EAF3EC] text-[#1F5138] flex items-center justify-center mb-4 group-hover:bg-[#1F5138] group-hover:text-white transition-colors">
                    <ServiceIcon name={svc.iconType} />
                  </div>
                  <h3 className="text-lg font-bold text-[#172B3A] mb-2 font-heading group-hover:text-[#1F5138] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                    {svc.shortDesc}
                  </p>
                  <ul className="space-y-1 text-xs text-[#26332D] mb-4">
                    {svc.highlights.slice(0, 2).map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-[#159568]">✓</span>
                        <span className="truncate">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-[#E2EBE5] flex items-center justify-between text-xs font-bold text-[#1F5138]">
                  <span>Explore Detail Page</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// PRODUCTS LANDING VIEW (/products)
// -------------------------------------------------------------
function ProductsLandingView() {
  const products = [
    {
      title: 'Wealth Architect',
      href: '/products/wealth-architect',
      badge: 'Financial Engineering',
      desc: 'Our flagship analytical practice structuring insurance, investments, loans, and real estate into a resilient household balance sheet.',
      target: 'Families, salaried executives, business owners & HNIs'
    },
    {
      title: 'Life Strategist',
      href: '/products/life-strategist',
      badge: 'Educational Framework',
      desc: 'Our educational discipline focusing on financial psychology, delayed gratification, and building moral money habits across life stages.',
      target: 'Students, young professionals, educators & institutions'
    },
    {
      title: 'Financial Awareness Programmes',
      href: '/products/financial-awareness',
      badge: 'Literacy Syllabus',
      desc: 'Structured community and institutional modules demystifying predatory loans, debt dependency, and credit card traps.',
      target: 'Public communities, parents & campus chapters'
    },
    {
      title: 'College Programmes & Workshops',
      href: '/products/college-programmes',
      badge: 'Academic Workshops',
      desc: 'Interactive 2-to-3 hour modules for final-year college students on first salary budgeting, credit scores, and early SIP compounding.',
      target: 'Colleges, universities, placement cells & student bodies'
    },
    {
      title: 'Corporate Financial Wellness',
      href: '/products/corporate-programmes',
      badge: 'Workplace Education',
      desc: 'Non-commercial financial wellness workshops for corporate teams to alleviate employee money anxieties and boost workplace focus.',
      target: 'Corporate HR leaders, startups & enterprise teams'
    }
  ]

  return (
    <PageShell>
      <section className="relative w-full section-institutional overflow-hidden bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl text-center mx-auto">
          <SectionBadge>Branded Offerings & Solutions</SectionBadge>
          <h1 className="h1 mb-3 font-heading text-[#172B3A]">Products & Structured Programmes</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-4">
            Transforming Complexity into Actionable Simplicity
          </p>
          <p className="text-base text-[#4F615A] leading-relaxed max-w-2xl mx-auto mb-6">
            Discover Kreative Hertz&apos;s proprietary frameworks, educational syllabi, and specialized advisory programmes designed for individuals, institutions, and corporate teams.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book-session" className="btn-primary text-xs py-2.5 px-5">
              <span>Schedule Program Discussion</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((prod, idx) => (
              <div key={idx} className="institutional-card p-6 flex flex-col justify-between hover:border-[#1F5138] transition-all group">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#1F5138] uppercase tracking-wider block mb-2">
                    {prod.badge}
                  </span>
                  <h3 className="text-xl font-bold text-[#172B3A] mb-2 font-heading group-hover:text-[#1F5138] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                    {prod.desc}
                  </p>
                  <div className="pt-3 border-t border-[#E2EBE5] text-[11px] text-[#26332D] mb-4">
                    <strong className="text-[#172B3A] block mb-0.5">Intended Audience:</strong>
                    <span>{prod.target}</span>
                  </div>
                </div>

                <Link
                  href={prod.href}
                  className="btn-secondary w-full justify-center text-xs py-2 font-bold group-hover:border-[#1F5138] group-hover:text-[#1F5138]"
                >
                  <span>Explore Offering</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Product Subpage: Financial Awareness
function FinancialAwarenessDetailView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/products" className="hover:text-[#1F5138]">Products</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">Financial Awareness Programmes</span>
          </div>
          <SectionBadge>Educational Syllabus</SectionBadge>
          <h1 className="h1 mb-3 font-heading">Financial Awareness Programmes</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl mb-6">
            Structured educational syllabi designed to build generational money consciousness, dismantle credit traps, and instill fiduciary protection morals.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl">
          <div className="space-y-6 mb-12">
            {personalFinanceAwareness.map((p, idx) => (
              <div key={idx} className="institutional-card p-6">
                <div className="text-xs font-mono font-bold text-[#1F5138] mb-1">PILLAR 0{idx + 1}</div>
                <h3 className="text-xl font-bold text-[#172B3A] mb-1 font-heading">{p.title}</h3>
                <div className="text-xs font-semibold text-[#1F5138] mb-3">{p.tagline}</div>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-4">{p.desc}</p>
                <div className="border-t border-[#E2EBE5] pt-3">
                  <div className="text-[10px] font-bold text-[#172B3A] uppercase tracking-wider mb-2">Core Principles</div>
                  <ul className="space-y-1.5 text-xs text-[#26332D]">
                    {p.corePrinciples.map((cp, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#159568]" />
                        <span>{cp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link href="/book-session" className="btn-primary text-xs py-3 px-6">
              <span>Book Awareness Workshop</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Product Subpage: College Programmes
function CollegeProgrammesDetailView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/products" className="hover:text-[#1F5138]">Products</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">College Programmes</span>
          </div>
          <SectionBadge>Academic Campus Outreach</SectionBadge>
          <h1 className="h1 mb-3 font-heading">College Financial Literacy Workshops</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl mb-6">
            Equipping graduating university students with practical first-salary budgeting, debt avoidance tools, and early compounding discipline before their first career paycheck.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl">
          <CollegeProgramsSection />
        </div>
      </section>
    </PageShell>
  )
}

// Product Subpage: Corporate Programmes
function CorporateProgrammesDetailView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/products" className="hover:text-[#1F5138]">Products</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">Corporate Financial Wellness</span>
          </div>
          <SectionBadge>Workplace Wellness</SectionBadge>
          <h1 className="h1 mb-3 font-heading">Corporate Financial Education Seminars</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl mb-6">
            Non-commercial, conflict-free financial wellness sessions designed for corporate teams to alleviate financial stress and teach tax-smart wealth architecture.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl">
          <div className="institutional-card p-8 mb-8">
            <h3 className="text-lg font-bold text-[#172B3A] mb-3 font-heading">Why Workplace Financial Education?</h3>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              Over 58% of employees report experiencing stress regarding personal finances, debt EMIs, and healthcare costs, directly impacting workplace productivity. Kreative Hertz conducts objective educational seminars without selling products or promoting financial affiliations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#26332D] pt-4 border-t border-[#E2EBE5]">
              <div>
                <strong className="block text-[#1F5138] mb-1">Key Topics Covered:</strong>
                <ul className="space-y-1">
                  <li>• Tax planning under old vs. new tax regimes</li>
                  <li>• Decoding corporate health cards vs. personal policies</li>
                  <li>• Step-Up SIP compounding with salary increments</li>
                  <li>• Home loan balance transfers and EMI management</li>
                </ul>
              </div>
              <div>
                <strong className="block text-[#1F5138] mb-1">Seminar Format:</strong>
                <ul className="space-y-1">
                  <li>• 60 to 90 minute interactive keynote</li>
                  <li>• Anonymous employee Q&A session</li>
                  <li>• Zero product sales pitches</li>
                  <li>• Free diagnostic gap analysis checklists provided</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/book-session" className="btn-primary text-xs py-3 px-6">
              <span>Book Corporate Seminar</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// BLOG LANDING VIEW (/blog & /knowledge-hub)
// -------------------------------------------------------------
function BlogLandingView() {
  return (
    <PageShell>
      {/* 1. Hero */}
      <section className="relative w-full section-institutional overflow-hidden bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl text-center mx-auto">
          <SectionBadge>Educational Insights & Editorial</SectionBadge>
          <h1 className="h1 mb-3 font-heading text-[#172B3A]">Kreative Hertz Blog & Knowledge Hub</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-4">
            Don&apos;t Sell First. Educate First.
          </p>
          <p className="text-base text-[#4F615A] leading-relaxed max-w-2xl mx-auto">
            Practical, conflict-free guides on insurance policy clauses, compounding mathematics, mortgage optimization, and financial psychology.
          </p>
        </div>
      </section>
 
      {/* 2. Interactive Searchable & Filterable Knowledge Hub Explorer */}
      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-5xl">
          <KnowledgeHubExplorer initialArticles={articles} />
        </div>
      </section>
    </PageShell>
  )
}
function WealthArchitectMainView() {
  return (
    <PageShell>
      <section className="relative w-full section-institutional overflow-hidden bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl">
          <SectionBadge>Technical Advisory</SectionBadge>
          <h1 className="h1 mb-3 text-[#172B3A] font-heading">WEALTH ARCHITECT</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-3">
            Understand · Analyse · Strategise
          </p>
          <p className="text-sm text-[#4F615A] leading-relaxed">
            Designing financial solutions around your life, milestones, and liabilities. We evaluate existing insurance, inspect portfolio overlap, and structure transparent debt financing.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container">
          <div className="section-title-wrap max-w-3xl">
            <SectionBadge>Complete Directory</SectionBadge>
            <h2 className="h2 mb-3">15 Core Financial Solutions</h2>
            <p className="text-sm text-[#4F615A]">
              Filter by category or explore individual specifications below.
            </p>
          </div>

          <ServicesExplorer />
        </div>
      </section>

      <FinancialGapAnalysisSection />
      <RealEstateSection />

      <section className="section-institutional bg-[#FFFFFF] border-t border-[#E2EBE5]">
        <div className="container max-w-3xl text-center">
          <h2 className="h2 mb-3">Coordinate a Portfolio Review</h2>
          <p className="text-xs text-[#4F615A] mb-6">
            Schedule a confidential discussion with Karthik R to audit your protection covers and loan rates.
          </p>
          <Link href="/book-session" className="btn-primary text-xs py-3 px-6">
            <span>Schedule Consultation</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 3. LIFE STRATEGIST MAIN VIEW
// -------------------------------------------------------------
function LifeStrategistMainView() {
  return (
    <PageShell>
      {/* 1. Hero & Dedicated Topic Directory */}
      <section className="relative w-full section-institutional overflow-hidden bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-5xl">
          <SectionBadge>Financial Education & Habits</SectionBadge>
          <h1 className="h1 mb-3 text-[#172B3A] font-heading">LIFE STRATEGIST</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-3">
            Learn · Plan · Grow
          </p>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-3xl mb-6">
            Simplifying personal finance so you can make informed decisions. Helping you understand money, evaluate financial contracts objectively, and develop healthy habits throughout life.
          </p>

          {/* Dedicated Sub-Navigation & Directory Cards */}
          <div className="pt-6 border-t border-[#E2EBE5]">
            <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-3">
              Curriculum & Strategic Areas
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="#mindset"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Mindset (Vision)</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Long-term compounding, emotional discipline, and resisting speculative market hype.
                </p>
              </a>

              <a
                href="#moral"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Moral (Fiduciary)</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Ethics, transparency, and aligning decisions with suitability over commissions.
                </p>
              </a>

              <a
                href="#awareness"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Awareness (Clarity)</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Reading contract fine print, room rent limits, pre-existing clauses, and hidden costs.
                </p>
              </a>

              <a
                href="#pillars"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">7 Pillars of Literacy</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Earn, Save, Protect, Invest, Borrow, Plan, and Review — the personal finance cycle.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Educational Pillars Section */}
      <section className="section-institutional bg-[#F8F8F2]" id="pillars-framework">
        <div className="container">
          <div className="section-title-wrap max-w-3xl">
            <SectionBadge>Educational Pillars</SectionBadge>
            <h2 className="h2 mb-3">Mindset, Moral & Awareness</h2>
            <p className="text-sm text-[#4F615A] mb-4">
              The three guiding pillars of our educational framework established in June 2022.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/knowledge-hub/sip-compounding-power-guide"
                className="text-xs font-semibold text-[#1F5138] hover:underline flex items-center gap-1"
              >
                <span>Read Mindset Case Study (SIP Compounding)</span>
                <ArrowRight size={12} />
              </Link>
              <span className="text-[#CAD9D0]">•</span>
              <Link
                href="/wealth-architect#gap-analysis"
                className="text-xs font-semibold text-[#1F5138] hover:underline flex items-center gap-1"
              >
                <span>Run Awareness Gap Evaluation</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <StrategyExplorer />
        </div>
      </section>

      {/* 3. College Programs Section */}
      <CollegeProgramsSection />

      {/* 4. 7 Pillars Section */}
      <section className="section-institutional bg-[#F8F8F2] border-b border-[#E2EBE5] scroll-mt-28" id="pillars">
        <div className="container">
          <div className="section-title-wrap max-w-3xl">
            <SectionBadge>7 Pillars</SectionBadge>
            <h2 className="h2 mb-3">Personal Finance Awareness</h2>
            <p className="text-sm text-[#4F615A] mb-4">
              Earn, Save, Protect, Invest, Borrow, Plan, and Review.
            </p>
            <Link
              href="/wealth-architect"
              className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore 15 Financial Services Aligned with These Pillars</span>
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {personalFinanceAwareness.map((p, i) => (
              <div key={i} className="institutional-card p-5">
                <span className="text-[11px] font-mono font-bold text-[#1F5138] block mb-1">
                  PILLAR 0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-[#172B3A] mb-1">{p.pillar}</h3>
                <div className="text-xs font-semibold text-[#1F5138] mb-2">{p.tagline}</div>
                <p className="text-xs text-[#4F615A] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-6 border-t border-[#E2EBE5] flex flex-wrap items-center justify-between gap-4">
            <div>
              <strong className="text-sm text-[#172B3A] block">Want to evaluate your own 7-pillar standing?</strong>
              <p className="text-xs text-[#4F615A]">Schedule a diagnostic session with Karthik R.</p>
            </div>
            <Link href="/book-session" className="btn-primary text-xs py-2.5 px-5">
              <span>Book Strategy Session</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 4. COMMUNITY MAIN VIEW
// -------------------------------------------------------------
function CommunityMainView() {
  return (
    <PageShell>
      {/* 1. Hero & Dedicated Topic Directory */}
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-5xl">
          <SectionBadge>Ecosystem & Collaboration</SectionBadge>
          <h1 className="h1 mb-3">Kreative Hertz Community</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-3xl mb-6">
            A collaborative network for sharing verified financial education, learning resources, and developing parallel income through ethical referrals.
          </p>

          {/* Dedicated Sub-Navigation & Directory Cards */}
          <div className="pt-6 border-t border-[#E2EBE5]">
            <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-3">
              Community Programs & Focus Areas
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="#overview"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Our Community</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Collaborative network of families, working professionals, and early-career learners.
                </p>
              </a>

              <a
                href="#refer-earn"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Refer & Earn</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Parallel income framework through compliant introductions to trusted advisory.
                </p>
              </a>

              <a
                href="#resource-exchange"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Book & Resource Exchange</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Curated financial books, budgeting templates, and study resources for students.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview Section */}
      <section className="section-institutional bg-[#F8F8F2] scroll-mt-28" id="overview">
        <div className="container max-w-4xl">
          <div className="institutional-card p-6 md:p-8 mb-8">
            <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
              Network Purpose
            </span>
            <h2 className="text-xl font-bold text-[#172B3A] mb-3 font-heading">
              A Community Anchored in Financial Literacy & Reciprocity
            </h2>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              Financial illiteracy thrives in isolation. The Kreative Hertz Community was created to give individuals, salaried professionals, and families a trusted space to ask questions, verify facts, exchange vetted study materials, and access institutional advisory standards without pressure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2EBE5]">
              <div>
                <strong className="block text-xs text-[#172B3A] mb-1">For Individuals & Families</strong>
                <p className="text-[11px] text-[#4F615A]">Access unbiased second opinions on existing policies and home loan rates.</p>
              </div>
              <div>
                <strong className="block text-xs text-[#172B3A] mb-1">For Students & Colleges</strong>
                <p className="text-[11px] text-[#4F615A]">Free curated reading materials and foundational money management kits.</p>
              </div>
              <div>
                <strong className="block text-xs text-[#172B3A] mb-1">For Advisors & Partners</strong>
                <p className="text-[11px] text-[#4F615A]">Compliant referral structures with prompt, transparent execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refer & Earn Section */}
      <div id="refer-earn" className="scroll-mt-28">
        <CommunityReferEarnSection />
      </div>

      {/* Book & Resource Exchange Section */}
      <section className="section-institutional bg-[#FFFFFF] border-t border-[#E2EBE5] scroll-mt-28" id="resource-exchange">
        <div className="container max-w-4xl">
          <div className="section-title-wrap mb-6">
            <SectionBadge>Knowledge Sharing</SectionBadge>
            <h2 className="h2 mb-2 font-heading">Book & Resource Exchange</h2>
            <p className="text-xs text-[#4F615A]">
              We facilitate the circulation of personal finance literature, cash-flow worksheets, and diagnostic checklists across our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="institutional-card p-6">
              <span className="text-[10px] font-mono font-bold text-[#1F5138] uppercase block mb-1">Resource Category 01</span>
              <h3 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">Foundational Literature</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Recommended readings on behavioral psychology, compound interest principles, and long-term asset allocation for early investors.
              </p>
              <Link href="/knowledge-hub" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                <span>View Knowledge Guides</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="institutional-card p-6">
              <span className="text-[10px] font-mono font-bold text-[#1F5138] uppercase block mb-1">Resource Category 02</span>
              <h3 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">Budgeting & Debt Trackers</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Practical spreadsheets for tracking recurring EMIs, calculating loan amortization schedules, and finding interest savings.
              </p>
              <Link href="/services/home-loans" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                <span>Home Loan Refinancing</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="institutional-card p-6">
              <span className="text-[10px] font-mono font-bold text-[#1F5138] uppercase block mb-1">Resource Category 03</span>
              <h3 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">Policy Diagnostic Checklists</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Step-by-step audit sheets for uncovering room rent sub-limits, disease caps, and surrender penalties in insurance policies.
              </p>
              <Link href="/wealth-architect#gap-analysis" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                <span>Gap Analysis Audit</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="institutional-card p-6 bg-[#EAF3EC]/40 border-[#CAD9D0] text-center">
            <h3 className="text-base font-bold text-[#172B3A] mb-2">Want to Partner with Kreative Hertz?</h3>
            <p className="text-xs text-[#4F615A] max-w-lg mx-auto mb-4">
              Whether you are an educational institution, a corporate HR coordinator, or a financial professional seeking ethical collaboration, we welcome your inquiry.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary text-xs py-2.5 px-6">
                <span>Discuss Collaboration</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/wealth-architect" className="btn-secondary text-xs py-2.5 px-6">
                <span>Explore 15 Financial Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 5. KNOWLEDGE HUB MAIN VIEW
// -------------------------------------------------------------
function KnowledgeHubMainView() {
  return (
    <PageShell>
      {/* 1. Header & Dedicated Editorial Pillar Guides */}
      <section className="relative w-full section-institutional overflow-hidden bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-5xl">
          <SectionBadge>Educational Articles & Case Studies</SectionBadge>
          <h1 className="h1 mb-3 text-[#172B3A] font-heading">Knowledge Hub</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-3xl mb-6">
            Practical financial guides explaining insurance fine print, disease sub-limits, compounding discipline, and loan interest savings. Clear, uncoerced education to empower your decisions.
          </p>

          {/* Dedicated Sub-Navigation & Curated Guides Cards */}
          <div className="pt-6 border-t border-[#E2EBE5]">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider">
                Essential Pillar Guides
              </div>
              <span className="text-[11px] text-[#4F615A]">5 Dedicated Research Articles</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Guide 1: Gap Analysis */}
              <div className="institutional-card p-4 flex flex-col justify-between hover:border-[#1F5138] transition-colors">
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-2">
                    <span className="font-bold text-[#1F5138] uppercase">Financial Awareness</span>
                    <span className="text-[#4F615A]">7 min read</span>
                  </div>
                  <h3 className="text-xs font-bold text-[#172B3A] mb-1.5 leading-snug">
                    <Link href="/knowledge-hub/financial-gap-analysis-guide" className="hover:text-[#1F5138] hover:underline">
                      Financial Gap Analysis Guide
                    </Link>
                  </h3>
                  <p className="text-[11px] text-[#4F615A] leading-snug mb-3">
                    How to identify coverage deficits across term life, medical covers, and loan liabilities.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2EBE5] flex items-center justify-between text-[11px]">
                  <Link href="/knowledge-hub/financial-gap-analysis-guide" className="font-bold text-[#1F5138] hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight size={11} />
                  </Link>
                  <Link href="/wealth-architect#gap-analysis" className="text-[#1F5138] hover:underline">
                    Run Audit →
                  </Link>
                </div>
              </div>

              {/* Guide 2: Health Insurance */}
              <div className="institutional-card p-4 flex flex-col justify-between hover:border-[#1F5138] transition-colors">
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-2">
                    <span className="font-bold text-[#1F5138] uppercase">Insurance</span>
                    <span className="text-[#4F615A]">6 min read</span>
                  </div>
                  <h3 className="text-xs font-bold text-[#172B3A] mb-1.5 leading-snug">
                    <Link href="/knowledge-hub/health-insurance-sublimits-explained" className="hover:text-[#1F5138] hover:underline">
                      Room Rent Capping & Sub-limits Explained
                    </Link>
                  </h3>
                  <p className="text-[11px] text-[#4F615A] leading-snug mb-3">
                    Why choosing the wrong hospital room category triggers huge proportionate deductions.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2EBE5] flex items-center justify-between text-[11px]">
                  <Link href="/knowledge-hub/health-insurance-sublimits-explained" className="font-bold text-[#1F5138] hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight size={11} />
                  </Link>
                  <Link href="/services/health-insurance" className="text-[#1F5138] hover:underline">
                    Health Service →
                  </Link>
                </div>
              </div>

              {/* Guide 3: SIP Compounding */}
              <div className="institutional-card p-4 flex flex-col justify-between hover:border-[#1F5138] transition-colors">
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-2">
                    <span className="font-bold text-[#1F5138] uppercase">Investments</span>
                    <span className="text-[#4F615A]">8 min read</span>
                  </div>
                  <h3 className="text-xs font-bold text-[#172B3A] mb-1.5 leading-snug">
                    <Link href="/knowledge-hub/sip-compounding-power-guide" className="hover:text-[#1F5138] hover:underline">
                      The Mathematical Power of SIP Compounding
                    </Link>
                  </h3>
                  <p className="text-[11px] text-[#4F615A] leading-snug mb-3">
                    Visualizing how incremental annual step-up SIPs double your final corpus over 15+ years.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2EBE5] flex items-center justify-between text-[11px]">
                  <Link href="/knowledge-hub/sip-compounding-power-guide" className="font-bold text-[#1F5138] hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight size={11} />
                  </Link>
                  <Link href="/services/mutual-funds" className="text-[#1F5138] hover:underline">
                    SIP Service →
                  </Link>
                </div>
              </div>

              {/* Guide 4: Home Loan Balance Transfer */}
              <div className="institutional-card p-4 flex flex-col justify-between hover:border-[#1F5138] transition-colors">
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-2">
                    <span className="font-bold text-[#1F5138] uppercase">Loans</span>
                    <span className="text-[#4F615A]">5 min read</span>
                  </div>
                  <h3 className="text-xs font-bold text-[#172B3A] mb-1.5 leading-snug">
                    <Link href="/knowledge-hub/home-loan-balance-transfer-hacks" className="hover:text-[#1F5138] hover:underline">
                      Home Loan Balance Transfer Hacks
                    </Link>
                  </h3>
                  <p className="text-[11px] text-[#4F615A] leading-snug mb-3">
                    Strategies to reduce long-term loan tenures by 5–7 years through interest refinancing.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2EBE5] flex items-center justify-between text-[11px]">
                  <Link href="/knowledge-hub/home-loan-balance-transfer-hacks" className="font-bold text-[#1F5138] hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight size={11} />
                  </Link>
                  <Link href="/services/home-loans" className="text-[#1F5138] hover:underline">
                    Transfer Service →
                  </Link>
                </div>
              </div>

              {/* Guide 5: Real Estate Checklist */}
              <div className="institutional-card p-4 flex flex-col justify-between hover:border-[#1F5138] transition-colors sm:col-span-2 lg:col-span-2">
                <div>
                  <div className="flex items-center justify-between text-[10px] mb-2">
                    <span className="font-bold text-[#1F5138] uppercase">Real Estate</span>
                    <span className="text-[#4F615A]">9 min read</span>
                  </div>
                  <h3 className="text-xs font-bold text-[#172B3A] mb-1.5 leading-snug">
                    <Link href="/knowledge-hub/real-estate-investment-checklist" className="hover:text-[#1F5138] hover:underline">
                      Due Diligence Checklist for Property Buyers
                    </Link>
                  </h3>
                  <p className="text-[11px] text-[#4F615A] leading-snug mb-3">
                    Comprehensive legal verification before making advance payments: RERA numbers, title deeds, encumbrance certificates, and layout approvals.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E2EBE5] flex items-center justify-between text-[11px]">
                  <Link href="/knowledge-hub/real-estate-investment-checklist" className="font-bold text-[#1F5138] hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight size={11} />
                  </Link>
                  <Link href="/services/residential-property" className="text-[#1F5138] hover:underline">
                    Property Service →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & Category Filter Explorer */}
      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container">
          <div className="section-title-wrap mb-6">
            <SectionBadge>Searchable Archive</SectionBadge>
            <h2 className="h2 mb-2 font-heading">Explore All Educational Resources</h2>
            <p className="text-xs text-[#4F615A]">
              Filter by topic category or search by keywords to find actionable explanations.
            </p>
          </div>

          <KnowledgeHubExplorer initialArticles={articles} />
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 6. DYNAMIC SERVICE DETAIL VIEW
// -------------------------------------------------------------
function ServiceDetailView({ service }: { service: ServiceItem }) {
  const related = servicesData
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3)

  return (
    <PageShell>
      {/* 1. Header & Breadcrumbs */}
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <div className="text-xs text-[#1F5138] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 flex-wrap">
            <Link href="/wealth-architect" className="hover:underline">Wealth Architect</Link>
            <span>/</span>
            <span>{service.category}</span>
            <span>/</span>
            <span className="text-[#172B3A]">{service.title}</span>
          </div>
          <h1 className="h1 mb-2 font-heading">{service.title}</h1>
          <p className="text-xs font-semibold text-[#1F5138] mb-3">{service.tagline}</p>
          <p className="text-sm text-[#4F615A] leading-relaxed">{service.shortDesc}</p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Left 8 Columns: Scope, Considerations, Pitfalls, Process */}
            <div className="md:col-span-8 space-y-6">
              {/* 2. What the Service Means (Scope & Methodology) */}
              <div className="institutional-card p-6">
                <h2 className="text-base font-bold text-[#172B3A] mb-3 font-heading">
                  Service Scope & Methodology
                </h2>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* 4. Specification Highlights */}
                <h3 className="text-xs font-bold text-[#1F5138] uppercase tracking-wider mb-3 font-heading">
                  Specification Highlights
                </h3>
                <ul className="space-y-2 text-xs text-[#26332D]">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#159568] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Considerations */}
              {service.whatToConsider && (
                <div className="institutional-card p-6">
                  <h3 className="text-sm font-bold text-[#172B3A] mb-3 font-heading">
                    Important Considerations
                  </h3>
                  <ul className="space-y-2 text-xs text-[#4F615A]">
                    {service.whatToConsider.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#1F5138] font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 6. Common Pitfalls to Avoid */}
              {service.commonMistakes && (
                <div className="institutional-card p-6 bg-[#FFFFFF]">
                  <h3 className="text-sm font-bold text-[#172B3A] mb-3 font-heading flex items-center gap-2">
                    <AlertCircle size={16} className="text-[#C6A66B]" />
                    <span>Common Pitfalls to Avoid</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-[#4F615A]">
                    {service.commonMistakes.map((m, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#C6A66B] font-bold">⚠</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 5. How the Advisory Process Works */}
              <div className="institutional-card p-6">
                <h3 className="text-sm font-bold text-[#172B3A] mb-3 font-heading">
                  How Our Consultation Works
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <span className="font-mono font-bold text-[#1F5138] block mb-1">01. Discovery</span>
                    <p className="text-[#4F615A] text-[11px] leading-relaxed">
                      Share existing policy schedules or requirements confidentially.
                    </p>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <span className="font-mono font-bold text-[#1F5138] block mb-1">02. Gap Audit</span>
                    <p className="text-[#4F615A] text-[11px] leading-relaxed">
                      We examine fine print, hidden caps, interest leaks, and coverage deficits.
                    </p>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <span className="font-mono font-bold text-[#1F5138] block mb-1">03. Solution</span>
                    <p className="text-[#4F615A] text-[11px] leading-relaxed">
                      Discuss transparent options aligned strictly with your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Target Audience, Key Features, CTA */}
            <div className="md:col-span-4 space-y-6">
              {/* 3. Who May Find It Relevant */}
              <div className="institutional-card p-6">
                <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-2 font-heading">
                  Target Audience
                </div>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                  {service.whoIsItFor}
                </p>

                <div className="border-t border-[#E2EBE5] pt-4">
                  <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-2 font-heading">
                    Core Specifications
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#26332D]">
                    {service.keyFeatures.map((kf, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-[#159568]">✓</span>
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 7. Direct Inquiry Action Card */}
              <div className="institutional-card p-6 text-center border-[#CAD9D0]">
                <h4 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">
                  Direct Advisory Discussion
                </h4>
                <p className="text-xs text-[#4F615A] mb-4 leading-relaxed">
                  Discuss this solution directly with Karthik R with zero commercial pressure.
                </p>
                <a
                  href={`https://wa.me/919482897253?text=Hello%20Karthik%20R,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-xs py-2.5 mb-2.5 group"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link
                  href="/book-session"
                  className="btn-secondary w-full justify-center text-xs py-2.5 mb-3"
                >
                  <span>Book Consultation Call</span>
                </Link>
                <Link
                  href="/wealth-architect"
                  className="text-xs font-semibold text-[#1F5138] hover:underline inline-flex items-center gap-1"
                >
                  <span>← Return to All 15 Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Services in Category */}
          {related.length > 0 && (
            <div className="border-t border-[#E2EBE5] pt-8">
              <h3 className="text-base font-bold text-[#172B3A] mb-4 font-heading">
                Related Services in {service.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/services/${r.id}`}
                    className="institutional-card p-4 hover:border-[#1F5138] transition-colors group"
                  >
                    <h4 className="text-sm font-bold text-[#172B3A] mb-1 group-hover:text-[#1F5138] transition-colors font-heading">
                      {r.title}
                    </h4>
                    <p className="text-xs text-[#4F615A] line-clamp-2">{r.shortDesc}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 7. DYNAMIC ARTICLE DETAIL VIEW
// -------------------------------------------------------------
function KnowledgeArticleDetailView({ article }: { article: KnowledgeArticle }) {
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-3xl">
          <div className="text-xs text-[#1F5138] font-bold uppercase tracking-wider mb-2">
            <Link href="/knowledge-hub" className="hover:underline">Knowledge Hub</Link>
            <span className="mx-2">/</span>
            <span>{article.category}</span>
          </div>
          <h1 className="h1 mb-3">{article.title}</h1>
          <div className="text-xs text-[#4F615A] flex items-center gap-3">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.read}</span>
          </div>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-3xl">
          <div className="p-4 rounded border border-[#CAD9D0] bg-[#FFFFFF] mb-8">
            <div className="text-xs font-bold text-[#1F5138] uppercase tracking-wider mb-1">
              Core Takeaway
            </div>
            <p className="text-sm font-semibold text-[#172B3A]">
              {article.keyTakeaway}
            </p>
          </div>

          <div className="prose text-xs text-[#26332D] leading-relaxed space-y-4 mb-10">
            <p className="text-sm font-medium text-[#172B3A] leading-relaxed">
              {article.excerpt}
            </p>
            <p>
              In our advisory engagements at Kreative Hertz, we constantly see how minor clauses inside policy contracts result in substantial financial friction during emergencies. Whether it is choosing health policies with restrictive room-rent limits, terminating systematic investments during normal market volatility, or paying elevated interest rates on unmonitored home loans, lack of structured awareness remains the root cause.
            </p>
            <p>
              Sustainable financial stability is not achieved by attempting to time markets or chasing complex products; it is engineered through sound foundational risk covers, disciplined asset allocation, and regular reviews.
            </p>
          </div>

          <div className="institutional-card p-6 text-center mb-10">
            <h3 className="text-base font-bold text-[#172B3A] mb-2">Have Questions Regarding This Topic?</h3>
            <p className="text-xs text-[#4F615A] mb-4">
              Schedule a confidential strategy discussion with Karthik R.
            </p>
            <Link href="/book-session" className="btn-primary text-xs py-2.5 px-6">
              <span>Book Strategy Session</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Related Articles */}
          <div className="border-t border-[#E2EBE5] pt-8">
            <h3 className="text-base font-bold text-[#172B3A] mb-4">Other Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {others.map((oa) => (
                <Link
                  key={oa.slug}
                  href={`/knowledge-hub/${oa.slug}`}
                  className="institutional-card p-4 hover:border-[#1F5138] transition-colors"
                >
                  <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                    {oa.category}
                  </span>
                  <h4 className="text-xs font-bold text-[#172B3A] mb-1 line-clamp-2">{oa.title}</h4>
                  <span className="text-[11px] text-[#4F615A]">{oa.read}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 8. BOOK A SESSION PAGE
// -------------------------------------------------------------
function BookSessionPageView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-3xl">
          <SectionBadge>Advisory Intake</SectionBadge>
          <h1 className="h1 mb-2">Book a Personal Session</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed">
            Schedule a confidential 1-on-1 strategy call with Karthik R. Zero commercial pressure. Pure diagnostic clarity.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-3xl">
          <BookSessionSection />
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 9. CONTACT PAGE
// -------------------------------------------------------------
function ContactPageView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <SectionBadge>Direct Access</SectionBadge>
          <h1 className="h1 mb-2">Contact Kreative Hertz</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed">
            Reach out directly to Karthik R for financial gap audits, loan balance transfer evaluations, or institutional literacy workshops.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="institutional-card p-6">
                <span className="text-xs font-bold text-[#1F5138] uppercase tracking-wider block mb-1">Telephone</span>
                <a href={`tel:${companyDetails.phone}`} className="text-lg font-bold text-[#172B3A] hover:text-[#1F5138] flex items-center gap-2">
                  <Phone size={16} className="text-[#1F5138]" />
                  <span>{companyDetails.phoneFormatted}</span>
                </a>
                <p className="text-xs text-[#4F615A] mt-2">Mon–Sat: 9:30 AM – 7:00 PM IST</p>
              </div>

              <div className="institutional-card p-6">
                <span className="text-xs font-bold text-[#1F5138] uppercase tracking-wider block mb-1">Email</span>
                <a href={`mailto:${companyDetails.email}`} className="text-base font-bold text-[#172B3A] hover:text-[#1F5138] flex items-center gap-2">
                  <Mail size={16} className="text-[#1F5138]" />
                  <span>{companyDetails.email}</span>
                </a>
                <p className="text-xs text-[#4F615A] mt-2">Send policy documents for complimentary audit</p>
              </div>

              <div className="institutional-card p-6">
                <span className="text-xs font-bold text-[#159568] uppercase tracking-wider block mb-1">WhatsApp</span>
                <a
                  href={companyDetails.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center text-xs py-2.5 mt-2"
                >
                  <span>Open WhatsApp Direct Chat</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BookSessionSection />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 10. FAQ PAGE
// -------------------------------------------------------------
function FaqPageView() {
  const allFaqs = [
    {
      cat: 'Advisory & Philosophy',
      items: [
        {
          q: 'What does "Complexity 2 Simplicity" mean in practice?',
          a: 'Financial contracts and insurance policies are often filled with legal jargon, disease sub-limits, and obscure fees. We translate these into straightforward checklists so clients understand their actual commitments.'
        },
        {
          q: 'What is the distinction between a Wealth Architect and a Life Strategist?',
          a: 'A Wealth Architect diagnoses the portfolio and structures financial solutions (insurance covers, loan refinancing, asset allocation). A Life Strategist educates on money psychology, risk literacy, and disciplined financial habits.'
        },
        {
          q: 'When was Kreative Hertz established and by whom?',
          a: 'Kreative Hertz was established in June 2022 by Karthik R in Bengaluru, Karnataka.'
        }
      ]
    },
    {
      cat: 'Insurance & Risk Mitigation',
      items: [
        {
          q: 'Why do you prioritize pure term insurance over traditional endowment plans?',
          a: 'Endowment and money-back policies mix insurance with investment, often yielding 4% to 5% returns while leaving families drastically under-insured. Pure term plans provide 15–20x income replacement at affordable premiums, allowing surplus cash to compound in dedicated equity instruments.'
        },
        {
          q: 'What is the risk of room-rent sub-limits in health insurance?',
          a: 'If a policy contains a room rent limit and a hospital room above that cap is selected, insurers apply proportionate deductions to surgeon fees, nursing charges, and diagnostic tests, creating significant out-of-pocket expenses.'
        }
      ]
    },
    {
      cat: 'Investments & Compounding',
      items: [
        {
          q: 'Do you guarantee returns on mutual fund investments?',
          a: 'No. All mutual fund investments are subject to market risks. We emphasize asset allocation, time horizon discipline, and periodic rebalancing rather than short-term market timing.'
        },
        {
          q: 'What tax advantages does NPS offer?',
          a: 'Beyond the ₹1.5 Lakh limit under Section 80C, the National Pension System allows an exclusive deduction of up to ₹50,000 under Section 80CCD(1B).'
        }
      ]
    },
    {
      cat: 'Loans & Debt Management',
      items: [
        {
          q: 'When does a home loan balance transfer make economic sense?',
          a: 'If an existing lender charges 0.5% or more above prevailing bank rates and you have more than 10–15 years of tenure left, a balance transfer can save lakhs in interest outflow over the loan lifespan.'
        }
      ]
    }
  ]

  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <SectionBadge>Knowledge Base</SectionBadge>
          <h1 className="h1 mb-2">Frequently Asked Questions</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed">
            Clear, transparent answers regarding our financial advisory methodology and services.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-4xl space-y-8">
          {allFaqs.map((sec, idx) => (
            <div key={idx}>
              <h2 className="text-xs font-bold text-[#1F5138] uppercase tracking-wider mb-4 border-b border-[#CAD9D0] pb-2">
                {sec.cat}
              </h2>
              <div className="space-y-3">
                {sec.items.map((item, i) => (
                  <div key={i} className="institutional-card p-5">
                    <h3 className="text-sm font-bold text-[#172B3A] mb-2 flex items-start gap-2">
                      <HelpCircle size={16} className="text-[#1F5138] flex-shrink-0 mt-0.5" />
                      <span>{item.q}</span>
                    </h3>
                    <p className="text-xs text-[#4F615A] leading-relaxed pl-6">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 11. PRIVACY POLICY PAGE
// -------------------------------------------------------------
function PrivacyPageView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-3xl">
          <SectionBadge>Legal & Compliance</SectionBadge>
          <h1 className="h1 mb-2">Privacy Policy</h1>
          <p className="text-sm text-[#4F615A]">
            How Kreative Hertz manages, uses, and safeguards client information.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-3xl prose text-xs text-[#26332D] leading-relaxed space-y-4">
          <div className="p-3 rounded border border-[#CAD9D0] bg-[#FFFFFF] text-xs font-semibold text-[#1F5138]">
            Effective Date: June 2022 | Last Updated: November 2026.
          </div>

          <h2 className="text-sm font-bold text-[#172B3A]">1. Information Collection</h2>
          <p>
            When coordinating consultations, financial gap audits, or workshop enrollments, Kreative Hertz collects personal contact information (name, email address, telephone number, city) and information voluntarily provided regarding financial arrangements.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">2. Use of Information</h2>
          <p>
            Client details are used strictly to coordinate requested callback sessions, conduct gap analyses, and deliver personalized advisory communications. We do not sell, rent, or distribute personal data to third-party telemarketing databases.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">3. Data Security</h2>
          <p>
            We implement reasonable organizational and technical protocols to prevent unauthorized access or disclosure of client documents. Copies of existing policies submitted for gap audits are handled with strict fiduciary confidentiality.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">4. Third-Party Financial Institutions</h2>
          <p>
            Where a client explicitly instructs us to facilitate an application (such as an insurance proposal or bank loan), client data is submitted solely to the authorized underwriting institution with prior client consent.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">5. Contact</h2>
          <p>
            Inquiries regarding personal information handling may be addressed to <strong>fulfil@kreativehertz.in</strong>.
          </p>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 12. TERMS & CONDITIONS PAGE
// -------------------------------------------------------------
function TermsPageView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-3xl">
          <SectionBadge>Legal Terms</SectionBadge>
          <h1 className="h1 mb-2">Terms & Conditions</h1>
          <p className="text-sm text-[#4F615A]">
            Terms governing the use of the Kreative Hertz website and advisory materials.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-3xl prose text-xs text-[#26332D] leading-relaxed space-y-4">
          <div className="p-3 rounded border border-[#CAD9D0] bg-[#FFFFFF] text-xs font-semibold text-[#1F5138]">
            Governing all advisory interactions, consultations, and educational content.
          </div>

          <h2 className="text-sm font-bold text-[#172B3A]">1. Advisory Scope</h2>
          <p>
            Information provided across this website and during consultations is intended for educational and financial gap analysis purposes. Final implementation of any financial product is subject to client review of respective terms and conditions.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">2. Accurate Disclosure Obligation</h2>
          <p>
            The validity of risk analysis depends upon complete and honest client disclosures. In insurance applications, non-disclosure of medical history or pre-existing conditions can jeopardize claims settlement by insurers.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">3. Intellectual Property</h2>
          <p>
            All website materials, logos, trademarks, and educational frameworks (&ldquo;Complexity 2 Simplicity&rdquo;, &ldquo;Wealth Architect&rdquo;, &ldquo;Life Strategist&rdquo;) are the property of Kreative Hertz and may not be reproduced without prior written permission.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">4. Jurisdiction</h2>
          <p>
            Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.
          </p>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 13. DISCLAIMER PAGE
// -------------------------------------------------------------
function DisclaimerPageView() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-3xl">
          <SectionBadge>Regulatory Disclosures</SectionBadge>
          <h1 className="h1 mb-2">Regulatory Disclaimer</h1>
          <p className="text-sm text-[#4F615A]">
            Mandatory disclosures regarding mutual fund investments, insurance solicitations, and lending terms.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container max-w-3xl prose text-xs text-[#26332D] leading-relaxed space-y-4">
          <div className="p-3 rounded border border-[#CAD9D0] bg-[#FFFFFF] text-xs font-semibold text-[#1F5138]">
            Compliance Notice: Kreative Hertz operates strictly on an educational and client-first basis.
          </div>

          <h2 className="text-sm font-bold text-[#172B3A]">1. Mutual Funds</h2>
          <p>
            Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. Kreative Hertz does not guarantee investment returns or capital safety.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">2. Insurance Solicitations</h2>
          <p>
            Insurance is a subject matter of solicitation. Policy underwriting, terms, exclusions, and claims settlements are governed solely by the respective insurance company in accordance with IRDAI regulations.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">3. Loan Sanctions</h2>
          <p>
            Loan eligibility, interest rates, processing markups, and approvals are determined by institutional banks and NBFCs based on credit scores (CIBIL), debt service ratios, and legal verification of property documents.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
