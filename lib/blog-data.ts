export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // display, e.g. "Jun 2026"
  dateISO: string; // for <time> and sorting
  read: string; // e.g. "6 min read"
  cover: string;
  content: Block[];
};

/* Branded cover generated per post, matching the site palette. */
const cover = (slug: string) => `/blog/${slug}.webp`;

export const POSTS: BlogPost[] = [
  {
    slug: "make-wordpress-load-under-one-second",
    title: "10 ways to make your WordPress site load in under a second",
    excerpt:
      "Caching, image optimisation, and the plugins that are secretly slowing you down. A practical speed checklist you can work through today.",
    category: "Performance",
    date: "Jun 2026",
    dateISO: "2026-06-24",
    read: "6 min read",
    cover: cover("make-wordpress-load-under-one-second"),
    content: [
      {
        type: "p",
        text: "A slow WordPress site costs you visitors, rankings, and sales. Google has been clear that speed is a ranking factor, and real users are even less forgiving than search engines. The good news is that most WordPress sites are slow for the same handful of reasons, and every one of them is fixable.",
      },
      {
        type: "p",
        text: "Here is the exact checklist I work through when a client hands me a sluggish site. You do not need all ten to see a difference, but together they will get most sites loading in under a second.",
      },
      { type: "h2", text: "1. Turn on real caching" },
      {
        type: "p",
        text: "Caching saves a ready-made copy of your pages so the server does not have to rebuild them on every visit. A good caching plugin is the single biggest win for most sites. Pair it with server-level caching if your host offers it.",
      },
      { type: "h2", text: "2. Compress and resize your images" },
      {
        type: "p",
        text: "Images are almost always the heaviest thing on a page. Serve them at the size they are actually displayed, convert them to modern formats like WebP, and compress them. A hero image should rarely be more than a couple of hundred kilobytes.",
      },
      { type: "h2", text: "3. Audit your plugins" },
      {
        type: "p",
        text: "Every plugin adds code, and some load on every single page whether you need them there or not. Deactivate anything you are not using, and replace bloated plugins with lighter alternatives.",
      },
      {
        type: "ul",
        items: [
          "Deactivate and delete plugins you no longer use.",
          "Look for one plugin that can replace three.",
          "Watch out for page builders that load huge scripts everywhere.",
        ],
      },
      { type: "h2", text: "4. Choose a fast host" },
      {
        type: "p",
        text: "Cheap shared hosting is a false economy. If your server takes 600 milliseconds just to respond, no plugin will save you. Managed WordPress hosting with a good stack pays for itself in performance and peace of mind.",
      },
      { type: "h2", text: "5. Use a content delivery network" },
      {
        type: "p",
        text: "A CDN serves your files from a location close to each visitor. For an audience spread across countries, this alone can cut load time dramatically and takes pressure off your main server.",
      },
      { type: "h2", text: "The rest of the list" },
      {
        type: "ul",
        items: [
          "Minify and combine CSS and JavaScript.",
          "Load only the fonts and font weights you use.",
          "Defer scripts that are not needed for the first paint.",
          "Clean up your database and reduce post revisions.",
          "Keep WordPress, your theme, and plugins up to date.",
        ],
      },
      {
        type: "quote",
        text: "Speed is not a one-time task. Test your site every few months, because a plugin update or a new image can quietly undo your hard work.",
      },
      {
        type: "p",
        text: "If you would rather have someone handle all of this for you, speed optimisation is part of every build and maintenance plan I offer. A fast site is not a luxury, it is the baseline your visitors expect.",
      },
    ],
  },
  {
    slug: "shopify-vs-woocommerce",
    title: "Shopify vs WooCommerce: which should you actually choose?",
    excerpt:
      "An honest comparison for store owners covering cost, control, SEO, and scaling, with no platform bias and no hidden agenda.",
    category: "E-commerce",
    date: "Jun 2026",
    dateISO: "2026-06-10",
    read: "8 min read",
    cover: cover("shopify-vs-woocommerce"),
    content: [
      {
        type: "p",
        text: "Shopify or WooCommerce is one of the first questions every new store owner faces, and the internet is full of biased answers. Both are excellent platforms. The right one depends on your budget, your technical comfort, and how much control you want. Here is a straight comparison from someone who builds on both.",
      },
      { type: "h2", text: "Shopify in one line" },
      {
        type: "p",
        text: "Shopify is a hosted, all-in-one platform. You pay a monthly fee and Shopify handles hosting, security, and updates. It is the fastest way to get a reliable store live, and it rarely breaks.",
      },
      { type: "h2", text: "WooCommerce in one line" },
      {
        type: "p",
        text: "WooCommerce is a free plugin that turns WordPress into a store. You own everything and can customise anything, but you are also responsible for hosting, security, and maintenance.",
      },
      { type: "h2", text: "Cost" },
      {
        type: "p",
        text: "Shopify has predictable monthly costs plus transaction fees unless you use their own payments. WooCommerce is free to start, but you pay for hosting, a theme, and often a few premium plugins. Over a few years the totals are closer than people expect.",
      },
      { type: "h2", text: "Control and flexibility" },
      {
        type: "p",
        text: "This is where WooCommerce pulls ahead. Because it is built on WordPress and open source, you can change almost anything about how the store looks and works. Shopify is flexible within its own system, but you play by its rules.",
      },
      { type: "h2", text: "SEO and content" },
      {
        type: "p",
        text: "Both can rank well. WooCommerce gives you the full power of WordPress for blogging and content marketing, which matters if content is a big part of your strategy. Shopify is perfectly capable but slightly more restrictive in its URL structure and blogging tools.",
      },
      {
        type: "ul",
        items: [
          "Choose Shopify if you want a reliable store live quickly with minimal maintenance.",
          "Choose WooCommerce if you want full control, deep customisation, and strong content tools.",
          "Choose either if you have a developer who can set it up properly, because a good build matters more than the logo.",
        ],
      },
      {
        type: "quote",
        text: "The platform is rarely the reason a store fails. Poor product pages, slow loading, and a confusing checkout are. Fix those first, whichever platform you pick.",
      },
      {
        type: "p",
        text: "If you are still unsure, tell me about your products and your goals. I will recommend the platform that actually fits your business, not the one that is easiest for me to build.",
      },
    ],
  },
  {
    slug: "technical-seo-checklist-new-website",
    title: "The technical SEO checklist every new website needs",
    excerpt:
      "Sitemaps, schema, Core Web Vitals, and the on-page basics that get you indexed and ranking faster, explained without the jargon.",
    category: "SEO",
    date: "May 2026",
    dateISO: "2026-05-22",
    read: "7 min read",
    cover: cover("technical-seo-checklist-new-website"),
    content: [
      {
        type: "p",
        text: "Great content will not rank if search engines cannot crawl, understand, and trust your site. Technical SEO is the foundation everything else sits on. Here is the checklist I run through before any new site goes live.",
      },
      { type: "h2", text: "Make sure Google can find every page" },
      {
        type: "p",
        text: "Generate an XML sitemap and submit it in Google Search Console. Check your robots file is not accidentally blocking important pages. If a page is not in the index, it cannot rank, no matter how good it is.",
      },
      { type: "h2", text: "Get the on-page basics right" },
      {
        type: "ul",
        items: [
          "One clear title tag per page, with the main keyword near the front.",
          "A meta description that reads like an ad, not a summary.",
          "A single H1 per page and a logical heading structure below it.",
          "Descriptive, readable URLs without random numbers.",
        ],
      },
      { type: "h2", text: "Add structured data" },
      {
        type: "p",
        text: "Schema markup tells search engines exactly what your content is, whether that is an article, a product, a local business, or a review. It is what earns you those rich results with stars, prices, and extra links.",
      },
      { type: "h2", text: "Pass Core Web Vitals" },
      {
        type: "p",
        text: "Google measures real-world speed and stability through Core Web Vitals. A fast, stable page is both a ranking signal and a better experience. Test your key pages and fix anything in the red.",
      },
      { type: "h2", text: "Make it mobile first" },
      {
        type: "p",
        text: "Google indexes the mobile version of your site. If your site is awkward on a phone, that is the version being judged. Test on a real device, not just a resized browser window.",
      },
      {
        type: "quote",
        text: "Technical SEO is not a one-time launch task. Set a reminder to check Search Console every month for crawl errors and coverage issues.",
      },
      {
        type: "p",
        text: "Every site I build ships with this checklist already handled, because SEO baked in from the start always beats SEO bolted on later. If your current site is missing the basics, a quick audit will show you exactly where the gaps are.",
      },
    ],
  },
  {
    slug: "why-i-build-with-nextjs",
    title: "Why I build with Next.js (and when I don't)",
    excerpt:
      "Server rendering, SEO, and speed. The real-world trade-offs of the modern React framework, and the projects where WordPress still wins.",
    category: "Next.js",
    date: "May 2026",
    dateISO: "2026-05-08",
    read: "5 min read",
    cover: cover("why-i-build-with-nextjs"),
    content: [
      {
        type: "p",
        text: "Next.js is my go-to for custom, high-performance projects. But I do not use it for everything, and any developer who tells you one tool fits every job is selling you something. Here is how I actually decide.",
      },
      { type: "h2", text: "What makes Next.js great" },
      {
        type: "ul",
        items: [
          "Server rendering means pages arrive fast and fully formed, which is excellent for SEO.",
          "It is built on React, so complex, interactive interfaces stay maintainable.",
          "Image, font, and script handling are optimised out of the box.",
          "It scales from a simple site to a full application without switching tools.",
        ],
      },
      { type: "h2", text: "When Next.js is the right call" },
      {
        type: "p",
        text: "I reach for Next.js when a project needs custom functionality, tight performance, or an app-like experience. Dashboards, booking systems, marketplaces, and content-heavy sites that must load instantly are all a natural fit.",
      },
      { type: "h2", text: "When I do not use it" },
      {
        type: "p",
        text: "If a client wants to edit their own content daily, run a blog, and manage everything without touching code, WordPress is often the better answer. The best technology is the one the client can actually live with after I hand it over.",
      },
      {
        type: "quote",
        text: "Pick the tool that fits the goal and the person maintaining it, not the one that is trendy this year.",
      },
      {
        type: "p",
        text: "If you are not sure which approach suits your project, that is exactly the conversation I enjoy having. Tell me what you are building and I will point you to the right stack, even if it is not the one I would personally find most fun.",
      },
    ],
  },
  {
    slug: "fix-common-contact-form-problems",
    title: "Fixing the most common contact-form problems",
    excerpt:
      "Why your form emails go to spam, and how proper SMTP, SPF, and DKIM keep your leads landing in the inbox instead of disappearing.",
    category: "Development",
    date: "Apr 2026",
    dateISO: "2026-04-19",
    read: "6 min read",
    cover: cover("fix-common-contact-form-problems"),
    content: [
      {
        type: "p",
        text: "There is one website problem that quietly costs businesses more than almost any other: a contact form that looks like it works but never delivers the message. The visitor clicks send, sees a thank-you note, and you never hear from them. Here is why it happens and how to fix it for good.",
      },
      { type: "h2", text: "Why form emails vanish" },
      {
        type: "p",
        text: "By default, many sites try to send email straight from the web server. Modern email providers distrust that, so the message either lands in spam or gets rejected entirely. Nothing looks broken, which is exactly what makes it dangerous.",
      },
      { type: "h2", text: "The fix: send through proper SMTP" },
      {
        type: "p",
        text: "Instead of sending from the server, route your form email through an authenticated sending service. This makes your messages look legitimate and dramatically improves deliverability.",
      },
      {
        type: "ul",
        items: [
          "Use a dedicated transactional email service for form and system emails.",
          "Set up SPF and DKIM records so providers trust your domain.",
          "Add DMARC to protect your domain from spoofing.",
          "Always send a copy to a second address as a backup.",
        ],
      },
      { type: "h2", text: "Test like a stranger" },
      {
        type: "p",
        text: "Submit your own form from an outside email account and check that the message arrives in the inbox, not spam. Do this again after any hosting or plugin change, because these things break silently.",
      },
      {
        type: "quote",
        text: "A form that does not deliver is worse than no form at all, because it makes you look unresponsive to people who were ready to buy.",
      },
      {
        type: "p",
        text: "If you suspect leads are slipping through the cracks, this is one of the first things I check on any site. It is usually a quick fix with a big payoff.",
      },
    ],
  },
  {
    slug: "core-web-vitals-for-non-developers",
    title: "Core Web Vitals explained for non-developers",
    excerpt:
      "LCP, CLS, and INP. What Google's speed metrics actually mean, why they affect rankings, and how to pass them without a computer science degree.",
    category: "Performance",
    date: "Apr 2026",
    dateISO: "2026-04-03",
    read: "9 min read",
    cover: cover("core-web-vitals-for-non-developers"),
    content: [
      {
        type: "p",
        text: "Core Web Vitals sound technical, but the idea behind them is simple: does your page feel fast, stable, and responsive to a real person? Google turned that feeling into three measurable numbers. Here is what each one means in plain English.",
      },
      { type: "h2", text: "LCP: how fast the main content appears" },
      {
        type: "p",
        text: "Largest Contentful Paint measures how long it takes for the biggest thing on screen, usually your hero image or headline, to load. Aim for under two and a half seconds. Slow images and slow servers are the usual culprits.",
      },
      { type: "h2", text: "CLS: how much the page jumps around" },
      {
        type: "p",
        text: "Cumulative Layout Shift measures visual stability. If you have ever gone to tap a button and the page shifted, that is layout shift. It is usually caused by images without set dimensions or content that loads in late and pushes everything down.",
      },
      { type: "h2", text: "INP: how quickly the page responds to you" },
      {
        type: "p",
        text: "Interaction to Next Paint measures how fast the page reacts when you tap or click. If a menu takes a beat to open or a button feels laggy, that is poor responsiveness, usually caused by heavy scripts.",
      },
      { type: "h2", text: "How to actually pass them" },
      {
        type: "ul",
        items: [
          "Optimise and correctly size your images to improve LCP.",
          "Always set width and height on images to stop layout shift.",
          "Reduce and defer heavy JavaScript to improve responsiveness.",
          "Use a fast host and caching so the server responds quickly.",
        ],
      },
      {
        type: "quote",
        text: "You do not need to understand the code behind these metrics. You just need a site built with them in mind from the beginning.",
      },
      {
        type: "p",
        text: "Passing Core Web Vitals is part of every site I build and every speed audit I run. If you want to know where your site stands today, a quick test will show you exactly which of the three needs attention.",
      },
    ],
  },
  {
    slug: "how-much-should-a-website-cost",
    title: "How much should a website cost? An honest breakdown",
    excerpt:
      "Why quotes range from a hundred dollars to fifty thousand, what you are really paying for, and how to spot a price that is too good to be true.",
    category: "Business",
    date: "Mar 2026",
    dateISO: "2026-03-20",
    read: "7 min read",
    cover: cover("how-much-should-a-website-cost"),
    content: [
      {
        type: "p",
        text: "Ask ten people what a website costs and you will get ten wildly different answers. That is not because anyone is lying, it is because a website can mean a simple one-page site or a full custom application. Here is an honest look at what drives the price so you can budget with your eyes open.",
      },
      { type: "h2", text: "What you are actually paying for" },
      {
        type: "p",
        text: "The design and code are only part of it. You are also paying for planning, content structure, SEO, testing, and the experience that stops the project from going wrong. A cheap site that never brings in a single customer is the most expensive kind.",
      },
      { type: "h2", text: "Rough tiers" },
      {
        type: "ul",
        items: [
          "A simple, professional brochure site: a smaller fixed budget, quick turnaround.",
          "A custom business site with SEO and several tailored pages: a mid range budget.",
          "An online store or web app with custom features: a larger budget that reflects the complexity.",
        ],
      },
      { type: "h2", text: "Why very cheap quotes are risky" },
      {
        type: "p",
        text: "If a price seems too good to be true, something is usually missing: proper SEO, real testing, a fast build, or support after launch. You often end up paying a second developer to fix it, which costs more than doing it right the first time.",
      },
      {
        type: "quote",
        text: "A website is an investment that should pay you back in leads and sales. Judge it by what it earns, not only by what it costs.",
      },
      {
        type: "p",
        text: "I quote a fixed price after a short conversation about what you need, so there are no surprises. Whatever your budget, I will tell you honestly what is realistic and where your money is best spent.",
      },
    ],
  },
  {
    slug: "signs-your-website-needs-a-redesign",
    title: "7 signs your website needs a redesign",
    excerpt:
      "It is not just about looks. Slow speed, poor mobile experience, and no new leads are all signals it is time for a fresh build.",
    category: "Strategy",
    date: "Mar 2026",
    dateISO: "2026-03-05",
    read: "6 min read",
    cover: cover("signs-your-website-needs-a-redesign"),
    content: [
      {
        type: "p",
        text: "A redesign is a real investment, so you do not want to do it on a whim. But a tired website quietly leaks customers every day. Here are seven honest signs it is time for a fresh build.",
      },
      { type: "h2", text: "1. It is slow" },
      {
        type: "p",
        text: "If your pages take more than a few seconds to load, visitors leave before they ever see your offer. Speed problems are often baked into an old build and hard to patch.",
      },
      { type: "h2", text: "2. It looks wrong on phones" },
      {
        type: "p",
        text: "Most of your visitors are on mobile. If they have to pinch, zoom, and scroll sideways, you are losing them. A modern site is designed for the phone first.",
      },
      { type: "h2", text: "3. It brings in no leads" },
      {
        type: "p",
        text: "A website should generate enquiries and sales, not just exist. If yours is a quiet brochure that no one acts on, the design and structure are likely working against you.",
      },
      { type: "h2", text: "The other four signs" },
      {
        type: "ul",
        items: [
          "It looks dated compared to your competitors.",
          "You cannot easily update it yourself.",
          "It is not ranking on Google for anything useful.",
          "It no longer reflects what your business has become.",
        ],
      },
      {
        type: "quote",
        text: "You do not need a redesign every year. You need one when your site is actively holding your business back.",
      },
      {
        type: "p",
        text: "If two or three of these sound familiar, it is worth a conversation. I can tell you honestly whether a full rebuild or a few targeted fixes will get you the best return.",
      },
    ],
  },
];

export const POSTS_PER_PAGE = 6;

export const getSortedPosts = () =>
  [...POSTS].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));

export const getPostBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);

export const getRelatedPosts = (slug: string, limit = 3) => {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = getSortedPosts().filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = getSortedPosts().filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
};
