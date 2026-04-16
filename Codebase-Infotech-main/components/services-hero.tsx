"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Globe, Palette, Layers, TrendingUp, ShoppingCart, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const floatingServices = [
  { icon: Smartphone, label: "Mobile Apps", color: "bg-blue-500" },
  { icon: Globe, label: "Web Dev", color: "bg-cyan-500" },
  { icon: Palette, label: "UI/UX", color: "bg-purple-500" },
  { icon: Code, label: "Full Stack", color: "bg-green-500" },
]

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-20 pb-16 lg:pt-20 lg:pb-10 bg-[#020617]">
      {/* Advanced Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
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
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              End-to-End IT Solutions
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.9]">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 animate-gradient-x">
                Services
              </span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-blue-100/60 max-w-xl font-medium">
              Comprehensive IT solutions tailored to your business needs. From mobile apps to digital marketing, we
              have the expertise to transform your ideas into reality.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-blue-100/40 max-w-xl">
              Our team of experts specializes in cutting-edge technologies and proven methodologies to deliver
              exceptional results that drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl group font-bold w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl w-full sm:w-auto">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Service Icons Grid - Premium Floating Cards */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 gap-5 sm:gap-6 max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {[
                { icon: Smartphone, title: "Mobile Development", desc: "iOS, Android & Cross-platform", delay: "0ms", gradient: "from-blue-500/20 to-blue-600/5" },
                { icon: Globe, title: "Web Development", desc: "Modern & responsive", delay: "150ms", gradient: "from-cyan-500/20 to-cyan-600/5" },
                { icon: Palette, title: "UI/UX Design", desc: "User-centered design", delay: "300ms", gradient: "from-purple-500/20 to-purple-600/5" },
                { icon: Code, title: "Full Stack", desc: "End-to-end solutions", delay: "450ms", gradient: "from-green-500/20 to-green-600/5" },
              ].map((service, index) => {
                const Icon = service.icon
                const isOdd = index % 2 !== 0
                return (
                  <div key={index} className={`${isOdd ? 'mt-8 sm:mt-12' : ''}`}>
                    <div
                      className={`group bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-6 sm:p-8 hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]`}
                      style={{ animationDelay: service.delay }}
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="font-bold text-white mb-2 text-base sm:text-lg">{service.title}</h3>
                      <p className="text-xs sm:text-sm text-white/40 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-8 -right-4 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl animate-float hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Innovation</div>
                <div className="text-sm font-bold text-white">Cutting Edge</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-6 p-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl animate-bounce-slow hidden lg:flex items-center gap-3">
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
