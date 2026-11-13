export interface FaqItem {
  q: string
  a: string
  category?: string
}

export const generalFaqs: FaqItem[] = [
  {
    q: 'What is the distinction between a Wealth Architect and a Life Strategist?',
    a: 'As a Wealth Architect, we evaluate policy structures, identify coverage gaps, and optimize financial portfolios across insurance, mutual funds, loans, and real estate. As a Life Strategist, we educate individuals and students on financial psychology, risk management, and disciplined money habits.',
    category: 'General'
  },
  {
    q: 'Does Kreative Hertz charge upfront fees for initial gap analysis?',
    a: 'Initial gap discovery consultations and policy reviews are conducted without upfront fees. Our objective is to provide diagnostic clarity before any financial decision is made.',
    category: 'Advisory Process'
  },
  {
    q: 'Do you offer guaranteed returns on investments?',
    a: 'No. Mutual funds and market-linked instruments are subject to market risks. We follow a strict fiduciary standard and do not make false performance guarantees.',
    category: 'Investments'
  },
  {
    q: 'How does the Financial Gap Analysis review work?',
    a: 'We evaluate five structural pillars: pure term life protection adequacy, health insurance room-rent and copay clauses, asset allocation diversification, debt/EMI interest burdens, and inflation-adjusted retirement targets.',
    category: 'Advisory Process'
  },
  {
    q: 'Can Kreative Hertz review my existing policies without buying new ones?',
    a: 'Yes. We offer independent, objective audits of your existing policies, loans, and mutual funds without any pressure or requirement to purchase new products.',
    category: 'Insurance'
  },
  {
    q: 'Do you conduct campus workshops for colleges and universities?',
    a: 'Yes. Our Life Strategist division visits academic institutions across Karnataka and India to conduct interactive, non-commercial financial literacy modules for students.',
    category: 'Life Strategy'
  }
]

