import { serviceCategories } from "@/lib/services-data"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export function generateStaticParams() {
  return serviceCategories.map((service) => ({
    id: service.id,
  }))
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const service = serviceCategories.find((s) => s.id === id)

  if (!service) {
    notFound()
  }

  const IconComponent = service.icon

  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Navigation Header */}
      <Navigation />

      {/* Main Page Content */}
      <main className="flex-grow bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link href="/services" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Services
            </Link>
            
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                  Expertise Area
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    {service.title}
                  </span> Services
                </h1>
                <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full sm:w-auto px-8 transition-transform hover:scale-105">
                      Get a Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-tr before:from-blue-500/10 before:to-transparent before:animate-spin-slow">
                  <div className="absolute inset-4 rounded-full border border-primary/30 bg-background flex items-center justify-center p-8 z-10 shadow-inner">
                    <IconComponent className="w-48 h-48 text-primary opacity-80" strokeWidth={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Breakdown Section */}
        <section className="py-24 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">What We Offer</h2>
              <p className="text-lg text-muted-foreground">Comprehensive {service.title.toLowerCase()} tailored to your needs.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.services.map((subItem, index) => (
                <div key={index} className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/30 group">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{subItem}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why Choose Our <span className="text-primary">{service.title}</span>?</h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  We combine industry best practices, cutting-edge technology, and a user-centric approach to deliver solutions that are not just functional, but extraordinary.
                </p>
                <ul className="space-y-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 mr-4">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-lg text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10 relative">
                 <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                   <IconComponent className="w-64 h-64" />
                 </div>
                 <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">Ready to transform your ideas into reality?</h3>
                 <p className="text-muted-foreground mb-8 relative z-10">
                   Partner with us to leverage the power of top-tier {service.title.toLowerCase()}. Our dedicated team is ready to discuss your project requirements and chart a path to success.
                 </p>
                 <Link href="/contact" className="relative z-10 w-full block">
                   <Button className="w-full sm:w-auto h-12 px-8 bg-foreground text-background hover:bg-foreground/90 text-lg rounded-xl">
                     Consult With An Expert
                   </Button>
                 </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  )
}
