import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WhatsAppCTA() {
  return (
    <Link
      href="https://wa.me/918136932606"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-4 left-4 md:bottom-8 md:left-6 z-50 flex items-center justify-center p-3 md:p-4 rounded-full",
        "bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
      )}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
    </Link>
  );
}
