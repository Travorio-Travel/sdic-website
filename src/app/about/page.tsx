import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { Button } from '@/components/ui/Button';
import { InteractiveTerminal } from '@/components/effects/InteractiveTerminal';
import { Globe, Layers, ShieldCheck, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About SDIC — Our Vision for Sudan\'s Digital Future',
  description:
    'Learn about Sudan Digital Infrastructure Company, our mission to leverage Sudanese global talent and enterprise technology for national reconstruction.',
};

const advantages = [
  {
    icon: Globe,
    title: 'Sudanese Identity, Global Reach',
    description:
      'We are Sudanese professionals who have built careers at the highest levels of global technology. We understand Sudan\'s context, culture, and needs because it is our own. We bring world-class capability because we have earned it at the world\'s most demanding institutions.',
  },
  {
    icon: Layers,
    title: 'Enterprise Engineering Discipline',
    description:
      'Our technical approach is forged in Fortune 500 environments where systems must serve millions, process billions, and never fail. We apply these same standards — scalability, security, observability, operational excellence — to national development technology.',
  },
  {
    icon: ShieldCheck,
    title: 'Reconstruction Context Expertise',
    description:
      'We design for the realities of post-conflict environments: intermittent connectivity, limited infrastructure, multi-stakeholder coordination, and the critical need for transparency and accountability in every system.',
  },
  {
    icon: Lightbulb,
    title: 'Long-Term Vision, Practical Execution',
    description:
      'Our roadmap balances immediate reconstruction needs with long-term digital economy development. We start with pilots that prove value quickly, then scale solutions that create lasting institutional capability.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        overline="About SDIC"
        title="Technology for Reconstruction and National Development"
        subtitle="Sudan Digital Infrastructure Company is a Sudanese-led technology initiative focused on building the digital foundations for a reconstructed, modern, and digitally empowered Sudan."
      />

      {/* Our Story */}
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Our Story"
              title="Why We Built SDIC"
            />
          </ScrollAnimation>
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollAnimation>
              <div className="space-y-6 text-base leading-relaxed text-gray-600">
                <p>
                  Sudan Digital Infrastructure Company was founded by Sudanese technology
                  professionals who have spent decades building enterprise systems at some
                  of the world&apos;s most demanding organizations — from Fortune 500
                  corporations to national telecommunications operators.
                </p>
                <p>
                  We founded SDIC because we believe that Sudan&apos;s reconstruction and
                  long-term development require more than physical rebuilding. They require
                  the digital infrastructure that enables transparent governance, efficient
                  service delivery, and economic participation for all citizens.
                </p>
                <p>
                  We also believe that this digital infrastructure must be designed and
                  built by people who understand both the technology and the context —
                  Sudanese professionals who carry personal commitment to their
                  country&apos;s future alongside world-class technical capability.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation delay={200}>
              <div className="space-y-6 text-base leading-relaxed text-gray-600">
                <p>
                  SDIC is not a typical technology consultancy. We are a purpose-driven
                  company built to address a specific national need at a critical moment.
                  Our founding team&apos;s combination of enterprise software architecture,
                  telecommunications infrastructure expertise, and startup leadership
                  positions us uniquely to deliver technology that works at national scale.
                </p>
                <p>
                  We bring the engineering discipline of Fortune 500 enterprises, the
                  infrastructure expertise of national telecommunications operations, and
                  the agility of technology startups — all directed toward the specific
                  challenges and opportunities of Sudan&apos;s digital transformation.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="gradient-mesh-dark noise-overlay relative py-24 lg:py-32">
        <Container className="relative z-10">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <ScrollAnimation direction="left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-teal">
                  Vision
                </div>
                <h3 className="font-serif text-2xl text-white">
                  A digitally empowered Sudan
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  We envision a Sudan where every citizen can access government services
                  digitally, where healthcare facilities are connected by modern information
                  systems, where education reaches every student regardless of geography,
                  and where businesses operate on digital platforms that connect them to
                  national and global markets.
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-gold">
                  Mission
                </div>
                <h3 className="font-serif text-2xl text-white">
                  Building digital foundations
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  To design, build, and deploy enterprise-grade digital infrastructure that
                  supports Sudan&apos;s reconstruction and institutional modernization —
                  delivering technology solutions that are scalable, secure, and suited to
                  the specific requirements of a nation rebuilding its future.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </Container>
      </section>

      {/* Why Now */}
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Why Now"
              title="A Critical Moment for Digital Infrastructure"
              subtitle="Sudan stands at an inflection point. The reconstruction period creates both the urgent need and the unique opportunity to build digital systems right from the start."
            />
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-gray-600">
              <p>
                Post-conflict reconstruction is one of the rare moments when nations can
                leapfrog incremental development and build modern digital infrastructure
                from the ground up. Countries like Rwanda, Estonia, and South Korea have
                demonstrated that strategic technology investment during reconstruction
                periods can accelerate development by decades.
              </p>
              <p>
                Sudan&apos;s reconstruction will require massive coordination across
                government, development partners, and the private sector. Digital platforms
                are not optional for this coordination — they are essential. The question is
                not whether Sudan needs digital infrastructure, but whether it will be
                designed thoughtfully by people who understand the context, or assembled
                haphazardly from mismatched solutions.
              </p>
              <p>
                SDIC exists to ensure the former. We bring the technical capability,
                contextual understanding, and strategic vision to build digital
                infrastructure that serves Sudan for generations.
              </p>
            </div>
          </ScrollAnimation>
        </Container>
      </section>

      {/* Strategic Advantage */}
      <section className="bg-off-white py-24 lg:py-32 dot-grid">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Strategic Advantage"
              title="What Sets SDIC Apart"
            />
          </ScrollAnimation>
          <div className="grid gap-8 sm:grid-cols-2">
            {advantages.map((adv, i) => (
              <ScrollAnimation key={adv.title} delay={i * 100}>
                <div className="rounded-2xl border border-gray-200 bg-white p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-teal">
                    <adv.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{adv.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {adv.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </section>

      {/* Terminal */}
      <section className="py-24 lg:py-32">
        <Container>
          <ScrollAnimation>
            <SectionHeader
              overline="Engineering Identity"
              title="Built by Engineers, for a Nation"
              subtitle="Our technology capability — visualized."
              alignment="center"
            />
          </ScrollAnimation>
          <InteractiveTerminal />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-navy py-24 lg:py-32 aurora">
        <Container className="relative z-10 text-center">
          <ScrollAnimation>
            <h2 className="mx-auto max-w-2xl font-serif text-3xl text-white sm:text-4xl">
              Join Us in Building Sudan&apos;s Digital Future
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Whether you represent a government ministry, development organization,
              technology company, or the Sudanese diaspora — we want to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/leadership" size="lg">
                Meet Our Leadership
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>
          </ScrollAnimation>
        </Container>
      </section>
    </>
  );
}
