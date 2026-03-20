import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function HomePage() {
  return (
    <div className="py-10 sm:py-16">
      <HeroSection />
      <div className="mt-12 space-y-12 sm:mt-16 sm:space-y-16">
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}

