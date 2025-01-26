import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../logo.svg'

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
        <a href="/">
            <img src={logo} alt="" />
        </a>
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
        <a href="/about">
            <button onClick={() => setIsMobileMenuOpen(false)}>About</button>
        </a>
        <a href="/experience">
            <button onClick={() => setIsMobileMenuOpen(false)}>Experience</button>
        </a>
      </div>

      <div className={`contact ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <button onClick={() => setIsMobileMenuOpen(false)}>Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar;
