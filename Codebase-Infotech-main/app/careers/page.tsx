import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CareersHero from "@/components/careers-hero"
import JobListings from "@/components/job-listings"

export const metadata: Metadata = {
  title: "Careers — Join Our Team | Codebase Infotech",
  description:
    "Explore exciting career opportunities at Codebase Infotech. Join our passionate team of developers, designers, and digital strategists and build the future of technology together.",
  keywords: [
    "careers at Codebase Infotech",
    "IT jobs India",
    "software developer jobs",
    "tech careers",
    "join our team",
    "hiring developers",
    "UI UX designer jobs",
    "React Native jobs",
    "Android developer jobs",
  ],
  openGraph: {
    title: "Careers — Join Our Team at Codebase Infotech",
    description:
      "We're hiring passionate developers, designers, and digital strategists. Explore open roles and grow your career with us.",
    type: "website",
  },
}

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <CareersHero />
        <JobListings />
      </main>
      <Footer />
    </div>
  )
}
