"use client";

import { useState, useEffect, useCallback, MutableRefObject } from "react";
import { Plus, Edit3, Trash2, Eye, Search, AlertTriangle, X, ArrowLeft, Save, ImageIcon, Code2 } from "lucide-react";

type ProjectViewMode = "list" | "new" | "edit";

export interface ProjectManagerActions {
  openNew: () => void;
  goBack: () => void;
}

interface ProjectManagerProps {
  onViewChange?: (info: { view: ProjectViewMode; title: string }) => void;
  actionsRef?: MutableRefObject<ProjectManagerActions | null>;
}

export default function ProjectManager({ onViewChange, actionsRef }: ProjectManagerProps) {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteModal, setDeleteModal] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  // View state
  const [view, setView] = useState<ProjectViewMode>("list");
  const [editId, setEditId] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [category, setCategory] = useState("Mobile App");
  const [type, setType] = useState("mobile");
  const [client, setClient] = useState("");
  const [iOS_Link, setIOSLink] = useState("");
  const [Android_Link, setAndroidLink] = useState("");
  const [website_link, setWebsiteLink] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [results, setResults] = useState("");
  
  // Case Study State
  const [csChallenge, setCsChallenge] = useState("");
  const [csSolution, setCsSolution] = useState("");
  const [csOutcome, setCsOutcome] = useState("");
  const [csTimeline, setCsTimeline] = useState("");
  const [csTeamSize, setCsTeamSize] = useState("");
  const [csProjectDetails, setCsProjectDetails] = useState("");
  const [csAppHighlights, setCsAppHighlights] = useState("");
  const [csTechnologies, setCsTechnologies] = useState("");
  const [csThirdPartyServices, setCsThirdPartyServices] = useState("");

  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  // Expose actions to parent via ref
  useEffect(() => {
    if (actionsRef) {
      actionsRef.current = { openNew, goBack };
    }
  });

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data.projects || []);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setDeleting(true);
    try {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      setProjects(projects.filter((p) => p._id !== id));
      setDeleteModal(null);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeleting(false);
    }
  };

  const resetForm = useCallback(() => {
    setTitle("");
    setIsActive(true);
    setCategory("Mobile App");
    setType("mobile");
    setClient("");
    setIOSLink("");
    setAndroidLink("");
    setWebsiteLink("");
    setDescription("");
    setImageFile(null);
    setImagePreview("");
    setTechnologies("");
    setResults("");
    setCsChallenge("");
    setCsSolution("");
    setCsOutcome("");
    setCsTimeline("");
    setCsTeamSize("");
    setCsProjectDetails("");
    setCsAppHighlights("");
    setCsTechnologies("");
    setCsThirdPartyServices("");
    setFormError("");
    setEditId(null);
  }, []);

  const openNew = () => {
    resetForm();
    setView("new");
    onViewChange?.({ view: "new", title: "New Project" });
  };

  const openEdit = (project: any) => {
    resetForm();
    setTitle(project.title);
    setIsActive(project.isActive !== false);
    setCategory(project.category || "Mobile App");
    setType(project.type || "mobile");
    setClient(project.client || "");
    setIOSLink(project.iOS_Link || "");
    setAndroidLink(project.Android_Link || "");
    setWebsiteLink(project.website_link || "");
    setDescription(project.description || "");
    setImagePreview(project.image || "");
    setTechnologies(project.technologies?.join(", ") || "");
    setResults(project.results?.join(", ") || "");
    
    if (project.caseStudy) {
      setCsChallenge(project.caseStudy.challenge || "");
      setCsSolution(project.caseStudy.solution || "");
      setCsOutcome(project.caseStudy.outcome || "");
      setCsTimeline(project.caseStudy.timeline || "");
      setCsTeamSize(project.caseStudy.teamSize || "");
      setCsProjectDetails(project.caseStudy.projectDetails || "");
      setCsAppHighlights(project.caseStudy.AppHighlights?.join("\n") || "");
      setCsTechnologies(project.caseStudy.technologies?.join(", ") || "");
      setCsThirdPartyServices(project.caseStudy.thirdPartyServices?.join(", ") || "");
    }
    
    setEditId(project._id);
    setView("edit");
    onViewChange?.({ view: "edit", title: "Edit Project" });
  };

  const goBack = () => {
    resetForm();
    setView("list");
    onViewChange?.({ view: "list", title: "Portfolio Projects" });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!title.trim() || !description.trim() || (!imageFile && !imagePreview)) {
      setFormError("Title, description, and image are required");
      return;
    }

    setSaving(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("isActive", String(isActive));
      formData.append("category", category);
      formData.append("type", type);
      formData.append("client", client);
      formData.append("iOS_Link", iOS_Link);
      formData.append("Android_Link", Android_Link);
      formData.append("website_link", website_link);
      formData.append("description", description);
      
      formData.append("technologies", JSON.stringify(technologies.split(",").map((s) => s.trim()).filter(Boolean)));
      formData.append("results", JSON.stringify(results.split(",").map((s) => s.trim()).filter(Boolean)));
      
      formData.append("caseStudy.challenge", csChallenge);
      formData.append("caseStudy.solution", csSolution);
      formData.append("caseStudy.outcome", csOutcome);
      formData.append("caseStudy.timeline", csTimeline);
      formData.append("caseStudy.teamSize", csTeamSize);
      formData.append("caseStudy.projectDetails", csProjectDetails);
      
      formData.append("caseStudy.AppHighlights", JSON.stringify(csAppHighlights.split("\n").map((s) => s.trim()).filter(Boolean)));
      formData.append("caseStudy.technologies", JSON.stringify(csTechnologies.split(",").map((s) => s.trim()).filter(Boolean)));
      formData.append("caseStudy.thirdPartyServices", JSON.stringify(csThirdPartyServices.split(",").map((s) => s.trim()).filter(Boolean)));

      if (imageFile) formData.append("image", imageFile);

      const isEdit = view === "edit" && editId;
      const url = isEdit ? `/api/projects/${editId}` : "/api/projects";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });

      if (res.ok) {
        await fetchProjects();
        goBack();
      } else {
        const data = await res.json();
        setFormError(data.error || "Failed to save project");
      }
    } catch {
      setFormError("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* ===== LIST VIEW ===== */}
      {view === "list" && (
        <>
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects by title or description..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all shadow-sm"
            />
          </div>

          {/* List */}
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
              <Code2 className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {search ? "No projects found" : "No projects yet"}
              </h3>
              <p className="text-slate-500 text-sm mb-6">
                {search ? "Try a different search term" : "Add your first project to get started"}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((project) => (
                <div key={project._id} className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md hover:border-slate-200 transition-all duration-300 group">
                  {project.image && (
                    <div className="w-full sm:w-28 h-40 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-900 text-base truncate group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm line-clamp-1 mt-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                       <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${project.isActive !== false ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                         {project.isActive !== false ? 'Active' : 'Inactive'}
                       </span>
                       <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{project.category}</span>
                       {project.client && <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Client: {project.client}</span>}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                    <button onClick={() => openEdit(project)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 text-xs font-medium flex-1 sm:flex-initial justify-center">
                      <Edit3 className="w-3.5 h-3.5" /> Edit
                    </button>
                    <button onClick={() => setDeleteModal(project._id)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-xs font-medium flex-1 sm:flex-initial justify-center">
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* ===== NEW / EDIT VIEW ===== */}
      {(view === "new" || view === "edit") && (
        <div className="w-full">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* General Info */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm space-y-4">
               <h3 className="text-sm font-bold text-slate-900 mb-4 border-b pb-2">General Info</h3>
               <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Project Title *</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="Ex: Fly Elite" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Project Status *</label>
                    <select 
                      value={isActive ? "true" : "false"} 
                      onChange={(e) => setIsActive(e.target.value === "true")} 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                    >
                       <option value="true">Active (Visible)</option>
                       <option value="false">Inactive (Hidden)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Client Name</label>
                    <input type="text" value={client} onChange={(e) => setClient(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="Ex: Dubai, UAE" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Category *</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                       <option value="Mobile App">Mobile App</option>
                       <option value="Web Development">Web Development</option>
                       <option value="UI/UX Design">UI/UX Design</option>
                       <option value="Full Stack">Full Stack</option>
                       <option value="CMS Development">CMS Development</option>
                       <option value="Digital Marketing">Digital Marketing</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Type *</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="Ex: mobile, web" required />
                  </div>
               </div>
               
               <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Short Description *</label>
                  <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="Brief summary for the card view..." required />
               </div>
            </div>

            {/* Links */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm space-y-4">
               <h3 className="text-sm font-bold text-slate-900 mb-4 border-b pb-2">External Links</h3>
               <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">iOS App Store</label>
                    <input type="url" value={iOS_Link} onChange={(e) => setIOSLink(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="https://apps.apple.com/..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Android Play Store</label>
                    <input type="url" value={Android_Link} onChange={(e) => setAndroidLink(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="https://play.google.com/..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Website & Other</label>
                    <input type="url" value={website_link} onChange={(e) => setWebsiteLink(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="https://..." />
                  </div>
               </div>
            </div>

            {/* Arrays */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm space-y-4">
               <h3 className="text-sm font-bold text-slate-900 mb-4 border-b pb-2">Technologies & Results</h3>
               <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Card Technologies (Comma separated)</label>
                    <input type="text" value={technologies} onChange={(e) => setTechnologies(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="iOS, Android, React Native" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Results Summary (Comma separated)</label>
                    <input type="text" value={results} onChange={(e) => setResults(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="300% growth, 4.8 Rating" />
                  </div>
               </div>
            </div>

            {/* Case Study */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm space-y-4">
               <h3 className="text-sm font-bold text-amber-900 bg-amber-50 rounded-lg p-2 px-3 flex items-center mb-4 border border-amber-100">
                  Case Study Specifics (Modal View)
               </h3>
               
               <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Timeline</label>
                    <input type="text" value={csTimeline} onChange={(e) => setCsTimeline(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="4 months" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Team Size</label>
                    <input type="text" value={csTeamSize} onChange={(e) => setCsTeamSize(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="6 developers" />
                  </div>
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Expanded Project Details</label>
                  <textarea value={csProjectDetails} onChange={(e) => setCsProjectDetails(e.target.value)} rows={3} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="Detailed paragraph for modal view..." />
               </div>

               <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">App Highlights (Enter each bullet on a NEW LINE)</label>
                  <textarea value={csAppHighlights} onChange={(e) => setCsAppHighlights(e.target.value)} rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="Book appointments online instantly\nSecure Payments...\n..." />
               </div>

               <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Modal Technologies (Comma separated)</label>
                    <input type="text" value={csTechnologies} onChange={(e) => setCsTechnologies(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="React Native, Node.js" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Third-Party Services (Comma separated)</label>
                    <input type="text" value={csThirdPartyServices} onChange={(e) => setCsThirdPartyServices(e.target.value)} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm" placeholder="Firebase, Stripe, Google Maps" />
                  </div>
               </div>
            </div>

            {/* Image */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <ImageIcon className="w-4 h-4 text-green-600" />
                Featured Image *
              </div>
              {imagePreview ? (
                <div className="relative rounded-xl overflow-hidden border border-slate-200">
                  <img src={imagePreview} alt="Preview" className="w-full h-48 sm:h-64 object-cover" />
                  <button type="button" onClick={() => { setImageFile(null); setImagePreview(""); }} className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                  <ImageIcon className="w-8 h-8 text-slate-300 mb-2" />
                  <span className="text-sm font-medium text-slate-500">Click to upload image</span>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              )}
            </div>

            {formError && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm font-medium">
                {formError}
              </div>
            )}

            <div className="flex items-center gap-3 pt-2">
              <button type="button" onClick={goBack} className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors">Cancel</button>
              <button type="submit" disabled={saving} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 text-white rounded-xl text-sm font-bold shadow-lg transition-all disabled:opacity-60">
                {saving ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
                {saving ? (view === "edit" ? "Updating..." : "Publishing...") : (view === "edit" ? "Update Project" : "Publish Project")}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <button onClick={() => setDeleteModal(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Delete Project?</h3>
            <p className="text-slate-500 text-sm mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteModal(null)} className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50">Cancel</button>
              <button onClick={() => handleDelete(deleteModal)} disabled={deleting} className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-bold hover:bg-red-700 disabled:opacity-60">
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
