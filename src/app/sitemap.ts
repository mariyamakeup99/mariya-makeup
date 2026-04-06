import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.makeupbymariya.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/blog',
    '/contact',
    '/portfolio/bridal_makeup_kerala',
    '/portfolio/commercial_makeup_kerala',
    '/blog/ultimate-guide-to-bridal-makeup',
    '/blog/hd-makeup-vs-airbrush-makeup',
    '/blog/bridal-skin-prep-tips',
  ];

  const portfolioItems = [
    'amitha-jobin',
    'alda-davis',
    'maria-dominic',
    'jisma-jiji-kizhakkarakattu',
    'keep-it-stylish-by-ammu',
    'resh-sebu',
    'veena-mukundan',
    'arya-menon',
    'shwetha-poornima',
    'archita-style-with-archita',
    'sreevidya-mullachery',
    'abhi-bogatinovski',
    'kalyaani',
    'jayasurya',
    'aparna-balamurali',
    'aparna-das',
    'deepa-thomas',
    'anarkali-marikar',
    'arjun-syam-gopan',
    'wafa-khadija-rahman',
    'aparna-vinod',
    'gowry-lekshmi',
    'mridula-murali',
  ];

  const portfolioRoutes = portfolioItems.map(
    (item) => `/portfolio/commercial_makeup_kerala/${item}`
  );

  return [...routes, ...portfolioRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}