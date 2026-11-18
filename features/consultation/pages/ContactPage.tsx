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

export function ContactPage() {
  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <SectionBadge>Direct Access</SectionBadge>
          <h1 className="h1 mb-2">Contact Kreative Hertz</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed">
            Reach out directly to Karthik R for financial gap audits, loan balance transfer evaluations, or institutional literacy workshops.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="institutional-card p-6">
                <span className="text-xs font-bold text-[#1F5138] uppercase tracking-wider block mb-1">Telephone</span>
                <a href={`tel:${companyDetails.phone}`} className="text-lg font-bold text-[#172B3A] hover:text-[#1F5138] flex items-center gap-2">
                  <Phone size={16} className="text-[#1F5138]" />
                  <span>{companyDetails.phoneFormatted}</span>
                </a>
                <p className="text-xs text-[#4F615A] mt-2">Mon–Sat: 9:30 AM – 7:00 PM IST</p>
              </div>

              <div className="institutional-card p-6">
                <span className="text-xs font-bold text-[#1F5138] uppercase tracking-wider block mb-1">Email</span>
                <a href={`mailto:${companyDetails.email}`} className="text-base font-bold text-[#172B3A] hover:text-[#1F5138] flex items-center gap-2">
                  <Mail size={16} className="text-[#1F5138]" />
                  <span>{companyDetails.email}</span>
                </a>
                <p className="text-xs text-[#4F615A] mt-2">Send policy documents for complimentary audit</p>
              </div>

              <div className="institutional-card p-6">
                <span className="text-xs font-bold text-[#159568] uppercase tracking-wider block mb-1">WhatsApp</span>
                <a
                  href={companyDetails.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center text-xs py-2.5 mt-2"
                >
                  <span>Open WhatsApp Direct Chat</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <BookSessionSection />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 10. FAQ PAGE
// -------------------------------------------------------------
