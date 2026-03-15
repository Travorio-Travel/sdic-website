import { Container } from '@/components/ui/Container';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { Button } from '@/components/ui/Button';
import { Landmark, Globe, Building2, Users } from 'lucide-react';

const partners = [
  { icon: Landmark, label: 'Government' },
  { icon: Globe, label: 'Development Partners' },
  { icon: Building2, label: 'Private Sector' },
  { icon: Users, label: 'Diaspora' },
];

export function PartnershipCTA() {
  return (
    <section className="relative overflow-hidden aurora py-24 lg:py-32 bg-navy">
      <Container className="relative z-10">
        <ScrollAnimation>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-teal">
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
              Partner With Us
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
            </div>

            <h2 className="font-serif text-3xl font-normal text-white sm:text-4xl lg:text-5xl">
              A Practical Path to Digital Reconstruction
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              We are building partnerships with government institutions, development
              organizations, private sector leaders, and Sudanese diaspora
              professionals to deliver meaningful digital transformation.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/partnerships" size="lg">
                Explore Partnerships
              </Button>
              <Button
                href="/contact?type=briefing"
                variant="outline"
                size="lg"
              >
                Request Strategic Briefing
              </Button>
            </div>
          </div>
        </ScrollAnimation>

        {/* Partner Type Icons */}
        <ScrollAnimation delay={400}>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
            {partners.map((p) => (
              <div
                key={p.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-6 text-center"
              >
                <p.icon className="h-6 w-6 text-teal" />
                <span className="text-xs font-medium text-gray-400">{p.label}</span>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
