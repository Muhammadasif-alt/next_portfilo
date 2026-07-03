export type ProjectCategory =
  | "Web Development"
  | "E-commerce"
  | "Web Apps"
  | "SEO and Growth";

export type Project = {
  url: string;
  title: string;
  tag: string;
  desc: string;
  category: ProjectCategory;
  stack: string[];
};

/* Real live projects. Verified live; temporary/platform subdomains and dead sites removed. */
export const PROJECTS: Project[] = [
  { url: "https://ideadigital.services/", title: "Idea Digital", tag: "SEO Agency", desc: "SEO agency website with services, process, and lead generation for US businesses.", category: "SEO and Growth", stack: ["WordPress", "Elementor", "SEO"] },
  { url: "https://dehleezstudio.com", title: "Dehleez Studio", tag: "Web Design", desc: "Creative studio website with a clean, modern brand presence.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://hmgardening.com", title: "H&M Gardening", tag: "Landscaping", desc: "Landscaping and gardening services website for a Palos Park, IL business.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://ridgerocklandscaping.com", title: "Ridge Rock Landscaping", tag: "Landscaping", desc: "Premium outdoor living and landscaping company website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://pureperfectionlandscaping.com", title: "Pure Perfection Landscaping", tag: "Landscaping", desc: "Landscaping and outdoor services website built to generate leads.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://ryzeoutdoorcreations.com/", title: "Ryze Outdoor Creations", tag: "Landscaping", desc: "Outdoor living and hardscaping company website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://jonnyshardscaping.com", title: "Jonny's Hardscaping", tag: "Landscaping", desc: "Landscaping and hardscaping services website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://ksjcontracting.com", title: "KSJ Contracting", tag: "Construction", desc: "Contracting and construction company website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://flabuilders.com", title: "FLA Builders", tag: "Construction", desc: "Construction and builders company website.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://nonairesumes.com", title: "NonAI Resumes", tag: "Business Site", desc: "Conversion-focused website for a human-written resume service.", category: "Web Development", stack: ["WordPress", "PHP"] },
  { url: "https://cincomosqueteros.co", title: "Cinco Mosqueteros", tag: "Business Site", desc: "Brand and business website with a clean, modern design.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://papiandlillys.com", title: "Papi and Lilly's", tag: "Brand Site", desc: "Lifestyle brand website with a bold, friendly identity.", category: "Web Development", stack: ["WordPress", "Elementor"] },
  { url: "https://podlaz.com", title: "Podlaz", tag: "Business Site", desc: "Modern business website built for speed and clarity.", category: "Web Development", stack: ["WordPress"] },
  { url: "https://crowncontractbeds.co.uk", title: "Crown Contract Beds", tag: "WordPress", desc: "Contract beds supplier website.", category: "Web Development", stack: ["WordPress", "PHP"] },
  { url: "https://primecontractbeds.co.uk", title: "Prime Contract Beds", tag: "WordPress", desc: "Trade and contract beds website.", category: "Web Development", stack: ["WordPress", "PHP"] },
  { url: "https://www.azcarparts.co.uk/", title: "AZ Car Parts", tag: "E-commerce", desc: "Online car parts store with search and catalogue.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://adelinewaterson.co.uk/", title: "Adeline Waterson", tag: "E-commerce", desc: "Fashion and lifestyle online store.", category: "E-commerce", stack: ["Shopify", "Liquid"] },
  { url: "https://winksleep.co.uk", title: "Wink Sleep", tag: "E-commerce", desc: "Mattress and sleep products online store.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://mychildsroom.co.uk", title: "My Child's Room", tag: "E-commerce", desc: "Children's furniture and nursery store.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://baby-fair.co.uk", title: "Baby Fair", tag: "E-commerce", desc: "Baby products and nursery essentials store.", category: "E-commerce", stack: ["WooCommerce", "WordPress"] },
  { url: "https://jobsinusa.us", title: "Jobs in USA", tag: "Job Portal", desc: "Job listing and recruitment platform.", category: "Web Apps", stack: ["Next.js", "MERN"] },
];

/* Live screenshot of any URL via WordPress mShots. */
export const projectShot = (url: string, w = 900, h = 675) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`;
