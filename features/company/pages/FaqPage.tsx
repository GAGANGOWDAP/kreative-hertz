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
import { InteractiveFaqList } from '@/components/shared/InteractiveFaqList'
import { generalFaqs } from '@/content'

export function FaqPage() {
  const allFaqs = [
    {
      cat: 'Advisory & Philosophy',
      items: [
        {
          q: 'What does "Complexity 2 Simplicity" mean in practice?',
          a: 'Financial contracts and insurance policies are often filled with legal jargon, disease sub-limits, and obscure fees. We translate these into straightforward checklists so clients understand their actual commitments.'
        },
        {
          q: 'What is the distinction between a Wealth Architect and a Life Strategist?',
          a: 'A Wealth Architect diagnoses the portfolio and structures financial solutions (insurance covers, loan refinancing, asset allocation). A Life Strategist educates on money psychology, risk literacy, and disciplined financial habits.'
        },
        {
          q: 'When was Kreative Hertz established and by whom?',
          a: 'Kreative Hertz was established in June 2022 by Karthik R in Bengaluru, Karnataka.'
        }
      ]
    },
    {
      cat: 'Insurance & Risk Mitigation',
      items: [
        {
          q: 'Why do you prioritize pure term insurance over traditional endowment plans?',
          a: 'Endowment and money-back policies mix insurance with investment, often yielding 4% to 5% returns while leaving families drastically under-insured. Pure term plans provide 15–20x income replacement at affordable premiums, allowing surplus cash to compound in dedicated equity instruments.'
        },
        {
          q: 'What is the risk of room-rent sub-limits in health insurance?',
          a: 'If a policy contains a room rent limit and a hospital room above that cap is selected, insurers apply proportionate deductions to surgeon fees, nursing charges, and diagnostic tests, creating significant out-of-pocket expenses.'
        }
      ]
    },
    {
      cat: 'Investments & Compounding',
      items: [
        {
          q: 'Do you guarantee returns on mutual fund investments?',
          a: 'No. All mutual fund investments are subject to market risks. We emphasize asset allocation, time horizon discipline, and periodic rebalancing rather than short-term market timing.'
        },
        {
          q: 'What tax advantages does NPS offer?',
          a: 'Beyond the ₹1.5 Lakh limit under Section 80C, the National Pension System allows an exclusive deduction of up to ₹50,000 under Section 80CCD(1B).'
        }
      ]
    },
    {
      cat: 'Loans & Debt Management',
      items: [
        {
          q: 'When does a home loan balance transfer make economic sense?',
          a: 'If an existing lender charges 0.5% or more above prevailing bank rates and you have more than 10–15 years of tenure left, a balance transfer can save lakhs in interest outflow over the loan lifespan.'
        }
      ]
    }
  ]

  return (
    <PageShell>
      <section className="section-institutional bg-[#FFFFFF] border-b border-[#E2EBE5]">
        <div className="container max-w-4xl">
          <SectionBadge>Knowledge Base</SectionBadge>
          <h1 className="h1 mb-2">Frequently Asked Questions</h1>
          <p className="text-sm text-[#4F615A] leading-relaxed">
            Clear, transparent answers regarding our financial advisory methodology and services.
          </p>
        </div>
      </section>

      <section className="section-institutional bg-[#F7FAF8]">
        <div className="container max-w-4xl space-y-8">
          {allFaqs.map((sec, idx) => (
            <div key={idx}>
              <h2 className="text-xs font-bold text-[#1F5138] uppercase tracking-wider mb-4 border-b border-[#CAD9D0] pb-2">
                {sec.cat}
              </h2>
              <div className="space-y-3">
                {sec.items.map((item, i) => (
                  <div key={i} className="institutional-card p-5">
                    <h3 className="text-sm font-bold text-[#172B3A] mb-2 flex items-start gap-2">
                      <HelpCircle size={16} className="text-[#1F5138] flex-shrink-0 mt-0.5" />
                      <span>{item.q}</span>
                    </h3>
                    <p className="text-xs text-[#4F615A] leading-relaxed pl-6">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

// -------------------------------------------------------------
// 11. PRIVACY POLICY PAGE
// -------------------------------------------------------------
