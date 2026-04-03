'use client';

import Image from 'next/image';
import Link from 'next/link';
import { bridalPortfolio, commercialPortfolio } from '@/lib/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Maximize2, X } from 'lucide-react';
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

const PortfolioGallery = ({ items }: { items: typeof bridalPortfolio }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
      {items.map((item, index) => {
        // Modern asymmetric grid logic
        const isLarge = index % 4 === 0 || index % 4 === 3;
        const colSpan = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';
        
        return (
          <Dialog key={item.id}>
            <DialogTrigger asChild>
              <div 
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] bg-card transition-all duration-700 cursor-pointer border border-border/50",
                  colSpan,
                  "aspect-[4/5] md:aspect-auto md:h-[500px] lg:h-[600px]"
                )}
              >
                <div className="relative h-full w-full">
                  <Image
                    src={item.image.imageUrl}
                    alt={item.image.description}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    data-ai-hint={item.image.imageHint}
                  />
                </div>
                {/* Modern Glassmorphism Overlay */}
                <div className="absolute inset-x-4 bottom-4 p-6 rounded-2xl bg-black/20 backdrop-blur-md border border-white/10 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <p className="text-white font-headline text-lg font-medium mb-2">
                    {item.image.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
                    <Maximize2 className="h-3.5 w-3.5" />
                    View Masterpiece
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-none w-screen h-screen border-none bg-black/95 p-0 flex items-center justify-center outline-none">
              <VisuallyHidden>
                <DialogTitle>Portfolio Detail View</DialogTitle>
                <DialogDescription>Swipe to navigate through the gallery collection.</DialogDescription>
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
                    {items.map((galItem) => (
                      <CarouselItem key={galItem.id} className="h-full w-full flex items-center justify-center p-0 basis-full">
                        <div className="relative h-full w-full flex flex-col items-center justify-center p-4 md:p-12">
                          <div className="relative w-full h-[75vh] md:h-[85vh] max-w-6xl">
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
        );
      })}
    </div>
  );
};

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Tabs defaultValue="bridal" className="w-full">
          <div className="flex flex-col items-start gap-12 text-left mb-20">
            <div className="space-y-6 max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.25em]">
                Selected Works
              </span>
              <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                Artistry in <br />
                <span className="text-primary italic">Every Detail</span>
              </h2>
              <p className="text-muted-foreground text-xl text-balance max-w-2xl font-light">
                A curated journey through elegance and precision. From timeless bridal grace to the bold creativity of commercial beauty.
              </p>
            </div>

            <TabsList className="h-auto p-1.5 bg-secondary/40 rounded-full border border-border/50 backdrop-blur-md inline-flex">
              <TabsTrigger 
                value="bridal" 
                className="px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-2xl"
              >
                Bridal
              </TabsTrigger>
              <TabsTrigger 
                value="commercial" 
                className="px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-2xl"
              >
                Commercial
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="bridal" className="mt-0 outline-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <PortfolioGallery items={bridalPortfolio} />
            <div className="mt-20 text-center">
              <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 h-16 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                <Link href="/portfolio/bridal_makeup_kerala" className="flex items-center gap-3">
                  Explore Full Bridal Gallery
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="mt-0 outline-none animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <PortfolioGallery items={commercialPortfolio} />
            <div className="mt-20 text-center">
               <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 h-16 text-lg font-bold group shadow-xl hover:shadow-primary/20 transition-all">
                <Link href="/portfolio/commercial_makeup_kerala" className="flex items-center gap-3">
                  Explore Commercial Portfolio
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}