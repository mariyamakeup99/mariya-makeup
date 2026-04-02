'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { generateTagsAction } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb } from 'lucide-react';

const initialState: { message: string | null; tags: string[]; error?: string | null } = {
  message: null,
  tags: [],
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? 'Generating...' : 'Generate Tags'}
    </Button>
  );
}

export function TagGeneratorForm() {
  const [state, formAction] = useActionState(generateTagsAction, initialState);

  return (
    <Card>
      <CardContent className="pt-6">
        <form action={formAction} className="space-y-6">
          <Textarea
            name="description"
            placeholder="e.g., 'A classic bridal look featuring Dior foundation, a subtle smokey eye with the NARS palette, and Fenty Beauty lip gloss...'"
            className="min-h-[150px] text-base"
            required
          />
          <SubmitButton />
        </form>

        {state?.error && (
            <Alert variant="destructive" className="mt-6">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.error}</AlertDescription>
            </Alert>
        )}

        {state?.tags && state.tags.length > 0 && (
          <div className="mt-8">
            <h3 className="font-headline text-xl text-center mb-4">Generated Tags</h3>
             <div className="flex flex-wrap gap-2 justify-center">
              {state.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {!state?.tags || state.tags.length === 0 && (
            <Alert className="mt-6">
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>How it works</AlertTitle>
                <AlertDescription>
                    Your generated tags will appear here. Try to be as descriptive as possible, mentioning specific brands and products for the best results.
                </AlertDescription>
            </Alert>
        )}
      </CardContent>
    </Card>
  );
}
