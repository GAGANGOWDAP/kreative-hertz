import React from 'react'
import {
  Shield,
  Heart,
  Car,
  Plane,
  Users,
  Briefcase,
  TrendingUp,
  Compass,
  Landmark,
  Wallet,
  Building,
  Home,
  Layers,
  HelpCircle
} from 'lucide-react'

export function getServiceIcon(iconType: string, className?: string) {
  const props = { size: 16, className }
  switch (iconType) {
    case 'Shield': return <Shield {...props} />
    case 'Heart': return <Heart {...props} />
    case 'Car': return <Car {...props} />
    case 'Plane': return <Plane {...props} />
    case 'Users': return <Users {...props} />
    case 'Briefcase': return <Briefcase {...props} />
    case 'TrendingUp': return <TrendingUp {...props} />
    case 'Compass': return <Compass {...props} />
    case 'Landmark': return <Landmark {...props} />
    case 'Wallet': return <Wallet {...props} />
    case 'Building': return <Building {...props} />
    case 'Home': return <Home {...props} />
    case 'Layers': return <Layers {...props} />
    default: return <HelpCircle {...props} />
  }
}

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  return getServiceIcon(name, className)
}

