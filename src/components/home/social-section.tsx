import Image from 'next/image';
import Link from 'next/link';
import { PlayCircle } from 'lucide-react';
import { socialVideos } from '@/lib/data';

export function SocialSection() {
  return (
    <section className="bg-card py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold md:text-5xl">Watch Mariya in Action</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Get a glimpse behind the scenes and watch tutorials on Instagram & YouTube.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {socialVideos.map((video) => (
            <Link href={video.url} key={video.id} className="group relative block overflow-hidden rounded-lg shadow-lg">
              <Image
                src={video.image.imageUrl}
                alt={video.image.description}
                width={400}
                height={500}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={video.image.imageHint}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <PlayCircle className="h-16 w-16 text-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
                <p className="mt-2 font-semibold">Watch on {video.platform}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
