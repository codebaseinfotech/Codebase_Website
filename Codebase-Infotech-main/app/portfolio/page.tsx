import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import PortfolioHero from "@/components/portfolio-hero"
import ProjectShowcase from "@/components/project-showcase"
import ProjectStats from "@/components/project-stats"
import PortfolioCTA from "@/components/portfolio-cta"
import Footer from "@/components/footer"
import JsonLd, { generateBreadcrumbSchema } from "@/components/json-ld"
import { siteConfig, generateUrl } from "@/lib/seo-config"

// ============================================================
// Portfolio Page SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: "Portfolio — Our Work & Case Studies",
  description:
    "Browse the portfolio of Codebase Infotech — featuring successful projects in mobile app development, web applications, e-commerce platforms, enterprise software, and more. See how we've helped businesses transform digitally.",
  keywords: [
    "software development portfolio",
    "mobile app portfolio",
    "web development projects",
    "case studies",
    "app development showcase",
    "e-commerce projects",
    "enterprise software projects",
    "client success stories",
    "project showcase",
    "development work samples",
    "Codebase Infotech projects",
  ],
  openGraph: {
    title: "Portfolio — Projects & Case Studies | Codebase Infotech",
    description:
      "Explore our portfolio of successful projects in mobile apps, web applications, e-commerce platforms, and enterprise software.",
    url: generateUrl("/portfolio"),
    type: "website",
  },
  twitter: {
    title: "Our Portfolio | Codebase Infotech",
    description:
      "Browse successful projects and case studies from Codebase Infotech.",
  },
  alternates: {
    canonical: generateUrl("/portfolio"),
  },
}

import { getAllProjects } from "@/lib/project-service"

export const dynamic = "force-dynamic"

export default async function PortfolioPage() {
  const projects = await getAllProjects()

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Portfolio", url: generateUrl("/portfolio") },
        ])}
      />

      <Navigation />
      <main>
        <PortfolioHero />
        <ProjectShowcase initialProjects={projects} />
        <ProjectStats />
        <PortfolioCTA />
      </main>
      <Footer />
    </div>
  )
}
