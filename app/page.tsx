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
  InteractiveFaqList
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
      {/* 1. HERO SECTION (Refined Full-Width Composition with Subtle Architecture Background) */}
      <section className="relative w-full lg:min-h-[calc(100svh-76px)] flex flex-col justify-between border-b border-[#E2EBE5] overflow-hidden bg-[#F8F8F2]">
        {/* Subtle full-width authentic architectural photograph background */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
          <Image
            src={getAssetPath('/hero-architecture.jpg')}
            alt="Modern glass architecture with subtle greenery"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Warm-White Overlay (87% opacity) for enhanced architectural visibility while ensuring pristine text contrast */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(248, 248, 242, 0.87)' }}
          />
        </div>

        {/* Hero Content (Relative Z-10) */}
        <div className="relative z-10 container max-w-6xl mx-auto flex flex-col flex-1 justify-between pt-5 sm:pt-6 lg:pt-7 xl:pt-8 pb-5 sm:pb-6 lg:pb-7 px-4 sm:px-6">
          {/* Main Hero Content Area (Level 1 & Level 2) */}
          <div className="max-w-4xl flex flex-col justify-center my-auto py-1 sm:py-2">
            {/* Level 1: Introductory label and main heading */}
            <div className="mb-2">
              <SectionBadge>Institutional Financial Advisory</SectionBadge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-extrabold text-[#172B3A] font-heading tracking-tight leading-[1.14] mb-2.5 sm:mb-3">
              Structured Wealth Architecture. <br className="hidden sm:inline" />
              <span className="text-[#1F5138]">Objective Financial Guidance.</span>
            </h1>

            {/* Level 2: Description and three CTA actions */}
            <p className="text-sm sm:text-base lg:text-[16px] text-[#4F615A] leading-relaxed max-w-2xl lg:max-w-3xl mb-4 sm:mb-5">
              From identifying critical gaps in insurance and asset allocation to structuring transparent debt financing and personal financial education — Kreative Hertz converts financial complexity into clear, durable strategies.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-3.5 items-center">
              <Link href="/book-session" className="btn-primary group">
                <span>Schedule a Consultation</span>
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/wealth-architect" className="btn-secondary">
                <span>Explore 15 Financial Services</span>
              </Link>
              <Link href="/contact" className="text-xs sm:text-sm font-semibold text-[#1F5138] hover:text-[#159568] flex items-center gap-1.5 px-3 py-2 transition-colors">
                <span>Contact Advisor</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Level 3: Three bottom trust indicators, separated by a subtle horizontal divider */}
          <div className="pt-4 sm:pt-5 border-t border-[#E2EBE5] mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2EBE5]">
              {/* Highlight 1 */}
              <div className="pb-3 md:pb-0 md:pr-6 lg:pr-8">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#159568] flex-shrink-0" />
                  <span className="font-bold text-sm sm:text-[15px] text-[#172B3A] font-heading">
                    Fiduciary Standard
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#4F615A] leading-normal pl-[18px]">
                  Don&apos;t Sell First. Educate First.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="py-3 md:py-0 md:px-6 lg:px-8">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#159568] flex-shrink-0" />
                  <span className="font-bold text-sm sm:text-[15px] text-[#172B3A] font-heading">
                    Established 2022
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#4F615A] leading-normal pl-[18px]">
                  Founded by Karthik R in June 2022.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="pt-3 md:pt-0 md:pl-6 lg:pl-8">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#159568] flex-shrink-0" />
                  <span className="font-bold text-sm sm:text-[15px] text-[#172B3A] font-heading">
                    Dual Discipline
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[#4F615A] leading-normal pl-[18px]">
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
      <section className="section-institutional bg-[#F8F8F2]">
        <div className="container">
          <div className="section-title-wrap max-w-3xl">
            <SectionBadge>Brand Architecture</SectionBadge>
            <h2 className="h2 mb-3">Two Integrated Disciplines</h2>
            <p className="text-sm text-[#4F615A]">
              Kreative Hertz approaches personal finance through two complementary dimensions: diagnostic wealth architecture and educational life strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Wealth Architect */}
            <div className="institutional-card p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#1F5138] uppercase tracking-wider block mb-2">
                  Technical Architecture
                </span>
                <h3 className="text-2xl font-bold text-[#172B3A] mb-3">
                  WEALTH ARCHITECT
                </h3>
                <p className="text-xs text-[#1F5138] font-semibold mb-3">
                  Understand. Analyse. Strategise.
                </p>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-6">
                  Evaluating individual financial requirements, auditing existing insurance and investment contracts, identifying critical liabilities, and structuring goal-aligned solutions.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs text-[#2B2A29] mb-6">
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <strong className="block text-[#172B3A] mb-1">Insurance</strong>
                    <span className="text-[#4F615A]">Life, Health, Auto, Travel</span>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <strong className="block text-[#172B3A] mb-1">Investments</strong>
                    <span className="text-[#4F615A]">Mutual Funds, NPS, Bonds</span>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <strong className="block text-[#172B3A] mb-1">Loans</strong>
                    <span className="text-[#4F615A]">Home, Business, LAP</span>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <strong className="block text-[#172B3A] mb-1">Real Estate</strong>
                    <span className="text-[#4F615A]">Residential & Plots</span>
                  </div>
                </div>
              </div>

              <Link href="/wealth-architect" className="btn-primary text-xs py-2.5 justify-center">
                <span>Explore Wealth Architect Directory</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Life Strategist */}
            <div className="institutional-card p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#1F5138] uppercase tracking-wider block mb-2">
                  Financial Literacy & Habit Formation
                </span>
                <h3 className="text-2xl font-bold text-[#172B3A] mb-3">
                  LIFE STRATEGIST
                </h3>
                <p className="text-xs text-[#1F5138] font-semibold mb-3">
                  Learn. Plan. Grow.
                </p>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-6">
                  Demystifying the language of personal finance. We educate students, young earners, and families on money psychology, evaluating fine print, and avoiding speculative traps.
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs text-[#2B2A29] mb-6">
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <strong className="block text-[#172B3A] mb-1">Core Pillars</strong>
                    <span className="text-[#4F615A]">Mindset, Moral, Awareness</span>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <strong className="block text-[#172B3A] mb-1">Colleges</strong>
                    <span className="text-[#4F615A]">30–40 Hr Literacy Modules</span>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <strong className="block text-[#172B3A] mb-1">Awareness</strong>
                    <span className="text-[#4F615A]">7 Pillars of Literacy</span>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <strong className="block text-[#172B3A] mb-1">Community</strong>
                    <span className="text-[#4F615A]">Refer & Earn Program</span>
                  </div>
                </div>
              </div>

              <Link href="/life-strategist" className="btn-secondary text-xs py-2.5 justify-center">
                <span>Explore Life Strategist Curriculum</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (4-STEP CLIENT JOURNEY) */}
      <HowWeWorkSection />

      {/* 5. 15 FINANCIAL SERVICES DIRECTORY */}
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5] scroll-mt-28" id="services">
        <div className="container">
          <div className="section-title-wrap max-w-3xl">
            <SectionBadge>Financial Services</SectionBadge>
            <h2 className="h2 mb-3">15 Core Financial Solutions</h2>
            <p className="text-sm text-[#4F615A]">
              Organized across Insurance, Investments, Loans, and Real Estate. All advisory engagements are customized strictly according to client risk suitability.
            </p>
          </div>

          <ServicesExplorer />
        </div>
      </section>

      {/* 5. FINANCIAL GAP ANALYSIS SECTION */}
      <FinancialGapAnalysisSection />

      {/* 6. REAL ESTATE SECTION */}
      <RealEstateSection />

      {/* 7. 7 PILLARS OF FINANCIAL AWARENESS */}
      <section className="section-institutional bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <div className="container">
          <div className="section-title-wrap max-w-3xl">
            <SectionBadge>Foundational Literacy</SectionBadge>
            <h2 className="h2 mb-3">The 7 Pillars of Personal Finance</h2>
            <p className="text-sm text-[#4F615A]">
              Sustainable wealth accumulation begins with mastering fundamental habits across earning, saving, protection, and borrowing.
            </p>
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
        </div>
      </section>

      {/* 8. FEATURED ARTICLES FROM KNOWLEDGE HUB */}
      <section className="section-institutional bg-[#FFFFFF]">
        <div className="container">
          <div className="section-title-wrap max-w-3xl">
            <SectionBadge>Educational Articles</SectionBadge>
            <h2 className="h2 mb-3">Knowledge Hub Guides</h2>
            <p className="text-sm text-[#4F615A]">
              Practical financial articles written to explain contract clauses, sub-limits, compounding math, and loan interest savings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {articles.slice(0, 3).map((art) => (
              <Link
                key={art.slug}
                href={`/knowledge-hub/${art.slug}`}
                className="card-service-item"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#4F615A] mb-2">
                    <span className="font-bold text-[#1F5138] uppercase tracking-wider">{art.category}</span>
                    <span>{art.read}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#172B3A] mb-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                    {art.excerpt}
                  </p>
                </div>
                <div className="border-t border-[#E2EBE5] pt-3 flex items-center justify-between text-xs text-[#1F5138] font-semibold">
                  <span>Read Article</span>
                  <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/knowledge-hub" className="btn-secondary text-xs py-2.5 px-6">
              <span>View All 5 In-Depth Articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="section-institutional bg-[#F8F8F2] border-t border-b border-[#E2EBE5] scroll-mt-28" id="faq">
        <div className="container max-w-4xl">
          <div className="section-title-wrap text-center mb-8">
            <SectionBadge>Client Questions</SectionBadge>
            <h2 className="h2 mb-2">Frequently Asked Questions</h2>
            <p className="text-sm text-[#4F615A]">
              Direct answers regarding our advisory practice, fees, and methodology.
            </p>
          </div>

          <InteractiveFaqList items={homeFaqs} />

          <div className="text-center mt-6">
            <Link href="/faq" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
              <span>Explore complete FAQ library</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL HOMEPAGE CALL TO ACTION */}
      <section className="section-institutional bg-[#FFFFFF] scroll-mt-28" id="book-session">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-4">
              <SectionBadge>Direct Consultation</SectionBadge>
              <h2 className="h2 mb-3">Let&apos;s Simplify Your Next Financial Decision.</h2>
              <p className="text-sm text-[#4F615A] leading-relaxed mb-6">
                Whether you need a confidential audit of your existing life/health insurance, an objective loan balance transfer calculation, or institutional workshop details — reach out directly to Karthik R.
              </p>

              <div className="institutional-card p-5">
                <span className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                  Telephone Contact
                </span>
                <a href={`tel:${companyDetails.phone}`} className="text-base font-bold text-[#172B3A] hover:text-[#1F5138] flex items-center gap-2">
                  <Phone size={16} className="text-[#1F5138]" />
                  <span>{companyDetails.phoneFormatted}</span>
                </a>
                <p className="text-[11px] text-[#4F615A] mt-1">Mon–Sat: 9:30 AM – 7:00 PM IST</p>
              </div>

              <div className="institutional-card p-5">
                <span className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                  Email Correspondence
                </span>
                <a href={`mailto:${companyDetails.email}`} className="text-base font-bold text-[#172B3A] hover:text-[#1F5138] flex items-center gap-2">
                  <Mail size={16} className="text-[#1F5138]" />
                  <span>{companyDetails.email}</span>
                </a>
                <p className="text-[11px] text-[#4F615A] mt-1">Submit policy copies for confidential review</p>
              </div>

              <div className="institutional-card p-5">
                <span className="text-[11px] font-bold text-[#159568] uppercase tracking-wider block mb-1">
                  Direct WhatsApp Messaging
                </span>
                <a
                  href={companyDetails.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center text-xs py-2.5 mt-1"
                >
                  <span>Open WhatsApp Wealth Desk</span>
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
