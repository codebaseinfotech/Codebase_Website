"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { serviceCategories } from "@/lib/services-data"
import { useEffect, useRef, useState } from "react"

export default function ServiceCategories() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setVisibleCards(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const cards = sectionRef.current?.querySelectorAll('[data-index]')
    cards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden" ref={sectionRef}>
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none opacity-[0.02] flex items-center justify-center">
        <div className="text-[20vw] font-black uppercase tracking-tighter text-foreground">Services</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-8">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground tracking-tighter leading-none">
              Comprehensive <br className="hidden sm:block" />
              <span className="text-primary italic">IT Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl font-medium">
              From concept to deployment, we offer a full range of technology services to help your business succeed
            </p>
          </div>
          <div className="h-1 lg:flex-grow bg-border rounded-full hidden lg:block" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon
            const isVisible = visibleCards.has(index)
            return (
              <div
                key={index}
                data-index={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group relative bg-card border border-border/50 rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-10 lg:p-12 hover:border-primary/40 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] h-full overflow-hidden">
                  {/* Decorative Background Element */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/[0.03] rounded-full group-hover:bg-primary/[0.08] transition-all duration-700 group-hover:scale-150" />

                  {/* Icon and Title */}
                  <div className="flex items-start gap-5 sm:gap-6 mb-8 relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-700 flex-shrink-0 shadow-inner">
                      <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">{category.title}</h3>
                      <p className="text-muted-foreground leading-relaxed font-medium text-sm sm:text-base">{category.description}</p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="mb-8 relative">
                    <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest text-muted-foreground/60">Services Include</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {category.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary/5 text-primary text-xs sm:text-sm font-bold rounded-full border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8 relative">
                    <h4 className="font-bold text-foreground mb-4 text-xs uppercase tracking-widest text-muted-foreground/60">Key Features</h4>
                    <ul className="space-y-3">
                      {category.features.map((feature, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start text-sm sm:text-base font-medium">
                          <div className="w-2 h-2 bg-primary/30 rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-primary transition-colors" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/services/${category.id}`} className="block relative">
                    <Button className="w-full h-14 rounded-2xl bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-bold text-base group-hover:shadow-lg">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
