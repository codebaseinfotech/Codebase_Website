import { Shield, Zap, Users, Award, Clock, HeadphonesIcon } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with absolute honesty, transparency, and elite ethical practices in all our global interactions.",
    gradient: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-600",
    bgClass: "bg-blue-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We relentlessly explore next-gen technologies and agile methodologies to deliver cutting-edge software solutions.",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-600",
    bgClass: "bg-cyan-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)]"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the tremendous power of teamwork and collaborate intimately with our clients as true partners.",
    gradient: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-600",
    bgClass: "bg-purple-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.2)]"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for architectural perfection in every project, aggressively ensuring the highest quality deliverables.",
    gradient: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-600",
    bgClass: "bg-pink-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(219,39,119,0.2)]"
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We deliver on our promises, meeting strict enterprise deadlines and exceeding expectations consistently.",
    gradient: "from-green-500/20 to-green-600/5",
    iconColor: "text-green-600",
    bgClass: "bg-green-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.2)]"
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    description: "We provide deep ongoing support and scalable maintenance to ensure long-term, unshakeable success.",
    gradient: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-600",
    bgClass: "bg-amber-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.2)]"
  },
]

export default function CompanyValues() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Grid and Glow */}
      <div className="absolute inset-0 opacity-[0.4]" style={{
        backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute center w-[60%] h-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-50/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             <Award className="w-4 h-4 mr-2" />
             Core Culture
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Values</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            The fundamental principles that unconditionally guide our architectural work and define our robust company culture.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div key={index} className={`group bg-white border border-slate-200 rounded-[2rem] p-8 text-center transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${value.hoverShadow}`}>
                
                {/* Glow affect */}
                <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-bl-full transition-transform duration-700 group-hover:scale-150 opacity-40 z-0 ${value.bgClass}`} />

                <div className={`w-16 h-16 ${value.bgClass} border border-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-sm`}>
                  <IconComponent className={`h-8 w-8 ${value.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-blue-700 transition-colors">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm relative z-10">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
