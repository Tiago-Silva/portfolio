import { AboutSection } from "./components/AboutSection";
import { IntroSection } from "./components/IntroSection"
import { ProjectSection } from "./components/ProjectSection";
import { SkillSection } from "./components/SkillSection";

export default function Home() {
  return (
    <main>
      <IntroSection />

      <AboutSection />
      
      <ProjectSection />

      <SkillSection />
    </main>
  );
}
