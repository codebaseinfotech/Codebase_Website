import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Shield, Eye, Lock, Database, Globe, UserCheck, Bell, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Codebase Infotech. Learn how we collect, use, and protect your personal information when you use our services and website.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "April 15, 2026";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* ====== Hero ====== */}
        <section className="relative bg-[#020617] pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[45%] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-300 mb-6">
              <Shield className="w-3.5 h-3.5 mr-2" />
              Legal
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-blue-100/60 max-w-2xl mx-auto font-medium">
              Your privacy is important to us. This policy explains how we collect, use and protect your information.
            </p>
            <p className="text-sm text-blue-100/40 mt-4 font-medium">
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
                  Codebase Infotech (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting and
                  respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you visit our website{" "}
                  <span className="font-semibold text-slate-900">codebaseinfotech.com</span>{" "}
                  or engage with our services. Please read this policy carefully.
                </p>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Database className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">1. Information We Collect</h2>
                </div>
                <div className="pl-0 sm:pl-[52px] space-y-4">
                  <p className="text-slate-600 leading-relaxed">We may collect the following types of information:</p>
                  <div className="space-y-3">
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">Personal Information</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Name, email address, phone number, company name, and any other information you voluntarily
                        provide through our contact forms, project inquiries, or email communications.
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">Usage Data</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Information about how you access and use our website, including IP address, browser type,
                        operating system, referring URLs, pages visited, time spent on pages, and clickstream data.
                      </p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <h3 className="font-semibold text-slate-900 text-sm mb-1">Cookies and Tracking Technologies</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        We use cookies, web beacons, and similar tracking technologies to collect information about
                        your browsing activities. You can manage cookie preferences through your browser settings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-cyan-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">2. How We Use Your Information</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed mb-3">We use the information we collect to:</p>
                  <ul className="space-y-2">
                    {[
                      "Respond to your inquiries and provide customer support",
                      "Deliver, maintain, and improve our IT services and solutions",
                      "Send project updates, proposals, and related communications",
                      "Analyse website usage and improve user experience",
                      "Send promotional communications (with your consent) about our services",
                      "Comply with legal obligations and protect our rights",
                      "Detect, prevent, and address technical or security issues",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">3. Disclosure of Your Information</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed mb-3">
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information only in the following circumstances:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "With trusted service providers who assist us in operating our website and delivering services (e.g., hosting, analytics, payment processing)",
                      "When required by law, subpoena, or other legal process",
                      "To protect the rights, property, or safety of Codebase Infotech, our clients, or others",
                      "In connection with a merger, acquisition, or sale of all or part of our business",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">4. Data Security</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your
                    personal information against unauthorized access, alteration, disclosure, or destruction.
                    These measures include encryption, secure servers, firewalls, and access controls. However,
                    no method of transmission over the Internet or method of electronic storage is 100% secure,
                    and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">5. Your Rights</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed mb-3">Depending on your jurisdiction, you may have the right to:</p>
                  <ul className="space-y-2">
                    {[
                      "Access the personal data we hold about you",
                      "Request correction of inaccurate or incomplete data",
                      "Request deletion of your personal data",
                      "Object to or restrict the processing of your data",
                      "Data portability — receive your data in a structured, machine-readable format",
                      "Withdraw consent at any time where processing is based on consent",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-rose-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">6. Third-Party Links</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed">
                    Our website may contain links to third-party websites or services. We are not responsible for
                    the privacy practices or content of those third-party sites. We encourage you to review the
                    privacy policies of any third-party sites you visit.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">7. Changes to This Policy</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page
                    with an updated &quot;Last Updated&quot; date. Your continued use of our website after any modifications
                    indicates your acceptance of the updated policy.
                  </p>
                </div>
              </div>

              {/* Section 8 — Contact */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-teal-600" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">8. Contact Us</h2>
                </div>
                <div className="pl-0 sm:pl-[52px]">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    If you have any questions about this Privacy Policy or wish to exercise your data rights,
                    please contact us:
                  </p>
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl p-5 sm:p-6 border border-slate-100 space-y-2">
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
