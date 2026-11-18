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
      {/* 1. HERO SECTION (Full-Width Composition with Indian Family & Wealth Architecture Background) */}
      <section className="relative w-full min-h-[calc(100svh-64px)] lg:min-h-[calc(100svh-76px)] flex flex-col justify-between border-b border-[#0A5A42]/30 overflow-hidden bg-[#0A382A]">
        {/* Full-width authentic Indian family & financial growth photograph background */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          <Image
            src={getAssetPath('/images/hero-family.jpg')}
            alt="Indian family with financial growth architecture and Rupee symbol"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[80%_center] sm:object-[82%_center] md:object-[85%_center] lg:object-[85%_center] xl:object-right"
          />
          {/* Responsive directional gradient overlays:
              - Mobile & Tablet Portrait (< 1024px): Top-to-bottom gradient ensures 100% crisp text readability for the headline & CTAs at the top, while keeping the family's faces beautifully clear in the lower half.
              - Desktop (>= 1024px): Left-to-right gradient anchors the left reading area while leaving the entire right visual (Rupee, skyline, growth curve & family) fully luminous. */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-[#07241A]/95 via-[#07241A]/85 via-50% to-[#07241A]/30 lg:bg-gradient-to-r lg:from-[#07241A]/95 lg:via-[#07241A]/70 lg:to-transparent"
          />
          {/* Subtle bottom grounding gradient for trust indicators */}
          <div
            className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#07241A]/90 via-[#07241A]/40 to-transparent"
          />
        </div>

        {/* Hero Content (Relative Z-10) */}
        <div className="relative z-10 container max-w-6xl mx-auto flex flex-col flex-1 justify-between pt-3 sm:pt-5 lg:pt-7 xl:pt-8 pb-3 sm:pb-5 lg:pb-7 px-4 sm:px-6">
          {/* Main Hero Content Area (Level 1 & Level 2) positioned on the LEFT side */}
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl flex flex-col justify-center my-auto py-1">
            {/* Level 1: Introductory label and main heading */}
            <div className="mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A5A42]/80 border border-[#11A778]/50 text-[#F7FAF8] text-xs font-semibold backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                <span>Institutional Financial Advisory</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#F7FAF8] font-heading tracking-tight leading-[1.15] mb-2 sm:mb-3">
              Structured Wealth Architecture. <br className="hidden sm:inline" />
              <span className="text-[#11A778]">Objective Financial Guidance.</span>
            </h1>

            {/* Level 2: Description and three CTA actions */}
            <p className="text-xs sm:text-sm lg:text-[15px] xl:text-[16px] text-[#E8F3ED] leading-relaxed max-w-xl mb-3.5 sm:mb-4 lg:mb-5 font-normal">
              From identifying critical gaps in insurance and asset allocation to structuring transparent debt financing and personal financial education, Kreative Hertz converts financial complexity into clear, durable strategies.
            </p>

            <div className="flex flex-wrap gap-2.5 sm:gap-3.5 items-center">
              <Link
                href="/book-session"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-[#11A778] hover:bg-[#0A5A42] text-white font-semibold text-xs sm:text-sm shadow-[0_4px_16px_rgba(17,167,120,0.35)] border border-[#11A778] transition-all group"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/wealth-architect"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-md bg-[#F7FAF8]/10 hover:bg-[#F7FAF8]/20 text-[#F7FAF8] font-semibold text-xs sm:text-sm border border-[#F7FAF8]/40 backdrop-blur-xs transition-all"
              >
                <span>Explore 15 Financial Services</span>
              </Link>
              <Link
                href="/contact"
                className="text-xs sm:text-sm font-semibold text-[#F7FAF8] hover:text-[#11A778] flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 transition-colors"
              >
                <span>Contact Advisor</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Level 3: Three bottom trust indicators, separated by a subtle horizontal divider */}
          <div className="pt-3 sm:pt-5 border-t border-white/15 mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {/* Highlight 1 */}
              <div className="pb-2 md:pb-0 md:pr-6 lg:pr-8">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#11A778] flex-shrink-0" />
                  <span className="font-bold text-sm sm:text-[15px] text-[#F7FAF8] font-heading">
                    Fiduciary Standard
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#E8F3ED]/80 leading-normal pl-[18px]">
                  Don&apos;t Sell First. Educate First.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="py-2 md:py-0 md:px-6 lg:px-8">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#11A778] flex-shrink-0" />
                  <span className="font-bold text-sm sm:text-[15px] text-[#F7FAF8] font-heading">
                    Established 2022
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#E8F3ED]/80 leading-normal pl-[18px]">
                  Founded by Karthik R in June 2022.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="pt-2 md:pt-0 md:pl-6 lg:pl-8">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#11A778] flex-shrink-0" />
                  <span className="font-bold text-sm sm:text-[15px] text-[#F7FAF8] font-heading">
                    Dual Discipline
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#E8F3ED]/80 leading-normal pl-[18px]">
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
      <section className="section-institutional bg-[#F8F8F2] border-t border-b border-[#E2EBE5] scroll-mt-28" id="faq">
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
