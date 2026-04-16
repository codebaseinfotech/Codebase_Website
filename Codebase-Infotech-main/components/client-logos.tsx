import { Building2 } from "lucide-react"

export default function ClientLogos() {
  const clients = [
    { name: "TechStart Inc.", logo: "/client-logo-techstart.png" },
    { name: "Shilu E-Commerce Plus", logo: "/client-logo-ecommerce.png" },
    { name: "Digital Marketing Pro", logo: "/client-logo-marketing.png" },
    { name: "Restaurant Chain Group", logo: "/client-logo-restaurant.png" },
    { name: "FitnessPro Studios", logo: "/client-logo-fitness.png" },
    { name: "Luxury Fashion Brand", logo: "/client-logo-fashion.png" },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-[0.4]" style={{
        backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-blue-50/50 via-transparent to-cyan-50/50 blur-[50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             <Building2 className="w-4 h-4 mr-2" />
             Trusted Partners
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Leading Brands</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            We're insanely proud to work with disruptive, transformative companies across the globe.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 sm:h-32 bg-white rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
            >
              <span className="text-xs font-bold text-slate-400 group-hover:text-blue-600 opacity-80 group-hover:opacity-100 transition-all duration-300 text-center px-4 uppercase tracking-wider group-hover:scale-105">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-16 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          <div className="group">
            <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2 group-hover:scale-110 transition-transform">90+</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Satisfied Clients</div>
          </div>
          <div className="group">
            <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-2 group-hover:scale-110 transition-transform">170+</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Projects Completed</div>
          </div>
          <div className="group">
            <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-2 group-hover:scale-110 transition-transform">99%</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Client Retention</div>
          </div>
          <div className="group">
            <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2 group-hover:scale-110 transition-transform">4.9/5</div>
            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
