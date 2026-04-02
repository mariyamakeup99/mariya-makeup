'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import { Logo } from '@/components/logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // On internal pages, we always want the "scrolled" style (solid background) for visibility.
  // On the home page, we toggle based on scroll position.
  const isHomePage = pathname === '/';
  const showScrolledStyle = isHomePage ? (mounted ? isScrolled : false) : true;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 flex flex-col items-center transition-all duration-500 px-4",
      showScrolledStyle ? "pt-2 sm:pt-4" : "pt-4 sm:pt-6"
    )}>
      {/* Main Floating Navbar */}
      <nav 
        className={cn(
          'w-full transition-all duration-500 ease-in-out',
          showScrolledStyle 
            ? 'max-w-5xl' 
            : 'max-w-7xl'
        )}
      >
        <div 
          className={cn(
            'mx-auto transition-all duration-500 flex h-16 items-center justify-between px-6 sm:px-8 rounded-full',
            showScrolledStyle 
              ? 'bg-background/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]' 
              : 'bg-transparent border-transparent shadow-none'
          )}
        >
          <Logo className={cn(
            "transition-all duration-500", 
            showScrolledStyle ? "scale-90" : "scale-100",
            !showScrolledStyle && "brightness-0 invert" 
          )} />
          
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-2 lg:flex">
            <div className={cn(
              "flex items-center rounded-full px-2 py-1 mr-4 border transition-all duration-500",
              showScrolledStyle 
                ? "bg-secondary/10 border-white/10" 
                : "bg-transparent border-transparent"
            )}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-1.5 text-sm font-semibold transition-all duration-300 rounded-full',
                    showScrolledStyle
                      ? pathname === link.href 
                        ? 'text-primary bg-background shadow-sm' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-background/40'
                      : pathname === link.href
                        ? 'text-white bg-white/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Button 
              asChild 
              size="sm"
              className={cn(
                "rounded-full font-bold shadow-lg transition-all hover:scale-105 active:scale-95 px-5 h-10",
                showScrolledStyle 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/20"
                  : "bg-white text-black hover:bg-white/90 shadow-white/10"
              )}
            >
              <Link href="/contact" className="flex items-center gap-2">
                Book Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={cn(
                  "rounded-full transition-colors",
                  showScrolledStyle ? "hover:bg-primary/10 text-foreground" : "text-white hover:bg-white/10"
                )}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm border-l-0 bg-background/95 backdrop-blur-xl p-0">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-6 border-b border-border/40">
                    <Logo />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto py-8 px-6">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="text-primary font-headline text-sm mb-8 uppercase tracking-widest">Navigation</SheetDescription>
                    <nav className="flex flex-col gap-6">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.href}>
                          <Link
                            href={link.href}
                            className={cn(
                              'text-4xl font-headline font-bold transition-all flex items-center justify-between group',
                              pathname === link.href ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                            )}
                          >
                            {link.label}
                            <ArrowRight className={cn(
                              "h-8 w-8 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0",
                              pathname === link.href && "opacity-100 translate-x-0"
                            )} />
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                  </div>

                  <div className="p-8 mt-auto bg-secondary/5">
                     <Button asChild size="lg" className="w-full rounded-full bg-primary text-primary-foreground font-bold h-14 text-lg shadow-xl shadow-primary/20">
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Book Your Session
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
