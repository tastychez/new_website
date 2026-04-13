import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />

        <div className="max-w-xs mx-auto border-t border-pastel/50" />

        <AboutSection />

        <ExperienceSection />

        <EducationSection />

        <ProjectsSection />

        <SkillsSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
