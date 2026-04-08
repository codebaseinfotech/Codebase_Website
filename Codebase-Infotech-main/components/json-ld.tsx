// ============================================================
// JSON-LD Structured Data Component
// Injects schema.org structured data for rich search results
// ============================================================

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ---- Pre-built Schema Generators ----

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Codebase Infotech",
    url: "https://codebaseinfotech.com",
    logo: "https://codebaseinfotech.com/logo.png",
    description:
      "Leading IT solutions company specializing in custom software development, mobile app development, web development, UI/UX design, and digital marketing services.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@codebaseinfotech.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/codebaseinfotech",
      "https://www.facebook.com/codebaseinfotech",
      "https://www.instagram.com/codebaseinfotech",
    ],
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 200,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    knowsAbout: [
      "Software Development",
      "Mobile App Development",
      "Web Development",
      "UI/UX Design",
      "Digital Marketing",
      "Cloud Solutions",
      "Custom Software",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Codebase Infotech",
    url: "https://codebaseinfotech.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://codebaseinfotech.com/services?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  serviceUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "Organization",
      name: "Codebase Infotech",
      url: "https://codebaseinfotech.com",
    },
    description: serviceDescription,
    url: serviceUrl,
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Codebase Infotech",
    image: "https://codebaseinfotech.com/logo.png",
    url: "https://codebaseinfotech.com",
    email: "info@codebaseinfotech.com",
    description:
      "Professional IT solutions and software development company providing end-to-end digital solutions.",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
  };
}
