'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ScrollAnimation } from '@/components/shared/ScrollAnimation';

interface TerminalLine {
  text: string;
  type: 'prompt' | 'output' | 'success' | 'muted' | 'progress' | 'heading';
}

const bootSequence: TerminalLine[] = [
  { text: '$ sdic --capabilities', type: 'prompt' },
  { text: '', type: 'output' },
  { text: ' ╔══════════════════════════════════════════════════════════════╗', type: 'heading' },
  { text: ' ║   SUDAN DIGITAL INFRASTRUCTURE COMPANY                     ║', type: 'heading' },
  { text: ' ║   Technology Stack & Capabilities Assessment               ║', type: 'heading' },
  { text: ' ╚══════════════════════════════════════════════════════════════╝', type: 'heading' },
  { text: '', type: 'output' },
  { text: ' Initializing capability matrix...', type: 'muted' },
  { text: '', type: 'output' },
  { text: ' [████████████████████████] 100%  Cloud Architecture', type: 'progress' },
  { text: ' [████████████████████████] 100%  Enterprise APIs', type: 'progress' },
  { text: ' [████████████████████████] 100%  Distributed Systems', type: 'progress' },
  { text: ' [████████████████████████] 100%  Financial Systems', type: 'progress' },
  { text: ' [████████████████████████] 100%  Cybersecurity', type: 'progress' },
  { text: ' [████████████████████████] 100%  Telecom Infrastructure', type: 'progress' },
  { text: ' [████████████████████████] 100%  Mobile Platforms', type: 'progress' },
  { text: ' [████████████████████████] 100%  Data Engineering', type: 'progress' },
  { text: '', type: 'output' },
  { text: ' > 40+ combined years of enterprise experience', type: 'output' },
  { text: ' > Fortune 500 platform delivery', type: 'output' },
  { text: ' > National-scale systems architecture', type: 'output' },
  { text: ' > Reconstruction-ready deployment models', type: 'output' },
  { text: '', type: 'output' },
  { text: ' Status: READY FOR DEPLOYMENT ✓', type: 'success' },
];

const commandResponses: Record<string, TerminalLine[]> = {
  help: [
    { text: '', type: 'output' },
    { text: ' Available commands:', type: 'output' },
    { text: '   help        — Show this help message', type: 'muted' },
    { text: '   about       — About SDIC', type: 'muted' },
    { text: '   team        — Leadership team', type: 'muted' },
    { text: '   services    — Our services', type: 'muted' },
    { text: '   vision      — Our vision', type: 'muted' },
    { text: '   contact     — How to reach us', type: 'muted' },
    { text: '   clear       — Clear terminal', type: 'muted' },
    { text: '', type: 'output' },
  ],
  about: [
    { text: '', type: 'output' },
    { text: ' Sudan Digital Infrastructure Company (SDIC)', type: 'success' },
    { text: ' Technology for Reconstruction and National Development', type: 'muted' },
    { text: '', type: 'output' },
    { text: ' A Sudanese-led technology company developing digital', type: 'output' },
    { text: ' infrastructure, enterprise software, and national-scale', type: 'output' },
    { text: ' platforms to support reconstruction and long-term development.', type: 'output' },
    { text: '', type: 'output' },
  ],
  team: [
    { text: '', type: 'output' },
    { text: ' ┌─ FOUNDING TEAM ──────────────────────────────────────────┐', type: 'heading' },
    { text: ' │                                                          │', type: 'heading' },
    { text: ' │  Rami Taha         Co-Founder & CEO                     │', type: 'output' },
    { text: ' │  Principal Software Engineer | Fortune 500 Experience    │', type: 'muted' },
    { text: ' │                                                          │', type: 'heading' },
    { text: ' │  Mazin Fagiri      Co-Founder & CTO                     │', type: 'output' },
    { text: ' │  Telecom & Infrastructure Expert | 20+ Years            │', type: 'muted' },
    { text: ' │                                                          │', type: 'heading' },
    { text: ' └──────────────────────────────────────────────────────────┘', type: 'heading' },
    { text: '', type: 'output' },
  ],
  services: [
    { text: '', type: 'output' },
    { text: ' SDIC Service Areas:', type: 'success' },
    { text: '  01. Digital Government Platforms', type: 'output' },
    { text: '  02. Infrastructure & Reconstruction Management', type: 'output' },
    { text: '  03. Healthcare Technology Systems', type: 'output' },
    { text: '  04. Education Technology Platforms', type: 'output' },
    { text: '  05. Business & Economic Development', type: 'output' },
    { text: '  06. Enterprise Software Engineering', type: 'output' },
    { text: '  07. Systems Integration & Cloud', type: 'output' },
    { text: '  08. Data Platforms & Analytics', type: 'output' },
    { text: '  09. Cybersecurity & Digital Trust', type: 'output' },
    { text: '', type: 'output' },
  ],
  vision: [
    { text: '', type: 'output' },
    { text: ' "A digitally empowered Sudan where every citizen can access', type: 'output' },
    { text: '  government services, healthcare facilities are connected,', type: 'output' },
    { text: '  education reaches every student, and businesses operate on', type: 'output' },
    { text: '  digital platforms connecting them to the world."', type: 'output' },
    { text: '', type: 'output' },
    { text: ' — SDIC Founding Vision', type: 'muted' },
    { text: '', type: 'output' },
  ],
  contact: [
    { text: '', type: 'output' },
    { text: ' 📧  contact@sdic.sd', type: 'success' },
    { text: ' 📍  Khartoum, Sudan', type: 'output' },
    { text: ' 🌐  Visit /contact for partnership inquiries', type: 'output' },
    { text: '', type: 'output' },
  ],
  'sudo build sudan': [
    { text: '', type: 'output' },
    { text: ' Permission granted. 🇸🇩', type: 'success' },
    { text: ' Building the future...', type: 'output' },
    { text: ' [████████████████████████] 100%  Complete', type: 'progress' },
    { text: '', type: 'output' },
    { text: ' The future is built by those who show up.', type: 'muted' },
    { text: ' Join us → contact@sdic.sd', type: 'success' },
    { text: '', type: 'output' },
  ],
};

