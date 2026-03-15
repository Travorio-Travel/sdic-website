'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navigation } from '@/data/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-navy/90 shadow-lg shadow-black/20 backdrop-blur-xl'
            : 'bg-transparent',
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-10 lg:px-16">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 border border-teal/20 transition-colors group-hover:bg-teal/20">
              <span className="font-mono text-sm font-bold text-teal">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wider text-white">SDIC</span>
              <span className="hidden text-[10px] tracking-widest text-gray-400 uppercase sm:block">
                Sudan Digital Infrastructure
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.links.map((link) => (
              <div key={link.href} className="relative">
                {link.children ? (
                  <button
                    className={cn(
                      'flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      pathname.startsWith(link.href)
                        ? 'text-teal'
                        : 'text-gray-300 hover:text-white hover:bg-white/5',
                    )}
                    onClick={() =>
                      setDropdownOpen(dropdownOpen === link.href ? null : link.href)
                    }
                    onMouseEnter={() => setDropdownOpen(link.href)}
                    aria-expanded={dropdownOpen === link.href}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-transform',
                        dropdownOpen === link.href && 'rotate-180',
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      pathname === link.href
                        ? 'text-teal'
                        : 'text-gray-300 hover:text-white hover:bg-white/5',
                    )}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && dropdownOpen === link.href && (
                  <div
                    className="absolute left-0 top-full mt-1 min-w-[200px] rounded-xl border border-white/10 bg-navy-light/95 p-2 shadow-xl backdrop-blur-xl"
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          'block rounded-lg px-4 py-2.5 text-sm transition-colors',
                          pathname === child.href
                            ? 'bg-teal/10 text-teal'
                            : 'text-gray-300 hover:bg-white/5 hover:text-white',
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Button href={navigation.cta.href} size="sm">
                {navigation.cta.label}
              </Button>
            </div>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-300 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu — Full Screen Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-navy/98 backdrop-blur-2xl transition-all duration-300 lg:hidden',
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none',
        )}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-6 p-8">
          {navigation.links.map((link) => (
            <div key={link.href} className="text-center">
              <Link
                href={link.href}
                className={cn(
                  'font-serif text-2xl transition-colors',
                  pathname === link.href
                    ? 'text-teal'
                    : 'text-gray-300 hover:text-white',
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-2 flex flex-col gap-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="text-sm text-gray-400 hover:text-teal"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mt-4">
            <Button href={navigation.cta.href} size="lg">
              {navigation.cta.label}
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
