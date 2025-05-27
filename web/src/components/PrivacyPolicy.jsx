import React, { useContext } from 'react';
import './PrivacyTerms.css';
import { LanguageContext } from '../language.jsx';

const content = {
  en: {
    title: 'Privacy Policy',
    intro: 'At Fair Wreck, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website. By using our site, you agree to the terms outlined below.',
    infoTitle: 'Information We Collect',
    info: [
      'Personal Information: We may collect information you provide directly, such as your name or case details, when you fill out forms on our site.',
      'Usage Data: We automatically collect certain information about your device and browsing activity, such as IP address, browser type, and pages visited.'
    ],
    useTitle: 'How We Use Information',
    use: [
      'To provide and improve our services',
      'To respond to your inquiries',
      'To analyze site usage and enhance user experience',
      'To comply with legal obligations'
    ],
    cookiesTitle: 'Cookies',
    cookies: 'We use cookies and similar technologies to enhance your experience, analyze usage, and deliver relevant content. You can control cookies through your browser settings.',
    thirdTitle: 'Third-Party Links',
    third: 'Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of those sites.',
    securityTitle: 'Data Security',
    security: 'We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.',
    childrenTitle: `Children's Privacy`,
    children: 'Our services are not directed to children under 13. We do not knowingly collect personal information from children.',
    changesTitle: 'Changes to This Policy',
    changes: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.',
    rightsTitle: 'Your Rights',
    rights: 'You may have rights regarding your personal information under applicable law. To exercise these rights, please contact us through our website.',
    effective: 'Effective Date: June 2024',
    toggle: 'ES'
  },
  es: {
    title: 'Política de Privacidad',
    intro: 'En Fair Wreck, estamos comprometidos a proteger su privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos su información cuando visita nuestro sitio web. Al usar nuestro sitio, usted acepta los términos descritos a continuación.',
    infoTitle: 'Información que Recopilamos',
    info: [
      'Información Personal: Podemos recopilar información que usted proporciona directamente, como su nombre o detalles del caso, cuando completa formularios en nuestro sitio.',
      'Datos de Uso: Recopilamos automáticamente cierta información sobre su dispositivo y actividad de navegación, como dirección IP, tipo de navegador y páginas visitadas.'
    ],
    useTitle: 'Cómo Usamos la Información',
    use: [
      'Para proporcionar y mejorar nuestros servicios',
      'Para responder a sus consultas',
      'Para analizar el uso del sitio y mejorar la experiencia del usuario',
      'Para cumplir con obligaciones legales'
    ],
    cookiesTitle: 'Cookies',
    cookies: 'Utilizamos cookies y tecnologías similares para mejorar su experiencia, analizar el uso y ofrecer contenido relevante. Puede controlar las cookies a través de la configuración de su navegador.',
    thirdTitle: 'Enlaces de Terceros',
    third: 'Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad o el contenido de esos sitios.',
    securityTitle: 'Seguridad de los Datos',
    security: 'Implementamos medidas de seguridad razonables para proteger su información. Sin embargo, ningún método de transmisión por Internet es 100% seguro.',
    childrenTitle: 'Privacidad de los Niños',
    children: 'Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos intencionadamente información personal de niños.',
    changesTitle: 'Cambios en Esta Política',
    changes: 'Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios se publicarán en esta página con una fecha de vigencia actualizada.',
    rightsTitle: 'Sus Derechos',
    rights: 'Usted puede tener derechos sobre su información personal según la ley aplicable. Para ejercer estos derechos, contáctenos a través de nuestro sitio web.',
    effective: 'Fecha de Vigencia: Junio 2024',
    toggle: 'EN'
  }
};

const PrivacyPolicy = () => {
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
          <h2>{t.infoTitle}</h2>
          <p>{t.intro}</p>
          <ul>
            {t.info.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <h2>{t.useTitle}</h2>
          <ul>
            {t.use.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <h2>{t.cookiesTitle}</h2>
          <p>{t.cookies}</p>
          <h2>{t.thirdTitle}</h2>
          <p>{t.third}</p>
          <h2>{t.securityTitle}</h2>
          <p>{t.security}</p>
          <h2>{t.childrenTitle}</h2>
          <p>{t.children}</p>
          <h2>{t.changesTitle}</h2>
          <p>{t.changes}</p>
          <h2>{t.rightsTitle}</h2>
          <p>{t.rights}</p>
          <div className="legal-footer">{t.effective}</div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 