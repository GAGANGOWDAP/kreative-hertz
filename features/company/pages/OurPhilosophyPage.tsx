import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'
import { PageShell } from '@/components/layout/PageShell'
import { SectionBadge } from '@/components/shared/SectionBadge'
import { HeroBackground } from '@/components/shared/HeroBackground'
import {
  ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Phone, Mail,
  HelpCircle, Award, Users, Compass, Briefcase, ChevronRight,
  ChevronLeft, Clock, MapPin, AlertCircle, Home, Check
} from 'lucide-react'
import {
  companyDetails, servicesData, strategyPillars, gapAnalysisAreas,
  personalFinanceAwareness, collegeProgramModules, communityEcosystem,
  articles, ServiceItem, KnowledgeArticle
} from '@/content'

export function OurPhilosophyPage() {
  return (
    <PageShell>
      <section className="relative w-full section-institutional overflow-hidden bg-[#F7FAF8] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-4xl">
          <div className="flex items-center gap-2 text-xs text-[#4F615A] mb-3">
            <Link href="/" className="hover:text-[#1F5138]">Home</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-[#1F5138]">About Us</Link>
            <span>/</span>
            <span className="text-[#172B3A] font-semibold">Our Philosophy</span>
          </div>
          <SectionBadge>Core Principles</SectionBadge>
          <h1 className="h1 mb-3 font-heading">The Kreative Hertz Philosophy</h1>
          <p className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-4">
            Mindset · Moral · Awareness
          </p>
          <p className="text-sm text-[#4F615A] leading-relaxed max-w-2xl">
            Financial stability is not created by high incomes alone; it is cultivated through disciplined delayed gratification, moral family protection, and structural awareness of predatory credit traps.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-4xl space-y-6">
          {personalFinanceAwareness.map((p, idx) => (
            <div key={idx} className="institutional-card p-6">
              <span className="text-xs font-mono font-bold text-[#1F5138] uppercase tracking-wider mb-1 block">
                Pillar 0{idx + 1}
              </span>
              <h3 className="text-xl font-bold text-[#172B3A] mb-1 font-heading">{p.title}</h3>
              <div className="text-xs font-semibold text-[#1F5138] mb-3">{p.tagline}</div>
              <p className="text-xs text-[#4F615A] leading-relaxed mb-4">{p.desc}</p>
              <div className="border-t border-[#E2EBE5] pt-3">
                <div className="text-[10px] font-bold text-[#172B3A] uppercase tracking-wider mb-2">Core Tenants</div>
                <ul className="space-y-1 text-xs text-[#26332D]">
                  {p.corePrinciples.map((cp, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#159568]">✓</span>
                      <span>{cp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="text-center pt-4">
            <Link href="/about" className="text-xs font-bold text-[#1F5138] hover:underline">
              ← Return to About Us Overview
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

// Dedicated Subpage: /about/approach
