import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Services } from "@/components/portfolio/services-grid";
import { Process } from "@/components/portfolio/process";
import { Highlights } from "@/components/portfolio/highlights";
import { Projects } from "@/components/portfolio/projects";
import { ContactCta } from "@/components/portfolio/contact-cta";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Highlights />
        <Projects />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
