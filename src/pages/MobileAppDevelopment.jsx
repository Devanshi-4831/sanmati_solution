import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Award,
  Smartphone,
  Layers,
  Zap,
  Globe,
  Star,
  Check,
  ArrowRight,
  Megaphone,
  CheckCircle
} from 'lucide-react';
import './MobileAppDevelopment.css';

// ─── Assets ───────────────────────────────────────────────────────────────────
import heroBg from '../assets/services1/mobile-hero.png';
import aboutImg from '../assets/services/mobile.png';
import benefitImg from '../assets/about/process-bg.png';
import reactImg from '../assets/services/react.png';
import flutterImg from '../assets/services/flutter.png';
import webImg from '../assets/services/web.png';

const MobileAppDevelopment = () => {
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
            entry.target.classList.add('mad-active');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    revealRefs.current.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Smartphone,
      title: 'Custom Mobile Solutions',
      desc: 'Tailor-made apps designed to meet your specific business goals and user needs.'
    },
    {
      icon: Layers,
      title: 'Cross-Platform Expertise',
      desc: 'Develop seamless applications for both iOS and Android using React Native & Flutter.'
    },
    {
      icon: Globe,
      title: 'Experience-Driven Design',
      desc: 'Intuitive and engaging UI/UX to ensure the best user experience and high engagement rates.'
    },
    {
      icon: Zap,
      title: 'Performance-Driven Development',
      desc: 'Optimized apps for speed, scalability, and superior performance across all devices.'
    }
  ];

  const benefits = [
    'We deliver customized solutions that align perfectly with your business objectives, ensuring optimal outcomes.',
    'Our highly experienced professionals bring expertise across various technologies, providing innovative and efficient solutions.',
    'We prioritize long-term collaboration, offering consistent support and transparent communication to help your business grow.'
  ];

  const valueServices = [
    {
      img: reactImg,
      badge: 'React-Native',
      title: 'React & React-Native',
      desc: 'Js, Node.js, MERN Stack.',
      to: '/services'
    },
    {
      img: flutterImg,
      badge: 'Flutter',
      title: 'Flutter & Flutter Flow',
      desc: 'Flutter, Flutter-Flow, Dart.',
      to: '/services'
    },
    {
      img: webImg,
      badge: 'Web Development',
      title: 'Web & API',
      desc: 'Python, Django, Flask, DynamoDB, Web API etc.',
      to: '/services'
    }
  ];

  return (
    <>
      <Navbar />

      <div className="mad-page-wrap">

        {/* ══════════════════════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════════════════════ */}
        <section
          className="mad-hero"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="mad-hero-overlay" />

          <div className="container">
            <div className="mad-hero-content mad-reveal-up" ref={addToRefs}>
              <span className="mad-hero-badge">
                <Megaphone size={13} />
                World class business services
              </span>
              <h1 className="mad-hero-title">Mobile Application<br />Development</h1>
            </div>
          </div>

          {/* Animated bottom wave */}
          <div className="mad-wave-wrap">
            <svg xmlns="http://www.w3.org/2000/svg" className="mad-wave-svg" viewBox="0 180 2500 200" fill="#ffffffff" preserveAspectRatio="none">
              <path>
                <animate attributeName="d" dur="5s"
                  values="M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250;
                        M 0 250 C 400 50 400 400 3000 250 L 3000 550 L 0 550 L 0 250;
                        M 0 250 C 1200 400 1200 50 3000 250 L 3000 550 L 0 550 L 0 250"
                  repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            ABOUT / INTRO SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="mad-about">
          <div className="container">
            <div className="mad-about-grid">

              {/* Left – image + floating badge */}
              <div className="mad-about-img-col mad-reveal-left" ref={addToRefs}>
                <div className="mad-img-wrap">
                  <img src={aboutImg} alt="Mobile App Development" />

                  <div className="mad-float-badge mad-float-anim">
                    <div className="mad-float-badge-inner">
                      <span className="mad-float-num">4</span>
                      <span className="mad-float-label">Years of<br />experience</span>
                    </div>
                    <div className="mad-float-circle" />
                  </div>
                </div>
              </div>

              {/* Right – text content */}
              <div className="mad-about-text-col mad-reveal-right" ref={addToRefs}>
                <span className="mad-sub-pill">
                  <Award size={15} />
                  Mobile Application Development
                </span>
                <h2 className="mad-section-title">Android &amp; iOS Application.</h2>
                <p className="mad-body-text">
                  As a premier mobile app development firm, we offer our clients a highly skilled and innovative team of developers. Our expertise spans Native Android and iOS development, ensuring that every solution is perfectly aligned with your project's unique requirements.
                </p>
                <p className="mad-body-text">
                  Our team is not only reliable and proficient but also adheres to robust architectural principles while maintaining full transparency throughout the development process. When you partner with us, you gain a dedicated team that works efficiently and passionately to bring your vision to life.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            STRATEGIC IMPACT SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="mad-impact">
          <div className="container">

            <div className="mad-section-head mad-reveal-up" ref={addToRefs}>
              <h2 className="mad-impact-title">
                The Strategic Impact of a Business Planning Expert for Your Success
              </h2>
            </div>

            <div className="mad-features-grid">
              {features.map((item, idx) => (
                <div
                  className="mad-feature-card mad-reveal-up"
                  ref={addToRefs}
                  key={idx}
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  <div className="mad-feature-icon">
                    <item.icon size={46} strokeWidth={1.5} />
                  </div>
                  <h4 className="mad-feature-title">{item.title}</h4>
                  <p className="mad-feature-desc">{item.desc}</p>
                  <div className="mad-feature-fill" />
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="mad-stats-row mad-reveal-up" ref={addToRefs}>
              <div className="mad-stat">
                <span className="mad-stat-num">4.98</span>
                <div className="mad-stat-info">
                  <div className="mad-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <span className="mad-stat-label">100+ rating</span>
                </div>
              </div>
              <div className="mad-stat-divider" />
              <div className="mad-stat">
                <span className="mad-stat-num">98<sup>%</sup></span>
                <div className="mad-stat-info">
                  <span className="mad-stat-label">Genuine client's<br />positive feedback.</span>
                </div>
              </div>
              <div className="mad-stat-divider" />
              <div className="mad-stat">
                <span className="mad-stat-num">100%<sup>+</sup></span>
                <div className="mad-stat-info">
                  <span className="mad-stat-label">Satisfied<br />Clients.</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            BENEFITS SECTION
        ══════════════════════════════════════════════════════ */}
        <section className="mad-benefits">
          <div className="container">
            <div className="mad-benefits-grid">

              {/* Left – checklist */}
              <div className="mad-benefits-text mad-reveal-left" ref={addToRefs}>
                <span className="mad-sub-pill">
                  <Check size={15} />
                  Services benefits
                </span>
                <h2 className="mad-section-title">Benefits of business planning services.</h2>
                <ul className="mad-benefits-list">
                  {benefits.map((text, i) => (
                    <li key={i} className="mad-benefit-item">
                      <span className="mad-benefit-check">
                        <Check size={13} />
                      </span>
                      <span className="mad-benefit-text">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right – image */}
              <div className="mad-benefits-img mad-reveal-right" ref={addToRefs}>
                <div className="mad-benefit-img-wrap">
                  <img src={benefitImg} alt="Benefits" />
                </div>
              </div>

            </div>

            {/* CTA bar */}
            <div className="mad-cta-bar mad-reveal-up" ref={addToRefs}>
              <h3 className="mad-cta-title">Schedule Your Business Consultation with us Today!</h3>
              <Link to="/contact" className="mad-cta-btn">
                Free consultation
                <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            VALUE-ADDED SERVICES (SUB SERVICES)
        ══════════════════════════════════════════════════════ */}
        <section className="mad-value">
          <div className="container">

            <div className="mad-section-head mad-reveal-up" ref={addToRefs}>
              <h2 className="mad-value-title">Our Value-Added Services</h2>
            </div>

            <div className="mad-value-grid">
              {valueServices.map((svc, idx) => (
                <div
                  className="mad-value-card mad-reveal-up"
                  ref={addToRefs}
                  key={idx}
                  style={{ transitionDelay: `${idx * 0.12}s` }}
                >
                  <div className="mad-card-img-area">
                    <img src={svc.img} alt={svc.title} />
                    <span className="mad-card-badge">{svc.badge}</span>
                  </div>
                  <div className="mad-card-body">
                    <h4 className="mad-card-title">{svc.title}</h4>
                    <p className="mad-card-desc">{svc.desc}</p>
                    <div className="mad-card-footer">
                      <Link to={svc.to} className="mad-explore-link">
                        <span>Explore services</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Bottom decorative wave */}
          <div className="mad-value-wave">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" preserveAspectRatio="none">
              <path d="M0,40 C480,90 960,-10 1440,40 L1440,80 L0,80 Z" fill="#ffffff" opacity="0.6" />
              <path d="M0,55 C360,5 1080,95 1440,55 L1440,80 L0,80 Z" fill="#ffffff" opacity="0.4" />
            </svg>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default MobileAppDevelopment;
