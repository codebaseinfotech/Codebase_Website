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
    number: "170+",
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
    <section className="py-20 bg-[#020617] relative overflow-hidden border-y border-white/[0.05]">
      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight">
             Our Impact in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Numbers</span>
          </h2>
          <p className="text-lg text-blue-100/60 max-w-2xl mx-auto font-medium">
            These metrics reflect our continuous commitment to delivering exceptional digital enterprise results globally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group bg-white/[0.03] backdrop-blur-md border border-white/[0.05] rounded-[2rem] p-8 hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/[0.05] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="h-8 w-8 text-cyan-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3">{stat.number}</div>
                <div className="text-lg font-bold text-white mb-2">{stat.label}</div>
                <div className="text-blue-100/50 text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
