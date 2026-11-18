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
import { StrategyExplorer } from '@/features/life-strategist/components/StrategyExplorer'
import { CollegeProgramsSection } from '@/features/life-strategist/components/CollegeProgramsSection'
import { SevenPillarsSection } from '@/features/wealth-architect/components/SevenPillarsSection'

export function LifeStrategistPage() {
  return (
    <PageShell>
      {/* 1. Hero & Dedicated Topic Directory */}
      <section className="relative w-full section-institutional overflow-hidden bg-[#F7FAF8] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-5xl">
          <SectionBadge>Financial Education & Habits</SectionBadge>
          <h1 className="h1 mb-3 text-[#172B3A] font-heading">LIFE STRATEGIST</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-3">
            Learn · Plan · Grow
          </p>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-3xl mb-6">
            Simplifying personal finance so you can make informed decisions. Helping you understand money, evaluate financial contracts objectively, and develop healthy habits throughout life.
          </p>

          {/* Dedicated Sub-Navigation & Directory Cards */}
          <div className="pt-6 border-t border-[#E2EBE5]">
            <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-3">
              Curriculum & Strategic Areas
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="#mindset"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Mindset (Vision)</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Long-term compounding, emotional discipline, and resisting speculative market hype.
                </p>
              </a>

              <a
                href="#moral"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Moral (Fiduciary)</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Ethics, transparency, and aligning decisions with suitability over commissions.
                </p>
              </a>

              <a
                href="#awareness"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Awareness (Clarity)</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Reading contract fine print, room rent limits, pre-existing clauses, and hidden costs.
                </p>
              </a>

              <a
                href="#pillars"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">7 Pillars of Literacy</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Earn, Save, Protect, Invest, Borrow, Plan, and Review — the personal finance cycle.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Educational Pillars Section */}
      <section className="section-institutional bg-[#F7FAF8]" id="pillars-framework">
        <div className="container">
          <div className="section-title-wrap max-w-3xl">
            <SectionBadge>Educational Pillars</SectionBadge>
            <h2 className="h2 mb-3">Mindset, Moral & Awareness</h2>
            <p className="text-sm text-[#4F615A] mb-4">
              The three guiding pillars of our educational framework established in June 2022.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/knowledge-hub/sip-compounding-power-guide"
                className="text-xs font-semibold text-[#1F5138] hover:underline flex items-center gap-1"
              >
                <span>Read Mindset Case Study (SIP Compounding)</span>
                <ArrowRight size={12} />
              </Link>
              <span className="text-[#CAD9D0]">•</span>
              <Link
                href="/wealth-architect#gap-analysis"
                className="text-xs font-semibold text-[#1F5138] hover:underline flex items-center gap-1"
              >
                <span>Run Awareness Gap Evaluation</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <StrategyExplorer />
        </div>
      </section>

      {/* 3. College Programs Section */}
      <CollegeProgramsSection />

      {/* 4. 7 Pillars Section */}
      <section className="section-institutional bg-[#F7FAF8] border-b border-[#E2EBE5] scroll-mt-28" id="pillars">
        <div className="container">
          <div className="section-title-wrap max-w-3xl">
            <SectionBadge>7 Pillars</SectionBadge>
            <h2 className="h2 mb-3">Personal Finance Awareness</h2>
            <p className="text-sm text-[#4F615A] mb-4">
              Earn, Save, Protect, Invest, Borrow, Plan, and Review.
            </p>
            <Link
              href="/wealth-architect"
              className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1"
            >
              <span>Explore 15 Financial Services Aligned with These Pillars</span>
              <ArrowRight size={12} />
            </Link>
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

          {/* Action CTA */}
          <div className="mt-8 pt-6 border-t border-[#E2EBE5] flex flex-wrap items-center justify-between gap-4">
            <div>
              <strong className="text-sm text-[#172B3A] block">Want to evaluate your own 7-pillar standing?</strong>
              <p className="text-xs text-[#4F615A]">Schedule a diagnostic session with Karthik R.</p>
            </div>
            <Link href="/book-session" className="btn-primary text-xs py-2.5 px-5">
              <span>Book Strategy Session</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 4. COMMUNITY MAIN VIEW
// -------------------------------------------------------------
