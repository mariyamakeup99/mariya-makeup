
export type Product = {
  id: string;
  name: string;
  brand: string;
  category: 'Foundation' | 'Mascara' | 'Lipstick' | 'Highlighter' | 'Skincare';
  description: string;
  // A description of who this product is best for
  suitability: string;
  imageUrl: string;
  imageHint: string;
};

export const favoriteProducts: Product[] = [
  {
    id: 'prod-1',
    name: 'Pro Filt\'r Soft Matte Longwear Foundation',
    brand: 'Fenty Beauty',
    category: 'Foundation',
    description: 'A soft matte, longwear foundation with buildable, medium to full coverage, in a boundary-breaking range of 50 shades.',
    suitability: 'Excellent for oily and combination skin types due to its shine-controlling formula. Great for all-day wear.',
    imageUrl: 'https://picsum.photos/seed/prod1/400/400',
    imageHint: 'foundation bottle'
  },
  {
    id: 'prod-2',
    name: 'Luminous Silk Foundation',
    brand: 'Armani Beauty',
    category: 'Foundation',
    description: 'An award-winning, oil-free foundation that delivers buildable, medium coverage and a luminous, glowy-skin finish for a natural, flawless makeup look.',
    suitability: 'Perfect for normal, dry, and combination skin. It provides a radiant finish without feeling heavy.',
    imageUrl: 'https://picsum.photos/seed/prod2/400/400',
    imageHint: 'foundation bottle'
  },
  {
    id: 'prod-3',
    name: 'Better Than Sex Volumizing Mascara',
    brand: 'Too Faced',
    category: 'Mascara',
    description: 'An intensely black, volumizing mascara for the most luscious, dramatic, and lifted lashes. The hourglass-shaped brush separates and coats each lash.',
    suitability: 'Ideal for those wanting dramatic volume and length. Not specifically waterproof, but a waterproof version is available.',
    imageUrl: 'https://picsum.photos/seed/prod3/400/400',
    imageHint: 'mascara wand'
  },
  {
    id: 'prod-4',
    name: 'Pillow Talk Lipstick',
    brand: 'Charlotte Tilbury',
    category: 'Lipstick',
    description: 'A dreamy matte lipstick in an iconic nude-pink shade that is on everyone\'s lips. The formula is enriched with antioxidant Lipstick Tree & Orchid Extract for a cashmere-soft finish.',
    suitability: 'A universally flattering nude-pink shade that suits all skin tones. The matte formula is long-lasting but comfortable.',
    imageUrl: 'https://picsum.photos/seed/prod4/400/400',
    imageHint: 'lipstick tube'
  },
  {
    id: 'prod-5',
    name: 'Shimmering Skin Perfector Pressed Highlighter',
    brand: 'BECCA',
    category: 'Highlighter',
    description: 'A best-selling, creamy, pressed highlighter for a luminous, high-impact glow. The formula melts into skin without looking glittery.',
    suitability: 'Comes in various shades to suit all skin tones. Perfect for achieving a buildable, radiant glow from subtle to blinding.',
    imageUrl: 'https://picsum.photos/seed/prod5/400/400',
    imageHint: 'highlighter compact'
  },
  {
    id: 'prod-6',
    name: 'Tatcha The Dewy Skin Cream',
    brand: 'Tatcha',
    category: 'Skincare',
    description: 'A rich, moisturizing cream that provides intense hydration and a dewy, healthy glow. Packed with Japanese purple rice, algae, and hyaluronic acid.',
    suitability: 'Best for dry and combination skin, or anyone needing a boost of hydration, especially in colder months. Can be too heavy for very oily skin.',
    imageUrl: 'https://picsum.photos/seed/prod6/400/400',
    imageHint: 'cream jar'
  }
];
