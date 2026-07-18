import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Goals from "./components/Goals";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar />
      <main>
        <Hero />
        <TechStrip />
        <About />
        <TechStack />
        <Education />
        <Experience />
        <Projects />
        <OpenSource />
        <Goals />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
