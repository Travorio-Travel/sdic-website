import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { CardSpotlight } from '@/components/shared/CardSpotlight';
import { Badge } from '@/components/ui/Badge';
import { enterpriseShowcases, telecomShowcases, sudanConcepts } from '@/data/capabilities';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featured = [
  enterpriseShowcases[0],
  telecomShowcases[0],
  sudanConcepts[0],
];

export function CapabilitiesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-off-white dot-grid">
      <Container>
        <ScrollAnimation>
          <SectionHeader
            overline="Capabilities"
            title="Representative Experience & Platform Concepts"
            subtitle="From enterprise software at Fortune 500 scale to proposed national platforms for Sudan."
          />
        </ScrollAnimation>

        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((item, index) => (
            <ScrollAnimation key={item.id} delay={index * 150}>
              <CardSpotlight className="group h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-teal/30 hover:shadow-lg">
                <Badge
                  variant={item.type === 'experience' ? 'gold' : 'teal'}
                  className="mb-4"
                >
                  {item.badge}
                </Badge>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {item.overview}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.capabilities.slice(0, 3).map((cap) => (
                    <span
                      key={cap}
                      className="text-xs text-gray-400"
                    >
                      &bull; {cap}
                    </span>
                  ))}
                </div>
              </CardSpotlight>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation delay={500}>
          <div className="mt-12 text-center">
            <Link
              href="/capabilities"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-dark transition-colors hover:text-navy"
            >
              View All Capabilities
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
