import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/mdx';
import { getImage } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Badge } from '@/components/ui/badge';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageData = getImage(post.metadata.imageId);

  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary group mb-8">
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="outline" className="text-primary border-primary/20 flex items-center gap-1">
                <Tag className="h-3 w-3" />
                {post.metadata.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                {post.metadata.date}
              </div>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {post.metadata.title}
            </h1>
            <p className="mt-6 text-xl text-muted-foreground italic border-l-4 border-primary/30 pl-6 py-2">
              {post.metadata.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-16 border-8 border-card">
            <Image
              src={imageData.imageUrl}
              alt={post.metadata.title}
              fill
              className="object-cover"
              priority
              data-ai-hint={imageData.imageHint}
            />
          </div>

          {/* Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-headline prose-headings:font-bold 
            prose-p:text-muted-foreground prose-p:leading-relaxed 
            prose-li:text-muted-foreground
            prose-strong:text-foreground prose-blockquote:border-primary/50 
            prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-xl 
            prose-blockquote:py-2 prose-blockquote:font-light
            prose-img:rounded-3xl prose-img:shadow-xl
            prose-table:border prose-table:rounded-xl prose-table:overflow-hidden">
            <MDXRemote source={post.content} />
          </article>

          {/* Footer / Share */}
          <footer className="mt-20 pt-12 border-t border-border">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold">Written by Mariya</p>
                  <p className="text-sm text-muted-foreground">Bridal Makeup Artist</p>
                </div>
              </div>
              <Button asChild className="rounded-full">
                <Link href="/contact">Book a consultation</Link>
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}