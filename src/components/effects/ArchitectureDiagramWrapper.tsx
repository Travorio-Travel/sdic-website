'use client';

import dynamic from 'next/dynamic';

const ArchitectureDiagram = dynamic(
  () => import('./ArchitectureDiagram').then((mod) => ({ default: mod.ArchitectureDiagram })),
  { ssr: false, loading: () => <div className="h-[300px] animate-pulse rounded-xl bg-gray-100" /> },
);

export { ArchitectureDiagram };
export {
  governmentDiagram,
  healthcareDiagram,
  infrastructureDiagram,
} from './ArchitectureDiagram';
