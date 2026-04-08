import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import AboutHero from "@/components/about-hero"
import CompanyStory from "@/components/company-story"
import MissionVision from "@/components/mission-vision"
import TeamSection from "@/components/team-section"
import CompanyValues from "@/components/company-values"
import Footer from "@/components/footer"
import JsonLd, {
  generateBreadcrumbSchema,
  generateOrganizationSchema,
} from "@/components/json-ld"
import { siteConfig, generateUrl } from "@/lib/seo-config"

// ============================================================
// About Page SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Vision",
  description:
    "Learn about Codebase Infotech — a passionate team of developers, designers, and digital strategists dedicated to delivering innovative IT solutions. Discover our story, mission, vision, and core values that drive us to empower businesses worldwide.",
  keywords: [
    "about Codebase Infotech",
    "IT company story",
    "software development team",
    "our mission and vision",
    "technology company values",
    "software company about",
    "development team",
    "company culture",
    "tech innovation team",
    "experienced developers",
  ],
  openGraph: {
    title: "About Codebase Infotech — Our Story, Mission & Vision",
    description:
      "Discover the story, mission, and values behind Codebase Infotech — a team dedicated to delivering innovative IT solutions worldwide.",
    url: generateUrl("/about"),
    type: "website",
  },
  twitter: {
    title: "About Codebase Infotech — Our Story & Mission",
    description:
      "Meet the passionate team behind Codebase Infotech. Discover our story, mission, and values.",
  },
  alternates: {
    canonical: generateUrl("/about"),
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About Us", url: generateUrl("/about") },
        ])}
      />

      <Navigation />
      <main>
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <CompanyValues />
        {/* <TeamSection /> */}
      </main>
      <Footer />
    </div>
  )
}
