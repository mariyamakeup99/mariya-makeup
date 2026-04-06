export type ProfileType = 'Influencer' | 'Celebrity';

export interface CommercialProfile {
  name: string;
  slug: string;
  description: string;
  image: string;
  type: ProfileType;
}

const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

export const influencersData = [
  {
    name: 'Amitha Jobin',
    description: 'Lifestyle and fashion influencer known for winning Best Lifestyle Content Creator and Best Fashion Content Creator Runner-Up titles, inspiring audiences with elegant, engaging content.',
    image: '/images/commercial/amitha.webp'
  },
  {
    name: 'Alda Davis',
    description: 'Dentist and fashion designer who creates lifestyle content, inspiring confidence, creative style, beauty, authentic engagement, and professional excellence online.',
    image: '/images/commercial/alda.webp'
  },
  {
    name: 'Maria Dominic',
    description: 'Fashion and lifestyle influencer creating stylish, engaging content that inspires confidence, creativity, authentic expression, and modern personal style online.',
    image: '/images/celebrities/mariyadominic.JPG'
  },
  {
    name: 'Jisma Jiji Kizhakkarakattu',
    description: 'Lifestyle and fashion influencer sharing creative content that inspires confidence, beauty, authenticity, and stylish personal expression online.',
    image: '/images/celebrities/jisma.webp'
  },
  {
    name: 'Keep It Stylish by Ammu',
    description: 'Professional stylist and fashion influencer creating trendy content that inspires confidence, beauty, and modern personal style.',
    image: '/images/celebrities/ammu.jpg'
  },
  {
    name: 'Resh Sebu',
    description: 'Model and lifestyle influencer creating stylish, engaging content that inspires confidence, beauty, personal style, and authentic expression online.',
    image: '/images/commercial/resh.webp'
  },
  {
    name: 'Veena Mukundan',
    description: 'Artist and lifestyle creator sharing inspiring fashion, beauty, and creative content rooted in elegance, confidence, and personal expression.',
    image: '/images/commercial/veena.jpg'
  },
  {
    name: 'Arya Menon',
    description: 'Fashion and lifestyle creator inspiring audiences with bold style, authentic content, confident presence, and creative personal expression.',
    image: '/images/commercial/aryamenon.jpg'
  },
  {
    name: 'Shwetha Poornima',
    description: 'Fashion and lifestyle content creator known for her elegant style, confident presence, and strong digital influence.',
    image: '/images/commercial/arch.jpg'
  },
  {
    name: 'Archita (Style With Archita)',
    description: 'Fashion and style creator known for her chic looks, trend-setting outfits, and engaging social media presence.',
    image: '/images/commercial/shwe.jpg'
  },
  {
    name: 'Sreevidya Mullachery',
    description: 'Fashion and lifestyle influencer known for her elegant style, creative content, and strong social media presence.',
    image: '/images/celebrities/sree.jpg'
  },
  {
    name: 'Abhi Bogatinovski',
    description: 'Lifestyle creator and visual storyteller known for his engaging content, modern style, and vibrant personal brand.',
    image: '/images/celebrities/abhi.jpg'
  },
  {
    name: 'Kalyaani',
    description: 'Fashion and lifestyle influencer known for her chic aesthetics, engaging content, and strong personal style.',
    image: '/images/celebrities/celeb1.webp'
  },
];

export const celebritiesData = [
  {
    name: 'Jayasurya',
    bio: 'Indian actor, producer, and singer with over 100 films. Winner of National and Kerala State Film Awards. Known for versatile roles and upcoming projects like Kathanar - The Wild Sorcerer.',
    image: '/images/celebrities/jaya.jpg'
  },
  {
    name: 'Aparna Balamurali',
    bio: 'National Film Award-winning actress and playback singer known for Maheshinte Prathikaaram and Soorarai Pottru.',
    image: '/images/commercial/bala.jpg'
  },
  {
    name: 'Aparna Das',
    bio: 'Filmfare Critics Award-winning actress for Dada (2023), known for her work in Malayalam and Tamil cinema including Beast (2022).',
    image: '/images/celebrities/aparna.jpg'
  },
  {
    name: 'Deepa Thomas',
    bio: 'Actress and entrepreneur known for Home (2021) and the upcoming Rao Bahadur (2026). Founder of a multi-million dollar textile enterprise.',
    image: '/images/port2.JPG'
  },
  {
    name: 'Anarkali Marikar',
    bio: 'Prominent Malayalam film actress known for her debut in Aanandam (2016) and the upcoming film Vala.',
    image: '/images/celebrities/anarkali.jpg'
  },
  {
    name: 'Arjun Syam Gopan',
    bio: 'Model, former athlete, and actor. First runner-up of Bigg Boss Malayalam Season 6, known for his debut in Mirage (2025).',
    image: '/images/commercial/arjun.jpg'
  },
  {
    name: 'Wafa Khadija Rahman',
    bio: 'Actress, model, and lawyer known for Varane Avashyamund (2020) and Madhuram Jeevamruthabindu (2025).',
    image: '/images/celebrities/wafa.jpg'
  },
  {
    name: 'Aparna Vinod',
    bio: 'Actress known for Njan Ninnodu Koodeyund and her role in the Tamil film Kohinoor.',
    image: '/images/celebrities/aparna-vinod.jpg'
  },
  {
    name: 'Gowry Lekshmi',
    bio: 'Composer, singer, and music producer known for Godha and her independent music video Thoni.',
    image: '/images/commercial/gowry.jpg'
  },
  {
    name: 'Mridula Murali',
    bio: 'South Indian playback singer and Kerala State Award winner (2023), active across Malayalam, Tamil, Telugu, and Kannada cinema.',
    image: '/images/commercial/mridula.jpg'
  },
];

export const influencers: CommercialProfile[] = influencersData.map((item) => ({
  name: item.name,
  slug: generateSlug(item.name),
  description: item.description,
  image: item.image,
  type: 'Influencer',
}));

export const celebrities: CommercialProfile[] = celebritiesData.map((item) => ({
  name: item.name,
  slug: generateSlug(item.name),
  description: item.bio,
  image: item.image,
  type: 'Celebrity',
}));

export const allCommercialProfiles: CommercialProfile[] = [...influencers, ...celebrities];

export function getCommercialProfileBySlug(slug: string): CommercialProfile | undefined {
  return allCommercialProfiles.find((profile) => profile.slug === slug);
}
