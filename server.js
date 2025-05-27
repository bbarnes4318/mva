const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const csvWriter = createObjectCsvWriter({
  path: 'submissions.csv',
  header: [
    { id: 'timestamp', title: 'Timestamp' },
    { id: 'name', title: 'Name' },
    { id: 'email', title: 'Email' },
    { id: 'phone', title: 'Phone' },
    { id: 'case', title: 'Case' },
    { id: 'xxTrustedFormCertUrl', title: 'TrustedFormCertUrl' },
    { id: 'tcpaconsent', title: 'TCPAConsent' }
  ],
  append: true
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/submit', async (req, res) => {
  try {
    const { name, email, phone, case: caseDesc, xxTrustedFormCertUrl, tcpaconsent } = req.body;
    const timestamp = new Date().toISOString();
    // Write to CSV
    await csvWriter.writeRecords([
      { timestamp, name, email, phone, case: caseDesc, xxTrustedFormCertUrl, tcpaconsent }
    ]);
    // Send email
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
        </ul>
        <p>Timestamp: ${timestamp}</p>`
    };
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 