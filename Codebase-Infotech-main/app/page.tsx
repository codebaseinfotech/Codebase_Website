import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview"
import TechnologyStack from "@/components/technology-stack"
import WhyChooseUs from "@/components/why-choose-us"
import CompanyStats from "@/components/company-stats"
import RecentProjects from "@/components/recent-projects"
import ProcessOverview from "@/components/process-overview"
import TestimonialsPreview from "@/components/testimonials-preview"
import IndustryExperience from "@/components/industry-experience"
import BlogPreview from "@/components/blog-preview"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <TechnologyStack />
        <WhyChooseUs />
        <CompanyStats />
        {/* <RecentProjects /> */}
        <ProcessOverview />
        <TestimonialsPreview />
        <IndustryExperience />
        <BlogPreview />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
