import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import { PageShell } from '@/components/layout/PageShell'
import { SectionBadge } from '@/components/shared/SectionBadge'
import { HeroBackground } from '@/components/shared/HeroBackground'
import {
  ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Phone, Mail,
  HelpCircle, Award, Users, Compass, Briefcase, ChevronRight,
  ChevronLeft, Clock, MapPin, AlertCircle, Home, Check
} from 'lucide-react'
import {
  companyDetails, servicesData, strategyPillars, gapAnalysisAreas,
  personalFinanceAwareness, collegeProgramModules, communityEcosystem,
  articles, ServiceItem, KnowledgeArticle
} from '@/content'
import { ServicesExplorer } from '@/features/services/components/ServicesExplorer'
import { FinancialGapAnalysisSection } from '@/features/wealth-architect'
import { ServiceIcon } from '@/components/shared/ServiceIcon'

export function ServicesOverviewPage() {
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
      <section className="relative w-full section-institutional overflow-hidden bg-[#0A382A] border-b border-[#0A5A42]/30">
        <HeroBackground
          imageSrc="/images/hero-services.jpg"
          alt="Comprehensive Financial Advisory Services & Wealth Architecture"
          variant="dark"
        />
        <div className="relative z-10 container max-w-6xl mx-auto flex flex-col justify-center py-8 px-4 sm:px-6">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A5A42]/80 border border-[#11A778]/50 text-[#F7FAF8] text-xs font-semibold backdrop-blur-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
              <span>Financial Advisory Services</span>
            </div>
            <h1 className="h1 mb-3 font-heading text-[#F7FAF8]">Comprehensive Financial Services</h1>
            <p className="text-xs font-mono font-bold text-[#11A778] uppercase tracking-wider mb-4">
              Understand · Analyse · Strategise
            </p>
            <p className="text-base text-[#E8F3ED] leading-relaxed max-w-xl mb-6">
              Explore 15 institutional financial solutions organized into four transparent practice areas. Every service is provided under a fiduciary standard of objective clarity.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="/book-session"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#11A778] hover:bg-[#0A5A42] text-white font-semibold text-xs shadow-[0_4px_16px_rgba(17,167,120,0.35)] border border-[#11A778] transition-all group"
              >
                <span>Book Discovery Session</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#F7FAF8]/10 hover:bg-[#F7FAF8]/20 text-[#F7FAF8] font-semibold text-xs border border-[#F7FAF8]/40 backdrop-blur-xs transition-all"
              >
                <span>About Our Fiduciary Model</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Four Main Categories Grid */}
      <section className="section-institutional bg-[#F7FAF8]">
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
                        className="flex items-center justify-between text-xs text-[#26332D] hover:text-[#1F5138] py-1 border-b border-[#F7FAF8]"
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
