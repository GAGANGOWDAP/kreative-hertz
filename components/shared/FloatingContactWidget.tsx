'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight, X, Clock } from 'lucide-react'
import { companyDetails } from '@/content/company/company-info'

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  // Close floating widget on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  if (isDismissed) return null

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pb-[env(safe-area-inset-bottom,0px)] pr-[env(safe-area-inset-right,0px)]">
      {/* Expanded Modal Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Direct Advisory Contacts"
          className="mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-[#E2EBE5] p-5 shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#E2EBE5] mb-3">
            <div>
              <span className="text-xs font-bold text-[#142C3E] block font-heading">
                Direct Advisory Desk
              </span>
              <span className="text-[10px] text-[#2B2A29]/70">
                Speak with Karthik R • Kreative Hertz
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#2B2A29]/60 hover:text-[#142C3E] p-1 rounded-md hover:bg-[#F7FAF8] transition-colors"
              aria-label="Close contact dialog"
            >
              <X size={15} />
            </button>
          </div>

          <div className="space-y-2 mb-4">
            <a
              href={`tel:${companyDetails.phone}`}
              className="flex items-center justify-between p-2.5 rounded-xl border border-[#CAD9D0] bg-[#F7FAF8] text-xs font-semibold text-[#142C3E] hover:border-[#0A5A42] hover:text-[#0A5A42] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#E8F3ED] text-[#0A5A42] flex items-center justify-center">
                  <Phone size={13} />
                </div>
                <span>Call Advisor</span>
              </div>
              <span className="text-[11px] text-[#2B2A29]/70 font-mono group-hover:text-[#0A5A42]">
                {companyDetails.phoneFormatted}
              </span>
            </a>

            <a
              href={companyDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl border border-[#11A778]/40 bg-[#E8F3ED] text-xs font-semibold text-[#0A5A42] hover:border-[#0A5A42] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#11A778] text-white flex items-center justify-center">
                  <MessageCircle size={13} />
                </div>
                <span>WhatsApp Desk</span>
              </div>
              <span className="text-[11px] text-[#0A5A42] font-semibold">Immediate</span>
            </a>
          </div>

          <div className="text-[10px] text-[#2B2A29]/70 flex items-center gap-1.5 mb-3">
            <Clock size={11} className="text-[#0A5A42] shrink-0" />
            <span>Mon–Sat: 9:30 AM – 7:00 PM IST</span>
          </div>

          <Link
            href="/book-session"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full justify-center text-xs py-2.5 shadow-xs"
          >
            <span>Book Formal Discovery Call</span>
            <ArrowRight size={13} />
          </Link>

          <div className="mt-3 text-center">
            <button
              onClick={() => setIsDismissed(true)}
              className="text-[10px] text-[#8C9EA8] hover:text-[#2B2A29]/70 underline"
            >
              Don&apos;t show again this session
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close advisory desk' : 'Open direct advisory desk'}
        aria-expanded={isOpen}
        className="relative flex items-center justify-center w-12 h-12 sm:w-auto sm:h-11 sm:px-4 rounded-full bg-[#0A5A42] hover:bg-[#11A778] text-white shadow-[0_6px_20px_rgba(10,90,66,0.35)] transition-all hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-2 focus:ring-[#0A5A42] focus:ring-offset-2 border border-white/20"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white" strokeWidth={2.2} />
        ) : (
          <>
            <MessageCircle className="w-5 h-5 sm:w-4.5 sm:h-4.5 text-white" strokeWidth={2.2} />
            <span className="text-xs font-bold tracking-wide font-heading text-white hidden sm:inline ml-2">
              Advisory Desk
            </span>
            {/* Online Live Status Indicator */}
            <span className="absolute -top-0.5 -right-0.5 sm:relative sm:top-auto sm:right-auto sm:ml-2 flex h-2.5 w-2.5 sm:h-2 sm:w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#11A778] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-2 sm:w-2 bg-[#11A778] ring-2 ring-white sm:ring-0" />
            </span>
          </>
        )}
      </button>
    </div>
  )
}
