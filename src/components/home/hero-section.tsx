"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  ChevronDown,
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const heroImageDesktop = PlaceHolderImages.find(
    (img) => img.id === "hero-mariya"
  );

  const heroImage = heroImageDesktop?.imageUrl || "/hero.webp";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/makeup_by_mariyaaa?igsh=ZHJqcXVndjJ1eTc5", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@makeupbymariya-youtube?si=LnaOMLiSTBN-_QiU", label: "YouTube" },
    { icon: Facebook, href: "https://www.facebook.com/share/18DfodRJJD/", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/918136932606", label: "WhatsApp" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">

      {/* 🔥 Smart Background (Video only on desktop) */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          poster={heroImageDesktop?.imageUrl}
        >
          <source src="/makeup.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />

      {/* Social Sidebar (lighter animation) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-6 opacity-0 animate-fadeIn">
        <div className="w-px h-20 bg-white/20 mx-auto" />
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-primary transition-transform duration-300 hover:scale-110"
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
        <div className="w-px h-20 bg-white/20 mx-auto" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex-grow flex items-center pt-28 pb-20 md:pt-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">

            {/* Title */}
            <h2 className="font-headline font-bold text-white leading-tight text-[clamp(2.5rem,8vw,4.5rem)] lg:text-[clamp(4.5rem,7vw,6rem)]">
              Makeup by Mariya
            </h2>

            {/* Subtitle */}
            <h1 className="text-primary tracking-[0.25em] uppercase text-sm md:text-base">
              Bridal | Celebrity | Commercial Makeup Artist in Kerala
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-white/85 leading-relaxed text-base md:text-lg lg:text-xl">
              Redefining Bridal Beauty with Elegance & Perfection. Led by Mariya,
              a trusted and best Bridal, Celebrity and Commercial Makeup Artist
              in Kerala with over 10 years of experience.
            </p>

            {/* Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-64 rounded-full bg-accent px-8 py-6 text-lg hover:bg-accent/90 transition-transform hover:scale-105"
              >
                <Link href="/contact">Book Your Transformation</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-64 rounded-full border-2 border-primary px-8 py-6 text-lg text-primary hover:bg-primary/10 transition-transform hover:scale-105"
              >
                <Link href="/portfolio/bridal_makeup_kerala">View Portfolio</Link>
              </Button>
            </div>

            {/* Mobile Social */}
            <div className="pt-8 flex gap-5 lg:hidden">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white/50" />
      </div>
    </section>
  );
}