import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, 
  Smartphone, Code2, Cloud, 
  Settings, ShoppingBag, Palette 
} from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/sanmati_solution_logo.png';
import './Navbar.css';

const Navbar = ({ darkText = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const services = [
    { title: 'Web & API Development', icon: Code2, path: '/services/web-development' },
    { title: 'Mobile App Development', icon: Smartphone, path: '/services/mobile-app-development' },
    { title: 'E-commerce Solutions', icon: ShoppingBag, path: '/services/e-commerce-solutions' },
    { title: 'Cloud & AWS Services', icon: Cloud, path: '/services/cloud-services' },
    { title: 'IT Support & Maintenance', icon: Settings, path: '/services/it-support' },
    { title: 'UI/UX & Graphics Design', icon: Palette, path: '/services/ui-ux-design' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${darkText ? 'nav-dark-text' : ''}`}>
      <div className="container nav-container">
        <RouterLink to="/" className="nav-logo">
          <div className="logo-image-container">
            <img src={logo} alt="Sanmati Solution" className="nav-logo-img" />
          </div>
        </RouterLink>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <RouterLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</RouterLink>
          
          <div className={`nav-item-dropdown ${mobileDropdownOpen ? 'mobile-open' : ''}`}>
            <div className="dropdown-trigger">
              <RouterLink to="/services" onClick={() => { setMobileMenuOpen(false); setMobileDropdownOpen(false); }}>
                Services
              </RouterLink>
              <button 
                className="mobile-dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileDropdownOpen(!mobileDropdownOpen);
                }}
                aria-label="Toggle services dropdown"
              >
                <ChevronDown size={18} className="dropdown-arrow" />
              </button>
            </div>
            <div className="dropdown-menu">
              {services.map((svc, i) => (
                <RouterLink 
                  key={i} 
                  to={svc.path} 
                  className="dropdown-item" 
                  onClick={() => { setMobileMenuOpen(false); setMobileDropdownOpen(false); }}
                >
                  <svc.icon size={18} className="svc-icon" />
                  <span>{svc.title}</span>
                </RouterLink>
              ))}
            </div>
          </div>

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
