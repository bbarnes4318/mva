// Required image files for hero and trust badges:
// Place these in your public/ directory:
// - public/hero-justice.png (main hero illustration)
// - public/badge-bbb.png (BBB Accredited badge)
// - public/badge-google.png (Google 5-Star badge)
// - public/badge-avvo.png (Avvo Rating badge)

const badgeStyle = {
  fontWeight: 800,
  fontSize: '1.01rem',
  padding: '0.65rem 1.7rem',
  borderRadius: 999,
  boxShadow: '0 2px 8px 0 rgba(37,99,235,0.13)',
  letterSpacing: 0.2,
  textAlign: 'center',
  minWidth: 120,
  maxWidth: 220,
  whiteSpace: 'nowrap',
  display: 'inline-block',
  border: '2.5px solid #fff',
  marginRight: 18,
  marginBottom: 0,
  background: 'linear-gradient(90deg, #2563eb 60%, #00eaff 100%)',
  color: '#fff',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const Hero = () => (
  <div className="hero-bg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4.5rem 1.5rem 0 1.5rem', minHeight: 600, width: '100vw', background: 'linear-gradient(120deg, #2563eb 0%, #00eaff 100%)', fontFamily: 'Inter, Arial, Helvetica, sans-serif' }}>
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      maxWidth: 1100,
      width: '100%',
      margin: '0 auto',
      gap: 48,
      flexWrap: 'wrap',
    }}>
      <div style={{ flex: 1, minWidth: 320, maxWidth: 600 }}>
        <div style={{ display: 'flex', gap: 20, marginBottom: 38, flexWrap: 'nowrap' }}>
          <div style={{ fontWeight: 800, fontSize: '1.01rem', padding: '0.65rem 1.7rem', borderRadius: 999, boxShadow: '0 2px 8px 0 rgba(37,99,235,0.18)', letterSpacing: 0.2, textAlign: 'center', minWidth: 120, maxWidth: 220, whiteSpace: 'nowrap', display: 'inline-block', border: '2.5px solid #fff', marginRight: 18, marginBottom: 0, background: 'linear-gradient(90deg, #2563eb 0%, #00eaff 100%)', color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            100% Free Consultation
          </div>
          <div style={{ fontWeight: 800, fontSize: '1.01rem', padding: '0.65rem 1.7rem', borderRadius: 999, boxShadow: '0 2px 8px 0 rgba(34,197,94,0.18)', letterSpacing: 0.2, textAlign: 'center', minWidth: 120, maxWidth: 220, whiteSpace: 'nowrap', display: 'inline-block', border: '2.5px solid #fff', marginRight: 0, marginBottom: 0, background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)', color: '#fff', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Immediate Assistance Available
          </div>
        </div>
        <h1 className="hero-headline" style={{ fontSize: '3.2rem', fontWeight: 900, color: '#fff', marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: 1.08, textShadow: '0 2px 12px rgba(37,99,235,0.18)' }}>
          Injured in a car accident that wasn't your fault?
        </h1>
        <p className="hero-subheadline" style={{ fontSize: '1.25rem', color: '#e3eafc', fontWeight: 400, marginBottom: '2.7rem', letterSpacing: 0.1, maxWidth: 600 }}>
          You may be entitled to compensation for medical expenses, lost wages, and pain and suffering. Let us fight for the justice you deserve.
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginBottom: 18, flexWrap: 'wrap' }}>
          <button className="cta-main-big hero-green-cta" style={{ fontSize: '1.35rem', padding: '1.3rem 3rem', background: '#22c55e', color: '#fff', boxShadow: '0 6px 32px 0 rgba(34,197,94,0.18)', border: 'none' }}>
            Get Your Free Case Review
          </button>
          <a href="tel:18883172922" style={{ background: '#2563eb', color: '#fff', fontWeight: 900, fontSize: '1.05rem', borderRadius: 999, padding: '0.8rem 1.5rem', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.13)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, border: '2px solid #2563eb' }}>
            <span role="img" aria-label="Phone">📞</span> 1-888-317-2922
          </a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 18, marginBottom: 32 }}>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px 0 rgba(37,99,235,0.10)', border: '1.5px solid #e3eafc', padding: '1.1rem 2rem', display: 'flex', alignItems: 'center', gap: 36, marginBottom: 18, justifyContent: 'center', minHeight: 64 }}>
            <img className="trust-badge" src="/badge-bbb.png" alt="BBB Accredited" style={{ height: 44, width: 'auto', display: 'block' }} />
            <img className="trust-badge" src="/badge-google.png" alt="Google 5-Star" style={{ height: 44, width: 'auto', display: 'block' }} />
            <img className="trust-badge" src="/badge-avvo.png" alt="Avvo Rating" style={{ height: 44, width: 'auto', display: 'block' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 6 }}>
            <span style={{ fontSize: '1.6rem', color: '#ffd600', letterSpacing: '-2px', lineHeight: 1 }}>
              {'★★★★★'}
            </span>
            <span style={{ fontWeight: 900, fontSize: '1.18rem', color: '#1746a2', marginLeft: 6 }}>
              100+ 5-star reviews
            </span>
          </div>
        </div>
      </div>
      <img className="hero-image" src="/hero-justice.png" alt="Justice Illustration" style={{ maxWidth: 340, width: '100%', minWidth: 180, flex: 1, margin: '0 auto', objectFit: 'contain', borderRadius: 18, boxShadow: '0 8px 32px 0 rgba(25,99,235,0.10)' }} />
    </div>
    <style>{`
      .hero-green-cta:hover {
        transform: scale(1.04);
        background: #16a34a;
        box-shadow: 0 10px 36px 0 rgba(34,197,94,0.22);
      }
      body, html, .hero-bg, .footer-main, .navbar, .cta-section {
        font-family: 'Inter', Arial, Helvetica, sans-serif !important;
      }
      @media (max-width: 900px) {
        .hero-bg > div {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 32px !important;
        }
        .hero-image {
          margin-left: 0 !important;
          margin-top: 2.5rem !important;
          max-width: 98vw !important;
        }
        .hero-bg .hero-badges-row {
          justify-content: center !important;
        }
      }
    `}</style>
  </div>
);

export default Hero; 