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
import { CommunityReferEarnSection } from '@/features/community/components/CommunityReferEarnSection'

export function CommunityPage() {
  return (
    <PageShell>
      {/* 1. Hero & Dedicated Topic Directory */}
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-5xl">
          <SectionBadge>Ecosystem & Collaboration</SectionBadge>
          <h1 className="h1 mb-3">Kreative Hertz Community</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-3xl mb-6">
            A collaborative network for sharing verified financial education, learning resources, and developing parallel income through ethical referrals.
          </p>

          {/* Dedicated Sub-Navigation & Directory Cards */}
          <div className="pt-6 border-t border-[#E2EBE5]">
            <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-3">
              Community Programs & Focus Areas
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="#overview"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Our Community</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Collaborative network of families, working professionals, and early-career learners.
                </p>
              </a>

              <a
                href="#refer-earn"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Refer & Earn</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Parallel income framework through compliant introductions to trusted advisory.
                </p>
              </a>

              <a
                href="#resource-exchange"
                className="institutional-card p-4 hover:border-[#1F5138] hover:bg-[#EAF3EC]/30 transition-all group"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#172B3A] group-hover:text-[#1F5138]">Book & Resource Exchange</span>
                  <ArrowRight size={13} className="text-[#1F5138] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#4F615A] leading-snug">
                  Curated financial books, budgeting templates, and study resources for students.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview Section */}
      <section className="section-institutional bg-[#F7FAF8] scroll-mt-28" id="overview">
        <div className="container max-w-4xl">
          <div className="institutional-card p-6 md:p-8 mb-8">
            <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
              Network Purpose
            </span>
            <h2 className="text-xl font-bold text-[#172B3A] mb-3 font-heading">
              A Community Anchored in Financial Literacy & Reciprocity
            </h2>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              Financial illiteracy thrives in isolation. The Kreative Hertz Community was created to give individuals, salaried professionals, and families a trusted space to ask questions, verify facts, exchange vetted study materials, and access institutional advisory standards without pressure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E2EBE5]">
              <div>
                <strong className="block text-xs text-[#172B3A] mb-1">For Individuals & Families</strong>
                <p className="text-[11px] text-[#4F615A]">Access unbiased second opinions on existing policies and home loan rates.</p>
              </div>
              <div>
                <strong className="block text-xs text-[#172B3A] mb-1">For Students & Colleges</strong>
                <p className="text-[11px] text-[#4F615A]">Free curated reading materials and foundational money management kits.</p>
              </div>
              <div>
                <strong className="block text-xs text-[#172B3A] mb-1">For Advisors & Partners</strong>
                <p className="text-[11px] text-[#4F615A]">Compliant referral structures with prompt, transparent execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refer & Earn Section */}
      <div id="refer-earn" className="scroll-mt-28">
        <CommunityReferEarnSection />
      </div>

      {/* Book & Resource Exchange Section */}
      <section className="section-institutional bg-[#FFFFFF] border-t border-[#E2EBE5] scroll-mt-28" id="resource-exchange">
        <div className="container max-w-4xl">
          <div className="section-title-wrap mb-6">
            <SectionBadge>Knowledge Sharing</SectionBadge>
            <h2 className="h2 mb-2 font-heading">Book & Resource Exchange</h2>
            <p className="text-xs text-[#4F615A]">
              We facilitate the circulation of personal finance literature, cash-flow worksheets, and diagnostic checklists across our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="institutional-card p-6">
              <span className="text-[10px] font-mono font-bold text-[#1F5138] uppercase block mb-1">Resource Category 01</span>
              <h3 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">Foundational Literature</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Recommended readings on behavioral psychology, compound interest principles, and long-term asset allocation for early investors.
              </p>
              <Link href="/knowledge-hub" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                <span>View Knowledge Guides</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="institutional-card p-6">
              <span className="text-[10px] font-mono font-bold text-[#1F5138] uppercase block mb-1">Resource Category 02</span>
              <h3 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">Budgeting & Debt Trackers</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Practical spreadsheets for tracking recurring EMIs, calculating loan amortization schedules, and finding interest savings.
              </p>
              <Link href="/services/home-loans" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                <span>Home Loan Refinancing</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="institutional-card p-6">
              <span className="text-[10px] font-mono font-bold text-[#1F5138] uppercase block mb-1">Resource Category 03</span>
              <h3 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">Policy Diagnostic Checklists</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Step-by-step audit sheets for uncovering room rent sub-limits, disease caps, and surrender penalties in insurance policies.
              </p>
              <Link href="/wealth-architect#gap-analysis" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                <span>Gap Analysis Audit</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>

          <div className="institutional-card p-6 bg-[#EAF3EC]/40 border-[#CAD9D0] text-center">
            <h3 className="text-base font-bold text-[#172B3A] mb-2">Want to Partner with Kreative Hertz?</h3>
            <p className="text-xs text-[#4F615A] max-w-lg mx-auto mb-4">
              Whether you are an educational institution, a corporate HR coordinator, or a financial professional seeking ethical collaboration, we welcome your inquiry.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact" className="btn-primary text-xs py-2.5 px-6">
                <span>Discuss Collaboration</span>
                <ArrowRight size={13} />
              </Link>
              <Link href="/wealth-architect" className="btn-secondary text-xs py-2.5 px-6">
                <span>Explore 15 Financial Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 5. KNOWLEDGE HUB MAIN VIEW (Delegates directly to BlogLandingView)
// -------------------------------------------------------------
