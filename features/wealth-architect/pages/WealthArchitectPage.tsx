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
import { FinancialGapAnalysisSection } from '@/features/wealth-architect/components/FinancialGapAnalysisSection'
import { SevenPillarsSection } from '@/features/wealth-architect/components/SevenPillarsSection'
import { RealEstateSection } from '@/features/wealth-architect/components/RealEstateSection'

export function WealthArchitectPage() {
  return (
    <PageShell>
      <section className="relative w-full section-institutional overflow-hidden bg-[#F7FAF8] border-b border-[#E2EBE5]">
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

      <section className="section-institutional bg-[#F7FAF8]">
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
