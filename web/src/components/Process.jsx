import { useEffect, useRef, useContext } from "react";
import { LanguageContext } from '../language';

const Process = () => {
  const { t } = useContext(LanguageContext);
  const steps = [
    {
      number: 1,
      icon: '💬',
      title: t('process.step1'),
      desc: t('process.step1Desc')
    },
    {
      number: 2,
      icon: '🔎',
      title: t('process.step2'),
      desc: t('process.step2Desc')
    },
    {
      number: 3,
      icon: '🤝',
      title: t('process.step3'),
      desc: t('process.step3Desc')
    },
    {
      number: 4,
      icon: '🏆',
      title: t('process.step4'),
      desc: t('process.step4Desc')
    }
  ];

  return (
    <section className="process" id="process">
      <div style={{ background: '#22c55e', color: '#fff', fontWeight: 900, fontSize: '1.09rem', padding: '0.7rem 1.6rem', borderRadius: 999, boxShadow: '0 4px 18px 0 rgba(34,197,94,0.13)', letterSpacing: 0.2, textAlign: 'center', margin: '0 auto 2.7rem auto', maxWidth: 340, border: '2.5px solid #fff', borderBottom: '4px solid #16a34a' }}>
        {t('process.badge')}
      </div>
      <div className="process-horizontal" style={{ position: 'relative' }}>
        <div className="process-horizontal-connector"></div>
        {steps.map((step, idx) => (
          <div className="process-step-horizontal" key={step.number}>
            <div style={{ position: 'relative', width: 56, height: 56, margin: '0 auto 1rem auto' }}>
              <span style={{ position: 'absolute', top: -18, left: '50%', transform: 'translateX(-50%)', fontSize: 22, opacity: 0.85, zIndex: 2 }}>{step.icon}</span>
              <div className="process-step-number-horizontal" style={{ background: '#2563eb', color: '#fff', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.13)', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.7rem', fontWeight: 900, position: 'relative', zIndex: 1 }}>
                {step.number}
              </div>
            </div>
            <div className="process-step-title-horizontal">{step.title}</div>
            <div className="process-step-desc-horizontal">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process; 