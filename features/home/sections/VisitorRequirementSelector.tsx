'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import {
  ArrowRight, ShieldCheck, TrendingUp, Compass, Award,
  ChevronRight, Building, Home, Shield, Layers
} from 'lucide-react'
import { SectionBadge } from '@/components/shared/SectionBadge'

export function VisitorRequirementSelector() {
  const [activeCard, setActiveCard] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const pathways = [
    {
      id: '01',
      code: '01 · PROTECTION',
      title: 'Protect My Family',
      tagline: 'Risk & Insurance Solutions',
      description: 'Pure term life protection, comprehensive family healthcare safeguards, and critical illness risk management.',
      image: '/pathways/pathway-protect-family.jpg',
      actionText: 'Explore Insurance Solutions',
      link: '/services/insurance',
      highlights: ['Pure Term Life', 'Health & Critical Illness', 'Auto & Travel']
    },
    {
      id: '02',
      code: '02 · WEALTH',
      title: 'Plan My Finances',
      tagline: 'Wealth & Investment Strategy',
      description: 'Disciplined compounding through mutual fund SIPs, NPS retirement accounts, and risk-adjusted fixed income.',
      image: '/pathways/pathway-plan-finances.jpg',
      actionText: 'Explore Wealth Planning',
      link: '/services/investments',
      highlights: ['Mutual Funds & SIP', 'NPS Pension', 'Bonds & Fixed Income']
    },
    {
      id: '03',
      code: '03 · PROPERTY',
      title: 'Explore Property',
      tagline: 'Real Estate & Credit Financing',
      description: 'Competitive home loan origination, balance transfer refinancing, and verified residential property acquisitions.',
      image: '/pathways/pathway-explore-property.jpg',
      actionText: 'Explore Property & Loans',
      link: '/services/real-estate',
      highlights: ['Home Loans', 'Balance Transfer Hack', 'Residential Plots']
    },
    {
      id: '04',
      code: '04 · STRATEGY',
      title: 'Develop Myself',
      tagline: 'Life Strategist Curriculum',
      description: 'Personal finance literacy, debt management discipline, and moral wealth frameworks for lasting family success.',
      image: '/pathways/pathway-develop-myself.jpg',
      actionText: 'Explore Life Strategy',
      link: '/life-strategist',
      highlights: ['Mindset · Moral · Awareness', 'College Programs', '7 Literacy Pillars']
    }
  ]

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const cardWidth = scrollRef.current.offsetWidth * 0.82
      const index = Math.round(scrollLeft / cardWidth)
      setActiveCard(Math.min(Math.max(index, 0), pathways.length - 1))
    }
  }

  const scrollToIndex = (idx: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.82
      scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' })
      setActiveCard(idx)
    }
  }

  return (
    <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
      <div className="container">
        <div className="section-title-wrap max-w-3xl mb-4 sm:mb-6">
          <SectionBadge>Requirement Pathways</SectionBadge>
          <h2 className="h2 mb-2 sm:mb-3">How Can We Help You Today?</h2>
          <p className="text-xs sm:text-sm text-[#2B2A29]/75">
            Select your immediate objective to discover relevant solutions, transparent audits, and structured advisory pathways.
          </p>
        </div>

        {/* Responsive Layout: Single-row Grid on Desktop, Smooth Touch-Snap Carousel on Mobile/Tablet */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-3 lg:pb-0 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
        >
          {pathways.map((pathway) => (
            <Link
              key={pathway.id}
              href={pathway.link}
              className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-center lg:shrink group flex flex-col bg-white rounded-2xl border border-[#E2EBE5] shadow-[0_2px_12px_rgba(20,44,62,0.05)] hover:shadow-[0_16px_36px_rgba(20,44,62,0.12)] hover:border-[#0A5A42]/35 transition-all duration-300 overflow-hidden hover:-translate-y-1 h-full"
            >
              {/* Top: Tailored Authentic Photography */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E8F3ED]">
                <Image
                  src={getAssetPath(pathway.image)}
                  alt={pathway.title}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 group-hover:brightness-[1.03] transition-all duration-500 ease-out"
                />
                {/* Architectural gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142C3E]/45 via-transparent to-transparent pointer-events-none" />

                {/* Editorial Pillar Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#142C3E]/85 backdrop-blur-md text-[10px] font-bold tracking-wider text-[#F7FAF8] uppercase border border-white/15 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                    {pathway.code}
                  </span>
                </div>
              </div>

              {/* Bottom: Card Body Details */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <span className="text-[11px] font-bold text-[#0A5A42] uppercase tracking-wider block mb-1">
                    {pathway.tagline}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#142C3E] mb-1.5 group-hover:text-[#0A5A42] transition-colors font-heading leading-snug">
                    {pathway.title}
                  </h3>
                  <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3.5 line-clamp-2">
                    {pathway.description}
                  </p>
                  <div className="space-y-1.5 mb-4">
                    {pathway.highlights.map((h, i) => (
                      <div key={i} className="text-[11.5px] text-[#2B2A29] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] shrink-0" />
                        <span className="font-medium text-[#2B2A29]/90">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Directing Action CTA */}
                <div className="border-t border-[#E2EBE5] pt-3.5 mt-auto flex items-center justify-between text-xs font-bold text-[#0A5A42] group-hover:text-[#11A778] transition-colors">
                  <span>{pathway.actionText}</span>
                  <ArrowRight size={14} className="text-[#11A778] group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet Swipe Indicators */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-3">
          {pathways.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeCard === i ? 'w-6 bg-[#0A5A42]' : 'w-2 bg-[#CAD9D0]'
                }`}
              aria-label={`Go to pathway card ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* How We Work Section (4-Step Customer Journey - Refined Zigzag Roadmap Timeline) */
