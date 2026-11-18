'use client'

import React, { useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { BrandLogo } from './BrandLogo'
import { MobileDrawer } from './MobileDrawer'
import { primaryNavItems, headerBookingCta } from '@/content/navigation/main-navigation'

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Close mobile drawer on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Auto-close on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Scroll-responsive transition: IntersectionObserver & scroll threshold
  useEffect(() => {
    const hero = document.querySelector('main > section:first-of-type')

    const updateScrolled = () => {
      if (hero) {
        const rect = hero.getBoundingClientRect()
        // Scrolled beyond hero when hero bottom clears navbar, or passed scroll threshold
        const scrolled = rect.bottom <= 80 || window.scrollY > 80
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
      } else {
        const scrolled = window.scrollY > 80
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev))
      }
    }

    // Check initial position on mount / route transition
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })

    let observer: IntersectionObserver | null = null
    if (hero && typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0]
          if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
            setIsScrolled(true)
          } else if (entry.isIntersecting && entry.boundingClientRect.top >= 0) {
            setIsScrolled(false)
          }
        },
        {
          root: null,
          rootMargin: '-76px 0px 0px 0px',
          threshold: 0
        }
      )
      observer.observe(hero)
    }

    return () => {
      window.removeEventListener('scroll', updateScrolled)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [pathname])

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href === '/services') return pathname.startsWith('/services') || pathname.startsWith('/wealth-architect')
    if (href === '/products') return pathname.startsWith('/products') || pathname.startsWith('/life-strategist')
    if (href === '/blog') return pathname.startsWith('/blog') || pathname.startsWith('/knowledge-hub')
    return pathname.startsWith(href)
  }

  return (
    <>
      <header className={`site-header sticky top-0 left-0 right-0 z-50 ${isScrolled ? 'is-scrolled' : ''}`} ref={navRef}>
        <div className="container nav-bar-inner">
          <BrandLogo onClick={() => setMobileMenuOpen(false)} />

          {/* =========================================================
              DESKTOP NAVIGATION (1280px+)
              EXACTLY 5 ITEMS: Home, About Us, Services, Products, Blog
              ZERO dropdowns. ZERO mega menus. Hidden on mobile/tablet below 1280px.
             ========================================================= */}
          <nav
            className="hidden xl:flex nav-desktop-menu"
            aria-label="Main Desktop Navigation"
          >
            {primaryNavItems.map((item) => {
              const active = isLinkActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                </Link>
              )
            })}

            {/* Book a Session Primary CTA Button (Separate Desktop Action) */}
            <Link
              href={headerBookingCta.href}
              className="btn-header-cta group ml-2"
              aria-label="Schedule a Financial Consultation"
            >
              <span>{headerBookingCta.label}</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </nav>

          {/* Mobile & Tablet Toggle (Visible below 1280px) */}
          <div className="flex items-center xl:hidden">
            <button
              type="button"
              className="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE & TABLET DRAWER (Below 1280px)
          Features exactly the 5 primary landing links + Book a Session CTA
          Rendered as sibling to break out of -webkit-backdrop-filter
          containing block on iOS Safari / iPhone!
         ========================================================= */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        isScrolled={isScrolled}
      />
    </>
  )
}
