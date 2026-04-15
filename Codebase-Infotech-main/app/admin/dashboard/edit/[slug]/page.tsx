"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft, Save, Plus, Trash2, ImageIcon, FileText,
  HelpCircle, LayoutDashboard, LogOut
} from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export default function EditBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [existingImage, setExistingImage] = useState<string>("");
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const res = await fetch(`/api/blogs/${slug}`);
      if (!res.ok) {
        router.push("/admin/dashboard");
        return;
      }
      const data = await res.json();
      setTitle(data.title);
      setDescription(data.description);
      setExistingImage(data.image || "");
      setImagePreview(data.image || "");
      setFaqs(data.faqs || []);
    } catch {
      router.push("/admin/dashboard");
    } finally {
      setLoading(false);
    }
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

  const addFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const removeFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const updateFaq = (index: number, field: keyof FAQ, value: string) => {
    const updated = [...faqs];
    updated[index][field] = value;
    setFaqs(updated);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !description.trim()) {
      setError("Title and description are required");
      return;
    }

    setSaving(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("faqs", JSON.stringify(faqs.filter((f) => f.question.trim())));
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await fetch(`/api/blogs/${slug}`, {
        method: "PUT",
        body: formData,
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await res.json();
        setError(data.error || "Failed to update blog");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
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
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl text-blue-200/50 hover:text-white hover:bg-white/[0.04] text-sm font-medium transition-colors">
            <FileText className="w-4 h-4" />
            All Blogs
          </Link>
        </nav>
        <div className="p-4 border-t border-white/[0.06]">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400/60 hover:text-red-400 hover:bg-red-500/10 text-sm font-medium transition-colors w-full">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-50 bg-[#020617] border-b border-white/[0.06] px-4 py-3 flex items-center justify-between">
        <Link href="/admin/dashboard" className="flex items-center gap-2 text-white text-sm font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <p className="text-white font-bold text-sm">Edit Blog</p>
        <button onClick={handleLogout} className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
          <LogOut className="w-4 h-4" />
        </button>
      </header>

      {/* Main Content */}
      <main className="lg:ml-64 p-4 sm:p-6 lg:p-8 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/admin/dashboard" className="hidden lg:flex items-center gap-2 text-slate-500 hover:text-slate-900 text-sm font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <div className="hidden lg:block w-px h-6 bg-slate-200" />
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Edit Blog Post</h1>
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

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Description *</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-all resize-y"
                placeholder="Write your blog content here..."
                required
              />
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
                  onClick={() => { setImageFile(null); setImagePreview(""); setExistingImage(""); }}
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
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-600 text-sm font-medium">
              {error}
            </div>
          )}

          {/* Submit */}
          <div className="flex items-center gap-3 pt-2">
            <Link href="/admin/dashboard" className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors">
              Cancel
            </Link>
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
              {saving ? "Updating..." : "Update Blog"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
