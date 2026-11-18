'use client'

/**
 * =========================================================================
 * KREATIVE HERTZ COMPONENT ARCHITECTURE & COMPATIBILITY LAYER
 * =========================================================================
 * All website section components have been extracted and refactored into
 * modular, feature-based directories under `/features/`:
 * - /features/home/sections/
 * - /features/services/components/
 * - /features/wealth-architect/components/
 * - /features/life-strategist/components/
 * - /features/knowledge-hub/components/
 * - /features/community/components/
 * - /features/consultation/components/
 *
 * This barrel export is preserved to ensure 100% backward compatibility
 * across all existing imports.
 * =========================================================================
 */

// Layout components
export { BrandLogo } from './layout/BrandLogo'
export { Navbar } from './layout/Navbar'
export { MegaMenu } from './layout/MegaMenu'
export { MobileDrawer } from './layout/MobileDrawer'
export { Footer } from './layout/Footer'
export { PageShell } from './layout/PageShell'

// Shared presentational components
export { SectionBadge } from './shared/SectionBadge'
export { ServiceIcon, getServiceIcon } from './shared/ServiceIcon'
export { InteractiveFaqList } from './shared/InteractiveFaqList'
export { FloatingContactWidget } from './shared/FloatingContactWidget'
export { ExecutiveProfile } from './shared/ExecutiveProfile'
export { HeroBackground } from './shared/HeroBackground'

// Home feature components
export {
  HeroSection,
  VisitorRequirementSelector,
  TwoDisciplinesOverview,
  HowWeWorkSection,
  HomeBookingCtaSection
} from '@/features/home'

// Services feature components
export { ServicesExplorer } from '@/features/services'

// Wealth Architect feature components
export {
  FinancialGapAnalysisSection,
  SevenPillarsSection,
  RealEstateSection
} from '@/features/wealth-architect'

// Life Strategist feature components
export {
  StrategyExplorer,
  CollegeProgramsSection
} from '@/features/life-strategist'

// Knowledge Hub feature components
export {
  KnowledgeHubHomeSection,
  KnowledgeHubExplorer
} from '@/features/knowledge-hub'

// Community feature components
export { CommunityReferEarnSection } from '@/features/community'

// Consultation feature components
export { BookSessionSection } from '@/features/consultation'
