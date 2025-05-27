import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../language.jsx';

const content = {
  es: {
    title: 'Política de Privacidad',
    intro: 'Su privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos su información.',
    collect: 'Información que Recopilamos',
    collectList: [
      'Información personal que usted proporciona (nombre, correo electrónico, teléfono, etc.)',
      'Información recopilada automáticamente (dirección IP, tipo de navegador, información del dispositivo)',
      'Información de cookies y tecnologías similares'
    ],
    use: 'Cómo Usamos Su Información',
    useList: [
      'Para proporcionar y mejorar nuestros servicios',
      'Para comunicarnos con usted sobre su caso o consulta',
      'Para cumplir con obligaciones legales'
    ],
    share: 'Compartir Información',
    shareList: [
      'No vendemos su información personal',
      'Podemos compartir información con socios de confianza para brindar servicios',
      'Podemos divulgar información si la ley lo requiere'
    ],
    rights: 'Sus Derechos',
    rightsList: [
      'Puede solicitar acceso, corrección o eliminación de sus datos personales',
      'Puede optar por no recibir comunicaciones de marketing en cualquier momento'
    ],
    contact: 'Contáctenos',
    contactText: 'Si tiene preguntas sobre esta Política de Privacidad, contáctenos en',
    back: 'Volver al inicio',
    toggle: 'EN'
  },
  en: {
    title: 'Privacy Policy',
    intro: 'Your privacy is important to us. This policy explains how we collect, use, and protect your information.',
    collect: 'Information We Collect',
    collectList: [
      'Personal information you provide (name, email, phone, etc.)',
      'Information collected automatically (IP address, browser type, device info)',
      'Information from cookies and similar technologies'
    ],
    use: 'How We Use Your Information',
    useList: [
      'To provide and improve our services',
      'To communicate with you about your case or inquiry',
      'To comply with legal obligations'
    ],
    share: 'Information Sharing',
    shareList: [
      'We do not sell your personal information',
      'We may share information with trusted partners to provide services',
      'We may disclose information if required by law'
    ],
    rights: 'Your Rights',
    rightsList: [
      'You may request access, correction, or deletion of your personal data',
      'You may opt out of marketing communications at any time'
    ],
    contact: 'Contact Us',
    contactText: 'If you have any questions about this Privacy Policy, please contact us at',
    back: 'Back to Home',
    toggle: 'ES'
  }
};

const PrivacyPolicy = () => {
  const { language } = useContext(LanguageContext);
  const [lang, setLang] = useState(language);
  const t = content[lang];

  return (
    <div style={{ minHeight: '100vh', background: '#f7fafc' }}>
      <Navbar />
      <div style={{ maxWidth: 1300, margin: '0 auto', padding: '4rem 2rem', fontFamily: 'Inter, Arial, Helvetica, sans-serif', color: '#1a2236' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            style={{ fontWeight: 700, fontSize: '1.05rem', border: 'none', background: 'none', color: '#2563eb', cursor: 'pointer', padding: '0.4rem 1.1rem', borderRadius: 8, transition: 'background 0.2s' }}
            aria-label="Switch language"
          >
            {t.toggle}
          </button>
        </div>
        <h1 style={{ fontWeight: 900, fontSize: '2.7rem', marginBottom: '1.5rem', textAlign: 'left', color: '#1746a2', letterSpacing: '-1px' }}>{t.title}</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2.2rem', color: '#2563eb', fontWeight: 500 }}>{t.intro}</p>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.collect}</h2>
        <ul style={{ marginLeft: 28, marginBottom: 22, fontSize: '1.08rem', lineHeight: 1.8 }}>
          {t.collectList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.use}</h2>
        <ul style={{ marginLeft: 28, marginBottom: 22, fontSize: '1.08rem', lineHeight: 1.8 }}>
          {t.useList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.share}</h2>
        <ul style={{ marginLeft: 28, marginBottom: 22, fontSize: '1.08rem', lineHeight: 1.8 }}>
          {t.shareList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.rights}</h2>
        <ul style={{ marginLeft: 28, marginBottom: 22, fontSize: '1.08rem', lineHeight: 1.8 }}>
          {t.rightsList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.contact}</h2>
        <p style={{ marginBottom: 0, fontSize: '1.08rem' }}>
          {t.contactText} <a href="mailto:support@fairwreck.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>support@fairwreck.com</a>.
        </p>
        <div style={{ marginTop: 40 }}>
          <Link to="/" style={{ display: 'inline-block', background: 'linear-gradient(90deg, #2563eb 0%, #22c55e 100%)', color: '#fff', fontWeight: 700, fontSize: '1.08rem', borderRadius: 999, padding: '0.8rem 2.2rem', textDecoration: 'none', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)', border: 'none', letterSpacing: 0.1, transition: 'background 0.2s, color 0.2s' }}>
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 