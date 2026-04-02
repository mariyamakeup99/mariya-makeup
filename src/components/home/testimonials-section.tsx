'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { testimonials } from '@/lib/data';
import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.25em] mb-4">
            Wall of Love
          </span>
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Client <span className="text-primary italic">Stories</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg font-light leading-relaxed">
            Discover why hundreds of brides trust Mariya to create their perfect wedding look.
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full border-border/50 shadow-lg bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 rounded-[2.5rem] overflow-hidden group border">
                      <CardContent className="flex flex-col h-full p-8 md:p-10">
                        <div className="mb-6 flex items-center justify-between">
                          <div className="flex gap-0.5 text-primary">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-current" />
                            ))}
                          </div>
                          <Quote className="h-8 w-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
                        </div>
                        
                        <blockquote className="flex-grow">
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light italic">
                            &ldquo;{testimonial.comment}&rdquo;
                          </p>
                        </blockquote>
                        
                        <div className="mt-10 pt-6 border-t border-border/50 flex items-center gap-4">
                          <Avatar className="w-14 h-14 border-2 border-primary/20 ring-4 ring-primary/5 transition-all group-hover:ring-primary/10">
                            <AvatarImage 
                              src={testimonial.avatar.imageUrl} 
                              alt={testimonial.name} 
                              data-ai-hint={testimonial.avatar.imageHint} 
                            />
                            <AvatarFallback className="bg-primary/5 text-primary font-bold text-lg">
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="overflow-hidden">
                            <div className="font-headline text-xl font-bold text-foreground truncate">
                              {testimonial.name}
                            </div>
                            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 truncate">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-12 gap-4 lg:block">
              <CarouselPrevious className="static lg:absolute lg:-left-16 lg:top-1/2 lg:-translate-y-1/2 h-14 w-14 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground shadow-xl transition-all" />
              <CarouselNext className="static lg:absolute lg:-right-16 lg:top-1/2 lg:-translate-y-1/2 h-14 w-14 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground shadow-xl transition-all" />
            </div>
          </Carousel>
        </div>

        <div className="mt-20 text-center">
           <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-secondary/30 border border-border/50 backdrop-blur-sm text-sm font-medium text-muted-foreground shadow-sm">
              <div className="flex -space-x-3 mr-2">
                {testimonials.slice(0, 4).map((t, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden shadow-sm">
                    <Image 
                      src={t.avatar.imageUrl} 
                      alt="Client" 
                      width={32} 
                      height={32} 
                      className="w-full h-full object-cover"
                      data-ai-hint={t.avatar.imageHint}
                    />
                  </div>
                ))}
              </div>
              <span>Join <span className="text-foreground font-bold">1,000+</span> Happy Brides in Kerala</span>
              <div className="flex gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-primary fill-current" />
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
