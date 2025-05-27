import { useState, useRef, useContext, useEffect } from 'react';
import { LanguageContext } from '../language.jsx';

const consentText = {
  en: `By checking this box, I consent to receive marketing calls, text messages, and emails from Fair Wreck at the contact information I've provided, using automated dialing systems, prerecorded messages, and artificial-voice technologies. I certify that I am the subscriber (or customary user) of the telephone number I've provided; my consent is not a condition of purchase; message and data rates may apply; I may revoke this consent at any time by replying "STOP" for texts or emailing support@fairwreck.com for calls; see <a href="/privacy" target="_blank">Privacy Policy</a> and <a href="/terms" target="_blank">Terms & Conditions</a>.`,
  es: `Al marcar esta casilla, doy mi consentimiento para recibir llamadas de marketing, mensajes de texto y correos electrónicos de Fair Wreck en la información de contacto que he proporcionado, utilizando sistemas de marcación automática, mensajes pregrabados y tecnologías de voz artificial. Certifico que soy el suscriptor (o usuario habitual) del número de teléfono que he proporcionado; mi consentimiento no es una condición de compra; pueden aplicarse tarifas de mensajes y datos; puedo revocar este consentimiento en cualquier momento respondiendo "STOP" a los mensajes de texto o enviando un correo electrónico a support@fairwreck.com para llamadas; consulte la <a href="/privacy" target="_blank">Política de Privacidad</a> y los <a href="/terms" target="_blank">Términos y Condiciones</a>.`
};

const Eligibility = () => {
  const { t, language } = useContext(LanguageContext);
  const [form, setForm] = useState({ name: '', email: '', phone: '', case: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // Inject TrustedForm script once on mount
    if (!window._trustedformScriptLoaded) {
      const tf = document.createElement('script');
      tf.type = 'text/javascript';
      tf.async = true;
      tf.src = (document.location.protocol === 'https:' ? 'https' : 'http') +
        '://api.trustedform.com/trustedform.js?field=xxTrustedFormCertUrl&use_tagged_consent=true&l=' +
        new Date().getTime() + Math.random();
      document.body.appendChild(tf);
      window._trustedformScriptLoaded = true;
    }
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitted(false);
    // Get TrustedForm cert URL from hidden field
    const tfUrl = formRef.current ? formRef.current["xxTrustedFormCertUrl"]?.value : '';
    const tcpaconsent = formRef.current ? formRef.current["tcpaconsent"]?.checked : false;
    try {
      const response = await fetch('http://localhost:5000/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, xxTrustedFormCertUrl: tfUrl, tcpaconsent })
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(false);
        alert('Submission failed. Please try again.');
      }
    } catch (err) {
      setSubmitted(false);
      alert('Submission failed. Please try again.');
    }
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
        {/* TrustedForm Consent Checkbox */}
        <label style={{ display: 'block', margin: '1.2rem 0 0.7rem 0', fontSize: '0.82rem', color: '#1a2236', fontWeight: 400, lineHeight: 1.3 }}>
          <input type="checkbox" name="tcpaconsent" required style={{ marginRight: 8, accentColor: '#2563eb' }} />
          <span dangerouslySetInnerHTML={{ __html: consentText[language] }} />
        </label>
        {/* TrustedForm hidden field will be injected by SDK */}
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