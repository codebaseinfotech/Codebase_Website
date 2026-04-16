import { Shield, Clock, Users, Award, Zap, HeadphonesIcon } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Proven Expertise",
    description: "Years of experience delivering high-quality IT solutions across various global industries.",
    gradient: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-600",
    bgClass: "bg-blue-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We pride ourselves on meeting strict deadlines and delivering architecture on schedule.",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-600",
    bgClass: "bg-cyan-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)]"
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Skilled developers, engineers and designers committed to bringing your vision to life.",
    gradient: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-600",
    bgClass: "bg-purple-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.2)]"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and strict quality control processes ensure flawless enterprise results.",
    gradient: "from-green-500/20 to-green-600/5",
    iconColor: "text-green-600",
    bgClass: "bg-green-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.2)]"
  },
  {
    icon: Zap,
    title: "Latest Technology",
    description: "We utilize cutting-edge tools and frameworks to build hyper scalable digital solutions.",
    gradient: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-600",
    bgClass: "bg-pink-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(219,39,119,0.2)]"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Ongoing global support and active maintenance to keep your applications running smoothly.",
    gradient: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-600",
    bgClass: "bg-amber-50",
    hoverShadow: "hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.2)]"
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Light theme decorative grid overlay */}
      <div className="absolute inset-0 opacity-[0.4]" style={{
        backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-100/50 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             <Shield className="w-4 h-4 mr-2" />
             The Codebase Advantage
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Codebase Infotech</span>?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
            We combine high-level technical expertise with deep business understanding to deliver solutions that drive real results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className={`group bg-white border border-slate-200 rounded-[2rem] p-8 text-center transition-all duration-500 hover:-translate-y-2 overflow-hidden relative ${feature.hoverShadow}`}>
                
                <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-bl-[3rem] transition-transform duration-700 group-hover:scale-150 opacity-40 z-0 ${feature.bgClass}`} />

                <div className="mb-6 flex justify-center relative z-10">
                  <div className={`w-16 h-16 ${feature.bgClass} flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-sm border border-slate-100`}>
                    <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm relative z-10">{feature.description}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
