import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CV from './components/CV';

function HomePage() {
  return (
    <div className="text-white min-h-screen overflow-hidden">

      <section className="bg-[#0B0E16]">
        <Hero />
      </section>

      <div className="h-px bg-[#2B2F3A] w-full" />

      <section className="bg-[#111826]">
        <Projects />
      </section>

      <div className="h-px bg-[#2B2F3A] w-full" />

      <section className="bg-[#1A2233]">
        <Contact />
      </section>
    </div>
  );
}


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default App;