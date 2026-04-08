import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import TestimonialsHero from "@/components/testimonials-hero"
import TestimonialsSlider from "@/components/testimonials-slider"
import ClientLogos from "@/components/client-logos"
import TestimonialsCTA from "@/components/testimonials-cta"
import Footer from "@/components/footer"
import JsonLd, { generateBreadcrumbSchema } from "@/components/json-ld"
import { siteConfig, generateUrl } from "@/lib/seo-config"

// ============================================================
// Testimonials Page SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: "Testimonials — What Our Clients Say",
  description:
    "Read testimonials and reviews from our satisfied clients. Discover why businesses worldwide trust Codebase Infotech for their software development, mobile app, web development, and digital transformation projects.",
  keywords: [
    "client testimonials",
    "software company reviews",
    "Codebase Infotech reviews",
    "client success stories",
    "customer feedback",
    "development company ratings",
    "satisfied clients",
    "project reviews",
    "IT company testimonials",
    "trusted software partner",
  ],
  openGraph: {
    title: "Client Testimonials — Trusted by Businesses Worldwide | Codebase Infotech",
    description:
      "Read reviews and testimonials from our satisfied clients. Discover why businesses trust Codebase Infotech for their digital transformation.",
    url: generateUrl("/testimonials"),
    type: "website",
  },
  twitter: {
    title: "Client Testimonials | Codebase Infotech",
    description:
      "What our clients say about us. Read real testimonials and reviews.",
  },
  alternates: {
    canonical: generateUrl("/testimonials"),
  },
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Testimonials", url: generateUrl("/testimonials") },
        ])}
      />

      <Navigation />
      <main>
        <TestimonialsHero />
        <TestimonialsSlider />
        <ClientLogos />
        <TestimonialsCTA />
      </main>
      <Footer />
    </div>
  )
}
