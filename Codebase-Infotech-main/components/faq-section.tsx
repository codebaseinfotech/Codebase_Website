"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What services does Codebase Infotech offer?",
    answer:
      "We offer a comprehensive range of services including mobile app development (iOS, Android, React Native, Flutter), web development (PHP, Laravel, CodeIgniter), full-stack development (Node.js, React.js), CMS development (WordPress, Magento, WooCommerce), UI/UX design, and digital marketing services including SEO and app store optimization.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary depending on complexity and scope. Simple websites typically take 2-4 weeks, mobile apps 2-4 months, and complex enterprise solutions 4-8 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance services. This includes bug fixes, security updates, performance optimization, feature enhancements, and technical support. We offer various maintenance packages to suit different needs and budgets.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our development process follows agile methodology with these key phases: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment & Launch, 5) Support & Maintenance. We maintain regular communication and provide progress updates throughout each phase.",
  },
  {
    question: "Can you work with our existing team or systems?",
    answer:
      "We're experienced in collaborating with existing teams and integrating with current systems. We can work as an extension of your team, provide specific expertise, or handle complete project development while ensuring seamless integration with your existing infrastructure.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern technologies including React, React Native, Flutter, Node.js, PHP, Laravel, Python, Java, Swift, Kotlin, MongoDB, PostgreSQL, MySQL, AWS, Docker, and many more. We stay updated with the latest technologies to provide cutting-edge solutions.",
  },
  {
    question: "How do you ensure project quality and security?",
    answer:
      "We follow industry best practices including code reviews, automated testing, security audits, and compliance with standards like GDPR, HIPAA when applicable. Our QA process includes unit testing, integration testing, performance testing, and security testing before deployment.",
  },
  {
    question: "What are your pricing models?",
    answer:
      "We offer flexible pricing models including fixed-price projects, hourly rates, and dedicated team models. Pricing depends on project complexity, timeline, and requirements. We provide detailed quotes after understanding your specific needs during our consultation.",
  },
  {
    question: "Do you sign NDAs and ensure confidentiality?",
    answer:
      "Yes, we take confidentiality very seriously. We're happy to sign NDAs and have strict internal policies to protect client information. All our team members are bound by confidentiality agreements, and we use secure development practices to protect your intellectual property.",
  },
  {
    question: "Can you help with app store submissions and digital marketing?",
    answer:
      "Yes, we provide end-to-end services including app store submissions for both iOS App Store and Google Play Store. We also offer digital marketing services including SEO, app store optimization (ASO), social media marketing, and PPC campaigns to help promote your digital products.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and how we can help your business grow.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our team is here to help. Get in touch for personalized answers to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@codebaseinfotech.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-slate-100 transition-colors"
                >
                  Email Us
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
