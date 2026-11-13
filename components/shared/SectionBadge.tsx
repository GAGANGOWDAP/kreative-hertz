import React from 'react'

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge-glow text-xs mb-3 font-semibold tracking-wide">
      {children}
    </span>
  )
}

