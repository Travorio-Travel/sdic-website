import Link from 'next/link';
import { Container } from '@/components/ui/Container';

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Services', href: '/services' },
    { label: 'Opportunity', href: '/opportunity' },
  ],
  engage: [
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Contact', href: '/contact' },
    { label: 'Insights', href: '/insights' },
  ],
};

export function Footer() {
  return (
    <footer className="gradient-mesh-dark noise-overlay border-t border-white/5">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-teal/20 bg-teal/10">
                <span className="font-mono text-sm font-bold text-teal">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wider text-white">SDIC</span>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Technology for Reconstruction and National Development. A Sudanese-led
              initiative building digital infrastructure for Sudan&apos;s future.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Engage Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
              Engage
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.engage.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-gray-400">contact@sdic.sd</li>
              <li className="text-sm text-gray-400">Khartoum, Sudan</li>
            </ul>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-16 border-t border-white/5 pt-8">
          <p className="mx-auto max-w-3xl text-center font-serif text-sm italic leading-relaxed text-gray-500">
            &ldquo;A Sudanese-led initiative focused on building the digital foundations
            for reconstruction, institutional modernization, and long-term national
            development.&rdquo;
          </p>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Sudan Digital Infrastructure Company. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs text-gray-600 hover:text-gray-400">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
