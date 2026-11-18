# Kreative Hertz — Institutional Financial Advisory Platform

> **Structured Wealth Architecture & Objective Financial Guidance**<br />
> Founded in June 2022, Bengaluru, Karnataka, India.

A high-performance institutional financial advisory web portal built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed with an editorial aesthetic, single-screen-first responsive UX, and a feature-based modular codebase architecture.

---

## 1. Project Overview

Kreative Hertz operates on a dual-discipline advisory framework:
- **Wealth Architect:** Diagnostic analysis, structured insurance risk mitigation, objective mutual fund asset allocation, debt optimization, and real estate asset verification.
- **Life Strategist:** Financial psychology, literacy programs for students, corporate awareness workshops, and generational money habits.

The website delivers:
- **Homepage:** Editorial presentation featuring 12 sequentially coordinated sections (Hero, Visitor Pathways, Two Disciplines, 4-Step Zig-Zag Roadmap, 15 Financial Services, Financial Gap Analysis, Real Estate, 7 Pillars Carousel, Knowledge Hub, FAQ, Consultation Booking, and Institutional Footer).
- **84 Static Routes:** Fully prerendered with Next.js static HTML export (`output: 'export'`), ready for zero-latency hosting on GitHub Pages.
- **Diagnostic Financial Assessment Tool:** Conservative institutional calculations for Term Life, Health Insurance, Emergency Liquidity, and Retirement Compounding Gaps.

---

## 2. Technology Stack

- **Framework:** Next.js 16 (App Router, Webpack builder, Static Site Generation)
- **UI Library:** React 19
- **Type Safety:** TypeScript 5+ (Strict Mode)
- **Styling:** Tailwind CSS 3.4 with custom typography, fluid clamp spacing, and institutional emerald palette (`#1F5138`, `#159568`, `#0A5A42`, `#EAF3EC`, `#F7FAF8`)
- **Icons:** Lucide React
- **Deployment Target:** GitHub Pages with automatic basePath resolution

---

## 3. Project Folder Structure

The project follows a clean, feature-based modular organization:

