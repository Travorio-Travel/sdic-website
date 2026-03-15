import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { CountUp } from '@/components/shared/CountUp';
import { keyStats } from '@/data/opportunity';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function OpportunitySnapshot() {
  return (
    <section className="gradient-mesh-dark noise-overlay relative py-24 lg:py-32">
      <Container className="relative z-10">
        <ScrollAnimation>
          <SectionHeader
            overline="The Opportunity"
            title="Sudan's Digital Landscape"
            subtitle="A nation of 52 million people on the threshold of digital transformation — where infrastructure gaps represent unprecedented opportunity."
            alignment="center"
            theme="dark"
          />
        </ScrollAnimation>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {keyStats.map((stat, index) => (
            <ScrollAnimation key={stat.id} delay={index * 100}>
              <div className="text-center">
                <div className="font-mono text-4xl font-bold text-teal sm:text-5xl lg:text-[3.5rem]">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <div className="mt-2 text-sm font-medium text-gray-300">
                  {stat.label}
                </div>
                <p className="mt-1 hidden text-xs text-gray-500 lg:block">
                  {stat.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={500}>
          <div className="mt-12 text-center">
            <Link
              href="/opportunity"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal transition-colors hover:text-white"
            >
              Explore the Full Opportunity
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
