import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import WhatsAppButton from "./components/ui/WaButton";
import TechStack from "./components/portfolio/TechStack";
import About from "./components/portfolio/About";
import Projects from "./components/portfolio/Projects";
import Timeline from "./components/portfolio/Timeline";
import Skills from "./components/portfolio/Skills";
import Services from "./components/portfolio/Services";
import CTA from "./components/portfolio/CTA";
import Footer from "./components/portfolio/Footer";
import Contact from "./components/portfolio/Contact";
import Pricing from "./components/portfolio/Pricing";

export default function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Projects />
      <Timeline />
      <Skills />
      <Services />
      <Pricing />
      <Contact />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
