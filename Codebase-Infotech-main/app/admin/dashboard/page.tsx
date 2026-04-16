"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Plus, Edit3, Trash2, LogOut, LayoutDashboard, FileText,
  Calendar, Eye, Search, AlertTriangle, X, ArrowLeft,
  Save, ImageIcon, HelpCircle
} from "lucide-react";

import ProjectManager from "@/components/admin/project-manager";

// Rich text editor — dynamic import to avoid SSR issues
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

interface FAQ {
  question: string;
  answer: string;
}

interface Blog {
  slug: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  faqs: FAQ[];
}

type ViewMode = "list" | "new" | "edit";

// Quill editor toolbar configuration
const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],
    [{ direction: "rtl" }],
    [{ align: [] }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const quillFormats = [
  "header", "font", "size",
  "bold", "italic", "underline", "strike",
  "color", "background",
  "script",
  "blockquote", "code-block",
  "list", "indent", "direction", "align",
  "link", "image", "video",
];

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deleteModal, setDeleteModal] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  // View state
  const [activeTab, setActiveTab] = useState<"blogs" | "projects">("blogs");
  const [view, setView] = useState<ViewMode>("list");
  const [editSlug, setEditSlug] = useState<string | null>(null);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  };

  const handleDelete = async (slug: string) => {
    setDeleting(true);
    try {
      await fetch(`/api/blogs/${slug}`, { method: "DELETE" });
      setBlogs(blogs.filter((b) => b.slug !== slug));
      setDeleteModal(null);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeleting(false);
    }
  };

  // Reset form
  const resetForm = useCallback(() => {
    setTitle("");
    setDescription("");
    setImageFile(null);
    setImagePreview("");
    setFaqs([]);
    setFormError("");
    setEditSlug(null);
  }, []);

  // Switch to New Blog view
  const openNew = () => {
    resetForm();
    setView("new");
  };

  // Switch to Edit Blog view
  const openEdit = async (blog: Blog) => {
    resetForm();
    setTitle(blog.title);
    setDescription(blog.description);
    setImagePreview(blog.image || "");
    setFaqs(blog.faqs || []);
    setEditSlug(blog.slug);
    setView("edit");
  };

  // Go back to list
  const goBack = () => {
    resetForm();
    setView("list");
  };

  // Image handler
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // FAQ handlers
  const addFaq = () => setFaqs([...faqs, { question: "", answer: "" }]);
  const removeFaq = (index: number) => setFaqs(faqs.filter((_, i) => i !== index));
  const updateFaq = (index: number, field: keyof FAQ, value: string) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  // Submit (create or update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    if (!title.trim() || !description.trim()) {
      setFormError("Title and description are required");
      return;
    }

    setSaving(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("faqs", JSON.stringify(faqs.filter((f) => f.question.trim())));
      if (imageFile) formData.append("image", imageFile);

      const isEdit = view === "edit" && editSlug;
      const url = isEdit ? `/api/blogs/${editSlug}` : "/api/blogs";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });

      if (res.ok) {
        await fetchBlogs();
        goBack();
      } else {
        const data = await res.json();
        setFormError(data.error || "Failed to save blog");
      }
    } catch {
      setFormError("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const filtered = blogs.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ====== Sidebar ====== */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#020617] border-r border-white/[0.06] z-50 hidden lg:flex flex-col">
        <div className="p-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Codebase Admin</p>
              <p className="text-blue-300/40 text-xs">Blog Management</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => { setActiveTab("blogs"); goBack(); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === "blogs"
                ? "bg-white/[0.06] text-white"
                : "text-blue-200/50 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <FileText className="w-4 h-4 text-blue-400" />
            All Blogs
            <span className="ml-auto bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-0.5 rounded-full">
              {blogs.length}
            </span>
          </button>
          
          <button
            onClick={() => { setActiveTab("projects"); setView("list"); }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
              activeTab === "projects"
                ? "bg-white/[0.06] text-white"
                : "text-blue-200/50 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <LayoutDashboard className="w-4 h-4 text-cyan-400" />
            Manage Projects
          </button>
        </nav>

        <div className="p-4 border-t border-white/[0.06]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400/60 hover:text-red-400 hover:bg-red-500/10 text-sm font-medium transition-colors w-full"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* ====== Mobile Header ====== */}
      <header className="lg:hidden sticky top-0 z-50 bg-[#020617] border-b border-white/[0.06] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {view !== "list" ? (
            <button onClick={goBack} className="flex items-center gap-2 text-white text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <LayoutDashboard className="w-4 h-4 text-white" />
              </div>
              <p className="text-white font-bold text-sm">Admin</p>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          {view === "list" && (
            <button onClick={openNew} className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Plus className="w-4 h-4" />
            </button>
          )}
          <button onClick={handleLogout} className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </header>
      {/* ====== Mobile Navigation Tabs ====== */}
      <nav className="lg:hidden flex bg-[#020617] border-b border-white/[0.06] w-full text-sm">
         <button onClick={() => { setActiveTab("blogs"); setView("list"); }} className={`flex-1 text-center py-3 font-semibold transition-colors ${activeTab === 'blogs' ? 'text-white border-b-2 border-blue-500 bg-white/[0.04]' : 'text-slate-400 hover:bg-white/[0.02]'}`}>Blogs</button>
         <button onClick={() => { setActiveTab("projects"); setView("list"); }} className={`flex-1 text-center py-3 font-semibold transition-colors ${activeTab === 'projects' ? 'text-white border-b-2 border-cyan-500 bg-white/[0.04]' : 'text-slate-400 hover:bg-white/[0.02]'}`}>Projects</button>
      </nav>

      {/* ====== Main Content ====== */}
      <main className="lg:ml-64 p-4 sm:p-6 lg:p-8">
        {activeTab === "projects" ? (
           <ProjectManager />
        ) : (
          <>
            {/* ===== LIST VIEW ===== */}
        {view === "list" && (
          <>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Blog Posts</h1>
                <p className="text-slate-500 text-sm mt-1">Manage your blog content</p>
              </div>
              <button
                onClick={openNew}
                className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                <Plus className="w-4 h-4" />
                New Blog Post
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search blogs..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all shadow-sm"
              />
            </div>

            {/* Blog List */}
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
                <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {search ? "No blogs found" : "No blog posts yet"}
                </h3>
                <p className="text-slate-500 text-sm mb-6">
                  {search ? "Try a different search term" : "Create your first blog post to get started"}
                </p>
                {!search && (
                  <button
                    onClick={openNew}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:scale-[1.02] transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    Create First Blog
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-3">
                {filtered.map((blog) => (
                  <div
                    key={blog.slug}
                    className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
                  >
                    {blog.image && (
                      <div className="w-full sm:w-28 h-40 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-slate-900 text-base truncate group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-1 mt-1">
                        {blog.description.replace(/<[^>]+>/g, "").substring(0, 120)}...
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(blog.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {blog.faqs?.length || 0} FAQs
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                      <Link
                        href={`/blog/${blog.slug}`}
                        target="_blank"
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 text-xs font-medium transition-colors flex-1 sm:flex-initial justify-center"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        View
                      </Link>
                      <button
                        onClick={() => openEdit(blog)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 text-xs font-medium transition-colors flex-1 sm:flex-initial justify-center"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        Edit
                      </button>
                      <button
                        onClick={() => setDeleteModal(blog.slug)}
                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 text-xs font-medium transition-colors flex-1 sm:flex-initial justify-center"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
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
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-8">
              <button onClick={goBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              <div className="w-px h-6 bg-slate-200" />
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {view === "new" ? "Create New Blog Post" : "Edit Blog Post"}
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <FileText className="w-4 h-4 text-blue-600" />
                  Blog Details
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all"
                    placeholder="Enter blog title..."
                    required
                  />
                </div>

                {/* Rich Text Editor */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Description *</label>
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden [&_.ql-toolbar]:border-b [&_.ql-toolbar]:border-slate-200 [&_.ql-toolbar]:bg-slate-50 [&_.ql-container]:border-0 [&_.ql-editor]:min-h-[300px] [&_.ql-editor]:text-sm [&_.ql-editor]:text-slate-900 [&_.ql-editor]:leading-relaxed">
                    <ReactQuill
                      theme="snow"
                      value={description}
                      onChange={setDescription}
                      modules={quillModules}
                      formats={quillFormats}
                      placeholder="Write your blog content here... Use the toolbar to format text."
                    />
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <ImageIcon className="w-4 h-4 text-green-600" />
                  Featured Image
                </div>
                {imagePreview ? (
                  <div className="relative rounded-xl overflow-hidden border border-slate-200">
                    <img src={imagePreview} alt="Preview" className="w-full h-48 sm:h-64 object-cover" />
                    <button
                      type="button"
                      onClick={() => { setImageFile(null); setImagePreview(""); }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                    <ImageIcon className="w-8 h-8 text-slate-300 mb-2" />
                    <span className="text-sm font-medium text-slate-500">Click to upload image</span>
                    <span className="text-xs text-slate-400 mt-1">PNG, JPG, WEBP up to 10MB</span>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                  </label>
                )}
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                    <HelpCircle className="w-4 h-4 text-purple-600" />
                    FAQs ({faqs.length})
                  </div>
                  <button
                    type="button"
                    onClick={addFaq}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-600 text-xs font-bold hover:bg-purple-100 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Add FAQ
                  </button>
                </div>

                {faqs.length === 0 && (
                  <div className="text-center py-8 text-slate-400 text-sm">
                    No FAQs added yet. Click &quot;Add FAQ&quot; to get started.
                  </div>
                )}

                {faqs.map((faq, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-100 space-y-3 relative">
                    <button
                      type="button"
                      onClick={() => removeFaq(i)}
                      className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-100 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div>
                      <label className="text-xs font-bold text-slate-500 mb-1 block">Question {i + 1}</label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => updateFaq(i, "question", e.target.value)}
                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400"
                        placeholder="Enter question..."
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 mb-1 block">Answer</label>
                      <textarea
                        value={faq.answer}
                        onChange={(e) => updateFaq(i, "answer", e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/30 focus:border-purple-400 resize-y"
                        placeholder="Enter answer..."
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Error */}
              {formError && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm font-medium">
                  {formError}
                </div>
              )}

              {/* Submit */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={goBack}
                  className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {saving ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  {saving
                    ? view === "edit" ? "Updating..." : "Publishing..."
                    : view === "edit" ? "Update Blog" : "Publish Blog"
                  }
                </button>
              </div>
            </form>
          </div>
        )}
        </>
      )}
      </main>

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
            <h3 className="text-lg font-bold text-slate-900 mb-1">Delete Blog Post?</h3>
            <p className="text-slate-500 text-sm mb-6">
              This action cannot be undone. The blog post will be permanently removed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteModal(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteModal)}
                disabled={deleting}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-colors disabled:opacity-60"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
