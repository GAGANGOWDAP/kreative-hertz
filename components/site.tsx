'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import { usePathname } from 'next/navigation'
import {
  Shield, Heart, Car, Plane, Users, Briefcase, TrendingUp,
  Compass, Landmark, Wallet, Building, Home, Layers, Cpu,
  ArrowRight, ArrowLeft, CheckCircle2, Phone, Mail, Menu, X, ChevronDown,
  ChevronRight, ChevronLeft, Clock, AlertCircle, Check, MessageCircle, Search,
  HelpCircle, Filter, BarChart3, ShieldCheck, Target, HeartHandshake, BookOpen
} from 'lucide-react'
import {
  servicesData, strategyPillars, gapAnalysisAreas, personalFinanceAwareness,
  collegeProgramModules, communityEcosystem, articles, companyDetails,
  ServiceItem, KnowledgeArticle
} from '@/content'

// Re-export extracted layout components for 100% backward compatibility
export { BrandLogo } from './layout/BrandLogo'
export { Navbar } from './layout/Navbar'
export { MegaMenu } from './layout/MegaMenu'
export { MobileDrawer } from './layout/MobileDrawer'
export { Footer } from './layout/Footer'
export { PageShell } from './layout/PageShell'

// Re-export extracted shared components
import { SectionBadge } from './shared/SectionBadge'
import { ServiceIcon, getServiceIcon } from './shared/ServiceIcon'
import { InteractiveFaqList } from './shared/InteractiveFaqList'
import { FloatingContactWidget } from './shared/FloatingContactWidget'
import { ExecutiveProfile } from './shared/ExecutiveProfile'

export { SectionBadge, ServiceIcon, getServiceIcon, InteractiveFaqList, FloatingContactWidget, ExecutiveProfile }

