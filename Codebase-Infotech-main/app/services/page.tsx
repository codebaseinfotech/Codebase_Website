import Navigation from "@/components/navigation"
import ServicesHero from "@/components/services-hero"
import ServiceCategories from "@/components/service-categories"
import ServiceProcess from "@/components/service-process"
import ServiceCTA from "@/components/service-cta"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ServicesHero />
        <ServiceCategories />
        <ServiceProcess />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  )
}
