import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageSquare, FileText, Calendar } from "lucide-react"

export default function PortfolioCTA() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <Card className="border-border bg-gradient-to-r from-primary to-secondary text-primary-foreground mb-12">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Join our portfolio of successful projects. Let's discuss your vision and create something amazing together
              that drives real business results.
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
                View More Work
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Discuss Your Idea</h3>
              <p className="text-muted-foreground mb-4">
                Share your vision with our experts and get professional insights
              </p>
              <Button variant="outline" className="bg-transparent">
                Get In Touch
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Get a Proposal</h3>
              <p className="text-muted-foreground mb-4">
                Receive a detailed project proposal with timeline and pricing
              </p>
              <Button variant="outline" className="bg-transparent">
                Request Quote
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Schedule Consultation</h3>
              <p className="text-muted-foreground mb-4">
                Book a free consultation to discuss your project requirements
              </p>
              <Button variant="outline" className="bg-transparent">
                Book Meeting
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
