'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  Search,
  Home,
  Info,
  Users,
  Briefcase,
  BarChart3,
  Layers,
  Handshake,
  Mail,
  Lightbulb,
  Command,
  ArrowRight,
} from 'lucide-react';

interface CommandItem {
  id: string;
  label: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  keywords: string[];
}

const commands: CommandItem[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'SDIC homepage',
    href: '/',
    icon: Home,
    keywords: ['home', 'main', 'start'],
  },
  {
    id: 'about',
    label: 'About SDIC',
    description: 'Our story, vision, and mission',
    href: '/about',
    icon: Info,
    keywords: ['about', 'story', 'vision', 'mission', 'who'],
  },
  {
    id: 'leadership',
    label: 'Leadership',
    description: 'Meet Rami Taha and Mazin Fagiri',
    href: '/leadership',
    icon: Users,
    keywords: ['leadership', 'team', 'rami', 'mazin', 'founder', 'ceo', 'cto'],
  },
  {
    id: 'services',
    label: 'Services',
    description: 'Digital government, healthcare, education, and more',
    href: '/services',
    icon: Briefcase,
    keywords: ['services', 'solutions', 'government', 'healthcare', 'education', 'cybersecurity'],
  },
  {
    id: 'opportunity',
    label: 'Sudan Opportunity',
    description: 'Market data and digital transformation potential',
    href: '/opportunity',
    icon: BarChart3,
    keywords: ['opportunity', 'market', 'data', 'stats', 'sudan', 'numbers'],
  },
  {
    id: 'capabilities',
    label: 'Capabilities',
    description: 'Enterprise experience and platform concepts',
    href: '/capabilities',
    icon: Layers,
    keywords: ['capabilities', 'experience', 'projects', 'showcase', 'platforms'],
  },
  {
    id: 'partnerships',
    label: 'Partnerships',
    description: 'Collaboration and partnership opportunities',
    href: '/partnerships',
    icon: Handshake,
    keywords: ['partnerships', 'partner', 'collaborate', 'invest', 'donor'],
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Get in touch with SDIC',
    href: '/contact',
    icon: Mail,
    keywords: ['contact', 'email', 'reach', 'inquiry', 'form'],
  },
  {
    id: 'briefing',
    label: 'Request Strategic Briefing',
    description: 'Request a comprehensive briefing on SDIC',
    href: '/contact?type=briefing',
    icon: Mail,
    keywords: ['briefing', 'strategic', 'request', 'meeting'],
  },
  {
    id: 'insights',
    label: 'Insights',
    description: 'Perspectives on digital transformation',
    href: '/insights',
    icon: Lightbulb,
    keywords: ['insights', 'blog', 'articles', 'perspectives'],
  },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const filtered = query
    ? commands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(query.toLowerCase()) ||
          cmd.description.toLowerCase().includes(query.toLowerCase()) ||
          cmd.keywords.some((k) => k.includes(query.toLowerCase())),
      )
    : commands;

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      close();
      router.push(href);
    },
    [close, router],
  );

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          close();
        } else {
          open();
        }
      }

      if (e.key === 'Escape' && isOpen) {
        close();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, open, close]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Arrow key navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleNav = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        navigate(filtered[selectedIndex].href);
      }
    };

    window.addEventListener('keydown', handleNav);
    return () => window.removeEventListener('keydown', handleNav);
  }, [isOpen, filtered, selectedIndex, navigate]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={close}
        aria-hidden="true"
      />

      {/* Palette */}
      <div className="fixed inset-x-0 top-[15vh] z-[61] mx-auto w-full max-w-xl px-4 animate-fade-in-up">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0D1117] shadow-2xl shadow-black/50">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
            <Search className="h-5 w-5 text-gray-500" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search pages, services, or team..."
              className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
              autoComplete="off"
              spellCheck={false}
              aria-label="Search"
            />
            <kbd className="hidden rounded bg-white/10 px-2 py-0.5 text-[10px] text-gray-500 sm:inline-block">
              ESC
            </kbd>
          </div>

          {/* Results */}
          <div className="max-h-[50vh] overflow-y-auto p-2">
            {filtered.length === 0 ? (
              <div className="px-4 py-8 text-center text-sm text-gray-500">
                No results found for &ldquo;{query}&rdquo;
              </div>
            ) : (
              filtered.map((cmd, i) => (
                <button
                  key={cmd.id}
                  className={cn(
                    'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors',
                    i === selectedIndex
                      ? 'bg-teal/10 text-white'
                      : 'text-gray-400 hover:bg-white/5 hover:text-gray-200',
                  )}
                  onClick={() => navigate(cmd.href)}
                  onMouseEnter={() => setSelectedIndex(i)}
                >
                  <cmd.icon
                    className={cn(
                      'h-4 w-4 flex-shrink-0',
                      i === selectedIndex ? 'text-teal' : 'text-gray-600',
                    )}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium">{cmd.label}</div>
                    <div className="truncate text-xs text-gray-500">
                      {cmd.description}
                    </div>
                  </div>
                  {i === selectedIndex && (
                    <ArrowRight className="h-3.5 w-3.5 text-teal" />
                  )}
                </button>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-2">
            <div className="flex items-center gap-3 text-[10px] text-gray-600">
              <span>
                <kbd className="rounded bg-white/10 px-1.5 py-0.5">↑↓</kbd> Navigate
              </span>
              <span>
                <kbd className="rounded bg-white/10 px-1.5 py-0.5">↵</kbd> Open
              </span>
              <span>
                <kbd className="rounded bg-white/10 px-1.5 py-0.5">Esc</kbd> Close
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-gray-600">
              <Command className="h-3 w-3" />
              <span>K</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Keyboard shortcut hint for the navbar
export function CommandPaletteHint() {
  return (
    <button
      onClick={() => {
        window.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'k', metaKey: true }),
        );
      }}
      className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-500 transition-colors hover:bg-white/10 hover:text-gray-300 lg:flex"
      aria-label="Open command palette"
    >
      <Search className="h-3.5 w-3.5" />
      <span>Search</span>
      <kbd className="ml-2 rounded bg-white/10 px-1.5 py-0.5 text-[10px]">⌘K</kbd>
    </button>
  );
}
