import type { Stat, SectorOpportunity } from '@/types';

export const keyStats: Stat[] = [
  {
    id: 'population',
    value: 52,
    suffix: 'M+',
    label: 'Population',
    description: 'One of Africa\'s largest populations, representing significant digital market potential',
    icon: 'Users',
    color: 'teal',
  },
  {
    id: 'unconnected',
    value: 37,
    suffix: 'M+',
    label: 'Awaiting Connectivity',
    description: 'People without regular internet access, representing the connectivity gap to close',
    icon: 'Wifi',
    color: 'gold',
  },
  {
    id: 'enterprises',
    value: 24,
    suffix: 'K+',
    label: 'Registered Enterprises',
    description: 'Businesses requiring digital tools, payments, and enterprise software',
    icon: 'Building2',
    color: 'teal',
  },
  {
    id: 'healthcare',
    value: 6500,
    suffix: '+',
    label: 'Healthcare Facilities',
    description: 'Primary healthcare facilities in need of digital health information systems',
    icon: 'HeartPulse',
    color: 'green',
  },
];

export const extendedStats: Stat[] = [
  ...keyStats,
  {
    id: 'internet-users',
    value: 14.9,
    suffix: 'M',
    label: 'Internet Users',
    description: 'Current internet user base with growing digital adoption',
    icon: 'Globe',
    color: 'teal',
  },
  {
    id: 'smes',
    value: 22460,
    suffix: '+',
    label: 'Small & Medium Enterprises',
    description: 'SMEs forming the backbone of Sudan\'s private economy',
    icon: 'Store',
    color: 'gold',
  },
  {
    id: 'hospitals',
    value: 300,
    suffix: '+',
    label: 'Public Hospitals',
    description: 'Hospitals requiring modern management and patient record systems',
    icon: 'Hospital',
    color: 'green',
  },
];

export const sectorOpportunities: SectorOpportunity[] = [
  {
    id: 'institutional',
    title: 'Institutional Demand',
    description: 'Government ministries, agencies, and public institutions require digital systems for citizen services, internal operations, and inter-agency coordination. The reconstruction period creates unprecedented demand for project management, resource tracking, and transparency platforms.',
    stats: [
      { id: 'inst-1', value: 52, suffix: 'M+', label: 'Citizens to serve digitally', color: 'teal' },
      { id: 'inst-2', value: 300, suffix: '+', label: 'Public hospitals to connect', color: 'green' },
    ],
    narrative: 'Sudan\'s government institutions are operating with limited digital infrastructure at a time when the demands of reconstruction require unprecedented coordination, transparency, and efficiency. Every ministry, agency, and public service delivery point represents a digitization opportunity.',
  },
  {
    id: 'private-sector',
    title: 'Private Sector Opportunity',
    description: 'With 24,000+ registered enterprises and a growing entrepreneurial ecosystem, Sudan\'s private sector needs digital tools for operations, payments, supply chain management, and market access. The formalization of economic activity through digital platforms represents a massive growth opportunity.',
    stats: [
      { id: 'priv-1', value: 24, suffix: 'K+', label: 'Enterprises to digitize', color: 'gold' },
      { id: 'priv-2', value: 22460, suffix: '+', label: 'SMEs seeking digital tools', color: 'teal' },
    ],
    narrative: 'Sudan\'s private sector is ripe for digital transformation. From agricultural supply chains to urban retail operations, businesses need modern tools to compete, grow, and participate in regional trade. Digital business platforms can accelerate economic recovery and formalization.',
  },
  {
    id: 'digital-economy',
    title: 'Long-Term Digital Economy',
    description: 'With 37 million people still awaiting regular internet connectivity, Sudan represents one of the largest untapped digital markets on the African continent. As infrastructure expands, the demand for digital services, content, and platforms will grow exponentially.',
    stats: [
      { id: 'dig-1', value: 37, suffix: 'M+', label: 'Potential new digital citizens', color: 'teal' },
      { id: 'dig-2', value: 14.9, suffix: 'M', label: 'Current digital user base', color: 'gold' },
    ],
    narrative: 'The digital economy opportunity in Sudan extends beyond immediate reconstruction needs. As connectivity expands to reach 37 million currently unconnected citizens, the market for digital services, fintech, e-commerce, and digital content will create an entirely new economic layer.',
  },
];

export const disclaimer = 'Statistics shown are directional market indicators for strategic positioning and should be validated against the latest official and development-partner sources before formal investment or policy use.';
