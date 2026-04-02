'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Sparkles } from 'lucide-react';
import { ProductRecommender } from '@/components/ai/product-recommender';

export function FloatingRecommender() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="fixed bottom-8 right-8 z-50 bg-transparent p-0 border-0 transition-transform hover:scale-110 focus:outline-none"
        >
          <Sparkles className="h-10 w-10 sm:h-12 sm:w-12 animate-glitter text-primary drop-shadow-lg" />
          <span className="sr-only">Open AI Product Recommender</span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <div className="flex justify-center">
            <Sparkles className="h-12 w-12 text-primary" />
          </div>
          <DialogTitle className="text-center font-headline text-2xl">
            AI Product Recommender
          </DialogTitle>
          <DialogDescription className="text-center text-balance">
            Not sure which product is right for you? Describe your needs, skin type, or desired look, and I'll give you a personalized recommendation from my list of tried-and-true favorites.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 max-h-[60vh] overflow-y-auto p-1">
          <ProductRecommender />
        </div>
      </DialogContent>
    </Dialog>
  );
}
