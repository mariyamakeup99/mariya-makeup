
'use server';

import { generatePortfolioEntryTags } from '@/ai/flows/generate-portfolio-entry-tags';
import { recommendProducts, RecommendProductsOutput } from '@/ai/flows/recommend-products';
import { z } from 'zod';

// --- AI Tag Generation Action ---
const generateTagsSchema = z.object({
  description: z.string().min(10, { message: 'Description must be at least 10 characters.' }),
});

type GenerateTagsState = {
  message: string | null;
  tags: string[];
  error?: string | null;
};

export async function generateTagsAction(
  prevState: GenerateTagsState,
  formData: FormData
): Promise<GenerateTagsState> {
  const parsed = generateTagsSchema.safeParse({
    description: formData.get('description'),
  });

  if (!parsed.success) {
    return {
      message: 'Invalid input.',
      tags: [],
      error: parsed.error.issues.map((i) => i.message).join(' '),
    };
  }

  try {
    const result = await generatePortfolioEntryTags({ description: parsed.data.description });
    return {
      message: 'Tags generated successfully!',
      tags: result.tags,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'Failed to generate tags.',
      tags: [],
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}


// --- Contact Form Submission Action ---
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(10),
});

type ContactFormState = {
  success: boolean;
  message: string;
}

export async function submitContactForm(
    values: z.infer<typeof contactFormSchema>
): Promise<ContactFormState> {
    const parsed = contactFormSchema.safeParse(values);

    if (!parsed.success) {
        return {
            success: false,
            message: 'Invalid form data. Please check your inputs.',
        };
    }

    // In a real application, you would process the data here:
    // - Send an email notification
    // - Save to a database
    // - etc.
    console.log('New contact form submission:');
    console.log(parsed.data);

    // Simulate a successful submission
    return {
        success: true,
        message: 'Form submitted successfully!',
    };
}


// --- AI Product Recommendation Action ---
const recommendProductsSchema = z.object({
  query: z.string().min(10, { message: 'Your request must be at least 10 characters.' }),
});

type RecommendProductsState = {
  result: RecommendProductsOutput | null;
  error?: string | null;
};

export async function recommendProductsAction(
  prevState: RecommendProductsState,
  formData: FormData
): Promise<RecommendProductsState> {
  const parsed = recommendProductsSchema.safeParse({
    query: formData.get('query'),
  });

  if (!parsed.success) {
    return {
      result: null,
      error: parsed.error.issues.map((i) => i.message).join(' '),
    };
  }

  try {
    const result = await recommendProducts({ query: parsed.data.query });
    return {
      result,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      result: null,
      error: 'An unexpected AI error occurred. Please try again.',
    };
  }
}
