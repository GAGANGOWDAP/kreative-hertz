'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ShieldCheck, AlertCircle, CheckCircle2, ArrowRight,
  TrendingUp, Wallet, Landmark, ChevronRight, ChevronLeft, HelpCircle
} from 'lucide-react'
import { gapAnalysisAreas } from '@/content'
import { SectionBadge } from '@/components/shared/SectionBadge'
import { getServiceIcon } from '@/components/shared/ServiceIcon'

export function FinancialGapAnalysisSection() {
  const [viewMode, setViewMode] = useState<'calculator' | 'framework'>('calculator')
  const [calcTab, setCalcTab] = useState<'inputs' | 'results'>('inputs')
  const [activeArea, setActiveArea] = useState(gapAnalysisAreas[0])

  // Interactive Assessment Parameters (Conservative Institutional Defaults)
  const [income, setIncome] = useState<number>(150000)
  const [expenses, setExpenses] = useState<number>(65000)
  const [existingCover, setExistingCover] = useState<number>(2500000)
  const [liabilities, setLiabilities] = useState<number>(3500000)
  const [investments, setInvestments] = useState<number>(1500000)
  const [currentAge, setCurrentAge] = useState<number>(32)
  const [retirementAge, setRetirementAge] = useState<number>(60)

  // Financial Calculations
  const monthlySurplus = Math.max(0, income - expenses)
  const savingsRate = income > 0 ? Math.min(100, Math.round((monthlySurplus / income) * 100)) : 0
  const expenseRatio = income > 0 ? Math.min(100, Math.round((expenses / income) * 100)) : 0

  const annualExpenses = expenses * 12
  const requiredLifeCover = (annualExpenses * 15) + liabilities
  const protectionGap = Math.max(0, requiredLifeCover - existingCover)
  const coveragePercent = requiredLifeCover > 0
    ? Math.min(100, Math.round((existingCover / requiredLifeCover) * 100))
    : 100

  const emergencyReserve = expenses * 6
  const yearsToRetirement = Math.max(1, retirementAge - currentAge)
  const recommendedSIP = Math.round(monthlySurplus * 0.5)

  // Currency Formatter
  const formatINR = (val: number): string => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(1)} Lakh`
    }
    return `₹${val.toLocaleString('en-IN')}`
  }

  const prefilledWhatsappMsg = encodeURIComponent(
    `Hello Karthik R, I ran the Financial Gap Analysis on the Kreative Hertz website. Monthly Income: ${formatINR(income)}, Expenses: ${formatINR(expenses)}, Protection Gap: ${formatINR(protectionGap)}. I would like to schedule a structured fiduciary review.`
  )

  return (
    <section className="section-institutional bg-[#F7FAF8] border-b border-[#E2EBE5] scroll-mt-28" id="gap-analysis">
      <div className="container">
        {/* Section Title Header */}
        <div className="section-title-wrap max-w-3xl mb-4 sm:mb-6">
          <SectionBadge>Diagnostic Stewardship</SectionBadge>
          <h2 className="h2 mb-2 sm:mb-3">Financial Gap Analysis</h2>
          <p className="text-xs sm:text-sm text-[#2B2A29]/75">
            Evaluate household income surplus, life protection shortfalls, emergency liquidity, and retirement compounding requirements against institutional wealth standards.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex rounded-xl bg-[#E8F3ED] p-1 mb-6 max-w-md border border-[#E2EBE5]">
          <button
            type="button"
            onClick={() => setViewMode('calculator')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center ${
              viewMode === 'calculator'
                ? 'bg-[#0A5A42] text-[#F7FAF8] shadow-xs'
                : 'text-[#2B2A29]/70 hover:text-[#142C3E]'
            }`}
          >
            01 · Diagnostic Gap Modeling
          </button>
          <button
            type="button"
            onClick={() => setViewMode('framework')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center ${
              viewMode === 'framework'
                ? 'bg-[#0A5A42] text-[#F7FAF8] shadow-xs'
                : 'text-[#2B2A29]/70 hover:text-[#142C3E]'
            }`}
          >
            02 · 5 Structural Audit Pillars
          </button>
        </div>

        {viewMode === 'calculator' ? (
          /* MODE 1: INTERACTIVE DIAGNOSTIC MODELING TOOL */
          <div>
            {/* Mobile / Tablet Step Switcher (< 1024px) for Single-Screen Comfort */}
            <div className="flex lg:hidden rounded-xl bg-[#E8F3ED] p-1 mb-4 max-w-sm border border-[#E2EBE5]">
              <button
                type="button"
                onClick={() => setCalcTab('inputs')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all text-center ${
                  calcTab === 'inputs'
                    ? 'bg-[#0A5A42] text-[#F7FAF8] shadow-xs'
                    : 'text-[#2B2A29]/70 hover:text-[#142C3E]'
                }`}
              >
                01 · Household Inputs
              </button>
              <button
                type="button"
                onClick={() => setCalcTab('results')}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all text-center ${
                  calcTab === 'results'
                    ? 'bg-[#0A5A42] text-[#F7FAF8] shadow-xs'
                    : 'text-[#2B2A29]/70 hover:text-[#142C3E]'
                }`}
              >
                02 · Diagnostic Results
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
              {/* Left Column: Financial Input Parameters */}
              <div className={`lg:col-span-5 bg-white rounded-2xl border border-[#E2EBE5] p-4 sm:p-5 shadow-[0_2px_12px_rgba(20,44,62,0.05)] ${
                calcTab === 'inputs' ? 'block' : 'hidden lg:block'
              }`}>
                <div className="flex items-center justify-between border-b border-[#E2EBE5] pb-2.5 mb-3">
                  <span className="text-[11px] font-bold text-[#0A5A42] uppercase tracking-wider block">
                    Household Parameters
                  </span>
                  <span className="text-[10px] text-[#2B2A29]/50 font-semibold uppercase tracking-wider">
                    Inputs (₹)
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* 1. Monthly Income */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-[#142C3E] mb-0.5">
                      <label htmlFor="input-income">Monthly Take-Home Income</label>
                      <span className="text-[#0A5A42] font-mono">{formatINR(income)}</span>
                    </div>
                    <input
                      id="input-income"
                      type="number"
                      step="5000"
                      min="10000"
                      value={income || ''}
                      onChange={(e) => setIncome(Math.max(0, Number(e.target.value)))}
                      className="w-full text-xs font-medium px-3 py-1.5 bg-white border border-[#CAD9D0] rounded-lg focus:border-[#0A5A42] focus:ring-1 focus:ring-[#0A5A42]/20 transition-all"
                      placeholder="e.g. 150000"
                    />
                    <p className="text-[10px] text-[#2B2A29]/60 mt-0.5">Net monthly salary or post-tax business distribution.</p>
                  </div>

                  {/* 2. Monthly Expenses */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-[#142C3E] mb-0.5">
                      <label htmlFor="input-expenses">Monthly Living Expenses</label>
                      <span className="text-[#0A5A42] font-mono">{formatINR(expenses)}</span>
                    </div>
                    <input
                      id="input-expenses"
                      type="number"
                      step="5000"
                      min="5000"
                      value={expenses || ''}
                      onChange={(e) => setExpenses(Math.max(0, Number(e.target.value)))}
                      className="w-full text-xs font-medium px-3 py-1.5 bg-white border border-[#CAD9D0] rounded-lg focus:border-[#0A5A42] focus:ring-1 focus:ring-[#0A5A42]/20 transition-all"
                      placeholder="e.g. 65000"
                    />
                    <p className="text-[10px] text-[#2B2A29]/60 mt-0.5">Rent/EMIs, utilities, groceries, school fees &amp; essentials.</p>
                  </div>

                  {/* 3. Outstanding Liabilities */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-[#142C3E] mb-0.5">
                      <label htmlFor="input-liabilities">Total Outstanding Liabilities / Loans</label>
                      <span className="text-[#0A5A42] font-mono">{formatINR(liabilities)}</span>
                    </div>
                    <input
                      id="input-liabilities"
                      type="number"
                      step="50000"
                      min="0"
                      value={liabilities || ''}
                      onChange={(e) => setLiabilities(Math.max(0, Number(e.target.value)))}
                      className="w-full text-xs font-medium px-3 py-1.5 bg-white border border-[#CAD9D0] rounded-lg focus:border-[#0A5A42] focus:ring-1 focus:ring-[#0A5A42]/20 transition-all"
                      placeholder="e.g. 3500000"
                    />
                    <p className="text-[10px] text-[#2B2A29]/60 mt-0.5">Home loans, vehicle loans, and commercial credit balances.</p>
                  </div>

                  {/* 4. Existing Life Insurance Cover */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-[#142C3E] mb-0.5">
                      <label htmlFor="input-cover">Current Life Insurance Cover (Sum Assured)</label>
                      <span className="text-[#0A5A42] font-mono">{formatINR(existingCover)}</span>
                    </div>
                    <input
                      id="input-cover"
                      type="number"
                      step="100000"
                      min="0"
                      value={existingCover || ''}
                      onChange={(e) => setExistingCover(Math.max(0, Number(e.target.value)))}
                      className="w-full text-xs font-medium px-3 py-1.5 bg-white border border-[#CAD9D0] rounded-lg focus:border-[#0A5A42] focus:ring-1 focus:ring-[#0A5A42]/20 transition-all"
                      placeholder="e.g. 2500000"
                    />
                    <p className="text-[10px] text-[#2B2A29]/60 mt-0.5">Combined sum assured across existing term and endowment plans.</p>
                  </div>

                  {/* 5. Existing Financial Investments */}
                  <div>
                    <div className="flex justify-between items-center text-xs font-bold text-[#142C3E] mb-0.5">
                      <label htmlFor="input-investments">Current Financial Investments</label>
                      <span className="text-[#0A5A42] font-mono">{formatINR(investments)}</span>
                    </div>
                    <input
                      id="input-investments"
                      type="number"
                      step="50000"
                      min="0"
                      value={investments || ''}
                      onChange={(e) => setInvestments(Math.max(0, Number(e.target.value)))}
                      className="w-full text-xs font-medium px-3 py-1.5 bg-white border border-[#CAD9D0] rounded-lg focus:border-[#0A5A42] focus:ring-1 focus:ring-[#0A5A42]/20 transition-all"
                      placeholder="e.g. 1500000"
                    />
                    <p className="text-[10px] text-[#2B2A29]/60 mt-0.5">Mutual funds, stocks, PF/NPS, FDs &amp; liquid savings.</p>
                  </div>

                  {/* 6. Current Age & Target Retirement */}
                  <div className="grid grid-cols-2 gap-2.5 pt-0.5">
                    <div>
                      <label htmlFor="input-age" className="block text-xs font-bold text-[#142C3E] mb-0.5">Current Age</label>
                      <input
                        id="input-age"
                        type="number"
                        min="18"
                        max="75"
                        value={currentAge || ''}
                        onChange={(e) => setCurrentAge(Math.min(75, Math.max(18, Number(e.target.value))))}
                        className="w-full text-xs font-medium px-3 py-1.5 bg-white border border-[#CAD9D0] rounded-lg focus:border-[#0A5A42] transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="input-ret-age" className="block text-xs font-bold text-[#142C3E] mb-0.5">Retirement Age</label>
                      <input
                        id="input-ret-age"
                        type="number"
                        min="40"
                        max="80"
                        value={retirementAge || ''}
                        onChange={(e) => setRetirementAge(Math.max(currentAge + 1, Number(e.target.value)))}
                        className="w-full text-xs font-medium px-3 py-1.5 bg-white border border-[#CAD9D0] rounded-lg focus:border-[#0A5A42] transition-all"
                      />
                    </div>
                  </div>

                  {/* Mobile Action to Advance to Results */}
                  <div className="pt-2 border-t border-[#E2EBE5] lg:hidden">
                    <button
                      type="button"
                      onClick={() => setCalcTab('results')}
                      className="btn-primary w-full justify-center text-xs py-2.5 rounded-xl flex items-center gap-1.5 shadow-xs"
                    >
                      <span>Review Calculated Gaps</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Calculated Results & Visualizations */}
              <div className={`lg:col-span-7 space-y-3 sm:space-y-3.5 ${
                calcTab === 'results' ? 'block' : 'hidden lg:block'
              }`}>
                {/* Mobile Back Button to edit inputs */}
                <div className="pb-1 lg:hidden">
                  <button
                    type="button"
                    onClick={() => setCalcTab('inputs')}
                    className="text-xs font-bold text-[#0A5A42] hover:underline inline-flex items-center gap-1"
                  >
                    <ChevronLeft size={14} />
                    <span>← Edit Household Parameters</span>
                  </button>
                </div>

                {/* Module 1: Cash Flow & Surplus Ratio */}
                <div className="bg-white rounded-2xl border border-[#E2EBE5] p-4 sm:p-5 shadow-[0_2px_12px_rgba(20,44,62,0.05)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-[#0A5A42] uppercase tracking-wider">
                      Monthly Cash Flow &amp; Surplus
                    </span>
                    <span className="text-xs font-bold text-[#142C3E]">
                      Savings Rate: <span className="text-[#11A778]">{savingsRate}%</span>
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-1.5">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-[#142C3E] font-heading">
                        {formatINR(monthlySurplus)}
                        <span className="text-xs font-normal text-[#2B2A29]/60 ml-1.5">/ month</span>
                      </div>
                      <div className="text-[10.5px] text-[#2B2A29]/70 mt-0.5">
                        Net investable capital after living expenditure.
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#2B2A29]/60 block">Monthly Inflow</span>
                      <strong className="text-xs text-[#142C3E] font-mono">{formatINR(income)}</strong>
                    </div>
                  </div>

                  {/* Comparative Ratio Bar */}
                  <div className="w-full h-2.5 rounded-full bg-[#E8F3ED] overflow-hidden flex mb-1.5">
                    <div
                      style={{ width: `${expenseRatio}%` }}
                      className="bg-[#142C3E]/80 transition-all duration-500"
                      title={`Expenses: ${expenseRatio}%`}
                    />
                    <div
                      style={{ width: `${savingsRate}%` }}
                      className="bg-[#11A778] transition-all duration-500"
                      title={`Surplus: ${savingsRate}%`}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[10.5px] text-[#2B2A29]/75 pt-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#142C3E]/80" />
                      <span>Living Expenses: <strong>{formatINR(expenses)}</strong> ({expenseRatio}%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#11A778]" />
                      <span>Investable Surplus: <strong>{formatINR(monthlySurplus)}</strong> ({savingsRate}%)</span>
                    </div>
                  </div>
                </div>

                {/* Module 2: Protection Adequacy Gap (Human Life Value - HLV) */}
                <div className="bg-white rounded-2xl border border-[#E2EBE5] p-4 sm:p-5 shadow-[0_2px_12px_rgba(20,44,62,0.05)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-[#0A5A42] uppercase tracking-wider">
                      Protection Adequacy Gap (Human Life Value)
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      protectionGap > 0
                        ? 'bg-[#142C3E] text-[#F7FAF8]'
                        : 'bg-[#E8F3ED] text-[#0A5A42]'
                    }`}>
                      {protectionGap > 0 ? `${coveragePercent}% Covered` : 'Fully Protected'}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-1.5">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-[#142C3E]">
                        {protectionGap > 0 ? (
                          <>
                            <span className="text-[#142C3E]">{formatINR(protectionGap)}</span>
                            <span className="text-xs font-bold text-[#0A5A42] ml-2">Shortfall</span>
                          </>
                        ) : (
                          <span className="text-[#11A778]">Zero Shortfall</span>
                        )}
                      </div>
                      <div className="text-[10.5px] text-[#2B2A29]/70 mt-0.5">
                        {protectionGap > 0
                          ? 'Dependents face a capital deficit if breadwinner income ceases unexpectedly.'
                          : 'Existing cover satisfies the 15x Human Life Value and liability benchmark.'}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#2B2A29]/60 block">Target Life Cover</span>
                      <strong className="text-xs text-[#142C3E] font-mono">{formatINR(requiredLifeCover)}</strong>
                    </div>
                  </div>

                  {/* Protection Gap Visual Progress Bar */}
                  <div className="w-full h-2.5 rounded-full bg-[#E8F3ED] overflow-hidden flex mb-1.5">
                    <div
                      style={{ width: `${coveragePercent}%` }}
                      className="bg-[#0A5A42] transition-all duration-500"
                      title={`Covered: ${coveragePercent}%`}
                    />
                    <div
                      style={{ width: `${100 - coveragePercent}%` }}
                      className="bg-[#11A778]/30 transition-all duration-500"
                      title={`Shortfall: ${100 - coveragePercent}%`}
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between text-[10.5px] text-[#2B2A29]/75 pt-0.5 gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0A5A42]" />
                      <span>Existing Life Cover: <strong>{formatINR(existingCover)}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#11A778]/50" />
                      <span>Benchmark Need (15x HLV + Debt): <strong>{formatINR(requiredLifeCover)}</strong></span>
                    </div>
                  </div>
                </div>

                {/* Module 3: Liquidity & Retirement Compounding Horizon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {/* Emergency Liquidity */}
                  <div className="p-3 sm:p-3.5 rounded-xl border border-[#E2EBE5] bg-white">
                    <span className="text-[10px] font-bold text-[#0A5A42] uppercase tracking-wider block mb-0.5">
                      Emergency Liquidity
                    </span>
                    <div className="text-lg sm:text-xl font-bold text-[#142C3E] font-heading mb-0.5">
                      {formatINR(emergencyReserve)}
                    </div>
                    <p className="text-[10.5px] text-[#2B2A29]/70 leading-normal">
                      6-month mandatory family living reserve parked in accessible liquid debt.
                    </p>
                  </div>

                  {/* Retirement Compounding Allocation */}
                  <div className="p-3 sm:p-3.5 rounded-xl border border-[#E2EBE5] bg-white">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-[10px] font-bold text-[#0A5A42] uppercase tracking-wider">
                        Compounding Target
                      </span>
                      <span className="text-[10px] font-bold text-[#11A778]">
                        {yearsToRetirement} Yrs to Age {retirementAge}
                      </span>
                    </div>
                    <div className="text-lg sm:text-xl font-bold text-[#142C3E] font-heading mb-0.5">
                      {formatINR(recommendedSIP)}
                      <span className="text-xs font-normal text-[#2B2A29]/60 ml-1">/ mo</span>
                    </div>
                    <p className="text-[10.5px] text-[#2B2A29]/70 leading-normal">
                      50% surplus allocated into disciplined equity SIPs &amp; pension compounding.
                    </p>
                  </div>
                </div>

                {/* Module 4: Consultation CTAs & Fiduciary Review */}
                <div className="pt-1">
                  <div className="flex flex-wrap gap-2.5 items-center">
                    <Link
                      href="/book-session"
                      className="btn-primary text-xs py-2.5 px-4 rounded-xl flex items-center gap-2 shadow-xs group/btn"
                    >
                      <span>Request a Fiduciary Gap Review</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>

                    <a
                      href={`https://wa.me/919482897253?text=${prefilledWhatsappMsg}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl border-2 border-[#0A5A42] text-[#0A5A42] hover:bg-[#E8F3ED] font-bold text-xs transition-all shadow-xs"
                    >
                      <span>Discuss via WhatsApp</span>
                    </a>
                  </div>

                  <p className="text-[10px] text-[#2B2A29]/55 mt-1.5 leading-normal">
                    *Illustrative estimates calculated using conservative 15x Human Life Value (HLV) multipliers, 6-month non-discretionary liquidity rules, and disciplined capital allocation standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* MODE 2: 5 STRUCTURAL AUDIT PILLARS */
          <div>
            {/* Mobile / Tablet Horizontal Pill Bar */}
            <div className="flex lg:hidden overflow-x-auto gap-2 pb-2 scrollbar-none mb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
              {gapAnalysisAreas.map((area) => {
                const isSelected = activeArea.id === area.id
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(area)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 ${
                      isSelected
                        ? 'bg-[#0A5A42] text-[#F7FAF8] border-[#0A5A42] shadow-xs'
                        : 'bg-white text-[#2B2A29]/70 border-[#CAD9D0] hover:border-[#0A5A42]'
                    }`}
                  >
                    <span>{area.title}</span>
                  </button>
                )
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Navigation List (Desktop) */}
              <div className="hidden lg:block lg:col-span-5 space-y-2">
                {gapAnalysisAreas.map((area) => {
                  const isSelected = activeArea.id === area.id
                  return (
                    <button
                      key={area.id}
                      onClick={() => setActiveArea(area)}
                      className={`w-full text-left p-3.5 xl:p-4 rounded-xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-white border-[#0A5A42] shadow-sm'
                          : 'bg-white/80 border-[#E2EBE5] hover:bg-white hover:border-[#0A5A42]/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            isSelected ? 'bg-[#0A5A42] text-white' : 'bg-[#E8F3ED] text-[#0A5A42]'
                          }`}
                        >
                          {getServiceIcon(area.icon)}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-[#142C3E]">{area.title}</div>
                          <div className="text-[11px] text-[#0A5A42] font-semibold">{area.subtitle}</div>
                        </div>
                      </div>
                      <ChevronRight size={16} className={isSelected ? 'text-[#0A5A42]' : 'text-[#8C9EA8]'} />
                    </button>
                  )
                })}
              </div>

              {/* Details Card */}
              <div className="lg:col-span-7">
                <div className="institutional-card p-5 sm:p-6 lg:p-7 bg-white rounded-2xl border border-[#E2EBE5] shadow-[0_2px_12px_rgba(20,44,62,0.05)]">
                  <div className="text-[10px] sm:text-[11px] font-bold text-[#0A5A42] uppercase tracking-wider mb-1">
                    {activeArea.subtitle}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#142C3E] mb-2 font-heading">
                    {activeArea.title}
                  </h3>
                  <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-4">
                    {activeArea.description}
                  </p>

                  <div className="border border-[#E2EBE5] rounded-xl p-3.5 sm:p-4 bg-[#F7FAF8] mb-5">
                    <div className="text-[11px] font-bold text-[#0A5A42] uppercase tracking-wider mb-2.5">
                      Verification Checkpoints
                    </div>
                    <div className="space-y-2">
                      {activeArea.checks.map((check, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#2B2A29]">
                          <CheckCircle2 size={13} className="text-[#11A778] flex-shrink-0 mt-0.5" />
                          <span>{check}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 items-center">
                    <Link href="/book-session" className="btn-primary text-xs py-2.5 px-4 rounded-xl">
                      <span>Request a Gap Analysis Review</span>
                      <ArrowRight size={13} />
                    </Link>
                    <a
                      href={`https://wa.me/919482897253?text=Hello%20Karthik%20R,%20I%20would%20like%20to%20discuss%20a%20gap%20review%20regarding%20${encodeURIComponent(activeArea.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary text-xs py-2.5 px-4 rounded-xl"
                    >
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

/* Life Strategist 3 Pillars Component */
