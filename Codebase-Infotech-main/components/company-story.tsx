import { Lightbulb, Rocket, Trophy, Users, Award, Target, Zap } from "lucide-react"

export default function CompanyStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From a small startup to a trusted technology partner - here's how we've grown and evolved
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">The Beginning</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Codebase Infotech was founded with a simple yet powerful vision: to bridge the gap between innovative
                ideas and their digital implementation. What started as a small team of passionate developers has grown
                into a comprehensive IT solutions provider.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our journey began when we recognized that many businesses struggled to find reliable technology partners
                who could understand their unique needs and deliver solutions that truly make a difference.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">Today & Beyond</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Today, we're proud to have helped over 150 companies across various industries transform their
                operations, reach new customers, and achieve sustainable growth through technology.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600"></div>

            <div className="space-y-12">
              <div className="relative flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <div className="ml-6 bg-white p-6 rounded-2xl shadow-lg border border-blue-100 flex-1">
                  <div className="text-sm text-blue-600 font-semibold mb-1">2016</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Foundation</h4>
                  <p className="text-slate-600">
                    Started with a vision to make technology accessible and impactful for businesses of all sizes.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div className="ml-6 bg-white p-6 rounded-2xl shadow-lg border border-cyan-100 flex-1">
                  <div className="text-sm text-cyan-600 font-semibold mb-1">2020-2022</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Growth & Expansion</h4>
                  <p className="text-slate-600">
                    Expanded our services to include full-stack development, mobile apps, AI solutions, and digital
                    marketing.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <div className="ml-6 bg-white p-6 rounded-2xl shadow-lg border border-purple-100 flex-1">
                  <div className="text-sm text-purple-600 font-semibold mb-1">2023-Present</div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Industry Leadership</h4>
                  <p className="text-slate-600">
                    A trusted partner for businesses seeking innovative, reliable, and scalable technology solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900">90+</div>
            <div className="text-sm text-slate-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
            <Target className="h-8 w-8 text-cyan-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900">170+</div>
            <div className="text-sm text-slate-600">Projects</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
            <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900">9+</div>
            <div className="text-sm text-slate-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100">
            <Zap className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-slate-900">99.9%</div>
            <div className="text-sm text-slate-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
