"use client"
// ──────────────────────────────────────────────────────
// Sends form data (including resume file) to /api/careers
// which emails codebaseinfotech@gmail.com via SMTP
// ──────────────────────────────────────────────────────

import { useState, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { MapPin, ChevronDown, ChevronUp, ArrowRight, Upload, X, CheckCircle } from "lucide-react"

// Jobs passed dynamically from parent page

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
function SendResumeInline({ jobs }: { jobs: any[] }) {
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
            <option key={j._id || j.id} value={j.title} className="bg-[#080d1a]">{j.title}</option>
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
export default function JobListings({ initialJobs = [] }: { initialJobs?: any[] }) {
  const [openId, setOpenId] = useState<string | number | null>(null)
  const [applyJob, setApplyJob] = useState<{ id: string | number; title: string } | null>(null)
  
  // Safe fallback in case DB fetch fails or hasn't loaded
  const jobs = initialJobs;

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
            {jobs.length === 0 ? (
              <div className="text-center py-12 bg-white/[0.02] border border-white/[0.05] rounded-2xl">
                <p className="text-blue-100/40">No open positions atm. Check back later!</p>
              </div>
            ) : jobs.map((job) => {
              const jobId = job._id || job.id;
              const isOpen = openId === jobId;
              return (
                <div
                  key={jobId}
                  className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden transition-colors duration-300 hover:border-blue-500/25"
                >
                  {/* Card Header toggle */}
                  <div
                    className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 cursor-pointer group"
                    onClick={() => setOpenId(isOpen ? null : jobId)}
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
                        onClick={() => setApplyJob({ id: jobId, title: job.title })}
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
                          {job.responsibilities.map((r: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-blue-100/55 text-sm">
                              <span className="text-cyan-500 mt-0.5 shrink-0">→</span>{r}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-blue-400 font-bold mb-3 text-xs uppercase tracking-widest">Required Skills</h4>
                        <ul className="space-y-1.5">
                          {job.requiredSkills.map((s: string, i: number) => (
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
                            {job.preferredSkills.map((s: string, i: number) => (
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
                          {job.offers.map((o: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-blue-100/55 text-sm">
                              <span className="text-green-400 mt-0.5 shrink-0">✓</span>{o}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type="button"
                        onClick={() => setApplyJob({ id: jobId, title: job.title })}
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

              <SendResumeInline jobs={jobs} />
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
