// ============================================================
// Centralized SEO Configuration for Codebase Infotech
// ============================================================

export const siteConfig: {
  name: string;
  shortName: string;
  url: string;
  ogImage: string;
  description: string;
  keywords: string[];
  authors: { name: string; url: string }[];
  creator: string;
  social: {
    twitter: string;
    linkedin: string;
    facebook: string;
    instagram: string;
  };
  contact: {
    email: string;
    phone: string;
  };
} = {
  name: "Codebase Infotech",
  shortName: "Codebase",
  url: "https://codebaseinfotech.com",
  ogImage: "https://codebaseinfotech.com/logo.png",
  description:
    "Codebase Infotech is a leading IT solutions company specializing in custom software development, mobile app development, web development, UI/UX design, and digital marketing services worldwide.",
  keywords: [
    "software development company",
    "IT solutions provider",
    "mobile app development",
    "web development",
    "custom software",
    "UI/UX design",
    "digital marketing",
    "cross-platform development",
    "full-stack development",
    "CMS development",
    "React development",
    "Node.js development",
    "Flutter app development",
    "Next.js development",
    "Codebase Infotech",
  ],
  authors: [
    {
      name: "Codebase Infotech",
      url: "https://codebaseinfotech.com",
    },
  ],
  creator: "Codebase Infotech",
  social: {
    twitter: "@codebaseinfotech",
    linkedin: "https://www.linkedin.com/company/codebaseinfotech",
    facebook: "https://www.facebook.com/codebaseinfotech",
    instagram: "https://www.instagram.com/codebase.infotech/",
  },
  contact: {
    email: "codebaseinfotech@gmail.com",
    phone: "+91-7096859504",
  },
};

// Helper to generate page-specific title with site name
export function generateTitle(pageTitle: string): string {
  return `${pageTitle} | ${siteConfig.name}`;
}

// Helper to generate full URL for a path
export function generateUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}
