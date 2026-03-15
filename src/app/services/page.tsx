import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/ui/Container';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { CardSpotlight } from '@/components/shared/CardSpotlight';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import {
  ArchitectureDiagram,
  governmentDiagram,
  healthcareDiagram,
  infrastructureDiagram,
} from '@/components/effects/ArchitectureDiagram';
import {
  Landmark,
  Construction,
  HeartPulse,
  GraduationCap,
  TrendingUp,
  Code,
  GitMerge,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — Digital Government, Healthcare, Education & Enterprise Technology',
  description:
    'SDIC delivers digital government platforms, healthcare systems, education technology, enterprise software, cybersecurity, and infrastructure management solutions.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  Construction,
  HeartPulse,
  GraduationCap,
  TrendingUp,
  Code,
  GitMerge,
  BarChart3,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        overline="Our Services"
        title="Technology Solutions for Sudan's Development"
        subtitle="Comprehensive digital infrastructure services spanning government modernization, healthcare, education, enterprise systems, and cybersecurity."
      />

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const isEven = index % 2 === 0;

              return (
                <ScrollAnimation key={service.id}>
                  <div
                    id={service.id}
                    className={`grid gap-8 lg:grid-cols-2 ${isEven ? '' : 'lg:direction-rtl'}`}
                  >
                    {/* Content */}
                    <div className={isEven ? '' : 'lg:order-2'}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                          {Icon && <Icon className="h-6 w-6" />}
                        </div>
                        <h2 className="font-serif text-2xl text-gray-800 sm:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                      <p className="text-base leading-relaxed text-gray-600">
                        {service.fullDescription}
                      </p>

                      {/* Expected Impact */}
                      <div className="mt-6 rounded-xl border border-teal/20 bg-teal/5 p-5">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-teal-dark">
                          Expected Impact
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                          {service.expectedImpact}
                        </p>
                      </div>
                    </div>

                    {/* Use Cases Card */}
                    <CardSpotlight
                      className={`rounded-2xl border border-gray-200 bg-off-white p-8 ${isEven ? '' : 'lg:order-1'}`}
                      tilt={false}
                    >
                      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
                        Practical Use Cases
                      </h3>
                      <ul className="space-y-3">
                        {service.useCases.map((useCase) => (
                          <li
                            key={useCase}
                            className="flex gap-3 text-sm text-gray-600"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </CardSpotlight>
                  </div>

                  {/* Architecture Diagrams for key services */}
                  {service.id === 'digital-government' && (
                    <div className="mt-10 rounded-2xl border border-gray-200 bg-off-white p-6 lg:p-8">
                      <ArchitectureDiagram
                        title="Example Solution Architecture"
                        nodes={governmentDiagram.nodes}
                        connections={governmentDiagram.connections}
                      />
                    </div>
                  )}
                  {service.id === 'healthcare-technology' && (
                    <div className="mt-10 rounded-2xl border border-gray-200 bg-off-white p-6 lg:p-8">
                      <ArchitectureDiagram
                        title="Example Solution Architecture"
                        nodes={healthcareDiagram.nodes}
                        connections={healthcareDiagram.connections}
                      />
                    </div>
                  )}
                  {service.id === 'infrastructure-reconstruction' && (
                    <div className="mt-10 rounded-2xl border border-gray-200 bg-off-white p-6 lg:p-8">
                      <ArchitectureDiagram
                        title="Example Solution Architecture"
                        nodes={infrastructureDiagram.nodes}
                        connections={infrastructureDiagram.connections}
                      />
                    </div>
                  )}

                  {index < services.length - 1 && (
                    <div className="mt-20 border-t border-gray-100" />
                  )}
                </ScrollAnimation>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 lg:py-32 aurora">
        <Container className="relative z-10 text-center">
          <ScrollAnimation>
            <h2 className="mx-auto max-w-2xl font-serif text-3xl text-white sm:text-4xl">
              Ready to Discuss Your Technology Needs?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Whether you need a single platform or a comprehensive digital
              transformation strategy, our team is ready to help.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">
                Start a Conversation
              </Button>
              <Button href="/capabilities" variant="outline" size="lg">
                View Our Capabilities
              </Button>
            </div>
          </ScrollAnimation>
        </Container>
      </section>
    </>
  );
}
