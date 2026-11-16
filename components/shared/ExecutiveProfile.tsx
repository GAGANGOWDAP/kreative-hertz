import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '@/lib/assets'
import {
  Compass,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Sparkles
} from 'lucide-react'

export interface ExecutiveProfileProps {
  className?: string
  showAction?: boolean
}

/**
 * ExecutiveProfile Component
 * Premium executive identity component for Kreative Hertz.
 * Strictly non-AI, hand-crafted using Next.js, React, and Tailwind CSS.
 * Adheres to institutional financial advisory brand standards.
 */
export function ExecutiveProfile({ className = '', showAction = true }: ExecutiveProfileProps) {
  return (
    <div
      id="executive-profile"
      className={`relative scroll-mt-24 overflow-hidden rounded-2xl border border-[#CAD9D0] bg-[#F8F8F2] shadow-[0_12px_32px_-8px_rgba(20,44,62,0.08),0_4px_12px_-4px_rgba(10,90,66,0.04)] transition-all duration-300 hover:shadow-[0_16px_40px_-8px_rgba(20,44,62,0.12),0_6px_16px_-4px_rgba(10,90,66,0.06)] ${className}`}
    >
      {/* 1. TOP BESPOKE GOLD & FOREST GREEN ACCENT STRIPE */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#1F5138] via-[#C6A66B] to-[#172B3A]" />

      {/* 2. SUBTLE PURE CSS GEOMETRIC WATERMARK PATTERN OVERLAY */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(#C6A66B 1px, transparent 1px), radial-gradient(#1F5138 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
        aria-hidden="true"
      />

      <div className="relative p-6 sm:p-7 md:p-8">
        {/* 3. PROFILE HEADER */}
        <div className="flex items-center justify-between gap-2 pb-3.5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EAF3EC] px-3 py-1 border border-[#CAD9D0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1F5138]" />
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-[#1F5138]">
              Executive Profile
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4F615A]">
            <MapPin size={13} className="text-[#C6A66B] flex-shrink-0" />
            <span>Bengaluru, India</span>
          </div>
        </div>

        {/* Subtle Champagne-Gold Divider */}
        <div
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C6A66B]/50 to-transparent mb-5"
          aria-hidden="true"
        />

        {/* 4. PERSONAL IDENTITY SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5 mb-5">
          {/* Executive Crest Container */}
          <div className="relative flex-shrink-0 self-start sm:self-center">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-[#172B3A] via-[#0E3D2F] to-[#1F5138] p-[2px] shadow-md ring-1 ring-[#C6A66B]/40">
              <div className="h-full w-full rounded-[14px] bg-[#172B3A] flex items-center justify-center relative overflow-hidden">
                {/* Subtle inner ambient gold highlight */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(198,161,91,0.2),_transparent_70%)]" />
                <Image
                  src={getAssetPath('/logo-icon.png')}
                  alt="Kreative Hertz Crest"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover scale-125 relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Identity Details */}
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <h2 className="text-2xl sm:text-[26px] font-extrabold text-[#172B3A] tracking-tight font-heading leading-tight">
                Karthik R
              </h2>
              <span className="inline-flex items-center gap-1 rounded bg-[#C6A66B]/15 px-2 py-0.5 text-[10px] font-bold text-[#8C6D2C] uppercase tracking-wider">
                <Sparkles size={10} className="text-[#C6A66B]" />
                Fiduciary
              </span>
            </div>

            <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs sm:text-[13px] font-semibold text-[#1F5138]">
              <span>Wealth Architect</span>
              <span className="text-[#C6A66B] font-serif font-normal select-none">|</span>
              <span>Life Strategist</span>
            </div>

            <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[11px] text-[#4F615A]">
              <span className="font-semibold text-[#172B3A]">Kreative Hertz</span>
              <span className="text-[#C6A66B] select-none">•</span>
              <span className="font-mono text-[10px] tracking-wider text-[#1F5138] uppercase font-medium">
                Complexity 2 Simplicity
              </span>
            </div>
          </div>
        </div>

        {/* 5. PROFESSIONAL INTRODUCTION */}
        <div className="relative mb-5 rounded-xl bg-[#FFFFFF] p-4 sm:p-4.5 border border-[#CAD9D0] border-l-4 border-l-[#1F5138] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
          <p className="text-xs sm:text-[12.5px] text-[#26332D] leading-relaxed font-normal">
            Advising families, professionals, and students on financial gap diagnosis, insurance portfolio audits, long-term compounding discipline, and debt optimization.
          </p>
        </div>

        {/* 6. FRAMEWORK SECTION (TWO VISUALLY DISTINCT INFORMATION PANELS) */}
        <div className="space-y-3 mb-6">
          {/* Panel 1: PRIMARY FRAMEWORK */}
          <div className="rounded-xl bg-gradient-to-r from-[#EAF3EC] to-[#F2F7F4] border border-[#CAD9D0] p-3.5 transition-all duration-200 hover:border-[#1F5138]/50 shadow-sm">
            <div className="flex items-center justify-between gap-1 mb-2">
              <div className="flex items-center gap-1.5">
                <Compass size={14} className="text-[#1F5138] flex-shrink-0" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[#1F5138]">
                  Primary Framework
                </span>
              </div>
              <span className="text-[10px] text-[#4F615A] font-medium hidden sm:inline">
                Sequential Diagnostic Journey
              </span>
            </div>

            <div className="flex items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#172B3A]">
              <div className="flex-1 text-center py-1.5 px-2 bg-white rounded-lg border border-[#CAD9D0] shadow-2xs">
                Understand
              </div>
              <span className="text-[#C6A66B] font-bold text-xs select-none">→</span>
              <div className="flex-1 text-center py-1.5 px-2 bg-white rounded-lg border border-[#CAD9D0] shadow-2xs">
                Analyse
              </div>
              <span className="text-[#C6A66B] font-bold text-xs select-none">→</span>
              <div className="flex-1 text-center py-1.5 px-2 bg-white rounded-lg border border-[#CAD9D0] shadow-2xs">
                Strategise
              </div>
            </div>
          </div>

          {/* Panel 2: EDUCATIONAL CORE */}
          <div className="rounded-xl bg-gradient-to-r from-[#FFFDF9] to-[#FBF8F1] border border-[#C6A66B]/40 p-3.5 transition-all duration-200 hover:border-[#C6A66B]/80 shadow-sm">
            <div className="flex items-center justify-between gap-1 mb-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-[#C6A66B] flex-shrink-0" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.14em] text-[#172B3A]">
                  Educational Core
                </span>
              </div>
              <span className="text-[10px] text-[#4F615A] font-medium hidden sm:inline">
                Fiduciary Literacy Foundation
              </span>
            </div>

            <div className="flex items-center justify-between gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#172B3A]">
              <div className="flex-1 text-center py-1.5 px-2 bg-white rounded-lg border border-[#C6A66B]/30 shadow-2xs text-[#172B3A]">
                Mindset
              </div>
              <span className="text-[#1F5138] font-bold text-xs select-none">·</span>
              <div className="flex-1 text-center py-1.5 px-2 bg-white rounded-lg border border-[#C6A66B]/30 shadow-2xs text-[#172B3A]">
                Moral
              </div>
              <span className="text-[#1F5138] font-bold text-xs select-none">·</span>
              <div className="flex-1 text-center py-1.5 px-2 bg-white rounded-lg border border-[#C6A66B]/30 shadow-2xs text-[#172B3A]">
                Awareness
              </div>
            </div>
          </div>
        </div>

        {/* 7. EXECUTIVE FOOTER & VERIFICATION ACTION */}
        {showAction && (
          <div className="pt-3.5 border-t border-[#E2EBE5] flex flex-wrap items-center justify-between gap-2.5 text-xs">
            <div className="flex items-center gap-1.5 text-[11px] text-[#4F615A]">
              <ShieldCheck size={13} className="text-[#1F5138] flex-shrink-0" />
              <span>Independent Advisory • Founded June 2022</span>
            </div>

            <Link
              href="/book-session"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1F5138] hover:text-[#159568] transition-colors"
            >
              <span>Book Strategy Session</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
