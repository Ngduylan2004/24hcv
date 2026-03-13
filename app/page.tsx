import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { PartnersSection } from "@/components/partners-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { TechLines } from "@/components/tech-lines"
import { StatsSection } from "@/components/stats-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TeamSection } from "@/components/team-section"
import { FAQSection } from "@/components/faq-section"

export default function HomePage() {
  return (
    <main className="min-h-screen relative bg-background overflow-x-hidden">
      <TechLines />
      <Header />
      <HeroSection />
      <PartnersSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <TeamSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
