import { Smartphone, Globe, Code, Palette, ShoppingCart, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native iOS, Android, and cross-platform mobile applications that drive engagement.",
    features: ["React Native", "Flutter", "iOS Development", "Android Development"],
    iconBg: "bg-blue-50 text-blue-600",
    hoverGlow: "group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)]",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and enterprise-grade web applications.",
    features: ["React.js", "Node.js", "PHP", "Laravel"],
    iconBg: "bg-cyan-50 text-cyan-600",
    hoverGlow: "group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)]",
  },
  {
    icon: ShoppingCart,
    title: "CMS Development",
    description: "Custom content management systems and highly scalable e-commerce solutions.",
    features: ["WooCommerce", "Magento", "OpenCart", "Shopify"],
    iconBg: "bg-purple-50 text-purple-600",
    hoverGlow: "group-hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.2)]",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "Complete end-to-end development solutions for complex business logic.",
    features: ["MERN Stack", "MEAN Stack", "Next.js", "Enterprise APIs"],
    iconBg: "bg-green-50 text-green-600",
    hoverGlow: "group-hover:shadow-[0_20px_40px_-15px_rgba(22,163,74,0.2)]",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered design experiences engineered for maximum conversion.",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    iconBg: "bg-indigo-50 text-indigo-600",
    hoverGlow: "group-hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.2)]",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing and aggressive SEO growth strategies.",
    features: ["SEO Optimization", "Social Media", "App Store Optimization", "Analytics"],
    iconBg: "bg-orange-50 text-orange-600",
    hoverGlow: "group-hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.2)]",
  },
]

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             Strategic Excellence
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            We offer universally comprehensive IT solutions designed exclusively to help your enterprise thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className={`group bg-white border border-slate-200 rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative overflow-hidden ${service.hoverGlow}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[4rem] transition-transform duration-700 group-hover:scale-150 -z-10 group-hover:bg-blue-50/50" />

                <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm font-semibold text-slate-500 flex items-center group-hover:text-slate-700 transition-colors">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-sm"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/services" className="mt-auto inline-flex items-center text-sm font-black text-blue-600 hover:text-cyan-600 transition-colors group/link">
                   Explore Capabilities
                   <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/services" className="bg-slate-900 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-500 h-14 sm:h-16 px-10 text-base sm:text-lg rounded-full font-bold inline-flex items-center justify-center group">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
