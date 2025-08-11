const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const sgMail = require('@sendgrid/mail');

function ok(body) {
  return { status: 200, headers: corsHeaders(), body: JSON.stringify(body) };
}
function bad(msg, code=400) {
  return { status: code, headers: corsHeaders(), body: JSON.stringify({ error: msg }) };
}
function corsHeaders() {
  return {
    "Content-Type":"application/json",
    "Access-Control-Allow-Origin":"*",
    "Access-Control-Allow-Methods":"POST,OPTIONS",
    "Access-Control-Allow-Headers":"Content-Type"
  };
}

module.exports = async function (context, req) {
  if (req.method === 'OPTIONS') return ok({});

  try {
    const { name="", email="", phone="", message="" } = req.body || {};
    if (!name || !email || !message) return bad("Missing required fields: name, email, message");

    // SendGrid email
    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const SENDGRID_TO = process.env.SENDGRID_TO || "info@acbe.ae";
    const SENDGRID_FROM = process.env.SENDGRID_FROM || "no-reply@acbe.ae";
    if (SENDGRID_API_KEY) {
      sgMail.setApiKey(SENDGRID_API_KEY);
      await sgMail.send({
        to: SENDGRID_TO,
        from: SENDGRID_FROM,
        subject: `New inquiry from ${name}`,
        html: `
          <h3>New Website Inquiry</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Message:</b><br/>${(message||"").replace(/\n/g,"<br/>")}</p>
          <hr/>
          <p>Office: Office M73, Al Yalayis GTC, DIP 2, Dubai (Makani 19035 62882)</p>
        `
      });
    }

    // Telegram ping (optional)
    const TG_BOT_TOKEN = process.env.TG_BOT_TOKEN;
    const TG_CHAT_ID = process.env.TG_CHAT_ID; // your chat or channel id
    if (TG_BOT_TOKEN && TG_CHAT_ID) {
      const text = `🔔 New inquiry:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;
      await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify({ chat_id: TG_CHAT_ID, text })
      });
    }

    return ok({ success:true });
  } catch (e) {
    context.log("Contact error:", e);
    return bad("Server error", 500);
  }
}
