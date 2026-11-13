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
          width={36}
          height={36}
          className="object-contain"
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

