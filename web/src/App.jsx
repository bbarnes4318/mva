import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Eligibility from './components/Eligibility';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './language';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="site-wrapper">
        <Navbar />
        <Hero />
        <div className="section section-bg-light"><Services /></div>
        <div className="section"><Process /></div>
        <div className="section"><Testimonials /></div>
        <div className="section"><Eligibility /></div>
        <div className="section section-bg-blue"><CTA /></div>
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
