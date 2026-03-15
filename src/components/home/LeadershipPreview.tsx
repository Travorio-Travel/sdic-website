import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { CardSpotlight } from '@/components/shared/CardSpotlight';
import { leaders } from '@/data/leadership';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function LeadershipPreview() {
  return (
    <section className="gradient-mesh-dark noise-overlay relative py-24 lg:py-32">
      <Container className="relative z-10">
        <ScrollAnimation>
          <SectionHeader
            overline="Leadership"
            title="From Global Platforms to National Impact"
            subtitle="Combined 40+ years of experience across Fortune 500 enterprises, telecommunications infrastructure, and technology leadership."
            alignment="center"
            theme="dark"
          />
        </ScrollAnimation>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {leaders.map((leader, index) => (
            <ScrollAnimation
              key={leader.id}
              delay={index * 200}
              direction={index === 0 ? 'left' : 'right'}
            >
              <CardSpotlight className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                {/* Photo Placeholder */}
                <div
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${leader.gradientFrom}, ${leader.gradientTo})`,
                  }}
                >
                  {leader.initials}
                </div>

                <h3 className="text-xl font-semibold text-white">{leader.name}</h3>
                <p className="mt-1 text-sm text-teal">{leader.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">
                  {leader.shortBio}
                </p>

                <div className="mt-6">
                  <Button href={`/leadership#${leader.id}`} variant="ghost" size="sm">
                    View Full Profile
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </CardSpotlight>
            </ScrollAnimation>
          ))}
        </div>
      </Container>
    </section>
  );
}
