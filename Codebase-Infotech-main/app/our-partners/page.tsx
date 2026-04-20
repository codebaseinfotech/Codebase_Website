import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PartnersHero from "@/components/partners-hero"
import PartnersBenefits from "@/components/partners-benefits"

export const metadata: Metadata = {
  title: "Our Partners — Technology Partnerships | Codebase Infotech",
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
  openGraph: {
    title: "Our Partners — Technology Partnerships | Codebase Infotech",
    description:
      "Become a Codebase Infotech partner and help businesses grow with our innovative IT solutions and software services.",
    type: "website",
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
