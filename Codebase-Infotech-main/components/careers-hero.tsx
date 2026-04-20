"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, MapPin } from "lucide-react"
import Link from "next/link"

export default function CareersHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#020617] pt-24 pb-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl mb-6">
            <Briefcase className="h-3.5 w-3.5 mr-2" />
            We're Hiring
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1] mb-6">
            Join Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Team
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/60 leading-relaxed font-medium mb-4">
            We're a team of passionate developers, designers, and problem-solvers. Join us and help shape the future of technology — one product at a time.
          </p>
          <p className="text-base sm:text-lg text-blue-100/50 leading-relaxed font-medium mb-10">
            We believe in learning, growing, and delivering extraordinary digital solutions. If you're driven, curious, and creative — you'll fit right in.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#openings">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl group font-bold w-full sm:w-auto"
              >
                View Open Roles
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl w-full sm:w-auto font-bold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
          {[
            { label: "Open Positions", value: "5+" },
            { label: "Office Location", value: "Surat, India" },
            { label: "Work Mode", value: "On-site" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.03] border border-white/[0.05] rounded-2xl px-5 py-4"
            >
              <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                {stat.value}
              </div>
              <div className="text-blue-100/40 text-sm font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
