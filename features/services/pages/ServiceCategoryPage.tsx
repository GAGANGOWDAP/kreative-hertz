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
import { ServiceIcon } from '@/components/shared/ServiceIcon'

export function ServiceCategoryPage({ categorySlug }: { categorySlug: string }) {
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
      <section className="relative w-full section-institutional overflow-hidden bg-[#F7FAF8] border-b border-[#E2EBE5]">
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

      <section className="section-institutional bg-[#F7FAF8]">
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
