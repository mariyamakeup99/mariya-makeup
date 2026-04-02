
'use server';

/**
 * @fileOverview This file contains a Genkit flow for recommending products from Mariya's favorites list.
 *
 * recommendProducts - A function that takes a user query and returns a list of recommended product IDs and reasons.
 * RecommendProductsInput - The input type for the recommendProducts function.
 * RecommendProductsOutput - The return type for the recommendProducts function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { favoriteProducts, Product } from '@/lib/products';

const RecommendProductsInputSchema = z.object({
  query: z
    .string()
    .describe(
      'The user\'s request for a product recommendation. e.g., "I have oily skin and need a good foundation."'
    ),
});
export type RecommendProductsInput = z.infer<typeof RecommendProductsInputSchema>;

const RecommendedProductSchema = z.object({
    productId: z.string().describe("The unique ID of the recommended product."),
    reason: z.string().describe("A brief, personalized explanation of why this product is a great fit for the user's query.")
})

const RecommendProductsOutputSchema = z.object({
  recommendations: z
    .array(RecommendedProductSchema)
    .describe(
      'An array of recommended products, each with an ID and a reason for the recommendation.'
    ),
  preface: z.string().describe("A short, friendly introductory sentence to the recommendations.")
});
export type RecommendProductsOutput = z.infer<typeof RecommendProductsOutputSchema>;

// Convert product list to a simplified string for the prompt
const productListForPrompt = favoriteProducts
  .map(
    (p: Product) =>
      `ID: ${p.id}, Name: ${p.name}, Brand: ${p.brand}, Category: ${p.category}, Description: ${p.description}, Suitability: ${p.suitability}`
  )
  .join('\n');

export async function recommendProducts(
  input: RecommendProductsInput
): Promise<RecommendProductsOutput> {
  return recommendProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendProductsPrompt',
  input: { schema: RecommendProductsInputSchema },
  output: { schema: RecommendProductsOutputSchema },
  prompt: `You are Mariya, an expert makeup artist. A user is asking for a product recommendation.

Your task is to analyze the user's query and recommend up to 3 products from your list of favorites that best match their needs.

For each recommendation, you MUST provide the product ID and a personalized reason explaining why it's a good choice for them. Start your response with a friendly preface.

**User Query:**
"{{{query}}}"

**Your Favorite Products (Product List):**
${productListForPrompt}

Based on the user's query, provide your recommendations in the specified output format.
`,
});

const recommendProductsFlow = ai.defineFlow(
  {
    name: 'recommendProductsFlow',
    inputSchema: RecommendProductsInputSchema,
    outputSchema: RecommendProductsOutputSchema,
  },
  async input => {
    const { output } = await prompt(input);
    return output!;
  }
);
