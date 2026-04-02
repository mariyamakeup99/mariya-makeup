"use client";

import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === "about-mariya"
  );

  return (
    <section className="py-20 sm:py-28 bg-background overflow-hidden relative border-t">

      {/* Light background accent (reduced cost) */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Image Side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px]">

              {/* 🔥 Removed spinning ring + heavy blur */}

              {/* Soft static glow (cheap) */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent opacity-30 pointer-events-none" />

              {/* Image */}
              <div className="relative aspect-[4/5] w-full rounded-[6rem_2rem_6rem_2rem] overflow-hidden shadow-xl border-[6px] border-card z-10">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    sizes="(max-width: 768px) 280px, 320px"
                    quality={75}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Experience Badge (no animation) */}
              <div className="absolute -bottom-4 -right-4 bg-primary p-5 rounded-xl shadow-lg z-20">
                <div className="text-primary-foreground text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-semibold">
                    Years Exp
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl text-left">

              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-5">
                About Mariya
              </span>

              <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground leading-tight mb-6">
                Professional Bridal <br />
                <span className="text-primary italic">
                  Makeup Artist You Can Trust
                </span>
              </h2>

              {/* Card */}
              <div className="bg-transparent p-6 md:p-8 rounded-[2rem] border border-primary/30 transition-all duration-300 hover:border-primary/50">

                <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p>
                    Mariya is a talented makeup artist in Kerala known for her attention to detail, skin-focused techniques and personalized bridal transformations. With a decade of experience in the beauty industry, she has worked with brides, celebrities and commercial clients using top professional makeup brands to deliver stunning results.
                  </p>

                  <p>
                    Whether you prefer a natural bridal glow or a bold traditional look, Mariya ensures you look confident and glowing throughout your special day.
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-5">

                  <div className="flex flex-wrap items-center gap-5">
                    <Button
                      asChild
                      variant="link"
                      className="p-0 h-auto text-primary text-lg font-bold group"
                    >
                      <Link href="/about" className="flex items-center gap-2">
                        About Mariya
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    <div className="h-px w-10 bg-border hidden sm:block" />

                    <p className="text-sm font-medium text-foreground uppercase tracking-widest">
                      Based in Kerala
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 border-t border-border/50 pt-5">
                    <Link
                      href="/portfolio/bridal"
                      className="text-foreground/70 hover:text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-colors group"
                    >
                      Bridal Gallery
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/portfolio/commercial"
                      className="text-foreground/70 hover:text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 transition-colors group"
                    >
                      Commercial Work
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}