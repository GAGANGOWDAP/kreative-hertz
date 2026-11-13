/**
 * =========================================================================
 * KREATIVE HERTZ COMPATIBILITY LAYER
 * =========================================================================
 * This file maintains 100% backward compatibility for all existing imports
 * across `app/page.tsx`, `components/site.tsx`, `app/[...slug]/page.tsx`,
 * and `app/sitemap.ts`.
 *
 * Content is now cleanly modularized and maintained inside `/content/`:
 * - /content/company/company-info.ts
 * - /content/services/ (insurance, investments, loans, real-estate)
 * - /content/knowledge-hub/articles.ts
 * - /content/wealth-architect/gap-analysis.ts
 * - /content/life-strategist/ (strategy-content, college-programs)
 * - /content/community/community-content.ts
 * - /content/navigation/ (main-navigation, footer-navigation)
 * - /content/faqs/general-faqs.ts
 * =========================================================================
 */

export * from '@/content'
