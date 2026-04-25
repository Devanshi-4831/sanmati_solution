import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
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
  Monitor,
  ShoppingBag,
  Cloud,
  Settings,
  Palette
} from 'lucide-react';
import './MobileAppDevelopment.css'; // Reusing the same styling system

// ─── Data ───────────────────────────────────────────────────────────────────
import webImg from '../assets/services1/Web Development-.png';
import mobileImg from '../assets/services1/mobile-app-1.png';
import reactImg from '../assets/services/react.png';
import flutterImg from '../assets/services/flutter.png';
import ecommerceImg from '../assets/services1/e-commerce.png';
import cloudImg from '../assets/services1/SEO.png';
import supportImg from '../assets/services1/Testing 3d-compressed.png';
import uiuxImg from '../assets/services1/graphic-design.png';

// ─── Backgrounds ─────────────────────────────────────────────────────────────
import heroWeb from '../assets/services1/hero-web-pro.jpg';
import heroMobile from '../assets/services1/hero-mobile-pro.jpg';
import heroUIUX from '../assets/services1/hero-uiux-pro.jpg';
import heroEcommerce from '../assets/services1/hero-ecommerce-pro.jpg';
import heroCloud from '../assets/services1/hero-cloud-pro.jpg';
import heroSupport from '../assets/services1/hero-support-pro.jpg';
import benefitImg from '../assets/about/process-bg.png';

