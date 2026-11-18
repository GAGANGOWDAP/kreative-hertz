import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Check } from 'lucide-react'
import { strategyPillars } from '@/content'

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
