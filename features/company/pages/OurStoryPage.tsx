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

export function OurStoryPage() {
  return (
    <PageShell>
      <section className="relative w-full section-institutional overflow-hidden bg-[#F7FAF8] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl">
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

      <section className="section-institutional bg-[#F7FAF8]">
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
