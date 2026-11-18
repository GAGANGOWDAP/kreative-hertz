'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import {
  ArrowRight, ChevronRight, ChevronLeft, Clock, BookOpen, Sparkles
} from 'lucide-react'
import { articles } from '@/content'
import { SectionBadge } from '@/components/shared/SectionBadge'

export function KnowledgeHubHomeSection() {
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
        left: direction === 'left' ? -clientWidth * 0.85 : clientWidth * 0.85,
        behavior: 'smooth'
      })
    }
  }

  const leadArticle = articles[0]
  const secondaryArticles = articles.slice(1, 3)

  return (
    <section className="section-institutional bg-[#F7FAF8] border-b border-[#E2EBE5] scroll-mt-28" id="knowledge-hub">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 sm:mb-5">
          <div className="max-w-2xl">
            <SectionBadge>Institutional Publication</SectionBadge>
            <h2 className="h2 mb-1.5 sm:mb-2">Knowledge Hub & Research</h2>
            <p className="text-xs sm:text-sm text-[#2B2A29]/75">
              Objective, conflict-free research exploring insurance policy fine print, loan spread calculations, systematic compounding mathematics, and household financial defense.
            </p>
          </div>

          {/* Desktop Right CTA */}
          <Link
            href="/knowledge-hub"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A5A42] hover:text-[#11A778] transition-colors group self-end"
          >
            <span>Explore All 5 Published Articles</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile / Tablet Carousel Navigation Arrows */}
          <div className="flex items-center gap-2 lg:hidden self-end">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              disabled={!canScrollLeft}
              aria-label="Previous article"
              className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              disabled={!canScrollRight}
              aria-label="Next article"
              className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* DESKTOP: Editorial Split Layout (hidden lg:grid) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-5 xl:gap-6 mb-4 sm:mb-5">
          {/* Left: Lead Featured Editorial (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2EBE5] p-4.5 xl:p-5 shadow-[0_2px_12px_rgba(20,44,62,0.04)] hover:shadow-[0_12px_28px_rgba(20,44,62,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Image banner */}
              <div className="relative aspect-[16/8] xl:aspect-[16/8.5] rounded-xl overflow-hidden bg-[#E8F3ED] border border-[#E2EBE5] mb-3.5">
                <Image
                  src={getAssetPath(leadArticle.image || '/services/financial-planning.jpg')}
                  alt={leadArticle.title}
                  fill
                  sizes="58vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="bg-[#0A5A42]/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-white/20">
                    Lead Editorial
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2 py-0.5 rounded-full border border-[#0A5A42]/10 uppercase">
                  {leadArticle.category}
                </span>
                <span className="text-[10.5px] text-[#2B2A29]/60 flex items-center gap-1">
                  <Clock size={11} className="text-[#11A778]" />
                  {leadArticle.readTime || leadArticle.read}
                </span>
                <span className="text-[10.5px] text-[#2B2A29]/50">•</span>
                <span className="text-[10.5px] text-[#2B2A29]/60">
                  {leadArticle.publishedDate || leadArticle.date}
                </span>
              </div>

              {/* Title & Excerpt */}
              <h3 className="text-lg xl:text-xl font-bold font-heading text-[#142C3E] group-hover:text-[#0A5A42] transition-colors leading-snug mb-2">
                <Link href={`/knowledge-hub/${leadArticle.slug}`}>
                  {leadArticle.title}
                </Link>
              </h3>
              <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3 line-clamp-2">
                {leadArticle.excerpt}
              </p>

              {/* Key Takeaway snippet */}
              {leadArticle.keyTakeaway && (
                <div className="bg-[#E8F3ED] border-l-3 border-[#0A5A42] p-2.5 rounded-r-xl mb-3">
                  <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#0A5A42] block mb-0.5">
                    Core Institutional Finding:
                  </span>
                  <p className="text-xs font-semibold text-[#142C3E] leading-snug line-clamp-2">
                    {leadArticle.keyTakeaway}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#E2EBE5] flex items-center justify-between">
              <span className="text-[10.5px] text-[#2B2A29]/60">
                By {leadArticle.author} · Wealth Architect
              </span>
              <Link
                href={`/knowledge-hub/${leadArticle.slug}`}
                className="btn-primary text-xs py-1.5 px-3.5 rounded-xl inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Read Blueprint</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right: Stack of 2 Secondary Editorial Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {secondaryArticles.map((art) => (
              <div
                key={art.slug}
                className="bg-white rounded-2xl border border-[#E2EBE5] p-4 shadow-[0_2px_12px_rgba(20,44,62,0.03)] hover:shadow-[0_12px_28px_rgba(20,44,62,0.08)] hover:border-[#0A5A42]/30 transition-all duration-300 flex flex-col justify-between group flex-1"
              >
                <div>
                  <div className="flex gap-3 mb-2">
                    {/* Thumbnail Image */}
                    <div className="w-24 h-18 sm:w-28 sm:h-20 rounded-xl overflow-hidden relative shrink-0 bg-[#E8F3ED] border border-[#E2EBE5]">
                      <Image
                        src={getAssetPath(art.image || '/services/financial-planning.jpg')}
                        alt={art.title}
                        fill
                        sizes="110px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Metadata & Title */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className="text-[9.5px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2 py-0.5 rounded-full border border-[#0A5A42]/10 uppercase">
                          {art.category}
                        </span>
                        <span className="text-[10px] text-[#2B2A29]/60 flex items-center gap-1">
                          <Clock size={10} className="text-[#11A778]" />
                          {art.readTime || art.read}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-[#142C3E] group-hover:text-[#0A5A42] transition-colors leading-snug font-heading line-clamp-2">
                        <Link href={`/knowledge-hub/${art.slug}`}>
                          {art.title}
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#2B2A29]/75 leading-relaxed line-clamp-2 mb-2">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2EBE5] flex items-center justify-between text-xs font-semibold text-[#0A5A42] group-hover:text-[#11A778] transition-colors">
                  <span className="text-[11px] text-[#2B2A29]/50 font-normal">
                    {art.publishedDate || art.date}
                  </span>
                  <Link href={`/knowledge-hub/${art.slug}`} className="inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET: Smooth Touch-Snap Carousel (block lg:hidden) */}
        <div className="block lg:hidden mb-6">
          <div
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {articles.slice(0, 4).map((art) => (
              <div
                key={art.slug}
                className="w-[84vw] sm:w-[340px] shrink-0 snap-center bg-white rounded-2xl border border-[#E2EBE5] overflow-hidden shadow-[0_2px_12px_rgba(20,44,62,0.04)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/9 overflow-hidden bg-[#E8F3ED]">
                    <Image
                      src={getAssetPath(art.image || '/services/financial-planning.jpg')}
                      alt={art.title}
                      fill
                      sizes="340px"
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-[#0A5A42]/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {art.category}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-[#142C3E]/80 backdrop-blur-xs text-[#F7FAF8] text-[10px] font-medium px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Clock size={10} className="text-[#11A778]" />
                        {art.readTime || art.read}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#142C3E] mb-2 leading-snug font-heading">
                      <Link href={`/knowledge-hub/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#2B2A29]/75 leading-relaxed line-clamp-3 mb-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="border-t border-[#E2EBE5] pt-3 flex items-center justify-between text-xs text-[#0A5A42] font-semibold">
                    <span className="text-[11px] text-[#2B2A29]/60 font-normal">
                      {art.publishedDate || art.date}
                    </span>
                    <Link href={`/knowledge-hub/${art.slug}`} className="inline-flex items-center gap-1">
                      <span>Read Article</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-[#2B2A29]/60 mt-2">
            Swipe to explore published advisory guides
          </div>
        </div>

        {/* Bottom Curriculum & Archive Callout */}
        <div className="pt-5 border-t border-[#E2EBE5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#142C3E]">
              Explore Complete Knowledge Hub Library
            </div>
            <p className="text-[11px] text-[#2B2A29]/70">
              Browse structured analyses covering insurance audit traps, step-up SIP compounding math, and mortgage balance transfer refinancing.
            </p>
          </div>
          <Link
            href="/knowledge-hub"
            className="btn-secondary text-xs py-2 px-4 rounded-xl inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0 shadow-xs"
          >
            <span>View All 5 Research Articles</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* Final Consultation & Contact Section (Single-Screen with Mobile/Tablet Tabs) */
