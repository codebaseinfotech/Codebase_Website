import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import JsonLd, {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/components/json-ld"
import { siteConfig, generateUrl } from "@/lib/seo-config"

// ============================================================
// Contact Page SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: "Contact Us — Get in Touch for a Free Consultation",
  description:
    "Contact Codebase Infotech for a free project consultation. Reach out to discuss your software development, mobile app, web development, or digital marketing needs. We respond within 24 hours.",
  keywords: [
    "contact Codebase Infotech",
    "free IT consultation",
    "software development inquiry",
    "get a quote",
    "hire developers",
    "project consultation",
    "contact software company",
    "IT support",
    "business inquiry",
    "schedule a call",
    "free project estimate",
  ],
  openGraph: {
    title: "Contact Codebase Infotech — Free Project Consultation",
    description:
      "Get in touch with Codebase Infotech to discuss your software development needs. Free consultation, fast response within 24 hours.",
    url: generateUrl("/contact"),
    type: "website",
  },
  twitter: {
    title: "Contact Us | Codebase Infotech",
    description:
      "Reach out for a free project consultation. We respond within 24 hours.",
  },
  alternates: {
    canonical: generateUrl("/contact"),
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <JsonLd data={generateLocalBusinessSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Contact Us", url: generateUrl("/contact") },
        ])}
      />
      <JsonLd
        data={generateFAQSchema([
          {
            question: "How can I get a free consultation?",
            answer:
              "Simply fill out our contact form or email us at info@codebaseinfotech.com. We respond within 24 hours with a detailed project assessment.",
          },
          {
            question: "What services does Codebase Infotech offer?",
            answer:
              "We offer custom software development, mobile app development, web development, UI/UX design, cross-platform solutions, CMS development, and digital marketing services.",
          },
          {
            question: "How long does a typical project take?",
            answer:
              "Project timelines vary based on complexity and scope. A simple website takes 2-4 weeks, while a full-featured mobile app may take 8-16 weeks. We provide detailed timelines during our initial consultation.",
          },
          {
            question: "Do you offer post-launch support?",
            answer:
              "Yes, we provide comprehensive post-launch support including bug fixes, feature updates, performance monitoring, and ongoing maintenance.",
          },
        ])}
      />

      <Navigation />
      <main>
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <ContactMap />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