```
kreative-hertz/
├── app/                              # Next.js App Router (Layouts & Routes)
│   ├── [...slug]/
│   │   └── page.tsx                  # Dynamic route dispatcher & static params generator
│   ├── globals.css                   # Global styles, variables, typography & utility classes
│   ├── layout.tsx                    # Root HTML layout, metadata & font definitions
│   ├── not-found.tsx                 # Custom 404 page with institutional styling
│   ├── page.tsx                      # Homepage composed of modular feature sections
│   ├── robots.ts                     # Search engine crawler instructions
│   └── sitemap.ts                    # Dynamic XML sitemap generator
│
├── features/                         # Feature-based modular architecture
│   ├── home/                         # Homepage-specific sections
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── VisitorRequirementSelector.tsx
│   │   │   ├── TwoDisciplinesOverview.tsx
│   │   │   ├── HowWeWorkSection.tsx
│   │   │   └── HomeBookingCtaSection.tsx
│   │   └── index.ts
│   │
│   ├── services/                     # 15 Financial Services feature domain
│   │   ├── components/
│   │   │   └── ServicesExplorer.tsx  # Interactive directory with search & category filtering
│   │   ├── pages/
│   │   │   ├── ServicesOverviewPage.tsx
│   │   │   ├── ServiceCategoryPage.tsx
│   │   │   ├── ProductsLandingPage.tsx
│   │   │   └── ServiceDetailPage.tsx
│   │   └── index.ts
│   │
│   ├── wealth-architect/             # Wealth architecture & diagnostic gap analysis
│   │   ├── components/
│   │   │   ├── FinancialGapAnalysisSection.tsx # Household financial gap calculator
│   │   │   ├── SevenPillarsSection.tsx         # 7 Pillars carousel & stage selector
│   │   │   └── RealEstateSection.tsx           # Property advisory cards
│   │   ├── pages/
│   │   │   └── WealthArchitectPage.tsx
│   │   └── index.ts
│   │
│   ├── life-strategist/              # Life strategy & student/corporate literacy
│   │   ├── components/
│   │   │   ├── StrategyExplorer.tsx
│   │   │   └── CollegeProgramsSection.tsx
│   │   ├── pages/
│   │   │   ├── LifeStrategistPage.tsx
│   │   │   ├── FinancialAwarenessPage.tsx
│   │   │   ├── CollegeProgrammesPage.tsx
│   │   │   └── CorporateProgrammesPage.tsx
│   │   └── index.ts
│   │
│   ├── knowledge-hub/                # Financial research & publication
│   │   ├── components/
│   │   │   ├── KnowledgeHubHomeSection.tsx
│   │   │   └── KnowledgeHubExplorer.tsx
│   │   ├── pages/
│   │   │   ├── KnowledgeHubPage.tsx
│   │   │   └── KnowledgeArticleDetailPage.tsx
│   │   └── index.ts
│   │
│   ├── community/                    # Community, client network & referral ecosystem
│   │   ├── components/
│   │   │   └── CommunityReferEarnSection.tsx
│   │   ├── pages/
│   │   │   └── CommunityPage.tsx
│   │   └── index.ts
│   │
│   ├── consultation/                 # Advisory booking & contact inquiries
│   │   ├── components/
│   │   │   └── BookSessionSection.tsx
│   │   ├── pages/
│   │   │   ├── BookSessionPage.tsx
│   │   │   └── ContactPage.tsx
│   │   └── index.ts
│   │
│   ├── company/                      # Corporate & legal pages
│   │   ├── pages/
│   │   │   ├── AboutPage.tsx
│   │   │   ├── OurStoryPage.tsx
│   │   │   ├── FounderLeadershipPage.tsx
│   │   │   ├── OurPhilosophyPage.tsx
│   │   │   ├── OurApproachPage.tsx
│   │   │   ├── FaqPage.tsx
│   │   │   ├── PrivacyPage.tsx
│   │   │   ├── TermsPage.tsx
│   │   │   └── DisclaimerPage.tsx
│   │   └── index.ts
│   │
│   └── index.ts                      # Top-level feature barrel export
│
├── components/                       # Shared layout & reusable atomic components
│   ├── layout/
│   │   ├── Navbar.tsx                # Institutional navbar with scroll awareness
│   │   ├── MegaMenu.tsx              # Desktop mega-menu navigation
│   │   ├── MobileDrawer.tsx          # Mobile navigation drawer
│   │   ├── Footer.tsx                # 4-column institutional footer
│   │   ├── PageShell.tsx             # Standard page wrapper with header & footer
│   │   └── BrandLogo.tsx             # Kreative Hertz crest & wordmark
│   ├── shared/
│   │   ├── HeroBackground.tsx        # Responsive photographic background with gradients
│   │   ├── SectionBadge.tsx          # Institutional section badge
│   │   ├── ServiceIcon.tsx           # Category & service icon resolver
│   │   ├── InteractiveFaqList.tsx    # Accessible accordion FAQ list
│   │   ├── ExecutiveProfile.tsx      # Founder profile component
│   │   └── FloatingContactWidget.tsx # Floating WhatsApp & Phone contact pill
│   ├── ui/
│   │   └── button.tsx                # Base button primitive
│   └── site.tsx                      # Backward-compatibility barrel export
│
├── content/                          # Centralized content datasets (no presentation logic)
│   ├── company/company-info.ts       # Legal business name, founder, phone, email, address
│   ├── services/                     # 15 services divided by category:
│   │   ├── insurance.ts
│   │   ├── investments.ts
│   │   ├── loans.ts
│   │   ├── real-estate.ts
│   │   └── index.ts
│   ├── knowledge-hub/
│   │   ├── articles.ts               # Editorial articles & research guides
│   │   └── categories.ts             # Article taxonomy
│   ├── wealth-architect/
│   │   └── gap-analysis.ts           # Diagnostic area definitions & formulas
│   ├── life-strategist/
│   │   ├── strategy-content.ts       # 3 core pillars (Mindset, Moral, Awareness)
│   │   └── college-programs.ts       # Student financial literacy curriculum
│   ├── community/
│   │   └── community-content.ts      # Community ecosystem & client benefits
│   ├── faqs/
│   │   └── general-faqs.ts           # Comprehensive FAQ repository
│   ├── navigation/
│   │   ├── main-navigation.ts        # Header navbar & mega-menu links
│   │   └── footer-navigation.ts      # Quick nav, legal links & disclosures
│   └── index.ts
│
├── lib/                              # Core utilities & helpers
│   ├── assets.ts                     # `getAssetPath()` basePath prefix helper for GitHub Pages
│   ├── utils.ts                      # Class merging (`cn()`) helper
│   └── site-data.ts                  # Compatibility barrel re-exporting `/content`
│
└── public/                           # Static public assets
    ├── images/                       # High-resolution photographic assets
    │   ├── hero-family.jpg
    │   ├── hero-about.jpg
    │   ├── founder-portrait.jpg
    │   └── services/                 # 15 category-specific service photographs
    └── favicon.ico, logo-icon.png
```

