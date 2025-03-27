import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home() {
  return (
    <div className="min-h-screen bg-background w-full" style={{ width: '100vw', maxWidth: '100%', margin: 0, padding: 0, overflowX: 'hidden' }}>
      <ParticlesBackground />
      <div className="w-full" style={{ width: '100vw', maxWidth: '100%', margin: 0, padding: 0 }}>
        <Hero />
        <div className="max-w-[1400px] mx-auto px-0 md:px-4" style={{ maxWidth: '100vw', width: '100%' }}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  );
} 