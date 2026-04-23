import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle, Megaphone, ArrowRight, Smartphone, Smartphone as Mobile, Globe, Zap, Layers, Code2 } from 'lucide-react';
import './MobileAppDevelopment.css';

// Importing assets
import heroBg from '../assets/services1/mobile-hero.png';
import benefitImg from '../assets/services/benefit-img.png';
import mobileImg from '../assets/services/mobile.png';
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
      <Navbar />
      <div className="page-layout">
        {/* Hero Section */}
        <section
          className="services-hero cover-background"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="shape-image-animation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 2500 200" fill="#F7F7F7" preserveAspectRatio="none">
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
            <div className="services-hero-content">
              <div className="services-hero-text reveal-up" ref={addToRefs}>
                <div className="breadcrumbs">
                  Home &gt; Service &gt; Mobile Application
                </div>
                <h1 className="services-title">Mobile Application Development</h1>
              </div>
            </div>
          </div>
        </section>

        {/* About Service Section */}
        <section className="service-about-section reveal" ref={addToRefs}>
          <div className="container">
            <div className="about-grid">
              <div className="about-image-wrapper reveal-left" ref={addToRefs}>
                <div className="experience-badge">
                  <div className="exp-number">11</div>
                  <div className="exp-text">Years of experience</div>
                </div>
                <img src={mobileImg} alt="Mobile App" className="main-about-img" />
              </div>
              <div className="about-content reveal-right" ref={addToRefs}>
                <span className="sub-title-primary">
                  <Megaphone size={14} className="me-2" />
                  MOBILE APPLICATION SERVICE
                </span>
                <h2 className="section-main-title text-start">Android & iOS Application.</h2>
                <p className="about-desc">
                  As a leading mobile app development company, we offer our clients high-skilled and innovate team of developers.
                  Our experts explore Native Android and iOS development, ensuring that every solution is perfectly aligned with your project requirements.
                </p>
                <p className="about-desc">
                  Our goal is to provide reliable and performant mobile platforms to deliver with functional principles. We maintain high transparency throughout the development process. When you work with us, you get a dedicated team that works efficiently and passionately to bring your vision to life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Impact Section */}
        <section className="strategic-impact-section reveal" ref={addToRefs}>
          <div className="container">
            <div className="text-center mb-5 reveal-up" ref={addToRefs}>
              <h2 className="impact-main-title">
                The Strategic Impact of a Business <br /> Planning Expert for Your Success
              </h2>
            </div>
            <div className="impact-grid-four">
              {[
                { icon: Smartphone, title: 'Custom Mobile Solution', desc: 'Tailored mobile apps designed to meet your specific business goals and user needs.' },
                { icon: Globe, title: 'Cross Platform Solution', desc: 'Develop once and run seamlessly on both iOS and Android platforms with Flutter.' },
                { icon: Layers, title: 'Expect User Friendly Design', desc: 'Prioritizing intuitive UI/UX that keeps your users engaged and happy.' },
                { icon: Zap, title: 'Performance Focused Development', desc: 'Optimizing for speed and stability to ensure a smooth user experience.' }
              ].map((item, idx) => (
                <div className="impact-card-v2 reveal-up" ref={addToRefs} key={idx} style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="impact-icon-circle">
                    <item.icon className="impact-icon-v2" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="stats-bar-v2 reveal-up" ref={addToRefs}>
              <div className="stat-v2">
                <div className="stat-top">4.98 <span className="stars">★★★★★</span></div>
                <div className="stat-bottom">1300 reviews</div>
              </div>
              <div className="stat-v2">
                <div className="stat-top">98%</div>
                <div className="stat-bottom">happy clients, positive reviews</div>
              </div>
              <div className="stat-v2">
                <div className="stat-top">100%+</div>
                <div className="stat-bottom">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section-v2 reveal" ref={addToRefs}>
          <div className="container">
            <div className="benefits-layout-v2">
              <div className="benefits-content-v2 reveal-left" ref={addToRefs}>
                <span className="sub-title-primary">
                  BENEFITS OF SERVICE
                </span>
                <h2 className="section-main-title text-start">Benefits of business planning services.</h2>
                <ul className="benefits-list-v2">
                  <li>
                    <CheckCircle className="check-icon-v2" size={18} />
                    <span>We maintain custom research with our powerful platform for each client's industry needs.</span>
                  </li>
                  <li>
                    <CheckCircle className="check-icon-v2" size={18} />
                    <span>Focusing on high performance and development of scalable and future-proof solutions.</span>
                  </li>
                  <li>
                    <CheckCircle className="check-icon-v2" size={18} />
                    <span>Maintaining long-term collaboration, offering continuous support and transparent communication.</span>
                  </li>
                </ul>
              </div>
              <div className="benefits-image-v2 reveal-right" ref={addToRefs}>
                <img src={benefitImg} alt="Benefits Illustration" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="cta-banner reveal-up" ref={addToRefs}>
          <div className="container">
            <div className="cta-flex">
              <h2>Schedule Your Business Consultation with us Today!</h2>
              <button className="cta-btn">Free consultation <ArrowRight size={18} className="ms-2" /></button>
            </div>
          </div>
        </section>

        {/* Value Added Services */}
        <section className="value-added-section reveal" ref={addToRefs}>
          <div className="container">
            <div className="text-center mb-5 reveal-up" ref={addToRefs}>
              <h2 className="value-main-title">Our Value-Added Services</h2>
            </div>
            <div className="value-grid-v2">
              {[
                { img: reactImg, badge: 'REACT-NATIVE', title: 'React & React-Native', desc: 'Js, Node.js, MERN Stack.' },
                { img: flutterImg, badge: 'FLUTTER', title: 'Flutter & Flutter Flow', desc: 'Flutter, Flutter-Flow, Dart.' },
                { img: webImg, badge: 'WEB DEVELOPMENT', title: 'Web & API', desc: 'Python, Django, Flask, etc.' }
              ].map((item, idx) => (
                <div className="value-card-v3 reveal-up" ref={addToRefs} key={idx} style={{ transitionDelay: `${idx * 0.1}s` }}>
                  <div className="value-img-container">
                    <img src={item.img} alt={item.title} />
                    <span className="card-badge">{item.badge}</span>
                  </div>
                  <div className="value-card-body">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <a href="#" className="explore-link">EXPLORE SERVICE &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MobileAppDevelopment;