const servicesDetails = {
  'web-development': {
    title: 'Web & API Development',
    badge: 'World class business services',
    subPill: 'Website & API Development',
    heroBg: heroWeb,
    aboutTitle: 'Python Web Development & Api',
    aboutImg: webImg,
    aboutText: [
      'Sanmati Solution is a premier web development company specializing in creating robust, secure, and scalable web applications tailored to the needs of startups, enterprises, and entrepreneurs.',
      'With expertise in Python and Django, we deliver high-performance web solutions that combine simplicity, flexibility, and scalability. Python\'s versatility and Django\'s powerful framework allow us to build applications that are not only feature-rich but also secure and efficient.'
    ],
    features: [
      { icon: Monitor, title: 'Custom Web Solutions', desc: 'Scalable websites designed to meet your specific business goals.' },
      { icon: Layers, title: 'Full-Stack Expertise', desc: 'Robust backends and interactive frontends using modern frameworks.' },
      { icon: Globe, title: 'API Integration', desc: 'Seamlessly connect your platforms with high-performance APIs.' },
      { icon: Zap, title: 'Speed Optimization', desc: 'Ensuring your site loads instantly on any device.' }
    ]
  },
  'mobile-app-development': {
    title: 'Mobile Application Development',
    badge: 'World class business services',
    subPill: 'Mobile Application Development',
    heroBg: heroMobile,
    aboutTitle: 'Android & iOS Application.',
    aboutImg: mobileImg,
    aboutText: [
      'As a premier mobile app development firm, we offer our clients a highly skilled and innovative team of developers. Our expertise spans Native Android and iOS development, ensuring that every solution is perfectly aligned.',
      'Our team is not only reliable and proficient but also adheres to robust architectural principles while maintaining full transparency throughout the development process.'
    ],
    features: [
      { icon: Smartphone, title: 'Custom Mobile Solutions', desc: 'Tailor-made apps designed to meet your specific business goals.' },
      { icon: Layers, title: 'Cross-Platform Expertise', desc: 'Develop seamless applications for both iOS and Android.' },
      { icon: Globe, title: 'Experience-Driven Design', desc: 'Intuitive and engaging UI/UX to ensure high engagement rates.' },
      { icon: Zap, title: 'Performance-Driven', desc: 'Optimized apps for speed and scalability across all devices.' }
    ]
  },
  'e-commerce-solutions': {
    title: 'E-commerce Solutions',
    badge: 'World class business services',
    subPill: 'E-commerce Development',
    heroBg: heroEcommerce,
    aboutTitle: 'Scalable Online Stores',
    aboutImg: ecommerceImg,
    aboutText: [
      'We provide end-to-end e-commerce development services, helping businesses set up robust online stores that drive sales.',
      'From custom shopping carts to secure payment gateway integrations, we ensure your e-commerce platform is ready for growth.'
    ],
    features: [
      { icon: ShoppingBag, title: 'Store Management', desc: 'Easy-to-use interfaces for managing products and orders.' },
      { icon: Layers, title: 'Secure Payments', desc: 'Integration with top payment gateways for safe transactions.' },
      { icon: Globe, title: 'Global Reach', desc: 'Optimize your store for international markets and currencies.' },
      { icon: Zap, title: 'Conversion Focus', desc: 'Designed to turn visitors into loyal customers.' }
    ]
  },
  'cloud-services': {
    title: 'Cloud & AWS Services',
    badge: 'World class business services',
    subPill: 'Cloud Infrastructure',
    heroBg: heroCloud,
    aboutTitle: 'Cloud and AWS Services',
    aboutImg: cloudImg,
    aboutText: [
      'Leverage the power of the cloud to scale your business effortlessly. We specialize in AWS and Azure cloud deployments.',
      'Our experts handle migration, security, and performance tuning to ensure your cloud infrastructure is efficient and cost-effective.'
    ],
    features: [
      { icon: Cloud, title: 'Cloud Migration', desc: 'Move your legacy systems to the cloud with zero downtime.' },
      { icon: Layers, title: 'AWS/Azure Expertise', desc: 'Certified professionals managing your cloud environment.' },
      { icon: Globe, title: 'Scalable Architecture', desc: 'Systems that grow with your user base automatically.' },
      { icon: Zap, title: 'High Availability', desc: 'Ensuring your services are always online and responsive.' }
    ]
  },
  'it-support': {
    title: 'IT Support & Maintenance',
    badge: 'World class business services',
    subPill: 'IT Managed Services',
    heroBg: heroSupport,
    aboutTitle: 'Reliable IT Support',
    aboutImg: supportImg,
    aboutText: [
      'Ensure your business operations never stop with our dedicated IT support and maintenance services.',
      'We provide proactive monitoring, regular updates, and instant troubleshooting to keep your technology running smooth.'
    ],
    features: [
      { icon: Settings, title: '24/7 Monitoring', desc: 'We watch your systems so you can focus on your business.' },
      { icon: Layers, title: 'Regular Maintenance', desc: 'System updates and patches to keep everything secure.' },
      { icon: Globe, title: 'Remote Support', desc: 'Instant help whenever you need it, anywhere in the world.' },
      { icon: Zap, title: 'Disaster Recovery', desc: 'Robust backup solutions to protect your valuable data.' }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX & Graphics Design',
    badge: 'World class business services',
    subPill: 'User-Centric Design',
    heroBg: heroUIUX,
    aboutTitle: 'Intuitive Digital Design',
    aboutImg: uiuxImg,
    aboutText: [
      'We design digital products that people love to use. Our UI/UX design process is rooted in user research and empathy.',
      'From wireframes to high-fidelity prototypes, we create visual experiences that are both beautiful and functional.'
    ],
    features: [
      { icon: Palette, title: 'UI Design', desc: 'Visually stunning interfaces that reflect your brand identity.' },
      { icon: Layers, title: 'UX Research', desc: 'Understanding your users to create meaningful interactions.' },
      { icon: Globe, title: 'Prototyping', desc: 'Interactive models to test and refine the user journey.' },
      { icon: Zap, title: 'Design Systems', desc: 'Scalable design components for consistent product growth.' }
    ]
  }
};

const ServiceDetailPage = () => {
  const { serviceId } = useParams();
  const data = servicesDetails[serviceId] || servicesDetails['mobile-app-development'];
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
  }, [serviceId]);

  const benefits = [
    'We deliver customized solutions that align perfectly with your business objectives, ensuring optimal outcomes.',
    'Our highly experienced professionals bring expertise across various technologies, providing innovative and efficient solutions.',
    'We prioritize long-term collaboration, offering consistent support and transparent communication to help your business grow.'
  ];

  const allValueServices = [
    {
      id: 'web-development',
      img: webImg,
      badge: 'Web',
      title: 'Web Development',
      desc: 'Build fast, secure, and scalable websites tailored to your business needs.',
      to: '/services/web-development'
    },
    {
      id: 'mobile-app-development',
      img: mobileImg,
      badge: 'Mobile',
      title: 'Mobile App Development',
      desc: 'Develop powerful mobile apps for Android and iOS platforms.',
      to: '/services/mobile-app-development'
    },
    {
      id: 'e-commerce-solutions',
      img: ecommerceImg,
      badge: 'E-commerce',
      title: 'E-commerce Solutions',
      desc: 'Launch and grow your online store with smart e-commerce solutions.',
      to: '/services/e-commerce-solutions'
    },
    {
      id: 'cloud-services',
      img: cloudImg,
      badge: 'Cloud',
      title: 'Cloud Services',
      desc: 'Leverage cloud technology for better scalability and performance.',
      to: '/services/cloud-services'
    },
    {
      id: 'it-support',
      img: supportImg,
      badge: 'IT Support',
      title: 'IT Support & Maintenance',
      desc: 'Ensure your systems run smoothly with reliable IT support services.',
      to: '/services/it-support'
    },
    {
      id: 'ui-ux-design',
      img: uiuxImg,
      badge: 'UI/UX',
      title: 'UI/UX Design',
      desc: 'Design visually appealing and user-friendly digital experiences.',
      to: '/services/ui-ux-design'
    }
  ];


  // Filter out the current service, shuffle randomly, and take 3 others
  const valueServices = allValueServices
    .filter(svc => svc.id !== serviceId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <>
      <Navbar darkText={true} />
      <div className="mad-page-wrap">
        
        {/* HERO SECTION (Dynamic Background) */}
        <section className="mad-hero" style={{ backgroundImage: `url(${data.heroBg})` }}>
          <div className="mad-hero-overlay" />
          <div className="container">
            <div className="mad-hero-content mad-reveal-up" ref={addToRefs}>
              <span className="mad-hero-badge">
                <Megaphone size={13} />
                {data.badge}
              </span>
              <h1 className="mad-hero-title">{data.title}</h1>
            </div>
          </div>
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

        {/* ABOUT SECTION (Transparent Image style) */}
        <section className="mad-about">
          <div className="container">
            <div className="mad-about-grid">
              <div className="mad-about-img-col mad-reveal-left" ref={addToRefs}>
                <div className="mad-img-wrap">
                  <img src={data.aboutImg} alt={data.aboutTitle} />
                  <div className="mad-float-badge mad-float-anim">
                    <div className="mad-float-badge-inner">
                      <span className="mad-float-num">4</span>
                      <span className="mad-float-label">Years of<br />experience</span>
                    </div>
                    <div className="mad-float-circle" />
                  </div>
                </div>
              </div>
              <div className="mad-about-text-col mad-reveal-right" ref={addToRefs}>
                <span className="mad-sub-pill">
                  <Award size={15} />
                  {data.subPill}
                </span>
                <h2 className="mad-section-title">{data.title}</h2>
                {data.aboutText.map((p, i) => (
                  <p key={i} className="mad-body-text">{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STRATEGIC IMPACT SECTION */}
        <section className="mad-impact">
          <div className="container">
            <div className="mad-section-head mad-reveal-up" ref={addToRefs}>
              <h2 className="mad-impact-title">The Strategic Impact of a Business Planning Expert for Your Success</h2>
            </div>
            <div className="mad-features-grid">
              {data.features.map((item, idx) => (
                <div className="mad-feature-card mad-reveal-up" ref={addToRefs} key={idx} style={{ transitionDelay: `${idx * 0.12}s` }}>
                  <div className="mad-feature-icon"><item.icon size={46} strokeWidth={1.5} /></div>
                  <h4 className="mad-feature-title">{item.title}</h4>
                  <p className="mad-feature-desc">{item.desc}</p>
                  <div className="mad-feature-fill" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS & CTA */}
        <section className="mad-benefits">
          <div className="container">
            <div className="mad-benefits-grid">
              <div className="mad-benefits-text mad-reveal-left" ref={addToRefs}>
                <span className="mad-sub-pill"><Check size={15} /> Services benefits</span>
                <h2 className="mad-section-title">Benefits of business planning services.</h2>
                <ul className="mad-benefits-list">
                  {benefits.map((text, i) => (
                    <li key={i} className="mad-benefit-item">
                      <span className="mad-benefit-check"><Check size={13} /></span>
                      <span className="mad-benefit-text">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mad-benefits-img mad-reveal-right" ref={addToRefs}>
                <div className="mad-benefit-img-wrap">
                  <img src={benefitImg} alt="Benefits" />
                </div>
              </div>
            </div>
            <div className="mad-cta-bar mad-reveal-up" ref={addToRefs}>
              <h3 className="mad-cta-title">Schedule Your Business Consultation with us Today!</h3>
              <Link to="/contact" className="mad-cta-btn">Free consultation <ArrowRight size={17} /></Link>
            </div>
          </div>
        </section>

        {/* VALUE-ADDED SERVICES (SUB SERVICES) */}
        <section className="mad-value">
          <div className="container">
            <div className="mad-section-head mad-reveal-up" ref={addToRefs}>
              <h2 className="mad-value-title">Our Value-Added Services</h2>
            </div>
            <div className="mad-value-grid">
              {valueServices.map((svc, idx) => (
                <div className="mad-value-card mad-reveal-up" ref={addToRefs} key={idx} style={{ transitionDelay: `${idx * 0.12}s` }}>
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
         
        </section>

      </div>
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
