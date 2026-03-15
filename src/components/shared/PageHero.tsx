import { Container } from '@/components/ui/Container';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

interface PageHeroProps {
  overline: string;
  title: string;
  subtitle: string;
}

export function PageHero({ overline, title, subtitle }: PageHeroProps) {
  return (
    <section className="gradient-mesh-dark noise-overlay relative pb-20 pt-32 lg:pb-28 lg:pt-40">
      <Container className="relative z-10">
        <ScrollAnimation>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-teal">
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
              {overline}
              <span className="h-px w-8 bg-teal" aria-hidden="true" />
            </div>
            <h1 className="font-serif text-4xl font-normal text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              {subtitle}
            </p>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
