"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
    {
        src: "/images/port2.JPG",
        alt: "Bridal Makeup",
        rotation: -45,
        yOffset: 250,
    },
    {
        src: "/images/celebrities/rosh.webp",
        alt: "High Fashion Editorial",
        rotation: -20,
        yOffset: 80,
    },
    {
        src: "/images/celebrities/jisma.webp",
        alt: "Glamour Makeup Center",
        rotation: 0,
        yOffset: 0,
    },
    {
        src: "/images/commercial/amitha.webp",
        alt: "Commercial",
        rotation: 20,
        yOffset: 80,
    },
    {
        src: "/images/bridal/bride5.webp",
        alt: "Editorial",
        rotation: 45,
        yOffset: 250,
    },
];

const revealSentence =
    "The fine art of applying makeup has remained a meticulous process for centuries. We bring modern perfection to timeless elegance.";

export default function FloatingPortfolio() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // 🔥 Reduced parallax intensity (smooth)
    const structuralParallax = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -80]
    );

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[100svh] flex flex-col justify-center py-12 md:py-20 
bg-gradient-to-br from-[#f5f1eb] via-[#eae3d9] to-[#d6c6b2] 
overflow-hidden"        >
            <div className="max-w-[1400px] w-full mx-auto px-4 relative z-10 flex flex-col items-center">

                {/* Top Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-zinc-100/50 backdrop-blur-md border border-zinc-200/60 rounded-full px-5 py-2 mb-8 md:mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                >
                    <span className="font-serif text-[11px] font-bold uppercase tracking-[0.25em] text-[#8e8e8e]">
                        Our Vision
                    </span>
                </motion.div>

                {/* Image Dome */}
                <motion.div
                    style={{ y: structuralParallax }}
                    className="relative w-full h-[400px] md:h-[550px] flex justify-center items-start mb-8 md:mb-12"
                >
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: img.yOffset + 60, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: img.yOffset, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 1,
                                delay: idx * 0.1,
                                ease: "easeOut",
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: img.yOffset - 10,
                            }}
                            className="absolute transform-gpu will-change-transform cursor-pointer group"
                            style={{
                                left: `${15 + idx * 17.5}%`,
                                x: "-50%",
                                zIndex:
                                    idx === 2 ? 30 : idx === 1 || idx === 3 ? 20 : 10,
                            }}
                        >
                            <div className="relative w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-[5px] border-white transition-all duration-500">

                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 768px) 150px, 300px"
                                    quality={70}
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    priority={idx === 2} // center loads first
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Content */}
                <div className="text-center flex flex-col items-center w-full max-w-4xl mx-auto">

                    {/* Diamond Icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-6 md:mb-10 border-[2px] border-[#1a1a1a] grid grid-cols-2 p-1.5 gap-1.5 rotate-45"
                    >
                        <div className="bg-[#1a1a1a]" />
                        <div />
                        <div />
                        <div className="bg-[#1a1a1a]" />
                    </motion.div>

                    {/* Text (optimized) */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-[22px] sm:text-3xl md:text-5xl lg:text-[3.5rem] text-[#1a1a1a] leading-[1.4] tracking-[-0.02em] px-4 md:px-8"
                    >
                        {revealSentence}
                    </motion.h2>
                </div>
            </div>
        </section>
    );
}