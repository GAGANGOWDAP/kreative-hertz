export interface GapAnalysisCategory {
  id: string
  title: string
  subtitle: string
  description: string
  problemStatement: string
  realityCheck: string
  solutionFramework: string
  icon: string
  checks: string[]
  keyChecklist: string[]
}

export const gapAnalysisAreas: GapAnalysisCategory[] = [
  {
    id: 'pure-term',
    title: 'Pure Term Protection Adequacy',
    subtitle: 'Human Life Value (HLV) vs. Nominal Insurance',
    description: 'Most breadwinners hold 3–5 traditional endowment or money-back policies with a combined life cover of barely ₹10–15 Lakhs, mistakenly believing their families are fully protected.',
    problemStatement: 'Most breadwinners hold 3–5 traditional endowment or money-back policies with a combined life cover of barely ₹10–15 Lakhs, mistakenly believing their families are fully protected.',
    realityCheck: 'In the event of an unfortunate loss, ₹15 Lakhs generates barely ₹9,000/month in bank interest—leaving a dependent family financially stranded within months amidst inflation.',
    solutionFramework: 'Calculate exact Human Life Value (15–25x annual expenditure + all liabilities), eliminate costly low-yield policies, and structure pure protection term cover of ₹1.5–3 Crores at a fraction of the cost.',
    icon: 'Shield',
    checks: [
      'Sum assured equals at least 15–20x annual family living expenditure',
      'Outstanding liabilities (home loans, business credit) 100% matched with term cover',
      'Critical illness and accidental permanent disability riders explicitly active',
      'Protection from legal attachment via Section 6 Married Women\'s Property (MWP) Act'
    ],
    keyChecklist: [
      'Is your sum assured at least 15x your annual family expenditure?',
      'Are all outstanding home loans and debts fully covered by pure term cover?',
      'Have you attached critical illness and permanent accidental disability riders?',
      'Is your policy protected from creditors under Section 6 of the MWP Act?'
    ]
  },
  {
    id: 'health-clauses',
    title: 'Health Insurance Clause Vulnerabilities',
    subtitle: 'Sub-limits, Room-Rent Caps & Deductibles',
    description: 'Policyholders assume their ₹5 Lakh employer health card or basic family floater covers all hospitalization costs without reading the critical fine print.',
    problemStatement: 'Policyholders assume their ₹5 Lakh employer health card or basic family floater covers all hospitalization costs without reading the critical fine print.',
    realityCheck: 'Policies with 1% room-rent caps trigger proportional deductions across the entire hospital bill. An unexpected ₹6 Lakh hospitalization can result in ₹2.5 Lakhs in out-of-pocket expenses.',
    solutionFramework: 'Audit policy wordings to eradicate room-rent caps and copay clauses. Structure a ₹5–10 Lakh base policy paired with a ₹90 Lakh Super Top-up for multi-crore medical protection at minimal cost.',
    icon: 'Heart',
    checks: [
      'Zero room-rent capping (single private AC room eligibility without financial limit)',
      'Independent personal policy owned separate from employer group insurance',
      'Pre-existing diseases declared transparently with verified waiting periods',
      'Multi-crore Super Top-up layer in place for catastrophic medical contingencies'
    ],
    keyChecklist: [
      'Does your health policy have zero room-rent capping (single private room eligibility)?',
      'Do you hold individual personal cover independent of employer corporate insurance?',
      'Are pre-existing conditions accurately declared to avoid claim repudiation?',
      'Do you have unlimited restoration of sum insured for unrelated medical episodes?'
    ]
  },
  {
    id: 'asset-allocation',
    title: 'Asset Allocation & Portfolio Clutter',
    subtitle: 'Overlapping Funds vs. Goal-Linked Compounding',
    description: 'Investors accumulate 20–30 different mutual funds across various apps and tips, suffering massive portfolio overlap, excess expense ratios, and zero goal alignment.',
    problemStatement: 'Investors accumulate 20–30 different mutual funds across various apps and tips, suffering massive portfolio overlap, excess expense ratios, and zero goal alignment.',
    realityCheck: 'Holding 25 funds does not provide diversification; it creates a closet index fund that mirrors market indices while charging 1.5–2% higher active management expense fees.',
    solutionFramework: 'Streamline holdings into 4–6 high-conviction, non-overlapping funds mapped strictly to goal horizons (Short-Term, Medium-Term, Long-Term Retirement) with automated annual rebalancing.',
    icon: 'TrendingUp',
    checks: [
      'Portfolio consolidated into 4–6 high-conviction, non-overlapping mutual funds',
      'Automated 10% annual Step-Up instruction active across equity SIPs',
      'High-priority milestones ring-fenced from market correction volatility',
      'Annual asset rebalancing protocol between equity and fixed income allocations'
    ],
    keyChecklist: [
      'Is your mutual fund portfolio streamlined into 4–6 distinct, non-overlapping funds?',
      'Do you have an automated 10% annual Step-Up instruction active on all equity SIPs?',
      'Are your high-priority goals (children education, retirement) ring-fenced from market volatility?',
      'Do you perform annual rebalancing between equity and fixed income allocations?'
    ]
  },
  {
    id: 'debt-burden',
    title: 'Debt Burden & EMI Drainage',
    subtitle: 'Outdated Loan Regimes & High FOIR',
    description: 'Borrowers remain on outdated NBFC benchmark interest regimes paying 9.5%+ on home loans, while also servicing high-cost credit cards (36–42% p.a.) and personal loans.',
    problemStatement: 'Borrowers remain on outdated NBFC benchmark interest regimes paying 9.5%+ on home loans, while also servicing high-cost credit cards (36–42% p.a.) and personal loans.',
    realityCheck: 'A 0.75% interest rate gap on a 20-year ₹75 Lakh home loan drains over ₹9 Lakhs in avoidable interest. Simultaneously, revolving credit card debt destroys household monthly surplus.',
    solutionFramework: 'Execute strategic home loan balance transfers to benchmark repo-linked rates (EBLR). Consolidate fragmented high-interest unsecured debt into single, structured low-interest loans.',
    icon: 'Home',
    checks: [
      'Home loan linked directly to RBI external benchmark repo rate (EBLR)',
      'Cumulative monthly EMIs strictly below 40% of net take-home pay (safe FOIR)',
      'Complete elimination of revolving credit card balances and high-cost instant loans',
      'At least one extra principal EMI scheduled annually to accelerate debt freedom'
    ],
    keyChecklist: [
      'Is your home loan linked to the current external repo rate benchmark (EBLR)?',
      'Are your cumulative monthly EMIs strictly under 40% of net take-home pay?',
      'Are you completely free of revolving credit card balances and high-cost personal loans?',
      'Do you pay at least one additional principal EMI per year to shave years off your tenure?'
    ]
  },
  {
    id: 'emergency-liquidity',
    title: 'Emergency Liquidity & Contingency Reserves',
    subtitle: 'Cash Flow Fragility vs. Durable Reserves',
    description: 'Working professionals invest every spare rupee into illiquid equity or real estate, keeping less than 1–2 months of living expenses in accessible liquid reserves.',
    problemStatement: 'Working professionals invest every spare rupee into illiquid equity or real estate, keeping less than 1–2 months of living expenses in accessible liquid reserves.',
    realityCheck: 'A sudden medical emergency, temporary job loss, or business interruption forces individuals to redeem long-term equity at market lows or borrow at predatory interest rates.',
    solutionFramework: 'Establish an untouchable contingency reserve equal to 6–12 months of mandatory family living expenses and EMIs, parked in high-safety liquid debt and arbitrage funds.',
    icon: 'Compass',
    checks: [
      '6 to 12 months of non-discretionary family expenses preserved in liquid reserves',
      'Emergency fund completely segregated from daily transactional bank accounts',
      'Household cash flow stress-tested to survive unexpected career disruptions',
      'Annual reserve calibration to match rising family living expenditures'
    ],
    keyChecklist: [
      'Do you hold 6 to 12 months of fixed monthly expenses in instant-access liquid funds?',
      'Is this emergency reserve completely separate from daily transactional bank accounts?',
      'Can your household survive a 6-month career transition without liquidating retirement funds?',
      'Do you have an annual review protocol to adjust reserve size as family expenses expand?'
    ]
  }
]
