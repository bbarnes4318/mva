import { useState } from 'react';

const testimonials = [
  {
    text: 'After the accident, I was confused and scared. JusticiaLegal helped me get the compensation I deserved.',
    name: 'James D.',
    location: 'Phoenix, AZ'
  },
  {
    text: 'I never thought it would turn out positive, but the team was amazing and kept me informed every step of the way.',
    name: 'Sarah M.',
    location: 'Atlanta, GA'
  },
  {
    text: 'The legal team kept giving me updates and fought for every dollar I deserved.',
    name: 'Thomas L.',
    location: 'Dallas, TX'
  }
];

function getInitials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase();
}

const Testimonials = () => (
  <section className="testimonials-section">
    <h2 className="testimonials-title">What our clients say</h2>
    <div className="testimonials-cards-row">
      {testimonials.map((t, idx) => (
        <div className="testimonial-card-v2" key={idx}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#e3eafc', color: '#2563eb', fontWeight: 900, fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{getInitials(t.name)}</div>
            <div>
              <div className="testimonial-name">{t.name}</div>
              <div className="testimonial-location">{t.location}</div>
              <div style={{ background: '#e3eafc', color: '#2563eb', fontWeight: 700, fontSize: '0.92rem', borderRadius: 8, padding: '0.18rem 0.7rem', display: 'inline-block', marginTop: 4 }}>Verified Client</div>
            </div>
          </div>
          <div className="testimonial-stars">{'★★★★★'}</div>
          <div className="testimonial-text">“{t.text}”</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 