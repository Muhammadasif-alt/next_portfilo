export type Project = {
  url: string;
  title: string;
  tag: string;
  desc: string;
};

/* Real live projects. Add the rest here as they're shared. */
export const PROJECTS: Project[] = [
  { url: "https://ideadigital.services/", title: "Idea Digital", tag: "SEO Agency", desc: "SEO agency website — services, process, case studies, and lead generation for US businesses." },
  { url: "https://dehleezstudio.com", title: "Dehleez Studio", tag: "Web Design", desc: "Creative studio website with a clean, modern brand presence." },
  { url: "https://divan-factory-outlet.myshopify.com/", title: "Divan Factory Outlet", tag: "Shopify", desc: "Beds & divans e-commerce store built on Shopify." },
  { url: "https://www.azcarparts.co.uk/", title: "AZ Car Parts", tag: "E-commerce", desc: "Online car parts store with search and catalogue." },
  { url: "https://adelinewaterson.co.uk/", title: "Adeline Waterson", tag: "E-commerce", desc: "Fashion & lifestyle online store." },
  { url: "https://winksleep.co.uk", title: "Wink Sleep", tag: "E-commerce", desc: "Mattress and sleep products online store." },
  { url: "https://mychildsroom.co.uk", title: "My Child's Room", tag: "E-commerce", desc: "Children's furniture and nursery store." },
  { url: "https://crowncontractbeds.co.uk", title: "Crown Contract Beds", tag: "WordPress", desc: "Contract beds supplier website." },
  { url: "https://midasbeds.co.uk/", title: "Midas Beds", tag: "E-commerce", desc: "Beds & mattresses online store." },
  { url: "https://primecontractbeds.co.uk", title: "Prime Contract Beds", tag: "WordPress", desc: "Trade & contract beds website." },
  { url: "https://baby-fair.co.uk", title: "Baby Fair", tag: "E-commerce", desc: "Baby products and nursery essentials store." },
  { url: "https://jonnyshardscaping.com", title: "Jonny's Hardscaping", tag: "WordPress", desc: "Landscaping & hardscaping services website." },
  { url: "https://flabuilders.com", title: "FLA Builders", tag: "WordPress", desc: "Construction and builders company website." },
  { url: "https://jobsinusa.us", title: "Jobs in USA", tag: "Job Portal", desc: "Job listing and recruitment platform." },
];

/* Live screenshot of any URL via WordPress mShots. */
export const projectShot = (url: string, w = 900, h = 675) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${w}&h=${h}`;
