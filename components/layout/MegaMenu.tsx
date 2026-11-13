'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Shield } from 'lucide-react'
import { wealthMegaMenuGroups } from '@/content/navigation/main-navigation'
import { getServiceIcon } from '@/components/shared/ServiceIcon'

export interface MegaMenuProps {
  onClose: () => void
}

export function MegaMenu({ onClose }: MegaMenuProps) {
  return (
    <div
      role="region"
      aria-label="Wealth Architect Solutions Directory"
      className="mega-menu-panel"
      onMouseLeave={onClose}
    >
      <div className="mega-menu-grid">
        {wealthMegaMenuGroups.map((group, gIdx) => (
          <div key={gIdx} className="mega-menu-col">
            <div className="mega-menu-col-header">
              <span className="mega-menu-col-title">{group.title}</span>
              <span className="mega-menu-col-sub">{group.subtitle}</span>
            </div>
            <ul className="mega-menu-list">
              {group.services.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="mega-menu-link group"
                    onClick={onClose}
                  >
                    <div className="mega-menu-icon-wrap">
                      {getServiceIcon(svc.icon)}
                    </div>
                    <div className="mega-menu-text-wrap">
                      <div className="mega-menu-item-title group-hover:text-[#0A5A42]">
                        {svc.title}
                      </div>
                      <div className="mega-menu-item-desc">{svc.desc}</div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mega Menu Institutional Bottom Bar */}
      <div className="mega-menu-bottom-bar">
        <div className="flex items-center gap-2 text-xs text-[#4F615A]">
          <Shield size={14} className="text-[#0A5A42]" />
          <span>Fiduciary Standard: Independent diagnostic review with zero proprietary product bias.</span>
        </div>
        <Link
          href="/wealth-architect"
          onClick={onClose}
          className="text-xs font-bold text-[#0A5A42] hover:text-[#074331] inline-flex items-center gap-1 group"
        >
          <span>View All 15 Services</span>
          <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

