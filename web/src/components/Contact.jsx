const Contact = () => (
  <section className="contact-section">
    <div className="contact-card">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>Fill out the form and one of our consultation specialists will contact you within 24 hours.</p>
        <p>123 Elite Legal Suite 100<br />City, State 12345</p>
        <p>1-888-317-2922</p>
        <p>info@justicialegal.com</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Phone" />
        <textarea placeholder="Describe Your Case" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact; 