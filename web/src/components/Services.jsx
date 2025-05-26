const Services = () => (
  <section className="services" id="services">
    <h2>How we can help you</h2>
    <div className="services-cards">
      <div className="service-card">
        <div className="service-icon" aria-hidden="true">💊</div>
        <h3>Medical Expenses</h3>
        <p>Current and future medical bills, rehabilitation costs, and any necessary medical equipment.</p>
      </div>
      <div className="service-card">
        <div className="service-icon" aria-hidden="true">💼</div>
        <h3>Lost Wages</h3>
        <p>Compensation for lost income due to time off work for your injuries and recovery.</p>
      </div>
      <div className="service-card">
        <div className="service-icon" aria-hidden="true">❤️</div>
        <h3>Pain and Suffering</h3>
        <p>Compensation for physical pain, emotional distress, and reduced quality of life.</p>
      </div>
    </div>
  </section>
);

export default Services; 