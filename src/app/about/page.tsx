"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(
    (img) => img.id === "about-mariya"
  );

  return (
    <section className="pt-28 pb-20 sm:pt-36 sm:pb-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔥 Grid (image first on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ✅ Image (TOP on mobile) */}
          <div className="order-1 lg:order-2">
            {aboutImage && (
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-[6px] border-card">

                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={75}
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>

          {/* ✅ Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              About Mariya
            </h1>

            <p className="mt-3 text-base sm:text-lg md:text-xl text-primary font-medium">
              Professional Bridal Makeup Artist You Can Trust
            </p>

            <div className="mt-6 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed">

              <p>
                Mariya is a talented makeup artist in Kerala known for her attention to detail, skin-focused techniques and personalized bridal transformations. With a decade of experience in the beauty industry, she has worked with brides, celebrities and commercial clients using top professional makeup brands to deliver stunning results.
              </p>

              <p>
                Whether you prefer a natural bridal glow or a bold traditional look, Mariya ensures you look confident and glowing throughout your special day.
              </p>

              <p>
                As a trusted Bridal, Celebrity and Commercial Makeup Artist in Kerala, her services span across major locations including Ernakulam, Thrissur, Kottayam and Alappuzha.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 text-center lg:text-left">

              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-2">
                  Years Exp
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  1k+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-2">
                  Brides
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}