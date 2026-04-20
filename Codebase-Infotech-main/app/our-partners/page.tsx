import type { Metadata } from "next"
import { siteConfig, generateTitle, generateUrl } from "@/lib/seo-config"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PartnersHero from "@/components/partners-hero"
import PartnersBenefits from "@/components/partners-benefits"

export const metadata: Metadata = {
  title: generateTitle("Our Partners — Technology Partnerships"),
  description:
    "Meet our trusted technology partners and collaborators. Partner with Codebase Infotech to deliver world-class IT solutions and help businesses grow globally.",
  keywords: [
    "Codebase Infotech partners",
    "technology partnerships",
    "IT partner program",
    "become a partner",
    "software partnership",
    "business collaboration",
    "tech partner India",
  ],
  alternates: {
    canonical: generateUrl("/our-partners"),
  },
  openGraph: {
    title: generateTitle("Our Partners — Technology Partnerships"),
    description:
      "Become a Codebase Infotech partner and help businesses grow with our innovative IT solutions and software services.",
    url: generateUrl("/our-partners"),
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Partner with Codebase Infotech",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: generateTitle("Our Partners — Technology Partnerships"),
    description:
      "Become a Codebase Infotech partner and help businesses grow with our innovative IT solutions and software services.",
    images: [siteConfig.ogImage],
    creator: siteConfig.social.twitter,
  },
}

export default function OurPartnersPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PartnersHero />
        <PartnersBenefits />
      </main>
      <Footer />
    </div>
  )
}
