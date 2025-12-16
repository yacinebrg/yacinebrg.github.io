import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CV from './components/CV';

function HomePage() {
  return (
    <div className="text-white min-h-screen overflow-hidden">

      <section className="bg-[#111927] py-24">
        <Hero />
      </section>

      {/*<div className="h-[1px] w-screen bg-[#d8dbe2]" />*/}

      <section className="bg-[#111826]">
        <Projects />
      </section>

      <div className="h-[1px] w-screen bg-[#d8dbe2]" />

      <section className="bg-[#111927]">
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