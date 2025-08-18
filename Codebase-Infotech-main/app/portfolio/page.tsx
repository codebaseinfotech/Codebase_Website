import Navigation from "@/components/navigation"
import PortfolioHero from "@/components/portfolio-hero"
import ProjectShowcase from "@/components/project-showcase"
import ProjectStats from "@/components/project-stats"
import PortfolioCTA from "@/components/portfolio-cta"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <PortfolioHero />
        <ProjectShowcase />
        <ProjectStats />
        <PortfolioCTA />
      </main>
      <Footer />
    </div>
  )
}
