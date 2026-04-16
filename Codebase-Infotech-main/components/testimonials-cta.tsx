import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Star, TrendingUp, Cpu, Award } from "lucide-react"

export default function TestimonialsCTA() {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-1/2 left-1/4 w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Spotlight */}
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-[3rem] p-8 sm:p-16 text-center shadow-[0_0_80px_rgba(37,99,235,0.15)] mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50" />

          {/* Glowing Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 border border-white/10 flex items-center justify-center mx-auto mb-8 rounded-3xl group-hover:scale-110 transition-transform duration-500">
               <Star className="h-10 w-10 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Success Stories</span>
            </h2>
            <p className="text-lg lg:text-xl text-blue-100/70 font-medium mb-10 max-w-3xl mx-auto leading-relaxed">
              Ready to architect the next viral hit or enterprise powerhouse? Let's aggressively engineer your brilliant ideas into 
              reality—a solution that your customers will unequivocally love and obsessively recommend.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl group font-bold w-full sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl w-full sm:w-auto font-bold group"
              >
                <MessageSquare className="mr-2 h-5 w-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Why Choose Us Minified */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 border-t border-white/[0.06] pt-16">
          <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-[2rem] hover:bg-white/[0.05] transition-all duration-500 group text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Award className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Proven Track Record</h3>
            <p className="text-blue-100/50 leading-relaxed text-sm font-medium">
              With 170+ universally successful architectural deployments and 99% client retention, we wield the absolute experience required to scale.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-[2rem] hover:bg-white/[0.05] transition-all duration-500 group text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Cpu className="h-8 w-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Transparent Engineering</h3>
            <p className="text-blue-100/50 leading-relaxed text-sm font-medium">
              We keep you perfectly synced every step of the agile engineering process, maintaining transparent operations through our CI/CD pipelines.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/[0.05] p-8 rounded-[2rem] hover:bg-white/[0.05] transition-all duration-500 group text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <TrendingUp className="h-8 w-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Results-Driven Scaling</h3>
            <p className="text-blue-100/50 leading-relaxed text-sm font-medium">
              We focus mercilessly on delivering massive measurable revenue results and performance gains that drive your core business metrics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
