import {
  Globe,
  Code2,
  Layers,
  Terminal,
  ShoppingBag,
  Boxes,
  Triangle,
  Search,
  Wrench,
  Gauge,
  Mail,
  Megaphone,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type ServiceIssue = { title: string; fix: string };
export type WeakPoint = { point: string; fix: string };

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  tagline: string;
  intro: string;
  deliver: string[];
  /** Common errors / problems I fix in this stack */
  errors: ServiceIssue[];
  /** "Top kaise" — how I make it rank & perform */
  ranking: string[];
  /** Honest weak points + how I handle them */
  weakPoints: WeakPoint[];
  tech: string[];
  meta: { title: string; description: string };
};

export const SERVICES: Record<string, Service> = {
  wordpress: {
    slug: "wordpress",
    name: "WordPress Development",
    icon: Globe,
    tagline: "Fast, SEO-ready WordPress sites you can manage yourself.",
    intro:
      "I build custom WordPress websites that load fast, rank on Google, and stay easy to update. From business sites to WooCommerce stores — clean themes, no bloat, and a dashboard you'll actually enjoy using.",
    deliver: [
      "Custom themes & Gutenberg/Elementor builds — pixel-perfect, no template lock-in",
      "WooCommerce stores with smooth product and checkout flows",
      "Speed optimisation, caching, and image compression",
      "An easy admin dashboard so you can edit content anytime",
    ],
    errors: [
      { title: "White Screen of Death", fix: "Usually a PHP memory limit or plugin conflict — I raise memory, isolate the culprit, and add error logging so it never silently fails again." },
      { title: "Slow TTFB / bloated plugins", fix: "I audit every plugin, replace heavy ones, and add server + page caching to cut load times dramatically." },
      { title: "Mixed content / SSL warnings", fix: "I force HTTPS site-wide, fix hard-coded HTTP URLs, and update the database so the padlock stays green." },
      { title: "Site breaks after an update", fix: "I work on a staging copy with a child theme, so updates are tested before they ever touch the live site." },
    ],
    ranking: [
      "Yoast / Rank Math setup with unique meta titles & descriptions on every page",
      "Schema markup so Google shows rich results",
      "Caching (WP Rocket / LiteSpeed) + a CDN for fast global load times",
      "Core Web Vitals tuning — lazy-loaded images, minified assets, clean permalinks",
    ],
    weakPoints: [
      { point: "Plugin bloat slows sites down", fix: "I use a curated, minimal plugin set and write custom code instead of stacking plugins." },
      { point: "A common hacking target", fix: "I harden logins, keep everything updated, and add a firewall + backups." },
      { point: "Can feel sluggish if unmanaged", fix: "Caching, a CDN, and optimised hosting keep it consistently fast." },
    ],
    tech: ["PHP", "MySQL", "WooCommerce", "Gutenberg", "Elementor", "Rank Math"],
    meta: {
      title: "WordPress Development by Asif — Fast, SEO-Ready Sites",
      description:
        "Custom WordPress & WooCommerce development — fast, secure, SEO-optimised sites with an easy dashboard. Common errors fixed and Core Web Vitals tuned.",
    },
  },

  php: {
    slug: "php",
    name: "PHP Development",
    icon: Code2,
    tagline: "Custom PHP backends and websites built from scratch.",
    intro:
      "When a template won't cut it, I build custom PHP applications from the ground up — secure, fast, and tailored exactly to your logic. Custom CMSs, REST APIs, dashboards, and payment integrations.",
    deliver: [
      "Custom CMS & admin panels built around your workflow",
      "REST APIs and third-party / payment integrations",
      "Secure form handling, auth, and database design",
      "Clean, modern PHP 8 code following PSR standards",
    ],
    errors: [
      { title: "Undefined index / null errors", fix: "I add proper input validation and null-safe checks so missing data never crashes a page." },
      { title: "SQL injection risk", fix: "Every query uses prepared statements (PDO) — user input can never touch raw SQL." },
      { title: "Session & cookie issues", fix: "I configure secure, correctly-scoped sessions so logins stay reliable across the site." },
      { title: "Cryptic 500 errors", fix: "I enable structured error logging and environment-based config so issues are caught early, not in production." },
    ],
    ranking: [
      "Clean, server-rendered URLs that Google can crawl easily",
      "Fast database queries with proper indexing",
      "OPcache + gzip + asset caching for quick response times",
      "Semantic HTML output with correct meta tags",
    ],
    weakPoints: [
      { point: "Raw PHP can be insecure", fix: "I sanitise all input, use parameterised queries, and follow secure-coding standards." },
      { point: "Scaling needs planning", fix: "I structure code cleanly (MVC) and add caching layers so it grows without rewrites." },
      { point: "Legacy code is fragile", fix: "I modernise to PHP 8 and Composer-managed dependencies." },
    ],
    tech: ["PHP 8", "MySQL", "PDO", "Composer", "Nginx / Apache"],
    meta: {
      title: "PHP Development by Asif — Custom Backends & APIs",
      description:
        "Custom PHP 8 development — secure CMSs, REST APIs, and integrations built from scratch with prepared statements, clean architecture, and fast queries.",
    },
  },

  laravel: {
    slug: "laravel",
    name: "Laravel Development",
    icon: Layers,
    tagline: "Scalable web apps with the Laravel framework.",
    intro:
      "Laravel is my go-to for serious web applications — SaaS platforms, admin systems, and APIs that need to scale. Elegant code, robust security, and a structure that's easy to maintain and grow.",
    deliver: [
      "Full web apps & SaaS platforms with authentication and roles",
      "REST / GraphQL APIs with versioning and docs",
      "Admin dashboards, queues, and payment integrations",
      "Clean, testable, maintainable code",
    ],
    errors: [
      { title: "419 Page Expired (CSRF)", fix: "I handle CSRF tokens correctly in forms and AJAX so sessions don't randomly expire." },
      { title: "Mass-assignment vulnerabilities", fix: "Models use explicit fillable/guarded rules so only intended fields can be set." },
      { title: "N+1 query slowdowns", fix: "I use eager loading and query optimisation to keep database calls minimal." },
      { title: "Migration conflicts", fix: "Versioned, reviewed migrations with rollbacks keep the schema clean across environments." },
    ],
    ranking: [
      "Server-side rendering with Blade / Inertia for crawlable, SEO-friendly pages",
      "Route + config + view caching for fast responses",
      "Database indexing and Redis caching for heavy queries",
      "Background queues so pages stay fast under load",
    ],
    weakPoints: [
      { point: "Overkill for tiny sites", fix: "I right-size — Laravel only when the project genuinely needs it." },
      { point: "Needs proper hosting", fix: "I set up optimised deployment with caching and a tuned server." },
      { point: "Can be slow if misused", fix: "Eager loading, indexing, and caching keep it snappy." },
    ],
    tech: ["Laravel", "PHP 8", "MySQL / PostgreSQL", "Redis", "Livewire / Inertia"],
    meta: {
      title: "Laravel Development by Asif — Scalable Web Apps",
      description:
        "Laravel development for SaaS, APIs, and admin platforms — secure, scalable, and maintainable apps with caching, queues, and clean architecture.",
    },
  },

  python: {
    slug: "python",
    name: "Python Development",
    icon: Terminal,
    tagline: "Python web apps, automation, and APIs.",
    intro:
      "From Django web apps to FastAPI services and automation scripts, I use Python to build things that think — data dashboards, scrapers, APIs, and tools that save you hours of manual work.",
    deliver: [
      "Web apps with Django, Flask, or FastAPI",
      "High-performance REST APIs",
      "Web scraping, automation, and data pipelines",
      "Data dashboards and reporting tools",
    ],
    errors: [
      { title: "ModuleNotFoundError / env mess", fix: "I use clean virtual environments and pinned requirements so the app runs the same everywhere." },
      { title: "Type & indentation errors", fix: "Linting, type hints, and formatting catch these before they ever ship." },
      { title: "CORS errors on APIs", fix: "Correct middleware and headers so your frontend can talk to the API smoothly." },
      { title: "Django migration issues", fix: "Careful, reviewed migrations keep the database schema in sync without data loss." },
    ],
    ranking: [
      "FastAPI's async speed for fast API responses",
      "Server-side rendering or prerendering where SEO matters",
      "Caching and tuned Gunicorn / Uvicorn workers",
      "Clean, semantic templates with proper meta tags",
    ],
    weakPoints: [
      { point: "SPA frontends hurt SEO", fix: "I add SSR or pre-rendering so search engines can read the content." },
      { point: "Concurrency limits (GIL)", fix: "Async frameworks and worker processes handle load efficiently." },
      { point: "Deployment can be complex", fix: "I containerise with Docker for clean, repeatable deploys." },
    ],
    tech: ["Python", "Django", "FastAPI", "Flask", "PostgreSQL"],
    meta: {
      title: "Python Development by Asif — Apps, APIs & Automation",
      description:
        "Python development — Django/FastAPI web apps, REST APIs, web scraping, and automation. Clean environments, async speed, and SEO-ready rendering.",
    },
  },

  shopify: {
    slug: "shopify",
    name: "Shopify Development",
    icon: ShoppingBag,
    tagline: "High-converting Shopify stores that actually sell.",
    intro:
      "I build Shopify stores that look premium and turn browsers into buyers. Custom Liquid themes, optimised checkouts, and the right apps — set up so you sell more and manage less.",
    deliver: [
      "Custom Shopify themes built with Liquid — no cookie-cutter templates",
      "Product, collection, and checkout optimisation",
      "App integration, payments, and shipping setup",
      "Speed optimisation for a fast, smooth store",
    ],
    errors: [
      { title: "Slow store from heavy apps", fix: "I audit installed apps, remove the bloat, and lazy-load scripts to speed things up." },
      { title: "Liquid template errors", fix: "I debug loops and objects properly so products and collections render correctly." },
      { title: "Cart & checkout glitches", fix: "I fix configuration and script conflicts so customers can always complete a purchase." },
      { title: "Duplicate-content SEO issues", fix: "Canonical tags and structured data stop Shopify's duplicate URLs from hurting rankings." },
    ],
    ranking: [
      "Product schema so listings show rich results in Google",
      "A fast, lightweight theme with optimised images and alt text",
      "Clean collection structure and meta tags",
      "A blog and content strategy to pull in organic traffic",
    ],
    weakPoints: [
      { point: "Customisation has platform limits", fix: "I push Liquid and apps to their limits — and know when a workaround is cleaner." },
      { point: "App bloat creeps in", fix: "I keep a curated, essential app set and replace apps with custom code where possible." },
      { point: "Transaction fees add up", fix: "I set up Shopify Payments correctly to minimise extra fees." },
    ],
    tech: ["Shopify", "Liquid", "Hydrogen", "JavaScript", "Shopify Apps"],
    meta: {
      title: "Shopify Development by Asif — Stores That Convert",
      description:
        "Custom Shopify development — fast Liquid themes, optimised checkout, app integration, and product SEO built to turn visitors into paying customers.",
    },
  },

  "mern-stack": {
    slug: "mern-stack",
    name: "MERN Stack Development",
    icon: Boxes,
    tagline: "Full-stack JavaScript apps — MongoDB, Express, React, Node.",
    intro:
      "One language, end to end. I build modern full-stack apps with the MERN stack — fast single-page interfaces, real-time features, and robust APIs, all in JavaScript.",
    deliver: [
      "Single-page apps and dashboards with React",
      "REST APIs with Node.js & Express",
      "Real-time features (chat, notifications) with WebSockets",
      "JWT authentication and role-based access",
    ],
    errors: [
      { title: "CORS errors", fix: "Correct CORS middleware and headers so your frontend and API communicate cleanly." },
      { title: "Unhandled promise rejections", fix: "Consistent async/await with try-catch and global handlers — no silent crashes." },
      { title: "JWT / auth bugs", fix: "A proper token flow with refresh logic keeps sessions secure and stable." },
      { title: "MongoDB connection drops", fix: "Connection pooling and environment config keep the database reliable under load." },
    ],
    ranking: [
      "Server-side rendering (Next.js) so React content is crawlable",
      "Code splitting and lazy loading for fast first paint",
      "API response caching and a CDN for assets",
      "Optimised bundles and image delivery for Core Web Vitals",
    ],
    weakPoints: [
      { point: "Client-rendered React hurts SEO", fix: "I add SSR/SSG with Next.js so search engines see real content." },
      { point: "State management gets messy", fix: "Clean patterns with Redux Toolkit or Zustand keep it predictable." },
      { point: "Security needs attention", fix: "Input validation, Helmet, and rate limiting protect the API." },
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    meta: {
      title: "MERN Stack Development by Asif — Full-Stack JS Apps",
      description:
        "MERN stack development — MongoDB, Express, React, Node. Real-time apps, secure JWT auth, and SSR for SEO. Common CORS, auth, and DB issues handled.",
    },
  },

  nextjs: {
    slug: "nextjs",
    name: "Next.js Development",
    icon: Triangle,
    tagline: "Blazing-fast, SEO-ready React apps with Next.js.",
    intro:
      "Next.js is where modern React meets great SEO. I build lightning-fast sites and full-stack apps with server rendering, the App Router, and edge performance — the same stack this very site runs on.",
    deliver: [
      "SSR / SSG / ISR sites that are fast and crawlable",
      "Full-stack apps with API routes and the App Router",
      "Headless CMS and e-commerce front-ends",
      "TypeScript + Tailwind for clean, maintainable code",
    ],
    errors: [
      { title: "Hydration mismatch", fix: "I keep server and client rendering consistent so React doesn't throw hydration warnings." },
      { title: "use client / server boundary errors", fix: "Correct component boundaries and directives so server and client code stay in their lanes." },
      { title: "Build & env failures", fix: "Proper environment config and typed env handling so builds are reproducible." },
      { title: "Image optimisation config", fix: "Correct next.config and remote patterns so images load optimised, not broken." },
    ],
    ranking: [
      "SSR/SSG so Google sees fully rendered pages",
      "The Metadata API for per-page titles, descriptions, and Open Graph",
      "Automatic sitemap, image optimisation, and font handling",
      "Edge caching and ISR for instant, always-fresh pages",
    ],
    weakPoints: [
      { point: "Overkill for a simple page", fix: "I right-size — static export when that's all you need." },
      { point: "Server rendering has a cost", fix: "ISR and static generation keep hosting cheap and fast." },
      { point: "Steeper learning curve", fix: "That's on me — you just get a fast, modern site." },
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "Vercel"],
    meta: {
      title: "Next.js Development by Asif — Fast, SEO-Ready React",
      description:
        "Next.js development — SSR/SSG sites and full-stack apps with the App Router, Metadata API, and edge performance. Fast, crawlable, and Core Web Vitals friendly.",
    },
  },

  seo: {
    slug: "seo",
    name: "SEO Optimization",
    icon: Search,
    tagline: "Get found on Google — technical & on-page SEO.",
    intro:
      "A beautiful site is useless if no one finds it. I make sites rank — technical audits, on-page optimisation, schema, and speed — so you climb Google for the searches that bring real customers.",
    deliver: [
      "Full technical SEO audit with a prioritised action plan",
      "On-page optimisation — titles, meta, headings, internal links",
      "Schema markup and rich-result setup",
      "Site speed and Core Web Vitals improvements",
    ],
    errors: [
      { title: "Pages not indexed", fix: "I fix sitemaps, robots.txt, and crawl errors, then submit through Google Search Console." },
      { title: "Missing or duplicate meta tags", fix: "Every page gets a unique, keyword-targeted title and description." },
      { title: "Poor Core Web Vitals", fix: "I optimise images, scripts, and layout shift so pages pass Google's speed checks." },
      { title: "No structured data", fix: "I add schema for articles, products, and businesses so you qualify for rich results." },
    ],
    ranking: [
      "Keyword research mapped to real buyer intent",
      "On-page optimisation and a clean internal linking structure",
      "Technical health — speed, mobile, crawlability, schema",
      "Content strategy and authority building over time",
    ],
    weakPoints: [
      { point: "SEO takes time, not days", fix: "I set realistic timelines and show steady, measurable progress." },
      { point: "Algorithms change", fix: "I stick to white-hat fundamentals that survive updates." },
      { point: "Competitive niches are hard", fix: "I win with content depth, technical edge, and consistency." },
    ],
    tech: ["Search Console", "GA4", "Ahrefs / SEMrush", "Schema", "Lighthouse"],
    meta: {
      title: "SEO Optimization by Asif — Rank Higher on Google",
      description:
        "Technical & on-page SEO — audits, schema, Core Web Vitals, and content strategy that fixes indexing issues and gets your site ranking for buyer-intent searches.",
    },
  },

  maintenance: {
    slug: "maintenance",
    name: "Maintenance & Support",
    icon: Wrench,
    tagline: "Keep your site secure, updated, and always online.",
    intro:
      "Launching is only the start. I keep your website healthy — updates, backups, security, and quick fixes — so it stays fast and online while you focus on your business.",
    deliver: [
      "Regular updates, backups, and uptime monitoring",
      "Security hardening and malware protection",
      "Bug fixes and small content/design changes",
      "Monthly health & performance reports",
    ],
    errors: [
      { title: "Site down after an update", fix: "I work on staging with instant rollback, so a bad update never takes your live site offline." },
      { title: "Hacked or malware-infected site", fix: "I clean the infection, close the entry point, and harden logins, firewall, and file permissions." },
      { title: "Plugins/extensions breaking", fix: "I test updates before applying and replace abandoned plugins with maintained ones." },
      { title: "Lost data with no backup", fix: "I set up automated off-site backups so your site can always be restored." },
    ],
    ranking: [
      "Keep Core Web Vitals green as content grows",
      "Fix broken links and crawl errors before they hurt rankings",
      "Refresh content and metadata to stay relevant",
      "Monitor speed and uptime continuously",
    ],
    weakPoints: [
      { point: "It's an ongoing cost", fix: "Flexible monthly plans — pay only for the level of care you need." },
      { point: "Easy to be reactive only", fix: "I monitor proactively and catch issues before they become outages." },
      { point: "Feeling locked to one dev", fix: "Everything is documented and handed over — you're never trapped." },
    ],
    tech: ["cPanel", "Git", "Cloudflare", "UptimeRobot", "Automated backups"],
    meta: {
      title: "Website Maintenance & Support by Asif",
      description:
        "Website maintenance and support — updates, backups, security, uptime monitoring, and quick fixes that keep your site fast, secure, and always online.",
    },
  },

  "speed-optimization": {
    slug: "speed-optimization",
    name: "Speed Optimization",
    icon: Gauge,
    tagline: "Make your site load in under a second.",
    intro:
      "Slow sites lose visitors and rankings. I diagnose what's dragging your site down and fix it — images, caching, code, and hosting — so pages load instantly and pass Google's speed checks.",
    deliver: [
      "Full speed audit with Lighthouse & Core Web Vitals",
      "Image optimisation, WebP, and lazy loading",
      "Caching, minification, and a CDN setup",
      "Render-blocking and unused-code cleanup",
    ],
    errors: [
      { title: "Slow LCP (largest paint)", fix: "I optimise and preload the hero image and critical assets so the main content appears fast." },
      { title: "Render-blocking JS & CSS", fix: "I defer, minify, and split assets so the page paints before everything finishes loading." },
      { title: "Huge unoptimised images", fix: "I convert to WebP, resize correctly, and lazy-load below-the-fold images." },
      { title: "Too many requests", fix: "I bundle, cache, and serve assets from a CDN to cut request overhead." },
    ],
    ranking: [
      "Passing Core Web Vitals directly boosts Google rankings",
      "Page + browser caching for instant repeat visits",
      "A global CDN so every visitor loads fast",
      "Lighthouse score of 90+ on mobile and desktop",
    ],
    weakPoints: [
      { point: "Third-party scripts slow things", fix: "I audit and defer or replace heavy tracking and chat scripts." },
      { point: "Cheap hosting caps speed", fix: "I recommend and migrate to faster, optimised hosting." },
      { point: "Speed vs features trade-off", fix: "I balance both — fast without stripping what you need." },
    ],
    tech: ["Lighthouse", "WebP", "Cloudflare CDN", "Caching", "Core Web Vitals"],
    meta: {
      title: "Website Speed Optimization by Asif — Sub-Second Loads",
      description:
        "Website speed optimization — image, caching, code, and CDN tuning that makes your site load in under a second and pass Google Core Web Vitals.",
    },
  },

  "contact-solutions": {
    slug: "contact-solutions",
    name: "Email & Contact Solutions",
    icon: Mail,
    tagline: "Reliable contact forms, email, and CRM integration.",
    intro:
      "A contact form is useless if the messages never arrive. I build forms that actually deliver — no spam, straight to your inbox or CRM — so you never lose a lead again.",
    deliver: [
      "Custom contact forms wired to your inbox",
      "Email deliverability setup (SMTP, SPF, DKIM)",
      "Spam protection with honeypot / reCAPTCHA",
      "CRM, Zapier, and auto-responder integration",
    ],
    errors: [
      { title: "Form emails land in spam", fix: "I configure proper SMTP with SPF and DKIM so messages reach the inbox, not the junk folder." },
      { title: "Form just doesn't send", fix: "I replace the broken default mailer with a reliable SMTP handler and test end to end." },
      { title: "Flooded with spam submissions", fix: "Honeypot fields and reCAPTCHA stop bots without annoying real visitors." },
      { title: "Leads getting lost", fix: "I connect the form to your CRM or email tool so every lead is captured and followed up." },
    ],
    ranking: [
      "Fast, accessible forms that don't slow the page",
      "Mobile-friendly fields with clear validation",
      "Auto-responders so leads get an instant reply",
      "Clean tracking so you know which page converts",
    ],
    weakPoints: [
      { point: "Deliverability depends on setup", fix: "I use a proper SMTP provider so emails send reliably." },
      { point: "Spam is always evolving", fix: "Layered protection keeps the junk out as tactics change." },
      { point: "Every CRM is different", fix: "I integrate the exact tools you already use." },
    ],
    tech: ["SMTP", "reCAPTCHA", "Zapier", "Mailchimp", "PHPMailer"],
    meta: {
      title: "Email & Contact Form Solutions by Asif",
      description:
        "Reliable contact forms and email solutions — SMTP deliverability, spam protection, and CRM/Zapier integration so you never lose a lead to a broken form.",
    },
  },
};

/** Display order for the services grid */
export const SERVICE_SLUGS = [
  "wordpress",
  "php",
  "laravel",
  "python",
  "shopify",
  "mern-stack",
  "nextjs",
  "seo",
  "speed-optimization",
  "maintenance",
  "contact-solutions",
] as const;

export const SERVICE_LIST: Service[] = SERVICE_SLUGS.map((s) => SERVICES[s]);

/* Services grouped into 4 categories for the home page overview. */
export type ServiceGroupItem = {
  /** Maps to a /services/<slug> detail page when set */
  slug?: string;
  /** Override label (for items without a detail page) */
  name?: string;
  /** Override link target */
  href?: string;
  badge: string;
  featured?: boolean;
};
export type ServiceGroup = {
  key: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  cta: string;
  /** Optional dedicated overview page; falls back to /services#key */
  href?: string;
  items: ServiceGroupItem[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    key: "web",
    title: "Web development",
    subtitle: "Build fast, look great, rank higher",
    icon: Code2,
    cta: "View all web services",
    href: "/services/web-development",
    items: [
      { slug: "wordpress", badge: "Most popular", featured: true },
      { slug: "php", badge: "Custom backend" },
      { slug: "laravel", badge: "Scalable apps" },
      { slug: "nextjs", badge: "React / SEO" },
      { slug: "mern-stack", badge: "Full-stack JS" },
    ],
  },
  {
    key: "marketing",
    title: "Marketing & SEO",
    subtitle: "Get found, get leads, grow revenue",
    icon: Megaphone,
    cta: "View all marketing services",
    href: "/services/marketing",
    items: [
      { slug: "seo", badge: "High ROI", featured: true },
      { name: "Meta Ads", href: "/services/marketing", badge: "Facebook / IG" },
      { name: "Social Media", href: "/services/marketing", badge: "Content" },
    ],
  },
  {
    key: "ecommerce",
    title: "E-commerce & automation",
    subtitle: "Stores that sell, systems that run",
    icon: ShoppingBag,
    cta: "View e-commerce & automation",
    href: "/services/ecommerce",
    items: [
      { slug: "shopify", badge: "E-commerce", featured: true },
      { slug: "python", badge: "Automation" },
    ],
  },
  {
    key: "support",
    title: "Support & maintenance",
    subtitle: "Keep your site fast and healthy",
    icon: Settings,
    cta: "View support plans",
    href: "/services/support-maintenance",
    items: [
      { slug: "speed-optimization", badge: "Core Web Vitals", featured: true },
      { slug: "maintenance", badge: "Monthly retainer" },
      { slug: "contact-solutions", badge: "Forms / SMTP" },
    ],
  },
];

/* Reliable placeholder imagery per service (swap for real screenshots later) */
export function serviceImage(slug: string, w = 1200, h = 675): string {
  return `https://picsum.photos/seed/asif-svc-${slug}/${w}/${h}`;
}
