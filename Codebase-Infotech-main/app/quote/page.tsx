import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import QuoteGenerator from "@/components/quote-generator"
import JsonLd, { generateBreadcrumbSchema } from "@/components/json-ld"
import { siteConfig, generateUrl } from "@/lib/seo-config"

// ============================================================
// Quote / Tech Inspiration Page SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: "Tech Inspiration — Programming & Technology Quotes",
  description:
    "Get inspired with curated quotes about technology, programming, innovation, and software development. A collection of motivational quotes from tech leaders, developers, and visionaries.",
  keywords: [
    "tech quotes",
    "programming quotes",
    "technology inspiration",
    "developer motivation",
    "software development quotes",
    "innovation quotes",
    "coding inspiration",
    "tech leader quotes",
    "motivational tech quotes",
  ],
  openGraph: {
    title: "Tech Inspiration — Programming & Technology Quotes",
    description:
      "Get inspired with curated quotes about technology, programming, and innovation from tech leaders worldwide.",
    url: generateUrl("/quote"),
    type: "website",
  },
  twitter: {
    title: "Tech Inspiration Quotes | Codebase Infotech",
    description:
      "Curated quotes about technology, programming, and innovation.",
  },
  alternates: {
    canonical: generateUrl("/quote"),
  },
}

export default function QuotePage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Tech Inspiration", url: generateUrl("/quote") },
        ])}
      />

      <Navigation />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Tech <span className="text-primary">Inspiration</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get inspired with random quotes about technology, programming, and innovation
            </p>
          </div>
          <QuoteGenerator />
        </div>
      </main>
      <Footer />
    </div>
  )
}
