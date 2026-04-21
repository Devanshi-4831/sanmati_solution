import React from 'react';
import { Linkedin, Facebook, Instagram, Mail, Briefcase, Quote, MapPin, Phone } from 'lucide-react';
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
                <li><a href="mailto:inquiry@sanmatisolution.com">sanmatisolution@gmail.com</a></li>

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
