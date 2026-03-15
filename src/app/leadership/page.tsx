import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/ui/Container';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { leaders } from '@/data/leadership';

export const metadata: Metadata = {
  title: 'Leadership — Sudanese Technology Leaders',
  description:
    'Meet the SDIC founding team: enterprise software architects and telecommunications infrastructure experts building Sudan\'s digital future.',
};

const expertiseCategoryColors: Record<string, 'teal' | 'gold' | 'green'> = {
  technical: 'teal',
  domain: 'gold',
  leadership: 'green',
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        overline="Leadership"
        title="Leadership Built for This Moment"
        subtitle="Our founding team combines 40+ years of enterprise technology and telecommunications infrastructure experience with deep personal commitment to Sudan's future."
      />

      {/* Leader Profiles */}
      {leaders.map((leader, index) => (
        <section
          key={leader.id}
          id={leader.id}
          className={index % 2 === 0 ? 'py-24 lg:py-32' : 'py-24 lg:py-32 bg-off-white'}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Photo / Visual */}
              <ScrollAnimation
                direction={index % 2 === 0 ? 'left' : 'right'}
                className="lg:col-span-2"
              >
                <div
                  className="flex aspect-[3/4] max-w-sm items-center justify-center rounded-2xl text-6xl font-bold text-white shadow-2xl lg:max-w-none"
                  style={{
                    background: `linear-gradient(135deg, ${leader.gradientFrom}, ${leader.gradientTo})`,
                  }}
                >
                  {leader.initials}
                </div>
              </ScrollAnimation>

              {/* Content */}
              <ScrollAnimation
                delay={200}
                className="space-y-8 lg:col-span-3"
              >
                <div>
                  <h2 className="font-serif text-3xl text-gray-800 sm:text-4xl">
                    {leader.name}
                  </h2>
                  <p className="mt-2 text-lg font-medium text-teal-dark">
                    {leader.title}
                  </p>
                </div>

                {/* Bio */}
                <div className="space-y-4 text-base leading-relaxed text-gray-600">
                  {leader.fullBio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Expertise Tags */}
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
                    Areas of Expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((exp) => (
                      <Badge
                        key={exp.label}
                        variant={expertiseCategoryColors[exp.category]}
                        size="md"
                      >
                        {exp.label}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Career Timeline */}
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
                    Selected Experience
                  </h3>
                  <div className="space-y-4">
                    {leader.career.map((milestone, i) => (
                      <div
                        key={i}
                        className="relative flex gap-4 pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-teal"
                      >
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2">
                            <span className="font-semibold text-gray-800">
                              {milestone.company}
                            </span>
                            {milestone.period && (
                              <span className="text-xs text-gray-400">
                                {milestone.period}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{milestone.role}</p>
                          {milestone.highlight && (
                            <p className="mt-1 text-xs text-gray-400">
                              {milestone.highlight}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why Statement */}
                <blockquote className="border-l-2 border-teal pl-6">
                  <p className="font-serif text-base italic leading-relaxed text-gray-600">
                    {leader.whyStatement}
                  </p>
                </blockquote>
              </ScrollAnimation>
            </div>
          </Container>
        </section>
      ))}

      {/* Combined Value */}
      <section className="gradient-mesh-dark noise-overlay relative py-24 lg:py-32">
        <Container className="relative z-10 text-center">
          <ScrollAnimation>
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-teal">
                <span className="h-px w-8 bg-teal" />
                Combined Leadership
                <span className="h-px w-8 bg-teal" />
              </div>
              <h2 className="font-serif text-3xl text-white sm:text-4xl">
                Together, the Right Team for This Mission
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-400">
                Rami&apos;s enterprise software architecture and startup leadership
                combined with Mazin&apos;s telecommunications infrastructure and
                cybersecurity expertise creates a founding team uniquely equipped to
                build national-scale digital infrastructure. One designs and builds
                the platforms; the other ensures they run reliably and securely at
                scale.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/capabilities" size="lg">
                  View Our Capabilities
                </Button>
                <Button href="/contact?type=briefing" variant="outline" size="lg">
                  Request Strategic Briefing
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </Container>
      </section>
    </>
  );
}
