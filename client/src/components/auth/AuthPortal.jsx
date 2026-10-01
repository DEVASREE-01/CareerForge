import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import OtpInput from './OtpInput.jsx';

export default function AuthPortal({ appState }) {
  const { token, student, authenticate, setNotice } = appState;
  const navigate = useNavigate();
  const location = useLocation();

  // URL Query Parameters (for reset password links or OAuth redirects)
  const query = new URLSearchParams(location.search);
  const initialMode = query.get('mode') || (query.get('token') ? 'reset' : 'login');
  const queryEmail = query.get('email') || '';
  const queryToken = query.get('token') || '';
  const oauthProvider = query.get('provider');
  const oauthCode = query.get('code');
  const queryError = query.get('error');

  // Core Form State
  const [mode, setMode] = useState(initialMode); // 'login' | 'register' | 'verify' | 'forgot' | 'reset'
  const [form, setForm] = useState({
    name: '',
    email: queryEmail,
    password: '',
    confirmPassword: '',
    otp: '',
    resetToken: queryToken
  });

  // UI States
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(queryError || '');
  const [successMsg, setSuccessMsg] = useState('');
  const [cooldown, setCooldown] = useState(0);
  const [attemptsRemaining, setAttemptsRemaining] = useState(null);
  const [oauthStatus, setOauthStatus] = useState('');

  // Handle OAuth Redirect Callback or Error if present in URL
  useEffect(() => {
    if (queryError) {
      setError(decodeURIComponent(queryError));
    }
    if (oauthProvider && oauthCode) {
      handleOAuthCallback(oauthProvider, oauthCode);
    }
  }, [oauthProvider, oauthCode, queryError]);

  // Cooldown Countdown Timer
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown(prev => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  // Automatic verification when all 6 OTP digits are entered
  useEffect(() => {
    if (mode === 'verify' && form.otp && form.otp.length === 6 && !busy && !error) {
      const timer = setTimeout(() => {
        handleSubmit();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [form.otp, mode]);

  // If already authenticated and not processing OAuth, redirect to home or onboarding
  if (token && !oauthCode) {
    if (student && !student.profile?.onboardingCompleted) {
      return <Navigate to="/onboarding" replace />;
    }
    return <Navigate to="/" replace />;
  }

  const updateForm = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const switchMode = nextMode => {
    setMode(nextMode);
    setError('');
    setSuccessMsg('');
    setAttemptsRemaining(null);
  };

  // Password Strength Calculation (0 to 4)
  const calculateStrength = pass => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length >= 8) score++;
    if (pass.length >= 12) score++;
    if (/[A-Z]/.test(pass) && /[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass) || /[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const passStrength = calculateStrength(form.password);
  const strengthLabels = ['Too weak', 'Fair', 'Good', 'Strong', 'Very strong'];
  const strengthColors = ['#ef6b73', '#f3b85b', '#4f6bff', '#35d0ae', '#10b981'];

  // ----------------------------------------------------
  // OAuth Code Exchange Handler
  // ----------------------------------------------------
  async function handleOAuthCallback(provider, code) {
    setBusy(true);
    setOauthStatus(`Completing secure ${provider === 'google' ? 'Google' : 'GitHub'} sign in…`);
    try {
      const endpoint = `/api/auth/${provider}/callback`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, redirectUri: window.location.origin + window.location.pathname + `?provider=${provider}` })
      });
      const data = await res.json();
      if (!res.ok || !data.token) {
        throw new Error(data.message || 'OAuth authentication failed.');
      }

      // Authenticate in AppContext
      localStorage.setItem('careerforge_token', data.token);
      appState.setToken?.(data.token);
      appState.setStudent?.(data.user);

      if (data.user?.profile?.onboardingCompleted) {
        navigate('/', { replace: true });
      } else {
        navigate('/onboarding', { replace: true });
      }
    } catch (err) {
      console.error('OAuth Callback Error:', err);
      setError(err.message || 'Social sign-in could not be completed.');
      setMode('login');
    } finally {
      setBusy(false);
      setOauthStatus('');
    }
  }

  // ----------------------------------------------------
  // OAuth Provider Initiation
  // ----------------------------------------------------
  const initiateOAuth = async provider => {
    setError('');
    try {
      const res = await fetch(`/api/auth/${provider}/url?state=${Date.now()}`);
      const data = await res.json();
      if (!data.configured || !data.url) {
        setError(`${provider === 'google' ? 'Google' : 'GitHub'} OAuth is not configured in .env yet. Please provide client credentials.`);
        return;
      }
      window.location.href = data.url;
    } catch (err) {
      setError(`Unable to connect to ${provider} authentication.`);
    }
  };

  // ----------------------------------------------------
  // Main Form Submission Router
  // ----------------------------------------------------
  const handleSubmit = async e => {
    if (e && e.preventDefault) e.preventDefault();
    setError('');
    setSuccessMsg('');

    const cleanEmail = form.email.trim().toLowerCase();

    if (mode === 'login') {
      if (!cleanEmail || !cleanEmail.includes('@')) {
        setError('Please enter a valid email address.');
        return;
      }
      if (!form.password) {
        setError('Please enter your password.');
        return;
      }

      setBusy(true);
      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: cleanEmail, password: form.password })
        });
        const data = await res.json();

        if (res.status === 403 && data.unverified) {
          // Account unverified: transition seamlessly to verify screen
          setCooldown(data.cooldownSeconds || 60);
          switchMode('verify');
          setError(data.message || 'Please verify your email address to access CareerForge.');
          return;
        }

        if (!res.ok || !data.token) {
          throw new Error(data.message || 'Invalid email or password.');
        }

        localStorage.setItem('careerforge_token', data.token);
        appState.setToken?.(data.token);
        appState.setStudent?.(data.user);

        if (data.user?.profile?.onboardingCompleted) {
          navigate('/', { replace: true });
        } else {
          navigate('/onboarding', { replace: true });
        }
      } catch (err) {
        setError(err.message || 'Login failed. Please check your network or credentials.');
      } finally {
        setBusy(false);
      }
    } else if (mode === 'register') {
      if (!form.name.trim()) {
        setError('Please enter your full name.');
        return;
      }
      if (!cleanEmail || !cleanEmail.includes('@')) {
        setError('Please enter a valid email address.');
        return;
      }
      if (form.password.length < 8) {
        setError('Password must be at least 8 characters long.');
        return;
      }
      if (form.password !== form.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      setBusy(true);
      try {
        const res = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            email: cleanEmail,
            password: form.password
          })
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Registration failed.');
        }

        // Successfully initiated registration: transition to OTP verification!
        setCooldown(data.cooldownSeconds || 60);
        setSuccessMsg(data.message || 'Verification code sent to your email.');
        switchMode('verify');
      } catch (err) {
        setError(err.message || 'Could not complete registration. Please try again.');
      } finally {
        setBusy(false);
      }
    } else if (mode === 'verify') {
      if (!form.otp || form.otp.length !== 6) {
        setError('Please enter the complete 6-digit verification code.');
        return;
      }

      setBusy(true);
      try {
        const res = await fetch('/api/auth/verify-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: cleanEmail, otp: form.otp })
        });
        const data = await res.json();

        if (!res.ok) {
          if (data.attemptsRemaining !== undefined) {
            setAttemptsRemaining(data.attemptsRemaining);
          }
          throw new Error(data.message || 'Verification failed.');
        }

        // Account verified successfully!
        localStorage.setItem('careerforge_token', data.token);
        appState.setToken?.(data.token);
        appState.setStudent?.(data.user);

        if (data.user?.profile?.onboardingCompleted) {
          navigate('/', { replace: true });
        } else {
          navigate('/onboarding', { replace: true });
        }
      } catch (err) {
        setError(err.message || 'Verification failed. Please check the code.');
      } finally {
        setBusy(false);
      }
    } else if (mode === 'forgot') {
      if (!cleanEmail || !cleanEmail.includes('@')) {
        setError('Please enter a valid email address.');
        return;
      }

      setBusy(true);
      try {
        const res = await fetch('/api/auth/forgot-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: cleanEmail })
        });
        const data = await res.json();
        setSuccessMsg(data.message || 'Password reset instructions have been sent.');
      } catch (err) {
        setError(err.message || 'Failed to request password reset.');
      } finally {
        setBusy(false);
      }
    } else if (mode === 'reset') {
      if (!form.resetToken) {
        setError('Missing password reset token. Please use the link sent to your email.');
        return;
      }
      if (form.password.length < 8) {
        setError('New password must be at least 8 characters long.');
        return;
      }
      if (form.password !== form.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      setBusy(true);
      try {
        const res = await fetch('/api/auth/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: cleanEmail,
            token: form.resetToken,
            newPassword: form.password
          })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed to reset password.');

        setSuccessMsg('Your password has been reset successfully! Please sign in.');
        switchMode('login');
      } catch (err) {
        setError(err.message || 'Could not reset password.');
      } finally {
        setBusy(false);
      }
    }
  };

  // ----------------------------------------------------
  // Resend OTP Action
  // ----------------------------------------------------
  const handleResendOtp = async () => {
    if (cooldown > 0 || busy) return;
    setError('');
    setSuccessMsg('');
    setBusy(true);

    try {
      const res = await fetch('/api/auth/resend-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email.trim().toLowerCase() })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Unable to resend code.');

      setCooldown(data.cooldownSeconds || 60);
      setAttemptsRemaining(5);
      setSuccessMsg('A new 6-digit verification code has been dispatched to your email.');
    } catch (err) {
      setError(err.message || 'Failed to resend code. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-portal-v2">
      <div className="auth-card-wrapper">
        {/* Left Form Area */}
        <div className="auth-form-column">
          <header className="auth-header">
            <div className="auth-brand-badge">
              <span className="cf-badge-icon">CF</span>
              <span className="cf-brand-name">CareerForge</span>
            </div>
            <span className="cf-brand-tagline">Continuous Preparation SaaS</span>
          </header>

          {oauthStatus && (
            <div className="auth-banner info">
              <span className="auth-spinner mini" />
              {oauthStatus}
            </div>
          )}

          {/* Heading and Value Proposition */}
          <div className="auth-intro">
            {mode === 'login' && (
              <>
                <h1>Welcome back</h1>
                <p>Sign in to continue your placement preparation and roadmap.</p>
              </>
            )}
            {mode === 'register' && (
              <>
                <h1>Start your preparation</h1>
                <p>Create your verified CareerForge account to build your roadmap.</p>
              </>
            )}
            {mode === 'verify' && (
              <>
                <h1>Verify your email</h1>
                <p>Enter the 6-digit code sent to your email to activate your account.</p>
              </>
            )}
            {mode === 'forgot' && (
              <>
                <h1>Reset password</h1>
                <p>Enter your email address and we'll send you a secure reset link.</p>
              </>
            )}
            {mode === 'reset' && (
              <>
                <h1>Create new password</h1>
                <p>Choose a secure password for your CareerForge account.</p>
              </>
            )}
          </div>

          {/* Tab Switcher (Login / Register) */}
          {(mode === 'login' || mode === 'register') && (
            <div className="auth-tabs" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'login'}
                className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
                onClick={() => switchMode('login')}
              >
                Sign in
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'register'}
                className={`auth-tab ${mode === 'register' ? 'active' : ''}`}
                onClick={() => switchMode('register')}
              >
                Create account
              </button>
            </div>
          )}

          {/* Social Auth Options */}
          {(mode === 'login' || mode === 'register') && (
            <div className="auth-social-actions">
              <button
                type="button"
                className="social-btn google"
                onClick={() => initiateOAuth('google')}
                disabled={busy}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.4 1 3.5 3.6 1.6 7.4l3.7 2.9C6.2 7.4 8.8 5 12 5z"/>
                  <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"/>
                  <path fill="#FBBC05" d="M5.3 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.6 6.4C.6 8.3 0 10.6 0 13s.6 4.7 1.6 6.6l3.7-2.9z"/>
                  <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.2 0-5.8-2.4-6.7-5.4L1.6 15.8C3.5 19.6 7.4 23 12 23z"/>
                </svg>
                Continue with Google
              </button>
              <button
                type="button"
                className="social-btn github"
                onClick={() => initiateOAuth('github')}
                disabled={busy}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                Continue with GitHub
              </button>
            </div>
          )}

          {(mode === 'login' || mode === 'register') && (
            <div className="auth-divider">
              <span>OR CONTINUE WITH EMAIL</span>
            </div>
          )}

          {/* Notifications / Alerts */}
          {error && (
            <div className="auth-banner error" role="alert">
              <span className="auth-alert-icon">⚠</span>
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="auth-banner success" role="status">
              <span className="auth-alert-icon">✓</span>
              <span>{successMsg}</span>
            </div>
          )}

          {/* Form */}
          <form className="auth-form-fields" onSubmit={handleSubmit} noValidate>
            {/* REGISTER: Name */}
            {mode === 'register' && (
              <label className="auth-field-label">
                Full name
                <div className="auth-input-wrapper">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Chen"
                    value={form.name}
                    onChange={e => updateForm('name', e.target.value)}
                    autoComplete="name"
                  />
                </div>
              </label>
            )}

            {/* LOGIN / REGISTER / FORGOT: Email */}
            {mode !== 'verify' && mode !== 'reset' && (
              <label className="auth-field-label">
                Email address
                <div className="auth-input-wrapper">
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => updateForm('email', e.target.value)}
                    autoComplete="email"
                  />
                </div>
              </label>
            )}

            {/* VERIFY: Email Badge & OTP Input */}
            {mode === 'verify' && (
              <div className="auth-verify-panel">
                <div className="verify-target-badge">
                  <span>Verification code sent to:</span>
                  <strong>{form.email}</strong>
                  <button
                    type="button"
                    className="change-email-btn"
                    onClick={() => switchMode('register')}
                  >
                    Change email
                  </button>
                </div>

                <div className="verify-otp-section">
                  <label className="auth-field-label center">
                    Enter 6-digit code
                  </label>
                  <OtpInput
                    value={form.otp}
                    onChange={val => updateForm('otp', val)}
                    length={6}
                    disabled={busy}
                    isError={!!error}
                  />
                  {attemptsRemaining !== null && (
                    <small className="attempts-warning">
                      ⚠️ {attemptsRemaining} verification attempt{attemptsRemaining === 1 ? '' : 's'} remaining
                    </small>
                  )}
                </div>

                <div className="verify-cooldown-row">
                  <span>Didn't receive the email?</span>
                  {cooldown > 0 ? (
                    <span className="cooldown-badge">
                      Resend code in <strong>{cooldown}s</strong>
                    </span>
                  ) : (
                    <button
                      type="button"
                      className="resend-action-btn"
                      onClick={handleResendOtp}
                      disabled={busy}
                    >
                      Resend code now
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* LOGIN / REGISTER / RESET: Password */}
            {(mode === 'login' || mode === 'register' || mode === 'reset') && (
              <label className="auth-field-label">
                <div className="auth-label-row">
                  <span>{mode === 'reset' ? 'New password' : 'Password'}</span>
                  {mode === 'login' && (
                    <button
                      type="button"
                      className="forgot-link"
                      onClick={() => switchMode('forgot')}
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="auth-input-wrapper has-toggle">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={e => updateForm('password', e.target.value)}
                    autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </label>
            )}

            {/* REGISTER / RESET: Password Strength Indicator */}
            {(mode === 'register' || mode === 'reset') && form.password && (
              <div className="strength-meter-box">
                <div className="strength-bars">
                  {[0, 1, 2, 3].map(lvl => (
                    <div
                      key={lvl}
                      className="strength-bar"
                      style={{
                        backgroundColor: lvl < passStrength ? strengthColors[passStrength] : 'rgba(255,255,255,0.08)'
                      }}
                    />
                  ))}
                </div>
                <div className="strength-text">
                  <span>Password strength:</span>
                  <strong style={{ color: strengthColors[passStrength] }}>
                    {strengthLabels[passStrength]}
                  </strong>
                </div>
              </div>
            )}

            {/* REGISTER / RESET: Confirm Password */}
            {(mode === 'register' || mode === 'reset') && (
              <label className="auth-field-label">
                Confirm password
                <div className="auth-input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Repeat your password"
                    value={form.confirmPassword}
                    onChange={e => updateForm('confirmPassword', e.target.value)}
                    autoComplete="new-password"
                  />
                </div>
              </label>
            )}

            {/* Primary Submit Button */}
            <button type="submit" className="auth-primary-submit" disabled={busy}>
              {busy ? (
                <>
                  <span className="auth-spinner" />
                  <span>Processing…</span>
                </>
              ) : (
                <>
                  {mode === 'login' && 'Sign in to CareerForge ›'}
                  {mode === 'register' && 'Send verification code ›'}
                  {mode === 'verify' && 'Verify & Activate Account ›'}
                  {mode === 'forgot' && 'Send reset instructions ›'}
                  {mode === 'reset' && 'Update password & sign in ›'}
                </>
              )}
            </button>
          </form>

          {/* Footer Navigation */}
          <footer className="auth-footer-nav">
            {mode === 'login' && (
              <p>
                Don't have an account?{' '}
                <button type="button" onClick={() => switchMode('register')}>
                  Create account
                </button>
              </p>
            )}
            {mode === 'register' && (
              <p>
                Already registered?{' '}
                <button type="button" onClick={() => switchMode('login')}>
                  Sign in
                </button>
              </p>
            )}
            {(mode === 'forgot' || mode === 'reset' || mode === 'verify') && (
              <p>
                <button type="button" className="back-link" onClick={() => switchMode('login')}>
                  ← Back to sign in
                </button>
              </p>
            )}
            <small className="auth-security-note">
              🔒 256-bit SSL encrypted • Continuous preparation engine
            </small>
          </footer>
        </div>

        {/* Right Preview & SaaS Value Proposition Column */}
        <aside className="auth-preview-column">
          <div className="preview-glow glow-1" />
          <div className="preview-glow glow-2" />

          <div className="preview-content">
            <span className="preview-category-tag">ENTERPRISE CAREER INTELLIGENCE</span>
            <h2>Prepare with precision. Land the role you want.</h2>
            <p>
              CareerForge replaces fragmented prep with a role-aligned, continuous readiness engine:
            </p>

            <div className="preview-flow-steps">
              <div className="preview-step">
                <span className="step-num">01</span>
                <div>
                  <strong>Role Skill Gap</strong>
                  <small>Target company & domain alignment</small>
                </div>
              </div>
              <div className="preview-step">
                <span className="step-num">02</span>
                <div>
                  <strong>Adaptive Roadmap</strong>
                  <small>Learn → Practice → Assess stages</small>
                </div>
              </div>
              <div className="preview-step">
                <span className="step-num">03</span>
                <div>
                  <strong>AI Mock Interviews</strong>
                  <small>Real-time speech & scoring audit</small>
                </div>
              </div>
              <div className="preview-step">
                <span className="step-num">04</span>
                <div>
                  <strong>Verified Readiness Score</strong>
                  <small>Measurable placement probability</small>
                </div>
              </div>
            </div>

            {/* Preparation Preview Card */}
            <div className="preview-sample-card">
              <div className="sample-card-header">
                <span className="sample-dot active" />
                <span className="sample-target-title">Target Role: Cloud / DevOps Engineer</span>
              </div>
              <div className="sample-metrics-row">
                <div className="metric">
                  <small>Readiness Score</small>
                  <strong>78 / 100</strong>
                </div>
                <div className="metric">
                  <small>Skill Coverage</small>
                  <strong>14 of 16 Skills</strong>
                </div>
              </div>
              <div className="sample-next-task">
                <small>Next Milestone</small>
                <span>AWS VPC & Terraform Architecture Project</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
