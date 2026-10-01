import { parseGitHubUrl } from './src/index.js';

const BASE_URL = 'http://localhost:5000/api';

async function runComprehensiveTests() {
  console.log('================================================================');
  console.log('🚀 CAREERFORGE PRODUCTION-QUALITY SAAS VERIFICATION TEST SUITE');
  console.log('================================================================\n');

  let passedTests = 0;
  let totalTests = 0;

  function assert(condition, message) {
    totalTests++;
    if (!condition) {
      console.error(`❌ FAILED: ${message}`);
      throw new Error(`Assertion failed: ${message}`);
    }
    passedTests++;
    console.log(`  ✓ ${message}`);
  }

  // -------------------------------------------------------------
  // TEST 1: GitHub URL Parsing Helper
  // -------------------------------------------------------------
  console.log('--- TEST 1: GitHub URL & Handle Parsing Logic ---');
  const g1 = parseGitHubUrl('@developer-pro');
  assert(g1 && g1.username === 'developer-pro' && !g1.repo, 'Parses @developer-pro handle correctly');

  const g2 = parseGitHubUrl('https://github.com/octocat/Spoon-Knife.git');
  assert(g2 && g2.username === 'octocat' && g2.repo === 'Spoon-Knife', 'Strips .git and extracts username and repo');

  const g3 = parseGitHubUrl('https://github.com/torvalds');
  assert(g3 && g3.username === 'torvalds' && !g3.repo, 'Parses profile URL correctly');

  const g4 = parseGitHubUrl('invalid@@repo!!');
  assert(g4 === null, 'Rejects invalid GitHub handle characters');

  // -------------------------------------------------------------
  // TEST 2: Health Check & DB Status
  // -------------------------------------------------------------
  console.log('\n--- TEST 2: System Health Check ---');
  const healthRes = await fetch(`${BASE_URL}/health`);
  const healthData = await healthRes.json();
  assert(healthRes.ok && healthData.status === 'ok', `Backend service reports healthy status (${healthData.database})`);

  // -------------------------------------------------------------
  // TEST 3: User Registration & Authentication
  // -------------------------------------------------------------
  console.log('\n--- TEST 3: Candidate Registration & Auth Flow ---');
  const testEmail = `candidate_${Date.now()}@careerforge.io`;
  const regRes = await fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Alex Vance',
      email: testEmail,
      password: 'SecurePassword2026!'
    })
  });
  const regData = await regRes.json();
  assert(regRes.status === 201 && regData.token, `Registered Alex Vance (${testEmail}) with valid JWT token`);

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${regData.token}`
  };

  // -------------------------------------------------------------
  // TEST 4: Profile Onboarding & Role Selection (Cloud Engineer + Amazon)
  // -------------------------------------------------------------
  console.log('\n--- TEST 4: Candidate Onboarding & Skill Baseline ---');
  const updateProfileRes = await fetch(`${BASE_URL}/users/me/profile`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      targetRole: 'Cloud Engineer',
      targetCompany: 'Amazon',
      college: 'Apex Institute of Technology',
      graduationYear: '2026',
      githubUsername: 'alexvance-cloud',
      skills: {
        AWS: 3,
        Linux: 3,
        Docker: 2,
        Kubernetes: 2,
        Terraform: 2,
        Python: 3,
        'CI/CD': 2,
        Networking: 3
      },
      onboardingCompleted: true
    })
  });
  const profileData = await updateProfileRes.json();
  assert(profileData.profile?.targetRole === 'Cloud Engineer', 'Target role successfully set to Cloud Engineer');
  assert(profileData.profile?.targetCompany === 'Amazon', 'Target company successfully set to Amazon');
  assert(profileData.profile?.onboardingCompleted === true, 'Onboarding marked as completed');

  // -------------------------------------------------------------
  // TEST 5: Comprehensive Question Banks Across All 10 Roles
  // -------------------------------------------------------------
  console.log('\n--- TEST 5: Role Coverage Check (Zero Blank Pages across all 10 roles) ---');
  const all10Roles = [
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack Developer',
    'Java Backend Developer',
    'Cloud Engineer',
    'DevOps Engineer',
    'Data Analyst',
    'Software Developer',
    'QA Automation Engineer'
  ];

  for (const r of all10Roles) {
    const topicsRes = await fetch(`${BASE_URL}/interviews/topics?role=${encodeURIComponent(r)}`, { headers });
    const topicsData = await topicsRes.json();
    assert(
      topicsData.topics && topicsData.topics.length >= 3,
      `Role "${r}" has ${topicsData.topics.length} interview topics`
    );

    const questionsRes = await fetch(`${BASE_URL}/interviews/questions?role=${encodeURIComponent(r)}`, { headers });
    const questionsData = await questionsRes.json();
    assert(
      questionsData.questions && questionsData.questions.length >= 10,
      `Role "${r}" has ${questionsData.questions.length} interview questions available`
    );
  }

  // -------------------------------------------------------------
  // TEST 6: Company Question Banks Across All 19 Companies
  // -------------------------------------------------------------
  console.log('\n--- TEST 6: Company Coverage Check (All 19 Target Companies) ---');
  const companiesRes = await fetch(`${BASE_URL}/companies`);
  const companiesList = await companiesRes.json();
  assert(companiesList.length === 19, `Master company database contains all 19 top companies (Found: ${companiesList.length})`);

  for (const c of companiesList) {
    const cRes = await fetch(`${BASE_URL}/questions/company?company=${encodeURIComponent(c.name)}`, { headers });
    const cData = await cRes.json();
    assert(
      cData.questions && cData.questions.length > 0,
      `Company "${c.name}" has ${cData.questions.length} interview questions (Focus: ${cData.themes?.interviewRounds?.[0] || 'Technical'})`
    );
  }

  // -------------------------------------------------------------
  // TEST 7: Personalized Roadmap Stages & Progression
  // -------------------------------------------------------------
  console.log('\n--- TEST 7: Roadmap Stages & Sequential Progression ---');
  const roadmapRes = await fetch(`${BASE_URL}/roadmap/stages`, { headers });
  const roadmapData = await roadmapRes.json();
  assert(roadmapData.stages && roadmapData.stages.length >= 4, `Cloud Engineer roadmap generated ${roadmapData.stages.length} sequential stages`);

  const stage1 = roadmapData.stages[0];
  assert(stage1.status === 'AVAILABLE' || stage1.status === 'IN_PROGRESS', `Stage 1 ("${stage1.title}") is AVAILABLE`);

  // Verify stage details and MCQ bank
  const stage1DetailRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1.id}`, { headers });
  const stage1Detail = await stage1DetailRes.json();
  assert(stage1Detail.assessment?.questions?.length >= 5, `Stage 1 has ${stage1Detail.assessment?.questions?.length} MCQs loaded from stageMcqData`);
  assert(stage1Detail.practice?.length > 0, `Stage 1 has ${stage1Detail.practice?.length} hands-on practice tasks`);

  // 7b. Complete Learning Activity
  const learnRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1.id}/activity`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ activity: 'learning' })
  });
  const learnData = await learnRes.json();
  assert(learnData.progress.learningProgress === 100, 'Marked Stage 1 Learning as 100% complete');

  // 7c. Complete Practice Activity
  const practiceRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1.id}/activity`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ activity: 'practice' })
  });
  const practiceData = await practiceRes.json();
  assert(practiceData.progress.practiceProgress === 100, 'Marked Stage 1 Practice as 100% complete');

  // 7d. Submit MCQ Assessment - First Test Fail (<70%)
  const failSubmitRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1.id}/assessment`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ answers: [99, 99, 99, 99, 99] }) // wrong answers
  });
  const failData = await failSubmitRes.json();
  assert(failData.passed === false && failData.score < 70, `Failed assessment as expected (Score: ${failData.score}%, Next: ${failData.nextAction.slice(0, 40)}...)`);

  // 7e. Fetch questions with answer key from explanations and submit correct answers
  const correctIndices = failData.explanations.map(e => e.correctAnswer);
  const passSubmitRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1.id}/assessment`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ answers: correctIndices })
  });
  const passData = await passSubmitRes.json();
  assert(passData.passed === true && passData.score >= 70, `Passed Stage 1 assessment with score: ${passData.score}%!`);

  // 7f. Stage Interview Practice
  const stageInterviewRes = await fetch(`${BASE_URL}/roadmap/stages/${stage1.id}/activity`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      activity: 'interview',
      answer: 'Amazon VPC provides private isolated virtual networks. Security groups operate at instance level statefully, whereas Network ACLs operate at subnet level statelessly.'
    })
  });
  const stageInterviewData = await stageInterviewRes.json();
  assert(stageInterviewData.feedback && typeof stageInterviewData.feedback.score === 'number', `Interview practice evaluated with score: ${stageInterviewData.feedback?.score}`);

  // 7g. Verify Stage 1 is now COMPLETED and Stage 2 has UNLOCKED to AVAILABLE
  const roadmapUpdatedRes = await fetch(`${BASE_URL}/roadmap/stages`, { headers });
  const roadmapUpdated = await roadmapUpdatedRes.json();
  const updatedStage1 = roadmapUpdated.stages[0];
  const updatedStage2 = roadmapUpdated.stages[1];
  assert(updatedStage1.status === 'COMPLETED', 'Stage 1 successfully marked as COMPLETED');
  assert(updatedStage2.status === 'AVAILABLE', `Stage 2 ("${updatedStage2.title}") transitioned from LOCKED to AVAILABLE`);

  // 7h. Verify Capstone Project definition on Stage 5 (cloud-project)
  const capstoneStage = roadmapUpdated.stages.find(s => s.project);
  assert(capstoneStage !== undefined, `Found capstone project stage: "${capstoneStage?.title}"`);
  const capstoneDetailRes = await fetch(`${BASE_URL}/roadmap/stages/${capstoneStage.id}`, { headers });
  const capstoneDetail = await capstoneDetailRes.json();
  assert(capstoneDetail.project !== null && capstoneDetail.project.milestones?.length >= 5, `Capstone project has ${capstoneDetail.project?.milestones?.length} structured milestones ("${capstoneDetail.project?.name}")`);

  // -------------------------------------------------------------
  // TEST 8: Project Defense & Architectural Tradeoffs Endpoint
  // -------------------------------------------------------------
  console.log('\n--- TEST 8: Project Defense & Architectural Interview Prep ---');
  const projDefenseRes = await fetch(`${BASE_URL}/projects/proj-cloud-01/interview-prep`, { headers });
  const projDefenseData = await projDefenseRes.json();
  assert(projDefenseRes.status === 200, 'GET /api/projects/:id/interview-prep returns HTTP 200');
  assert(projDefenseData.questions && projDefenseData.questions.length >= 3, `Project defense provides ${projDefenseData.questions.length} structured architectural questions`);
  assert(projDefenseData.questions[0].category !== undefined, `Defense questions include architectural categories (e.g. "${projDefenseData.questions[0].category}")`);

  // -------------------------------------------------------------
  // TEST 9: Daily Rotating Challenge & Streaks
  // -------------------------------------------------------------
  console.log('\n--- TEST 9: Daily Challenge Rotation & Streak Tracking ---');
  const dailyRes = await fetch(`${BASE_URL}/daily-challenge`, { headers });
  const dailyData = await dailyRes.json();
  assert(dailyData.challenge && dailyData.challenge.id, `Daily challenge generated with ID: ${dailyData.challenge.id}`);
  assert(dailyData.challenge.role === 'Cloud Engineer', `Challenge tailored to candidate role: ${dailyData.challenge.role}`);
  assert(Boolean(dailyData.challenge.technical?.question), `Technical pillar question: "${dailyData.challenge.technical?.question?.slice(0, 50)}..."`);
  assert(Boolean(dailyData.challenge.coding?.question), `Coding pillar challenge: "${dailyData.challenge.coding?.question?.slice(0, 50)}..."`);
  assert(Boolean(dailyData.challenge.aptitude?.question), `Aptitude pillar challenge: "${dailyData.challenge.aptitude?.question?.slice(0, 50)}..."`);

  const dailySubmitRes = await fetch(`${BASE_URL}/daily-challenge/${dailyData.challenge.id}/submit`, {
    method: 'POST',
    headers
  });
  const dailySubmitData = await dailySubmitRes.json();
  assert(dailySubmitData.success && dailySubmitData.streak >= 1, `Daily challenge completed! Streak updated to ${dailySubmitData.streak}`);

  // -------------------------------------------------------------
  // TEST 10: Coding Practice (150 LeetCode Problems)
  // -------------------------------------------------------------
  console.log('\n--- TEST 10: Coding Practice Tracker (LeetCode Bank) ---');
  // Check master problem bank without role filter
  const codingAllRes = await fetch(`${BASE_URL}/coding/problems?role=All`, { headers });
  const codingAllData = await codingAllRes.json();
  assert(codingAllData.stats.total >= 100, `Coding practice master bank contains ${codingAllData.stats.total} curated problems`);

  // Check role-tailored problems
  const codingRes = await fetch(`${BASE_URL}/coding/problems?role=Cloud%20Engineer`, { headers });
  const codingData = await codingRes.json();
  assert(codingData.stats.total > 0, `Cloud Engineer role has ${codingData.stats.total} tailored coding problems`);

  // Mark problem lc-01 as solved
  const solveRes = await fetch(`${BASE_URL}/coding/problems/lc-01/status`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ status: 'solved' })
  });
  const solveData = await solveRes.json();
  assert(solveData.success && solveData.codingPractice.solved.includes('lc-01'), 'Problem lc-01 marked as solved with DSA score update');

  // -------------------------------------------------------------
  // TEST 11: Aptitude Placement Preparation Bank
  // -------------------------------------------------------------
  console.log('\n--- TEST 11: Aptitude Placement Question Engine ---');
  const aptCatRes = await fetch(`${BASE_URL}/aptitude/categories`, { headers });
  const aptCatData = await aptCatRes.json();
  assert(aptCatData.totalQuestions >= 500, `Aptitude bank loaded ${aptCatData.totalQuestions} questions across Quantitative, Logical & Verbal`);

  const aptQuestionsRes = await fetch(`${BASE_URL}/aptitude/questions?category=quantitative&topic=Percentage`, { headers });
  const aptQuestionsData = await aptQuestionsRes.json();
  assert(aptQuestionsData.questions.length > 0, `Loaded ${aptQuestionsData.questions.length} Percentage aptitude questions`);

  const sampleQ = aptQuestionsData.questions[0];
  const aptEvalRes = await fetch(`${BASE_URL}/aptitude/evaluate`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      questionId: sampleQ.id,
      selectedOption: sampleQ.answer,
      topic: sampleQ.topic,
      category: 'quantitative'
    })
  });
  const aptEvalData = await aptEvalRes.json();
  assert(aptEvalData.isCorrect === true, `Aptitude question evaluated correctly (Explanation: ${aptEvalData.explanation.slice(0, 35)}...)`);

  // -------------------------------------------------------------
  // TEST 12: Mock Interview Session Lifecycle & Persistence
  // -------------------------------------------------------------
  console.log('\n--- TEST 12: Mock Interview Engine & Persistence ---');
  const mockStartRes = await fetch(`${BASE_URL}/mock-interviews/start`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ company: 'Amazon', role: 'Cloud Engineer' })
  });
  const mockStartData = await mockStartRes.json();
  assert(mockStartData.sessionId, `Mock interview session created with ID: ${mockStartData.sessionId}`);

  // Answer 3 rounds to complete mock interview
  for (let i = 1; i <= 3; i++) {
    const mockAnsRes = await fetch(`${BASE_URL}/mock-interviews/${mockStartData.sessionId}/answer`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        answer: `In Cloud Infrastructure round ${i}, we design for high availability across multi-AZ with auto-scaling groups, application load balancers, and CloudWatch metrics alarms.`
      })
    });
    const mockAnsData = await mockAnsRes.json();
    if (i < 3) {
      assert(!mockAnsData.completed, `Question ${i} answered; moving to question ${i + 1}`);
    } else {
      assert(mockAnsData.completed, `Mock interview session completed with average score: ${mockAnsData.averageScore}`);
    }
  }

  // Verify mock history retrieval
  const mockHistoryRes = await fetch(`${BASE_URL}/mock-interviews/history`, { headers });
  const mockHistoryData = await mockHistoryRes.json();
  assert(mockHistoryData.sessions.some(s => s.id === mockStartData.sessionId), 'Completed mock interview appears in interview history');

  // -------------------------------------------------------------
  // TEST 13: Holistic Readiness Score & Activity Feed
  // -------------------------------------------------------------
  console.log('\n--- TEST 13: Final Readiness Score & Dashboard Activity Timeline ---');
  const readinessRes = await fetch(`${BASE_URL}/progress/readiness`, { headers });
  const readinessData = await readinessRes.json();
  assert(typeof readinessData.score === 'number' && readinessData.score > 0, `Candidate readiness score dynamically calculated: ${readinessData.score}% (${readinessData.status})`);
  assert(readinessData.components?.skills !== undefined, `Skills component: ${readinessData.components.skills}%`);
  assert(readinessData.components?.assessments !== undefined, `Assessments component: ${readinessData.components.assessments}%`);
  assert(readinessData.components?.interview !== undefined, `Interview component: ${readinessData.components.interview}%`);
  assert(readinessData.components?.projects !== undefined, `Projects component: ${readinessData.components.projects}%`);
  assert(readinessData.components?.consistency !== undefined, `Consistency component: ${readinessData.components.consistency}%`);

  const studentMeRes = await fetch(`${BASE_URL}/users/me`, { headers });
  const studentMe = await studentMeRes.json();
  assert(studentMe.progress?.recentActivity?.length > 0, `Recent activity timeline recorded ${studentMe.progress.recentActivity.length} real events`);

  console.log('\n================================================================');
  console.log(`🎉 ALL ${passedTests}/${totalTests} TESTS PASSED PERFECTLY!`);
  console.log('================================================================\n');
}

runComprehensiveTests().catch(err => {
  console.error('\n❌ Test Suite Aborted with Error:', err);
  process.exit(1);
});
