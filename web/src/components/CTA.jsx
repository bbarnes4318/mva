import { useContext } from 'react';
import { LanguageContext } from '../language';

const CTA = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="cta-section" style={{ background: 'linear-gradient(90deg, #e3eafc 0%, #60a5fa 60%, #22c55e 100%)', color: '#1746a2', borderRadius: 22, boxShadow: '0 8px 32px 0 rgba(37,99,235,0.13)', width: '100%', margin: '0 auto', padding: '4rem 2rem', textAlign: 'center', maxWidth: 'none', border: '4px solid #fff', boxSizing: 'border-box', outline: '3px solid #e3eafc', outlineOffset: '-10px' }}>
      <div style={{ background: '#22c55e', color: '#fff', fontWeight: 900, fontSize: '1.09rem', padding: '0.7rem 1.6rem', borderRadius: 999, boxShadow: '0 4px 18px 0 rgba(34,197,94,0.13)', letterSpacing: 0.2, display: 'inline-block', marginBottom: 28, border: '2.5px solid #fff', borderBottom: '4px solid #16a34a' }}>
        {t('cta.badge')}
      </div>
      <h2 style={{ color: '#102040', fontWeight: 900, fontSize: '2.1rem', marginBottom: 18, textShadow: '0 2px 8px #fff8' }}>
        {t('cta.title')}
      </h2>
      <p style={{ color: '#1746a2', fontSize: '1.13rem', marginBottom: 38, fontWeight: 600, textShadow: '0 1px 4px #fff8' }}>
        {t('cta.desc')}
      </p>
      <button className="cta-main-big cta-green-btn" style={{ background: '#22c55e', color: '#fff', fontWeight: 900, fontSize: '1.18rem', padding: '1.2rem 2.8rem', borderRadius: 999, border: 'none', marginBottom: 22, boxShadow: '0 6px 32px 0 rgba(34,197,94,0.18)' }} onClick={() => {
        const el = document.getElementById('eligibility-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}>
        {t('cta.button')}
      </button>
      <div style={{ marginTop: 10 }}>
        <a href="tel:18883172922" style={{ background: '#fff', color: '#2563eb', fontWeight: 800, fontSize: '1.08rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, padding: '0.8rem 1.7rem', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.13)', border: '2px solid #fff' }}>
          <span role="img" aria-label="Phone">📞</span> 1-888-317-2922
        </a>
      </div>
      <style>{`
        .cta-green-btn:hover {
          transform: scale(1.04);
          background: #16a34a;
          box-shadow: 0 10px 36px 0 rgba(34,197,94,0.22);
        }
      `}</style>
    </section>
  );
};

export default CTA; 