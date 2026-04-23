import React, { useState, useEffect } from 'react';
import { Menu, X, Link } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/sanmati_solution_logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <RouterLink to="/" className="nav-logo">
          <div className="logo-image-container">
            <img src={logo} alt="Sanmati Solution" className="nav-logo-img" />
          </div>
        </RouterLink>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <RouterLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</RouterLink>
          <RouterLink to="/services" onClick={() => setMobileMenuOpen(false)}>Services</RouterLink>
          <RouterLink to="/about" onClick={() => setMobileMenuOpen(false)}>About</RouterLink>
          <RouterLink to="/contact" className="nav-contact-btn" onClick={() => setMobileMenuOpen(false)}>
            Contact Us
          </RouterLink>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
