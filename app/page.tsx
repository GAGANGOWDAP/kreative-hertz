import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { SectionBadge } from '@/components/shared/SectionBadge'
import { InteractiveFaqList } from '@/components/shared/InteractiveFaqList'
import {
  HeroSection,
  VisitorRequirementSelector,
  TwoDisciplinesOverview,
  HowWeWorkSection,
  HomeBookingCtaSection
} from '@/features/home'
import { ServicesExplorer } from '@/features/services'
import {
  FinancialGapAnalysisSection,
  RealEstateSection,
  SevenPillarsSection
} from '@/features/wealth-architect'
import { KnowledgeHubHomeSection } from '@/features/knowledge-hub'

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
      <HeroSection />

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
