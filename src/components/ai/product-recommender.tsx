'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { recommendProductsAction } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Sparkles, Bot, ShoppingBag } from 'lucide-react';
import { favoriteProducts, Product } from '@/lib/products';
import Image from 'next/image';

const initialState: { result: { recommendations: ({ productId: string, reason: string })[], preface: string } | null; error?: string | null } = {
  result: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? 'Thinking...' : <> <Sparkles className="mr-2 h-4 w-4" /> Get Recommendations </>}
    </Button>
  );
}

function RecommendationList({ result }: { result: { recommendations: ({ productId: string, reason: string })[], preface: string } | null }) {
  if (!result || result.recommendations.length === 0) {
    return (
      <Alert className="mt-6">
          <ShoppingBag className="h-4 w-4" />
          <AlertTitle>Your recommendations will appear here!</AlertTitle>
          <AlertDescription>
              Tell me what you're looking for, and I'll suggest the perfect products from my collection of favorites.
          </AlertDescription>
      </Alert>
    );
  }

  const recommendedProducts: ({ product: Product, reason: string })[] = result.recommendations.map(rec => ({
    product: favoriteProducts.find(p => p.id === rec.productId)!,
    reason: rec.reason
  })).filter(item => item.product);

  return (
    <div className="mt-8 space-y-8">
        <p className="text-center text-muted-foreground">{result.preface}</p>
        <div className="space-y-6">
        {recommendedProducts.map(({ product, reason }) => (
            <Card key={product.id} className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="relative h-48 md:h-full">
                        <Image src={product.imageUrl} alt={product.name} fill className="object-cover" data-ai-hint={product.imageHint} />
                    </div>
                    <div className="md:col-span-2">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                            <CardDescription>{product.brand} - {product.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                            <Alert variant="default" className="bg-accent/10">
                                <Bot className="h-4 w-4" />
                                <AlertTitle className="font-semibold text-accent">Mariya's Recommendation</AlertTitle>
                                <AlertDescription>
                                    {reason}
                                </AlertDescription>
                            </Alert>
                        </CardContent>
                    </div>
                </div>
            </Card>
        ))}
        </div>
    </div>
  );
}


export function ProductRecommender() {
  const [state, formAction] = useActionState(recommendProductsAction, initialState);

  return (
    <div>
        <Card>
            <CardContent className="pt-6">
                <form action={formAction} className="space-y-4">
                <Textarea
                    name="query"
                    placeholder="e.g., 'I have oily skin and I'm looking for a foundation that will last all day without getting shiny.'"
                    className="min-h-[100px] text-base"
                    required
                />
                <SubmitButton />
                </form>
            </CardContent>
        </Card>

        {state?.error && (
            <Alert variant="destructive" className="mt-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
            </Alert>
        )}
        
        <div className="mt-6">
            <RecommendationList result={state.result} />
        </div>
    </div>
  );
}
