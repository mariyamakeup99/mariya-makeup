import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar } from 'lucide-react';
import { getAllBlogPosts } from '@/lib/mdx';
import { getImage } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export default async function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-foreground">
            Mariya's Blog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Your source for professional makeup tips, beauty trends, and skincare secrets.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const imageData = getImage(post.metadata.imageId);
            return (
              <Card key={post.slug} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <CardHeader className="p-0">
                  <Link href={`/blog/${post.slug}`} className="block relative h-56 w-full overflow-hidden">
                    <Image
                      src={imageData.imageUrl}
                      alt={post.metadata.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                      data-ai-hint={imageData.imageHint}
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="font-semibold">{post.metadata.category}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.metadata.date}
                    </div>
                  </div>
                  <CardTitle className="font-headline text-xl leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.metadata.title}
                    </Link>
                  </CardTitle>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{post.metadata.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary font-bold group">
                    <Link href={`/blog/${post.slug}`} className="flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}