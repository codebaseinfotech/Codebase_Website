"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Code, Smartphone, Globe, CheckCircle, Sparkles, Zap, Shield, RefreshCw, Quote } from "lucide-react"
import Link from "next/link"

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

export default function HeroSection() {
  const [currentQuote, setCurrentQuote] = useState(techQuotes[0])
  const [isGenerating, setIsGenerating] = useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [projectCount, setProjectCount] = useState(0)
  const [clientCount, setClientCount] = useState(0)
  const [uptime, setUptime] = useState(0)

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

  useEffect(() => {
    // Animate projectCount (155+)
    let start1 = 0
    const end1 = 155
    let current1 = start1
    let duration1 = 1200
    let increment1 = end1 / (duration1 / 16)
    const timer1 = setInterval(() => {
      current1 += increment1
      if (current1 >= end1) {
        setProjectCount(end1)
        clearInterval(timer1)
      } else {
        setProjectCount(Math.floor(current1))
      }
    }, 16)

    // Animate clientCount (90+)
    let start2 = 0
    const end2 = 90
    let current2 = start2
    let duration2 = 1200
    let increment2 = end2 / (duration2 / 16)
    const timer2 = setInterval(() => {
      current2 += increment2
      if (current2 >= end2) {
        setClientCount(end2)
        clearInterval(timer2)
      } else {
        setClientCount(Math.floor(current2))
      }
    }, 16)

    // Animate uptime (99.9%)
    let start3 = 0
    const end3 = 99.9
    let current3 = start3
    let duration3 = 1200
    let increment3 = end3 / (duration3 / 16)
    const timer3 = setInterval(() => {
      current3 += increment3
      if (current3 >= end3) {
        setUptime(end3)
        clearInterval(timer3)
      } else {
        setUptime(Number(current3.toFixed(1)))
      }
    }, 16)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
      clearInterval(timer3)
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-10 overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Floating elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-cyan-500 rounded-full animate-bounce delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-blue-700 text-sm font-medium border border-blue-200 animate-fade-in -mt-2">
                <Sparkles className="h-4 w-4 mr-2 animate-spin-slow" />
                Trusted by 50+ Companies Worldwide
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-tight animate-slide-up">
                Transform Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 animate-gradient">
                  Digital Vision
                </span>{" "}
                Into Reality
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed animate-slide-up delay-200">
                Partner with industry leaders in IT innovation. We deliver cutting-edge solutions in app development,
                web development, AI integration, and digital transformation that drive real business results.
              </p>

              {/* Enhanced Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 animate-slide-up delay-300">
                {[
                  { icon: Zap, text: "Lightning-fast delivery", color: "text-yellow-600" },
                  { icon: Shield, text: "Enterprise-grade security", color: "text-green-600" },
                  { icon: Code, text: "Modern tech stack", color: "text-blue-600" },
                  { icon: CheckCircle, text: "24/7 expert support", color: "text-purple-600" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center text-slate-600 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                  >
                    <benefit.icon
                      className={`h-5 w-5 ${benefit.color} mr-3 flex-shrink-0 group-hover:scale-110 transition-transform`}
                    />
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-400">
              <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
                    onClick={handleQuoteClick}
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:bg-blue-50 hover:border-blue-300 hover:scale-105 transition-all duration-300"
                >
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 animate-slide-up delay-500">
      <div className="text-center group">
        <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:scale-110 transition-transform">
          {projectCount}+
        </div>
        <div className="text-sm text-slate-500 font-medium">Projects Delivered</div>
      </div>
      <div className="text-center group">
        <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:scale-110 transition-transform">
          {clientCount}+
        </div>
        <div className="text-sm text-slate-500 font-medium">Global Clients</div>
      </div>
      <div className="text-center group">
        <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:scale-110 transition-transform">
          {uptime}%
        </div>
        <div className="text-sm text-slate-500 font-medium">Uptime SLA</div>
      </div>
    </div>
          </div>

          {/* Enhanced Visual Elements */}
          <div className="relative animate-slide-up delay-600">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <Code className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900 mb-2">AI-Powered Solutions</h3>
                  <p className="text-sm text-slate-600">Next-gen applications with machine learning</p>
                </div>
                <div className="bg-gradient-to-br from-white to-cyan-50 p-6 rounded-2xl border border-cyan-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <Smartphone className="h-12 w-12 text-cyan-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900 mb-2">Cross-Platform Apps</h3>
                  <p className="text-sm text-slate-600">iOS, Android & Progressive Web Apps</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                  <Globe className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-slate-900 mb-2">Cloud Solutions</h3>
                  <p className="text-sm text-slate-600">Scalable & secure cloud infrastructure</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">Free</div>
                    <div className="text-sm opacity-90">Strategy Session</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
