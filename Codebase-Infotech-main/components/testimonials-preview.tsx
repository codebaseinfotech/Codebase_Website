"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content:
      "Codebase Infotech completely transformed our business with their outstanding mobile app development services. The team was highly professional, incredibly responsive, and consistently delivered results that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Shilu E-Commerce Plus",
    role: "CTO",
    content:
      "Their exceptional expertise in app and web development helped us create a stunning e-commerce platform. Within the first quarter after launch, our sales increased by an impressive 150%.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Digital Marketing Pro",
    role: "Marketing Director",
    content:
      "The UI/UX design services from Codebase Infotech were exceptional. They have a deep understanding of user experience and crafted designs that are both visually stunning and highly conversion-focused.",
    rating: 5,
  },
]

export default function TestimonialsPreview() {
  const router = useRouter()
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400">
             <Star className="w-4 h-4 mr-2" />
             Client Success
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Clients Say</span>
          </h2>
          <p className="text-lg text-blue-100/60 max-w-2xl mx-auto font-medium">
            Don't just take our word for it—read real stories from global enterprise leaders we've helped succeed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-[2rem] p-8 hover:bg-white/[0.08] hover:border-white/[0.1] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] flex flex-col relative h-full">
              
              <Quote className="absolute top-8 right-8 w-12 h-12 text-white/[0.05] group-hover:text-cyan-500/10 transition-colors duration-500" />
              
              {/* Rating */}
              <div className="flex mb-6 space-x-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-cyan-400 fill-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-blue-100/70 mb-8 leading-relaxed flex-grow text-sm italic relative z-10">"{testimonial.content}"</p>

              {/* Author */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center font-bold text-white shadow-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-xs text-cyan-400 font-medium">
                    {testimonial.role}, <span className="text-blue-100/50">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to testimonials page */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-transparent border border-white/10 text-white hover:bg-white/5 h-14 sm:h-16 px-8 rounded-2xl group transition-all duration-300 font-bold" 
            onClick={() => router.push("/testimonials")}
          >
            View All Testimonials
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