// =========================================================================
// SECTION COMPONENTS (Preserved in site.tsx pending Phase 3 feature split)
// =========================================================================
export function BookSessionSection({ defaultCategory = 'Financial Gap Analysis' }: { defaultCategory?: string }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    sessionType: defaultCategory,
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    message: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sessionOptions = [
    'Financial Gap Analysis',
    'Life Insurance & Income Replacement Audit',
    'Health Insurance & Family Cover Planning',
    'Mutual Funds & Systematic Investment Strategy',
    'Home Loan / Balance Transfer Feasibility',
    'Business / MSME Working Capital Credit',
    'Institutional Program Inquiry',
    'Community Referral Inquiries'
  ]

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Full name is required.'

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) {
      errs.email = 'Email address is required.'
    } else if (!emailRegex.test(form.email)) {
      errs.email = 'Please provide a valid email format.'
    }

    const phoneClean = form.phone.replace(/[\s-]/g, '')
    const phoneRegex = /^(\+91)?[6-9]\d{9}$/
    if (!phoneClean) {
      errs.phone = 'Contact number is required.'
    } else if (!phoneRegex.test(phoneClean)) {
      errs.phone = 'Please provide a valid 10-digit Indian mobile number.'
    }

    if (!form.city.trim()) errs.city = 'City / Location is required.'

    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    // Build genuine mailto dispatch to fulfil@kreativehertz.in
    const mailtoSubject = encodeURIComponent(`Advisory Consultation Request: ${form.name} (${form.sessionType})`)
    const mailtoBody = encodeURIComponent(
      `ADVISORY CONSULTATION REQUEST\n` +
      `===================================\n\n` +
      `Client Name: ${form.name}\n` +
      `Email Address: ${form.email}\n` +
      `Contact Phone: ${form.phone}\n` +
      `Location / City: ${form.city}\n` +
      `Consultation Focus: ${form.sessionType}\n` +
      `Preferred Slot: ${form.preferredTime}\n` +
      `Context & Notes: ${form.message || 'None provided'}\n\n` +
      `Submitted through Kreative Hertz Online Advisory Portal.\n` +
      `Official Recipient: ${companyDetails.email}`
    )
    const mailtoUrl = `mailto:${companyDetails.email}?subject=${mailtoSubject}&body=${mailtoBody}`

    try {
      window.location.href = mailtoUrl
    } catch (err) {
      console.warn('Mailto dispatch error:', err)
    }

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 300)
  }

  if (isSubmitted) {
    const mailtoSubject = encodeURIComponent(`Advisory Consultation Request: ${form.name} (${form.sessionType})`)
    const mailtoBody = encodeURIComponent(
      `ADVISORY CONSULTATION REQUEST\n` +
      `===================================\n\n` +
      `Client Name: ${form.name}\n` +
      `Email Address: ${form.email}\n` +
      `Contact Phone: ${form.phone}\n` +
      `Location / City: ${form.city}\n` +
      `Consultation Focus: ${form.sessionType}\n` +
      `Preferred Slot: ${form.preferredTime}\n` +
      `Context & Notes: ${form.message || 'None provided'}\n\n` +
      `Submitted through Kreative Hertz Online Advisory Portal.`
    )
    const directMailtoUrl = `mailto:${companyDetails.email}?subject=${mailtoSubject}&body=${mailtoBody}`

    const whatsappText = encodeURIComponent(
      `Hello Karthik (Kreative Hertz),\n\nI have submitted an advisory consultation inquiry:\n- Name: ${form.name}\n- Focus: ${form.sessionType}\n- Location: ${form.city}\n- Preferred Slot: ${form.preferredTime}\n\nKindly confirm available schedule.`
    )
    const directWhatsappUrl = `https://wa.me/919482897253?text=${whatsappText}`

    return (
      <div className="institutional-card p-8 border-[#159568] text-center bg-white">
        <div className="w-14 h-14 rounded-full bg-[#EAF3EC] border border-[#1F5138]/30 flex items-center justify-center mx-auto mb-4 text-[#1F5138]">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-xl font-bold text-[#172B3A] mb-2 font-heading">Consultation Request Compiled</h3>
        <p className="text-sm text-[#4F615A] max-w-md mx-auto mb-5">
          Thank you, <strong>{form.name}</strong>. Your consultation inquiry for <strong>{form.sessionType}</strong> is addressed directly to <strong>{companyDetails.email}</strong>.
        </p>

        <div className="p-4 rounded-xl bg-[#EAF3EC] border border-[#CAD9D0] text-xs text-[#172B3A] max-w-md mx-auto mb-6 text-left space-y-1.5">
          <div className="font-bold text-[#1F5138] flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
            <span>Inquiry Summary</span>
          </div>
          <div className="text-[12px] text-[#26332D]">
            <div><strong>Client:</strong> {form.name} ({form.phone})</div>
            <div><strong>Focus Area:</strong> {form.sessionType}</div>
            <div><strong>Slot:</strong> {form.city} • {form.preferredTime}</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
          <a
            href={directMailtoUrl}
            className="btn-primary text-xs py-3 px-5 flex-1 justify-center shadow-sm"
          >
            <span>Open Email Client</span>
          </a>

          <a
            href={directWhatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-xs py-3 px-5 flex-1 justify-center"
          >
            <span>Confirm via WhatsApp</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false)
            setForm({
              name: '',
              email: '',
              phone: '',
              city: '',
              sessionType: defaultCategory,
              preferredTime: 'Morning (10:00 AM - 1:00 PM)',
              message: ''
            })
          }}
          className="mt-6 text-xs text-[#4F615A] hover:text-[#1F5138] underline transition-colors block mx-auto"
        >
          Submit another inquiry or update details
        </button>
      </div>
    )
  }

  return (
    <div className="institutional-card p-4 sm:p-6 md:p-8">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3 sm:mb-5">
          <h3 className="text-lg sm:text-xl font-bold text-[#172B3A] mb-0.5 sm:mb-1 font-heading">
            Request an Advisory Consultation
          </h3>
          <p className="text-[11.5px] sm:text-xs text-[#4F615A]">
            Complete the form below to coordinate a confidential strategy discussion with Karthik R.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-2.5 sm:mb-4">
          <div>
            <label htmlFor="fullName" className="form-label text-[11px] sm:text-xs">Full Name *</label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Ramesh Sharma"
              className={`form-control-input py-1.5 sm:py-2 text-xs ${errors.name ? 'border-red-500' : ''}`}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-[10px] sm:text-xs text-red-600 mt-0.5 flex items-center gap-1"><AlertCircle size={11} /> {errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="form-label text-[11px] sm:text-xs">Mobile Number *</label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="+91 98765 43210"
              className={`form-control-input py-1.5 sm:py-2 text-xs ${errors.phone ? 'border-red-500' : ''}`}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <p className="text-[10px] sm:text-xs text-red-600 mt-0.5 flex items-center gap-1"><AlertCircle size={11} /> {errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-2.5 sm:mb-4">
          <div>
            <label htmlFor="emailAddress" className="form-label text-[11px] sm:text-xs">Email Address *</label>
            <input
              id="emailAddress"
              type="email"
              placeholder="name@example.com"
              className={`form-control-input py-1.5 sm:py-2 text-xs ${errors.email ? 'border-red-500' : ''}`}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-[10px] sm:text-xs text-red-600 mt-0.5 flex items-center gap-1"><AlertCircle size={11} /> {errors.email}</p>}
          </div>

          <div>
            <label htmlFor="cityLocation" className="form-label text-[11px] sm:text-xs">City / Location *</label>
            <input
              id="cityLocation"
              type="text"
              placeholder="e.g. Bengaluru"
              className={`form-control-input py-1.5 sm:py-2 text-xs ${errors.city ? 'border-red-500' : ''}`}
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            {errors.city && <p className="text-[10px] sm:text-xs text-red-600 mt-0.5 flex items-center gap-1"><AlertCircle size={11} /> {errors.city}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-2.5 sm:mb-4">
          <div>
            <label htmlFor="sessionCategory" className="form-label text-[11px] sm:text-xs">Consultation Focus *</label>
            <select
              id="sessionCategory"
              className="form-control-input py-1.5 sm:py-2 text-xs bg-white"
              value={form.sessionType}
              onChange={(e) => setForm({ ...form, sessionType: e.target.value })}
            >
              {sessionOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="preferredSlot" className="form-label text-[11px] sm:text-xs">Preferred Time Slot</label>
            <select
              id="preferredSlot"
              className="form-control-input py-1.5 sm:py-2 text-xs bg-white"
              value={form.preferredTime}
              onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
            >
              <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
              <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
              <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
              <option value="Saturday Slot">Saturday Slot</option>
            </select>
          </div>
        </div>

        <div className="mb-3 sm:mb-4">
          <label htmlFor="userContext" className="form-label text-[11px] sm:text-xs">Context / Relevant Notes (Optional)</label>
          <textarea
            id="userContext"
            rows={2}
            placeholder="Share details regarding ongoing policies, loan requirements, or objectives..."
            className="form-control-input py-1.5 sm:py-2 text-xs"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center text-xs sm:text-sm py-2.5 sm:py-3"
        >
          {isSubmitting ? 'Formatting Request...' : 'Submit Consultation Request'}
        </button>

        <p className="text-[10px] sm:text-[11px] text-[#4F615A] text-center mt-2 sm:mt-3">
          Fiduciary Standard. Disclosed information is handled strictly for advisory coordination.
        </p>
      </form>
    </div>
  )
}

/* Visitor Requirement Selector (4 Clear Strategic Pathways with Photography & Single Screen Snap) */
export function VisitorRequirementSelector() {
  const [activeCard, setActiveCard] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const pathways = [
    {
      id: '01',
      code: '01 · PROTECTION',
      title: 'Protect My Family',
      tagline: 'Risk & Insurance Solutions',
      description: 'Pure term life protection, comprehensive family healthcare safeguards, and critical illness risk management.',
      image: '/pathways/pathway-protect-family.jpg',
      actionText: 'Explore Insurance Solutions',
      link: '/services/insurance',
      highlights: ['Pure Term Life', 'Health & Critical Illness', 'Auto & Travel']
    },
    {
      id: '02',
      code: '02 · WEALTH',
      title: 'Plan My Finances',
      tagline: 'Wealth & Investment Strategy',
      description: 'Disciplined compounding through mutual fund SIPs, NPS retirement accounts, and risk-adjusted fixed income.',
      image: '/pathways/pathway-plan-finances.jpg',
      actionText: 'Explore Wealth Planning',
      link: '/services/investments',
      highlights: ['Mutual Funds & SIP', 'NPS Pension', 'Bonds & Fixed Income']
    },
    {
      id: '03',
      code: '03 · PROPERTY',
      title: 'Explore Property',
      tagline: 'Real Estate & Credit Financing',
      description: 'Competitive home loan origination, balance transfer refinancing, and verified residential property acquisitions.',
      image: '/pathways/pathway-explore-property.jpg',
      actionText: 'Explore Property & Loans',
      link: '/services/real-estate',
      highlights: ['Home Loans', 'Balance Transfer Hack', 'Residential Plots']
    },
    {
      id: '04',
      code: '04 · STRATEGY',
      title: 'Develop Myself',
      tagline: 'Life Strategist Curriculum',
      description: 'Personal finance literacy, debt management discipline, and moral wealth frameworks for lasting family success.',
      image: '/pathways/pathway-develop-myself.jpg',
      actionText: 'Explore Life Strategy',
      link: '/life-strategist',
      highlights: ['Mindset · Moral · Awareness', 'College Programs', '7 Literacy Pillars']
    }
  ]

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const cardWidth = scrollRef.current.offsetWidth * 0.82
      const index = Math.round(scrollLeft / cardWidth)
      setActiveCard(Math.min(Math.max(index, 0), pathways.length - 1))
    }
  }

  const scrollToIndex = (idx: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.82
      scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: 'smooth' })
      setActiveCard(idx)
    }
  }

  return (
    <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
      <div className="container">
        <div className="section-title-wrap max-w-3xl mb-4 sm:mb-6">
          <SectionBadge>Requirement Pathways</SectionBadge>
          <h2 className="h2 mb-2 sm:mb-3">How Can We Help You Today?</h2>
          <p className="text-xs sm:text-sm text-[#2B2A29]/75">
            Select your immediate objective to discover relevant solutions, transparent audits, and structured advisory pathways.
          </p>
        </div>

        {/* Responsive Layout: Single-row Grid on Desktop, Smooth Touch-Snap Carousel on Mobile/Tablet */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex lg:grid lg:grid-cols-4 gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory pb-3 lg:pb-0 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
        >
          {pathways.map((pathway) => (
            <Link
              key={pathway.id}
              href={pathway.link}
              className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-center lg:shrink group flex flex-col bg-white rounded-2xl border border-[#E2EBE5] shadow-[0_2px_12px_rgba(20,44,62,0.05)] hover:shadow-[0_16px_36px_rgba(20,44,62,0.12)] hover:border-[#0A5A42]/35 transition-all duration-300 overflow-hidden hover:-translate-y-1 h-full"
            >
              {/* Top: Tailored Authentic Photography */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#E8F3ED]">
                <Image
                  src={getAssetPath(pathway.image)}
                  alt={pathway.title}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 group-hover:brightness-[1.03] transition-all duration-500 ease-out"
                />
                {/* Architectural gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#142C3E]/45 via-transparent to-transparent pointer-events-none" />

                {/* Editorial Pillar Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#142C3E]/85 backdrop-blur-md text-[10px] font-bold tracking-wider text-[#F7FAF8] uppercase border border-white/15 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                    {pathway.code}
                  </span>
                </div>
              </div>

              {/* Bottom: Card Body Details */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <span className="text-[11px] font-bold text-[#0A5A42] uppercase tracking-wider block mb-1">
                    {pathway.tagline}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#142C3E] mb-1.5 group-hover:text-[#0A5A42] transition-colors font-heading leading-snug">
                    {pathway.title}
                  </h3>
                  <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3.5 line-clamp-2">
                    {pathway.description}
                  </p>
                  <div className="space-y-1.5 mb-4">
                    {pathway.highlights.map((h, i) => (
                      <div key={i} className="text-[11.5px] text-[#2B2A29] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] shrink-0" />
                        <span className="font-medium text-[#2B2A29]/90">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Directing Action CTA */}
                <div className="border-t border-[#E2EBE5] pt-3.5 mt-auto flex items-center justify-between text-xs font-bold text-[#0A5A42] group-hover:text-[#11A778] transition-colors">
                  <span>{pathway.actionText}</span>
                  <ArrowRight size={14} className="text-[#11A778] group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet Swipe Indicators */}
        <div className="flex lg:hidden items-center justify-center gap-2 mt-3">
          {pathways.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeCard === i ? 'w-6 bg-[#0A5A42]' : 'w-2 bg-[#CAD9D0]'
                }`}
              aria-label={`Go to pathway card ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* How We Work Section (4-Step Customer Journey - Refined Zigzag Roadmap Timeline) */
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

const SERVICE_IMAGES: Record<string, string> = {
  'life-insurance': '/services/life-insurance.jpg',
  'health-insurance': '/services/health-insurance.jpg',
  'motor-insurance': '/services/motor-insurance.jpg',
  'travel-insurance': '/services/travel-insurance.jpg',
  'business-insurance': '/services/business-insurance.jpg',
  'mutual-funds': '/services/mutual-funds.jpg',
  'financial-planning': '/services/financial-planning.jpg',
  'retirement-planning': '/services/retirement-planning.jpg',
  'child-education-fund': '/services/child-education-fund.jpg',
  'home-loans': '/services/home-loans.jpg',
  'personal-loans': '/services/personal-loans.jpg',
  'business-loans': '/services/business-loans.jpg',
  'loan-against-property': '/services/loan-against-property.jpg',
  'residential-property': '/services/residential-property.jpg',
  'investment-property': '/services/investment-property.jpg',
}

/* Filterable & Searchable 15 Services Directory (Premium Institutional Advisory Layout) */
export function ServicesExplorer({ initialCategory = 'All Services' }: { initialCategory?: string }) {
  const categories = [
    { label: 'All Services', count: 15 },
    { label: 'Insurance', count: 5 },
    { label: 'Investments', count: 4 },
    { label: 'Loans', count: 4 },
    { label: 'Real Estate', count: 2 }
  ] as const

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const filtered = servicesData.filter((service) => {
    const normActive = activeCategory.toLowerCase()
    const matchesCategory =
      activeCategory === 'All Services' ||
      service.category.toLowerCase() === normActive ||
      (normActive.includes('invest') && (service.category === 'Investments' || service.category.includes('Invest'))) ||
      (normActive.includes('loan') && (service.category === 'Loans' || service.category.includes('Loan'))) ||
      (normActive.includes('insur') && (service.category === 'Insurance' || service.category.includes('Insur'))) ||
      (normActive.includes('real') && (service.category === 'Real Estate' || service.category.includes('Real')))
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch =
      !query ||
      service.title.toLowerCase().includes(query) ||
      service.shortDesc.toLowerCase().includes(query) ||
      service.highlights.some((h) => h.toLowerCase().includes(query)) ||
      service.category.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  const resetFilters = () => {
    setActiveCategory('All Services')
    setSearchQuery('')
    if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  }

  const isFiltered = activeCategory !== 'All Services' || searchQuery.trim() !== ''

  const handleCategorySelect = (catLabel: string) => {
    setActiveCategory(catLabel)
    if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' })
  }

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const clientWidth = carouselRef.current.clientWidth
      const scrollAmount = clientWidth > 1024 ? clientWidth * 0.9 : clientWidth * 0.85
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div>
      {/* Search and Category Control Bar */}
      <div className="mb-3 sm:mb-4 space-y-2.5">
        {/* Search Input */}
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#0A5A42]">
            <Search size={14} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by service, category or keyword..."
            className="form-control-input pl-9 pr-8 text-xs py-2 w-full bg-white border-[#CAD9D0] focus:border-[#0A5A42] focus:ring-1 focus:ring-[#0A5A42]/20 rounded-xl transition-all"
            aria-label="Search financial services"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#2B2A29]/50 hover:text-[#142C3E]"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Selector Tabs & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-[#E2EBE5] pb-2.5">
          <div className="flex overflow-x-auto sm:flex-wrap gap-1.5 sm:gap-2 scrollbar-none pb-0.5 max-w-full" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.label}
                role="tab"
                aria-selected={activeCategory === cat.label}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  activeCategory === cat.label
                    ? 'bg-[#0A5A42] text-[#F7FAF8] border-[#0A5A42] shadow-xs'
                    : 'bg-white text-[#2B2A29]/70 border-[#CAD9D0] hover:border-[#0A5A42] hover:text-[#0A5A42]'
                }`}
                onClick={() => handleCategorySelect(cat.label)}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10.5px] px-1.5 py-0.2 rounded-full font-bold ${
                    activeCategory === cat.label
                      ? 'bg-white/20 text-[#F7FAF8]'
                      : 'bg-[#E8F3ED] text-[#0A5A42]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="text-xs text-[#2B2A29]/70 flex items-center gap-2">
            <span>
              Showing <strong className="text-[#142C3E]">{filtered.length}</strong> of 15 services
            </span>
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-[#0A5A42] hover:text-[#11A778] hover:underline transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="institutional-card p-8 text-center max-w-md mx-auto my-6 bg-white rounded-2xl border border-[#E2EBE5]">
          <div className="w-10 h-10 rounded-full bg-[#E8F3ED] flex items-center justify-center mx-auto mb-2 text-[#0A5A42]">
            <Search size={20} />
          </div>
          <h3 className="text-sm font-bold text-[#142C3E] mb-1 font-heading">No services found</h3>
          <p className="text-xs text-[#2B2A29]/75 mb-3.5">
            No financial services matched &ldquo;{searchQuery}&rdquo; within &ldquo;{activeCategory}&rdquo;.
          </p>
          <button
            onClick={resetFilters}
            className="btn-primary text-xs py-2 px-4 mx-auto rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* Single-Screen Horizontal Snap Carousel: 3 visible on Desktop, 2 on Tablet, 1 on Mobile */
        <div>
          <div
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-6 pb-2 pt-1 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0"
          >
            {filtered.map((service) => {
              const imageSrc = SERVICE_IMAGES[service.id] || `/services/${service.id}.jpg`
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="w-[82vw] sm:w-[320px] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center lg:snap-start group flex flex-col bg-white rounded-2xl border border-[#E2EBE5] shadow-[0_2px_12px_rgba(20,44,62,0.05)] hover:shadow-[0_16px_36px_rgba(20,44,62,0.12)] hover:border-[#0A5A42]/35 transition-all duration-300 overflow-hidden hover:-translate-y-1 h-full"
                >
                  {/* Top: Landscape Photography with Editorial Category Identifier */}
                  <div className="relative aspect-[16/8.5] sm:aspect-[16/9] w-full overflow-hidden bg-[#E8F3ED]">
                    <Image
                      src={getAssetPath(imageSrc)}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 group-hover:brightness-[1.03] transition-all duration-500 ease-out"
                    />
                    {/* Architectural gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#142C3E]/55 via-transparent to-transparent pointer-events-none" />

                    {/* Category Identifier Pill */}
                    <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#142C3E]/85 backdrop-blur-md text-[10px] font-bold tracking-wider text-[#F7FAF8] uppercase border border-white/20 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Card Content */}
                  <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between bg-white">
                    <div>
                      {/* Header: Icon Badge + Service Title */}
                      <div className="flex items-start gap-2 mb-1.5">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#E8F3ED] text-[#0A5A42] flex items-center justify-center shrink-0 group-hover:bg-[#0A5A42] group-hover:text-white transition-colors duration-300 shadow-xs mt-0.5">
                          {getServiceIcon(service.iconType)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-bold text-[#142C3E] leading-snug group-hover:text-[#0A5A42] transition-colors font-heading line-clamp-2">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {/* Short readable description */}
                      <p className="text-xs text-[#2B2A29]/75 leading-relaxed line-clamp-2 mb-2 sm:mb-2.5">
                        {service.shortDesc}
                      </p>

                      {/* Editorial Capability Micro-tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2.5 sm:mb-3">
                        {service.highlights.slice(0, 2).map((h, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] sm:text-[10.5px] font-medium text-[#0A5A42] bg-[#E8F3ED] px-2 py-0.5 rounded border border-[#0A5A42]/10"
                          >
                            <span className="w-1 h-1 rounded-full bg-[#11A778]" />
                            <span className="truncate max-w-[125px] sm:max-w-[145px]">{h}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Clear "View Details" Navigation CTA */}
                    <div className="mt-auto pt-2.5 border-t border-[#E2EBE5] flex items-center justify-between text-xs font-bold text-[#0A5A42] group-hover:text-[#11A778] transition-colors">
                      <span className="inline-flex items-center gap-1.5">
                        <span>View Details</span>
                        <ArrowRight size={13} className="text-[#11A778] group-hover:translate-x-1.5 transition-transform duration-200" />
                      </span>
                      <span className="text-[10px] font-bold text-[#142C3E]/50 tracking-wider uppercase">
                        Advisory
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Carousel Navigation Bar (Prev / Next Arrows + Counter) */}
          <div className="flex items-center justify-between mt-3.5 pt-2.5 border-t border-[#E2EBE5]">
            <span className="text-xs text-[#2B2A29]/70">
              Swipe or click arrows to view all <strong className="text-[#142C3E]">{filtered.length}</strong> {activeCategory}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollCarousel('left')}
                disabled={!canScrollLeft}
                aria-label="Previous services"
                className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center hover:bg-[#0A5A42] hover:text-white hover:border-[#0A5A42] disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollCarousel('right')}
                disabled={!canScrollRight}
                aria-label="Next services"
                className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center hover:bg-[#0A5A42] hover:text-white hover:border-[#0A5A42] disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

/* Searchable & Filterable Knowledge Hub Explorer */
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
export function StrategyExplorer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {strategyPillars.map((p) => (
        <div key={p.id} id={p.id} className="institutional-card p-6 flex flex-col justify-between scroll-mt-28">
          <div>
            <div className="text-xs font-mono font-bold text-[#1F5138] mb-1">{p.badge}</div>
            <h3 className="text-xl font-bold text-[#172B3A] mb-1">{p.title}</h3>
            <div className="text-xs font-semibold text-[#1F5138] mb-3">{p.subtitle}</div>
            <p className="text-xs text-[#4F615A] leading-relaxed mb-4">{p.desc}</p>
            <ul className="space-y-2 text-xs text-[#26332D]">
              {p.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check size={14} className="text-[#159568] flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

/* Real Estate Section (Single-Screen with Mobile Tab/Grid Switch) */
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
export function CollegeProgramsSection() {
  return (
    <section className="section-institutional bg-[#FFFFFF] border-t border-b border-[#E2EBE5] scroll-mt-28" id="college-programs">
      <div className="container">
        <div className="section-title-wrap max-w-3xl">
          <SectionBadge>Educational Curriculum</SectionBadge>
          <h2 className="h2 mb-3">Institutional Personal Finance Programs</h2>
          <p className="text-sm text-[#4F615A]">
            A structured 30–40 hour curriculum designed for universities, business schools, and degree institutions to prepare students for real-world personal finance management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {collegeProgramModules.map((mod, idx) => (
            <div key={mod.id} className="institutional-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono font-bold text-[#1F5138]">Module 0{idx + 1}</span>
                  <span className="text-[#4F615A] font-semibold">{mod.hours}</span>
                </div>
                <h4 className="text-base font-bold text-[#172B3A] mb-3 leading-snug">{mod.title}</h4>
                <ul className="space-y-2 text-xs text-[#4F615A]">
                  {mod.topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#1F5138] font-bold">•</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary text-xs py-3 px-6">
            <span>Inquire About Institutional Workshops</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* Community Section */
export function CommunityReferEarnSection() {
  return (
    <section className="section-institutional bg-[#EAF3EC] scroll-mt-24" id="refer-earn">
      <div className="container">
        <div className="section-title-wrap max-w-3xl">
          <SectionBadge>Community Ecosystem</SectionBadge>
          <h2 className="h2 mb-3">Refer & Earn: Parallel Income Framework</h2>
          <p className="text-sm text-[#4F615A]">
            Introduce colleagues and friends to transparent financial advisory services while generating an ethical secondary income channel under clear compliance terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityEcosystem.map((item, idx) => (
            <div key={idx} className="institutional-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider block mb-2">
                  {item.role}
                </span>
                <h4 className="text-base font-bold text-[#172B3A] mb-2">{item.title}</h4>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-4">{item.desc}</p>
              </div>
              <div className="border-t border-[#E2EBE5] pt-3 text-[11px] font-semibold text-[#1F5138]">
                Regulatory-compliant protocol
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Two Disciplines Overview (Enhanced Editorial Presentation with Authentic Photography) */
export function TwoDisciplinesOverview() {
  const [activeTab, setActiveTab] = useState<'wealth' | 'life'>('wealth')

  const disciplines = [
    {
      id: 'wealth',
      badge: 'DISCIPLINE 01 · WEALTH ARCHITECT',
      title: 'WEALTH ARCHITECT',
      tagline: 'Diagnostic Architecture & Fiduciary Execution',
      motto: ['Understand', 'Analyse', 'Strategise'],
      description: 'Evaluating individual financial requirements, auditing existing insurance and investment contracts, identifying critical liabilities, and structuring goal-aligned wealth solutions.',
      image: '/images/hero-architecture.jpg',
      link: '/wealth-architect',
      ctaText: 'Explore Wealth Architect Directory',
      isPrimaryCta: true,
      capabilities: [
        {
          title: 'Structured Planning',
          subtitle: 'Holistic wealth creation & cashflow engineering'
        },
        {
          title: 'Portfolio Strategy',
          subtitle: 'Disciplined mutual fund SIPs, NPS & bonds'
        },
        {
          title: 'Risk Protection',
          subtitle: 'Human Life Value term cover & uncapped health'
        },
        {
          title: 'Asset Management',
          subtitle: 'Institutional home loans & verified real estate'
        }
      ]
    },
    {
      id: 'life',
      badge: 'DISCIPLINE 02 · LIFE STRATEGIST',
      title: 'LIFE STRATEGIST',
      tagline: 'Financial Literacy & Money Psychology',
      motto: ['Learn', 'Plan', 'Grow'],
      description: 'Demystifying the language of personal finance. We educate students, young earners, and families on money psychology, evaluating fine print, and avoiding speculative traps.',
      image: '/pathways/pathway-develop-myself.jpg',
      link: '/life-strategist',
      ctaText: 'Explore Life Strategist Curriculum',
      isPrimaryCta: false,
      capabilities: [
        {
          title: 'Financial Literacy',
          subtitle: 'Diagnostic fine print reading & spotting credit traps'
        },
        {
          title: 'Personal Discipline',
          subtitle: 'Money psychology & delayed gratification habits'
        },
        {
          title: 'Responsible Decisions',
          subtitle: 'Ethical family protection before speculative yield'
        },
        {
          title: 'Personal & Family Growth',
          subtitle: '30–40 Hr campus curriculums & 7 literacy pillars'
        }
      ]
    }
  ]

  return (
    <section className="section-institutional bg-[#F7FAF8] border-b border-[#E2EBE5] scroll-mt-28" id="disciplines">
      <div className="container">
        <div className="section-title-wrap max-w-3xl mb-4 sm:mb-6">
          <SectionBadge>Brand Architecture</SectionBadge>
          <h2 className="h2 mb-2 sm:mb-3">Two Integrated Disciplines</h2>
          <p className="text-xs sm:text-sm text-[#2B2A29]/75">
            Kreative Hertz approaches personal finance through two complementary dimensions: diagnostic wealth architecture and educational life strategy.
          </p>
        </div>

        {/* Mobile / Tablet Tab Switcher */}
        <div className="flex lg:hidden rounded-xl bg-[#E8F3ED] p-1 mb-5 max-w-sm mx-auto border border-[#E2EBE5]">
          <button
            type="button"
            onClick={() => setActiveTab('wealth')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center ${
              activeTab === 'wealth'
                ? 'bg-[#0A5A42] text-[#F7FAF8] shadow-xs'
                : 'text-[#2B2A29]/70 hover:text-[#142C3E]'
            }`}
          >
            01 · Wealth Architect
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('life')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all text-center ${
              activeTab === 'life'
                ? 'bg-[#0A5A42] text-[#F7FAF8] shadow-xs'
                : 'text-[#2B2A29]/70 hover:text-[#142C3E]'
            }`}
          >
            02 · Life Strategist
          </button>
        </div>

        {/* Editorial Disciplines Grid: Side-by-side on lg+, tab-toggled on mobile/tablet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 items-stretch">
          {disciplines.map((d) => {
            const isVisible =
              (d.id === 'wealth' && activeTab === 'wealth') ||
              (d.id === 'life' && activeTab === 'life')
            return (
              <div
                key={d.id}
                className={`group flex flex-col bg-white rounded-2xl border border-[#E2EBE5] shadow-[0_2px_12px_rgba(20,44,62,0.05)] hover:shadow-[0_16px_36px_rgba(20,44,62,0.10)] hover:border-[#0A5A42]/35 transition-all duration-300 overflow-hidden ${
                  isVisible ? 'flex' : 'hidden lg:flex'
                }`}
              >
                {/* Visual Photographic Header with Editorial Frosted Identifier */}
                <div className="relative aspect-[24/9] lg:aspect-[24/8] w-full overflow-hidden bg-[#E8F3ED]">
                  <Image
                    src={getAssetPath(d.image)}
                    alt={d.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 group-hover:brightness-[1.03] transition-all duration-500 ease-out"
                  />
                  {/* Subtle grounding vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142C3E]/55 via-[#142C3E]/20 to-transparent pointer-events-none" />

                  {/* Frosted Pillar Pill Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#142C3E]/85 backdrop-blur-md text-[10px] sm:text-[11px] font-bold tracking-wider text-[#F7FAF8] uppercase border border-white/20 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                      {d.badge}
                    </span>
                  </div>
                </div>

                {/* Card Interior Details */}
                <div className="p-4 sm:p-5 lg:p-5 xl:p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Tagline & Title */}
                    <span className="text-[10.5px] sm:text-[11px] font-bold text-[#0A5A42] uppercase tracking-wider block mb-0.5">
                      {d.tagline}
                    </span>
                    <h3 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-[#142C3E] mb-1.5 font-heading leading-tight group-hover:text-[#0A5A42] transition-colors">
                      {d.title}
                    </h3>

                    {/* Tri-part Motto Pill */}
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-[#E8F3ED] text-[#0A5A42] text-[10.5px] sm:text-[11px] font-bold mb-2.5 border border-[#0A5A42]/10">
                      {d.motto.map((m, idx) => (
                        <React.Fragment key={idx}>
                          {idx > 0 && <span className="text-[#11A778]">·</span>}
                          <span>{m}</span>
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Concise Editorial Description */}
                    <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3 line-clamp-2 sm:line-clamp-none">
                      {d.description}
                    </p>

                    {/* 2x2 Structured Capabilities Matrix */}
                    <div className="grid grid-cols-2 gap-2 mb-3.5">
                      {d.capabilities.map((cap, i) => (
                        <div
                          key={i}
                          className="p-2 sm:p-2.5 rounded-lg border border-[#E2EBE5] bg-[#FFFFFF] hover:border-[#0A5A42]/25 transition-colors"
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] shrink-0" />
                            <strong className="block text-[#142C3E] text-[11px] sm:text-xs font-bold font-heading truncate">
                              {cap.title}
                            </strong>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-[#2B2A29]/75 leading-tight pl-2.5 line-clamp-2">
                            {cap.subtitle}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Distinctive Action CTA */}
                  {d.isPrimaryCta ? (
                    <Link
                      href={d.link}
                      className="mt-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#0A5A42] hover:bg-[#11A778] text-[#F7FAF8] font-bold text-xs transition-all duration-200 shadow-xs group/btn"
                    >
                      <span>{d.ctaText}</span>
                      <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  ) : (
                    <Link
                      href={d.link}
                      className="mt-auto inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FFFFFF] hover:bg-[#E8F3ED] text-[#0A5A42] border-2 border-[#0A5A42] font-bold text-xs transition-all duration-200 shadow-xs group/btn"
                    >
                      <span>{d.ctaText}</span>
                      <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* 7 Pillars of Personal Finance (Sequential Architectural Presentation) */
export function SevenPillarsSection() {
  const [activePillarTab, setActivePillarTab] = useState<'all' | number>('all')
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const clientWidth = carouselRef.current.clientWidth
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8,
        behavior: 'smooth'
      })
    }
  }

  const tiers = [
    {
      phase: 'PHASE I · BEHAVIORAL FOUNDATIONS & ETHICS',
      pillars: personalFinanceAwareness.slice(0, 2),
      startIdx: 0,
      gridCols: 'lg:grid-cols-2'
    },
    {
      phase: 'PHASE II · STRUCTURAL DEFENSE & RISK TRANSFER',
      pillars: personalFinanceAwareness.slice(2, 4),
      startIdx: 2,
      gridCols: 'lg:grid-cols-2'
    },
    {
      phase: 'PHASE III · CAPITAL COMPOUNDING & DEBT FREEDOM',
      pillars: personalFinanceAwareness.slice(4, 7),
      startIdx: 4,
      gridCols: 'lg:grid-cols-3'
    }
  ]

  return (
    <section className="section-institutional bg-[#F7FAF8] border-b border-[#E2EBE5] scroll-mt-28" id="seven-pillars">
      <div className="container">
        {/* Section Title & Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 sm:mb-6">
          <div className="max-w-2xl">
            <SectionBadge>Foundational Literacy</SectionBadge>
            <h2 className="h2 mb-1.5 sm:mb-2">The 7 Pillars of Personal Finance</h2>
            <p className="text-xs sm:text-sm text-[#2B2A29]/75">
              Sustainable wealth accumulation follows a sequential architecture: mastering behavioral psychology, ring-fencing family vulnerabilities, and automating long-term capital compounding.
            </p>
          </div>

          {/* Carousel arrows for mobile/tablet */}
          <div className="flex items-center gap-2 lg:hidden self-end">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              disabled={!canScrollLeft}
              aria-label="Previous pillar"
              className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              disabled={!canScrollRight}
              aria-label="Next pillar"
              className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* MOBILE & TABLET: Smooth Touch-Snap Carousel (lg:hidden) */}
        <div className="block lg:hidden">
          <div
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {personalFinanceAwareness.map((p, i) => (
              <div
                key={i}
                className="w-[82vw] sm:w-[320px] shrink-0 snap-center bg-white rounded-2xl border border-[#E2EBE5] p-5 flex flex-col justify-between shadow-[0_2px_12px_rgba(20,44,62,0.05)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10.5px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2.5 py-0.5 rounded-full border border-[#0A5A42]/10">
                      PILLAR 0{i + 1}
                    </span>
                    <span className="text-[10px] font-bold text-[#142C3E]/50 tracking-wider uppercase">
                      {i < 2 ? 'Foundation' : i < 4 ? 'Defense' : 'Growth'}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#142C3E] mb-1 font-heading">
                    {p.pillar}
                  </h3>
                  <div className="text-[11.5px] font-semibold text-[#11A778] mb-2.5">
                    {p.tagline}
                  </div>
                  <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3.5">
                    {p.desc}
                  </p>

                  {/* Core Principles */}
                  <div className="space-y-1.5 pt-3 border-t border-[#E2EBE5]">
                    <span className="text-[10px] font-bold text-[#142C3E] uppercase tracking-wider block mb-1">
                      Key Principles:
                    </span>
                    {p.corePrinciples?.slice(0, 2).map((cp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-[11px] text-[#2B2A29]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] shrink-0 mt-1" />
                        <span className="line-clamp-2">{cp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-[#2B2A29]/60 mt-2">
            Swipe to view all 7 sequential pillars
          </div>
        </div>

        {/* DESKTOP: Stage Selector & Balanced Sequential Architectural Tiers (hidden lg:block) */}
        <div className="hidden lg:block">
          {/* Stage Filter Navigation Tabs */}
          <div className="flex items-center gap-2 mb-4 border-b border-[#E2EBE5] pb-3" role="tablist">
            <button
              type="button"
              onClick={() => setActivePillarTab('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                activePillarTab === 'all'
                  ? 'bg-[#0A5A42] text-[#F7FAF8] border-[#0A5A42] shadow-xs'
                  : 'bg-white text-[#2B2A29]/70 border-[#CAD9D0] hover:border-[#0A5A42] hover:text-[#0A5A42]'
              }`}
            >
              All 7 Pillars Sequence
            </button>
            {tiers.map((t, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActivePillarTab(idx)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                  activePillarTab === idx
                    ? 'bg-[#0A5A42] text-[#F7FAF8] border-[#0A5A42] shadow-xs'
                    : 'bg-white text-[#2B2A29]/70 border-[#CAD9D0] hover:border-[#0A5A42] hover:text-[#0A5A42]'
                }`}
              >
                Stage 0{idx + 1} · {idx === 0 ? 'Behavioral Foundations' : idx === 1 ? 'Structural Defense' : 'Capital Compounding'}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {(activePillarTab === 'all' ? tiers : [tiers[activePillarTab]]).map((tier, tierIdx) => {
              const actualTierIdx = activePillarTab === 'all' ? tierIdx : activePillarTab
              return (
                <div key={tierIdx} className="space-y-2">
                  {/* Phase Header Label */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#11A778]" />
                    <span className="text-[11px] font-bold tracking-wider text-[#0A5A42] uppercase font-mono">
                      {tier.phase}
                    </span>
                    <div className="flex-1 h-[1px] bg-[#E2EBE5]" />
                  </div>

                  {/* Tier Cards Grid */}
                  <div className={`grid ${tier.gridCols} gap-3.5 xl:gap-4.5`}>
                    {tier.pillars.map((p, pIdx) => {
                      const absoluteIdx = tier.startIdx + pIdx
                      return (
                        <div
                          key={p.pillar}
                          className="bg-white rounded-2xl border border-[#E2EBE5] p-4 xl:p-5 shadow-[0_2px_12px_rgba(20,44,62,0.04)] hover:shadow-[0_12px_28px_rgba(20,44,62,0.09)] hover:border-[#0A5A42]/35 transition-all duration-300 flex flex-col justify-between group"
                        >
                          <div>
                            {/* Top Indicator */}
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10.5px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2 py-0.5 rounded-full border border-[#0A5A42]/10">
                                PILLAR 0{absoluteIdx + 1}
                              </span>
                              <span className="text-[10px] font-bold text-[#142C3E]/45 tracking-wider uppercase">
                                Architecture Stage {actualTierIdx + 1}
                              </span>
                            </div>

                            {/* Title & Tagline */}
                            <h3 className="text-base sm:text-lg font-bold text-[#142C3E] group-hover:text-[#0A5A42] transition-colors font-heading mb-0.5 leading-snug">
                              {p.pillar}
                            </h3>
                            <div className="text-xs font-semibold text-[#11A778] mb-2">
                              {p.tagline}
                            </div>

                            {/* Description */}
                            <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3">
                              {p.desc}
                            </p>

                            {/* Core Principles Checklist */}
                            <div className="space-y-1 pt-2.5 border-t border-[#E2EBE5]">
                              <span className="text-[10px] font-bold text-[#142C3E] uppercase tracking-wider block mb-0.5">
                                Core Principles:
                              </span>
                              {p.corePrinciples?.slice(0, 2).map((cp, idx) => (
                                <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#2B2A29]/80">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#11A778] shrink-0 mt-1" />
                                  <span className="line-clamp-2">{cp}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Curriculum Callout */}
        <div className="mt-6 pt-5 border-t border-[#E2EBE5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#142C3E]">
              Master the 7 Pillars in Your Household or Campus
            </div>
            <p className="text-[11px] text-[#2B2A29]/70">
              Explore our 30–40 hour student and family curriculum, or consult directly with a certified Life Strategist.
            </p>
          </div>
          <Link
            href="/life-strategist"
            className="btn-primary text-xs py-2.5 px-4 rounded-xl inline-flex items-center gap-2 group/btn self-start sm:self-auto shrink-0 shadow-xs"
          >
            <span>Explore Life Strategist Curriculum</span>
            <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* Featured Knowledge Hub Guides (Editorial Publication Experience & Responsive Presentation) */
export function KnowledgeHubHomeSection() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const clientWidth = carouselRef.current.clientWidth
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -clientWidth * 0.85 : clientWidth * 0.85,
        behavior: 'smooth'
      })
    }
  }

  const leadArticle = articles[0]
  const secondaryArticles = articles.slice(1, 3)

  return (
    <section className="section-institutional bg-[#F7FAF8] border-b border-[#E2EBE5] scroll-mt-28" id="knowledge-hub">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 sm:mb-5">
          <div className="max-w-2xl">
            <SectionBadge>Institutional Publication</SectionBadge>
            <h2 className="h2 mb-1.5 sm:mb-2">Knowledge Hub & Research</h2>
            <p className="text-xs sm:text-sm text-[#2B2A29]/75">
              Objective, conflict-free research exploring insurance policy fine print, loan spread calculations, systematic compounding mathematics, and household financial defense.
            </p>
          </div>

          {/* Desktop Right CTA */}
          <Link
            href="/knowledge-hub"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A5A42] hover:text-[#11A778] transition-colors group self-end"
          >
            <span>Explore All 5 Published Articles</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile / Tablet Carousel Navigation Arrows */}
          <div className="flex items-center gap-2 lg:hidden self-end">
            <button
              type="button"
              onClick={() => scrollCarousel('left')}
              disabled={!canScrollLeft}
              aria-label="Previous article"
              className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel('right')}
              disabled={!canScrollRight}
              aria-label="Next article"
              className="w-8 h-8 rounded-full border border-[#CAD9D0] bg-white text-[#142C3E] flex items-center justify-center disabled:opacity-30 disabled:pointer-events-none transition-colors shadow-xs"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* DESKTOP: Editorial Split Layout (hidden lg:grid) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-5 xl:gap-6 mb-4 sm:mb-5">
          {/* Left: Lead Featured Editorial (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2EBE5] p-4.5 xl:p-5 shadow-[0_2px_12px_rgba(20,44,62,0.04)] hover:shadow-[0_12px_28px_rgba(20,44,62,0.08)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Image banner */}
              <div className="relative aspect-[16/8] xl:aspect-[16/8.5] rounded-xl overflow-hidden bg-[#E8F3ED] border border-[#E2EBE5] mb-3.5">
                <Image
                  src={getAssetPath(leadArticle.image || '/services/financial-planning.jpg')}
                  alt={leadArticle.title}
                  fill
                  sizes="58vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="bg-[#0A5A42]/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-white/20">
                    Lead Editorial
                  </span>
                </div>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2 py-0.5 rounded-full border border-[#0A5A42]/10 uppercase">
                  {leadArticle.category}
                </span>
                <span className="text-[10.5px] text-[#2B2A29]/60 flex items-center gap-1">
                  <Clock size={11} className="text-[#11A778]" />
                  {leadArticle.readTime || leadArticle.read}
                </span>
                <span className="text-[10.5px] text-[#2B2A29]/50">•</span>
                <span className="text-[10.5px] text-[#2B2A29]/60">
                  {leadArticle.publishedDate || leadArticle.date}
                </span>
              </div>

              {/* Title & Excerpt */}
              <h3 className="text-lg xl:text-xl font-bold font-heading text-[#142C3E] group-hover:text-[#0A5A42] transition-colors leading-snug mb-2">
                <Link href={`/knowledge-hub/${leadArticle.slug}`}>
                  {leadArticle.title}
                </Link>
              </h3>
              <p className="text-xs text-[#2B2A29]/75 leading-relaxed mb-3 line-clamp-2">
                {leadArticle.excerpt}
              </p>

              {/* Key Takeaway snippet */}
              {leadArticle.keyTakeaway && (
                <div className="bg-[#E8F3ED] border-l-3 border-[#0A5A42] p-2.5 rounded-r-xl mb-3">
                  <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#0A5A42] block mb-0.5">
                    Core Institutional Finding:
                  </span>
                  <p className="text-xs font-semibold text-[#142C3E] leading-snug line-clamp-2">
                    {leadArticle.keyTakeaway}
                  </p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-[#E2EBE5] flex items-center justify-between">
              <span className="text-[10.5px] text-[#2B2A29]/60">
                By {leadArticle.author} · Wealth Architect
              </span>
              <Link
                href={`/knowledge-hub/${leadArticle.slug}`}
                className="btn-primary text-xs py-1.5 px-3.5 rounded-xl inline-flex items-center gap-1.5 shadow-xs"
              >
                <span>Read Blueprint</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right: Stack of 2 Secondary Editorial Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {secondaryArticles.map((art) => (
              <div
                key={art.slug}
                className="bg-white rounded-2xl border border-[#E2EBE5] p-4 shadow-[0_2px_12px_rgba(20,44,62,0.03)] hover:shadow-[0_12px_28px_rgba(20,44,62,0.08)] hover:border-[#0A5A42]/30 transition-all duration-300 flex flex-col justify-between group flex-1"
              >
                <div>
                  <div className="flex gap-3 mb-2">
                    {/* Thumbnail Image */}
                    <div className="w-24 h-18 sm:w-28 sm:h-20 rounded-xl overflow-hidden relative shrink-0 bg-[#E8F3ED] border border-[#E2EBE5]">
                      <Image
                        src={getAssetPath(art.image || '/services/financial-planning.jpg')}
                        alt={art.title}
                        fill
                        sizes="110px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Metadata & Title */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                        <span className="text-[9.5px] font-mono font-bold text-[#0A5A42] bg-[#E8F3ED] px-2 py-0.5 rounded-full border border-[#0A5A42]/10 uppercase">
                          {art.category}
                        </span>
                        <span className="text-[10px] text-[#2B2A29]/60 flex items-center gap-1">
                          <Clock size={10} className="text-[#11A778]" />
                          {art.readTime || art.read}
                        </span>
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-[#142C3E] group-hover:text-[#0A5A42] transition-colors leading-snug font-heading line-clamp-2">
                        <Link href={`/knowledge-hub/${art.slug}`}>
                          {art.title}
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#2B2A29]/75 leading-relaxed line-clamp-2 mb-2">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2EBE5] flex items-center justify-between text-xs font-semibold text-[#0A5A42] group-hover:text-[#11A778] transition-colors">
                  <span className="text-[11px] text-[#2B2A29]/50 font-normal">
                    {art.publishedDate || art.date}
                  </span>
                  <Link href={`/knowledge-hub/${art.slug}`} className="inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET: Smooth Touch-Snap Carousel (block lg:hidden) */}
        <div className="block lg:hidden mb-6">
          <div
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-none -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {articles.slice(0, 4).map((art) => (
              <div
                key={art.slug}
                className="w-[84vw] sm:w-[340px] shrink-0 snap-center bg-white rounded-2xl border border-[#E2EBE5] overflow-hidden shadow-[0_2px_12px_rgba(20,44,62,0.04)] flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-16/9 overflow-hidden bg-[#E8F3ED]">
                    <Image
                      src={getAssetPath(art.image || '/services/financial-planning.jpg')}
                      alt={art.title}
                      fill
                      sizes="340px"
                      className="object-cover"
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

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#142C3E] mb-2 leading-snug font-heading">
                      <Link href={`/knowledge-hub/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#2B2A29]/75 leading-relaxed line-clamp-3 mb-3">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="border-t border-[#E2EBE5] pt-3 flex items-center justify-between text-xs text-[#0A5A42] font-semibold">
                    <span className="text-[11px] text-[#2B2A29]/60 font-normal">
                      {art.publishedDate || art.date}
                    </span>
                    <Link href={`/knowledge-hub/${art.slug}`} className="inline-flex items-center gap-1">
                      <span>Read Article</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-[#2B2A29]/60 mt-2">
            Swipe to explore published advisory guides
          </div>
        </div>

        {/* Bottom Curriculum & Archive Callout */}
        <div className="pt-5 border-t border-[#E2EBE5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-[#142C3E]">
              Explore Complete Knowledge Hub Library
            </div>
            <p className="text-[11px] text-[#2B2A29]/70">
              Browse structured analyses covering insurance audit traps, step-up SIP compounding math, and mortgage balance transfer refinancing.
            </p>
          </div>
          <Link
            href="/knowledge-hub"
            className="btn-secondary text-xs py-2 px-4 rounded-xl inline-flex items-center gap-1.5 self-start sm:self-auto shrink-0 shadow-xs"
          >
            <span>View All 5 Research Articles</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* Final Consultation & Contact Section (Single-Screen with Mobile/Tablet Tabs) */
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
