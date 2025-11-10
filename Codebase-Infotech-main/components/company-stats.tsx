import { Users, Award, Clock, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "90+",
    label: "Happy Clients",
    description: "Trusted by companies worldwide",
  },
  {
    icon: Award,
    number: "155+",
    label: "Projects Completed",
    description: "Successfully delivered solutions",
  },
  {
    icon: Clock,
    number: "9+",
    label: "Years Experience",
    description: "In software development",
  },
  {
    icon: Globe,
    number: "17+",
    label: "Countries Served",
    description: "Global reach and impact",
  },
]

export default function CompanyStats() {
  return (
    <section className="py-12 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            These numbers reflect our commitment to delivering exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-blue-100 mb-1">{stat.label}</div>
                <div className="text-blue-200 text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
