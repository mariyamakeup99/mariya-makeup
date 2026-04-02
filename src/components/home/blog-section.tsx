import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/mdx';
import { getImage } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section className="py-24 sm:py-32 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Beauty Insights
          </span>
          <h2 className="font-headline text-4xl font-bold md:text-5xl lg:text-6xl">From the Blog</h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore professional makeup tips, bridal trends, and skincare guides curated by Mariya.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const imageData = getImage(post.metadata.imageId);
            return (
              <Card key={post.slug} className="flex flex-col overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card">
                <CardHeader className="p-0">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={imageData.imageUrl}
                      alt={post.metadata.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      data-ai-hint={imageData.imageHint}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 backdrop-blur-md text-foreground hover:bg-white">{post.metadata.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 flex-grow">
                  <div className="flex items-center text-xs text-muted-foreground mb-4 font-semibold uppercase tracking-widest">
                    <Calendar className="mr-2 h-3.5 w-3.5" />
                    {post.metadata.date}
                  </div>
                  <CardTitle className="font-headline text-2xl leading-tight mb-4">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.metadata.title}
                    </Link>
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.metadata.excerpt}</p>
                </CardContent>
                <CardFooter className="p-8 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary font-bold group text-lg">
                    <Link href={`/blog/${post.slug}`} className="flex items-center">
                      Full Article <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <Button asChild size="lg" className="rounded-full px-12 h-16 text-lg font-bold shadow-xl hover:shadow-primary/20 transition-all">
            <Link href="/blog">Visit the Full Blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}