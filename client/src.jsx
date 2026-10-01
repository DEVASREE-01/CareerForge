import React, { createContext, useContext, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './style.css';
import AuthPortal from './src/components/auth/AuthPortal.jsx';

const API = import.meta.env.VITE_API_URL || '/api';
const AppContext = createContext();
const useApp = () => useContext(AppContext);
const Icon = () => <span className="chev">›</span>;

async function request(path, { token, method = 'GET', body } = {}) {
  const response = await fetch(API + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    ...(body ? { body: JSON.stringify(body) } : {})
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Request failed');
  return data;
}

function Provider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('careerforge_token'));
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState('');

  const logout = async () => {
    try {
      await fetch(API + '/auth/logout', { method: 'POST' });
    } catch (e) {
      // Ignore network error on logout
    }
    localStorage.removeItem('careerforge_token');
    setToken(null);
    setStudent(null);
  };

  const refresh = async () => {
    try {
      // Check session cookie or token
      const res = await fetch(API + '/auth/session', {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {})
        }
      });
      const data = await res.json();
      if (data.authenticated && data.user) {
        setStudent(data.user);
        return;
      }

      if (!token) {
        setLoading(false);
        return;
      }

      setStudent(await request('/users/me', { token }));
    } catch (error) {
      console.error('CareerForge session refresh failed:', error);
      if (token) logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, [token]);

  const value = {
    token,
    setToken,
    student,
    setStudent,
    loading,
    notice,
    setNotice,
    refresh,
    logout,
    async authenticate(mode, payload) {
      const data = await request('/auth/' + mode, { method: 'POST', body: payload });
      if (data.token) {
        localStorage.setItem('careerforge_token', data.token);
        setToken(data.token);
        setStudent(data.user);
      }
      return data;
    }
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

function Shell({ children }) {
  const { student, logout } = useApp();
  const [open, setOpen] = useState(false);
  const links = [
    ['⌂', 'Dashboard', '/'],
    ['◎', 'Preparation plan', '/roadmap'],
    ['⚡', 'Coding practice', '/coding'],
    ['◫', 'Learn', '/learning'],
    ['⌘', 'Projects', '/projects'],
    ['▣', 'Companies', '/companies'],
    ['◌', 'Interview prep', '/interviews'],
    ['◍', 'Mock interview', '/mock-interview'],
    ['✍', 'Aptitude prep', '/aptitude'],
    ['⌁', 'GitHub analysis', '/github'],
    ['▥', 'Certifications', '/certifications'],
    ['◔', 'Progress', '/progress'],
    ['◉', 'Profile', '/profile']
  ];

  return (
    <div className="shell">
      <button className="mob" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button>
      <aside className={open ? 'open' : ''}>
        <b className="brand"><i>CF</i>CareerForge</b>
        <small>WORKSPACE</small>
        {links.map(([i, n, p]) => (
          <NavLink key={p} onClick={() => setOpen(false)} to={p} end={p === '/'}>
            <span>{i}</span>{n}
          </NavLink>
        ))}
        <footer>
          <em>{student?.name?.slice(0, 2).toUpperCase() || 'CF'}</em>
          <div>
            <b>{student?.name}</b>
            <small onClick={logout}>Sign out</small>
          </div>
        </footer>
      </aside>
      <main>
        <header>
          <div>
            <small>YOUR CAREER WORKSPACE</small>
            <h1>Good day, {student?.name?.split(' ')[0] || 'there'} <span>✦</span></h1>
          </div>
          <b className="avatar">{student?.name?.slice(0, 2).toUpperCase()}</b>
        </header>
        {children}
      </main>
    </div>
  );
}

function Auth() {
  const appState = useApp();
  return <AuthPortal appState={appState} />;
}

function Onboarding() {
  const { student, token, refresh } = useApp();
  const nav = useNavigate();
  const [step, setStep] = useState(1);
  const [companies, setCompanies] = useState([]);
  const [roles, setRoles] = useState([]);
  const [form, setForm] = useState({
    college: student?.profile?.college || '',
    graduationYear: student?.profile?.graduationYear || 2026,
    targetCompany: student?.profile?.targetCompany || '',
    targetRole: student?.profile?.targetRole || '',
    skills: student?.profile?.skills || {}
  });
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([request('/companies'), request('/roles')]).then(([c, r]) => {
      setCompanies(c);
      setRoles(r);
    }).catch(error => {
      console.error('CareerForge onboarding options failed:', error);
      setError('Company and role options could not load. Please refresh and try again.');
    });
  }, []);

  if (!student) {
    return (
      <div className="onboard" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div className="loading" style={{ color: 'var(--cf-teal-bright)', fontSize: '16px' }}>⏳ Loading your onboarding profile…</div>
      </div>
    );
  }

  const save = async () => {
    try {
      await request('/users/me/profile', {
        token,
        method: 'PUT',
        body: { ...form, onboardingCompleted: true }
      });
      await refresh();
      nav('/');
    } catch (e) {
      console.error('[Onboarding] Generate plan failed:', e);
      setError(e.message || 'We could not generate your plan. Please try again.');
    }
  };

  const skillNames = ['JavaScript', 'React', 'Node.js', 'REST APIs', 'MongoDB', 'SQL', 'DSA', 'Git', 'Linux', 'AWS', 'Docker', 'Kubernetes', 'Java', 'Python', 'Machine Learning'];

  return (
    <div className="onboard">
      <section className="oncard">
        <b className="brand"><i>CF</i>CareerForge</b>
        <p className="step">STEP {step} OF 3</p>
        <div className="steps"><i className={step >= 1 ? 'on' : ''} /><i className={step >= 2 ? 'on' : ''} /><i className={step >= 3 ? 'on' : ''} /></div>
        {step === 1 && (
          <>
            <h1>Tell us where you’re starting.</h1>
            <p>We’ll use this only to tailor your learning plan.</p>
            <label>College<input value={form.college} onChange={e => setForm({ ...form, college: e.target.value })} placeholder="Your university or college" /></label>
            <label>Graduation year<input type="number" value={form.graduationYear} onChange={e => setForm({ ...form, graduationYear: e.target.value })} /></label>
          </>
        )}
        {step === 2 && (
          <>
            <h1>Choose your destination.</h1>
            <p>Company details are tailored by source, never treated as guarantees.</p>
            <label>Target company
              <select value={form.targetCompany} onChange={e => setForm({ ...form, targetCompany: e.target.value })}>
                <option value="">Select a company</option>
                {companies.map(c => <option key={c.id}>{c.name}</option>)}
              </select>
            </label>
            <label>Target role
              <select value={form.targetRole} onChange={e => setForm({ ...form, targetRole: e.target.value })}>
                <option value="">Select a role</option>
                {roles.map(r => <option key={r}>{r}</option>)}
              </select>
            </label>
          </>
        )}
        {step === 3 && (
          <>
            <h1>Rate your current skills.</h1>
            <p>0 = unfamiliar · 3 = intermediate · 5 = confident building and explaining in depth.</p>
            <div className="skill-inputs">
              {skillNames.map(s => (
                <label key={s}>{s}
                  <select value={form.skills[s] || 0} onChange={e => setForm({ ...form, skills: { ...form.skills, [s]: Number(e.target.value) } })}>
                    {[0, 1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </label>
              ))}
            </div>
          </>
        )}
        {error && <p className="error">{error}</p>}
        <div className="on-actions">
          {step > 1 && <button className="secondary" onClick={() => setStep(step - 1)}>Back</button>}
          {step < 3 ? (
            <button disabled={step === 2 && (!form.targetCompany || !form.targetRole)} onClick={() => setStep(step + 1)}>Continue <Icon /></button>
          ) : (
            <button onClick={save}>Generate my plan <Icon /></button>
          )}
        </div>
      </section>
    </div>
  );
}

function useRemote(path, defaultValue) {
  const { token, setNotice } = useApp();
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    let active = true;
    if (token) {
      request(path, { token })
        .then(data => { if (active) setState(data); })
        .catch(error => {
          console.error(`CareerForge request failed for ${path}:`, error);
          if (active) setNotice('Some preparation data could not be loaded. You can continue using available sections and retry shortly.');
        });
    }
    return () => { active = false; };
  }, [path, token, setNotice]);

  return state;
}

