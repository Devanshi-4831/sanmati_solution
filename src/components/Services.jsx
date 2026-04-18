import React from 'react';
import './Services.css';

// Import all service images from assets/services
import webImg from '../assets/services1/Web Development-.png';
import mobileImg from '../assets/services1/mobile-app-1.png';
import reactImg from '../assets/services1/e-commerce.png';
import cloudImg from '../assets/services1/SEO.png';
import fullstackImg from '../assets/services1/Testing 3d-compressed.jpg';
import uiuxImg from '../assets/services1/graphic-design.png';

const services = [
  {
    image: webImg,
    title: 'Web Development',
    backTitle: 'WEB DEVELOPMENT',
    description:
      'Websites are the face of a brand, and a well-designed and developed website is essential to make your business stand out. We offer the best web design and development services, including redesign and revamp services.',
    colorClass: 'ser-box1',
  },
  {
    image: mobileImg,
    title: 'Mobile App Development',
    backTitle: 'MOBILE APP DEVELOPMENT',
    description:
      'The world is on a mobile screen. Thus, having a mobile app for your business is not just a luxury, it\'s a necessity. We offer both Android and iOS app development and ensure that our services bring the best results.',
    colorClass: 'ser-box2',
  },
  {
    image: reactImg,
    title: 'E-commerce Solutions',
    backTitle: 'E-commerce Solutions',
    description:
      'Maximize your user engagement with our modern React-based frontend solutions. We build fast, scalable, and beautiful interfaces that convert visitors into loyal customers.',
    colorClass: 'ser-box3',
  },
  {
    image: cloudImg,
    title: 'Cloud Services',
    backTitle: 'CLOUD Services',
    description:
      'Achieve top performance and reliability with our cloud infrastructure services. We help businesses migrate, scale, and optimize on AWS, Azure, and GCP.',
    colorClass: 'ser-box4',
  },
  {
    image: fullstackImg,
    title: 'IT Support & Maintenance',
    backTitle: 'IT Support & Maintenance',
    description:
      'We specialize in end-to-end software development to meet our clients\' specific needs. Our solutions are designed to improve productivity and efficiency across the entire technology stack.',
    colorClass: 'ser-box5',
  },
  {
    image: uiuxImg,
    title: 'UI/UX Design',
    backTitle: 'UI/UX DESIGN & SOLUTIONS',
    description:
      'We create visually appealing designs that connect with your customers and bring your ideas to life without losing its main objectives. Let us help market your business effectively.',
    colorClass: 'ser-box6',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-flip section-padding">
      {/* Animated wave shape at the top */}
      <div className="services-shape">
        <svg xmlns="http://www.w3.org/2000/svg" width="3000" height="400" viewBox="0 180 2500 200" fill="#f1f5f9">
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

      <div className="container">
        <h2 className="section-title" data-subtitle="What We Do">
          <span className="title-accent">OUR SERVICES</span>
        </h2>
        <p className="services-subtitle">
          We Provide <span className="subtitle-accent">Professional Services</span>
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="flip-card" key={index}>
              <div className="flip-card-inner">
                {/* Front */}
                <div className={`flip-card-front ${service.colorClass}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="flip-card-img"
                  />
                  <p className="flip-card-front-title">{service.title}</p>
                </div>

                {/* Back */}
                <div className="flip-card-back">
                  <h4 className="flip-card-back-title">{service.backTitle}</h4>
                  <p className="flip-card-back-desc">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
