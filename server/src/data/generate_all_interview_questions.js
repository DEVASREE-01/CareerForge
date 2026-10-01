import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { interviewQuestions as existingQuestions } from './interviewQuestionsData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Existing interview questions count:', existingQuestions.length);

// Additional high-quality interview questions
const newQuestions = [
  // --- FRONTEND DEVELOPER ---
  // HTML & CSS
  {
    id: 'fe-html-01', role: 'Frontend Developer', domain: 'Frontend Engineering', topic: 'HTML & CSS', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain the CSS Box Model and the practical differences between content-box and border-box sizing.',
    expectedPoints: ['Box model consists of content, padding, border, and margin.', 'content-box calculates width = content only; padding and borders add onto the element total width.', 'border-box includes padding and border within the declared width/height, preventing layout overflow bugs.'],
    sampleAnswer: 'The CSS Box Model defines how elements render in space: Content, Padding, Border, and Margin. With the default content-box, specifying width: 300px means any added padding or borders expand the physical space taken up on screen. In contrast, box-sizing: border-box absorbs padding and border into the 300px width, which makes responsive grid calculations far more predictable and prevents unintentional row breaks.',
    evaluationCriteria: 'Clearly explains padding/border inclusion, total width calculation, and why universal border-box reset is standard.',
    tags: ['CSS', 'Box Model', 'Layout', 'Web Basics'], source: 'Core Frontend Fundamentals'
  },
  {
    id: 'fe-html-02', role: 'Frontend Developer', domain: 'Frontend Engineering', topic: 'HTML & CSS', difficulty: 'Intermediate', type: 'Technical',
    question: 'How does CSS Flexbox differ from CSS Grid, and what architectural rule determines when to use each?',
    expectedPoints: ['Flexbox is one-dimensional (handles content in a single row OR single column).', 'Grid is two-dimensional (handles layout across rows AND columns simultaneously).', 'Use Flexbox for component-level alignment (navbars, button groups); use Grid for macro page layouts and card galleries.'],
    sampleAnswer: 'Flexbox is designed for 1-dimensional layout distribution along either the main axis or cross axis, making it ideal for flexible component bars, tabs, or vertically centering items. CSS Grid is 2-dimensional, allowing you to define precise tracks across rows and columns at the same time. The standard rule of thumb is: use Grid for page-level structural framing and multi-row card layouts, and Flexbox for aligning content inside individual components.',
    evaluationCriteria: 'Identifies 1D vs 2D paradigm and provides clear component vs macro layout heuristics.',
    tags: ['CSS', 'Flexbox', 'CSS Grid', 'Responsive Design'], source: 'Industry Standard Layout Architecture'
  },
  {
    id: 'fe-html-03', role: 'Frontend Developer', domain: 'Frontend Engineering', topic: 'HTML & CSS', difficulty: 'Intermediate', type: 'Technical',
    question: 'What is CSS Specificity, how is it calculated, and how do you avoid specificity wars in large codebases?',
    expectedPoints: ['Specificity hierarchy: Inline styles (1000) > IDs (100) > Classes/attributes/pseudo-classes (10) > Elements/pseudo-elements (1).', '!important overrides normal cascades but creates maintainability hazards.', 'Avoid specificity wars using methodologies like BEM (Block Element Modifier), CSS Modules, or CSS-in-JS utility classes.'],
    sampleAnswer: 'CSS Specificity determines which styling rule wins when multiple rules target the same element. It calculates as a tuple: inline styles have highest weight (1,0,0,0), followed by ID selectors (0,1,0,0), class/attribute selectors (0,0,1,0), and tag selectors (0,0,0,1). To avoid specificity debt in team codebases, avoid nesting ID selectors, keep selectors flat, adopt BEM naming conventions, and use scoped CSS Modules instead of cascading global overrides.',
    evaluationCriteria: 'Explains specificity weights accurately and proposes modular CSS architectures.',
    tags: ['CSS', 'Specificity', 'Cascade', 'BEM'], source: 'Frontend Technical Interview'
  },
  {
    id: 'fe-perf-01', role: 'Frontend Developer', domain: 'Frontend Engineering', topic: 'Frontend Performance', difficulty: 'Advanced', type: 'Technical',
    question: 'What are Core Web Vitals (LCP, INP, CLS), and what actionable engineering strategies improve each metric?',
    expectedPoints: ['LCP (Largest Contentful Paint) measures perceived loading speed; target < 2.5s.', 'INP (Interaction to Next Paint) replaces FID, measuring responsiveness to user interactions; target < 200ms.', 'CLS (Cumulative Layout Shift) measures visual stability; target < 0.1.', 'Fixes: LCP -> optimize hero images/fonts/SSR; INP -> yield to main thread with requestIdleCallback; CLS -> reserve aspect-ratio spaces for images and ads.'],
    sampleAnswer: 'Core Web Vitals are Google-standard user experience metrics: 1) LCP measures loading time of the largest viewport element, optimized via CDN caching, preloading hero assets, and server-side rendering. 2) INP evaluates user input lag across the entire page lifecycle, improved by breaking long JS tasks into micro-chunks with scheduler.yield() or requestIdleCallback. 3) CLS measures unexpected layout jumps, solved by defining explicit width/height or aspect-ratio on images and dynamic embeds.',
    evaluationCriteria: 'Correctly identifies all 3 metrics with thresholds and provides concrete code/architecture remediations.',
    tags: ['Performance', 'Core Web Vitals', 'LCP', 'CLS', 'INP'], source: 'Advanced Frontend Architecture'
  },
  {
    id: 'fe-perf-02', role: 'Frontend Developer', domain: 'Frontend Engineering', topic: 'Frontend Performance', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain Critical Rendering Path (CRP) and how HTML, CSSOM, and JS parsing affect First Contentful Paint (FCP).',
    expectedPoints: ['Steps: DOM construction, CSSOM construction, Render Tree creation, Layout (Reflow), and Paint.', 'CSS is render-blocking; browsers pause rendering until all stylesheet links in <head> are downloaded and parsed.', 'JavaScript is parser-blocking by default; script execution pauses HTML tokenizer unless marked with async or defer.'],
    sampleAnswer: 'The Critical Rendering Path is the sequence of steps browsers take to convert code into screen pixels: DOM + CSSOM -> Render Tree -> Layout -> Paint. CSS blocks rendering because the browser refuses to render unstyled content (FOUC). JavaScript tags block DOM parsing unless marked with defer (executes in order after DOM parsing) or async (executes immediately upon download), which keeps the main thread unblocked for rapid FCP.',
    evaluationCriteria: 'Covers DOM/CSSOM render tree construction and blocking nature of stylesheets and scripts.',
    tags: ['Browser Internals', 'CRP', 'Rendering', 'Performance'], source: 'Web Performance Interview'
  },
  {
    id: 'fe-ts-01', role: 'Frontend Developer', domain: 'Frontend Engineering', topic: 'TypeScript', difficulty: 'Intermediate', type: 'Technical',
    question: 'What is the difference between "interface" and "type" in TypeScript, and when should you choose one over the other?',
    expectedPoints: ['Interfaces are extendable via declaration merging; types cannot be reopened once defined.', 'Types can define union types, primitives, tuples, and mapped types directly.', 'Use interfaces for public object contracts/APIs and component props that benefit from extension; use types for complex unions, intersections, and utility types.'],
    sampleAnswer: 'Both can shape object structures, but interfaces support declaration merging (multiple declarations with the same name merge automatically) and clean OOP extension with "extends". Type aliases are more versatile for composing union types (A | B), tuples, primitives, and conditional mapped types. In production codebases, interfaces are preferred for public domain models and component props, while type aliases handle transformations and union discriminators.',
    evaluationCriteria: 'Identifies declaration merging, union types, and architectural guidelines.',
    tags: ['TypeScript', 'Types', 'Interfaces', 'Static Typing'], source: 'TypeScript Interview Question'
  },
  {
    id: 'fe-a11y-01', role: 'Frontend Developer', domain: 'Frontend Engineering', topic: 'Accessibility', difficulty: 'Intermediate', type: 'Technical',
    question: 'What is semantic HTML and how does it impact screen readers, keyboard navigation, and SEO?',
    expectedPoints: ['Semantic elements (<main>, <nav>, <article>, <button>) communicate meaning and purpose to the browser and accessibility tree.', 'Screen readers navigate via landmark roles automatically created by semantic tags.', 'Standard buttons provide native keyboard focus and Enter/Space trigger handling that <div> tags lack unless heavily retrofitted with tabindex and ARIA.'],
    sampleAnswer: 'Semantic HTML uses elements according to their intended meaning rather than generic <div> tags. For example, using <button> rather than <div onClick> gives free keyboard accessibility (Tab focusability and Enter/Space event triggering) and exposes the "button" role to the accessibility tree. Assistive technologies use semantic landmarks (<nav>, <main>, <header>) to let visually impaired users jump directly to sections, while search engine crawlers use semantic structure to index page hierarchy accurately.',
    evaluationCriteria: 'Contrasts native semantic element benefits with inaccessible div tags and mentions accessibility tree and keyboard support.',
    tags: ['Accessibility', 'ARIA', 'Semantic HTML', 'WCAG'], source: 'Accessibility & Design Systems'
  },

  // --- DEVOPS ENGINEER ---
  {
    id: 'do-cicd-01', role: 'DevOps Engineer', domain: 'DevOps Engineering', topic: 'CI/CD', difficulty: 'Intermediate', type: 'Technical',
    question: 'Describe the differences between Continuous Integration, Continuous Delivery, and Continuous Deployment.',
    expectedPoints: ['Continuous Integration (CI): Developers merge code frequently; automated builds and tests run on every commit.', 'Continuous Delivery (CD): Code changes are automatically built, tested, and staged for release, but deployment to production requires manual human approval.', 'Continuous Deployment: Every change that passes automated test stages is released directly to production automatically with zero manual gates.'],
    sampleAnswer: 'Continuous Integration focuses on automated build validation, linting, and unit tests whenever branches are merged to detect integration bugs early. Continuous Delivery takes verified code and packages it into deployable artifacts (like Docker images) deployed to staging, where a human product owner clicks "Approve" for production release. Continuous Deployment eliminates that manual gate: every green pipeline commit automatically deploys straight to production servers.',
    evaluationCriteria: 'Distinguishes automated testing vs automated staging vs zero-manual-gate production rollout.',
    tags: ['CI/CD', 'DevOps', 'Automation', 'Release Management'], source: 'Core DevOps Concepts'
  },
  {
    id: 'do-obs-01', role: 'DevOps Engineer', domain: 'DevOps Engineering', topic: 'Observability', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain the Three Pillars of Observability (Metrics, Logs, Traces) and how distributed tracing works across microservices.',
    expectedPoints: ['Metrics: Numeric aggregated data over time (CPU %, request count, latency percentiles p95/p99).', 'Logs: Discrete timestamped text events recording what happened.', 'Traces: Tracks request lifecycle across distributed service boundaries using correlation IDs (TraceId, SpanId).', 'Distributed tracing injects context headers (e.g., W3C Trace Context) into HTTP/gRPC requests, assembling a timeline visualization of downstream latency.'],
    sampleAnswer: 'Metrics give system-level health trends (like a spike in 5xx error rate or 99th percentile response times). Logs tell you exactly what occurred at a specific moment with stack traces. Traces provide the end-to-end journey of a single user request as it traverses API gateways, auth microservices, and databases. Distributed tracing assigns a unique Trace ID at the entry point and propagates Span IDs in HTTP headers (traceparent) so tools like OpenTelemetry and Jaeger can reconstruct the exact call tree and spot bottleneck services.',
    evaluationCriteria: 'Defines all three pillars with clear operational contexts and explains trace context propagation mechanisms.',
    tags: ['Observability', 'OpenTelemetry', 'Metrics', 'Distributed Tracing'], source: 'Site Reliability Engineering'
  },
  {
    id: 'do-k8s-01', role: 'DevOps Engineer', domain: 'DevOps Engineering', topic: 'Kubernetes', difficulty: 'Intermediate', type: 'Technical',
    question: 'How do Kubernetes Deployments, ReplicaSets, and Pods relate to one another during a rolling update?',
    expectedPoints: ['Pod is the smallest deployable compute unit containing one or more containers.', 'ReplicaSet ensures a specified number of identical Pod replicas are running at any given time.', 'Deployment is a higher-level controller that manages ReplicaSets declaratively, creating a new ReplicaSet during updates and gradually scaling down the old one.'],
    sampleAnswer: 'In Kubernetes, a Pod is the atomic container instance. A ReplicaSet manages the lifecycle and replication count of a set of identical Pods. A Deployment manages ReplicaSets. When you update an image tag in a Deployment manifest, the Deployment controller creates a brand new ReplicaSet with the new image, scales up new Pods incrementally, and once readiness probes pass, scales down Pods from the old ReplicaSet. This ensures zero downtime during application upgrades.',
    evaluationCriteria: 'Explains the 3-tier hierarchy and the dual ReplicaSet rolling transition mechanism.',
    tags: ['Kubernetes', 'Pods', 'Deployments', 'RollingUpdate'], source: 'Container Orchestration Interview'
  },

  // --- DATA ANALYST ---
  {
    id: 'da-sql-01', role: 'Data Analyst', domain: 'Data Analytics', topic: 'SQL', difficulty: 'Intermediate', type: 'Technical',
    question: 'What is the difference between WHERE and HAVING clauses in SQL, and what is the exact execution order?',
    expectedPoints: ['WHERE filters rows BEFORE any aggregation occurs; it cannot reference aggregate functions like SUM() or AVG().', 'HAVING filters groups AFTER aggregation (GROUP BY) has been calculated.', 'Logical query processing order: FROM -> JOIN -> WHERE -> GROUP BY -> HAVING -> SELECT -> DISTINCT -> ORDER BY -> LIMIT.'],
    sampleAnswer: 'WHERE filters individual row records before groups are formed, meaning aggregate functions like COUNT() or AVG() cannot appear in a WHERE clause. HAVING evaluates after the GROUP BY phase, filtering entire aggregated groups. For instance, "WHERE status = active" discards cancelled orders first, and "HAVING SUM(amount) > 10000" keeps only high-value customer groups.',
    evaluationCriteria: 'Explains pre-aggregation vs post-aggregation filtering and references logical SQL execution phases.',
    tags: ['SQL', 'Aggregation', 'Query Optimization', 'Relational DB'], source: 'Core SQL Interview Question'
  },
  {
    id: 'da-sql-02', role: 'Data Analyst', domain: 'Data Analytics', topic: 'SQL', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain SQL Window Functions: ROW_NUMBER(), RANK(), and DENSE_RANK() with concrete examples of tied values.',
    expectedPoints: ['Window functions perform calculations across a set of rows related to the current row without collapsing rows into a single summary output.', 'ROW_NUMBER() assigns strict sequential integers (1, 2, 3, 4) regardless of ties.', 'RANK() assigns same rank to ties and skips subsequent numbers (1, 2, 2, 4).', 'DENSE_RANK() assigns same rank to ties but does NOT skip numbers (1, 2, 2, 3).'],
    sampleAnswer: 'Window functions calculate across partitioned partitions while preserving individual row outputs. When ranking scores of [100, 95, 95, 90]: ROW_NUMBER gives 1, 2, 3, 4 (arbitrary tie break). RANK gives 1, 2, 2, 4 (skips 3 because of the tie). DENSE_RANK gives 1, 2, 2, 3 (no gaps in sequence). DENSE_RANK is standard when searching for the "top 3 distinct salaries in every department".',
    evaluationCriteria: 'Clearly demonstrates ranking behavior across ties and highlights that window functions preserve row cardinality.',
    tags: ['SQL', 'Window Functions', 'Analytics', 'Ranking'], source: 'Advanced Analytics SQL'
  },
  {
    id: 'da-stat-01', role: 'Data Analyst', domain: 'Data Analytics', topic: 'Statistics', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain Type I vs Type II errors in hypothesis testing and describe how they apply to A/B testing a checkout button.',
    expectedPoints: ['Type I error (False Positive, alpha): Rejecting the null hypothesis when it is actually true.', 'Type II error (False Negative, beta): Failing to reject the null hypothesis when there is a true effect.', 'Checkout example: Type I is concluding a new button color increased conversion when it was just random chance; Type II is discarding a truly superior button because of high sample variance or small sample size.'],
    sampleAnswer: 'In hypothesis testing, a Type I error (False Positive) occurs when you conclude an effect exists when it does not (e.g. shipping a new checkout button believing it increased conversion when the lift was just random noise). A Type II error (False Negative) occurs when you fail to detect an actual meaningful effect (e.g. discarding a redesign that genuinely improved user retention because your sample size was too small or test duration was too brief).',
    evaluationCriteria: 'Defines Alpha/Beta errors accurately and provides a clear real-world A/B testing checkout scenario.',
    tags: ['Statistics', 'Hypothesis Testing', 'A/B Testing', 'Data Science'], source: 'Analytics Statistics Question'
  },
  {
    id: 'da-bi-01', role: 'Data Analyst', domain: 'Data Analytics', topic: 'Data Visualization', difficulty: 'Intermediate', type: 'Practical',
    question: 'When should you use a Bar Chart versus a Line Chart, Scatter Plot, or Heatmap when communicating insights to business executives?',
    expectedPoints: ['Bar Chart: Comparing discrete categorical groups or ranking magnitudes.', 'Line Chart: Displaying continuous trends, change over time, or temporal progression.', 'Scatter Plot: Identifying relationships, correlations, and outliers between two continuous variables.', 'Heatmap: Displaying high-density cross-tabulations or matrix correlations through color intensity.'],
    sampleAnswer: 'Visual chart selection depends on the data relationship: 1) Use Bar Charts for comparing discrete discrete categories (e.g. revenue by region or department rankings). 2) Use Line Charts for showing continuous changes over chronological time (e.g. monthly churn trends or daily active users). 3) Use Scatter Plots to analyze correlation and anomalies between two numerical variables (e.g. customer tenure vs lifetime value). 4) Use Heatmaps for multi-dimensional matrix distributions (e.g. hour-of-day vs day-of-week server load).',
    evaluationCriteria: 'Provides distinct visual heuristics and articulates communication clarity for decision makers.',
    tags: ['Data Visualization', 'Power BI', 'Executive Reporting', 'Dashboarding'], source: 'Data Storytelling & Visualization'
  },

  // --- JAVA BACKEND DEVELOPER ---
  {
    id: 'jb-jvm-01', role: 'Java Backend Developer', domain: 'Java Backend Engineering', topic: 'JVM Internals', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain JVM Memory Architecture: Heap (Young, Old Generation), Metaspace, Stack, and how Garbage Collection occurs in G1GC.',
    expectedPoints: ['Heap stores all instantiated objects; split into Young (Eden, Survivor spaces S0/S1) and Old/Tenured generation.', 'Metaspace stores class metadata, method bytecode, and static variables outside the heap in native memory.', 'Thread Stack stores local primitive variables, method frame calls, and object references.', 'G1GC divides the heap into equal-sized virtual regions, prioritizing regions with the most garbage first for predictable low-pause sweeps.'],
    sampleAnswer: 'The JVM divides memory into: 1) Thread Stack: stores local primitives and frame pointers per thread, destroyed automatically when methods return. 2) Heap: shared memory holding object instances. Young gen holds new objects; survivors move between S0/S1 and promote to Old Gen after a threshold age (MaxTenuringThreshold). 3) Metaspace: native memory holding class definitions and constants. G1 Garbage Collector partitions the heap into hundreds of 1-32MB regions and collects regions with the highest garbage density first to maintain tight pause time targets (MaxGCPauseMillis).',
    evaluationCriteria: 'Clearly diagrams Stack vs Heap vs Metaspace and explains generational promotion and G1GC region-based collection.',
    tags: ['Java', 'JVM', 'Garbage Collection', 'Memory Architecture'], source: 'Senior Java Backend Interview'
  },
  {
    id: 'jb-micro-01', role: 'Java Backend Developer', domain: 'Java Backend Engineering', topic: 'Microservices', difficulty: 'Advanced', type: 'Technical',
    question: 'How do you implement the Saga Pattern in distributed microservices to maintain eventual consistency without two-phase commit (2PC)?',
    expectedPoints: ['2PC causes database locking and scalability bottlenecks across distributed systems.', 'Saga pattern organizes a distributed transaction into a sequence of local transactions in individual services.', 'Choreography: Services publish domain events and listen to other service events asynchronously.', 'Orchestration: A central Saga Orchestrator coordinates transaction steps and initiates Compensating Transactions on failure.'],
    sampleAnswer: 'Because two-phase commit locks database tables across network partitions, modern microservices use the Saga Pattern. A Saga executes local ACID transactions in sequence. If step 3 (e.g. payment processing) fails, the system triggers backward Compensating Transactions to reverse steps 1 and 2 (e.g. release reserved inventory). Sagas can be Orchestrated (a state machine coordinator sends direct commands to microservices) or Choreographed (services publish and react to events via message brokers like Kafka).',
    evaluationCriteria: 'Explains failure handling via compensating transactions and contrasts Orchestration with Choreography.',
    tags: ['Microservices', 'Distributed Systems', 'Saga Pattern', 'Architecture'], source: 'Enterprise System Design'
  }
];

