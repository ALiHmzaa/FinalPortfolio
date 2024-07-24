import React, { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import EducationAndSkills from './components/EducationAndSkills';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const nav = document.querySelector('header');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
          current = section.getAttribute('id');
        }
      });

      if (current === 'home') {
        nav.style.backgroundColor = '#333'; // default
      } else if (current === 'about') {
        nav.style.backgroundColor = '#e9ecef';
      } else if (current === 'education-and-skills') {
        nav.style.backgroundColor = '#dee2e6';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education-and-skills">Education & Skills</a>
        </nav>
      </header>
      <section id="home" className="section home-section">
        <Home />
      </section>
      <section id="about" className="section about-section">
        <About />
      </section>
      <section id="education-and-skills" className="section education-and-skills-section">
        <EducationAndSkills />
      </section>
    </div>
  );
}

export default App;
