"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const partnerBenefits = [
  {
    title: "Help a Business Owner",
    desc: "Assist your clients in accessing world-class IT solutions — from software development and mobile apps to digital marketing and IT infrastructure. All with ease, efficiency, and cost-effectiveness.",
  },
  {
    title: "Earn Perks and Rewards",
    desc: "Explore a variety of partnership packages designed to deliver mutual benefits for both you and your clients. The more you refer, the more you earn.",
  },
  {
    title: "Partner with the Market Leader",
    desc: "Backed by industry-leading experts and top-tier resources, Codebase Infotech drives continuous global expansion for our partners and their clients.",
  },
]

const partnerTypes = [
  {
    type: "Technology Partner",
    desc: "Co-develop and co-deliver projects with us. Bring your expertise and we bring ours — together we deliver better solutions.",
    cta: "Become a Technology Partner",
  },
  {
    type: "Reseller Partner",
    desc: "Resell our IT solutions and services under your brand. We provide the products and support; you own the client relationship.",
    cta: "Become a Reseller",
  },
  {
    type: "Referral Partner",
    desc: "Know businesses who need IT solutions? Refer them and earn commissions on every project they complete with us.",
    cta: "Refer & Earn",
    href: "/affiliates",
  },
]

export default function PartnersBenefits() {
  return (
    <>
      {/* Benefits */}
      <section id="become-partner" className="py-24 bg-[#020617] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl mb-6">
              Why Partner With Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Partnership{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Benefits
              </span>
            </h2>
            <p className="text-blue-100/50 text-lg max-w-xl mx-auto">
              Your clients need great IT solutions. Our partnership ensures they get exactly that.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {partnerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 rounded-[2rem] hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300"
              >
                <h3 className="text-white font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-blue-100/50 leading-relaxed text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>

          {/* Partner Types */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Partnership Type
              </span>
            </h2>
            <p className="text-blue-100/50 text-lg max-w-xl mx-auto">
              We offer flexible models to match how you want to collaborate with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((pt) => (
              <div
                key={pt.type}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] p-8 rounded-[2rem] hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col"
              >
                <h3 className="text-white font-bold text-lg mb-3">{pt.type}</h3>
                <p className="text-blue-100/50 leading-relaxed text-sm flex-1 mb-6">{pt.desc}</p>
                <Link href={pt.href ?? "/contact"}>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 rounded-xl font-bold w-full h-10 shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[0_0_30px_rgba(37,99,235,0.45)] transition-all"
                  >
                    {pt.cta}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] rounded-[3rem] p-8 sm:p-12 max-w-3xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 rounded-t-[3rem]" />
              <h3 className="text-3xl font-black text-white mb-4">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Partner With Us?
                </span>
              </h3>
              <p className="text-blue-100/50 mb-8 text-lg">
                Get in touch with our team and let's explore how we can grow together.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 px-10 text-base rounded-2xl group font-bold"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
