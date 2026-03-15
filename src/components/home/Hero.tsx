'use client';

import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { NetworkVisualization } from '@/components/effects/NetworkVisualization';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden gradient-mesh-dark noise-overlay">
      {/* Network Background */}
      <NetworkVisualization />

      {/* Content */}
      <Container className="relative z-10 py-32 lg:py-0">
        <div className="max-w-3xl">
          <ScrollAnimation delay={200}>
            <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-teal">
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
              Sudan Digital Infrastructure Company
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={400}>
            <h1 className="text-shimmer font-serif text-5xl font-normal leading-tight sm:text-6xl lg:text-7xl">
              Building Sudan&apos;s Digital Future
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={600}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
              A Sudanese-led technology company developing digital infrastructure,
              enterprise software, and national-scale platforms to support
              reconstruction and long-term development.
            </p>
          </ScrollAnimation>

          <ScrollAnimation delay={800}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/about" size="lg">
                Explore Our Vision
              </Button>
              <Button href="/contact?type=briefing" variant="outline" size="lg">
                Request Strategic Briefing
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float">
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
          className="flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-teal"
          aria-label="Scroll to content"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
