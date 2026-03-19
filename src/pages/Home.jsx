import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import GithubShowcase from '../components/sections/GithubShowcase';
import ServicesAndTestimonials from '../components/sections/Services';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubShowcase />
      <ServicesAndTestimonials />
      <Contact />
    </>
  );
};

export default Home;
