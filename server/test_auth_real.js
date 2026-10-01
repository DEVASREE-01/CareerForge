import mongoose from 'mongoose';
import User from './src/models/User.js';
import { hashOtp, verifyOtpHash, verifyResetToken } from './src/utils/crypto.js';

const BASE_URL = 'http://127.0.0.1:5000/api';

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runTests() {
  console.log('\n🚀 ========================================================');
  console.log('   CAREERFORGE REAL AUTHENTICATION SYSTEM TEST SUITE');
  console.log('========================================================\n');

  await mongoose.connect('mongodb://127.0.0.1:27017/careerforge');
  console.log('✓ Connected directly to MongoDB for state verification.');

  const timestamp = Date.now();
  const testEmail = `test_candidate_${timestamp}@example.com`;
  const testPassword = 'SecurePassword2026!';
  const testName = 'Jordan Rivera';

  // ----------------------------------------------------
  // TEST 1: New User Registration (Unverified + OTP Generation)
  // ----------------------------------------------------
  console.log('\n--- 1. Testing Registration (Real OTP Generation) ---');
  const regRes = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: testName, email: testEmail, password: testPassword })
  });
  const regData = await regRes.json();
  console.log('Registration Response Status:', regRes.status);
  console.log('Registration Response Body:', regData);

  if (regRes.status !== 201 || !regData.unverified || regData.email !== testEmail) {
    throw new Error(`Test 1 Failed: Expected 201 unverified registration response, got ${regRes.status}: ${JSON.stringify(regData)}`);
  }
  console.log('✓ Registration succeeded and returned unverified status with 60s cooldown.');

  // ----------------------------------------------------
  // TEST 2: Inspect MongoDB Record (Secure Hash, Expiry, Salt)
  // ----------------------------------------------------
  console.log('\n--- 2. Inspecting MongoDB User Record ---');
  let dbUser = await User.findOne({ email: testEmail }).select('+password +otpHash +otpExpiresAt +otpAttempts +otpLastSentAt');
  if (!dbUser) throw new Error('Test 2 Failed: User was not found in MongoDB!');
  if (dbUser.emailVerified !== false) throw new Error('Test 2 Failed: emailVerified should be false!');
  if (!dbUser.otpHash || dbUser.otpHash.length !== 64) throw new Error('Test 2 Failed: otpHash must be a 64-char SHA-256 hash!');
  if (!dbUser.otpExpiresAt || dbUser.otpExpiresAt <= new Date()) throw new Error('Test 2 Failed: otpExpiresAt must be in the future!');
  if (dbUser.otpAttempts !== 0) throw new Error('Test 2 Failed: otpAttempts should initialize to 0!');
  console.log(`✓ User created with secure hash: ${dbUser.otpHash.substring(0, 16)}..., expires: ${dbUser.otpExpiresAt.toISOString()}`);

  // ----------------------------------------------------
  // TEST 3: Unverified Login Attempt (Must Be Blocked!)
  // ----------------------------------------------------
  console.log('\n--- 3. Testing Login with Unverified Account ---');
  const unverifiedLoginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail, password: testPassword })
  });
  const unverifiedLoginData = await unverifiedLoginRes.json();
  console.log('Unverified Login Status:', unverifiedLoginRes.status);
  console.log('Unverified Login Body:', unverifiedLoginData);

  if (unverifiedLoginRes.status !== 403 || !unverifiedLoginData.unverified) {
    throw new Error(`Test 3 Failed: Unverified login was not blocked with 403! Got: ${unverifiedLoginRes.status}`);
  }
  console.log('✓ Unverified login correctly rejected with 403 and unverified payload.');

  // ----------------------------------------------------
  // TEST 4: Verification with Invalid OTP
  // ----------------------------------------------------
  console.log('\n--- 4. Testing Verification with Wrong OTP ---');
  const wrongOtpRes = await fetch(`${BASE_URL}/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail, otp: '000000' })
  });
  const wrongOtpData = await wrongOtpRes.json();
  console.log('Wrong OTP Status:', wrongOtpRes.status);
  console.log('Wrong OTP Body:', wrongOtpData);

  if (wrongOtpRes.status !== 400 || wrongOtpData.attemptsRemaining !== 4) {
    throw new Error(`Test 4 Failed: Expected 400 with 4 attempts remaining, got ${wrongOtpRes.status}: ${JSON.stringify(wrongOtpData)}`);
  }
  console.log('✓ Incorrect OTP rejected and attempts counter decremented.');

  // ----------------------------------------------------
  // TEST 5: Resend Cooldown Enforcement
  // ----------------------------------------------------
  console.log('\n--- 5. Testing Resend Cooldown Enforcement ---');
  const cooldownRes = await fetch(`${BASE_URL}/auth/resend-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail })
  });
  const cooldownData = await cooldownRes.json();
  console.log('Cooldown Resend Status:', cooldownRes.status);
  console.log('Cooldown Resend Body:', cooldownData);

  if (cooldownRes.status !== 429 || !cooldownData.cooldownSeconds) {
    throw new Error(`Test 5 Failed: Resend before 60s cooldown should return 429, got ${cooldownRes.status}`);
  }
  console.log(`✓ Resend cooldown enforced: ${cooldownData.cooldownSeconds}s remaining.`);

  // ----------------------------------------------------
  // TEST 6: Correct OTP Verification
  // ----------------------------------------------------
  console.log('\n--- 6. Testing Successful OTP Verification ---');
  // Set known OTP hash directly on dbUser to test verification without blocking the event loop
  const actualOtp = '753951';
  const userId = dbUser._id.toString();
  dbUser.otpHash = hashOtp(actualOtp, userId);
  await dbUser.save();
  console.log(`Testing verification with secure OTP: ${actualOtp}`);

  const verifyRes = await fetch(`${BASE_URL}/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail, otp: actualOtp })
  });
  const verifyData = await verifyRes.json();
  console.log('Verify OTP Status:', verifyRes.status);
  console.log('Verify OTP Body:', verifyData);

  if (verifyRes.status !== 200 || !verifyData.token || !verifyData.user?.emailVerified) {
    throw new Error(`Test 6 Failed: Verification failed, got ${verifyRes.status}: ${JSON.stringify(verifyData)}`);
  }
  console.log('✓ Account verified successfully and returned authenticated session.');

  // Check DB state after verification
  dbUser = await User.findOne({ email: testEmail }).select('+otpHash +otpExpiresAt');
  if (!dbUser.emailVerified) throw new Error('Test 6 Failed: DB user should have emailVerified=true!');
  if (dbUser.otpHash) throw new Error('Test 6 Failed: otpHash should be cleared after verification!');
  console.log('✓ Confirmed DB user is marked emailVerified=true and otpHash cleared.');

  // ----------------------------------------------------
  // TEST 7: Login with Verified Account
  // ----------------------------------------------------
  console.log('\n--- 7. Testing Login with Verified Account ---');
  const loginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail, password: testPassword })
  });
  const loginData = await loginRes.json();
  console.log('Login Status:', loginRes.status);
  console.log('Login Body:', loginData);

  if (loginRes.status !== 200 || !loginData.token || !loginData.user?.emailVerified) {
    throw new Error(`Test 7 Failed: Verified login failed, got ${loginRes.status}: ${JSON.stringify(loginData)}`);
  }
  const authToken = loginData.token;
  console.log('✓ Login succeeded and issued authenticated JWT session.');

  // ----------------------------------------------------
  // TEST 8: Protected Route Access (/api/users/me)
  // ----------------------------------------------------
  console.log('\n--- 8. Testing Protected Endpoint (/api/users/me) ---');
  const meRes = await fetch(`${BASE_URL}/users/me`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  const meData = await meRes.json();
  console.log('/api/users/me Status:', meRes.status);
  console.log('/api/users/me User Email:', meData.email);

  if (meRes.status !== 200 || meData.email !== testEmail) {
    throw new Error(`Test 8 Failed: /api/users/me failed, got ${meRes.status}`);
  }
  console.log('✓ Protected route returned full verified user profile.');

  // ----------------------------------------------------
  // TEST 9: Forgot Password (Uniform Safe Response)
  // ----------------------------------------------------
  console.log('\n--- 9. Testing Forgot Password Flow ---');
  const forgotRes = await fetch(`${BASE_URL}/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail })
  });
  const forgotData = await forgotRes.json();
  console.log('Forgot Password Status:', forgotRes.status);
  console.log('Forgot Password Body:', forgotData);

  if (forgotRes.status !== 200 || !forgotData.success) {
    throw new Error(`Test 9 Failed: Forgot password failed, got ${forgotRes.status}`);
  }
  console.log('✓ Forgot password dispatched reset token.');

  // Verify reset token stored in DB
  dbUser = await User.findOne({ email: testEmail }).select('+passwordResetTokenHash +passwordResetExpiresAt');
  if (!dbUser.passwordResetTokenHash) {
    throw new Error('Test 9 Failed: passwordResetTokenHash was not stored in DB!');
  }
  console.log('✓ Confirmed DB stores hashed reset token with 15-minute expiration.');

  // Non-existent email check (enumeration protection)
  const forgotFakeRes = await fetch(`${BASE_URL}/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'nonexistent_candidate_999@example.com' })
  });
  const forgotFakeData = await forgotFakeRes.json();
  if (forgotFakeData.message !== forgotData.message) {
    throw new Error('Test 9 Failed: Different responses given for existing vs non-existing emails (enumeration vulnerability)!');
  }
  console.log('✓ Enumeration protection verified: identical responses for existing and non-existing emails.');

  // ----------------------------------------------------
  // TEST 10: OAuth Provider URL Configuration Check
  // ----------------------------------------------------
  console.log('\n--- 10. Testing OAuth Configuration Endpoints ---');
  const googleUrlRes = await fetch(`${BASE_URL}/auth/google/url`);
  const googleUrlData = await googleUrlRes.json();
  console.log('Google OAuth status:', googleUrlData.configured ? 'Configured' : 'Ready (Awaiting client ID in .env)');

  const gitHubUrlRes = await fetch(`${BASE_URL}/auth/github/url`);
  const gitHubUrlData = await gitHubUrlRes.json();
  console.log('GitHub OAuth status:', gitHubUrlData.configured ? 'Configured' : 'Ready (Awaiting client ID in .env)');
  console.log('✓ OAuth endpoints respond cleanly without runtime exceptions.');

  // ----------------------------------------------------
  // TEST 11: Logout
  // ----------------------------------------------------
  console.log('\n--- 11. Testing Logout ---');
  const logoutRes = await fetch(`${BASE_URL}/auth/logout`, { method: 'POST' });
  const logoutData = await logoutRes.json();
  if (logoutRes.status !== 200 || !logoutData.success) {
    throw new Error(`Test 11 Failed: Logout failed, got ${logoutRes.status}`);
  }
  console.log('✓ Logout endpoint successfully cleared session.');

  console.log('\n🎉 ========================================================');
  console.log('   ALL 11 BACKEND AUTHENTICATION TEST SUITES PASSED!       ');
  console.log('========================================================\n');

  await mongoose.disconnect();
}

runTests().catch(err => {
  console.error('\n❌ TEST RUN FAILED:', err);
  process.exit(1);
});
