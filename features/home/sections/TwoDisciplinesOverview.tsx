'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import {
  Compass, TrendingUp, ShieldCheck, ArrowRight,
  ChevronRight, CheckCircle2, BookOpen, Layers
} from 'lucide-react'
import { SectionBadge } from '@/components/shared/SectionBadge'

export function TwoDisciplinesOverview() {
  const [activeTab, setActiveTab] = useState<'wealth' | 'life'>('wealth')

  const disciplines = [
    {
      id: 'wealth',
      badge: 'DISCIPLINE 01 · WEALTH ARCHITECT',
      title: 'WEALTH ARCHITECT',
      tagline: 'Diagnostic Architecture & Fiduciary Execution',
      motto: ['Understand', 'Analyse', 'Strategise'],
      description: 'Evaluating individual financial requirements, auditing existing insurance and investment contracts, identifying critical liabilities, and structuring goal-aligned wealth solutions.',
      image: '/images/hero-architecture.jpg',
      link: '/wealth-architect',
      ctaText: 'Explore Wealth Architect Directory',
      isPrimaryCta: true,
      capabilities: [
        {
          title: 'Structured Planning',
          subtitle: 'Holistic wealth creation & cashflow engineering'
        },
        {
          title: 'Portfolio Strategy',
          subtitle: 'Disciplined mutual fund SIPs, NPS & bonds'
        },
        {
          title: 'Risk Protection',
          subtitle: 'Human Life Value term cover & uncapped health'
        },
        {
          title: 'Asset Management',
          subtitle: 'Institutional home loans & verified real estate'
        }
      ]
    },
    {
      id: 'life',
      badge: 'DISCIPLINE 02 · LIFE STRATEGIST',
      title: 'LIFE STRATEGIST',
      tagline: 'Financial Literacy & Money Psychology',
      motto: ['Learn', 'Plan', 'Grow'],
      description: 'Demystifying the language of personal finance. We educate students, young earners, and families on money psychology, evaluating fine print, and avoiding speculative traps.',
      image: '/pathways/pathway-develop-myself.jpg',
      link: '/life-strategist',
      ctaText: 'Explore Life Strategist Curriculum',
      isPrimaryCta: false,
      capabilities: [
        {
          title: 'Financial Literacy',
          subtitle: 'Diagnostic fine print reading & spotting credit traps'
        },
        {
          title: 'Personal Discipline',
          subtitle: 'Money psychology & delayed gratification habits'
        },
        {
          title: 'Responsible Decisions',
          subtitle: 'Ethical family protection before speculative yield'
        },
        {
          title: 'Personal & Family Growth',
          subtitle: '30–40 Hr campus curriculums & 7 literacy pillars'
        }
      ]
    }
  ]

  return (
    <section className="section-institutional bg-[#F7FAF8] border-b border-[#E2EBE5] scroll-mt-28" id="disciplines">
      <div className="container">
        <div className="section-title-wrap max-w-3xl mb-4 sm:mb-6">
          <SectionBadge>Brand Architecture</SectionBadge>
          <h2 className="h2 mb-2 sm:mb-3">Two Integrated Disciplines</h2>
          <p className="text-xs sm:text-sm text-[#2B2A29]/75">
            Kreative Hertz approaches personal finance through two complementary dimensions: diagnostic wealth architecture and educational life strategy.
          </p>
        </div>

        {/* Mobile / Tablet Tab Switcher */}
        <div className="flex lg:hidden rounded-xl bg-[#E8F3ED] p-1 mb-5 max-w-sm mx-auto border border-[#E2EBE5]">
          <button
            type="button"
            onClick={() => setActiveTab('wealth')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center ${
              activeTab === 'wealth'
                ? 'bg-[#0A5A42] text-[#F7FAF8] shadow-xs'
                : 'text-[#2B2A29]/70 hover:text-[#142C3E]'
            }`}
          >
            01 · Wealth Architect
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('life')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center ${
              activeTab === 'life'
                ? 'bg-[#0A5A42] text-[#F7FAF8] shadow-xs'
                : 'text-[#2B2A29]/70 hover:text-[#142C3E]'
            }`}
          >
            02 · Life Strategist
          </button>
        </div>

        {/* Editorial Disciplines Grid: Side-by-side on lg+, tab-toggled on mobile/tablet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-stretch">
          {disciplines.map((d) => {
            const isVisible =
              (d.id === 'wealth' && activeTab === 'wealth') ||
              (d.id === 'life' && activeTab === 'life')
            return (
              <div
                key={d.id}
                className={`group flex flex-col bg-white rounded-2xl border border-[#E2EBE5] shadow-[0_2px_12px_rgba(20,44,62,0.05)] hover:shadow-[0_16px_36px_rgba(20,44,62,0.10)] hover:border-[#0A5A42]/35 transition-all duration-300 overflow-hidden ${
                  isVisible ? 'flex' : 'hidden lg:flex'
                }`}
              >
                {/* Visual Photographic Header with Editorial Frosted Identifier */}
                <div className="relative aspect-[24/9] lg:aspect-[24/8] w-full overflow-hidden bg-[#E8F3ED]">
                  <Image
                    src={getAssetPath(d.image)}
                    alt={d.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 group-hover:brightness-[1.03] transition-all duration-500 ease-out"
                  />
                  {/* Subtle grounding vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142C3E]/55 via-[#142C3E]/20 to-transparent pointer-events-none" />

                  {/* Frosted Pillar Pill Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#142C3E]/85 backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-wider text-[#F7FAF8] uppercase border border-white/20 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                      {d.badge}
                    </span>
                  </div>
                </div>

                {/* Card Interior Details */}
                <div className="p-4 sm:p-5 lg:p-5 xl:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Tagline & Title */}
                    <span className="text-[10.5px] sm:text-[11px] font-bold text-[#0A5A42] uppercase tracking-wider block mb-0.5">
                      {d.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-[#142C3E] mb-1.5 font-heading leading-tight group-hover:text-[#0A5A42] transition-colors">
                      {d.title}
                    </h3>

                    {/* Tri-part Motto Pill */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#E8F3ED] text-[#0A5A42] text-[10.5px] sm:text-[11px] font-bold mb-2.5 border border-[#0A5A42]/10">
                      {d.motto.map((m, idx) => (
                        <React.Fragment key={idx}>
                          {idx > 0 && <span className="text-[#11A778]">·</span>}
                          <span>{m}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Concise Editorial Description */}
                    <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3 line-clamp-2 sm:line-clamp-none">
                      {d.description}
                    </p>

                    {/* 2x2 Structured Capabilities Matrix */}
                    <div className="grid grid-cols-2 gap-2 mb-3.5">
                      {d.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          className="p-2 sm:p-2.5 rounded-lg border border-[#E2EBE5] bg-[#FFFFFF] hover:border-[#0A5A42]/25 transition-colors"
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] shrink-0" />
                            <strong className="block text-[#142C3E] text-[11px] sm:text-xs font-bold font-heading truncate">
                              {cap.title}
                            </strong>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-[#2B2A29]/75 leading-tight pl-2.5 line-clamp-2">
                            {cap.subtitle}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Distinctive Action CTA */}
                  {d.isPrimaryCta ? (
                    <Link
                      href={d.link}
                      className="mt-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0A5A42] hover:bg-[#11A778] text-[#F7FAF8] font-bold text-xs transition-all duration-200 shadow-xs group/btn"
                    >
                      <span>{d.ctaText}</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  ) : (
                    <Link
                      href={d.link}
                      className="mt-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FFFFFF] hover:bg-[#E8F3ED] text-[#0A5A42] border-2 border-[#0A5A42] font-bold text-xs transition-all duration-200 shadow-xs group/btn"
                    >
                      <span>{d.ctaText}</span>
                      <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* 7 Pillars of Personal Finance (Sequential Architectural Presentation) */
