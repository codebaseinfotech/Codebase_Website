"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Award } from "lucide-react"
import Link from "next/link"

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16) // ~60fps
    let frame: number

    const step = () => {
      start += increment
      if (start < end) {
        setCount(Math.floor(start))
        frame = requestAnimationFrame(step)
      } else {
        setCount(end)
        cancelAnimationFrame(frame)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [end, duration])

  return count
}

export default function AboutHero() {

  const clients = useCountUp(90, 2000)
  const projects = useCountUp(170, 2500)
  const years = useCountUp(9, 3000)

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#020617] pt-24 pb-16 overflow-hidden">
      {/* Advanced Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl">
               Our Story
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1]">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Codebase Infotech
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/60 leading-relaxed font-medium">
                We are a passionate team of developers, engineers, and digital strategists dedicated to transforming
                businesses through hyper-scalable technology solutions.
              </p>
              <p className="text-base sm:text-lg text-blue-100/50 leading-relaxed font-medium">
                Since our founding, we've helped over 150 companies globally achieve their digital transformation goals with
                cutting-edge applications, cloud architecture, and marketing strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl group font-bold w-full sm:w-auto"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl w-full sm:w-auto font-bold"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 relative">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 rounded-[2rem] shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users className="h-7 w-7 text-blue-400" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">{clients}+</div>
              <div className="text-blue-100/50 font-medium">Happy Clients</div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 rounded-[2rem] shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 group mt-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Target className="h-7 w-7 text-cyan-400" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">{projects}+</div>
              <div className="text-blue-100/50 font-medium">Projects Delivered</div>
            </div>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 rounded-[2rem] shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 group col-span-2 -mt-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Award className="h-7 w-7 text-purple-400" />
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-2">{years}+ Years</div>
              <div className="text-blue-100/50 font-medium">of Excellence in Digital Enterprise Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
