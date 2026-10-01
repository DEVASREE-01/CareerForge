import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { databaseReady } from '../db.js';
import { generateOtp, hashOtp, verifyOtpHash, generateResetToken, hashResetToken, verifyResetToken } from '../utils/crypto.js';
import { sendVerificationEmail, sendPasswordResetEmail } from '../services/emailService.js';
import {
  isGoogleConfigured,
  getGoogleAuthUrl,
  exchangeGoogleCode,
  isGitHubConfigured,
  getGitHubAuthUrl,
  exchangeGitHubCode
} from '../services/oauthService.js';
import {
  loginRateLimiter,
  registerRateLimiter,
  otpRequestRateLimiter,
  otpVerifyRateLimiter,
  passwordResetRateLimiter
} from '../middleware/rateLimiter.js';

import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config({ path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../.env') });

const router = express.Router();
const getJwtSecret = () => process.env.JWT_SECRET || 'careerforge-demo-secret';

// Fallback in-memory storage if DB is not ready (for resilient demo/testing)
const memoryUsers = [];

function signToken(user) {
  return jwt.sign(
    { id: user.id || user._id.toString(), role: user.role || 'student' },
    getJwtSecret(),
    { expiresIn: '7d' }
  );
}

function setSessionCookie(res, token) {
  res.cookie('careerforge_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000,
    path: '/'
  });
}

export function cleanAuthUser(u) {
  const profile = u.profile?.toObject ? u.profile.toObject() : u.profile || {};
  const progress = u.progress?.toObject ? u.progress.toObject() : u.progress || {};
  return {
    id: u._id ? u._id.toString() : u.id,
    name: u.name,
    email: u.email,
    role: u.role || 'student',
    emailVerified: Boolean(u.emailVerified),
    authProvider: u.authProvider || 'local',
    picture: u.picture || null,
    profile,
    progress
  };
}

// ----------------------------------------------------
// 1. REGISTER (Sign Up)
// ----------------------------------------------------
router.post('/register', registerRateLimiter, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const cleanEmail = (email || '').toLowerCase().trim();
    const cleanName = (name || '').trim() || (cleanEmail.split('@')[0] || 'Student');
    const cleanPass = password || '';

    // Field-level validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }
    if (!cleanPass || cleanPass.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long.' });
    }

    let existingUser = null;
    if (databaseReady) {
      existingUser = await User.findOne({ email: cleanEmail });
    } else {
      existingUser = memoryUsers.find(u => u.email === cleanEmail);
    }

    // If user already exists and is verified -> Conflict
    if (existingUser && existingUser.emailVerified) {
      return res.status(409).json({ message: 'An account with this email already exists. Please sign in.' });
    }

    // Generate secure 6-digit OTP
    const otp = generateOtp();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    const now = new Date();

    if (existingUser) {
      // Unverified existing account: check cooldown
      if (existingUser.otpLastSentAt) {
        const elapsed = Math.floor((now.getTime() - new Date(existingUser.otpLastSentAt).getTime()) / 1000);
        if (elapsed < 60) {
          return res.status(429).json({
            message: `A verification code was recently sent. Please wait ${60 - elapsed} seconds before requesting a new code.`,
            cooldownSeconds: 60 - elapsed,
            unverified: true,
            email: cleanEmail
          });
        }
      }

      // Update password hash and fresh OTP
      existingUser.name = cleanName;
      existingUser.password = await bcrypt.hash(cleanPass, 10);
      existingUser.otpHash = hashOtp(otp, existingUser._id ? existingUser._id.toString() : existingUser.id);
      existingUser.otpExpiresAt = otpExpiresAt;
      existingUser.otpAttempts = 0;
      existingUser.otpLastSentAt = now;

      if (databaseReady) {
        await existingUser.save();
      }

      await sendVerificationEmail({ to: cleanEmail, name: cleanName, otp, expirationMinutes: 10 });

      return res.status(200).json({
        success: true,
        message: 'A verification code has been sent to your email address.',
        email: cleanEmail,
        cooldownSeconds: 60,
        unverified: true
      });
    }

    // Create new unverified user
    const passwordHash = await bcrypt.hash(cleanPass, 10);
    const userData = {
      name: cleanName,
      email: cleanEmail,
      password: passwordHash,
      role: 'student',
      emailVerified: false,
      authProvider: 'local',
      otpAttempts: 0,
      otpLastSentAt: now,
      otpExpiresAt,
      profile: { skills: {}, onboardingCompleted: false },
      progress: {
        completedRoadmapItems: [],
        completedTasks: [],
        roadmapProgress: [],
        weakTopics: [],
        dailyChallengeStreak: 0,
        completedDailyChallenges: []
      }
    };

    let createdUser;
    if (databaseReady) {
      createdUser = new User(userData);
      // Hash with ID
      createdUser.otpHash = hashOtp(otp, createdUser._id.toString());
      await createdUser.save();
    } else {
      const id = Date.now().toString();
      userData.id = id;
      userData.otpHash = hashOtp(otp, id);
      memoryUsers.push(userData);
      createdUser = userData;
    }

    // Send real verification email
    await sendVerificationEmail({ to: cleanEmail, name: cleanName, otp, expirationMinutes: 10 });

    return res.status(201).json({
      success: true,
      message: 'Registration initiated. Please verify your email with the 6-digit code sent to your inbox.',
      email: cleanEmail,
      cooldownSeconds: 60,
      unverified: true
    });
  } catch (error) {
    console.error('Registration error:', error);
    if (error.code === 11000) {
      return res.status(409).json({ message: 'An account with this email already exists. Please sign in.' });
    }
    return res.status(500).json({ message: error.message || 'Registration failed. Please try again.' });
  }
});

