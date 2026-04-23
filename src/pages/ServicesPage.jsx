import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Megaphone, ArrowRight } from 'lucide-react';
import './ServicesPage.css';

// Importing images
import heroBg from '../assets/services1/web-development.jpg';
import mobileImg from '../assets/services/mobile.png';
import reactImg from '../assets/services/react.png';
import flutterImg from '../assets/services/flutter.png';
import webImg from '../assets/services/web.png';
import cloudImg from '../assets/services/cloud.png';
import fullstackImg from '../assets/services/fullstack.png';
import uiuxImg from '../assets/services/uiux.png';

const servicesData = [
  {
    title: 'Mobile App Development',
    subtitle: 'Android & iOS Application',
    image: mobileImg,
    badge: 'Mobile Apps',
    link: '#',
  },
  {
    title: 'React & React-Native',
    subtitle: 'Js,Node.js, MERN Stack.',
    image: reactImg,
    badge: 'React-Native',
    link: '#',
  },
  {
    title: 'Flutter & Flutter Flow',
    subtitle: 'Flutter,Flutter-Flow,Dart.',
    image: flutterImg,
    badge: 'Flutter',
    link: '#',
  },
  {
    title: 'Web & API',
    subtitle: 'Python, Django, Flask, DynamoDB, Web API etc.',
    image: webImg,
    badge: 'Web Development',
    link: '#',
  },
  {
    title: 'Cloud & AWS',
    subtitle: 'AWS Consulting & Security, Cloud & Database Migration, Manage Cloud Services.',
    image: cloudImg,
    badge: 'Cloud&AWS',
    link: '#',
  },
  {
    title: 'Full-Stack Development',
    subtitle: 'Full Stack Development',
    image: fullstackImg,
    badge: 'Full-Stack',
    link: '#',
  },
  {
    title: 'UI/UX & Graphics Design',
    subtitle: 'Figma, Seketch, Adobe Photoshop.',
    image: uiuxImg,
    badge: 'UI/UX Design',
    link: '#',
  }
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
            <svg xmlns="http://www.w3.org/2000/svg" width="3000" height="400" viewBox="0 180 2500 200" fill="#f0f2f8">
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
                <span className="badge-pill">
                  <Megaphone size={16} className="badge-icon" />
                  World class business services
                </span>
                <h1 className="services-title">Services</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="services-grid-section position-relative">
          <div className="container">
            <div className="services-page-grid">
              {servicesData.map((service, index) => (
                <div className="services-box-style-03" key={index}>
                  <div className="services-box-img-wrapper position-relative">
                    <a href={service.link}>
                      <img src={service.image} alt={service.title} />
                    </a>
                    <a href={service.link} className="services-badge">
                      {service.badge}
                    </a>
                  </div>
                  <div className="services-box-content bg-white">
                    <div className="services-box-text text-center">
                      <a href={service.link} className="services-box-title">
                        {service.title}
                      </a>
                      <p>{service.subtitle}</p>
                    </div>
                    <div className="services-box-footer text-center">
                      <a href={service.link} className="explore-btn">
                        <span className="btn-text">Explore More</span>
                        <ArrowRight size={16} className="btn-icon" />
                      </a>
                    </div>
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