---

## 4. Where to Edit Content & Sections

### 🏠 Homepage Sections
- **Hero Banner:** [`features/home/sections/HeroSection.tsx`](features/home/sections/HeroSection.tsx)
- **"How Can We Help You Today?" Cards:** [`features/home/sections/VisitorRequirementSelector.tsx`](features/home/sections/VisitorRequirementSelector.tsx)
- **Two Disciplines Section:** [`features/home/sections/TwoDisciplinesOverview.tsx`](features/home/sections/TwoDisciplinesOverview.tsx)
- **4-Step Zig-Zag Roadmap:** [`features/home/sections/HowWeWorkSection.tsx`](features/home/sections/HowWeWorkSection.tsx)
- **Final Consultation CTA:** [`features/home/sections/HomeBookingCtaSection.tsx`](features/home/sections/HomeBookingCtaSection.tsx)
- **Overall Homepage Composition:** [`app/page.tsx`](app/page.tsx)

### 📊 Financial Calculations & Gap Analysis
- **Formulas & Thresholds:** [`content/wealth-architect/gap-analysis.ts`](content/wealth-architect/gap-analysis.ts)
- **Diagnostic UI & Inputs:** [`features/wealth-architect/components/FinancialGapAnalysisSection.tsx`](features/wealth-architect/components/FinancialGapAnalysisSection.tsx)

### 💼 Services Information
- **Service Offerings, Descriptions & Bullets:** [`content/services/`](content/services/) (`insurance.ts`, `investments.ts`, `loans.ts`, `real-estate.ts`)
- **Services Directory Explorer:** [`features/services/components/ServicesExplorer.tsx`](features/services/components/ServicesExplorer.tsx)
- **Service Detail Page View:** [`features/services/pages/ServiceDetailPage.tsx`](features/services/pages/ServiceDetailPage.tsx)

### 📚 Knowledge Hub Articles
- **Articles, Headings, Reading Times & Content:** [`content/knowledge-hub/articles.ts`](content/knowledge-hub/articles.ts)
- **Article Categories:** [`content/knowledge-hub/categories.ts`](content/knowledge-hub/categories.ts)
- **Article Detail Page View:** [`features/knowledge-hub/pages/KnowledgeArticleDetailPage.tsx`](features/knowledge-hub/pages/KnowledgeArticleDetailPage.tsx)

### 🏢 Company Information & Contacts
- **Official Phone, Email, WhatsApp & Address:** [`content/company/company-info.ts`](content/company/company-info.ts)
- **About Us Page:** [`features/company/pages/AboutPage.tsx`](features/company/pages/AboutPage.tsx)
- **Founder & Leadership View:** [`features/company/pages/FounderLeadershipPage.tsx`](features/company/pages/FounderLeadershipPage.tsx)
- **Navigation Links & Footers:** [`content/navigation/`](content/navigation/)

### 🖼️ Images & Visual Assets
- All images reside in [`public/`](public/) (e.g. `public/images/`).
- Always reference public images through `getAssetPath('/images/...')` from [`@/lib/assets`](lib/assets.ts) to ensure correct asset resolution on GitHub Pages under the `/kreative-hertz` repository sub-path.

---

## 5. Development & Build Commands

### Install Dependencies
```powershell
npm install
```

### Run Local Development Server
```powershell
npm run dev
# Or with explicit host binding:
npx next dev --webpack -H 0.0.0.0 -p 3000
```
Open [http://localhost:3000](http://localhost:3000) or [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser.

### Run TypeScript Verification
```powershell
npx tsc --noEmit
```
Expected output: **0 errors**.

### Run Production Static Export
```powershell
npx next build --webpack
```
Outputs the static website to the [`out/`](out/) directory, generating all 84 prerendered HTML routes.

---

## 6. GitHub Pages Deployment

The project is configured for automated static deployment via GitHub Actions:
- `next.config.mjs` sets `output: 'export'` and assigns `basePath: '/kreative-hertz'` when building in production (`process.env.GITHUB_PAGES === 'true'`).
- The exported static files in `out/` are uploaded as GitHub Pages artifacts.
- To test the static build locally, run:
  ```powershell
  npx serve out -l 3000
  ```

---

## 7. License & Rights

© 2026 Kreative Hertz. All rights reserved. Registered in Bengaluru, Karnataka, India.
