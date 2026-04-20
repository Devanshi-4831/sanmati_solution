import React from 'react';
import { ArrowRight, Code2, Smartphone } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>


      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Welcome to Sanmati Solution</div>
          <h1 className="hero-title">
            Simplifying Technology, <br />
            <span className="highlight-text">Amplifying Success.</span>
          </h1>
          <p className="hero-subtitle">
            We are a team dedicated to building innovative, reliable, and scalable digital solutions. We transform your ideas into impactful products through cutting-edge technology.
          </p>
          <div className="hero-cta-group">
            <a href="#services" className="btn btn-primary">
              Our Services <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glass-card main-card">
            <div className="card-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="card-body">
              <div className="code-line"></div>
              <div className="code-line code-line-short"></div>
              <div className="code-line code-line-medium"></div>
              <div className="code-block">
                <div className="code-line line-accent"></div>
              </div>
            </div>
          </div>

          <div className="glass-card float-card-1">
            <Code2 size={24} className="float-icon" />
            <span>Web Dev</span>
          </div>

          <div className="glass-card float-card-2">
            <Smartphone size={24} className="float-icon" />
            <span>App Dev</span>
          </div>
        </div>
      </div>

      {/* ✅ Shape moved INSIDE section */}
      <div className="shape-image-animation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 2500 200" preserveAspectRatio="none">
          <path fill="#f1f5f9">
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

    </section>
  );
};

export default Hero;
