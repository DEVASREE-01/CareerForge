import mongoose from 'mongoose';
import User from './src/models/User.js';
import { hashOtp, verifyOtpHash } from './src/utils/crypto.js';

// Testing via the Vite dev server proxy at port 5173
const VITE_PROXY_URL = 'http://127.0.0.1:5173/api';

async function runFrontendIntegrationTest() {
  console.log('\n🌐 ========================================================');
  console.log('   TESTING AUTHENTICATION THROUGH VITE DEV PROXY (PORT 5173)');
  console.log('========================================================\n');

  await mongoose.connect('mongodb://127.0.0.1:27017/careerforge');

  const timestamp = Date.now();
  const testEmail = `frontend_proxy_test_${timestamp}@example.com`;
  const testPass = 'CareerForge2026!';
  const testName = 'Alex Rivera';

  // 1. Test Registration via Vite Proxy
  console.log('1. Submitting Sign Up via Vite proxy (/api/auth/register)...');
  const regRes = await fetch(`${VITE_PROXY_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: testName, email: testEmail, password: testPass })
  });
  const regData = await regRes.json();
  console.log('Proxy Status:', regRes.status);
  console.log('Proxy Response:', regData);

  if (regRes.status !== 201 || !regData.unverified) {
    throw new Error(`Proxy registration failed: ${JSON.stringify(regData)}`);
  }
  console.log('✓ Vite proxy successfully routed registration to backend.\n');

  // 2. Test Unverified Login via Vite Proxy
  console.log('2. Attempting Sign In before email verification (/api/auth/login)...');
  const unverifiedRes = await fetch(`${VITE_PROXY_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail, password: testPass })
  });
  const unverifiedData = await unverifiedRes.json();
  console.log('Unverified Login Status:', unverifiedRes.status);
  console.log('Unverified Login Response:', unverifiedData);

  if (unverifiedRes.status !== 403 || !unverifiedData.unverified) {
    throw new Error('Expected 403 unverified status from proxy');
  }
  console.log('✓ Unverified login blocked and redirected to verification state.\n');

  // 3. Test Invalid OTP Submission via Vite Proxy
  console.log('3. Submitting incorrect 6-digit OTP (/api/auth/verify-otp)...');
  const wrongOtpRes = await fetch(`${VITE_PROXY_URL}/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail, otp: '999999' })
  });
  const wrongOtpData = await wrongOtpRes.json();
  console.log('Wrong OTP Status:', wrongOtpRes.status);
  console.log('Wrong OTP Response:', wrongOtpData);

  if (wrongOtpRes.status !== 400 || wrongOtpData.attemptsRemaining !== 4) {
    throw new Error('Expected 400 with 4 attempts remaining');
  }
  console.log('✓ Incorrect OTP rejected with remaining attempts count.\n');

  // 4. Extract Real Generated OTP & Submit via Vite Proxy
  console.log('4. Setting test OTP on MongoDB user record and submitting via Vite proxy...');
  const dbUser = await User.findOne({ email: testEmail }).select('+otpHash');
  const realOtp = '826491';
  dbUser.otpHash = hashOtp(realOtp, dbUser._id.toString());
  await dbUser.save();
  console.log(`Submitting verification with OTP: ${realOtp}`);

  const verifyRes = await fetch(`${VITE_PROXY_URL}/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail, otp: realOtp })
  });
  const verifyData = await verifyRes.json();
  console.log('Verify Status:', verifyRes.status);
  console.log('Verify Response User:', verifyData.user?.email, 'Verified:', verifyData.user?.emailVerified);

  if (verifyRes.status !== 200 || !verifyData.user?.emailVerified || !verifyData.token) {
    throw new Error(`OTP verification failed: ${JSON.stringify(verifyData)}`);
  }
  console.log('✓ Account successfully verified via Vite proxy!\n');

  const authToken = verifyData.token;

  // 5. Test Authenticated Session via Vite Proxy
  console.log('5. Testing authenticated user profile (/api/users/me)...');
  const meRes = await fetch(`${VITE_PROXY_URL}/users/me`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  const meData = await meRes.json();
  console.log('/api/users/me Status:', meRes.status);
  console.log('/api/users/me Name:', meData.name, 'Email:', meData.email);

  if (meRes.status !== 200 || meData.email !== testEmail) {
    throw new Error('Failed to fetch authenticated profile via proxy');
  }
  console.log('✓ Authenticated profile retrieved successfully via proxy.\n');

  // 6. Test Session Check Endpoint
  console.log('6. Testing session validation endpoint (/api/auth/session)...');
  const sessionRes = await fetch(`${VITE_PROXY_URL}/auth/session`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  const sessionData = await sessionRes.json();
  console.log('Session Check Response:', sessionData);

  if (!sessionData.authenticated || sessionData.user?.email !== testEmail) {
    throw new Error('Session check failed');
  }
  console.log('✓ Session check validated successfully.\n');

  // 7. Test Logout Endpoint
  console.log('7. Testing logout endpoint (/api/auth/logout)...');
  const logoutRes = await fetch(`${VITE_PROXY_URL}/auth/logout`, {
    method: 'POST'
  });
  const logoutData = await logoutRes.json();
  console.log('Logout Response:', logoutData);

  if (logoutRes.status !== 200 || !logoutData.success) {
    throw new Error('Logout failed');
  }
  console.log('✓ Logout successfully cleared session.\n');

  console.log('🎉 ========================================================');
  console.log('   ALL FRONTEND VITE PROXY INTEGRATION TESTS PASSED!       ');
  console.log('========================================================\n');

  await mongoose.disconnect();
}

runFrontendIntegrationTest().catch(err => {
  console.error('\n❌ FRONTEND INTEGRATION TEST FAILED:', err);
  process.exit(1);
});
