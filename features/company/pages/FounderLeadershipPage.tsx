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
import { ExecutiveProfile } from '@/components/shared/ExecutiveProfile'

export function FounderLeadershipPage() {
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
            <span className="text-[#172B3A] font-semibold">Founder & Leadership</span>
          </div>
          <SectionBadge>Leadership Profile</SectionBadge>
          <h1 className="h1 mb-2 font-heading">{companyDetails.founder.name}</h1>
          <p className="text-xs font-bold text-[#1F5138] uppercase tracking-wider mb-4">
            {companyDetails.title}
          </p>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl">
            Founder and Principal Consultant at Kreative Hertz. Advising individuals, families, and academic institutions on objective wealth architecture and financial psychology.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-4xl space-y-8">
          <div className="institutional-card p-8">
            <h3 className="text-lg font-bold text-[#172B3A] mb-3 font-heading">Professional Biography</h3>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-6">
              {companyDetails.founder.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2EBE5] text-xs text-[#26332D]">
              <div>
                <strong className="block text-[#172B3A] mb-1 font-heading">Wealth Architecture Advisory</strong>
                <p className="text-[#4F615A] text-[11.5px]">Pure term life cover, family health shields, disciplined SIP compounding, home loan balance transfers, and real estate due diligence across 15 core services.</p>
              </div>
              <div>
                <strong className="block text-[#172B3A] mb-1 font-heading">Life Strategy Education</strong>
                <p className="text-[#4F615A] text-[11.5px]">Campus financial workshops, youth debt prevention, first salary architecture, and moral financial psychology principles.</p>
              </div>
            </div>
          </div>

          <div className="institutional-card p-6 bg-white">
            <h4 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">Direct Consultation Protocol</h4>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              All initial gap analysis reviews and policy evaluations are conducted directly by Karthik R under strict confidentiality.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-session" className="btn-primary text-xs py-2 px-4">
                <span>Book Direct Session</span>
                <ArrowRight size={13} />
              </Link>
              <a href={`tel:${companyDetails.phone}`} className="btn-secondary text-xs py-2 px-4">
                <span>Call {companyDetails.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Dedicated Subpage: /about/philosophy
