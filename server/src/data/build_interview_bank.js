// Script to expand interview questions data for all roles in CareerForge
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read existing questions from current file
const currentContent = fs.readFileSync(path.join(__dirname, 'interviewQuestionsData.js'), 'utf8');
const existingMatch = currentContent.match(/export const interviewQuestions = (\[[\s\S]*?\]);\n\n\/\/ Role normalization mapping/);

let existingQuestions = [];
if (existingMatch) {
  try {
    existingQuestions = JSON.parse(existingMatch[1]);
    console.log('Loaded', existingQuestions.length, 'existing questions.');
  } catch (e) {
    console.error('Failed to parse existing questions directly, evaluating...', e.message);
  }
}

if (!existingQuestions.length) {
  // If JSON parse failed due to comments or formatting, use dynamic import or require
  const data = await import('./interviewQuestionsData.js');
  existingQuestions = data.interviewQuestions;
  console.log('Loaded', existingQuestions.length, 'existing questions via dynamic import.');
}

// New rich questions for all roles
const newQuestions = [
  // ----------------------------------------------------
  // FRONTEND DEVELOPER
  // ----------------------------------------------------
  {
    id: 'fed-html-01',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'HTML & CSS',
    difficulty: 'Beginner',
    type: 'Technical',
    question: 'Explain the CSS box model and how "box-sizing: border-box" changes the calculation of an element\'s total width and height.',
    expectedPoints: [
      'Box model consists of content, padding, border, and margin.',
      'Default content-box adds padding and border to the specified width/height.',
      'border-box absorbs padding and border into the specified width/height, preventing layout breakage.'
    ],
    sampleAnswer: 'The CSS box model defines how element dimensions are computed: content -> padding -> border -> margin. Under the default content-box, width: 200px with 20px padding results in 240px rendered width. With box-sizing: border-box, the 200px width includes padding and border, greatly simplifying responsive layouts.',
    evaluationCriteria: 'Clearly explains all four box model components and contrasts content-box with border-box arithmetic.',
    tags: ['CSS', 'Box Model', 'Layout', 'Responsive'],
    source: 'Frontend Core Fundamentals'
  },
  {
    id: 'fed-html-02',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'HTML & CSS',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'Compare CSS Flexbox and CSS Grid. When would you choose one over the other in a modern responsive application?',
    expectedPoints: [
      'Flexbox is one-dimensional (row OR column); Grid is two-dimensional (rows AND columns simultaneously).',
      'Flexbox is content-first (items dictate layout along an axis); Grid is layout-first (container defines tracks/areas).',
      'Use Flexbox for navbars, button groups, and linear alignment; use Grid for page-level layouts, photo galleries, and dashboard cards.'
    ],
    sampleAnswer: 'Flexbox is designed for 1D layouts along a main axis, ideal for aligning UI controls, toolbars, and dynamic item rows. CSS Grid is designed for 2D spatial layouts where both columns and rows must align simultaneously, such as complex dashboard grids or responsive cards.',
    evaluationCriteria: 'Highlights dimensionality, content vs container flow, and practical application examples.',
    tags: ['CSS', 'Flexbox', 'CSS Grid', 'Responsive'],
    source: 'Modern Web Layout Architecture'
  },
  {
    id: 'fed-html-03',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'HTML & CSS',
    difficulty: 'Advanced',
    type: 'Scenario',
    question: 'How do you structure CSS for a massive enterprise frontend to prevent specificity conflicts and dead code accumulation?',
    expectedPoints: [
      'Use modern CSS methodologies like BEM (Block Element Modifier), CSS Modules, or CSS-in-JS/Tailwind.',
      'Leverage CSS Cascade Layers (@layer) to manage precedence explicitly.',
      'Employ CSS Custom Properties (variables) for design tokens (colors, spacing, typography).',
      'Set up PurgeCSS or unCSS in build pipelines to prune unused selectors.'
    ],
    sampleAnswer: 'I isolate component styles using CSS Modules or scoped styled-components to avoid global namespace collisions. For global design systems, I define CSS custom properties for design tokens and utilize modern @layer to structure reset, base, component, and utility precedence cleanly, combined with build-time tree shaking.',
    evaluationCriteria: 'Mentions modularity, cascade management, design tokens, and build-time optimization.',
    tags: ['CSS Architecture', 'BEM', 'Design Systems', 'Maintainability'],
    source: 'Enterprise Frontend Architecture'
  },
  {
    id: 'fed-js-01',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'JavaScript',
    difficulty: 'Beginner',
    type: 'Technical',
    question: 'Explain Event Delegation in JavaScript. How does it leverage Event Bubbling to optimize memory and performance?',
    expectedPoints: [
      'Event delegation attaches a single event listener to an ancestor rather than individual child elements.',
      'It relies on Event Bubbling (events propagate up the DOM tree from target to document).',
      'Event target (e.target) identifies which child was clicked.',
      'Saves memory by avoiding hundreds of listeners on dynamic lists.'
    ],
    sampleAnswer: 'Event delegation places a single event listener on a parent container rather than each child node. When a child is clicked, the event bubbles up to the parent where e.target identifies the clicked element. This dramatically reduces memory footprint and automatically handles dynamically added child elements without reattaching handlers.',
    evaluationCriteria: 'Explains bubbling mechanism, e.target vs e.currentTarget, and memory benefits for dynamic lists.',
    tags: ['JavaScript', 'DOM', 'Event Delegation', 'Performance'],
    source: 'Browser DOM Deep Dive'
  },
  {
    id: 'fed-js-02',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'JavaScript',
    difficulty: 'Intermediate',
    type: 'Debugging',
    question: 'What is the Event Loop in JavaScript? Explain the execution order between synchronous code, microtasks (Promises), and macrotasks (setTimeout).',
    expectedPoints: [
      'Call stack executes synchronous code first.',
      'Microtask queue (Promise callbacks, queueMicrotask, MutationObserver) executes immediately when the stack empties before rendering.',
      'Macrotask queue (setTimeout, setInterval, I/O) executes one task per loop iteration after all microtasks are drained.',
      'Order: Synchronous -> All Microtasks -> Rendering -> Next Macrotask.'
    ],
    sampleAnswer: 'The Event Loop coordinates code execution between the call stack, microtask queue, and macrotask queue. Synchronous code runs first on the call stack. When cleared, the engine drains ALL pending microtasks (Promise.then, queueMicrotask). Only after microtasks are empty and UI rendering occurs does the engine take the next macrotask (setTimeout).',
    evaluationCriteria: 'Correctly details the priority order: Sync -> Microtask queue (drained fully) -> Macrotask queue.',
    tags: ['JavaScript', 'Event Loop', 'Asynchronous', 'Microtasks'],
    source: 'V8 Engine Internals'
  },
  {
    id: 'fed-js-03',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'JavaScript',
    difficulty: 'Advanced',
    type: 'Technical',
    question: 'How does garbage collection work in modern JavaScript V8 engines, and what are the most common causes of client-side memory leaks?',
    expectedPoints: [
      'V8 uses generational Mark-and-Sweep garbage collection (Young/Old generation).',
      'Objects reachable from root references (window, active stack frames) are retained.',
      'Common memory leaks: forgotten global variables, uncleared setInterval/setTimeout timers, retained detached DOM nodes, and lingering event listeners in closures.'
    ],
    sampleAnswer: 'V8 uses generational mark-and-sweep GC. Objects are marked as reachable from root references; unreachable objects are swept. Memory leaks occur when references linger unintentionally: e.g. uncleared timers retaining closure variables, forgotten global variables, event listeners on unmounted elements, or detached DOM trees referenced in JavaScript variables.',
    evaluationCriteria: 'Covers reachability algorithm, mark-sweep concept, and at least 3 concrete leak causes with remediation.',
    tags: ['JavaScript', 'Memory Leaks', 'Garbage Collection', 'V8'],
    source: 'Advanced JavaScript Engineering'
  },
  {
    id: 'fed-react-01',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'React',
    difficulty: 'Beginner',
    type: 'Technical',
    question: 'What is the Virtual DOM and reconciliation in React, and how does the "key" prop optimize list rendering?',
    expectedPoints: [
      'Virtual DOM is a lightweight in-memory JavaScript representation of the real DOM tree.',
      'Reconciliation (diffing algorithm) calculates the minimal set of real DOM mutations.',
      'The "key" prop gives items stable identity across renders, allowing React to move or preserve nodes rather than re-creating them from scratch.'
    ],
    sampleAnswer: 'The Virtual DOM is an in-memory tree representation of real DOM nodes. When state changes, React builds a new Virtual DOM tree and diffs it against the previous tree (reconciliation). The "key" prop provides a unique, persistent identifier for list items, allowing React to match elements between renders and only update changed items without re-mounting the entire list.',
    evaluationCriteria: 'Explains diffing process, real DOM minimization, and key stability for list updates.',
    tags: ['React', 'Virtual DOM', 'Reconciliation', 'Keys'],
    source: 'React Core Architecture'
  },
  {
    id: 'fed-react-02',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'React',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'Compare React.memo, useMemo, and useCallback. When should you use each, and when is premature memoization counterproductive?',
    expectedPoints: [
      'React.memo is a higher-order component that skips re-rendering a component if its props have not changed (shallow comparison).',
      'useMemo memoizes the result of an expensive calculation between renders.',
      'useCallback memoizes function instance references to prevent re-instantiating callbacks passed to memoized children.',
      'Overuse adds memory overhead and comparison cost for trivial calculations.'
    ],
    sampleAnswer: 'React.memo wraps child components to skip re-renders if props are shallowly equal. useMemo caches expensive computed values (e.g. filtering 10,000 items), while useCallback stabilizes function identity across renders to prevent breaking React.memo on child props. Premature memoization adds memory overhead and unnecessary comparison cycles for trivial operations.',
    evaluationCriteria: 'Contrasts HOC vs hook usage, explains function reference stability, and acknowledges overhead trade-offs.',
    tags: ['React', 'Performance', 'useMemo', 'useCallback', 'React.memo'],
    source: 'React Performance Engineering'
  },
  {
    id: 'fed-react-03',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'React',
    difficulty: 'Advanced',
    type: 'Scenario',
    question: 'How would you architect state management for a high-frequency live dashboard updating 50 times per second without locking the browser UI thread?',
    expectedPoints: [
      'Isolate high-frequency state to local leaf components or canvas/WebGL layers instead of top-level context.',
      'Use React 18 Concurrent features (useTransition, useDeferredValue) to keep input responsive.',
      'Throttle or batch incoming WebSocket updates via requestAnimationFrame.',
      'Utilize external state stores (Zustand, Valtio) with selective selector subscriptions to avoid re-rendering unaffected components.'
    ],
    sampleAnswer: 'I would avoid storing rapid updates in root Context. Instead, I would use an external store with atomic selector subscriptions (like Zustand) so only the specific metrics widgets re-render. I would batch incoming WebSocket messages using requestAnimationFrame, and leverage React 18 useDeferredValue or useTransition so user interactions maintain high priority.',
    evaluationCriteria: 'Addresses context performance limitations, batching strategies, selective subscriptions, and Concurrent React.',
    tags: ['React', 'State Management', 'Concurrent Mode', 'High Frequency'],
    source: 'High-Scale Frontend Systems'
  },
  {
    id: 'fed-ts-01',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'TypeScript',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'Explain the difference between type and interface in TypeScript, and when you should prefer one over the other.',
    expectedPoints: [
      'Both define shape of objects and can be extended.',
      'Interfaces support declaration merging (useful for public APIs and library augmentation).',
      'Type aliases support unions, intersections, primitives, tuples, and mapped/conditional types.',
      'Prefer interface for object models and component prop contracts; use type for unions and complex utility transformations.'
    ],
    sampleAnswer: 'Interfaces define object contracts and support declaration merging, making them ideal for object models and public library typings. Type aliases are more expressive, supporting union types (A | B), primitives, tuples, and mapped types. Modern practice typically uses interfaces for component props and entity models, and types for unions and data transformations.',
    evaluationCriteria: 'Highlights declaration merging, union/mapped type capabilities, and best practice recommendations.',
    tags: ['TypeScript', 'Types', 'Interfaces', 'Type Safety'],
    source: 'TypeScript Best Practices'
  },
  {
    id: 'fed-perf-01',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'Frontend Performance',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'What are Core Web Vitals (LCP, INP, CLS)? What strategies do you use to diagnose and optimize poor metrics?',
    expectedPoints: [
      'LCP (Largest Contentful Paint): measures loading speed of main content; optimize via image compression, CDN caching, and preloading hero images.',
      'INP (Interaction to Next Paint): measures interaction responsiveness; optimize by breaking long tasks, debouncing, and web workers.',
      'CLS (Cumulative Layout Shift): measures visual stability; optimize by reserving image/ad dimensions and avoiding dynamic content injections above the fold.'
    ],
    sampleAnswer: 'Core Web Vitals quantify real user experience. LCP measures when the main hero element renders (target < 2.5s); optimize by preloading critical images and using CDN edge delivery. INP measures UI responsiveness (target < 200ms); optimize by eliminating long JavaScript tasks. CLS measures unexpected layout movement (target < 0.1); optimize by reserving width/height on images and dynamic banners.',
    evaluationCriteria: 'Clearly defines each metric with thresholds and actionable optimization tactics for each.',
    tags: ['Core Web Vitals', 'LCP', 'INP', 'CLS', 'Performance'],
    source: 'Web Vitals Performance Guide'
  },
  {
    id: 'fed-a11y-01',
    role: 'Frontend Developer',
    domain: 'Frontend Engineering',
    topic: 'Accessibility',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'What are WAI-ARIA roles, states, and properties? Why is semantic HTML preferred over ARIA attributes?',
    expectedPoints: [
      'ARIA bridges accessibility gaps for custom dynamic widgets (e.g. role="dialog", aria-expanded="true").',
      'The first rule of ARIA: Do not use ARIA if a native HTML5 element (e.g. <button>, <dialog>, <nav>) already exists.',
      'Native elements provide built-in keyboard navigation, focus management, and screen reader announcements automatically without extra code.'
    ],
    sampleAnswer: 'WAI-ARIA provides attributes to describe custom interactive widgets to screen readers. However, native HTML elements like <button> or <dialog> have built-in keyboard navigation (Tab, Enter, Space) and accessible semantics out-of-the-box. The first rule of ARIA is to always prefer semantic HTML, using ARIA only when native elements cannot satisfy custom design requirements.',
    evaluationCriteria: 'Mentions "First Rule of ARIA", keyboard accessibility, and state management (aria-expanded, aria-hidden).',
    tags: ['Accessibility', 'a11y', 'WAI-ARIA', 'WCAG'],
    source: 'Accessibility Guidelines'
  },

  // ----------------------------------------------------
  // DEVOPS ENGINEER
  // ----------------------------------------------------
  {
    id: 'dev-k8s-01',
    role: 'DevOps Engineer',
    domain: 'DevOps Engineering',
    topic: 'Kubernetes',
    difficulty: 'Beginner',
    type: 'Technical',
    question: 'Explain the core Kubernetes architecture: Control Plane (API Server, etcd, Scheduler, Controller Manager) vs Worker Nodes (Kubelet, Kube-proxy, Container Runtime).',
    expectedPoints: [
      'Control plane manages cluster state: API server is the REST gateway; etcd is the distributed key-value store; Scheduler assigns pods to nodes; Controller Manager reconciles desired vs actual state.',
      'Worker nodes run workloads: Kubelet ensures containers run in pods; Kube-proxy manages network routing/rules; Container Runtime (containerd) executes containers.'
    ],
    sampleAnswer: 'The Kubernetes Control Plane governs the cluster: the API Server handles requests, etcd persists cluster state, the Scheduler assigns pods based on resource constraints, and the Controller Manager maintains desired state loops. Worker nodes host workloads: Kubelet communicates with the API server to run pods, container runtime executes them, and kube-proxy handles network service routing.',
    evaluationCriteria: 'Correctly identifies responsibilities of all 4 control plane components and worker node components.',
    tags: ['Kubernetes', 'Architecture', 'Control Plane', 'Kubelet'],
    source: 'Kubernetes Core Architecture'
  },
  {
    id: 'dev-k8s-02',
    role: 'DevOps Engineer',
    domain: 'DevOps Engineering',
    topic: 'Kubernetes',
    difficulty: 'Intermediate',
    type: 'Scenario',
    question: 'How do you diagnose and troubleshoot a Kubernetes Pod stuck in "CrashLoopBackOff" status?',
    expectedPoints: [
      'Run "kubectl describe pod <pod>" to inspect events, exit codes, and health check failures.',
      'Check logs using "kubectl logs <pod> --previous" to see exit stack traces before restart.',
      'Verify container resource limits (OOMKilled exit code 137).',
      'Check configuration maps, secrets, and environment variable bindings.',
      'Debug interactively using "kubectl run debug --rm -it" or ephemeral containers.'
    ],
    sampleAnswer: 'I run "kubectl describe pod" to view termination reasons (e.g. exit code 137 indicates OOMKilled). Next, I inspect previous crash logs with "kubectl logs <pod> --previous" to locate unhandled runtime exceptions. If related to missing configs, I check Secrets/ConfigMaps. For network/connectivity issues, I attach an ephemeral debug container to test DNS and service endpoints.',
    evaluationCriteria: 'Systematic workflow: describe events -> logs --previous -> exit codes (137 vs 1) -> config verification.',
    tags: ['Kubernetes', 'Troubleshooting', 'CrashLoopBackOff', 'Debugging'],
    source: 'Kubernetes Production Operations'
  },
  {
    id: 'dev-cicd-01',
    role: 'DevOps Engineer',
    domain: 'DevOps Engineering',
    topic: 'CI/CD Pipelines',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'Explain the difference between Blue-Green Deployment, Rolling Updates, and Canary Deployments in cloud delivery.',
    expectedPoints: [
      'Rolling Update: Gradually replaces old pods with new ones; zero downtime, low extra resource cost, but runs mixed versions simultaneously.',
      'Blue-Green: Runs two identical environments; switches router/load balancer instantly to Green once verified; fast instant rollback, but requires 2x infrastructure resources.',
      'Canary: Routes a small percentage (e.g. 5%) of real traffic to new version; monitors error rates and latency before wider rollout; safest blast radius.'
    ],
    sampleAnswer: 'Rolling updates replace pods incrementally, avoiding downtime with minimal extra resource overhead, but temporarily run mixed versions. Blue-Green runs two identical environments and switches traffic at the router instantly, providing clean verification and instant rollback at the cost of double compute resources. Canary routes 5-10% of real user traffic to the new version to evaluate metrics safely before 100% rollout.',
    evaluationCriteria: 'Compares infrastructure cost, rollback speed, blast radius, and version coexistence for all three.',
    tags: ['CI/CD', 'Blue-Green', 'Canary', 'Deployment Strategies'],
    source: 'Modern Delivery Pipelines'
  },
  {
    id: 'dev-iac-01',
    role: 'DevOps Engineer',
    domain: 'DevOps Engineering',
    topic: 'Terraform & IaC',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'How does Terraform manage state? What are the risks of state file corruption and how do remote backends with locking prevent them?',
    expectedPoints: [
      'State file (terraform.tfstate) maps declared code resources to real cloud provider resource IDs and attributes.',
      'Concurrent runs without locking can overwrite state, causing orphaned or duplicate cloud infrastructure.',
      'Remote backends (e.g. AWS S3 with DynamoDB locking, or Terraform Cloud) enforce state locking to serialize execution and encrypt state at rest.'
    ],
    sampleAnswer: 'Terraform uses state files to record mappings between declared HCL resources and real cloud infrastructure IDs. If multiple team members or CI pipelines run simultaneously without state locking, state files can corrupt or overwrite each other. Remote backends (like S3 + DynamoDB) store state securely in a shared location and acquire a lock before plan/apply, serializing execution.',
    evaluationCriteria: 'Explains state purpose, concurrency race conditions, and how remote locks (DynamoDB) resolve them.',
    tags: ['Terraform', 'State Locking', 'Infrastructure as Code', 'AWS S3'],
    source: 'IaC Production Best Practices'
  },
  {
    id: 'dev-obs-01',
    role: 'DevOps Engineer',
    domain: 'DevOps Engineering',
    topic: 'Observability & Monitoring',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'Explain the Three Pillars of Observability: Metrics, Logs, and Distributed Tracing. How do they complement each other during an incident?',
    expectedPoints: [
      'Metrics (Prometheus/CloudWatch): Numeric aggregated timeseries data showing THAT a problem exists (e.g. error rate spike, CPU 95%).',
      'Logs (ELK/Loki): Detailed timestamped event messages showing WHY a problem happened (e.g. stack traces, query errors).',
      'Distributed Traces (Jaeger/OpenTelemetry): Request lifecycle across microservices showing WHERE latency or failures occurred.',
      'Workflow: Metric alert fires -> Trace isolates failing service -> Logs pinpoint exact code error.'
    ],
    sampleAnswer: 'Metrics notify you THAT something is wrong via numeric aggregations (e.g. 5xx rate > 2%). Distributed tracing reveals WHERE the issue is occurring across microservices by tracking trace IDs through RPC calls. Logs explain WHY it failed by providing granular context and stack traces. During an incident, an alert triggers from metrics, tracing pinpoints the slow service, and logs reveal the root error.',
    evaluationCriteria: 'Defines all three pillars and articulates the incident investigation workflow combining them.',
    tags: ['Observability', 'Prometheus', 'Distributed Tracing', 'OpenTelemetry'],
    source: 'SRE Observability Handbook'
  },

  // ----------------------------------------------------
  // BACKEND DEVELOPER
  // ----------------------------------------------------
  {
    id: 'bed-node-01',
    role: 'Backend Developer',
    domain: 'Backend Engineering',
    topic: 'Node.js & Express',
    difficulty: 'Beginner',
    type: 'Technical',
    question: 'How does the Node.js module system work? Explain the difference between CommonJS (require/module.exports) and ES Modules (import/export).',
    expectedPoints: [
      'CommonJS is synchronous, runtime loading; exports are dynamic and can occur inside conditions.',
      'ES Modules are static, asynchronous loading; imports must be top-level (unless using dynamic import()), allowing build-time tree shaking.',
      'Node.js distinguishes them via file extensions (.cjs vs .mjs) or "type": "module" in package.json.'
    ],
    sampleAnswer: 'CommonJS uses require() and module.exports, executing synchronously at runtime, which allows dynamic conditional imports. ES Modules (ESM) use static import/export statements parsed before evaluation, enabling dead-code elimination (tree-shaking) and native browser interoperability. In Node.js, setting "type": "module" in package.json enables ESM across the project.',
    evaluationCriteria: 'Contrasts runtime/sync loading with static/async analysis and explains tree-shaking benefits.',
    tags: ['Node.js', 'CommonJS', 'ESM', 'Modules'],
    source: 'Node.js Architecture'
  },
  {
    id: 'bed-sys-01',
    role: 'Backend Developer',
    domain: 'Backend Engineering',
    topic: 'System Design',
    difficulty: 'Intermediate',
    type: 'System Design',
    question: 'How do you design a high-throughput URL shortening service (like Bitly) handling 100M new URLs per month and 10B clicks per month?',
    expectedPoints: [
      'Capacity estimation: 100M writes/month (~40 writes/sec), 10B reads/month (~4,000 reads/sec) - highly read-heavy (100:1 read/write ratio).',
      'Shortening strategy: Base62 encoding (a-z, A-Z, 0-9) using a 7-character hash providing 62^7 (~3.5 trillion) unique URLs.',
      'Collision prevention: Distributed ID generator (Snowflake or pre-allocated range counter service) rather than MD5 hash truncation.',
      'Caching: Redis caching the top 20% high-frequency URLs (80/20 rule) to absorb 99% of read traffic.',
      'Database: NoSQL key-value/document store (DynamoDB or Cassandra) for fast O(1) single-key lookups.'
    ],
    sampleAnswer: 'With a 100:1 read-to-write ratio, I would use Base62 encoding on a 64-bit unique ID generated by a distributed counter service to yield a 7-character alias without hash collisions. I would store mappings in a distributed key-value store like DynamoDB for fast O(1) reads. I would deploy a Redis cluster in front of the database caching hot URLs with an LRU eviction policy, easily serving 4,000+ reads/sec with sub-5ms latency.',
    evaluationCriteria: 'Calculates read/write ratios, details Base62 encoding, explains unique ID generation, and designs Redis caching.',
    tags: ['System Design', 'URL Shortener', 'Base62', 'Redis', 'Caching'],
    source: 'System Design Interview Essentials'
  },
  {
    id: 'bed-db-01',
    role: 'Backend Developer',
    domain: 'Backend Engineering',
    topic: 'Databases & SQL',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'What are database indexes? Explain the difference between Clustered and Non-Clustered indexes in SQL databases.',
    expectedPoints: [
      'An index is an auxiliary B+ Tree data structure that accelerates row retrieval without scanning the whole table.',
      'Clustered Index: Determines the physical order of data in the table; only 1 clustered index per table (usually primary key).',
      'Non-Clustered Index: Stored separately with pointers back to the clustered index/row locator; multiple non-clustered indexes allowed.'
    ],
    sampleAnswer: 'A database index uses B+ Trees to allow logarithmic O(log N) searches instead of full table scans (O(N)). A Clustered Index dictates the physical ordering of records on disk; hence, only one clustered index exists per table (typically the primary key). Non-clustered indexes maintain an independent structure containing the indexed column and a pointer back to the primary key row locator.',
    evaluationCriteria: 'Distinguishes physical ordering vs pointer structure and notes single vs multiple index limits.',
    tags: ['SQL', 'Indexing', 'B+ Tree', 'Performance'],
    source: 'Database Internals'
  },
  {
    id: 'bed-auth-01',
    role: 'Backend Developer',
    domain: 'Backend Engineering',
    topic: 'Authentication & Security',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'How do Refresh Tokens work in JWT authentication? Why is using an Access Token + Refresh Token pattern safer than long-lived Access Tokens?',
    expectedPoints: [
      'Access tokens are short-lived (e.g. 15 minutes) and sent in HTTP Authorization headers for stateless verification.',
      'Refresh tokens are long-lived (e.g. 7-30 days) and stored securely in HttpOnly, Secure cookies, used only to mint new access tokens.',
      'Limits exposure: If an access token leaks, it expires quickly. Refresh tokens can be revoked in the database via token blacklisting/rotation.'
    ],
    sampleAnswer: 'Short-lived access tokens (15 mins) minimize damage if intercepted because they expire quickly. When expired, the client presents the refresh token—stored securely in an HttpOnly cookie immune to JavaScript XSS—to a dedicated refresh endpoint. The server verifies the refresh token against a database session table, enabling immediate revocation if suspicious activity occurs.',
    evaluationCriteria: 'Explains short vs long TTL, HttpOnly protection against XSS, and server-side revocation mechanisms.',
    tags: ['Security', 'JWT', 'Refresh Tokens', 'Authentication'],
    source: 'Web Security Best Practices'
  },

  // ----------------------------------------------------
  // SOFTWARE DEVELOPER
  // ----------------------------------------------------
  {
    id: 'swe-dsa-01',
    role: 'Software Developer',
    domain: 'Software Engineering',
    topic: 'Data Structures & Algorithms',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'Explain the Two Pointers technique. In what algorithmic scenarios does it reduce time complexity from O(N^2) to O(N)?',
    expectedPoints: [
      'Two pointers navigate an array or list from opposite ends or at differing speeds (slow/fast).',
      'Common scenarios: searching for pairs in a sorted array (e.g. Two Sum II, 3Sum), reversing strings in-place, and removing duplicates.',
      'Fast & slow pointers (Floyd\'s Tortoise and Hare) detect cycles in linked lists or find the middle node in a single pass.'
    ],
    sampleAnswer: 'The Two Pointers technique tracks two indices to scan an array concurrently. In sorted arrays, moving left/right pointers toward each other based on comparison sum eliminates nested loops, reducing O(N^2) brute force to O(N). Fast and slow pointer variations (Floyd\'s algorithm) detect linked list cycles and find midpoints in O(N) time with O(1) auxiliary space.',
    evaluationCriteria: 'Covers opposite-end pointers on sorted arrays and fast/slow pointer cycle detection.',
    tags: ['DSA', 'Two Pointers', 'Algorithms', 'Optimization'],
    source: 'Coding Patterns Handbook'
  },
  {
    id: 'swe-oop-01',
    role: 'Software Developer',
    domain: 'Software Engineering',
    topic: 'OOP & Design Patterns',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'Explain the SOLID principles of Object-Oriented Design and provide a practical example of violating and fixing the Open/Closed Principle.',
    expectedPoints: [
      'S: Single Responsibility, O: Open/Closed (open for extension, closed for modification), L: Liskov Substitution, I: Interface Segregation, D: Dependency Inversion.',
      'OCP violation: A payment processor using switch(paymentType) that requires editing the class every time a new payment method (e.g. Crypto) is added.',
      'OCP fix: Create a PaymentStrategy interface with a pay() method, allowing new payment implementations without modifying existing classes.'
    ],
    sampleAnswer: 'SOLID principles guide maintainable OOP design. The Open/Closed Principle states classes should be open for extension but closed for modification. A common violation is a function with nested switch statements checking payment types. Fixing this involves creating a PaymentMethod interface with an execute() method, allowing new payment strategies to be added without touching the existing processor.',
    evaluationCriteria: 'Lists all 5 principles and gives a concrete violation and interface/polymorphic refactoring.',
    tags: ['OOP', 'SOLID', 'Design Patterns', 'Architecture'],
    source: 'Clean Architecture Principles'
  },
  {
    id: 'swe-sys-01',
    role: 'Software Developer',
    domain: 'Software Engineering',
    topic: 'System Design',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'What is Database Sharding vs Partitioning? How do you choose a Shard Key and handle cross-shard queries?',
    expectedPoints: [
      'Partitioning divides a table into smaller sets on the same database server (e.g. range by date).',
      'Sharding distributes database partitions horizontally across multiple physical server nodes.',
      'A good shard key distributes read/write traffic evenly (high cardinality, uniform distribution, avoids hotspots).',
      'Cross-shard queries require scatter-gather queries which increase latency and should be minimized.'
    ],
    sampleAnswer: 'Partitioning splits large tables into segments on a single database instance, whereas Sharding distributes data horizontally across multiple physical database instances. Choosing a good shard key requires high cardinality and uniform access patterns (e.g. User ID) to prevent hot shards. Cross-shard joins require scatter-gather queries across all nodes, so schemas are denormalized to ensure related data resides on the same shard.',
    evaluationCriteria: 'Explains single vs multi-node distinction, shard key distribution criteria, and scatter-gather query drawbacks.',
    tags: ['System Design', 'Databases', 'Sharding', 'Scalability'],
    source: 'High-Scale Data Systems'
  },

  // ----------------------------------------------------
  // QA AUTOMATION ENGINEER
  // ----------------------------------------------------
  {
    id: 'qa-auto-01',
    role: 'QA Automation Engineer',
    domain: 'Quality Assurance Engineering',
    topic: 'Automation Fundamentals',
    difficulty: 'Beginner',
    type: 'Technical',
    question: 'What is the Test Automation Pyramid and what proportion of tests should reside at Unit, Integration, and UI levels?',
    expectedPoints: [
      'Pyramid base: Unit Tests (~70%) - fast, isolated, inexpensive to maintain.',
      'Pyramid middle: Integration/API Tests (~20%) - test service communication and business flows.',
      'Pyramid top: End-to-End / UI Tests (~10%) - test critical user journeys in real browsers; slow and susceptible to flakiness.',
      'Inverted pyramid (ice cream cone anti-pattern) causes brittle, slow test runs.'
    ],
    sampleAnswer: 'The Test Automation Pyramid recommends structuring automated testing with ~70% unit tests at the base for speed and pinpoint failure isolation, ~20% API and integration tests to verify component contracts, and ~10% end-to-end UI tests for critical user journeys. Relying primarily on UI tests creates a slow, brittle test suite with high maintenance costs.',
    evaluationCriteria: 'Articulates the 70/20/10 ratio, explains execution speed and cost trade-offs, and mentions anti-patterns.',
    tags: ['QA', 'Test Pyramid', 'Test Strategy', 'Automation'],
    source: 'Modern Testing Principles'
  },
  {
    id: 'qa-sel-01',
    role: 'QA Automation Engineer',
    domain: 'Quality Assurance Engineering',
    topic: 'Selenium & Playwright',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'Why is Playwright gaining popularity over legacy Selenium for modern single-page web applications?',
    expectedPoints: [
      'Auto-waiting: Playwright automatically waits for elements to be actionable (visible, stable, enabled) before clicking, eliminating arbitrary sleeps.',
      'Fast execution: Communicates directly via browser WebSocket devtools protocol rather than HTTP WebDriver translation.',
      'Built-in features: Native network mocking, multi-tab/multi-origin contexts, tracing, and video recording without third-party plugins.',
      'Fast browser contexts: Isolated browser contexts spin up in milliseconds without relaunching the browser process.'
    ],
    sampleAnswer: 'Playwright communicates directly over browser WebSocket protocols rather than legacy HTTP WebDriver commands, dramatically improving execution speed. Crucially, Playwright features built-in auto-waiting for actionability (visibility, stability) before actions, eliminating the primary cause of flaky tests in Selenium. It also supports instant isolated browser contexts and native network request interception.',
    evaluationCriteria: 'Highlights auto-waiting, WebSocket protocol vs WebDriver HTTP, and isolated browser contexts.',
    tags: ['Playwright', 'Selenium', 'Automation Testing', 'UI Testing'],
    source: 'Test Automation Tooling'
  },
  {
    id: 'qa-api-01',
    role: 'QA Automation Engineer',
    domain: 'Quality Assurance Engineering',
    topic: 'API Testing',
    difficulty: 'Intermediate',
    type: 'Technical',
    question: 'How do you design a comprehensive automated API test suite using tools like REST Assured or Postman/Newman?',
    expectedPoints: [
      'Status code and response time validation.',
      'JSON Schema validation to verify data contracts and types.',
      'Header verification (Content-Type, security headers).',
      'Negative and edge cases: invalid payloads (400), unauthorized tokens (401), missing resources (404), and rate limits (429).',
      'Data cleanup: teardown fixtures to delete created test records.'
    ],
    sampleAnswer: 'A robust API test suite asserts HTTP status codes, latency thresholds, and validates the response body against a strict JSON schema contract. It tests positive scenarios and comprehensive boundary cases: missing required fields (400), expired JWTs (401), and SQL injection attempts. Tests should run with dynamic test data in isolated environments and execute teardown calls to keep state clean.',
    evaluationCriteria: 'Covers schema validation, positive and negative assertions, and test data lifecycle management.',
    tags: ['API Testing', 'REST Assured', 'Schema Validation', 'Postman'],
    source: 'API Quality Engineering'
  }
];

