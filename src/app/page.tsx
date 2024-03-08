import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { IntroSection } from "./components/IntroSection"
import { ProjectSection } from "./components/ProjectSection";
import { SkillSection } from "./components/SkillSection";

export default function Home() {
  return (
    <main>
      <Header />

      <IntroSection />

      <AboutSection />
      
      <ProjectSection />

      <SkillSection />

      <Footer />
    </main>
  );
}
