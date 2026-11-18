'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, ArrowRight } from 'lucide-react'
import { getAssetPath } from '@/lib/assets'
import { companyDetails } from '@/content/company/company-info'
import { footerLegalLinks, regulatoryDisclosures } from '@/content/navigation/footer-navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  // Quick Navigation links required by institutional specification
  const quickNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services Overview', href: '/services' },
    { label: 'Wealth Architect', href: '/wealth-architect' },
    { label: 'Life Strategist', href: '/life-strategist' },
    { label: 'Knowledge Hub', href: '/knowledge-hub' },
    { label: 'Contact Us', href: '/contact' }
  ]

  // Financial Services categories with exact working routes
  const financialServiceLinks = [
    { label: 'Insurance Advisory (5)', href: '/services/insurance' },
    { label: 'Investments & Compounding (4)', href: '/services/investments' },
    { label: 'Loans & Credit Architecture (4)', href: '/services/loans' },
    { label: 'Real Estate Due Diligence (2)', href: '/services/real-estate' }
  ]

  const programmeLinks = [
    { label: 'Student Financial Literacy', href: '/life-strategist' },
    { label: 'Family Gap Analysis', href: '/wealth-architect#gap-analysis' },
    { label: 'College & Corporate Programs', href: '/products' }
  ]

  return (
    <footer id="footer" className="footer-site bg-[#142C3E] text-[#F7FAF8] border-t border-[#0A5A42]/30">
      <div className="container max-w-6xl mx-auto px-6 py-12 md:py-16">
        {/* TOP SECTION: 4 BALANCED INSTITUTIONAL COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand Identity & Positioning (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group mb-4"
              aria-label="Kreative Hertz Home"
            >
              <div className="w-11 h-11 rounded-lg bg-[#0D261C] border border-[#11A778] flex items-center justify-center overflow-hidden shadow-md group-hover:border-[#11A778]/80 transition-colors shrink-0">
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
                <span className="text-[9px] font-bold tracking-widest text-[#11A778] uppercase font-heading mt-0.5">
                  {companyDetails.tagline.toUpperCase()}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#CAD9D0] leading-relaxed mb-4 max-w-sm">
              Institutional financial advisory and life strategy consultancy founded by Karthik R in Bengaluru. Converting financial complexity into clear, durable strategies across protection, wealth compounding, and moral financial habits.
            </p>

            <div className="space-y-1.5 text-xs font-semibold">
              <div className="flex items-center gap-2 text-[#11A778]">
                <span className="text-[10px] text-[#8C9EA8] uppercase tracking-wider font-mono">Process:</span>
                {companyDetails.framework.map((fw, idx) => (
                  <React.Fragment key={idx}>
                    <span>{fw}</span>
                    {idx < companyDetails.framework.length - 1 && (
                      <span className="text-[#8C9EA8]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex items-center gap-2 text-[#CAD9D0]">
                <span className="text-[10px] text-[#8C9EA8] uppercase tracking-wider font-mono">Pillars:</span>
                {companyDetails.corePhilosophy.map((cp, idx) => (
                  <React.Fragment key={idx}>
                    <span>{cp}</span>
                    {idx < companyDetails.corePhilosophy.length - 1 && (
                      <span className="text-[#8C9EA8]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#11A778] font-heading mb-4 flex items-center gap-1.5">
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickNavLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#CAD9D0] hover:text-[#11A778] transition-colors font-body flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Financial Services & Programmes (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#11A778] font-heading mb-4">
              Financial Services
            </h4>
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#8C9EA8] tracking-wider block mb-2 font-mono">
                  15 Core Advisory Solutions
                </span>
                <ul className="space-y-1.5 text-xs">
                  {financialServiceLinks.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="text-[#CAD9D0] hover:text-[#11A778] transition-colors"
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-white/5">
                <span className="text-[10px] uppercase font-semibold text-[#8C9EA8] tracking-wider block mb-2 font-mono">
                  Advisory Programmes
                </span>
                <ul className="space-y-1.5 text-xs">
                  {programmeLinks.map((p) => (
                    <li key={p.href}>
                      <Link
                        href={p.href}
                        className="text-[#CAD9D0] hover:text-[#11A778] transition-colors"
                      >
                        {p.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Information & Direct Desk (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#11A778] font-heading mb-4">
                Official Advisory Desk
              </h4>
              <div className="space-y-3 text-xs">
                {/* Official Phone */}
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="flex items-center gap-2.5 text-[#CAD9D0] hover:text-white transition-colors group"
                >
                  <div className="w-7 h-7 rounded bg-[#0A5A42]/60 border border-[#11A778]/40 flex items-center justify-center shrink-0 text-[#11A778] group-hover:bg-[#0A5A42] group-hover:text-white transition-colors">
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
                  <div className="w-7 h-7 rounded bg-[#0A5A42]/60 border border-[#11A778]/40 flex items-center justify-center shrink-0 text-[#11A778] group-hover:bg-[#0A5A42] group-hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8C9EA8] block uppercase">Official Email</span>
                    <span className="font-semibold text-white">{companyDetails.email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-2.5 text-[#CAD9D0]">
                  <div className="w-7 h-7 rounded bg-[#0A5A42]/60 border border-[#11A778]/40 flex items-center justify-center shrink-0 text-[#11A778]">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8C9EA8] block uppercase">Location</span>
                    <span className="font-medium text-white">{companyDetails.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Connect & Book Consultation Link */}
            <div className="mt-5 space-y-2.5">
              <a
                href={companyDetails.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-[#0A5A42] border border-[#11A778]/50 text-white hover:bg-[#11A778] transition-all text-xs font-semibold shadow-xs"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Advisory Desk</span>
              </a>

              <Link
                href="/book-session"
                className="inline-flex items-center justify-center gap-1.5 w-full text-xs font-semibold text-[#11A778] hover:text-white transition-colors py-1"
              >
                <span>Book a Strategy Consultation</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>

        {/* REGULATORY & FIDUCIARY DISCLOSURE */}
        <div className="my-8 p-5 rounded-2xl bg-[#0A5A42]/20 border border-[#11A778]/30 shadow-xs">
          <div className="flex items-center gap-2 mb-2 text-[#11A778] font-semibold text-xs tracking-wider uppercase">
            <ShieldCheck className="w-4 h-4 text-[#11A778] shrink-0" />
            <span>Regulatory & Fiduciary Disclosure</span>
          </div>
          <p className="text-xs leading-relaxed text-[#CAD9D0]">
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
                className="text-[#8C9EA8] hover:text-[#F7FAF8] transition-colors"
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
