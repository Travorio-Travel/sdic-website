// ============================================================
// SDIC Website — TypeScript Interfaces
// ============================================================

// Navigation
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface NavConfig {
  links: NavLink[];
  cta: {
    label: string;
    href: string;
  };
}

// Services
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  useCases: string[];
  expectedImpact: string;
  architectureDiagram?: ArchitectureDiagram;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  icon?: string;
  x: number;
  y: number;
  type: 'primary' | 'secondary' | 'tertiary';
}

export interface ArchitectureConnection {
  from: string;
  to: string;
  label?: string;
  animated?: boolean;
}

export interface ArchitectureDiagram {
  nodes: ArchitectureNode[];
  connections: ArchitectureConnection[];
}

// Leadership
export interface LeaderExpertise {
  label: string;
  category: 'technical' | 'domain' | 'leadership';
}

export interface CareerMilestone {
  company: string;
  role: string;
  period?: string;
  highlight?: string;
}

export interface Leader {
  id: string;
  name: string;
  title: string;
  shortBio: string;
  fullBio: string[];
  expertise: LeaderExpertise[];
  career: CareerMilestone[];
  whyStatement: string;
  initials: string;
  image?: string;
  gradientFrom: string;
  gradientTo: string;
}

// Opportunity / Stats
export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description?: string;
  icon?: string;
  color?: 'teal' | 'gold' | 'green' | 'white';
}

export interface SectorOpportunity {
  id: string;
  title: string;
  description: string;
  stats: Stat[];
  narrative: string;
}

// Capabilities / Showcases
export type ShowcaseType = 'experience' | 'concept';

export interface ShowcaseCard {
  id: string;
  type: ShowcaseType;
  category: string;
  title: string;
  overview: string;
  problem?: string;
  capabilities: string[];
  impact: string;
  technologies?: string[];
  badge: string;
}

// Partnerships
export interface PartnerType {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

export interface PartnershipModel {
  id: string;
  title: string;
  description: string;
  suitableFor: string[];
}

// Contact Form
export type InquiryType =
  | 'general'
  | 'partnership'
  | 'government'
  | 'investment'
  | 'media'
  | 'diaspora';

export interface ContactFormData {
  name: string;
  organization: string;
  role: string;
  email: string;
  phone?: string;
  inquiryType: InquiryType;
  serviceInterests: string[];
  message: string;
  preferredContact: 'email' | 'phone';
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
}

// Insights
export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content?: string;
}

// Timeline / Roadmap
export interface TimelinePhase {
  id: number;
  phase: string;
  title: string;
  period: string;
  description: string;
  milestones: string[];
  status: 'completed' | 'active' | 'upcoming';
  gradient: {
    from: string;
    to: string;
  };
}

// Section Component Props
export interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
  theme?: 'light' | 'dark';
}

// Terminal
export interface TerminalCommand {
  command: string;
  output: string[];
  delay?: number;
}

// Data Dashboard
export interface ChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface RingChartData {
  segments: ChartDataPoint[];
  centerLabel: string;
  centerValue: string;
}

export interface BarChartData {
  bars: ChartDataPoint[];
  maxValue: number;
}
