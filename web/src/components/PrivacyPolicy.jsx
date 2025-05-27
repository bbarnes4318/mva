import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => (
  <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e3eafc 60%, #f7fafc 100%)', padding: '3rem 0' }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 32 }}>
      <img src="/logo192.png" alt="Fair Wreck Logo" style={{ height: 60, marginBottom: 12 }} />
    </div>
    <div style={{ maxWidth: 750, margin: '0 auto', background: '#fff', borderRadius: 22, boxShadow: '0 8px 32px 0 rgba(37,99,235,0.10)', padding: '3.5rem 2.5rem', borderTop: '6px solid #2563eb', fontFamily: 'Inter, Arial, Helvetica, sans-serif', color: '#1a2236' }}>
      <h1 style={{ fontWeight: 900, fontSize: '2.5rem', marginBottom: '0.7rem', textAlign: 'center', color: '#1746a2', letterSpacing: '-1px' }}>Privacy Policy</h1>
      <div style={{ height: 3, width: 60, background: '#22c55e', borderRadius: 2, margin: '0 auto 2.2rem auto' }} />
      <p style={{ fontSize: '1.18rem', marginBottom: '2.2rem', textAlign: 'center', color: '#2563eb', fontWeight: 500 }}>
        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
      </p>
      <h2 style={{ fontWeight: 800, fontSize: '1.25rem', marginTop: '2.2rem', color: '#2563eb' }}>Information We Collect</h2>
      <ul style={{ marginLeft: 28, marginBottom: 18, fontSize: '1.08rem', lineHeight: 1.7 }}>
        <li>Personal information you provide (name, email, phone, etc.)</li>
        <li>Information collected automatically (IP address, browser type, device info)</li>
        <li>Information from cookies and similar technologies</li>
      </ul>
      <h2 style={{ fontWeight: 800, fontSize: '1.25rem', marginTop: '2.2rem', color: '#2563eb' }}>How We Use Your Information</h2>
      <ul style={{ marginLeft: 28, marginBottom: 18, fontSize: '1.08rem', lineHeight: 1.7 }}>
        <li>To provide and improve our services</li>
        <li>To communicate with you about your case or inquiry</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 style={{ fontWeight: 800, fontSize: '1.25rem', marginTop: '2.2rem', color: '#2563eb' }}>Information Sharing</h2>
      <ul style={{ marginLeft: 28, marginBottom: 18, fontSize: '1.08rem', lineHeight: 1.7 }}>
        <li>We do not sell your personal information</li>
        <li>We may share information with trusted partners to provide services</li>
        <li>We may disclose information if required by law</li>
      </ul>
      <h2 style={{ fontWeight: 800, fontSize: '1.25rem', marginTop: '2.2rem', color: '#2563eb' }}>Your Rights</h2>
      <ul style={{ marginLeft: 28, marginBottom: 18, fontSize: '1.08rem', lineHeight: 1.7 }}>
        <li>You may request access, correction, or deletion of your personal data</li>
        <li>You may opt out of marketing communications at any time</li>
      </ul>
      <h2 style={{ fontWeight: 800, fontSize: '1.25rem', marginTop: '2.2rem', color: '#2563eb' }}>Contact Us</h2>
      <p style={{ marginBottom: 0, fontSize: '1.08rem' }}>
        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@fairwreck.com" style={{ color: '#2563eb', textDecoration: 'underline' }}>support@fairwreck.com</a>.
      </p>
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <Link to="/" style={{ display: 'inline-block', background: 'linear-gradient(90deg, #2563eb 0%, #22c55e 100%)', color: '#fff', fontWeight: 700, fontSize: '1.08rem', borderRadius: 999, padding: '0.8rem 2.2rem', textDecoration: 'none', boxShadow: '0 2px 8px 0 rgba(37,99,235,0.10)', border: 'none', letterSpacing: 0.1, transition: 'background 0.2s, color 0.2s' }}>
          Back to Home
        </Link>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy; 