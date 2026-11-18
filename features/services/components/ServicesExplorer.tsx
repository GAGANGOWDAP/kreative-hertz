'use client'

import React, { useState, useMemo, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import {
  Search, ArrowRight, ChevronRight, ChevronLeft, CheckCircle2,
  Shield, TrendingUp, Landmark, Building, X
} from 'lucide-react'
import { servicesData, ServiceItem } from '@/content'
import { ServiceIcon, getServiceIcon } from '@/components/shared/ServiceIcon'

const SERVICE_IMAGES: Record<string, string> = {
  'life-insurance': '/services/life-insurance.jpg',
  'health-insurance': '/services/health-insurance.jpg',
  'motor-insurance': '/services/motor-insurance.jpg',
  'travel-insurance': '/services/travel-insurance.jpg',
  'business-insurance': '/services/business-insurance.jpg',
  'mutual-funds': '/services/mutual-funds.jpg',
  'financial-planning': '/services/financial-planning.jpg',
  'retirement-planning': '/services/retirement-planning.jpg',
  'child-education-fund': '/services/child-education-fund.jpg',
  'home-loans': '/services/home-loans.jpg',
  'personal-loans': '/services/personal-loans.jpg',
  'business-loans': '/services/business-loans.jpg',
  'loan-against-property': '/services/loan-against-property.jpg',
  'residential-property': '/services/residential-property.jpg',
  'investment-property': '/services/investment-property.jpg',
}

/* Filterable & Searchable 15 Services Directory (Premium Institutional Advisory Layout) */
export function ServicesExplorer({ initialCategory = 'All Services' }: { initialCategory?: string }) {
  const categories = [
    { label: 'All Services', count: 15 },
    { label: 'Insurance', count: 5 },
    { label: 'Investments', count: 4 },
    { label: 'Loans', count: 4 },
    { label: 'Real Estate', count: 2 }
  ] as const

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const filtered = servicesData.filter((service) => {
    const normActive = activeCategory.toLowerCase()
    const matchesCategory =
      activeCategory === 'All Services' ||
      service.category.toLowerCase() === normActive ||
      (normActive.includes('invest') && (service.category === 'Investments' || service.category.includes('Invest'))) ||
      (normActive.includes('loan') && (service.category === 'Loans' || service.category.includes('Loan'))) ||
      (normActive.includes('insur') && (service.category === 'Insurance' || service.category.includes('Insur'))) ||
      (normActive.includes('real') && (service.category === 'Real Estate' || service.category.includes('Real')))
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !query ||
      service.title.toLowerCase().includes(query) ||
      service.shortDesc.toLowerCase().includes(query) ||
      service.highlights.some((h) => h.toLowerCase().includes(query)) ||
      service.category.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  const resetFilters = () => {
    setActiveCategory('All Services')
    setSearchQuery('')
    if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  }

  const isFiltered = activeCategory !== 'All Services' || searchQuery.trim() !== ''

  const handleCategorySelect = (catLabel: string) => {
    setActiveCategory(catLabel)
    if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  }

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
      const scrollAmount = clientWidth > 1024 ? clientWidth * 0.9 : clientWidth * 0.85
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div>
      {/* Search and Category Control Bar */}
      <div className="mb-3 sm:mb-4 space-y-2.5">
        {/* Search Input */}
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#0A5A42]">
            <Search size={14} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by service, category or keyword..."
            className="form-control-input pl-9 pr-8 text-xs py-2 w-full bg-white border-[#CAD9D0] focus:border-[#0A5A42] focus:ring-1 focus:ring-[#0A5A42]/20 rounded-xl transition-all"
            aria-label="Search financial services"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#2B2A29]/50 hover:text-[#142C3E]"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Selector Tabs & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#E2EBE5] pb-2.5">
          <div className="flex overflow-x-auto sm:flex-wrap gap-1.5 sm:gap-2 scrollbar-none pb-0.5 max-w-full" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.label}
                role="tab"
                aria-selected={activeCategory === cat.label}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  activeCategory === cat.label
                    ? 'bg-[#0A5A42] text-[#F7FAF8] border-[#0A5A42] shadow-xs'
                    : 'bg-white text-[#2B2A29]/70 border-[#CAD9D0] hover:border-[#0A5A42] hover:text-[#0A5A42]'
                }`}
                onClick={() => handleCategorySelect(cat.label)}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10.5px] px-1.5 py-0.2 rounded-full font-bold ${
                    activeCategory === cat.label
                      ? 'bg-white/20 text-[#F7FAF8]'
                      : 'bg-[#E8F3ED] text-[#0A5A42]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="text-xs text-[#2B2A29]/70 flex items-center gap-2">
            <span>
              Showing <strong className="text-[#142C3E]">{filtered.length}</strong> of 15 services
            </span>
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-[#0A5A42] hover:text-[#11A778] hover:underline transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="institutional-card p-8 text-center max-w-md mx-auto my-6 bg-white rounded-2xl border border-[#E2EBE5]">
          <div className="w-10 h-10 rounded-full bg-[#E8F3ED] flex items-center justify-center mx-auto mb-2 text-[#0A5A42]">
            <Search size={20} />
          </div>
          <h3 className="text-sm font-bold text-[#142C3E] mb-1 font-heading">No services found</h3>
          <p className="text-xs text-[#2B2A29]/75 mb-3.5">
            No financial services matched &ldquo;{searchQuery}&rdquo; within &ldquo;{activeCategory}&rdquo;.
          </p>
          <button
            onClick={resetFilters}
            className="btn-primary text-xs py-2 px-4 mx-auto rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* Single-Screen Horizontal Snap Carousel: 3 visible on Desktop, 2 on Tablet, 1 on Mobile */
        <div>
          <div
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-6 pb-2 pt-1 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          >
            {filtered.map((service) => {
              const imageSrc = SERVICE_IMAGES[service.id] || `/services/${service.id}.jpg`
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="w-[82vw] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center lg:snap-start group flex flex-col bg-white rounded-2xl border border-[#E2EBE5] shadow-[0_2px_12px_rgba(20,44,62,0.05)] hover:shadow-[0_16px_36px_rgba(20,44,62,0.12)] hover:border-[#0A5A42]/35 transition-all duration-300 overflow-hidden hover:-translate-y-1 h-full"
                >
                  {/* Top: Landscape Photography with Editorial Category Identifier */}
                  <div className="relative aspect-[16/8.5] sm:aspect-[16/9] w-full overflow-hidden bg-[#E8F3ED]">
                    <Image
                      src={getAssetPath(imageSrc)}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 group-hover:brightness-[1.03] transition-all duration-500 ease-out"
                    />
                    {/* Architectural gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#142C3E]/55 via-transparent to-transparent pointer-events-none" />

                    {/* Category Identifier Pill */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#142C3E]/85 backdrop-blur-md text-[10px] font-bold tracking-wider text-[#F7FAF8] uppercase border border-white/20 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Card Content */}
                  <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      {/* Header: Icon Badge + Service Title */}
                      <div className="flex items-start gap-2 mb-1.5">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#E8F3ED] text-[#0A5A42] flex items-center justify-center shrink-0 group-hover:bg-[#0A5A42] group-hover:text-white transition-colors duration-300 shadow-xs mt-0.5">
                          {getServiceIcon(service.iconType)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-bold text-[#142C3E] leading-snug group-hover:text-[#0A5A42] transition-colors font-heading line-clamp-2">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Short readable description */}
                      <p className="text-xs text-[#2B2A29]/75 leading-relaxed line-clamp-2 mb-2 sm:mb-2.5">
                        {service.shortDesc}
                      </p>

                      {/* Editorial Capability Micro-tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2.5 sm:mb-3">
                        {service.highlights.slice(0, 2).map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-medium text-[#0A5A42] bg-[#E8F3ED] px-2 py-0.5 rounded border border-[#0A5A42]/10"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#11A778]" />
                            <span className="truncate max-w-[125px] sm:max-w-[145px]">{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Clear "View Details" Navigation CTA */}
                    <div className="mt-auto pt-2.5 border-t border-[#E2EBE5] flex items-center justify-between text-xs font-bold text-[#0A5A42] group-hover:text-[#11A778] transition-colors">
                      <span className="inline-flex items-center gap-1.5">
                        <span>View Details</span>
                        <ArrowRight size={13} className="text-[#11A778] group-hover:translate-x-1.5 transition-transform duration-200" />
                      </span>
                      <span className="text-[10px] font-bold text-[#142C3E]/50 tracking-wider uppercase">
                        Advisory
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Carousel Navigation Bar (Prev / Next Arrows + Counter) */}
          <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-[#E2EBE5]">
            <span className="text-xs text-[#2B2A29]/70">
              Swipe or click arrows to view all <strong className="text-[#142C3E]">{filtered.length}</strong> {activeCategory}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={!canScrollLeft}
                aria-label="Previous services"
                className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center hover:bg-[#0A5A42] hover:text-white hover:border-[#0A5A42] disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={!canScrollRight}
                aria-label="Next services"
                className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center hover:bg-[#0A5A42] hover:text-white hover:border-[#0A5A42] disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* Searchable & Filterable Knowledge Hub Explorer */
