import { Lightbulb, Rocket, Trophy, Users, Award, Target, Zap, Activity } from "lucide-react"

export default function CompanyStory() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[40%] h-[40%] bg-cyan-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             <Activity className="w-4 h-4 mr-2" />
             Evolution
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Journey</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
            From a small startup to a globally trusted technology partner — discover how we've grown and evolved.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-12">
            <div className="space-y-4 group">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                 <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-blue-200 mr-4 rounded-full" />
                 The Beginning
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Codebase Infotech was founded with a simple yet powerful vision: to bridge the gap between innovative
                ideas and their digital implementation. What started as a small team of passionate developers has grown
                into a comprehensive enterprise IT solutions provider.
              </p>
            </div>

            <div className="space-y-4 group">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                 <span className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-cyan-200 mr-4 rounded-full" />
                 Our Mission
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Our journey accelerated when we recognized that many businesses struggled to find reliable technology partners
                who could intimately understand their unique needs and deliver solutions that truly drive hyper-growth.
              </p>
            </div>

            <div className="space-y-4 group">
              <h3 className="text-2xl font-bold text-slate-900 flex items-center">
                 <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-purple-200 mr-4 rounded-full" />
                 Today & Beyond
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Today, we're proud to have helped over 150 companies across various global industries transform their
                operations, expand into new markets, and achieve sustainable digital dominance.
              </p>
            </div>
          </div>

          {/* Timeline Node Map */}
          <div className="relative pl-4 sm:pl-0">
            {/* Vertical line */}
            <div className="absolute left-[2.2rem] top-8 bottom-8 w-[2px] bg-slate-200"></div>

            <div className="space-y-12">
              <div className="relative flex items-start group">
                <div className="w-14 h-14 bg-white border-[3px] border-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0 z-10 mt-2">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-8 bg-white border border-slate-200 p-6 sm:p-8 rounded-[2rem] flex-1 hover:border-blue-200 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-500">
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-black uppercase tracking-wider rounded-lg mb-4 border border-blue-100">2016</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Foundation</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Started with a vision to make advanced technology architecture accessible and highly impactful for businesses of all scales.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start group">
                <div className="w-14 h-14 bg-white border-[3px] border-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0 z-10 mt-2">
                  <Rocket className="h-6 w-6 text-cyan-600" />
                </div>
                <div className="ml-8 bg-white border border-slate-200 p-6 sm:p-8 rounded-[2rem] flex-1 hover:border-cyan-200 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)] transition-all duration-500">
                  <div className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 text-sm font-black uppercase tracking-wider rounded-lg mb-4 border border-cyan-100">2020-2022</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Expansion Phase</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Expanded operations globally. Included full-stack development, mobile apps, Machine Learning solutions, and digital strategy.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start group">
                <div className="w-14 h-14 bg-white border-[3px] border-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 flex-shrink-0 z-10 mt-2">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-8 bg-white border border-slate-200 p-6 sm:p-8 rounded-[2rem] flex-1 hover:border-purple-200 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] transition-all duration-500">
                  <div className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-sm font-black uppercase tracking-wider rounded-lg mb-4 border border-purple-100">2023-Present</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">Industry Leaders</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Solidified as a premium trusted partner for enterprises seeking innovative, reliable, and horizontally scalable technology stacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-200">
          <div className="text-center p-6 bg-white border border-slate-200 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-500 group">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-slate-900 mb-1">90+</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white border border-slate-200 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-500 group">
            <Target className="h-8 w-8 text-cyan-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-slate-900 mb-1">170+</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center p-6 bg-white border border-slate-200 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-500 group">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-slate-900 mb-1">9+</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white border border-slate-200 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-500 group">
            <Zap className="h-8 w-8 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-3xl font-black text-slate-900 mb-1">99.9%</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
