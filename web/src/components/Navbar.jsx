const Navbar = () => (
  <nav className="navbar">
    <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, width: '100%', margin: '0 auto', padding: '0 24px', minHeight: 0, height: 80}}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <img src="/fw-logo.png" alt="Logo" style={{ height: 60, width: 'auto', display: 'block' }} />
      </div>
      <div className="navbar-links">
        <a href="#services">Services</a>
        <a href="#process">Process</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact" className="cta">Free Consultation</a>
      </div>
    </div>
  </nav>
);

export default Navbar; 