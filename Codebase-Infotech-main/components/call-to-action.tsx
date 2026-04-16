"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { ArrowRight, Phone, Mail, RefreshCw, Quote, Rocket } from "lucide-react"

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
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-blue-600/20 via-transparent to-cyan-500/20 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-[3rem] p-8 sm:p-12 lg:p-16 text-center shadow-[0_0_80px_rgba(37,99,235,0.15)] relative overflow-hidden">
          
          {/* Edge Highlights */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />

          {/* Main CTA */}
          <div className="mb-12 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/[0.05] flex items-center justify-center mx-auto mb-6">
              <Rocket className="h-8 w-8 text-cyan-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Business</span>?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100/60 max-w-2xl mx-auto mb-10 font-medium">
              Let's discuss your project and engineer something extraordinary together. Get a free consultation and quote today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center mt-8">
              <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl group font-bold w-full sm:w-auto"
                    onClick={handleQuoteClick}
                  >
                    Tech Wisdom
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
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

              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl w-full sm:w-auto font-bold"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-8 border-t border-white/[0.06]">
            <a href="tel:+917096859504" className="flex items-center justify-center space-x-3 text-blue-100/80 hover:text-white transition-colors group p-4 rounded-2xl hover:bg-white/[0.02]">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-blue-100/40 font-semibold uppercase tracking-wider">Call Us</div>
                <div className="font-medium">+91 70968 59504</div>
              </div>
            </a>
            <a href="mailto:codebaseinfotech@gmail.com" className="flex items-center justify-center space-x-3 text-blue-100/80 hover:text-white transition-colors group p-4 rounded-2xl hover:bg-white/[0.02]">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                <Mail className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-xs text-blue-100/40 font-semibold uppercase tracking-wider">Email Us</div>
                <div className="font-medium">codebaseinfotech@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
