"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/lib/placeholder-images";

export const InfinitePortfolio = ({
    items,
    speed = 100, // px per second (REAL control)
    direction = "left",
    pauseOnHover = true,
    className,
}: {
    items: {
        id: string;
        image: ImagePlaceholder;
    }[];
    speed?: number;
    direction?: "left" | "right";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);

    const [start, setStart] = useState(false);

    useEffect(() => {
        const init = () => {
            if (!containerRef.current || !scrollerRef.current) return;

            // ✅ Prevent duplicate cloning (important for Next.js strict mode)
            if (scrollerRef.current.dataset.duplicated) return;
            scrollerRef.current.dataset.duplicated = "true";

            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                scrollerRef.current?.appendChild(duplicatedItem);
            });

            setDirection();
            setSpeed();

            setStart(true);
        };

        // ✅ Wait for layout to be ready
        requestAnimationFrame(init);
    }, []);

    const setDirection = () => {
        if (!containerRef.current) return;

        containerRef.current.style.setProperty(
            "--animation-direction",
            direction === "left" ? "forwards" : "reverse"
        );
    };

    const setSpeed = () => {
        if (!containerRef.current || !scrollerRef.current) return;

        const totalWidth = scrollerRef.current.scrollWidth / 2; // original content only
        const duration = totalWidth / speed; // px/sec logic

        containerRef.current.style.setProperty(
            "--animation-duration",
            `${duration}s`
        );
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-full overflow-hidden",
                "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
                className
            )}
        >
            <div
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 gap-4 py-4 flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
                style={{
                    animationDuration: "var(--animation-duration, 40s)",
                    animationDirection: "var(--animation-direction, forwards)",
                }}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="w-[280px] md:w-[350px] aspect-[4/5] relative rounded-2xl flex-shrink-0 overflow-hidden"
                    >
                        <Image
                            src={item.image.imageUrl}
                            alt={item.image.description || "Portfolio Image"}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                            sizes="(max-width: 768px) 280px, 350px"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};