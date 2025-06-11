const nodemailer = require('nodemailer');
require('dotenv').config();

// Function to get proxy based on phone area code
async function getProxyForPhone(phone) {
  try {
    const areaCode = phone.replace(/\D/g, '').substring(0, 3);
    const proxy_base_user = "b31f50d644ecaffc2993__cr.us";
    const proxy_user = `${proxy_base_user};zip.${areaCode}`;
    const proxy_password = "8cd531d71ea28e4f";
    const proxy_host = "gw.dataimpulse.com";
    const proxy_port = "823";
    
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

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://www.fairwreck.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Credentials': 'true',
};

module.exports = async (req, res) => {
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders
    });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  }

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
    
    return new Response(JSON.stringify({ success: true, proxyIP }), {
      status: 200,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.error('Error processing submission:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json'
      }
    });
  }
}; 