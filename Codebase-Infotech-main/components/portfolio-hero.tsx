"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Award, Users } from "lucide-react"
import Link from "next/link"

export default function PortfolioHero() {
  const [projects, setProjects] = useState(0)
  const [clients, setClients] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)

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
    animateValue(setProjects, 155, 2000)      // animate to 155 in 2s
    animateValue(setClients, 90, 2000)        // animate to 90 in 2s
    animateValue(setSatisfaction, 99, 2000)   // animate to 99 in 2s
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Explore our collection of successful projects that showcase our expertise in mobile app development, web
                development, UI/UX design, and digital marketing.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each project represents our commitment to delivering exceptional results that drive business growth and
                user satisfaction.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                View All Projects
                <Eye className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <Award className="h-12 w-12 text-primary mb-4" />
              <div className="text-3xl font-bold text-card-foreground mb-2">{projects}+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <div className="text-3xl font-bold text-card-foreground mb-2">{clients}+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm col-span-2">
              <Eye className="h-12 w-12 text-accent mb-4" />
              <div className="text-3xl font-bold text-card-foreground mb-2">{satisfaction}%</div>
              <div className="text-muted-foreground">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
