# CareerForge Authentication & Security Setup Guide

This guide provides step-by-step instructions to configure, run, and deploy the production-quality CareerForge authentication system.

---

## Architecture Overview

```
New Candidate
  │
  ├─► Sign Up (Name, Email, Password)
  │     └─► Validates credentials & checks duplicates
  │     └─► Generates secure 6-digit OTP (crypto.randomInt)
  │     └─► Stores salted SHA-256 HMAC (never plain text)
  │     └─► Enforces 10-min expiry & 5-attempt limit
  │     └─► Sends branded HTML email via Resend / SendGrid / SMTP
  │
  ├─► Email Verification Screen
  │     └─► 6 individual digit input boxes (auto-advance, paste, backspace)
  │     └─► 60-second resend cooldown timer
  │     └─► User enters OTP from inbox
  │     └─► Backend verifies hash (crypto.timingSafeEqual)
  │     └─► Marks emailVerified = true, clears OTP hash
  │     └─► Issues 7-day JWT + HttpOnly Session Cookie
  │     └─► Navigates to /onboarding (or / if profile complete)
  │
  ├─► Sign In
  │     └─► Validates email/password against bcrypt hash
  │     └─► Checks emailVerified:
  │           ├─► If FALSE: Blocks login with 403, redirects to OTP screen
  │           └─► If TRUE: Authenticates, sets cookie, enters dashboard
  │
  ├─► Social Auth (Google / GitHub OAuth 2.0 / OIDC)
  │     └─► Real authorization code flow
  │     └─► Backend validates ID token / user info
  │     └─► Links to existing account if email matches (no duplicate users)
  │
  └─► Forgot / Reset Password
        └─► Generates 64-character single-use reset token
        └─► Hashes token with 15-min expiry
        └─► Dispatches branded reset link
        └─► Single-use invalidation after reset
        └─► Prevents account enumeration with uniform safe messages
```

---

## 1. MongoDB Setup

Ensure MongoDB is installed and running locally on port 27017, or obtain a connection string from MongoDB Atlas.

```bash
# Verify MongoDB is running locally
mongosh --eval "db.version()"
```

In `.env`:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/careerforge
```

---

## 2. Email Delivery Configuration (Resend — Recommended)

CareerForge uses **Resend** as its primary production email provider. It also natively supports **SendGrid** and **SMTP / Nodemailer**.

### Setting up Resend:
1. Create an account at [resend.com](https://resend.com).
2. Go to **API Keys** → Create API Key with full permissions.
3. In Resend, add and verify your sending domain (e.g. `careerforge.dev`), OR for testing without a domain, use Resend's default test sender: `onboarding@resend.dev` (note: test sender delivers only to the email registered with your Resend account).
4. In your `.env` file:
   ```env
   EMAIL_PROVIDER=resend
   RESEND_API_KEY=re_123456789_abcdef...
   EMAIL_FROM=CareerForge <noreply@careerforge.dev>
   ```

### Alternative: Custom SMTP / Nodemailer
If using AWS SES, Brevo, SendGrid SMTP, Mailgun, or Gmail:
```env
EMAIL_PROVIDER=smtp
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your_sendgrid_api_key
SMTP_SECURE=false
EMAIL_FROM=CareerForge <noreply@yourdomain.com>
```

### Development Mode (Zero-Config Testing):
If no `RESEND_API_KEY` or SMTP credentials are set in development (`NODE_ENV=development`), CareerForge logs the formatted verification email and OTP code directly to the server terminal with high-visibility ANSI boxes and saves a copy to `.system_email_preview/last_sent_email.html`.

> [!IMPORTANT]
> In production (`NODE_ENV=production`), CareerForge refuses to silently drop emails and will throw a configuration error if no provider key is present.

---

## 3. Google OAuth 2.0 / OpenID Connect Setup

1. Go to the [Google Cloud Console Credentials](https://console.cloud.google.com/apis/credentials).
2. Create an **OAuth 2.0 Client ID** (Application type: **Web application**).
3. Under **Authorized JavaScript origins**:
   - `http://localhost:5173`
   - `http://localhost:5000` (and your production domain)
4. Under **Authorized redirect URIs**, add BOTH:
   - `http://localhost:5173/api/auth/google/callback` (for Vite proxy)
   - `http://localhost:5000/api/auth/google/callback` (for direct backend)
   - `http://localhost:5173/auth?provider=google` (for frontend callback)
5. Copy your Client ID and Client Secret into `.env`:
   ```env
   GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=GOCSPX-your_client_secret
   GOOGLE_CALLBACK_URL=http://localhost:5173/api/auth/google/callback
   ```

---

## 4. GitHub OAuth 2.0 Setup

1. Go to [GitHub Developer Settings → OAuth Apps](https://github.com/settings/developers).
2. Click **New OAuth App**.
3. Fill in:
   - **Application name**: CareerForge
   - **Homepage URL**: `http://localhost:5173`
   - **Authorization callback URL**: `http://localhost:5173/api/auth/github/callback`
4. Click **Register application**, then generate a **Client Secret**.
5. In your `.env` file:
   ```env
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   GITHUB_CALLBACK_URL=http://localhost:5173/api/auth/github/callback
   ```

---

## 5. Running the Application Locally

```bash
# From the project root:
# 1. Install dependencies (if not already installed)
npm install
npm install --prefix server
npm install --prefix client

# 2. Run both Backend API and Frontend Client concurrently
npm run dev
```

- **Backend API**: `http://localhost:5000`
- **Frontend Client**: `http://localhost:5173`
- **Authentication Portal**: `http://localhost:5173/auth`

---

## 6. How to Test End-to-End Scenarios

### Automated Backend Tests:
```bash
cd server
node test_auth_real.js
```
Runs 11 automated test suites validating:
- Unverified registration & OTP hash creation in MongoDB
- Unverified login rejection with HTTP 403
- Incorrect OTP attempt limits and decrement counter
- 60s cooldown enforcement on resend
- Successful OTP verification & `emailVerified` flag
- Verified login returning JWT & HttpOnly cookie
- Protected route `/api/users/me` access
- Forgot password token generation & enumeration protection
- Google & GitHub OAuth readiness
- Session termination on logout

### Automated Frontend Proxy Tests:
```bash
cd server
node test_frontend_integration.js
```
Verifies full authentication lifecycle routed through the Vite reverse proxy (`http://localhost:5173/api/*`).

---

## 7. Common Troubleshooting

| Issue | Cause | Solution |
| :--- | :--- | :--- |
| `Email delivery is not configured for production` | `NODE_ENV=production` but missing email credentials | Add `RESEND_API_KEY` to your production environment variables. |
| Resend error: `domain is not verified` | Sending from a domain not yet verified in Resend | Use `onboarding@resend.dev` for test emails, or verify your DNS records in Resend domain settings. |
| Google OAuth: `redirect_uri_mismatch` | Configured redirect URI doesn't match Google Console | Add `http://localhost:5173/api/auth/google/callback` to Google Console Authorized Redirect URIs. |
| Rate limit 429 response | Rapid repeated requests | Wait for the cooldown window (default 5–15 min) or adjust `AUTH_RATE_LIMIT_*` variables in `.env`. |
| Login rejected with 403 | Account exists but is unverified | Enter the 6-digit OTP code received in email, or click "Resend code" on the verification screen. |