// ----------------------------------------------------
// 2. VERIFY OTP
// ----------------------------------------------------
router.post('/verify-otp', otpVerifyRateLimiter, async (req, res) => {
  try {
    const { email, otp } = req.body;
    const cleanEmail = (email || '').toLowerCase().trim();
    const cleanOtp = (otp || '').toString().trim();

    if (!cleanEmail || !cleanOtp || cleanOtp.length !== 6) {
      return res.status(400).json({ message: 'Please provide a valid 6-digit verification code.' });
    }

    let user;
    if (databaseReady) {
      user = await User.findOne({ email: cleanEmail }).select('+otpHash +otpExpiresAt +otpAttempts');
    } else {
      user = memoryUsers.find(u => u.email === cleanEmail);
    }

    if (!user) {
      return res.status(400).json({ message: 'Verification session expired or invalid. Please sign up again.' });
    }

    if (user.emailVerified) {
      const token = signToken(user);
      setSessionCookie(res, token);
      return res.json({
        success: true,
        alreadyVerified: true,
        message: 'Account is already verified.',
        token,
        user: cleanAuthUser(user)
      });
    }

    // Check maximum verification attempts (5 attempts limit)
    if ((user.otpAttempts || 0) >= 5) {
      return res.status(429).json({
        message: 'Maximum verification attempts exceeded. Please request a new verification code.',
        maxAttemptsExceeded: true,
        attemptsRemaining: 0
      });
    }

    // Check expiration
    if (!user.otpExpiresAt || new Date() > new Date(user.otpExpiresAt)) {
      return res.status(400).json({
        message: 'The verification code has expired. Please click "Resend code" to receive a new one.',
        expired: true
      });
    }

    // Secure timing-safe verification
    const userId = user._id ? user._id.toString() : user.id;
    const isValid = verifyOtpHash(cleanOtp, user.otpHash, userId);

    if (!isValid) {
      user.otpAttempts = (user.otpAttempts || 0) + 1;
      if (databaseReady) await user.save();

      const remaining = Math.max(0, 5 - user.otpAttempts);
      if (remaining === 0) {
        return res.status(400).json({
          message: 'Too many incorrect attempts. This code has been invalidated. Please request a new code.',
          maxAttemptsExceeded: true,
          attemptsRemaining: 0
        });
      }

      return res.status(400).json({
        message: `Invalid verification code. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining.`,
        attemptsRemaining: remaining
      });
    }

    // OTP Verified Successfully!
    user.emailVerified = true;
    user.emailVerifiedAt = new Date();
    user.lastLoginAt = new Date();
    user.otpHash = undefined;
    user.otpExpiresAt = undefined;
    user.otpAttempts = 0;

    if (databaseReady) {
      await user.save();
    }

    const token = signToken(user);
    setSessionCookie(res, token);

    return res.json({
      success: true,
      message: 'Email verified successfully! Welcome to CareerForge.',
      token,
      user: cleanAuthUser(user)
    });
  } catch (error) {
    console.error('OTP Verification error:', error);
    return res.status(500).json({ message: error.message || 'Verification failed. Please try again.' });
  }
});

