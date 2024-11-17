import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';

const App = () => (
  <div className="App">
    <Header />
    <About />
    <Certifications />
      <Education />
      
    <Projects />
    <Skills />

    <Contact />
    <Footer />
  </div>
);

export default App;
