"use client"

import { useEffect, useRef, useState } from "react"
import { MessageSquare, FileText, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Consultation",
    description: "We start by understanding your business goals, requirements, and target audience.",
    step: "01",
  },
  {
    icon: FileText,
    title: "Planning & Strategy",
    description: "Detailed project planning, timeline creation, and technology stack selection.",
    step: "02",
  },
  {
    icon: Code,
    title: "Development & Design",
    description: "Agile development process with regular updates and milestone deliveries.",
    step: "03",
  },
  {
    icon: TestTube,
    title: "Testing & Quality Assurance",
    description: "Comprehensive testing to ensure your solution meets the highest quality standards.",
    step: "04",
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "Smooth deployment process with minimal downtime and maximum efficiency.",
    step: "05",
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to keep your solution running perfectly.",
    step: "06",
  },
]

const processBenefits = [
  { value: "100%", label: "Transparent Process" },
  { value: "24/7", label: "Communication" },
  { value: "99%", label: "On-Time Delivery" },
]

export default function ServiceProcess() {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step'))
            setVisibleSteps(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' }
    )

    const steps = sectionRef.current?.querySelectorAll('[data-step]')
    steps?.forEach(step => observer.observe(step))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 sm:py-32 bg-card/30 border-y border-border/50 relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground tracking-tighter">
            Our <span className="text-primary italic">Process</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
            A proven methodology that ensures successful project delivery from concept to completion
          </p>
        </div>

        {/* Process Steps - Alternating Timeline */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute top-[60px] left-1/2 -translate-x-1/2 w-px h-[calc(100%-120px)] bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden lg:block" />

          <div className="grid lg:grid-cols-2 gap-y-12 sm:gap-y-16 lg:gap-y-20 gap-x-16 lg:gap-x-32 relative">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0
              const isVisible = visibleSteps.has(index)
              return (
                <div
                  key={index}
                  data-step={index}
                  className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'} relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {/* Center dot on timeline */}
                  <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-background border-2 border-border flex items-center justify-center z-20 group-hover:border-primary transition-all duration-700 hidden lg:flex shadow-xl">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  </div>

                  <div className="max-w-md space-y-6">
                    <div className={`inline-flex items-center gap-4 ${isEven ? 'lg:flex-row-reverse' : 'flex-row'}`}>
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[1.75rem] bg-primary/5 text-primary flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl flex-shrink-0">
                        <IconComponent className="w-8 h-8 sm:w-9 sm:h-9" />
                      </div>
                      <div className="text-5xl sm:text-7xl font-black text-foreground/[0.03] group-hover:text-primary/[0.08] transition-all duration-700 select-none leading-none">
                        {step.step}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-medium text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 sm:mt-28 grid grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {processBenefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-2 sm:mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-500">
                {benefit.value}
              </div>
              <div className="text-xs sm:text-sm uppercase tracking-widest font-bold text-muted-foreground/60">
                {benefit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
