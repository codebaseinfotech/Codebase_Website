import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import QuoteGenerator from "@/components/quote-generator"

export default function QuotePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Tech <span className="text-primary">Inspiration</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get inspired with random quotes about technology, programming, and innovation
            </p>
          </div>
          <QuoteGenerator />
        </div>
      </main>
      <Footer />
    </div>
  )
}
