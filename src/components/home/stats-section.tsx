'use client';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { stats } from '@/lib/data';
import Image from 'next/image';

const easeOutQuad = (t: number) => t * (2 - t);

const AnimatedCounter = ({ end, duration = 2500, symbol = '' }: { end: number, duration?: number, symbol?: string }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        const easedPercentage = easeOutQuad(percentage);
        const currentCount = Math.floor(easedPercentage * end);
        setCount(currentCount);

        if (progress < duration) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      frameRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter drop-shadow-lg">
      {count}{symbol}
    </span>
  );
};

export function StatsSection() {
  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden bg-black">
          {/* Background Image - Matching the abstract colorful flow */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/statbg.webp"
              alt="Abstract flowing colors background"
              fill
              className="object-cover opacity-80"
              data-ai-hint="abstract flow"
            />
            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          <div className="grid grid-cols-1 gap-16 md:gap-8 lg:gap-16 text-center md:grid-cols-3 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="mb-2">
                  <AnimatedCounter end={stat.value} symbol={stat.symbol} />
                </div>
                
                {/* Modern Decorative Divider */}
                <div className="h-1.5 w-12 bg-white/30 mb-6 rounded-full transition-all duration-700 ease-out group-hover:w-24 group-hover:bg-primary shadow-sm" />
                
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-md">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
