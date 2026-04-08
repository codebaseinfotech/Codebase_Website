"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Menu, X, RefreshCw, Quote, ArrowRight } from "lucide-react"

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
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(techQuotes[0])
  const [isGenerating, setIsGenerating] = useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ]

  // Track scroll for animated background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${
        scrolled 
          ? "bg-background/90 backdrop-blur-xl border-border shadow-sm py-4" 
          : "bg-background/60 backdrop-blur-sm border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-2">
              <div className="w-20 h-20 flex items-center justify-center mr-1">
                {/* <span className="text-primary-foreground font-bold text-lg">CB</span> */}
                <img
                  src="/logo.png"
                  alt="Codebase Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <span className="font-bold text-xl text-card-foreground">
                Codebase <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Infotech</span>
              </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block ml-auto">
            <div className="flex items-center space-x-1 xl:space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-3 py-2 text-sm xl:text-base font-medium transition-colors"
                >
                  <span className={`relative z-10 transition-colors duration-300 text-nowrap ${
                    pathname === item.href ? "text-primary font-semibold" : "text-foreground group-hover:text-primary"
                  }`}>
                    {item.name}
                  </span>
                  
                  {/* Hover indicator (Animated Underline) */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transform origin-left transition-transform duration-300 ease-out ${
                    pathname === item.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`} />
                  
                  {/* Background highlight on hover */}
                  <span className={`absolute inset-0 bg-primary/5 rounded-md scale-95 opacity-0 group-hover:scale-100 transition-all duration-300 ${
                    pathname === item.href ? "opacity-100 scale-100" : "group-hover:opacity-100"
                  }`} />
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3 ml-6">
            <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" onClick={handleQuoteClick} className="group border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:text-primary rounded-full px-5 transition-all duration-300">
                  Get a Quote
                  <Quote className="ml-2 h-3.5 w-3.5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md border-border shadow-2xl overflow-hidden rounded-2xl">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 pb-2">Tech Wisdom</DialogTitle>
                </DialogHeader>
                <div className="text-center space-y-6 p-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center border border-primary/10 shadow-inner">
                    <Quote className="h-8 w-8 text-primary" />
                  </div>
                  <blockquote className="text-lg text-foreground italic leading-relaxed relative px-4">
                    <span className="text-5xl text-primary/10 absolute -top-4 -left-2 font-serif">"</span>
                    <span className="relative z-10">{currentQuote}</span>
                    <span className="text-5xl text-primary/10 absolute -bottom-8 -right-2 font-serif">"</span>
                  </blockquote>
                  <Button onClick={generateRandomQuote} disabled={isGenerating} size="lg" className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 w-full rounded-xl shadow-lg shadow-blue-500/20 group transition-all duration-300 hover:scale-[1.02]">
                    {isGenerating ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <RefreshCw className="h-4 w-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                    )}
                    Generate Inspiration
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Link href="/contact">
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/20 rounded-full px-6 group transition-all duration-300 hover:scale-[1.05]">
                Contact Us
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Animated Mobile menu hamburger */}
          <div className="lg:hidden ml-auto">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:bg-primary/5 rounded-full w-10 h-10 relative z-50 focus:ring-0"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col justify-center items-center h-full w-full">
                <span className={`bg-current block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1.5'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`}></span>
                <span className={`bg-current block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1.5'}`}></span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-md transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Mobile Navigation Drawer */}
        <div 
          className={`fixed inset-x-0 top-[72px] sm:top-[88px] p-4 max-h-[calc(100vh-88px)] overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMenuOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-12 opacity-0 scale-95"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-card/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-3xl overflow-hidden flex flex-col">
            <div className="px-5 py-6 flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <div 
                  key={item.name} 
                  className={`transform transition-all duration-500 ease-out ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 60 + 100}ms` }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3.5 text-lg font-medium rounded-2xl transition-all duration-200 group ${
                      pathname === item.href 
                      ? "bg-gradient-to-r from-blue-50/80 to-cyan-50/80 text-primary shadow-sm" 
                      : "text-foreground hover:bg-muted/50 hover:text-primary"
                    }`}
                  >
                    <span className="flex-1">{item.name}</span>
                    {pathname === item.href && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="border-t border-border/50 p-6 flex flex-col space-y-4 bg-muted/20">
              <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full justify-between h-14 bg-background border-border shadow-sm rounded-xl text-base group">
                    Get a Quote
                    <Quote className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Button>
                </DialogTrigger>
                {/* Mobile Dialog Content */}
                <DialogContent className="sm:max-w-md w-[95%] max-w-sm rounded-3xl mx-auto border-border shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">Tech Wisdom</DialogTitle>
                  </DialogHeader>
                  <div className="text-center space-y-6 p-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="h-8 w-8 text-primary opacity-80" />
                    </div>
                    <blockquote className="text-lg text-foreground italic relative">
                      "{currentQuote}"
                    </blockquote>
                    <Button onClick={generateRandomQuote} disabled={isGenerating} className="mt-6 w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg">
                      {isGenerating ? <RefreshCw className="h-5 w-5 mr-2 animate-spin" /> : <RefreshCw className="h-5 w-5 mr-2" />}
                      New Quote
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <Link href="/contact" className="w-full">
                <Button className="w-full justify-between h-14 text-base rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/20 text-white">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

