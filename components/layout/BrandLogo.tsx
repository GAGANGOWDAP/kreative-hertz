'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'

export interface BrandLogoProps {
  onClick?: () => void
}

export function BrandLogo({ onClick }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="brand-anchor group"
      onClick={onClick}
      aria-label="Kreative Hertz Home"
    >
      <div className="brand-crest">
        <Image
          src={getAssetPath('/logo-icon.png')}
          alt="Kreative Hertz Crest"
          width={40}
          height={40}
          className="w-full h-full object-cover scale-125 transition-transform duration-200 group-hover:scale-130"
          priority
        />
      </div>
      <div className="brand-identity-text">
        <span className="brand-name">KREATIVE HERTZ</span>
        <span className="brand-motto">COMPLEXITY 2 SIMPLICITY</span>
      </div>
    </Link>
  )
}

