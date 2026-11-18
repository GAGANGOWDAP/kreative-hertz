'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import { Building, Home, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'
import { SectionBadge } from '@/components/shared/SectionBadge'

export function RealEstateSection() {
  const [activeTab, setActiveTab] = useState<'residential' | 'plots'>('residential')

  return (
    <section className="section-institutional bg-[#FFFFFF] border-t border-b border-[#E2EBE5] scroll-mt-28" id="real-estate">
      <div className="container">
        <div className="section-title-wrap max-w-3xl mb-3 sm:mb-6">
          <SectionBadge>Real Estate Solutions</SectionBadge>
          <h2 className="h2 mb-2 sm:mb-3">Residential & Property Asset Advisory</h2>
          <p className="text-xs sm:text-sm text-[#4F615A]">
            Independent advisory covering primary home acquisition, developer verification, plot layout approvals, and integrated home financing.
          </p>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="flex md:hidden rounded-xl bg-[#E2EBE5]/60 p-1 mb-4 max-w-sm mx-auto border border-[#CAD9D0]/60">
          <button
            type="button"
            onClick={() => setActiveTab('residential')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all text-center ${
              activeTab === 'residential'
                ? 'bg-[#0A5A42] text-white shadow-xs'
                : 'text-[#4F615A] hover:text-[#172B3A]'
            }`}
          >
            Residential Property
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('plots')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all text-center ${
              activeTab === 'plots'
                ? 'bg-[#0A5A42] text-white shadow-xs'
                : 'text-[#4F615A] hover:text-[#172B3A]'
            }`}
          >
            Plots &amp; Investments
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <div className={`institutional-card p-5 sm:p-7 flex flex-col justify-between ${
            activeTab === 'residential' ? 'flex' : 'hidden md:flex'
          }`}>
            <div>
              <div className="icon-box-primary mb-3">
                <Home size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#172B3A] mb-2 font-heading">Residential Property</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Assistance for individuals and families purchasing apartments or independent villas. We review builder delivery history, title documentation, and integrate competitive home loans.
              </p>
              <ul className="space-y-2 text-xs text-[#26332D] mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568] shrink-0" />
                  <span>RERA compliance and builder credibility audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568] shrink-0" />
                  <span>Integrated bank rate comparisons and loan sanction support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568] shrink-0" />
                  <span>Tax deduction optimization under Sections 24 and 80C</span>
                </li>
              </ul>
            </div>
            <Link href="/services/residential-property" className="btn-secondary text-xs py-2.5 justify-center">
              <span>View Residential Specifications</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className={`institutional-card p-5 sm:p-7 flex flex-col justify-between ${
            activeTab === 'plots' ? 'flex' : 'hidden md:flex'
          }`}>
            <div>
              <div className="icon-box-primary mb-3">
                <Building size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#172B3A] mb-2 font-heading">Real Estate Investments & Plots</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Analysis of high-growth infrastructure corridors, approved plotted layouts, and pre-leased commercial assets with clear legal titles.
              </p>
              <ul className="space-y-2 text-xs text-[#26332D] mb-5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568] shrink-0" />
                  <span>Layout approvals verification (BMRDA / DTCP / equivalent)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568] shrink-0" />
                  <span>Rental yield and long-term capital appreciation studies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568] shrink-0" />
                  <span>Clear title verification checklist</span>
                </li>
              </ul>
            </div>
            <Link href="/services/residential-property" className="btn-secondary text-xs py-2.5 justify-center">
              <span>View Investment Specifications</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* College Programs Section */
