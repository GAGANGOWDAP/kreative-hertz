'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import {
  Search, ArrowRight, ChevronRight, Clock, BookOpen,
  Filter, AlertCircle, X
} from 'lucide-react'
import { KnowledgeArticle } from '@/content'

export function KnowledgeHubExplorer({ initialArticles }: { initialArticles: KnowledgeArticle[] }) {
  const [activeCategory, setActiveCategory] = useState('All Articles')
  const [searchQuery, setSearchQuery] = useState('')

  const categoryTabs = [
    { label: 'All Articles', match: () => true },
    {
      label: 'Insurance & Protection',
      match: (cat: string) => cat.toLowerCase().includes('insurance')
    },
    {
      label: 'Wealth & Investments',
      match: (cat: string) => cat.toLowerCase().includes('wealth') || cat.toLowerCase().includes('investment')
    },
    {
      label: 'Loans & Borrowing',
      match: (cat: string) => cat.toLowerCase().includes('debt') || cat.toLowerCase().includes('loan')
    },
    {
      label: 'Financial Literacy',
      match: (cat: string) => cat.toLowerCase().includes('life') || cat.toLowerCase().includes('literacy') || cat.toLowerCase().includes('awareness')
    }
  ]

  const currentTab = categoryTabs.find(t => t.label === activeCategory) || categoryTabs[0]

  const filtered = initialArticles.filter((art) => {
    const matchesCat = currentTab.match(art.category)
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch = !query ||
      art.title.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.summary?.toLowerCase().includes(query) ||
      art.keyTakeaway?.toLowerCase().includes(query) ||
      art.category.toLowerCase().includes(query) ||
      art.author.toLowerCase().includes(query)
    return matchesCat && matchesSearch
  })

  const resetFilters = () => {
    setActiveCategory('All Articles')
    setSearchQuery('')
  }

  const isDefaultView = activeCategory === 'All Articles' && !searchQuery.trim()
  const leadArticle = isDefaultView && filtered.length > 0 ? filtered[0] : null
  const secondaryArticles = isDefaultView ? filtered.slice(1) : filtered

  return (
    <div>
      {/* Search and Category Filter Bar */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#142C3E]/50">
              <Search size={15} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search research by title, topic, or takeaway..."
              className="w-full pl-9 pr-8 text-xs py-2.5 rounded-xl border border-[#CAD9D0] bg-white text-[#142C3E] placeholder-[#2B2A29]/50 focus:outline-hidden focus:border-[#0A5A42] focus:ring-1 focus:ring-[#0A5A42] transition-colors"
              aria-label="Search articles"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#2B2A29]/50 hover:text-[#142C3E]"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          <div className="text-xs text-[#2B2A29]/70 flex items-center gap-2 self-end sm:self-center">
            <span>Showing <strong className="text-[#142C3E]">{filtered.length}</strong> of {initialArticles.length} publications</span>
            {(activeCategory !== 'All Articles' || searchQuery) && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-semibold text-[#0A5A42] hover:text-[#11A778] hover:underline transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-[#E2EBE5] pb-4" role="tablist">
          {categoryTabs.map((tab) => {
            const isSelected = activeCategory === tab.label
            return (
              <button
                key={tab.label}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all duration-200 ${isSelected
                  ? 'bg-[#0A5A42] text-white border-[#0A5A42] shadow-xs'
                  : 'bg-white text-[#2B2A29]/80 border-[#CAD9D0] hover:border-[#0A5A42] hover:text-[#0A5A42]'
                  }`}
                onClick={() => setActiveCategory(tab.label)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#E2EBE5] p-10 text-center max-w-md mx-auto my-8 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-[#E8F3ED] flex items-center justify-center mx-auto mb-3 text-[#0A5A42]">
            <Search size={22} />
          </div>
          <h3 className="text-base font-bold text-[#142C3E] mb-1 font-heading">No publications found</h3>
          <p className="text-xs text-[#2B2A29]/70 mb-4">
            No articles matched &ldquo;{searchQuery}&rdquo;. Try another search term or reset category filters.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="btn-primary text-xs py-2 px-4 mx-auto"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {/* FEATURED LEAD ARTICLE (When browsing all articles without search) */}
          {leadArticle && (
            <div className="bg-white rounded-2xl border border-[#E2EBE5] overflow-hidden shadow-[0_2px_12px_rgba(20,44,62,0.04)] hover:shadow-[0_12px_28px_rgba(20,44,62,0.08)] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Featured Image */}
                <div className="lg:col-span-7 relative min-h-[260px] sm:min-h-[320px] lg:min-h-full overflow-hidden bg-[#E8F3ED] group">
                  <Image
                    src={getAssetPath(leadArticle.image || '/services/financial-planning.jpg')}
                    alt={leadArticle.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142C3E]/60 via-transparent to-transparent lg:hidden" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#0A5A42]/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/20">
                      Lead Editorial
                    </span>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10.5px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2.5 py-0.5 rounded-full border border-[#0A5A42]/10 uppercase">
                        {leadArticle.category}
                      </span>
                      <span className="text-[11px] text-[#2B2A29]/60 flex items-center gap-1">
                        <Clock size={11} className="text-[#11A778]" />
                        {leadArticle.readTime || leadArticle.read}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#142C3E] hover:text-[#0A5A42] transition-colors mb-3 leading-snug">
                      <Link href={`/knowledge-hub/${leadArticle.slug}`}>
                        {leadArticle.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#2B2A29]/75 leading-relaxed mb-4">
                      {leadArticle.excerpt}
                    </p>

                    {/* Key Takeaway Callout */}
                    {leadArticle.keyTakeaway && (
                      <div className="bg-[#E8F3ED] border-l-3 border-[#0A5A42] p-3 rounded-r-xl mb-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0A5A42] block mb-0.5">
                          Key Insight:
                        </span>
                        <p className="text-xs font-semibold text-[#142C3E] leading-snug line-clamp-2">
                          {leadArticle.keyTakeaway}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#E2EBE5] flex items-center justify-between">
                    <span className="text-[11px] text-[#2B2A29]/60">
                      By {leadArticle.author} · {leadArticle.publishedDate || leadArticle.date}
                    </span>
                    <Link
                      href={`/knowledge-hub/${leadArticle.slug}`}
                      className="btn-primary text-xs py-2 px-4 rounded-xl inline-flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Read Blueprint</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECONDARY EDITORIAL ARTICLES GRID */}
          <div>
            {isDefaultView && (
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                <span className="text-[11px] font-bold tracking-wider text-[#0A5A42] uppercase font-mono">
                  Published Research & Advisory Guides
                </span>
                <div className="flex-1 h-[1px] bg-[#E2EBE5]" />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {secondaryArticles.map((art) => (
                <article
                  key={art.slug}
                  className="bg-white rounded-2xl border border-[#E2EBE5] overflow-hidden shadow-[0_2px_12px_rgba(20,44,62,0.03)] hover:shadow-[0_12px_28px_rgba(20,44,62,0.08)] hover:border-[#0A5A42]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Article Thumbnail */}
                    <div className="relative aspect-16/9 overflow-hidden bg-[#E8F3ED]">
                      <Image
                        src={getAssetPath(art.image || '/services/financial-planning.jpg')}
                        alt={art.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
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

                    {/* Article Details */}
                    <div className="p-5 sm:p-6">
                      <div className="text-[11px] text-[#2B2A29]/60 mb-2">
                        {art.publishedDate || art.date} · By {art.author}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#142C3E] group-hover:text-[#0A5A42] transition-colors leading-snug font-heading mb-2.5">
                        <Link href={`/knowledge-hub/${art.slug}`}>
                          {art.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-[#2B2A29]/75 leading-relaxed line-clamp-3 mb-4">
                        {art.excerpt}
                      </p>

                      {/* Key takeaway snippet */}
                      {art.keyTakeaway && (
                        <div className="bg-[#F7FAF8] border-l-2 border-[#11A778] p-2.5 rounded-r-lg mb-2">
                          <p className="text-[11px] text-[#2B2A29]/80 font-medium italic line-clamp-2">
                            &ldquo;{art.keyTakeaway}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-0">
                    <div className="border-t border-[#E2EBE5] pt-3.5 flex items-center justify-between text-xs font-semibold text-[#0A5A42] group-hover:text-[#11A778] transition-colors">
                      <Link href={`/knowledge-hub/${art.slug}`} className="inline-flex items-center gap-1.5">
                        <span>Read Full Guide</span>
                        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* Financial Gap Analysis Section (Interactive Diagnostic Modeling & Structural Audit Pillars) */
