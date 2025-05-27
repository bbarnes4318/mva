import React from 'react';

const PrivacyPolicy = () => (
  <div style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'Inter, Arial, Helvetica, sans-serif', color: '#1a2236', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(60,72,88,0.10)' }}>
    <h1 style={{ fontWeight: 900, fontSize: '2.3rem', marginBottom: '1.5rem', textAlign: 'center' }}>Privacy Policy</h1>
    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center', color: '#2563eb' }}>
      Your privacy is important to us. This policy explains how we collect, use, and protect your information.
    </p>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>Information We Collect</h2>
    <ul style={{ marginLeft: 24, marginBottom: 16 }}>
      <li>Personal information you provide (name, email, phone, etc.)</li>
      <li>Information collected automatically (IP address, browser type, device info)</li>
      <li>Information from cookies and similar technologies</li>
    </ul>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>How We Use Your Information</h2>
    <ul style={{ marginLeft: 24, marginBottom: 16 }}>
      <li>To provide and improve our services</li>
      <li>To communicate with you about your case or inquiry</li>
      <li>To comply with legal obligations</li>
    </ul>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>Information Sharing</h2>
    <ul style={{ marginLeft: 24, marginBottom: 16 }}>
      <li>We do not sell your personal information</li>
      <li>We may share information with trusted partners to provide services</li>
      <li>We may disclose information if required by law</li>
    </ul>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>Your Rights</h2>
    <ul style={{ marginLeft: 24, marginBottom: 16 }}>
      <li>You may request access, correction, or deletion of your personal data</li>
      <li>You may opt out of marketing communications at any time</li>
    </ul>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>Contact Us</h2>
    <p style={{ marginBottom: 0 }}>
      If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@fairwreck.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>support@fairwreck.com</a>.
    </p>
  </div>
);

export default PrivacyPolicy; 