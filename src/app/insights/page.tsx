import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/ui/Container';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { CardSpotlight } from '@/components/shared/CardSpotlight';
import { Badge } from '@/components/ui/Badge';
import { insights } from '@/data/insights';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Perspectives — Digital Transformation in Sudan',
  description:
    'Expert perspectives on Sudan\'s digital transformation, reconstruction technology, and enterprise solutions for developing economies.',
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        overline="Insights"
        title="Perspectives & Analysis"
        subtitle="Thought leadership on digital transformation, reconstruction technology, and the role of enterprise systems in national development."
      />

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight, i) => (
              <ScrollAnimation key={insight.slug} delay={i * 100}>
                <CardSpotlight className="group h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-teal/30 hover:shadow-lg">
                  <Badge variant="navy" className="mb-4">
                    {insight.category}
                  </Badge>
                  <h2 className="font-serif text-xl text-gray-800 transition-colors group-hover:text-teal-dark">
                    {insight.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {insight.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      <span>{insight.date}</span>
                      <span className="mx-2">&bull;</span>
                      <span>{insight.readTime}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-teal" />
                  </div>
                </CardSpotlight>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={400}>
            <div className="mt-16 mx-auto max-w-2xl text-center">
              <p className="text-sm text-gray-400">
                More insights and analysis coming soon. For immediate inquiries or
                to request a strategic briefing, please{' '}
                <a href="/contact" className="text-teal-dark hover:underline">
                  contact us
                </a>
                .
              </p>
            </div>
          </ScrollAnimation>
        </Container>
      </section>
    </>
  );
}
