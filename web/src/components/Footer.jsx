import { useContext } from 'react';
import { LanguageContext } from '../language.jsx';

const Footer = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="footer-main" style={{ background: 'linear-gradient(90deg, #e3eafc 0%, #60a5fa 100%)' }}>
      <div className="footer-content">
        <div className="footer-logo"><img src="/fw-logo.png" alt="Fair Wreck Logo" className="footer-logo-img" /></div>
        <div className="footer-links">
          <div><strong>{t('footer.quick')}</strong><br />
            <a href="#services">{t('footer.services')}</a><br />
            <a href="#process">{t('footer.process')}</a><br />
            <a href="#testimonials">{t('footer.testimonials')}</a><br />
            <a href="#contact">{t('footer.contact')}</a><br />
            <a href="/privacy" style={{ color: '#2563eb', fontWeight: 700 }}>Privacy Policy</a><br />
            <a href="/terms" style={{ color: '#2563eb', fontWeight: 700 }}>Terms & Conditions</a>
          </div>
          <div><strong>{t('footer.hours')}</strong><br />{t('footer.monfri')}<br />{t('footer.sat')}<br />{t('footer.sun')}</div>
        </div>
      </div>
      <div className="footer-bottom">
        {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer; 