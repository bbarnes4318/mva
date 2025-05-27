import React from 'react';

const Terms = () => (
  <div style={{ maxWidth: 700, margin: '0 auto', padding: '3rem 1.5rem', fontFamily: 'Inter, Arial, Helvetica, sans-serif', color: '#1a2236', background: '#fff', borderRadius: 18, boxShadow: '0 4px 24px 0 rgba(60,72,88,0.10)' }}>
    <h1 style={{ fontWeight: 900, fontSize: '2.3rem', marginBottom: '1.5rem', textAlign: 'center' }}>Terms &amp; Conditions</h1>
    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center', color: '#2563eb' }}>
      Please read these terms and conditions carefully before using our website or services.
    </p>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>Acceptance of Terms</h2>
    <p>By accessing or using our site, you agree to be bound by these terms.</p>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>Use of Service</h2>
    <ul style={{ marginLeft: 24, marginBottom: 16 }}>
      <li>You agree to use the site only for lawful purposes</li>
      <li>You will not misuse or attempt to disrupt our services</li>
      <li>All information you provide must be accurate and truthful</li>
    </ul>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>Disclaimers</h2>
    <ul style={{ marginLeft: 24, marginBottom: 16 }}>
      <li>Information on this site is for general purposes only and not legal advice</li>
      <li>We do not guarantee the accuracy or completeness of information</li>
    </ul>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>Limitation of Liability</h2>
    <ul style={{ marginLeft: 24, marginBottom: 16 }}>
      <li>We are not liable for any damages arising from your use of the site</li>
      <li>Your use of the site is at your own risk</li>
    </ul>
    <h2 style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem' }}>Contact Us</h2>
    <p style={{ marginBottom: 0 }}>
      If you have any questions about these Terms &amp; Conditions, please contact us at <a href="mailto:support@fairwreck.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>support@fairwreck.com</a>.
    </p>
  </div>
);

export default Terms; 