// Combine existing questions + new questions, avoiding ID duplicates
const existingIds = new Set(existingQuestions.map(q => q.id));
let addedCount = 0;

for (const nq of newQuestions) {
  if (!existingIds.has(nq.id)) {
    existingQuestions.push(nq);
    existingIds.add(nq.id);
    addedCount++;
  }
}

console.log('Total questions after expansion:', existingQuestions.length, `(${addedCount} added).`);

// Save expanded questions to interviewQuestionsData.js
const updatedFileContent = `// Master Interview Question Bank for CareerForge
// Curated role-specific questions with expected points, model sample answers, evaluation criteria, and tags.

export const interviewQuestions = ${JSON.stringify(existingQuestions, null, 2)};

// Role normalization mapping
const roleNormalization = {
  'mern stack developer': 'mern stack developer',
  'frontend developer': 'frontend developer',
  'backend developer': 'backend developer',
  'devops engineer': 'devops engineer',
  'software developer': 'software developer',
  'qa automation engineer': 'qa automation engineer',
  'python developer': 'backend developer',
  'java developer': 'java backend developer'
};

export function normalizeRoleForInterviews(role = '') {
  const r = role.toLowerCase().trim();
  return roleNormalization[r] || r;
}

// Role-to-Topic relevance mapping so related roles share relevant high-quality questions
const roleTopicAffinity = {
  'frontend developer': ['html & css', 'javascript', 'typescript', 'react', 'frontend performance', 'accessibility', 'testing', 'behavioral & hr'],
  'backend developer': ['node.js & express', 'rest apis', 'databases & sql', 'sql', 'mongodb', 'authentication & security', 'system design', 'system design basics', 'caching & redis', 'behavioral & hr'],
  'mern stack developer': ['javascript', 'react', 'node.js & express', 'mongodb', 'rest apis', 'authentication & jwt', 'system design basics', 'deployment & performance', 'behavioral & hr'],
  'full stack developer': ['javascript', 'react', 'node.js & express', 'authentication & jwt', 'rest apis', 'mongodb', 'sql', 'git and github', 'system design basics', 'behavioral & hr'],
  'cloud engineer': ['linux', 'networking', 'aws & cloud services', 'docker & containers', 'kubernetes', 'terraform & iac', 'iam & cloud security', 'ci/cd', 'cloud architecture', 'behavioral & hr'],
  'devops engineer': ['linux', 'networking', 'docker & containers', 'kubernetes', 'ci/cd', 'ci/cd pipelines', 'terraform & iac', 'observability & monitoring', 'cloud architecture', 'behavioral & hr'],
  'software developer': ['data structures & algorithms', 'oop & design patterns', 'sql & database design', 'sql', 'system design', 'system design basics', 'javascript', 'clean code & testing', 'behavioral & hr'],
  'java backend developer': ['core java & oop', 'collections framework', 'multithreading & concurrency', 'jvm internals', 'spring boot', 'hibernate & jpa', 'authentication & security', 'microservices', 'sql', 'behavioral & hr'],
  'data analyst': ['sql', 'statistics & probability', 'pandas & python', 'data visualization', 'business analysis & metrics', 'data cleaning & etl', 'behavioral & hr'],
  'qa automation engineer': ['automation fundamentals', 'selenium & playwright', 'api testing', 'ci/cd', 'testing', 'qa strategy & bug tracking', 'behavioral & hr']
};

// Helper to filter interview questions
export function getFilteredInterviewQuestions({ role, topic, difficulty, type, search } = {}) {
  const targetRoleNorm = (role || '').toLowerCase().trim();
  const allowedTopics = roleTopicAffinity[targetRoleNorm];

  return interviewQuestions.filter(q => {
    if (role && role !== 'All') {
      const qRoleNorm = (q.role || '').toLowerCase().trim();
      const qTopicNorm = (q.topic || '').toLowerCase().trim();

      const isExactRole = qRoleNorm === targetRoleNorm;
      const isGlobalRole = qRoleNorm === 'all';
      const isAffinityTopic = allowedTopics && allowedTopics.includes(qTopicNorm);

      // Matches if exact role, global question, or topic belongs to role affinity
      if (!isExactRole && !isGlobalRole && !isAffinityTopic) {
        return false;
      }
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
  const roleSpecific = getFilteredInterviewQuestions({ role, difficulty: 'All', type: 'All' });

  const topicsMap = {};
  for (const q of roleSpecific) {
    if (q.topic) {
      topicsMap[q.topic] = (topicsMap[q.topic] || 0) + 1;
    }
  }

  // Fallback to guarantee UI never breaks
  if (Object.keys(topicsMap).length === 0) {
    const fallbackTopics = ['Technical Fundamentals', 'System Architecture', 'Problem Solving', 'Behavioral & HR'];
    fallbackTopics.forEach(t => { topicsMap[t] = 5; });
  }

  return Object.entries(topicsMap).map(([name, count]) => ({ name, count }));
}
`;

fs.writeFileSync(path.join(__dirname, 'interviewQuestionsData.js'), updatedFileContent, 'utf8');
console.log('interviewQuestionsData.js written successfully!');
