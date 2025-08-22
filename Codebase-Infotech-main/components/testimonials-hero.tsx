"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, MessageSquare, } from "lucide-react"
import Link from "next/link"

// 🔹 Reusable CountUp component
function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16) // ~60fps
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return <span>{count}</span>
}

export default function TestimonialsHero() {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Client <span className="text-primary">Testimonials</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Don't just take our word for it. Hear from the businesses we've helped transform their digital presence
                and achieve remarkable success.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our clients' success stories speak to our commitment to delivering exceptional results and building
                lasting partnerships.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <Star className="h-12 w-12 text-yellow-400 mb-4" />
              <div className="text-3xl font-bold text-card-foreground mb-2">
                <CountUp end={4.5} duration={1500} />/5
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
              <Users className="h-12 w-12 text-primary mb-4" />
              <div className="text-3xl font-bold text-card-foreground mb-2">
                <CountUp end={90} duration={2000} />+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm col-span-2">
              <MessageSquare className="h-12 w-12 text-secondary mb-4" />
              <div className="text-3xl font-bold text-card-foreground mb-2">
                <CountUp end={99} duration={2500} />%
              </div>
              <div className="text-muted-foreground">Would Recommend Us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
