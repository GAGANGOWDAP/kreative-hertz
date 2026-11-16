'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react'
import { getAssetPath } from '@/lib/assets'
import { companyDetails } from '@/content/company/company-info'
import { primaryNavItems } from '@/content/navigation/main-navigation'
import { footerLegalLinks, regulatoryDisclosures } from '@/content/navigation/footer-navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { label: 'Insurance Advisory (5)', href: '/services/insurance' },
    { label: 'Investments & Compounding (4)', href: '/services/investments' },
    { label: 'Loans & Credit Architecture (4)', href: '/services/loans' },
    { label: 'Real Estate Due Diligence (2)', href: '/services/real-estate' },
  ]

  const programmeLinks = [
    { label: 'Wealth Architect', href: '/products/wealth-architect' },
    { label: 'Life Strategist', href: '/products/life-strategist' },
    { label: 'Financial Awareness', href: '/products/financial-awareness' },
    { label: 'College Programmes', href: '/products/college-programmes' },
    { label: 'Corporate Programmes', href: '/products/corporate-programmes' },
  ]

  return (
    <footer id="footer" className="footer-site bg-[#172B3A] text-[#F8F8F2] border-t border-[#CAD9D0]/20">
      <div className="container max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* TOP SECTION: 4 BALANCED COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand Identity & Short Description (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group mb-4"
              aria-label="Kreative Hertz Home"
            >
              <div className="w-11 h-11 rounded-lg bg-[#0D261C] border border-[#C6A66B] flex items-center justify-center overflow-hidden shadow-md group-hover:border-[#C6A66B] transition-colors flex-shrink-0">
                <Image
                  src={getAssetPath('/logo-icon.png')}
                  alt="Kreative Hertz Crest"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover scale-125"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-white text-[16px] leading-tight font-heading">
                  {companyDetails.name.toUpperCase()}
                </span>
                <span className="text-[9px] font-bold tracking-widest text-[#C6A66B] uppercase font-heading mt-0.5">
                  {companyDetails.tagline.toUpperCase()}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#CAD9D0] leading-relaxed mb-4 max-w-sm">
              Institutional financial advisory and life strategy consultancy founded by Karthik R in Bengaluru. Converting financial complexity into clear, durable strategies across protection, wealth compounding, and moral financial literacy.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#159568]">
              {companyDetails.framework.map((fw, idx) => (
                <React.Fragment key={idx}>
                  <span>{fw}</span>
                  {idx < companyDetails.framework.length - 1 && (
                    <span className="text-[#8C9EA8]">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Column 2: Core Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] font-heading mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#CAD9D0] hover:text-[#159568] transition-colors font-body flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book-session"
                  className="text-[#159568] hover:text-white font-semibold transition-colors font-body flex items-center gap-1 mt-3"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Programmes (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] font-heading mb-4">
              Services & Programmes
            </h4>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#8C9EA8] tracking-wider block mb-2">
                  15 Financial Services
                </span>
                <ul className="space-y-1.5 text-xs">
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-[#CAD9D0] hover:text-[#159568] transition-colors"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] uppercase font-semibold text-[#8C9EA8] tracking-wider block mb-2">
                  Key Programmes
                </span>
                <ul className="space-y-1.5 text-xs">
                  {programmeLinks.slice(0, 3).map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="text-[#CAD9D0] hover:text-[#159568] transition-colors"
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Direct Desk (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C6A66B] font-heading mb-4">
                Official Advisory Desk
              </h4>
              <div className="space-y-3 text-xs">
                {/* Official Phone */}
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="flex items-center gap-2.5 text-[#CAD9D0] hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded bg-[#1F5138]/40 border border-[#159568]/30 flex items-center justify-center shrink-0 text-[#159568] group-hover:bg-[#1F5138] group-hover:text-white transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8C9EA8] block uppercase">Call Desk</span>
                    <span className="font-semibold text-white">{companyDetails.phoneFormatted}</span>
                  </div>
                </a>

                {/* Official Email */}
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="flex items-center gap-2.5 text-[#CAD9D0] hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded bg-[#1F5138]/40 border border-[#159568]/30 flex items-center justify-center shrink-0 text-[#159568] group-hover:bg-[#1F5138] group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8C9EA8] block uppercase">Official Email</span>
                    <span className="font-semibold text-white">{companyDetails.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-2.5 text-[#CAD9D0]">
                  <div className="w-7 h-7 rounded bg-[#1F5138]/40 border border-[#159568]/30 flex items-center justify-center shrink-0 text-[#159568]">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8C9EA8] block uppercase">Location</span>
                    <span className="font-medium text-white">{companyDetails.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified WhatsApp Connect */}
            <div className="mt-5">
              <a
                href={companyDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-[#1F5138] border border-[#159568]/50 text-white hover:bg-[#159568] transition-all text-xs font-semibold shadow-sm"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* REGULATORY & FIDUCIARY DISCLOSURE */}
        <div className="my-8 p-5 rounded-xl bg-[#1B374C]/50 border border-[#C6A66B]/25 shadow-sm">
          <div className="flex items-center gap-2 mb-2 text-[#C6A66B] font-semibold text-xs tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-[#C6A66B] shrink-0" />
            <span>Regulatory & Fiduciary Disclosure</span>
          </div>
          <p className="text-xs leading-relaxed text-[#D1DEE5]">
            {regulatoryDisclosures.fiduciaryNotice}
          </p>
        </div>

        {/* COPYRIGHT & LEGAL LINKS */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C9EA8]">
          <div>
            © {currentYear} {companyDetails.name}. All rights reserved. Complexity 2 Simplicity.
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#8C9EA8] hover:text-[#F8F8F2] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
