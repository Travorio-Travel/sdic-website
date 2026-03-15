import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHero } from '@/components/shared/PageHero';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { insights } from '@/data/insights';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);
  if (!insight) return {};

  return {
    title: insight.title,
    description: insight.excerpt,
  };
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight || !insight.content) {
    notFound();
  }

  // Split content into paragraphs, handling markdown-style headers
  const paragraphs = insight.content.split('\n\n');

  return (
    <>
      <PageHero
        overline={insight.category}
        title={insight.title}
        subtitle={`${insight.author} \u00B7 ${insight.date} \u00B7 ${insight.readTime}`}
      />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Back link */}
            <Link
              href="/insights"
              className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-teal-dark"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>

            {/* Article content */}
            <article className="prose-sdic space-y-6">
              {paragraphs.map((paragraph, i) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                // H2 headers
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2
                      key={i}
                      className="mt-12 mb-4 font-serif text-2xl text-gray-800"
                    >
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }

                // Bold-start paragraphs (like **Key Point.** text)
                if (trimmed.startsWith('**')) {
                  const parts = trimmed.split('**');
                  // parts: ['', 'bold text', ' rest of paragraph', ...]
                  return (
                    <p key={i} className="text-base leading-relaxed text-gray-600">
                      <strong className="text-gray-800">{parts[1]}</strong>
                      {parts.slice(2).join('')}
                    </p>
                  );
                }

                // List items (lines starting with -)
                if (trimmed.startsWith('- ')) {
                  const items = trimmed.split('\n').filter((l) => l.startsWith('- '));
                  return (
                    <ul key={i} className="space-y-2 pl-1">
                      {items.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-3 text-base leading-relaxed text-gray-600"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal" />
                          {item.replace(/^- \*\*(.*?)\*\*/, '').trim()
                            ? (
                              <>
                                {item.match(/^- \*\*(.*?)\*\*/) && (
                                  <strong className="text-gray-800">
                                    {item.match(/^- \*\*(.*?)\*\*/)?.[1]}
                                  </strong>
                                )}
                                {item.replace(/^- (\*\*.*?\*\*\s*)?/, '')}
                              </>
                            )
                            : item.replace('- ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Regular paragraph
                return (
                  <p key={i} className="text-base leading-relaxed text-gray-600">
                    {trimmed}
                  </p>
                );
              })}
            </article>

            {/* Footer */}
            <div className="mt-16 border-t border-gray-200 pt-8">
              <Badge variant="navy" className="mb-4">
                {insight.category}
              </Badge>
              <p className="text-xs text-gray-400">
                Published {insight.date} by {insight.author}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/insights" variant="ghost" size="sm">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  All Insights
                </Button>
                <Button href="/contact?type=briefing" size="sm">
                  Request Strategic Briefing
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
