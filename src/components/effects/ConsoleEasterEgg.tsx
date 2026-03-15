'use client';

import { useEffect } from 'react';

export function ConsoleEasterEgg() {
  useEffect(() => {
    const styles = [
      'color: #0891B2; font-size: 20px; font-weight: bold; font-family: monospace;',
      'color: #64748B; font-size: 12px; font-family: monospace;',
      'color: #4ADE80; font-size: 12px; font-family: monospace;',
    ];

    console.log(
      `%c\n  SDIC\n%c  Sudan Digital Infrastructure Company\n  Technology for Reconstruction and National Development\n\n%c  We build systems that matter.\n  If you're reading this, we need engineers like you.\n  → contact@sdic.sd\n`,
      styles[0],
      styles[1],
      styles[2],
    );
  }, []);

  return null;
}
