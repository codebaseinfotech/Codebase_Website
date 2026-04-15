import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { getAllBlogs, getBlogBySlug } from "@/lib/blog-service";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, ArrowLeft, ChevronDown, BookOpen, Share2 } from "lucide-react";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Blog Not Found" };

  return {
    title: blog.title,
    description: blog.description.replace(/<[^>]+>/g, "").substring(0, 160),
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: blog.title,
      description: blog.description.replace(/<[^>]+>/g, "").substring(0, 160),
      images: blog.image ? [{ url: blog.image }] : [],
    },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) notFound();

  const allBlogs = (await getAllBlogs()).filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      <main className="flex-grow">
        {/* ====== Hero Banner ====== */}
        <section className="relative bg-[#020617] pt-28 pb-10 sm:pt-32 sm:pb-14 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 rounded-full blur-[140px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[45%] h-[45%] bg-cyan-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-blue-200/40 mb-6">
              <Link href="/blog" className="hover:text-blue-300 transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                Blog
              </Link>
              <span>/</span>
              <span className="text-blue-200/60 truncate max-w-[200px] sm:max-w-none">{blog.title}</span>
            </div>

            {/* Date Info */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200/40 mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                Published: {new Date(blog.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              {blog.updatedAt !== blog.createdAt && (
                <span className="flex items-center gap-1.5 text-cyan-300/50">
                  <Clock className="w-3.5 h-3.5" />
                  Updated: {new Date(blog.updatedAt).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              {blog.title}
            </h1>
          </div>
        </section>

        {/* ====== Featured Image ====== */}
        {blog.image && (
          <section className="relative -mt-2">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 sm:h-72 lg:h-96 object-cover"
                />
              </div>
            </div>
          </section>
        )}

        {/* ====== Content ====== */}
        <section className="py-10 sm:py-14 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Blog Content */}
            <article className="blog-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.description
                    // Replace &nbsp; with normal spaces for proper word wrapping
                    .replace(/&nbsp;/g, " ")
                    .replace(/\u00A0/g, " ")
                    // Remove inline background-color that overrides theme
                    .replace(/background-color:\s*rgb\(255,\s*255,\s*255\);?\s*/g, "")
                    // Remove inline color styles from pasted content (let CSS handle it)
                    .replace(/color:\s*rgb\(45,\s*45,\s*45\);?\s*/g, "")
                    // Clean empty style attributes
                    .replace(/\s*style=""\s*/g, "")
                    // Remove empty span wrappers
                    .replace(/<span\s*>(.*?)<\/span>/g, "$1"),
                }}
              />
            </article>

            {/* ====== FAQs ====== */}
            {blog.faqs && blog.faqs.length > 0 && (
              <div className="mt-12 sm:mt-16">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {blog.faqs.map((faq, i) => (
                    <details
                      key={i}
                      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-200 transition-colors"
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 list-none">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 pr-4 group-open:text-blue-600 transition-colors">
                          {faq.question}
                        </h3>
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-300" />
                      </summary>
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* ====== Share / CTA ====== */}
            <div className="mt-12 sm:mt-16 bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-6 sm:p-8 lg:p-10 text-center relative overflow-hidden">
              <div className="absolute top-[-30%] right-[-10%] w-[40%] h-[60%] bg-blue-500/10 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Have a Project in Mind?
                </h3>
                <p className="text-blue-100/60 text-sm sm:text-base max-w-lg mx-auto mb-6">
                  Let&apos;s turn your idea into reality. Our team is ready to help you build something amazing.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-blue-500/25 hover:scale-[1.03] transition-all"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-white/20 transition-all border border-white/10"
                  >
                    More Blogs
                  </Link>
                </div>
              </div>
            </div>

            {/* ====== Related Blogs ====== */}
            {allBlogs.length > 0 && (
              <div className="mt-12 sm:mt-16">
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-6">
                  Related Articles
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {allBlogs.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="h-36 overflow-hidden bg-slate-100">
                        {related.image ? (
                          <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
                            <BookOpen className="w-8 h-8 text-blue-200" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <p className="text-xs text-slate-400 mb-1.5">
                          {new Date(related.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                        </p>
                        <h3 className="text-sm font-bold text-slate-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {related.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
