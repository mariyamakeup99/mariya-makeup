'use client';
import Image from 'next/image';
import Link from 'next/link';
import { commercialPortfolio } from '@/lib/data';
import { influencers, celebrities } from '@/lib/commercial-profiles';
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { ArrowLeft, Camera, X, CheckCircle2, Star, Users, Briefcase, Sparkles } from 'lucide-react';
import StackedBrandsSection from '@/components/portfolio/stacked-brands';
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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const brandLogos = [
  '/logos/brands/Seematti-Typo-Black.svg',
  '/logos/brands/Silppa-Logo-White.avif',
  '/logos/brands/bhima_boy5.webp',
  '/logos/brands/cropped-Susan-Lawrence_logo_One-line-01-4.avif',
  '/logos/brands/logo00.avif',
  '/logos/brands/milan_logo.svg',
  '/logos/brands/parakkat_logo_58187224-1151-4bb3-81fa-f51e70cfd1b6.avif'
];

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
const randomImages = ['/images/port1.JPG', '/images/port2.JPG', '/images/port3.JPG', '/images/port4.JPG', '/images/mariya.jpg'];

const brands = [
  {
    name: 'Lulu Celebrate',
    description: 'A premier ethnic fashion brand and retail store, under the Lulu group umbrella, specialized in exquisite wedding wear, sarees and traditional outfits. Known for blending expert craftsmanship with traditional weaving techniques and modern design aesthetics.',
    logo: '/logos/brands/logo00.avif'
  },
  {
    name: 'Seematti',
    description: 'Established in 1910, a renowned historical textile retail chain in Kerala and a top bridal destination. Synonymous with quality silks, especially Kanchipuram sarees, and led by designer Beena Kannan.',
    logo: '/logos/brands/Seematti-Typo-Black.svg'
  },
  {
    name: 'Bhima Jewellers',
    description: 'One of India’s oldest and most trusted jewellery retail brands with a legacy of purity and craft spanning nearly a century and over 100 showrooms across South India.',
    logo: '/logos/brands/bhima_boy5.webp'
  },
  {
    name: 'Milan Design',
    description: 'Located in the heart of Kochi, focuses on ethnic wear such as bridal sarees, custom designed lehengas, and carefully crafted salwar sets using rich fabrics and traditional techniques.',
    logo: '/logos/brands/milan_logo.svg'
  },
  {
    name: 'Susan Lawrance',
    description: 'Known for beautiful, feminine, and precisely crafted attires, specializing in simple and elegant dresses perfect for parties, showers, and special events.',
    logo: '/logos/brands/cropped-Susan-Lawrence_logo_One-line-01-4.avif'
  },
  {
    name: 'T&M Signature',
    description: 'A premium luxury bridal couture boutique in Panampilly Nagar, Kochi, focusing on handcrafted, custom-made bridal wear blending modern designs with traditional Indian embroidery.',
    logo: '/logos/chanel.svg'
  },
  {
    name: 'Rose',
    description: 'Celebrates timeless elegance, blending artistic vision with graceful design to inspire confidence and expressive style in every creation.',
    logo: '/logos/dior.svg'
  },
  {
    name: 'Indra’s Designs',
    description: 'Blends creativity and elegance, crafting stylish, handcrafted pieces that celebrate individuality and artistic expression.',
    logo: '/logos/gucci.svg'
  },
  {
    name: 'Silpaa',
    description: 'Creates artistic, handcrafted jewellery blending innovation and elegance, celebrating unique style and contemporary design.',
    logo: '/logos/brands/Silppa-Logo-White.avif'
  },
  {
    name: 'Parakkat Jewels',
    description: 'Crafts exquisite, elegant jewellery that blends tradition and modern design, celebrating timeless beauty and fine craftsmanship.',
    logo: '/logos/brands/parakkat_logo_58187224-1151-4bb3-81fa-f51e70cfd1b6.avif'
  },
];

