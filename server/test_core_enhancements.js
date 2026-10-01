import mongoose from 'mongoose';
import User from './src/models/User.js';

const BASE_URL = 'http://localhost:5000/api';

async function testCoreEnhancements() {
  console.log('=== CareerForge Core Enhancements Comprehensive Test Suite ===\n');

  // 0. Register Test User
  const email = `test_full_suite_${Date.now()}@example.com`;
  const regRes = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Full Stack QA Engineer', email, password: 'Password123!' })
  });
  const { token, user } = await regRes.json();
  if (!token) throw new Error('Failed to register user');
  console.log(`✓ Authenticated as: ${user.name} (${user.email})\n`);

  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };

  // ==========================================
  // 1. INTERVIEW QUESTION BANK & EVALUATION
  // ==========================================
  console.log('--- 1. Testing Interview Preparation Question Bank & Evaluation ---');
  
  const rolesToTest = ['Full Stack Developer', 'Cloud Engineer', 'Java Backend Developer', 'Data Analyst'];
  for (const role of rolesToTest) {
    const topicsRes = await fetch(`${BASE_URL}/interviews/topics?role=${encodeURIComponent(role)}`, { headers });
    const topicsData = await topicsRes.json();
    console.log(`✓ ${role}: ${topicsData.topics.length} topics (${topicsData.topics.map(t => t.name).join(', ')})`);
    if (topicsData.topics.length === 0) throw new Error(`Expected topics for ${role}`);
  }

  // 1b. Role Questions filtering (JavaScript, Intermediate)
  const qRes = await fetch(`${BASE_URL}/interviews/questions?role=Full%20Stack%20Developer&topic=JavaScript&difficulty=Intermediate`, { headers });
  const qData = await qRes.json();
  console.log(`✓ Fetched ${qData.questions.length} Intermediate JavaScript questions.`);
  if (qData.questions.length > 0) {
    const q1 = qData.questions[0];
    console.log(`  Sample Question: "${q1.question}"`);
    console.log(`  Expected Points: ${q1.expectedPoints?.length || 0} checklist items`);
    console.log(`  Sample Answer Available: ${Boolean(q1.sampleAnswer)}`);
  }

  // 1c. Submit & Evaluate Interview Answer
  const evalRes = await fetch(`${BASE_URL}/interviews/evaluate`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      questionId: 'fs-js-03',
      answer: 'The JavaScript event loop manages asynchronous non-blocking I/O. Synchronous code runs on the call stack. When promises resolve, callbacks go to the microtask queue, which is completely drained before macrotasks like setTimeout run.',
      role: 'Full Stack Developer',
      topic: 'JavaScript'
    })
  });
  const evalData = await evalRes.json();
  console.log(`✓ Evaluated Interview Answer: Score=${evalData.score}/100, Strengths=${evalData.strengths?.length}, Missing=${evalData.missingPoints?.length}`);
  if (!evalData.success || typeof evalData.score !== 'number') throw new Error('Interview evaluation failed');

  console.log();

  // ==========================================
  // 2. GITHUB PROFILE & REPO ANALYSIS
  // ==========================================
  console.log('--- 2. Testing GitHub Profile & Repository URL Parser ---');
  
  const testUrls = [
    { input: 'torvalds', label: 'Raw username' },
    { input: 'https://github.com/torvalds', label: 'Full profile URL' },
    { input: 'https://github.com/torvalds/', label: 'Profile URL with trailing slash' },
    { input: 'http://github.com/torvalds', label: 'HTTP profile URL' },
    { input: 'https://www.github.com/torvalds', label: 'WWW profile URL' },
    { input: 'https://github.com/torvalds/linux', label: 'Repository URL' },
    { input: 'https://github.com/torvalds/linux/', label: 'Repository URL with trailing slash' }
  ];

  for (const { input, label } of testUrls) {
    const ghRes = await fetch(`${BASE_URL}/github/analyze`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ username: input })
    });
    const ghData = await ghRes.json();
    if (ghRes.status !== 200) {
      throw new Error(`Failed for ${label} (${input}): ${JSON.stringify(ghData)}`);
    }
    console.log(`✓ ${label} (${input}) -> Parsed as: ${ghData.analyzedTarget}, isRepo: ${ghData.isRepositoryAnalysis}`);
  }

  // Test invalid input
  const invalidRes = await fetch(`${BASE_URL}/github/analyze`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ username: 'https://invalid-site.com/foo/bar/baz' })
  });
  if (invalidRes.status !== 400) throw new Error(`Expected 400 for invalid URL, got ${invalidRes.status}`);
  console.log('✓ Invalid non-GitHub URL rejected with 400 Bad Request.\n');

  // ==========================================
  // 3. COMPANY PREPARATION QUESTION BANK
  // ==========================================
  console.log('--- 3. Testing Company-Specific Preparation Question Bank ---');
  
  const testCompanies = ['Amazon', 'Google', 'Microsoft', 'Zoho', 'TCS', 'Infosys', 'Cognizant', 'Freshworks', 'Oracle', 'Deloitte'];
  for (const comp of testCompanies) {
    const compRes = await fetch(`${BASE_URL}/questions/company?company=${encodeURIComponent(comp)}`, { headers });
    const compData = await compRes.json();
    console.log(`✓ ${comp}: ${compData.questions.length} questions, Focus: "${compData.themes.focusAreas?.[0]?.slice(0, 50)}..."`);
    if (compData.questions.length === 0) throw new Error(`Expected questions for ${comp}`);
  }
  console.log();

  // ==========================================
  // 4. LEETCODE PRACTICE TRACKER & PERSISTENCE
  // ==========================================
  console.log('--- 4. Testing LeetCode Coding Practice & Adaptive Recommendations ---');
  
  // 4a. Fetch Problem List
  const lcRes = await fetch(`${BASE_URL}/coding/problems`, { headers });
  const lcData = await lcRes.json();
  console.log(`✓ Fetched ${lcData.problems.length} curated problems across ${new Set(lcData.problems.map(p => p.topic)).size} topics.`);
  console.log(`  Initial Stats: Total=${lcData.stats.total}, Solved=${lcData.stats.solvedCount}, Attempted=${lcData.stats.attemptedCount}`);

  // 4b. Mark Problem as Solved (Two Sum: lc-01)
  const solveRes = await fetch(`${BASE_URL}/coding/problems/lc-01/status`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ status: 'solved' })
  });
  const solveData = await solveRes.json();
  console.log(`✓ Marked lc-01 as solved. Updated DSA score: ${solveData.dsaScore}`);

  // 4c. Mark Problem as Attempted (3Sum: lc-07)
  const attemptRes = await fetch(`${BASE_URL}/coding/problems/lc-07/status`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ status: 'attempted' })
  });
  const attemptData = await attemptRes.json();
  console.log(`✓ Marked lc-07 as attempted.`);

  // 4d. Re-fetch and check updated stats
  const updatedLcRes = await fetch(`${BASE_URL}/coding/problems`, { headers });
  const updatedLcData = await updatedLcRes.json();
  console.log(`✓ Updated Stats: Solved=${updatedLcData.stats.solvedCount}, Attempted=${updatedLcData.stats.attemptedCount}, EasySolved=${updatedLcData.stats.easySolved}`);
  if (updatedLcData.stats.solvedCount !== 1 || updatedLcData.stats.attemptedCount !== 1) {
    throw new Error('Coding practice status counts mismatch');
  }

  // ==========================================
  // 5. APTITUDE PREPARATION PLATFORM
  // ==========================================
  console.log('\n--- 5. Testing Placement Aptitude Preparation Platform ---');
  
  // 5a. Fetch Aptitude Categories
  const aptCatRes = await fetch(`${BASE_URL}/aptitude/categories`, { headers });
  const aptCatData = await aptCatRes.json();
  console.log(`✓ Fetched ${aptCatData.categories.length} Aptitude Categories: Total Questions=${aptCatData.totalQuestions}`);
  for (const cat of aptCatData.categories) {
    console.log(`  - ${cat.name}: ${cat.totalQuestions} questions across ${cat.topics.length} topics`);
  }

  // 5b. Fetch Topic Questions (Time and Work)
  const aptQRes = await fetch(`${BASE_URL}/aptitude/questions?category=quantitative&topic=Time%20and%20Work`, { headers });
  const aptQData = await aptQRes.json();
  console.log(`✓ Fetched ${aptQData.total} questions for Quantitative -> Time and Work`);
  if (aptQData.questions.length < 20) {
    throw new Error(`Expected at least 20 questions for Time and Work, got ${aptQData.questions.length}`);
  }
  const aptSample = aptQData.questions[0];
  console.log(`  Sample Aptitude Question: "${aptSample.question}"`);
  console.log(`  Explanation: "${aptSample.explanation}"`);
  console.log(`  Concept/Formula: "${aptSample.conceptOrFormula}"`);

  // 5c. Evaluate Aptitude Answer
  const aptEvalRes = await fetch(`${BASE_URL}/aptitude/evaluate`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      questionId: aptSample.id,
      selectedOption: aptSample.answer,
      topic: 'Time and Work',
      category: 'quantitative'
    })
  });
  const aptEvalData = await aptEvalRes.json();
  console.log(`✓ Evaluated Aptitude Answer: isCorrect=${aptEvalData.isCorrect}, Formula="${aptEvalData.conceptOrFormula}"`);

  // ==========================================
  // 6. READINESS SCORE & AUDIT LOG PERSISTENCE
  // ==========================================
  console.log('\n--- 6. Testing Readiness Score & Audit Trail in MongoDB ---');
  
  const readRes = await fetch(`${BASE_URL}/progress/readiness`, { headers });
  const readData = await readRes.json();
  console.log(`✓ Readiness Score: ${readData.score}/100, Components: Skills=${readData.components.skills}%, Assessments=${readData.components.assessments}%, Interview=${readData.components.interview}%, Projects=${readData.components.projects}%`);
  console.log(`✓ Recent Audit Trail Entries: ${readData.auditHistory?.length || 0}`);
  if (readData.auditHistory?.length > 0) {
    console.log(`  Latest Audit: "${readData.auditHistory[0].reason}" (${readData.auditHistory[0].action})`);
  }

  // 6b. Verify MongoDB Document Directly
  await mongoose.connect('mongodb://127.0.0.1:27017/careerforge');
  const dbUser = await User.findOne({ email });
  if (!dbUser) throw new Error('User not found in MongoDB');
  const solvedFromDb = dbUser.progress?.codingPractice?.solved || [];
  const attemptedFromDb = dbUser.progress?.codingPractice?.attempted || [];
  const auditFromDb = dbUser.progress?.readinessAudit || [];
  console.log(`✓ MongoDB Document: Solved=[${solvedFromDb.join(', ')}], Attempted=[${attemptedFromDb.join(', ')}], AuditCount=${auditFromDb.length}`);
  if (!solvedFromDb.includes('lc-01') || !attemptedFromDb.includes('lc-07')) {
    throw new Error('MongoDB document does not have expected codingPractice values');
  }
  await mongoose.disconnect();

  console.log('\n=== ALL CAREERFORGE ENHANCEMENTS VERIFIED SUCCESSFULLY! ===');
}

testCoreEnhancements().catch(err => {
  console.error('Enhancement test failed:', err);
  process.exit(1);
});
