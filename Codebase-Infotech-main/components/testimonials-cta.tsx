import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageSquare, Star } from "lucide-react"

export default function TestimonialsCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <Card className="border-border bg-gradient-to-r from-primary to-secondary text-primary-foreground mb-12">
          <CardContent className="p-12 text-center">
            <Star className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Join Our Success Stories</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Ready to become our next success story? Let's discuss your project and create something amazing that your
              customers will love and recommend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Get Free Consultation
                <MessageSquare className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Proven Track Record</h3>
              <p className="text-muted-foreground leading-relaxed">
                With 170+ successful projects and 99% client satisfaction, we have the experience to deliver exceptional
                results.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Transparent Communication</h3>
              <p className="text-muted-foreground leading-relaxed">
                We keep you informed every step of the way with regular updates and clear communication throughout your
                project.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Results-Driven Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We focus on delivering measurable results that drive your business forward and exceed your expectations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
