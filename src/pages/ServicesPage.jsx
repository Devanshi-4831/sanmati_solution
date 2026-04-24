import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight } from 'lucide-react';
import './ServicesPage.css';

import heroBg from '../assets/services/services.png';

// Same images as homepage services section
import webImg from '../assets/services1/Web Development-.png';
import mobileImg from '../assets/services1/mobile-app-1.png';
import ecommerceImg from '../assets/services1/e-commerce.png';
import cloudImg from '../assets/services1/SEO.png';
import supportImg from '../assets/services1/Testing 3d-compressed.png';
import uiuxImg from '../assets/services1/graphic-design.png';

// Same content as homepage services section
const servicesData = [
  {
    title: 'Web Development',
    subtitle: 'Build fast, secure, and scalable websites tailored to your business needs.',
    image: webImg,
    badge: 'Web',
    link: '/services/web-development',
  },
  {
    title: 'Mobile App Development',
    subtitle: 'Develop powerful mobile apps for Android and iOS platforms.',
    image: mobileImg,
    badge: 'Mobile',
    link: '/services/mobile-app-development',
  },
  {
    title: 'E-commerce Solutions',
    subtitle: 'Launch and grow your online store with smart e-commerce solutions.',
    image: ecommerceImg,
    badge: 'E-commerce',
    link: '/services/e-commerce-solutions',
  },
  {
    title: 'Cloud Services',
    subtitle: 'Leverage cloud technology for better scalability and performance.',
    image: cloudImg,
    badge: 'Cloud',
    link: '/services/cloud-services',
  },
  {
    title: 'IT Support & Maintenance',
    subtitle: 'Ensure your systems run smoothly with reliable IT support services.',
    image: supportImg,
    badge: 'IT Support',
    link: '/services/it-support',
  },
  {
    title: 'UI/UX Design',
    subtitle: 'Design visually appealing and user-friendly digital experiences.',
    image: uiuxImg,
    badge: 'UI/UX',
    link: '/services/ui-ux-design',
  },
];

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
          <div className="container h-100">
            <div className="services-hero-content">
              <div className="services-hero-text">
                <span className="badge-pill-primary">
                  <Megaphone size={16} className="badge-icon" />
                  WORLD CLASS BUSINESS SERVICES
                </span>
                <h1 className="services-title">services</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-grid-section">
          <div className="container">
            <div className="services-page-grid">
              {servicesData.map((service, index) => (
                <div className="sp-card" key={index}>
                  {/* Image area */}
                  <div className="sp-card-img-wrap">
                    <img src={service.image} alt={service.title} className="sp-card-img" />
                    <Link to={service.link} className="sp-badge">{service.badge}</Link>
                  </div>
                  {/* Content area */}
                  <div className="sp-card-body">
                    <Link to={service.link} className="sp-card-title">{service.title}</Link>
                    <p className="sp-card-sub">{service.subtitle}</p>
                    <div className="sp-divider"></div>
                    <Link to={service.link} className="sp-explore-link">
                      Explore More <ArrowRight size={15} className="sp-arrow" />
                    </Link>
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

export default ServicesPage;
