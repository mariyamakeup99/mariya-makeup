'use client';

import { useState } from 'react';
import { Instagram, Youtube, Facebook, MessageCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/makeup_by_mariyaaa?igsh=ZHJqcXVndjJ1eTc5', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com/@makeupbymariya-youtube?si=LnaOMLiSTBN-_QiU', label: 'YouTube' },
  { icon: Facebook, href: 'https://www.facebook.com/share/18DfodRJJD/', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://wa.me/918136932606', label: 'WhatsApp' },
];

export function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-4 z-50 flex flex-col-reverse items-center gap-4">
      {/* Trigger Button - Only this has a fully transparent background */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "bg-transparent text-primary p-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 z-10 border-2 border-primary/20 hover:border-primary/50 flex items-center justify-center",
          isOpen ? "text-accent border-accent/50" : ""
        )}
        aria-label="Toggle social links"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Expanded Links - These have a slight background for definition */}
      <div className={cn(
        "flex flex-col gap-4 transition-all duration-500 ease-in-out",
        isOpen 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      )}>
        {socialLinks.map((social, index) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "bg-card/80 backdrop-blur-md p-3 rounded-full transition-all duration-300 hover:scale-120 group hover:text-primary text-muted-foreground border border-border/50 hover:border-primary/50 shadow-sm flex items-center justify-center",
            )}
            style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </div>
  );
}
