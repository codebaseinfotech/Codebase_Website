"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Phone, Mail, Calendar, RefreshCw, Quote, Sparkles } from "lucide-react"
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

const contactOptions = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our experts",
    detail: "+91 70968 59504",
    href: "tel:+917096859504",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Get detailed information via email",
    detail: "codebaseinfotech@gmail.com",
    href: "mailto:codebaseinfotech@gmail.com",
    gradient: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a convenient time to discuss",
    detail: "Book Now",
    href: "/contact",
    gradient: "from-purple-500 to-purple-600",
  },
]

const guarantees = [
  { value: "100%", label: "Quality Assurance" },
  { value: "24/7", label: "Support Available" },
  { value: "30 Days", label: "Free Maintenance" },
  { value: "99%", label: "Client Satisfaction" },
]

export default function ServiceCTA() {
  const router = useRouter()
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
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Card - Premium Dark */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden bg-[#020617] p-8 sm:p-12 lg:p-20">
          {/* Background effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-30%] left-[-10%] w-[50%] h-[80%] bg-blue-600/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-cyan-600/15 rounded-full blur-[100px]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="text-center relative z-10 space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl mx-auto">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Start Your Project
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
              Ready to Get{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                Started?
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100/50 max-w-3xl mx-auto font-medium leading-relaxed">
              Let's discuss your project requirements and create a custom solution that drives your business forward.
              Get a free consultation and detailed quote today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-4">
              <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-blue-50 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl font-bold shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-all duration-500"
                    onClick={handleQuoteClick}
                  >
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md rounded-3xl">
                  <DialogHeader>
                    <DialogTitle className="text-center text-xl font-black">Tech Wisdom</DialogTitle>
                  </DialogHeader>
                  <div className="text-center space-y-6 p-4 sm:p-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>
                    <blockquote className="text-base sm:text-lg text-muted-foreground italic leading-relaxed">
                      &ldquo;{currentQuote}&rdquo;
                    </blockquote>
                    <Button onClick={generateRandomQuote} disabled={isGenerating} className="rounded-xl h-12 px-6 font-bold">
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
                className="border-white/15 text-white hover:bg-white/10 bg-transparent h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl font-bold backdrop-blur-md"
                onClick={() => router.push('/contact')}
              >
                Schedule Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {contactOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <Link key={index} href={option.href} className="block group">
                <div className="relative bg-card border border-border/50 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 hover:border-primary/40 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden h-full">
                  {/* Decorative gradient bg */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${option.gradient} opacity-[0.05] rounded-full group-hover:opacity-[0.1] group-hover:scale-150 transition-all duration-700`} />

                  <div className="relative space-y-5">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${option.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{option.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base mb-4">{option.description}</p>
                      <p className="text-primary font-bold text-sm sm:text-base break-all sm:break-normal">{option.detail}</p>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Service Guarantee */}
        <div className="mt-16 sm:mt-24 text-center space-y-10">
          <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight">
            Our Service <span className="text-primary italic">Guarantee</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {guarantees.map((item, index) => (
              <div key={index} className="group cursor-default">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm uppercase tracking-widest font-bold text-muted-foreground/50">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
