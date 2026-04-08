import type { Metadata } from "next"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// ============================================================
// 404 Not Found Page SEO
// ============================================================
export const metadata: Metadata = {
  title: "Page Not Found — 404",
  description:
    "The page you are looking for does not exist. Navigate back to Codebase Infotech to explore our IT services, portfolio, and more.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="flex items-center justify-center py-32">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
