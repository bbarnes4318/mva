const Navbar = () => (
  <nav className="navbar">
    <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, width: '100%', margin: '0 auto', padding: '0 24px', minHeight: 0, height: 80}}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="/fw-logo.png" alt="Logo" style={{ height: 160, width: 'auto', display: 'block' }} />
      </div>
      <div className="navbar-links">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#testimonials">Testimonials</a>
        <a href="tel:18883172922" className="navbar-cta-phone" style={{ background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)', color: '#fff', fontWeight: 900, fontSize: '1.08rem', borderRadius: 999, padding: '0.7rem 1.7rem', boxShadow: '0 2px 8px 0 rgba(34,197,94,0.13)', border: 'none', marginLeft: 18, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="Phone">📞</span> Free Consultation
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar; 