import type { Metadata } from "next"
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
import JsonLd, {
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
} from "@/components/json-ld"
import { siteConfig } from "@/lib/seo-config"

// ============================================================
// Homepage SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: "Codebase Infotech — Empowering Ideas with Code | Top IT Solutions Company",
  description:
    "Codebase Infotech is a top-tier IT solutions provider offering custom software development, mobile app development, web development, UI/UX design, cross-platform solutions, CMS development, full-stack development, and digital marketing services. Transform your business with us.",
  keywords: [
    "IT solutions company",
    "custom software development",
    "mobile app development company",
    "web development services",
    "UI/UX design agency",
    "digital marketing services",
    "React development company",
    "Node.js development",
    "Flutter app development",
    "full-stack development company",
    "cross-platform app development",
    "CMS development services",
    "Codebase Infotech",
    "best software company",
    "hire developers",
  ],
  openGraph: {
    title: "Codebase Infotech — Empowering Ideas with Code",
    description:
      "Top-tier IT solutions provider offering custom software development, mobile app development, web development, UI/UX design, and digital marketing services worldwide.",
    url: siteConfig.url,
    type: "website",
  },
  twitter: {
    title: "Codebase Infotech — Empowering Ideas with Code",
    description:
      "Top-tier IT solutions provider. Custom software, mobile apps, web development & more.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateWebSiteSchema()} />
      <JsonLd data={generateLocalBusinessSchema()} />

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
        {/* <IndustryExperience />
        <BlogPreview /> */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