// ----------------------------------------------------
// 3. RESEND OTP
// ----------------------------------------------------
router.post('/resend-otp', otpRequestRateLimiter, async (req, res) => {
  try {
    const { email } = req.body;
    const cleanEmail = (email || '').toLowerCase().trim();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    let user;
    if (databaseReady) {
      user = await User.findOne({ email: cleanEmail }).select('+otpLastSentAt +otpAttempts');
    } else {
      user = memoryUsers.find(u => u.email === cleanEmail);
    }

    // If user does not exist or is already verified, return uniform security-conscious response
    if (!user || user.emailVerified) {
      return res.json({
        success: true,
        message: 'If your account is pending verification, a new code has been sent to your email.',
        cooldownSeconds: 60
      });
    }

    // Cooldown check (60 seconds)
    const now = new Date();
    if (user.otpLastSentAt) {
      const elapsedSeconds = Math.floor((now.getTime() - new Date(user.otpLastSentAt).getTime()) / 1000);
      if (elapsedSeconds < 60) {
        return res.status(429).json({
          message: `Please wait ${60 - elapsedSeconds} seconds before requesting another code.`,
          cooldownSeconds: 60 - elapsedSeconds
        });
      }
    }

    // Generate fresh OTP and reset attempts
    const otp = generateOtp();
    const userId = user._id ? user._id.toString() : user.id;
    user.otpHash = hashOtp(otp, userId);
    user.otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
    user.otpAttempts = 0;
    user.otpLastSentAt = now;

    if (databaseReady) {
      await user.save();
    }

    await sendVerificationEmail({ to: cleanEmail, name: user.name, otp, expirationMinutes: 10 });

    return res.json({
      success: true,
      message: 'A fresh verification code has been dispatched to your email.',
      cooldownSeconds: 60
    });
  } catch (error) {
    console.error('Resend OTP error:', error);
    return res.status(500).json({ message: error.message || 'Failed to resend code. Please try again.' });
  }
});

