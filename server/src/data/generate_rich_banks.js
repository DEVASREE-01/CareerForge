// Builder script to populate complete, rich, production-grade question banks
// covering Full Stack Developer, Cloud Engineer, Java Backend Developer, Data Analyst,
// 10 supported companies, and 50+ LeetCode problems with topic & role mappings.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// =========================================================================
// 1. INTERVIEW QUESTION BANK
// =========================================================================
const interviewQuestions = [
  // -----------------------------------------------------------------------
  // FULL STACK DEVELOPER
  // -----------------------------------------------------------------------
  // JavaScript
  {
    id: 'fs-js-01', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain the difference between var, let, and const in JavaScript, focusing on scope, hoisting, and reassignability.',
    expectedPoints: ['var is function-scoped while let and const are block-scoped.', 'var is hoisted and initialized with undefined; let and const enter the Temporal Dead Zone (TDZ).', 'const prevents reassignment of variable binding, though properties of objects declared with const can still be modified.'],
    sampleAnswer: 'var is scoped to the enclosing function and hoisted with an initial value of undefined. let and const are block-scoped ({}) and enter a Temporal Dead Zone from the start of the block until declaration. const additionally prevents variable identifier reassignment.',
    evaluationCriteria: 'Accurately distinguishes lexical block scoping, TDZ behavior, and reference vs value immutability.',
    tags: ['JavaScript', 'Scope', 'Hoisting', 'ES6'], source: 'Industry Standard Technical Question'
  },
  {
    id: 'fs-js-02', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Beginner', type: 'Technical',
    question: 'How do JavaScript closures work and what is a practical real-world use case for them in modern web development?',
    expectedPoints: ['A closure is a function bundled together with references to its surrounding lexical environment.', 'Inner functions retain access to outer function variables even after the outer function has returned.', 'Practical use cases include data privacy (private state/factory functions), memoization, and partial application/currying.'],
    sampleAnswer: 'A closure occurs when an inner function retains access to the variables of its outer enclosing scope even after the outer function has returned. A classic real-world use case is encapsulating private state in module factories or event handlers where specific state must be remembered without global pollution.',
    evaluationCriteria: 'Mentions lexical scoping, memory retention, and practical patterns like private variables or handlers.',
    tags: ['JavaScript', 'Closures', 'Scope', 'Encapsulation'], source: 'Industry Standard Technical Question'
  },
  {
    id: 'fs-js-03', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain the JavaScript Event Loop, Call Stack, Task Queue (Macrotasks), and Microtask Queue with execution order.',
    expectedPoints: ['JavaScript is single-threaded; asynchronous operations are managed by the host environment and event loop.', 'Call stack executes synchronous code to completion.', 'Microtasks (Promise.then, MutationObserver, queueMicrotask) take priority and are completely drained after each macrotask before processing the next macrotask (setTimeout, setInterval, I/O).'],
    sampleAnswer: 'The Event Loop coordinates the Call Stack and task queues. When synchronous code runs on the Call Stack, async tasks are delegated to Web APIs. When resolved, Promise callbacks enter the Microtask Queue while timer callbacks enter the Macrotask Queue. Once the call stack empties, the event loop drains ALL microtasks first before executing the next macrotask.',
    evaluationCriteria: 'Clearly explains synchronous execution on call stack, priority of microtask queue over macrotask queue, and non-blocking I/O.',
    tags: ['JavaScript', 'Event Loop', 'Async', 'Microtasks'], source: 'Frequently Reported Technical Question'
  },
  {
    id: 'fs-js-04', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Intermediate', type: 'Technical',
    question: 'What is prototypal inheritance in JavaScript and how does it differ from classical class-based inheritance in Java or C++?',
    expectedPoints: ['Objects inherit directly from other objects via their internal prototype link (__proto__).', 'Property lookup travels up the prototype chain until found or null is reached.', 'ES6 class syntax is syntactic sugar over prototype chains, rather than creating separate blueprint classes.'],
    sampleAnswer: 'In JavaScript, objects have an internal link to a prototype object. When accessing a property, the runtime checks the instance first, then its prototype, up to Object.prototype. Unlike classical languages where classes define blueprints and copy structures at instantiation, JS objects link dynamically in memory.',
    evaluationCriteria: 'Understands dynamic property resolution, prototype chain hierarchy, and the syntactic sugar nature of ES6 classes.',
    tags: ['JavaScript', 'Prototypes', 'OOP', 'Inheritance'], source: 'Industry Standard Technical Question'
  },
  {
    id: 'fs-js-05', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Advanced', type: 'Technical',
    question: 'How does garbage collection work in V8 engine and what are common sources of memory leaks in single page applications?',
    expectedPoints: ['V8 uses Mark-and-Sweep with generational collection (Young generation Scavenge vs Old generation Mark-Sweep-Compact).', 'Memory leaks arise from uncleared timers (setInterval), forgotten event listeners on unmounted elements, detached DOM nodes held in closures, and growing global caches.'],
    sampleAnswer: 'V8 manages memory using Generational Garbage Collection: short-lived objects live in the Nursery and are quickly collected using Scavenger, while surviving objects are promoted to Old Space and collected via Mark-Sweep-Compact. Common frontend memory leaks happen when unmounted React components leave active event listeners, intervals, or detached DOM references inside closures.',
    evaluationCriteria: 'Discusses generational collection, mark-sweep algorithm, and identifies tangible leak causes in modern SPAs.',
    tags: ['JavaScript', 'V8', 'Performance', 'Memory Management'], source: 'Advanced Technical Interview Question'
  },
  {
    id: 'fs-js-06', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Intermediate', type: 'Practical',
    question: 'How do you implement a debounce function from scratch in JavaScript, and in what frontend scenarios is it essential?',
    expectedPoints: ['Debouncing delays function execution until a specified quiet period has elapsed without any new invocations.', 'Implemented using setTimeout, clearTimeout, and returning a closure that preserves "this" and arguments.', 'Key use cases: Search autocomplete inputs, window resize listeners, and form auto-save triggers.'],
    sampleAnswer: 'A debounce function takes a callback and delay in milliseconds, returning a wrapper function that clears the previous timer with clearTimeout and schedules a new setTimeout. Essential for live search inputs to prevent making 20 API requests while the user types "laptop".',
    evaluationCriteria: 'Explains timer clearing mechanism, closures for timeout ID retention, and search input optimization use case.',
    tags: ['JavaScript', 'Debounce', 'Optimization', 'DOM Events'], source: 'Coding & Practical Interview Question'
  },
  {
    id: 'fs-js-07', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Advanced', type: 'Debugging',
    question: 'Debug this async snippet: Why does a forEach loop with async/await execute all iterations concurrently instead of sequentially, and how do you fix it?',
    expectedPoints: ['Array.prototype.forEach does not await the returned Promises from its callback; it fires callbacks synchronously without waiting.', 'Fix using a standard "for...of" loop which pauses each iteration with await.', 'Alternative: Use Promise.all if parallel execution is explicitly desired.'],
    sampleAnswer: 'Array.prototype.forEach executes its callback synchronously for each item and ignores the Promise returned by an async callback. To run async operations sequentially in order, use a modern "for...of" loop with await inside the loop body, or use reduce chaining.',
    evaluationCriteria: 'Identifies forEach lack of Promise handling and provides for...of sequential solution or Promise.all parallel solution.',
    tags: ['JavaScript', 'Async/Await', 'Debugging', 'Promises'], source: 'Real-world Debugging Scenario'
  },
  {
    id: 'fs-js-08', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Beginner', type: 'Technical',
    question: 'What is the difference between shallow copy and deep copy in JavaScript, and what are the best ways to achieve each?',
    expectedPoints: ['Shallow copy clones top-level properties; nested objects/arrays retain references to the original.', 'Deep copy recursively duplicates all nested references into entirely new objects.', 'Shallow methods: Spread operator ({...obj}), Object.assign(). Deep methods: structuredClone(), JSON.parse(JSON.stringify()) (with limitations on Dates/functions).'],
    sampleAnswer: 'A shallow copy copies only top-level properties; nested objects still share memory references. A deep copy clones the full nested hierarchy. In modern JavaScript, structuredClone() is the native, reliable standard for deep cloning without the serialization bugs of JSON.parse(JSON.stringify()).',
    evaluationCriteria: 'Accurately explains reference sharing in nested structures and identifies structuredClone() and spread operators.',
    tags: ['JavaScript', 'Objects', 'Immutability', 'Memory'], source: 'Core Fundamentals Question'
  },
  {
    id: 'fs-js-09', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain how Promises work under the hood, including the three Promise states, chaining, and error propagation.',
    expectedPoints: ['States: Pending, Fulfilled, Rejected. Once settled, state is immutable.', '.then() returns a new Promise, allowing chaining and transformation of resolved values.', 'Errors bubble down the chain until caught by a .catch() handler or unhandledrejection.'],
    sampleAnswer: 'A Promise is an object representing the eventual completion or failure of an async operation. It starts in Pending and transitions once to Fulfilled or Rejected. Each .then() callback returns a new Promise, allowing linear async pipelines where any unhandled rejection skips ahead to the nearest .catch() handler.',
    evaluationCriteria: 'Explains state transitions, Promise chaining returning new promises, and catch bubbling.',
    tags: ['JavaScript', 'Promises', 'Async', 'Error Handling'], source: 'Industry Standard Technical Question'
  },
  {
    id: 'fs-js-10', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'JavaScript', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain the differences between CommonJS (require/module.exports) and ES Modules (import/export) in Node.js and browser runtimes.',
    expectedPoints: ['CommonJS is synchronous and resolves modules at runtime; ES Modules are asynchronous and statically analyzed at parse/compile time.', 'ES Modules enable tree-shaking (dead code elimination) because dependencies are known before execution.', 'Top-level await is natively supported in ESM but not in CommonJS.'],
    sampleAnswer: 'CommonJS loads modules synchronously at runtime using require(), which means imports can be dynamic but prevents static analysis. ES Modules use static import syntax parsed before execution, enabling build tools to perform tree-shaking and dead-code elimination. ESM also natively supports top-level await and runs in strict mode by default.',
    evaluationCriteria: 'Highlights static analysis vs dynamic runtime loading, tree-shaking capabilities, and synchronous vs asynchronous evaluation.',
    tags: ['JavaScript', 'Modules', 'ESM', 'CommonJS', 'Node.js'], source: 'Modern JavaScript Architecture'
  },

  // React
  {
    id: 'fs-react-01', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'React', difficulty: 'Beginner', type: 'Technical',
    question: 'How does the React Virtual DOM work, and how does the reconciliation algorithm update the real DOM efficiently?',
    expectedPoints: ['Virtual DOM is a lightweight in-memory JavaScript representation of the actual DOM tree.', 'When state/props change, React renders a new VDOM tree and diffs it against the previous tree using heuristic O(n) reconciliation.', 'Batched updates are applied to the real browser DOM in a single pass to minimize costly layout reflows and repaints.'],
    sampleAnswer: 'React maintains a Virtual DOM in memory. When state updates occur, React computes a new virtual tree and runs its Diffing Algorithm (React Fiber) to detect exact changes. It then batches only the modified nodes to the real DOM, avoiding full page recalculations and minimizing expensive browser reflows.',
    evaluationCriteria: 'Explains in-memory representation, diffing heuristics (keys, element types), and batched DOM mutations.',
    tags: ['React', 'Virtual DOM', 'Reconciliation', 'Fiber'], source: 'Industry Standard Technical Question'
  },
  {
    id: 'fs-react-02', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'React', difficulty: 'Beginner', type: 'Technical',
    question: 'What are the rules of React Hooks and why must hooks never be called inside loops, conditions, or nested functions?',
    expectedPoints: ['Rules: 1) Only call hooks at the top level of functional components or custom hooks; 2) Do not call inside loops/conditions/nested functions.', 'React relies on the exact invocation order of hooks across renders to match state variables to their corresponding internal Fiber linked-list nodes.'],
    sampleAnswer: 'React relies on call order to track hook state internally. Each component Fiber maintains a linked list of hook records. If a hook is inside an "if" statement that evaluates to false on a subsequent render, the hook index misaligns, corrupting the entire component state.',
    evaluationCriteria: 'Mentions top-level invocation rule and Fiber internal linked-list indexing based on call order.',
    tags: ['React', 'Hooks', 'Fiber', 'State Management'], source: 'Core React Fundamentals'
  },
  {
    id: 'fs-react-03', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'React', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain the difference between useEffect, useLayoutEffect, and useMemo, with appropriate production use cases for each.',
    expectedPoints: ['useEffect runs asynchronously after the browser paints, suitable for data fetching, subscriptions, and non-blocking side effects.', 'useLayoutEffect runs synchronously immediately after DOM mutations but before the browser paints, preventing visual layout flickering.', 'useMemo memoizes computed values across renders to avoid expensive recalculations unless dependencies change.'],
    sampleAnswer: 'useEffect runs asynchronously after paint, ideal for API calls and analytics. useLayoutEffect runs synchronously before browser paint, essential for measuring DOM elements (e.g. tooltip placement) to prevent visual layout shift. useMemo caches computed data (like sorting 10,000 items) to prevent recalculation on unrelated renders.',
    evaluationCriteria: 'Differentiates render timing (before paint vs after paint), layout shift avoidance, and computational memoization.',
    tags: ['React', 'Hooks', 'useEffect', 'Performance'], source: 'Frequently Reported Technical Question'
  },
  {
    id: 'fs-react-04', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'React', difficulty: 'Intermediate', type: 'Practical',
    question: 'How do you prevent unnecessary re-renders in a deeply nested React component hierarchy?',
    expectedPoints: ['Wrap pure presentational components in React.memo() with shallow prop comparison.', 'Stabilize callbacks with useCallback() and complex calculated objects with useMemo().', 'Push state down closer to where it is consumed, or lift state out into localized context / atomic stores.'],
    sampleAnswer: 'To eliminate redundant re-renders: 1) Wrap child components in React.memo(); 2) Wrap event handler functions passed as props in useCallback() so reference identities stay stable; 3) Localize state so updating an input does not trigger parent container re-renders; 4) Use children prop composition to bypass intermediate renders.',
    evaluationCriteria: 'Covers React.memo, useCallback reference stabilization, state colocation, and component composition.',
    tags: ['React', 'Optimization', 'useCallback', 'React.memo'], source: 'Frontend Performance & Architecture'
  },
  {
    id: 'fs-react-05', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'React', difficulty: 'Advanced', type: 'Architecture',
    question: 'How does React Context API compare with dedicated state management libraries like Redux Toolkit or Zustand in high-frequency update apps?',
    expectedPoints: ['Context API causes all consuming components to re-render whenever the context value changes, making it inefficient for high-frequency state updates.', 'Redux Toolkit and Zustand support granular selector-based subscriptions, re-rendering only the specific component subscribing to the updated slice of state.', 'Context is ideal for low-frequency global data (auth user, theme, locale); Zustand/Redux for dynamic interactive application state.'],
    sampleAnswer: 'Context API triggers re-renders across all consumer components whenever its value reference changes, which degrades performance in high-frequency updates (e.g., animations, live tables). Zustand and Redux Toolkit use selector subscriptions outside the React render tree, ensuring only components subscribed to the modified property re-render.',
    evaluationCriteria: 'Explains Context re-render propagation and compares selector subscriptions in Zustand/Redux for high-throughput UIs.',
    tags: ['React', 'State Management', 'Redux', 'Zustand', 'Context API'], source: 'Senior Frontend Architecture Question'
  },
  {
    id: 'fs-react-06', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'React', difficulty: 'Intermediate', type: 'Debugging',
    question: 'A component fetching data in useEffect causes an infinite loop. What is the root cause and how do you diagnose and resolve it?',
    expectedPoints: ['Root cause: Updating state inside useEffect without a dependency array, or passing an unstable object/array reference into the dependency array that gets recreated on every render.', 'Fix: Provide an explicit dependency array ([] for mount only), use primitive dependencies, or wrap object/function dependencies in useMemo/useCallback.'],
    sampleAnswer: 'An infinite loop happens when state is updated inside useEffect, which triggers a re-render. If useEffect has no dependency array or depends on an object/array created in the component body whose reference changes every render, the effect runs again indefinitely. Fix by passing an empty dependency array for mount or stabilizing dependencies with useCallback/useMemo.',
    evaluationCriteria: 'Explains state update triggering render cycle, dependency reference inequality, and stabilization remedies.',
    tags: ['React', 'useEffect', 'Debugging', 'Infinite Loop'], source: 'Common Frontend Bug Resolution'
  },
  {
    id: 'fs-react-07', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'React', difficulty: 'Advanced', type: 'Architecture',
    question: 'Explain React Server Components (RSC) vs Client Components in Next.js App Router and how data fetching differs.',
    expectedPoints: ['Server Components execute exclusively on the server, have zero client bundle size impact, and can access databases and backend secrets directly.', 'Client Components (marked with "use client") execute on both server (SSR) and client, handling browser events, useState, and useEffect.', 'RSC streams HTML and serialized component trees to the browser without client-side hydration overhead for static UI.'],
    sampleAnswer: 'React Server Components render entirely on the server and send a serialized UI stream to the client without sending JS bundle code for dependencies. They can directly query databases without API endpoints. Client Components ("use client") are hydrated on the browser to handle interactivity, state, and browser APIs.',
    evaluationCriteria: 'Highlights bundle reduction, direct server resource access, and selective hydration boundaries.',
    tags: ['React', 'Next.js', 'Server Components', 'SSR', 'Architecture'], source: 'Modern Full Stack Architecture'
  },

  // Node.js & Express
  {
    id: 'fs-node-01', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'Node.js & Express', difficulty: 'Beginner', type: 'Technical',
    question: 'How does Node.js handle thousands of concurrent client connections with a single main JavaScript thread?',
    expectedPoints: ['Node.js uses an event-driven, non-blocking asynchronous I/O architecture powered by the libuv C++ library.', 'Network sockets and file operations are delegated to OS asynchronous APIs (epoll/kqueue) or the libuv thread pool.', 'The main thread remains free to accept incoming connections and processes callbacks when I/O completes.'],
    sampleAnswer: 'Node.js runs JavaScript on a single thread but delegates I/O operations (file system, DNS, crypto, database network sockets) to libuv and OS asynchronous mechanisms like epoll. When I/O completes, callbacks are queued to the event loop, allowing the main thread to serve thousands of connections without thread-per-request overhead.',
    evaluationCriteria: 'Mentions single-threaded JS execution, libuv event loop, non-blocking I/O, and OS kernel delegation.',
    tags: ['Node.js', 'libuv', 'Event Loop', 'Concurrency', 'Async'], source: 'Industry Standard Technical Question'
  },
  {
    id: 'fs-node-02', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'Node.js & Express', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain the Express.js middleware pipeline, next() propagation, and how to write a centralized error handling middleware.',
    expectedPoints: ['Middleware functions have access to (req, res, next) and execute sequentially in order of registration.', 'Calling next() forwards control; passing an argument next(err) jumps immediately to error-handling middleware.', 'Error middleware requires 4 parameters: (err, req, res, next).'],
    sampleAnswer: 'Express middleware runs in an onion/pipeline model where each handler inspects or transforms req/res before invoking next(). If an error occurs, passing the error to next(err) bypasses regular handlers and routes directly to centralized error middleware defined with 4 arguments: (err, req, res, next), which formats standard JSON error responses.',
    evaluationCriteria: 'Identifies 4-parameter signature for error handlers, next() execution chain, and centralized logging.',
    tags: ['Express.js', 'Middleware', 'Error Handling', 'Node.js'], source: 'Core Backend Development'
  },
  {
    id: 'fs-node-03', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'Node.js & Express', difficulty: 'Intermediate', type: 'Practical',
    question: 'How do Node.js Streams and Buffers work, and why should you use streams over fs.readFile when handling large file uploads/downloads?',
    expectedPoints: ['Buffers hold raw binary chunks in memory outside V8 heap.', 'Streams process data chunk by chunk sequentially without loading the entire file into RAM.', 'fs.readFile loads the whole file into memory at once, which will exhaust RAM (OutOfMemory) with multi-gigabyte files; streams maintain low memory footprint via pipe() and backpressure handling.'],
    sampleAnswer: 'Buffers are chunks of raw binary data allocated outside the V8 heap. Streams allow processing data in sequential chunks as it arrives. Using fs.readFile loads the entire file into RAM, crashing the server if multiple users download 500MB files simultaneously. Streams pipe data directly from disk to network sockets with constant memory usage and automatic backpressure.',
    evaluationCriteria: 'Explains memory allocation differences, chunked data pipelines, and backpressure management.',
    tags: ['Node.js', 'Streams', 'Buffers', 'Memory', 'Performance'], source: 'Backend Performance & Scaling'
  },
  {
    id: 'fs-node-04', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'Node.js & Express', difficulty: 'Advanced', type: 'Architecture',
    question: 'How do you scale a CPU-intensive Node.js application without blocking the main event loop?',
    expectedPoints: ['Offload heavy computation using Node.js Worker Threads (worker_threads module) to run JS on separate OS threads.', 'Use the cluster module to fork multiple Node.js OS processes sharing the same server port across CPU cores.', 'Offload tasks to background message queue workers (BullMQ, Redis, RabbitMQ).'],
    sampleAnswer: 'Because CPU-bound operations block the single event loop, solutions include: 1) Worker Threads (worker_threads) for sharing memory and executing CPU tasks on dedicated threads; 2) The Cluster module to spawn worker processes per CPU core; 3) Asynchronous job queues with Redis/BullMQ to process tasks out-of-band on dedicated worker nodes.',
    evaluationCriteria: 'Identifies event loop blocking vulnerability and explains Worker Threads, Cluster module, and async message queues.',
    tags: ['Node.js', 'Scaling', 'Worker Threads', 'Cluster', 'BullMQ'], source: 'Senior Backend Engineering'
  },

  // Authentication & REST APIs
  {
    id: 'fs-auth-01', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'Authentication & JWT', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain the structure of a JSON Web Token (JWT) and how stateless authentication works between frontend and backend.',
    expectedPoints: ['JWT consists of three Base64URL-encoded parts: Header (algorithm & token type), Payload (claims/user data), and Signature (secret verification hash).', 'Stateless: The server does not maintain session records in database/memory; it verifies the signature mathematically using the server secret.', 'The client transmits the token in the Authorization header (Bearer token) or HttpOnly cookie.'],
    sampleAnswer: 'A JWT is composed of Header, Payload, and Signature separated by dots. In stateless auth, the server signs user payload data on login and returns the token. On subsequent requests, the server validates the cryptographic signature using its secret key without looking up active sessions in a database, allowing horizontal scaling across multiple servers.',
    evaluationCriteria: 'Details the 3 JWT segments, signature verification mechanism, and advantages of stateless scaling.',
    tags: ['Authentication', 'JWT', 'Security', 'REST APIs'], source: 'Frequently Reported Technical Question'
  },
  {
    id: 'fs-auth-02', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'Authentication & JWT', difficulty: 'Intermediate', type: 'Security',
    question: 'Where should JWT tokens be stored on the client (LocalStorage vs HttpOnly Cookie) and how do you protect against XSS and CSRF attacks?',
    expectedPoints: ['LocalStorage is vulnerable to Cross-Site Scripting (XSS) because any injected JavaScript can read localStorage.getItem().', 'HttpOnly cookies cannot be read by JavaScript, mitigating XSS token theft.', 'Cookies are vulnerable to Cross-Site Request Forgery (CSRF), mitigated using SameSite=Strict/Lax flags and CSRF anti-forgery tokens.'],
    sampleAnswer: 'Storing tokens in localStorage leaves them vulnerable to XSS attacks where malicious scripts extract the credentials. Storing tokens in HttpOnly, Secure, SameSite=Strict cookies prevents JavaScript access, completely mitigating XSS token theft. CSRF risks are neutralized using SameSite cookie attributes and CSRF anti-forgery double-submit tokens.',
    evaluationCriteria: 'Contrasts XSS vulnerabilities of localStorage with CSRF vulnerabilities of cookies and prescribes SameSite + HttpOnly mitigations.',
    tags: ['Security', 'XSS', 'CSRF', 'JWT', 'Cookies'], source: 'Web Security Standard'
  },
  {
    id: 'fs-auth-03', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'Authentication & JWT', difficulty: 'Advanced', type: 'Architecture',
    question: 'How do you implement a secure Access Token + Refresh Token rotation flow with token revocation capabilities?',
    expectedPoints: ['Short-lived Access Token (e.g. 15 mins) kept in memory or cookie for fast stateless API auth.', 'Long-lived Refresh Token (e.g. 7 days) stored in HttpOnly cookie and tracked in a Redis/MongoDB whitelist or revocation blacklist.', 'When the access token expires, client hits /refresh; the server validates the refresh token, revokes the old refresh token, and issues a new pair (Refresh Token Rotation).'],
    sampleAnswer: 'Use short-lived Access Tokens (15 min) for API authorization and long-lived Refresh Tokens (7 days) stored in HttpOnly cookies. When refreshing, the server validates the refresh token against a database whitelist, invalidates the old token, and issues a new pair. If an already-used refresh token is reused, all tokens for that user session are immediately revoked to prevent replay attacks.',
    evaluationCriteria: 'Explains short vs long token lifetimes, token rotation mechanics, reuse detection, and revocation store (Redis/DB).',
    tags: ['JWT', 'Refresh Token', 'Architecture', 'OAuth2', 'Security'], source: 'Enterprise Security Architecture'
  },
  {
    id: 'fs-rest-01', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'REST APIs', difficulty: 'Beginner', type: 'Technical',
    question: 'What makes an API truly RESTful and what is the difference between PUT and PATCH HTTP methods?',
    expectedPoints: ['REST (Representational State Transfer) uses stateless client-server communication, standard HTTP verbs, and URI resources.', 'PUT replaces the entire resource representation (idempotent); missing fields are reset or overwritten.', 'PATCH applies partial modifications to a resource (updates only supplied fields).'],
    sampleAnswer: 'A RESTful API organizes operations around resources identified by URIs using standard HTTP verbs (GET, POST, PUT, PATCH, DELETE). PUT is idempotent and replaces the entire target resource with the payload provided. PATCH applies partial modifications to specific fields without overwriting unmodified properties.',
    evaluationCriteria: 'Explains REST principles and clearly contrasts full resource replacement (PUT) with partial delta updates (PATCH).',
    tags: ['REST APIs', 'HTTP', 'Web Architecture', 'API Design'], source: 'Core API Standards'
  },

  // MongoDB & SQL
  {
    id: 'fs-db-01', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'MongoDB', difficulty: 'Intermediate', type: 'Technical',
    question: 'In MongoDB schema design, when should you choose Document Embedding versus Document Referencing ($lookup)?',
    expectedPoints: ['Embedding: One-to-one or one-to-few bounded relationships where data is frequently retrieved together in a single read (e.g. order items, user address). Limited by 16MB document size.', 'Referencing: One-to-many or many-to-many unbounded relationships (e.g. log streams, comments on viral posts) or data updated independently by multiple entities.', 'Embedding provides atomic single-document writes without joins; referencing avoids data duplication and document growth limit.'],
    sampleAnswer: 'Choose embedding for bounded 1-to-few relationships where child data is tightly coupled and always read with the parent (e.g. order items inside an Order), ensuring atomic single-read/write performance. Choose referencing for unbounded 1-to-many relationships (e.g. comments, analytics logs) to avoid exceeding MongoDB\'s 16MB BSON document limit.',
    evaluationCriteria: 'Compares 16MB limit, query access patterns, atomicity of single-document writes, and join overhead.',
    tags: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation'], source: 'Database Architecture Standard'
  },
  {
    id: 'fs-db-02', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'SQL', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain SQL ACID properties and how database indexing (B-Tree) speeds up query performance with write trade-offs.',
    expectedPoints: ['ACID: Atomicity (all-or-nothing), Consistency (schema constraints preserved), Isolation (concurrent transactions don\'t interfere), Durability (committed data survives crashes).', 'B-Tree indexes provide O(log n) search/range traversal instead of O(n) full table scans.', 'Trade-off: Each index adds storage overhead and slows down INSERT/UPDATE/DELETE because index trees must be rebalanced on write.'],
    sampleAnswer: 'ACID guarantees reliable transactions: Atomicity (all-or-nothing execution), Consistency (integrity constraints enforced), Isolation (transaction isolation levels like Read Committed or Serializable), and Durability (WAL write-ahead logs persist commits). B-Trees enable O(log n) binary lookups on indexed columns, but every extra index adds overhead to INSERT/UPDATE statements.',
    evaluationCriteria: 'Accurately defines all 4 ACID pillars and explains B-Tree indexing benefits and write throughput trade-offs.',
    tags: ['SQL', 'ACID', 'Indexing', 'Databases', 'Transactions'], source: 'Frequently Reported Technical Question'
  },

  // Git & GitHub, Debugging, System Design, Behavioral
  {
    id: 'fs-git-01', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'Git and GitHub', difficulty: 'Beginner', type: 'Practical',
    question: 'Explain the difference between git merge and git rebase, and when you should avoid rebasing shared branches.',
    expectedPoints: ['git merge creates a new merge commit preserving full branching history and chronological context.', 'git rebase rewrites project history by replaying commits from the feature branch on top of the target base branch, creating a linear history.', 'Golden rule: Never rebase shared public branches (like main or develop) because rewritten commit SHAs cause conflicts for other collaborators.'],
    sampleAnswer: 'git merge combines branches by creating a merge commit, preserving the exact non-destructive history. git rebase moves your feature branch commits to the tip of the target branch, rewriting commit SHAs to produce a clean linear history. Never rebase shared remote branches because rewriting shared history disrupts other developers\' working trees.',
    evaluationCriteria: 'Contrasts merge commits vs linear commit replay and emphasizes the rule against rebasing shared branches.',
    tags: ['Git', 'GitHub', 'Version Control', 'Workflow'], source: 'Industry Standard Workflow Question'
  },
  {
    id: 'fs-sys-01', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'System Design Basics', difficulty: 'Intermediate', type: 'Architecture',
    question: 'How would you design a URL Shortener service (like bit.ly) considering hashing, database selection, redirect caching, and collision handling?',
    expectedPoints: ['Base62 encoding (a-z, A-Z, 0-9) of an auto-incrementing 64-bit ID or counter to generate compact short codes (e.g. 7 chars = 3.5 trillion URLs).', 'Fast read redirects (HTTP 301 Permanent vs 302 Temporary) cached in Redis for high read:write ratio (100:1).', 'Relational (PostgreSQL) or NoSQL (DynamoDB/MongoDB) database mapping short_code -> original_url with unique index.'],
    sampleAnswer: 'A URL shortener utilizes Base62 encoding on unique distributed sequence IDs to generate 6-7 character hashes without collisions. Since read traffic outnumbers writes by 100:1, route redirects through Redis caching. Return HTTP 302 if analytics tracking is required, or HTTP 301 for browser-cached redirects to minimize backend load.',
    evaluationCriteria: 'Proposes Base62 encoding, Redis caching layer, 301 vs 302 redirect trade-offs, and database storage estimation.',
    tags: ['System Design', 'Caching', 'Redis', 'Architecture', 'Base62'], source: 'Classic System Design Question'
  },
  {
    id: 'fs-beh-01', role: 'Full Stack Developer', domain: 'Software Engineering', topic: 'Behavioral & HR', difficulty: 'Intermediate', type: 'Behavioral',
    question: 'Describe a situation where a critical production bug occurred in your application. How did you diagnose, communicate, and resolve it?',
    expectedPoints: ['Use STAR method (Situation, Task, Action, Result).', 'Immediate mitigation: Rollback or feature flag toggle before deep code diagnosis.', 'Post-mortem: Root cause analysis, automated regression test creation, and process improvement to prevent recurrence.'],
    sampleAnswer: 'When a deployment caused checkout failures, I immediately verified APM error logs and executed a blue-green deployment rollback within 4 minutes to restore customer availability. I then identified an unhandled null in an API response in staging, patched the parsing with a fallback, added end-to-end Cypress regression tests, and published an internal post-mortem.',
    evaluationCriteria: 'Follows STAR format, prioritizes customer mitigation (rollback) over blame, and includes long-term automated prevention.',
    tags: ['Behavioral', 'STAR', 'Incident Management', 'Production'], source: 'Engineering Behavioral Question'
  },

  // -----------------------------------------------------------------------
  // CLOUD ENGINEER
  // -----------------------------------------------------------------------
  {
    id: 'ce-linux-01', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'Linux', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain Linux file permissions (rwx), numeric octal notation (e.g., chmod 755), and the difference between hard links and symbolic links.',
    expectedPoints: ['Permissions are divided into User (Owner), Group, and Others. r=4, w=2, x=1. 755 = rwxr-xr-x.', 'Hard link points directly to the file inode; file data remains accessible until all hard links are deleted.', 'Symbolic (soft) link is a separate pointer file containing the file path; it breaks if the target file is moved or deleted.'],
    sampleAnswer: 'Linux permissions use User, Group, and Others with octal values: 4 (read), 2 (write), 1 (execute). chmod 755 gives full access to owner and read/execute to group and others. A hard link shares the same inode as the original file and survives deletion of the original name; a symlink is a pointer file that breaks if the target is removed.',
    evaluationCriteria: 'Explains octal permission calculations, inode sharing in hard links vs path references in symlinks.',
    tags: ['Linux', 'Permissions', 'Inodes', 'Symlinks', 'SysAdmin'], source: 'Linux System Administration Standard'
  },
  {
    id: 'ce-linux-02', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'Linux', difficulty: 'Intermediate', type: 'Debugging',
    question: 'A production Linux EC2 instance shows 100% CPU utilization and high load average. Walk through your step-by-step diagnostic workflow using CLI utilities.',
    expectedPoints: ['Inspect top/htop to identify top CPU-consuming PIDs and distinguish user CPU (%us) vs system CPU (%sy) vs I/O wait (%wa).', 'Use "ps aux --sort=-%cpu | head -n 10" to pinpoint command arguments and execution user.', 'Use vmstat and iostat to check memory paging and disk bottleneck, and dmesg / /var/log/syslog for kernel crashes.', 'Terminate rogue processes with kill -15 (SIGTERM) before force kill -9 (SIGKILL).'],
    sampleAnswer: 'I start with "top" or "htop" to inspect %us vs %wa. If %wa is high, disk I/O is blocked (verified via iostat -x). If a specific process is runaway, I identify it via "ps aux --sort=-%cpu", inspect open descriptors with "lsof -p <PID>", check application logs, and attempt graceful shutdown with kill -15 before resorting to kill -9.',
    evaluationCriteria: 'Systematic triage using top, iostat, vmstat, ps, and understanding SIGTERM vs SIGKILL.',
    tags: ['Linux', 'Troubleshooting', 'Performance', 'CLI', 'top'], source: 'Production Incident Triage'
  },
  {
    id: 'ce-net-01', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'Networking', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain the difference between Security Groups and Network Access Control Lists (NACLs) in an AWS VPC.',
    expectedPoints: ['Security Groups: Operate at the instance/ENI level, stateful (inbound return traffic automatically allowed), allow rules only.', 'NACLs: Operate at the subnet level, stateless (inbound and outbound rules evaluated separately), support both allow and deny rules in numbered order.'],
    sampleAnswer: 'Security Groups operate at the virtual network interface (ENI) level and are stateful—if inbound traffic is permitted on port 443, response traffic is automatically allowed outbound. NACLs operate at the subnet boundary and are stateless—inbound and outbound rules must be explicitly configured, and they evaluate numbered rules sequentially with explicit DENY support.',
    evaluationCriteria: 'Contrasts ENI vs subnet boundary, stateful vs stateless traffic tracking, and allow vs explicit deny capabilities.',
    tags: ['AWS', 'Networking', 'VPC', 'Security Groups', 'NACLs'], source: 'AWS Certified Solutions Architect Standard'
  },
  {
    id: 'ce-aws-01', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'AWS & Cloud Services', difficulty: 'Intermediate', type: 'Architecture',
    question: 'Design a highly available, fault-tolerant 3-tier web application on AWS with zero single points of failure.',
    expectedPoints: ['VPC spanning at least 2 Availability Zones with public, private app, and private database subnets.', 'Public tier: Application Load Balancer across AZs connected to Internet Gateway.', 'Application tier: EC2 Auto Scaling Group or ECS/EKS containers inside private subnets routing outbound via NAT Gateways.', 'Data tier: Multi-AZ Amazon RDS (Aurora/PostgreSQL) with automated failover and read replicas.'],
    sampleAnswer: 'The architecture spans 2+ Availability Zones within a VPC: 1) Public subnets host an Application Load Balancer; 2) Private subnets host Auto Scaling EC2/ECS application clusters with NAT Gateways for outbound patches; 3) Isolated database subnets run Amazon Aurora Multi-AZ with synchronous replication and automated sub-minute failover; 4) Static assets served via CloudFront + S3.',
    evaluationCriteria: 'Deploys Multi-AZ across tiers, isolates private subnets with NAT, and configures automated load balancing and DB failover.',
    tags: ['AWS', 'Architecture', 'High Availability', 'VPC', 'RDS'], source: 'AWS Solutions Architect Question'
  },
  {
    id: 'ce-dock-01', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'Docker & Containers', difficulty: 'Intermediate', type: 'Practical',
    question: 'How do multi-stage Docker builds work and how do they reduce production container image size and security vulnerabilities?',
    expectedPoints: ['Multi-stage builds use multiple FROM directives in a single Dockerfile.', 'Stage 1 (Build): Installs compilers, SDKs, devDependencies, and builds artifacts.', 'Stage 2 (Runtime): Uses a minimal base image (e.g., Alpine or Distroless) and copies only the compiled output from Stage 1, excluding build tooling from the final image.'],
    sampleAnswer: 'Multi-stage builds allow using an initial heavy builder image with compilers, SDKs, and build dependencies to compile code, then copying only the resulting binary or production bundle into a lightweight final runtime image (like Alpine or Distroless). This reduces image size from 1GB+ to under 50MB and eliminates build-time security vulnerabilities from production.',
    evaluationCriteria: 'Explains builder separation, artifact copying via --from=builder, and security surface minimization.',
    tags: ['Docker', 'Containers', 'Security', 'Optimization', 'DevOps'], source: 'Containerization Best Practices'
  },
  {
    id: 'ce-k8s-01', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'Kubernetes', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain the Kubernetes architecture (Control Plane vs Worker Nodes) and the lifecycle of a Pod from deployment to running state.',
    expectedPoints: ['Control Plane components: kube-apiserver (REST gateway), etcd (distributed key-value store), kube-scheduler (assigns pods to nodes), kube-controller-manager.', 'Worker Node components: kubelet (communicates with apiserver and manages pod lifecycle), kube-proxy (network routing), container runtime (containerd).', 'Lifecycle: kubectl -> apiserver -> etcd -> scheduler selects node -> kubelet pulls image and starts containers -> readiness probe passes.'],
    sampleAnswer: 'The Control Plane runs kube-apiserver, etcd for state, kube-scheduler, and controller-managers. When a Deployment is submitted, apiserver saves state to etcd. The scheduler assigns the Pod to an optimal worker node. The worker node\'s kubelet instructs containerd to pull the image and run the container, updating status back to the API server.',
    evaluationCriteria: 'Names all primary control plane and node components and traces the scheduling-to-execution pipeline.',
    tags: ['Kubernetes', 'K8s', 'Architecture', 'Control Plane', 'Kubelet'], source: 'Kubernetes CKA Standard'
  },
  {
    id: 'ce-tf-01', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'Terraform & IaC', difficulty: 'Intermediate', type: 'Technical',
    question: 'How do you configure Terraform remote state with locking in AWS, and how do you handle state drift?',
    expectedPoints: ['Store terraform.tfstate in an Amazon S3 bucket with server-side encryption and versioning enabled.', 'Use an Amazon DynamoDB table with LockID attribute for distributed state locking to prevent race conditions during concurrent applies.', 'State drift is detected via "terraform plan" which queries real cloud APIs and compares against state; resolved with "terraform apply" or "terraform refresh".'],
    sampleAnswer: 'Configure the backend block with an S3 bucket (versioning and encryption enabled) and a DynamoDB table for state locking via LockID. This prevents concurrent execution corruption. When manual console changes cause state drift, "terraform plan" compares real infrastructure against declared code and generates remedies.',
    evaluationCriteria: 'Specifies S3 bucket configuration, DynamoDB locking mechanism, and drift reconciliation via terraform plan.',
    tags: ['Terraform', 'IaC', 'AWS', 'S3', 'DynamoDB', 'State'], source: 'Terraform Associate Standard'
  },
  {
    id: 'ce-iam-01', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'IAM & Cloud Security', difficulty: 'Intermediate', type: 'Security',
    question: 'Explain the Principle of Least Privilege in AWS IAM, the difference between IAM Roles and IAM Users, and how IAM Instance Profiles work.',
    expectedPoints: ['Least Privilege: Granting only the exact permissions needed to perform a specific task, avoiding wildcard (*) permissions.', 'IAM Users have long-lived credentials (passwords, access keys); IAM Roles provide temporary STS security credentials without hardcoded keys.', 'IAM Instance Profiles allow EC2 instances to securely assume an IAM role automatically via metadata service (IMDSv2).'],
    sampleAnswer: 'Least privilege ensures entities receive minimal necessary access. IAM Users represent humans with static long-lived credentials, which are dangerous if leaked. IAM Roles issue short-lived temporary STS tokens. EC2 instances use IAM Instance Profiles to assume roles automatically via IMDSv2, eliminating hardcoded API keys in code or configuration files.',
    evaluationCriteria: 'Contrasts long-lived user keys with temporary STS role tokens and details Instance Profile automation.',
    tags: ['AWS', 'IAM', 'Security', 'Least Privilege', 'Cloud Security'], source: 'AWS Security Specialty'
  },
  {
    id: 'ce-cicd-01', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'CI/CD', difficulty: 'Intermediate', type: 'Practical',
    question: 'Design a continuous delivery pipeline (GitHub Actions / GitLab CI) that automates Docker container image building, vulnerability scanning, and ECS deployment.',
    expectedPoints: ['Trigger: Push to main branch or PR merge.', 'Steps: 1) Run unit/integration tests; 2) Build Docker image; 3) Scan image with Trivy/Snyk for CVE vulnerabilities; 4) Push to Amazon ECR; 5) Update ECS Task Definition and trigger rolling deployment.', 'Feature rollback if ECS container health check fails.'],
    sampleAnswer: 'The GitHub Actions workflow triggers on merge: 1) Executes automated unit and linting tests; 2) Runs multi-stage Docker build; 3) Scans the image with Trivy to fail on Critical CVEs; 4) Authenticates to AWS via OIDC (avoiding static keys) and pushes image to ECR; 5) Registers new ECS Task Definition and initiates a rolling update with 5-minute health check verification.',
    evaluationCriteria: 'Covers lint/test gates, container vulnerability scanning, OIDC authentication, and rolling ECS zero-downtime deployment.',
    tags: ['CI/CD', 'GitHub Actions', 'Docker', 'AWS ECS', 'Security'], source: 'DevOps Pipeline Architecture'
  },
  {
    id: 'ce-arch-01', role: 'Cloud Engineer', domain: 'Cloud & DevOps', topic: 'Cloud Architecture', difficulty: 'Advanced', type: 'Architecture',
    question: 'How do you architect a multi-region disaster recovery strategy in AWS with Recovery Point Objective (RPO) < 1 minute and Recovery Time Objective (RTO) < 15 minutes?',
    expectedPoints: ['Multi-Region Warm Standby or Active-Active deployment across Primary and Secondary AWS Regions.', 'Database: Amazon Aurora Global Database or DynamoDB Global Tables providing sub-second replication latency (RPO < 1s).', 'DNS Failover: Route 53 latency routing with health checks to automatically redirect global traffic upon primary region health check failure (RTO < 5 mins).'],
    sampleAnswer: 'To achieve RPO < 1 min and RTO < 15 min, implement a Warm Standby or Active-Passive cross-region architecture. Aurora Global Database handles cross-region storage replication in under 1 second (satisfying RPO). Route 53 DNS Failover with automated CloudWatch health checks redirects incoming traffic to the secondary region ALB in under 2 minutes (satisfying RTO).',
    evaluationCriteria: 'Distinguishes RPO vs RTO, uses Aurora Global Database / DynamoDB Global Tables, and implements Route 53 automated health checks.',
    tags: ['Cloud Architecture', 'Disaster Recovery', 'AWS', 'Route 53', 'Aurora'], source: 'Principal Cloud Architect Question'
  },

  // -----------------------------------------------------------------------
  // JAVA BACKEND DEVELOPER
  // -----------------------------------------------------------------------
  {
    id: 'java-core-01', role: 'Java Backend Developer', domain: 'Java Backend', topic: 'Core Java & OOP', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain the four core principles of Object-Oriented Programming (OOP) in Java and how polymorphism is achieved at runtime versus compile-time.',
    expectedPoints: ['Encapsulation (data hiding via private fields and getters/setters), Abstraction (hiding implementation details via interfaces/abstract classes).', 'Inheritance (code reuse via extends/implements), Polymorphism (one interface, multiple behaviors).', 'Compile-time polymorphism = Method Overloading (same method name, different signatures); Runtime polymorphism = Method Overriding (@Override with dynamic method dispatch).'],
    sampleAnswer: 'The four OOP pillars are Encapsulation (protecting state), Abstraction (exposing contracts via interfaces), Inheritance (reusing parent class structures), and Polymorphism. Compile-time polymorphism is achieved through method overloading resolved by parameter signatures. Runtime polymorphism occurs through method overriding resolved dynamically via the virtual method table (vtable).',
    evaluationCriteria: 'Clearly explains all 4 pillars and distinguishes method overloading from dynamic method dispatch overriding.',
    tags: ['Java', 'OOP', 'Polymorphism', 'Encapsulation', 'Core Java'], source: 'Java Technical Foundations'
  },
  {
    id: 'java-coll-01', role: 'Java Backend Developer', domain: 'Java Backend', topic: 'Collections Framework', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain the internal working of Java HashMap (Java 8+), collision handling with balanced trees (Red-Black Trees), and why overriding equals() requires overriding hashCode().',
    expectedPoints: ['HashMap uses an array of Node buckets: index = (n - 1) & hash(key).', 'Collisions are stored in linked lists until chain length exceeds TREEIFY_THRESHOLD (8), where it converts into a Red-Black Tree for O(log n) performance.', 'Contract: If two objects are equal by equals(), they must produce identical hashCode() values; otherwise, get(key) will look in the wrong bucket and return null.'],
    sampleAnswer: 'In Java 8+, HashMap calculates bucket index using key hash bit-shifting. When collisions occur, elements are stored in a linked list until reaching 8 elements and 64 bucket capacity, where it converts into a Red-Black Tree (O(log n) lookup). If equals() is overridden without hashCode(), two equal keys land in different buckets, breaking get() retrieval.',
    evaluationCriteria: 'Details bucket indexing, treeification at threshold 8, and the equals/hashCode bucket lookup contract.',
    tags: ['Java', 'Collections', 'HashMap', 'Data Structures'], source: 'Frequently Reported Technical Question'
  },
  {
    id: 'java-multi-01', role: 'Java Backend Developer', domain: 'Java Backend', topic: 'Multithreading & Concurrency', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain the Java Memory Model, volatile keyword, synchronized blocks, and how ConcurrentHashMap achieves thread safety without table-wide locks.',
    expectedPoints: ['volatile guarantees visibility across CPU core caches and prevents instruction reordering, but does NOT guarantee atomicity for compound operations (like count++).', 'synchronized provides mutual exclusion and visibility by acquiring intrinsic object monitor locks.', 'ConcurrentHashMap (Java 8) uses lock-free Compare-And-Swap (CAS) for empty bucket insertions and synchronized locks on individual bucket head nodes rather than locking the entire map.'],
    sampleAnswer: 'The Java Memory Model defines how threads interact through main memory and local CPU caches. volatile ensures direct memory read/writes and prevents compiler reordering. ConcurrentHashMap achieves high concurrent throughput by using CAS (Compare-And-Swap) for empty bucket writes and fine-grained synchronized locking on only the specific bucket head node being modified.',
    evaluationCriteria: 'Explains cache visibility vs atomicity, CAS lock-free operations, and bucket-level granularity in ConcurrentHashMap.',
    tags: ['Java', 'Concurrency', 'Multithreading', 'volatile', 'CAS'], source: 'Advanced Java Concurrency'
  },
  {
    id: 'java-jvm-01', role: 'Java Backend Developer', domain: 'Java Backend', topic: 'JVM Internals', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain JVM memory structure (Heap, Stack, Metaspace, Program Counter) and how the G1 Garbage Collector manages memory.',
    expectedPoints: ['Heap: Shared storage for objects and instances. Divided into Eden, Survivor (S0/S1), and Tenured/Old generation.', 'Stack: Thread-private storage for local variables, method frames, and primitive values.', 'Metaspace: Native OS memory storing class metadata and reflection structures (replaces PermGen).', 'G1 GC divides heap into equal regions (~1MB to 32MB) and collects regions with the most garbage first (Garbage-First) to meet user-defined pause targets.'],
    sampleAnswer: 'JVM memory separates thread-private stacks (call frames and local variables) from the shared Heap (object instances). Metaspace holds class metadata in native OS memory. G1 GC splits the heap into 2048 non-contiguous regions. It performs concurrent marking and prioritizes collecting regions containing the highest density of reclaimable garbage (Garbage-First), satisfying predictable latency targets.',
    evaluationCriteria: 'Explains Heap vs Stack vs Metaspace and describes G1 GC region-based collection and pause time goals.',
    tags: ['Java', 'JVM', 'Garbage Collection', 'G1GC', 'Memory'], source: 'JVM Internals & Performance'
  },
  {
    id: 'java-spring-01', role: 'Java Backend Developer', domain: 'Java Backend', topic: 'Spring Boot', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain Dependency Injection and Inversion of Control (IoC) in Spring Boot, and why Constructor Injection is preferred over Field Injection (@Autowired on field).',
    expectedPoints: ['IoC transfers object lifecycle and dependency management to the Spring IoC Container.', 'Field injection hides dependencies, prevents making fields "final" (immutable), and makes unit testing difficult without starting Spring context/reflection.', 'Constructor injection enforces mandatory dependencies, supports immutable "final" fields, and enables clean POJO unit tests with Mockito.'],
    sampleAnswer: 'IoC delegates object creation and lifecycle management to the Spring Container. Constructor Injection is strongly preferred over field injection because: 1) It allows declaring dependencies as "final" for true immutability; 2) It prevents NullPointerExceptions by guaranteeing dependencies at instantiation; 3) It allows instant unit testing with plain mock objects without starting Spring runners.',
    evaluationCriteria: 'Articulates IoC container role, final field immutability, and unit testability benefits of constructor injection.',
    tags: ['Spring Boot', 'Dependency Injection', 'IoC', 'Testing'], source: 'Enterprise Spring Standards'
  },
  {
    id: 'java-jpa-01', role: 'Java Backend Developer', domain: 'Java Backend', topic: 'Hibernate & JPA', difficulty: 'Advanced', type: 'Technical',
    question: 'What is the N+1 Query Problem in Hibernate/JPA, and what are the primary techniques to detect and eliminate it in production?',
    expectedPoints: ['N+1 occurs when fetching a parent entity issues 1 query, and accessing a lazy-loaded child collection in a loop triggers N additional SQL queries.', 'Detection: Hibernate SQL query logging or tools like QuickPerf and datasource-proxy.', 'Solutions: Use JOIN FETCH in JPQL queries, @EntityGraph annotations, or batch fetching (hibernate.default_batch_fetch_size).'],
    sampleAnswer: 'The N+1 problem occurs when fetching 100 User records executes 1 SQL query, and accessing each user\'s Orders in a loop fires 100 individual queries (1 + N = 101 queries). Fix this using "JOIN FETCH u.orders" in JPQL, applying @EntityGraph on repository methods, or configuring batch fetching with hibernate.default_batch_fetch_size.',
    evaluationCriteria: 'Explains query explosion mechanics, JOIN FETCH solution, @EntityGraph, and batch fetching.',
    tags: ['JPA', 'Hibernate', 'Performance', 'SQL', 'Spring Data'], source: 'Senior Java Backend Interview'
  },
  {
    id: 'java-sec-01', role: 'Java Backend Developer', domain: 'Java Backend', topic: 'Authentication & Security', difficulty: 'Intermediate', type: 'Security',
    question: 'Explain how Spring Security SecurityFilterChain processes incoming requests with JWT authentication filter and UserDetailsService.',
    expectedPoints: ['Spring Security uses a chain of servlet filter beans (FilterChainProxy).', 'Custom OncePerRequestFilter intercepts requests, extracts Bearer JWT token from Authorization header, and validates signature.', 'Upon valid token, creates UsernamePasswordAuthenticationToken and sets it in SecurityContextHolder.getContext().setAuthentication().'],
    sampleAnswer: 'Spring Security routes HTTP requests through the SecurityFilterChain. A custom JWT filter extending OncePerRequestFilter extracts the Bearer token, validates the HMAC/RSA signature, extracts the user details and granted authorities, and sets an Authentication token in SecurityContextHolder, allowing @PreAuthorize method-level role checks.',
    evaluationCriteria: 'Traces the filter chain lifecycle, OncePerRequestFilter token extraction, and SecurityContextHolder authentication registration.',
    tags: ['Spring Security', 'JWT', 'Security', 'Authentication', 'Java'], source: 'Enterprise Security Architecture'
  },
  {
    id: 'java-micro-01', role: 'Java Backend Developer', domain: 'Java Backend', topic: 'Microservices', difficulty: 'Advanced', type: 'Architecture',
    question: 'How do you handle distributed transactions and data consistency across microservices using the Saga Pattern (Choreography vs Orchestration)?',
    expectedPoints: ['Two-Phase Commit (2PC) does not scale well in distributed microservices due to blocking locks and tight coupling.', 'Saga Pattern executes a sequence of local transactions across services; if a step fails, compensating transactions are executed in reverse to roll back state.', 'Choreography: Services listen to events (Kafka/RabbitMQ) and react autonomously. Orchestration: A centralized coordinator service executes and directs each transaction step.'],
    sampleAnswer: 'In distributed systems, the Saga pattern manages transactions through a sequence of local database transactions. If payment fails after order creation, compensating transactions undo earlier actions. Choreography relies on event brokers (Kafka) where services publish and subscribe to domain events. Orchestration uses a central coordinator (like Camunda or Temporal) to command each service explicitly.',
    evaluationCriteria: 'Contrasts 2PC limitations with Saga compensating transactions, and clearly distinguishes event-driven Choreography from Orchestrator coordination.',
    tags: ['Microservices', 'Saga Pattern', 'Distributed Systems', 'Kafka', 'Architecture'], source: 'Senior Microservices Architecture'
  },

  // -----------------------------------------------------------------------
  // DATA ANALYST
  // -----------------------------------------------------------------------
  {
    id: 'da-sql-01', role: 'Data Analyst', domain: 'Data Analytics', topic: 'SQL', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain SQL Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), and how PARTITION BY works with a practical sales ranking example.',
    expectedPoints: ['Window functions perform calculations across a set of table rows related to the current row without collapsing rows into a single summary like GROUP BY.', 'ROW_NUMBER() assigns consecutive integers (1, 2, 3, 4).', 'RANK() leaves gaps for ties (1, 2, 2, 4); DENSE_RANK() does not leave gaps (1, 2, 2, 3).', 'PARTITION BY resets the ranking counter for each group (e.g. ranking employees by salary per department).'],
    sampleAnswer: 'Window functions compute aggregations while preserving individual row identity. PARTITION BY divides the dataset into subsets (e.g. by region). Within each partition: ROW_NUMBER() assigns unique numbers; RANK() assigns the same rank to ties and skips subsequent numbers (1,2,2,4); DENSE_RANK() assigns identical ranks to ties without skipping (1,2,2,3).',
    evaluationCriteria: 'Accurately distinguishes row ranking tie behaviors and explains partition aggregation.',
    tags: ['SQL', 'Window Functions', 'Analytics', 'Data Analysis'], source: 'Industry Standard Analytics Question'
  },
  {
    id: 'da-sql-02', role: 'Data Analyst', domain: 'Data Analytics', topic: 'SQL', difficulty: 'Advanced', type: 'Coding',
    question: 'Write an SQL query to calculate the 7-day rolling average revenue per day using window functions with frame specifications (ROWS BETWEEN).',
    expectedPoints: ['Use AVG(daily_revenue) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW).', 'Ensure dates are continuous or aggregated daily before applying the rolling window frame.', 'Explain why ROWS BETWEEN 6 PRECEDING AND CURRENT ROW accounts for 7 total days including current date.'],
    sampleAnswer: 'SELECT date, daily_revenue, AVG(daily_revenue) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7d_avg FROM daily_sales_summary. The ROWS BETWEEN 6 PRECEDING AND CURRENT ROW frame calculates the mean across the current day and the 6 preceding chronological records.',
    evaluationCriteria: 'Provides correct window framing clause (ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) with ordering.',
    tags: ['SQL', 'Rolling Average', 'Time Series', 'Window Functions'], source: 'Data Analytics Technical Screen'
  },
  {
    id: 'da-stat-01', role: 'Data Analyst', domain: 'Data Analytics', topic: 'Statistics & Probability', difficulty: 'Intermediate', type: 'Technical',
    question: 'How do you design an A/B test for a conversion rate experiment, and how do you interpret p-values and statistical significance?',
    expectedPoints: ['Formulate null hypothesis (H0: no difference) and alternative hypothesis (H1: variant improves conversion).', 'Determine sample size upfront using power analysis (statistical power 80%, significance level alpha = 0.05).', 'p-value is the probability of observing results at least as extreme assuming null hypothesis is true; if p < 0.05, reject H0 and conclude significance.'],
    sampleAnswer: 'To design an A/B test: 1) Formulate H0 (conversion is equal) vs H1; 2) Determine required sample size based on Minimum Detectable Effect (MDE), 80% power, and 5% alpha; 3) Randomize users without selection bias; 4) Calculate two-sample z-test. If p-value < 0.05, we reject the null hypothesis and confirm the variant delivers a statistically significant lift.',
    evaluationCriteria: 'Covers hypothesis definition, power analysis sample sizing, and rigorous p-value interpretation.',
    tags: ['Statistics', 'A/B Testing', 'Hypothesis Testing', 'p-value'], source: 'Data Science & Analytics Standard'
  },
  {
    id: 'da-py-01', role: 'Data Analyst', domain: 'Data Analytics', topic: 'Pandas & Python', difficulty: 'Intermediate', type: 'Coding',
    question: 'Explain the difference between .loc[] and .iloc[] in Pandas and how to handle missing data using imputation techniques.',
    expectedPoints: ['.loc[] is label-based indexing (column names and index labels); .iloc[] is integer position-based indexing (0 to n-1).', 'Missing data strategies: dropna() for sparse missing rows, fillna() with mean/median for numerical data, mode for categorical data, or forward-fill (ffill) for time-series.', 'Mean is sensitive to outliers, so median imputation is preferred for skewed distributions.'],
    sampleAnswer: '.loc uses explicit labels (e.g. df.loc[0:5, "Revenue"]), whereas .iloc uses zero-based integer index positions (e.g. df.iloc[0:5, 1:3]). For missing data, if missing values are minimal, dropna() works; for skewed numerical distributions, imputing with df["col"].fillna(df["col"].median()) preserves central tendency without outlier distortion.',
    evaluationCriteria: 'Distinguishes label vs integer indexing and explains mean vs median imputation trade-offs.',
    tags: ['Python', 'Pandas', 'Data Cleaning', 'Imputation'], source: 'Python for Data Analysis Standard'
  },
  {
    id: 'da-viz-01', role: 'Data Analyst', domain: 'Data Analytics', topic: 'Data Visualization', difficulty: 'Beginner', type: 'Technical',
    question: 'How do you choose between a Bar Chart, Line Chart, Scatter Plot, and Heatmap when presenting insights to business stakeholders?',
    expectedPoints: ['Bar Chart: Comparing discrete categorical groups or ranking categories.', 'Line Chart: Displaying continuous trends, revenue velocity, or time-series changes.', 'Scatter Plot: Identifying correlation, clustering, or distribution between two continuous variables.', 'Heatmap: Visualizing high-density 2D relationships (e.g. user activity by day of week and hour).'],
    sampleAnswer: 'Select charts based on data structure: Line charts illustrate continuous time-series trends (e.g., Monthly Recurring Revenue); Bar charts compare discrete categorical counts (e.g., Revenue by Product Line); Scatter plots reveal correlation and outliers between two numeric variables; Heatmaps visualize multi-dimensional matrix intensity (e.g., peak user login hours).',
    evaluationCriteria: 'Maps visualization types directly to appropriate business use cases (time-series, categorical, bivariate correlation, density).',
    tags: ['Data Visualization', 'Tableau', 'PowerBI', 'Reporting', 'BI'], source: 'BI & Analytics Visualization Standard'
  },
  {
    id: 'da-biz-01', role: 'Data Analyst', domain: 'Data Analytics', topic: 'Business Analysis & Metrics', difficulty: 'Intermediate', type: 'Project',
    question: 'You notice a 15% drop in weekly active users (WAU) on an e-commerce platform. How do you investigate the root cause using cohort analysis and segmentation?',
    expectedPoints: ['Segment data across dimensions: Platform (iOS vs Android vs Web), Geography/Region, Traffic Source, User Cohorts (New vs Returning).', 'Check external vs internal factors: App release bugs, payment gateway downtime, marketing campaign drop, seasonality/holidays.', 'Analyze funnel drop-off stages (Homepage -> Search -> Cart -> Checkout) to isolate the exact step of user friction.'],
    sampleAnswer: 'I would break the investigation into structured steps: 1) Verify data telemetry integrity to rule out tracking bugs; 2) Segment the drop by dimensions (OS/app version, geography, acquisition channel); 3) Perform funnel drop-off analysis to see where abandonment spiked; 4) Compare new user conversion vs existing user churn cohorts. This isolates whether it was a technical bug or market factor.',
    evaluationCriteria: 'Structured hypothesis-driven approach, multi-dimensional segmentation, funnel drop-off analysis.',
    tags: ['Business Analysis', 'Metrics', 'Root Cause', 'Cohort Analysis'], source: 'Product Analytics Case Study'
  }
];

