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
import { KnowledgeHubExplorer } from '@/features/knowledge-hub/components/KnowledgeHubExplorer'

export function KnowledgeHubPage() {
  return (
    <PageShell>
      {/* 1. Hero */}
      <section className="relative w-full section-institutional overflow-hidden bg-[#0A382A] border-b border-[#0A5A42]/30">
        <HeroBackground
          imageSrc="/images/hero-blog.jpg"
          alt="Kreative Hertz Blog & Knowledge Hub"
          variant="dark"
        />
        <div className="relative z-10 container max-w-6xl mx-auto flex flex-col justify-center py-8 px-4 sm:px-6">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A5A42]/80 border border-[#11A778]/50 text-[#F7FAF8] text-xs font-semibold backdrop-blur-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
              <span>Educational Insights & Editorial</span>
            </div>
            <h1 className="h1 mb-3 font-heading text-[#F7FAF8]">Kreative Hertz Blog & Knowledge Hub</h1>
            <p className="text-xs font-mono font-bold text-[#11A778] uppercase tracking-wider mb-4">
              Don&apos;t Sell First. Educate First.
            </p>
            <p className="text-base text-[#E8F3ED] leading-relaxed max-w-xl">
              Practical, conflict-free guides on insurance policy clauses, compounding mathematics, mortgage optimization, and financial psychology.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Searchable & Filterable Knowledge Hub Explorer */}
      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-6xl">
          <KnowledgeHubExplorer initialArticles={articles} />
        </div>
      </section>
    </PageShell>
  )
}
