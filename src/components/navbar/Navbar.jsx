import React from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo"><Link to="hero" smooth={true} duration={500}>Nimesha Sewmini</Link></h1>
        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} duration={500}>Home</Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>Services</Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
