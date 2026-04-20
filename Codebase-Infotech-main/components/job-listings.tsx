"use client"
// ──────────────────────────────────────────────────────
// Sends form data (including resume file) to /api/careers
// which emails codebaseinfotech@gmail.com via SMTP
// ──────────────────────────────────────────────────────

import { useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { MapPin, ChevronDown, ChevronUp, ArrowRight, Upload, X, CheckCircle } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Android Developer (Fresher)",
    location: "Surat",
    type: "Full-time",
    experience: "Fresher",
    summary:
      "We are looking for an enthusiastic and motivated Android Developer (Fresher) eager to build a career in mobile application development. Strong foundational knowledge of Java and Kotlin, Android basics, and a willingness to learn modern Android development practices required.",
    responsibilities: [
      "Assist in developing Android applications using Java and Kotlin.",
      "Write clean and maintainable code under guidance.",
      "Support API integration and data handling.",
      "Fix minor bugs and improve app performance.",
      "Participate in testing applications across devices.",
      "Collaborate with designers and developers during implementation.",
      "Follow coding standards and version control practices.",
      "Learn and apply modern Android development techniques.",
    ],
    requiredSkills: [
      "Basic knowledge of Java and Kotlin programming.",
      "Understanding of Android fundamentals (Activities, Fragments, Lifecycle).",
      "Familiarity with Android Studio and SDK.",
      "Basic understanding of API integration.",
      "Knowledge of Git fundamentals (preferred).",
      "Problem-solving mindset and eagerness to learn.",
      "Strong logical thinking and debugging ability.",
    ],
    preferredSkills: [
      "Academic or personal Android project experience.",
      "Familiarity with UI design implementation.",
      "Understanding of MVVM architecture basics.",
      "Exposure to Firebase or REST APIs.",
    ],
    education: "Bachelor's degree in Computer Science, IT, Engineering, or related field.",
    offers: [
      "Hands-on exposure to real Android projects.",
      "Mentorship from experienced developers.",
      "Learning opportunities in modern Android technologies.",
      "Supportive and growth-focused work environment.",
      "Career development opportunities.",
    ],
  },
  {
    id: 2,
    title: "Android Developer (1–6 Years Experience)",
    location: "Surat",
    type: "Full-time",
    experience: "1–6 Years",
    summary:
      "We are hiring a passionate Android Developer with 1–6 years of hands-on experience. Strong knowledge of Kotlin, MVVM architecture, Ads integration, event tracking, remote configuration, and Git-based version control required.",
    responsibilities: [
      "Design, develop, and maintain Android applications using Kotlin.",
      "Implement clean, scalable code following MVVM architecture.",
      "Integrate REST APIs and handle data using ViewModel, LiveData, and/or Flow.",
      "Work on Ads placement and integration (Banner, Interstitial, Rewarded Ads).",
      "Implement event tracking for user actions and analytics.",
      "Ensure smooth app performance, stability, and memory optimization.",
      "Identify, debug, and fix bugs, crashes, and ANR issues.",
      "Collaborate with cross-functional teams to ship new features.",
      "Maintain proper Git usage for each project.",
      "Support app publishing and post-release maintenance.",
    ],
    requiredSkills: [
      "Strong understanding of Android SDK.",
      "Hands-on experience with Kotlin.",
      "Practical knowledge of MVVM architecture.",
      "Ads integration (Google AdMob or similar).",
      "Event integration (Firebase Analytics or similar).",
      "Remote Config integration.",
      "API integration using Retrofit / Volley.",
      "Local data handling using Room / SharedPreferences.",
      "Experience using Git for version control.",
    ],
    preferredSkills: [
      "Experience with Coroutines.",
      "Knowledge of Dependency Injection (Hilt / Dagger).",
      "Familiarity with Crashlytics and performance monitoring.",
      "Understanding of push notifications (FCM).",
    ],
    education: "Bachelor's degree in Computer Science, Engineering, or a related field.",
    offers: [
      "Opportunity to work on live and scalable Android applications.",
      "Learning and growth in modern Android technologies.",
      "Collaborative and developer-friendly work environment.",
      "Career growth opportunities based on performance.",
    ],
  },
  {
    id: 3,
    title: "React Native Developer",
    location: "Surat",
    type: "Full-time",
    experience: "2+ Years",
    summary:
      "We are looking for a skilled React Native Developer to develop and maintain high-quality cross-platform mobile applications. You'll work closely with UI/UX designers, backend developers, and QA teams to deliver seamless app features.",
    responsibilities: [
      "Develop and maintain cross-platform mobile applications using React Native.",
      "Write clean, efficient, and reusable code following best practices.",
      "Integrate mobile applications with RESTful APIs and third-party libraries.",
      "Collaborate with UI/UX designers to ensure technical feasibility.",
      "Debug and fix bugs, performance issues, and ensure app stability across devices.",
      "Participate in code reviews and contribute to improving coding standards.",
    ],
    requiredSkills: [
      "2+ years of experience in React Native app development.",
      "Strong proficiency in JavaScript (ES6+) and React concepts.",
      "Experience with state management (Redux / Context API / MobX).",
      "Good understanding of Android Studio and Xcode.",
      "Familiarity with Firebase, Push Notifications, App Store / Play Store deployment.",
      "Understanding of Git / GitHub version control.",
    ],
    preferredSkills: [],
    education: "Bachelor's degree in Computer Science, IT, or a related field.",
    offers: [
      "Work on real-world, cross-platform mobile applications.",
      "Collaborative and growth-focused work culture.",
      "Career development opportunities.",
    ],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    location: "Surat",
    type: "Full-time",
    experience: "3+ Years",
    summary:
      "We are hiring a professional UI/UX Designer with minimum 3 years of hands-on experience delivering high-quality design solutions for real client projects. Detail-oriented, creative, and capable of independently handling end-to-end UI/UX responsibilities.",
    responsibilities: [
      "Design user-friendly and visually appealing UI/UX for mobile applications.",
      "Create modern and responsive web app interfaces.",
      "Develop website designs aligned with client requirements and brand identity.",
      "Understand client briefs and convert them into effective design solutions.",
      "Maintain design consistency across typography, colors, and layouts.",
      "Present design concepts clearly to clients and internal teams.",
    ],
    requiredSkills: [
      "Strong expertise in UI/UX design principles.",
      "Mobile app and web application interface design.",
      "User-centered design thinking.",
      "Wireframing, prototyping, and usability optimization.",
      "Experience handling client-based projects independently.",
      "Fluent English communication — mandatory.",
    ],
    preferredSkills: ["Adobe Photoshop", "Figma", "Adobe XD", "Sketch"],
    education: "Minimum 3 years of proven UI/UX design experience with a strong portfolio.",
    offers: [
      "Work on real, client-facing design projects.",
      "Creative and collaborative work environment.",
      "Career growth based on performance.",
    ],
  },
  {
    id: 5,
    title: "Social Media Manager",
    location: "Surat",
    type: "Full-time",
    experience: "1+ Years",
    summary:
      "We are looking for a highly creative Social Media Manager who understands how to create engaging, high-impact content. Manage all social media platforms, build brand presence, and produce content that drives reach, engagement, and app installs.",
    responsibilities: [
      "Plan and execute monthly content calendars.",
      "Create engaging posts, reels, shorts, stories, and community-focused content.",
      "Write powerful hooks, captions, and storytelling-style scripts.",
      "Monitor trending topics and convert them into relevant content.",
      "Track performance metrics: reach, shares, saves, engagement rate.",
      "Prepare weekly and monthly performance reports.",
      "Create campaigns for app feature launches and updates.",
    ],
    requiredSkills: [
      "Strong understanding of social media content dynamics.",
      "Experience in creating reels, shorts, and trending video formats.",
      "Excellent copywriting skills and high-engagement hooks.",
      "Basic video editing and motion graphics understanding.",
      "Creativity with fast execution ability.",
    ],
    preferredSkills: [
      "Experience creating viral or high-reach content.",
      "Working with mobile apps or tech products.",
    ],
    education: "Any degree; relevant experience and portfolio required.",
    offers: [
      "Creative and dynamic work environment.",
      "Opportunity to manage brand presence at scale.",
      "Performance-based growth and recognition.",
    ],
  },
]

