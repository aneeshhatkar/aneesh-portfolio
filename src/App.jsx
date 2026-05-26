import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SystemDeck from "./components/SystemDeck";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import ResearchFocus from "./components/ResearchFocus";
import Contact from "./components/Contact";
import SiteEffects from "./components/SiteEffects";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030304] text-stone-100">
      <SiteEffects />

      <div className="noise-layer pointer-events-none fixed inset-0 z-0 opacity-[0.035]" />

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(45,212,191,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(251,146,60,0.08),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.07),transparent_36%)]" />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <SystemDeck />
          <WorkExperience />
          <Projects />
          <ResearchFocus />
          <Contact />
        </main>
      </div>
    </div>
  );
}