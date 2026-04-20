import type { Metadata } from "next"
import { siteConfig, generateTitle, generateUrl } from "@/lib/seo-config"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CareersHero from "@/components/careers-hero"
import JobListings from "@/components/job-listings"

import { connectDB } from "@/lib/mongodb"
import Job from "@/models/Job"

export const revalidate = 60; // optionally revalidate every 60s

export const metadata: Metadata = {
  title: generateTitle("Careers — Join Our Team"),
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
  alternates: {
    canonical: generateUrl("/careers"),
  },
  openGraph: {
    title: generateTitle("Careers — Join Our Team"),
    description:
      "We're hiring passionate developers, designers, and digital strategists. Explore open roles and grow your career with us.",
    url: generateUrl("/careers"),
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Careers at Codebase Infotech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: generateTitle("Careers — Join Our Team"),
    description:
      "We're hiring passionate developers, designers, and digital strategists. Explore open roles and grow your career with us.",
    images: [siteConfig.ogImage],
    creator: siteConfig.social.twitter,
  },
}

export default async function CareersPage() {
  await connectDB();
  const rawJobs = await Job.find({ isActive: true }).sort({ createdAt: -1 });
  const activeJobs = JSON.parse(JSON.stringify(rawJobs)); // serialize for client props

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <CareersHero />
        <JobListings initialJobs={activeJobs} />
      </main>
      <Footer />
    </div>
  )
}
