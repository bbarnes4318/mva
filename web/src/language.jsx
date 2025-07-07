import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    navbar: {
      services: 'Services',
      process: 'Process',
      testimonials: 'Testimonials',
      freeConsult: 'Free Consultation',
    },
    hero: {
      badge1: '100% Free Consultation',
      badge2: 'Immediate Assistance Available',
      headline: `Injured in a car accident that wasn't your fault?`,
      subheadline: 'You may be entitled to compensation for medical expenses, lost wages, and pain and suffering. Let us fight for the justice you deserve.',
      cta: 'Get Your Free Case Review',
      phone: '1-888-317-2922',
      reviews: '100+ 5-Star Reviews',
    },
    services: {
      title: 'How we can help you',
      medical: 'Medical Expenses',
      medicalDesc: 'Current and future medical bills, rehabilitation costs, and any necessary medical equipment.',
      wages: 'Lost Wages',
      wagesDesc: 'Compensation for lost income due to time off work for your injuries and recovery.',
      pain: 'Pain and Suffering',
      painDesc: 'Compensation for physical pain, emotional distress, and reduced quality of life.',
    },
    process: {
      badge: 'No Win, No Fee Guarantee',
      step1: 'Free Consultation',
      step1Desc: 'We review your case details and determine if you have a valid claim.',
      step2: 'Investigation',
      step2Desc: 'We gather evidence, interview witnesses, and build a strong case.',
      step3: 'Negotiation',
      step3Desc: 'We negotiate with insurance companies to maximize your compensation.',
      step4: 'Resolution',
      step4Desc: 'We resolve your case through settlement or trial as needed.',
    },
    testimonials: {
      title: 'What our clients say',
      verified: 'Verified Client',
    },
    cta: {
      badge: 'No Win, No Fee. 100% Free.',
      title: 'Ready to get the compensation you deserve?',
      desc: 'Take the first step toward justice. Our team is ready to fight for you—no fees unless we win your case.',
      button: 'Start My Free Case Review',
    },
    contact: {
      title: 'Contact Us',
      desc: 'Have questions? Our team is here to help you 7 days a week.',
      button: 'Send Message',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      case: 'Describe Your Case',
    },
    eligibility: {
      badge: '100% Free & Confidential',
      subtitle: 'See if you qualify in 30 seconds',
      title: 'Do you qualify for compensation?',
      helped: 'people helped this year',
      formSubtitle: 'Fill out this quick form and our team will contact you for a free case review:',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      case: 'Briefly describe your case',
      button: 'Check My Eligibility',
      thankyou: 'Thank you! We will contact you soon.',
      privacy: 'We respect your privacy. Your info is never shared.',
      sticky: 'Get Free Case Review',
    },
    footer: {
      quick: 'Quick Links',
      services: 'Services',
      process: 'Process',
      testimonials: 'Testimonials',
      contact: 'Contact',
      hours: 'Hours',
      monfri: 'Mon-Fri: 8am - 6pm',
      sat: 'Sat: 9am - 1pm',
      sun: 'Sun: Closed',
      copyright: '© 2023 Fair Wreck. All rights reserved.'
    }
  },
  es: {
    navbar: {
      services: 'Servicios',
      process: 'Proceso',
      testimonials: 'Testimonios',
      freeConsult: 'Consulta Gratis',
    },
    hero: {
      badge1: 'Consulta 100% Gratis',
      badge2: 'Asistencia Inmediata Disponible',
      headline: '¿Lesionado en un accidente de auto que no fue su culpa?',
      subheadline: 'Usted puede tener derecho a una compensación por gastos médicos, salarios perdidos y dolor y sufrimiento. Permítanos luchar por la justicia que usted merece.',
      cta: 'Obtenga su revisión de caso gratis',
      phone: '1-888-317-2922',
      reviews: '100+ Reseñas de 5 Estrellas',
    },
    services: {
      title: 'Cómo podemos ayudarle',
      medical: 'Gastos Médicos',
      medicalDesc: 'Facturas médicas actuales y futuras, costos de rehabilitación y cualquier equipo médico necesario.',
      wages: 'Salarios Perdidos',
      wagesDesc: 'Compensación por ingresos perdidos debido a tiempo fuera del trabajo por sus lesiones y recuperación.',
      pain: 'Dolor y Sufrimiento',
      painDesc: 'Compensación por dolor físico, angustia emocional y calidad de vida reducida.',
    },
    process: {
      badge: 'Garantía de No Cobro si No Ganamos',
      step1: 'Consulta Gratis',
      step1Desc: 'Revisamos los detalles de su caso y determinamos si tiene un reclamo válido.',
      step2: 'Investigación',
      step2Desc: 'Recopilamos evidencia, entrevistamos testigos y construimos un caso sólido.',
      step3: 'Negociación',
      step3Desc: 'Negociamos con las aseguradoras para maximizar su compensación.',
      step4: 'Resolución',
      step4Desc: 'Resolvemos su caso mediante acuerdo o juicio según sea necesario.',
    },
    testimonials: {
      title: 'Lo que dicen nuestros clientes',
      verified: 'Cliente Verificado',
    },
    cta: {
      badge: 'Sin Ganar, No Hay Honorarios. 100% Gratis.',
      title: '¿Listo para obtener la compensación que merece?',
      desc: 'Dé el primer paso hacia la justicia. Nuestro equipo está listo para luchar por usted—no hay honorarios a menos que ganemos su caso.',
      button: 'Comenzar mi revisión de caso gratis',
    },
    contact: {
      title: 'Contáctenos',
      desc: '¿Tiene preguntas? Nuestro equipo está aquí para ayudarle los 7 días de la semana.',
      button: 'Enviar Mensaje',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      case: 'Describa su caso',
    },
    eligibility: {
      badge: '100% Gratis y Confidencial',
      subtitle: 'Vea si califica en 30 segundos',
      title: '¿Califica para compensación?',
      helped: 'personas ayudadas este año',
      formSubtitle: 'Complete este formulario rápido y nuestro equipo lo contactará para una revisión de caso gratis:',
      name: 'Nombre Completo',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      case: 'Describa brevemente su caso',
      button: 'Verificar mi elegibilidad',
      thankyou: '¡Gracias! Nos pondremos en contacto pronto.',
      privacy: 'Respetamos su privacidad. Su información nunca se comparte.',
      sticky: 'Obtener revisión de caso gratis',
    },
    footer: {
      quick: 'Enlaces Rápidos',
      services: 'Servicios',
      process: 'Proceso',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      hours: 'Horario',
      monfri: 'Lun-Vie: 8am - 6pm',
      sat: 'Sáb: 9am - 1pm',
      sun: 'Dom: Cerrado',
      copyright: '© 2023 Fair Wreck. Todos los derechos reservados.'
    }
  }
};

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (let k of keys) value = value?.[k];
    return value || key;
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
} 