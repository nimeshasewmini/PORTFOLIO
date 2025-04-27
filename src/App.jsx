import React from 'react';
import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Services from './components/sevices/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import About from './components/About/About';  

const App = () => {
  return (
    <div>
      <Cursor />

      {/* Homepage Section */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      {/* About Section */}
      <section id="About">
        <About />
      </section>

      {/* Services Section */}
      <section id="Services">
        <Parallax type="services" />
      </section>

      <section>
        <Services/>
      </section>

      {/* Portfolio Section */}
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>

      <Portfolio />

      {/* Contact Section */}
      <section id="Contact">
        <Contact/>
      </section>

      {/* <Test /> */}
    </div>
  );
};

export default App;
