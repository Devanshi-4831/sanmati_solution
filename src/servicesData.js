import webImg from './assets/services1/Web Development-.png';
import mobileImg from './assets/services1/mobile-app-1.png';
import ecommerceImg from './assets/services1/e-commerce.png';
import cloudImg from './assets/services1/SEO.png';
import supportImg from './assets/services1/Testing 3d-compressed.png';
import uiuxImg from './assets/services1/graphic-design.png';

export const servicesData = [
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'High-performance websites',
    description: 'Build fast, secure, and scalable websites tailored to your business needs. We create responsive designs with modern technologies for seamless user experience.',
    image: webImg,
    badge: 'Web',
    link: '/services/web-development',
    colorClass: 'ser-box1'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    subtitle: 'Android & iOS Apps',
    description: 'Develop powerful mobile apps for Android and iOS platforms. We deliver smooth, user-friendly, and high-performance applications.',
    image: mobileImg,
    badge: 'Mobile',
    link: '/mobileappdevelopment',
    colorClass: 'ser-box2'
  },
  {
    id: 'e-commerce-solutions',
    title: 'E-commerce Solutions',
    subtitle: 'Online stores & more',
    description: 'Launch and grow your online store with smart e-commerce solutions. We provide secure, scalable, and conversion-focused platforms.',
    image: ecommerceImg,
    badge: 'E-commerce',
    link: '/services/e-commerce',
    colorClass: 'ser-box3'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    subtitle: 'AWS & Azure experts',
    description: 'Leverage cloud technology for better scalability and performance. We offer secure cloud deployment, migration, and management solutions.',
    image: cloudImg,
    badge: 'Cloud',
    link: '/services/cloud',
    colorClass: 'ser-box4'
  },
  {
    id: 'it-support',
    title: 'IT Support & Maintenance',
    subtitle: '24/7 reliability',
    description: 'Ensure your systems run smoothly with reliable IT support services. We provide 24/7 monitoring, troubleshooting, and maintenance.',
    image: supportImg,
    badge: 'IT Support',
    link: '/services/it-support',
    colorClass: 'ser-box5'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    subtitle: 'User-centric interfaces',
    description: 'Design visually appealing and user-friendly digital experiences. We focus on intuitive interfaces that enhance user engagement.',
    image: uiuxImg,
    badge: 'Design',
    link: '/services/ui-ux',
    colorClass: 'ser-box6'
  }
];
