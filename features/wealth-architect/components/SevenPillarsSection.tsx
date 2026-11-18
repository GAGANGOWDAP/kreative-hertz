'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  ChevronLeft, ChevronRight, ShieldCheck, ArrowRight,
  CheckCircle2, BookOpen
} from 'lucide-react'
import { personalFinanceAwareness } from '@/content'
import { SectionBadge } from '@/components/shared/SectionBadge'

export function SevenPillarsSection() {
  const [activePillarTab, setActivePillarTab] = useState<'all' | number>('all')
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const clientWidth = carouselRef.current.clientWidth
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8,
        behavior: 'smooth'
      })
    }
  }

  const tiers = [
    {
      phase: 'PHASE I · BEHAVIORAL FOUNDATIONS & ETHICS',
      pillars: personalFinanceAwareness.slice(0, 2),
      startIdx: 0,
      gridCols: 'lg:grid-cols-2'
    },
    {
      phase: 'PHASE II · STRUCTURAL DEFENSE & RISK TRANSFER',
      pillars: personalFinanceAwareness.slice(2, 4),
      startIdx: 2,
      gridCols: 'lg:grid-cols-2'
    },
    {
      phase: 'PHASE III · CAPITAL COMPOUNDING & DEBT FREEDOM',
      pillars: personalFinanceAwareness.slice(4, 7),
      startIdx: 4,
      gridCols: 'lg:grid-cols-3'
    }
  ]

  return (
    <section className="section-institutional bg-[#F7FAF8] border-b border-[#E2EBE5] scroll-mt-28" id="seven-pillars">
      <div className="container">
        {/* Section Title & Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 sm:mb-6">
          <div className="max-w-2xl">
            <SectionBadge>Foundational Literacy</SectionBadge>
            <h2 className="h2 mb-1.5 sm:mb-2">The 7 Pillars of Personal Finance</h2>
            <p className="text-xs sm:text-sm text-[#2B2A29]/75">
              Sustainable wealth accumulation follows a sequential architecture: mastering behavioral psychology, ring-fencing family vulnerabilities, and automating long-term capital compounding.
            </p>
          </div>

          {/* Carousel arrows for mobile/tablet */}
          <div className="flex items-center gap-2 lg:hidden self-end">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              disabled={!canScrollLeft}
              aria-label="Previous pillar"
              className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              disabled={!canScrollRight}
              aria-label="Next pillar"
              className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* MOBILE & TABLET: Smooth Touch-Snap Carousel (lg:hidden) */}
        <div className="block lg:hidden">
          <div
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {personalFinanceAwareness.map((p, i) => (
              <div
                key={i}
                className="w-[82vw] sm:w-[320px] shrink-0 snap-center bg-white rounded-2xl border border-[#E2EBE5] p-5 flex flex-col justify-between shadow-[0_2px_12px_rgba(20,44,62,0.05)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10.5px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2.5 py-0.5 rounded-full border border-[#0A5A42]/10">
                      PILLAR 0{i + 1}
                    </span>
                    <span className="text-[10px] font-bold text-[#142C3E]/50 tracking-wider uppercase">
                      {i < 2 ? 'Foundation' : i < 4 ? 'Defense' : 'Growth'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#142C3E] mb-1 font-heading">
                    {p.pillar}
                  </h3>
                  <div className="text-[11.5px] font-semibold text-[#11A778] mb-2.5">
                    {p.tagline}
                  </div>
                  <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3.5">
                    {p.desc}
                  </p>

                  {/* Core Principles */}
                  <div className="space-y-1.5 pt-3 border-t border-[#E2EBE5]">
                    <span className="text-[10px] font-bold text-[#142C3E] uppercase tracking-wider block mb-1">
                      Key Principles:
                    </span>
                    {p.corePrinciples?.slice(0, 2).map((cp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-[#2B2A29]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] shrink-0 mt-1" />
                        <span className="line-clamp-2">{cp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-[#2B2A29]/60 mt-2">
            Swipe to view all 7 sequential pillars
          </div>
        </div>

        {/* DESKTOP: Stage Selector & Balanced Sequential Architectural Tiers (hidden lg:block) */}
        <div className="hidden lg:block">
          {/* Stage Filter Navigation Tabs */}
          <div className="flex items-center gap-2 mb-4 border-b border-[#E2EBE5] pb-3" role="tablist">
            <button
              type="button"
              onClick={() => setActivePillarTab('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                activePillarTab === 'all'
                  ? 'bg-[#0A5A42] text-[#F7FAF8] border-[#0A5A42] shadow-xs'
                  : 'bg-white text-[#2B2A29]/70 border-[#CAD9D0] hover:border-[#0A5A42] hover:text-[#0A5A42]'
              }`}
            >
              All 7 Pillars Sequence
            </button>
            {tiers.map((t, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePillarTab(idx)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                  activePillarTab === idx
                    ? 'bg-[#0A5A42] text-[#F7FAF8] border-[#0A5A42] shadow-xs'
                    : 'bg-white text-[#2B2A29]/70 border-[#CAD9D0] hover:border-[#0A5A42] hover:text-[#0A5A42]'
                }`}
              >
                Stage 0{idx + 1} · {idx === 0 ? 'Behavioral Foundations' : idx === 1 ? 'Structural Defense' : 'Capital Compounding'}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {(activePillarTab === 'all' ? tiers : [tiers[activePillarTab]]).map((tier, tierIdx) => {
              const actualTierIdx = activePillarTab === 'all' ? tierIdx : activePillarTab
              return (
                <div key={tierIdx} className="space-y-2">
                  {/* Phase Header Label */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                    <span className="text-[11px] font-bold tracking-wider text-[#0A5A42] uppercase font-mono">
                      {tier.phase}
                    </span>
                    <div className="flex-1 h-[1px] bg-[#E2EBE5]" />
                  </div>

                  {/* Tier Cards Grid */}
                  <div className={`grid ${tier.gridCols} gap-3.5 xl:gap-4.5`}>
                    {tier.pillars.map((p, pIdx) => {
                      const absoluteIdx = tier.startIdx + pIdx
                      return (
                        <div
                          key={p.pillar}
                          className="bg-white rounded-2xl border border-[#E2EBE5] p-4 xl:p-5 shadow-[0_2px_12px_rgba(20,44,62,0.04)] hover:shadow-[0_12px_28px_rgba(20,44,62,0.09)] hover:border-[#0A5A42]/35 transition-all duration-300 flex flex-col justify-between group"
                        >
                          <div>
                            {/* Top Indicator */}
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10.5px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2 py-0.5 rounded-full border border-[#0A5A42]/10">
                                PILLAR 0{absoluteIdx + 1}
                              </span>
                              <span className="text-[10px] font-bold text-[#142C3E]/45 tracking-wider uppercase">
                                Architecture Stage {actualTierIdx + 1}
                              </span>
                            </div>

                            {/* Title & Tagline */}
                            <h3 className="text-base sm:text-lg font-bold text-[#142C3E] group-hover:text-[#0A5A42] transition-colors font-heading mb-0.5 leading-snug">
                              {p.pillar}
                            </h3>
                            <div className="text-xs font-semibold text-[#11A778] mb-2">
                              {p.tagline}
                            </div>

                            {/* Description */}
                            <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3">
                              {p.desc}
                            </p>

                            {/* Core Principles Checklist */}
                            <div className="space-y-1 pt-2.5 border-t border-[#E2EBE5]">
                              <span className="text-[10px] font-bold text-[#142C3E] uppercase tracking-wider block mb-0.5">
                                Core Principles:
                              </span>
                              {p.corePrinciples?.slice(0, 2).map((cp, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#2B2A29]/80">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] shrink-0 mt-1" />
                                  <span className="line-clamp-2">{cp}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Curriculum Callout */}
        <div className="mt-6 pt-5 border-t border-[#E2EBE5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#142C3E]">
              Master the 7 Pillars in Your Household or Campus
            </div>
            <p className="text-[11px] text-[#2B2A29]/70">
              Explore our 30–40 hour student and family curriculum, or consult directly with a certified Life Strategist.
            </p>
          </div>
          <Link
            href="/life-strategist"
            className="btn-primary text-xs py-2.5 px-4 rounded-xl inline-flex items-center gap-2 group/btn self-start sm:self-auto shrink-0 shadow-xs"
          >
            <span>Explore Life Strategist Curriculum</span>
            <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* Featured Knowledge Hub Guides (Editorial Publication Experience & Responsive Presentation) */
