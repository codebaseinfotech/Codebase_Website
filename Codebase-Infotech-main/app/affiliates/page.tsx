import type { Metadata } from "next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AffiliatesHero from "@/components/affiliates-hero"
import AffiliatesSteps from "@/components/affiliates-steps"

export const metadata: Metadata = {
  title: "Affiliates — Earn by Referring | Codebase Infotech",
  description:
    "Join the Codebase Infotech affiliate program and earn commissions for every successful referral. Help businesses grow with our IT solutions and earn rewards along the way.",
  keywords: [
    "Codebase Infotech affiliate program",
    "earn commission IT referrals",
    "affiliate marketing tech",
    "refer and earn",
    "IT affiliate partner",
    "software company affiliate",
  ],
  openGraph: {
    title: "Affiliates — Earn by Referring | Codebase Infotech",
    description:
      "Join our affiliate program and earn commissions by referring friends and businesses to Codebase Infotech.",
    type: "website",
  },
}

export default function AffiliatesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <AffiliatesHero />
        <AffiliatesSteps />
      </main>
      <Footer />
    </div>
  )
}