export function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [bootComplete, setBootComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  // Trigger boot when terminal scrolls into view
  useEffect(() => {
    if (hasStarted) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Run boot sequence once triggered
  useEffect(() => {
    if (!hasStarted || bootComplete) return;
    setIsTyping(true);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setLines(bootSequence);
      setIsTyping(false);
      setBootComplete(true);
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      if (i < bootSequence.length) {
        const line = bootSequence[i];
        i++;
        setLines((prev) => [...prev, line]);
        scrollToBottom();
      } else {
        clearInterval(timer);
        setIsTyping(false);
        setBootComplete(true);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [hasStarted, bootComplete, scrollToBottom]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const promptLine: TerminalLine = { text: `$ ${cmd}`, type: 'prompt' };

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    const response = commandResponses[trimmed] || [
      { text: '', type: 'output' as const },
      { text: ` Command not found: ${cmd}`, type: 'muted' as const },
      { text: ' Type "help" for available commands.', type: 'muted' as const },
      { text: '', type: 'output' as const },
    ];

    setLines((prev) => [...prev, promptLine, ...response]);
    setTimeout(scrollToBottom, 10);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    handleCommand(input);
    setInput('');
  };

  const lineColors: Record<string, string> = {
    prompt: 'text-teal',
    output: 'text-[#E6EDF3]',
    success: 'text-[#4ADE80]',
    muted: 'text-gray-500',
    progress: 'text-teal',
    heading: 'text-teal/70',
  };

  return (
    <ScrollAnimation>
      <div ref={containerRef} className="terminal mx-auto max-w-3xl crt-lines relative">
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dot bg-[#FF5F57]" />
          <div className="terminal-dot bg-[#FFBD2E]" />
          <div className="terminal-dot bg-[#28C840]" />
          <span className="ml-4 text-xs text-gray-500">sdic-terminal — bash</span>
        </div>

        {/* Terminal Body */}
        <div ref={bodyRef} className="terminal-body max-h-[500px] overflow-y-auto">
          {lines.map((line, i) => (
            <div key={i} className={lineColors[line.type] || 'text-gray-300'}>
              {line.text || '\u00A0'}
            </div>
          ))}

          {/* Interactive Input */}
          {bootComplete && (
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="terminal-prompt mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-[#E6EDF3] outline-none caret-teal"
                placeholder="Type a command..."
                autoComplete="off"
                spellCheck={false}
                aria-label="Terminal command input"
              />
              {!input && <span className="terminal-cursor" />}
            </form>
          )}

          {isTyping && <span className="terminal-cursor" />}
        </div>
      </div>
    </ScrollAnimation>
  );
}
