import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Approach from "./components/Approach.jsx";
import Work from "./components/Work.jsx";
import Divider from "./components/Divider.jsx";
import Plans from "./components/Plans.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Partner from "./components/Partner.jsx";
import Stats from "./components/Stats.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Approach />
        <Work />
        <Divider />
        <Plans />
        <Projects />
        <Services />
        <Partner />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
