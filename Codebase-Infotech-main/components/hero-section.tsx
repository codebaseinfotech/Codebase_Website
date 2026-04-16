"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Code, Smartphone, Globe, Sparkles, TrendingUp, RefreshCw, Quote } from "lucide-react"
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
]

export default function HeroSection() {
  const [currentQuote, setCurrentQuote] = useState(techQuotes[0])
  const [isGenerating, setIsGenerating] = useState(false)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
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
    setIsVisible(true)

    // Counters logic
    let start1 = 0
    const end1 = 170
    let duration1 = 1500
    let increment1 = end1 / (duration1 / 16)
    let current1 = start1
    
    let start2 = 0
    const end2 = 90
    let current2 = start2

    let start3 = 0
    const end3 = 99.9
    let current3 = start3

    const timer1 = setInterval(() => {
      current1 += increment1
      if (current1 >= end1) { setProjectCount(end1); clearInterval(timer1) } 
      else setProjectCount(Math.floor(current1))
    }, 16)

    const timer2 = setInterval(() => {
      current2 += (end2 / (1500 / 16))
      if (current2 >= end2) { setClientCount(end2); clearInterval(timer2) } 
      else setClientCount(Math.floor(current2))
    }, 16)

    const timer3 = setInterval(() => {
      current3 += (end3 / (1500 / 16))
      if (current3 >= end3) { setUptime(end3); clearInterval(timer3) } 
      else setUptime(Number(current3.toFixed(1)))
    }, 16)

    return () => {
      clearInterval(timer1)
      clearInterval(timer2)
      clearInterval(timer3)
    }
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-16 lg:pt-20 lg:pb-10 bg-[#020617]">
      {/* Advanced Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-15%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[55%] h-[55%] bg-cyan-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Main Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl">
               <span className="relative flex h-2 w-2 mr-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               Trusted by 50+ Companies
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.9]">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 animate-gradient-x">
                Digital Vision
              </span>{" "}
              Into Reality
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-blue-100/60 max-w-xl font-medium">
              Partner with industry leaders in IT innovation. We deliver cutting-edge solutions in app development, web development, AI integration, and digital transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl group font-bold w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              
              <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl w-full sm:w-auto" onClick={handleQuoteClick}>
                    Tech Wisdom
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md bg-[#020617] border border-white/10 text-white shadow-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-center text-cyan-400 font-bold">Tech Wisdom</DialogTitle>
                  </DialogHeader>
                  <div className="text-center space-y-6 p-4">
                    <Quote className="h-10 w-10 text-blue-500/50 mx-auto" />
                    <blockquote className="text-lg text-blue-100/80 italic leading-relaxed">
                      "{currentQuote}"
                    </blockquote>
                    <Button onClick={generateRandomQuote} disabled={isGenerating} className="mt-6 bg-white/10 hover:bg-white/20 text-white border border-white/5 rounded-xl">
                      {isGenerating ? <RefreshCw className="h-4 w-4 mr-2 animate-spin" /> : <RefreshCw className="h-4 w-4 mr-2" />}
                      Get New Quote
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Performance Stats */}
            <div className={`grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-white/[0.06] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:scale-110 transition-transform">{projectCount}+</div>
                <div className="text-xs sm:text-sm text-blue-100/40 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:scale-110 transition-transform">{clientCount}+</div>
                <div className="text-xs sm:text-sm text-blue-100/40 font-medium">Global Clients</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:scale-110 transition-transform">{uptime}%</div>
                <div className="text-xs sm:text-sm text-blue-100/40 font-medium">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Visual Floating Elements */}
          <div className={`relative transition-all duration-1000 delay-300 hidden lg:block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 gap-5 sm:gap-6 max-w-lg ml-auto">
              {/* Feature Box 1 */}
              <div className="mt-12 group bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-6 hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <Code className="h-7 w-7 text-blue-400" />
                 </div>
                 <h3 className="font-bold text-white mb-2 text-lg">AI Integration</h3>
                 <p className="text-sm text-white/40 leading-relaxed">Smart applications powered by modern machine learning.</p>
              </div>

              {/* Feature Box 2 */}
              <div className="group bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-6 hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <Smartphone className="h-7 w-7 text-cyan-400" />
                 </div>
                 <h3 className="font-bold text-white mb-2 text-lg">Cross-Platform</h3>
                 <p className="text-sm text-white/40 leading-relaxed">Flawless Mobile Apps for iOS, Android and Web.</p>
              </div>
              
              {/* Feature Box 3 */}
              <div className="mt-8 group bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-6 hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
                 <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <Globe className="h-7 w-7 text-purple-400" />
                 </div>
                 <h3 className="font-bold text-white mb-2 text-lg">Cloud Scale</h3>
                 <p className="text-sm text-white/40 leading-relaxed">Secure, global and infinitely scalable infrastructure.</p>
              </div>

              {/* Strategy Focus Action */}
              <div className="mt-[-2rem] group bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] p-6 flex flex-col items-center justify-center text-white hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-700 hover:-translate-y-2 cursor-pointer">
                 <div className="text-2xl font-black mb-1">Free</div>
                 <div className="text-sm opacity-90 font-medium">Strategy Session</div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-8 -right-4 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl animate-float flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Innovation</div>
                <div className="text-sm font-bold text-white">Cutting Edge</div>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-6 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl animate-bounce-slow flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-blue-400">Results</div>
                <div className="text-sm font-bold text-white">500+ Projects</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
