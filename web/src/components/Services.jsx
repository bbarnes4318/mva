import { useContext } from 'react';
import { LanguageContext } from '../language.jsx';

const Services = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="services" id="services">
      <h2>{t('services.title')}</h2>
      <div className="services-cards">
        <div className="service-card">
          <div className="service-icon" aria-hidden="true">💊</div>
          <h3>{t('services.medical')}</h3>
          <p>{t('services.medicalDesc')}</p>
        </div>
        <div className="service-card">
          <div className="service-icon" aria-hidden="true">💼</div>
          <h3>{t('services.wages')}</h3>
          <p>{t('services.wagesDesc')}</p>
        </div>
        <div className="service-card">
          <div className="service-icon" aria-hidden="true">❤️</div>
          <h3>{t('services.pain')}</h3>
          <p>{t('services.painDesc')}</p>
        </div>
      </div>
    </section>
  );
};

export default Services; 