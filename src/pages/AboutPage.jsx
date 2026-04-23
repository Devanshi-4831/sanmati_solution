import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor, Rocket, Lightbulb, Handshake,
  Award, CheckCircle, Mail, Package,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroBg from '../assets/services/aboutus.png';
import processImg from '../assets/about/process.png';
import aboutImg from '../assets/services/about.png';
import './AboutPage.css';

// ─── Tech logos (SVG inline or public URL) ──────────────────────────────────
const techLogos = [
  { name: 'Node.js', src: 'https://cdn.simpleicons.org/nodedotjs/275D6C' },
  { name: 'React', src: 'https://cdn.simpleicons.org/react/275D6C' },
  { name: 'Flutter', src: 'https://cdn.simpleicons.org/flutter/275D6C' },
  { name: 'Python', src: 'https://cdn.simpleicons.org/python/275D6C' },
  { name: 'Django', src: 'https://cdn.simpleicons.org/django/275D6C' },
];
const techLogos2 = [
  { name: 'JavaScript', src: 'https://cdn.simpleicons.org/javascript/275D6C' },
  { name: 'HTML5', src: 'https://cdn.simpleicons.org/html5/275D6C' },
  { name: 'GraphQL', src: 'https://cdn.simpleicons.org/graphql/275D6C' },
  { name: 'Redux', src: 'https://cdn.simpleicons.org/redux/275D6C' },
  { name: 'Dart', src: 'https://cdn.simpleicons.org/dart/275D6C' },
  { name: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/275D6C' },
];

// ─── Animated counter hook ───────────────────────────────────────────────────
function useCounter(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Single counter with IntersectionObserver ────────────────────────────────
function AnimatedCounter({ target, suffix = '+', label, description }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const count = useCounter(target, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ap-counter-item" ref={ref}>
      <span className="ap-counter-label">{label}</span>
      <p className="ap-counter-desc">{description}</p>
      <div className="ap-counter-divider" />
      <h3 className="ap-counter-number">{count}{suffix}</h3>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
const AboutPage = () => {
  // Reveal on scroll
  const revealRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('ap-visible'); observer.unobserve(e.target); }
      }),
      { threshold: 0.15 }
    );
    revealRefs.current.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);
  const addRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  // Scroll to top on mount
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="ap-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        {/* animated wave */}
        <div className="ap-wave-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 2500 200" fill="#f1f5f9" preserveAspectRatio="none">
            <path>
              <animate attributeName="d" dur="5s"
                values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                        M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                        M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250"
                repeatCount="indefinite" />
            </path>
          </svg>
        </div>

        <div className="ap-hero-content">
          <span className="ap-hero-badge">
            <span className="ap-badge-icon">📣</span>
            Elevate Your Business with Our Expertise
          </span>
          <h1 className="ap-hero-title">About Us</h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — FEATURE GRID + VALUE PROPS
      ═══════════════════════════════════════════ */}
      <section className="ap-intro">
        <div className="ap-container">
          <div className="ap-intro-grid">

            {/* Left — 2×2 feature grid */}
            <div className="ap-feature-grid ap-reveal ap-reveal-left" ref={addRef}>
              {[
                { Icon: Monitor, title: 'Innovative Digital\nSolutions' },
                { Icon: Rocket, title: 'Empowering Tech\nGrowth' },
                { Icon: Lightbulb, title: 'Transforming Ideas\nDigitally' },
                { Icon: Handshake, title: 'Your Trusted\nTech Partner' },
              ].map(({ Icon, title }) => (
                <div className="ap-feature-cell" key={title}>
                  <Icon size={40} className="ap-feature-icon" />
                  <span>{title.split('\n').map((t, i) => <span key={i}>{t}{i === 0 && <br />}</span>)}</span>
                </div>
              ))}
            </div>

            {/* Right — text content */}
            <div className="ap-intro-text ap-reveal ap-reveal-right" ref={addRef}>
              <span className="ap-section-badge">
                <Award size={16} /> Creative approach
              </span>
              <h2 className="ap-gradient-heading">Shaping Your Business Success.</h2>

              <div className="ap-feature-list">
                {[
                  {
                    title: 'Empower Your Business with Smart Solutions.',
                    desc: 'Achieve more with customized strategies that fuel growth and innovation.',
                  },
                  {
                    title: 'Maximize Your Mobile App Conversions.',
                    desc: 'Enhance user interactions for impactful mobile app experiences.',
                  },
                ].map(({ title, desc }) => (
                  <div className="ap-feature-row" key={title}>
                    <div className="ap-check-icon"><CheckCircle size={18} /></div>
                    <div>
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ap-cta-row">
                <Link to="/#services" className="ap-btn ap-btn-primary">Explore Services</Link>
                <Link to="/#contact" className="ap-btn ap-btn-link">
                  <Mail size={16} /> Quick Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom CTA strip */}
          <div className="ap-cta-strip ap-reveal" ref={addRef}>
            <Mail size={22} />
            <span>
              Save your precious time and effort spent for finding a solution.{' '}
              <Link to="/#contact" className="ap-inline-link">Contact us now</Link>
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — AUTO-SCROLLING IMAGE STRIP
      ═══════════════════════════════════════════ */}
      <section className="ap-image-strip">
        <div className="ap-strip-track">
          {/* We'll show "stage" cards representing our workflow */}
          {['Analysis', 'Design', 'Development', 'Testing', 'Evolution', 'Success', 'Growth'].map((stage, i) => (
            <div className="ap-strip-card" key={i}>
              <div className="ap-strip-card-inner">
                <div className={`ap-strip-icon-bg color-${i % 5}`}>
                  {['🔍', '🎨', '💻', '🧪', '🚀', '✅', '📈'][i]}
                </div>
                <span>{stage}</span>
              </div>
            </div>
          ))}
          {/* duplicate for infinite loop */}
          {['Analysis', 'Design', 'Development', 'Testing', 'Evolution', 'Success', 'Growth'].map((stage, i) => (
            <div className="ap-strip-card" key={`dup-${i}`} aria-hidden="true">
              <div className="ap-strip-card-inner">
                <div className={`ap-strip-icon-bg color-${i % 5}`}>
                  {['🔍', '🎨', '💻', '🧪', '🚀', '✅', '📈'][i]}
                </div>
                <span>{stage}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4 — STATS COUNTERS
      ═══════════════════════════════════════════ */}
      <section className="ap-counters">
        <div className="ap-container">
          <div className="ap-counters-grid">
            <AnimatedCounter target={4015} suffix="+" label="Proven Days of Expertise."
              description="Days of Expertise in Crafting Engaging App + Web Solutions." />
            <AnimatedCounter target={100} suffix="+" label="Valued and Delighted Clients."
              description="Client happiness drives our passion for excellence!" />
            <AnimatedCounter target={500} suffix="+" label="Worldwide Projects."
              description="Connecting cultures through diverse global projects." />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5 — CREATIVE PROCESS + TECH STACK
      ═══════════════════════════════════════════ */}
      <section className="ap-process">
        {/* top wave */}
        <div className="ap-wave-top">

        </div>

        <div className="ap-container">
          <div className="ap-process-grid">

            {/* Left — steps */}
            <div className="ap-process-steps ap-reveal ap-reveal-left" ref={addRef}>
              <span className="ap-section-badge">
                <Package size={16} /> Creative process
              </span>
              <h2 className="ap-gradient-heading">The creative process behind our projects.</h2>

              {[
                { num: '01', title: 'Concept Exploration', desc: 'We dive deep into your ideas, crafting tailored strategies to meet your vision.' },
                { num: '02', title: 'Customized Solutions', desc: 'We create bespoke, innovative solutions that align with your unique needs.' },
                { num: '03', title: 'Project Completion', desc: 'Delivering fully functional, high-quality results that exceed expectations.' },
              ].map(({ num, title, desc }, idx) => (
                <div className="ap-step" key={num}>
                  <div className="ap-step-left">
                    <div className="ap-step-circle">{num}</div>
                    {idx < 2 && <div className="ap-step-line" />}
                  </div>
                  <div className="ap-step-content">
                    <strong>{title}</strong>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right — process image */}
            <div className="ap-process-visual ap-reveal ap-reveal-right" ref={addRef}>
              <div className="ap-process-img-wrap">
                <img src={processImg} alt="Creative Process" className="ap-process-img" />
                <div className="ap-process-badge glass-badge">
                  <span className="ap-exp-number">11<sup>+</sup></span>
                  <span className="ap-exp-text">Years working experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech stack row 1 */}
          <div className="ap-tech-row ap-reveal" ref={addRef}>
            {techLogos.map(({ name, src }) => (
              <div className="ap-tech-item" key={name}>
                <img src={src} alt={name} className="ap-tech-logo" />
                <span>{name}</span>
              </div>
            ))}
          </div>

          {/* Tech stack row 2 */}
          <div className="ap-tech-row ap-reveal" ref={addRef}>
            {techLogos2.map(({ name, src }) => (
              <div className="ap-tech-item" key={name}>
                <img src={src} alt={name} className="ap-tech-logo" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* bottom wave */}

      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