// Helper code to format output
const interviewQuestionsCode = `// Role-specific, topic-specific interview question bank for CareerForge
export const interviewQuestions = ${JSON.stringify(interviewQuestions, null, 2)};

// Helper to filter interview questions
export function getFilteredInterviewQuestions({ role, topic, difficulty, type, search } = {}) {
  return interviewQuestions.filter(q => {
    if (role && role !== 'All') {
      const targetRole = role.toLowerCase();
      const questionRole = (q.role || '').toLowerCase();
      const r1 = targetRole.replace('developer', '').replace('engineer', '').trim();
      const r2 = questionRole.replace('developer', '').replace('engineer', '').trim();
      const isRoleMatch = questionRole === targetRole || (r1 && r2 && (r1.includes(r2) || r2.includes(r1)));
      if (!isRoleMatch && questionRole !== 'all') return false;
    }
    if (topic && topic !== 'All' && q.topic.toLowerCase() !== topic.toLowerCase()) return false;
    if (difficulty && difficulty !== 'All' && q.difficulty.toLowerCase() !== difficulty.toLowerCase()) return false;
    if (type && type !== 'All' && q.type.toLowerCase() !== type.toLowerCase()) return false;
    if (search) {
      const s = search.toLowerCase();
      const matchQ = q.question.toLowerCase().includes(s);
      const matchT = q.topic.toLowerCase().includes(s);
      const matchTag = (q.tags || []).some(tag => tag.toLowerCase().includes(s));
      if (!matchQ && !matchT && !matchTag) return false;
    }
    return true;
  });
}

// Helper to get unique topics for role
export function getInterviewTopicsForRole(role = 'Full Stack Developer') {
  const roleSpecific = interviewQuestions.filter(q => {
    if (!role || role === 'All') return true;
    const r1 = role.toLowerCase().replace('developer', '').replace('engineer', '').trim();
    const r2 = q.role.toLowerCase().replace('developer', '').replace('engineer', '').trim();
    return q.role.toLowerCase() === role.toLowerCase() || (r1 && r2 && (r1.includes(r2) || r2.includes(r1)));
  });
  const topicsMap = {};
  for (const q of roleSpecific) {
    topicsMap[q.topic] = (topicsMap[q.topic] || 0) + 1;
  }
  return Object.entries(topicsMap).map(([name, count]) => ({ name, count }));
}
`;

fs.writeFileSync(path.join(__dirname, 'interviewQuestionsData.js'), interviewQuestionsCode, 'utf8');
console.log('Successfully written interviewQuestionsData.js with', interviewQuestions.length, 'questions.');
