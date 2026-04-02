
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function getImage(id: string): ImagePlaceholder {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image with id ${id} not found`);
  }
  return image;
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

export const stats = [
  { value: 1000, label: 'Brides Transformed', symbol: '+' },
  { value: 10, label: 'Years of Experience', symbol: '+' },
  { value: 100, label: 'Professional Projects', symbol: '+' },
];

export const bridalPortfolio = [
  { id: 'bridal-1', image: getImage('bridal-1') },
  { id: 'bridal-2', image: getImage('bridal-2') },
  { id: 'bridal-3', image: getImage('bridal-3') },
  { id: 'bridal-4', image: getImage('bridal-4') },
];

export const commercialPortfolio = [
  { id: 'commercial-1', image: getImage('commercial-1') },
  { id: 'commercial-2', image: getImage('commercial-2') },
  { id: 'commercial-3', image: getImage('commercial-3') },
  { id: 'commercial-4', image: getImage('commercial-4') },
];

export const brandLogos = [
  { name: 'Lulu Celebrate', logo: getImage('logo-dummy-1').imageUrl },
  { name: 'Seematti', logo: getImage('logo-dummy-2').imageUrl },
  { name: 'Bhima', logo: getImage('logo-dummy-3').imageUrl },
  { name: 'Milan designs', logo: getImage('logo-dummy-4').imageUrl },
  { name: 'Susan Lawrance', logo: getImage('logo-dummy-5').imageUrl },
  { name: 'T&M Signature', logo: getImage('logo-dummy-1').imageUrl },
  { name: 'Rose story', logo: getImage('logo-dummy-2').imageUrl },
  { name: 'Indras Designs', logo: getImage('logo-dummy-3').imageUrl },
  { name: 'Silpaa', logo: getImage('logo-dummy-4').imageUrl },
  { name: 'Parakkat Jewelry', logo: getImage('logo-dummy-5').imageUrl },
];

export const makeupBrandsList = [
  'Fenty Beauty',
  'Dior',
  'NARS',
  'Charlotte Tilbury',
  'Armani Beauty',
  'MAC Cosmetics',
  'Huda Beauty',
  'Chanel',
];

export const makeupBrandLogos = [
  { name: 'Fenty Beauty', logo: getImage('logo-dummy-6').imageUrl },
  { name: 'Dior', logo: getImage('logo-dummy-7').imageUrl },
  { name: 'NARS', logo: getImage('logo-dummy-8').imageUrl },
  { name: 'MAC Cosmetics', logo: getImage('logo-dummy-9').imageUrl },
  { name: 'Chanel', logo: getImage('logo-dummy-10').imageUrl },
  { name: 'Charlotte Tilbury', logo: getImage('logo-dummy-6').imageUrl },
  { name: 'Armani Beauty', logo: getImage('logo-dummy-7').imageUrl },
  { name: 'Huda Beauty', logo: getImage('logo-dummy-8').imageUrl },
];

export const testimonials = [
  {
    name: "Anjali S.",
    role: "Bride",
    avatar: getImage('testimonial-1'),
    comment: "Mariya made me feel like the most beautiful bride ever. My makeup stayed perfect all day!"
  },
  {
    name: "Meera K.",
    role: "Bride",
    avatar: getImage('testimonial-2'),
    comment: "Perfect blend of natural and glam. I loved every detail."
  },
  {
    name: "Sneha V.",
    role: "Bride",
    avatar: getImage('testimonial-3'),
    comment: "Professional, Calm and extremely talented. Highly recommended makeup by Mariya."
  },
  {
    name: "Riya M.",
    role: "Celebrity Client",
    avatar: getImage('testimonial-1'),
    comment: "She understood my imagination instantly and delivered beyond expectations."
  },
  {
    name: "Pooja G.",
    role: "Bride",
    avatar: getImage('testimonial-2'),
    comment: "My wedding photos turned out stunning because of her flawless makeup."
  },
  {
    name: "Lakshmi N.",
    role: "Bride",
    avatar: getImage('testimonial-3'),
    comment: "Best bridal makeup artist in Ernakulam, truly magical work."
  },
  {
    name: "Divya P.",
    role: "Commercial Client",
    avatar: getImage('testimonial-1'),
    comment: "Mariya uses premium products and maintains great hygiene."
  },
  {
    name: "Kavya B.",
    role: "Bride",
    avatar: getImage('testimonial-2'),
    comment: "From Haldi to Reception, every look was unique and adoring."
  },
  {
    name: "Arathi J.",
    role: "Bride",
    avatar: getImage('testimonial-3'),
    comment: "Mariya’s experience clearly shows in her work."
  },
  {
    name: "Sandra W.",
    role: "Bride",
    avatar: getImage('testimonial-1'),
    comment: "Worth every penny. I felt confident and radiant on my big day."
  }
];

export const faqs = [
  {
    question: "How early should I book Bridal Makeup?",
    answer: "Ideally, 3-6 months before your wedding date."
  },
  {
    question: "Do you provide trial makeup?",
    answer: "Yes, bridal trials are available on request."
  },
  {
    question: "Which makeup products do you use?",
    answer: "Only professional, premium and skin-safe brands like Dior, NARS, and Fenty Beauty."
  },
  {
    question: "Is the makeup waterproof?",
    answer: "Yes, all bridal makeup is waterproof and long-lasting, designed for the Kerala climate."
  },
  {
    question: "Do you travel to venues?",
    answer: "Yes, services are available across Ernakulam, Thrissur, Kottayam and Alappuzha."
  },
  {
    question: "Can you customize the bridal look?",
    answer: "Absolutely. Every look is tailored to the bride’s preference, outfit, and facial structure."
  },
  {
    question: "Do you offer hairstyling?",
    answer: "Yes, complete bridal makeup and hairstyling packages are available."
  },
  {
    question: "How long does bridal makeup take?",
    answer: "Usually 2-3 hours depending on the complexity of the look."
  },
  {
    question: "Do you handle early morning weddings?",
    answer: "Yes, flexible timing is available for early morning ceremonies."
  },
  {
    question: "How can I book an appointment?",
    answer: "Contact Makeup by Mariya through the website's contact form or social media platforms."
  }
];

export const socialVideos = [
  {
    id: 'social-1',
    platform: 'Instagram',
    url: '#',
    image: getImage('social-1'),
  },
  {
    id: 'social-2',
    platform: 'YouTube',
    url: '#',
    image: getImage('social-2'),
  },
  {
    id: 'social-3',
    platform: 'Instagram',
    url: '#',
    image: getImage('social-3'),
  },
];
