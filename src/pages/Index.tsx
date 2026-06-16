import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Certifications } from "@/components/Certifications";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { VideoEditing } from "@/components/VideoEditing";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Languages />
        <Certifications />
        <VideoEditing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
