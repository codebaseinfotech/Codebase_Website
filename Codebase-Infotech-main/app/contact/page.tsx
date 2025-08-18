import Navigation from "@/components/navigation"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-0">
          <ContactForm />
          <ContactInfo />
        </div>
        <ContactMap />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
