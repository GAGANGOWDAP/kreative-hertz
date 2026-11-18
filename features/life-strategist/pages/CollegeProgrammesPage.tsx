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
import { CollegeProgramsSection } from '@/features/life-strategist/components/CollegeProgramsSection'

export function CollegeProgrammesPage() {
  return (
    <PageShell>
      <section className="relative w-full section-institutional overflow-hidden bg-[#F7FAF8] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl">
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

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-4xl">
          <CollegeProgramsSection />
        </div>
      </section>
    </PageShell>
  )
}

// Product Subpage: Corporate Programmes
