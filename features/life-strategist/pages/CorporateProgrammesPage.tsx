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

export function CorporateProgrammesPage() {
  return (
    <PageShell>
      <section className="relative w-full section-institutional overflow-hidden bg-[#F7FAF8] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/products" className="hover:text-[#1F5138]">Products</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">Corporate Financial Wellness</span>
          </div>
          <SectionBadge>Workplace Wellness</SectionBadge>
          <h1 className="h1 mb-3 font-heading">Corporate Financial Education Seminars</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl mb-6">
            Non-commercial, conflict-free financial wellness sessions designed for corporate teams to alleviate financial stress and teach tax-smart wealth architecture.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-4xl">
          <div className="institutional-card p-8 mb-8">
            <h3 className="text-lg font-bold text-[#172B3A] mb-3 font-heading">Why Workplace Financial Education?</h3>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              Over 58% of employees report experiencing stress regarding personal finances, debt EMIs, and healthcare costs, directly impacting workplace productivity. Kreative Hertz conducts objective educational seminars without selling products or promoting financial affiliations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#26332D] pt-4 border-t border-[#E2EBE5]">
              <div>
                <strong className="block text-[#1F5138] mb-1">Key Topics Covered:</strong>
                <ul className="space-y-1">
                  <li>• Tax planning under old vs. new tax regimes</li>
                  <li>• Decoding corporate health cards vs. personal policies</li>
                  <li>• Step-Up SIP compounding with salary increments</li>
                  <li>• Home loan balance transfers and EMI management</li>
                </ul>
              </div>
              <div>
                <strong className="block text-[#1F5138] mb-1">Seminar Format:</strong>
                <ul className="space-y-1">
                  <li>• 60 to 90 minute interactive keynote</li>
                  <li>• Anonymous employee Q&A session</li>
                  <li>• Zero product sales pitches</li>
                  <li>• Free diagnostic gap analysis checklists provided</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/book-session" className="btn-primary text-xs py-3 px-6">
              <span>Book Corporate Seminar</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// BLOG LANDING VIEW (/blog & /knowledge-hub)
// -------------------------------------------------------------
