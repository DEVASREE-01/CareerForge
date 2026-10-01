import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';

// Cached transporter for SMTP
let smtpTransporter = null;

function getSmtpTransporter() {
  if (smtpTransporter) return smtpTransporter;
  if (!process.env.SMTP_HOST) return null;

  smtpTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number.parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  return smtpTransporter;
}

/**
 * Returns configured email provider type
 * Preference order:
 * 1. Explicit EMAIL_PROVIDER env variable ('resend' | 'sendgrid' | 'smtp' | 'dev')
 * 2. Resend (Primary recommended production provider via RESEND_API_KEY)
 * 3. SendGrid (via SENDGRID_API_KEY)
 * 4. SMTP / Nodemailer (via SMTP_HOST)
 * 5. Development Logger fallback (local testing only)
 * @returns {'resend' | 'sendgrid' | 'smtp' | 'dev'}
 */
export function getEmailProvider() {
  if (process.env.EMAIL_PROVIDER) {
    const p = process.env.EMAIL_PROVIDER.toLowerCase().trim();
    if (['resend', 'sendgrid', 'smtp', 'dev'].includes(p)) return p;
  }
  if (process.env.RESEND_API_KEY) return 'resend';
  if (process.env.SENDGRID_API_KEY) return 'sendgrid';
  if (process.env.SMTP_HOST) return 'smtp';
  return 'dev';
}

/**
 * Sends an email using the active provider
 */
async function deliverEmail({ to, subject, html, text }) {
  const from = process.env.EMAIL_FROM || 'CareerForge <noreply@careerforge.dev>';
  const provider = getEmailProvider();

  if (provider === 'resend') {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ from, to, subject, html, text })
    });
    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(`Resend email delivery failed: ${errData.message || response.statusText}`);
    }
    const data = await response.json();
    return { success: true, provider: 'resend', messageId: data.id };
  }

  if (provider === 'sendgrid') {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: from.includes('<') ? from.match(/<([^>]+)>/)[1] : from, name: 'CareerForge' },
        subject,
        content: [
          ...(text ? [{ type: 'text/plain', value: text }] : []),
          { type: 'text/html', value: html }
        ]
      })
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`SendGrid delivery failed: ${errText || response.statusText}`);
    }
    return { success: true, provider: 'sendgrid' };
  }

  if (provider === 'smtp') {
    const transporter = getSmtpTransporter();
    const info = await transporter.sendMail({ from, to, subject, text, html });
    return { success: true, provider: 'smtp', messageId: info.messageId };
  }

  // Development Fallback Guard
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'Email delivery is not configured for production. Please configure RESEND_API_KEY (primary recommended provider), ' +
      'SENDGRID_API_KEY, or SMTP_HOST in your production environment variables. CareerForge will not silently drop emails in production.'
    );
  }

  // Development-Only Log Output
  const divider = '='.repeat(64);
  console.log(`\n${divider}`);
  console.log(`⚡ [CAREERFORGE DEV EMAIL SERVICE — LOCAL TESTING ONLY]`);
  console.log(`NOTICE: No real email transmitted to the internet.`);
  console.log(`To send live emails to inboxes, set RESEND_API_KEY in .env`);
  console.log(`Sender:  ${from} (must be verified in Resend/SendGrid/SMTP provider)`);
  console.log(`To:      ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Time:    ${new Date().toISOString()}`);
  console.log(`${divider}`);
  if (text) console.log(`Text body:\n${text}`);
  console.log(`${divider}\n`);

  // Save preview for inspection if desired
  try {
    const tmpDir = path.resolve(process.cwd(), '.system_email_preview');
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
    fs.writeFileSync(path.join(tmpDir, 'last_sent_email.html'), html, 'utf8');
  } catch (e) {
    // Ignore preview save errors
  }

  return { success: true, provider: 'dev-logger', devPreview: true };
}

/**
 * Creates the HTML email layout matching CareerForge dark aesthetic
 */
