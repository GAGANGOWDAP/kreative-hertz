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

const isGithubPages = process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true'
const basePath = isGithubPages ? '/kreative-hertz' : ''
const siteUrl = isGithubPages ? 'https://gagangowdap.github.io/kreative-hertz' : 'https://kreativehertz.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    icon: `${basePath}/logo-icon.png`,
    apple: `${basePath}/logo-icon.png`,
    shortcut: `${basePath}/logo-icon.png`
  },
  openGraph: {
    title: 'Kreative Hertz | Wealth Architect & Life Strategist',
    description: 'Transforming financial complexity into actionable simplicity through ethical protection and disciplined wealth architecture.',
    url: siteUrl,
    siteName: 'Kreative Hertz',
    images: [
      {
        url: `${siteUrl}/logo-full.png`,
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
    images: [`${siteUrl}/logo-full.png`]
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
  themeColor: '#1F5138',
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
      <body className="antialiased selection:bg-[#EAF3EC] selection:text-[#1F5138] font-sans">
        {children}
      </body>
    </html>
  )
}
