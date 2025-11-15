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
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Codebase Infotech
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We are a passionate team of developers, designers, and digital strategists dedicated to transforming
                businesses through innovative technology solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Since our founding, we've helped over 150 companies achieve their digital transformation goals with
                cutting-edge applications, websites, and marketing strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent border-2 border-blue-200 hover:bg-blue-50"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">{clients}+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-cyan-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <Target className="h-12 w-12 text-cyan-600 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">{projects}+</div>
              <div className="text-slate-600">Projects Delivered</div>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 col-span-2">
              <Award className="h-12 w-12 text-purple-600 mb-4" />
              <div className="text-3xl font-bold text-slate-900 mb-2">{years}+ Years</div>
              <div className="text-slate-600">of Excellence in IT Solutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
