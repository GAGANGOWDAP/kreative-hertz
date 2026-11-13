'use client'

import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { FloatingContactWidget } from '@/components/shared/FloatingContactWidget'

export interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAF8]">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContactWidget />
    </div>
  )
}

