import BlogSection from './sections/blog-section';
import FeaturedWorkSection from './sections/featured-work-section';
import HeroSection from './sections/hero-section';
import TestimonialsSection from './sections/testimonials-section';
import VenturesSection from './sections/ventures-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <VenturesSection />
      <BlogSection />
    </>
  );
}
