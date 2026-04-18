import React, { useEffect, useRef } from 'react';
import aboutImg from '../assets/services/about.png';
import heroBg from '../assets/services1/hero-bg-1.png';
import './About.css';

const About = () => {
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target); // only trigger once
          }
        });
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (visualRef.current) observer.observe(visualRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section-padding">
      {/* Decorative animated background image */}
      <div className="in-des">
        <img
          src={heroBg}
          alt="all industry"
          loading="lazy"
          className="in-des-img"
        />
      </div>

      <div className="container">
        <div className="about-wrapper">

          {/* Content Side — LEFT, slides in from LEFT */}
          <div className="about-content reveal-left" ref={contentRef}>
            <h2 className="section-title" style={{ left: '0', transform: 'none', textAlign: 'left' }}>
              About Sanmati Solution
            </h2>
            <div className="founder-msg">
              <h3 className="founder-name">Hello, I'm Shubham Radadiya</h3>
              <p className="founder-title">Founder &amp; CEO</p>
              <p className="founder-quote">
                "I oversee strategy, innovation, and client success at Sanmati Solution—ensuring every project we deliver is aligned with business goals, user needs, and long-term growth. With a strong belief in honesty, creativity, and excellence, I aim to make technology simple, impactful, and future-ready."
              </p>
            </div>
            <div className="company-stats">
              <div className="stat-item">
                <span className="stat-number">2023</span>
                <span className="stat-label">Founded</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">11-50</span>
                <span className="stat-label">Employees</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Commitment</span>
              </div>
            </div>
          </div>

          {/* Image Side — RIGHT, slides in from RIGHT */}
          <div className="about-visual reveal-right" ref={visualRef}>
            <div className="rs-animation-shape-image">
              <div className="pattern">
                <img
                  decoding="async"
                  className="scale2"
                  src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/11/about-effect-1.png"
                  alt="pattern"
                />
              </div>
              <div className="middle-image">
                <img decoding="async" src={aboutImg} alt="About Sanmati Solution" />
              </div>
              <div className="shape">
                <img
                  decoding="async"
                  className="dance"
                  src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/12/dotted-3.png"
                  alt="shape"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
