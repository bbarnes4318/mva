import { useState, useRef, useContext, useEffect } from 'react';
import { LanguageContext } from '../language.jsx';

const consentText = {
  en: `By checking this box, I consent to receive marketing calls, text messages, and emails from Fair Wreck at the contact information I've provided, using automated dialing systems, prerecorded messages, and artificial-voice technologies. I certify that I am the subscriber (or customary user) of the telephone number I've provided; my consent is not a condition of purchase; message and data rates may apply; I may revoke this consent at any time by replying "STOP" for texts or emailing support@fairwreck.com for calls; see <a href="/privacy" target="_blank">Privacy Policy</a> and <a href="/terms" target="_blank">Terms & Conditions</a>.`,
  es: `Al marcar esta casilla, doy mi consentimiento para recibir llamadas de marketing, mensajes de texto y correos electrónicos de Fair Wreck en la información de contacto que he proporcionado, utilizando sistemas de marcación automática, mensajes pregrabados y tecnologías de voz artificial. Certifico que soy el suscriptor (o usuario habitual) del número de teléfono que he proporcionado; mi consentimiento no es una condición de compra; pueden aplicarse tarifas de mensajes y datos; puedo revocar este consentimiento en cualquier momento respondiendo "STOP" a los mensajes de texto o enviando un correo electrónico a support@fairwreck.com para llamadas; consulte la <a href="/privacy" target="_blank">Política de Privacidad</a> y los <a href="/terms" target="_blank">Términos y Condiciones</a>.`
};

// API URL configuration
const getApiUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    // Check if we're on the main domain
    if (window.location.hostname === 'fairwreck.com') {
      return 'https://fairwreck.com/api/submit';
    }
    // Otherwise use the Vercel deployment URL
    return 'https://fairwreck-8qqu2lmmk-bbarnes4318s-projects.vercel.app/api/submit';
  }
  // Development URL - use the same hostname as the frontend
  const port = window.location.port === '5173' ? '8001' : window.location.port;
  return `http://${window.location.hostname}:${port}/api/submit`;
};

const Contact = () => {
  const { t, language } = useContext(LanguageContext);
  const [form, setForm] = useState({ name: '', email: '', phone: '', case: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [trustedFormLoaded, setTrustedFormLoaded] = useState(false);
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
      
      // Add error handling for script loading
      tf.onerror = () => {
        console.error('Failed to load TrustedForm script');
        setTrustedFormLoaded(false);
      };
      
      tf.onload = () => {
        console.log('TrustedForm script loaded successfully');
        setTrustedFormLoaded(true);
      };
      
      document.body.appendChild(tf);
      window._trustedformScriptLoaded = true;
    } else {
      setTrustedFormLoaded(true);
    }
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitted(false);
    setIsSubmitting(true);
    
    // Get TrustedForm cert URL from hidden field
    const tfUrl = formRef.current ? formRef.current["xxTrustedFormCertUrl"]?.value : '';
    const tcpaconsent = formRef.current ? formRef.current["tcpaconsent"]?.checked : false;
    
    // Verify TrustedForm is loaded and certificate is present
    if (!trustedFormLoaded) {
      alert('Please wait for the form to fully load before submitting.');
      setIsSubmitting(false);
      return;
    }

    if (!tfUrl) {
      alert('Unable to generate form certificate. Please refresh the page and try again.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const response = await fetch(getApiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, xxTrustedFormCertUrl: tfUrl, tcpaconsent })
      });
      
      if (response.ok) {
        setSubmitted(true);
        // Clear form after successful submission
        setForm({ name: '', email: '', phone: '', case: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      alert(err.message || 'Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t('contact.name')} style={{ border: '1.5px solid #cfd8dc', borderRadius: 10, padding: '0.9rem 1.2rem', fontSize: '1.08rem', marginBottom: 10 }} />
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t('contact.email')} style={{ border: '1.5px solid #cfd8dc', borderRadius: 10, padding: '0.9rem 1.2rem', fontSize: '1.08rem', marginBottom: 10 }} />
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t('contact.phone')} style={{ border: '1.5px solid #cfd8dc', borderRadius: 10, padding: '0.9rem 1.2rem', fontSize: '1.08rem', marginBottom: 10 }} />
          <textarea name="case" value={form.case} onChange={handleChange} placeholder={t('contact.case')} style={{ border: '1.5px solid #cfd8dc', borderRadius: 10, padding: '0.9rem 1.2rem', fontSize: '1.08rem', minHeight: 90, marginBottom: 10, resize: 'vertical' }} />
          {/* TrustedForm Consent Checkbox */}
          <label style={{ display: 'block', margin: '1.2rem 0 0.7rem 0', fontSize: '0.82rem', color: '#1a2236', fontWeight: 400, lineHeight: 1.3 }}>
            <input type="checkbox" name="tcpaconsent" required style={{ marginRight: 8, accentColor: '#2563eb' }} />
            <span dangerouslySetInnerHTML={{ __html: consentText[language] }} />
          </label>
          {/* TrustedForm hidden field will be injected by SDK */}
          <input type="hidden" name="xxTrustedFormCertUrl" />
          <button 
            type="submit" 
            disabled={isSubmitting || !trustedFormLoaded}
            style={{ 
              background: isSubmitting || !trustedFormLoaded ? '#94a3b8' : 'linear-gradient(90deg, #2563eb 0%, #22c55e 100%)',
              color: '#fff', 
              fontWeight: 900, 
              fontSize: '1.15rem', 
              borderRadius: 999, 
              padding: '1rem 0', 
              border: 'none', 
              marginTop: 8, 
              boxShadow: '0 4px 18px 0 rgba(37,99,235,0.13)', 
              letterSpacing: 0.2, 
              width: '100%',
              cursor: isSubmitting || !trustedFormLoaded ? 'not-allowed' : 'pointer',
              transition: 'background 0.2s'
            }}
          >
            {isSubmitting ? 'Submitting...' : !trustedFormLoaded ? 'Loading...' : t('contact.button')}
          </button>
          {submitted && <div style={{ color: '#22c55e', marginTop: '1rem', fontWeight: 700 }}>{t('contact.thankyou') || 'Thank you for your submission!'}</div>}
        </form>
      </div>
    </section>
  );
};

export default Contact; 