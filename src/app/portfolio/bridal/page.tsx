'use client';

import Image from 'next/image';
import Link from 'next/link';
import { bridalPortfolio } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Maximize2, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export default function BridalPortfolioPage() {
  return (
    <div className="relative min-h-screen bg-background flex flex-col">

      {/* 🔥 HERO HEADER */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        {/* ✅ Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/port2.JPG"
            alt="Contact Background"
            fill
            priority
            className="object-cover scale-105 brightness-[0.85] contrast-[1.1]"
          />

          {/* ✅ Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90" />

          {/* ✅ Subtle Luxury Light Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
          </div>

          {/* ✅ Bottom Fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* 🌟 Soft Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-pink-300/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start gap-6 text-left">
            <Button asChild variant="link" className="p-0 h-auto text-white/70 hover:text-white group text-sm font-bold uppercase tracking-widest drop-shadow-sm">
              <Link href="/#bridal-portfolio" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Overview
              </Link>
            </Button>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg">
              Bridal <span className="text-primary italic drop-shadow-md">Gallery</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl font-light leading-relaxed mt-2">
              A comprehensive look at our bridal artistry, showcasing elegance and tradition for your most special day.
            </p>
          </div>
        </div>
      </section>

      {/* 🌟 MAIN CONTENT */}
      <section className="relative z-10 pb-24 sm:pb-32 flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {bridalPortfolio.map((item, index) => {
              const isLarge = index % 4 === 0 || index % 4 === 3;
              const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

              return (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div className={cn(
                      "group relative overflow-hidden rounded-[2.5rem] bg-card transition-all duration-700 hover:shadow-2xl cursor-pointer border border-border/50",
                      colSpan,
                      "aspect-[4/5] md:aspect-auto md:h-[600px]"
                    )}>
                      <div className="relative h-full w-full">
                        <Image
                          src={item.image.imageUrl}
                          alt={item.image.description}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                          data-ai-hint={item.image.imageHint}
                        />
                      </div>
                      <div className="absolute inset-x-4 bottom-4 p-8 rounded-3xl bg-black/30 backdrop-blur-lg border border-white/10 opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        <p className="text-white font-headline text-2xl font-medium mb-2">
                          {item.image.description}
                        </p>
                        <div className="flex items-center gap-2 text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                          <Maximize2 className="h-4 w-4" />
                          Full Screen
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-none w-screen h-screen border-none bg-black/95 p-0 flex items-center justify-center outline-none">
                    <VisuallyHidden>
                      <DialogTitle>Bridal Portfolio Viewer</DialogTitle>
                      <DialogDescription>Full-screen swipeable view of bridal work.</DialogDescription>
                    </VisuallyHidden>
                    <DialogClose className="fixed top-6 right-6 z-[60] text-white/70 hover:text-white transition-colors bg-white/10 p-3 rounded-full backdrop-blur-md">
                      <X className="h-6 w-6" />
                    </DialogClose>
                    <div className="w-full h-full">
                      <Carousel
                        opts={{ loop: true, startIndex: index }}
                        className="w-full h-full"
                      >
                        <CarouselContent className="h-screen w-full ml-0">
                          {bridalPortfolio.map((galItem) => (
                            <CarouselItem key={galItem.id} className="h-full w-full flex items-center justify-center p-0 basis-full">
                              <div className="relative h-full w-full flex flex-col items-center justify-center p-4 md:p-12">
                                <div className="relative w-full h-[75vh] md:h-[85vh] max-w-5xl">
                                  <Image
                                    src={galItem.image.imageUrl}
                                    alt={galItem.image.description}
                                    fill
                                    className="object-contain"
                                    priority
                                  />
                                </div>
                                <div className="mt-10 text-center px-8 max-w-3xl bg-black/50 backdrop-blur-lg p-6 rounded-3xl border border-white/10">
                                  <p className="text-white font-headline text-2xl md:text-4xl tracking-wide">
                                    {galItem.image.description}
                                  </p>
                                </div>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-8 h-16 w-16 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all hidden lg:flex" />
                        <CarouselNext className="right-8 h-16 w-16 border-white/20 bg-white/10 text-white hover:bg-white/20 hover:scale-110 transition-all hidden lg:flex" />
                      </Carousel>
                    </div>
                  </DialogContent>
                </Dialog>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
