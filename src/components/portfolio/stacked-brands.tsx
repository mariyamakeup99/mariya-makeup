"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Brand {
  name: string;
  description: string;
}

interface StackedBrandsProps {
  brands: Brand[];
  brandLogos: string[];
}

const StackedCard = ({
  brand,
  logo,
  index,
  total,
  progress,
  targetScale,
}: {
  brand: Brand;
  logo: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  targetScale: number;
}) => {
  // When this card hits the top of the viewport
  const startProgress = index / total;
  // It will scale down smoothly as we scroll past it to the full bottom of the list
  const range = [startProgress, 1];
  const scale = useTransform(progress, range, [1, targetScale]);
  
  // We can push the older cards slightly up to enhance the physical illusion
  const yShift = useTransform(progress, range, [0, -50]);

  return (
    <div className="h-[70vh] w-full flex items-start justify-center pt-4 sticky top-10 md:top-16">
      <motion.div
        style={{
          scale,
          y: yShift,
          marginTop: `${index * 12}px`, 
        }}
        // Small entrance animation when card comes into viewport
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl px-4 md:px-0 relative perspective-[1000px] origin-top"
      >
        <Card className="overflow-hidden shadow-2xl border border-primary/10 bg-card/95 backdrop-blur-xl group transform-gpu">
          <CardHeader className="bg-primary/5 transition-colors group-hover:bg-primary/10 flex flex-row items-center gap-6 md:gap-10 p-6 md:p-10">
            <div className="h-20 w-20 md:h-28 md:w-28 relative bg-white rounded-3xl p-3 md:p-4 shadow-lg border border-primary/10 flex items-center justify-center shrink-0 overflow-hidden transform group-hover:scale-105 transition duration-500">
              <Image
                src={logo}
                alt={brand.name}
                fill
                sizes="(max-width: 768px) 80px, 112px"
                className="object-contain p-4 md:p-6"
              />
            </div>
            <div>
              <CardTitle className="font-headline text-3xl md:text-5xl text-primary drop-shadow-sm mb-3">
                {brand.name}
              </CardTitle>
              <Separator className="bg-primary/20 mt-2 w-16 group-hover:w-24 transition-all duration-300 h-1 rounded-full" />
            </div>
          </CardHeader>
          <CardContent className="pt-8 md:pt-10 p-6 md:p-10 text-left">
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light">
              {brand.description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default function StackedBrandsSection({ brands, brandLogos }: StackedBrandsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start tracking when top of container hits top of viewport
    // Stop tracking when bottom of container hits bottom of viewport
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative w-full z-10 mt-4 md:mt-8">
      {brands.map((brand, i) => {
        // Lower index cards shrink further down into the background (0.05 step per card overlay)
        const targetScale = 1 - (brands.length - i) * 0.04;
        
        return (
          <StackedCard
            key={brand.name}
            brand={brand}
            logo={brandLogos[i % brandLogos.length]}
            index={i}
            total={brands.length}
            progress={scrollYProgress}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
