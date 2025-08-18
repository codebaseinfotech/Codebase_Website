import Navigation from "@/components/navigation"
import TestimonialsHero from "@/components/testimonials-hero"
import TestimonialsSlider from "@/components/testimonials-slider"
import ClientLogos from "@/components/client-logos"
import TestimonialsCTA from "@/components/testimonials-cta"
import Footer from "@/components/footer"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <TestimonialsHero />
        <TestimonialsSlider />
        <ClientLogos />
        <TestimonialsCTA />
      </main>
      <Footer />
    </div>
  )
}