export default function CommercialPortfolioPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      {/* Dynamic Background Gradient (for the rest of the page) */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.05),transparent_50%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.05),transparent_50%)] transform-gpu" />

      {/* 🔥 HERO HEADER */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        {/* ✅ Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg1.webp"
            alt="Contact Background"
            fill
            priority
            className="object-cover scale-105 brightness-[0.85] contrast-[1.1]"
          />


          {/* ✅ Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90" />

          {/* ✅ Subtle Luxury Light Effect */}

          {/* ✅ Bottom Fade */}

        </div>

        {/* 🌟 Soft Background Glow (Optimized logic without heavy blur) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.12),transparent_60%)] rounded-full transform-gpu" />
          <div className="absolute bottom-[-20%] right-[0%] w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(249,168,212,0.12),transparent_60%)] rounded-full transform-gpu" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-start gap-6 text-left">
            <Button asChild variant="link" className="p-0 h-auto text-white/70 hover:text-white group text-sm font-bold uppercase tracking-widest drop-shadow-sm">
              <Link href="/#commercial-portfolio" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Overview
              </Link>
            </Button>
            <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg">
              Commercial <span className="text-primary italic drop-shadow-md">Portfolio</span>
            </h1>

          </div>
        </div>
      </section>

      {/* 🌟 MAIN CONTENT */}
      <div className="relative z-10 flex-grow flex flex-col">
        <div className="mx-6 space-y-6 mt-4">
          <p className="text-2xl text-black/70 italic font-medium leading-relaxed tracking-wide md:mx-6 mx-2">
            We provide <span className="text-primary font-semibold">professional makeup services</span>
            for brands, media, and public figures.
            <br />
            With over{" "}
            <span className="text-primary font-bold">10 years of experience</span>,
            we’ve worked on photoshoots, ads, and large-scale productions.
          </p>
        </div>
        {/* Services List */}
        <section className="relative py-16 md:py-24 bg-card/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-primary/5 border-none shadow-none">
                <CardHeader>
                  <Briefcase className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-2xl">Professional Needs</CardTitle>
                  <CardDescription>Tailored for high-impact production</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {['Advertisement Shoots', 'Fashion Photoshoots', 'Media and Film Productions', 'Corporate and Brand Campaigns', 'Stage and Public Events'].map((service) => (
                      <li key={service} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="md:col-span-2 flex flex-col justify-center lg:pl-12">
                <h3 className="font-headline text-4xl font-bold mb-6">Precision for the Lens</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Commercial makeup is distinct from bridal artistry. It is designed specifically for high-definition cameras, complex lighting environments, and professional photography requirements. The goal is to create a polished, camera-ready look that perfectly aligns with the project's creative concept.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every brushstroke is calculated for the camera. We understand how different sensors and lens focal lengths interact with skin texture and pigments, ensuring a flawless finish that reduces post-production time and maximizes visual impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="relative py-16 md:py-24 bg-background">
          <div className="relative overflow-hidden w-full">
            <style>{`
              @keyframes seamless-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 12px)); }
              }
              .animate-seamless-marquee {
                animation: seamless-marquee 20s linear infinite;
                will-change: transform;
                transform: translateZ(0);
                backface-visibility: hidden;
              }
              .animate-seamless-marquee:hover,
              .animate-seamless-marquee:active {
                animation-play-state: paused;
              }
            `}</style>

            {/* 🎬 SCROLL CONTAINER */}
            <div className="pb-4 w-full overflow-hidden">
              <div className="flex gap-6 animate-seamless-marquee w-max">
                {[...commercialPortfolio, ...commercialPortfolio].map((item, index) => (
                  <Dialog key={`${index}-${item.id}`}>
                    <DialogTrigger asChild>

                      <div className="shrink-0 w-[75vw] sm:w-[50vw] md:w-[40vw] lg:w-[28vw] xl:w-[22vw] group cursor-pointer">

                        <div className="relative overflow-hidden rounded-[3rem] bg-card border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500">

                          {/* IMAGE */}
                          <div className="relative aspect-[4/5]">
                            <Image
                              src={item.image.imageUrl}
                              alt={item.image.description}
                              fill
                              sizes="(max-width: 640px) 75vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, 25vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>

                          {/* OVERLAY */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                            <p className="text-white font-headline text-lg flex items-center gap-2">
                              <Sparkles className="h-4 w-4 text-primary" />
                              {item.image.description}
                            </p>
                          </div>

                        </div>

                      </div>

                    </DialogTrigger>

                    {/* ✅ KEEP YOUR EXISTING MODAL EXACTLY SAME */}
                    <DialogContent className="max-w-none w-screen h-screen border-none bg-black/95 p-0 flex items-center justify-center outline-none">
                      <VisuallyHidden>
                        <DialogTitle>Commercial Portfolio Viewer</DialogTitle>
                        <DialogDescription>Full-screen swipeable view of commercial work.</DialogDescription>
                      </VisuallyHidden>

                      <DialogClose className="fixed top-6 right-6 z-[60] text-white/70 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md">
                        <X className="h-6 w-6" />
                      </DialogClose>

                      <div className="w-full h-full">
                        <Carousel opts={{ loop: true, startIndex: index % commercialPortfolio.length }} className="w-full h-full">
                          <CarouselContent className="h-screen w-full ml-0">
                            {commercialPortfolio.map((galItem) => (
                              <CarouselItem key={galItem.id} className="h-full flex items-center justify-center">
                                <div className="relative w-full h-[80vh] max-w-5xl">
                                  <Image
                                    src={galItem.image.imageUrl}
                                    alt={galItem.image.description}
                                    fill
                                    sizes="100vw"
                                    className="object-contain"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                        </Carousel>
                      </div>
                    </DialogContent>

                  </Dialog>
                ))}
              </div>
            </div>

            {/* EDGE FADE */}

          </div>
        </section>

        {/* Brands Section */}
        <section className="relative py-8 md:py-16 bg-[hsl(var(--muted)/0.3)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-4">
              <Star className="h-8 w-8 text-primary" />
              <h2 className="font-headline text-5xl font-bold">Collaborating Brands</h2>
            </div>

            {/* Framer Motion Stacked Cards Animation */}
            <StackedBrandsSection brands={brands} />

          </div>
        </section>

        {/* Influencers Section */}
        <section className="relative py-16 md:py-24 bg-card/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <Users className="h-8 w-8 text-primary" />
              <h2 className="font-headline text-5xl font-bold">Influencer Partnerships</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {influencers.map((influencer, index) => (
                <Link
                  href={`/portfolio/commercial_makeup_kerala/${influencer.slug}`}
                  key={influencer.name}
                  className="group rounded-2xl sm:rounded-3xl overflow-hidden 
bg-white dark:bg-card 
border border-primary/10 
shadow-sm 
transition-transform duration-300 
md:hover:-translate-y-1 block"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image
                      src={influencer.image}
                      alt={influencer.name}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                      className="object-cover object-top md:object-center md:group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground leading-tight">
                      {influencer.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {influencer.description}
                    </p>



                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* Celebrities Section */}
        <section className="relative py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">

            {/* Heading */}
            <div className="flex items-center gap-4 mb-10 sm:mb-12">
              <Star className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold">
                Celebrity Clients
              </h2>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {celebrities.map((celeb, index) => (

                <Link
                  href={`/portfolio/commercial_makeup_kerala/${celeb.slug}`}
                  key={celeb.name}
                  className="group rounded-2xl sm:rounded-3xl overflow-hidden 
bg-white dark:bg-card 
border border-primary/10 
shadow-sm 
transition-transform duration-300 
md:hover:-translate-y-1 block"
                >

                  {/* Image (Responsive FIXED) */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image
                      src={celeb.image}
                      alt={celeb.name}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
                      className="object-cover object-top md:object-center md:group-hover:scale-[1.03] transition-transform duration-500"
                    />

                    {/* Optional Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4">

                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground leading-tight">
                      {celeb.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {celeb.description}
                    </p>



                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto rounded-[2.5rem] md:rounded-[4rem] bg-black p-8 md:p-24 text-center relative overflow-hidden shadow-2xl">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/commercial/mariya-amitha.webp"
                  alt="Abstract flowing colors background"
                  fill
                  className="object-cover opacity-040"
                  data-ai-hint="abstract flow"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <div className="relative z-10">
                <h3 className="font-headline text-3xl md:text-5xl font-bold mb-6 text-white">Ready for Your Production?</h3>
                <p className="max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-xl text-white/90 font-light">
                  Let's collaborate on your next brand campaign, photoshoot, or media project. Professional precision is just a click away.
                </p>
                <Button asChild size="lg" variant="secondary" className="rounded-full w-full sm:w-auto px-8 md:px-16 h-14 md:h-16 text-lg md:text-xl font-bold shadow-xl hover:scale-105 transition-all bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
