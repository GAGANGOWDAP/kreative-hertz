'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, ShieldCheck } from 'lucide-react'
import { companyDetails } from '@/content'
import { SectionBadge } from '@/components/shared/SectionBadge'
import { BookSessionSection } from '@/features/consultation'

export function HomeBookingCtaSection() {
  const [activeTab, setActiveTab] = useState<'consultation' | 'contact'>('consultation')

  return (
    <section className="section-institutional bg-[#FFFFFF] scroll-mt-28" id="book-session">
      <div className="container">
        {/* Mobile / Tablet Tab Switcher */}
        <div className="flex lg:hidden rounded-xl bg-[#E2EBE5]/60 p-1 mb-4 max-w-md mx-auto border border-[#CAD9D0]/60">
          <button
            type="button"
            onClick={() => setActiveTab('consultation')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all text-center ${
              activeTab === 'consultation'
                ? 'bg-[#0A5A42] text-white shadow-xs'
                : 'text-[#4F615A] hover:text-[#172B3A]'
            }`}
          >
            Schedule Consultation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('contact')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all text-center ${
              activeTab === 'contact'
                ? 'bg-[#0A5A42] text-white shadow-xs'
                : 'text-[#4F615A] hover:text-[#172B3A]'
            }`}
          >
            Direct Contact Details
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className={`lg:col-span-5 space-y-3 sm:space-y-4 ${
            activeTab === 'contact' ? 'block' : 'hidden lg:block'
          }`}>
            <SectionBadge>Direct Consultation</SectionBadge>
            <h2 className="h2 mb-2 sm:mb-3">Let&apos;s Simplify Your Next Financial Decision.</h2>
            <p className="text-xs sm:text-sm text-[#4F615A] leading-relaxed mb-4 sm:mb-6">
              Whether you need a confidential audit of your existing life/health insurance, an objective loan balance transfer calculation, or institutional workshop details — reach out directly to Karthik R.
            </p>

            <div className="institutional-card p-3.5 sm:p-4">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#1F5138] uppercase tracking-wider block mb-0.5">
                Telephone Contact
              </span>
              <a href={`tel:${companyDetails.phone}`} className="text-sm sm:text-base font-bold text-[#172B3A] hover:text-[#1F5138] flex items-center gap-2">
                <Phone size={15} className="text-[#1F5138]" />
                <span>{companyDetails.phoneFormatted}</span>
              </a>
              <p className="text-[10px] sm:text-[11px] text-[#4F615A] mt-0.5">Mon–Sat: 9:30 AM – 7:00 PM IST</p>
            </div>

            <div className="institutional-card p-3.5 sm:p-4">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#1F5138] uppercase tracking-wider block mb-0.5">
                Email Correspondence
              </span>
              <a href={`mailto:${companyDetails.email}`} className="text-sm sm:text-base font-bold text-[#172B3A] hover:text-[#1F5138] flex items-center gap-2">
                <Mail size={15} className="text-[#1F5138]" />
                <span>{companyDetails.email}</span>
              </a>
              <p className="text-[10px] sm:text-[11px] text-[#4F615A] mt-0.5">Submit policy copies for confidential review</p>
            </div>

            <div className="institutional-card p-3.5 sm:p-4">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#159568] uppercase tracking-wider block mb-0.5">
                Direct WhatsApp Messaging
              </span>
              <a
                href={companyDetails.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full justify-center text-xs py-2 mt-1"
              >
                <span>Open WhatsApp Wealth Desk</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: BookSessionSection Form */}
          <div className={`lg:col-span-7 ${
            activeTab === 'consultation' ? 'block' : 'hidden lg:block'
          }`}>
            <BookSessionSection />
          </div>
        </div>
      </div>
    </section>
  )
}
