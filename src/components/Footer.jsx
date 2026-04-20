import React from 'react';
import { Linkedin, Facebook, Instagram, Mail, Briefcase, Quote, MapPin, Phone } from 'lucide-react';
import logo from '../assets/sanmati_solution_logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wave-transition">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#275D6C" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,202.7,480,149.3,576,144C672,138.7,768,181.3,864,181.3C960,181.3,1056,138.7,1152,122.7C1248,106.7,1344,117.3,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <footer className="footer-dark">
        <div className="container">
          <div className="footer-row">
            {/* Column 1: Brand */}
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <img src={logo} alt="Sanmati Solution" className="footer-logo-img " />
              </div>
              <ul className="footer-contact-links">
                <li className="bold-link"><span className="quote-trigger">Instant Free Quote</span></li>
                <li><a href="mailto:inquiry@sanmatisolution.com">hello@sanmatisolution.com</a></li>
                
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col links-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact Us</a></li>
                
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col services-col">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#mobile">Mobile App Development</a></li>
                <li><a href="#web">Web Development</a></li>
                <li><a href="#uiux">UI/UX Design</a></li>
                <li><a href="#graphics">IT Support & Maintenance </a></li>
                <li><a href="#dedicated">Cloud Services</a></li>
                <li><a href="#ai">E-Commerce Solution</a></li>
              </ul>
            </div>

            {/* Column 4: Social & Trust */}
            <div className="footer-col social-trust-col">
              <div className="social-links-row">
                <a href="#"><Facebook size={24} /></a>
                <a href="#"><Linkedin size={24} /></a>
                <a href="#"><Instagram size={24} /></a>
              </div>

              <div className="footer-contact-info">
                <div className="contact-item">
                  <MapPin size={18} className="contact-icon" />
                  <p>A/321, Sun Trade Center, Near Gujarat Gas, Char Rasta, Vapi - 396195, Gujarat 396191, IN</p>
                </div>
                <div className="contact-item">
                  <Phone size={18} className="contact-icon" />
                  <p><a href="tel:+919023260875">+91 90232 60875</a></p>
                </div>
              </div>
              
           
            </div>
          </div>

          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Copyright Sanmati Solution. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
