import Link from 'next/link';
import { Instagram, Youtube, Phone, Mail, Facebook } from 'lucide-react';
import { Logo } from '@/components/logo';
import { navLinks } from '@/lib/data';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Creating timeless beauty for your most memorable moments.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.instagram.com/makeup_by_mariyaaa?igsh=ZHJqcXVndjJ1eTc5" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/18DfodRJJD/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@makeupbymariya-youtube?si=LnaOMLiSTBN-_QiU" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-muted-foreground transition-colors hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio & Services */}
          <div>
            <h3 className="font-headline text-lg font-semibold">Portfolios</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/portfolio/bridal_makeup_kerala" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Bridal Portfolio
                </Link>
              </li>
              <li>
                <Link href="/portfolio/commercial_makeup_kerala" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Commercial Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-headline text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 81369 32606</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>makeupbymariya.in@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {year} Mariya Makeup Artistry. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
