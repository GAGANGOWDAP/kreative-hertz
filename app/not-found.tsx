import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Home, Compass } from 'lucide-react'
import { PageShell } from '@/components/site'
import { getAssetPath } from '@/lib/assets'

function HeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
      <Image
        src={getAssetPath('/hero-architecture.jpg')}
        alt="Modern glass architecture with subtle greenery"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(248, 248, 242, 0.87)' }}
      />
    </div>
  )
}

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative w-full section py-24 text-center overflow-hidden bg-[#F8F8F2] border-b border-[#E2EBE5]">
        <HeroBackground />
        <div className="relative z-10 container max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#E8F3ED] border border-[#C8D8CE] flex items-center justify-center mx-auto mb-6 text-[#0A5A42]">
            <Compass size={32} />
          </div>

          <span className="badge-glow text-xs mb-3">Error 404</span>

          <h1 className="text-3xl md:text-4xl font-extrabold text-[#142C3E] mb-3">
            Page Not Found
          </h1>

          <p className="text-sm text-[#4A5852] leading-relaxed mb-8">
            The page or service resource you are looking for doesn&apos;t exist, has been moved, or the link may be inaccurate. Let&apos;s guide you back to the right place.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-primary text-xs py-3 px-6">
              <Home size={16} />
              <span>Return to Homepage</span>
            </Link>
            <Link href="/wealth-architect" className="btn-secondary text-xs py-3 px-6">
              <span>View All Solutions</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
