import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Eligibility from './components/Eligibility';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import { LanguageProvider } from './language';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

function HomeWithScroll() {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);
  return (
    <div className="site-wrapper">
      <Navbar />
      <Hero />
      <div className="section section-bg-light" id="services"><Services /></div>
      <div className="section" id="process"><Process /></div>
      <div className="section" id="testimonials"><Testimonials /></div>
      <div className="section"><Eligibility /></div>
      <div className="section section-bg-blue"><CTA /></div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeWithScroll />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
