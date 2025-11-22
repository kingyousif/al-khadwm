import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProductsSection } from "@/components/products-section";
import { IndustriesSection } from "@/components/industries-section";
import { WhyUsSection } from "@/components/why-us-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
