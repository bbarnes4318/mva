const Footer = () => (
  <footer className="footer-main" style={{ background: 'linear-gradient(90deg, #e3eafc 0%, #60a5fa 100%)' }}>
    <div className="footer-content">
      <div className="footer-logo"><img src="/fw-logo.png" alt="Fair Wreck Logo" className="footer-logo-img" /></div>
      <div className="footer-links">
        <div><strong>Quick Links</strong><br />
          <a href="#services">Services</a><br />
          <a href="#process">Process</a><br />
          <a href="#testimonials">Testimonials</a><br />
          <a href="#contact">Contact</a>
        </div>
        <div><strong>Hours</strong><br />Mon-Fri: 8am - 6pm<br />Sat: 9am - 1pm<br />Sun: Closed</div>
      </div>
    </div>
    <div className="footer-bottom">
      © 2023 Fair Wreck. All rights reserved.
    </div>
  </footer>
);

export default Footer; 