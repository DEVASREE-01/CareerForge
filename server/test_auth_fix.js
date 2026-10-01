import mongoose from 'mongoose';
import User from './src/models/User.js';

const BASE_URL = 'http://localhost:5000/api';

async function verifyAuthFlow() {
  console.log('=== Verifying CareerForge Authentication & Registration ===\n');

  const testEmail = `candidate_auth_${Date.now()}@example.com`;
  const testPassword = 'Password123!';
  const testName = 'Alex Candidate';

  // 1. Valid Registration
  console.log('1. Testing Valid Registration with new account:', testEmail);
  const regRes = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: testName, email: testEmail, password: testPassword })
  });
  const regData = await regRes.json();
  console.log(`Status: ${regRes.status}`);
  console.log('Response:', regData);
  if (regRes.status !== 201 || !regData.token || !regData.user) {
    throw new Error(`Registration failed: ${JSON.stringify(regData)}`);
  }
  console.log('✓ Valid registration succeeded with JWT token and user profile.\n');

  // 2. Verify MongoDB Document
  console.log('2. Verifying User document saved directly in MongoDB...');
  await mongoose.connect('mongodb://127.0.0.1:27017/careerforge');
  const savedUser = await User.findOne({ email: testEmail });
  if (!savedUser) throw new Error('User was not found in MongoDB!');
  console.log(`✓ Confirmed MongoDB document saved: ID=${savedUser._id}, Name=${savedUser.name}, Email=${savedUser.email}`);
  await mongoose.disconnect();
  console.log();

  // 3. Duplicate Registration Check
  console.log('3. Testing Duplicate Registration with same email...');
  const dupRes = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: testName, email: testEmail, password: testPassword })
  });
  const dupData = await dupRes.json();
  console.log(`Status: ${dupRes.status}`);
  console.log('Response:', dupData);
  if (dupRes.status !== 409) {
    throw new Error(`Expected 409 Conflict, got ${dupRes.status}`);
  }
  console.log('✓ Duplicate email correctly rejected with user-friendly 409 error.\n');

  // 4. Invalid Password Validation
  console.log('4. Testing Invalid Password (< 8 chars)...');
  const shortPassRes = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Short', email: `short_${Date.now()}@example.com`, password: 'short' })
  });
  const shortPassData = await shortPassRes.json();
  console.log(`Status: ${shortPassRes.status}`);
  console.log('Response:', shortPassData);
  if (shortPassRes.status !== 400) {
    throw new Error(`Expected 400 Bad Request, got ${shortPassRes.status}`);
  }
  console.log('✓ Short password correctly rejected with 400 Bad Request.\n');

  // 5. Successful Login
  console.log('5. Testing Login with valid credentials...');
  const loginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail, password: testPassword })
  });
  const loginData = await loginRes.json();
  console.log(`Status: ${loginRes.status}`);
  console.log('Response:', loginData);
  if (loginRes.status !== 200 || !loginData.token) {
    throw new Error(`Login failed: ${JSON.stringify(loginData)}`);
  }
  console.log('✓ Login succeeded and returned valid JWT token.\n');

  // 6. Invalid Password Login
  console.log('6. Testing Login with wrong password...');
  const wrongLoginRes = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: testEmail, password: 'WrongPassword999!' })
  });
  const wrongLoginData = await wrongLoginRes.json();
  console.log(`Status: ${wrongLoginRes.status}`);
  console.log('Response:', wrongLoginData);
  if (wrongLoginRes.status !== 401) {
    throw new Error(`Expected 401 Unauthorized, got ${wrongLoginRes.status}`);
  }
  console.log('✓ Wrong password rejected with 401 Unauthorized.\n');

  console.log('=== ALL AUTHENTICATION & REGISTRATION TESTS PASSED! ===');
}

verifyAuthFlow().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
