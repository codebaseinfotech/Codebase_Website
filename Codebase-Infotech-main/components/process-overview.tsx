import { Search, Lightbulb, Code, Rocket } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We analyze your requirements, understand your business goals, and identify the best technical approach.",
    duration: "1-2 weeks",
    gradient: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-600",
    bgClass: "bg-blue-50",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    icon: Lightbulb,
    title: "Design & Planning",
    description: "Our team creates detailed wireframes, UI/UX designs, and technical architecture blueprints.",
    duration: "2-3 weeks",
    gradient: "from-cyan-500/20 to-cyan-600/5",
    iconColor: "text-cyan-600",
    bgClass: "bg-cyan-50",
    badgeClass: "bg-cyan-100 text-cyan-700",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "We build your solution using agile methodology with regular transparent updates and QA.",
    duration: "4-12 weeks",
    gradient: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-600",
    bgClass: "bg-purple-50",
    badgeClass: "bg-purple-100 text-purple-700",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We securely deploy your solution and provide ongoing maintenance for optimal performance.",
    duration: "Ongoing",
    gradient: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-600",
    bgClass: "bg-pink-50",
    badgeClass: "bg-pink-100 text-pink-700",
  },
]

export default function ProcessOverview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-1/4 w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             <Code className="w-4 h-4 mr-2" />
             Strategic Workflow
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
             Our Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Process</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
            A proven, agile methodology that ensures transparent communication and successful project delivery every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative group">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-[2px] bg-slate-100 z-0 overflow-hidden">
                     <div className="w-full h-full bg-blue-400 opacity-50 animate-[translateX_2s_infinite]" />
                  </div>
                )}

                <div className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] relative z-10 h-full flex flex-col">
                  
                  <div className={`w-16 h-16 rounded-2xl ${step.bgClass} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 relative border border-slate-100 shadow-sm`}>
                    <IconComponent className={`h-8 w-8 ${step.iconColor}`} />
                    <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-slate-900 flex items-center justify-center text-[11px] font-bold text-white shadow-md">
                       {index + 1}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-8 flex-grow">{step.description}</p>
                  
                  <div className={`${step.badgeClass} px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center w-fit self-start uppercase tracking-wider transition-colors`}>
                    <span className={`w-2 h-2 rounded-full mr-2 animate-pulse ${step.iconColor.replace('text-', 'bg-')}`} />
                    {step.duration}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
