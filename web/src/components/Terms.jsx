import React, { useContext, useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../language.jsx';

const content = {
  es: {
    title: 'Términos y Condiciones',
    intro: 'Lea estos términos y condiciones cuidadosamente antes de usar nuestro sitio web o servicios.',
    accept: 'Aceptación de los Términos',
    acceptText: 'Al acceder o utilizar nuestro sitio, usted acepta estar sujeto a estos términos.',
    use: 'Uso del Servicio',
    useList: [
      'Usted acepta usar el sitio solo para fines legales',
      'No hará un uso indebido ni intentará interrumpir nuestros servicios',
      'Toda la información que proporcione debe ser precisa y veraz'
    ],
    disclaim: 'Descargos de Responsabilidad',
    disclaimList: [
      'La información en este sitio es solo para fines generales y no constituye asesoramiento legal',
      'No garantizamos la exactitud o integridad de la información'
    ],
    limit: 'Limitación de Responsabilidad',
    limitList: [
      'No somos responsables de ningún daño que surja de su uso del sitio',
      'El uso del sitio es bajo su propio riesgo'
    ],
    contact: 'Contáctenos',
    contactText: 'Si tiene preguntas sobre estos Términos y Condiciones, contáctenos en',
    back: 'Volver al inicio',
    lang: 'EN'
  },
  en: {
    title: 'Terms & Conditions',
    intro: 'Please read these terms and conditions carefully before using our website or services.',
    accept: 'Acceptance of Terms',
    acceptText: 'By accessing or using our site, you agree to be bound by these terms.',
    use: 'Use of Service',
    useList: [
      'You agree to use the site only for lawful purposes',
      'You will not misuse or attempt to disrupt our services',
      'All information you provide must be accurate and truthful'
    ],
    disclaim: 'Disclaimers',
    disclaimList: [
      'Information on this site is for general purposes only and not legal advice',
      'We do not guarantee the accuracy or completeness of information'
    ],
    limit: 'Limitation of Liability',
    limitList: [
      'We are not liable for any damages arising from your use of the site',
      'Your use of the site is at your own risk'
    ],
    contact: 'Contact Us',
    contactText: 'If you have any questions about these Terms & Conditions, please contact us at',
    back: 'Back to Home',
    lang: 'ES'
  }
};

const Terms = () => {
  const { language } = useContext(LanguageContext);
  const [lang, setLang] = useState(language || 'es');
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
            {t.lang}
          </button>
        </div>
        <h1 style={{ fontWeight: 900, fontSize: '2.7rem', marginBottom: '1.5rem', textAlign: 'left', color: '#1746a2', letterSpacing: '-1px' }}>{t.title}</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2.2rem', color: '#2563eb', fontWeight: 500 }}>{t.intro}</p>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.accept}</h2>
        <p style={{ fontSize: '1.08rem', marginBottom: 22 }}>{t.acceptText}</p>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.use}</h2>
        <ul style={{ marginLeft: 28, marginBottom: 22, fontSize: '1.08rem', lineHeight: 1.8 }}>
          {t.useList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.disclaim}</h2>
        <ul style={{ marginLeft: 28, marginBottom: 22, fontSize: '1.08rem', lineHeight: 1.8 }}>
          {t.disclaimList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.limit}</h2>
        <ul style={{ marginLeft: 28, marginBottom: 22, fontSize: '1.08rem', lineHeight: 1.8 }}>
          {t.limitList.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginTop: '2.2rem', color: '#2563eb' }}>{t.contact}</h2>
        <p style={{ marginBottom: 0, fontSize: '1.08rem' }}>
          {t.contactText} <a href="mailto:support@fairwreck.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>support@fairwreck.com</a>.
        </p>
        <div style={{ marginTop: 40 }}>
          <Link to="/" style={{ display: 'inline-block', background: 'linear-gradient(90deg, #2563eb 0%, #22c55e 100%)', color: '#fff', fontWeight: 700, fontSize: '1.08rem', borderRadius: 999, padding: '0.8rem 2.2rem', textDecoration: 'none', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)', border: 'none', letterSpacing: 0.1, transition: 'background 0.2s, color 0.2s' }}>
            {lang === 'es' ? 'Volver al inicio' : 'Back to Home'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms; 