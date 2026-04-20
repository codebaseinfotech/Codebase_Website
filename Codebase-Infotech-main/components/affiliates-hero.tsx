"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign } from "lucide-react"
import Link from "next/link"

export default function AffiliatesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-[#020617] pt-24 pb-16 overflow-hidden">
      {/* Background */}
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl">
              <DollarSign className="h-3.5 w-3.5 mr-2" />
              Affiliate Program
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1]">
                Refer &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Earn
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/60 leading-relaxed font-medium">
                Help your network discover how Codebase Infotech makes building and deploying world-class IT solutions simple — and earn rewards along the way.
              </p>
              <p className="text-base sm:text-lg text-blue-100/50 leading-relaxed font-medium">
                Join our affiliate program and start earning commissions by referring friends and business contacts. Use your custom affiliate link to track referrals and earnings effortlessly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a href="#how-it-works">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl group font-bold w-full sm:w-auto"
                >
                  How It Works
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg rounded-2xl w-full sm:w-auto font-bold"
                >
                  Become an Affiliate
                </Button>
              </Link>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-1 gap-5">
            {[
              {
                title: "Start in Seconds",
                desc: "Fill in a few details, register as an affiliate, and get your unique referral link straight to your inbox.",
              },
              {
                title: "Spread the Word",
                desc: "Share your link via email and social media. Let your network know how Codebase Infotech can help them scale.",
              },
              {
                title: "Earn for Every Referral",
                desc: "For every company you refer, you earn a commission on the invoice amount. Simple, transparent, rewarding.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-6 rounded-2xl hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-blue-100/50 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
