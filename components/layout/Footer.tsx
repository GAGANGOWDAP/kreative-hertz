'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck } from 'lucide-react'
import { companyDetails } from '@/content/company/company-info'
import { primaryNavItems } from '@/content/navigation/main-navigation'
import { footerLegalLinks, regulatoryDisclosures } from '@/content/navigation/footer-navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer" className="footer-site bg-[#142C3E] text-white border-t border-[#CAD9D0]/20">
      <div className="container max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* SECTION 1: BRAND IDENTITY & PRIMARY 5 NAVIGATION LINKS */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand Identity */}
          <div className="flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group"
              aria-label="Kreative Hertz Home"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0A1E17] border border-[#C6A15B]/50 flex items-center justify-center p-1.5 shadow-md group-hover:border-[#C6A15B] transition-colors flex-shrink-0">
                <Image
                  src="/logo-icon.png"
                  alt="Kreative Hertz Crest"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-white text-[16px] leading-tight font-heading">
                  {companyDetails.name.toUpperCase()}
                </span>
                <span className="text-[9px] font-bold tracking-widest text-[#C6A15B] uppercase font-heading mt-0.5">
                  {companyDetails.tagline.toUpperCase()}
                </span>
              </div>
            </Link>

            <div className="mt-2.5 flex items-center gap-2 text-xs font-semibold text-[#11A778]">
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

          {/* Primary Navigation (Exactly 5 direct clickable links, zero dropdowns) */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium">
              {primaryNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#F7FAF8] hover:text-[#11A778] transition-colors font-body py-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* SECTION 2: COMPACT BUSINESS CONTACT SECTION */}
        <div className="py-8 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 flex-grow">
              {/* Official Phone */}
              <a
                href={`tel:${companyDetails.phone}`}
                className="inline-flex items-center gap-3 text-sm text-[#CAD9D0] hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1B374C] flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#C6A15B]/40 transition-colors">
                  <Phone className="w-4 h-4 text-[#C6A15B]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#8C9EA8] uppercase font-semibold tracking-wider">
                    Call Us
                  </span>
                  <span className="font-medium text-white">{companyDetails.phoneFormatted}</span>
                </div>
              </a>

              {/* Official Email */}
              <a
                href={`mailto:${companyDetails.email}`}
                className="inline-flex items-center gap-3 text-sm text-[#CAD9D0] hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#1B374C] flex items-center justify-center shrink-0 border border-white/5 group-hover:border-[#C6A15B]/40 transition-colors">
                  <Mail className="w-4 h-4 text-[#C6A15B]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#8C9EA8] uppercase font-semibold tracking-wider">
                    Email Desk
                  </span>
                  <span className="font-medium text-white">{companyDetails.email}</span>
                </div>
              </a>

              {/* Business Location */}
              <div className="inline-flex items-center gap-3 text-sm text-[#CAD9D0]">
                <div className="w-8 h-8 rounded-lg bg-[#1B374C] flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="w-4 h-4 text-[#C6A15B]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#8C9EA8] uppercase font-semibold tracking-wider">
                    Office Location
                  </span>
                  <span className="font-medium text-white">{companyDetails.location}</span>
                </div>
              </div>
            </div>

            {/* Verified WhatsApp Connect */}
            <div className="flex items-center shrink-0">
              <a
                href={companyDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#11A778]/15 border border-[#11A778]/40 text-[#11A778] hover:bg-[#11A778] hover:text-white transition-all text-xs font-semibold shadow-sm"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 3: REGULATORY & FIDUCIARY DISCLOSURE (High Contrast & Clear Readability) */}
        <div className="my-8 p-5 rounded-xl bg-[#1B374C]/60 border border-[#C6A15B]/25 shadow-sm">
          <div className="flex items-center gap-2 mb-2.5 text-[#C6A15B] font-semibold text-xs tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-[#C6A15B] shrink-0" />
            <span>Regulatory & Fiduciary Disclosure</span>
          </div>
          <p className="text-xs md:text-[13px] leading-relaxed text-[#D1DEE5]">
            {regulatoryDisclosures.fiduciaryNotice}
          </p>
        </div>

        {/* SECTION 4: COPYRIGHT & ESSENTIAL LEGAL LINKS */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C9EA8]">
          <div>
            © {currentYear} {companyDetails.name}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {footerLegalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#8C9EA8] hover:text-white transition-colors"
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
