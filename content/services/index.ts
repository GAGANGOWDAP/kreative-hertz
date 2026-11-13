import { ServiceItem, insuranceServices } from './insurance'
import { investmentServices } from './investments'
import { loanServices } from './loans'
import { realEstateServices } from './real-estate'

export type { ServiceItem }

export const allServices: ServiceItem[] = [
  ...insuranceServices,
  ...investmentServices,
  ...loanServices,
  ...realEstateServices
]

export const servicesData = allServices

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find(s => s.slug === slug)
}

export function getServicesByCategory(category: ServiceItem['category']): ServiceItem[] {
  return allServices.filter(s => s.category === category)
}

