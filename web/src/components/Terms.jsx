import React, { useContext } from 'react';
import './PrivacyTerms.css';
import { LanguageContext } from '../language.jsx';

const content = {
  en: {
    title: 'Terms & Conditions',
    acceptanceTitle: 'Acceptance of Terms',
    acceptance: 'By accessing or using the Fair Wreck website, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our site.',
    useTitle: 'Use of Site',
    use: [
      'You may use this site for lawful purposes only.',
      'You agree not to misuse the site or interfere with its operation.'
    ],
    ipTitle: 'Intellectual Property',
    ip: 'All content on this site, including text, graphics, logos, and images, is the property of Fair Wreck or its licensors and is protected by copyright and other laws.',
    adviceTitle: 'No Legal Advice',
    advice: 'The information on this site is for general informational purposes only and does not constitute legal advice. You should consult a qualified attorney for advice regarding your individual situation.',
    liabilityTitle: 'Limitation of Liability',
    liability: 'Fair Wreck is not liable for any damages arising from your use of this site or reliance on its content. Your use of the site is at your own risk.',
    indemnTitle: 'Indemnification',
    indemn: 'You agree to indemnify and hold harmless Fair Wreck and its affiliates from any claims, damages, or expenses arising from your use of the site or violation of these terms.',
    lawTitle: 'Governing Law',
    law: 'These Terms & Conditions are governed by the laws of the State of New Jersey, without regard to its conflict of law principles.',
    changesTitle: 'Changes to Terms',
    changes: 'We may update these Terms & Conditions at any time. Changes will be posted on this page with an updated effective date.',
    effective: 'Effective Date: June 2024',
    toggle: 'ES'
  },
  es: {
    title: 'Términos y Condiciones',
    acceptanceTitle: 'Aceptación de los Términos',
    acceptance: 'Al acceder o utilizar el sitio web de Fair Wreck, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo, por favor no utilice nuestro sitio.',
    useTitle: 'Uso del Sitio',
    use: [
      'Puede utilizar este sitio solo para fines legales.',
      'Usted acepta no hacer un uso indebido del sitio ni interferir con su funcionamiento.'
    ],
    ipTitle: 'Propiedad Intelectual',
    ip: 'Todo el contenido de este sitio, incluidos textos, gráficos, logotipos e imágenes, es propiedad de Fair Wreck o sus licenciantes y está protegido por derechos de autor y otras leyes.',
    adviceTitle: 'Sin Asesoramiento Legal',
    advice: 'La información en este sitio es solo para fines informativos generales y no constituye asesoramiento legal. Debe consultar a un abogado calificado para obtener asesoramiento sobre su situación individual.',
    liabilityTitle: 'Limitación de Responsabilidad',
    liability: 'Fair Wreck no es responsable de ningún daño que surja de su uso de este sitio o de la confianza en su contenido. El uso del sitio es bajo su propio riesgo.',
    indemnTitle: 'Indemnización',
    indemn: 'Usted acepta indemnizar y eximir de responsabilidad a Fair Wreck y sus afiliados de cualquier reclamo, daño o gasto que surja de su uso del sitio o violación de estos términos.',
    lawTitle: 'Ley Aplicable',
    law: 'Estos Términos y Condiciones se rigen por las leyes del Estado de Nueva Jersey, sin tener en cuenta sus principios de conflicto de leyes.',
    changesTitle: 'Cambios en los Términos',
    changes: 'Podemos actualizar estos Términos y Condiciones en cualquier momento. Los cambios se publicarán en esta página con una fecha de vigencia actualizada.',
    effective: 'Fecha de Vigencia: Junio 2024',
    toggle: 'EN'
  }
};

const Terms = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const t = content[language] || content.en;
  return (
    <div className="legal-bg">
      <div className="legal-container">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 8 }}>
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            style={{ fontWeight: 700, fontSize: '1.05rem', border: 'none', background: 'none', color: '#2563eb', cursor: 'pointer', padding: '0.4rem 1.1rem', borderRadius: 8, transition: 'background 0.2s' }}
            aria-label="Switch language"
          >
            {t.toggle}
          </button>
        </div>
        <h1 className="legal-title">{t.title}</h1>
        <div className="legal-card">
          <h2>{t.acceptanceTitle}</h2>
          <p>{t.acceptance}</p>
          <h2>{t.useTitle}</h2>
          <ul>
            {t.use.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <h2>{t.ipTitle}</h2>
          <p>{t.ip}</p>
          <h2>{t.adviceTitle}</h2>
          <p>{t.advice}</p>
          <h2>{t.liabilityTitle}</h2>
          <p>{t.liability}</p>
          <h2>{t.indemnTitle}</h2>
          <p>{t.indemn}</p>
          <h2>{t.lawTitle}</h2>
          <p>{t.law}</p>
          <h2>{t.changesTitle}</h2>
          <p>{t.changes}</p>
          <div className="legal-footer">{t.effective}</div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 