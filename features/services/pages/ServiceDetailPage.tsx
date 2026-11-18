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
import { ServiceIcon } from '@/components/shared/ServiceIcon'

export function ServiceDetailPage({ service }: { service: ServiceItem }) {
  const related = servicesData
    .filter((s) => s.category === service.category && s.id !== service.id)
    .slice(0, 3)

  return (
    <PageShell>
      {/* 1. Header & Breadcrumbs */}
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <div className="text-xs text-[#1F5138] font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 flex-wrap">
            <Link href="/wealth-architect" className="hover:underline">Wealth Architect</Link>
            <span>/</span>
            <span>{service.category}</span>
            <span>/</span>
            <span className="text-[#172B3A]">{service.title}</span>
          </div>
          <h1 className="h1 mb-2 font-heading">{service.title}</h1>
          <p className="text-xs font-semibold text-[#1F5138] mb-3">{service.tagline}</p>
          <p className="text-sm text-[#4F615A] leading-relaxed">{service.shortDesc}</p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Left 8 Columns: Scope, Considerations, Pitfalls, Process */}
            <div className="md:col-span-8 space-y-6">
              {/* 2. What the Service Means (Scope & Methodology) */}
              <div className="institutional-card p-6">
                <h2 className="text-base font-bold text-[#172B3A] mb-3 font-heading">
                  Service Scope & Methodology
                </h2>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* 4. Specification Highlights */}
                <h3 className="text-xs font-bold text-[#1F5138] uppercase tracking-wider mb-3 font-heading">
                  Specification Highlights
                </h3>
                <ul className="space-y-2 text-xs text-[#26332D]">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-[#159568] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Considerations */}
              {service.whatToConsider && (
                <div className="institutional-card p-6">
                  <h3 className="text-sm font-bold text-[#172B3A] mb-3 font-heading">
                    Important Considerations
                  </h3>
                  <ul className="space-y-2 text-xs text-[#4F615A]">
                    {service.whatToConsider.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#1F5138] font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 6. Common Pitfalls to Avoid */}
              {service.commonMistakes && (
                <div className="institutional-card p-6 bg-[#FFFFFF]">
                  <h3 className="text-sm font-bold text-[#172B3A] mb-3 font-heading flex items-center gap-2">
                    <AlertCircle size={16} className="text-[#1F5138]" />
                    <span>Common Pitfalls to Avoid</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-[#4F615A]">
                    {service.commonMistakes.map((m, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#1F5138] font-bold">⚠</span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 5. How the Advisory Process Works */}
              <div className="institutional-card p-6">
                <h3 className="text-sm font-bold text-[#172B3A] mb-3 font-heading">
                  How Our Consultation Works
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <span className="font-mono font-bold text-[#1F5138] block mb-1">01. Discovery</span>
                    <p className="text-[#4F615A] text-[11px] leading-relaxed">
                      Share existing policy schedules or requirements confidentially.
                    </p>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <span className="font-mono font-bold text-[#1F5138] block mb-1">02. Gap Audit</span>
                    <p className="text-[#4F615A] text-[11px] leading-relaxed">
                      We examine fine print, hidden caps, interest leaks, and coverage deficits.
                    </p>
                  </div>
                  <div className="p-3 rounded border border-[#E2EBE5] bg-[#FFFFFF]">
                    <span className="font-mono font-bold text-[#1F5138] block mb-1">03. Solution</span>
                    <p className="text-[#4F615A] text-[11px] leading-relaxed">
                      Discuss transparent options aligned strictly with your goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Target Audience, Key Features, CTA */}
            <div className="md:col-span-4 space-y-6">
              {/* 3. Who May Find It Relevant */}
              <div className="institutional-card p-6">
                <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-2 font-heading">
                  Target Audience
                </div>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                  {service.whoIsItFor}
                </p>

                <div className="border-t border-[#E2EBE5] pt-4">
                  <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-2 font-heading">
                    Core Specifications
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#26332D]">
                    {service.keyFeatures.map((kf, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="text-[#159568]">✓</span>
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 7. Direct Inquiry Action Card */}
              <div className="institutional-card p-6 text-center border-[#CAD9D0]">
                <h4 className="text-sm font-bold text-[#172B3A] mb-2 font-heading">
                  Direct Advisory Discussion
                </h4>
                <p className="text-xs text-[#4F615A] mb-4 leading-relaxed">
                  Discuss this solution directly with Karthik R with zero commercial pressure.
                </p>
                <a
                  href={`https://wa.me/919482897253?text=Hello%20Karthik%20R,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-xs py-2.5 mb-2.5 group"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link
                  href="/book-session"
                  className="btn-secondary w-full justify-center text-xs py-2.5 mb-3"
                >
                  <span>Book Consultation Call</span>
                </Link>
                <Link
                  href="/wealth-architect"
                  className="text-xs font-semibold text-[#1F5138] hover:underline inline-flex items-center gap-1"
                >
                  <span>← Return to All 15 Services</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Services in Category */}
          {related.length > 0 && (
            <div className="border-t border-[#E2EBE5] pt-8">
              <h3 className="text-base font-bold text-[#172B3A] mb-4 font-heading">
                Related Services in {service.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/services/${r.id}`}
                    className="institutional-card p-4 hover:border-[#1F5138] transition-colors group"
                  >
                    <h4 className="text-sm font-bold text-[#172B3A] mb-1 group-hover:text-[#1F5138] transition-colors font-heading">
                      {r.title}
                    </h4>
                    <p className="text-xs text-[#4F615A] line-clamp-2">{r.shortDesc}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 7. DYNAMIC ARTICLE DETAIL VIEW
// -------------------------------------------------------------
