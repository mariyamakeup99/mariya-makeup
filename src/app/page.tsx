import { HeroSection } from '@/components/home/hero-section';
import { AboutSection } from '@/components/home/about-section';
import { StatsSection } from '@/components/home/stats-section';
import { BridalPortfolioSection } from '@/components/home/bridal-portfolio-section';
import { CommercialPortfolioSection } from '@/components/home/commercial-portfolio-section';
import { LogoCloud } from '@/components/home/logo-cloud';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { BlogSection } from '@/components/home/blog-section';
import { SocialSection } from '@/components/home/social-section';
import { FloatingRecommender } from '@/components/ai/floating-recommender';
import { MakeupBrandsSection } from '@/components/home/makeup-brands-section';
import { FAQSection } from '@/components/home/faq-section';
import { WhyChooseSection } from '@/components/home/why-choose-section';
import FloatingPortfolio from '@/components/home/floating-portfolio-section';


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />

      <AboutSection />
      <FloatingPortfolio />
      <WhyChooseSection />

      <LogoCloud />
      <BridalPortfolioSection />
      <CommercialPortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <SocialSection />
      <BlogSection />

    </div>
  );
}