// ─── Apply Now Modal (portal-style, no shadcn Dialog) ──────────────
function ApplyModal({
  open,
  onClose,
  jobTitle,
}: {
  open: boolean
  onClose: () => void
  jobTitle: string
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    experience: "",
    resumeFile: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!open) return null

  const handleFile = (file: File | null) => {
    if (!file) return
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (allowed.includes(file.type)) setForm((p) => ({ ...p, resumeFile: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append("type", "apply")
      fd.append("name", form.name)
      fd.append("email", form.email)
      fd.append("phone", form.phone)
      fd.append("experience", form.experience)
      fd.append("role", jobTitle)
      fd.append("coverLetter", form.coverLetter)
      if (form.resumeFile) fd.append("resumeFile", form.resumeFile)
      const res = await fetch("/api/careers", { method: "POST", body: fd })
      if (!res.ok) throw new Error((await res.json()).error || "Failed to send")
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setSubmitted(false)
    setError(null)
    setForm({ name: "", email: "", phone: "", coverLetter: "", experience: "", resumeFile: null })
    onClose()
  }

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={handleClose}
    >
      {/* Modal Box */}
      <div
        className="relative w-full max-w-xl bg-[#080d1a] border border-white/[0.09] rounded-3xl overflow-hidden shadow-2xl"
        style={{ maxHeight: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 z-10" />

        {/* Single close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-blue-100/50 hover:text-white transition-all"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          /* ── Success State ── */
          <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
              <CheckCircle className="h-10 w-10 text-green-400" />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">Application Submitted!</h3>
            <p className="text-blue-100/50 mb-8 max-w-sm leading-relaxed">
              Thank you <span className="text-white font-semibold">{form.name}</span>! We've received your application for{" "}
              <span className="text-cyan-400 font-semibold">{jobTitle}</span>. We'll be in touch soon.
            </p>
            <button
              onClick={handleClose}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl px-10 py-3 text-sm hover:from-blue-700 hover:to-cyan-600 transition-all"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="px-8 pt-8 pb-5 border-b border-white/[0.06]">
              <p className="text-xs font-black uppercase tracking-widest text-blue-400 mb-1">Job Application</p>
              <h2 className="text-xl font-black text-white leading-snug">
                Apply for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  {jobTitle}
                </span>
              </h2>
              <p className="text-blue-100/40 text-sm mt-1">Fill in the details below and we'll get back to you.</p>
            </div>

            {/* Scrollable form */}
            <div className="overflow-y-auto" style={{ maxHeight: "calc(90vh - 130px)" }}>
              <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder:text-blue-100/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder:text-blue-100/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder:text-blue-100/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">
                      Experience <span className="text-red-400">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. 2 years / Fresher"
                      value={form.experience}
                      onChange={(e) => setForm((p) => ({ ...p, experience: e.target.value }))}
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder:text-blue-100/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                    />
                  </div>
                </div>

                {/* Role (read-only) */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">Applying For</label>
                  <div className="w-full bg-blue-500/5 border border-blue-500/20 rounded-xl px-4 py-2.5 text-cyan-400 text-sm font-semibold">
                    {jobTitle}
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">
                    Cover Letter <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Tell us why you're a great fit for this role..."
                    value={form.coverLetter}
                    onChange={(e) => setForm((p) => ({ ...p, coverLetter: e.target.value }))}
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder:text-blue-100/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                  />
                </div>

                {/* Resume Upload */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">
                    CV / Resume <span className="text-red-400">*</span>
                  </label>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                    onDragLeave={() => setDragging(false)}
                    onDrop={(e) => {
                      e.preventDefault()
                      setDragging(false)
                      handleFile(e.dataTransfer.files[0])
                    }}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
                      dragging
                        ? "border-blue-500/60 bg-blue-500/10"
                        : form.resumeFile
                        ? "border-green-500/40 bg-green-500/5"
                        : "border-white/[0.07] hover:border-blue-500/30 hover:bg-white/[0.02]"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
                    />
                    {form.resumeFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                        <div className="text-left min-w-0">
                          <p className="text-green-400 font-semibold text-sm truncate">{form.resumeFile.name}</p>
                          <p className="text-blue-100/30 text-xs">{(form.resumeFile.size / 1024).toFixed(0)} KB</p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => { e.stopPropagation(); setForm((p) => ({ ...p, resumeFile: null })) }}
                          className="shrink-0 text-red-400/60 hover:text-red-400 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <Upload className="h-7 w-7 text-blue-400/30 mx-auto" />
                        <p className="text-blue-100/40 text-sm">
                          <span className="text-blue-400 font-semibold">Click to upload</span> or drag & drop
                        </p>
                        <p className="text-blue-100/20 text-xs">Supported: .pdf, .doc, .docx</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl py-2.5 px-4">
                    {error}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl py-3.5 text-sm shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_40px_rgba(37,99,235,0.55)] transition-all duration-300 mt-2 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Sending…</>
                  ) : "Submit Application"}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ─── Inline "Send Resume" form ──────────────────────────────────────
function SendResumeInline() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    resumeFile: null as File | null,
  })
  const [submitted, setSubmitted] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFile = (file: File | null) => {
    if (!file) return
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ]
    if (allowed.includes(file.type)) setForm((p) => ({ ...p, resumeFile: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const fd = new FormData()
      fd.append("type", "resume")
      fd.append("name", form.name)
      fd.append("email", form.email)
      fd.append("role", form.role)
      if (form.resumeFile) fd.append("resumeFile", form.resumeFile)
      const res = await fetch("/api/careers", { method: "POST", body: fd })
      if (!res.ok) throw new Error((await res.json()).error || "Failed to send")
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
          <CheckCircle className="h-8 w-8 text-green-400" />
        </div>
        <h3 className="text-xl font-black text-white mb-2">Resume Received!</h3>
        <p className="text-blue-100/50 text-sm max-w-xs leading-relaxed">
          Thanks <span className="text-white font-semibold">{form.name}</span>! We'll review your resume and reach out when the right opportunity comes up.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setForm({ name: "", email: "", role: "", resumeFile: null })
          }}
          className="mt-6 text-blue-400 text-sm hover:text-cyan-300 transition-colors font-semibold"
        >
          Submit another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder:text-blue-100/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder:text-blue-100/20 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">Preferred Role</label>
        <select
          value={form.role}
          onChange={(e) => setForm((p) => ({ ...p, role: e.target.value }))}
          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-all"
        >
          <option value="" className="bg-[#080d1a]">Select a role (optional)</option>
          {jobs.map((j) => (
            <option key={j.id} value={j.title} className="bg-[#080d1a]">{j.title}</option>
          ))}
          <option value="Other" className="bg-[#080d1a]">Other</option>
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-bold uppercase tracking-wider text-blue-100/40">
          CV / Resume <span className="text-red-400">*</span>
        </label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragging(false)
            handleFile(e.dataTransfer.files[0])
          }}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${
            dragging
              ? "border-blue-500/60 bg-blue-500/10"
              : form.resumeFile
              ? "border-green-500/40 bg-green-500/5"
              : "border-white/[0.07] hover:border-blue-500/30 hover:bg-white/[0.02]"
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
          />
          {form.resumeFile ? (
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
              <div className="text-left min-w-0">
                <p className="text-green-400 font-semibold text-sm truncate">{form.resumeFile.name}</p>
                <p className="text-blue-100/30 text-xs">{(form.resumeFile.size / 1024).toFixed(0)} KB</p>
              </div>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setForm((p) => ({ ...p, resumeFile: null })) }}
                className="shrink-0 text-red-400/60 hover:text-red-400 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-1">
              <Upload className="h-7 w-7 text-blue-400/30 mx-auto" />
              <p className="text-blue-100/40 text-sm">
                <span className="text-blue-400 font-semibold">Click to upload</span> or drag & drop
              </p>
              <p className="text-blue-100/20 text-xs">Supported: .pdf, .doc, .docx</p>
            </div>
          )}
        </div>
      </div>

      {error && (
        <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl py-2.5 px-4">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl py-3.5 text-sm shadow-[0_0_25px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
      >
        {loading ? (
          <><svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>Sending…</>
        ) : "Send Resume"}
      </button>
    </form>
  )
}

// ─── Main Export ────────────────────────────────────────────────────
export default function JobListings() {
  const [openId, setOpenId] = useState<number | null>(null)
  const [applyJob, setApplyJob] = useState<{ id: number; title: string } | null>(null)

  return (
    <>
      <section id="openings" className="py-24 bg-[#020617] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gradient-to-r from-blue-600/10 via-transparent to-cyan-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs font-black uppercase tracking-widest text-blue-400 backdrop-blur-xl mb-6">
              Open Positions
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Current{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Openings
              </span>
            </h2>
            <p className="text-blue-100/50 text-lg max-w-xl mx-auto">
              Find a role that matches your skills and passion. We grow together.
            </p>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobs.map((job) => {
              const isOpen = openId === job.id
              return (
                <div
                  key={job.id}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden transition-colors duration-300 hover:border-blue-500/25"
                >
                  {/* Card Header toggle */}
                  <div
                    className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 cursor-pointer group"
                    onClick={() => setOpenId(isOpen ? null : job.id)}
                  >
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="flex items-center gap-1 text-blue-100/40 text-xs">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </span>
                        <Badge className="bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs">
                          {job.type}
                        </Badge>
                        <Badge className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs">
                          {job.experience}
                        </Badge>
                      </div>
                    </div>

                    {/* Buttons — stop propagation so they don't toggle accordion */}
                    <div
                      className="flex items-center gap-3 shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={() => setApplyJob({ id: job.id, title: job.title })}
                        className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-sm font-bold rounded-xl px-5 h-9 shadow-[0_0_15px_rgba(37,99,235,0.25)] hover:shadow-[0_0_25px_rgba(37,99,235,0.45)] transition-all"
                      >
                        Apply Now
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                      <div className="text-blue-100/30 pointer-events-none">
                        {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {isOpen && (
                    <div className="px-6 pb-8 space-y-5 border-t border-white/[0.05] pt-5">
                      <p className="text-blue-100/55 leading-relaxed text-sm">{job.summary}</p>

                      <div>
                        <h4 className="text-blue-400 font-bold mb-3 text-xs uppercase tracking-widest">Key Responsibilities</h4>
                        <ul className="space-y-1.5">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-blue-100/55 text-sm">
                              <span className="text-cyan-500 mt-0.5 shrink-0">→</span>{r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-bold mb-3 text-xs uppercase tracking-widest">Required Skills</h4>
                        <ul className="space-y-1.5">
                          {job.requiredSkills.map((s, i) => (
                            <li key={i} className="flex items-start gap-2 text-blue-100/55 text-sm">
                              <span className="text-cyan-500 mt-0.5 shrink-0">→</span>{s}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {job.preferredSkills.length > 0 && (
                        <div>
                          <h4 className="text-blue-400 font-bold mb-3 text-xs uppercase tracking-widest">Good to Have</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.preferredSkills.map((s, i) => (
                              <span key={i} className="bg-white/[0.04] border border-white/[0.07] text-blue-100/50 text-xs px-3 py-1 rounded-full">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div>
                        <h4 className="text-blue-400 font-bold mb-2 text-xs uppercase tracking-widest">Education</h4>
                        <p className="text-blue-100/55 text-sm">{job.education}</p>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-bold mb-3 text-xs uppercase tracking-widest">What We Offer</h4>
                        <ul className="space-y-1.5">
                          {job.offers.map((o, i) => (
                            <li key={i} className="flex items-start gap-2 text-blue-100/55 text-sm">
                              <span className="text-green-400 mt-0.5 shrink-0">✓</span>{o}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => setApplyJob({ id: job.id, title: job.title })}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-xl h-11 px-7 text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] transition-all group"
                      >
                        Apply for This Role
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* ─── Inline Send Resume Section ─── */}
          <div className="mt-20 border-t border-white/[0.05] pt-16">
            <div className="bg-white/[0.02] border border-white/[0.07] rounded-3xl p-8 sm:p-10">
              {/* Edge glow */}
              <div className="relative mb-8">
                <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-blue-400 mb-4">
                  General Application
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Don't see the right role?{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Send Your Resume
                  </span>
                </h3>
                <p className="text-blue-100/40 text-sm">
                  Drop your details below and we'll reach out when a suitable opening comes up.
                </p>
              </div>

              <SendResumeInline />
            </div>
          </div>
        </div>
      </section>

      {/* Apply Modal — rendered outside section, no z-index conflicts */}
      {applyJob && (
        <ApplyModal
          open={!!applyJob}
          onClose={() => setApplyJob(null)}
          jobTitle={applyJob.title}
        />
      )}
    </>
  )
}
