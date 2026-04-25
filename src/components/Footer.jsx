import React from 'react';
import { Linkedin, Facebook, Instagram, Mail, Briefcase, Quote, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/sanmati_solution.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wave-transition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 2500 200" preserveAspectRatio="none">
          <path fill="#275d6c">
            <animate attributeName="d" dur="5s" values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250" repeatCount="indefinite"></animate>
          </path>
        </svg>
      </div>

      <footer className="footer-dark">
        <div className="container">
          <div className="footer-row">
            {/* Column 1: Brand */}
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <img src={logo} alt="Sanmati Solution" className="footer-logo-img" />
                <span className="footer-logo-text">sanmati<br/>solution</span>
              </div>
              <ul className="footer-contact-links">
                <li className="bold-link"><span className="quote-trigger">Need support?</span></li>
                <li><a href="mailto:sanmatisolution@gmail.com">sanmatisolution@gmail.com</a></li>

              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col links-col">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>

              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className="footer-col services-col">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
                <li><Link to="/services/web-development">Web Development</Link></li>
                <li><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
                <li><Link to="/services/it-support">IT Support & Maintenance</Link></li>
                <li><Link to="/services/cloud-services">Cloud Services</Link></li>
                <li><Link to="/services/e-commerce-solutions">E-Commerce Solution</Link></li>
              </ul>
            </div>

            {/* Column 4: Social & Trust */}
            <div className="footer-col social-trust-col">
              <div className="social-links-row">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
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

              <div className="footer-map-container">
                <iframe 
                  className="footer-map-iframe"
                  width="100%" 
                  height="100%" 
                  src="https://maps.google.com/maps?q=Sun%20Trade%20Center,%20Near%20Gujarat%20Gas,%20Char%20Rasta,%20Vapi&t=m&z=14&ie=UTF8&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sanmati Solution Location"
                ></iframe>
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
