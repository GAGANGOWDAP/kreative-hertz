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

export function FinancialAwarenessPage() {
  return (
    <PageShell>
      <section className="relative w-full section-institutional overflow-hidden bg-[#F7FAF8] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/products" className="hover:text-[#1F5138]">Products</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">Financial Awareness Programmes</span>
          </div>
          <SectionBadge>Educational Syllabus</SectionBadge>
          <h1 className="h1 mb-3 font-heading">Financial Awareness Programmes</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl mb-6">
            Structured educational syllabi designed to build generational money consciousness, dismantle credit traps, and instill fiduciary protection morals.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-4xl">
          <div className="space-y-6 mb-12">
            {personalFinanceAwareness.map((p, idx) => (
              <div key={idx} className="institutional-card p-6">
                <div className="text-xs font-mono font-bold text-[#1F5138] mb-1">PILLAR 0{idx + 1}</div>
                <h3 className="text-xl font-bold text-[#172B3A] mb-1 font-heading">{p.title}</h3>
                <div className="text-xs font-semibold text-[#1F5138] mb-3">{p.tagline}</div>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-4">{p.desc}</p>
                <div className="border-t border-[#E2EBE5] pt-3">
                  <div className="text-[10px] font-bold text-[#172B3A] uppercase tracking-wider mb-2">Core Principles</div>
                  <ul className="space-y-1.5 text-xs text-[#26332D]">
                    {p.corePrinciples.map((cp, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-[#159568]" />
                        <span>{cp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link href="/book-session" className="btn-primary text-xs py-3 px-6">
              <span>Book Awareness Workshop</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Product Subpage: College Programmes
