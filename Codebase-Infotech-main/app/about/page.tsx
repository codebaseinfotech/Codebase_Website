import Navigation from "@/components/navigation"
import AboutHero from "@/components/about-hero"
import CompanyStory from "@/components/company-story"
import MissionVision from "@/components/mission-vision"
import TeamSection from "@/components/team-section"
import CompanyValues from "@/components/company-values"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
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
