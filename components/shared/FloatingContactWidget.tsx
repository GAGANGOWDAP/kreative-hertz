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
          className="mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-xl bg-white border border-[#CAD9D0] p-5 shadow-2xl transition-all animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center justify-between pb-3 border-b border-[#E2EBE5] mb-3">
            <div>
              <span className="text-xs font-bold text-[#172B3A] block font-heading">
                Direct Advisory Desk
              </span>
              <span className="text-[10px] text-[#4F615A]">
                Speak with Karthik R • Kreative Hertz
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#6C7D76] hover:text-[#172B3A] p-1 rounded-md hover:bg-[#F8F8F2] transition-colors"
              aria-label="Close contact dialog"
            >
              <X size={15} />
            </button>
          </div>

          <div className="space-y-2 mb-4">
            <a
              href={`tel:${companyDetails.phone}`}
              className="flex items-center justify-between p-2.5 rounded-lg border border-[#CAD9D0] bg-[#F8F8F2] text-xs font-semibold text-[#172B3A] hover:border-[#1F5138] hover:text-[#1F5138] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#EAF3EC] text-[#1F5138] flex items-center justify-center">
                  <Phone size={13} />
                </div>
                <span>Call Advisor</span>
              </div>
              <span className="text-[11px] text-[#4F615A] font-mono group-hover:text-[#1F5138]">
                {companyDetails.phoneFormatted}
              </span>
            </a>

            <a
              href={companyDetails.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-lg border border-[#159568]/40 bg-[#EAF3EC] text-xs font-semibold text-[#1F5138] hover:border-[#1F5138] transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded bg-[#159568] text-white flex items-center justify-center">
                  <MessageCircle size={13} />
                </div>
                <span>WhatsApp Desk</span>
              </div>
              <span className="text-[11px] text-[#1F5138] font-semibold">Immediate</span>
            </a>
          </div>

          <div className="text-[10px] text-[#6C7D76] flex items-center gap-1.5 mb-3">
            <Clock size={11} className="text-[#1F5138] flex-shrink-0" />
            <span>Mon–Sat: 9:30 AM – 7:00 PM IST</span>
          </div>

          <Link
            href="/book-session"
            onClick={() => setIsOpen(false)}
            className="btn-primary w-full justify-center text-xs py-2.5"
          >
            <span>Book Formal Discovery Call</span>
            <ArrowRight size={13} />
          </Link>

          <div className="mt-3 text-center">
            <button
              onClick={() => setIsDismissed(true)}
              className="text-[10px] text-[#8C9EA8] hover:text-[#4F615A] underline"
            >
              Don&apos;t show again this session
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open direct advisory desk"
        aria-expanded={isOpen}
        className="flex items-center justify-center gap-2 w-10 h-10 sm:w-auto sm:h-auto sm:px-4 sm:py-3 rounded-full bg-[#1F5138] hover:bg-[#159568] text-white shadow-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1F5138] focus:ring-offset-2 border border-[#C6A66B]/30"
      >
        <MessageCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C6A66B]" />
        <span className="text-xs font-bold tracking-wide font-heading hidden sm:inline">
          Advisory Desk
        </span>
        <span className="w-2 h-2 rounded-full bg-[#159568] animate-pulse" />
      </button>
    </div>
  )
}

