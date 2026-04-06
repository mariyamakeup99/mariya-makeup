import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingSocials } from '@/components/floating-socials';
import { WhatsAppCTA } from '@/components/whatsapp-cta';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.makeupbymariya.com'),

  title: {
    default: 'Best Makeup Artist in Kochi | Makeup by Mariya',
    template: '%s | Makeup by Mariya',
  },

  description:
    'Looking for the best makeup artist in Kochi? Mariya offers luxury bridal, engagement & commercial makeup services across Kerala.',

  keywords: [
    'makeup artist in kochi',
    'bridal makeup kochi',
    'best makeup artist in kerala',
    'makeup artist ernakulam',
  ],

  openGraph: {
    title: 'Best Makeup Artist in Kochi | Makeup by Mariya',
    description:
      'Luxury bridal & commercial makeup artist in Kochi, Kerala.',
    url: 'https://www.makeupbymariya.com',
    siteName: 'Makeup by Mariya',
    images: [
      {
        url: 'https://www.makeupbymariya.com/images/hero.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Best Makeup Artist in Kochi | Makeup by Mariya',
    description:
      'Luxury bridal & commercial makeup artist in Kochi, Kerala.',
    images: ['https://www.makeupbymariya.com/images/hero.webp'],
  },

  alternates: {
    canonical: 'https://www.makeupbymariya.com',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Makeup by Mariya",
              image: "https://makeupbymariya.com/images/hero.webp",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kochi",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
              areaServed: ["Kochi", "Ernakulam", "Thrissur", "Kerala"],
              url: "https://makeupbymariya.com",
              telephone: "+918136932606",
            }),
          }}
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingSocials />
        <WhatsAppCTA />
        <Toaster />
      </body>
    </html>
  );
}
