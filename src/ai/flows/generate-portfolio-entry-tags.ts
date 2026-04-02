'use server';

/**
 * @fileOverview This file contains a Genkit flow for automatically generating descriptive and relevant brand tags for portfolio entries.
 *
 * generatePortfolioEntryTags - A function that takes a description of a portfolio entry and returns a list of brand tags.
 * GeneratePortfolioEntryTagsInput - The input type for the generatePortfolioEntryTags function.
 * GeneratePortfolioEntryTagsOutput - The return type for the generatePortfolioEntryTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioEntryTagsInputSchema = z.object({
  description: z
    .string()
    .describe(
      'A detailed description of the portfolio entry, including the makeup techniques used, brands featured, and the overall theme or style.'
    ),
});
export type GeneratePortfolioEntryTagsInput = z.infer<typeof GeneratePortfolioEntryTagsInputSchema>;

const GeneratePortfolioEntryTagsOutputSchema = z.object({
  tags: z
    .array(z.string())
    .describe(
      'An array of descriptive and relevant brand tags for the portfolio entry.'
    ),
});
export type GeneratePortfolioEntryTagsOutput = z.infer<typeof GeneratePortfolioEntryTagsOutputSchema>;

export async function generatePortfolioEntryTags(
  input: GeneratePortfolioEntryTagsInput
): Promise<GeneratePortfolioEntryTagsOutput> {
  return generatePortfolioEntryTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioEntryTagsPrompt',
  input: {schema: GeneratePortfolioEntryTagsInputSchema},
  output: {schema: GeneratePortfolioEntryTagsOutputSchema},
  prompt: `You are an expert in makeup artistry and branding. Given the description of a portfolio entry, generate a list of descriptive and relevant brand tags that can be used to categorize and index the work on a blog.

Description: {{{description}}}

Tags:`, // Handlebars syntax, accesses input.description
});

const generatePortfolioEntryTagsFlow = ai.defineFlow(
  {
    name: 'generatePortfolioEntryTagsFlow',
    inputSchema: GeneratePortfolioEntryTagsInputSchema,
    outputSchema: GeneratePortfolioEntryTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
