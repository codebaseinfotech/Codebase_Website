"use client"

import { useState } from "react"
import { Code, Database, Globe, Smartphone, Cloud, Shield, ChevronRight } from "lucide-react"

const technologies = [
  {
    category: "Frontend",
    icon: Globe,
    iconColor: "text-blue-600",
    bgClass: "bg-blue-50 border-blue-100",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]",
    techs: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    description: "Modern, dynamic, and extremely responsive user interfaces.",
  },
  {
    category: "Backend",
    icon: Database,
    iconColor: "text-emerald-600",
    bgClass: "bg-emerald-50 border-emerald-100",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)]",
    techs: ["Node.js", "Python", "PHP", "Laravel", "Express.js", "Go"],
    description: "Highly robust server-side architectural solutions.",
  },
  {
    category: "Mobile",
    icon: Smartphone,
    iconColor: "text-purple-600",
    bgClass: "bg-purple-50 border-purple-100",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.2)]",
    techs: ["React Native", "Flutter", "iOS Swift", "Android Native", "Ionic"],
    description: "Native & high-performance cross-platform mobile apps.",
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    iconColor: "text-orange-600",
    bgClass: "bg-orange-50 border-orange-100",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)]",
    techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    description: "Massively scalable cloud orchestration and infrastructure.",
  },
  {
    category: "Database",
    icon: Code,
    iconColor: "text-indigo-600",
    bgClass: "bg-indigo-50 border-indigo-100",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)]",
    techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
    description: "Extremely efficient and highly available data management.",
  },
  {
    category: "Security",
    icon: Shield,
    iconColor: "text-teal-600",
    bgClass: "bg-teal-50 border-teal-100",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.2)]",
    techs: ["OAuth", "JWT", "SSL/TLS", "Encryption", "Zero-Trust Protocols"],
    description: "Enterprise-grade impenetrable security architectures.",
  },
]

export default function TechnologyStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
            <Code className="w-4 h-4 mr-2" />
            Cutting-Edge Stacks
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Technology Platform</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            We natively leverage the absolute latest technologies to rigidly build robust, scalable, and secure systems that propel businesses forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                className={`group bg-white border border-slate-200 rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col h-full ${tech.hoverShadow}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full transition-transform duration-700 group-hover:scale-150 -z-10 ${tech.bgClass}`} />

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 ${tech.bgClass}`}>
                    <IconComponent className={`h-8 w-8 ${tech.iconColor}`} />
                  </div>
                  <ChevronRight
                    className={`h-6 w-6 text-slate-300 transition-all duration-300 ${isHovered ? `translate-x-1 ${tech.iconColor}` : ""}`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2 relative z-10">{tech.category}</h3>
                <p className="text-slate-500 mb-8 relative z-10 text-sm font-medium">{tech.description}</p>

                <div className="flex flex-wrap gap-2 mb-6 flex-grow relative z-10">
                  {tech.techs.map((techName, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`px-3 py-1.5 text-xs font-bold rounded-lg border bg-white transition-colors duration-300 ${isHovered ? tech.bgClass + " " + tech.iconColor : "border-slate-100 text-slate-600"}`}
                    >
                      {techName}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
