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

export function DisclaimerPage() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-3xl">
          <SectionBadge>Regulatory Disclosures</SectionBadge>
          <h1 className="h1 mb-2">Regulatory Disclaimer</h1>
          <p className="text-sm text-[#4F615A]">
            Mandatory disclosures regarding mutual fund investments, insurance solicitations, and lending terms.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-3xl prose text-xs text-[#26332D] leading-relaxed space-y-4">
          <div className="p-3 rounded border border-[#CAD9D0] bg-[#FFFFFF] text-xs font-semibold text-[#1F5138]">
            Compliance Notice: Kreative Hertz operates strictly on an educational and client-first basis.
          </div>

          <h2 className="text-sm font-bold text-[#172B3A]">1. Mutual Funds</h2>
          <p>
            Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not indicative of future results. Kreative Hertz does not guarantee investment returns or capital safety.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">2. Insurance Solicitations</h2>
          <p>
            Insurance is a subject matter of solicitation. Policy underwriting, terms, exclusions, and claims settlements are governed solely by the respective insurance company in accordance with IRDAI regulations.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">3. Loan Sanctions</h2>
          <p>
            Loan eligibility, interest rates, processing markups, and approvals are determined by institutional banks and NBFCs based on credit scores (CIBIL), debt service ratios, and legal verification of property documents.
          </p>
        </div>
      </section>
    </PageShell>
  )
}
