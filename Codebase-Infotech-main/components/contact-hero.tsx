import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, Clock, MapPin } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#020617] pt-24 pb-16 overflow-hidden">
      {/* Advanced Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl">
               <Phone className="w-4 h-4 mr-2" />
               Connect With Us
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1]">
                Let's Get In{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Touch
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/60 leading-relaxed font-medium">
                Ready to aggressively transform your business with scalable, cutting-edge technology? Let's discuss your brilliant project and architect something amazing together.
              </p>
              <p className="text-base sm:text-lg text-blue-100/50 leading-relaxed font-medium">
                Our team is standing by to systematically answer your questions, provide expert architectural guidance, and securely help you achieve your digital dominance goals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#contact-form">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl group font-bold w-full sm:w-auto"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </a>
              <a href="tel:+917096859504">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl w-full sm:w-auto font-bold"
                >
                  Schedule Call
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 relative">
            <a href="tel:+917096859504" className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-6 sm:p-8 rounded-[2rem] shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 group flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <Phone className="h-7 w-7 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Call Us</h3>
                <p className="text-blue-100/50 text-sm mb-2 font-medium">Speak directly with our senior experts</p>
                <p className="text-cyan-400 font-bold tracking-wider">+91 70968 59504</p>
              </div>
            </a>

            <a href="mailto:codebaseinfotech@gmail.com" className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-6 sm:p-8 rounded-[2rem] shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 group flex items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <Mail className="h-7 w-7 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Email Us</h3>
                <p className="text-blue-100/50 text-sm mb-2 font-medium">Get a detailed comprehensive proposal</p>
                <p className="text-cyan-400 font-bold tracking-wider text-sm sm:text-base break-all">codebaseinfotech@gmail.com</p>
              </div>
            </a>

            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-6 sm:p-8 rounded-[2rem] shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.2)] hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 group flex items-start gap-6 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                <Clock className="h-7 w-7 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Business Hours</h3>
                <p className="text-blue-100/50 text-sm mb-2 font-medium">Monday - Saturday</p>
                <p className="text-purple-400 font-bold tracking-wider">9:00 AM - 6:00 PM (IST)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
