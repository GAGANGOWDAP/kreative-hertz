import React from 'react'
import Link from 'next/link'
import { Users, TrendingUp, ArrowRight, HeartHandshake } from 'lucide-react'
import { communityEcosystem } from '@/content'
import { SectionBadge } from '@/components/shared/SectionBadge'

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
