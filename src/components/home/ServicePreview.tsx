import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';
import { CardSpotlight } from '@/components/shared/CardSpotlight';
import { services } from '@/data/services';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Landmark: LucideIcons.Landmark,
  Construction: LucideIcons.Construction,
  HeartPulse: LucideIcons.HeartPulse,
  GraduationCap: LucideIcons.GraduationCap,
  TrendingUp: LucideIcons.TrendingUp,
  Code: LucideIcons.Code,
  GitMerge: LucideIcons.GitMerge,
  BarChart3: LucideIcons.BarChart3,
  ShieldCheck: LucideIcons.ShieldCheck,
};

export function ServicePreview() {
  const featured = services.slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-off-white dot-grid">
      <Container>
        <ScrollAnimation>
          <SectionHeader
            overline="What We Do"
            title="Technology Solutions for National Development"
            subtitle="From digital government to cybersecurity, we build the platforms that enable institutional modernization and economic growth."
          />
        </ScrollAnimation>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollAnimation key={service.id} delay={index * 100}>
                <CardSpotlight className="group h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-teal/30 hover:shadow-lg hover:shadow-teal/5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {service.shortDescription}
                  </p>
                </CardSpotlight>
              </ScrollAnimation>
            );
          })}
        </div>

        <ScrollAnimation delay={600}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-teal-dark transition-colors hover:text-navy"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollAnimation>
      </Container>
    </section>
  );
}
