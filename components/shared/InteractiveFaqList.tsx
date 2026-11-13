'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export interface FaqItemProps {
  q: string
  a: string
}

export function InteractiveFaqList({ items }: { items: FaqItemProps[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx
        return (
          <div
            key={idx}
            className={`border rounded transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#0A5A42] shadow-sm'
                : 'bg-white/80 border-[#CAD9D0] hover:border-[#0A5A42]/50'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-semibold text-sm text-[#142C3E] font-heading focus:outline-none"
              aria-expanded={isOpen}
            >
              <span>{item.q}</span>
              <div
                className={`w-7 h-7 rounded flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 bg-[#E8F3ED] text-[#0A5A42]' : 'bg-[#F7FAF8] text-[#4F615A]'
                }`}
              >
                <ChevronDown size={15} />
              </div>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 md:px-5 md:pb-5 text-xs text-[#4F615A] leading-relaxed border-t border-[#E2EBE5] pt-3">
                {item.a}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

