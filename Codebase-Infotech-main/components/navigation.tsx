"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Menu, X, RefreshCw, Quote } from "lucide-react"

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
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Technology is best when it brings people together. - Matt Mullenweg",
  "The advance of technology is based on making it fit in so that you don't really even notice it. - Bill Gates",
  "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
  "The real problem is not whether machines think but whether men do. - B.F. Skinner",
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(techQuotes[0])
  const [isGenerating, setIsGenerating] = useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ]

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
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-lg">C</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                Codebase <span className="text-primary">Infotech</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" onClick={handleQuoteClick}>
                  Get a Quote
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
            <Link href="/contact">
              <Button size="sm">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2 border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" onClick={handleQuoteClick}>
                      Get a Quote
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
                <Link href="/contact">
                  <Button size="sm">Contact Us</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
