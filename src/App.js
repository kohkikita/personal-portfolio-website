import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
      
    </>
  );
}

export default App;
