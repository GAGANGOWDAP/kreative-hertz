export interface ArticleCategory {
  id: string
  name: string
  description: string
}

export const articleCategories: ArticleCategory[] = [
  {
    id: 'all',
    name: 'All Categories',
    description: 'All educational articles and publications by Kreative Hertz'
  },
  {
    id: 'wealth-architecture',
    name: 'Wealth Architecture',
    description: 'Frameworks, gap diagnosis, and strategic asset allocation'
  },
  {
    id: 'insurance-architecture',
    name: 'Insurance Architecture',
    description: 'Pure term structuring, health audits, and policy clause scrutiny'
  },
  {
    id: 'investment-strategy',
    name: 'Investment Strategy',
    description: 'Step-up compounding, SIP discipline, and long-term wealth creation'
  },
  {
    id: 'debt-architecture',
    name: 'Debt Architecture',
    description: 'Mortgage refinancing, balance transfers, and interest elimination'
  },
  {
    id: 'life-strategy',
    name: 'Life Strategy',
    description: 'Student awareness, financial psychology, and moral money habits'
  }
]

