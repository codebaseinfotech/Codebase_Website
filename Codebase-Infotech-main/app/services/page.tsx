import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import ServicesHero from "@/components/services-hero"
import ServiceCategories from "@/components/service-categories"
import ServiceProcess from "@/components/service-process"
import ServiceCTA from "@/components/service-cta"
import Footer from "@/components/footer"
import JsonLd, {
  generateBreadcrumbSchema,
  generateServiceSchema,
} from "@/components/json-ld"
import { siteConfig, generateUrl } from "@/lib/seo-config"

// ============================================================
// Services Page SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: "Our Services — Custom Software, Mobile Apps, Web & More",
  description:
    "Explore our comprehensive IT services including custom software development, mobile app development, web development, UI/UX design, cross-platform solutions, CMS development, full-stack development, and digital marketing. Get a free consultation today.",
  keywords: [
    "IT services",
    "custom software development services",
    "mobile app development services",
    "web development company",
    "UI/UX design services",
    "cross-platform app development",
    "CMS development",
    "full-stack development services",
    "digital marketing agency",
    "cloud solutions",
    "API development",
    "e-commerce development",
    "enterprise software solutions",
    "hire dedicated developers",
  ],
  openGraph: {
    title: "Our Services — Custom Software, Mobile Apps, Web Development & More",
    description:
      "Comprehensive IT services from Codebase Infotech: custom software, mobile apps, web development, UI/UX design, and digital marketing.",
    url: generateUrl("/services"),
    type: "website",
  },
  twitter: {
    title: "IT Services by Codebase Infotech",
    description:
      "Custom software, mobile apps, web development, UI/UX design & digital marketing services.",
  },
  alternates: {
    canonical: generateUrl("/services"),
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <JsonLd
        data={generateServiceSchema(
          "IT Solutions & Software Development",
          "Comprehensive IT services including custom software development, mobile app development, web development, UI/UX design, and digital marketing.",
          generateUrl("/services")
        )}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Services", url: generateUrl("/services") },
        ])}
      />

      <Navigation />
      <main>
        <ServicesHero />
        <ServiceCategories />
        <ServiceProcess />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  )
}
