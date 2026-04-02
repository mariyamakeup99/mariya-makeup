import { CheckCircle, Star, Camera, Video, ArrowRight, Sparkles, Heart, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { getImage } from '@/lib/data';

const bridalStyles = [
  {
    title: 'Christian Bridal Makeup',
    description: 'Christian bridal makeup focuses on elegance, soft glam and flawless skin. Mariya creates subtle yet radiant looks with perfect base makeup, defined eyes and stylish hairstyles that complement white gowns and church weddings.',
    features: ['Soft Glam Finish', 'Radiant Base', 'Elegant Hairstyling'],
    imageId: 'bridal-2'
  },
  {
    title: 'Hindu Bridal Makeup',
    description: 'Hindu bridal makeup prioritizes tradition, richness and cultural detailing. From bold eye makeup to perfectly contoured faces and traditional hairstyling, Mariya ensures an awesome bridal look that suits for temple or mandap weddings.',
    features: ['Traditional Bold Eyes', 'Structured Contouring', 'Mandap-Ready Glow'],
    imageId: 'bridal-3'
  },
  {
    title: 'Muslim Bridal Makeup',
    description: 'Muslim bridal makeup highlights refined beauty with impressive eyes, seamless base makeup, and elegant styling. Mariya specializes in modest yet attractive looks that align with cultural aesthetics and bridal attire.',
    features: ['Expressive Eye Art', 'Polished Skin', 'Hijab-Friendly Styling'],
    imageId: 'bridal-4'
  },
  {
    title: 'North Indian Bridal Makeup',
    description: 'North Indian bridal makeup features bold eyes, structured contours, and statement bridal glam. Mariya delivers classic North Indian style bridal looks that enhance lehengas, heavy jewelry and grand wedding themes.',
    features: ['Statement Glam', 'Jewelry-Focused', 'Grand Wedding Theme'],
    imageId: 'bridal-1'
  }
];

const mainServices = [
  {
    title: 'Bridal Artistry',
    description: 'Personalized transformations for your most memorable day.',
    icon: Star,
    features: ['HD & Airbrush Options', 'Natural & Minimal Looks', 'Glam & Traditional Styles', 'Hairstyling & Draping', 'Waterproof Finish'],
    cta: 'Explore Bridal Gallery',
    href: '/portfolio/bridal',
    imageId: 'hero-mariya'
  },
  {
    title: 'Commercial Makeup',
    description: 'Camera-ready precision for brands and media.',
    icon: Video,
    features: ['Advertisement Shoots', 'Fashion Photoshoots', 'Brand Campaigns', 'Media Productions', 'Stage & Public Events'],
    cta: 'View Commercial Work',
    href: '/portfolio/commercial',
    imageId: 'commercial-1'
  },
  {
    title: 'Celebrity & Media',
    description: 'Studio-grade makeup for public appearances.',
    icon: Camera,
    features: ['Stage Appearances', 'Public Functions', 'Editorial Shoots', 'On-site Touchups', 'High-Definition Finish'],
    cta: 'Contact for Booking',
    href: '/contact',
    imageId: 'commercial-3'
  }
];

const occasions = [
  {
    title: 'Wedding Day',
    icon: Heart,
    description: 'A perfect, long-lasting bridal look designed to stay flawless throughout ceremonies, photography and celebrations.'
  },
  {
    title: 'Haldi Ceremony',
    icon: Sparkles,
    description: 'Soft, fresh and natural makeup that boosts the bride\'s glow while keeping the look minimal and shining.'
  },
  {
    title: 'Sangeet Night',
    icon: Sparkles,
    description: 'Bold, trendy and stylish makeup with fine eyes and modern finishes apt for dance and celebrations.'
  },
  {
    title: 'Reception Night',
    icon: Clock,
    description: 'A glamorous and elegant transformation that adds shine, depth and sophistication for evening celebrations.'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* ✅ Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/port1.jpg"
            alt="Contact Background"
            fill
            priority
            className="object-cover scale-105 brightness-[0.85] contrast-[1.1]"
          />


          {/* ✅ Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90" />

          {/* ✅ Subtle Luxury Light Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
          </div>

          {/* ✅ Bottom Fade */}
        </div>

        {/* 🌟 Soft Background Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-pink-300/10 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-white/90 border-white/30 bg-white/10 backdrop-blur-md uppercase tracking-[0.2em] font-bold shadow-sm">
            Our Expertise
          </Badge>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            Professional Makeup <br />
            <span className="text-primary italic drop-shadow-md">Services in Kerala</span>
          </h1>
          <p className="mt-8 text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            With over 10 years of experience, Mariya specializes in impeccable, long-lasting artistry that enhances your natural beauty for every tradition and occasion.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {mainServices.map((service) => {
              const imageData = getImage(service.imageId);
              return (
                <Card key={service.title} className="flex flex-col h-full border-none shadow-xl bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden rounded-[2.5rem]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={imageData.imageUrl}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      data-ai-hint={imageData.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-6 bg-primary/20 p-3 rounded-2xl backdrop-blur-md border border-white/10 text-white">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <CardHeader className="text-left pb-4 px-8 pt-8">
                    <CardTitle className="font-headline text-3xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow pt-4 px-8">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-8 px-8 pb-8">
                    <Button asChild className="w-full h-14 rounded-full text-lg font-bold group/btn">
                      <Link href={service.href} className="flex items-center justify-center gap-2">
                        {service.cta}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Bridal Styles */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Community Traditions</span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4">Bridal Styles We Specialize In</h2>
              <p className="mt-6 text-muted-foreground text-lg">Expertly tailored looks that respect cultural richness while adapting to modern beauty standards and camera needs.</p>
            </div>
            <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10 h-12 px-8">
              <Link href="/portfolio/bridal">View All Bridal Styles</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            {bridalStyles.map((style) => {
              const styleImage = getImage(style.imageId);
              return (
                <div key={style.title} className="group overflow-hidden rounded-[3rem] bg-card border border-border/50 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={styleImage.imageUrl}
                        alt={style.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={styleImage.imageHint}
                      />
                    </div>
                    <div className="p-8 lg:p-16 flex flex-col justify-center">
                      <h3 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 transition-transform group-hover:translate-x-2">{style.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">{style.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {style.features.map(f => (
                          <Badge key={f} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 transition-colors px-4 py-1 text-sm">
                            {f}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Occasion Based Section */}
      <section className="py-24 bg-primary/5 border-t border-b border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Makeup for Every Occasion</h2>
            <p className="mt-6 text-muted-foreground text-lg">From the first morning ritual to the final evening dance, we ensure your beauty turns faces and captures hearts.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {occasions.map((occ) => (
              <div key={occ.title} className="text-center group">
                <div className="mx-auto w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <occ.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-headline text-2xl font-bold mb-4">{occ.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{occ.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-[2.5rem] md:rounded-[4rem] bg-black p-8 md:p-24 text-center relative overflow-hidden shadow-2xl">
            {/* Background Image - Matching Homepage Stats */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/statbg.webp"
                alt="Abstract flowing colors background"
                fill
                className="object-cover opacity-60"
                data-ai-hint="abstract flow"
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight">
                Ready for Your Transformation?
              </h2>
              <p className="text-white/90 text-lg md:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Let's create a look that is authentic, timeless, and absolutely yours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Button asChild size="lg" variant="secondary" className="rounded-full w-full sm:w-auto h-14 md:h-16 px-8 md:px-12 text-lg font-bold shadow-xl hover:scale-105 transition-all bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full w-full sm:w-auto h-14 md:h-16 px-8 md:px-12 text-lg font-bold border-white text-white hover:bg-white/10 shadow-xl hover:scale-105 transition-all bg-transparent">
                  <Link href="/portfolio/bridal">Explore Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
