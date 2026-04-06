import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Sparkles, ArrowLeft, Building2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getCommercialProfileBySlug, allCommercialProfiles } from '@/lib/commercial-profiles';

// Generate static versions for all known profiles
export async function generateStaticParams() {
  return allCommercialProfiles.map((profile) => ({
    slug: profile.slug,
  }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const profile = getCommercialProfileBySlug(slug);

  if (!profile) {
    return {
      title: 'Profile Not Found | Makeup by Mariya',
    };
  }

  return {
    title: `${profile.name} - ${profile.type} Makeup Portfolio | Makeup by Mariya`,
    description: profile.description,
    openGraph: {
      title: `${profile.name} | Professional Commercial Makeup`,
      description: profile.description,
      images: [profile.image],
    },
  };
}

export default async function ProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const profile = getCommercialProfileBySlug(slug);

  if (!profile) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      {/* Dynamic Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.05),transparent_50%),radial-gradient(circle_at_bottom_left,hsl(var(--accent)/0.05),transparent_50%)] transform-gpu" />

      {/* Hero / Content Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden flex-grow flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-10">

          <Button asChild variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground mb-8 text-sm font-semibold tracking-wide uppercase transition-colors">
            <Link href="/portfolio/commercial_makeup_kerala" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Commercial
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
            {/* Image Column */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:max-w-none rounded-[2.5rem] bg-card border border-primary/20 shadow-2xl overflow-hidden shadow-primary/5">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-80 lg:opacity-0" />

              <div className="absolute top-6 left-6 flex gap-2 z-10">
                <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  {profile.type === 'Influencer' ? <User className="w-3.5 h-3.5" /> : <Building2 className="w-3.5 h-3.5" />}
                  {profile.type}
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="flex flex-col text-left space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-medium tracking-widest uppercase text-sm mb-2">
                <Sparkles className="h-4 w-4" />
                Featured Portfolio
              </div>

              <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-sm text-foreground">
                {profile.name}
              </h1>

              <div className="w-20 h-1 bg-primary/40 rounded-full mt-4 mb-6"></div>

              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light mt-6">
                {profile.description}
              </p>


            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
