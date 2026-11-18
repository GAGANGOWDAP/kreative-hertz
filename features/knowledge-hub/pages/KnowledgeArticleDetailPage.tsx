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

export function KnowledgeArticleDetailPage({ article }: { article: KnowledgeArticle }) {
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3)

  return (
    <PageShell>
      {/* Article Header & Navigation */}
      <section className="section-institutional bg-[#F7FAF8] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          {/* Back Navigation Link */}
          <Link
            href="/knowledge-hub"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A5A42] hover:text-[#11A778] mb-4 transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Knowledge Hub</span>
          </Link>

          {/* Category & Metadata Row */}
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="text-[10.5px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2.5 py-0.5 rounded-full border border-[#0A5A42]/10 uppercase">
              {article.category}
            </span>
            <span className="text-xs text-[#2B2A29]/70 flex items-center gap-1">
              <Clock size={12} className="text-[#11A778]" />
              {article.readTime || article.read}
            </span>
            <span className="text-xs text-[#2B2A29]/50">•</span>
            <span className="text-xs text-[#2B2A29]/70">
              {article.publishedDate || article.date}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="h1 text-2xl sm:text-3xl lg:text-4xl mb-4 font-heading text-[#142C3E] leading-tight">
            {article.title}
          </h1>

          {/* Introductory Lead Excerpt */}
          <p className="text-base sm:text-lg text-[#2B2A29]/80 font-normal leading-relaxed border-l-2 border-[#11A778] pl-4 mb-5">
            {article.excerpt}
          </p>

          {/* Author Byline */}
          <div className="pt-4 border-t border-[#E2EBE5] flex items-center gap-3 text-xs text-[#2B2A29]/75">
            <div className="w-8 h-8 rounded-full bg-[#0A5A42] text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-xs">
              KR
            </div>
            <div>
              <span className="font-semibold text-[#142C3E]">By {article.author}</span>
              <span className="text-[#2B2A29]/60 block text-[11px]">
                Wealth Architect & Life Strategist · Kreative Hertz
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="section-institutional bg-white">
        <div className="container max-w-3xl">
          {/* Featured Article Image */}
          <div className="relative aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden border border-[#E2EBE5] mb-8 shadow-xs bg-[#E8F3ED]">
            <Image
              src={getAssetPath(article.image || '/services/financial-planning.jpg')}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>

          {/* Core Institutional Takeaway Callout */}
          {article.keyTakeaway && (
            <div className="bg-[#E8F3ED] border-l-4 border-[#0A5A42] p-5 rounded-r-2xl mb-8 shadow-xs">
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider text-[#0A5A42] block mb-1">
                Core Institutional Takeaway
              </span>
              <p className="text-sm sm:text-base font-semibold text-[#142C3E] leading-relaxed">
                {article.keyTakeaway}
              </p>
            </div>
          )}

          {/* Rich Content Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-[#2B2A29]/90 leading-relaxed font-sans mb-10">
            {article.contentParagraphs && article.contentParagraphs.length > 0 ? (
              article.contentParagraphs.map((para, idx) => (
                <p key={idx} className="leading-relaxed">
                  {para}
                </p>
              ))
            ) : (
              <>
                <p className="text-sm font-medium text-[#142C3E] leading-relaxed">
                  {article.excerpt}
                </p>
                <p>
                  In our advisory engagements at Kreative Hertz, we constantly see how minor clauses inside policy contracts result in substantial financial friction during emergencies. Whether it is choosing health policies with restrictive room-rent limits, terminating systematic investments during normal market volatility, or paying elevated interest rates on unmonitored home loans, lack of structured awareness remains the root cause.
                </p>
                <p>
                  Sustainable financial stability is not achieved by attempting to time markets or chasing complex products; it is engineered through sound foundational risk covers, disciplined asset allocation, and regular reviews.
                </p>
              </>
            )}
          </div>

          {/* Strategic Key Insights Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="bg-[#F7FAF8] rounded-2xl border border-[#E2EBE5] p-6 mb-8 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#11A778]" />
                <h3 className="text-xs font-bold text-[#142C3E] font-heading uppercase tracking-wider">
                  Strategic Key Insights
                </h3>
              </div>
              <div className="space-y-2.5">
                {article.keyTakeaways.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2B2A29]/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Diagnostic Action Checklist Box */}
          {article.checklist && article.checklist.length > 0 && (
            <div className="bg-white rounded-2xl border border-[#E2EBE5] p-6 mb-10 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 size={16} className="text-[#11A778]" />
                <h3 className="text-xs font-bold text-[#142C3E] font-heading uppercase tracking-wider">
                  Diagnostic & Action Checklist
                </h3>
              </div>
              <div className="space-y-2.5">
                {article.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2B2A29]/85 bg-[#F7FAF8] p-3 rounded-xl border border-[#E2EBE5]/60">
                    <Check size={14} className="text-[#0A5A42] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consultation Strategy Session CTA */}
          <div className="bg-[#F7FAF8] border border-[#E2EBE5] rounded-2xl p-6 sm:p-8 text-center mb-12 shadow-xs">
            <h3 className="text-base sm:text-lg font-bold text-[#142C3E] font-heading mb-2">
              Have Specific Questions Regarding This Topic?
            </h3>
            <p className="text-xs sm:text-sm text-[#2B2A29]/75 max-w-lg mx-auto mb-5 leading-relaxed">
              Schedule a confidential, conflict-free strategy audit with Karthik R to review your current contracts, loan spreads, or compounding allocations.
            </p>
            <Link
              href="/book-session"
              className="btn-primary text-xs py-2.5 px-6 inline-flex items-center gap-2 shadow-xs"
            >
              <span>Book Strategy Session</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Related Articles Navigation */}
          <div className="border-t border-[#E2EBE5] pt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-[#142C3E] font-heading">
                Explore More Publications
              </h3>
              <Link
                href="/knowledge-hub"
                className="text-xs font-semibold text-[#0A5A42] hover:text-[#11A778] inline-flex items-center gap-1 transition-colors"
              >
                <span>All Articles</span>
                <ChevronRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {others.map((oa) => (
                <Link
                  key={oa.slug}
                  href={`/knowledge-hub/${oa.slug}`}
                  className="bg-white rounded-xl border border-[#E2EBE5] overflow-hidden hover:border-[#0A5A42]/40 hover:shadow-sm transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-16/10 overflow-hidden bg-[#E8F3ED]">
                      <Image
                        src={getAssetPath(oa.image || '/services/financial-planning.jpg')}
                        alt={oa.title}
                        fill
                        sizes="240px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3.5">
                      <span className="text-[10px] font-mono font-bold text-[#0A5A42] uppercase tracking-wider block mb-1">
                        {oa.category}
                      </span>
                      <h4 className="text-xs font-bold text-[#142C3E] group-hover:text-[#0A5A42] transition-colors mb-1 line-clamp-2 font-heading leading-snug">
                        {oa.title}
                      </h4>
                    </div>
                  </div>
                  <div className="p-3.5 pt-0 text-[10.5px] text-[#2B2A29]/60 flex items-center justify-between border-t border-[#E2EBE5]/60 mt-1">
                    <span>{oa.readTime || oa.read}</span>
                    <span className="font-semibold text-[#0A5A42] group-hover:text-[#11A778]">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 8. BOOK A SESSION PAGE
// -------------------------------------------------------------
