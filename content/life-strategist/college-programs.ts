export interface CollegeProgramModule {
  id: string
  number: string
  title: string
  hours: string
  duration: string
  targetAudience: string
  topics: string[]
  coreTopics: string[]
  learningOutcome: string
}

export const collegeProgramModules: CollegeProgramModule[] = [
  {
    id: 'first-salary',
    number: 'Module 01',
    title: 'The Psychology of Money & First Salary Architecture',
    hours: '2.5 Hours',
    duration: '2.5 Hours Interactive Workshop',
    targetAudience: 'Pre-final and Final Year Undergraduate/Postgraduate Students',
    topics: [
      'Deconstructing first-salary syndrome: lifestyle inflation vs. wealth creation',
      'The 50/30/20 budgeting rule adapted for modern urban professionals',
      'The mathematics of starting at age 22 vs. age 30 (The Compounding Multiplier)',
      'Bank accounts architecture: separating operations, savings, and investments'
    ],
    coreTopics: [
      'Deconstructing first-salary syndrome: lifestyle inflation vs. wealth creation',
      'The 50/30/20 budgeting rule adapted for modern urban professionals',
      'The mathematics of starting at age 22 vs. age 30 (The Compounding Multiplier)',
      'Bank accounts architecture: separating operations, savings, and investments'
    ],
    learningOutcome: 'Graduates enter the workforce with a battle-tested financial blueprint to allocate their very first paycheck purposefully.'
  },
  {
    id: 'credit-traps',
    number: 'Module 02',
    title: 'Navigating Consumer Debt & Predatory Credit Traps',
    hours: '2.0 Hours',
    duration: '2 Hours Case-Study Session',
    targetAudience: 'College Students, Fresh Recruits & Young Professionals',
    topics: [
      'Deconstructing credit cards: grace periods, APRs (36-42%), and minimum amount traps',
      'The dark design of Buy-Now-Pay-Later (BNPL) and instant personal loan apps',
      'Building and safeguarding a pristine CIBIL credit score (750+) from day one',
      'The psychological and economic reality of lifestyle vehicle and gadget EMIs'
    ],
    coreTopics: [
      'Deconstructing credit cards: grace periods, APRs (36-42%), and minimum amount traps',
      'The dark design of Buy-Now-Pay-Later (BNPL) and instant personal loan apps',
      'Building and safeguarding a pristine CIBIL credit score (750+) from day one',
      'The psychological and economic reality of lifestyle vehicle and gadget EMIs'
    ],
    learningOutcome: 'Students develop deep immunity against toxic debt instruments and learn how to use credit ethically without paying a single rupee in interest.'
  },
  {
    id: 'sip-investments',
    number: 'Module 03',
    title: 'Demystifying Investments: From Savings Accounts to Equity SIPs',
    hours: '3.0 Hours',
    duration: '3 Hours Interactive Seminar + Simulator',
    targetAudience: 'All College Disciplines (Engineering, Commerce, Arts, Science, MBA)',
    topics: [
      'Why fixed deposits lose real purchasing power to inflation and tax',
      'Mutual funds explained with simple analogies: equity, debt, and index funds',
      'Setting up a disciplined Systematic Investment Plan (SIP) with as little as ₹500/month',
      'How to spot financial scams, get-rich-quick trading schemes, and finfluencer hype'
    ],
    coreTopics: [
      'Why fixed deposits lose real purchasing power to inflation and tax',
      'Mutual funds explained with simple analogies: equity, debt, and index funds',
      'Setting up a disciplined Systematic Investment Plan (SIP) with as little as ₹500/month',
      'How to spot financial scams, get-rich-quick trading schemes, and finfluencer hype'
    ],
    learningOutcome: 'Participants gain the clarity and confidence to start their own automated mutual fund investments without falling for speculative traps.'
  },
  {
    id: 'insurance-literacy',
    number: 'Module 04',
    title: 'Insurance Literacy: Protecting Yourself and Your Aging Parents',
    hours: '2.0 Hours',
    duration: '2 Hours Practical Workshop',
    targetAudience: 'Final Year Students, Postgraduates & Campus Placement Candidates',
    topics: [
      'Why life insurance is for dependents, not investments (avoiding endowment traps)',
      'Understanding health insurance room-rent caps, copays, and waiting periods',
      'Evaluating employer group health insurance vs. owning personal independent policies',
      'Structuring affordable family health protection for dependent senior parents'
    ],
    coreTopics: [
      'Why life insurance is for dependents, not investments (avoiding endowment traps)',
      'Understanding health insurance room-rent caps, copays, and waiting periods',
      'Evaluating employer group health insurance vs. owning personal independent policies',
      'Structuring affordable family health protection for dependent senior parents'
    ],
    learningOutcome: 'Students learn to protect their future career earnings and ensure a single family medical emergency will never derail their dreams.'
  }
]
