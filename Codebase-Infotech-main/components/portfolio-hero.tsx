"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Award, Users, Trophy } from "lucide-react"
import Link from "next/link"

export default function PortfolioHero() {
  const [projects, setProjects] = useState(0)
  const [clients, setClients] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Reusable count-up effect
  const animateValue = (setter: React.Dispatch<React.SetStateAction<number>>, target: number, duration: number) => {
    let start = 0
    const stepTime = Math.abs(Math.floor(duration / target))
    const timer = setInterval(() => {
      start += 1
      setter(start)
      if (start === target) clearInterval(timer)
    }, stepTime)
  }

  useEffect(() => {
    setIsVisible(true)
    animateValue(setProjects, 170, 2000)      // animate to 170 in 2s
    animateValue(setClients, 90, 2000)        // animate to 90 in 2s
    animateValue(setSatisfaction, 99, 2000)   // animate to 99 in 2s
  }, [])

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden pt-20 pb-16 lg:pt-20 lg:pb-10 bg-[#020617]">
      {/* Advanced Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[55%] h-[55%] bg-cyan-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] right-[50%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Proven Track Record
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-white leading-[0.9]">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 animate-gradient-x">
                Portfolio
              </span>
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-blue-100/60 max-w-xl font-medium">
              Explore our collection of successful projects that showcase our expertise in mobile app development, web
              development, UI/UX design, and digital marketing.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-blue-100/40 max-w-xl">
              Each project represents our commitment to delivering exceptional results that drive business growth and
              user satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl group font-bold w-full sm:w-auto">
                Explore Work
                <Eye className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl w-full sm:w-auto group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform text-cyan-400" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards Dashboard - Premium Floating Layout */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 gap-5 sm:gap-6 max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              
              <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:bg-white/[0.1] transition-all duration-500 group transform hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <Award className="h-7 w-7 text-cyan-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">{projects}+</div>
                <div className="text-blue-100/50 font-medium text-sm">Projects Completed</div>
              </div>
              
              <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:bg-white/[0.1] transition-all duration-500 group transform hover:-translate-y-2 mt-8 sm:mt-12">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <Users className="h-7 w-7 text-purple-400" />
                </div>
                <div className="text-4xl font-black text-white mb-2">{clients}+</div>
                <div className="text-blue-100/50 font-medium text-sm">Happy Clients</div>
              </div>
              
              <div className="bg-white/[0.05] backdrop-blur-xl border border-white/[0.08] p-6 sm:p-8 rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:bg-white/[0.1] transition-all duration-500 group col-span-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Trophy className="h-8 w-8 text-green-400" />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white mb-1 flex items-baseline">
                      {satisfaction}
                      <span className="text-2xl text-cyan-400 ml-1">%</span>
                    </div>
                    <div className="text-blue-100/50 font-medium text-sm">Client Satisfaction Rate</div>
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
