"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: "01",
    title: "Register as an Affiliate",
    desc: "Click the button below, fill in a few details, and you'll be a registered Codebase Infotech Affiliate in no time. We'll send your referral link straight to your inbox.",
  },
  {
    step: "02",
    title: "Share Your Referral Link",
    desc: "Share your unique referral link with your network and friends via email and social media. Let them know how Codebase Infotech can help them build and scale their digital products.",
  },
  {
    step: "03",
    title: "Earn for Every Referral",
    desc: "For every company or individual you refer who becomes a client, you'll earn a commission on each invoice. It's a simple way to generate meaningful income while helping others succeed.",
  },
]

const faqs = [
  {
    q: "Who can become an affiliate?",
    a: "Anyone can join — freelancers, agencies, influencers, or individuals who know business owners looking for IT solutions.",
  },
  {
    q: "How do I track my referrals?",
    a: "After registering, you'll receive a unique referral link. Every successful referral made through your link is tracked and credited to your account.",
  },
  {
    q: "When do I get paid?",
    a: "Commission payouts are processed after the referred client completes their payment. You'll be notified and paid promptly.",
  },
  {
    q: "Is there a cost to join?",
    a: "Absolutely not. Joining the Codebase Infotech affiliate program is completely free.",
  },
]

export default function AffiliatesSteps() {
  return (
    <>
      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-[#020617] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl mb-6">
              Simple Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              How It{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Works
              </span>
            </h2>
            <p className="text-blue-100/50 text-lg max-w-xl mx-auto">
              3 simple steps to start earning as a Codebase Infotech affiliate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <div
                key={step.step}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-8 rounded-[2rem] hover:border-blue-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-300 mb-6 opacity-40 group-hover:opacity-70 transition-opacity">
                  {step.step}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-blue-100/50 leading-relaxed text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white border-0 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(37,99,235,0.6)] transition-all duration-500 h-14 px-10 text-base rounded-2xl group font-bold"
              >
                Become an Affiliate
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#020617] border-t border-white/[0.05]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Questions
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
              >
                <h4 className="text-white font-bold mb-2">{faq.q}</h4>
                <p className="text-blue-100/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
