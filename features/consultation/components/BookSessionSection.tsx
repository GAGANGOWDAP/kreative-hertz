'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight,
  ShieldCheck, Phone, Mail, MapPin, MessageSquare, ChevronDown
} from 'lucide-react'
import { companyDetails } from '@/content'
import { SectionBadge } from '@/components/shared/SectionBadge'

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