function createEmailTemplate({ title, preheader, contentHtml }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #071512; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f5f7fa; }
    .container { max-width: 580px; margin: 30px auto; background: #0b211c; border: 1px solid rgba(53, 208, 174, 0.25); border-radius: 16px; overflow: hidden; box-shadow: 0 16px 40px rgba(0,0,0,0.5); }
    .header { padding: 32px 36px 20px; background: linear-gradient(135deg, #091a16 0%, #071512 100%); border-bottom: 1px solid rgba(255,255,255,0.06); }
    .brand { font-size: 22px; font-weight: 800; color: #ffffff; text-decoration: none; display: inline-flex; align-items: center; letter-spacing: -0.5px; }
    .badge { display: inline-block; background: linear-gradient(135deg, #18a889, #35d0ae); color: #062017; font-size: 11px; font-weight: 800; padding: 5px 8px; border-radius: 6px; margin-right: 10px; }
    .content { padding: 36px; }
    h1 { font-size: 22px; font-weight: 700; color: #ffffff; margin: 0 0 16px; letter-spacing: -0.3px; }
    p { font-size: 14px; line-height: 1.65; color: #a7b5b0; margin: 0 0 20px; }
    .otp-box { margin: 28px 0; text-align: center; }
    .otp-code { display: inline-block; background: #071512; border: 2px solid #35d0ae; border-radius: 12px; color: #35d0ae; font-family: 'Courier New', Courier, monospace; font-size: 36px; font-weight: 800; letter-spacing: 12px; padding: 18px 28px; box-shadow: 0 0 24px rgba(53, 208, 174, 0.2); }
    .btn { display: inline-block; background: linear-gradient(135deg, #18a889, #35d0ae); color: #062017 !important; text-decoration: none; font-weight: 800; font-size: 14px; padding: 14px 28px; border-radius: 10px; box-shadow: 0 4px 16px rgba(24, 168, 137, 0.35); }
    .notice { background: rgba(255,255,255,0.03); border-left: 3px solid #35d0ae; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 24px 0 10px; font-size: 12px; color: #8bcabb; line-height: 1.5; }
    .footer { padding: 24px 36px; background: #071512; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; font-size: 11px; color: #71827d; }
  </style>
</head>
<body>
  <div style="display:none;font-size:1px;color:#071512;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    ${preheader}
  </div>
  <div class="container">
    <div class="header">
      <div class="brand"><span class="badge">CF</span>CareerForge</div>
    </div>
    <div class="content">
      ${contentHtml}
    </div>
    <div class="footer">
      <p style="margin:0 0 6px; color:#a7b5b0;">CareerForge — Placement Acceleration & Career Preparation SaaS</p>
      <p style="margin:0; font-size:11px;">Empowering your journey from practice to placement.</p>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Sends a real OTP verification email
 */
export async function sendVerificationEmail({ to, name, otp, expirationMinutes = 10 }) {
  const cleanName = name || 'there';
  const preheader = `Your CareerForge verification code is ${otp}. Valid for ${expirationMinutes} minutes.`;
  const contentHtml = `
    <h1>Verify your CareerForge account</h1>
    <p>Hi ${cleanName},</p>
    <p>Welcome to CareerForge! To complete your registration and unlock your personalized career preparation workspace, please verify your email address using the one-time code below:</p>
    
    <div class="otp-box">
      <div class="otp-code">${otp}</div>
    </div>

    <div class="notice">
      ⏱ <strong>Expires in ${expirationMinutes} minutes.</strong><br>
      This code is single-use and will expire shortly. For security, never share this code with anyone.
    </div>

    <p style="margin-top:24px; font-size:12px; color:#71827d;">
      If you did not request this verification code or create a CareerForge account, please disregard this email.
    </p>
  `;

  const text = `Hi ${cleanName},\n\nYour CareerForge verification code is: ${otp}\n\nThis code will expire in ${expirationMinutes} minutes.\n\nIf you did not create a CareerForge account, you can ignore this email.`;

  return deliverEmail({
    to,
    subject: `${otp} is your CareerForge verification code`,
    html: createEmailTemplate({ title: 'Verify your CareerForge account', preheader, contentHtml }),
    text
  });
}

/**
 * Sends a password reset email with secure token link
 */
export async function sendPasswordResetEmail({ to, name, resetUrl, resetToken, expirationMinutes = 15 }) {
  const cleanName = name || 'there';
  const preheader = `Reset your CareerForge password. Valid for ${expirationMinutes} minutes.`;
  const contentHtml = `
    <h1>Reset your password</h1>
    <p>Hi ${cleanName},</p>
    <p>We received a request to reset the password for your CareerForge account. Click the button below to choose a new, secure password:</p>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="${resetUrl}" class="btn" target="_blank">Reset Password ›</a>
    </div>

    <p style="font-size:12px; color:#a7b5b0;">
      Or copy and paste this link into your browser:<br>
      <a href="${resetUrl}" style="color:#35d0ae; word-break:break-all; font-size:11px;">${resetUrl}</a>
    </p>

    <div class="notice">
      ⏱ <strong>Link valid for ${expirationMinutes} minutes.</strong><br>
      This single-use link will expire in ${expirationMinutes} minutes. If you did not request this reset, your account remains completely secure and you can disregard this email.
    </div>
  `;

  const text = `Hi ${cleanName},\n\nReset your CareerForge password using the link below:\n${resetUrl}\n\nThis link is valid for ${expirationMinutes} minutes.\nIf you did not request a password reset, you can safely ignore this email.`;

  return deliverEmail({
    to,
    subject: 'Reset your CareerForge password',
    html: createEmailTemplate({ title: 'Reset your CareerForge password', preheader, contentHtml }),
    text
  });
}
