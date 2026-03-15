'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    // Disable if prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Track hover state on interactive elements
    const handleOverInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer',
      );
      setIsHovering(!!interactive);
    };

    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }

      // Ring follows with delay (lerp)
      ringPosRef.current.x += (posRef.current.x - ringPosRef.current.x) * 0.15;
      ringPosRef.current.y += (posRef.current.y - ringPosRef.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPosRef.current.x}px, ${ringPosRef.current.y}px)`;
      }

      animRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleOverInteractive);
    animRef.current = requestAnimationFrame(animate);

    // Add cursor:none to document
    document.documentElement.style.cursor = 'none';
    const style = document.createElement('style');
    style.id = 'custom-cursor-style';
    style.textContent = '*, *::before, *::after { cursor: none !important; }';
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleOverInteractive);
      cancelAnimationFrame(animRef.current);
      document.documentElement.style.cursor = '';
      const el = document.getElementById('custom-cursor-style');
      if (el) el.remove();
    };
  }, [isVisible]);

  // Don't render on touch devices (SSR safe)
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <div
          className="rounded-full bg-teal"
          style={{
            width: isHovering ? '8px' : '6px',
            height: isHovering ? '8px' : '6px',
            marginLeft: isHovering ? '-4px' : '-3px',
            marginTop: isHovering ? '-4px' : '-3px',
            transition: 'width 0.2s, height 0.2s, margin 0.2s',
          }}
        />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[99]"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      >
        <div
          className="rounded-full border border-teal/40"
          style={{
            width: isHovering ? '48px' : '32px',
            height: isHovering ? '48px' : '32px',
            marginLeft: isHovering ? '-24px' : '-16px',
            marginTop: isHovering ? '-24px' : '-16px',
            transition: 'width 0.3s ease-out, height 0.3s ease-out, margin 0.3s ease-out, border-color 0.3s',
            borderColor: isHovering ? 'rgba(8, 145, 178, 0.6)' : 'rgba(8, 145, 178, 0.3)',
          }}
        />
      </div>
    </>
  );
}
