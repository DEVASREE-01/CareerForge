/**
 * OAuth Service for Google & GitHub OAuth 2.0 / OpenID Connect
 */

export function isGoogleConfigured() {
  return Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
}

export function isGitHubConfigured() {
  return Boolean(process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET);
}

/**
 * Returns Google OAuth 2.0 authorization URL
 */
export function getGoogleAuthUrl(state = '', redirectUriOverride = null) {
  if (!isGoogleConfigured()) {
    return { configured: false, error: 'Google OAuth is not configured. Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in .env' };
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const redirectUri = redirectUriOverride || process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5173/auth?provider=google';
  const scope = encodeURIComponent('openid email profile');
  const encodedState = encodeURIComponent(state);

  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&state=${encodedState}&access_type=offline&prompt=select_account`;
  return { configured: true, url, redirectUri };
}

/**
 * Exchanges Google authorization code for verified user profile
 */
export async function exchangeGoogleCode(code, redirectUriOverride) {
  if (!isGoogleConfigured()) {
    throw new Error('Google OAuth credentials not configured');
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = redirectUriOverride || process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5173/auth?provider=google';

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code'
    })
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok || !tokenData.access_token) {
    throw new Error(`Google token exchange failed: ${tokenData.error_description || tokenData.error || 'Unknown error'}`);
  }

  // Fetch verified user profile using access token
  const profileRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` }
  });

  const profile = await profileRes.json();
  if (!profileRes.ok || !profile.email) {
    throw new Error('Failed to retrieve verified Google profile');
  }

  return {
    email: profile.email.toLowerCase().trim(),
    name: profile.name || profile.email.split('@')[0],
    providerId: profile.sub,
    picture: profile.picture,
    emailVerified: Boolean(profile.email_verified)
  };
}

/**
 * Returns GitHub OAuth authorization URL
 */
export function getGitHubAuthUrl(state = '', redirectUriOverride = null) {
  if (!isGitHubConfigured()) {
    return { configured: false, error: 'GitHub OAuth is not configured. Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET in .env' };
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const redirectUri = redirectUriOverride || process.env.GITHUB_CALLBACK_URL || 'http://localhost:5173/auth?provider=github';
  const scope = encodeURIComponent('read:user user:email');
  const encodedState = encodeURIComponent(state);

  const url = `https://github.com/login/oauth/authorize?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&state=${encodedState}`;
  return { configured: true, url, redirectUri };
}

/**
 * Exchanges GitHub authorization code for verified user profile
 */
export async function exchangeGitHubCode(code, redirectUriOverride) {
  if (!isGitHubConfigured()) {
    throw new Error('GitHub OAuth credentials not configured');
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  const redirectUri = redirectUriOverride || process.env.GITHUB_CALLBACK_URL || 'http://localhost:5173/auth?provider=github';

  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri
    })
  });

  const tokenData = await tokenRes.json();
  if (!tokenRes.ok || !tokenData.access_token) {
    throw new Error(`GitHub token exchange failed: ${tokenData.error_description || tokenData.error || 'Unknown error'}`);
  }

  const accessToken = tokenData.access_token;

  // Fetch GitHub User
  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'User-Agent': 'CareerForge-Auth'
    }
  });
  const userData = await userRes.json();

  // Fetch verified emails
  const emailsRes = await fetch('https://api.github.com/user/emails', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'User-Agent': 'CareerForge-Auth'
    }
  });
  const emailsData = await emailsRes.json();

  let primaryEmail = null;
  if (Array.isArray(emailsData)) {
    const primary = emailsData.find(e => e.primary && e.verified) || emailsData.find(e => e.verified) || emailsData[0];
    if (primary) primaryEmail = primary.email;
  }

  const email = (primaryEmail || userData.email || '').toLowerCase().trim();
  if (!email) {
    throw new Error('No verified email found on your GitHub account');
  }

  return {
    email,
    name: userData.name || userData.login || email.split('@')[0],
    providerId: String(userData.id),
    githubUsername: userData.login,
    picture: userData.avatar_url,
    emailVerified: true
  };
}
