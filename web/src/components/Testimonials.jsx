import { useState, useContext } from 'react';
import { LanguageContext } from '../language';

const testimonials = [
  {
    text: {
      en: 'After the accident, I was confused and scared. JusticiaLegal helped me get the compensation I deserved.',
      es: 'Después del accidente, estaba confundido y asustado. JusticiaLegal me ayudó a obtener la compensación que merecía.'
    },
    name: 'James D.',
    location: 'Phoenix, AZ'
  },
  {
    text: {
      en: 'I never thought it would turn out positive, but the team was amazing and kept me informed every step of the way.',
      es: 'Nunca pensé que saldría bien, pero el equipo fue increíble y me mantuvo informado en cada paso.'
    },
    name: 'Sarah M.',
    location: 'Atlanta, GA'
  },
  {
    text: {
      en: 'The legal team kept giving me updates and fought for every dollar I deserved.',
      es: 'El equipo legal me mantuvo informado y luchó por cada dólar que merecía.'
    },
    name: 'Thomas L.',
    location: 'Dallas, TX'
  }
];

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase();
}

const Testimonials = () => {
  const { t, language } = useContext(LanguageContext);
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">{t('testimonials.title')}</h2>
      <div className="testimonials-cards-row">
        {testimonials.map((tst, idx) => (
          <div className="testimonial-card-v2" key={idx}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#e3eafc', color: '#2563eb', fontWeight: 900, fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{getInitials(tst.name)}</div>
              <div>
                <div className="testimonial-name">{tst.name}</div>
                <div className="testimonial-location">{tst.location}</div>
                <div style={{ background: '#e3eafc', color: '#2563eb', fontWeight: 700, fontSize: '0.92rem', borderRadius: 8, padding: '0.18rem 0.7rem', display: 'inline-block', marginTop: 4 }}>{t('testimonials.verified')}</div>
              </div>
            </div>
            <div className="testimonial-stars">{'★★★★★'}</div>
            <div className="testimonial-text">“{tst.text[language]}”</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 