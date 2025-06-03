import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import More from './components/More';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans scroll-smooth">
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Education />
      <Experience />
      <Skills />
      <More />
      <Footer />
    </div>
  );
}

export default App;
// This is the main App component that imports and renders all other components.
// It sets the overall layout and styling for the portfolio website.
// The components are organized to create a single-page application feel, with smooth scrolling between sections.
// The `bg-gray-900` class sets a dark background, while `text-white` ensures all text is white for contrast.
// The `font-sans` class applies a sans-serif font for a modern look, and `scroll-smooth` enables smooth scrolling behavior.    