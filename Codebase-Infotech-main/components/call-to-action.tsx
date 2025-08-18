"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Phone, Mail, RefreshCw, Quote } from "lucide-react"

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

export default function CallToAction() {
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
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Let's discuss your project and create something amazing together. Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              </Button>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-primary-foreground/90">
              <Phone className="h-6 w-6" />
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm">+91 92652 42366</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-primary-foreground/90">
              <Mail className="h-6 w-6" />
              <div>
                <div className="font-semibold">Email Us</div>
                <div className="text-sm">info@codebaseinfotech.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
