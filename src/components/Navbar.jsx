import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        LOGO
      </div>
      
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <a href="/resume">
            <button onClick={() => setIsMobileMenuOpen(false)}>Resume</button>
        </a>
        <button onClick={() => setIsMobileMenuOpen(false)}>Projects</button>
        <button onClick={() => setIsMobileMenuOpen(false)}>Experience</button>
      </div>

      <div className={`contact ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
