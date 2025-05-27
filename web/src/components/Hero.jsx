// Required image files for hero and trust badges:
// Place these in your public/ directory:
// - public/hero-justice.png (main hero illustration)
// - public/badge-bbb.png (BBB Accredited badge)
// - public/badge-google.png (Google 5-Star badge)
// - public/badge-avvo.png (Avvo Rating badge)

import { useContext } from 'react';
import { LanguageContext } from '../language';

const badgeStyle = {
  fontWeight: 800,
  fontSize: '1.01rem',
  padding: '0.65rem 1.7rem',
  borderRadius: 999,
  boxShadow: '0 2px 8px 0 rgba(37,99,235,0.13)',
  letterSpacing: 0.2,
  textAlign: 'center',
  minWidth: 120,
  maxWidth: 220,
  whiteSpace: 'nowrap',
  display: 'inline-block',
  border: '2.5px solid #fff',
  marginRight: 18,
  marginBottom: 0,
  background: 'linear-gradient(90deg, #2563eb 60%, #00eaff 100%)',
  color: '#fff',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const Hero = () => {
  const { t } = useContext(LanguageContext);
  return (
    <div className="hero-bg" style={{ background: 'linear-gradient(120deg, #f7fafc 60%, #e3eafc 100%)', minHeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 0 6rem 0', borderRadius: 18 }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: 1100,
        width: '100%',
        margin: '0 auto',
        gap: 48,
        flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1, minWidth: 320, maxWidth: 600 }}>
          <div style={{ display: 'flex', gap: 20, marginBottom: 38, flexWrap: 'nowrap' }}>
            <div style={{ fontWeight: 800, fontSize: '1.01rem', padding: '0.65rem 1.7rem', borderRadius: 999, boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)', letterSpacing: 0.2, textAlign: 'center', minWidth: 120, maxWidth: 220, whiteSpace: 'nowrap', display: 'inline-block', border: '2.5px solid #fff', marginRight: 18, marginBottom: 0, background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)', color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
              {t('hero.badge1')}
            </div>
            <div style={{ fontWeight: 800, fontSize: '1.01rem', padding: '0.65rem 1.7rem', borderRadius: 999, boxShadow: '0 2px 8px 0 rgba(34,197,94,0.10)', letterSpacing: 0.2, textAlign: 'center', minWidth: 120, maxWidth: 220, whiteSpace: 'nowrap', display: 'inline-block', border: '2.5px solid #fff', marginRight: 0, marginBottom: 0, background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis', fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
              {t('hero.badge2')}
            </div>
          </div>
          <h1 className="hero-headline" style={{ fontSize: '3.2rem', fontWeight: 900, color: '#1a2236', marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: 1.08, textShadow: '0 2px 12px rgba(37,99,235,0.08)', fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
            {t('hero.headline')}
          </h1>
          <p className="hero-subheadline" style={{ fontSize: '1.25rem', color: '#2563eb', fontWeight: 500, marginBottom: '2.7rem', letterSpacing: 0.1, maxWidth: 600, fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
            {t('hero.subheadline')}
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
            <button className="cta-main-big hero-green-cta" style={{ fontSize: '1.35rem', padding: '1.3rem 3rem', background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)', color: '#fff', boxShadow: '0 6px 32px 0 rgba(34,197,94,0.18)', border: 'none', fontFamily: 'Inter, Arial, Helvetica, sans-serif' }} onClick={() => {
              const el = document.getElementById('eligibility-form');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}>
              {t('hero.cta')}
            </button>
            <a href="tel:18883172922" style={{ background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)', color: '#fff', fontWeight: 900, fontSize: '1.05rem', borderRadius: 999, padding: '0.8rem 1.5rem', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.13)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, border: '2px solid #2563eb', fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
              <span role="img" aria-label="Phone">📞</span> {t('hero.phone')}
            </a>
          </div>
          <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(60,72,88,0.10)', border: '1.5px solid #e3eafc', padding: '1.2rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, margin: '32px 0 40px 0', fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 10 }}>
              <img src="/badge-bbb.png" alt="BBB Accredited" style={{ height: 44, width: 'auto', display: 'block' }} />
              <img src="/badge-google.png" alt="Google Reviews" style={{ height: 44, width: 'auto', display: 'block' }} />
              <img src="/badge-avvo.png" alt="Avvo Rating" style={{ height: 44, width: 'auto', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2, marginTop: 6 }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#FFD700', fontSize: 32, marginRight: 2, textShadow: '0 1px 4px #e3eafc' }}>★</span>
              ))}
              <span style={{ fontWeight: 900, fontSize: '1.35rem', color: '#1a2236', marginLeft: 14, letterSpacing: 0.01 }}>{t('hero.reviews')}</span>
            </div>
          </div>
        </div>
        <img className="hero-image" src="/hero-justice.png" alt="Justice Illustration" style={{ maxWidth: 340, width: '100%', minWidth: 180, flex: 1, margin: '0 auto', objectFit: 'contain', borderRadius: 18, boxShadow: '0 8px 32px 0 rgba(25,99,235,0.10)' }} />
      </div>
      <style>{`
        .hero-green-cta:hover {
          transform: scale(1.04);
          background: linear-gradient(90deg, #16a34a 0%, #22c55e 100%);
          box-shadow: 0 10px 36px 0 rgba(34,197,94,0.22);
        }
        @media (max-width: 900px) {
          .hero-bg > div {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 32px !important;
          }
          .hero-image {
            margin-left: 0 !important;
            margin-top: 2.5rem !important;
            max-width: 98vw !important;
          }
          .hero-bg .hero-badges-row {
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero; 