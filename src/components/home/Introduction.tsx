import { Container } from '@/components/ui/Container';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

export function Introduction() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <ScrollAnimation>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-serif text-xl leading-relaxed text-gray-700 sm:text-2xl lg:text-[1.65rem] lg:leading-relaxed">
              SDIC combines deep roots in Sudanese society with decades of
              technology leadership across Fortune 500 enterprises and global
              telecommunications. We bring enterprise-grade engineering discipline
              to the unique challenges of reconstruction and national development.
            </p>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
