import type { TimelinePhase } from '@/types';

export const roadmapPhases: TimelinePhase[] = [
  {
    id: 1,
    phase: 'Phase 1',
    title: 'Establishment',
    period: '2026',
    description: 'Company formation, team assembly, strategic partnerships, and market positioning. Building the organizational foundation for national-scale technology delivery.',
    milestones: [
      'Company incorporation and legal framework',
      'Core team recruitment and advisory board formation',
      'Strategic partnership development with government and donors',
      'Technology stack standardization and methodology development',
      'First pilot project identification and scoping',
    ],
    status: 'active',
    gradient: {
      from: '#1a1a2e',
      to: '#16213e',
    },
  },
  {
    id: 2,
    phase: 'Phase 2',
    title: 'Pilot Implementations',
    period: '2026–2027',
    description: 'Delivering initial pilot projects that demonstrate capability, build trust, and establish reference implementations for national-scale deployment.',
    milestones: [
      'First government digital services pilot deployment',
      'Healthcare facility management pilot in select hospitals',
      'Reconstruction monitoring dashboard for initial project portfolio',
      'SME registration pilot in partnership with business associations',
      'Publication of lessons learned and methodology refinements',
    ],
    status: 'upcoming',
    gradient: {
      from: '#16213e',
      to: '#0f3460',
    },
  },
  {
    id: 3,
    phase: 'Phase 3',
    title: 'Expansion',
    period: '2027–2028',
    description: 'Scaling proven pilot solutions to additional regions and sectors. Expanding the team, deepening partnerships, and establishing SDIC as the trusted technology partner for Sudan\'s digital transformation.',
    milestones: [
      'National-scale deployment of proven pilot solutions',
      'Expansion into education and economic development sectors',
      'Regional office establishment for deployment support',
      'International partnership formalization',
      'Open-source contribution and knowledge sharing programs',
    ],
    status: 'upcoming',
    gradient: {
      from: '#0f3460',
      to: '#0891B2',
    },
  },
  {
    id: 4,
    phase: 'Phase 4',
    title: 'National Infrastructure',
    period: '2028+',
    description: 'Comprehensive national digital infrastructure serving millions of citizens, thousands of enterprises, and hundreds of government institutions — the digital backbone of a reconstructed Sudan.',
    milestones: [
      'Unified national digital services platform',
      'Integrated health information system across all facilities',
      'National education technology infrastructure',
      'Comprehensive enterprise and economic development ecosystem',
      'Sudan positioned as an emerging digital economy in Africa',
    ],
    status: 'upcoming',
    gradient: {
      from: '#0891B2',
      to: '#4A7C59',
    },
  },
];
