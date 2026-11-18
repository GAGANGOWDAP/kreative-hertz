import React from 'react'
import Image from 'next/image'
import { getAssetPath } from '@/lib/assets'

export interface HeroBackgroundProps {
  imageSrc?: string
  alt?: string
  objectPosition?: string
  gradientClassName?: string
  variant?: 'dark' | 'light'
}

export function HeroBackground({
  imageSrc = '/images/hero-about.jpg',
  alt = 'Indian family and financial growth architecture',
  objectPosition = 'object-[80%_center] sm:object-[82%_center] md:object-[85%_center] lg:object-[85%_center] xl:object-right',
  gradientClassName,
  variant = 'light'
}: HeroBackgroundProps = {}) {
  const isDark = variant === 'dark'
  const effectiveGradient =
    gradientClassName ||
    (isDark
      ? 'bg-gradient-to-b from-[#07241A]/95 via-[#07241A]/85 via-50% to-[#07241A]/30 lg:bg-gradient-to-r lg:from-[#07241A]/95 lg:via-[#07241A]/70 lg:to-transparent'
      : 'bg-gradient-to-b from-[#F7FAF8]/95 via-[#F7FAF8]/88 to-[#F7FAF8]/50 lg:bg-gradient-to-r lg:from-[#F7FAF8]/95 lg:via-[#F7FAF8]/80 lg:to-transparent')

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <Image
        src={getAssetPath(imageSrc)}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className={`object-cover ${objectPosition}`}
      />
      <div className={`absolute inset-0 ${effectiveGradient}`} />
      <div
        className={`absolute inset-x-0 bottom-0 h-16 sm:h-24 ${
          isDark
            ? 'bg-gradient-to-t from-[#07241A]/80 via-[#07241A]/30 to-transparent'
            : 'bg-gradient-to-t from-[#F7FAF8]/90 via-[#F7FAF8]/40 to-transparent'
        }`}
      />
    </div>
  )
}
