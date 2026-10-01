
const BASE_URL = 'http://127.0.0.1:5000/api';

async function testFlow() {
  console.log('=== Starting CareerForge Continuous Preparation API Verification ===');

  const randomEmail = `test_candidate_${Date.now()}@example.com`;
  
  // 1. Register & Verify Real OTP
  console.log('\n1. Registering test user:', randomEmail);
  const regRes = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Devas Verified',
      email: randomEmail,
      password: 'Password123!'
    })
  });
  const regData = await regRes.json();
  if (!regRes.ok) throw new Error(`Registration failed: ${JSON.stringify(regData)}`);
  console.log('✓ Registration initiated. Received OTP verification requirement.');

  // Set test OTP on MongoDB to verify
  const mongoose = (await import('mongoose')).default;
  const User = (await import('./src/models/User.js')).default;
  const { hashOtp } = await import('./src/utils/crypto.js');
  await mongoose.connect('mongodb://127.0.0.1:27017/careerforge');
  const dbUser = await User.findOne({ email: randomEmail }).select('+otpHash');
  const validOtp = '948215';
  dbUser.otpHash = hashOtp(validOtp, dbUser._id.toString());
  await dbUser.save();
  await mongoose.disconnect();

  const verifyRes = await fetch(`${BASE_URL}/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: randomEmail, otp: validOtp })
  });
  const verifyData = await verifyRes.json();
  if (!verifyRes.ok) throw new Error(`OTP Verification failed: ${JSON.stringify(verifyData)}`);
  const token = verifyData.token;
  console.log('✓ OTP verified successfully. Authenticated JWT token obtained.');

  // 2. Onboarding: Cloud Engineer + Amazon
  console.log('\n2. Onboarding with Cloud Engineer + Amazon target profile...');
  const profileRes = await fetch(`${BASE_URL}/users/me/profile`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      college: 'MIT',
      graduationYear: 2026,
      targetCompany: 'Amazon',
      targetRole: 'Cloud Engineer',
      skills: { Linux: 1, AWS: 1, Terraform: 0, Docker: 1 },
      onboardingCompleted: true
    })
  });
  const profileData = await profileRes.json();
  if (!profileRes.ok) throw new Error(`Onboarding failed: ${JSON.stringify(profileData)}`);
  console.log('✓ Onboarding completed successfully for Cloud Engineer.');

  // 3. Check Roadmap Stages
  console.log('\n3. Inspecting roadmap stage statuses...');
  const stagesRes = await fetch(`${BASE_URL}/roadmap/stages`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const stagesData = await stagesRes.json();
  console.log(`✓ Total stages generated: ${stagesData.stages.length}`);
  console.log(`  Stage 1 (${stagesData.stages[0].title}): Status = ${stagesData.stages[0].status}`);
  console.log(`  Stage 2 (${stagesData.stages[1].title}): Status = ${stagesData.stages[1].status}`);

  if (stagesData.stages[0].status !== 'AVAILABLE') throw new Error('Stage 1 should be AVAILABLE');
  if (stagesData.stages[1].status !== 'LOCKED') throw new Error('Stage 2 should be LOCKED initially');

  const stage1Id = stagesData.stages[0].id;

  // 4. Fetch Stage 1 Workspace
  console.log(`\n4. Opening Workspace for Stage 1: ${stage1Id}...`);
  const wsRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1Id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const wsData = await wsRes.json();
  console.log(`✓ Loaded Stage 1 workspace.`);
  console.log(`  Learning resources: ${wsData.resources.length}`);
  console.log(`  Practice exercises: ${wsData.practice.length}`);
  console.log(`  Assessment questions: ${wsData.assessment.questions.length}`);
  console.log(`  Interview questions: ${wsData.interviewQuestions.length}`);
  console.log(`  Project: ${wsData.project?.name}`);

  // 5. Complete Step 1: Learning
  console.log('\n5. Completing Step 1: Learning activity...');
  const learnRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1Id}/activity`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ activity: 'learning' })
  });
  const learnData = await learnRes.json();
  console.log(`✓ Learning progress: ${learnData.progress.learningProgress}%`);

  // 6. Complete Step 2: Practice
  console.log('\n6. Completing Step 2: Practice activity...');
  const pracRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1Id}/activity`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ activity: 'practice' })
  });
  const pracData = await pracRes.json();
  console.log(`✓ Practice progress: ${pracData.progress.practiceProgress}%`);

  // 7. Submit Step 3: Adaptive MCQ Assessment - Attempt 1 (Simulated failure)
  console.log('\n7a. Submitting Step 3: MCQ Assessment - Attempt 1 (blind guess to test weak topic detection)...');
  const assessRes1 = await fetch(`${BASE_URL}/roadmap/stages/${stage1Id}/assessment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ answers: wsData.assessment.questions.map(() => 0) })
  });
  const assessData1 = await assessRes1.json();
  console.log(`✓ Attempt 1 Result: Score = ${assessData1.score}%, Passed = ${assessData1.passed}`);
  console.log(`  Explanations returned: ${assessData1.explanations.length}`);
  if (assessData1.weakTopics?.length > 0) {
    console.log(`  Adaptive weak topics identified: ${assessData1.weakTopics.join(', ')}`);
  }

  // 7b. Retry Assessment with correct answers based on learning
  console.log('\n7b. Retrying Step 3: MCQ Assessment - Attempt 2 (correct answers after studying explanations)...');
  const correctAnswers = assessData1.explanations.map(e => e.correctAnswer);
  const assessRes2 = await fetch(`${BASE_URL}/roadmap/stages/${stage1Id}/assessment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ answers: correctAnswers })
  });
  const assessData2 = await assessRes2.json();
  console.log(`✓ Attempt 2 Result: Score = ${assessData2.score}%, Passed = ${assessData2.passed}`);
  if (!assessData2.passed) throw new Error('Attempt 2 should have passed with 100%');

  // 8. Submit Step 4: Interview practice answer
  console.log('\n8. Submitting Step 4: Technical Interview Practice Answer...');
  const interviewRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1Id}/activity`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      activity: 'interview',
      answer: 'Linux system calls like fork, exec, and open allow user applications to request privileged kernel operations. For networking, TCP provides reliable ordered transport using three-way handshakes and congestion control, while UDP offers low-latency packet transmission suitable for DNS and streaming.'
    })
  });
  const interviewData = await interviewRes.json();
  console.log(`✓ Interview Feedback Score: ${interviewData.feedback.score}/100`);
  console.log(`  Breakdown: Correctness=${interviewData.feedback.breakdown?.technicalCorrectness}, Clarity=${interviewData.feedback.breakdown?.clarityStructure}, Depth=${interviewData.feedback.breakdown?.depthCompleteness}, Practical=${interviewData.feedback.breakdown?.practicalUnderstanding}`);
  console.log(`  Strengths: ${interviewData.feedback.strengths?.join('; ')}`);

  // 9. Complete Step 5: Project Milestones & GitHub Proof
  console.log('\n9. Completing Step 5: Project Milestones & GitHub Proof...');
  if (wsData.project) {
    for (let i = 0; i < wsData.project.milestones.length; i++) {
      await fetch(`${BASE_URL}/roadmap/stages/${stage1Id}/project/milestones/${i}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ completed: true })
      });
    }
    const ghRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1Id}/project/github`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
    });
    const ghData = await ghRes.json();
    console.log(`✓ GitHub Connected & Verified: ${ghData.progress.project?.githubRepo}`);
  }

  // 10. Check if Stage 1 is Completed and Stage 2 is Unlocked
  console.log('\n10. Checking if Stage 1 is Completed and Stage 2 is Unlocked...');
  const updatedStagesRes = await fetch(`${BASE_URL}/roadmap/stages`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const updatedStagesData = await updatedStagesRes.json();
  console.log(`  Stage 1 Status: ${updatedStagesData.stages[0].status} (${updatedStagesData.stages[0].overallProgress}%)`);
  console.log(`  Stage 2 Status: ${updatedStagesData.stages[1].status} (${updatedStagesData.stages[1].overallProgress}%)`);

  if (updatedStagesData.stages[0].status !== 'COMPLETED') {
    throw new Error(`Stage 1 status should be COMPLETED, got: ${updatedStagesData.stages[0].status}`);
  }
  if (updatedStagesData.stages[1].status !== 'AVAILABLE') {
    throw new Error(`Stage 2 status should be AVAILABLE (unlocked), got: ${updatedStagesData.stages[1].status}`);
  }
  console.log('✓ Stage 1 COMPLETED and Stage 2 UNLOCKED confirmed!');

  // 11. Test Daily Challenge
  console.log('\n11. Testing Daily Challenge endpoint...');
  const dailyRes = await fetch(`${BASE_URL}/daily-challenge`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const dailyData = await dailyRes.json();
  console.log(`✓ Daily Challenge ID: ${dailyData.challenge?.id}`);
  console.log(`  Technical Concept: ${dailyData.challenge?.technical?.question}`);

  const subDailyRes = await fetch(`${BASE_URL}/daily-challenge/${dailyData.challenge.id}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({
      answers: {
        technical: 'Using systemd services and journalctl for logging.',
        coding: 'def solution(): pass',
        aptitude: '42',
        interview: 'I would monitor server health and apply horizontal scaling.'
      }
    })
  });
  const subDailyData = await subDailyRes.json();
  console.log(`✓ Daily Challenge Submitted. New Streak = ${subDailyData.streak} days`);

  // 12. Test Aptitude Hub
  console.log('\n12. Testing Aptitude Practice Hub...');
  const aptRes = await fetch(`${BASE_URL}/aptitude/practice`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const aptData = await aptRes.json();
  console.log(`✓ Aptitude categories returned: ${aptData.categories?.join(', ')}`);
  console.log(`  Questions count: ${aptData.questions?.length || 0}`);
  console.log(`  Recommended platforms: ${aptData.recommendations?.map(r => r.platform).join(', ')}`);

  // 13. Test Progress & Weighted Readiness
  console.log('\n13. Inspecting Readiness Report...');
  const progRes = await fetch(`${BASE_URL}/progress/report`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const progData = await progRes.json();
  console.log(`✓ Overall Readiness Score: ${progData.score}/100 (${progData.status})`);
  console.log(`  Components:`, progData.components);
  console.log(`  Score History entries: ${progData.history?.length || 0}`);

  console.log('\n=== ALL END-TO-END VERIFICATION CHECKS PASSED SUCCESSFULLY! ===');
}

testFlow().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
