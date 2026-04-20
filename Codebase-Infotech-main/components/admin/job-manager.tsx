"use client";

import { useState, useEffect } from "react";
import { Plus, Edit3, Trash2, Eye, EyeOff, Save, X, Briefcase, MapPin, Search, ArrowLeft } from "lucide-react";

export default function JobManager() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"list" | "form">("list");
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const [form, setForm] = useState({
    _id: "",
    title: "",
    location: "Surat",
    type: "Full-time",
    experience: "",
    education: "",
    summary: "",
    responsibilities: "",
    requiredSkills: "",
    preferredSkills: "",
    offers: "",
    isActive: true,
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({
      _id: "",
      title: "",
      location: "Surat",
      type: "Full-time",
      experience: "",
      education: "",
      summary: "",
      responsibilities: "",
      requiredSkills: "",
      preferredSkills: "",
      offers: "",
      isActive: true,
    });
    setFormError("");
    setView("list");
  };

  const handleEdit = (job: any) => {
    setForm({
      _id: job._id,
      title: job.title,
      location: job.location,
      type: job.type,
      experience: job.experience,
      education: job.education,
      summary: job.summary,
      responsibilities: (job.responsibilities || []).join("\n"),
      requiredSkills: (job.requiredSkills || []).join("\n"),
      preferredSkills: (job.preferredSkills || []).join("\n"),
      offers: (job.offers || []).join("\n"),
      isActive: job.isActive,
    });
    setView("form");
  };

  const handleToggleActive = async (id: string, currentStatus: boolean) => {
    try {
      const res = await fetch(`/api/jobs/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: !currentStatus }),
      });
      if (res.ok) {
        fetchJobs();
      }
    } catch (err) {
      console.error("Failed to toggle status:", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this job opening?")) return;
    try {
      await fetch(`/api/jobs/${id}`, { method: "DELETE" });
      fetchJobs();
    } catch (err) {
      console.error("Failed to delete job:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setSaving(true);

    try {
      const payload = {
        title: form.title,
        location: form.location,
        type: form.type,
        experience: form.experience,
        education: form.education,
        summary: form.summary,
        responsibilities: form.responsibilities.split("\n").map((s) => s.trim()).filter(Boolean),
        requiredSkills: form.requiredSkills.split("\n").map((s) => s.trim()).filter(Boolean),
        preferredSkills: form.preferredSkills.split("\n").map((s) => s.trim()).filter(Boolean),
        offers: form.offers.split("\n").map((s) => s.trim()).filter(Boolean),
        isActive: form.isActive,
      };

      const url = form._id ? `/api/jobs/${form._id}` : "/api/jobs";
      const method = form._id ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        fetchJobs();
        resetForm();
      } else {
        const data = await res.json();
        setFormError(data.error || "Failed to save job");
      }
    } catch (err) {
      setFormError("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const filtered = jobs.filter((j) =>
    j.title.toLowerCase().includes(search.toLowerCase())
  );

  if (view === "form") {
    return (
      <div className="mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={resetForm}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-500" />
          </button>
          <h1 className="text-2xl font-black text-slate-900">
            {form._id ? "Edit Job Opening" : "Create Job Opening"}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 border-b pb-2">Basic Info</h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Job Title</label>
                <input required type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="e.g. React Native Developer" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Experience Level</label>
                <input required type="text" value={form.experience} onChange={e => setForm({...form, experience: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="e.g. 2+ Years / Fresher" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Type</label>
                <select required value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Location</label>
                <input required type="text" value={form.location} onChange={e => setForm({...form, location: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="e.g. Surat, India" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Educational Requirement</label>
              <input required type="text" value={form.education} onChange={e => setForm({...form, education: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="e.g. Bachelor's degree in Computer Science..." />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Summary / Description</label>
              <textarea required rows={3} value={form.summary} onChange={e => setForm({...form, summary: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-y" placeholder="Short description of the role..." />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 border-b pb-2 flex justify-between">
              List Details
              <span className="text-xs font-normal text-slate-400">Put each point on a new line (press Enter)</span>
            </h3>
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Key Responsibilities</label>
              <textarea rows={4} value={form.responsibilities} onChange={e => setForm({...form, responsibilities: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-y" placeholder="Point 1&#10;Point 2&#10;Point 3" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Required Skills</label>
                <textarea rows={4} value={form.requiredSkills} onChange={e => setForm({...form, requiredSkills: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-y" placeholder="Point 1&#10;Point 2..." />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Good To Have (Optional)</label>
                <textarea rows={4} value={form.preferredSkills} onChange={e => setForm({...form, preferredSkills: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-y" placeholder="Point 1&#10;Point 2..." />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">What We Offer</label>
              <textarea rows={3} value={form.offers} onChange={e => setForm({...form, offers: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm resize-y" placeholder="Point 1&#10;Point 2..." />
            </div>
            
            <div className="flex items-center gap-2 pt-2">
              <input type="checkbox" id="isActive" checked={form.isActive} onChange={e => setForm({...form, isActive: e.target.checked})} className="w-4 h-4 text-blue-600 rounded border-slate-300" />
              <label htmlFor="isActive" className="text-sm font-medium text-slate-700">Currently Hiring (Active)</label>
            </div>
          </div>

          {formError && <p className="text-red-500 text-sm font-medium">{formError}</p>}

          <div className="flex items-center gap-3">
            <button type="button" onClick={resetForm} className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 text-sm">Cancel</button>
            <button type="submit" disabled={saving} className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20 text-sm">
              <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save Job"}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Job Openings</h1>
          <p className="text-slate-500 text-sm mt-1">Manage careers page listings</p>
        </div>
        <button
          onClick={() => setView("form")}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg"
        >
          <Plus className="w-4 h-4" /> New Job
        </button>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30"
        />
      </div>

      {loading ? (
        <div className="py-20 text-center"><div className="w-8 h-8 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto" /></div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
          <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900">No jobs found</h3>
        </div>
      ) : (
        <div className="grid gap-4">
          {filtered.map((job) => (
            <div key={job._id} className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col sm:flex-row gap-4 justify-between group hover:border-slate-300 transition-colors">
              <div>
                <div className="flex items-center gap-3 font-bold text-slate-900 text-lg">
                  {job.title}
                  {!job.isActive && <span className="bg-red-100 text-red-600 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Inactive</span>}
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mt-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                  <span className="bg-slate-100 px-2 rounded-md">{job.type}</span>
                  <span className="bg-slate-100 px-2 rounded-md">{job.experience}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:self-center">
                <button
                  onClick={() => handleToggleActive(job._id, job.isActive)}
                  title={job.isActive ? "Hide from website" : "Show on website"}
                  className={`p-2 rounded-lg text-xs font-semibold ${job.isActive ? "bg-green-50 text-green-600 hover:bg-green-100" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}
                >
                  {job.isActive ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>
                <button onClick={() => handleEdit(job)} className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(job._id)} className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
