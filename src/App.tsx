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
    <div className="min-h-screen bg-bg-base">
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
