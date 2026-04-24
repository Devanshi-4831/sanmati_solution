import { Link as RouterLink } from 'react-router-dom';
import './Services.css';

// Original homepage images
import webImg from '../assets/services1/Web Development-.png';
import mobileImg from '../assets/services1/mobile-app-1.png';
import reactImg from '../assets/services1/e-commerce.png';
import cloudImg from '../assets/services1/SEO.png';
import fullstackImg from '../assets/services1/Testing 3d-compressed.png';
import uiuxImg from '../assets/services1/graphic-design.png';

const services = [
  {
    image: webImg,
    title: 'Web Development',
    backTitle: 'WEB DEVELOPMENT',
    description: 'Build fast, secure, and scalable websites tailored to your business needs.',
    colorClass: 'ser-box1',
    link: '/services/web-development',
  },
  {
    image: mobileImg,
    title: 'Mobile App Development',
    backTitle: 'MOBILE APP DEVELOPMENT',
    description: 'Develop powerful mobile apps for Android and iOS platforms.',
    colorClass: 'ser-box2',
    link: '/services/mobile-app-development',
  },
  {
    image: reactImg,
    title: 'E-commerce Solutions',
    backTitle: 'E-COMMERCE SOLUTIONS',
    description: 'Launch and grow your online store with smart e-commerce solutions.',
    colorClass: 'ser-box3',
    link: '/services/e-commerce-solutions',
  },
  {
    image: cloudImg,
    title: 'Cloud Services',
    backTitle: 'CLOUD SERVICES',
    description: 'Leverage cloud technology for better scalability and performance.',
    colorClass: 'ser-box4',
    link: '/services/cloud-services',
  },
  {
    image: fullstackImg,
    title: 'IT Support & Maintenance',
    backTitle: 'IT SUPPORT & MAINTENANCE',
    description: 'Ensure your systems run smoothly with reliable IT support services.',
    colorClass: 'ser-box5',
    link: '/services/it-support',
  },
  {
    image: uiuxImg,
    title: 'UI/UX Design',
    backTitle: 'UI/UX DESIGN & SOLUTIONS',
    description: 'Design visually appealing and user-friendly digital experiences.',
    colorClass: 'ser-box6',
    link: '/services/ui-ux-design',
  },
];

const Services = () => {
  return (
    <section id="services" className="services-flip section-padding">
      <div className="container">
        <h2 className="section-title">
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
                <RouterLink to={service.link} className="flip-card-back">
                  <h4 className="flip-card-back-title">{service.backTitle}</h4>
                  <p className="flip-card-back-desc">{service.description}</p>
                </RouterLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
