const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

// Function to get proxy based on phone area code
async function getProxyForPhone(phone) {
  try {
    const areaCode = phone.replace(/\D/g, '').substring(0, 3);
    const proxy_base_user = process.env.PROXY_BASE_USER;
    const proxy_user = `${proxy_base_user};zip.${areaCode}`;
    const proxy_password = process.env.PROXY_PASS;
    const proxy_host = process.env.PROXY_HOST;
    const proxy_port = process.env.PROXY_PORT;
    
    return {
      host: proxy_host,
      port: proxy_port,
      user: proxy_user,
      pass: proxy_password
    };
  } catch (error) {
    console.error('Error getting proxy:', error);
    return null;
  }
}

// CORS headers middleware
router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://www.fairwreck.com');
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Handle preflight
router.options('*', (req, res) => {
  res.status(204).end();
});

// Handle POST request
router.post('/submit', async (req, res) => {
  try {
    const { name, email, phone, case: caseDesc, xxTrustedFormCertUrl, tcpaconsent } = req.body;
    const timestamp = new Date().toISOString();
    
    // Get proxy IP based on phone area code
    const proxyDetails = await getProxyForPhone(phone);
    const proxyIP = proxyDetails ? `${proxyDetails.host}:${proxyDetails.port}` : 'No proxy available';
    
    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jimbosky35@gmail.com',
      subject: 'New Fair Wreck Lead',
      html: `<h2>New Lead Submission</h2>
        <ul>
          <li><b>Name:</b> ${name || ''}</li>
          <li><b>Email:</b> ${email || ''}</li>
          <li><b>Phone:</b> ${phone || ''}</li>
          <li><b>Case:</b> ${caseDesc || ''}</li>
          <li><b>TCPA Consent:</b> ${tcpaconsent ? 'Yes' : 'No'}</li>
          <li><b>TrustedForm Certificate URL:</b> <a href="${xxTrustedFormCertUrl || ''}">${xxTrustedFormCertUrl || ''}</a></li>
          <li><b>Proxy IP:</b> ${proxyIP}</li>
        </ul>
        <p>Timestamp: ${timestamp}</p>`
    };
    
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    
    res.json({ success: true, proxyIP });
  } catch (err) {
    console.error('Error processing submission:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router; 