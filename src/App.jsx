import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/mobileappdevelopment" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
