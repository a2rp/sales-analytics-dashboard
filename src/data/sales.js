export const periods = [
  { id: 'month', label: 'Last 30 days' },
  { id: 'quarter', label: 'This quarter' },
  { id: 'year', label: 'Year to date' },
]

export const reports = {
  month: {
    total: 227400,
    change: 12.8,
    quota: 84,
    target: 270000,
    winRate: 32,
    averageDeal: 18400,
    chart: [
      { label: 'Sep 8', value: 38 },
      { label: 'Sep 15', value: 45 },
      { label: 'Sep 22', value: 43 },
      { label: 'Sep 29', value: 51 },
      { label: 'Oct 6', value: 50 },
    ],
  },
  quarter: {
    total: 684200,
    change: 8.4,
    quota: 91,
    target: 750000,
    winRate: 36,
    averageDeal: 21200,
    chart: [
      { label: 'Jul', value: 223 },
      { label: 'Aug', value: 225 },
      { label: 'Sep', value: 236 },
    ],
  },
  year: {
    total: 1846200,
    change: 18.2,
    quota: 87,
    target: 2120000,
    winRate: 34,
    averageDeal: 19800,
    chart: [
      { label: 'Jan', value: 136 },
      { label: 'Feb', value: 140 },
      { label: 'Mar', value: 148 },
      { label: 'Apr', value: 146 },
      { label: 'May', value: 156 },
      { label: 'Jun', value: 156 },
      { label: 'Jul', value: 223 },
      { label: 'Aug', value: 225 },
      { label: 'Sep', value: 236 },
      { label: 'Oct', value: 280 },
    ],
  },
}

export const deals = [
  { id: 'D-1048', company: 'Northstar Studio', contact: 'Rina Wallace', value: 42800, stage: 'Negotiation', owner: 'Maya Chen', date: '2026-10-06' },
  { id: 'D-1047', company: 'Juniper Supply', contact: 'Malik Turner', value: 26400, stage: 'Proposal', owner: 'Evan Brooks', date: '2026-10-05' },
  { id: 'D-1046', company: 'Brightpath Learning', contact: 'Tessa Quinn', value: 18800, stage: 'Qualified', owner: 'Maya Chen', date: '2026-10-03' },
  { id: 'D-1045', company: 'Sunday Objects', contact: 'Mei Tan', value: 15200, stage: 'Closed won', owner: 'Jordan Lee', date: '2026-09-29' },
  { id: 'D-1044', company: 'Goodfield Market', contact: 'Oliver James', value: 35600, stage: 'Proposal', owner: 'Evan Brooks', date: '2026-09-24' },
  { id: 'D-1043', company: 'Little Lantern', contact: 'Samira Okafor', value: 11900, stage: 'Qualified', owner: 'Jordan Lee', date: '2026-09-18' },
  { id: 'D-1042', company: 'Common Thread', contact: 'Ava Morgan', value: 52800, stage: 'Negotiation', owner: 'Maya Chen', date: '2026-08-30' },
  { id: 'D-1041', company: 'Cedar & Coast', contact: 'Mateo Chen', value: 22100, stage: 'Closed won', owner: 'Jordan Lee', date: '2026-08-16' },
  { id: 'D-1040', company: 'Fieldwork Co.', contact: 'Elliot Park', value: 19400, stage: 'Prospecting', owner: 'Evan Brooks', date: '2026-07-28' },
  { id: 'D-1039', company: 'Daymark Health', contact: 'Priya Shah', value: 34700, stage: 'Proposal', owner: 'Maya Chen', date: '2026-07-17' },
  { id: 'D-1038', company: 'Morrow Supply', contact: 'Theo Williams', value: 16700, stage: 'Closed lost', owner: 'Jordan Lee', date: '2026-06-26' },
  { id: 'D-1037', company: 'Studio Nook', contact: 'Iris Okafor', value: 38900, stage: 'Negotiation', owner: 'Evan Brooks', date: '2026-05-19' },
  { id: 'D-1036', company: 'Redwood Works', contact: 'Jonah Brooks', value: 14300, stage: 'Qualified', owner: 'Jordan Lee', date: '2026-04-11' },
  { id: 'D-1035', company: 'Olive & Oak', contact: 'Nora Ellis', value: 29100, stage: 'Closed won', owner: 'Maya Chen', date: '2026-02-22' },
  { id: 'D-1034', company: 'Pinecone Labs', contact: 'Theo Williams', value: 21500, stage: 'Proposal', owner: 'Evan Brooks', date: '2026-01-15' },
]

export const stages = [
  { name: 'Prospecting', count: 12, value: 184000 },
  { name: 'Qualified', count: 8, value: 392000 },
  { name: 'Proposal', count: 6, value: 517000 },
  { name: 'Negotiation', count: 4, value: 438000 },
  { name: 'Closed won', count: 9, value: 315000 },
]

export const salesTeam = [
  { name: 'Maya Chen', role: 'Enterprise', closed: 12, revenue: 284600, initials: 'MC', image: 'images/candidate-1027.jpg' },
  { name: 'Evan Brooks', role: 'Mid-market', closed: 10, revenue: 241300, initials: 'EB', image: null },
  { name: 'Jordan Lee', role: 'Growth', closed: 9, revenue: 198400, initials: 'JL', image: null },
]

export const formatCurrency = (amount) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
}).format(amount)

export const formatCompactCurrency = (amount) => {
  if (amount >= 1000000) return `$${(amount / 1000000).toFixed(1)}m`
  if (amount >= 1000) return `$${Math.round(amount / 1000)}k`
  return formatCurrency(amount)
}
