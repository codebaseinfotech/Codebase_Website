import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { FileText, Scale, ShieldCheck, AlertTriangle, Ban, RefreshCw, Globe, Mail, Gavel } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and Conditions for Codebase Infotech. Read our terms of service, usage policies, intellectual property rights, and service agreements.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "April 15, 2026";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* ====== Hero ====== */}
        <section className="relative bg-[#020617] pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/15 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[45%] h-[45%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-indigo-300 mb-6">
              <FileText className="w-3.5 h-3.5 mr-2" />
              Legal
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-base sm:text-lg text-indigo-100/60 max-w-2xl mx-auto font-medium">
              Please read these terms carefully before using our services or website.
            </p>
            <p className="text-sm text-indigo-100/40 mt-4 font-medium">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </section>

        {/* ====== Content ====== */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-10 sm:space-y-12">

              {/* Introduction */}
              <div>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Welcome to Codebase Infotech. These Terms and Conditions (&quot;Terms&quot;) govern your use of our 
                  website <span className="font-semibold text-slate-900">codebaseinfotech.com</span> and any
                  services, products, or content provided by Codebase Infotech (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                  By accessing or using our website and services, you agree to be bound by these Terms. If you
                  do not agree with any part of these Terms, you must not use our website or services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed">
                    By using our website or engaging our services, you confirm that you are at least 18 years
                    of age, have the legal capacity to enter into a binding agreement, and agree to comply with
                    all applicable laws and regulations. These Terms constitute a legally binding agreement
                    between you and Codebase Infotech.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. Services</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed mb-3">
                    Codebase Infotech provides a wide range of IT solutions and services, including but not limited to:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Mobile Application Development (Android, iOS, Cross-Platform)",
                      "Web Application Development and Website Design",
                      "UI/UX Design and Prototyping",
                      "Full Stack Development (MERN, MEAN, LAMP stacks)",
                      "CMS Development (WordPress, Shopify, Custom CMS)",
                      "Digital Marketing and SEO Services",
                      "Custom Software Solutions and API Integration",
                      "IT Consulting and Technical Support",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed mt-3">
                    All services are subject to individual project agreements, proposals, or contracts executed
                    between the client and Codebase Infotech.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. Intellectual Property Rights</h2>
                </div>
                <div className="pl-0 sm:pl-[52px] space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    All content on this website — including text, graphics, logos, images, code, software, and
                    design elements — is the property of Codebase Infotech or its licensors and is protected
                    by copyright, trademark, and other intellectual property laws.
                  </p>
                  <div className="bg-amber-50/70 rounded-xl p-4 border border-amber-100">
                    <p className="text-amber-800 text-sm leading-relaxed">
                      <span className="font-bold">Important:</span> You may not reproduce, distribute, modify,
                      create derivative works of, publicly display, or otherwise use any content from this
                      website without prior written consent from Codebase Infotech.
                    </p>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Upon full payment for project deliverables (as outlined in the project agreement), ownership
                    of the final deliverables transfers to the client unless otherwise agreed in writing.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0">
                    <Ban className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Prohibited Use</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed mb-3">You agree not to:</p>
                  <ul className="space-y-2">
                    {[
                      "Use our website or services for any unlawful purpose",
                      "Attempt to gain unauthorized access to our systems, servers, or networks",
                      "Transmit any viruses, malware, or harmful code",
                      "Engage in any activity that interferes with or disrupts our services",
                      "Copy, scrape, or extract content from our website for commercial purposes",
                      "Misrepresent your identity or affiliation with any person or entity",
                      "Use automated tools (bots, crawlers) without written permission",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Payment Terms</h2>
                </div>
                <div className="pl-0 sm:pl-[52px] space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    Payment terms for services are outlined in the individual project agreement or proposal.
                    General terms include:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "A non-refundable advance payment may be required before project commencement",
                      "Milestone-based payments as specified in the project agreement",
                      "Late payments may incur additional charges or project suspension",
                      "All prices are exclusive of applicable taxes unless stated otherwise",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Limitation of Liability</h2>
                </div>
                <div className="pl-0 sm:pl-[52px] space-y-3">
                  <p className="text-slate-600 leading-relaxed">
                    To the maximum extent permitted by law, Codebase Infotech shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages arising from your use
                    of our website or services, including but not limited to loss of profits, data, business
                    opportunities, or goodwill.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Our total liability for any claim arising out of these Terms or our services shall not
                    exceed the total amount paid by you for the specific service giving rise to the claim.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7. Confidentiality</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed">
                    Both parties agree to keep confidential all proprietary and sensitive information shared
                    during the course of the engagement. This obligation survives the termination of the
                    business relationship and remains in effect for a period of two (2) years thereafter.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                    <Gavel className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8. Governing Law</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed">
                    These Terms shall be governed by and construed in accordance with the laws of India.
                    Any disputes arising under or in connection with these Terms shall be subject to the
                    exclusive jurisdiction of the courts of Surat, Gujarat, India.
                  </p>
                </div>
              </div>

              {/* Section 9 — Contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-rose-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">9. Contact Us</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="bg-gradient-to-br from-slate-50 to-indigo-50/50 rounded-2xl p-5 sm:p-6 border border-slate-100 space-y-2">
                    <p className="text-slate-900 font-bold text-base">Codebase Infotech</p>
                    <p className="text-slate-600 text-sm">201, Akshar Square, opp. Cancer Hospital, Dabholi, Surat, Gujarat, India - 395004</p>
                    <p className="text-slate-600 text-sm">
                      Email:{" "}
                      <a href="mailto:codebaseinfotech@gmail.com" className="text-blue-600 hover:underline font-medium">
                        codebaseinfotech@gmail.com
                      </a>
                    </p>
                    <p className="text-slate-600 text-sm">
                      Phone:{" "}
                      <a href="tel:+917096859504" className="text-blue-600 hover:underline font-medium">
                        +91 70968 59504
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
