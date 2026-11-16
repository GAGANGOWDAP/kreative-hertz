'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Shield, Heart, Car, Plane, Users, Briefcase, TrendingUp,
  Compass, Landmark, Wallet, Building, Home, Layers, Cpu,
  ArrowRight, CheckCircle2, Phone, Mail, Menu, X, ChevronDown,
  ChevronRight, Clock, AlertCircle, Check, MessageCircle, Search,
  HelpCircle, Filter
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
    <div className="institutional-card p-6 md:p-8">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-[#172B3A] mb-1">
            Request an Advisory Consultation
          </h3>
          <p className="text-xs text-[#4F615A]">
            Complete the form below to coordinate a confidential strategy discussion with Karthik R.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="fullName" className="form-label">Full Name *</label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Ramesh Sharma"
              className={`form-control-input ${errors.name ? 'border-red-500' : ''}`}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            {errors.name && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="form-label">Mobile Number *</label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="+91 98765 43210"
              className={`form-control-input ${errors.phone ? 'border-red-500' : ''}`}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="emailAddress" className="form-label">Email Address *</label>
            <input
              id="emailAddress"
              type="email"
              placeholder="name@example.com"
              className={`form-control-input ${errors.email ? 'border-red-500' : ''}`}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
          </div>

          <div>
            <label htmlFor="cityLocation" className="form-label">City / Location *</label>
            <input
              id="cityLocation"
              type="text"
              placeholder="e.g. Bengaluru, Karnataka"
              className={`form-control-input ${errors.city ? 'border-red-500' : ''}`}
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
            />
            {errors.city && <p className="text-xs text-red-600 mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.city}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="sessionCategory" className="form-label">Consultation Focus *</label>
            <select
              id="sessionCategory"
              className="form-control-input bg-white"
              value={form.sessionType}
              onChange={(e) => setForm({ ...form, sessionType: e.target.value })}
            >
              {sessionOptions.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="preferredSlot" className="form-label">Preferred Time Slot</label>
            <select
              id="preferredSlot"
              className="form-control-input bg-white"
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

        <div className="mb-5">
          <label htmlFor="userContext" className="form-label">Context / Relevant Notes (Optional)</label>
          <textarea
            id="userContext"
            rows={3}
            placeholder="Share details regarding ongoing policies, loan requirements, or objectives..."
            className="form-control-input"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center text-sm py-3"
        >
          {isSubmitting ? 'Formatting Request...' : 'Submit Consultation Request'}
        </button>

        <p className="text-[11px] text-[#4F615A] text-center mt-3">
          Fiduciary Standard. Disclosed information is handled strictly for advisory coordination.
        </p>
      </form>
    </div>
  )
}

/* Visitor Requirement Selector (4 Clear Strategic Pathways) */
export function VisitorRequirementSelector() {
  const pathways = [
    {
      title: 'Protect My Family',
      tagline: 'Risk & Insurance Solutions',
      description: 'Income replacement pure term life cover, comprehensive family health insurance, and critical illness safeguards.',
      icon: <Shield size={24} className="text-[#1F5138]" />,
      actionText: 'Explore Insurance Solutions',
      link: '/wealth-architect',
      highlights: ['Pure Term Life', 'Health & Critical Illness', 'Auto & Travel']
    },
    {
      title: 'Plan My Finances',
      tagline: 'Wealth & Investment Strategy',
      description: 'Disciplined compounding through mutual fund SIPs, NPS retirement accounts, and risk-adjusted fixed income.',
      icon: <TrendingUp size={24} className="text-[#1F5138]" />,
      actionText: 'Explore Wealth Planning',
      link: '/wealth-architect',
      highlights: ['Mutual Funds & SIP', 'NPS Pension', 'Bonds & Fixed Income']
    },
    {
      title: 'Explore Property',
      tagline: 'Real Estate & Credit Financing',
      description: 'Competitive home loan origination, balance transfer refinancing, and verified residential property investments.',
      icon: <Home size={24} className="text-[#1F5138]" />,
      actionText: 'Explore Property & Loans',
      link: '/services/residential-property',
      highlights: ['Home Loans', 'Balance Transfer Hack', 'Residential Plots']
    },
    {
      title: 'Develop Myself',
      tagline: 'Life Strategist Curriculum',
      description: 'Personal finance literacy, money psychology, and lifelong disciplined financial habits for students and families.',
      icon: <Compass size={24} className="text-[#1F5138]" />,
      actionText: 'Explore Life Strategy',
      link: '/life-strategist',
      highlights: ['Mindset · Moral · Awareness', 'College Programs', '7 Literacy Pillars']
    }
  ]

  return (
    <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
      <div className="container">
        <div className="section-title-wrap max-w-3xl">
          <SectionBadge>Requirement Pathways</SectionBadge>
          <h2 className="h2 mb-3">How Can We Help You Today?</h2>
          <p className="text-sm text-[#4F615A]">
            Select your immediate objective to discover relevant solutions, transparent audits, and structured advisory pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((pathway, idx) => (
            <Link
              key={idx}
              href={pathway.link}
              className="institutional-card p-6 flex flex-col justify-between hover:border-[#1F5138] hover:shadow-md transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#EAF3EC] border border-[#CAD9D0] flex items-center justify-center mb-4 group-hover:bg-[#1F5138] transition-colors">
                  {React.cloneElement(pathway.icon, {
                    className: 'text-[#1F5138] group-hover:text-white transition-colors'
                  })}
                </div>
                <span className="text-[10px] font-bold text-[#1F5138] uppercase tracking-wider block mb-1">
                  {pathway.tagline}
                </span>
                <h3 className="text-lg font-bold text-[#172B3A] mb-2 group-hover:text-[#1F5138] transition-colors font-heading">
                  {pathway.title}
                </h3>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                  {pathway.description}
                </p>
                <div className="space-y-1.5 mb-6">
                  {pathway.highlights.map((h, i) => (
                    <div key={i} className="text-[11px] text-[#26332D] flex items-center gap-1.5">
                      <span className="text-[#159568] font-bold">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#E2EBE5] pt-3 flex items-center justify-between text-xs font-semibold text-[#1F5138]">
                <span>{pathway.actionText}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* How We Work Section (4-Step Customer Journey) */
export function HowWeWorkSection() {
  const steps = [
    {
      step: '01',
      title: 'Understand',
      subtitle: 'Discovery & Needs Audit',
      desc: 'In-depth review of your dependents, cash flow, debt liabilities, and unique multi-decade objectives with zero sales pressure.'
    },
    {
      step: '02',
      title: 'Analyse',
      subtitle: 'Contract & Gap Evaluation',
      desc: 'Surgical audit of current policies, identifying hidden disease sub-limits, high interest rate drains, and capital allocation shortfalls.'
    },
    {
      step: '03',
      title: 'Strategise',
      subtitle: 'Objective Roadmap Architecture',
      desc: 'Tailoring pure term covers, emergency cushions, low-cost mutual fund compounding, and debt optimization aligned to your life stage.'
    },
    {
      step: '04',
      title: 'Support',
      subtitle: 'Fiduciary Stewardship & Reviews',
      desc: 'Dedicated claim settlement advocacy, periodic rebalancing, and ongoing personal financial coaching as life circumstances evolve.'
    }
  ]

  return (
    <section className="section-institutional bg-[#F8F8F2] border-b border-[#E2EBE5]">
      <div className="container">
        <div className="section-title-wrap max-w-3xl">
          <SectionBadge>Advisory Methodology</SectionBadge>
          <h2 className="h2 mb-3">How We Work — The 4-Step Client Journey</h2>
          <p className="text-sm text-[#4F615A]">
            Rooted in our core philosophy: Understand · Analyse · Strategise · Support. Turning confusing fine print into actionable personal clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className="institutional-card p-6 relative flex flex-col justify-between hover:border-[#CAD9D0] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#EAF3EC] border border-[#1F5138]/30 flex items-center justify-center font-mono font-bold text-sm text-[#1F5138]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-[#C6A66B] uppercase font-mono">
                    PHASE {idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#172B3A] mb-1 font-heading">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-[#1F5138] mb-3">
                  {item.subtitle}
                </div>
                <p className="text-xs text-[#4F615A] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E2EBE5] flex items-center gap-1.5 text-[11px] font-semibold text-[#1F5138]">
                <CheckCircle2 size={13} className="text-[#159568]" />
                <span>Verified Diagnostic Step</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* Filterable & Searchable 15 Services Directory */
export function ServicesExplorer({ initialCategory = 'All Services' }: { initialCategory?: string }) {
  const categories = [
    { label: 'All Services', count: 15 },
    { label: 'Insurance', count: 5 },
    { label: 'Investments & Wealth Creation', count: 4 },
    { label: 'Loans & Credit Solutions', count: 4 },
    { label: 'Real Estate', count: 2 }
  ] as const

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory)
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = servicesData.filter((service) => {
    const normActive = activeCategory.toLowerCase()
    const matchesCategory =
      activeCategory === 'All Services' ||
      service.category.toLowerCase() === normActive ||
      (normActive.includes('invest') && service.category === 'Investments') ||
      (normActive.includes('loan') && service.category === 'Loans') ||
      (normActive.includes('insur') && service.category === 'Insurance') ||
      (normActive.includes('real') && service.category === 'Real Estate')
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch = !query ||
      service.title.toLowerCase().includes(query) ||
      service.shortDesc.toLowerCase().includes(query) ||
      service.highlights.some((h) => h.toLowerCase().includes(query)) ||
      service.category.toLowerCase().includes(query)
    return matchesCategory && matchesSearch
  })

  const resetFilters = () => {
    setActiveCategory('All Services')
    setSearchQuery('')
  }

  const isFiltered = activeCategory !== 'All Services' || searchQuery.trim() !== ''

  return (
    <div>
      {/* Search and Category Control Bar */}
      <div className="mb-6 space-y-4">
        {/* Search Input */}
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6C7D76]">
            <Search size={16} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search financial services by name, keywords..."
            className="form-control-input pl-9 pr-8 text-xs py-2.5 w-full bg-white"
            aria-label="Search financial services"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6C7D76] hover:text-[#172B3A]"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Category Pills & Count */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2EBE5] pb-3">
          <div className="flex flex-wrap gap-2" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.label}
                role="tab"
                aria-selected={activeCategory === cat.label}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors flex items-center gap-1.5 ${
                  activeCategory === cat.label
                    ? 'bg-[#1F5138] text-white border-[#1F5138]'
                    : 'bg-white text-[#4F615A] border-[#CAD9D0] hover:border-[#1F5138] hover:text-[#1F5138]'
                }`}
                onClick={() => setActiveCategory(cat.label)}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.label ? 'bg-white/20 text-white' : 'bg-[#EAF3EC] text-[#1F5138]'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          <div className="text-xs text-[#4F615A] flex items-center gap-2">
            <span>Showing <strong>{filtered.length}</strong> of {servicesData.length} services</span>
            {isFiltered && (
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-[#1F5138] hover:underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Empty State */}
      {filtered.length === 0 ? (
        <div className="institutional-card p-10 text-center max-w-md mx-auto my-8">
          <div className="w-12 h-12 rounded-full bg-[#EAF3EC] flex items-center justify-center mx-auto mb-3 text-[#1F5138]">
            <Search size={22} />
          </div>
          <h3 className="text-base font-bold text-[#172B3A] mb-1">No services found</h3>
          <p className="text-xs text-[#4F615A] mb-4">
            No financial services matched &ldquo;{searchQuery}&rdquo; within &ldquo;{activeCategory}&rdquo;.
          </p>
          <button
            onClick={resetFilters}
            className="btn-primary text-xs py-2 px-4 mx-auto"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* Services Grid (Clean 3-column institutional layout) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="card-service-item flex flex-col justify-between group"
            >
              <div>
                <div className="icon-box-primary group-hover:bg-[#1F5138] group-hover:text-white transition-colors">
                  {getServiceIcon(service.iconType)}
                </div>
                <span className="text-[11px] font-bold tracking-wider text-[#1F5138] uppercase block mb-1">
                  {service.category}
                </span>
                <h3 className="text-lg font-bold text-[#172B3A] mb-2 leading-snug group-hover:text-[#1F5138] transition-colors font-heading">
                  {service.title}
                </h3>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
              </div>

              <div className="border-t border-[#E2EBE5] pt-3 flex items-center justify-between text-xs font-semibold text-[#1F5138]">
                <span>View Service Specifications</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* Searchable & Filterable Knowledge Hub Explorer */
export function KnowledgeHubExplorer({ initialArticles }: { initialArticles: KnowledgeArticle[] }) {
  const [activeCategory, setActiveCategory] = useState('All Articles')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'All Articles',
    'Financial Awareness',
    'Insurance',
    'Investments',
    'Loans',
    'Real Estate'
  ]

  const filtered = initialArticles.filter((art) => {
    const matchesCat = activeCategory === 'All Articles' || art.category === activeCategory
    const query = searchQuery.toLowerCase().trim()
    const matchesSearch = !query ||
      art.title.toLowerCase().includes(query) ||
      art.excerpt.toLowerCase().includes(query) ||
      art.keyTakeaway.toLowerCase().includes(query)
    return matchesCat && matchesSearch
  })

  const resetFilters = () => {
    setActiveCategory('All Articles')
    setSearchQuery('')
  }

  return (
    <div>
      {/* Search and Category Filter Bar */}
      <div className="mb-6 space-y-4">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6C7D76]">
            <Search size={16} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides by title, topics..."
            className="form-control-input pl-9 pr-8 text-xs py-2.5 w-full bg-white"
            aria-label="Search articles"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6C7D76] hover:text-[#172B3A]"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E2EBE5] pb-3">
          <div className="flex flex-wrap gap-2" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md border transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#1F5138] text-white border-[#1F5138]'
                    : 'bg-white text-[#4F615A] border-[#CAD9D0] hover:border-[#1F5138] hover:text-[#1F5138]'
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#4F615A] flex items-center gap-2">
            <span>Showing <strong>{filtered.length}</strong> of {initialArticles.length} guides</span>
            {(activeCategory !== 'All Articles' || searchQuery) && (
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-[#1F5138] hover:underline"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="institutional-card p-10 text-center max-w-md mx-auto my-8">
          <div className="w-12 h-12 rounded-full bg-[#EAF3EC] flex items-center justify-center mx-auto mb-3 text-[#1F5138]">
            <Search size={22} />
          </div>
          <h3 className="text-base font-bold text-[#172B3A] mb-1">No guides found</h3>
          <p className="text-xs text-[#4F615A] mb-4">
            No articles matched &ldquo;{searchQuery}&rdquo;.
          </p>
          <button onClick={resetFilters} className="btn-primary text-xs py-2 px-4 mx-auto">
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((art) => (
            <Link
              key={art.slug}
              href={`/knowledge-hub/${art.slug}`}
              className="card-service-item flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#4F615A] mb-2">
                  <span className="font-bold text-[#1F5138] uppercase tracking-wider">{art.category}</span>
                  <span>{art.read}</span>
                </div>
                <h3 className="text-base font-bold text-[#172B3A] mb-2 leading-snug group-hover:text-[#1F5138] transition-colors font-heading">
                  {art.title}
                </h3>
                <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                  {art.excerpt}
                </p>
              </div>
              <div className="border-t border-[#E2EBE5] pt-3 flex items-center justify-between text-xs font-semibold text-[#1F5138]">
                <span>Read Full Guide</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* Financial Gap Analysis Section */
export function FinancialGapAnalysisSection() {
  const [activeArea, setActiveArea] = useState(gapAnalysisAreas[0])

  return (
    <section className="section-institutional bg-[#EAF3EC] scroll-mt-28" id="gap-analysis">
      <div className="container">
        <div className="section-title-wrap max-w-3xl">
          <SectionBadge>Structured Evaluation</SectionBadge>
          <h2 className="h2 mb-3">Financial Gap Analysis</h2>
          <p className="text-sm text-[#4F615A]">
            Prior to committing capital to any financial instrument, evaluate existing arrangements, liabilities, and critical shortfalls across five structural dimensions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation List */}
          <div className="lg:col-span-5 space-y-2">
            {gapAnalysisAreas.map((area) => {
              const isSelected = activeArea.id === area.id
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveArea(area)}
                  className={`w-full text-left p-4 rounded border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-white border-[#1F5138] shadow-sm'
                      : 'bg-white/70 border-[#CAD9D0] hover:bg-white hover:border-[#1F5138]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${
                      isSelected ? 'bg-[#1F5138] text-white' : 'bg-[#EAF3EC] text-[#1F5138]'
                    }`}>
                      {getServiceIcon(area.icon)}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#172B3A]">{area.title}</div>
                      <div className="text-[11px] text-[#1F5138]">{area.subtitle}</div>
                    </div>
                  </div>
                  <ChevronRight size={16} className={isSelected ? 'text-[#1F5138]' : 'text-[#8C9EA8]'} />
                </button>
              )
            })}
          </div>

          {/* Details Card */}
          <div className="lg:col-span-7">
            <div className="institutional-card p-6 md:p-8">
              <div className="text-[11px] font-bold text-[#1F5138] uppercase tracking-wider mb-1">
                {activeArea.subtitle}
              </div>
              <h3 className="text-xl font-bold text-[#172B3A] mb-3">
                {activeArea.title}
              </h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-6">
                {activeArea.description}
              </p>

              <div className="border border-[#CAD9D0] rounded p-4 bg-[#F8F8F2] mb-6">
                <div className="text-xs font-bold text-[#1F5138] uppercase tracking-wider mb-3">
                  Verification Checkpoints
                </div>
                <div className="space-y-2.5">
                  {activeArea.checks.map((check, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#26332D]">
                      <CheckCircle2 size={14} className="text-[#159568] flex-shrink-0 mt-0.5" />
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Link href="/book-session" className="btn-primary text-xs py-2.5">
                  <span>Request a Gap Analysis Review</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href={`https://wa.me/919482897253?text=Hello%20Karthik%20R,%20I%20would%20like%20to%20discuss%20a%20gap%20review%20regarding%20${encodeURIComponent(activeArea.title)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary text-xs py-2.5"
                >
                  <span>Inquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
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

/* Real Estate Section */
export function RealEstateSection() {
  return (
    <section className="section-institutional bg-[#FFFFFF] border-t border-b border-[#E2EBE5] scroll-mt-28" id="real-estate">
      <div className="container">
        <div className="section-title-wrap max-w-3xl">
          <SectionBadge>Real Estate Solutions</SectionBadge>
          <h2 className="h2 mb-3">Residential & Property Asset Advisory</h2>
          <p className="text-sm text-[#4F615A]">
            Independent advisory covering primary home acquisition, developer verification, plot layout approvals, and integrated home financing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="institutional-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="icon-box-primary">
                <Home size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#172B3A] mb-2">Residential Property</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Assistance for individuals and families purchasing apartments or independent villas. We review builder delivery history, title documentation, and integrate competitive home loans.
              </p>
              <ul className="space-y-2 text-xs text-[#26332D] mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568]" />
                  <span>RERA compliance and builder credibility audit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568]" />
                  <span>Integrated bank rate comparisons and loan sanction support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568]" />
                  <span>Tax deduction optimization under Sections 24 and 80C</span>
                </li>
              </ul>
            </div>
            <Link href="/services/residential-property" className="btn-secondary text-xs py-2.5 justify-center">
              <span>View Residential Specifications</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="institutional-card p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="icon-box-primary">
                <Building size={20} />
              </div>
              <h3 className="text-xl font-bold text-[#172B3A] mb-2">Real Estate Investments & Plots</h3>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">
                Analysis of high-growth infrastructure corridors, approved plotted layouts, and pre-leased commercial assets with clear legal titles.
              </p>
              <ul className="space-y-2 text-xs text-[#26332D] mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568]" />
                  <span>Layout approvals verification (BMRDA / DTCP / equivalent)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568]" />
                  <span>Rental yield and long-term capital appreciation studies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#159568]" />
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
