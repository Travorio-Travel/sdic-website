import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { CountUp } from '@/components/shared/CountUp';
import { Button } from '@/components/ui/Button';
import { extendedStats, sectorOpportunities, disclaimer } from '@/data/opportunity';

export const metadata: Metadata = {
  title: 'Sudan Digital Opportunity — Market Overview',
  description:
    'Explore Sudan\'s 52M+ population digital transformation opportunity. 37M+ unconnected citizens, 24K+ enterprises, and growing institutional demand for technology.',
};

export default function OpportunityPage() {
  return (
    <>
      <PageHero
        overline="The Opportunity"
        title="Sudan's Digital Transformation Opportunity"
        subtitle="A nation of 52 million people, a growing digital adoption curve, and an unprecedented institutional demand for technology — Sudan represents one of the largest untapped digital markets in Africa."
      />

      {/* Key Metrics Dashboard */}
      <section className="gradient-mesh-dark noise-overlay relative py-24 lg:py-32">
        <Container className="relative z-10">
          <ScrollAnimation>
            <SectionHeader
              overline="Market Snapshot"
              title="Sudan by the Numbers"
              alignment="center"
              theme="dark"
            />
          </ScrollAnimation>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {extendedStats.slice(0, 4).map((stat, i) => (
              <ScrollAnimation key={stat.id} delay={i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                  <div className="font-mono text-3xl font-bold text-teal sm:text-4xl">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-300">
                    {stat.label}
                  </div>
                  <p className="mt-1 text-xs text-gray-500">{stat.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Extended stats row */}
          <div className="mt-6 grid grid-cols-3 gap-6">
            {extendedStats.slice(4).map((stat, i) => (
              <ScrollAnimation key={stat.id} delay={400 + i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                  <div className="font-mono text-2xl font-bold text-gold sm:text-3xl">
                    <CountUp
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-300">
                    {stat.label}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Sudan */}
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="The Case"
              title="Why Sudan Is a Digital Transformation Opportunity"
              subtitle="Three converging factors make Sudan one of the most significant digital infrastructure opportunities on the African continent."
            />
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-gray-600">
              <p>
                <strong className="text-gray-800">Reconstruction demand:</strong>{' '}
                The post-conflict reconstruction period creates immediate, large-scale
                demand for project management platforms, coordination tools, fund tracking
                systems, and transparency mechanisms. Every reconstruction program needs
                digital infrastructure.
              </p>
              <p>
                <strong className="text-gray-800">Institutional gap:</strong>{' '}
                Government ministries, healthcare facilities, and educational institutions
                have minimal digital systems. This means there is no legacy infrastructure
                to replace — new systems can be designed correctly from the start, using
                modern architecture and best practices.
              </p>
              <p>
                <strong className="text-gray-800">Connectivity growth:</strong>{' '}
                With 14.9 million internet users and 37 million more awaiting connectivity,
                Sudan&apos;s digital adoption curve is at an early stage with enormous
                growth potential. As infrastructure expands, demand for digital services
                will grow exponentially.
              </p>
            </div>
          </ScrollAnimation>
        </Container>
      </section>

      {/* Sector Opportunities */}
      <section className="bg-off-white py-24 lg:py-32 dot-grid">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Sector Analysis"
              title="Where the Demand Is"
            />
          </ScrollAnimation>

          <div className="space-y-12">
            {sectorOpportunities.map((sector, i) => (
              <ScrollAnimation key={sector.id} delay={i * 100}>
                <div className="rounded-2xl border border-gray-200 bg-white p-8 lg:p-10">
                  <h3 className="font-serif text-2xl text-gray-800">
                    {sector.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    {sector.description}
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    {sector.stats.map((stat) => (
                      <div key={stat.id} className="rounded-xl bg-off-white p-4 text-center">
                        <div className="font-mono text-2xl font-bold text-teal">
                          <CountUp
                            end={stat.value}
                            suffix={stat.suffix}
                            decimals={stat.value % 1 !== 0 ? 1 : 0}
                          />
                        </div>
                        <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm italic leading-relaxed text-gray-500">
                    {sector.narrative}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* Disclaimer + CTA */}
      <section className="bg-navy py-24 lg:py-32 aurora">
        <Container className="relative z-10">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl text-white sm:text-4xl">
                Ready to Explore Partnership Opportunities?
              </h2>
              <p className="mt-4 text-gray-400">
                Sudan&apos;s digital transformation is a generational opportunity. Let&apos;s
                discuss how we can work together.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href="/partnerships" size="lg">
                  Explore Partnerships
                </Button>
                <Button href="/contact?type=briefing" variant="outline" size="lg">
                  Request Strategic Briefing
                </Button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Disclaimer */}
          <ScrollAnimation delay={300}>
            <p className="mx-auto mt-16 max-w-2xl text-center text-xs leading-relaxed text-gray-600">
              {disclaimer}
            </p>
          </ScrollAnimation>
        </Container>
      </section>
    </>
  );
}
