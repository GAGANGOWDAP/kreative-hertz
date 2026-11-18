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

export function TermsPage() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-3xl">
          <SectionBadge>Legal Terms</SectionBadge>
          <h1 className="h1 mb-2">Terms & Conditions</h1>
          <p className="text-sm text-[#4F615A]">
            Terms governing the use of the Kreative Hertz website and advisory materials.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-3xl prose text-xs text-[#26332D] leading-relaxed space-y-4">
          <div className="p-3 rounded border border-[#CAD9D0] bg-[#FFFFFF] text-xs font-semibold text-[#1F5138]">
            Governing all advisory interactions, consultations, and educational content.
          </div>

          <h2 className="text-sm font-bold text-[#172B3A]">1. Advisory Scope</h2>
          <p>
            Information provided across this website and during consultations is intended for educational and financial gap analysis purposes. Final implementation of any financial product is subject to client review of respective terms and conditions.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">2. Accurate Disclosure Obligation</h2>
          <p>
            The validity of risk analysis depends upon complete and honest client disclosures. In insurance applications, non-disclosure of medical history or pre-existing conditions can jeopardize claims settlement by insurers.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">3. Intellectual Property</h2>
          <p>
            All website materials, logos, trademarks, and educational frameworks (&ldquo;Complexity 2 Simplicity&rdquo;, &ldquo;Wealth Architect&rdquo;, &ldquo;Life Strategist&rdquo;) are the property of Kreative Hertz and may not be reproduced without prior written permission.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">4. Jurisdiction</h2>
          <p>
            Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.
          </p>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 13. DISCLAIMER PAGE
// -------------------------------------------------------------
