import { useState, useRef } from 'react';

const Eligibility = () => {
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
        100% Free & Confidential
      </div>
      <div style={{ color: '#2563eb', fontWeight: 800, fontSize: '1.18rem', marginBottom: 10, textAlign: 'center' }}>
        See if you qualify in 30 seconds
      </div>
      <form className="eligibility-form-card" onSubmit={handleSubmit} ref={formRef} id="eligibility-form" style={{ border: '2.5px solid #2563eb', boxShadow: '0 8px 32px 0 rgba(37,99,235,0.10)' }}>
        <h2 className="eligibility-form-title">Do you qualify for compensation?</h2>
        <div className="people-helped-stat" style={{ color: '#2563eb', fontWeight: 700 }}>
          <span style={{ color: '#22c55e', fontWeight: 900, fontSize: '1.15em' }}>2,000+</span> people helped this year
        </div>
        <div className="eligibility-form-subtitle">Fill out this quick form and our team will contact you for a free case review:</div>
        <div className="eligibility-form-fields">
          <input
            className="eligibility-form-field"
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="eligibility-form-field"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className="eligibility-form-field"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            className="eligibility-form-field"
            name="case"
            placeholder="Briefly describe your case"
            value={form.case}
            onChange={handleChange}
            rows={4}
            required
          />
        </div>
        <button className="eligibility-form-submit eligibility-green-cta" type="submit" style={{ background: '#22c55e', color: '#fff', fontWeight: 900, fontSize: '1.15rem', boxShadow: '0 6px 32px 0 rgba(34,197,94,0.18)', border: 'none' }}>
          Check My Eligibility
        </button>
        {submitted && <div style={{ color: '#22c55e', marginTop: '1rem', fontWeight: 700 }}>Thank you! We will contact you soon.</div>}
      </form>
      <div style={{ color: '#607d8b', fontSize: '0.98rem', marginTop: 12, textAlign: 'center' }}>
        We respect your privacy. Your info is never shared.
      </div>
      <button className="sticky-cta-btn" onClick={() => {
        const el = document.getElementById('eligibility-form');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }}>
        <span role="img" aria-label="Phone">📞</span> Get Free Case Review
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