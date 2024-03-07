import { AboutSection } from "./components/AboutSection";
import { IntroSection } from "./components/IntroSection"
import { ProjectSection } from "./components/ProjectSection";

export default function Home() {
  return (
    <main>
      <IntroSection />

      <AboutSection />
      
      <ProjectSection />
    </main>
  );
}
