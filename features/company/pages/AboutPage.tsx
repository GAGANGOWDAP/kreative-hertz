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

export function AboutPage() {
  return (
    <PageShell>
      {/* 1. Header & Dedicated Directory Navigation */}
      <section className="relative w-full section-institutional overflow-hidden bg-[#0A382A] border-b border-[#0A5A42]/30">
        <HeroBackground
          imageSrc="/images/hero-about.jpg"
          alt="About Kreative Hertz - Generational Wealth Architecture & Indian Family"
          variant="dark"
        />
        <div className="relative z-10 container max-w-6xl mx-auto flex flex-col justify-center py-8 px-4 sm:px-6">
          <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl text-left mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A5A42]/80 border border-[#11A778]/50 text-[#F7FAF8] text-xs font-semibold backdrop-blur-xs mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
              <span>Corporate Background & Practice</span>
            </div>
            <h1 className="h1 mb-3 font-heading text-[#F7FAF8]">About Kreative Hertz</h1>
            <p className="text-base text-[#E8F3ED] leading-relaxed max-w-xl">
              Founded in June 2022 in Bengaluru, Karnataka with a single uncompromising conviction: financial contracts and market instruments are inherently complex, but understanding and acting on them should be straightforward.
            </p>
          </div>

          {/* Dedicated Sub-Navigation & Directory Cards */}
          <div className="pt-6 border-t border-[#11A778]/30 max-w-4xl">
            <div className="text-[11px] font-bold text-[#11A778] uppercase tracking-wider mb-3">
              Sections in this Overview
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="#overview"
                className="p-4 rounded-lg bg-[#07241A]/75 border border-[#11A778]/30 hover:border-[#11A778] hover:bg-[#07241A]/90 transition-all group backdrop-blur-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#F7FAF8] group-hover:text-[#11A778]">About Kreative Hertz</span>
                  <ArrowRight size={13} className="text-[#11A778] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#E8F3ED]/80 leading-snug">
                  Founding background, evolutionary progression, and our dual-discipline practice.
                </p>
              </a>

              <a
                href="#mission"
                className="p-4 rounded-lg bg-[#07241A]/75 border border-[#11A778]/30 hover:border-[#11A778] hover:bg-[#07241A]/90 transition-all group backdrop-blur-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#F7FAF8] group-hover:text-[#11A778]">Our Mission & Vision</span>
                  <ArrowRight size={13} className="text-[#11A778] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#E8F3ED]/80 leading-snug">
                  Fiduciary accountability, client suitability, and multi-decade wealth resilience.
                </p>
              </a>

              <a
                href="#approach"
                className="p-4 rounded-lg bg-[#07241A]/75 border border-[#11A778]/30 hover:border-[#11A778] hover:bg-[#07241A]/90 transition-all group backdrop-blur-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#F7FAF8] group-hover:text-[#11A778]">Our Approach</span>
                  <ArrowRight size={13} className="text-[#11A778] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#E8F3ED]/80 leading-snug">
                  &ldquo;Don&apos;t Sell First. Educate First&rdquo; — zero pressure, diagnostic auditing.
                </p>
              </a>

              <a
                href="#founder"
                className="p-4 rounded-lg bg-[#07241A]/75 border border-[#11A778]/30 hover:border-[#11A778] hover:bg-[#07241A]/90 transition-all group backdrop-blur-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#F7FAF8] group-hover:text-[#11A778]">Founder Biography</span>
                  <ArrowRight size={13} className="text-[#11A778] group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-[#E8F3ED]/80 leading-snug">
                  Karthik R&apos;s credentials, institutional advisory experience, and direct desk.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-4xl space-y-12">
          {/* Section 1: Overview & Evolution */}
          <div id="overview" className="scroll-mt-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-8 space-y-4">
                <SectionBadge>Evolutionary Philosophy</SectionBadge>
                <h2 className="h2 text-[#172B3A] font-heading">Complexity 2 Simplicity</h2>
                <p className="text-sm text-[#4F615A] leading-relaxed">
                  Over time, Kreative Hertz has evolved into a structured advisory platform addressing financial awareness, diagnostic portfolio architecture, and multi-decade wealth resilience.
                </p>
                <p className="text-sm text-[#4F615A] leading-relaxed">
                  Our practice operates through two integrated disciplines: <strong>Wealth Architecture</strong> — examining protection needs, auditing existing investments, identifying debt drains, and configuring tailored financial structures; and <strong>Life Strategy</strong> — empowering individuals and students with financial literacy, risk psychology, and disciplined habits.
                </p>
                <div className="p-4 rounded border border-[#CAD9D0] bg-[#FFFFFF] text-xs font-semibold text-[#1F5138]">
                  Client Progression Principle: Confusion → Clarity → Understanding → Action → Better Financial Habits.
                </div>

                {/* Quick Route Buttons */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <Link
                    href="/wealth-architect"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5138] bg-[#EAF3EC] px-3 py-1.5 rounded hover:bg-[#CAD9D0] transition-colors"
                  >
                    <span>Explore Wealth Architect Practice</span>
                    <ArrowRight size={12} />
                  </Link>
                  <Link
                    href="/life-strategist"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F5138] bg-[#FFFFFF] border border-[#CAD9D0] px-3 py-1.5 rounded hover:bg-[#EAF3EC] transition-colors"
                  >
                    <span>Explore Life Strategist Curriculum</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Founder Card with ID */}
              <div id="founder" className="md:col-span-4 scroll-mt-28">
                <div className="institutional-card p-6 text-center border-[#CAD9D0]">
                  <div className="brand-crest w-16 h-16 mx-auto mb-3">
                    <Image
                      src={getAssetPath('/logo-icon.png')}
                      alt="Kreative Hertz Crest"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#172B3A] font-heading">Karthik R</h3>
                  <p className="text-xs text-[#1F5138] font-semibold">Founder & Advisor</p>
                  <p className="text-[11px] text-[#4F615A] mt-1">Established June 2022 • Bengaluru</p>
                  <div className="mt-4 pt-3 border-t border-[#E2EBE5] space-y-2">
                    <a
                      href="https://wa.me/919482897253"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs font-bold text-[#1F5138] hover:underline"
                    >
                      Direct WhatsApp Desk →
                    </a>
                    <Link
                      href="/book-session"
                      className="block text-xs font-bold text-[#1F5138] hover:underline"
                    >
                      Book 1-on-1 Consultation →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Mission & Vision */}
          <div id="mission" className="scroll-mt-28">
            <div className="section-title-wrap mb-4">
              <SectionBadge>Institutional Principles</SectionBadge>
              <h2 className="h2 text-[#172B3A] font-heading">Our Mission & Vision</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="institutional-card p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                    Fiduciary Commitment
                  </span>
                  <h3 className="text-base font-bold text-[#172B3A] mb-2 font-heading">Our Mission</h3>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                    To deliver objective, conflict-free financial architecture and literacy education, ensuring families and individuals make informed, uncoerced decisions for their financial security.
                  </p>
                </div>
                <Link
                  href="/wealth-architect#gap-analysis"
                  className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1"
                >
                  <span>Learn how we audit policy gaps</span>
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div className="institutional-card p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                    Long-Term Outlook
                  </span>
                  <h3 className="text-base font-bold text-[#172B3A] mb-2 font-heading">Our Vision</h3>
                  <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                    To build an enduring community of financially aware families, professionals, and students equipped to protect capital, mitigate risks, and build multi-generational wealth.
                  </p>
                </div>
                <Link
                  href="/community"
                  className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1"
                >
                  <span>Explore the Community Network</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 3: Guidance Approach */}
          <div id="approach" className="scroll-mt-28">
            <div className="institutional-card p-6 md:p-8 border-[#159568]/40 bg-[#EAF3EC]/30">
              <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                Fiduciary Advisory Standard
              </span>
              <h2 className="text-xl font-bold text-[#172B3A] mb-3 font-heading">
                Our Guidance Approach: &ldquo;Don&apos;t Sell First. Educate First&rdquo;
              </h2>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Most financial friction occurs because customers are sold products before they understand their structural needs. At Kreative Hertz, our first obligation is always diagnostic clarity: auditing your existing policies, uncovering restrictive terms or sub-limits, and explaining financial mechanics in plain language before any decision is made.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <div className="p-3 rounded bg-[#FFFFFF] border border-[#CAD9D0] text-xs">
                  <strong className="block text-[#1F5138] mb-1">✓ Zero Sales Pressure</strong>
                  <p className="text-[11px] text-[#4F615A]">We never push unneeded endowment policies or ULIP products.</p>
                </div>
                <div className="p-3 rounded bg-[#FFFFFF] border border-[#CAD9D0] text-xs">
                  <strong className="block text-[#1F5138] mb-1">✓ Mathematical Diagnostics</strong>
                  <p className="text-[11px] text-[#4F615A]">Coverage limits calculated according to your real family liabilities.</p>
                </div>
                <div className="p-3 rounded bg-[#FFFFFF] border border-[#CAD9D0] text-xs">
                  <strong className="block text-[#1F5138] mb-1">✓ Direct Advisor Access</strong>
                  <p className="text-[11px] text-[#4F615A]">Work directly with Karthik R for policy reviews and claims guidance.</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/wealth-architect"
                  className="btn-primary text-xs py-2 px-4"
                >
                  <span>Explore All 15 Services</span>
                  <ArrowRight size={12} />
                </Link>
                <Link
                  href="/knowledge-hub"
                  className="btn-secondary text-xs py-2 px-4"
                >
                  <span>Read Educational Guides</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Section 4: Professional Biography */}
          <div className="institutional-card p-8">
            <h3 className="text-lg font-bold text-[#172B3A] mb-3 font-heading">Professional Biography — Karthik R</h3>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
              {companyDetails.founder.bio}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2EBE5] text-xs text-[#26332D]">
              <div>
                <strong className="block text-[#172B3A] mb-1 font-heading">Wealth Architect Practice</strong>
                <p className="text-[#4F615A] text-[11.5px] mb-2">Pure term protection, family health cover, SIP compounding, NPS accounts, and debt refinancing across 15 core services.</p>
                <Link href="/wealth-architect" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                  <span>View Services Directory</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
              <div>
                <strong className="block text-[#172B3A] mb-1 font-heading">Life Strategist Practice</strong>
                <p className="text-[#4F615A] text-[11.5px] mb-2">Financial psychology coaching, institutional college programs, and 7 foundational literacy pillars.</p>
                <Link href="/life-strategist" className="text-xs font-bold text-[#1F5138] hover:underline inline-flex items-center gap-1">
                  <span>View Curriculum Modules</span>
                  <ArrowRight size={11} />
                </Link>
              </div>
            </div>
          </div>

          {/* Section 5: Closing CTA */}
          <div className="institutional-card p-8 text-center bg-[#FFFFFF] border-[#CAD9D0]">
            <h3 className="text-xl font-bold text-[#172B3A] mb-2 font-heading">
              Ready to Simplify Your Financial Architecture?
            </h3>
            <p className="text-xs text-[#4F615A] max-w-md mx-auto mb-6">
              Connect directly with Karthik R for a confidential, no-obligation policy review or strategy session.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/book-session" className="btn-primary text-xs py-2.5 px-6">
                <span>Book a Consultation</span>
                <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn-secondary text-xs py-2.5 px-6">
                <span>Contact Details</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Dedicated Subpage: /about/story
