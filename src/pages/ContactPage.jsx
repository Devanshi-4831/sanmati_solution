import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Send, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import './ContactPage.css';
import heroBg from '../assets/services/contact.png'; // Reusing a professional background

const ContactPage = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar darkText={true} />
      <div className="contact-page">
        {/* Hero Section */}
        <section
          className="contact-hero cover-background"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="shape-image-animation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 2500 200" fill="#fff" preserveAspectRatio="none">
              <path d="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250">
                <animate
                  attributeName="d"
                  dur="5s"
                  values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                          M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                          M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          <div className="container h-100 position-relative z-2">
            <div className="contact-hero-content">
              <div className="contact-hero-text reveal-up" ref={addToRefs}>
                <div className="breadcrumbs">
                  Home &gt; Contact Us
                </div>
                <h1 className="contact-title">Contact Us</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Locations */}
        <section className="location-section reveal" ref={addToRefs}>
          <div className="container">
            <div className="location-grid">
              <div className="location-text-side reveal-left" ref={addToRefs}>
                <span className="badge-pill-outline">LET'S WORK TOGETHER</span>
                <h2 className="section-main-title">Reach out to us or visit our location.</h2>
                <p className="section-desc">Feel free to contact us or drop by at our location. We're here to assist you!</p>
                <a href="#contact-form" className="btn-gradient-red">
                  <Send size={18} className="me-2" /> Send Message
                </a>
              </div>

              <div className="location-cards-side reveal-right" ref={addToRefs}>
                <div className="address-card main-card">
                  <div className="card-map-header">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.0772274483!2d72.9094033!3d20.3797677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cf3181813e31%3A0x67305988e4695e1e!2sSun%20Trade%20Center!5e0!3m2!1sen!2sin!4v1713856000000!5m2!1sen!2sin"
                      width="100%"
                      height="150"
                      style={{ border: 0, borderRadius: '10px 10px 0 0' }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="card-body-v2">
                    <h4 className="city-title">Vapi, IN</h4>
                    <p className="full-address">A/321, Sun Trade Center, Near Gujarat Gas, Char Rasta, Vapi - 396195, Gujarat 396191, IN</p>
                    <a href="https://maps.google.com/?q=Sun+Trade+Center+Vapi+Gujarat" target="_blank" rel="noopener noreferrer" className="map-link">View on map</a>
                    <div className="card-email">
                      <Mail size={14} className="me-2 icon-primary" />
                      <span><a href="mailto:sanmatisolution@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>sanmatisolution@gmail.com</a></span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Form & Support */}
        <section id="contact-form" className="form-help-section reveal" ref={addToRefs}>
          <div className="container">
            <div className="form-help-grid">
              <div className="help-card-white reveal-left" ref={addToRefs}>
                <span className="badge-pill-outline">LET'S WORK TOGETHER</span>
                <h2 className="help-title">Ready to help you!</h2>
                <p className="help-desc">We're here to help and answer any question you might have.</p>

                <div className="support-details">
                  <div className="support-detail-item">
                    <span className="detail-label">Need support?</span>
                    <p className="detail-value"><a href="mailto:sanmatisolution@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>sanmatisolution@gmail.com</a></p>
                  </div>
                  
                  <div className="support-detail-item">
                    <span className="detail-label">Visit headquarters?</span>
                    <a href="https://maps.google.com/?q=Sun+Trade+Center+Vapi+Gujarat" target="_blank" rel="noopener noreferrer" className="detail-link">View on google map</a>
                  </div>
                </div>
              </div>

              <div className="actual-form-side reveal-right" ref={addToRefs}>
                <h2 className="form-side-title">Looking for any help?</h2>
                <form className="sanmati-contact-form">
                  <div className="input-group-v2">
                    <label>ENTER YOUR NAME*</label>
                    <input type="text" placeholder="What's your good name" required />
                  </div>
                  <div className="input-group-v2">
                    <label>EMAIL ADDRESS*</label>
                    <input type="email" placeholder="Enter your email address" required />
                  </div>
                  <div className="input-group-v2">
                    <label>SERVICE INTERESTED IN*</label>
                    <select required defaultValue="">
                      <option value="" disabled>Select a service</option>
                      <option value="web">Website Development</option>
                      <option value="app">Mobile App Development</option>
                      <option value="software">Custom Software</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="input-group-v2">
                    <label>YOUR MESSAGE</label>
                    <textarea placeholder="Describe about your project" rows="3"></textarea>
                  </div>

                  <div className="form-footer-v2">
                    <p className="consent-text">We will never collect information about you without your explicit consent.</p>
                    <button type="submit" className="btn-dark-rounded">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
