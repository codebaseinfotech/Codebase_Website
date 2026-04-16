import { Target, Eye, Heart, Compass } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             <Compass className="w-4 h-4 mr-2" />
             Core Principles
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Mission & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Vision</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Our guiding principles that drive our engineering excellence and long-term partnerships.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="group bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-12 text-center hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full transition-transform duration-700 group-hover:scale-150 z-0" />
            
            <div className="w-20 h-20 bg-blue-50 border border-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-sm">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 relative z-10 group-hover:text-blue-700 transition-colors">Our Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium relative z-10">
              To empower global businesses through ultra-innovative technology solutions that fuel exponential growth, 
              enhance operational efficiency, and ensure long-term digital dominance. We are aggressively dedicated to delivering exceptional value 
              with cutting-edge development and creative architectural design.
            </p>
          </div>

          {/* Vision */}
          <div className="group bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-12 text-center hover:border-purple-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-bl-full transition-transform duration-700 group-hover:scale-150 z-0" />
            
            <div className="w-20 h-20 bg-purple-50 border border-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-sm">
              <Eye className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6 relative z-10 group-hover:text-purple-700 transition-colors">Our Vision</h3>
            <p className="text-lg text-slate-600 leading-relaxed font-medium relative z-10">
              To cement our position as the absolute leading enterprise technology partner that turns disruptive ideas into hyper-scalable reality.
              We aspire to create a future where infrastructure seamlessly aligns with ambitious business goals to deliver massive impact.
            </p>
          </div>
        </div>

        {/* Core Values Condensed */}
        <div className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-12 text-center overflow-hidden relative group hover:shadow-xl transition-all duration-500">
          <div className="w-20 h-20 bg-pink-50 border border-pink-100 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10 shadow-sm">
            <Heart className="h-10 w-10 text-pink-600" />
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-10 relative z-10">Our Foundation</h3>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <h4 className="font-bold text-cyan-600 mb-3 text-lg">Innovation</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We relentlessly embrace disruptive technologies and creative lateral thinking to solve complex enterprise challenges.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <h4 className="font-bold text-purple-600 mb-3 text-lg">Quality</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We rigorously enforce the absolute highest standards of code and design in every single product we deploy.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <h4 className="font-bold text-blue-600 mb-3 text-lg">Partnership</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We engineer lasting strategic relationships fundamentally based on deep trust, pure transparency, and shared scaling success.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
