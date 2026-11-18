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
import { BookSessionSection } from '@/features/consultation/components/BookSessionSection'

export function BookSessionPage() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-3xl">
          <SectionBadge>Advisory Intake</SectionBadge>
          <h1 className="h1 mb-2">Book a Personal Session</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed">
            Schedule a confidential 1-on-1 strategy call with Karthik R. Zero commercial pressure. Pure diagnostic clarity.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-3xl">
          <BookSessionSection />
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 9. CONTACT PAGE
// -------------------------------------------------------------
