'use client';

import Image from 'next/image';
import Link from 'next/link';
import { commercialPortfolio } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera, X } from 'lucide-react';
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

export function CommercialPortfolioSection() {
  return (
    <section id="commercial-portfolio" className="py-24 sm:py-32 bg-secondary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start gap-12 text-left mb-20">
          <div className="space-y-6 max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.25em]">
              Editorial & Media
            </span>
            <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
              Commercial <br />
              <span className="text-primary italic">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-xl text-balance max-w-2xl font-light">
              High-definition precision for the spotlight. We deliver camera-ready looks for advertisements, fashion shoots, and media productions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commercialPortfolio.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div className="group relative overflow-hidden rounded-[2rem] bg-card transition-all duration-700 cursor-pointer border border-border/50 aspect-[4/5]">
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image.imageUrl}
                      alt={item.image.description}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      data-ai-hint={item.image.imageHint}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-8">
                    <p className="text-white font-headline text-lg font-medium translate-y-4 transition-transform duration-500 group-hover:translate-y-0 flex items-center gap-2">
                      <Camera className="h-4 w-4" />
                      {item.image.description}
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-none w-screen h-screen border-none bg-black/95 p-0 flex items-center justify-center outline-none">
                <VisuallyHidden>
                  <DialogTitle>Commercial Portfolio Detail View</DialogTitle>
                  <DialogDescription>View high-fashion editorial and commercial makeup work.</DialogDescription>
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
                      {commercialPortfolio.map((galItem) => (
                        <CarouselItem key={galItem.id} className="h-full w-full flex items-center justify-center p-0 basis-full">
                          <div className="relative h-full w-full flex flex-col items-center justify-center p-4 md:p-12">
                            <div className="relative w-full h-[70vh] md:h-[80vh] max-w-5xl">
                              <Image
                                src={galItem.image.imageUrl}
                                alt={galItem.image.description}
                                fill
                                className="object-contain"
                                priority
                              />
                            </div>
                            <div className="mt-8 text-center px-6 max-w-2xl bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                              <p className="text-white font-headline text-xl md:text-3xl tracking-wide">
                                {galItem.image.description}
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-8 h-14 w-14 border-white/20 bg-white/5 text-white hover:bg-white/20 hover:scale-110 transition-all hidden lg:flex" />
                    <CarouselNext className="right-8 h-14 w-14 border-white/20 bg-white/5 text-white hover:bg-white/20 hover:scale-110 transition-all hidden lg:flex" />
                  </Carousel>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 px-12 h-16 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
            <Link href="/portfolio/commercial_makeup_kerala" className="flex items-center gap-3">
              Explore Commercial Portfolio
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
