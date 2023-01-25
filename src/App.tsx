import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="-z-10 snap-y snap-mandatory overflow-y-scroll  bg-[#0D0208] text-gray-400 h-screen">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="workExperience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}

export default App;
