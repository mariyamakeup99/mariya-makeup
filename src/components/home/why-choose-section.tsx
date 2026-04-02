"use client";

import {
  Award,
  ShieldCheck,
  Palette,
  Droplets,
  Heart,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { getImage } from "@/lib/data";

const reasons = [
  {
    icon: Award,
    title: "10+ Years of Experience",
    description:
      "A decade of refined artistry and professional expertise in the bridal and commercial beauty industry.",
  },
  {
    icon: ShieldCheck,
    title: "Premium & Skin-Safe Products",
    description:
      "We exclusively use world-renowned luxury brands for a flawless, safe finish.",
  },
  {
    icon: Palette,
    title: "Customized Bridal Looks",
    description:
      "Every transformation is tailored to your personality, facial structure, and wedding theme.",
  },
  {
    icon: Droplets,
    title: "Long-lasting & Waterproof",
    description:
      "Designed to withstand Kerala climate and stay perfect from dawn to dusk.",
  },
  {
    icon: Heart,
    title: "Calm & Professional Approach",
    description:
      "A composed presence that helps you feel relaxed and confident on your big day.",
  },
  {
    icon: MapPin,
    title: "On-location Services",
    description:
      "Professional makeup services delivered at your convenience across Kerala.",
  },
];

export function WhyChooseSection() {
  const backgroundImage = getImage("bridal-2");

  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden border-t border-b">

      {/* 🔥 Optimized Background (lighter) */}
      <div className="absolute inset-0 z-0 opacity-15">
        <Image
          src={backgroundImage.imageUrl}
          alt="Background"
          fill
          sizes="100vw"
          quality={60}
          className="object-cover grayscale"
        />
      </div>

      {/* Elegant vertical lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            The Mariya Standard
          </span>

          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Why Choose <br />
            <span className="text-primary italic">
              Makeup by Mariya?
            </span>
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Bridal beauty is a balance of precision and personalization.
            Here’s why brides trust us for their transformation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-[1.8rem] border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Icon */}
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                <reason.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {reason.description}
              </p>

              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-[1.8rem] opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}