import { ServiceItem } from './insurance'

export const realEstateServices: ServiceItem[] = [
  {
    id: 'residential-property',
    title: 'Residential Property & Real Estate Advisory',
    slug: 'residential-property',
    tagline: 'Objective RERA buyer representation, due diligence & rental yield forecasting',
    category: 'Real Estate',
    icon: 'Building',
    iconType: 'Building',
    shortDesc: 'Objective buyer representation, RERA due diligence, rental yield evaluation, and capital appreciation analysis across Bengaluru.',
    fullDesc: 'Purchasing real estate is one of the most capital-intensive commitments a family makes. Unlike brokers driven by developer commissions, our real estate advisory provides objective buyer representation. We conduct thorough RERA compliance verification, evaluate builder financial track records, calculate realistic rental yields (2.5–3.5%), and evaluate infrastructure growth corridors.',
    highlights: [
      '100% conflict-free buyer representation (zero developer commission bias)',
      'Comprehensive Karnataka RERA compliance, litigation, and delivery timeline verification',
      'Realistic rental yield vs. capital opportunity cost forecasting',
      'Legal title scrutiny: A-Khata, B-Khata, conversion orders, and encumbrance certificates'
    ],
    whatToConsider: [
      'Residential rental yield in Bengaluru averages 2.5–3.5%, not the 6%+ promised by brokers',
      'Check builder loading factor; 35% loading means paying for unusable common space',
      'Never purchase non-RERA registered projects on marketing promises'
    ],
    keyFeatures: [
      'First-time home buyers in Bengaluru searching for end-use residences',
      'NRI investors seeking transparent real estate asset management in India',
      'Families upgrading to larger luxury apartments or gated villa communities',
      'Investors evaluating land, plots, and emerging development corridors'
    ],
    targetAudience: [
      'First-time home buyers in Bengaluru searching for end-use residences',
      'NRI investors seeking transparent real estate asset management in India',
      'Families upgrading to larger luxury apartments or gated villa communities',
      'Investors evaluating land, plots, and emerging development corridors'
    ],
    keyBenefits: [
      '100% Conflict-free buyer representation (zero push for specific builders)',
      'Rigorous RERA registration and project delivery timeline verification',
      'Realistic rental yield vs. capital appreciation forecasting',
      'Guidance on legal title deeds, encumbrance certificates, and A-Katha/B-Katha status'
    ],
    whatWeDo: [
      'Scrutinize RERA disclosures, litigation history, and builder debt obligations',
      'Compare carpet area efficiency, floor loading, and super built-up ratios',
      'Analyze micromarket connectivity (Metro, Peripheral Ring Road, IT corridors)',
      'Evaluate total cost of ownership including maintenance, property taxes, and stamp duty'
    ],
    commonMistakes: [
      'Purchasing non-RERA registered projects based on glossy developer promises',
      'Falling for deceptive "subvention" or "no EMI till possession" marketing schemes',
      'Overestimating residential rental yields (assuming 6% when reality is barely 2.8%)',
      'Ignoring property legal title defects, encumbrances, or agricultural land conversion flaws'
    ],
    deliverables: [
      'Builder & Project Due Diligence Audit Report',
      'RERA Compliance & Timeline Verification Document',
      'Rental Yield vs. Capital Opportunity Cost Matrix',
      'Property Purchase Legal & Financial Checklist'
    ],
    gapAnalysisHighlight: 'Buyers routinely purchase apartments based on super-built-up price tags, without realizing that a 35% loading factor means they are paying ₹12,000/sqft for common corridors and unusable space.',
    faqs: [
      {
        q: 'How does Kreative Hertz real estate advisory differ from standard real estate brokers?',
        a: 'Standard property brokers represent developers and earn hefty 2% to 5% sales commissions for pushing specific projects. Kreative Hertz acts strictly as an objective buyer advisor. We evaluate projects based on RERA compliance, construction track record, and financial viability, with zero bias.'
      },
      {
        q: 'What is the average residential rental yield in Bengaluru?',
        a: 'Residential rental yields in Bengaluru typically range between 2.5% and 3.5% of property market value. Commercial real estate yields are higher (7% to 9%). We help clients understand this distinction before they commit large capital solely for rental income.'
      }
    ]
  },
  {
    id: 'investment-property',
    title: 'Commercial & Investment Property Advisory',
    slug: 'investment-property',
    tagline: 'Pre-leased asset analysis, commercial rental yield evaluation & REIT due diligence',
    category: 'Real Estate',
    icon: 'Building',
    iconType: 'Building',
    shortDesc: 'Objective commercial property evaluation, pre-leased asset scrutiny, commercial rental yield modeling (7–9%), and REIT portfolio allocation across Bengaluru.',
    fullDesc: 'Commercial real estate offers attractive rental yields (7%–9%) and capital appreciation, but carries tenant vacancy risk, complex lease lock-in structures, and stringent legal compliance requirements. Kreative Hertz provides objective investment property advisory—evaluating tenant covenants, lease escalation terms, CAM charges, property tax liabilities, and fractional ownership/REIT alternatives with zero developer commission bias.',
    highlights: [
      'Pre-leased commercial asset scrutiny: tenant lock-in, escalation clauses & security deposits',
      'Realistic Net Operating Income (NOI) vs. gross yield modeling',
      'Title due diligence, commercial occupancy certificates & zoning scrutiny',
      'Fractional ownership vs. listed REIT portfolio allocation comparison'
    ],
    whatToConsider: [
      'Gross yield does not equal net yield; account for vacancy allowances, property tax, and maintenance',
      'Verify tenant lock-in periods and corporate balance sheet strength before investing',
      'Ensure clear commercial zoning approval from local municipal authorities (BBMP/BDA)'
    ],
    keyFeatures: [
      'HNIs and NRI investors seeking consistent 7–9% commercial rental cash flows',
      'Business owners acquiring office, retail, or warehousing premises',
      'Investors evaluating fractional ownership platforms vs. public REITs'
    ],
    targetAudience: [
      'HNIs and NRI investors seeking consistent 7–9% commercial rental cash flows',
      'Business owners acquiring office, retail, or warehousing premises',
      'Investors evaluating fractional ownership platforms vs. public REITs'
    ],
    keyBenefits: [
      '100% Conflict-free commercial property advisory with zero broker commissions',
      'Rigorous tenant covenant and long-term lease contract analysis',
      'Net Operating Income (NOI) and Internal Rate of Return (IRR) financial modeling',
      'Legal title, building sanction plan, and zoning compliance verification'
    ],
    whatWeDo: [
      'Scrutinize lease agreements, rent escalation cycles, and security deposit structures',
      'Model total cash flows considering maintenance, vacancy risks, and tax deductions',
      'Benchmark physical commercial acquisitions against liquid REIT instruments'
    ],
    commonMistakes: [
      'Confusing residential rental yield (2.5–3.5%) with commercial expectations (7–9%)',
      'Overlooking tenant vacancy periods between long-term lease renewals',
      'Purchasing commercial spaces without verified occupancy certificates or sanctioned plans'
    ],
    deliverables: [
      'Commercial Property Investment Evaluation & NOI Report',
      'Lease Contract & Tenant Covenant Risk Audit',
      'Commercial vs. REIT Comparative Allocation Plan'
    ],
    gapAnalysisHighlight: 'Investors frequently commit large capital to commercial assets based on headline yields without auditing tenant lock-in validity, fit-out amortization, or lease termination penalties.',
    faqs: [
      {
        q: 'What is the typical yield for commercial real estate in Bengaluru?',
        a: 'Quality Grade-A commercial properties in Bengaluru typically deliver gross rental yields of 7% to 9%, compared to 2.5% to 3.5% for residential properties. We assist in calculating the true net yield after taxes, vacancy reserves, and property maintenance.'
      },
      {
        q: 'Should I invest directly in physical commercial property or in REITs?',
        a: 'Direct commercial purchases require significant capital (₹1 Cr+) and involve illiquidity and tenant management. Listed REITs allow exposure to Grade-A commercial office parks with small ticket sizes, quarterly dividend payouts, and high liquidity. We help you choose the right balance based on your portfolio liquidity requirements.'
      }
    ]
  }
]
