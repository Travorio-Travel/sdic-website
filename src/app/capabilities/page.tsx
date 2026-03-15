import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { CardSpotlight } from '@/components/shared/CardSpotlight';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  enterpriseShowcases,
  telecomShowcases,
  sudanConcepts,
  capabilitiesDisclaimer,
} from '@/data/capabilities';
import type { ShowcaseCard } from '@/types';

export const metadata: Metadata = {
  title: 'Capabilities & Experience — Enterprise Software & Platform Concepts',
  description:
    'Representative experience in enterprise software, cloud platforms, telecommunications infrastructure, and proposed digital solutions for Sudan.',
};

function ShowcaseCardComponent({ item, index }: { item: ShowcaseCard; index: number }) {
  return (
    <ScrollAnimation delay={index * 100}>
      <CardSpotlight className="h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-teal/30 hover:shadow-lg">
        <Badge
          variant={item.type === 'experience' ? 'gold' : 'teal'}
          className="mb-4"
        >
          {item.badge}
        </Badge>
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.overview}</p>

        {item.problem && (
          <div className="mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
              Problem Addressed
            </h4>
            <p className="mt-1 text-sm text-gray-500">{item.problem}</p>
          </div>
        )}

        <div className="mt-4">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
            {item.type === 'experience' ? 'Key Capabilities' : 'Platform Capabilities'}
          </h4>
          <ul className="space-y-1">
            {item.capabilities.map((cap) => (
              <li key={cap} className="flex gap-2 text-xs text-gray-500">
                <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-teal" />
                {cap}
              </li>
            ))}
          </ul>
        </div>

        {item.technologies && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-500"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 rounded-lg border border-teal/10 bg-teal/5 p-3">
          <h4 className="text-[10px] font-semibold uppercase tracking-[0.1em] text-teal-dark">
            {item.type === 'experience' ? 'Outcome' : 'Expected Impact'}
          </h4>
          <p className="mt-1 text-xs text-gray-600">{item.impact}</p>
        </div>
      </CardSpotlight>
    </ScrollAnimation>
  );
}

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        overline="Capabilities"
        title="Experience & Platform Concepts"
        subtitle="Representative enterprise experience from our leadership team, combined with proposed platform solutions designed for Sudan's specific needs."
      />

      {/* Enterprise Software */}
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Part A: Enterprise Software & Cloud Platforms"
              title="Representative Enterprise Experience"
              subtitle="Capabilities demonstrated through our leadership team's work at Fortune 500 enterprises and technology companies."
            />
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {enterpriseShowcases.map((item, i) => (
              <ShowcaseCardComponent key={item.id} item={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Telecom */}
      <section className="bg-off-white py-24 lg:py-32 dot-grid">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Part B: Telecommunications & Infrastructure"
              title="Infrastructure Systems Experience"
              subtitle="Capabilities from 20+ years of telecommunications infrastructure leadership, systems architecture, and cybersecurity operations."
            />
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-2">
            {telecomShowcases.map((item, i) => (
              <ShowcaseCardComponent key={item.id} item={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Sudan Concepts */}
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Part C: Platform Concepts for Sudan"
              title="Illustrative Platform Concepts"
              subtitle="Proposed solution architectures based on identified market needs and our combined technical capabilities. These represent platform concepts, not delivered projects."
            />
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sudanConcepts.map((item, i) => (
              <ShowcaseCardComponent key={item.id} item={item} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* Disclaimer + CTA */}
      <section className="bg-navy py-24 lg:py-32 aurora">
        <Container className="relative z-10 text-center">
          <ScrollAnimation>
            <h2 className="mx-auto max-w-2xl font-serif text-3xl text-white sm:text-4xl">
              Let&apos;s Discuss Your Technology Needs
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">
                Start a Conversation
              </Button>
              <Button href="/contact?type=briefing" variant="outline" size="lg">
                Request Strategic Briefing
              </Button>
            </div>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <p className="mx-auto mt-16 max-w-2xl text-center text-xs leading-relaxed text-gray-600">
              {capabilitiesDisclaimer}
            </p>
          </ScrollAnimation>
        </Container>
      </section>
    </>
  );
}
