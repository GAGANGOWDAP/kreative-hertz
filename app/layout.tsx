import type { Metadata, Viewport } from 'next'
import { Manrope, Inter } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kreativehertz.in'),
  title: {
    default: 'Kreative Hertz | Wealth Architect & Life Strategist | Complexity 2 Simplicity',
    template: '%s | Kreative Hertz'
  },
  description: 'Comprehensive financial advisory, life & health insurance, mutual fund compounding, loan financing, and financial education by Kreative Hertz. Complexity 2 Simplicity.',
  keywords: [
    'Kreative Hertz',
    'Complexity 2 Simplicity',
    'Wealth Architect',
    'Life Strategist',
    'Financial Services India',
    'Life Insurance',
    'Health Insurance',
    'Mutual Funds SIP',
    'Home Loans',
    'Personal Loans',
    'Business Loans',
    'Loan Against Property',
    'Financial Literacy',
    'Karthik R'
  ],
  authors: [{ name: 'Kreative Hertz' }, { name: 'Karthik R' }],
  creator: 'Kreative Hertz',
  publisher: 'Kreative Hertz',
  icons: {
    icon: '/logo-icon.png',
    apple: '/logo-icon.png',
    shortcut: '/logo-icon.png'
  },
  openGraph: {
    title: 'Kreative Hertz | Wealth Architect & Life Strategist',
    description: 'Transforming financial complexity into actionable simplicity through ethical protection and disciplined wealth architecture.',
    url: 'https://kreativehertz.in',
    siteName: 'Kreative Hertz',
    images: [
      {
        url: '/logo-full.png',
        width: 1024,
        height: 1024,
        alt: 'Kreative Hertz - Complexity 2 Simplicity'
      }
    ],
    locale: 'en_IN',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kreative Hertz | Wealth Architect & Life Strategist',
    description: 'Transforming financial complexity into actionable simplicity through ethical protection and disciplined wealth architecture.',
    images: ['/logo-full.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0A5A42',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="antialiased selection:bg-[#E8F3ED] selection:text-[#0A5A42] font-sans">
        {children}
      </body>
    </html>
  )
}
