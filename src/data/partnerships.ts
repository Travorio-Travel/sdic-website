import type { PartnerType, PartnershipModel } from '@/types';

export const partnerTypes: PartnerType[] = [
  {
    id: 'government',
    title: 'Government Ministries & Agencies',
    description: 'We work directly with government institutions to design, build, and deploy digital platforms that modernize public service delivery and institutional operations.',
    icon: 'Landmark',
    examples: [
      'Ministry of Communications & Digital Transformation',
      'Ministry of Health',
      'Ministry of Education',
      'Ministry of Finance & Economic Planning',
      'Reconstruction authorities and commissions',
    ],
  },
  {
    id: 'development',
    title: 'Development Partners & Donors',
    description: 'We partner with international development organizations to implement technology solutions that support their programs and maximize development impact through digital tools.',
    icon: 'Globe',
    examples: [
      'United Nations agencies (UNDP, UNICEF, WHO)',
      'World Bank and African Development Bank',
      'Bilateral development agencies',
      'International humanitarian organizations',
      'Development finance institutions',
    ],
  },
  {
    id: 'private-sector',
    title: 'Private Sector & Technology Companies',
    description: 'We collaborate with technology providers, infrastructure companies, and enterprises to deliver integrated solutions and expand our capability ecosystem.',
    icon: 'Building2',
    examples: [
      'Cloud infrastructure providers',
      'Telecommunications operators',
      'Enterprise software companies',
      'Payment and fintech platforms',
      'Hardware and connectivity providers',
    ],
  },
  {
    id: 'investors',
    title: 'Strategic Investors',
    description: 'We engage with impact investors and strategic capital partners who share our vision for Sudan\'s digital transformation and understand the long-term value creation opportunity.',
    icon: 'TrendingUp',
    examples: [
      'Impact investment funds',
      'Africa-focused technology investors',
      'Development finance institutions',
      'Strategic corporate investors',
      'Diaspora investment networks',
    ],
  },
  {
    id: 'diaspora',
    title: 'Sudanese Diaspora Experts',
    description: 'We actively seek collaboration with Sudanese technology professionals around the world who want to contribute their expertise to Sudan\'s digital future.',
    icon: 'Users',
    examples: [
      'Software engineers and architects',
      'Data scientists and AI specialists',
      'Cybersecurity professionals',
      'Product managers and designers',
      'Technology executives and advisors',
    ],
  },
  {
    id: 'ngo',
    title: 'NGOs & Civil Society',
    description: 'We partner with non-governmental organizations to ensure our technology solutions serve the needs of communities and contribute to inclusive development.',
    icon: 'Heart',
    examples: [
      'Health-focused NGOs',
      'Education and youth organizations',
      'Women\'s empowerment organizations',
      'Rural development organizations',
      'Digital literacy and inclusion initiatives',
    ],
  },
];

export const partnershipModels: PartnershipModel[] = [
  {
    id: 'implementation',
    title: 'Technology Implementation Partner',
    description: 'SDIC serves as the primary technology implementation partner, delivering end-to-end solutions from requirements analysis through deployment, training, and ongoing support.',
    suitableFor: ['Government ministries', 'Development partner programs', 'Large-scale institutional projects'],
  },
  {
    id: 'advisory',
    title: 'Technology Advisory & Strategy',
    description: 'SDIC provides strategic technology advisory services, helping organizations develop digital transformation roadmaps, evaluate technology options, and plan implementation approaches.',
    suitableFor: ['Government digital strategy development', 'Donor program technology assessment', 'Private sector digital transformation planning'],
  },
  {
    id: 'joint-venture',
    title: 'Joint Development & Co-Investment',
    description: 'SDIC co-develops solutions with partners, sharing resources, risks, and returns. Ideal for partners bringing complementary capabilities such as domain expertise, funding, or market access.',
    suitableFor: ['Technology companies entering Sudan market', 'Impact investors', 'Telecommunications operators'],
  },
  {
    id: 'capacity',
    title: 'Capacity Building & Knowledge Transfer',
    description: 'SDIC develops local technology capacity through training programs, mentorship, and knowledge transfer initiatives — building the long-term Sudanese technology workforce.',
    suitableFor: ['Education institutions', 'Government workforce development', 'Diaspora collaboration programs'],
  },
];
