"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Phone, Mail, Calendar, RefreshCw, Quote } from "lucide-react"

const techQuotes = [
  "The future belongs to organizations that can turn today's information into tomorrow's insight. - AI Revolution",
  "Code is like humor. When you have to explain it, it's bad. - Cory House",
  "Python is executable pseudocode. Java is verbose pseudocode. - Bruce Eckel",
  "iOS development: Where every pixel matters and every animation tells a story.",
  "The best error message is the one that never shows up. - Thomas Fuchs",
  "Java: Write once, run anywhere. Debug everywhere. - Developer Wisdom",
  "Artificial Intelligence is the new electricity. - Andrew Ng",
  "In Python, there should be one obvious way to do it. - The Zen of Python",
  "Mobile apps are not just software; they're experiences that fit in your pocket.",
  "The Internet of Things is really a giant robot we're building together. - Bruce Sterling",
  "Machine learning is the last invention that humanity will ever need to make. - Nick Bostrom",
  "Swift: A powerful and intuitive programming language for iOS, macOS, watchOS, and tvOS.",
  "React: A JavaScript library for building user interfaces, one component at a time.",
  "The cloud is not just about technology; it's about enabling new business models.",
  "Cybersecurity is not a product, but a process. - Bruce Schneier",
]

export default function ServiceCTA() {
  const [currentQuote, setCurrentQuote] = useState(techQuotes[0])
  const [isGenerating, setIsGenerating] = useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const generateRandomQuote = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * techQuotes.length)
      setCurrentQuote(techQuotes[randomIndex])
      setIsGenerating(false)
    }, 500)
  }

  const handleQuoteClick = () => {
    generateRandomQuote()
    setIsQuoteOpen(true)
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Card */}
        <Card className="border-border bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
              Get a free consultation and detailed quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 bg-white text-primary hover:bg-white/90"
                    onClick={handleQuoteClick}
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center">Tech Wisdom</DialogTitle>
                  </DialogHeader>
                  <div className="text-center space-y-6 p-4">
                    <Quote className="h-12 w-12 text-primary mx-auto" />
                    <blockquote className="text-lg text-muted-foreground italic leading-relaxed">
                      "{currentQuote}"
                    </blockquote>
                    <Button onClick={generateRandomQuote} disabled={isGenerating} className="mt-6">
                      {isGenerating ? (
                        <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      ) : (
                        <RefreshCw className="h-4 w-4 mr-2" />
                      )}
                      Get New Quote
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Schedule Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our experts</p>
              <p className="text-primary font-semibold">+91 92652 42366</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">Get detailed information via email</p>
              <p className="text-primary font-semibold">info@codebaseinfotech.com</p>
            </CardContent>
          </Card>

          <Card className="border-border hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Schedule Meeting</h3>
              <p className="text-muted-foreground mb-4">Book a convenient time to discuss</p>
              <Button variant="outline" className="mt-2 bg-transparent">
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Service Guarantee */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Service Guarantee</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Quality Assurance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
              <div className="text-sm text-muted-foreground">Free Maintenance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
