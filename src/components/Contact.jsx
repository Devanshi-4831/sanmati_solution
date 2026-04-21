import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // 'idle' | 'submitted'

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitted');
    setTimeout(() => setFormState('idle'), 5000); // Reset after 5s
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <h2 className="section-title" >Get In Touch</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let's Build Something Great Together</h3>
            <p className="contact-desc">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to help you succeed.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Headquarters</h4>
                  <p>A/321, Sun Trade Center, Near Gujarat Gas, Char Rasta, Vapi - 396195, Gujarat 396191, IN</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 90232 60875</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>sanmatisolution@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {formState === 'submitted' ? (
              <div className="success-message">
                <CheckCircle size={60} color="var(--color-primary)" />
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you shortly.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service">
                    <option value="web">Website Development</option>
                    <option value="app">Mobile App Development</option>
                    <option value="software">Custom Software</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="Tell us about your project..." required></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={formState === 'submitted'}>
                  {formState === 'submitted' ? 'Sent!' : 'Send Message'} <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
