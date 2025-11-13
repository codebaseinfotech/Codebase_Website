import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe, Palette } from "lucide-react"

export default function ServicesHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Services</span>
              </h1>
              {/* text-primary */}
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive IT solutions tailored to your business needs. From mobile apps to digital marketing, we
                have the expertise to transform your ideas into reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experts specializes in cutting-edge technologies and proven methodologies to deliver
                exceptional results that drive business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Service Icons */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Mobile Development</h3>
                <p className="text-sm text-muted-foreground">iOS, Android & Cross-platform</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <Palette className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground">User-centered design</p>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <Globe className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Web Development</h3>
                <p className="text-sm text-muted-foreground">Modern & responsive</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                <Code className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-semibold text-card-foreground mb-2">Full Stack</h3>
                <p className="text-sm text-muted-foreground">End-to-end solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
