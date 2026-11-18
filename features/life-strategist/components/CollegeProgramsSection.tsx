import React from 'react'
import Link from 'next/link'
import { Award, ArrowRight, CheckCircle2, Users, BookOpen } from 'lucide-react'
import { collegeProgramModules } from '@/content'
import { SectionBadge } from '@/components/shared/SectionBadge'

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
