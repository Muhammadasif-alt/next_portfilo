export type LocationData = {
  slug: string;
  country: string;
  region: string; // for schema areaServed
  currency: string;
  meta: { title: string; description: string };
  keywords: string[];
  hero: { small: string; title: string; taglineTitle: string; taglineText: string };
  /** intro.body may contain \n\n to split into paragraphs */
  intro: { heading: string; body: string };
  points: { title: string; desc: string }[];
  localNote: string;
  faqs: { q: string; a: string }[];
  cta: { heading: string; body: string };
};

export const LOCATIONS: LocationData[] = [
  {
    slug: "web-developer-usa",
    country: "United States",
    region: "United States",
    currency: "USD",
    meta: {
      title: "Freelance Web Developer USA | Next.js & WordPress for US Businesses",
      description:
        "Freelance web developer for US businesses. Fast, SEO-ready websites and stores in Next.js, WordPress, and Shopify. Clear USD pricing, replies within 24 hours, fully remote.",
    },
    keywords: [
      "freelance web developer USA",
      "next js developer for small business usa",
      "hire react developer usa",
      "affordable web developer for US businesses",
      "custom website developer usa",
    ],
    hero: {
      small: "For US businesses",
      title: "Web Developer for the USA",
      taglineTitle: "Websites that rank on Google and win US customers.",
      taglineText:
        "I build fast, SEO-ready websites and online stores for businesses across the United States. Remote, reliable, and priced in USD with no surprises.",
    },
    intro: {
      heading: "A dedicated web developer for your US business",
      body:
        "Whether you run a local service in Texas, a store in New York, or a startup on the West Coast, your website is your hardest working salesperson. I help US businesses turn theirs into a real source of leads and sales.\n\nYou work directly with me from the first message to launch. No agency markup, no account managers, just clean code, honest advice, and a site built to perform on Google and convert visitors into clients.",
    },
    points: [
      { title: "Built for US search", desc: "On-page SEO, schema, and Core Web Vitals tuned so your site ranks for the terms your American customers actually search." },
      { title: "Next.js and WordPress", desc: "The right stack for the job, from lightning-fast Next.js builds to easy-to-edit WordPress and Shopify stores." },
      { title: "Clear USD pricing", desc: "Fixed quotes in US dollars after a quick chat. You know the full cost upfront, with no hidden fees." },
      { title: "Timezone friendly", desc: "I keep flexible hours and reply within 24 hours, so working across US timezones stays smooth and simple." },
    ],
    localNote:
      "Working with US clients across every timezone, from EST to PST. Fixed quotes in USD, clear communication, and reliable delivery.",
    faqs: [
      { q: "Do you work with US clients remotely?", a: "Yes. I work fully remote with businesses across the United States, communicating over email, calls, and your preferred tools. Distance has never been an issue for a well-run project." },
      { q: "How do you handle US timezones?", a: "I keep flexible hours and always reply within 24 hours. We agree on clear check-ins so you are never left waiting, whether you are on the East or West Coast." },
      { q: "What will my project cost in USD?", a: "Every project gets a fixed quote in US dollars after a short chat about what you need. Simple sites start lower, custom builds and stores cost more, and you always know the total before we begin." },
      { q: "Will my site rank on Google in the US?", a: "SEO is built into every project: clean code, proper meta tags, schema, and fast load times. That gives your site the best possible foundation to rank for US searches." },
    ],
    cta: {
      heading: "Ready to grow your US business online?",
      body: "Tell me about your project and I will reply within 24 hours with a clear plan and a fixed USD quote.",
    },
  },
  {
    slug: "web-developer-australia",
    country: "Australia",
    region: "Australia",
    currency: "AUD",
    meta: {
      title: "Web Developer Australia | Hire a Freelance React & Next.js Developer",
      description:
        "Freelance web developer for Australian businesses. Fast, mobile-first websites and stores in Next.js, React, WordPress, and Shopify. AUD pricing, 24 hour replies, fully remote.",
    },
    keywords: [
      "web developer australia",
      "hire react developer australia",
      "freelance web developer australia",
      "web developer australia small business",
      "next js developer australia",
    ],
    hero: {
      small: "For Australian businesses",
      title: "Web Developer for Australia",
      taglineTitle: "Modern, mobile-first websites for Australian businesses.",
      taglineText:
        "I build fast, SEO-ready websites and online stores for businesses across Australia. Remote, dependable, and quoted in AUD with no hidden costs.",
    },
    intro: {
      heading: "A freelance web developer for your Australian business",
      body:
        "From Sydney and Melbourne to Brisbane, Perth, and everywhere in between, Australian customers expect a website that loads fast and looks great on their phone. I help Australian businesses deliver exactly that.\n\nYou get a developer who is easy to reach, writes clean code, and cares about results. No agency overhead, just a site built to rank on Google and turn visitors into paying customers.",
    },
    points: [
      { title: "Mobile-first by default", desc: "Most Australian traffic is on mobile, so every build is designed for the phone first and tested across real devices." },
      { title: "React, Next.js and more", desc: "From fast custom Next.js apps to WordPress and Shopify stores, built on the stack that fits your goals." },
      { title: "Quoted in AUD", desc: "Fixed prices in Australian dollars after a quick chat, so there are no surprises and no hidden fees." },
      { title: "Reliable across the gap", desc: "Clear communication and 24 hour replies keep projects moving smoothly despite the timezone difference." },
    ],
    localNote:
      "Working with Australian businesses in every state and timezone. Fixed AUD quotes, mobile-first builds, and consistent communication.",
    faqs: [
      { q: "Can you work with Australian clients remotely?", a: "Absolutely. I work fully remote with businesses right across Australia. Clear check-ins and fast replies mean the distance never slows a project down." },
      { q: "How do you manage the timezone difference?", a: "I keep flexible hours and reply within 24 hours, and we agree on regular update points. Plenty of Australian clients run smooth projects this way." },
      { q: "Do you quote in AUD?", a: "Yes, I provide fixed quotes in Australian dollars after a short chat about your project, so you know the full cost upfront." },
      { q: "Will my website be fast on mobile?", a: "Yes. Every build is mobile-first and tuned for Core Web Vitals, so it loads quickly and feels smooth on phones, which is where most of your Australian visitors are." },
    ],
    cta: {
      heading: "Let's build your Australian business a better website",
      body: "Send me the details and I will get back within 24 hours with a clear plan and a fixed AUD quote.",
    },
  },
  {
    slug: "web-developer-uk",
    country: "United Kingdom",
    region: "United Kingdom",
    currency: "GBP",
    meta: {
      title: "Web Developer UK | Freelance WordPress, Shopify & Next.js Developer",
      description:
        "Freelance web developer for UK businesses. Fast, SEO-ready websites and online stores in WordPress, Shopify, and Next.js. Pricing in GBP, replies within 24 hours, fully remote.",
    },
    keywords: [
      "web developer UK",
      "freelance web developer uk",
      "hire web developer uk",
      "wordpress developer uk",
      "ecommerce developer uk",
    ],
    hero: {
      small: "For UK businesses",
      title: "Web Developer for the UK",
      taglineTitle: "Websites and stores built to sell for UK businesses.",
      taglineText:
        "I build fast, SEO-ready websites and e-commerce stores for businesses across the United Kingdom. Remote, reliable, and quoted in GBP.",
    },
    intro: {
      heading: "A freelance web developer for your UK business",
      body:
        "I have built and maintained a number of UK websites and online stores, from contract furniture suppliers to car parts and childrenswear shops. I know what UK businesses need from a site that has to compete and convert.\n\nYou work directly with me throughout, with clear communication and clean, maintainable code. No agency fees, just a website built to rank on Google UK and bring in real enquiries and sales.",
    },
    points: [
      { title: "Proven with UK stores", desc: "Experience building WooCommerce and Shopify stores for UK retailers, tuned for speed, SEO, and conversions." },
      { title: "Ranks on Google UK", desc: "Technical and on-page SEO built in from the start, so your site has the best foundation to rank locally." },
      { title: "Priced in GBP", desc: "Fixed quotes in pounds after a quick chat, with no hidden costs and no surprises down the line." },
      { title: "Easy to work with", desc: "A short timezone gap, fast replies, and clear updates keep UK projects running smoothly." },
    ],
    localNote:
      "Working with UK businesses from London to Manchester and beyond. Fixed GBP quotes, real e-commerce experience, and clear communication.",
    faqs: [
      { q: "Have you worked with UK businesses before?", a: "Yes, I have built and maintained several UK websites and online stores across retail and services, so I understand what UK customers and Google UK expect." },
      { q: "Do you quote in pounds?", a: "Yes. Every project gets a fixed quote in GBP after a short chat about your requirements, so the full cost is clear before we start." },
      { q: "Is the timezone a problem?", a: "Not at all. The gap is small and I reply within 24 hours, with regular updates agreed at the start of every project." },
      { q: "Can you build an online shop?", a: "Yes. I build WooCommerce and Shopify stores tuned for speed, SEO, and conversions, plus the automation to save you time on admin." },
    ],
    cta: {
      heading: "Grow your UK business with a website that works",
      body: "Tell me what you need and I will reply within 24 hours with a clear plan and a fixed GBP quote.",
    },
  },
  {
    slug: "web-developer-pakistan",
    country: "Pakistan",
    region: "Pakistan",
    currency: "PKR",
    meta: {
      title: "Web Developer Pakistan | Full Stack Next.js & WordPress Developer",
      description:
        "Full stack web developer based in Pakistan, building fast, SEO-ready websites and stores for local and international clients in Next.js, WordPress, and Shopify. Affordable, remote, 24 hour replies.",
    },
    keywords: [
      "full stack developer pakistan",
      "web developer pakistan",
      "affordable web developer in pakistan for international clients",
      "next js developer pakistan",
      "freelance web developer pakistan",
    ],
    hero: {
      small: "Based in Pakistan",
      title: "Web Developer in Pakistan",
      taglineTitle: "A full stack developer for local and international clients.",
      taglineText:
        "Based in Pakistan, I build fast, SEO-ready websites and online stores for clients here and around the world, at prices that make sense.",
    },
    intro: {
      heading: "A full stack web developer based in Pakistan",
      body:
        "I am a Pakistan-based freelance web developer working with clients locally and across the US, UK, and Australia. Being based in Pakistan lets me offer genuinely competitive rates without cutting corners on quality.\n\nYou get clean, modern code, SEO baked in from the start, and a developer who is easy to reach and takes ownership of the result. The same standard of work international agencies charge far more for.",
    },
    points: [
      { title: "Affordable, not cheap", desc: "Competitive Pakistan-based rates for international quality. You get real value, not corners cut to hit a price." },
      { title: "Full stack skills", desc: "From WordPress and Shopify to custom Next.js and React apps, I cover the whole build end to end." },
      { title: "Trusted internationally", desc: "I already work with clients in the US, UK, and Australia, delivering to a professional standard on time." },
      { title: "Clear communication", desc: "Fluent English, fast replies, and regular updates make working across borders simple and stress-free." },
    ],
    localNote:
      "Based in Pakistan, serving clients locally and internationally across the US, UK, and Australia. Competitive rates, professional delivery.",
    faqs: [
      { q: "Are you based in Pakistan?", a: "Yes, I am a full stack web developer based in Pakistan, working with both local businesses and international clients across the US, UK, and Australia." },
      { q: "Why hire a developer from Pakistan?", a: "You get international-standard work at genuinely competitive rates. I deliver clean, SEO-ready code with clear communication, without the high overhead of a Western agency." },
      { q: "Can you handle international clients and timezones?", a: "Yes. I already work with clients across several countries and timezones. Fast replies and agreed check-ins keep every project on track wherever you are." },
      { q: "What technologies do you work with?", a: "WordPress, Shopify, WooCommerce, PHP, the MERN stack, React, and Next.js, plus SEO and speed optimisation. I recommend the best fit for your goals and budget." },
    ],
    cta: {
      heading: "Let's build something great together",
      body: "Tell me about your project and I will reply within 24 hours with a clear plan and an honest, competitive quote.",
    },
  },
];

export const getLocation = (slug: string) => LOCATIONS.find((l) => l.slug === slug);
