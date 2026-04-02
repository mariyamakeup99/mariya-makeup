import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_PATH = path.join(process.cwd(), 'src/content/blog');

export type BlogPostMetadata = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  imageId: string;
  date: string;
};

export function getBlogSlugs() {
  if (!fs.existsSync(BLOG_PATH)) {
    return [];
  }
  return fs.readdirSync(BLOG_PATH).filter((file) => /\.mdx$/.test(file));
}

export function getBlogPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(BLOG_PATH, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    metadata: data as BlogPostMetadata,
    content,
  };
}

export function getAllBlogPosts(): { metadata: BlogPostMetadata; slug: string }[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => {
      const post = getBlogPostBySlug(slug);
      if (!post) return null;
      return {
        metadata: { ...post.metadata, slug: post.slug },
        slug: post.slug,
      };
    })
    .filter((post): post is { metadata: BlogPostMetadata; slug: string } => post !== null)
    .sort((a, b) => (new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()));

  return posts;
}