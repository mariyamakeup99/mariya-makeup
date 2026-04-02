import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('inline-flex flex-col items-center group', className)}>
      <div className="flex flex-col items-center text-center">
        {/* Monogram MM */}
        <span className="font-headline text-3xl font-bold tracking-tighter text-foreground leading-none mb-1 group-hover:text-primary transition-colors">
          MM
        </span>
        
        {/* Brand Name */}
        <div className="flex flex-col items-center">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-foreground sm:text-[0.7rem] whitespace-nowrap">
            Makeup by Mariya
          </span>
          <span className="h-px w-8 bg-accent/40 mt-1 transition-all group-hover:w-full group-hover:bg-primary" />
        </div>
      </div>
    </Link>
  );
}
