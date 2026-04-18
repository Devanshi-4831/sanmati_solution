import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/sanmati_solution_logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="logo-image-container-footer">
                <img src={logo} alt="Sanmati Solution" className="footer-logo-img" />
              </div>
            </a>
            <p className="footer-tagline">
              Simplifying Technology, Amplifying Success.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link"><Linkedin size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Industry</h4>
            <ul>
              <li>Technology, Information and Media</li>
              <li>11-50 Employees</li>
              <li>Founded 2023</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sanmati Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
