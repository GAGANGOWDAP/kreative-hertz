export interface FounderInfo {
  name: string
  role: string
  bio: string
  designation: string
}

export interface CompanyDetails {
  name: string
  tagline: string
  founder: FounderInfo
  title: string
  established: string
  location: string
  phone: string
  displayPhone: string
  phoneFormatted: string
  email: string
  address: {
    city: string
    state: string
    country: string
  }
  whatsappUrl: string
  workingHours: string
  framework: string[]
  corePhilosophy: string[]
}

export const companyDetails: CompanyDetails = {
  name: 'Kreative Hertz',
  tagline: 'Complexity 2 Simplicity',
  founder: {
    name: 'Karthik R',
    role: 'Founder & Principal Consultant',
    designation: 'Wealth Architect | Life Strategist',
    bio: 'Karthik R founded Kreative Hertz in June 2022 in Bengaluru with a commitment to transforming complex financial products into simple, transparent, and durable solutions. Operating across Wealth Architecture and Life Strategy, he advises families, salaried professionals, and institutions on insurance risk auditing, SIP wealth compounding, debt restructuring, and moral financial habits.'
  },
  title: 'Wealth Architect | Life Strategist',
  established: 'June 2022',
  location: 'Bengaluru, Karnataka, India',
  phone: '+919876543210',
  displayPhone: '+91 98765 43210',
  phoneFormatted: '+91 98765 43210',
  email: 'fulfil@kreativehertz.in',
  address: {
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India'
  },
  whatsappUrl: 'https://wa.me/919876543210?text=Hello%20Karthik,%20I%20would%20like%20to%20schedule%20a%20consultation%20with%20Kreative%20Hertz.',
  workingHours: 'Monday – Saturday: 9:30 AM – 7:00 PM IST',
  framework: ['Understand', 'Analyse', 'Strategise'],
  corePhilosophy: ['Mindset', 'Moral', 'Awareness']
}