function DailyChallengeCard() {
  const { token, refresh } = useApp();
  const [data, setData] = useState(null);
  const [completed, setCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('technical');
  const [answers, setAnswers] = useState({ technical: '', coding: '', aptitude: '', interview: '' });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const fetchChallenge = async () => {
    try {
      const res = await request('/daily-challenge', { token });
      setData(res.challenge);
      setCompleted(res.isCompleted);
      setStreak(res.streak);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchChallenge();
  }, [token]);

  const submitChallenge = async (e) => {
    e.preventDefault();
    if (!data) return;
    setSubmitting(true);
    try {
      const res = await request(`/daily-challenge/${data.id}/submit`, {
        token,
        method: 'POST',
        body: { answers }
      });
      setCompleted(true);
      setStreak(res.streak);
      setFeedback(res.feedback || 'Challenge successfully completed!');
      await refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <article className="panel"><h3>Loading Daily Challenge...</h3></article>;
  if (!data) return null;

  return (
    <article className="panel" style={{ border: '1px solid var(--cf-border-strong)', background: 'linear-gradient(145deg, rgba(24,168,137,0.06), rgba(0,0,0,0.3))' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label>DAILY PREPARATION CHALLENGE</label>
        <span style={{ fontSize: '13px', color: '#ffb300' }}>🔥 <b>{streak} Day Streak</b></span>
      </div>
      <h3 style={{ margin: '6px 0 10px' }}>Today's Role & Skill Booster</h3>

      {completed ? (
        <div style={{ padding: '16px', borderRadius: '10px', background: 'rgba(0,255,102,0.06)', textAlign: 'center' }}>
          <p style={{ color: '#00ff66', fontWeight: 'bold', margin: '0 0 6px' }}>✓ Completed Today's Challenge!</p>
          <small style={{ color: 'var(--cf-text-muted)' }}>{feedback || 'Consistency builds readiness (+10% score weighting). Return tomorrow to maintain your streak!'}</small>
        </div>
      ) : (
        <form onSubmit={submitChallenge} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', gap: '6px', margin: '6px 0' }}>
            {['technical', 'coding', 'aptitude', 'interview'].map(tab => (
              <button
                type="button"
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: '1px solid var(--cf-border)',
                  background: activeTab === tab ? 'var(--cf-teal)' : 'rgba(255,255,255,0.04)',
                  color: activeTab === tab ? '#062017' : 'var(--cf-text)',
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'capitalize'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'technical' && (
            <div style={{ fontSize: '12px', padding: '10px', border: '1px solid var(--cf-border)', borderRadius: '8px', background: 'rgba(0,0,0,0.2)' }}>
              <b style={{ color: 'var(--cf-teal-bright)' }}>Technical Concept:</b>
              <p style={{ margin: '6px 0' }}>{data.technical.question}</p>
              <textarea
                rows={2}
                placeholder="Explain the concept concisely..."
                value={answers.technical}
                onChange={e => setAnswers({ ...answers, technical: e.target.value })}
                style={{ width: '100%', padding: '8px', fontSize: '12px' }}
              />
            </div>
          )}

          {activeTab === 'coding' && (
            <div style={{ fontSize: '12px', padding: '10px', border: '1px solid var(--cf-border)', borderRadius: '8px', background: 'rgba(0,0,0,0.2)' }}>
              <b style={{ color: 'var(--cf-teal-bright)' }}>Hands-on Coding / Implementation:</b>
              <p style={{ margin: '6px 0' }}>{data.coding.prompt}</p>
              <small style={{ color: 'var(--cf-muted)', display: 'block', marginBottom: '6px' }}>Expected approach: {data.coding.expectedApproach}</small>
              <textarea
                rows={3}
                placeholder="Write your code snippet or pseudocode..."
                value={answers.coding}
                onChange={e => setAnswers({ ...answers, coding: e.target.value })}
                style={{ width: '100%', padding: '8px', fontSize: '12px', fontFamily: 'monospace' }}
              />
            </div>
          )}

          {activeTab === 'aptitude' && (
            <div style={{ fontSize: '12px', padding: '10px', border: '1px solid var(--cf-border)', borderRadius: '8px', background: 'rgba(0,0,0,0.2)' }}>
              <b style={{ color: 'var(--cf-teal-bright)' }}>Aptitude / Quantitative Drill:</b>
              <p style={{ margin: '6px 0' }}>{data.aptitude.question}</p>
              <input
                placeholder="Your solution..."
                value={answers.aptitude}
                onChange={e => setAnswers({ ...answers, aptitude: e.target.value })}
                style={{ width: '100%', height: '36px', padding: '6px 10px', fontSize: '12px' }}
              />
            </div>
          )}

          {activeTab === 'interview' && (
            <div style={{ fontSize: '12px', padding: '10px', border: '1px solid var(--cf-border)', borderRadius: '8px', background: 'rgba(0,0,0,0.2)' }}>
              <b style={{ color: 'var(--cf-teal-bright)' }}>Scenario-Based Interview Prompt:</b>
              <p style={{ margin: '6px 0' }}>{data.interview.scenario}</p>
              <textarea
                rows={2}
                placeholder="How would you handle this scenario?..."
                value={answers.interview}
                onChange={e => setAnswers({ ...answers, interview: e.target.value })}
                style={{ width: '100%', padding: '8px', fontSize: '12px' }}
              />
            </div>
          )}

          <button className="hero-button" style={{ alignSelf: 'start', padding: '8px 16px', marginTop: '4px' }} disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit Today’s Challenge'} <Icon />
          </button>
        </form>
      )}
    </article>
  );
}

function CompanyPrepHub({ company, role }) {
  if (!company) return null;
  return (
    <article className="panel" style={{ marginTop: '16px', background: 'linear-gradient(135deg, rgba(24,168,137,0.1), rgba(17,26,56,0.25))' }}>
      <label>TARGET EMPLOYER FOCUS</label>
      <h3>Preparing for {company}</h3>
      <p style={{ fontSize: '12px', margin: '4px 0 10px' }}>Hiring expectations for {role || 'Engineering'} candidates at {company}:</p>
      <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '12px', color: 'var(--cf-text-muted)', lineHeight: '1.6' }}>
        <li><b>Online Assessment:</b> Speed in Aptitude (Quantitative & Logical) + 2 Medium DSA problems.</li>
        <li><b>Technical Depth:</b> In-depth system architecture, concurrency, and real-world deployment trade-offs.</li>
        <li><b>Behavioral & Leadership:</b> Concrete STAR format responses with metrics and measurable impact.</li>
        <li><b>Proof of Work:</b> GitHub repository showcasing clean architecture, test suites, and CI/CD pipelines.</li>
      </ul>
      <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
        <NavLink to="/aptitude" className="mini-button" style={{ textDecoration: 'none', padding: '6px 10px', fontSize: '11px' }}>Practice Aptitude →</NavLink>
        <NavLink to="/mock-interview" className="mini-button" style={{ textDecoration: 'none', padding: '6px 10px', fontSize: '11px' }}>Mock Interview →</NavLink>
      </div>
    </article>
  );
}

function Dashboard() {
  const { student, token, refresh } = useApp();
  const readiness = useRemote('/progress/report', null);
  const gaps = useRemote('/analysis/skill-gaps', null);
  const roadmapData = useRemote('/roadmaps/personalized', null);

  const complete = async task => {
    await request('/progress/task', { token, method: 'POST', body: { task } });
    await refresh();
  };

  if (!student) {
    return (
      <Shell>
        <div className="loading" style={{ padding: '60px 20px', textAlign: 'center', color: 'var(--cf-teal-bright)', fontSize: '16px' }}>⏳ Loading your career dashboard…</div>
      </Shell>
    );
  }

  const roadPct = roadmapData ? Math.round(roadmapData.items.reduce((s, x) => s + x.progress, 0) / roadmapData.items.length) : 0;
  const targetRole = student.profile?.targetRole || 'Software Engineer';
  const targetCompany = student.profile?.targetCompany || 'Target Employer';

  return (
    <Shell>
      <section className="hero">
        <div>
          <p>◈ Target: {targetCompany} · {targetRole}</p>
          <h2>{readiness?.recommendedNextActions?.[0] || 'Your continuous preparation journey is live.'}</h2>
          <span>Follow the structured Learn → Practice → Assess → Interview → Build path to unlock target readiness.</span>
          <NavLink className="hero-button" to="/roadmap">Open Preparation Plan <Icon /></NavLink>
        </div>
        <div className="ready">
          <strong>{readiness?.score ?? 0}<small>/100</small></strong>
          <p>Job readiness<br /><i>{readiness?.status || 'Calculating…'}</i></p>
        </div>
      </section>

      <section className="stats">
        <Stat t="Roadmap progress" v={`${roadPct}%`} s="Ordered stage completion" />
        <Stat t="Skills confidence" v={`${readiness?.components?.skills ?? 0}%`} s={`${gaps?.high?.length ?? 0} high-priority gaps`} />
        <Stat t="Mock interview" v={`${readiness?.mockInterview?.lastScore ?? 0}%`} s={`${readiness?.mockInterview?.count ?? 0} sessions completed`} />
      </section>

      <section className="cols">
        <div>
          <DailyChallengeCard />
          <CompanyPrepHub company={targetCompany} role={targetRole} />
        </div>
        <article className="panel chart">
          <h3>Readiness Breakdown & Weights</h3>
          <p>Weighted across core job evaluation dimensions.</p>
          <div className="radar" style={{ marginTop: '14px' }}>
            {Object.entries(readiness?.components || {}).map(([k, v]) => (
              <div key={k} style={{ marginBottom: '10px' }}>
                <span style={{ textTransform: 'capitalize' }}>{k}</span>
                <i style={{ width: v + '%' }} />
                <b>{v}%</b>
              </div>
            ))}
          </div>
          {readiness?.history && readiness.history.length > 0 && (
            <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid var(--cf-border)' }}>
              <label style={{ fontSize: '10px', color: '#8bcabb', letterSpacing: '0.1em' }}>RECENT SCORE MOVEMENTS</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '6px' }}>
                {readiness.history.slice(-3).reverse().map((h, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--cf-text-muted)' }}>
                    <span>{h.reason}</span>
                    <b style={{ color: h.delta >= 0 ? '#00ff66' : '#ff4444' }}>{h.delta >= 0 ? `+${h.delta}` : h.delta} pts ({h.score}/100)</b>
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>
      </section>

      <section className="cols lower">
        <article className="panel">
          <h3>Today’s High-Impact Tasks</h3>
          {(readiness?.recommendedNextActions || []).slice(0, 3).map((act, i) => (
            <button className="task" key={i} onClick={() => complete(act)}>
              <i />
              <div>
                <b>{act}</b>
                <small>Recommended milestone · Priority action</small>
              </div>
              <Icon />
            </button>
          ))}
        </article>
        <article className="panel">
          <h3>Priority Skill Gaps for {targetRole}</h3>
          {gaps?.gaps?.slice(0, 4).map(g => (
            <div className="gap" key={g.skill}>
              <div>
                <b>{g.skill}</b>
                <small>Current Level {g.currentLevel}/5 → Required {g.requiredLevel}/5</small>
              </div>
              <span><i style={{ width: (g.currentLevel / 5) * 100 + '%' }} /></span>
              <em>+{g.gap}</em>
            </div>
          ))}
        </article>
      </section>

      <section className="report-strip">
        <article>
          <label>STRONGEST VERIFIED SKILLS</label>
          <p>{readiness?.strongestSkills?.map(x => x.skill + " · L" + x.level).join("  •  ") || "Rate your skills in Profile"}</p>
        </article>
        <article>
          <label>RECOMMENDED NEXT ACTION</label>
          <p>{readiness?.recommendedNextActions?.[0] || "Review your roadmap stage workspace to continue."}</p>
          <NavLink to="/roadmap">Continue roadmap workspace <Icon /></NavLink>
        </article>
      </section>
    </Shell>
  );
}

const Stat = ({ t, v, s }) => (
  <article className="stat">
    <div>
      <p>{t}</p>
      <h2>{v}</h2>
      <small>{s}</small>
    </div>
    <span>↗</span>
  </article>
);

function Roadmap() {
  const { token, student } = useApp();
  const [plan, setPlan] = useState(null);
  const [loadingPlan, setLoadingPlan] = useState(true);
  const [workspace, setWorkspace] = useState(null);
  const [activeTab, setActiveTab] = useState('learn');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState('');
  const [answers, setAnswers] = useState([]);
  const [interviewAnswer, setInterviewAnswer] = useState('');
  const [assessment, setAssessment] = useState(null);

  const loadPlan = async () => {
    if (!token) return;
    setLoadingPlan(true);
    setError('');
    try {
      setPlan(await request('/roadmap/stages', { token }));
    } catch (e) {
      console.error('[Roadmap] plan load failed:', e);
      setError('Unable to load your preparation plan. Please try again.');
    } finally {
      setLoadingPlan(false);
    }
  };

  useEffect(() => {
    loadPlan();
  }, [token]);

  const open = async (id) => {
    setError('');
    setAssessment(null);
    setAnswers([]);
    setActiveTab('learn');
    try {
      const data = await request('/roadmap/stages/' + id, { token });
      setWorkspace(data);
      if (data.progress.assessment?.completed) {
        setAssessment({
          passed: data.progress.assessment.passed,
          score: data.progress.assessment.bestScore,
          weakTopics: data.progress.assessment.weakTopics || [],
          attempts: data.progress.assessment.attempts
        });
      }
    } catch (e) {
      console.error('[Roadmap] stage load failed:', e);
      setError('Unable to load this stage. Try again.');
    }
  };

  const activity = async (activityName) => {
    if (!workspace) return;
    setBusy(activityName);
    setError('');
    try {
      const body = { activity: activityName, ...(activityName === 'interview' ? { answer: interviewAnswer } : {}) };
      const result = await request('/roadmap/stages/' + workspace.stage.id + '/activity', { token, method: 'POST', body });
      if (activityName === 'interview') setInterviewAnswer('');
      setWorkspace({ ...workspace, progress: result.progress, feedback: result.feedback });
    } catch (e) {
      console.error('[Roadmap] activity failed:', e);
      setError(e.message);
    } finally {
      setBusy('');
    }
  };

  const submitAssessment = async () => {
    if (!workspace) return;
    setBusy('assessment');
    setError('');
    try {
      const result = await request('/roadmap/stages/' + workspace.stage.id + '/assessment', { token, method: 'POST', body: { answers } });
      setAssessment(result);
      setWorkspace({ ...workspace, progress: result.progress });
    } catch (e) {
      console.error('[Roadmap] assessment failed:', e);
      setError(e.message);
    } finally {
      setBusy('');
    }
  };

  const retryAssessment = () => {
    setAnswers([]);
    setAssessment(null);
  };

  const milestone = async (index, completed) => {
    if (!workspace) return;
    setBusy('milestone-' + index);
    try {
      const result = await request('/roadmap/stages/' + workspace.stage.id + '/project/milestones/' + index, { token, method: 'POST', body: { completed } });
      setWorkspace({ ...workspace, progress: result.progress });
    } catch (e) {
      console.error('[Roadmap] milestone failed:', e);
      setError(e.message);
    } finally {
      setBusy('');
    }
  };

  const connectGithub = async () => {
    if (!workspace) return;
    setBusy('github');
    try {
      const result = await request('/roadmap/stages/' + workspace.stage.id + '/project/github', { token, method: 'POST' });
      setWorkspace({ ...workspace, progress: result.progress });
    } catch (e) {
      console.error('[Roadmap] github connection failed:', e);
      setError(e.message);
    } finally {
      setBusy('');
    }
  };

  if (workspace) {
    const { stage, progress, resources, practice, assessment: assessmentData, interviewQuestions, project, skillTargets } = workspace;
    const isLearnDone = progress.learningProgress >= 100;
    const isPracticeDone = progress.practiceProgress >= 100;
    const isAssessDone = progress.assessment?.passed;
    const isInterviewDone = progress.interview?.questionsAttempted > 0;
    const isProjectDone = project ? progress.project?.milestonesCompleted?.length === project.milestones?.length : true;

    return (
      <Shell>
        <section className="title roadmap-title">
          <button className="back-link" onClick={() => { setWorkspace(null); loadPlan(); }}>‹ Back to Stage Roadmap</button>
          <label>STAGE {stage.number} · {progress.status.replaceAll('_', ' ')}</label>
          <h2>{stage.title}</h2>
          <p>{stage.description}</p>
        </section>

        {error && <p className="error">{error}</p>}

        <section className="stage-summary">
          {skillTargets.map(item => (
            <article key={item.topic}>
              <span>{item.topic}</span>
              <b>{item.currentLevel}/5 <i>→</i> {item.requiredLevel}/5</b>
              <small>{item.gap ? `Gap: ${item.gap} level${item.gap > 1 ? 's' : ''}` : 'Target level reached'}</small>
            </article>
          ))}
          <article>
            <span>ESTIMATED EFFORT</span>
            <b>{stage.estimatedHours || 14} Hours</b>
            <small>Interactive preparation</small>
          </article>
        </section>

        {/* Next Guided Step */}
        <div className="guided-next-banner">
          <div>
            <p>
              {!isLearnDone ? 'Next Action: Complete core reading & review resources in the Learn tab.' :
               !isPracticeDone ? 'Next Action: Work through the hands-on practice exercises in the Practice tab.' :
               !isAssessDone ? 'Next Action: Take and pass the adaptive MCQ assessment (70%+ threshold) in the Assess tab.' :
               !isInterviewDone ? 'Next Action: Answer interview prompts in the Interview Practice tab.' :
               !isProjectDone ? 'Next Action: Complete the capstone milestones & verify GitHub in the Build & Prove tab.' :
               'All stage checkpoints verified! Stage is complete and readiness score updated.'}
            </p>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--cf-teal-bright)', fontWeight: 700 }}>
            {progress.overallProgress}% Stage Completed
          </span>
        </div>

        {/* Sequential Navigation Tabs */}
        <div className="ws-tabs-bar">
          <button className={`ws-tab-btn ${activeTab === 'learn' ? 'active' : ''}`} onClick={() => setActiveTab('learn')}>
            1. Learn {isLearnDone && <span className="badge-done">✓</span>}
          </button>
          <button className={`ws-tab-btn ${activeTab === 'practice' ? 'active' : ''}`} onClick={() => setActiveTab('practice')}>
            2. Practice {isPracticeDone && <span className="badge-done">✓</span>}
          </button>
          <button className={`ws-tab-btn ${activeTab === 'assess' ? 'active' : ''}`} onClick={() => setActiveTab('assess')}>
            3. Assess {isAssessDone && <span className="badge-done">✓</span>}
          </button>
          <button className={`ws-tab-btn ${activeTab === 'interview' ? 'active' : ''}`} onClick={() => setActiveTab('interview')}>
            4. Interview {isInterviewDone && <span className="badge-done">✓</span>}
          </button>
          {project && (
            <button className={`ws-tab-btn ${activeTab === 'project' ? 'active' : ''}`} onClick={() => setActiveTab('project')}>
              5. Build & Prove {isProjectDone && <span className="badge-done">✓</span>}
            </button>
          )}
        </div>

        {/* Tab 1: Learn */}
        {activeTab === 'learn' && (
          <section className="stage-workspace" style={{ gridTemplateColumns: '1fr' }}>
            <article>
              <label>1. LEARN · OFFICIAL DOCUMENTATION & CURATED RESOURCES</label>
              <h3>Foundational Concepts & Reading Materials</h3>
              <p>Master these core topics to build deep conceptual clarity before attempting practice exercises.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', margin: '14px 0' }}>
                {resources.map((resource, resIdx) => (
                  <div key={`${resource.url}-${resIdx}`} style={{ padding: '14px', border: '1px solid var(--cf-border)', borderRadius: '10px', background: 'rgba(255,255,255,0.02)' }}>
                    <b style={{ color: 'var(--cf-teal-bright)', fontSize: '13px', display: 'block' }}>{resource.title}</b>
                    <p style={{ margin: '6px 0', fontSize: '11px', color: 'var(--cf-text-muted)' }}>Type: {resource.type} · Curated for {student?.profile?.targetRole || 'tech'} preparation</p>
                    <a href={resource.url} target="_blank" rel="noreferrer" className="back-link" style={{ display: 'inline-block', margin: '4px 0 0' }}>
                      Open official documentation ↗
                    </a>
                  </div>
                ))}
              </div>
              <button onClick={() => activity('learning')} disabled={busy === 'learning' || isLearnDone}>
                {isLearnDone ? '✓ Learning Completed' : busy === 'learning' ? 'Saving...' : 'Mark Learning Completed'} <Icon />
              </button>
            </article>
          </section>
        )}

        {/* Tab 2: Practice */}
        {activeTab === 'practice' && (
          <section className="stage-workspace" style={{ gridTemplateColumns: '1fr' }}>
            <article>
              <label>2. PRACTICE · HANDS-ON EXERCISES & SCENARIOS</label>
              <h3>Structured Practical Exercises</h3>
              <p>Apply your theoretical knowledge by completing these hands-on implementations and drills.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '14px 0' }}>
                {practice.map((task, idx) => {
                  const isObj = typeof task === 'object' && task !== null;
                  const title = isObj ? (task.title || task.topic || 'Hands-on Exercise') : task;
                  const objective = isObj ? task.objective : null;
                  const outcome = isObj ? task.expectedOutcome : null;
                  const tools = isObj ? task.recommendedTools : null;
                  const platforms = isObj && Array.isArray(task.externalPlatforms) ? task.externalPlatforms : [];

                  return (
                    <div key={idx} style={{ padding: '14px 16px', border: '1px solid var(--cf-border)', borderRadius: '10px', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ color: 'var(--cf-teal-bright)', fontWeight: 700, fontSize: '13px' }}>0{idx + 1}.</span>
                          <b style={{ fontSize: '13px', color: '#fff' }}>{title}</b>
                        </div>
                        {isObj && task.difficulty && (
                          <span className="round-chip" style={{ fontSize: '10px', padding: '2px 8px', background: 'rgba(53,208,174,0.12)', color: 'var(--cf-teal-bright)' }}>
                            {task.difficulty}
                          </span>
                        )}
                      </div>
                      {objective && (
                        <p style={{ margin: 0, fontSize: '12px', color: '#c5e2d9', lineHeight: '1.4' }}>
                          <strong>Objective:</strong> {objective}
                        </p>
                      )}
                      {outcome && (
                        <p style={{ margin: 0, fontSize: '11px', color: 'var(--cf-text-muted)', lineHeight: '1.4' }}>
                          <strong>Expected Outcome:</strong> {outcome}
                        </p>
                      )}
                      {tools && (
                        <small style={{ color: 'var(--cf-muted)', fontSize: '11px' }}>
                          🛠 Tools: {tools}
                        </small>
                      )}
                      {platforms.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
                          {platforms.map((p, pIdx) => (
                            <a key={pIdx} href={p.url} target="_blank" rel="noreferrer" className="back-link" style={{ fontSize: '11px' }}>
                              Practice on {p.platform} ↗
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <button onClick={() => activity('practice')} disabled={busy === 'practice' || isPracticeDone}>
                {isPracticeDone ? '✓ Practice Exercises Completed' : busy === 'practice' ? 'Saving...' : 'Mark Practice Completed'} <Icon />
              </button>
            </article>
          </section>
        )}

        {/* Tab 3: Assess */}
        {activeTab === 'assess' && (
          <section className="stage-workspace" style={{ gridTemplateColumns: '1fr' }}>
            <article className="stage-assessment">
              <label>3. ASSESS · ADAPTIVE MCQ ASSESSMENT</label>
              <h3>Stage Certification Exam (Passing Threshold: {assessmentData.passScore}%)</h3>
              <p>Complete this assessment to prove your topic mastery. If you fail, subsequent attempts adaptively focus on your weak areas.</p>

              {assessmentData.questions.map((question, index) => (
                <div className="mcq" key={question.id}>
                  <b>{index + 1}. {question.question}</b>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '8px' }}>
                    {question.options.map((option, optionIndex) => (
                      <label key={optionIndex} className={answers[index] === optionIndex ? 'selected' : ''}>
                        <input
                          type="radio"
                          name={question.id}
                          checked={answers[index] === optionIndex}
                          disabled={assessment !== null}
                          onChange={() => setAnswers(Object.assign([...answers], { [index]: optionIndex }))}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                  {assessment && assessment.explanations?.[index] && (
                    <div style={{ marginTop: '10px', padding: '10px 14px', borderRadius: '8px', background: assessment.explanations[index].correct ? 'rgba(0,255,102,0.06)' : 'rgba(255,51,51,0.06)', border: `1px solid ${assessment.explanations[index].correct ? 'rgba(0,255,102,0.2)' : 'rgba(255,51,51,0.2)'}` }}>
                      <p style={{ color: assessment.explanations[index].correct ? '#00ff66' : '#ff4444', fontWeight: 'bold', margin: '0 0 4px', fontSize: '12px' }}>
                        {assessment.explanations[index].correct ? '✓ Correct Answer' : `✗ Incorrect (Correct: ${question.options[assessment.explanations[index].correctAnswer]})`}
                      </p>
                      <span style={{ color: 'var(--cf-text-muted)', fontSize: '11px', lineHeight: '1.5' }}>
                        {assessment.explanations[index].explanation}
                      </span>
                    </div>
                  )}
                </div>
              ))}

              {assessment ? (
                <div style={{ marginTop: '20px', padding: '18px', borderRadius: '12px', border: `1px solid ${assessment.passed ? '#00ff66' : '#ff4444'}`, background: 'rgba(0,0,0,0.3)' }}>
                  <h3 style={{ color: assessment.passed ? '#00ff66' : '#ff4444', margin: '0 0 8px' }}>
                    {assessment.passed ? `🎉 Passed with ${assessment.score}% (${assessment.correct}/${assessment.totalQuestions || assessmentData.questions.length})` : `Assessment Score: ${assessment.score}% (Pass threshold: ${assessmentData.passScore}%)`}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--cf-text-muted)', margin: '0 0 12px' }}>
                    {assessment.passed ? 'Excellent! This checkpoint is verified and credited toward your readiness score.' : 'You did not meet the pass mark. Review the weak topics below and retry the adaptive test.'}
                  </p>

                  {!assessment.passed && assessment.weakTopics?.length > 0 && (
                    <div style={{ margin: '10px 0 14px', padding: '12px', borderRadius: '8px', background: 'rgba(255,179,0,0.08)', border: '1px solid rgba(255,179,0,0.25)' }}>
                      <b style={{ color: '#ffb300', fontSize: '12px' }}>Adaptive Focus: Identified Weak Topics</b>
                      <ul style={{ margin: '6px 0 0', paddingLeft: '18px', fontSize: '11px', color: 'var(--cf-text)' }}>
                        {assessment.weakTopics.map(t => <li key={t}>{t}</li>)}
                      </ul>
                    </div>
                  )}

                  {!assessment.passed && (
                    <button onClick={retryAssessment} className="hero-button" style={{ padding: '8px 16px' }}>
                      Retry Adaptive Assessment <Icon />
                    </button>
                  )}
                </div>
              ) : (
                <button
                  onClick={submitAssessment}
                  disabled={busy === 'assessment' || answers.filter(x => x !== undefined).length !== assessmentData.questions.length}
                  style={{ marginTop: '14px' }}
                >
                  {busy === 'assessment' ? 'Grading Assessment...' : 'Submit Assessment'} <Icon />
                </button>
              )}
            </article>
          </section>
        )}

        {/* Tab 4: Interview */}
        {activeTab === 'interview' && (
          <section className="stage-workspace" style={{ gridTemplateColumns: '1fr' }}>
            <article className="stage-interview">
              <label>4. INTERVIEW · TECHNICAL & SCENARIO PRACTICE</label>
              <h3>Target Interview Questions & Evaluation</h3>
              <p>Practice articulating your answers clearly. Formulate your response incorporating architectural concepts, trade-offs, and concrete examples.</p>

              {interviewQuestions.map(question => (
                <details key={question.id}>
                  <summary>{question.question} ({question.difficulty || 'Medium'})</summary>
                  <p style={{ margin: '6px 0', fontSize: '11px', color: 'var(--cf-teal-bright)' }}>Expected structure: {question.expectedAnswerPoints.join(' · ')}</p>
                  <p style={{ margin: '4px 0', fontSize: '11px', color: 'var(--cf-muted)' }}>Sample approach: {question.sampleAnswer}</p>
                </details>
              ))}

              <div style={{ marginTop: '14px' }}>
                <b style={{ fontSize: '12px', color: '#fff', display: 'block', marginBottom: '6px' }}>Type your detailed response to any question above:</b>
                <textarea
                  rows={5}
                  value={interviewAnswer}
                  onChange={e => setInterviewAnswer(e.target.value)}
                  placeholder="Explain your approach thoroughly, including definition, core components, trade-offs, and practical industry considerations..."
                />
                <button
                  onClick={() => activity('interview')}
                  disabled={busy === 'interview' || interviewAnswer.trim().length < 15}
                  style={{ marginTop: '10px' }}
                >
                  {busy === 'interview' ? 'Evaluating Answer...' : 'Submit for Evaluation'} <Icon />
                </button>
              </div>

              {workspace.feedback && (
                <div className="eval-scorecard">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <b style={{ fontSize: '14px', color: '#00ff66' }}>Interview Evaluation Score: {workspace.feedback.score}/100</b>
                    <small style={{ color: 'var(--cf-muted)' }}>Source: {workspace.feedback.source || 'Structured Evaluator'}</small>
                  </div>
                  {workspace.feedback.breakdown && (
                    <div className="eval-dim-grid">
                      <div className="eval-dim"><small>Correctness</small><b>{workspace.feedback.breakdown.technicalCorrectness}/25</b></div>
                      <div className="eval-dim"><small>Clarity</small><b>{workspace.feedback.breakdown.clarityStructure}/25</b></div>
                      <div className="eval-dim"><small>Depth</small><b>{workspace.feedback.breakdown.depthCompleteness}/25</b></div>
                      <div className="eval-dim"><small>Practical</small><b>{workspace.feedback.breakdown.practicalUnderstanding}/25</b></div>
                    </div>
                  )}
                  {workspace.feedback.strengths?.length > 0 && (
                    <div style={{ margin: '8px 0', fontSize: '11px' }}>
                      <b style={{ color: '#00ff66' }}>Strengths:</b>
                      <ul style={{ margin: '4px 0 0', paddingLeft: '16px', color: 'var(--cf-text)' }}>
                        {workspace.feedback.strengths.map(s => <li key={s}>{s}</li>)}
                      </ul>
                    </div>
                  )}
                  {workspace.feedback.suggestions?.length > 0 && (
                    <div style={{ margin: '8px 0', fontSize: '11px' }}>
                      <b style={{ color: '#ffb300' }}>Actionable Suggestions:</b>
                      <ul style={{ margin: '4px 0 0', paddingLeft: '16px', color: 'var(--cf-text-muted)' }}>
                        {workspace.feedback.suggestions.map(s => <li key={s}>{s}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </article>
          </section>
        )}

        {/* Tab 5: Build & Prove */}
        {activeTab === 'project' && project && (
          <section className="stage-workspace" style={{ gridTemplateColumns: '1fr' }}>
            <article className="stage-project">
              <label>5. BUILD & PROVE · CAPSTONE PROJECT & GITHUB PROOF</label>
              <h3>{project.name}</h3>
              <p style={{ fontSize: '12px', margin: '6px 0 12px', color: '#c5e2d9' }}>{project.businessProblem}</p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--cf-border)', borderRadius: '8px' }}>
                  <small style={{ color: 'var(--cf-teal-bright)', fontWeight: 700 }}>ARCHITECTURE</small>
                  <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'var(--cf-text-muted)' }}>{project.architecture}</p>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--cf-border)', borderRadius: '8px' }}>
                  <small style={{ color: 'var(--cf-teal-bright)', fontWeight: 700 }}>TECH STACK</small>
                  <p style={{ margin: '4px 0 0', fontSize: '11px', color: 'var(--cf-text-muted)' }}>{project.technologies?.join(' · ')}</p>
                </div>
              </div>

              <div style={{ marginBottom: '16px', padding: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--cf-border)', borderRadius: '10px' }}>
                <b style={{ fontSize: '12px' }}>GitHub Proof & Verification:</b>
                {progress.project?.githubConnected ? (
                  <p style={{ color: '#00ff66', fontSize: '12px', margin: '6px 0 0' }}>✓ Verified: {progress.project.githubRepo}</p>
                ) : (
                  <div>
                    <p style={{ fontSize: '11px', color: 'var(--cf-text-muted)', margin: '4px 0 8px' }}>
                      Connect your GitHub repo to verify commits, project architecture, and implementation quality.
                    </p>
                    <button className="mini-button" onClick={connectGithub} disabled={busy === 'github'} style={{ padding: '6px 12px', fontSize: '11px' }}>
                      {busy === 'github' ? 'Verifying...' : 'Verify GitHub Repository Proof'}
                    </button>
                  </div>
                )}
              </div>

              <h4 style={{ margin: '14px 0 8px', fontSize: '13px' }}>Milestone Checklist:</h4>
              {project.milestones.map((item, index) => {
                const complete = progress.project?.milestonesCompleted?.includes(index);
                return (
                  <button className="milestone" key={item} onClick={() => milestone(index, !complete)} disabled={busy === 'milestone-' + index}>
                    <i className={complete ? 'done' : ''}>{complete ? '✓' : '○'}</i>
                    <span style={{ fontSize: '12px' }}>{item}</span>
                  </button>
                );
              })}
            </article>
          </section>
        )}

        {/* Stage Overall Progress Checklist */}
        <section className="stage-progress">
          <div><span>Learning</span><i><em style={{ width: progress.learningProgress + '%' }} /></i><b>{progress.learningProgress}%</b></div>
          <div><span>Practice</span><i><em style={{ width: progress.practiceProgress + '%' }} /></i><b>{progress.practiceProgress}%</b></div>
          <div><span>Assessment</span><i><em style={{ width: (progress.assessment?.bestScore || 0) + '%' }} /></i><b>{progress.assessment?.bestScore || 0}%</b></div>
          <div><span>Interview</span><i><em style={{ width: progress.interview?.questionsAttempted ? '100%' : '0%' }} /></i><b>{progress.interview?.questionsAttempted ? 'Done' : 'Pending'}</b></div>
          {project && <div><span>Project</span><i><em style={{ width: ((progress.project?.milestonesCompleted?.length || 0) / project.milestones.length * 100) + '%' }} /></i><b>{progress.project?.milestonesCompleted?.length || 0}/{project.milestones.length}</b></div>}
          <p className={progress.canComplete ? 'success' : 'api-note'}>
            {progress.canComplete ? '✓ Stage criteria completed — next stage is unlocked!' : 'Complete learning, practice exercises, pass the MCQ assessment (>=70%), and submit an interview response to complete this stage.'}
          </p>
        </section>
      </Shell>
    );
  }

  return (
    <Shell>
      <section className="title">
        <label>PERSONALIZED PREPARATION JOURNEY</label>
        <h2>Your {student?.profile?.targetRole || 'career'} roadmap</h2>
        <p>Continuous career preparation workspace connecting learning, practice, assessment, interview simulations, and project proof of work.</p>
      </section>

      {error && (
        <div style={{ padding: '16px', background: 'rgba(255,77,109,0.12)', border: '1px solid rgba(255,77,109,0.3)', borderRadius: '10px', color: '#ff94a8', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <b>⚠ {error}</b>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#ffd996' }}>Please check your network connection or try refreshing your roadmap.</p>
          </div>
          <button className="filter-btn active" onClick={loadPlan} style={{ background: '#ff4d6d', color: '#fff', padding: '6px 14px' }}>
            ↻ Retry
          </button>
        </div>
      )}

      {loadingPlan && (
        <div className="empty" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '50px 20px', fontSize: '14px' }}>
          <span style={{ fontSize: '22px' }}>⏳</span> Loading your personalized preparation plan…
        </div>
      )}

      {!loadingPlan && !error && (
        <div className="road roadmap-stages">
          {plan?.stages?.map(stage => (
            <article className={(stage.status || 'available').toLowerCase()} key={stage.id}>
              <b>{stage.status === 'COMPLETED' ? '✓' : stage.number}</b>
              <div>
                <small>STAGE {stage.number} · {(stage.status || 'AVAILABLE').replaceAll('_', ' ')}</small>
                <h3>{stage.title}</h3>
                <p>{(stage.topics || []).join(' · ')}</p>
                <span><i style={{ width: (stage.overallProgress || 0) + '%' }} /></span>
                <em>{stage.overallProgress || 0}% progress</em>
              </div>
              <button disabled={stage.status === 'LOCKED'} onClick={() => open(stage.id)}>
                {stage.status === 'LOCKED' ? 'Locked' : 'Open Workspace'} <Icon />
              </button>
            </article>
          ))}

          {(!plan?.stages || plan.stages.length === 0) && (
            <div className="empty">No roadmap stages found for your target role. Try updating your target role in Profile.</div>
          )}
        </div>
      )}
    </Shell>
  );
}

function Projects() {
  const { token } = useApp();
  const data = useRemote('/projects/recommended', null);
  const [selected, setSelected] = useState(null);
  const [prep, setPrep] = useState(null);

  const prepare = async id => {
    setSelected(id);
    try {
      setPrep(await request('/projects/' + id + '/interview-prep', { token }));
    } catch (error) {
      console.error('CareerForge project interview preparation failed:', error);
      setPrep({ project: { name: 'Project interview preparation' }, notice: 'Project interview prompts could not load. Please try again.', questions: [] });
    }
  };

  return (
    <Shell>
      <section className="title">
        <label>SMART RECOMMENDATIONS</label>
        <h2>Projects that close your gaps</h2>
        <p>Ranked from your skills, gaps, and target company.</p>
      </section>
      <div className="projects">
        {data?.projects?.map(p => (
          <article key={p.id}>
            <div><b>⌘</b><em>{p.score}% match</em></div>
            <h3>{p.name}</h3>
            <p>{p.reason}</p>
            <section>{p.skills?.map(s => <span key={s}>{s}</span>)}</section>
            <button className="mini-button" onClick={() => prepare(p.id)}>Prepare to explain <Icon /></button>
            <footer>{p.difficulty} · {p.time}<Icon /></footer>
          </article>
        ))}
      </div>
      {prep && (
        <section className="project-prep" style={{ marginTop: '24px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <label>PROJECT INTERVIEW DEFENSE & ARCHITECTURE</label>
              <h2>{prep.project.name}</h2>
              <p>{prep.notice}</p>
            </div>
            <button className="dark-button" onClick={() => setPrep(null)} style={{ padding: '6px 12px', fontSize: '11px' }}>
              ✕ Close Defense Mode
            </button>
          </div>

          {prep.project.problemStatement && (
            <div style={{ margin: '14px 0', padding: '12px 14px', borderRadius: '10px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--cf-border)' }}>
              <b style={{ color: 'var(--cf-teal-bright)', fontSize: '12px', display: 'block', marginBottom: '4px' }}>Project Problem Statement & Business Impact:</b>
              <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.5' }}>{prep.project.problemStatement}</p>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', marginTop: '16px' }}>
            {prep.questions?.map((q, i) => (
              <article key={q.category || i} style={{ padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--cf-border)' }}>
                <span className="round-chip" style={{ background: 'rgba(53,208,174,0.15)', color: 'var(--cf-teal-bright)', fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px' }}>
                  {q.category}
                </span>
                <h3 style={{ fontSize: '14px', margin: '10px 0 6px', color: '#fff', lineHeight: '1.4' }}>{q.question}</h3>
                <small style={{ color: 'var(--cf-muted)', fontSize: '11px', display: 'block' }}>
                  Pro-tip: Structure your answer using the STAR method, detailing trade-offs and quantifiable outcomes.
                </small>
              </article>
            ))}
          </div>
        </section>
      )}
      <div className="why">
        <h3>Why these recommendations?</h3>
        <p>{data?.formula || 'Curated to address verified skill gaps and role expectations'}. The explanation identifies exactly which gaps each project addresses.</p>
      </div>
    </Shell>
  );
}

function Companies() {
  const data = useRemote('/companies', []);
  const nav = useNavigate();
  return (
    <Shell>
      <section className="title">
        <label>EXPLORE EMPLOYERS</label>
        <h2>Company preparation hubs</h2>
        <p>Target interview rounds, core hiring focuses, and company-specific preparation questions.</p>
      </section>
      <div className="companies">
        {data?.map(c => (
          <button className="company-card" onClick={() => nav('/interviews?tab=company&company=' + encodeURIComponent(c.name))} key={c.id}>
            <b>{c.name[0]}</b>
            <div>
              <h3>{c.name}</h3>
              <p>{c.industry} · {c.locations?.[0]}</p>
              <span>View interview questions ›</span>
            </div>
          </button>
        ))}
      </div>
    </Shell>
  );
}

function Interviews() {
  const { student, token, refresh } = useApp();
  const nav = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const initialTab = searchParams.get('tab') === 'company' || searchParams.get('company') ? 'company' : 'role';
  const initialCompany = searchParams.get('company') || student?.profile?.targetCompany || 'Amazon';
  const initialRole = searchParams.get('role') || student?.profile?.targetRole || 'Full Stack Developer';

  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [selectedCompany, setSelectedCompany] = useState(initialCompany);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');

  const [roleQuestionsData, setRoleQuestionsData] = useState(null);
  const [loadingRoleQuestions, setLoadingRoleQuestions] = useState(true);
  const [errorRoleQuestions, setErrorRoleQuestions] = useState(null);
  const [companyQuestionsData, setCompanyQuestionsData] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [evalResults, setEvalResults] = useState({});
  const [evaluatingId, setEvaluatingId] = useState(null);

  // Fetch Role Questions
  const fetchRoleQuestions = () => {
    if (!token) return;
    setLoadingRoleQuestions(true);
    setErrorRoleQuestions(null);
    const params = new URLSearchParams({
      role: selectedRole,
      topic: selectedTopic,
      difficulty,
      type: category,
      search
    });
    request('/interviews/questions?' + params.toString(), { token })
      .then(res => {
        setRoleQuestionsData(res);
        setErrorRoleQuestions(null);
      })
      .catch(err => {
        console.error('Failed to load interview questions:', err);
        setErrorRoleQuestions(err.message || 'Unable to load interview questions. Please try again.');
      })
      .finally(() => setLoadingRoleQuestions(false));
  };

  useEffect(() => {
    fetchRoleQuestions();
  }, [token, selectedRole, selectedTopic, difficulty, category, search]);

  // Fetch Company Questions
  useEffect(() => {
    if (!token) return;
    const params = new URLSearchParams({
      company: selectedCompany,
      role: selectedRole,
      difficulty,
      category,
      search
    });
    request('/questions/company?' + params.toString(), { token })
      .then(setCompanyQuestionsData)
      .catch(console.error);
  }, [token, selectedCompany, selectedRole, difficulty, category, search]);

  const handleEvaluate = async (q) => {
    const ans = userAnswers[q.id];
    if (!ans || ans.trim().length < 5) return;
    setEvaluatingId(q.id);
    try {
      const res = await request('/interviews/evaluate', {
        token,
        method: 'POST',
        body: {
          questionId: q.id,
          answer: ans,
          role: selectedRole,
          topic: q.topic
        }
      });
      setEvalResults(prev => ({ ...prev, [q.id]: res }));
      await refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setEvaluatingId(null);
    }
  };

  const rolesList = Array.from(new Set([
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'MERN Stack Developer',
    'Java Backend Developer',
    'Cloud Engineer',
    'DevOps Engineer',
    'Data Analyst',
    'Software Developer',
    'QA Automation Engineer',
    ...(student?.profile?.targetRole ? [student.profile.targetRole] : [])
  ]));
  const topicsList = ['All', ...(roleQuestionsData?.topics?.map(t => t.name) || ['JavaScript', 'React', 'Node.js & Express', 'REST APIs', 'SQL', 'System Design', 'Behavioral & HR'])];
  const companiesList = companyQuestionsData?.availableCompanies || [
    'Amazon', 'Google', 'Microsoft', 'Zoho', 'Freshworks', 'TCS', 'Infosys', 'Cognizant', 'Oracle', 'Deloitte',
    'Accenture', 'Wipro', 'HCLTech', 'Capgemini', 'Tech Mahindra', 'LTIMindtree', 'IBM', 'Chargebee', 'Hexaware'
  ];

  return (
    <Shell>
      <section className="title">
        <label>INTERVIEW PREPARATION ENGINE</label>
        <h2>Master technical & behavioral rounds</h2>
        <p>Topic-specific question banks with instant answer evaluation, checklists, and company hiring strategies.</p>
      </section>

      {/* Tab Switcher: Role Questions vs Company Questions */}
      <div className="ws-tabs-bar" style={{ marginBottom: '16px' }}>
        <button
          className={'ws-tab-btn ' + (activeTab === 'role' ? 'active' : '')}
          onClick={() => { setActiveTab('role'); setDifficulty('All'); setCategory('All'); setSearch(''); }}
        >
          <span>🎯</span> Role Interview Question Bank
        </button>
        <button
          className={'ws-tab-btn ' + (activeTab === 'company' ? 'active' : '')}
          onClick={() => { setActiveTab('company'); setDifficulty('All'); setCategory('All'); setSearch(''); }}
        >
          <span>🏢</span> Company-Specific Question Bank
        </button>
      </div>

      {activeTab === 'role' ? (
        <>
          {/* Target Role Selector */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', margin: '10px 0 14px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700 }}>TARGET ROLE:</span>
            {rolesList.map(r => (
              <button
                key={r}
                onClick={() => { setSelectedRole(r); setSelectedTopic('All'); }}
                className={'filter-btn ' + (selectedRole === r ? 'active' : '')}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Topic selection chips */}
          <div className="filter-bar" style={{ marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700 }}>TOPIC:</span>
            {topicsList.map(t => (
              <button key={t} onClick={() => setSelectedTopic(t)} className={'filter-btn ' + (selectedTopic === t ? 'active' : '')}>
                {t}
              </button>
            ))}
          </div>

          {/* Filters Bar: Difficulty & Search */}
          <div className="filter-bar" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700 }}>DIFFICULTY:</span>
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map(d => (
                <button key={d} onClick={() => setDifficulty(d)} className={'filter-btn ' + (difficulty === d ? 'active' : '')}>
                  {d}
                </button>
              ))}
              <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700, marginLeft: '8px' }}>ROUND:</span>
              {['All', 'Technical', 'Coding', 'System Design', 'Behavioral', 'Debugging'].map(c => (
                <button key={c} onClick={() => setCategory(c)} className={'filter-btn ' + (category === c ? 'active' : '')}>
                  {c}
                </button>
              ))}
            </div>
            <input
              type="search"
              placeholder="Search interview questions…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '220px', padding: '6px 12px', fontSize: '12px' }}
            />
          </div>

          {/* Question Count & Status */}
          <div style={{ margin: '14px 0 8px', color: 'var(--cf-text-muted)', fontSize: '12px' }}>
            Showing <b>{roleQuestionsData?.questions?.length || 0}</b> {selectedTopic !== 'All' ? selectedTopic : ''} questions for <b>{selectedRole}</b>
          </div>

          {/* Error Banner */}
          {errorRoleQuestions && (
            <div style={{ padding: '16px', background: 'rgba(255,77,109,0.12)', border: '1px solid rgba(255,77,109,0.3)', borderRadius: '10px', color: '#ff94a8', marginBottom: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <b>⚠ {errorRoleQuestions}</b>
                <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#ffd996' }}>Please check your network connection or try refreshing the questions.</p>
              </div>
              <button className="filter-btn active" onClick={fetchRoleQuestions} style={{ background: '#ff4d6d', color: '#fff', padding: '6px 14px' }}>
                ↻ Retry
              </button>
            </div>
          )}

          {/* Loading Indicator */}
          {loadingRoleQuestions && (
            <div className="empty" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '40px 20px', fontSize: '14px' }}>
              <span style={{ fontSize: '20px' }}>⏳</span> Loading your personalized interview questions…
            </div>
          )}

          {/* Question List */}
          {!loadingRoleQuestions && !errorRoleQuestions && (
            <div className="coding-list">
              {roleQuestionsData?.questions?.map((q, idx) => (
                <article className="q-rich-card" key={q.id || idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span className={'diff-pill ' + q.difficulty}>{q.difficulty}</span>
                      <span className="coding-tag" style={{ background: 'rgba(53,208,174,0.15)', color: 'var(--cf-teal-bright)', fontWeight: 700 }}>{q.topic}</span>
                      <span className="coding-tag">{q.type}</span>
                    </div>
                    <small style={{ color: 'var(--cf-muted)', fontSize: '10px' }}>{q.source}</small>
                  </div>

                  <h3>{q.question}</h3>

                  {q.tags && q.tags.length > 0 && (
                    <div className="coding-tags">
                      {q.tags.map(tag => <span key={tag} className="coding-tag">#{tag}</span>)}
                    </div>
                  )}

                  {q.expectedPoints && (
                    <details className="q-drawer">
                      <summary>Key Expected Points (Evaluation Checklist)</summary>
                      <ul>
                        {q.expectedPoints.map((pt, i) => <li key={i}>{pt}</li>)}
                      </ul>
                    </details>
                  )}

                  {/* Practice & Self Answer Submission */}
                  <details className="q-drawer" open={Boolean(evalResults[q.id])}>
                    <summary style={{ color: 'var(--cf-teal-bright)' }}>✍ Practice Your Answer & Get AI Feedback</summary>
                    <div style={{ marginTop: '10px' }}>
                      <textarea
                        placeholder="Type your structured answer here (explain key concepts, trade-offs, and examples)..."
                        value={userAnswers[q.id] || ''}
                        onChange={e => setUserAnswers({ ...userAnswers, [q.id]: e.target.value })}
                        style={{ minHeight: '90px', fontSize: '12px' }}
                      />
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
                        <button
                          className="btn-action"
                          disabled={evaluatingId === q.id || !userAnswers[q.id]?.trim()}
                          onClick={() => handleEvaluate(q)}
                          style={{ background: 'var(--cf-teal)', color: '#062017', fontWeight: 800 }}
                        >
                          {evaluatingId === q.id ? 'Evaluating…' : 'Evaluate My Answer ✓'}
                        </button>
                      </div>

                      {/* Evaluation Scorecard */}
                      {evalResults[q.id] && (
                        <div className="eval-scorecard" style={{ marginTop: '12px', padding: '14px', background: 'rgba(0,0,0,0.4)', borderRadius: '10px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>Evaluation Result</span>
                            <span className={'diff-pill ' + (evalResults[q.id].score >= 70 ? 'Easy' : 'Hard')}>
                              Score: {evalResults[q.id].score}/100
                            </span>
                          </div>
                          <p style={{ margin: '8px 0', fontSize: '12px', color: '#cbeef4' }}>
                            {evalResults[q.id].feedback}
                          </p>

                          {evalResults[q.id].strengths?.length > 0 && (
                            <div style={{ marginTop: '8px' }}>
                              <b style={{ color: '#00ff88', fontSize: '11px' }}>✓ Covered Concepts:</b>
                              <ul style={{ margin: '4px 0', paddingLeft: '16px', fontSize: '11px', color: '#a7d5c9' }}>
                                {evalResults[q.id].strengths.map((s, i) => <li key={i}>{s}</li>)}
                              </ul>
                            </div>
                          )}

                          {evalResults[q.id].missingPoints?.length > 0 && (
                            <div style={{ marginTop: '8px' }}>
                              <b style={{ color: '#ffb703', fontSize: '11px' }}>⚠ Areas to Deepen:</b>
                              <ul style={{ margin: '4px 0', paddingLeft: '16px', fontSize: '11px', color: '#ffd996' }}>
                                {evalResults[q.id].missingPoints.map((m, i) => <li key={i}>{m}</li>)}
                              </ul>
                            </div>
                          )}

                          {evalResults[q.id].isWeakTopic && (
                            <div style={{ marginTop: '10px', padding: '8px 10px', borderRadius: '6px', background: 'rgba(255,77,109,0.12)', border: '1px solid rgba(255,77,109,0.3)', color: '#ff94a8', fontSize: '11px' }}>
                              🎯 Marked <b>{q.topic}</b> as a focus area in your preparation plan. Check the LeetCode Practice Tracker for recommended problems!
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </details>

                  {q.sampleAnswer && (
                    <details className="q-drawer">
                      <summary>Sample Model Answer & Reasoning</summary>
                      <div className="q-sample-ans">
                        {q.sampleAnswer}
                      </div>
                    </details>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
                    <button
                      className="btn-action"
                      onClick={() => nav('/mock-interview?company=' + encodeURIComponent(student?.profile?.targetCompany || 'Amazon') + '&role=' + encodeURIComponent(selectedRole))}
                    >
                      Practice in AI Mock Interview ›
                    </button>
                  </div>
                </article>
              ))}

              {(!roleQuestionsData?.questions || roleQuestionsData.questions.length === 0) && (
                <div className="empty">No interview questions found matching your filter criteria. Try selecting "All" or a different topic/difficulty.</div>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          {/* Company switcher pills */}
          <div className="filter-bar" style={{ marginBottom: '14px' }}>
            <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700 }}>COMPANY:</span>
            {companiesList.map(c => (
              <button key={c} onClick={() => setSelectedCompany(c)} className={'filter-btn ' + (selectedCompany === c ? 'active' : '')}>
                {c}
              </button>
            ))}
          </div>

          {/* Company Strategy Banner */}
          {companyQuestionsData?.themes && (
            <div className="company-banner">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <h3>{selectedCompany} Hiring Focus & Strategy</h3>
                <span className="diff-pill" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff' }}>Company Profile</span>
              </div>
              <p style={{ margin: '8px 0 12px', fontSize: '13px', color: '#e1f5ef', lineHeight: '1.5' }}>
                {companyQuestionsData.themes.focusAreas?.[0]}
              </p>

              <b style={{ display: 'block', fontSize: '11px', color: 'var(--cf-teal-bright)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                Standard Interview Rounds:
              </b>
              <div className="company-rounds-list">
                {companyQuestionsData.themes.interviewRounds?.map((rnd, i) => (
                  <span key={i} className="round-chip">{rnd}</span>
                ))}
              </div>

              {companyQuestionsData.themes.tips && (
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#c3e8dd', fontStyle: 'italic' }}>
                  💡 Prep Tip: {companyQuestionsData.themes.tips}
                </div>
              )}
            </div>
          )}

          {/* Company Filters */}
          <div className="filter-bar" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700 }}>DIFFICULTY:</span>
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map(d => (
                <button key={d} onClick={() => setDifficulty(d)} className={'filter-btn ' + (difficulty === d ? 'active' : '')}>
                  {d}
                </button>
              ))}
              <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700, marginLeft: '8px' }}>CATEGORY:</span>
              {['All', 'Technical', 'Coding', 'System Design', 'Project', 'Behavioral'].map(c => (
                <button key={c} onClick={() => setCategory(c)} className={'filter-btn ' + (category === c ? 'active' : '')}>
                  {c}
                </button>
              ))}
            </div>
            <input
              type="search"
              placeholder={`Search ${selectedCompany} questions…`}
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ width: '220px', padding: '6px 12px', fontSize: '12px' }}
            />
          </div>

          <div style={{ margin: '14px 0 8px', color: 'var(--cf-text-muted)', fontSize: '12px' }}>
            Showing <b>{companyQuestionsData?.questions?.length || 0}</b> questions for <b>{selectedCompany}</b>
          </div>

          {/* Company Question Cards */}
          <div className="coding-list">
            {companyQuestionsData?.questions?.map((q, idx) => (
              <article className="q-rich-card" key={q.id || idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className={'diff-pill ' + q.difficulty}>{q.difficulty}</span>
                    <span className="coding-tag" style={{ background: 'rgba(255,183,3,0.15)', color: '#ffb703', fontWeight: 700 }}>{q.topic}</span>
                    <span className="coding-tag">{q.type}</span>
                  </div>
                  <span className={'source ' + (q.sourceType || 'platform-generated')}>{q.sourceTitle || 'Interview Experience'}</span>
                </div>

                <h3>{q.question}</h3>

                {q.expectedPoints && (
                  <details className="q-drawer">
                    <summary>Key Answer Points & Hiring Checklist</summary>
                    <ul>
                      {q.expectedPoints.map((pt, i) => <li key={i}>{pt}</li>)}
                    </ul>
                  </details>
                )}

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '6px' }}>
                  <button
                    className="btn-action"
                    onClick={() => nav('/mock-interview?company=' + encodeURIComponent(selectedCompany) + '&role=' + encodeURIComponent(student?.profile?.targetRole || ''))}
                  >
                    Simulate {selectedCompany} Mock Interview ›
                  </button>
                </div>
              </article>
            ))}

            {(!companyQuestionsData?.questions || companyQuestionsData.questions.length === 0) && (
              <div className="empty">No specific questions found for this filter. Try selecting "All".</div>
            )}
          </div>
        </>
      )}
    </Shell>
  );
}

function Learning() {
  const { student, token } = useApp();
  const [topic, setTopic] = useState('JavaScript');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (token) {
      request('/youtube/search?topic=' + encodeURIComponent(topic), { token })
        .then(setData)
        .catch(error => {
          console.error('CareerForge learning resources failed:', error);
          setData({ message: 'Learning resources could not load. Please try again shortly.', videos: [] });
        });
    }
  }, [topic, token]);

  const topics = ['JavaScript', 'React', 'REST APIs', 'Node.js', 'MongoDB', 'AWS', 'Linux', 'Docker', 'Kubernetes', 'Java', 'Python'];

  return (
    <Shell>
      <section className="title">
        <label>LEARNING LIBRARY</label>
        <h2>Learn in the right order</h2>
        <p>Server-powered YouTube resources; external API keys stay securely handled.</p>
      </section>
      <div className="topic-tabs">
        {topics.map(t => (
          <button onClick={() => setTopic(t)} className={topic === t ? 'active' : ''} key={t}>{t}</button>
        ))}
      </div>
      {data?.message && <p className="api-note">{data.message}</p>}
      <div className="video-grid">
        {data?.videos?.map(v => (
          <a target="_blank" rel="noreferrer" href={v.watchUrl} key={v.watchUrl}>
            <div className="video-thumb">▶</div>
            <h3>{v.title}</h3>
            <p>{v.channel}</p>
            <span>Watch on YouTube <Icon /></span>
          </a>
        ))}
      </div>
    </Shell>
  );
}

function Certifications() {
  const data = useRemote('/certifications/recommended', null);
  return (
    <Shell>
      <section className="title">
        <label>SMART CREDENTIALS</label>
        <h2>Certifications worth your time</h2>
        <p>Ranked by role relevance, current gaps and beginner suitability — never blindly recommended.</p>
      </section>
      <div className="cert-grid">
        {data?.certifications?.map(c => (
          <article key={c.id}>
            <div>
              <span className={'priority ' + c.priority}>{c.priority} priority</span>
              <b>{c.provider}</b>
            </div>
            <h3>{c.name}</h3>
            <p>{c.reason}</p>
            <small>{c.domain} · {c.difficulty} · {c.time}</small>
            <a target="_blank" rel="noreferrer" href={c.officialUrl}>Official page <Icon /></a>
          </article>
        ))}
      </div>
    </Shell>
  );
}

function MockInterview() {
  const { student, token, refresh } = useApp();
  const [company, setCompany] = useState(student?.profile?.targetCompany || '');
  const [role, setRole] = useState(student?.profile?.targetRole || '');
  const [session, setSession] = useState(null);
  const [answer, setAnswer] = useState('');
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const history = useRemote('/mock-interviews/history', { sessions: [] });

  const start = async () => {
    setBusy(true);
    setError('');
    try {
      const data = await request('/mock-interviews/start', { token, method: 'POST', body: { company, role } });
      setSession(data);
      setResult(null);
      setAnswer('');
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  const submit = async e => {
    e.preventDefault();
    if (!session) return;
    setBusy(true);
    setError('');
    try {
      const data = await request('/mock-interviews/' + session.sessionId + '/answer', { token, method: 'POST', body: { answer } });
      setResult(data);
      setAnswer('');
      if (data.completed) {
        setSession(null);
        await refresh();
      } else {
        setSession({ ...session, question: data.nextQuestion });
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Shell>
      <section className="title">
        <label>AI PRACTICE LAB</label>
        <h2>Mock interview</h2>
        <p>Every question here is AI-generated practice material, not a verified company question.</p>
      </section>
      {!session ? (
        <section className="mock-start">
          <label>Target company<input value={company} onChange={e => setCompany(e.target.value)} placeholder="Amazon" /></label>
          <label>Target role<input value={role} onChange={e => setRole(e.target.value)} placeholder="Cloud Engineer" /></label>
          <button onClick={start} disabled={busy}>{busy ? 'Creating…' : 'Start mock interview'} <Icon /></button>
        </section>
      ) : (
        <section className="mock-room">
          <p className="practice-label">AI-GENERATED PRACTICE QUESTION · {session.question.difficulty}</p>
          <h2>{session.question.question}</h2>
          <span>Topic: {session.question.topic}</span>
          <form onSubmit={submit}>
            <textarea required minLength="10" value={answer} onChange={e => setAnswer(e.target.value)} placeholder="Write your answer here. Include reasoning, technical architecture, and a real project example…" />
            <button disabled={busy}>{busy ? 'Evaluating…' : 'Submit answer'} <Icon /></button>
          </form>
        </section>
      )}
      {error && <p className="error">{error}</p>}
      {result && (
        <section className="evaluation">
          <div className="eval-score"><b>{result.evaluation.score}</b><span>/100</span></div>
          <div>
            <label>{result.evaluation.source === 'gemini' ? 'GEMINI EVALUATION' : 'STRUCTURED EVALUATION'}</label>
            <h3>{result.completed ? 'Mock interview complete' : 'Your feedback'}</h3>
            <p>Running average: {result.averageScore}/100</p>
          </div>
          <article><b>Strengths</b><ul>{result.evaluation.strengths.map(x => <li key={x}>{x}</li>)}</ul></article>
          <article><b>Improve next</b><ul>{[...(result.evaluation.weaknesses || []), ...(result.evaluation.missingPoints || [])].map(x => <li key={x}>{x}</li>)}</ul></article>
          <article><b>Suggestions</b><ul>{result.evaluation.suggestions.map(x => <li key={x}>{x}</li>)}</ul></article>
        </section>
      )}
      <section className="history">
        <h3>Previous mock interviews</h3>
        {history.sessions?.length ? (
          history.sessions.map(x => (
            <div key={x.id}>
              <b>{x.company} · {x.role}</b>
              <span>{x.status} · {x.answers} answers · {x.averageScore}/100</span>
            </div>
          ))
        ) : (
          <p>No completed mock interviews yet.</p>
        )}
      </section>
    </Shell>
  );
}

function GitHubAnalysis() {
  const { student, token, refresh } = useApp();
  const [inputVal, setInputVal] = useState(student?.profile?.githubUsername || '');
  const [data, setData] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const analyze = async e => {
    e.preventDefault();
    setBusy(true);
    setError('');
    try {
      const result = await request('/github/analyze', { token, method: 'POST', body: { username: inputVal } });
      setData(result);
      await refresh();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <Shell>
      <section className="title">
        <label>GITHUB PORTFOLIO & REPOSITORY AUDIT</label>
        <h2>GitHub profile & repository analysis</h2>
        <p>Inspect public repository metadata, language distributions, and commit history for proof of work.</p>
      </section>
      <form className="github-form" onSubmit={analyze}>
        <label>
          GitHub username or URL
          <input
            required
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder="e.g. torvalds, https://github.com/username, or https://github.com/username/repo"
          />
        </label>
        <button disabled={busy}>{busy ? 'Analysing…' : 'Analyse GitHub'} <Icon /></button>
      </form>
      <p className="github-hint">
        ✓ Accepts usernames, full profile URLs (<code style={{ color: 'var(--cf-teal-bright)' }}>https://github.com/user</code>), and repository URLs (<code style={{ color: 'var(--cf-teal-bright)' }}>https://github.com/user/repo</code>).
      </p>
      {error && <p className="error">{error}</p>}
      {data && (
        <section className="github-results">
          <article>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <h3>{data.profile.name || data.username}</h3>
              {data.isRepositoryAnalysis && (
                <span className="diff-pill" style={{ background: 'rgba(24,168,137,0.2)', color: 'var(--cf-teal-bright)' }}>
                  Repository Analysis
                </span>
              )}
            </div>
            <p>{data.profile.publicRepos} public repositories · {data.profile.followers} followers</p>
            <a href={data.profile.profileUrl} target="_blank" rel="noreferrer">Open GitHub profile <Icon /></a>
          </article>
          <article>
            <h3>Observed languages</h3>
            <p>
              {Object.entries(data.languages || {}).map(([k, v]) => (
                typeof v === 'number' && v > 50 ? `${k} (${Math.round(v / 1024)} KB)` : `${k} (${v})`
              )).join(' · ') || 'No primary languages reported by GitHub.'}
            </p>
          </article>
          <article>
            <h3>Actionable next steps for {data.analysis.targetRole}</h3>
            <ul>{data.analysis.recommendations.map(x => <li key={x}>{x}</li>)}</ul>
          </article>
          <div className="repo-list">
            {data.repositories.map(r => (
              <a target="_blank" rel="noreferrer" href={r.url} key={r.url}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <b>{r.name}</b>
                  {r.stars !== undefined && <span style={{ color: 'var(--cf-teal-bright)', fontSize: '11px' }}>★ {r.stars}</span>}
                </div>
                <span>{r.language || 'Multi-language'} · {r.updatedAt ? `updated ${new Date(r.updatedAt).toLocaleDateString()}` : 'active repo'}</span>
                <p>{r.description || 'No description provided.'}</p>
              </a>
            ))}
          </div>
          <small>{data.analysis.disclaimer}</small>
        </section>
      )}
    </Shell>
  );
}

function CodingPractice() {
  const { student, token, refresh } = useApp();
  const [topic, setTopic] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [busy, setBusy] = useState(false);
  const [loadingId, setLoadingId] = useState(null);

  const fetchProblems = () => {
    if (!token) return;
    setBusy(true);
    const params = new URLSearchParams({
      topic,
      difficulty,
      search,
      role: student?.profile?.targetRole || 'Full Stack Developer'
    });
    request('/coding/problems?' + params.toString(), { token })
      .then(setData)
      .catch(console.error)
      .finally(() => setBusy(false));
  };

  useEffect(() => {
    fetchProblems();
  }, [token, topic, difficulty, search, student?.profile?.targetRole]);

  const updateStatus = async (id, newStatus) => {
    setLoadingId(id);
    try {
      await request('/coding/problems/' + id + '/status', {
        token,
        method: 'POST',
        body: { status: newStatus }
      });
      await refresh();
      fetchProblems();
    } catch (err) {
      console.error('Status update failed:', err);
    } finally {
      setLoadingId(null);
    }
  };

  const topics = [
    'All',
    'Arrays & Hashing',
    'Two Pointers',
    'Sliding Window',
    'Stack & Queue',
    'Linked Lists',
    'Binary Search',
    'Trees',
    'Heaps',
    'Graphs',
    'Dynamic Programming',
    'Backtracking',
    'Greedy',
    'Bit Manipulation',
    'SQL'
  ];

  return (
    <Shell>
      <section className="title">
        <label>LEETCODE & DSA PRACTICE TRACKER</label>
        <h2>Targeted coding problem bank</h2>
        <p>Curated role-specific problems with direct LeetCode links and readiness tracking.</p>
      </section>

      {/* Adaptive Weakness Recommendation Banner */}
      {data?.weakTopics?.length > 0 && (
        <div className="guided-next-banner" style={{ marginBottom: '16px' }}>
          <div>
            <p>🎯 <b>Adaptive Recommendations Active:</b> Coding problems matching your weak focus areas (<b>{data.weakTopics.join(', ')}</b>) have been prioritized to the top of your list.</p>
          </div>
        </div>
      )}

      {/* Stats Dashboard */}
      {data?.stats && (
        <div className="coding-stats-grid">
          <div className="coding-stat-box">
            <small>Total Solved</small>
            <b>{data.stats.solvedCount} <span style={{ fontSize: '13px', color: 'var(--cf-muted)' }}>/ {data.stats.total}</span></b>
          </div>
          <div className="coding-stat-box easy">
            <small>Easy Solved</small>
            <b>{data.stats.easySolved}</b>
          </div>
          <div className="coding-stat-box medium">
            <small>Medium Solved</small>
            <b>{data.stats.medSolved}</b>
          </div>
          <div className="coding-stat-box hard">
            <small>Hard Solved</small>
            <b>{data.stats.hardSolved}</b>
          </div>
          <div className="coding-stat-box">
            <small>Role Readiness</small>
            <b style={{ color: 'var(--cf-teal-bright)' }}>{data.stats.completionPercentage}%</b>
          </div>
        </div>
      )}

      {/* Topic filter bar */}
      <div className="filter-bar" style={{ marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700 }}>TOPIC:</span>
        {topics.map(t => (
          <button key={t} onClick={() => setTopic(t)} className={'filter-btn ' + (topic === t ? 'active' : '')}>
            {t}
          </button>
        ))}
      </div>

      {/* Difficulty and Search bar */}
      <div className="filter-bar" style={{ justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700 }}>DIFFICULTY:</span>
          {['All', 'Easy', 'Medium', 'Hard'].map(d => (
            <button key={d} onClick={() => setDifficulty(d)} className={'filter-btn ' + (difficulty === d ? 'active' : '')}>
              {d}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search coding problems…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: '220px', padding: '6px 12px', fontSize: '12px' }}
        />
      </div>

      {/* Problem list */}
      <div className="coding-list">
        {data?.problems?.map(p => (
          <article className="coding-card" key={p.id} style={p.isWeakTopicRecommended && p.status === 'unsolved' ? { borderColor: 'rgba(255,77,109,0.35)', background: 'linear-gradient(135deg, rgba(255,77,109,0.04), var(--cf-card))' } : {}}>
            <div className="coding-card-head">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <span className={'diff-pill ' + p.difficulty}>{p.difficulty}</span>
                {p.isWeakTopicRecommended && p.status === 'unsolved' && (
                  <span className="diff-pill" style={{ background: 'rgba(255,77,109,0.18)', color: '#ff4d6d', border: '1px solid #ff4d6d' }}>
                    🎯 Focus Area
                  </span>
                )}
                <h3>{p.title}</h3>
                <span className="coding-tag" style={{ background: 'rgba(53,208,174,0.15)', color: 'var(--cf-teal-bright)', fontWeight: 700 }}>{p.topic}</span>
              </div>
              <a href={p.leetcodeUrl} target="_blank" rel="noreferrer" className="lc-link">
                Open in LeetCode ↗
              </a>
            </div>

            <p style={{ margin: '4px 0', fontSize: '13px', color: 'var(--cf-text)', lineHeight: '1.5' }}>
              {p.descriptionSummary}
            </p>

            <div className="coding-why">
              <b>Why Recommended:</b> {p.whyRecommended}
            </div>

            {p.tags && p.tags.length > 0 && (
              <div className="coding-tags">
                {p.tags.map(tag => <span key={tag} className="coding-tag">#{tag}</span>)}
              </div>
            )}

            <div className="coding-actions">
              {p.status === 'solved' ? (
                <button
                  className="btn-solved"
                  disabled={loadingId === p.id}
                  onClick={() => updateStatus(p.id, 'unsolved')}
                >
                  ✓ Solved (Click to Revert)
                </button>
              ) : p.status === 'attempted' ? (
                <>
                  <button
                    className="btn-attempted"
                    disabled={loadingId === p.id}
                    onClick={() => updateStatus(p.id, 'unsolved')}
                  >
                    ⏳ In Progress
                  </button>
                  <button
                    className="btn-action"
                    disabled={loadingId === p.id}
                    onClick={() => updateStatus(p.id, 'solved')}
                  >
                    Mark as Solved ✓
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn-action"
                    disabled={loadingId === p.id}
                    onClick={() => updateStatus(p.id, 'solved')}
                  >
                    Mark as Solved ✓
                  </button>
                  <button
                    className="btn-action"
                    disabled={loadingId === p.id}
                    onClick={() => updateStatus(p.id, 'attempted')}
                  >
                    Mark as Attempted ⏳
                  </button>
                </>
              )}
            </div>
          </article>
        ))}

        {(!data?.problems || data.problems.length === 0) && (
          <div className="empty">No coding problems found for this filter. Try selecting "All".</div>
        )}
      </div>
    </Shell>
  );
}

function Progress() {
  const data = useRemote('/progress/readiness', null);
  const nav = useNavigate();

  return (
    <Shell>
      <section className="title">
        <label>PREPARATION ANALYTICS & AUDIT TRAIL</label>
        <h2>See what moves job readiness</h2>
        <p>Skills (35%), Projects (20%), Assessments & DSA Practice (15%), Interview (20%), Consistency (10%).</p>
      </section>

      {/* Component Breakdown Bars */}
      <article className="panel graph">
        <div className="bars">
          {Object.entries(data?.components || {}).map(([name, score]) => (
            <div key={name}>
              <i style={{ height: score + '%' }} />
              <span>{name}</span>
              <b>{score}%</b>
            </div>
          ))}
        </div>
      </article>

      {/* Weak Areas & Focus Topics */}
      {data?.weakTopics?.length > 0 && (
        <section className="panel" style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>🎯 Identified Weak Focus Areas</h3>
            <button className="btn-action" onClick={() => nav('/coding')}>Practice Weak Topics in Coding Tracker ›</button>
          </div>
          <p style={{ margin: '6px 0 14px', fontSize: '13px' }}>
            Based on your recent assessment and interview question attempts, focusing on these topics will yield the fastest readiness score boost:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {data.weakTopics.map(t => (
              <span key={t} className="diff-pill" style={{ background: 'rgba(255,77,109,0.18)', color: '#ff4d6d', border: '1px solid #ff4d6d' }}>
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Audit History */}
      <section className="history" style={{ marginTop: '20px' }}>
        <h3>Job Readiness Audit Trail</h3>
        <p style={{ color: 'var(--cf-muted)', fontSize: '12px', margin: '4px 0 14px' }}>
          Transparent audit log showing why your readiness score changed based on verified actions.
        </p>
        {data?.auditHistory?.length ? (
          data.auditHistory.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid var(--cf-border)' }}>
              <div>
                <b style={{ color: '#fff', fontSize: '13px' }}>{item.reason}</b>
                <span style={{ display: 'block', color: 'var(--cf-muted)', fontSize: '11px', marginTop: '2px' }}>
                  {item.action} · {new Date(item.timestamp).toLocaleDateString()} {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              {item.delta > 0 && (
                <span className="diff-pill" style={{ background: 'rgba(0,255,136,0.15)', color: '#00ff88' }}>
                  +{item.delta} pts
                </span>
              )}
            </div>
          ))
        ) : (
          <p style={{ color: 'var(--cf-muted)', fontSize: '12px' }}>
            No audit records yet. Solve coding problems, complete MCQ assessments, or evaluate interview answers to see your score audit trail update!
          </p>
        )}
      </section>
    </Shell>
  );
}

function Profile() {
  const { student, token, refresh } = useApp();
  const [form, setForm] = useState(null);
  const [saved, setSaved] = useState('');

  useEffect(() => {
    if (student) setForm({ ...student.profile, skills: student.profile.skills || {} });
  }, [student]);

  if (!form) return null;

  const skills = ['JavaScript', 'React', 'Node.js', 'REST APIs', 'MongoDB', 'SQL', 'DSA', 'Git', 'Linux', 'AWS', 'Docker', 'Kubernetes', 'Java', 'Python', 'Machine Learning'];

  const save = async e => {
    e.preventDefault();
    await request('/users/me/profile', { token, method: 'PUT', body: form });
    await refresh();
    setSaved('Saved — your recommendations and roadmap are updated.');
  };

  return (
    <Shell>
      <section className="title">
        <label>YOUR CAREER PROFILE</label>
        <h2>Keep your goal current</h2>
        <p>Changes immediately update your gaps, roadmap, projects, and certifications.</p>
      </section>
      <form className="profile-form" onSubmit={save}>
        <label>College<input value={form.college || ''} onChange={e => setForm({ ...form, college: e.target.value })} /></label>
        <label>Graduation year<input value={form.graduationYear || ''} onChange={e => setForm({ ...form, graduationYear: e.target.value })} /></label>
        <label>Target company<input value={form.targetCompany || ''} onChange={e => setForm({ ...form, targetCompany: e.target.value })} /></label>
        <label>Target role<input value={form.targetRole || ''} onChange={e => setForm({ ...form, targetRole: e.target.value })} /></label>
        <div className="skills-editor">
          <h3>Skill levels (0 = None, 5 = Expert)</h3>
          {skills.map(s => (
            <label key={s}>{s}
              <select value={form.skills[s] || 0} onChange={e => setForm({ ...form, skills: { ...form.skills, [s]: Number(e.target.value) } })}>
                {[0, 1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
              </select>
            </label>
          ))}
        </div>
        {saved && <p className="success">{saved}</p>}
        <button>Save profile <Icon /></button>
      </form>
    </Shell>
  );
}

function Protected({ children, allowIncomplete = false }) {
  const { token, loading, student } = useApp();
  if (loading) return <div className="loading" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cf-teal-bright)', fontSize: '16px' }}>⏳ Loading CareerForge…</div>;
  if (!token) return <Navigate to="/auth" replace />;
  if (!student) return <Navigate to="/auth" replace />;
  if (student.emailVerified === false) return <Navigate to="/auth?mode=verify" replace />;
  if (!student.profile?.onboardingCompleted && !allowIncomplete) return <Navigate to="/onboarding" replace />;
  return children;
}

function AptitudePractice() {
  const { token, refresh } = useApp();
  const [categoriesData, setCategoriesData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('quantitative');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [search, setSearch] = useState('');
  const [questionsData, setQuestionsData] = useState(null);
  const [userSelections, setUserSelections] = useState({});
  const [evalFeedback, setEvalFeedback] = useState({});
  const [evaluatingQId, setEvaluatingQId] = useState(null);
  const [testMode, setTestMode] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(600); // 10 mins
  const [timerActive, setTimerActive] = useState(false);
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testScore, setTestScore] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch categories & topic stats
  const loadCategories = () => {
    if (!token) return;
    request('/aptitude/categories', { token })
      .then(res => {
        setCategoriesData(res);
      })
      .catch(console.error);
  };

  useEffect(() => {
    loadCategories();
  }, [token]);

  // Fetch questions based on filters
  useEffect(() => {
    if (!token) return;
    setLoading(true);
    const params = new URLSearchParams({
      category: selectedCategory,
      topic: selectedTopic,
      difficulty,
      search
    });
    request('/aptitude/questions?' + params.toString(), { token })
      .then(res => {
        setQuestionsData(res);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [token, selectedCategory, selectedTopic, difficulty, search]);

  // Timer countdown for Timed Test Mode
  useEffect(() => {
    let interval = null;
    if (testMode && timerActive && timerSeconds > 0 && !testSubmitted) {
      interval = setInterval(() => {
        setTimerSeconds(s => s - 1);
      }, 1000);
    } else if (timerSeconds === 0 && testMode && !testSubmitted) {
      handleFinishTest();
    }
    return () => clearInterval(interval);
  }, [testMode, timerActive, timerSeconds, testSubmitted]);

  const activeCategoryObj = categoriesData?.categories?.find(c => c.key === selectedCategory) || {
    name: 'Quantitative Aptitude',
    description: 'Arithmetic and numerical placement problems.',
    topics: []
  };

  const handleSelectOption = (qId, optionIdx) => {
    setUserSelections(prev => ({ ...prev, [qId]: optionIdx }));
  };

  // Evaluate single question in Practice Mode
  const handleCheckAnswer = async (q) => {
    const opt = userSelections[q.id];
    if (opt === undefined) return;
    setEvaluatingQId(q.id);
    try {
      const res = await request('/aptitude/evaluate', {
        token,
        method: 'POST',
        body: {
          questionId: q.id,
          selectedOption: opt,
          topic: q.topic,
          category: selectedCategory
        }
      });
      setEvalFeedback(prev => ({ ...prev, [q.id]: res }));
      loadCategories();
      await refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setEvaluatingQId(null);
    }
  };

  const handleStartTest = () => {
    setTestMode(true);
    setTimerSeconds(600);
    setTimerActive(true);
    setTestSubmitted(false);
    setUserSelections({});
    setEvalFeedback({});
    setTestScore(null);
  };

  const handleFinishTest = async () => {
    setTimerActive(false);
    const questions = (questionsData?.questions || []).slice(0, 10);
    let correct = 0;
    const feedbackMap = {};

    for (const q of questions) {
      const sel = userSelections[q.id];
      const isRight = sel !== undefined && Number(sel) === Number(q.answer);
      if (isRight) correct += 1;
      feedbackMap[q.id] = {
        isCorrect: isRight,
        correctAnswer: q.answer,
        correctOptionText: q.options[q.answer],
        explanation: q.explanation,
        conceptOrFormula: q.conceptOrFormula
      };
      if (sel !== undefined) {
        request('/aptitude/evaluate', {
          token,
          method: 'POST',
          body: {
            questionId: q.id,
            selectedOption: sel,
            topic: q.topic,
            category: selectedCategory
          }
        }).catch(() => {});
      }
    }

    setEvalFeedback(feedbackMap);
    setTestScore({
      total: questions.length,
      correct,
      percentage: questions.length ? Math.round((correct / questions.length) * 100) : 0,
      timeTakenSec: 600 - timerSeconds
    });
    setTestSubmitted(true);
    loadCategories();
    await refresh();
  };

  const handleExitTest = () => {
    setTestMode(false);
    setTimerActive(false);
    setTestSubmitted(false);
    setUserSelections({});
    setEvalFeedback({});
    setTestScore(null);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const questionsList = testMode ? (questionsData?.questions || []).slice(0, 10) : (questionsData?.questions || []);

  return (
    <Shell>
      <section className="title">
        <label>PLACEMENT PREPARATION HUB</label>
        <h2>Placement Aptitude Engine</h2>
        <p>Comprehensive topic-wise practice, step-by-step formula solutions, accuracy metrics, and timed screening tests.</p>
      </section>

      {/* Category Tabs */}
      <div className="topic-tabs">
        <button
          className={selectedCategory === 'quantitative' ? 'active' : ''}
          onClick={() => { setSelectedCategory('quantitative'); setSelectedTopic('All'); setTestMode(false); }}
        >
          🔢 Quantitative Aptitude ({categoriesData?.categories?.find(c => c.key === 'quantitative')?.totalQuestions || 0})
        </button>
        <button
          className={selectedCategory === 'logical' ? 'active' : ''}
          onClick={() => { setSelectedCategory('logical'); setSelectedTopic('All'); setTestMode(false); }}
        >
          🧩 Logical Reasoning ({categoriesData?.categories?.find(c => c.key === 'logical')?.totalQuestions || 0})
        </button>
        <button
          className={selectedCategory === 'verbal' ? 'active' : ''}
          onClick={() => { setSelectedCategory('verbal'); setSelectedTopic('All'); setTestMode(false); }}
        >
          📖 Verbal Ability ({categoriesData?.categories?.find(c => c.key === 'verbal')?.totalQuestions || 0})
        </button>
        <button
          className={selectedCategory === 'data-interpretation' ? 'active' : ''}
          onClick={() => { setSelectedCategory('data-interpretation'); setSelectedTopic('All'); setTestMode(false); }}
        >
          📊 Data Interpretation ({categoriesData?.categories?.find(c => c.key === 'data-interpretation')?.totalQuestions || 0})
        </button>
      </div>

      {/* Mode Switcher & Focus Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '14px 0', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '15px' }}>{activeCategoryObj.name}</h3>
          <small style={{ color: 'var(--cf-text-muted)' }}>{activeCategoryObj.description}</small>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {!testMode ? (
            <button className="hero-button" onClick={handleStartTest} style={{ padding: '8px 16px', fontSize: '12px' }}>
              ⏱ Take Timed Topic Test (10 Qs)
            </button>
          ) : (
            <button className="dark-button" onClick={handleExitTest} style={{ padding: '8px 16px', fontSize: '12px' }}>
              ✕ Exit Test Mode
            </button>
          )}
        </div>
      </div>

      {/* Timed Test Header */}
      {testMode && (
        <div className="company-banner" style={{ background: 'linear-gradient(135deg, rgba(20,40,35,0.9), rgba(10,25,20,0.95))', borderColor: 'var(--cf-teal)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <b style={{ color: '#fff', fontSize: '15px' }}>⏱ Timed Assessment: {selectedTopic !== 'All' ? selectedTopic : activeCategoryObj.name}</b>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#a7d5c9' }}>Answer the 10 questions before time expires. Results and step-by-step explanations will be calculated upon completion.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span className={'diff-pill ' + (timerSeconds < 120 ? 'Hard' : 'Easy')} style={{ fontSize: '14px', padding: '6px 14px' }}>
                Time Left: {formatTime(timerSeconds)}
              </span>
            </div>
          </div>

          {testSubmitted && testScore && (
            <div className="eval-scorecard" style={{ marginTop: '14px', padding: '14px', background: 'rgba(0,0,0,0.5)', borderRadius: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <b style={{ fontSize: '14px', color: '#fff' }}>Test Summary</b>
                <span className={'diff-pill ' + (testScore.percentage >= 70 ? 'Easy' : 'Hard')}>
                  Score: {testScore.correct}/{testScore.total} ({testScore.percentage}%)
                </span>
              </div>
              <p style={{ margin: '6px 0', fontSize: '12px', color: '#cbeef4' }}>
                Completed in {Math.floor(testScore.timeTakenSec / 60)}m {testScore.timeTakenSec % 60}s. Review detailed step-by-step solutions below.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Topic Chips Filter */}
      {!testMode && (
        <div className="filter-bar" style={{ marginBottom: '10px' }}>
          <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700 }}>TOPIC:</span>
          <button
            onClick={() => setSelectedTopic('All')}
            className={'filter-btn ' + (selectedTopic === 'All' ? 'active' : '')}
          >
            All Topics
          </button>
          {activeCategoryObj.topics?.map(t => (
            <button
              key={t.name}
              onClick={() => setSelectedTopic(t.name)}
              className={'filter-btn ' + (selectedTopic === t.name ? 'active' : '')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            >
              {t.name}
              <span style={{ fontSize: '9px', background: 'rgba(255,255,255,0.1)', padding: '1px 5px', borderRadius: '10px' }}>
                {t.totalQuestions}
              </span>
              {t.isWeak && (
                <span style={{ fontSize: '10px' }} title="Identified as a weak focus area">🎯</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Difficulty & Search Filter Bar */}
      {!testMode && (
        <div className="filter-bar" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: 'var(--cf-muted)', fontWeight: 700 }}>DIFFICULTY:</span>
            {['All', 'Beginner', 'Intermediate', 'Advanced'].map(d => (
              <button key={d} onClick={() => setDifficulty(d)} className={'filter-btn ' + (difficulty === d ? 'active' : '')}>
                {d}
              </button>
            ))}
          </div>
          <input
            type="search"
            placeholder={`Search ${selectedCategory} questions & formulas…`}
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ width: '260px', padding: '6px 12px', fontSize: '12px' }}
          />
        </div>
      )}

      {/* Question Count & Topic Weakness Alert */}
      <div style={{ margin: '14px 0 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ color: 'var(--cf-text-muted)', fontSize: '12px' }}>
          Showing <b>{questionsList.length}</b> questions {selectedTopic !== 'All' ? `in ${selectedTopic}` : ''}
        </span>
        {categoriesData?.weakTopics?.length > 0 && (
          <div style={{ fontSize: '11px', color: '#ffb703', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>🎯 Weak focus areas:</span>
            {categoriesData.weakTopics.slice(0, 3).map(w => (
              <span key={w} className="coding-tag" style={{ background: 'rgba(255,183,3,0.15)', color: '#ffb703', cursor: 'pointer' }} onClick={() => setSelectedTopic(w)}>
                {w} ↻
              </span>
            ))}
          </div>
        )}
      </div>

      {loading && <div className="loading" style={{ margin: '20px 0' }}>Loading aptitude questions…</div>}

      {/* Question List */}
      {!loading && (
        <div className="cols">
          <div style={{ flex: 2 }}>
            <div className="coding-list">
              {questionsList.map((q, idx) => {
                const fb = evalFeedback[q.id];
                const selectedOpt = userSelections[q.id];

                return (
                  <article className="q-rich-card" key={q.id || idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', flexWrap: 'wrap' }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span className={'diff-pill ' + q.difficulty}>{q.difficulty}</span>
                        <span className="coding-tag" style={{ background: 'rgba(53,208,174,0.15)', color: 'var(--cf-teal-bright)', fontWeight: 700 }}>
                          {q.topic}
                        </span>
                      </div>
                      {q.tags && q.tags.length > 0 && (
                        <span style={{ color: 'var(--cf-muted)', fontSize: '11px' }}>
                          #{q.tags.join(' #')}
                        </span>
                      )}
                    </div>

                    <h3 style={{ margin: '10px 0 14px', fontSize: '14px', lineHeight: '1.5' }}>
                      <b>Q{idx + 1}.</b> {q.question}
                    </h3>

                    {/* Options Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '12px 0' }}>
                      {q.options?.map((opt, optIdx) => {
                        const isSelected = selectedOpt === optIdx;
                        let optionStyle = {};
                        if (fb) {
                          if (optIdx === fb.correctAnswer || optIdx === q.answer) {
                            optionStyle = { background: 'rgba(0,255,102,0.12)', borderColor: '#00ff66', color: '#00ff66' };
                          } else if (isSelected && !fb.isCorrect) {
                            optionStyle = { background: 'rgba(255,68,68,0.12)', borderColor: '#ff4444', color: '#ff4444' };
                          }
                        }

                        return (
                          <label
                            key={optIdx}
                            className={'mcq-opt ' + (isSelected ? 'selected' : '')}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              padding: '10px 14px',
                              borderRadius: '8px',
                              border: '1px solid var(--cf-border)',
                              background: isSelected ? 'rgba(53,208,174,0.08)' : 'rgba(255,255,255,0.02)',
                              cursor: testSubmitted ? 'default' : 'pointer',
                              fontSize: '13px',
                              ...optionStyle
                            }}
                          >
                            <input
                              type="radio"
                              name={q.id}
                              checked={isSelected}
                              disabled={testSubmitted}
                              onChange={() => handleSelectOption(q.id, optIdx)}
                            />
                            <span>{opt}</span>
                          </label>
                        );
                      })}
                    </div>

                    {/* Check Answer Button in Practice Mode */}
                    {!testMode && !fb && (
                      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                        <button
                          className="btn-action"
                          disabled={selectedOpt === undefined || evaluatingQId === q.id}
                          onClick={() => handleCheckAnswer(q)}
                          style={{ background: 'var(--cf-teal)', color: '#062017', fontWeight: 800 }}
                        >
                          {evaluatingQId === q.id ? 'Checking…' : 'Check Answer & View Formula ✓'}
                        </button>
                      </div>
                    )}

                    {/* Feedback & Step-by-Step Explanation */}
                    {fb && (
                      <div style={{ marginTop: '12px', padding: '14px', borderRadius: '10px', background: fb.isCorrect ? 'rgba(0,255,102,0.06)' : 'rgba(255,68,68,0.06)', border: `1px solid ${fb.isCorrect ? 'rgba(0,255,102,0.25)' : 'rgba(255,68,68,0.25)'}` }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <b style={{ color: fb.isCorrect ? '#00ff66' : '#ff5555', fontSize: '13px' }}>
                            {fb.isCorrect ? '✓ Correct Answer!' : `✗ Incorrect (Correct Option: ${fb.correctOptionText || q.options[q.answer]})`}
                          </b>
                          {fb.topicStats && (
                            <span style={{ fontSize: '11px', color: 'var(--cf-text-muted)' }}>
                              Topic Accuracy: {fb.topicStats.accuracy}% ({fb.topicStats.correct}/{fb.topicStats.attempted})
                            </span>
                          )}
                        </div>

                        {/* Step-by-Step Explanation */}
                        <div style={{ marginTop: '8px', fontSize: '12px', color: '#cbeef4', lineHeight: '1.5' }}>
                          <b>Step-by-Step Explanation:</b>
                          <p style={{ margin: '4px 0 6px', color: 'var(--cf-text-muted)' }}>{fb.explanation || q.explanation}</p>
                        </div>

                        {/* Formula / Concept Tag */}
                        {(fb.conceptOrFormula || q.conceptOrFormula) && (
                          <div style={{ marginTop: '6px', padding: '6px 10px', background: 'rgba(0,0,0,0.3)', borderRadius: '6px', fontSize: '11px', color: 'var(--cf-teal-bright)', fontStyle: 'italic' }}>
                            📐 Concept / Formula: {fb.conceptOrFormula || q.conceptOrFormula}
                          </div>
                        )}
                      </div>
                    )}
                  </article>
                );
              })}

              {questionsList.length === 0 && (
                <div className="empty">No aptitude questions found matching your filter criteria. Try selecting "All".</div>
              )}

              {testMode && !testSubmitted && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                  <button
                    className="hero-button"
                    onClick={handleFinishTest}
                    style={{ padding: '12px 30px', fontSize: '14px' }}
                  >
                    Submit Assessment & View Scorecard <Icon />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar: Recommendations & Topic Performance */}
          <div style={{ flex: 1 }}>
            <article className="panel" style={{ marginBottom: '16px' }}>
              <h3>Placement Screening Resources</h3>
              <p style={{ fontSize: '12px', color: 'var(--cf-text-muted)', margin: '6px 0 14px' }}>
                Curated placement portals with formula sheets and company mock tests.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {categoriesData?.recommendations?.map(r => (
                  <a
                    key={r.platform}
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: 'none', border: '1px solid var(--cf-border)', padding: '12px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', display: 'block' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <b style={{ color: 'var(--cf-teal-bright)', fontSize: '13px' }}>{r.platform}</b>
                      <span style={{ fontSize: '11px', color: 'var(--cf-muted)' }}>↗</span>
                    </div>
                    <p style={{ margin: '4px 0', fontSize: '11px', color: 'var(--cf-text-muted)' }}>{r.why}</p>
                    <small style={{ color: 'var(--cf-muted)', fontSize: '10px' }}>Focus: {r.topic}</small>
                  </a>
                ))}
              </div>
            </article>

            <article className="panel">
              <h3>Category Summary</h3>
              <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {categoriesData?.categories?.map(cat => (
                  <div
                    key={cat.key}
                    onClick={() => { setSelectedCategory(cat.key); setSelectedTopic('All'); }}
                    style={{
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: selectedCategory === cat.key ? 'rgba(53,208,174,0.1)' : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${selectedCategory === cat.key ? 'var(--cf-teal)' : 'var(--cf-border)'}`,
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <b style={{ fontSize: '12px', color: selectedCategory === cat.key ? 'var(--cf-teal-bright)' : '#fff' }}>{cat.name}</b>
                      <span style={{ fontSize: '11px', color: 'var(--cf-muted)' }}>{cat.totalQuestions} Qs</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      )}
    </Shell>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('CareerForge UI ErrorBoundary caught an error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', background: 'var(--cf-bg)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ maxWidth: '500px', width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--cf-border)', borderRadius: '16px', padding: '30px', textAlign: 'center' }}>
            <b className="brand" style={{ display: 'inline-block', marginBottom: '16px' }}><i>CF</i>CareerForge</b>
            <h2 style={{ fontSize: '18px', margin: '0 0 10px', color: '#ff94a8' }}>Something went wrong loading this view</h2>
            <p style={{ fontSize: '13px', color: 'var(--cf-text-muted)', marginBottom: '20px' }}>
              {this.state.error?.message || 'An unexpected error occurred. Please reload to restore your workspace.'}
            </p>
            <button
              className="hero-button"
              onClick={() => { this.setState({ hasError: false, error: null }); window.location.href = '/'; }}
              style={{ padding: '10px 20px', fontSize: '13px' }}
            >
              Return to Dashboard ›
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/onboarding" element={<Protected allowIncomplete><Onboarding /></Protected>} />
            <Route path="/" element={<Protected><Dashboard /></Protected>} />
            <Route path="/roadmap" element={<Protected><Roadmap /></Protected>} />
            <Route path="/coding" element={<Protected><CodingPractice /></Protected>} />
            <Route path="/projects" element={<Protected><Projects /></Protected>} />
            <Route path="/companies" element={<Protected><Companies /></Protected>} />
            <Route path="/interviews" element={<Protected><Interviews /></Protected>} />
            <Route path="/mock-interview" element={<Protected><MockInterview /></Protected>} />
            <Route path="/github" element={<Protected><GitHubAnalysis /></Protected>} />
            <Route path="/learning" element={<Protected><Learning /></Protected>} />
            <Route path="/certifications" element={<Protected><Certifications /></Protected>} />
            <Route path="/progress" element={<Protected><Progress /></Protected>} />
            <Route path="/profile" element={<Protected><Profile /></Protected>} />
            <Route path="/aptitude" element={<Protected><AptitudePractice /></Protected>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

createRoot(document.getElementById('root')).render(<App />);
