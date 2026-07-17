import { SITE, abs } from "@/lib/site";

const PERSON_ID = `${SITE.url}/#person`;
const BUSINESS_ID = `${SITE.url}/#business`;

/** The person behind the site. Referenced by every other schema. */
export const personSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: SITE.personName,
  alternateName: "Asif",
  url: SITE.url,
  image: SITE.ogImage,
  jobTitle: SITE.jobTitle,
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  description: SITE.description,
  knowsAbout: [
    "Web Development",
    "Search Engine Optimization",
    "WordPress",
    "Shopify",
    "WooCommerce",
    "Next.js",
    "Core Web Vitals",
    "E-commerce",
  ],
});

/** The freelance business itself, so services and contact details are machine readable. */
export const businessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": BUSINESS_ID,
  name: SITE.name,
  url: SITE.url,
  image: SITE.ogImage,
  description: SITE.description,
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  founder: { "@id": PERSON_ID },
  areaServed: "Worldwide",
  availableLanguage: ["English", "Urdu"],
  priceRange: "$$",
  serviceType: [
    "Web Development",
    "Marketing and SEO",
    "E-commerce and Automation",
    "Support and Maintenance",
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  publisher: { "@id": PERSON_ID },
});

/** One offered service, used on each service detail page. */
export const serviceSchema = (s: {
  name: string;
  description: string;
  slug: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.name,
  description: s.description,
  url: abs(`/services/${s.slug}`),
  serviceType: s.name,
  provider: { "@id": BUSINESS_ID },
  areaServed: "Worldwide",
});

/** FAQ blocks. Google can surface these as expandable results. */
export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const blogPostingSchema = (p: {
  slug: string;
  title: string;
  excerpt: string;
  dateISO: string;
  cover: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: p.title,
  description: p.excerpt,
  image: p.cover,
  datePublished: p.dateISO,
  dateModified: p.dateISO,
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  mainEntityOfPage: { "@type": "WebPage", "@id": abs(`/blog/${p.slug}`) },
});

/** The portfolio as a machine-readable list of real, live builds. */
export const portfolioSchema = (projects: { url: string; title: string; desc: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects and Portfolio",
  url: abs("/projects"),
  about: { "@id": PERSON_ID },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "WebSite",
        name: p.title,
        url: p.url,
        description: p.desc,
        creator: { "@id": PERSON_ID },
      },
    })),
  },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});
