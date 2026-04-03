import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingSocials } from '@/components/floating-socials';

export const metadata: Metadata = {
  title: 'MAKEUP BY MARIYA | Luxury Bridal & Commercial Makeup Artist',
  description: 'Mariya Makeup Artistry specializes in premium, customized bridal makeup, commercial photoshoots, and large-scale productions across Ernakulam, Thrissur, and Kerala.',
  keywords: 'Bridal Makeup, Best Makeup Artist in Kerala, Ernakulam Makeup Artist, Commercial Makeup, Mariya Makeup',
  openGraph: {
    title: 'MAKEUP BY MARIYA',
    description: 'Luxury Bridal & Commercial Makeup Services in Kerala',
    siteName: 'Makeup by Mariya',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingSocials />
        <Toaster />
      </body>
    </html>
  );
}
