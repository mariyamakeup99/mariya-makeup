"use client";

import Image from "next/image";
import { brandLogos } from "@/lib/data";

export function LogoCloud() {
  const infiniteLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="relative py-20 overflow-hidden">

      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10 ">
        <Image
          src="/bg-3.webp" // 👈 change this path
          alt="Background"
          fill
          priority
          className="object-cover rounded-3xl"
        />
      </div>

      {/* ✅ Overlay (important for readability) */}

      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <h3 className="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase ">
          Trusted by Leading Brands
        </h3>

        {/* Animation styles */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee {
            animation: marquee 40s linear infinite;
            width: max-content;
          }

          .marquee:hover {
            animation-play-state: paused;
          }

          .logo {
            
            transition: all 0.4s ease;
          }

          .logo:hover {
            filter: grayscale(0%) opacity(1);
            transform: scale(1.08);
          }
        `}</style>

        {/* Logo Marquee */}
        <div className="relative mt-12 overflow-hidden">

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Track */}
          <div className="marquee flex items-center gap-12">
            {infiniteLogos.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-gray-100/60 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-200 hover:shadow-md transition"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={140}
                  height={50}
                  className="logo h-12 w-auto object-contain"
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}