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
import { StrategyExplorer } from '@/features/life-strategist/components/StrategyExplorer'
import { CollegeProgramsSection } from '@/features/life-strategist/components/CollegeProgramsSection'

export function ProductsLandingPage() {
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
      <section className="relative w-full section-institutional overflow-hidden bg-[#0A382A] border-b border-[#0A5A42]/30">
        <HeroBackground
          imageSrc="/images/hero-products.jpg"
          alt="Products & Structured Programmes"
          variant="dark"
        />
        <div className="relative z-10 container max-w-6xl mx-auto flex flex-col justify-center py-8 px-4 sm:px-6">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A5A42]/80 border border-[#11A778]/50 text-[#F7FAF8] text-xs font-semibold backdrop-blur-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
              <span>Branded Offerings & Solutions</span>
            </div>
            <h1 className="h1 mb-3 font-heading text-[#F7FAF8]">Products & Structured Programmes</h1>
            <p className="text-xs font-mono font-bold text-[#11A778] uppercase tracking-wider mb-4">
              Transforming Complexity into Actionable Simplicity
            </p>
            <p className="text-base text-[#E8F3ED] leading-relaxed max-w-xl mb-6">
              Discover Kreative Hertz&apos;s proprietary frameworks, educational syllabi, and specialized advisory programmes designed for individuals, institutions, and corporate teams.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <Link
                href="/book-session"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#11A778] hover:bg-[#0A5A42] text-white font-semibold text-xs shadow-[0_4px_16px_rgba(17,167,120,0.35)] border border-[#11A778] transition-all group"
              >
                <span>Schedule Program Discussion</span>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
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
