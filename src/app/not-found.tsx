import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center gradient-mesh-dark noise-overlay">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl">
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot bg-[#FF5F57]" />
              <div className="terminal-dot bg-[#FFBD2E]" />
              <div className="terminal-dot bg-[#28C840]" />
              <span className="ml-4 text-xs text-gray-500">sdic-terminal — error</span>
            </div>
            <div className="terminal-body">
              <div className="text-teal">$ cd /requested-page</div>
              <div className="mt-2 text-[#FF5F57]">
                Error 404: Page not found in current infrastructure.
              </div>
              <div className="mt-4 text-gray-500">&gt; Deploying search protocols...</div>
              <div className="text-gray-500">&gt; Scanning available systems...</div>
              <div className="mt-2 text-[#4ADE80]">&gt; Found alternative routes:</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button href="/" size="sm" variant="primary">
                  Navigate Home
                </Button>
                <Button href="/services" size="sm" variant="outline">
                  View Services
                </Button>
                <Button href="/contact" size="sm" variant="outline">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
