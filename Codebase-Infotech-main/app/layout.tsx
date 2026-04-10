import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { siteConfig } from "@/lib/seo-config"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

// ============================================================
// Global Metadata — applies to all pages unless overridden
// ============================================================
export const metadata: Metadata = {
  // ---- Base ----
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Codebase Infotech — Empowering Ideas with Code",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,

  // ---- Open Graph (Facebook, LinkedIn, WhatsApp, etc.) ----
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Codebase Infotech — Empowering Ideas with Code",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Codebase Infotech — Leading IT Solutions Company",
      },
    ],
  },

  // ---- Twitter / X ----
  twitter: {
    card: "summary_large_image",
    site: siteConfig.social.twitter,
    creator: siteConfig.social.twitter,
    title: "Codebase Infotech — Empowering Ideas with Code",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },

  // ---- Robots ----
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ---- Icons ----
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },

  // ---- Verification (add your actual IDs later) ----
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  //   yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  // },

  // ---- Alternates ----
  alternates: {
    canonical: siteConfig.url,
  },

  // ---- Category ----
  category: "technology",
}

// ============================================================
// Viewport — separated from metadata per Next.js 15 best practices
// ============================================================
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LGDXBY9CJX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LGDXBY9CJX');
          `}
        </Script>
      </body>
    </html>
  )
}
