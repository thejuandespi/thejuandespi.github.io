import Backdrop from "./components/Backdrop";
import Nav from "./components/Nav";
import Dock from "./components/Dock";
import Rail from "./components/Rail";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SECTIONS } from "./data/content";
import { useTheme } from "./hooks/useTheme";
import { useActiveSection } from "./hooks/useActiveSection";

const IDS = SECTIONS.map((s) => s.id);

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const active = useActiveSection(IDS);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Backdrop />
      <Dock active={active} />
      <Rail />
      <Nav active={active} theme={theme} onTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
