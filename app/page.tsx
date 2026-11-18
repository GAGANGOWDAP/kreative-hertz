import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Compass,
  Award,
  ChevronRight,
  HelpCircle,
  Phone,
  Mail,
  CheckCircle2,
  Building,
  Home,
  Shield,
  Layers
} from 'lucide-react'
import {
  PageShell,
  SectionBadge,
  FinancialGapAnalysisSection,
  RealEstateSection,
  BookSessionSection,
  ServicesExplorer,
  VisitorRequirementSelector,
  HowWeWorkSection,
  InteractiveFaqList,
  TwoDisciplinesOverview,
  SevenPillarsSection,
  KnowledgeHubHomeSection,
  HomeBookingCtaSection
} from '@/components/site'
import { companyDetails, personalFinanceAwareness, articles } from '@/lib/site-data'

export default function HomePage() {
  const homeFaqs = [
    {
      q: 'What is the distinction between a Wealth Architect and a Life Strategist?',
      a: 'As a Wealth Architect, we evaluate policy structures, identify coverage gaps, and optimize financial portfolios across insurance, mutual funds, loans, and real estate. As a Life Strategist, we educate individuals and students on financial psychology, risk management, and disciplined money habits.'
    },
    {
      q: 'Does Kreative Hertz charge upfront fees for initial gap analysis?',
      a: 'Initial gap discovery consultations and policy reviews are conducted without upfront fees. Our objective is to provide diagnostic clarity before any financial decision is made.'
    },
    {
      q: 'Do you offer guaranteed returns on investments?',
      a: 'No. Mutual funds and market-linked instruments are subject to market risks. We follow a strict fiduciary standard and do not make false performance guarantees.'
    },
    {
      q: 'How does the Financial Gap Analysis review work?',
      a: 'We evaluate five structural pillars: pure term life protection adequacy, health insurance room-rent and copay clauses, asset allocation diversification, debt/EMI interest burdens, and inflation-adjusted retirement targets.'
    }
  ]

  return (
    <PageShell>
      {/* 1. HERO SECTION (Full-Width Photographic Composition with Editorial Typography) */}
      <section className="relative w-full min-h-[calc(100svh-64px)] lg:min-h-[calc(100svh-76px)] flex flex-col justify-between border-b border-[#0A5A42]/30 overflow-hidden bg-[#0A382A]">
        {/* Full-width authentic Indian family & wealth architecture photograph */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          <Image
            src={getAssetPath('/images/hero-family.jpg')}
            alt="Indian family with financial growth architecture and Rupee symbol"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_center] sm:object-[82%_center] md:object-[85%_center] lg:object-[85%_center] xl:object-right"
          />
          {/* Subtle single directional gradient overlay:
              - Mobile & Tablet (< 1024px): Top-to-bottom soft gradient provides 100% crisp contrast for headline and actions while keeping family portraits clear below.
              - Desktop (>= 1024px): Left-to-right gradient anchors the editorial text area while leaving the entire right visual (family, Rupee symbol, skyline & growth curve) completely luminous and natural. */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#07241A]/95 via-[#07241A]/85 via-50% to-[#07241A]/25 lg:bg-gradient-to-r lg:from-[#07241A]/95 lg:via-[#07241A]/65 lg:to-transparent"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-[#07241A]/80 via-[#07241A]/30 to-transparent"
          />
        </div>

        {/* Hero Content (Relative Z-10) */}
        <div className="relative z-10 container max-w-6xl mx-auto flex flex-col flex-1 justify-between pt-6 sm:pt-8 lg:pt-10 xl:pt-12 pb-6 sm:pb-8 lg:pb-10 px-4 sm:px-6">
          {/* Main Hero Content Area positioned on the LEFT side */}
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl flex flex-col justify-center my-auto py-2">
            {/* Level 1: Institutional Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A5A42]/70 border border-[#11A778]/40 text-[#F7FAF8] text-xs font-medium backdrop-blur-xs mb-3 sm:mb-4 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
              <span className="tracking-wide">Institutional Financial Advisory</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold text-[#F7FAF8] font-heading tracking-[-0.03em] leading-[1.12] mb-3 sm:mb-4 text-balance">
              Structured Wealth Architecture. <br className="hidden sm:inline" />
              <span className="text-[#11A778]">Objective Financial Guidance.</span>
            </h1>

            {/* Level 2: Editorial Description */}
            <p className="text-sm sm:text-base lg:text-[16px] text-[#E8F3ED] leading-relaxed max-w-xl mb-5 sm:mb-6 font-normal">
              From identifying critical gaps in insurance and asset allocation to structuring transparent debt financing and personal financial education, Kreative Hertz converts financial complexity into clear, durable strategies.
            </p>

            {/* Level 3: Action Buttons */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3.5 items-center">
              <Link
                href="/book-session"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#11A778] hover:bg-[#0A5A42] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(17,167,120,0.35)] border border-[#11A778] transition-all group"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/wealth-architect"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#F7FAF8]/10 hover:bg-[#F7FAF8]/20 text-[#F7FAF8] font-semibold text-xs sm:text-sm border border-[#F7FAF8]/35 hover:border-[#11A778] backdrop-blur-xs transition-all"
              >
                <span>Explore 15 Financial Services</span>
              </Link>
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-semibold text-[#E8F3ED] hover:text-[#11A778] flex items-center gap-1.5 px-3 py-2 transition-colors"
              >
                <span>Contact Advisor</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Level 4: Editorial Trust Indicators (Constrained to Left Column, Leaving Photographic Composition Fully Unobstructed on the Right) */}
          <div className="pt-4 sm:pt-6 border-t border-white/15 mt-auto max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
              {/* Highlight 1 */}
              <div className="pb-2.5 sm:pb-0 sm:pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] flex-shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-[#F7FAF8] font-heading tracking-wide">
                    Fiduciary Standard
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#E8F3ED]/80 leading-normal pl-3.5">
                  Don&apos;t Sell First. Educate First.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="py-2.5 sm:py-0 sm:px-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] flex-shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-[#F7FAF8] font-heading tracking-wide">
                    Established 2022
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#E8F3ED]/80 leading-normal pl-3.5">
                  Founded in June 2022, Bengaluru.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="pt-2.5 sm:pt-0 sm:pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] flex-shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-[#F7FAF8] font-heading tracking-wide">
                    Dual Discipline
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#E8F3ED]/80 leading-normal pl-3.5">
                  Wealth Architect &amp; Life Strategist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISITOR REQUIREMENT SELECTOR ("HOW CAN WE HELP YOU TODAY?") */}
      <VisitorRequirementSelector />

      {/* 3. THE TWO DISCIPLINES OVERVIEW */}
      <TwoDisciplinesOverview />

      {/* 4. HOW WE WORK (4-STEP CLIENT JOURNEY) */}
      <HowWeWorkSection />

      {/* 5. 15 FINANCIAL SERVICES DIRECTORY */}
      <section className="section-institutional py-3 sm:py-5 lg:py-3.5 xl:py-6 bg-[#FFFFFF] border-b border-[#E2EBE5] scroll-mt-28" id="services">
        <div className="container">
          <div className="section-title-wrap max-w-3xl mb-2 sm:mb-4 lg:mb-2.5">
            <SectionBadge>Financial Services</SectionBadge>
            <h2 className="h2 mb-1.5 sm:mb-2">15 Core Financial Solutions</h2>
            <p className="text-xs sm:text-sm text-[#4F615A]">
              Organized across Insurance, Investments, Loans, and Real Estate. All advisory engagements are customized strictly according to client risk suitability.
            </p>
          </div>

          <ServicesExplorer />
        </div>
      </section>

      {/* 6. FINANCIAL GAP ANALYSIS SECTION */}
      <FinancialGapAnalysisSection />

      {/* 7. REAL ESTATE SECTION */}
      <RealEstateSection />

      {/* 8. 7 PILLARS OF FINANCIAL AWARENESS */}
      <SevenPillarsSection />

      {/* 9. FEATURED ARTICLES FROM KNOWLEDGE HUB */}
      <KnowledgeHubHomeSection />

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="section-institutional bg-[#F7FAF8] border-t border-b border-[#E2EBE5] scroll-mt-28" id="faq">
        <div className="container max-w-4xl">
          <div className="section-title-wrap text-center mb-4 sm:mb-6">
            <SectionBadge>Client Questions</SectionBadge>
            <h2 className="h2 mb-1.5 sm:mb-2">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-[#4F615A]">
              Direct answers regarding our advisory practice, fees, and methodology.
            </p>
          </div>

          <InteractiveFaqList items={homeFaqs} />

          <div className="text-center mt-5">
            <Link href="/faq" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
              <span>Explore complete FAQ library</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. FINAL HOMEPAGE CALL TO ACTION */}
      <HomeBookingCtaSection />
    </PageShell>
  )
}
