export interface ServiceItem {
  id: string
  title: string
  slug: string
  tagline: string
  category: 'Insurance' | 'Investments' | 'Loans' | 'Real Estate' | 'Investments & Wealth Creation' | 'Loans & Credit Solutions'
  icon: string
  iconType: string
  shortDesc: string
  fullDesc: string
  highlights: string[]
  whatToConsider?: string[]
  whoIsItFor?: string[]
  keyFeatures: string[]
  targetAudience: string[]
  keyBenefits: string[]
  whatWeDo: string[]
  commonMistakes: string[]
  deliverables: string[]
  gapAnalysisHighlight: string
  faqs: { q: string; a: string }[]
}

export const insuranceServices: ServiceItem[] = [
  {
    id: 'life-insurance',
    title: 'Life Insurance Architecture',
    slug: 'life-insurance',
    tagline: 'Pure risk transfer structuring without investment conflicts',
    category: 'Insurance',
    icon: 'Shield',
    iconType: 'Shield',
    shortDesc: 'Pure risk transfer structuring through cost-effective term insurance to protect financial dependents against human life value loss.',
    fullDesc: 'Life insurance is fundamentally a risk management instrument, not an investment product. We help individuals and families calculate their true Human Life Value (HLV), account for inflation-adjusted living expenses, outstanding liabilities, and children’s education goals, and structure pure protection term policies without confusing maturity return promises.',
    highlights: [
      'Pure term insurance coverage with maximum sum assured per rupee spent',
      'Accurate Human Life Value (HLV) gap calculation factoring future inflation',
      'Comprehensive critical illness and accidental permanent disability riders',
      'Section 6 MWP Act endorsement safeguarding family benefits from creditors'
    ],
    whatToConsider: [
      'Separate life insurance completely from equity investments or endowment plans',
      'Ensure policy term covers dependent milestone years up to age 60–65',
      'Declare all family medical history transparently to avoid claim disputes',
      'Review existing corporate coverage limitations upon job transitions'
    ],
    whoIsItFor: [
      'Primary family income earners with financial dependents',
      'Salaried professionals with long-term home loan obligations',
      'Business owners seeking partnership or keyman continuity protection'
    ],
    keyFeatures: [
      'High sum assured coverage up to 20x annual income',
      'Lowest cost per crore compared to traditional policies',
      'Structured claims assistance and nominee guidance'
    ],
    targetAudience: [
      'Primary family income earners',
      'Salaried professionals with home loans or liabilities',
      'Business owners seeking Keyman or partnership insurance',
      'Parents planning long-term security for children'
    ],
    keyBenefits: [
      'High sum assured coverage at the lowest cost-per-crore',
      'Strict separation of risk protection from investment compounding',
      'Coverage for all outstanding debt liabilities and EMIs',
      'Income replacement rider structuring for accidental disability'
    ],
    whatWeDo: [
      'Perform Human Life Value (HLV) gap calculations based on active earning years',
      'Audit existing traditional policies (endowments, ULIPs, money-back plans)',
      'Evaluate critical illness and accidental permanent disability riders',
      'Ensure proper Section 6 MWP (Married Women’s Property Act) endorsement where applicable'
    ],
    commonMistakes: [
      'Mixing insurance with investment through low-yield endowment plans',
      'Under-insuring with nominal corporate group cover that expires on job change',
      'Selecting arbitrary sum assured values without calculating future inflation',
      'Failing to disclose medical history accurately during proposal documentation'
    ],
    deliverables: [
      'Human Life Value (HLV) Diagnostic Audit Report',
      'Pure Protection Term Plan Comparison & Structure',
      'Existing Insurance Policy Yield Analysis (XIRR review)',
      'Policy Nomination and MWP Act Guidance'
    ],
    gapAnalysisHighlight: 'Most families hold 4–6 traditional policies totaling barely ₹10–15 Lakhs in cover with 4–5% returns, whereas their actual family protection requirement is ₹1.5–3 Crores in pure term coverage.',
    faqs: [
      {
        q: 'Why does Kreative Hertz recommend pure term insurance over savings or endowment plans?',
        a: 'Traditional endowment and money-back plans deliver an effective annual return (XIRR) of only 4% to 5.5%, barely matching consumer inflation while providing tiny insurance covers. Pure term insurance provides substantial protection (e.g. ₹1 to 2 Crores) at a tiny fraction of the premium, freeing up surplus cash to compound in dedicated wealth instruments like equity mutual funds.'
      },
      {
        q: 'How much life cover do I actually need?',
        a: 'A standard rule of thumb is 15 to 25 times your annual gross income, plus any outstanding loan liabilities (home loans, vehicle loans) and inflation-adjusted commitments like children higher education. We calculate this precisely during our diagnostic gap analysis.'
      }
    ]
  },
  {
    id: 'health-insurance',
    title: 'Health Insurance Audit & Coverage',
    slug: 'health-insurance',
    tagline: 'Zero sub-limit family medical security & restoration shields',
    category: 'Insurance',
    icon: 'Heart',
    iconType: 'Heart',
    shortDesc: 'Comprehensive medical protection auditing, ensuring zero sub-limits, full room-rent eligibility, and restoration benefits.',
    fullDesc: 'Medical inflation in India exceeds 12-14% annually. A single hospitalization can erode years of accumulated savings. We audit health insurance policies to eliminate hidden sub-limits, evaluate super top-up structures, verify waiting period clauses for pre-existing conditions, and secure comprehensive coverage for families.',
    highlights: [
      'Zero room-rent capping to eliminate proportional claim billing penalties',
      'Super top-up structuring providing ₹1 Crore cover at 60% lower premium',
      'Pre-existing disease disclosure audits ensuring zero claim repudiation',
      'Worldwide emergency hospitalization & robotic surgery procedure eligibility'
    ],
    whatToConsider: [
      'Corporate employer cover terminates immediately upon resignation or retirement',
      'Room-rent sub-limits trigger proportional deductions across the entire hospital bill',
      'Waiting periods for pre-existing conditions must be tracked carefully',
      'Senior citizen parents should have individual policies rather than shared floaters'
    ],
    whoIsItFor: [
      'Nuclear and joint families seeking medical inflation resilience',
      'Corporate professionals relying only on company health cards',
      'Individuals planning early retirement'
    ],
    keyFeatures: [
      'Single private room category without financial caps',
      'Unlimited restoration for unrelated medical events',
      'Cashless hospital network coordination'
    ],
    targetAudience: [
      'Nuclear and joint families',
      'Professionals relying solely on corporate employer coverage',
      'Individuals planning early retirement',
      'Senior citizen parents needing structured medical coverage'
    ],
    keyBenefits: [
      'Zero room-rent capping to avoid proportional claim deductions',
      'Unlimited restoration of sum insured for unrelated hospitalizations',
      'Super top-up structuring for cost-efficient multi-crore protection',
      'Daycare treatment and modern robotic surgery coverage'
    ],
    whatWeDo: [
      'Review existing health insurance policy wordings line by line',
      'Identify copayment, room-rent, and specific ailment sub-limits',
      'Design family floater bases combined with high-deductible super top-ups',
      'Guide accurate disclosure of pre-existing diseases to prevent claim repudiation'
    ],
    commonMistakes: [
      'Relying entirely on employer corporate cover that vanishes on resignation or retirement',
      'Opting for policies with 1% room-rent caps leading to 40% proportional billing deductions',
      'Ignoring pre-existing disease disclosure, resulting in claim rejection',
      'Purchasing basic ₹5 Lakh covers when cardiac or oncology treatments cost ₹15–25 Lakhs'
    ],
    deliverables: [
      'Health Policy Vulnerability Audit Report',
      'Base + Super Top-up Dual Layer Structure',
      'Pre-Existing Condition Disclosure Strategy',
      'Family Cashless Hospital Network Directory'
    ],
    gapAnalysisHighlight: 'Over 85% of corporate employees have no personal health cover, leaving them completely vulnerable to catastrophic medical expenses during career transitions or retirement.',
    faqs: [
      {
        q: 'My employer provides ₹5 Lakh health insurance. Do I still need an individual policy?',
        a: 'Yes, absolutely. Employer health cover is contingent upon employment. If you change jobs, face career gaps, or retire, you lose cover immediately. Furthermore, developing a health condition later in life can make purchasing individual cover impossible due to medical underwriting.'
      },
      {
        q: 'What is a Super Top-up health plan and how does it reduce cost?',
        a: 'A Super Top-up plan activates once cumulative hospitalization expenses across a policy year exceed a defined threshold (deductible). By pairing a ₹5 or ₹10 Lakh base policy with a ₹90 Lakh Super Top-up, you can secure ₹1 Crore of comprehensive medical cover at 60% lower cost than a single standalone ₹1 Crore base policy.'
      }
    ]
  },
  {
    id: 'motor-insurance',
    title: 'Motor & Fleet Insurance Structuring',
    slug: 'motor-insurance',
    tagline: 'Zero depreciation, engine protect & return to invoice coverage',
    category: 'Insurance',
    icon: 'Car',
    iconType: 'Car',
    shortDesc: 'Transparent vehicle risk management featuring zero depreciation, engine protect, and return to invoice endorsements.',
    fullDesc: 'Motor insurance is often purchased hastily during dealer checkout without understanding critical add-on protections. We analyze private car and commercial fleet coverages to ensure fair Insured Declared Value (IDV) valuation, accurate No Claim Bonus (NCB) retention, and vital protection against hydrostatic engine lock and consumables costs.',
    highlights: [
      'Nil-depreciation add-ons on metal, plastic, rubber, and glass components',
      'Engine and gearbox hydrostatic lock protection against flood damage',
      'Return to Invoice (RTI) coverage paying full ex-showroom value upon theft/total loss',
      'No Claim Bonus (NCB) retention and transfer certificate assistance'
    ],
    whatToConsider: [
      'Do not artificially depress IDV solely to save minor renewal premiums',
      'Always add zero depreciation on vehicles up to 5–7 years old',
      'Retain NCB transfer certificates when upgrading to a new vehicle'
    ],
    keyFeatures: ['Individual luxury and passenger car owners',
      'Two-wheeler daily commuters',
      'Fleet operators and logistics businesses'],
    targetAudience: [
      'Individual luxury and passenger car owners',
      'Two-wheeler daily commuters',
      'Fleet operators and logistics businesses'
    ],
    keyBenefits: [
      'Nil-depreciation coverage on metal, rubber, and glass parts',
      'Engine and gearbox protection against water ingress and hydrostatic lock',
      'Return to Invoice (RTI) coverage in case of total loss or theft',
      'NCB protection rider ensuring discounts remain intact after a claim'
    ],
    whatWeDo: [
      'Validate IDV pricing against market depreciation benchmarks',
      'Verify crucial add-on riders (engine protect, consumables, roadside assistance)',
      'Facilitate NCB transfer certificates during new vehicle acquisitions',
      'Coordinate cashless claim escalation with authorized manufacturer workshops'
    ],
    commonMistakes: [
      'Lowering IDV excessively just to save nominal renewal premium',
      'Omitting zero-depreciation add-on on vehicles under 5 years old',
      'Losing accumulated 50% No Claim Bonus when upgrading cars',
      'Failing to add engine protection in flood-prone cities like Bengaluru or Mumbai'
    ],
    deliverables: [
      'Vehicle IDV and Rider Optimization Matrix',
      'Zero-Depreciation Claim Guidance Manual',
      'No Claim Bonus (NCB) Retention Certificate Support'
    ],
    gapAnalysisHighlight: 'Vehicle owners regularly cut IDVs by 25% to shave ₹800 off their annual premium, inadvertently sacrificing ₹2.5 Lakhs in payout value in the event of an unfortunate total loss or theft.',
    faqs: [
      {
        q: 'What is Zero Depreciation cover and is it necessary?',
        a: 'Without zero depreciation, insurers deduct 30% to 50% for plastic, nylon, rubber, and glass components during repair claims. With zero depreciation, the entire parts cost is covered with zero out-of-pocket deductions for depreciation.'
      }
    ]
  },
  {
    id: 'travel-insurance',
    title: 'International Travel Protection',
    slug: 'travel-insurance',
    tagline: 'Schengen-compliant global emergency medical evacuation shields',
    category: 'Insurance',
    icon: 'Plane',
    iconType: 'Plane',
    shortDesc: 'Global travel risk coverage including emergency medical evacuation, Schengen visa compliance, and trip interruption safeguards.',
    fullDesc: 'International medical treatments in North America and Europe cost tens of thousands of dollars. Our travel insurance advisory delivers Schengen, US, and UK visa-compliant global protection covering overseas hospitalization, flight cancellations, lost baggage, passport loss, and emergency medical repatriation.',
    highlights: [
      'Up to $500,000 USD overseas cashless medical emergency expense coverage',
      'Comprehensive Schengen, UK, and US consular visa compliance certificates',
      'Trip interruption, passport loss, and baggage delay compensation',
      'University-compliant student medical plans saving lakhs compared to US campus insurance'
    ],
    whatToConsider: [
      'Domestic health insurance does not cover overseas hospitalizations',
      'Verify university health insurance waiver criteria before booking overseas flights',
      'Ensure pre-existing medical emergency clauses are explicitly endorsed'
    ],
    keyFeatures: ['Overseas leisure travelers and families',
      'Corporate business travelers on frequent international circuits',
      'Students enrolling in foreign universities'],
    targetAudience: [
      'Overseas leisure travelers and families',
      'Corporate business travelers on frequent international circuits',
      'Students enrolling in foreign universities'
    ],
    keyBenefits: [
      'Up to $500,000 USD overseas emergency medical expense coverage',
      'Cashless overseas hospitalization network coverage',
      'Compensation for flight delay, trip curtailment, and lost baggage',
      'Full compliance with European Schengen travel visa mandates'
    ],
    whatWeDo: [
      'Structure destination-specific sum insured thresholds',
      'Validate university-mandated student medical insurance requirements',
      'Review pre-existing medical condition emergency lifesaver clauses',
      'Facilitate instant policy issuance with visa embassy compliance certificates'
    ],
    commonMistakes: [
      'Assuming domestic health insurance covers medical costs abroad',
      'Buying minimal $50,000 cover for travel to high-cost healthcare destinations like the USA',
      'Overlooking student university waiver deadlines and overpaying for US college plans'
    ],
    deliverables: [
      'Visa-Compliant Overseas Policy Document',
      'Emergency TPA International Contact Directory',
      'Student University Health Insurance Waiver Assistance'
    ],
    gapAnalysisHighlight: 'An emergency appendix surgery in the United States costs upwards of $30,000. Traveling without dedicated medical travel coverage can wipe out years of savings.',
    faqs: [
      {
        q: 'Can Indian students in the USA use Kreative Hertz travel insurance instead of university health plans?',
        a: 'Yes. Most US universities accept comprehensive Indian student travel insurance policies provided they meet the university waiver criteria, saving students ₹1.5 to ₹3 Lakhs annually compared to on-campus university plans.'
      }
    ]
  },
  {
    id: 'family-health-security',
    title: 'Family Health Security Architecture',
    slug: 'family-health-security',
    tagline: 'Multi-generational health shields for senior parents & children',
    category: 'Insurance',
    icon: 'Users',
    iconType: 'Users',
    shortDesc: 'Multi-generational health umbrella structuring covering senior citizen parents, dependents, and critical illness lifelines.',
    fullDesc: 'Structuring healthcare protection for multi-generational families requires balancing floater policies for young parents and children with individual, ring-fenced policies for elderly parents with pre-existing conditions (diabetes, hypertension, cardiac care). We design integrated health security architectures that protect every family member.',
    highlights: [
      'Independent ring-fenced policies for elderly senior-citizen parents',
      'Critical illness lump-sum payout policies protecting breadwinner cash flows',
      'Maternity, newborn, and vaccination milestone coverage integration',
      'Tax optimization under Section 80D up to ₹1,00,000 across self and parents'
    ],
    whatToConsider: [
      'Never club 60+ senior parents into young nuclear family floaters',
      'Check specific waiting periods for senior pre-existing hypertension or diabetes',
      'Ensure critical illness cover pays out immediately upon clinical diagnosis'
    ],
    keyFeatures: ['Families with elderly senior-citizen parents',
      'Couples planning for maternity and newborn care',
      'HNI families requiring global hospital coverage'],
    targetAudience: [
      'Families with elderly senior-citizen parents',
      'Couples planning for maternity and newborn care',
      'HNI families requiring global hospital coverage'
    ],
    keyBenefits: [
      'Ring-fenced senior citizen policies that prevent parent claims from exhausting family floaters',
      'Critical illness lump-sum payout coverages for breadwinners',
      'Maternity, newborn, and vaccination milestone protections',
      'Tax optimization under Section 80D for self, family, and parents'
    ],
    whatWeDo: [
      'Separate senior citizen risk pools from younger family members',
      'Audit waiting period reductions for senior pre-existing conditions',
      'Implement critical illness riders offering lump-sum payouts upon diagnosis',
      'Calculate maximum Section 80D tax deductions (up to ₹1,00,000)'
    ],
    commonMistakes: [
      'Clubbing 65-year-old parents in the same floater with young children, skyrocketing premiums',
      'Neglecting separate critical illness income replacement plans',
      'Missing the 80D tax deduction opportunities available for parents health premiums'
    ],
    deliverables: [
      'Multi-Generational Family Health Blueprint',
      'Senior Citizen Pre-Existing Disease Management Plan',
      'Critical Illness Income Replacement Matrix'
    ],
    gapAnalysisHighlight: 'Clubbing senior parents in a family floater increases the entire family premium by over 120% and subjects young children to the parent claim history and copay restrictions.',
    faqs: [
      {
        q: 'Why should senior parents have separate individual policies rather than a joint family floater?',
        a: 'In health insurance, the premium for a floater policy is calculated based on the age of the oldest member. Clubbing 60+ parents with a 32-year-old couple drastically raises everyone premium and risks exhausting the shared sum insured during a parent hospitalization.'
      }
    ]
  },
  {
    id: 'business-insurance',
    title: 'Business & Commercial Liability Risk',
    slug: 'business-insurance',
    tagline: 'Fire & Special Perils, Group Mediclaim & Keyman insurance',
    category: 'Insurance',
    icon: 'Briefcase',
    iconType: 'Briefcase',
    shortDesc: 'Corporate risk management encompassing Fire & Burglary, Group Health (GMC), Professional Indemnity, and Keyman Insurance.',
    fullDesc: 'Commercial enterprises face property perils, employee health liabilities, cyber vulnerabilities, and executive continuity risks. We assist MSMEs, startups, and institutions in structuring comprehensive risk protection—from Group Mediclaim for teams to Directors & Officers (D&O) liability and Keyman protection.',
    highlights: [
      'Standard Fire & Special Perils asset valuation safeguarding warehouses and machinery',
      'Corporate Group Health (GMC) programs with zero waiting periods for team members',
      'Professional Indemnity policies protecting consultants and CAs against legal claims',
      'Keyman and Employer-Employee insurance structures protecting business cash flows'
    ],
    whatToConsider: [
      'Ensure warehouse stock is not underinsured to prevent average clause penalties',
      'Validate professional liability limits when executing overseas service agreements',
      'Incorporate Keyman insurance to secure credit lines and enterprise stability'
    ],
    keyFeatures: ['MSME business owners and startup founders',
      'Professional consultants, doctors, and chartered accountants',
      'Commercial property and warehouse owners'],
    targetAudience: [
      'MSME business owners and startup founders',
      'Professional consultants, doctors, and chartered accountants',
      'Commercial property and warehouse owners'
    ],
    keyBenefits: [
      'Group Medical Coverage (GMC) with zero waiting periods for employees',
      'Standard Fire & Special Perils insurance for plant, machinery, and stock',
      'Professional Indemnity protecting against client legal damages',
      'Keyman insurance protecting enterprise cash flow upon loss of key leaders'
    ],
    whatWeDo: [
      'Evaluate factory, office, and inventory asset valuations for fire and burglary cover',
      'Structure custom Group Health and Group Term life tiers for corporate staff',
      'Review indemnity limits for cross-border consulting contracts',
      'Design tax-efficient Keyman and Employer-Employee insurance structures'
    ],
    commonMistakes: [
      'Under-insuring warehouse stock to save premium, resulting in average clause penalties',
      'Operating without Professional Indemnity when signing foreign client contracts',
      'Treating employee insurance merely as a compliance tickbox without real claim utility'
    ],
    deliverables: [
      'Enterprise Commercial Risk Exposure Report',
      'Customized Group Health (GMC) Benefit Structure',
      'Property & Plant Insurance Asset Schedule Review'
    ],
    gapAnalysisHighlight: 'Over 70% of MSME warehouses are underinsured by 30-50%, meaning insurers apply the average clause during a fire claim and pay out only a fraction of actual losses.',
    faqs: [
      {
        q: 'What is Keyman Insurance and how does it help a business?',
        a: 'Keyman insurance is taken by a business on the life of an indispensable executive or founder. In the unfortunate event of their demise, the company receives a lump-sum compensation to absorb revenue disruptions, recruit a successor, or pay off company credit lines.'
      }
    ]
  }
]
