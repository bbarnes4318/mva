import { useContext } from 'react';
import { LanguageContext } from '../language.jsx';

const Navbar = () => {
  const { language, setLanguage, t } = useContext(LanguageContext);
  return (
    <nav className="navbar" style={{ background: '#fff', width: '100vw', left: 0, right: 0, position: 'relative', boxShadow: '0 2px 12px 0 rgba(60,72,88,0.07)', zIndex: 100 }}>
      <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, width: '100%', margin: '0 auto', padding: '0 24px', minHeight: 0, height: 80}}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="./fw-logo.png" alt="Logo" style={{ height: 160, width: 'auto', display: 'block' }} />
        </div>
        <div className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <a href="/#services">{t('navbar.services')}</a>
          <a href="/#process">{t('navbar.process')}</a>
          <a href="/#testimonials">{t('navbar.testimonials')}</a>
          <a href="tel:18883172922" className="navbar-cta-phone" style={{ background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)', color: '#fff', fontWeight: 900, fontSize: '1.08rem', borderRadius: 999, padding: '0.7rem 1.7rem', boxShadow: '0 2px 8px 0 rgba(34,197,94,0.13)', border: 'none', marginLeft: 18, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span role="img" aria-label="Phone">📞</span> {t('navbar.freeConsult')}
          </a>
          <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} style={{ marginLeft: 24, fontWeight: 700, fontSize: '1.05rem', border: 'none', background: 'none', color: '#2563eb', cursor: 'pointer', padding: '0.4rem 1.1rem', borderRadius: 8, transition: 'background 0.2s' }} aria-label="Switch language">
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 