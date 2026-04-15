import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getAllBlogs } from "@/lib/blog-service";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, ArrowRight, Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest insights, tech trends, and updates from Codebase Infotech. Stay informed on web development, app development, UI/UX, and digital innovation.",
  alternates: { canonical: "/blog" },
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const blogs = await getAllBlogs();

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
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-blue-300 mb-6">
              <BookOpen className="w-3.5 h-3.5 mr-2" />
              Our Blog
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Insights &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Innovation</span>
            </h1>
            <p className="text-base sm:text-lg text-blue-100/60 max-w-2xl mx-auto font-medium">
              Explore our latest articles on software development, IT solutions, and emerging technology trends. Gain insights and practical tips from industry experts.
            </p>
          </div>
        </section>

        {/* ====== Blog Grid ====== */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {blogs.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Coming Soon</h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  We&apos;re working on some great content. Check back soon for our latest blog posts!
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogs.map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:border-slate-200 hover:-translate-y-1 transition-all duration-500"
                  >
                    {/* Image */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
                          <BookOpen className="w-12 h-12 text-blue-200" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      {/* Date */}
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        {blog.updatedAt !== blog.createdAt && (
                          <span className="flex items-center gap-1 text-blue-400">
                            <Clock className="w-3 h-3" />
                            Updated
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                        {blog.title}
                      </h2>

                      {/* Description */}
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4">
                        {blog.description.replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/\u00A0/g, " ").substring(0, 150)}...
                      </p>

                      {/* Read More */}
                      <div className="flex items-center gap-1.5 text-blue-600 text-sm font-bold group-hover:gap-3 transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
