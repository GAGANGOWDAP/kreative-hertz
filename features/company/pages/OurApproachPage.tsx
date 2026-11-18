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

export function OurApproachPage() {
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
            <span className="text-[#172B3A] font-semibold">Our Approach</span>
          </div>
          <SectionBadge>Advisory Methodology</SectionBadge>
          <h1 className="h1 mb-3 font-heading">Our Fiduciary Advisory Approach</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-4">
            Don&apos;t Sell First. Educate First.
          </p>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl">
            We follow an uncompromising fiduciary standard: diagnosing structural leaks, policy traps, and debt drains before recommending any action.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-4xl space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategyPillars.map((p) => (
              <div key={p.id} className="institutional-card p-6 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-bold text-[#1F5138] mb-1">{p.badge}</div>
                  <h3 className="text-lg font-bold text-[#172B3A] mb-1 font-heading">{p.title}</h3>
                  <div className="text-xs font-semibold text-[#1F5138] mb-3">{p.subtitle}</div>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-4">{p.desc}</p>
                </div>
                <div className="border-t border-[#E2EBE5] pt-3 text-[11px] font-semibold text-[#1F5138]">
                  Actionable diagnostic deliverable
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link href="/book-session" className="btn-primary text-xs py-3 px-6">
              <span>Experience Our Approach</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 2. SERVICES OVERVIEW LANDING VIEW (/services)
// Dedicated landing page with 4 clear categories + 15 services
// -------------------------------------------------------------
