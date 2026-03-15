'use client';

import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { roadmapPhases } from '@/data/timeline';
import { CheckCircle, Circle, ArrowRight } from 'lucide-react';

export function ImmersiveTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const statusIcons = {
    completed: CheckCircle,
    active: Circle,
    upcoming: Circle,
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical connecting line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal/50 via-teal/20 to-transparent lg:left-1/2 lg:-translate-x-px" />

      <div className="space-y-16 lg:space-y-24">
        {roadmapPhases.map((phase, index) => {
          const StatusIcon = statusIcons[phase.status];
          const isEven = index % 2 === 0;

          return (
            <ScrollAnimation key={phase.id} delay={index * 150}>
              <div className="relative">
                {/* Timeline node */}
                <div
                  className={cn(
                    'absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 lg:left-1/2',
                    phase.status === 'active'
                      ? 'border-teal bg-navy animate-pulse-glow'
                      : phase.status === 'completed'
                        ? 'border-green bg-navy'
                        : 'border-navy-mid bg-navy',
                  )}
                >
                  <StatusIcon
                    className={cn(
                      'h-5 w-5',
                      phase.status === 'active'
                        ? 'text-teal'
                        : phase.status === 'completed'
                          ? 'text-green'
                          : 'text-gray-600',
                    )}
                  />
                </div>

                {/* Content card */}
                <div
                  className={cn(
                    'ml-16 lg:ml-0 lg:w-[calc(50%-3rem)]',
                    isEven ? 'lg:mr-auto lg:pr-4' : 'lg:ml-auto lg:pl-4',
                  )}
                >
                  <div
                    className="group relative overflow-hidden rounded-2xl border border-white/10 p-8 transition-all duration-500 hover:border-teal/30"
                    style={{
                      background: `linear-gradient(135deg, ${phase.gradient.from}, ${phase.gradient.to})`,
                    }}
                  >
                    {/* Noise overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }} />

                    <div className="relative z-10">
                      {/* Phase badge */}
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={cn(
                            'rounded-full px-3 py-1 text-xs font-semibold',
                            phase.status === 'active'
                              ? 'bg-teal/20 text-teal'
                              : 'bg-white/10 text-gray-400',
                          )}
                        >
                          {phase.phase}
                        </span>
                        <span className="text-xs text-gray-500">{phase.period}</span>
                      </div>

                      <h3 className="font-serif text-2xl text-white">{phase.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-gray-400">
                        {phase.description}
                      </p>

                      {/* Milestones */}
                      <ul className="mt-6 space-y-2">
                        {phase.milestones.map((milestone) => (
                          <li
                            key={milestone}
                            className="flex items-start gap-2 text-xs text-gray-400"
                          >
                            <ArrowRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-teal/60" />
                            <span>{milestone}</span>
                          </li>
                        ))}
                      </ul>

                      {phase.status === 'active' && (
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-xs font-medium text-teal">
                          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
                          Current Phase
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </div>
  );
}
