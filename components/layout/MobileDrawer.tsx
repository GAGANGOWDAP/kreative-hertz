'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, MessageCircle, ArrowRight, X } from 'lucide-react'
import { companyDetails } from '@/content/company/company-info'
import { primaryNavItems, headerBookingCta } from '@/content/navigation/main-navigation'

export interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  isScrolled?: boolean
}

export function MobileDrawer({ isOpen, onClose, isScrolled = false }: MobileDrawerProps) {
  const pathname = usePathname()

  // Prevent background scrolling while mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href === '/services') return pathname.startsWith('/services') || pathname.startsWith('/wealth-architect')
    if (href === '/products') return pathname.startsWith('/products') || pathname.startsWith('/life-strategist')
    if (href === '/blog') return pathname.startsWith('/blog') || pathname.startsWith('/knowledge-hub')
    return pathname.startsWith(href)
  }

  // Exact header offsets: Top state = 64px (mobile) / 76px (desktop/tablet); Scrolled = 58px (mobile) / 68px (desktop/tablet)
  const topOffsetClass = isScrolled ? 'top-[58px] sm:top-[68px]' : 'top-[64px] sm:top-[76px]'
  const heightClass = isScrolled
    ? 'h-[calc(100dvh-58px)] max-h-[calc(100dvh-58px)] sm:h-[calc(100dvh-68px)] sm:max-h-[calc(100dvh-68px)]'
    : 'h-[calc(100dvh-64px)] max-h-[calc(100dvh-64px)] sm:h-[calc(100dvh-76px)] sm:max-h-[calc(100dvh-76px)]'

  return (
    <>
      {/* Backdrop Scrim (Closes menu on tap outside) */}
      <div
        className={`xl:hidden fixed inset-0 ${topOffsetClass} bg-black/40 backdrop-blur-[2px] z-40 transition-opacity`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Mobile Drawer (100% solid, fully opaque warm-white background for crisp text contrast & readability) */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className={`xl:hidden fixed inset-x-0 ${topOffsetClass} ${heightClass} bg-[#F7FAF8] border-t border-[#0A5A42]/15 overflow-y-auto overscroll-contain z-50 p-6 flex flex-col justify-between shadow-2xl transition-all duration-300`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
      {/* Primary 5 Dedicated Landing Page Links (Zero accordions, zero dropdowns) */}
      <nav className="space-y-2">
        <div className="flex items-center justify-between pb-3 border-b border-[#E2EBE5] mb-2">
          <span className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider font-heading">
            Navigation Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-[#4F615A] hover:text-[#172B3A] active:scale-95"
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {primaryNavItems.map((item) => {
          const active = isLinkActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center justify-between py-3 px-3.5 rounded-lg text-sm font-semibold transition-colors ${
                active
                  ? 'bg-[#EAF3EC] text-[#1F5138] font-bold'
                  : 'text-[#172B3A] hover:bg-[#F8F8F2] hover:text-[#1F5138]'
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight size={14} className={active ? 'text-[#1F5138]' : 'text-[#CAD9D0]'} />
            </Link>
          )
        })}
      </nav>

      {/* Direct Mobile Quick Contact & Primary Booking Action */}
      <div className="pt-6 pb-2 border-t border-[#E2EBE5] mt-6">
        <div className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider mb-2.5">
          Direct Advisory Desk
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <a
            href={`tel:${companyDetails.phone}`}
            className="flex items-center gap-2 p-2.5 rounded-lg border border-[#CAD9D0] bg-[#F8F8F2] text-xs font-semibold text-[#172B3A] hover:border-[#1F5138] hover:text-[#1F5138] transition-colors"
            aria-label="Call Kreative Hertz"
          >
            <Phone size={14} className="text-[#1F5138] flex-shrink-0" />
            <span className="truncate">Call Advisor</span>
          </a>
          <a
            href={companyDetails.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2.5 rounded-lg border border-[#159568]/40 bg-[#EAF3EC] text-xs font-semibold text-[#1F5138] hover:border-[#1F5138] transition-colors"
            aria-label="WhatsApp Advisory Desk"
          >
            <MessageCircle size={14} className="text-[#159568] flex-shrink-0" />
            <span className="truncate">WhatsApp Desk</span>
          </a>
        </div>

        <Link
          href={headerBookingCta.href}
          onClick={onClose}
          className="btn-primary w-full justify-center text-sm py-3.5 group shadow-md"
        >
          <span>{headerBookingCta.label}</span>
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
    </>
  )
}
