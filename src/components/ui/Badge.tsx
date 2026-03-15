import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'teal' | 'gold' | 'green' | 'navy' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

const variants = {
  teal: 'bg-teal/10 text-teal border-teal/20',
  gold: 'bg-gold/10 text-gold border-gold/20',
  green: 'bg-green/10 text-green border-green/20',
  navy: 'bg-navy-light/50 text-gray-300 border-navy-mid/50',
  outline: 'bg-transparent text-gray-500 border-gray-300',
};

export function Badge({ children, variant = 'teal', size = 'sm', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
