"use client"

import { useState } from "react"
import { Code, Database, Globe, Smartphone, Cloud, Shield, ChevronRight } from "lucide-react"

const technologies = [
  {
    category: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    techs: ["React.js", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    description: "Modern, responsive user interfaces",
  },
  {
    category: "Backend",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    techs: ["Node.js", "Python", "PHP", "Laravel", "Express.js", "MongoDB"],
    description: "Robust server-side solutions",
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    techs: ["React Native", "Flutter", "iOS Native", "Android Native", "Ionic"],
    description: "Native & Cross-platform mobile apps",
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    description: "Scalable cloud infrastructure",
  },
  {
    category: "Database",
    icon: Code,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
    techs: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
    description: "Efficient data management",
  },
  {
    category: "Security",
    icon: Shield,
    color: "from-teal-500 to-green-500",
    bgColor: "bg-gradient-to-br from-teal-50 to-green-50",
    techs: ["OAuth", "JWT", "SSL/TLS", "Encryption", "Penetration Testing"],
    description: "Enterprise-grade security",
  },
]

export default function TechnologyStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="w-4 h-4 mr-2" />
            Technology Excellence
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and secure solutions that drive business
            growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                className={`${tech.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm group cursor-pointer`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`bg-gradient-to-r ${tech.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <ChevronRight
                    className={`h-6 w-6 text-gray-400 transition-all duration-300 ${isHovered ? "translate-x-1 text-gray-600" : ""}`}
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tech.category}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>

                <div className="space-y-3">
                  {tech.techs.map((techName, techIndex) => (
                    <div key={techIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{techName}</span>
                    </div>
                  ))}
                </div>

                <div
                  className={`mt-6 pt-4 border-t border-gray-200 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-70"}`}
                >
                  <div className="flex items-center text-sm font-medium text-gray-500">
                    <span>Explore capabilities</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3 shadow-lg">
            <span className="text-gray-600 mr-2">Ready to discuss your project?</span>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
