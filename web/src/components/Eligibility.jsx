import { useState, useRef, useContext } from 'react';
import { LanguageContext } from '../language';

const Eligibility = () => {
  const { t } = useContext(LanguageContext);
  const [form, setForm] = useState({ name: '', email: '', phone: '', case: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <>
      <div style={{ background: '#2563eb', color: '#fff', fontWeight: 900, fontSize: '1.05rem', padding: '0.6rem 1.3rem', borderRadius: 999, boxShadow: '0 2px 8px 0 rgba(37,99,235,0.13)', letterSpacing: 0.2, textAlign: 'center', marginBottom: 18 }}>
        {t('eligibility.badge')}
      </div>
      <div style={{ color: '#2563eb', fontWeight: 800, fontSize: '1.18rem', marginBottom: 10, textAlign: 'center' }}>
        {t('eligibility.subtitle')}
      </div>
      <form className="eligibility-form-card" onSubmit={handleSubmit} ref={formRef} id="eligibility-form" style={{ border: '2.5px solid #2563eb', boxShadow: '0 8px 32px 0 rgba(37,99,235,0.10)' }}>
        <h2 className="eligibility-form-title">{t('eligibility.title')}</h2>
        <div className="people-helped-stat" style={{ color: '#2563eb', fontWeight: 700 }}>
          <span style={{ color: '#22c55e', fontWeight: 900, fontSize: '1.15em' }}>2,000+</span> {t('eligibility.helped')}
        </div>
        <div className="eligibility-form-subtitle">{t('eligibility.formSubtitle')}</div>
        <div className="eligibility-form-fields">
          <input
            className="eligibility-form-field"
            type="text"
            name="name"
            placeholder={t('eligibility.name')}
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="eligibility-form-field"
            type="email"
            name="email"
            placeholder={t('eligibility.email')}
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="eligibility-form-field"
            type="tel"
            name="phone"
            placeholder={t('eligibility.phone')}
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            className="eligibility-form-field"
            name="case"
            placeholder={t('eligibility.case')}
            value={form.case}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <button className="eligibility-form-submit eligibility-green-cta" type="submit" style={{ background: '#22c55e', color: '#fff', fontWeight: 900, fontSize: '1.15rem', boxShadow: '0 6px 32px 0 rgba(34,197,94,0.18)', border: 'none' }}>
          {t('eligibility.button')}
        </button>
        {submitted && <div style={{ color: '#22c55e', marginTop: '1rem', fontWeight: 700 }}>{t('eligibility.thankyou')}</div>}
      </form>
      <div style={{ color: '#607d8b', fontSize: '0.98rem', marginTop: 12, textAlign: 'center' }}>
        {t('eligibility.privacy')}
      </div>
      <button className="sticky-cta-btn" onClick={() => {
        const el = document.getElementById('eligibility-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}>
        <span role="img" aria-label="Phone">📞</span> {t('eligibility.sticky')}
      </button>
      <style>{`
        .eligibility-green-cta:hover {
          transform: scale(1.04);
          background: #16a34a;
          box-shadow: 0 10px 36px 0 rgba(34,197,94,0.22);
        }
      `}</style>
    </>
  );
};

export default Eligibility; 