import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { Globe, Layers, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    icon: Globe,
    title: 'Sudanese-Led, Globally Experienced',
    description:
      'Our founding team combines deep understanding of Sudan\'s context and needs with decades of technology leadership at the world\'s most demanding enterprises. This dual perspective — local roots with global expertise — is our defining advantage.',
  },
  {
    icon: Layers,
    title: 'Enterprise-Grade Technology',
    description:
      'We bring Fortune 500 engineering discipline to national development challenges. Our solutions are built on the same architectural principles that power systems serving hundreds of millions of users — scalable, secure, and maintainable.',
  },
  {
    icon: ShieldCheck,
    title: 'Reconstruction-Ready Solutions',
    description:
      'Our platforms are designed for the specific requirements of post-conflict environments — offline capability, low-bandwidth optimization, rapid deployment, and the transparency and accountability that reconstruction demands.',
  },
];

export function StrategicAdvantage() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <ScrollAnimation>
          <SectionHeader
            overline="Why SDIC"
            title="Built by Sudanese Talent with Global Experience"
            subtitle="We believe Sudan's digital transformation must be led by those who understand both the technology and the nation."
          />
        </ScrollAnimation>

        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <ScrollAnimation key={pillar.title} delay={index * 150}>
              <div className="relative rounded-2xl border border-gray-100 bg-white p-8 lg:p-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-teal">
                  <pillar.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {pillar.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Quote Block */}
        <ScrollAnimation delay={500}>
          <blockquote className="mx-auto mt-20 max-w-3xl text-center">
            <p className="font-serif text-xl italic leading-relaxed text-gray-600 lg:text-2xl">
              &ldquo;Sudan&apos;s reconstruction is not just about rebuilding
              physical structures. It is about building the digital foundations that
              will enable transparent governance, efficient service delivery, and
              long-term economic development.&rdquo;
            </p>
            <cite className="mt-4 block text-sm font-medium text-gray-400 not-italic">
              — SDIC Founding Vision
            </cite>
          </blockquote>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
