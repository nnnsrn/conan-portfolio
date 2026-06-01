import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
// `Skills` removed — skills will be shown within projects
import { VideoEditing } from "@/components/VideoEditing";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Languages />
        <VideoEditing />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
