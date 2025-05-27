import { useContext } from 'react';
import { LanguageContext } from '../language.jsx';

const Contact = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="contact-section" id="contact" style={{ background: 'linear-gradient(120deg, #e3eafc 60%, #f7fafc 100%)', padding: '4.5rem 0' }}>
      <div className="contact-card" style={{ maxWidth: 540, margin: '0 auto', background: '#fff', borderRadius: 22, boxShadow: '0 8px 32px 0 rgba(60,72,88,0.13)', padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ color: '#1746a2', fontWeight: 900, fontSize: '2.1rem', marginBottom: 8, textAlign: 'center' }}>{t('contact.title')}</h2>
        <div style={{ color: '#2563eb', fontWeight: 600, fontSize: '1.13rem', marginBottom: 18, textAlign: 'center' }}>
          {t('contact.desc')}
        </div>
        <a href="tel:18883172922" style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#e3eafc', color: '#2563eb', fontWeight: 900, fontSize: '1.15rem', borderRadius: 999, padding: '0.6rem 1.5rem', marginBottom: 24, textDecoration: 'none', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)', border: '2px solid #fff', transition: 'background 0.2s, color 0.2s' }}>
          <span role="img" aria-label="Phone">📞</span> 1-888-317-2922
        </a>
        <form className="contact-form" style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input type="text" placeholder={t('contact.name')} style={{ border: '1.5px solid #cfd8dc', borderRadius: 10, padding: '0.9rem 1.2rem', fontSize: '1.08rem', marginBottom: 10 }} />
          <input type="email" placeholder={t('contact.email')} style={{ border: '1.5px solid #cfd8dc', borderRadius: 10, padding: '0.9rem 1.2rem', fontSize: '1.08rem', marginBottom: 10 }} />
          <input type="tel" placeholder={t('contact.phone')} style={{ border: '1.5px solid #cfd8dc', borderRadius: 10, padding: '0.9rem 1.2rem', fontSize: '1.08rem', marginBottom: 10 }} />
          <textarea placeholder={t('contact.case')} style={{ border: '1.5px solid #cfd8dc', borderRadius: 10, padding: '0.9rem 1.2rem', fontSize: '1.08rem', minHeight: 90, marginBottom: 10, resize: 'vertical' }} />
          <button type="submit" style={{ background: 'linear-gradient(90deg, #2563eb 0%, #22c55e 100%)', color: '#fff', fontWeight: 900, fontSize: '1.15rem', borderRadius: 999, padding: '1rem 0', border: 'none', marginTop: 8, boxShadow: '0 4px 18px 0 rgba(37,99,235,0.13)', letterSpacing: 0.2, width: '100%' }}>
            {t('contact.button')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact; 