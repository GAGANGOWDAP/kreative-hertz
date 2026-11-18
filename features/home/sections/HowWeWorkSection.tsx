'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Compass, BarChart3, ShieldCheck, HeartHandshake,
  ArrowRight, CheckCircle2, ChevronRight, Target, Search
} from 'lucide-react'

export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const steps = [
    {
      step: '01',
      phase: 'PHASE 01',
      title: 'Understand',
      subtitle: 'Discovery & Needs Audit',
      desc: 'In-depth review of your dependents, cash flow, debt liabilities, and unique multi-decade objectives with zero sales pressure.',
      iconType: 'search'
    },
    {
      step: '02',
      phase: 'PHASE 02',
      title: 'Analyse',
      subtitle: 'Contract & Gap Evaluation',
      desc: 'Surgical audit of current policies, identifying hidden disease sub-limits, high interest rate drains, and capital allocation shortfalls.',
      iconType: 'chart'
    },
    {
      step: '03',
      phase: 'PHASE 03',
      title: 'Strategise',
      subtitle: 'Objective Roadmap Architecture',
      desc: 'Tailoring pure term covers, emergency cushions, low-cost mutual fund compounding, and debt optimization aligned to your life stage.',
      iconType: 'target'
    },
    {
      step: '04',
      phase: 'PHASE 04',
      title: 'Support',
      subtitle: 'Fiduciary Stewardship & Reviews',
      desc: 'Dedicated claim settlement advocacy, periodic rebalancing, and ongoing personal financial coaching as life circumstances evolve.',
      iconType: 'handshake'
    }
  ]

  const renderIcon = (type: string, className = 'w-5 h-5 xl:w-5.5 xl:h-5.5') => {
    switch (type) {
      case 'search':
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="10" cy="10" r="7" />
            <path d="m21 21-6-6" />
            <circle cx="10" cy="8" r="2.2" />
            <path d="M6.5 13.5a3.8 3.8 0 0 1 7 0" />
          </svg>
        )
      case 'chart':
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21h18" />
            <rect x="5" y="13" width="3" height="5" rx="0.5" />
            <rect x="10.5" y="9" width="3" height="9" rx="0.5" />
            <rect x="16" y="5" width="3" height="13" rx="0.5" />
            <path d="m4 11 6-6 4 4 6-6" />
            <path d="M16 3h4v4" />
          </svg>
        )
      case 'target':
        return <Target className={className} strokeWidth={2} />
      case 'handshake':
        return <HeartHandshake className={className} strokeWidth={2} />
      default:
        return <Search className={className} strokeWidth={2} />
    }
  }

  return (
    <section className="relative section-institutional bg-[#F7FAF8] py-4 sm:py-6 lg:py-4 xl:py-5 border-b border-[#E2EBE5] overflow-hidden" id="how-we-work">
      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-2.5 sm:mb-4 lg:mb-3 xl:mb-4">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-1">
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#159568]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#1F5138] uppercase font-mono">
              ADVISORY METHODOLOGY
            </span>
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#159568]" />
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-[26px] xl:text-[30px] font-extrabold text-[#172B3A] font-heading tracking-tight leading-tight">
            How We Work – The 4-Step Client Journey
          </h2>
          <p className="text-xs sm:text-sm text-[#4F615A] max-w-xl mx-auto mt-0.5 leading-normal">
            A structured approach to understand, plan and support your financial journey.
          </p>
          <div className="w-10 h-[2px] bg-[#159568] mx-auto mt-1 rounded-full" />
        </div>

        {/* =========================================================================
            DESKTOP: 4-STAGE ZIGZAG ROADMAP TIMELINE (lg and up)
            Fits completely within one screen viewport (no vertical scrolling)
            ========================================================================= */}
        <div className="hidden lg:block relative">
          {/* TOP ROW: Stage 1 (Understand) & Stage 3 (Strategise) */}
          <div className="grid grid-cols-4 gap-4 xl:gap-6 items-end">
            {/* Col 1: Stage 1 Card (Above Road) */}
            <div>
              <div
                onMouseEnter={() => setActiveStep(0)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-xl xl:rounded-2xl border p-3.5 xl:p-4.5 transition-all duration-300 relative group cursor-pointer ${activeStep === 0
                  ? 'border-[#159568] shadow-[0_12px_28px_rgba(21,149,104,0.14)] -translate-y-1'
                  : 'border-[#E2EBE5] shadow-[0_4px_16px_rgba(23,43,58,0.05)] hover:border-[#159568]/50 hover:shadow-[0_10px_24px_rgba(23,43,58,0.08)] hover:-translate-y-0.5'
                  }`}
              >
                <div className="flex items-center gap-3 xl:gap-3.5">
                  <div
                    className={`w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-[#1F5138] ring-4 ring-[#EAF3EC] text-white flex items-center justify-center flex-shrink-0 shadow-xs transition-transform duration-300 ${activeStep === 0 ? 'scale-105 bg-[#159568]' : 'group-hover:scale-105'
                      }`}
                  >
                    {renderIcon(steps[0].iconType, 'w-4.5 h-4.5 xl:w-5 xl:h-5')}
                  </div>
                  <div className="w-[1.5px] self-stretch bg-[#159568]/40 rounded-full flex-shrink-0 my-0.5" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] xl:text-[11px] font-bold tracking-widest text-[#159568] uppercase font-mono block leading-none">
                      {steps[0].phase}
                    </span>
                    <h3 className="text-base xl:text-lg font-bold text-[#172B3A] font-heading tracking-tight leading-snug mt-1 group-hover:text-[#1F5138] transition-colors">
                      {steps[0].title}
                    </h3>
                    <div className="text-[11px] xl:text-xs font-semibold text-[#159568] leading-snug mt-0.5">
                      {steps[0].subtitle}
                    </div>
                    <p className="text-[10.5px] xl:text-[11.5px] text-[#4F615A] leading-normal mt-1">
                      {steps[0].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 2: Empty Spacer for Zigzag Balance */}
            <div aria-hidden="true" />

            {/* Col 3: Stage 3 Card (Above Road) */}
            <div>
              <div
                onMouseEnter={() => setActiveStep(2)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-xl xl:rounded-2xl border p-3.5 xl:p-4.5 transition-all duration-300 relative group cursor-pointer ${activeStep === 2
                  ? 'border-[#159568] shadow-[0_12px_28px_rgba(21,149,104,0.14)] -translate-y-1'
                  : 'border-[#E2EBE5] shadow-[0_4px_16px_rgba(23,43,58,0.05)] hover:border-[#159568]/50 hover:shadow-[0_10px_24px_rgba(23,43,58,0.08)] hover:-translate-y-0.5'
                  }`}
              >
                <div className="flex items-center gap-3 xl:gap-3.5">
                  <div
                    className={`w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-[#1F5138] ring-4 ring-[#EAF3EC] text-white flex items-center justify-center flex-shrink-0 shadow-xs transition-transform duration-300 ${activeStep === 2 ? 'scale-105 bg-[#159568]' : 'group-hover:scale-105'
                      }`}
                  >
                    {renderIcon(steps[2].iconType, 'w-4.5 h-4.5 xl:w-5 xl:h-5')}
                  </div>
                  <div className="w-[1.5px] self-stretch bg-[#159568]/40 rounded-full flex-shrink-0 my-0.5" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] xl:text-[11px] font-bold tracking-widest text-[#159568] uppercase font-mono block leading-none">
                      {steps[2].phase}
                    </span>
                    <h3 className="text-base xl:text-lg font-bold text-[#172B3A] font-heading tracking-tight leading-snug mt-1 group-hover:text-[#1F5138] transition-colors">
                      {steps[2].title}
                    </h3>
                    <div className="text-[11px] xl:text-xs font-semibold text-[#159568] leading-snug mt-0.5">
                      {steps[2].subtitle}
                    </div>
                    <p className="text-[10.5px] xl:text-[11.5px] text-[#4F615A] leading-normal mt-1">
                      {steps[2].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 4: Empty Spacer for Zigzag Balance */}
            <div aria-hidden="true" />
          </div>

          {/* MIDDLE ROW: CONTINUOUS GENTLY CURVED ROADMAP & 4 NUMBERED MILESTONES */}
          <div className="relative w-full h-[82px] xl:h-[92px] my-0.5 select-none">
            <svg
              viewBox="0 0 1200 90"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
              fill="none"
            >
              {/* Secondary subtle emerald accent wave (terminates cleanly at Milestone 04) */}
              <path
                d="M 40,59 C 80,53 115,29 150,29 C 250,29 350,71 450,71 C 550,71 650,29 750,29 C 850,29 950,71 1050,71"
                stroke="#159568"
                strokeWidth="2.5"
                strokeOpacity="0.35"
                strokeLinecap="round"
              />

              {/* Main gently curved Forest Green road (Starts at left lead-in, Ends at Milestone 04) */}
              <path
                d="M 40,54 C 80,48 115,24 150,24 C 250,24 350,66 450,66 C 550,66 650,24 750,24 C 850,24 950,66 1050,66"
                stroke="#1F5138"
                strokeWidth="4.5"
                strokeLinecap="round"
              />

              {/* Connector Pin 1 (UP from Milestone 01 to Card 1) */}
              <g className="transition-all duration-300">
                <line
                  x1="150"
                  y1="7"
                  x2="150"
                  y2="0"
                  stroke={activeStep === 0 ? '#159568' : '#1F5138'}
                  strokeWidth="2.5"
                />
                <circle
                  cx="150"
                  cy="2"
                  r="3"
                  fill={activeStep === 0 ? '#159568' : '#1F5138'}
                />
              </g>

              {/* Connector Pin 2 (DOWN from Milestone 02 to Card 2) */}
              <g className="transition-all duration-300">
                <line
                  x1="450"
                  y1="83"
                  x2="450"
                  y2="90"
                  stroke={activeStep === 1 ? '#159568' : '#1F5138'}
                  strokeWidth="2.5"
                />
                <circle
                  cx="450"
                  cy="88"
                  r="3"
                  fill={activeStep === 1 ? '#159568' : '#1F5138'}
                />
              </g>

              {/* Connector Pin 3 (UP from Milestone 03 to Card 3) */}
              <g className="transition-all duration-300">
                <line
                  x1="750"
                  y1="7"
                  x2="750"
                  y2="0"
                  stroke={activeStep === 2 ? '#159568' : '#1F5138'}
                  strokeWidth="2.5"
                />
                <circle
                  cx="750"
                  cy="2"
                  r="3"
                  fill={activeStep === 2 ? '#159568' : '#1F5138'}
                />
              </g>

              {/* Connector Pin 4 (DOWN from Milestone 04 to Card 4 - Short, visible, aligned) */}
              <g className="transition-all duration-300">
                <line
                  x1="1050"
                  y1="83"
                  x2="1050"
                  y2="90"
                  stroke={activeStep === 3 ? '#159568' : '#1F5138'}
                  strokeWidth="2.5"
                />
                <circle
                  cx="1050"
                  cy="88"
                  r="3"
                  fill={activeStep === 3 ? '#159568' : '#1F5138'}
                />
              </g>

              {/* Milestone 01 (At Crest: x=150, y=24) */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveStep(0)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === 0 ? null : 0)}
              >
                <circle
                  cx="150"
                  cy="24"
                  r={activeStep === 0 ? '22' : '19'}
                  fill="#EAF3EC"
                  stroke={activeStep === 0 ? '#159568' : '#CAD9D0'}
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                />
                <circle
                  cx="150"
                  cy="24"
                  r={activeStep === 0 ? '16' : '14'}
                  fill={activeStep === 0 ? '#159568' : '#1F5138'}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <text
                  x="150"
                  y="28"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  01
                </text>
              </g>

              {/* Milestone 02 (At Trough: x=450, y=66) */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveStep(1)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
              >
                <circle
                  cx="450"
                  cy="66"
                  r={activeStep === 1 ? '22' : '19'}
                  fill="#EAF3EC"
                  stroke={activeStep === 1 ? '#159568' : '#CAD9D0'}
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                />
                <circle
                  cx="450"
                  cy="66"
                  r={activeStep === 1 ? '16' : '14'}
                  fill={activeStep === 1 ? '#159568' : '#1F5138'}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <text
                  x="450"
                  y="70"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  02
                </text>
              </g>

              {/* Milestone 03 (At Crest: x=750, y=24) */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveStep(2)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
              >
                <circle
                  cx="750"
                  cy="24"
                  r={activeStep === 2 ? '22' : '19'}
                  fill="#EAF3EC"
                  stroke={activeStep === 2 ? '#159568' : '#CAD9D0'}
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                />
                <circle
                  cx="750"
                  cy="24"
                  r={activeStep === 2 ? '16' : '14'}
                  fill={activeStep === 2 ? '#159568' : '#1F5138'}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <text
                  x="750"
                  y="28"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  03
                </text>
              </g>

              {/* Milestone 04 (FINAL ENDPOINT: x=1050, y=66) */}
              <g
                className="cursor-pointer"
                onMouseEnter={() => setActiveStep(3)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
              >
                <circle
                  cx="1050"
                  cy="66"
                  r={activeStep === 3 ? '22' : '19'}
                  fill="#EAF3EC"
                  stroke={activeStep === 3 ? '#159568' : '#CAD9D0'}
                  strokeWidth="1.5"
                  className="transition-all duration-300"
                />
                <circle
                  cx="1050"
                  cy="66"
                  r={activeStep === 3 ? '16' : '14'}
                  fill={activeStep === 3 ? '#159568' : '#1F5138'}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
                <text
                  x="1050"
                  y="70"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="11"
                  fontWeight="bold"
                  fontFamily="monospace"
                >
                  04
                </text>
              </g>
            </svg>
          </div>

          {/* BOTTOM ROW: Stage 2 (Analyse) & Stage 4 (Support) */}
          <div className="grid grid-cols-4 gap-4 xl:gap-6 items-start">
            {/* Col 1: Empty Spacer for Zigzag Balance */}
            <div aria-hidden="true" />

            {/* Col 2: Stage 2 Card (Below Road) */}
            <div>
              <div
                onMouseEnter={() => setActiveStep(1)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-xl xl:rounded-2xl border p-3.5 xl:p-4.5 transition-all duration-300 relative group cursor-pointer ${activeStep === 1
                  ? 'border-[#159568] shadow-[0_12px_28px_rgba(21,149,104,0.14)] -translate-y-1'
                  : 'border-[#E2EBE5] shadow-[0_4px_16px_rgba(23,43,58,0.05)] hover:border-[#159568]/50 hover:shadow-[0_10px_24px_rgba(23,43,58,0.08)] hover:-translate-y-0.5'
                  }`}
              >
                <div className="flex items-center gap-3 xl:gap-3.5">
                  <div
                    className={`w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-[#1F5138] ring-4 ring-[#EAF3EC] text-white flex items-center justify-center flex-shrink-0 shadow-xs transition-transform duration-300 ${activeStep === 1 ? 'scale-105 bg-[#159568]' : 'group-hover:scale-105'
                      }`}
                  >
                    {renderIcon(steps[1].iconType, 'w-4.5 h-4.5 xl:w-5 xl:h-5')}
                  </div>
                  <div className="w-[1.5px] self-stretch bg-[#159568]/40 rounded-full flex-shrink-0 my-0.5" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] xl:text-[11px] font-bold tracking-widest text-[#159568] uppercase font-mono block leading-none">
                      {steps[1].phase}
                    </span>
                    <h3 className="text-base xl:text-lg font-bold text-[#172B3A] font-heading tracking-tight leading-snug mt-1 group-hover:text-[#1F5138] transition-colors">
                      {steps[1].title}
                    </h3>
                    <div className="text-[11px] xl:text-xs font-semibold text-[#159568] leading-snug mt-0.5">
                      {steps[1].subtitle}
                    </div>
                    <p className="text-[10.5px] xl:text-[11.5px] text-[#4F615A] leading-normal mt-1">
                      {steps[1].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 3: Empty Spacer for Zigzag Balance */}
            <div aria-hidden="true" />

            {/* Col 4: Stage 4 Card (Directly Below Milestone 04 Endpoint) */}
            <div>
              <div
                onMouseEnter={() => setActiveStep(3)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-xl xl:rounded-2xl border p-3.5 xl:p-4.5 transition-all duration-300 relative group cursor-pointer ${activeStep === 3
                  ? 'border-[#159568] shadow-[0_12px_28px_rgba(21,149,104,0.14)] -translate-y-1'
                  : 'border-[#E2EBE5] shadow-[0_4px_16px_rgba(23,43,58,0.05)] hover:border-[#159568]/50 hover:shadow-[0_10px_24px_rgba(23,43,58,0.08)] hover:-translate-y-0.5'
                  }`}
              >
                <div className="flex items-center gap-3 xl:gap-3.5">
                  <div
                    className={`w-10 h-10 xl:w-11 xl:h-11 rounded-full bg-[#1F5138] ring-4 ring-[#EAF3EC] text-white flex items-center justify-center flex-shrink-0 shadow-xs transition-transform duration-300 ${activeStep === 3 ? 'scale-105 bg-[#159568]' : 'group-hover:scale-105'
                      }`}
                  >
                    {renderIcon(steps[3].iconType, 'w-4.5 h-4.5 xl:w-5 xl:h-5')}
                  </div>
                  <div className="w-[1.5px] self-stretch bg-[#159568]/40 rounded-full flex-shrink-0 my-0.5" />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] xl:text-[11px] font-bold tracking-widest text-[#159568] uppercase font-mono block leading-none">
                      {steps[3].phase}
                    </span>
                    <h3 className="text-base xl:text-lg font-bold text-[#172B3A] font-heading tracking-tight leading-snug mt-1 group-hover:text-[#1F5138] transition-colors">
                      {steps[3].title}
                    </h3>
                    <div className="text-[11px] xl:text-xs font-semibold text-[#159568] leading-snug mt-0.5">
                      {steps[3].subtitle}
                    </div>
                    <p className="text-[10.5px] xl:text-[11.5px] text-[#4F615A] leading-normal mt-1">
                      {steps[3].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET: CLEAN VERTICAL TIMELINE (Terminating at Milestone 04)
            ========================================================================= */}
        <div className="lg:hidden relative max-w-xl mx-auto pr-1.5 sm:pr-0">
          <div className="space-y-2.5 sm:space-y-4 relative">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              const isLast = idx === steps.length - 1

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="relative flex items-center gap-2 sm:gap-3.5 group"
                >
                  {/* Continuous Vertical Timeline Line Segment */}
                  {idx === 0 && (
                    <div className="absolute left-4 sm:left-[22px] -translate-x-1/2 top-1/2 -bottom-[11px] sm:-bottom-[17px] w-[2px] bg-[#1F5138] z-0 pointer-events-none" />
                  )}
                  {idx > 0 && !isLast && (
                    <div className="absolute left-4 sm:left-[22px] -translate-x-1/2 top-0 -bottom-[11px] sm:-bottom-[17px] w-[2px] bg-[#1F5138] z-0 pointer-events-none" />
                  )}
                  {isLast && (
                    <div className="absolute left-4 sm:left-[22px] -translate-x-1/2 top-0 h-1/2 w-[2px] bg-[#1F5138] z-0 pointer-events-none" />
                  )}

                  {/* Numbered Milestone Circle + Connector Pin */}
                  <div className="relative flex items-center flex-shrink-0 z-10">
                    <div
                      className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-mono font-bold text-xs sm:text-sm border-2 border-white shadow-md transition-all duration-300 cursor-pointer ${isActive
                        ? 'bg-[#159568] text-white ring-3 ring-[#159568]/30 scale-105'
                        : 'bg-[#1F5138] text-white ring-2 ring-[#EAF3EC] group-hover:bg-[#159568]'
                        }`}
                      onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                    >
                      {step.step}
                    </div>

                    {/* Horizontal Connector Pin aligned directly with Milestone */}
                    <div className="flex items-center -mr-1">
                      <div className={`w-2 sm:w-3.5 h-[2px] transition-colors ${isActive ? 'bg-[#159568]' : 'bg-[#1F5138]'}`} />
                      <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-colors ${isActive ? 'bg-[#159568]' : 'bg-[#1F5138]'}`} />
                    </div>
                  </div>

                  {/* Information Card to the right of the timeline */}
                  <div
                    className={`flex-1 min-w-0 bg-white rounded-xl sm:rounded-2xl border p-2.5 sm:p-4 shadow-sm transition-all duration-300 relative z-10 ${isActive
                      ? 'border-[#159568] shadow-md -translate-y-0.5'
                      : 'border-[#E2EBE5] group-hover:border-[#159568]/40'
                      }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div
                        className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-[#1F5138] ring-2 ring-[#EAF3EC] border border-white text-white flex items-center justify-center flex-shrink-0 transition-transform ${isActive ? 'scale-105 bg-[#159568]' : ''
                          }`}
                      >
                        {renderIcon(step.iconType, 'w-3.5 h-3.5 sm:w-4.5 sm:h-4.5')}
                      </div>
                      <div className="w-[1.5px] self-stretch bg-[#159568]/40 rounded-full flex-shrink-0 my-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] sm:text-[11px] font-bold tracking-widest text-[#159568] uppercase font-mono block leading-none">
                            {step.phase}
                          </span>
                          <span className="text-[10px] sm:text-[12px] font-semibold text-[#159568] leading-none">
                            · {step.subtitle}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-lg font-bold text-[#172B3A] font-heading tracking-tight leading-snug mt-0.5">
                          {step.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-[#4F615A] leading-normal mt-0.5 line-clamp-2">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
