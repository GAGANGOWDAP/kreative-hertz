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

export function PrivacyPage() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-3xl">
          <SectionBadge>Legal & Compliance</SectionBadge>
          <h1 className="h1 mb-2">Privacy Policy</h1>
          <p className="text-sm text-[#4F615A]">
            How Kreative Hertz manages, uses, and safeguards client information.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-3xl prose text-xs text-[#26332D] leading-relaxed space-y-4">
          <div className="p-3 rounded border border-[#CAD9D0] bg-[#FFFFFF] text-xs font-semibold text-[#1F5138]">
            Effective Date: June 2022 | Last Updated: November 2026.
          </div>

          <h2 className="text-sm font-bold text-[#172B3A]">1. Information Collection</h2>
          <p>
            When coordinating consultations, financial gap audits, or workshop enrollments, Kreative Hertz collects personal contact information (name, email address, telephone number, city) and information voluntarily provided regarding financial arrangements.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">2. Use of Information</h2>
          <p>
            Client details are used strictly to coordinate requested callback sessions, conduct gap analyses, and deliver personalized advisory communications. We do not sell, rent, or distribute personal data to third-party telemarketing databases.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">3. Data Security</h2>
          <p>
            We implement reasonable organizational and technical protocols to prevent unauthorized access or disclosure of client documents. Copies of existing policies submitted for gap audits are handled with strict fiduciary confidentiality.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">4. Third-Party Financial Institutions</h2>
          <p>
            Where a client explicitly instructs us to facilitate an application (such as an insurance proposal or bank loan), client data is submitted solely to the authorized underwriting institution with prior client consent.
          </p>

          <h2 className="text-sm font-bold text-[#172B3A]">5. Contact</h2>
          <p>
            Inquiries regarding personal information handling may be addressed to <strong>fulfil@kreativehertz.in</strong>.
          </p>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 12. TERMS & CONDITIONS PAGE
// -------------------------------------------------------------