// Merge without duplicate IDs
const existingIds = new Set(existingQuestions.map(q => q.id));
const combined = [...existingQuestions];
for (const q of newQuestions) {
  if (!existingIds.has(q.id)) {
    combined.push(q);
    existingIds.add(q.id);
  }
}

// Add role aliases and mappings
const roleAliases = {
  'MERN Stack Developer': 'Full Stack Developer',
  'Java Developer': 'Java Backend Developer',
  'Software Developer': 'Full Stack Developer',
  'Backend Developer': 'Java Backend Developer'
};

// Also duplicate questions for aliases so direct exact matches succeed instantly
const expandedQuestions = [...combined];
for (const q of combined) {
  if (q.role === 'Full Stack Developer') {
    expandedQuestions.push({ ...q, id: `mern-${q.id}`, role: 'MERN Stack Developer' });
  }
  if (q.role === 'Java Backend Developer') {
    expandedQuestions.push({ ...q, id: `jd-${q.id}`, role: 'Java Developer' });
  }
}

console.log('Total expanded interview questions:', expandedQuestions.length);

const outputCode = `// Master Interview Question Bank for CareerForge
// Curated role-specific questions with expected points, model sample answers, evaluation criteria, and tags.

export const interviewQuestions = ${JSON.stringify(expandedQuestions, null, 2)};

// Role normalization mapping
const roleNormalization = {
  'mern stack developer': 'full stack developer',
  'java developer': 'java backend developer',
  'software developer': 'full stack developer',
  'backend developer': 'java backend developer',
  'python developer': 'full stack developer',
  'qa automation engineer': 'frontend developer'
};

export function normalizeRoleForInterviews(role = '') {
  const r = role.toLowerCase().trim();
  return roleNormalization[r] || r;
}

// Helper to filter interview questions
export function getFilteredInterviewQuestions({ role, topic, difficulty, type, search } = {}) {
  const normalizedTargetRole = role ? normalizeRoleForInterviews(role) : 'all';

  return interviewQuestions.filter(q => {
    if (role && role !== 'All') {
      const qRole = (q.role || '').toLowerCase();
      const targetRole = role.toLowerCase();
      const normQRole = normalizeRoleForInterviews(qRole);

      const isExact = qRole === targetRole;
      const isNormMatch = normQRole === normalizedTargetRole;
      const isAll = qRole === 'all';

      // Partial match for developer / engineer
      const r1 = targetRole.replace('developer', '').replace('engineer', '').trim();
      const r2 = qRole.replace('developer', '').replace('engineer', '').trim();
      const isFuzzy = r1 && r2 && (r1.includes(r2) || r2.includes(r1));

      if (!isExact && !isNormMatch && !isFuzzy && !isAll) return false;
    }
    if (topic && topic !== 'All' && (q.topic || '').toLowerCase() !== topic.toLowerCase()) return false;
    if (difficulty && difficulty !== 'All' && (q.difficulty || '').toLowerCase() !== difficulty.toLowerCase()) return false;
    if (type && type !== 'All' && (q.type || '').toLowerCase() !== type.toLowerCase()) return false;
    if (search) {
      const s = search.toLowerCase();
      const matchQ = (q.question || '').toLowerCase().includes(s);
      const matchT = (q.topic || '').toLowerCase().includes(s);
      const matchTag = (q.tags || []).some(tag => (tag || '').toLowerCase().includes(s));
      if (!matchQ && !matchT && !matchTag) return false;
    }
    return true;
  });
}

// Helper to get unique topics for role
export function getInterviewTopicsForRole(role = 'Full Stack Developer') {
  const normalizedTargetRole = role ? normalizeRoleForInterviews(role) : 'all';

  const roleSpecific = interviewQuestions.filter(q => {
    if (!role || role === 'All') return true;
    const qRole = (q.role || '').toLowerCase();
    const targetRole = role.toLowerCase();
    const normQRole = normalizeRoleForInterviews(qRole);

    const isExact = qRole === targetRole;
    const isNormMatch = normQRole === normalizedTargetRole;
    const r1 = targetRole.replace('developer', '').replace('engineer', '').trim();
    const r2 = qRole.replace('developer', '').replace('engineer', '').trim();
    const isFuzzy = r1 && r2 && (r1.includes(r2) || r2.includes(r1));

    return isExact || isNormMatch || isFuzzy || qRole === 'all';
  });

  const topicsMap = {};
  for (const q of roleSpecific) {
    if (q.topic) {
      topicsMap[q.topic] = (topicsMap[q.topic] || 0) + 1;
    }
  }

  // If role-specific topics came out empty, fallback to Full Stack standard topics to ensure UI never breaks
  if (Object.keys(topicsMap).length === 0) {
    const fallbackTopics = ['Technical Fundamentals', 'System Architecture', 'Problem Solving', 'Behavioral & HR'];
    fallbackTopics.forEach(t => { topicsMap[t] = 5; });
  }

  return Object.entries(topicsMap).map(([name, count]) => ({ name, count }));
}
`;

fs.writeFileSync(path.join(__dirname, 'interviewQuestionsData.js'), outputCode, 'utf8');
console.log('Successfully wrote expanded interviewQuestionsData.js');
