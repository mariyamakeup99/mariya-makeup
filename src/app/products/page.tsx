import { ProductRecommender } from "@/components/ai/product-recommender";
import { Sparkles } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center">
            <Sparkles className="h-12 w-12 text-primary" />
        </div>
        <h1 className="mt-4 font-headline text-4xl font-bold md:text-5xl">
          Mariya's AI Product Recommender
        </h1>
        <p className="mt-4 text-lg text-muted-foreground text-balance">
          Not sure which product is right for you? Describe your needs, skin type, or desired look, and I'll give you a personalized recommendation from my list of tried-and-true favorites.
        </p>
        <div className="mt-12 text-left">
          <ProductRecommender />
        </div>
      </div>
    </div>
  );
}
