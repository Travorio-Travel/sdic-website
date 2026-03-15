import { cn } from '@/lib/utils';
import type { SectionHeaderProps } from '@/types';

export function SectionHeader({
  overline,
  title,
  subtitle,
  alignment = 'left',
  theme = 'light',
}: SectionHeaderProps) {
  const isCenter = alignment === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={cn('mb-12 lg:mb-16', isCenter && 'text-center')}>
      {overline && (
        <div
          className={cn(
            'mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.1em]',
            isCenter && 'justify-center',
            isDark ? 'text-teal' : 'text-teal-dark',
          )}
        >
          <span
            className={cn('h-px w-8', isDark ? 'bg-teal' : 'bg-teal-dark')}
            aria-hidden="true"
          />
          {overline}
        </div>
      )}
      <h2
        className={cn(
          'font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight',
          isDark ? 'text-white' : 'text-gray-800',
          isCenter && 'mx-auto max-w-3xl',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            isDark ? 'text-gray-400' : 'text-gray-500',
            isCenter && 'mx-auto max-w-2xl',
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
