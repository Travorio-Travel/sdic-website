import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { CardSpotlight } from '@/components/shared/CardSpotlight';
import { Button } from '@/components/ui/Button';
import { partnerTypes, partnershipModels } from '@/data/partnerships';
import {
  Landmark,
  Globe,
  Building2,
  TrendingUp,
  Users,
  Heart,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partnership Opportunities — Government, Development Partners & Investors',
  description:
    'Partner with SDIC for Sudan\'s digital transformation. We work with government ministries, donors, NGOs, telecom companies, and strategic investors.',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark,
  Globe,
  Building2,
  TrendingUp,
  Users,
  Heart,
};

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        overline="Partnerships"
        title="Building Together"
        subtitle="Sudan's digital transformation is too important and too complex for any single organization. We seek partnerships with those who share our commitment to Sudan's future."
      />

      {/* Who We Work With */}
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Who We Work With"
              title="Partnership Ecosystem"
              subtitle="We engage with a diverse ecosystem of partners — each bringing unique capabilities, resources, and perspectives to Sudan's digital transformation."
            />
          </ScrollAnimation>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerTypes.map((partner, i) => {
              const Icon = iconMap[partner.icon];
              return (
                <ScrollAnimation key={partner.id} delay={i * 100}>
                  <CardSpotlight className="h-full rounded-2xl border border-gray-200 bg-white p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {partner.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {partner.description}
                    </p>
                    <ul className="mt-4 space-y-1">
                      {partner.examples.slice(0, 3).map((ex) => (
                        <li key={ex} className="flex gap-2 text-xs text-gray-400">
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-teal" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </CardSpotlight>
                </ScrollAnimation>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Partnership Models */}
      <section className="bg-off-white py-24 lg:py-32 dot-grid">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Partnership Models"
              title="How We Collaborate"
              subtitle="We offer flexible partnership structures designed to match the needs and capabilities of each partner."
            />
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2">
            {partnershipModels.map((model, i) => (
              <ScrollAnimation key={model.id} delay={i * 100}>
                <div className="rounded-2xl border border-gray-200 bg-white p-8">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {model.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {model.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
                      Suitable For
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {model.suitableFor.map((s) => (
                        <li key={s} className="flex gap-2 text-xs text-gray-500">
                          <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-teal" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* Advisory */}
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeader
                overline="Diaspora Engagement"
                title="Sudanese Global Technology Talent"
                subtitle="We actively seek collaboration with Sudanese technology professionals around the world who want to contribute their expertise to Sudan's digital future."
                alignment="center"
              />
              <p className="text-base leading-relaxed text-gray-600">
                Thousands of Sudanese professionals have built distinguished careers
                at the world&apos;s leading technology companies, financial institutions,
                and telecommunications operators. This global talent network represents
                an unprecedented resource for national development. SDIC serves as a
                bridge — connecting diaspora expertise with the specific technology
                needs of Sudan&apos;s reconstruction.
              </p>
            </div>
          </ScrollAnimation>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 lg:py-32 aurora">
        <Container className="relative z-10 text-center">
          <ScrollAnimation>
            <h2 className="mx-auto max-w-2xl font-serif text-3xl text-white sm:text-4xl">
              Let&apos;s Explore How We Can Work Together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Whether you&apos;re a government leader, development partner, investor,
              or Sudanese professional abroad — we want to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact?type=partnership" size="lg">
                Partnership Inquiry
              </Button>
              <Button href="/contact?type=briefing" variant="outline" size="lg">
                Request Strategic Briefing
              </Button>
            </div>
          </ScrollAnimation>
        </Container>
      </section>
    </>
  );
}
