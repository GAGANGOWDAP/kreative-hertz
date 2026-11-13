export interface NavItem {
  label: string
  href: string
  isCta?: boolean
}

// Exactly 5 primary navigation items for desktop & mobile
export const primaryNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Blog', href: '/blog' }
]

// Prominent desktop booking CTA
export const headerBookingCta: NavItem = {
  label: 'Book a Session',
  href: '/book-session',
  isCta: true
}

export interface MegaMenuGroup {
  title: string
  subtitle: string
  services: {
    title: string
    href: string
    desc: string
    icon: string
  }[]
}

export const wealthMegaMenuGroups: MegaMenuGroup[] = [
  {
    title: 'Protection & Insurance',
    subtitle: 'Risk transfer without investment conflicts',
    services: [
      { title: 'Life Insurance', href: '/services/life-insurance', desc: 'Pure term protection & HLV adequacy', icon: 'Shield' },
      { title: 'Health Insurance', href: '/services/health-insurance', desc: 'Zero sub-limit family medical security', icon: 'Heart' },
      { title: 'Motor Insurance', href: '/services/motor-insurance', desc: 'Zero depreciation & fleet coverage', icon: 'Car' },
      { title: 'Travel Insurance', href: '/services/travel-insurance', desc: 'Schengen & global overseas medical', icon: 'Plane' },
      { title: 'Family Health Security', href: '/services/family-health-security', desc: 'Multi-gen & senior parent shields', icon: 'Users' },
      { title: 'Business Insurance', href: '/services/business-insurance', desc: 'Fire, liability & Keyman protection', icon: 'Briefcase' }
    ]
  },
  {
    title: 'Investments & Compounding',
    subtitle: 'Goal-aligned wealth architecture',
    services: [
      { title: 'Mutual Funds & SIP', href: '/services/mutual-funds', desc: 'Step-up compounding & zero clutter', icon: 'TrendingUp' },
      { title: 'Financial Planning', href: '/services/financial-planning', desc: 'Holistic wealth & milestone mapping', icon: 'Compass' },
      { title: 'Retirement Planning', href: '/services/retirement-planning', desc: 'Inflation-proof multi-bucket corpus', icon: 'Landmark' },
      { title: 'Child Education Fund', href: '/services/child-education-fund', desc: 'Ring-fenced milestone compounding', icon: 'Wallet' }
    ]
  },
  {
    title: 'Financing & Property',
    subtitle: 'Transparent debt & buyer representation',
    services: [
      { title: 'Home Loans', href: '/services/home-loans', desc: 'Repo rate loans & balance transfer', icon: 'Home' },
      { title: 'Personal Loans', href: '/services/personal-loans', desc: 'High-cost credit card consolidation', icon: 'Wallet' },
      { title: 'Business Loans', href: '/services/business-loans', desc: 'Working capital, CC/OD & MSME debt', icon: 'Building' },
      { title: 'Loan Against Property', href: '/services/loan-against-property', desc: 'Unlocking dormant real estate equity', icon: 'Layers' },
      { title: 'Residential Property', href: '/services/residential-property', desc: 'Objective RERA buyer advisory', icon: 'Building' }
    ]
  }
]