// ----------------------------------------------------
// 4. LOGIN (Sign In)
// ----------------------------------------------------
router.post('/login', loginRateLimiter, async (req, res) => {
  try {
    const cleanEmail = (req.body.email || '').toLowerCase().trim();
    const cleanPass = req.body.password || '';

    if (!cleanEmail || !cleanPass) {
      return res.status(400).json({ message: 'Please enter both your email and password.' });
    }

    let user;
    if (databaseReady) {
      user = await User.findOne({ email: cleanEmail }).select('+password +emailVerified +otpLastSentAt');
    } else {
      user = memoryUsers.find(u => u.email === cleanEmail);
    }

    if (!user || !user.password || !(await bcrypt.compare(cleanPass, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password. Please try again.' });
    }

    // Unverified Account Guard: Do NOT allow unverified login!
    if (!user.emailVerified) {
      // Check if we should automatically trigger a code resend if none sent recently
      const now = new Date();
      let cooldown = 60;
      if (!user.otpLastSentAt || (now.getTime() - new Date(user.otpLastSentAt).getTime()) > 60 * 1000) {
        const otp = generateOtp();
        const userId = user._id ? user._id.toString() : user.id;
        user.otpHash = hashOtp(otp, userId);
        user.otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
        user.otpAttempts = 0;
        user.otpLastSentAt = now;
        if (databaseReady) await user.save();
        await sendVerificationEmail({ to: cleanEmail, name: user.name, otp, expirationMinutes: 10 });
      } else {
        const elapsed = Math.floor((now.getTime() - new Date(user.otpLastSentAt).getTime()) / 1000);
        cooldown = Math.max(0, 60 - elapsed);
      }

      return res.status(403).json({
        unverified: true,
        email: cleanEmail,
        cooldownSeconds: cooldown,
        message: 'Your email address is not yet verified. Please enter the verification code sent to your inbox.'
      });
    }

    // Successful verified login
    user.lastLoginAt = new Date();
    if (databaseReady) await user.save();

    const token = signToken(user);
    setSessionCookie(res, token);

    return res.json({
      success: true,
      token,
      user: cleanAuthUser(user)
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: error.message || 'Login failed. Please try again.' });
  }
});

// ----------------------------------------------------
// 5. FORGOT PASSWORD
// ----------------------------------------------------
router.post('/forgot-password', passwordResetRateLimiter, async (req, res) => {
  try {
    const cleanEmail = (req.body.email || '').toLowerCase().trim();

    if (!cleanEmail || !cleanEmail.includes('@')) {
      return res.status(400).json({ message: 'Please provide a valid email address.' });
    }

    let user;
    if (databaseReady) {
      user = await User.findOne({ email: cleanEmail });
    } else {
      user = memoryUsers.find(u => u.email === cleanEmail);
    }

    // Constant-time message to prevent email enumeration
    const safeResponse = {
      success: true,
      message: 'If an account exists for this email, you will receive password reset instructions shortly.'
    };

    if (!user) {
      return res.json(safeResponse);
    }

    const resetToken = generateResetToken();
    const tokenHash = hashResetToken(resetToken);
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    user.passwordResetTokenHash = tokenHash;
    user.passwordResetExpiresAt = expiresAt;
    user.passwordResetAttempts = 0;

    if (databaseReady) {
      await user.save();
    }

    const appUrl = process.env.APP_URL || 'http://localhost:5173';
    const resetUrl = `${appUrl}/auth?mode=reset&token=${resetToken}&email=${encodeURIComponent(cleanEmail)}`;

    await sendPasswordResetEmail({
      to: cleanEmail,
      name: user.name,
      resetUrl,
      resetToken,
      expirationMinutes: 15
    });

    return res.json(safeResponse);
  } catch (error) {
    console.error('Forgot password error:', error);
    return res.status(500).json({ message: 'Unable to process password reset request. Please try again.' });
  }
});

// ----------------------------------------------------
// 6. RESET PASSWORD
// ----------------------------------------------------
router.post('/reset-password', async (req, res) => {
  try {
    const { email, token, newPassword } = req.body;
    const cleanEmail = (email || '').toLowerCase().trim();
    const cleanToken = (token || '').trim();
    const cleanPass = newPassword || '';

    if (!cleanEmail || !cleanToken) {
      return res.status(400).json({ message: 'Invalid or missing password reset token.' });
    }
    if (!cleanPass || cleanPass.length < 8) {
      return res.status(400).json({ message: 'New password must be at least 8 characters long.' });
    }

    let user;
    if (databaseReady) {
      user = await User.findOne({ email: cleanEmail }).select('+passwordResetTokenHash +passwordResetExpiresAt +passwordResetAttempts');
    } else {
      user = memoryUsers.find(u => u.email === cleanEmail);
    }

    if (!user || !user.passwordResetTokenHash) {
      return res.status(400).json({ message: 'Invalid or expired password reset link. Please request a new one.' });
    }

    // Check expiration
    if (!user.passwordResetExpiresAt || new Date() > new Date(user.passwordResetExpiresAt)) {
      return res.status(400).json({ message: 'This password reset link has expired. Please request a new one.', expired: true });
    }

    // Verify token hash
    const isValid = verifyResetToken(cleanToken, user.passwordResetTokenHash);
    if (!isValid) {
      user.passwordResetAttempts = (user.passwordResetAttempts || 0) + 1;
      if (databaseReady) await user.save();
      return res.status(400).json({ message: 'Invalid password reset token.' });
    }

    // Token is valid! Update password and invalidate token
    user.password = await bcrypt.hash(cleanPass, 10);
    user.passwordResetTokenHash = undefined;
    user.passwordResetExpiresAt = undefined;
    user.passwordResetAttempts = 0;
    user.emailVerified = true; // Proved ownership of the email
    user.emailVerifiedAt = user.emailVerifiedAt || new Date();

    if (databaseReady) {
      await user.save();
    }

    return res.json({
      success: true,
      message: 'Your password has been reset successfully. You can now sign in with your new password.'
    });
  } catch (error) {
    console.error('Reset password error:', error);
    return res.status(500).json({ message: error.message || 'Password reset failed. Please try again.' });
  }
});

// ----------------------------------------------------
// 7. OAUTH HANDLERS & ACCOUNT LINKING (Google & GitHub)
// ----------------------------------------------------
/**
 * Unified account creation and linking for OAuth providers (Google & GitHub)
 */
async function handleOAuthUserLogin(profile, provider) {
  const cleanEmail = profile.email.toLowerCase().trim();
  let user;
  if (databaseReady) {
    user = await User.findOne({ email: cleanEmail });
  } else {
    user = memoryUsers.find(u => u.email === cleanEmail);
  }

  if (user) {
    // Safely link OAuth info without duplicate user
    user.emailVerified = true;
    user.emailVerifiedAt = user.emailVerifiedAt || new Date();
    user.lastLoginAt = new Date();
    user.providerId = profile.providerId;
    if (profile.picture && !user.picture) user.picture = profile.picture;
    if (profile.githubUsername && !user.profile?.githubUsername) {
      if (!user.profile) user.profile = {};
      user.profile.githubUsername = profile.githubUsername;
    }
    if (databaseReady) await user.save();
  } else {
    // Create new verified user through OAuth provider
    const newUserData = {
      name: profile.name,
      email: cleanEmail,
      role: 'student',
      emailVerified: true,
      emailVerifiedAt: new Date(),
      authProvider: provider,
      providerId: profile.providerId,
      picture: profile.picture,
      lastLoginAt: new Date(),
      profile: {
        skills: {},
        onboardingCompleted: false,
        ...(profile.githubUsername ? { githubUsername: profile.githubUsername } : {})
      },
      progress: {
        completedRoadmapItems: [],
        completedTasks: [],
        roadmapProgress: [],
        weakTopics: [],
        dailyChallengeStreak: 0,
        completedDailyChallenges: []
      }
    };

    if (databaseReady) {
      user = await User.create(newUserData);
    } else {
      newUserData.id = Date.now().toString();
      memoryUsers.push(newUserData);
      user = newUserData;
    }
  }
  return user;
}

// ----------------------------------------------------
// 7. GOOGLE OAUTH
// ----------------------------------------------------
router.get('/google/url', (req, res) => {
  const state = req.query.state || 'careerforge_oauth';
  const redirectUriOverride = req.query.redirectUri || null;
  const result = getGoogleAuthUrl(state, redirectUriOverride);
  res.json(result);
});

// GET Callback (Direct Google redirect to backend)
router.get('/google/callback', async (req, res) => {
  const appUrl = process.env.APP_URL || 'http://localhost:5173';
  try {
    const code = req.query.code;
    if (!code) {
      return res.redirect(`${appUrl}/auth?error=${encodeURIComponent('Google authentication code missing.')}`);
    }

    const callbackUrl = process.env.GOOGLE_CALLBACK_URL || `${req.protocol}://${req.get('host')}/api/auth/google/callback`;
    const profile = await exchangeGoogleCode(code, callbackUrl);
    const user = await handleOAuthUserLogin(profile, 'google');

    const token = signToken(user);
    setSessionCookie(res, token);

    const destination = user.profile?.onboardingCompleted ? '/' : '/onboarding';
    return res.redirect(`${appUrl}${destination}`);
  } catch (error) {
    console.error('Google OAuth GET callback error:', error);
    return res.redirect(`${appUrl}/auth?error=${encodeURIComponent(error.message || 'Google authentication failed.')}`);
  }
});

// POST Callback (Frontend SPA code exchange)
router.post('/google/callback', async (req, res) => {
  try {
    const { code, redirectUri } = req.body;
    if (!code) {
      return res.status(400).json({ message: 'Missing authorization code.' });
    }

    const profile = await exchangeGoogleCode(code, redirectUri);
    const user = await handleOAuthUserLogin(profile, 'google');

    const token = signToken(user);
    setSessionCookie(res, token);

    return res.json({
      success: true,
      token,
      user: cleanAuthUser(user)
    });
  } catch (error) {
    console.error('Google OAuth callback error:', error);
    return res.status(500).json({ message: error.message || 'Google authentication failed.' });
  }
});

// ----------------------------------------------------
// 8. GITHUB OAUTH
// ----------------------------------------------------
router.get('/github/url', (req, res) => {
  const state = req.query.state || 'careerforge_oauth';
  const redirectUriOverride = req.query.redirectUri || null;
  const result = getGitHubAuthUrl(state, redirectUriOverride);
  res.json(result);
});

// GET Callback (Direct GitHub redirect to backend)
router.get('/github/callback', async (req, res) => {
  const appUrl = process.env.APP_URL || 'http://localhost:5173';
  try {
    const code = req.query.code;
    if (!code) {
      return res.redirect(`${appUrl}/auth?error=${encodeURIComponent('GitHub authentication code missing.')}`);
    }

    const callbackUrl = process.env.GITHUB_CALLBACK_URL || `${req.protocol}://${req.get('host')}/api/auth/github/callback`;
    const profile = await exchangeGitHubCode(code, callbackUrl);
    const user = await handleOAuthUserLogin(profile, 'github');

    const token = signToken(user);
    setSessionCookie(res, token);

    const destination = user.profile?.onboardingCompleted ? '/' : '/onboarding';
    return res.redirect(`${appUrl}${destination}`);
  } catch (error) {
    console.error('GitHub OAuth GET callback error:', error);
    return res.redirect(`${appUrl}/auth?error=${encodeURIComponent(error.message || 'GitHub authentication failed.')}`);
  }
});

// POST Callback (Frontend SPA code exchange)
router.post('/github/callback', async (req, res) => {
  try {
    const { code, redirectUri } = req.body;
    if (!code) {
      return res.status(400).json({ message: 'Missing authorization code.' });
    }

    const profile = await exchangeGitHubCode(code, redirectUri);
    const user = await handleOAuthUserLogin(profile, 'github');

    const token = signToken(user);
    setSessionCookie(res, token);

    return res.json({
      success: true,
      token,
      user: cleanAuthUser(user)
    });
  } catch (error) {
    console.error('GitHub OAuth callback error:', error);
    return res.status(500).json({ message: error.message || 'GitHub authentication failed.' });
  }
});

// ----------------------------------------------------
// 9. SESSION / CURRENT USER
// ----------------------------------------------------
router.get('/session', async (req, res) => {
  try {
    let token = (req.headers.authorization || '').replace('Bearer ', '');
    if (!token && req.cookies?.careerforge_token) {
      token = req.cookies.careerforge_token;
    }

    if (!token) {
      return res.status(401).json({ authenticated: false });
    }

    const decoded = jwt.verify(token, getJwtSecret());
    let user;
    if (databaseReady) {
      user = await User.findById(decoded.id);
    } else {
      user = memoryUsers.find(u => u.id === decoded.id);
    }

    if (!user) {
      return res.status(401).json({ authenticated: false, message: 'User not found' });
    }

    return res.json({
      authenticated: true,
      user: cleanAuthUser(user)
    });
  } catch {
    return res.status(401).json({ authenticated: false });
  }
});

// ----------------------------------------------------
// 10. LOGOUT
// ----------------------------------------------------
router.post('/logout', (req, res) => {
  res.clearCookie('careerforge_token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/'
  });
  return res.json({ success: true, message: 'Logged out successfully.' });
});

export default router;
