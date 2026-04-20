import type { Metadata } from "next"
import { siteConfig, generateTitle, generateUrl } from "@/lib/seo-config"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import AffiliatesHero from "@/components/affiliates-hero"
import AffiliatesSteps from "@/components/affiliates-steps"

export const metadata: Metadata = {
  title: generateTitle("Affiliates — Earn by Referring"),
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
  alternates: {
    canonical: generateUrl("/affiliates"),
  },
  openGraph: {
    title: generateTitle("Affiliates — Earn by Referring"),
    description:
      "Join our affiliate program and earn commissions by referring friends and businesses to Codebase Infotech.",
    url: generateUrl("/affiliates"),
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Codebase Infotech Affiliate Program",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: generateTitle("Affiliates — Earn by Referring"),
    description:
      "Join our affiliate program and earn commissions by referring friends and businesses to Codebase Infotech.",
    images: [siteConfig.ogImage],
    creator: siteConfig.social.twitter,
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
