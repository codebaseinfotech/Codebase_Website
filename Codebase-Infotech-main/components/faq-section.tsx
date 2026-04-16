"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle, Mail, Phone, ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What specific technical services does Codebase Infotech offer?",
    answer:
      "We offer an elite range of enterprise services including mobile app architecture (iOS, Android, React Native, Flutter), complex web development (PHP, Laravel, CodeIgniter), highly scalable full-stack development (Node.js, React.js), enterprise CMS development (WordPress, Magento, WooCommerce), premium UI/UX design, and aggressive digital marketing protocols including SEO and advanced app store optimization.",
  },
  {
    question: "How long does it typically take to compile and deploy a project?",
    answer:
      "Deployment timelines vary depending on systemic complexity. Simple monolithic websites typically take 2-4 weeks, cross-platform mobile apps 2-4 months, and highly complex enterprise microservices or systems 4-8 months. We provide aggressively detailed Gantt charting during our initial consultation.",
  },
  {
    question: "Do you provide ongoing technical support and infrastructure maintenance?",
    answer:
      "Absolutely. We offer highly comprehensive SLA-backed post-launch support and lifecycle maintenance. This includes critical bug fixes, absolute security updates, extreme performance optimization, feature enhancements, and 24/7 technical support.",
  },
  {
    question: "Can you precisely explain your agile development workflow?",
    answer:
      "Our engineering workflow runs on strict agile CI/CD methodologies: 1) System Discovery & Planning, 2) High-fidelity Prototyping, 3) Scalable Development & Sandbox Testing, 4) Secure Deployment, 5) Redundant Support & Maintenance. We enforce complete transparency at every sprint.",
  },
  {
    question: "Are your engineers capable of interfacing with our existant internal team?",
    answer:
      "We are highly experienced in seamlessly interfacing with existing engineering teams. We can operate as an aggressive extension of your team, provide highly specific architectural expertise, or handle complete end-to-end development while ensuring zero friction with your infrastructure.",
  },
  {
    question: "What exact technology stacks do you specialize in?",
    answer:
      "We specialize strictly in modern, robust technologies including React, React Native, Flutter, Node.js, Next.js, PHP, Laravel, Python, Java, Swift, Kotlin, MongoDB, PostgreSQL, MySQL, AWS, Docker, Kubernetes, and many more. We continually evolve to deploy only cutting-edge architectures.",
  },
  {
    question: "How do you systematically ensure project code quality and maximum security?",
    answer:
      "We enforce uncompromising industry best practices including strict peer code reviews, automated CI pipeline testing, penetration testing, security audits, and absolute compliance with GDPR/HIPAA when applicable. QA includes comprehensive unit, integration, performance, and security testing.",
  },
  {
    question: "What are your specific enterprise pricing models?",
    answer:
      "We offer highly flexible strategic pricing models including fixed-price milestones, precision hourly rates, and dedicated engineering team retainers. Pricing depends purely on architectural complexity. We provide an exact quote upon full system review.",
  },
  {
    question: "Do you sign NDAs to ensure absolute IP confidentiality?",
    answer:
      "Yes, we treat IP confidentiality as absolute law. We sign strict NDAs and enforce internal Zero-Trust protocols to protect corporate data. All engineers are legally bound, and we utilize heavily encrypted development silos to secure your intellectual property.",
  },
  {
    question: "Can you handle app store submissions and algorithmic marketing?",
    answer:
      "Yes, we provide complete end-to-end launch services including absolute compliance submissions for the iOS App Store and Google Play Store. We additionally deploy algorithmic digital marketing including SEO, precision App Store Optimization (ASO), and high-ROI PPC campaigns.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-purple-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
             <HelpCircle className="w-4 h-4 mr-2" />
             Knowledge Base
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Find immediate systemic answers regarding our engineering services, technical protocols, and architectural workflows.
          </p>
        </div>

        {/* FAQ Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                openIndex === index ? "border-blue-300 shadow-md ring-1 ring-blue-100" : "border-slate-200 hover:border-blue-200 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
              >
                <h3 className={`text-base sm:text-lg font-bold pr-4 transition-colors ${openIndex === index ? "text-blue-700" : "text-slate-800"}`}>
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${openIndex === index ? "border-blue-200 bg-blue-50" : "border-slate-200 bg-slate-50"}`}>
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </div>
              </button>

              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 sm:px-8 pt-2">
                  <div className="w-full h-[1px] bg-gradient-to-r from-slate-200 to-transparent mb-6"></div>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Support CTA (Dark Theme) */}
        <div className="mt-16 bg-slate-900 border border-slate-800 p-8 sm:p-12 text-center rounded-[3rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-400 opacity-80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none group-hover:scale-150 transition-transform duration-1000" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-white mb-4">Awaiting Further <span className="text-cyan-400">Input?</span></h3>
            <p className="text-lg text-slate-300 font-medium mb-8 max-w-xl mx-auto">
              Our engineering team is actively standing by to provide highly personalized technical answers regarding your specific roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:codebaseinfotech@gmail.com" className="w-full sm:w-auto flex items-center justify-center h-14 px-8 bg-white text-blue-900 border-0 hover:bg-blue-50 font-bold rounded-xl transition-colors shadow-lg">
                <Mail className="h-5 w-5 mr-2" />
                Direct Email
              </a>
              <a href="tel:+917096859504" className="w-full sm:w-auto flex items-center justify-center h-14 px-8 border border-white/20 bg-white/5 text-white hover:bg-white/10 font-bold rounded-xl transition-all">
                <Phone className="h-5 w-5 mr-2" />
                Voice Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
