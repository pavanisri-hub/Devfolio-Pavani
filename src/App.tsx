import { Navbar } from "@/components/layout";
import {
  About,
  Achievements,
  Contact,
  Hero,
  Projects,
  Skills,
} from "@/components/sections";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-base">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

export default App;
