// Master Interview Question Bank for CareerForge
// Curated role-specific questions with expected points, model sample answers, evaluation criteria, and tags.

export const interviewQuestions = [
  {
    "id": "fs-js-01",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain the difference between var, let, and const in JavaScript, focusing on scope, hoisting, and reassignability.",
    "expectedPoints": [
      "var is function-scoped while let and const are block-scoped.",
      "var is hoisted and initialized with undefined; let and const are hoisted into the Temporal Dead Zone (TDZ).",
      "const variables cannot be reassigned (though object properties remain mutable)."
    ],
    "sampleAnswer": "var is scoped to the enclosing function and hoisted with undefined. let and const are block-scoped ({}) and enter a Temporal Dead Zone from the start of the block until declaration. const additionally prevents variable identifier reassignment.",
    "evaluationCriteria": "Accurately distinguishes lexical block scoping, TDZ behavior, and reference vs value immutability.",
    "tags": [
      "JavaScript",
      "Scope",
      "Hoisting",
      "ES6"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "fs-js-02",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "How do JavaScript closures work and what is a practical real-world use case for them in modern web development?",
    "expectedPoints": [
      "A closure is the combination of a function bundled together with references to its lexical environment.",
      "Inner functions retain access to outer function variables even after the outer function has executed and returned.",
      "Practical use cases include data privacy (private state/factory functions), memoization, and partial application/currying."
    ],
    "sampleAnswer": "A closure occurs when an inner function retains access to the variables of its outer enclosing scope even after the outer function has returned. A classic real-world use case is encapsulating private state in module factories or event handlers where specific state must be remembered across asynchronous events without polluting the global scope.",
    "evaluationCriteria": "Mentions lexical scoping, garbage collection retention, and practical patterns like private variables or handlers.",
    "tags": [
      "JavaScript",
      "Closures",
      "Scope",
      "Encapsulation"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "fs-js-03",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the JavaScript Event Loop, Call Stack, Task Queue (Macrotasks), and Microtask Queue with execution order.",
    "expectedPoints": [
      "JavaScript is single-threaded; asynchronous operations are managed by the host environment and event loop.",
      "Call stack executes synchronous code to completion.",
      "Microtasks (Promise.then, MutationObserver, queueMicrotask) take priority and are completely drained after each macrotask before processing the next macrotask (setTimeout, setInterval, I/O)."
    ],
    "sampleAnswer": "The Event Loop coordinates the Call Stack and task queues. When synchronous code runs on the Call Stack, async tasks are delegated to Web APIs. When resolved, Promise callbacks enter the Microtask Queue while timer callbacks enter the Macrotask Queue. Once the call stack empties, the event loop drains ALL microtasks first before executing the next macrotask.",
    "evaluationCriteria": "Clearly explains synchronous execution on call stack, priority of microtask queue over macrotask queue, and non-blocking I/O.",
    "tags": [
      "JavaScript",
      "Event Loop",
      "Async",
      "Microtasks"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "fs-js-04",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is prototypal inheritance in JavaScript and how does it differ from classical class-based inheritance in Java or C++?",
    "expectedPoints": [
      "Objects inherit directly from other objects via their [[Prototype]] internal link (__proto__).",
      "Property lookup travels up the prototype chain until found or null is reached.",
      "ES6 class syntax is syntactic sugar over prototype chains, rather than creating separate blueprint classes."
    ],
    "sampleAnswer": "In JavaScript, objects have an internal link to a prototype object. When accessing a property, the runtime checks the instance first, then its prototype, up to Object.prototype. Unlike classical languages where classes define blueprints and copy structures at instantiation, JS objects link dynamically in memory.",
    "evaluationCriteria": "Understands dynamic property resolution, prototype chain hierarchy, and the syntactic sugar nature of ES6 classes.",
    "tags": [
      "JavaScript",
      "Prototypes",
      "OOP",
      "Inheritance"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "fs-js-05",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "How does garbage collection work in V8 engine and what are common sources of memory leaks in single page applications?",
    "expectedPoints": [
      "V8 uses Mark-and-Sweep with generational collection (Young generation Scavenge vs Old generation Mark-Sweep-Compact).",
      "Memory leaks arise from uncleared timers (setInterval), forgotten event listeners on unmounted elements, detached DOM nodes held in closures, and growing global caches."
    ],
    "sampleAnswer": "V8 manages memory using Generational Garbage Collection: short-lived objects live in the Nursery and are quickly collected using Scavenger, while surviving objects are promoted to the Old Space and collected via Mark-Sweep-Compact. Common frontend memory leaks happen when unmounted React components leave active event listeners, intervals, or detached DOM references inside closures.",
    "evaluationCriteria": "Discusses generational collection, mark-sweep algorithm, and identifies tangible leak causes in modern SPAs.",
    "tags": [
      "JavaScript",
      "V8",
      "Performance",
      "Memory Management"
    ],
    "source": "Advanced Technical Interview Question"
  },
  {
    "id": "fs-js-06",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you implement a debounce function from scratch in JavaScript, and in what frontend scenarios is it essential?",
    "expectedPoints": [
      "Debouncing delays function execution until a specified quiet period has elapsed without any new invocations.",
      "Implemented using setTimeout, clearTimeout, and returning a closure that preserves \"this\" and arguments.",
      "Key use cases: Search autocomplete inputs, window resize listeners, and form auto-save triggers."
    ],
    "sampleAnswer": "A debounce function takes a callback and delay in milliseconds, returning a wrapper function that clears the previous timer with clearTimeout and schedules a new setTimeout. Essential for live search inputs to prevent making 20 API requests while the user types \"laptop\".",
    "evaluationCriteria": "Explains timer clearing mechanism, closures for timeout ID retention, and search input optimization use case.",
    "tags": [
      "JavaScript",
      "Debounce",
      "Optimization",
      "DOM Events"
    ],
    "source": "Coding & Practical Interview Question"
  },
  {
    "id": "fs-js-07",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Advanced",
    "type": "Debugging",
    "question": "Debug this async snippet: Why does a forEach loop with async/await execute all iterations concurrently instead of sequentially, and how do you fix it?",
    "expectedPoints": [
      "Array.prototype.forEach does not await the returned Promises from its callback; it fires callbacks synchronously without waiting.",
      "Fix using a standard for...of loop or for loop which pauses each iteration with await.",
      "Alternative: Use Promise.all if parallel execution is explicitly desired."
    ],
    "sampleAnswer": "Array.prototype.forEach executes its callback synchronously for each item and ignores the Promise returned by an async callback. To run async operations sequentially in order, use a modern for...of loop with await inside the loop body, or use reduce chaining.",
    "evaluationCriteria": "Identifies forEach lack of Promise handling and provides for...of sequential solution or Promise.all parallel solution.",
    "tags": [
      "JavaScript",
      "Async/Await",
      "Debugging",
      "Promises"
    ],
    "source": "Real-world Debugging Scenario"
  },
  {
    "id": "fs-js-08",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "What is the difference between shallow copy and deep copy in JavaScript, and what are the best ways to achieve each?",
    "expectedPoints": [
      "Shallow copy clones top-level properties; nested objects/arrays retain references to the original.",
      "Deep copy recursively duplicates all nested references into entirely new objects.",
      "Shallow methods: Spread operator ({...obj}), Object.assign(). Deep methods: structuredClone(), JSON.parse(JSON.stringify()) (with limitations on Dates/functions)."
    ],
    "sampleAnswer": "A shallow copy copies only top-level properties; nested objects still share memory references. A deep copy clones the full nested hierarchy. In modern JavaScript, structuredClone() is the native, reliable standard for deep cloning without the serialization bugs of JSON.parse(JSON.stringify()).",
    "evaluationCriteria": "Accurately explains reference sharing in nested structures and identifies structuredClone() and spread operators.",
    "tags": [
      "JavaScript",
      "Objects",
      "Immutability",
      "Memory"
    ],
    "source": "Core Fundamentals Question"
  },
  {
    "id": "fs-js-09",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain how Promises work under the hood, including the three Promise states, chaining, and error propagation.",
    "expectedPoints": [
      "States: Pending, Fulfilled, Rejected. Once settled, state is immutable.",
      ".then() returns a new Promise, allowing chaining and transformation of resolved values.",
      "Errors bubble down the chain until caught by a .catch() handler or unhandledrejection."
    ],
    "sampleAnswer": "A Promise is an object representing the eventual completion or failure of an async operation. It starts in Pending and transitions once to Fulfilled or Rejected. Each .then() callback returns a new Promise, allowing linear async pipelines where any unhandled rejection skips ahead to the nearest .catch() handler.",
    "evaluationCriteria": "Explains state transitions, Promise chaining returning new promises, and catch bubbling.",
    "tags": [
      "JavaScript",
      "Promises",
      "Async",
      "Error Handling"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "fs-js-10",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain the differences between CommonJS (require/module.exports) and ES Modules (import/export) in Node.js and browser runtimes.",
    "expectedPoints": [
      "CommonJS is synchronous and resolves modules at runtime; ES Modules are asynchronous and statically analyzed at parse/compile time.",
      "ES Modules enable tree-shaking (dead code elimination) because dependencies are known before execution.",
      "Top-level await is natively supported in ESM but not in CommonJS."
    ],
    "sampleAnswer": "CommonJS loads modules synchronously at runtime using require(), which means imports can be dynamic but prevents static analysis. ES Modules use static import syntax parsed before execution, enabling build tools to perform tree-shaking and dead-code elimination. ESM also natively supports top-level await and runs in strict mode by default.",
    "evaluationCriteria": "Highlights static analysis vs dynamic runtime loading, tree-shaking capabilities, and synchronous vs asynchronous evaluation.",
    "tags": [
      "JavaScript",
      "Modules",
      "ESM",
      "CommonJS",
      "Node.js"
    ],
    "source": "Modern JavaScript Architecture"
  },
  {
    "id": "fs-react-01",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "How does the React Virtual DOM work, and how does the reconciliation algorithm update the real DOM efficiently?",
    "expectedPoints": [
      "Virtual DOM is a lightweight in-memory JavaScript representation of the actual DOM tree.",
      "When state/props change, React renders a new VDOM tree and diffs it against the previous tree using heuristic O(n) reconciliation.",
      "Batched updates are applied to the real browser DOM in a single pass to minimize costly layout reflows and repaints."
    ],
    "sampleAnswer": "React maintains a Virtual DOM in memory. When state updates occur, React computes a new virtual tree and runs its Diffing Algorithm (React Fiber) to detect exact changes. It then batches only the modified nodes to the real DOM, avoiding full page recalculations and minimizing expensive browser reflows.",
    "evaluationCriteria": "Explains in-memory representation, diffing heuristics (keys, element types), and batched DOM mutations.",
    "tags": [
      "React",
      "Virtual DOM",
      "Reconciliation",
      "Fiber"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "fs-react-02",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "What are the rules of React Hooks and why must hooks never be called inside loops, conditions, or nested functions?",
    "expectedPoints": [
      "Rules: 1) Only call hooks at the top level of functional components or custom hooks; 2) Do not call inside loops/conditions/nested functions.",
      "React relies on the exact invocation order of hooks across renders to match state variables to their corresponding internal Fiber linked-list nodes."
    ],
    "sampleAnswer": "React relies on call order to track hook state internally. Each component Fiber maintains a linked list of hook records. If a hook is inside an \"if\" statement that evaluates to false on a subsequent render, the hook index misaligns, corrupting the entire component state.",
    "evaluationCriteria": "Mentions top-level invocation rule and Fiber internal linked-list indexing based on call order.",
    "tags": [
      "React",
      "Hooks",
      "Fiber",
      "State Management"
    ],
    "source": "Core React Fundamentals"
  },
  {
    "id": "fs-react-03",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between useEffect, useLayoutEffect, and useMemo, with appropriate production use cases for each.",
    "expectedPoints": [
      "useEffect runs asynchronously after the browser paints, suitable for data fetching, subscriptions, and non-blocking side effects.",
      "useLayoutEffect runs synchronously immediately after DOM mutations but before the browser paints, preventing visual layout flickering.",
      "useMemo memoizes computed values across renders to avoid expensive recalculations unless dependencies change."
    ],
    "sampleAnswer": "useEffect runs asynchronously after paint, ideal for API calls and analytics. useLayoutEffect runs synchronously before browser paint, essential for measuring DOM elements (e.g. tooltip placement) to prevent visual layout shift. useMemo caches computed data (like sorting 10,000 items) to prevent recalculation on unrelated renders.",
    "evaluationCriteria": "Differentiates render timing (before paint vs after paint), layout shift avoidance, and computational memoization.",
    "tags": [
      "React",
      "Hooks",
      "useEffect",
      "Performance"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "fs-react-04",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you prevent unnecessary re-renders in a deeply nested React component hierarchy?",
    "expectedPoints": [
      "Wrap pure presentational components in React.memo() with shallow prop comparison.",
      "Stabilize callbacks with useCallback() and complex calculated objects with useMemo().",
      "Push state down closer to where it is consumed, or lift state out into localized context / atomic stores."
    ],
    "sampleAnswer": "To eliminate redundant re-renders: 1) Wrap child components in React.memo(); 2) Wrap event handler functions passed as props in useCallback() so reference identities stay stable; 3) Localize state so updating an input does not trigger parent container re-renders; 4) Use children prop composition to bypass intermediate renders.",
    "evaluationCriteria": "Covers React.memo, useCallback reference stabilization, state colocation, and component composition.",
    "tags": [
      "React",
      "Optimization",
      "useCallback",
      "React.memo"
    ],
    "source": "Frontend Performance & Architecture"
  },
  {
    "id": "fs-react-05",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "How does React Context API compare with dedicated state management libraries like Redux Toolkit or Zustand in high-frequency update apps?",
    "expectedPoints": [
      "Context API causes all consuming components to re-render whenever the context value changes, making it inefficient for high-frequency state updates.",
      "Redux Toolkit and Zustand support granular selector-based subscriptions, re-rendering only the specific component subscribing to the updated slice of state.",
      "Context is ideal for low-frequency global data (auth user, theme, locale); Zustand/Redux for dynamic interactive application state."
    ],
    "sampleAnswer": "Context API triggers re-renders across all consumer components whenever its value reference changes, which degrades performance in high-frequency updates (e.g., animations, live tables). Zustand and Redux Toolkit use selector subscriptions outside the React render tree, ensuring only components subscribed to the modified property re-render.",
    "evaluationCriteria": "Explains Context re-render propagation and compares selector subscriptions in Zustand/Redux for high-throughput UIs.",
    "tags": [
      "React",
      "State Management",
      "Redux",
      "Zustand",
      "Context API"
    ],
    "source": "Senior Frontend Architecture Question"
  },
  {
    "id": "fs-react-06",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Debugging",
    "question": "A component fetching data in useEffect causes an infinite loop. What is the root cause and how do you diagnose and resolve it?",
    "expectedPoints": [
      "Root cause: Updating state inside useEffect without a dependency array, or passing an unstable object/array reference into the dependency array that gets recreated on every render.",
      "Fix: Provide an explicit dependency array ([] for mount only), use primitive dependencies, or wrap object/function dependencies in useMemo/useCallback."
    ],
    "sampleAnswer": "An infinite loop happens when state is updated inside useEffect, which triggers a re-render. If useEffect has no dependency array or depends on an object/array created in the component body whose reference changes every render, the effect runs again indefinitely. Fix by passing an empty dependency array for mount or stabilizing dependencies with useCallback/useMemo.",
    "evaluationCriteria": "Explains state update triggering render cycle, dependency reference inequality, and stabilization remedies.",
    "tags": [
      "React",
      "useEffect",
      "Debugging",
      "Infinite Loop"
    ],
    "source": "Common Frontend Bug Resolution"
  },
  {
    "id": "fs-react-07",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "Explain React Server Components (RSC) vs Client Components in Next.js App Router and how data fetching differs.",
    "expectedPoints": [
      "Server Components execute exclusively on the server, have zero client bundle size impact, and can access databases and backend secrets directly.",
      "Client Components (marked with \"use client\") execute on both server (SSR) and client, handling browser events, useState, and useEffect.",
      "RSC streams HTML and serialized component trees to the browser without client-side hydration overhead for static UI."
    ],
    "sampleAnswer": "React Server Components render entirely on the server and send a serialized UI stream to the client without sending JS bundle code for dependencies. They can directly query databases without API endpoints. Client Components (\"use client\") are hydrated on the browser to handle interactivity, state, and browser APIs.",
    "evaluationCriteria": "Highlights bundle reduction, direct server resource access, and selective hydration boundaries.",
    "tags": [
      "React",
      "Next.js",
      "Server Components",
      "SSR",
      "Architecture"
    ],
    "source": "Modern Full Stack Architecture"
  },
  {
    "id": "fs-react-08",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Beginner",
    "type": "Practical",
    "question": "What is the purpose of React Error Boundaries and how do you implement them in a production application?",
    "expectedPoints": [
      "Error Boundaries catch JavaScript runtime errors anywhere in their child component tree, log the error, and display a fallback UI.",
      "Implemented using class components with componentDidCatch and static getDerivedStateFromError, or libraries like react-error-boundary.",
      "They prevent the entire white-screen crash of single page applications."
    ],
    "sampleAnswer": "Error boundaries catch JavaScript errors in child component trees during rendering, lifecycle methods, and constructors, preventing the whole app from crashing to a white screen. They implement static getDerivedStateFromError to render a fallback UI and componentDidCatch to report errors to monitoring services like Sentry.",
    "evaluationCriteria": "Explains graceful crash handling, getDerivedStateFromError fallback rendering, and production error monitoring.",
    "tags": [
      "React",
      "Error Boundaries",
      "Resilience",
      "UX"
    ],
    "source": "Production React Standards"
  },
  {
    "id": "fs-node-01",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "How does Node.js handle thousands of concurrent client connections with a single main JavaScript thread?",
    "expectedPoints": [
      "Node.js uses an event-driven, non-blocking asynchronous I/O architecture powered by the libuv C++ library.",
      "Network sockets and file operations are delegated to OS asynchronous APIs (epoll/kqueue) or the libuv thread pool.",
      "The main thread remains free to accept incoming connections and processes callbacks when I/O completes."
    ],
    "sampleAnswer": "Node.js runs JavaScript on a single thread but delegates I/O operations (file system, DNS, crypto, database network sockets) to libuv and OS asynchronous mechanisms like epoll. When I/O completes, callbacks are queued to the event loop, allowing the main thread to serve thousands of connections without thread-per-request overhead.",
    "evaluationCriteria": "Mentions single-threaded JS execution, libuv event loop, non-blocking I/O, and OS kernel delegation.",
    "tags": [
      "Node.js",
      "libuv",
      "Event Loop",
      "Concurrency",
      "Async"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "fs-node-02",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the Express.js middleware pipeline, next() propagation, and how to write a centralized error handling middleware.",
    "expectedPoints": [
      "Middleware functions have access to (req, res, next) and execute sequentially in order of registration.",
      "Calling next() forwards control; passing an argument next(err) jumps immediately to error-handling middleware.",
      "Error middleware requires 4 parameters: (err, req, res, next)."
    ],
    "sampleAnswer": "Express middleware runs in an onion/pipeline model where each handler inspects or transforms req/res before invoking next(). If an error occurs, passing the error to next(err) bypasses regular handlers and routes directly to centralized error middleware defined with 4 arguments: (err, req, res, next), which formats standard JSON error responses.",
    "evaluationCriteria": "Identifies 4-parameter signature for error handlers, next() execution chain, and centralized logging.",
    "tags": [
      "Express.js",
      "Middleware",
      "Error Handling",
      "Node.js"
    ],
    "source": "Core Backend Development"
  },
  {
    "id": "fs-node-03",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do Node.js Streams and Buffers work, and why should you use streams over fs.readFile when handling large file uploads/downloads?",
    "expectedPoints": [
      "Buffers hold raw binary chunks in memory outside V8 heap.",
      "Streams process data chunk by chunk sequentially without loading the entire file into RAM.",
      "fs.readFile loads the whole file into memory at once, which will exhaust RAM (OutOfMemory) with multi-gigabyte files; streams maintain low memory footprint via pipe() and backpressure handling."
    ],
    "sampleAnswer": "Buffers are chunks of raw binary data allocated outside the V8 heap. Streams allow processing data in sequential chunks as it arrives. Using fs.readFile loads the entire file into RAM, crashing the server if multiple users download 500MB files simultaneously. Streams pipe data directly from disk to network sockets with constant memory usage and automatic backpressure.",
    "evaluationCriteria": "Explains memory allocation differences, chunked data pipelines, and backpressure management.",
    "tags": [
      "Node.js",
      "Streams",
      "Buffers",
      "Memory",
      "Performance"
    ],
    "source": "Backend Performance & Scaling"
  },
  {
    "id": "fs-node-04",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "How do you scale a CPU-intensive Node.js application without blocking the main event loop?",
    "expectedPoints": [
      "Offload heavy computation using Node.js Worker Threads (worker_threads module) to run JS on separate OS threads.",
      "Use the cluster module to fork multiple Node.js OS processes sharing the same server port across CPU cores.",
      "Offload tasks to background message queue workers (BullMQ, Redis, RabbitMQ)."
    ],
    "sampleAnswer": "Because CPU-bound operations block the single event loop, solutions include: 1) Worker Threads (worker_threads) for sharing memory and executing CPU tasks on dedicated threads; 2) The Cluster module to spawn worker processes per CPU core; 3) Asynchronous job queues with Redis/BullMQ to process tasks out-of-band on dedicated worker nodes.",
    "evaluationCriteria": "Identifies event loop blocking vulnerability and explains Worker Threads, Cluster module, and async message queues.",
    "tags": [
      "Node.js",
      "Scaling",
      "Worker Threads",
      "Cluster",
      "BullMQ"
    ],
    "source": "Senior Backend Engineering"
  },
  {
    "id": "fs-auth-01",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Authentication & JWT",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain the structure of a JSON Web Token (JWT) and how stateless authentication works between frontend and backend.",
    "expectedPoints": [
      "JWT consists of three Base64URL-encoded parts: Header (algorithm & token type), Payload (claims/user data), and Signature (secret verification hash).",
      "Stateless: The server does not maintain session records in database/memory; it verifies the signature mathematically using the server secret.",
      "The client transmits the token in the Authorization header (Bearer token) or HttpOnly cookie."
    ],
    "sampleAnswer": "A JWT is composed of Header, Payload, and Signature separated by dots. In stateless auth, the server signs user payload data on login and returns the token. On subsequent requests, the server validates the cryptographic signature using its secret key without looking up active sessions in a database, allowing horizontal scaling across multiple servers.",
    "evaluationCriteria": "Details the 3 JWT segments, signature verification mechanism, and advantages of stateless scaling.",
    "tags": [
      "Authentication",
      "JWT",
      "Security",
      "REST APIs"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "fs-auth-02",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Authentication & JWT",
    "difficulty": "Intermediate",
    "type": "Security",
    "question": "Where should JWT tokens be stored on the client (LocalStorage vs HttpOnly Cookie) and how do you protect against XSS and CSRF attacks?",
    "expectedPoints": [
      "LocalStorage is vulnerable to Cross-Site Scripting (XSS) because any injected JavaScript can read localStorage.getItem().",
      "HttpOnly cookies cannot be read by JavaScript, mitigating XSS token theft.",
      "Cookies are vulnerable to Cross-Site Request Forgery (CSRF), mitigated using SameSite=Strict/Lax flags and CSRF anti-forgery tokens."
    ],
    "sampleAnswer": "Storing tokens in localStorage leaves them vulnerable to XSS attacks where malicious scripts extract the credentials. Storing tokens in HttpOnly, Secure, SameSite=Strict cookies prevents JavaScript access, completely mitigating XSS token theft. CSRF risks are neutralized using SameSite cookie attributes and CSRF anti-forgery double-submit tokens.",
    "evaluationCriteria": "Contrasts XSS vulnerabilities of localStorage with CSRF vulnerabilities of cookies and prescribes SameSite + HttpOnly mitigations.",
    "tags": [
      "Security",
      "XSS",
      "CSRF",
      "JWT",
      "Cookies"
    ],
    "source": "Web Security Standard"
  },
  {
    "id": "fs-auth-03",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Authentication & JWT",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "How do you implement a secure Access Token + Refresh Token rotation flow with token revocation capabilities?",
    "expectedPoints": [
      "Short-lived Access Token (e.g. 15 mins) kept in memory or cookie for fast stateless API auth.",
      "Long-lived Refresh Token (e.g. 7 days) stored in HttpOnly cookie and tracked in a Redis/MongoDB whitelist or revocation blacklist.",
      "When the access token expires, client hits /refresh; the server validates the refresh token, revokes the old refresh token, and issues a new pair (Refresh Token Rotation)."
    ],
    "sampleAnswer": "Use short-lived Access Tokens (15 min) for API authorization and long-lived Refresh Tokens (7 days) stored in HttpOnly cookies. When refreshing, the server validates the refresh token against a database whitelist, invalidates the old token, and issues a new pair. If an already-used refresh token is reused, all tokens for that user session are immediately revoked to prevent replay attacks.",
    "evaluationCriteria": "Explains short vs long token lifetimes, token rotation mechanics, reuse detection, and revocation store (Redis/DB).",
    "tags": [
      "JWT",
      "Refresh Token",
      "Architecture",
      "OAuth2",
      "Security"
    ],
    "source": "Enterprise Security Architecture"
  },
  {
    "id": "fs-rest-01",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "REST APIs",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "What makes an API truly RESTful and what is the difference between PUT and PATCH HTTP methods?",
    "expectedPoints": [
      "REST (Representational State Transfer) uses stateless client-server communication, standard HTTP verbs, and URI resources.",
      "PUT replaces the entire resource representation (idempotent); missing fields are reset or overwritten.",
      "PATCH applies partial modifications to a resource (updates only supplied fields)."
    ],
    "sampleAnswer": "A RESTful API organizes operations around resources identified by URIs using standard HTTP verbs (GET, POST, PUT, PATCH, DELETE). PUT is idempotent and replaces the entire target resource with the payload provided. PATCH applies partial modifications to specific fields without overwriting unmodified properties.",
    "evaluationCriteria": "Explains REST principles and clearly contrasts full resource replacement (PUT) with partial delta updates (PATCH).",
    "tags": [
      "REST APIs",
      "HTTP",
      "Web Architecture",
      "API Design"
    ],
    "source": "Core API Standards"
  },
  {
    "id": "fs-db-01",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "MongoDB",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "In MongoDB schema design, when should you choose Document Embedding versus Document Referencing ($lookup)?",
    "expectedPoints": [
      "Embedding: One-to-one or one-to-few bounded relationships where data is frequently retrieved together in a single read (e.g. order items, user address). Limited by 16MB document size.",
      "Referencing: One-to-many or many-to-many unbounded relationships (e.g. log streams, comments on viral posts) or data updated independently by multiple entities.",
      "Embedding provides atomic single-document writes without joins; referencing avoids data duplication and document growth limit."
    ],
    "sampleAnswer": "Choose embedding for bounded 1-to-few relationships where child data is tightly coupled and always read with the parent (e.g. order items inside an Order), ensuring atomic single-read/write performance. Choose referencing for unbounded 1-to-many relationships (e.g. comments, analytics logs) to avoid exceeding MongoDB's 16MB BSON document limit.",
    "evaluationCriteria": "Compares 16MB limit, query access patterns, atomicity of single-document writes, and join overhead.",
    "tags": [
      "MongoDB",
      "NoSQL",
      "Database Design",
      "Aggregation"
    ],
    "source": "Database Architecture Standard"
  },
  {
    "id": "fs-db-02",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "SQL",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain SQL ACID properties and how database indexing (B-Tree) speeds up query performance with write trade-offs.",
    "expectedPoints": [
      "ACID: Atomicity (all-or-nothing), Consistency (schema constraints preserved), Isolation (concurrent transactions don't interfere), Durability (committed data survives crashes).",
      "B-Tree indexes provide O(log n) search/range traversal instead of O(n) full table scans.",
      "Trade-off: Each index adds storage overhead and slows down INSERT/UPDATE/DELETE because index trees must be rebalanced on write."
    ],
    "sampleAnswer": "ACID guarantees reliable transactions: Atomicity (all-or-nothing execution), Consistency (integrity constraints enforced), Isolation (transaction isolation levels like Read Committed or Serializable), and Durability (WAL write-ahead logs persist commits). B-Trees enable O(log n) binary lookups on indexed columns, but every extra index adds overhead to INSERT/UPDATE statements.",
    "evaluationCriteria": "Accurately defines all 4 ACID pillars and explains B-Tree indexing benefits and write throughput trade-offs.",
    "tags": [
      "SQL",
      "ACID",
      "Indexing",
      "Databases",
      "Transactions"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "fs-git-01",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Git and GitHub",
    "difficulty": "Beginner",
    "type": "Practical",
    "question": "Explain the difference between git merge and git rebase, and when you should avoid rebasing shared branches.",
    "expectedPoints": [
      "git merge creates a new merge commit preserving full branching history and chronological context.",
      "git rebase rewrites project history by replaying commits from the feature branch on top of the target base branch, creating a linear history.",
      "Golden rule: Never rebase shared public branches (like main or develop) because rewritten commit SHAs cause conflicts for other collaborators."
    ],
    "sampleAnswer": "git merge combines branches by creating a merge commit, preserving the exact non-destructive history. git rebase moves your feature branch commits to the tip of the target branch, rewriting commit SHAs to produce a clean linear history. Never rebase shared remote branches because rewriting shared history disrupts other developers' working trees.",
    "evaluationCriteria": "Contrasts merge commits vs linear commit replay and emphasizes the rule against rebasing shared branches.",
    "tags": [
      "Git",
      "GitHub",
      "Version Control",
      "Workflow"
    ],
    "source": "Industry Standard Workflow Question"
  },
  {
    "id": "fs-sys-01",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "System Design Basics",
    "difficulty": "Intermediate",
    "type": "Architecture",
    "question": "How would you design a URL Shortener service (like bit.ly) considering hashing, database selection, redirect caching, and collision handling?",
    "expectedPoints": [
      "Base62 encoding (a-z, A-Z, 0-9) of an auto-incrementing 64-bit ID or counter to generate compact short codes (e.g. 7 chars = 3.5 trillion URLs).",
      "Fast read redirects (HTTP 301 Permanent vs 302 Temporary) cached in Redis for high read:write ratio (100:1).",
      "Relational (PostgreSQL) or NoSQL (DynamoDB/MongoDB) database mapping short_code -> original_url with unique index."
    ],
    "sampleAnswer": "A URL shortener utilizes Base62 encoding on unique distributed sequence IDs to generate 6-7 character hashes without collisions. Since read traffic outnumbers writes by 100:1, route redirects through Redis caching. Return HTTP 302 if analytics tracking is required, or HTTP 301 for browser-cached redirects to minimize backend load.",
    "evaluationCriteria": "Proposes Base62 encoding, Redis caching layer, 301 vs 302 redirect trade-offs, and database storage estimation.",
    "tags": [
      "System Design",
      "Caching",
      "Redis",
      "Architecture",
      "Base62"
    ],
    "source": "Classic System Design Question"
  },
  {
    "id": "fs-beh-01",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Behavioral & HR",
    "difficulty": "Intermediate",
    "type": "Behavioral",
    "question": "Describe a situation where a critical production bug occurred in your application. How did you diagnose, communicate, and resolve it?",
    "expectedPoints": [
      "Use STAR method (Situation, Task, Action, Result).",
      "Immediate mitigation: Rollback or feature flag toggle before deep code diagnosis.",
      "Post-mortem: Root cause analysis, automated regression test creation, and process improvement to prevent recurrence."
    ],
    "sampleAnswer": "When a deployment caused checkout failures, I immediately verified APM error logs and executed a blue-green deployment rollback within 4 minutes to restore customer availability. I then identified an unhandled null in an API response in staging, patched the parsing with a fallback, added end-to-end Cypress regression tests, and published an internal post-mortem.",
    "evaluationCriteria": "Follows STAR format, prioritizes customer mitigation (rollback) over blame, and includes long-term automated prevention.",
    "tags": [
      "Behavioral",
      "STAR",
      "Incident Management",
      "Production"
    ],
    "source": "Engineering Behavioral Question"
  },
  {
    "id": "ce-linux-01",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Linux",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain Linux file permissions (rwx), numeric octal notation (e.g., chmod 755), and the difference between hard links and symbolic links.",
    "expectedPoints": [
      "Permissions are divided into User (Owner), Group, and Others. r=4, w=2, x=1. 755 = rwxr-xr-x.",
      "Hard link points directly to the file inode; file data remains accessible until all hard links are deleted.",
      "Symbolic (soft) link is a separate pointer file containing the file path; it breaks if the target file is moved or deleted."
    ],
    "sampleAnswer": "Linux permissions use User, Group, and Others with octal values: 4 (read), 2 (write), 1 (execute). chmod 755 gives full access to owner and read/execute to group and others. A hard link shares the same inode as the original file and survives deletion of the original name; a symlink is a pointer file that breaks if the target is removed.",
    "evaluationCriteria": "Explains octal permission calculations, inode sharing in hard links vs path references in symlinks.",
    "tags": [
      "Linux",
      "Permissions",
      "Inodes",
      "Symlinks",
      "SysAdmin"
    ],
    "source": "Linux System Administration Standard"
  },
  {
    "id": "ce-linux-02",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Linux",
    "difficulty": "Intermediate",
    "type": "Debugging",
    "question": "A production Linux EC2 instance shows 100% CPU utilization and high load average. Walk through your step-by-step diagnostic workflow using CLI utilities.",
    "expectedPoints": [
      "Inspect top/htop to identify top CPU-consuming PIDs and distinguish user CPU (%us) vs system CPU (%sy) vs I/O wait (%wa).",
      "Use \"ps aux --sort=-%cpu | head -n 10\" to pinpoint command arguments and execution user.",
      "Use vmstat and iostat to check memory paging and disk bottleneck, and dmesg / /var/log/syslog for kernel crashes.",
      "Terminate rogue processes with kill -15 (SIGTERM) before force kill -9 (SIGKILL)."
    ],
    "sampleAnswer": "I start with \"top\" or \"htop\" to inspect %us vs %wa. If %wa is high, disk I/O is blocked (verified via iostat -x). If a specific process is runaway, I identify it via \"ps aux --sort=-%cpu\", inspect open descriptors with \"lsof -p <PID>\", check application logs, and attempt graceful shutdown with kill -15 before resorting to kill -9.",
    "evaluationCriteria": "Systematic triage using top, iostat, vmstat, ps, and understanding SIGTERM vs SIGKILL.",
    "tags": [
      "Linux",
      "Troubleshooting",
      "Performance",
      "CLI",
      "top"
    ],
    "source": "Production Incident Triage"
  },
  {
    "id": "ce-net-01",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Networking",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between Security Groups and Network Access Control Lists (NACLs) in an AWS VPC.",
    "expectedPoints": [
      "Security Groups: Operate at the instance/ENI level, stateful (inbound return traffic automatically allowed), allow rules only.",
      "NACLs: Operate at the subnet level, stateless (inbound and outbound rules evaluated separately), support both allow and deny rules in numbered order."
    ],
    "sampleAnswer": "Security Groups operate at the virtual network interface (ENI) level and are stateful—if inbound traffic is permitted on port 443, response traffic is automatically allowed outbound. NACLs operate at the subnet boundary and are stateless—inbound and outbound rules must be explicitly configured, and they evaluate numbered rules sequentially with explicit DENY support.",
    "evaluationCriteria": "Contrasts ENI vs subnet boundary, stateful vs stateless traffic tracking, and allow vs explicit deny capabilities.",
    "tags": [
      "AWS",
      "Networking",
      "VPC",
      "Security Groups",
      "NACLs"
    ],
    "source": "AWS Certified Solutions Architect Standard"
  },
  {
    "id": "ce-aws-01",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "AWS & Cloud Services",
    "difficulty": "Intermediate",
    "type": "Architecture",
    "question": "Design a highly available, fault-tolerant 3-tier web application on AWS with zero single points of failure.",
    "expectedPoints": [
      "VPC spanning at least 2 Availability Zones with public, private app, and private database subnets.",
      "Public tier: Application Load Balancer across AZs connected to Internet Gateway.",
      "Application tier: EC2 Auto Scaling Group or ECS/EKS containers inside private subnets routing outbound via NAT Gateways.",
      "Data tier: Multi-AZ Amazon RDS (Aurora/PostgreSQL) with automated failover and read replicas."
    ],
    "sampleAnswer": "The architecture spans 2+ Availability Zones within a VPC: 1) Public subnets host an Application Load Balancer; 2) Private subnets host Auto Scaling EC2/ECS application clusters with NAT Gateways for outbound patches; 3) Isolated database subnets run Amazon Aurora Multi-AZ with synchronous replication and automated sub-minute failover; 4) Static assets served via CloudFront + S3.",
    "evaluationCriteria": "Deploys Multi-AZ across tiers, isolates private subnets with NAT, and configures automated load balancing and DB failover.",
    "tags": [
      "AWS",
      "Architecture",
      "High Availability",
      "VPC",
      "RDS"
    ],
    "source": "AWS Solutions Architect Question"
  },
  {
    "id": "ce-dock-01",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Docker & Containers",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do multi-stage Docker builds work and how do they reduce production container image size and security vulnerabilities?",
    "expectedPoints": [
      "Multi-stage builds use multiple FROM directives in a single Dockerfile.",
      "Stage 1 (Build): Installs compilers, SDKs, devDependencies, and builds artifacts.",
      "Stage 2 (Runtime): Uses a minimal base image (e.g., Alpine or Distroless) and copies only the compiled output from Stage 1, excluding build tooling from the final image."
    ],
    "sampleAnswer": "Multi-stage builds allow using an initial heavy builder image with compilers, SDKs, and build dependencies to compile code, then copying only the resulting binary or production bundle into a lightweight final runtime image (like Alpine or Distroless). This reduces image size from 1GB+ to under 50MB and eliminates build-time security vulnerabilities from production.",
    "evaluationCriteria": "Explains builder separation, artifact copying via --from=builder, and security surface minimization.",
    "tags": [
      "Docker",
      "Containers",
      "Security",
      "Optimization",
      "DevOps"
    ],
    "source": "Containerization Best Practices"
  },
  {
    "id": "ce-k8s-01",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Kubernetes",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the Kubernetes architecture (Control Plane vs Worker Nodes) and the lifecycle of a Pod from deployment to running state.",
    "expectedPoints": [
      "Control Plane components: kube-apiserver (REST gateway), etcd (distributed key-value store), kube-scheduler (assigns pods to nodes), kube-controller-manager.",
      "Worker Node components: kubelet (communicates with apiserver and manages pod lifecycle), kube-proxy (network routing), container runtime (containerd).",
      "Lifecycle: kubectl -> apiserver -> etcd -> scheduler selects node -> kubelet pulls image and starts containers -> readiness probe passes."
    ],
    "sampleAnswer": "The Control Plane runs kube-apiserver, etcd for state, kube-scheduler, and controller-managers. When a Deployment is submitted, apiserver saves state to etcd. The scheduler assigns the Pod to an optimal worker node. The worker node's kubelet instructs containerd to pull the image and run the container, updating status back to the API server.",
    "evaluationCriteria": "Names all primary control plane and node components and traces the scheduling-to-execution pipeline.",
    "tags": [
      "Kubernetes",
      "K8s",
      "Architecture",
      "Control Plane",
      "Kubelet"
    ],
    "source": "Kubernetes CKA Standard"
  },
  {
    "id": "ce-tf-01",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Terraform & IaC",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How do you configure Terraform remote state with locking in AWS, and how do you handle state drift?",
    "expectedPoints": [
      "Store terraform.tfstate in an Amazon S3 bucket with server-side encryption and versioning enabled.",
      "Use an Amazon DynamoDB table with LockID attribute for distributed state locking to prevent race conditions during concurrent applies.",
      "State drift is detected via \"terraform plan\" which queries real cloud APIs and compares against state; resolved with \"terraform apply\" or \"terraform refresh\"."
    ],
    "sampleAnswer": "Configure the backend block with an S3 bucket (versioning and encryption enabled) and a DynamoDB table for state locking via LockID. This prevents concurrent execution corruption. When manual console changes cause state drift, \"terraform plan\" compares real infrastructure against declared code and generates remedies.",
    "evaluationCriteria": "Specifies S3 bucket configuration, DynamoDB locking mechanism, and drift reconciliation via terraform plan.",
    "tags": [
      "Terraform",
      "IaC",
      "AWS",
      "S3",
      "DynamoDB",
      "State"
    ],
    "source": "Terraform Associate Standard"
  },
  {
    "id": "ce-iam-01",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "IAM & Cloud Security",
    "difficulty": "Intermediate",
    "type": "Security",
    "question": "Explain the Principle of Least Privilege in AWS IAM, the difference between IAM Roles and IAM Users, and how IAM Instance Profiles work.",
    "expectedPoints": [
      "Least Privilege: Granting only the exact permissions needed to perform a specific task, avoiding wildcard (*) permissions.",
      "IAM Users have long-lived credentials (passwords, access keys); IAM Roles provide temporary STS security credentials without hardcoded keys.",
      "IAM Instance Profiles allow EC2 instances to securely assume an IAM role automatically via metadata service (IMDSv2)."
    ],
    "sampleAnswer": "Least privilege ensures entities receive minimal necessary access. IAM Users represent humans with static long-lived credentials, which are dangerous if leaked. IAM Roles issue short-lived temporary STS tokens. EC2 instances use IAM Instance Profiles to assume roles automatically via IMDSv2, eliminating hardcoded API keys in code or configuration files.",
    "evaluationCriteria": "Contrasts long-lived user keys with temporary STS role tokens and details Instance Profile automation.",
    "tags": [
      "AWS",
      "IAM",
      "Security",
      "Least Privilege",
      "Cloud Security"
    ],
    "source": "AWS Security Specialty"
  },
  {
    "id": "ce-cicd-01",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "CI/CD",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "Design a continuous delivery pipeline (GitHub Actions / GitLab CI) that automates Docker container image building, vulnerability scanning, and ECS deployment.",
    "expectedPoints": [
      "Trigger: Push to main branch or PR merge.",
      "Steps: 1) Run unit/integration tests; 2) Build Docker image; 3) Scan image with Trivy/Snyk for CVE vulnerabilities; 4) Push to Amazon ECR; 5) Update ECS Task Definition and trigger rolling deployment.",
      "Feature rollback if ECS container health check fails."
    ],
    "sampleAnswer": "The GitHub Actions workflow triggers on merge: 1) Executes automated unit and linting tests; 2) Runs multi-stage Docker build; 3) Scans the image with Trivy to fail on Critical CVEs; 4) Authenticates to AWS via OIDC (avoiding static keys) and pushes image to ECR; 5) Registers new ECS Task Definition and initiates a rolling update with 5-minute health check verification.",
    "evaluationCriteria": "Covers lint/test gates, container vulnerability scanning, OIDC authentication, and rolling ECS zero-downtime deployment.",
    "tags": [
      "CI/CD",
      "GitHub Actions",
      "Docker",
      "AWS ECS",
      "Security"
    ],
    "source": "DevOps Pipeline Architecture"
  },
  {
    "id": "ce-arch-01",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Cloud Architecture",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "How do you architect a multi-region disaster recovery strategy in AWS with Recovery Point Objective (RPO) < 1 minute and Recovery Time Objective (RTO) < 15 minutes?",
    "expectedPoints": [
      "Multi-Region Warm Standby or Active-Active deployment across Primary and Secondary AWS Regions.",
      "Database: Amazon Aurora Global Database or DynamoDB Global Tables providing sub-second replication latency (RPO < 1s).",
      "DNS Failover: Route 53 latency routing with health checks to automatically redirect global traffic upon primary region health check failure (RTO < 5 mins)."
    ],
    "sampleAnswer": "To achieve RPO < 1 min and RTO < 15 min, implement a Warm Standby or Active-Passive cross-region architecture. Aurora Global Database handles cross-region storage replication in under 1 second (satisfying RPO). Route 53 DNS Failover with automated CloudWatch health checks redirects incoming traffic to the secondary region ALB in under 2 minutes (satisfying RTO).",
    "evaluationCriteria": "Distinguishes RPO vs RTO, uses Aurora Global Database / DynamoDB Global Tables, and implements Route 53 automated health checks.",
    "tags": [
      "Cloud Architecture",
      "Disaster Recovery",
      "AWS",
      "Route 53",
      "Aurora"
    ],
    "source": "Principal Cloud Architect Question"
  },
  {
    "id": "java-core-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend",
    "topic": "Core Java & OOP",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain the four core principles of Object-Oriented Programming (OOP) in Java and how polymorphism is achieved at runtime versus compile-time.",
    "expectedPoints": [
      "Encapsulation (data hiding via private fields and getters/setters), Abstraction (hiding implementation details via interfaces/abstract classes).",
      "Inheritance (code reuse via extends/implements), Polymorphism (one interface, multiple behaviors).",
      "Compile-time polymorphism = Method Overloading (same method name, different signatures); Runtime polymorphism = Method Overriding (@Override with dynamic method dispatch)."
    ],
    "sampleAnswer": "The four OOP pillars are Encapsulation (protecting state), Abstraction (exposing contracts via interfaces), Inheritance (reusing parent class structures), and Polymorphism. Compile-time polymorphism is achieved through method overloading resolved by parameter signatures. Runtime polymorphism occurs through method overriding resolved dynamically via the virtual method table (vtable).",
    "evaluationCriteria": "Clearly explains all 4 pillars and distinguishes method overloading from dynamic method dispatch overriding.",
    "tags": [
      "Java",
      "OOP",
      "Polymorphism",
      "Encapsulation",
      "Core Java"
    ],
    "source": "Java Technical Foundations"
  },
  {
    "id": "java-coll-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend",
    "topic": "Collections Framework",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the internal working of Java HashMap (Java 8+), collision handling with balanced trees (Red-Black Trees), and why overriding equals() requires overriding hashCode().",
    "expectedPoints": [
      "HashMap uses an array of Node buckets: index = (n - 1) & hash(key).",
      "Collisions are stored in linked lists until chain length exceeds TREEIFY_THRESHOLD (8), where it converts into a Red-Black Tree for O(log n) performance.",
      "Contract: If two objects are equal by equals(), they must produce identical hashCode() values; otherwise, get(key) will look in the wrong bucket and return null."
    ],
    "sampleAnswer": "In Java 8+, HashMap calculates bucket index using key hash bit-shifting. When collisions occur, elements are stored in a linked list until reaching 8 elements and 64 bucket capacity, where it converts into a Red-Black Tree (O(log n) lookup). If equals() is overridden without hashCode(), two equal keys land in different buckets, breaking get() retrieval.",
    "evaluationCriteria": "Details bucket indexing, treeification at threshold 8, and the equals/hashCode bucket lookup contract.",
    "tags": [
      "Java",
      "Collections",
      "HashMap",
      "Data Structures"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "java-multi-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend",
    "topic": "Multithreading & Concurrency",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain the Java Memory Model, volatile keyword, synchronized blocks, and how ConcurrentHashMap achieves thread safety without table-wide locks.",
    "expectedPoints": [
      "volatile guarantees visibility across CPU core caches and prevents instruction reordering, but does NOT guarantee atomicity for compound operations (like count++).",
      "synchronized provides mutual exclusion and visibility by acquiring intrinsic object monitor locks.",
      "ConcurrentHashMap (Java 8) uses lock-free Compare-And-Swap (CAS) for empty bucket insertions and synchronized locks on individual bucket head nodes rather than locking the entire map."
    ],
    "sampleAnswer": "The Java Memory Model defines how threads interact through main memory and local CPU caches. volatile ensures direct memory read/writes and prevents compiler reordering. ConcurrentHashMap achieves high concurrent throughput by using CAS (Compare-And-Swap) for empty bucket writes and fine-grained synchronized locking on only the specific bucket head node being modified.",
    "evaluationCriteria": "Explains cache visibility vs atomicity, CAS lock-free operations, and bucket-level granularity in ConcurrentHashMap.",
    "tags": [
      "Java",
      "Concurrency",
      "Multithreading",
      "volatile",
      "CAS"
    ],
    "source": "Advanced Java Concurrency"
  },
  {
    "id": "java-jvm-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend",
    "topic": "JVM Internals",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain JVM memory structure (Heap, Stack, Metaspace, Program Counter) and how the G1 Garbage Collector manages memory.",
    "expectedPoints": [
      "Heap: Shared storage for objects and instances. Divided into Eden, Survivor (S0/S1), and Tenured/Old generation.",
      "Stack: Thread-private storage for local variables, method frames, and primitive values.",
      "Metaspace: Native OS memory storing class metadata and reflection structures (replaces PermGen).",
      "G1 GC divides heap into equal regions (~1MB to 32MB) and collects regions with the most garbage first (Garbage-First) to meet user-defined pause targets."
    ],
    "sampleAnswer": "JVM memory separates thread-private stacks (call frames and local variables) from the shared Heap (object instances). Metaspace holds class metadata in native OS memory. G1 GC splits the heap into 2048 non-contiguous regions. It performs concurrent marking and prioritizes collecting regions containing the highest density of reclaimable garbage (Garbage-First), satisfying predictable latency targets.",
    "evaluationCriteria": "Explains Heap vs Stack vs Metaspace and describes G1 GC region-based collection and pause time goals.",
    "tags": [
      "Java",
      "JVM",
      "Garbage Collection",
      "G1GC",
      "Memory"
    ],
    "source": "JVM Internals & Performance"
  },
  {
    "id": "java-spring-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend",
    "topic": "Spring Boot",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain Dependency Injection and Inversion of Control (IoC) in Spring Boot, and why Constructor Injection is preferred over Field Injection (@Autowired on field).",
    "expectedPoints": [
      "IoC transfers object lifecycle and dependency management to the Spring IoC Container.",
      "Field injection hides dependencies, prevents making fields \"final\" (immutable), and makes unit testing difficult without starting Spring context/reflection.",
      "Constructor injection enforces mandatory dependencies, supports immutable \"final\" fields, and enables clean POJO unit tests with Mockito."
    ],
    "sampleAnswer": "IoC delegates object creation and lifecycle management to the Spring Container. Constructor Injection is strongly preferred over field injection because: 1) It allows declaring dependencies as \"final\" for true immutability; 2) It prevents NullPointerExceptions by guaranteeing dependencies at instantiation; 3) It allows instant unit testing with plain mock objects without starting Spring runners.",
    "evaluationCriteria": "Articulates IoC container role, final field immutability, and unit testability benefits of constructor injection.",
    "tags": [
      "Spring Boot",
      "Dependency Injection",
      "IoC",
      "Testing"
    ],
    "source": "Enterprise Spring Standards"
  },
  {
    "id": "java-jpa-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend",
    "topic": "Hibernate & JPA",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "What is the N+1 Query Problem in Hibernate/JPA, and what are the primary techniques to detect and eliminate it in production?",
    "expectedPoints": [
      "N+1 occurs when fetching a parent entity issues 1 query, and accessing a lazy-loaded child collection in a loop triggers N additional SQL queries.",
      "Detection: Hibernate SQL query logging or tools like QuickPerf and datasource-proxy.",
      "Solutions: Use JOIN FETCH in JPQL queries, @EntityGraph annotations, or batch fetching (hibernate.default_batch_fetch_size)."
    ],
    "sampleAnswer": "The N+1 problem occurs when fetching 100 User records executes 1 SQL query, and accessing each user's Orders in a loop fires 100 individual queries (1 + N = 101 queries). Fix this using \"JOIN FETCH u.orders\" in JPQL, applying @EntityGraph on repository methods, or configuring batch fetching with hibernate.default_batch_fetch_size.",
    "evaluationCriteria": "Explains query explosion mechanics, JOIN FETCH solution, @EntityGraph, and batch fetching.",
    "tags": [
      "JPA",
      "Hibernate",
      "Performance",
      "SQL",
      "Spring Data"
    ],
    "source": "Senior Java Backend Interview"
  },
  {
    "id": "java-sec-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend",
    "topic": "Authentication & Security",
    "difficulty": "Intermediate",
    "type": "Security",
    "question": "Explain how Spring Security SecurityFilterChain processes incoming requests with JWT authentication filter and UserDetailsService.",
    "expectedPoints": [
      "Spring Security uses a chain of servlet filter beans (FilterChainProxy).",
      "Custom OncePerRequestFilter intercepts requests, extracts Bearer JWT token from Authorization header, and validates signature.",
      "Upon valid token, creates UsernamePasswordAuthenticationToken and sets it in SecurityContextHolder.getContext().setAuthentication()."
    ],
    "sampleAnswer": "Spring Security routes HTTP requests through the SecurityFilterChain. A custom JWT filter extending OncePerRequestFilter extracts the Bearer token, validates the HMAC/RSA signature, extracts the user details and granted authorities, and sets an Authentication token in SecurityContextHolder, allowing @PreAuthorize method-level role checks.",
    "evaluationCriteria": "Traces the filter chain lifecycle, OncePerRequestFilter token extraction, and SecurityContextHolder authentication registration.",
    "tags": [
      "Spring Security",
      "JWT",
      "Security",
      "Authentication",
      "Java"
    ],
    "source": "Enterprise Security Architecture"
  },
  {
    "id": "java-micro-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend",
    "topic": "Microservices",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "How do you handle distributed transactions and data consistency across microservices using the Saga Pattern (Choreography vs Orchestration)?",
    "expectedPoints": [
      "Two-Phase Commit (2PC) does not scale well in distributed microservices due to blocking locks and tight coupling.",
      "Saga Pattern executes a sequence of local transactions across services; if a step fails, compensating transactions are executed in reverse to roll back state.",
      "Choreography: Services listen to events (Kafka/RabbitMQ) and react autonomously. Orchestration: A centralized coordinator service executes and directs each transaction step."
    ],
    "sampleAnswer": "In distributed systems, the Saga pattern manages transactions through a sequence of local database transactions. If payment fails after order creation, compensating transactions undo earlier actions. Choreography relies on event brokers (Kafka) where services publish and subscribe to domain events. Orchestration uses a central coordinator (like Camunda or Temporal) to command each service explicitly.",
    "evaluationCriteria": "Contrasts 2PC limitations with Saga compensating transactions, and clearly distinguishes event-driven Choreography from Orchestrator coordination.",
    "tags": [
      "Microservices",
      "Saga Pattern",
      "Distributed Systems",
      "Kafka",
      "Architecture"
    ],
    "source": "Senior Microservices Architecture"
  },
  {
    "id": "da-sql-01",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "SQL",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain SQL Window Functions: ROW_NUMBER(), RANK(), DENSE_RANK(), and how PARTITION BY works with a practical sales ranking example.",
    "expectedPoints": [
      "Window functions perform calculations across a set of table rows related to the current row without collapsing rows into a single summary like GROUP BY.",
      "ROW_NUMBER() assigns consecutive integers (1, 2, 3, 4).",
      "RANK() leaves gaps for ties (1, 2, 2, 4); DENSE_RANK() does not leave gaps (1, 2, 2, 3).",
      "PARTITION BY resets the ranking counter for each group (e.g. ranking employees by salary per department)."
    ],
    "sampleAnswer": "Window functions compute aggregations while preserving individual row identity. PARTITION BY divides the dataset into subsets (e.g. by region). Within each partition: ROW_NUMBER() assigns unique numbers; RANK() assigns the same rank to ties and skips subsequent numbers (1,2,2,4); DENSE_RANK() assigns identical ranks to ties without skipping (1,2,2,3).",
    "evaluationCriteria": "Accurately distinguishes row ranking tie behaviors and explains partition aggregation.",
    "tags": [
      "SQL",
      "Window Functions",
      "Analytics",
      "Data Analysis"
    ],
    "source": "Industry Standard Analytics Question"
  },
  {
    "id": "da-sql-02",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "SQL",
    "difficulty": "Advanced",
    "type": "Coding",
    "question": "Write an SQL query to calculate the 7-day rolling average revenue per day using window functions with frame specifications (ROWS BETWEEN).",
    "expectedPoints": [
      "Use AVG(daily_revenue) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW).",
      "Ensure dates are continuous or aggregated daily before applying the rolling window frame.",
      "Explain why ROWS BETWEEN 6 PRECEDING AND CURRENT ROW accounts for 7 total days including current date."
    ],
    "sampleAnswer": "SELECT date, daily_revenue, AVG(daily_revenue) OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7d_avg FROM daily_sales_summary. The ROWS BETWEEN 6 PRECEDING AND CURRENT ROW frame calculates the mean across the current day and the 6 preceding chronological records.",
    "evaluationCriteria": "Provides correct window framing clause (ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) with ordering.",
    "tags": [
      "SQL",
      "Rolling Average",
      "Time Series",
      "Window Functions"
    ],
    "source": "Data Analytics Technical Screen"
  },
  {
    "id": "da-stat-01",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Statistics & Probability",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How do you design an A/B test for a conversion rate experiment, and how do you interpret p-values and statistical significance?",
    "expectedPoints": [
      "Formulate null hypothesis (H0: no difference) and alternative hypothesis (H1: variant improves conversion).",
      "Determine sample size upfront using power analysis (statistical power 80%, significance level alpha = 0.05).",
      "p-value is the probability of observing results at least as extreme assuming null hypothesis is true; if p < 0.05, reject H0 and conclude significance."
    ],
    "sampleAnswer": "To design an A/B test: 1) Formulate H0 (conversion is equal) vs H1; 2) Determine required sample size based on Minimum Detectable Effect (MDE), 80% power, and 5% alpha; 3) Randomize users without selection bias; 4) Calculate two-sample z-test. If p-value < 0.05, we reject the null hypothesis and confirm the variant delivers a statistically significant lift.",
    "evaluationCriteria": "Covers hypothesis definition, power analysis sample sizing, and rigorous p-value interpretation.",
    "tags": [
      "Statistics",
      "A/B Testing",
      "Hypothesis Testing",
      "p-value"
    ],
    "source": "Data Science & Analytics Standard"
  },
  {
    "id": "da-py-01",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Pandas & Python",
    "difficulty": "Intermediate",
    "type": "Coding",
    "question": "Explain the difference between .loc[] and .iloc[] in Pandas and how to handle missing data using imputation techniques.",
    "expectedPoints": [
      ".loc[] is label-based indexing (column names and index labels); .iloc[] is integer position-based indexing (0 to n-1).",
      "Missing data strategies: dropna() for sparse missing rows, fillna() with mean/median for numerical data, mode for categorical data, or forward-fill (ffill) for time-series.",
      "Mean is sensitive to outliers, so median imputation is preferred for skewed distributions."
    ],
    "sampleAnswer": ".loc uses explicit labels (e.g. df.loc[0:5, \"Revenue\"]), whereas .iloc uses zero-based integer index positions (e.g. df.iloc[0:5, 1:3]). For missing data, if missing values are minimal, dropna() works; for skewed numerical distributions, imputing with df[\"col\"].fillna(df[\"col\"].median()) preserves central tendency without outlier distortion.",
    "evaluationCriteria": "Distinguishes label vs integer indexing and explains mean vs median imputation trade-offs.",
    "tags": [
      "Python",
      "Pandas",
      "Data Cleaning",
      "Imputation"
    ],
    "source": "Python for Data Analysis Standard"
  },
  {
    "id": "da-viz-01",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Data Visualization",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "How do you choose between a Bar Chart, Line Chart, Scatter Plot, and Heatmap when presenting insights to business stakeholders?",
    "expectedPoints": [
      "Bar Chart: Comparing discrete categorical groups or ranking categories.",
      "Line Chart: Displaying continuous trends, revenue velocity, or time-series changes.",
      "Scatter Plot: Identifying correlation, clustering, or distribution between two continuous variables.",
      "Heatmap: Visualizing high-density 2D relationships (e.g. user activity by day of week and hour)."
    ],
    "sampleAnswer": "Select charts based on data structure: Line charts illustrate continuous time-series trends (e.g., Monthly Recurring Revenue); Bar charts compare discrete categorical counts (e.g., Revenue by Product Line); Scatter plots reveal correlation and outliers between two numeric variables; Heatmaps visualize multi-dimensional matrix intensity (e.g., peak user login hours).",
    "evaluationCriteria": "Maps visualization types directly to appropriate business use cases (time-series, categorical, bivariate correlation, density).",
    "tags": [
      "Data Visualization",
      "Tableau",
      "PowerBI",
      "Reporting",
      "BI"
    ],
    "source": "BI & Analytics Visualization Standard"
  },
  {
    "id": "da-biz-01",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Business Analysis & Metrics",
    "difficulty": "Intermediate",
    "type": "Project",
    "question": "You notice a 15% drop in weekly active users (WAU) on an e-commerce platform. How do you investigate the root cause using cohort analysis and segmentation?",
    "expectedPoints": [
      "Segment data across dimensions: Platform (iOS vs Android vs Web), Geography/Region, Traffic Source, User Cohorts (New vs Returning).",
      "Check external vs internal factors: App release bugs, payment gateway downtime, marketing campaign drop, seasonality/holidays.",
      "Analyze funnel drop-off stages (Homepage -> Search -> Cart -> Checkout) to isolate the exact step of user friction."
    ],
    "sampleAnswer": "I would break the investigation into structured steps: 1) Verify data telemetry integrity to rule out tracking bugs; 2) Segment the drop by dimensions (OS/app version, geography, acquisition channel); 3) Perform funnel drop-off analysis to see where abandonment spiked; 4) Compare new user conversion vs existing user churn cohorts. This isolates whether it was a technical bug or market factor.",
    "evaluationCriteria": "Structured hypothesis-driven approach, multi-dimensional segmentation, funnel drop-off analysis.",
    "tags": [
      "Business Analysis",
      "Metrics",
      "Root Cause",
      "Cohort Analysis"
    ],
    "source": "Product Analytics Case Study"
  },
  {
    "id": "fs-react-09",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the Virtual DOM in React, and how does the reconciliation algorithm update the real DOM efficiently?",
    "expectedPoints": [
      "Virtual DOM is an in-memory lightweight representation of the actual DOM tree.",
      "When state/props change, React renders a new virtual DOM tree and diffs it with the previous snapshot.",
      "The diffing algorithm uses heuristics (keys, element types) to batch and apply minimal DOM operations."
    ],
    "sampleAnswer": "The Virtual DOM is a lightweight JavaScript representation of the actual DOM maintained in memory. When state updates, React creates a new virtual tree, runs a diffing algorithm (reconciliation) against the previous tree, calculates the minimal set of mutations required, and batches those changes to the browser DOM.",
    "evaluationCriteria": "Explains in-memory diffing, heuristic rules (keys, tags), and batching updates to minimize expensive real DOM operations.",
    "tags": [
      "React",
      "Virtual DOM",
      "Reconciliation",
      "Performance"
    ],
    "source": "Frontend Engineering Interview Standard"
  },
  {
    "id": "fs-react-10",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "Explain the difference between useMemo and useCallback, and when would using them actually hurt performance?",
    "expectedPoints": [
      "useMemo caches the result of a computation; useCallback caches the function instance itself.",
      "Both require dependency array checks and memory overhead on every render.",
      "Overusing them for trivial calculations or components without React.memo adds unnecessary memory and comparison overhead."
    ],
    "sampleAnswer": "useMemo memoizes the computed return value of an expensive calculation, while useCallback memoizes a callback function reference across re-renders to prevent child components wrapped in React.memo from re-rendering. Overusing them on simple primitives or functions adds GC overhead and comparison costs without any performance gain.",
    "evaluationCriteria": "Differentiates value vs function memoization and explains premature optimization overheads.",
    "tags": [
      "React",
      "Hooks",
      "useMemo",
      "useCallback",
      "Optimization"
    ],
    "source": "Senior React Developer Interview"
  },
  {
    "id": "fs-react-11",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Debugging",
    "question": "How do you diagnose and fix unnecessary component re-renders in a large React application?",
    "expectedPoints": [
      "Use React DevTools Profiler to record render cycles and inspect 'Why did this render?'.",
      "Check for unstable object/array/function literals passed as props.",
      "Leverage state colocation, React.memo, useCallback, or context splitting to isolate changes."
    ],
    "sampleAnswer": "I use React DevTools Profiler to identify components re-rendering frequently and analyze why they rendered. Common culprits include creating object or function references inline in JSX, global context thrashing, or lifting state too high. Solutions include splitting context into smaller providers, passing primitives, memoizing callbacks, or colocating state closer to where it is consumed.",
    "evaluationCriteria": "Mentions React DevTools Profiler, reference stability, state colocation, and Context API splitting.",
    "tags": [
      "React",
      "Performance",
      "Debugging",
      "Profiler"
    ],
    "source": "React Production Architecture Question"
  },
  {
    "id": "fs-react-12",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "How does React Server Components (RSC) differ from traditional Client-Side Rendering (CSR) and Server-Side Rendering (SSR) in Next.js?",
    "expectedPoints": [
      "CSR fetches bundle and renders on client; SSR sends initial HTML then hydrates full JS bundle.",
      "RSC executes exclusively on the server, streams rendered UI primitives, and sends zero JavaScript bundle for server components.",
      "Client components handle interactivity and state, while RSC handles data fetching and secrets directly without API boilerplate."
    ],
    "sampleAnswer": "Traditional SSR generates HTML on the server but still ships all component JavaScript to the client for hydration. React Server Components execute exclusively on the server, directly accessing databases or backend resources, and stream a serialized component tree without adding any JS bundle weight to the client. Client components are used at the leaves of the tree for interactivity.",
    "evaluationCriteria": "Accurately contrasts hydration, bundle size reduction, direct backend data access, and the client/server boundary.",
    "tags": [
      "React",
      "Next.js",
      "RSC",
      "SSR",
      "Architecture"
    ],
    "source": "Modern Full Stack System Design"
  },
  {
    "id": "fs-node-05",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "Explain Node.js Streams and how you would process a 10GB CSV file without causing an Out-Of-Memory (OOM) error.",
    "expectedPoints": [
      "Streams process data chunk-by-chunk in buffers rather than loading the whole file into RAM.",
      "Readable, Writable, Transform, and Duplex streams allow pipeline composition.",
      "Use fs.createReadStream, csv-parser, and pipeline with proper backpressure handling."
    ],
    "sampleAnswer": "Instead of fs.readFile which buffers the entire file into V8 memory, I use fs.createReadStream with a streaming parser (e.g., csv-parser) piped to a Transform stream using stream.promises.pipeline. This handles backpressure automatically, pausing the read stream when downstream processing is busy, keeping memory usage constant regardless of file size.",
    "evaluationCriteria": "Demonstrates understanding of buffers, chunks, backpressure management, and stream pipelines.",
    "tags": [
      "Node.js",
      "Streams",
      "Performance",
      "Memory"
    ],
    "source": "Backend Scalability Interview"
  },
  {
    "id": "fs-node-06",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "How do you handle CPU-intensive tasks (e.g., image resizing or cryptography) in Node.js without blocking the Event Loop?",
    "expectedPoints": [
      "Node.js event loop runs on a single thread; heavy synchronous computations block all incoming I/O requests.",
      "Use the worker_threads module to offload CPU work to separate V8 isolates with shared memory (SharedArrayBuffer).",
      "Alternatively, delegate heavy tasks to background worker queues (BullMQ/Redis) or dedicated microservices."
    ],
    "sampleAnswer": "Because synchronous CPU computations block the single-threaded Event Loop, I offload intensive tasks using Node.js worker_threads (Piscina pool) or delegate them asynchronously to a background task queue (BullMQ + Redis worker processes). For image processing, native C++ libuv bindings like Sharp handle operations off the main loop.",
    "evaluationCriteria": "Distinguishes I/O non-blocking behavior from CPU blocking, mentions worker_threads and background job queues.",
    "tags": [
      "Node.js",
      "Concurrency",
      "Worker Threads",
      "Event Loop"
    ],
    "source": "Node.js Concurrency Question"
  },
  {
    "id": "fs-api-02",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "REST APIs",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is API Idempotency and how would you implement idempotent payment processing in a RESTful API?",
    "expectedPoints": [
      "An idempotent HTTP method produces the same server state regardless of how many times it is executed (e.g., GET, PUT, DELETE).",
      "POST is not inherently idempotent; duplicate network retries can double-charge users.",
      "Implement idempotency keys (Idempotency-Key header) cached in Redis with transaction locks and unique database constraints."
    ],
    "sampleAnswer": "Idempotency means making multiple identical requests has the same effect as making a single request. For payment POST endpoints, the client generates a unique UUID (Idempotency-Key). The server uses Redis with atomic SETNX to check if that key exists. If in-progress or completed, it returns the stored cached response rather than re-executing the charge.",
    "evaluationCriteria": "Explains HTTP method semantics, unique client keys, atomic caching in Redis, and avoiding race conditions.",
    "tags": [
      "REST",
      "API Design",
      "Idempotency",
      "Payments"
    ],
    "source": "FinTech & E-Commerce Technical Question"
  },
  {
    "id": "fs-api-03",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "REST APIs",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "Compare REST, GraphQL, and gRPC. In what scenarios would you choose each for a full-stack architecture?",
    "expectedPoints": [
      "REST: Standard HTTP verbs, great for public APIs, caching with HTTP headers, simple tooling.",
      "GraphQL: Solves over-fetching and under-fetching, client-driven queries, ideal for complex frontend dashboards and mobile apps.",
      "gRPC: HTTP/2 binary Protocol Buffers, ultra-fast low-latency RPC, streaming, ideal for internal microservice-to-microservice communication."
    ],
    "sampleAnswer": "REST is best for public-facing third-party APIs and standard CRUD services with HTTP caching. GraphQL is ideal when client applications (web/mobile) need heterogeneous data from multiple entities in a single round-trip without over-fetching. gRPC is the best choice for high-throughput, low-latency microservice-to-microservice communication using compact Protobuf binary serialization over HTTP/2.",
    "evaluationCriteria": "Provides nuanced trade-offs across over-fetching, caching, serialization protocol overhead, and architectural fit.",
    "tags": [
      "API",
      "REST",
      "GraphQL",
      "gRPC",
      "Architecture"
    ],
    "source": "System Design & API Architecture"
  },
  {
    "id": "fs-sd-02",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "System Design Basics",
    "difficulty": "Intermediate",
    "type": "Scenario-Based",
    "question": "Design a URL shortening service like Bit.ly. Explain the database schema, ID generation strategy, and caching layer.",
    "expectedPoints": [
      "Schema: original_url, short_code, user_id, created_at, expiration, click_count.",
      "Encoding: Base62 encoding (a-z, A-Z, 0-9) over auto-incrementing 64-bit integer IDs or distributed Snowflake IDs.",
      "Caching: Redis LRU cache for high-read redirect lookups (80/20 rule), HTTP 301 vs 302 redirects."
    ],
    "sampleAnswer": "I would use a distributed sequence generator (Snowflake) or auto-incrementing 64-bit ID converted to Base62 (e.g. 62^7 gives ~3.5 trillion URLs). The primary store can be a key-value or relational database. For fast redirects, URLs are cached in Redis with an LRU policy. Redirects use HTTP 302 for tracking analytics or 301 for browser caching.",
    "evaluationCriteria": "Addresses Base62 collision-free generation, read-heavy caching with Redis, and 301 vs 302 redirect trade-offs.",
    "tags": [
      "System Design",
      "URL Shortener",
      "Redis",
      "Base62"
    ],
    "source": "Standard System Design Interview"
  },
  {
    "id": "fs-sd-03",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "System Design Basics",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "Explain the differences between Cache-Aside, Write-Through, and Write-Behind caching strategies with trade-offs.",
    "expectedPoints": [
      "Cache-Aside (Lazy Loading): App checks cache; if miss, queries DB and populates cache. Simple, but initial requests are slow and data can be stale.",
      "Write-Through: App writes to cache, and cache synchronously writes to DB. Consistent data, but higher write latency.",
      "Write-Behind (Write-Back): App writes to cache immediately; cache asynchronously flushes writes in batch to DB. Fast writes, but risk of data loss on cache crash."
    ],
    "sampleAnswer": "In Cache-Aside, the application coordinates between cache and DB on read misses. In Write-Through, writes are synchronously saved to cache and DB together, ensuring strong consistency at the expense of write latency. In Write-Behind, writes are saved only to cache and flushed asynchronously to DB in batches, giving extreme write speed but risking data loss if the cache fails before persisting.",
    "evaluationCriteria": "Clearly contrasts consistency, write latency, failure tolerance, and cache invalidation mechanics.",
    "tags": [
      "System Design",
      "Caching",
      "Redis",
      "Distributed Systems"
    ],
    "source": "Distributed Systems Architecture"
  },
  {
    "id": "fs-hr-02",
    "role": "Full Stack Developer",
    "domain": "Software Engineering",
    "topic": "Behavioral & HR",
    "difficulty": "Intermediate",
    "type": "Behavioral",
    "question": "Describe a situation where a critical bug you wrote reached production. How did you respond, resolve it, and prevent recurrence?",
    "expectedPoints": [
      "Use STAR format (Situation, Task, Action, Result).",
      "Immediate rollback/mitigation, incident communication, root cause analysis (5 Whys), and blameless post-mortem.",
      "Added automated integration tests, lint checks, or monitoring alerts to guarantee the bug cannot happen again."
    ],
    "sampleAnswer": "In a previous release, an unhandled null pointer in a payment webhook caused checkout failures. I immediately acknowledged the incident on our incident channel, rolled back to the previous stable release within 4 minutes, and verified traffic stabilized. I then conducted a root cause analysis, added strict schema validation (Zod) and end-to-end integration tests in CI/CD, and established a synthetic monitoring alert.",
    "evaluationCriteria": "Demonstrates accountability, calm incident triage, rapid mitigation, and systemic prevention rather than blame.",
    "tags": [
      "Behavioral",
      "STAR",
      "Incidents",
      "Post-Mortem"
    ],
    "source": "Senior Engineering Behavioral Interview"
  },
  {
    "id": "ce-linux-03",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Linux",
    "difficulty": "Intermediate",
    "type": "Debugging",
    "question": "A Linux server is unresponsive and exhibiting 100% CPU utilization. Walk through your step-by-step triage workflow using CLI utilities.",
    "expectedPoints": [
      "Inspect overall resource state with top / htop (check load average, CPU user vs system vs iowait).",
      "Identify offending PID and threads (ps aux --sort=-%cpu, pidstat).",
      "Check I/O bottlenecks with iostat, memory pressure with vmstat/free, and process syscalls with strace or perf.",
      "Check system logs with journalctl -xe or /var/log/syslog for kernel OOM or panics."
    ],
    "sampleAnswer": "I start by running top/htop to check 1, 5, and 15-minute load averages and breakdown between %usr, %sys, and %wa (iowait). I isolate the top CPU consumer with ps aux --sort=-%cpu. If %sys is high, I run strace -p <PID> or perf top to inspect system calls. If %wa is high, I run iostat -xz 1 and iotop to identify disk thrashing. Finally, I review journalctl -xe for crashes.",
    "evaluationCriteria": "Demonstrates systematic Linux command mastery (top, ps, iostat, vmstat, strace, journalctl) and root cause isolation.",
    "tags": [
      "Linux",
      "Troubleshooting",
      "CLI",
      "Performance"
    ],
    "source": "SRE & Cloud Engineering Interview"
  },
  {
    "id": "ce-net-02",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Networking",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the TCP 3-Way Handshake and the 4-Way Handshake for connection termination.",
    "expectedPoints": [
      "Establishment: Client sends SYN (seq=x) -> Server replies SYN-ACK (seq=y, ack=x+1) -> Client sends ACK (ack=y+1).",
      "Termination: Client sends FIN -> Server sends ACK -> Server sends FIN when ready -> Client sends ACK and enters TIME_WAIT (2MSL).",
      "TIME_WAIT ensures delayed packets are drained and final ACK was received."
    ],
    "sampleAnswer": "Connection establishment uses SYN, SYN-ACK, and ACK flags to synchronize sequence numbers. Termination requires 4 steps because TCP is full-duplex: Client sends FIN, Server sends ACK (half-close). Once the server finishes sending remaining data, it sends FIN, and client replies with ACK, entering TIME_WAIT state (2MSL) to ensure the ACK arrived safely before releasing the socket.",
    "evaluationCriteria": "Explains sequence number synchronization, full-duplex half-close nature, and purpose of TIME_WAIT.",
    "tags": [
      "Networking",
      "TCP/IP",
      "Protocols",
      "Sockets"
    ],
    "source": "Networking & Cloud Infrastructure"
  },
  {
    "id": "ce-net-03",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Networking",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "Design an AWS VPC architecture for a multi-tier web application spanning public, private, and database subnets across multiple Availability Zones.",
    "expectedPoints": [
      "Public Subnets in 2+ AZs attached to Internet Gateway (IGW) hosting ALBs.",
      "Private Subnets hosting App/EKS compute with outbound internet access via NAT Gateways in public subnets.",
      "Isolated Database Subnets with no internet route, accessible only from App subnets via Security Groups.",
      "VPC Endpoints (PrivateLink) for S3 and DynamoDB to avoid NAT data transfer costs."
    ],
    "sampleAnswer": "I create a VPC with CIDR /16 across 2 Availability Zones. Public subnets (/24) route to an Internet Gateway for Public ALBs. Private subnets route outbound traffic through redundant NAT Gateways (one per AZ) for application instances. Database subnets (RDS Multi-AZ) have no route table entry to IGW or NAT. Security Groups enforce strict least privilege (ALB -> App -> DB), and VPC Gateway Endpoints route S3 traffic internally.",
    "evaluationCriteria": "Covers multi-AZ redundancy, subnet segregation (public, private, DB), NAT gateway placement, and security groups.",
    "tags": [
      "AWS",
      "VPC",
      "Networking",
      "Architecture",
      "Security"
    ],
    "source": "AWS Certified Solutions Architect Question"
  },
  {
    "id": "ce-aws-02",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "AWS & Cloud Services",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Compare Amazon EC2, AWS ECS (Fargate), and AWS Lambda. How do you choose the right compute model?",
    "expectedPoints": [
      "EC2: Full OS control, persistent VMs, custom kernels, but manual patching and scaling management.",
      "ECS Fargate: Serverless container orchestration, fast deployments, pay-for-resources-provisioned, no EC2 management.",
      "Lambda: Event-driven serverless functions, sub-second auto-scaling, pay-per-millisecond, 15-min timeout, ideal for micro-tasks and asynchronous processing."
    ],
    "sampleAnswer": "Choose EC2 when you need custom kernel modules, specific OS configurations, or sustained high-memory workloads where reserved instances are cost-effective. Choose ECS Fargate for long-running containerized microservices and web APIs without managing underlying VM infrastructure. Choose AWS Lambda for event-driven, sporadic, or asynchronous pipelines (e.g. S3 file processing, webhook handlers) where paying per invocation saves money.",
    "evaluationCriteria": "Analyzes control vs management overhead, cold start considerations, billing models, and workload characteristics.",
    "tags": [
      "AWS",
      "EC2",
      "Fargate",
      "Lambda",
      "Compute"
    ],
    "source": "AWS Solutions Architect Interview"
  },
  {
    "id": "ce-aws-03",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "AWS & Cloud Services",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "Explain the AWS Shared Responsibility Model and how IAM Roles, Policies, and Permission Boundaries enforce Least Privilege.",
    "expectedPoints": [
      "AWS manages 'Security OF the Cloud' (hardware, data centers, global infrastructure); customer manages 'Security IN the Cloud' (IAM, OS, encryption, network configs).",
      "IAM Roles eliminate long-lived access keys by providing short-lived STS tokens.",
      "Permission Boundaries set the maximum allowable permissions an IAM entity can have, preventing privilege escalation."
    ],
    "sampleAnswer": "AWS is responsible for physical security and cloud virtualization infrastructure, while customers are responsible for data encryption, network firewall rules, and IAM access. We enforce least privilege by using IAM Roles with temporary STS credentials instead of static root/access keys, attaching fine-grained resource-level policies, and setting IAM Permission Boundaries to prevent developers or CI/CD roles from granting themselves administrator rights.",
    "evaluationCriteria": "Clearly delineates customer vs AWS duties, STS temporary credentials, and permission boundaries.",
    "tags": [
      "AWS",
      "IAM",
      "Security",
      "Compliance"
    ],
    "source": "Cloud Security Specialist Interview"
  },
  {
    "id": "ce-docker-02",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Docker & Containers",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you optimize a Dockerfile to minimize image size and speed up CI/CD build cache times?",
    "expectedPoints": [
      "Use minimal base images (Alpine, Distroless, or slim variants).",
      "Leverage Multi-stage builds to exclude compiler toolchains and dev dependencies from final production image.",
      "Order instructions by change frequency: copy package.json and install dependencies before copying source code to leverage layer caching."
    ],
    "sampleAnswer": "I use multi-stage builds where stage 1 builds artifacts with necessary SDKs, and stage 2 copies only the production binary or dist folder into a scratch or distroless base image. I order Dockerfile instructions from least to most frequently modified (e.g. COPY package*.json -> RUN npm ci -> COPY src .) so dependencies remain cached unless lockfiles change, drastically cutting CI build times.",
    "evaluationCriteria": "Mentions multi-stage builds, distroless/alpine images, layer caching mechanics, and .dockerignore.",
    "tags": [
      "Docker",
      "Containers",
      "Optimization",
      "CI/CD"
    ],
    "source": "DevOps & Containerization Standard"
  },
  {
    "id": "ce-k8s-02",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Kubernetes",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the differences between Liveness, Readiness, and Startup Probes in Kubernetes with real-world examples.",
    "expectedPoints": [
      "Startup Probe: Verifies if legacy/slow-starting app has initialized; disables liveness/readiness checks until it succeeds.",
      "Readiness Probe: Verifies if pod is ready to accept user traffic; if failing, removes pod IP from Service endpoints without killing pod.",
      "Liveness Probe: Verifies if application is healthy/alive; if failing, kubelet restarts the container."
    ],
    "sampleAnswer": "A Startup Probe gives slow-starting applications time to boot (e.g., loading large ML models) before other probes kick in. A Readiness Probe checks if the pod can handle traffic (e.g., connected to DB); if it fails, Kubernetes stops routing service traffic to it without restarting it. A Liveness Probe detects deadlocks or fatal memory leaks; if it fails, kubelet kills and restarts the container.",
    "evaluationCriteria": "Accurately explains the different failure outcomes (traffic removal vs container restart vs boot delay).",
    "tags": [
      "Kubernetes",
      "Probes",
      "Reliability",
      "Containers"
    ],
    "source": "Kubernetes Certified Administrator (CKA)"
  },
  {
    "id": "ce-k8s-03",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Kubernetes",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "How does Horizontal Pod Autoscaler (HPA) work with Cluster Autoscaler to handle unexpected traffic spikes?",
    "expectedPoints": [
      "HPA monitors metrics (CPU, Memory, or Custom Prometheus metrics) and adjusts deployment replica counts.",
      "When pods exceed node capacity, new pods enter Pending state due to insufficient CPU/Memory.",
      "Cluster Autoscaler detects Pending pods and calls cloud provider APIs (e.g. AWS ASG) to provision new worker nodes."
    ],
    "sampleAnswer": "HPA periodically queries the Metrics Server or Prometheus adapter to calculate target replicas = ceil(currentReplicas * (currentMetric / targetMetric)). When HPA scales up pods and existing worker nodes have no allocatable resources, the scheduler marks new pods as 'Pending'. Cluster Autoscaler detects these pending pods, provisions new EC2 instances in the Auto Scaling Group, and joins them to the cluster.",
    "evaluationCriteria": "Connects pod-level scaling (HPA) with node-level scaling (Cluster Autoscaler/Karpenter) and pending pod scheduling.",
    "tags": [
      "Kubernetes",
      "HPA",
      "Autoscaling",
      "Cloud"
    ],
    "source": "Senior DevOps / SRE Interview"
  },
  {
    "id": "ce-tf-02",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Terraform & IaC",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Why is remote state management and state locking critical in Terraform, and how do you configure it in AWS?",
    "expectedPoints": [
      "Terraform state file (terraform.tfstate) maps declared resources to real-world cloud resources and stores metadata.",
      "Remote state (S3 bucket) ensures team collaboration on a single source of truth with versioning and encryption.",
      "State locking (DynamoDB table with LockID) prevents simultaneous 'terraform apply' executions from corrupting the state file."
    ],
    "sampleAnswer": "Terraform state tracks the mapping between your HCL code and deployed cloud infrastructure. In teams, storing state locally causes divergence. We configure a backend block using Amazon S3 for encrypted, versioned remote storage, and Amazon DynamoDB for distributed state locking. When someone runs terraform plan/apply, Terraform writes a LockID to DynamoDB, blocking concurrent runs until completion.",
    "evaluationCriteria": "Explains state corruption risks, remote S3 backends with encryption/versioning, and DynamoDB lock tables.",
    "tags": [
      "Terraform",
      "IaC",
      "AWS",
      "State Management"
    ],
    "source": "Terraform Associate / Cloud Infrastructure"
  },
  {
    "id": "ce-cicd-02",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "CI/CD",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "Compare Canary Deployments with Blue/Green Deployments. What are the trade-offs in risk and infrastructure cost?",
    "expectedPoints": [
      "Blue/Green: Two identical environments. Switch 100% traffic instantly at router/load balancer. Zero downtime, instant rollback, but requires 2x infrastructure cost.",
      "Canary: Gradually route small % of traffic (e.g. 5% -> 25% -> 100%) to new version while monitoring error rates/telemetry. Lower infrastructure overhead and catches bugs early on real users."
    ],
    "sampleAnswer": "Blue/Green runs two full environments (active Green, staging Blue) and switches traffic instantly at the DNS/load balancer level, allowing instantaneous rollbacks but requiring 100% duplicate infrastructure. Canary routes a small slice of real production traffic (5%) to the new release, monitoring metrics (error rate, latency) before progressive rollouts. Canary is more cost-effective and catches subtle real-user issues with minimal blast radius.",
    "evaluationCriteria": "Differentiates traffic shifting mechanisms, blast radius control, rollback speeds, and cost overheads.",
    "tags": [
      "CI/CD",
      "DevOps",
      "Deployments",
      "Canary",
      "BlueGreen"
    ],
    "source": "Production Release Engineering"
  },
  {
    "id": "jb-core-02",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Core Java & OOP",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Why is String immutable in Java, and what is the String Constant Pool?",
    "expectedPoints": [
      "Security: Strings are used for DB connection URLs, network sockets, and credentials; mutability would allow malicious modification.",
      "Thread safety: Immutable objects are inherently thread-safe without synchronization.",
      "Caching / Performance: String Constant Pool in Heap allows reusing identical string literals to save memory.",
      "HashCode caching: String caches its hash code during instantiation, making it ideal for HashMap keys."
    ],
    "sampleAnswer": "Strings are immutable in Java for security (preventing tampering with file/network parameters), thread safety (safe sharing without locks), and performance optimization. The String Constant Pool is a special memory region in the Heap where Java stores unique string literals. When a new literal is created, the JVM returns the existing reference instead of allocating new memory. Immutability also allows caching hash codes for fast HashMap lookups.",
    "evaluationCriteria": "Explains memory sharing in String Pool, security implications, thread safety, and HashCode caching.",
    "tags": [
      "Java",
      "String Pool",
      "Immutability",
      "JVM"
    ],
    "source": "Core Java Technical Interview"
  },
  {
    "id": "jb-core-03",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Core Java & OOP",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the contract between equals() and hashCode() in Java. What happens if you override equals() without hashCode()?",
    "expectedPoints": [
      "Contract: If a.equals(b) is true, then a.hashCode() MUST equal b.hashCode().",
      "If hashCode() is not overridden, two logically equal objects will have different memory identity hashCodes.",
      "When used as keys in a HashMap or elements in a HashSet, the object will be placed in the wrong bucket and get() will fail to find it."
    ],
    "sampleAnswer": "The Java contract requires that if two objects are equal according to equals(), they must produce the same integer hashCode(). If you override equals() but fail to override hashCode(), HashMap will calculate different bucket indexes for logically identical keys. Consequently, put() and get() will operate on different buckets, leading to duplicate keys in HashSets and null returns in HashMaps.",
    "evaluationCriteria": "Clearly describes bucket hashing, memory vs logical equality, and HashMap lookup breakdown.",
    "tags": [
      "Java",
      "Collections",
      "equals",
      "hashCode"
    ],
    "source": "Java Backend Core Questions"
  },
  {
    "id": "jb-col-02",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Collections Framework",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How does HashMap work internally in Java 8+? Explain collision resolution and TreeNode conversion.",
    "expectedPoints": [
      "Backed by an array of Node<K,V> buckets (default capacity 16, load factor 0.75).",
      "Index calculation: (n - 1) & hash(key).",
      "Collisions use linked list chaining; in Java 8, when a bucket has >= 8 elements (and array capacity >= 64), it converts from LinkedList (O(N)) to Red-Black Tree (O(log N))."
    ],
    "sampleAnswer": "HashMap uses an array of buckets indexed via (n - 1) & hash(key). When hash collisions occur, entries are chained into a linked list. In Java 8+, if a single bucket reaches 8 entries (TREEIFY_THRESHOLD) and table length is at least 64, the linked list transforms into a Red-Black Tree, improving worst-case search complexity from O(N) to O(log N). If elements drop to 6, it untreeifies back to a list.",
    "evaluationCriteria": "Explains bitwise index calculation, bucket array, load factor resizing, and Java 8 Red-Black treeification.",
    "tags": [
      "Java",
      "Collections",
      "HashMap",
      "Data Structures"
    ],
    "source": "Java Collections Deep Dive"
  },
  {
    "id": "jb-col-03",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Collections Framework",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Compare HashMap, ConcurrentHashMap, and Collections.synchronizedMap(). How does ConcurrentHashMap achieve high concurrency in Java 8?",
    "expectedPoints": [
      "Collections.synchronizedMap locks the entire map on every operation, creating high lock contention.",
      "Java 7 ConcurrentHashMap used Segment Locking (ReentrantLock on 16 segments).",
      "Java 8+ ConcurrentHashMap eliminates segments, using CAS (Compare-And-Swap) for empty bucket insertions and synchronized locks only on the individual bucket head node."
    ],
    "sampleAnswer": "Collections.synchronizedMap synchronizes all read/write operations on a single global mutex, severely bottlenecking multi-threaded applications. ConcurrentHashMap in Java 8+ provides lock-free reads and fine-grained locking on writes: it uses lock-free CAS for inserting the first node of a bucket, and synchronizes only on the head node of that specific bucket for updates, allowing concurrent writes to different buckets without blocking.",
    "evaluationCriteria": "Contrasts table-level locking vs bucket-level locking and explains CAS operations.",
    "tags": [
      "Java",
      "Concurrency",
      "ConcurrentHashMap",
      "Multithreading"
    ],
    "source": "High Performance Java Concurrency"
  },
  {
    "id": "jb-thread-02",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Multithreading & Concurrency",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the purpose of the 'volatile' keyword in Java and how it relates to CPU caches and the Java Memory Model (JMM).",
    "expectedPoints": [
      "Ensures visibility: Writes to a volatile variable are immediately flushed to main memory and subsequent reads fetch from main memory rather than CPU L1/L2 caches.",
      "Prevents instruction reordering: Inserts memory barriers (happens-before relationship).",
      "Does NOT guarantee atomicity (e.g., count++ is still not thread-safe and requires AtomicInteger or synchronization)."
    ],
    "sampleAnswer": "The volatile keyword guarantees visibility and ordering across threads under the Java Memory Model. It instructs the JVM and CPU to read the variable directly from main RAM instead of thread-local CPU caches, ensuring changes made by one thread are immediately visible to others. It also prevents compiler instruction reordering. However, it does not provide atomicity for compound operations like count++.",
    "evaluationCriteria": "Differentiates visibility and ordering from atomicity; explains CPU cache coherency and happens-before relationship.",
    "tags": [
      "Java",
      "Multithreading",
      "volatile",
      "JMM",
      "Concurrency"
    ],
    "source": "Java Concurrency in Practice"
  },
  {
    "id": "jb-thread-03",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Multithreading & Concurrency",
    "difficulty": "Advanced",
    "type": "Practical",
    "question": "How do you configure ThreadPoolExecutor in Java, and what are the 4 standard RejectedExecutionHandler policies?",
    "expectedPoints": [
      "Parameters: corePoolSize, maximumPoolSize, keepAliveTime, TimeUnit, BlockingQueue<Runnable>, ThreadFactory, RejectedExecutionHandler.",
      "Execution flow: core threads -> queue capacity -> max threads -> reject.",
      "4 Rejection Policies: AbortPolicy (throws exception), CallerRunsPolicy (caller thread executes task), DiscardPolicy (silent drop), DiscardOldestPolicy (drops oldest unhandled task)."
    ],
    "sampleAnswer": "ThreadPoolExecutor manages worker threads with corePoolSize, maximumPoolSize, and a BlockingQueue. When core threads are busy, tasks buffer in the queue. When the queue fills, it spawns up to maximumPoolSize threads. If both max threads and queue are full, it triggers a RejectedExecutionHandler: 1) AbortPolicy (throws RejectedExecutionException), 2) CallerRunsPolicy (executes task in calling thread, providing natural backpressure), 3) DiscardPolicy (silently drops task), or 4) DiscardOldestPolicy.",
    "evaluationCriteria": "Walks through task submission lifecycle, queue filling, and the four rejection policies.",
    "tags": [
      "Java",
      "ThreadPoolExecutor",
      "Concurrency",
      "Executors"
    ],
    "source": "Senior Java Engineer Concurrency"
  },
  {
    "id": "jb-spring-02",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Spring Boot",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How does Spring Boot Autoconfiguration work (@EnableAutoConfiguration / @SpringBootApplication)?",
    "expectedPoints": [
      "Spring Boot scans classpath using META-INF/spring.factories or META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports.",
      "Conditional annotations evaluate context: @ConditionalOnClass, @ConditionalOnMissingBean, @ConditionalOnProperty.",
      "If conditions match, configuration beans are registered automatically unless overridden by user beans."
    ],
    "sampleAnswer": "Spring Boot Autoconfiguration looks at JAR dependencies present on the classpath. During startup, it reads auto-configuration classes listed in Spring Boot metadata. Each configuration class uses @Conditional annotations (e.g. @ConditionalOnClass(DataSource.class) and @ConditionalOnMissingBean) to instantiate default infrastructure beans only if the library is present and the developer has not supplied their own custom bean definition.",
    "evaluationCriteria": "Explains conditional annotations (@ConditionalOnMissingBean, @ConditionalOnClass) and auto-configuration discovery.",
    "tags": [
      "Spring Boot",
      "Autoconfiguration",
      "Spring",
      "Annotations"
    ],
    "source": "Spring Boot Architecture Interview"
  },
  {
    "id": "jb-spring-03",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Spring Boot",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "How does @Transactional work under the hood in Spring? What causes self-invocation transactional failure?",
    "expectedPoints": [
      "Spring creates dynamic AOP proxies (CGLIB or JDK dynamic proxies) around the @Transactional bean.",
      "Proxy intercepts method call, opens transaction via PlatformTransactionManager, executes target method, and commits/rollbacks on RuntimeException.",
      "Self-invocation (calling methodA -> @Transactional methodB within the same class) bypasses the proxy, causing the transaction to be ignored."
    ],
    "sampleAnswer": "Spring uses Aspect-Oriented Programming (AOP) proxies to wrap @Transactional beans. When an external caller invokes a method, the proxy intercepts the call, starts a database transaction, invokes the target method, and commits or rolls back based on exceptions. If a non-transactional method calls a @Transactional method within the same class (this.methodB()), the call bypasses the Spring proxy and executes directly, resulting in no transaction being started.",
    "evaluationCriteria": "Mentions AOP proxies, PlatformTransactionManager, rollback rules, and why internal self-calls bypass the proxy.",
    "tags": [
      "Spring",
      "Transactions",
      "AOP",
      "Proxies",
      "Hibernate"
    ],
    "source": "Spring Enterprise Architecture"
  },
  {
    "id": "jb-micro-02",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Microservices",
    "difficulty": "Intermediate",
    "type": "Scenario-Based",
    "question": "How does the Circuit Breaker pattern (Resilience4j) prevent cascading failures in a microservices ecosystem?",
    "expectedPoints": [
      "Monitors failure rates of downstream service calls across a sliding time/count window.",
      "Three States: CLOSED (normal traffic), OPEN (downstream failing, immediately returns fallback without calling service), HALF-OPEN (allows limited test requests).",
      "Protects calling service thread pools and gives failing downstream services time to recover."
    ],
    "sampleAnswer": "A Circuit Breaker prevents a failing downstream service from exhausting thread pools of upstream callers. In the CLOSED state, requests pass normally. If error rates exceed a threshold (e.g., 50% failures), it transitions to OPEN, failing fast or returning cached fallback responses without making network calls. After a wait duration, it enters HALF-OPEN, allowing trial requests to verify if the downstream service has recovered before switching back to CLOSED.",
    "evaluationCriteria": "Accurately details the 3 states (Closed, Open, Half-Open), failure thresholds, and thread exhaustion prevention.",
    "tags": [
      "Microservices",
      "Circuit Breaker",
      "Resilience4j",
      "Distributed Systems"
    ],
    "source": "Microservices Resiliency Interview"
  },
  {
    "id": "da-sql-03",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "SQL",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between ROW_NUMBER(), RANK(), and DENSE_RANK() in SQL with an example.",
    "expectedPoints": [
      "ROW_NUMBER(): Assigns consecutive unique integers (1, 2, 3, 4) regardless of ties.",
      "RANK(): Assigns identical rank to ties but skips subsequent numbers (1, 2, 2, 4).",
      "DENSE_RANK(): Assigns identical rank to ties without skipping subsequent numbers (1, 2, 2, 3)."
    ],
    "sampleAnswer": "All three are SQL window functions that rank rows over a partition. If two candidates tie for second place: ROW_NUMBER() assigns distinct arbitrary numbers (1, 2, 3), RANK() assigns ties the same rank and skips ranks (1, 2, 2, 4), and DENSE_RANK() assigns ties the same rank with no gaps (1, 2, 2, 3). DENSE_RANK() is typically used for finding the Nth highest distinct salary.",
    "evaluationCriteria": "Clearly explains tie-breaking and rank gap behavior with concrete numeric examples.",
    "tags": [
      "SQL",
      "Window Functions",
      "Ranking",
      "Analytics"
    ],
    "source": "Data Analyst SQL Screening"
  },
  {
    "id": "da-sql-04",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "SQL",
    "difficulty": "Advanced",
    "type": "Practical",
    "question": "How do Common Table Expressions (CTEs) differ from Subqueries and Temporary Tables in SQL query optimization?",
    "expectedPoints": [
      "CTEs (WITH clause): Improve readability, allow recursive queries, and can be referenced multiple times within a single query.",
      "Subqueries: Inline queries, often harder to read and optimize when nested deeply.",
      "Temporary Tables: Persist physically in tempdb across multiple statements, allow indexing and statistics generation for complex multi-step batch transformations."
    ],
    "sampleAnswer": "CTEs enhance readability and modularity for complex transformations within a single execution plan, and enable recursive queries (e.g., organizational hierarchies). Subqueries execute inline and can be inefficient if correlated. Temporary Tables are materialized physical tables in tempdb, which are superior for massive multi-million row batch pipelines because you can add indexes and analyze statistics between intermediate steps.",
    "evaluationCriteria": "Differentiates in-memory execution plan optimization, readability, recursion, and temp table indexing.",
    "tags": [
      "SQL",
      "CTE",
      "Optimization",
      "Database"
    ],
    "source": "Senior Data Analyst Query Tuning"
  },
  {
    "id": "da-stat-02",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Statistics & Probability",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is the Central Limit Theorem (CLT) and why is it foundational for hypothesis testing and A/B testing?",
    "expectedPoints": [
      "CLT states that the distribution of sample means approaches a normal distribution as sample size n increases (typically n >= 30), regardless of the population distribution shape.",
      "Allows analysts to calculate standard error and confidence intervals without knowing the underlying population distribution.",
      "Enables parametric hypothesis tests (Z-test, T-test) in A/B testing conversion metrics."
    ],
    "sampleAnswer": "The Central Limit Theorem states that as sample size grows sufficiently large (n >= 30), the sampling distribution of the sample mean approximates a normal distribution, even if the underlying population is skewed or non-normal. This allows data analysts to apply normal distribution properties, calculate confidence intervals, and run Z-tests/T-tests in A/B experiments to determine statistical significance.",
    "evaluationCriteria": "States the sample size condition, normal distribution convergence of sample means, and application to hypothesis testing.",
    "tags": [
      "Statistics",
      "CLT",
      "AB Testing",
      "Hypothesis Testing"
    ],
    "source": "Statistical Analysis Interview"
  },
  {
    "id": "da-stat-03",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Statistics & Probability",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "Explain Type I and Type II errors in A/B testing. How do you determine sample size and statistical power?",
    "expectedPoints": [
      "Type I Error (Alpha, False Positive): Rejecting null hypothesis when it is actually true (declaring a loser variant a winner).",
      "Type II Error (Beta, False Negative): Failing to reject null hypothesis when an effect actually exists.",
      "Statistical Power (1 - Beta, usually 80%): Probability of detecting an effect if one exists.",
      "Sample size depends on baseline conversion rate, Minimum Detectable Effect (MDE), alpha (5%), and power (80%)."
    ],
    "sampleAnswer": "A Type I error (False Positive, alpha=0.05) occurs when we conclude a new feature improved conversion when it actually made no difference. A Type II error (False Negative, beta=0.20) occurs when we fail to detect a real improvement. Statistical power is 1 - beta (typically 80%). Required sample size is calculated upfront using baseline conversion, desired Minimum Detectable Effect (MDE), significance level, and statistical power to prevent underpowered experiments.",
    "evaluationCriteria": "Clearly defines Alpha, Beta, Power (1-Beta), MDE, and sample size sizing principles.",
    "tags": [
      "Statistics",
      "AB Testing",
      "Hypothesis Testing",
      "Data Science"
    ],
    "source": "Product Analytics A/B Testing"
  },
  {
    "id": "da-py-02",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Pandas & Python",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "Why is vectorized operation in Pandas/NumPy significantly faster than using Python 'for' loops or df.apply()?",
    "expectedPoints": [
      "Vectorization delegates array computations to pre-compiled, optimized C/Fortran SIMD CPU instructions without Python interpreter overhead.",
      "Avoids Python dynamic type checking, GIL (Global Interpreter Lock), and boxing/unboxing overhead for each scalar element.",
      "Contrasts execution speed: Vectorized > df.apply() > for loop (iterrows/itertuples)."
    ],
    "sampleAnswer": "Vectorized operations run in compiled C/Fortran code via NumPy, executing parallel SIMD (Single Instruction Multiple Data) CPU instructions across contiguous memory blocks. In contrast, standard Python loops or df.apply() incur Python interpreter overhead, dynamic type checking, and object boxing/unboxing on every individual row, resulting in orders of magnitude slower execution.",
    "evaluationCriteria": "Mentions C underlying implementation, contiguous memory locality, SIMD execution, and interpreter overhead.",
    "tags": [
      "Python",
      "Pandas",
      "NumPy",
      "Optimization"
    ],
    "source": "Python for Data Analysis Interview"
  },
  {
    "id": "da-viz-02",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Data Visualization",
    "difficulty": "Intermediate",
    "type": "Scenario-Based",
    "question": "How do you choose between a Bar Chart, Line Chart, Scatter Plot, and Heatmap for executive business presentations?",
    "expectedPoints": [
      "Bar Chart: Comparing discrete categorical groups or ranking performance.",
      "Line Chart: Showing continuous trends over time (time-series).",
      "Scatter Plot: Displaying correlation and relationship between two continuous numerical variables.",
      "Heatmap: Highlighting intensity patterns across two categorical dimensions (e.g. user activity by day of week and hour)."
    ],
    "sampleAnswer": "I choose visualizations based on data dimensionality and stakeholder intent: Use Bar Charts for comparing discrete categories or top-performing products; Line Charts for displaying continuous trends and seasonal patterns over time; Scatter Plots for identifying correlations, clusters, or outliers between two continuous metrics; and Heatmaps for multi-dimensional density and activity matrixes (e.g., peak transaction hours across weekdays).",
    "evaluationCriteria": "Directly maps chart types to specific analytical objectives and business storytelling contexts.",
    "tags": [
      "Data Visualization",
      "Dashboards",
      "Storytelling",
      "Power BI",
      "Tableau"
    ],
    "source": "Business Intelligence Interview"
  },
  {
    "id": "da-biz-02",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Business Analysis & Metrics",
    "difficulty": "Intermediate",
    "type": "Scenario-Based",
    "question": "Define Customer Acquisition Cost (CAC), Lifetime Value (LTV), and LTV:CAC Ratio. What is a healthy benchmark for a SaaS product?",
    "expectedPoints": [
      "CAC = Total Sales & Marketing Spend / Number of New Customers Acquired.",
      "LTV = Average Revenue Per User (ARPU) × Gross Margin / Churn Rate.",
      "LTV:CAC Ratio: Ideal benchmark is 3:1. Less than 1:1 loses money; greater than 5:1 means under-investing in marketing growth."
    ],
    "sampleAnswer": "CAC measures the total sales and marketing cost required to acquire one new customer. LTV measures the net gross profit a customer generates throughout their entire relationship with the company. An LTV:CAC ratio of 3:1 is the gold standard in SaaS: an LTV:CAC of 1:1 or lower is unsustainable, while a ratio above 5:1 suggests the company is under-investing in marketing and missing expansion opportunities.",
    "evaluationCriteria": "Provides exact mathematical formulas, business significance, and standard SaaS ratio benchmarks.",
    "tags": [
      "Business Metrics",
      "SaaS",
      "LTV",
      "CAC",
      "Product Analytics"
    ],
    "source": "Product Management & Analytics"
  },
  {
    "id": "ce-linux-04",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Linux",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain the Linux kernel OOM (Out-Of-Memory) Killer algorithm and the oom_score_adj mechanism.",
    "expectedPoints": [
      "OOM Killer activates when system runs out of physical RAM + Swap and memory allocation fails.",
      "Scores processes based on memory usage percentage, runtime, and /proc/[pid]/oom_score.",
      "oom_score_adj (-1000 to 1000) adjusts priority (-1000 makes a process immune, e.g. SSH daemon or critical databases)."
    ],
    "sampleAnswer": "When Linux exhaust memory and cannot reclaim pages, the OOM Killer scores processes by RAM consumption and kills the highest-scoring non-root process to protect the OS kernel. Administrators tune /proc/[pid]/oom_score_adj: setting it to -1000 prevents the kernel from killing critical services like sshd or kubelet, while higher positive values make worker pods sacrificeable.",
    "evaluationCriteria": "Explains page cache exhaustion, heuristic scoring, and oom_score_adj tuning.",
    "tags": [
      "Linux",
      "Kernel",
      "OOM",
      "Memory Management"
    ],
    "source": "Linux Kernel & Infrastructure"
  },
  {
    "id": "ce-aws-04",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "AWS & Cloud Services",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the storage tiers and lifecycle policies of Amazon S3 (Standard, IA, Glacier, Deep Archive).",
    "expectedPoints": [
      "S3 Standard: High durability (11 9s), low latency, frequent access.",
      "S3 Standard-IA & One Zone-IA: Lower storage cost, higher per-GB retrieval cost, for data accessed less than once a month.",
      "S3 Glacier Flexible & Deep Archive: Lowest cost archiving, minutes to 12-hour retrieval times.",
      "S3 Lifecycle rules automate transitions between tiers and expiration to optimize costs."
    ],
    "sampleAnswer": "S3 provides tiers based on access frequency and retrieval latency: Standard for active workloads, Standard-IA for monthly reporting backups, Glacier Flexible Retrieval (minutes to hours) for compliance logs, and Deep Archive (up to 12 hours) for long-term retention. Lifecycle configuration rules automatically transition objects between classes and delete expired objects after a specified number of days.",
    "evaluationCriteria": "Explains retrieval latency differences, pricing trade-offs, and automated lifecycle rule transitions.",
    "tags": [
      "AWS",
      "S3",
      "Storage",
      "Cloud Architecture"
    ],
    "source": "AWS Storage Architecture"
  },
  {
    "id": "ce-k8s-04",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Kubernetes",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "Explain the differences between Deployments, StatefulSets, and DaemonSets in Kubernetes with appropriate workload examples.",
    "expectedPoints": [
      "Deployment: For stateless applications (Node.js/Go APIs); pods have ephemeral names, interchangeable storage, and random rolling updates.",
      "StatefulSet: For stateful systems (PostgreSQL, Kafka, Cassandra); provides unique sticky identities (pod-0, pod-1), ordered deployments, and dedicated persistent volume claims.",
      "DaemonSet: Ensures exactly one copy of a pod runs on every (or selected) worker node; ideal for log collectors (Fluentd) and node monitoring agents (Prometheus node-exporter)."
    ],
    "sampleAnswer": "Deployments manage stateless web apps where pods are interchangeable and use ephemeral storage. StatefulSets manage stateful systems like databases and message queues requiring ordered graceful rollouts, sticky network IDs (node-0, node-1), and persistent storage per replica. DaemonSets schedule exactly one pod per cluster node, ideal for infrastructure agents like Datadog, Promtail, or Cilium CNI.",
    "evaluationCriteria": "Contrasts pod identity, storage binding, ordering guarantees, and real-world system use cases.",
    "tags": [
      "Kubernetes",
      "Workloads",
      "StatefulSet",
      "DaemonSet"
    ],
    "source": "Senior Kubernetes Engineer"
  },
  {
    "id": "ce-sec-02",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "IAM & Cloud Security",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How do you implement secrets management in Kubernetes and AWS (Secrets Manager, HashiCorp Vault, External Secrets Operator)?",
    "expectedPoints": [
      "Base64-encoded K8s Secret objects are not secure by default; anyone with RBAC access or etcd access can read them.",
      "Encrypt etcd at rest with AWS KMS.",
      "Use External Secrets Operator (ESO) or HashiCorp Vault to synchronize secrets directly from AWS Secrets Manager with automatic rotation."
    ],
    "sampleAnswer": "Kubernetes native Secret objects are merely base64-encoded strings, requiring etcd KMS encryption at rest. For enterprise security, we avoid checking secrets into Git (GitOps) and instead use the External Secrets Operator (ESO) or HashiCorp Vault. ESO retrieves secrets securely from AWS Secrets Manager using IAM Roles for Service Accounts (IRSA) and mounts them into application pods with automated secret rotation.",
    "evaluationCriteria": "Identifies native K8s secret limitations, KMS encryption, and External Secrets Operator with IRSA.",
    "tags": [
      "Security",
      "Kubernetes",
      "AWS",
      "Secrets Management"
    ],
    "source": "DevSecOps & Cloud Security"
  },
  {
    "id": "ce-arch-02",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Cloud Architecture",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "Design a Disaster Recovery (DR) strategy in AWS. Compare Backup & Restore, Pilot Light, Warm Standby, and Multi-Region Active-Active.",
    "expectedPoints": [
      "RPO (Recovery Point Objective): Maximum acceptable data loss time; RTO (Recovery Time Objective): Maximum acceptable downtime.",
      "Backup & Restore: Lowest cost, highest RTO/RPO (hours).",
      "Pilot Light: Core data replicated live, compute templates ready; moderate RTO/RPO (10-30 mins).",
      "Warm Standby: Scaled-down replica running 24/7 in secondary region; fast RTO/RPO (minutes).",
      "Active-Active Multi-Region: Zero RTO/RPO, highest complexity and cost, global Route53 latency/geo routing."
    ],
    "sampleAnswer": "DR strategies balance RTO, RPO, and cost across 4 standard models: Backup & Restore (cheapest, hours RTO); Pilot Light (database replicated continuously via Aurora Global DB, compute provisioned on-demand via Terraform); Warm Standby (scaled-down 20% compute running in secondary region); and Multi-Region Active-Active (traffic routed via Route53 Latency routing with DynamoDB Global Tables, offering near-zero RTO/RPO at highest cost).",
    "evaluationCriteria": "Clearly defines RPO and RTO, comparing cost vs downtime across the four AWS disaster recovery tiers.",
    "tags": [
      "AWS",
      "Disaster Recovery",
      "Cloud Architecture",
      "Reliability"
    ],
    "source": "AWS Solutions Architect Professional"
  },
  {
    "id": "ce-tf-03",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Terraform & IaC",
    "difficulty": "Advanced",
    "type": "Practical",
    "question": "How do you structure reusable Terraform modules for multiple environments (Dev, Staging, Prod) without code duplication?",
    "expectedPoints": [
      "Create modular directory structure: modules/vpc, modules/eks, environments/dev, environments/prod.",
      "Pass environment-specific variables (instance types, min/max replica counts, CIDRs) via terraform.tfvars or Terragrunt.",
      "Isolate state files per environment to reduce blast radius."
    ],
    "sampleAnswer": "I build reusable opinionated modules in a modules/ directory defining standardized inputs and outputs. Each environment (dev, stage, prod) lives in its own root directory with its own remote state backend to isolate blast radius, calling the shared module with environment-specific tfvars parameters. Terragrunt is often layered on top to keep backend and provider configs completely DRY.",
    "evaluationCriteria": "Explains modular code reuse, separate state backends per environment, variable parametrization, and blast radius isolation.",
    "tags": [
      "Terraform",
      "IaC",
      "DevOps",
      "Terragrunt"
    ],
    "source": "Infrastructure as Code Standards"
  },
  {
    "id": "ce-linux-05",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Linux",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you configure systemd service units with automatic restart, resource limits (cgroups), and non-root execution?",
    "expectedPoints": [
      "Define [Unit], [Service], and [Install] sections in /etc/systemd/system/myapp.service.",
      "Set User=appuser, Group=appgroup, and Restart=always with RestartSec=5s.",
      "Apply CPU and memory cgroup limits using MemoryMax=500M and CPUQuota=150%."
    ],
    "sampleAnswer": "In /etc/systemd/system/<service>.service, I configure User=nodeapp and Group=nodeapp under [Service] to avoid running as root. I set Restart=always and RestartSec=5 for fault tolerance, ExecStart to the startup command, and environment files via EnvironmentFile. I enforce cgroups resource limits directly inside the unit file using MemoryMax=1G and CPUQuota=100% to prevent noisy neighbor resource starvation.",
    "evaluationCriteria": "Covers security (non-root), resilience (restart policies), and systemd cgroup resource restrictions.",
    "tags": [
      "Linux",
      "systemd",
      "Security",
      "DevOps"
    ],
    "source": "Production Systems Administration"
  },
  {
    "id": "ce-docker-03",
    "role": "Cloud Engineer",
    "domain": "Cloud & DevOps",
    "topic": "Docker & Containers",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between Docker bridge, host, and overlay networking.",
    "expectedPoints": [
      "Bridge: Default single-host network, isolated bridge (docker0), containers communicate via IP/DNS with port mapping (-p).",
      "Host: Container shares host network namespace directly, removing network NAT overhead but forfeiting port isolation.",
      "Overlay: Multi-host network across Docker Swarm / Kubernetes CNI clusters using VXLAN encapsulation."
    ],
    "sampleAnswer": "Bridge mode is the default single-host network providing private virtual interfaces connected to a bridge with NAT port mapping. Host mode bypasses network isolation, binding container processes directly to the host IP for maximum packet throughput. Overlay networking creates a distributed virtual subnet across multiple Docker host nodes using VXLAN tunneling, allowing containers on different physical servers to communicate securely.",
    "evaluationCriteria": "Accurately contrasts single-host NAT isolation, zero-overhead host networking, and VXLAN multi-host overlays.",
    "tags": [
      "Docker",
      "Networking",
      "Containers",
      "DevOps"
    ],
    "source": "Docker Networking Deep Dive"
  },
  {
    "id": "jb-jvm-02",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "JVM Internals",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the JVM Garbage Collection Generational Hypothesis and compare the G1 GC with ZGC.",
    "expectedPoints": [
      "Generational Hypothesis: Most objects die young (Eden & Survivor spaces in Young Gen; Tenured in Old Gen).",
      "G1 GC: Divides heap into regional blocks, does concurrent marking, and collects regions with the most garbage first (Garbage-First) with target pause times (e.g. 200ms).",
      "ZGC: Low-latency GC doing almost all work (marking, relocation) concurrently using colored pointers and load barriers, keeping pause times < 1ms on TB heaps."
    ],
    "sampleAnswer": "The Generational Hypothesis observes that most objects become unreachable shortly after creation. JVM divides the Heap into Young (Eden, S0, S1) and Old generations. G1 GC partitions the heap into equal regions and prioritizes collecting regions containing the highest density of dead objects with predictable pause times. ZGC is an ultra-low-latency concurrent GC using colored pointers and memory load barriers to achieve sub-millisecond pauses even on terabyte-scale heaps.",
    "evaluationCriteria": "Differentiates Young vs Old generation collection, G1 regional compaction, and ZGC concurrent colored pointers.",
    "tags": [
      "Java",
      "JVM",
      "Garbage Collection",
      "G1GC",
      "ZGC"
    ],
    "source": "JVM Performance Tuning"
  },
  {
    "id": "jb-jpa-02",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Hibernate & JPA",
    "difficulty": "Intermediate",
    "type": "Debugging",
    "question": "What is the JPA N+1 Select Problem and what are the 3 best ways to solve it?",
    "expectedPoints": [
      "N+1 occurs when fetching N parent entities triggers N additional separate queries to load a lazy-loaded child collection.",
      "Solution 1: JOIN FETCH in JPQL query.",
      "Solution 2: @EntityGraph annotation defining attribute paths to fetch eagerly.",
      "Solution 3: @BatchSize(size = 25) on the entity collection to load children in batches via SQL 'IN' clauses."
    ],
    "sampleAnswer": "The N+1 problem occurs when querying a parent table (e.g. 1 query for 100 Orders) executes 100 subsequent queries to load each order's Customer entity when accessed lazily. We resolve it using: 1) JPQL 'JOIN FETCH o.customer', 2) JPA @EntityGraph on the Spring Data repository method, or 3) Hibernate @BatchSize(size = 20) which collapses individual queries into SQL 'IN (?, ?, ?)' batch queries.",
    "evaluationCriteria": "Explains lazy loading trigger, SQL explosion, and concrete fixes (JOIN FETCH, EntityGraph, BatchSize).",
    "tags": [
      "Hibernate",
      "JPA",
      "SQL",
      "Performance",
      "N+1"
    ],
    "source": "High-Performance Java Persistence"
  },
  {
    "id": "jb-sec-02",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Authentication & Security",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the Spring Security Filter Chain architecture and how JWT authentication is implemented as a OncePerRequestFilter.",
    "expectedPoints": [
      "Spring Security delegates incoming servlet requests through a chain of Security Filters (DelegatingFilterProxy -> SecurityFilterChain).",
      "Custom JwtAuthenticationFilter extends OncePerRequestFilter, extracts 'Authorization: Bearer <token>', and validates signature/claims.",
      "On success, creates UsernamePasswordAuthenticationToken and stores it in SecurityContextHolder.getContext().setAuthentication()."
    ],
    "sampleAnswer": "Spring Security routes requests through a chain of filters managed by SecurityFilterChain. To implement JWT auth, we create a custom filter extending OncePerRequestFilter placed before UsernamePasswordAuthenticationFilter. It parses the Bearer header, validates JWT signature and expiration via jjwt, extracts user authorities, constructs an Authentication object, and populates SecurityContextHolder to authenticate the current thread request.",
    "evaluationCriteria": "Walks through Filter Chain delegation, OncePerRequestFilter subclassing, and SecurityContextHolder authentication population.",
    "tags": [
      "Spring Security",
      "JWT",
      "Java",
      "Security",
      "Filters"
    ],
    "source": "Spring Security Enterprise Guide"
  },
  {
    "id": "jb-micro-03",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Microservices",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "How do you implement distributed transactions across microservices using the Saga Pattern (Choreography vs Orchestration)?",
    "expectedPoints": [
      "Distributed 2PC (Two-Phase Commit) doesn't scale in microservices; Sagas break transactions into local ACID transactions with compensating actions on failure.",
      "Choreography: Services publish domain events to Kafka/RabbitMQ and react asynchronously. Simple, but hard to trace in complex flows.",
      "Orchestration: Central Saga Orchestrator (e.g. Temporal, Camunda, or dedicated Spring service) coordinates commands, tracks state, and triggers compensating rollbacks."
    ],
    "sampleAnswer": "Because distributed 2PC locks resources and creates tight coupling, we use the Saga pattern where each service executes a local transaction and publishes an event. If a step fails, compensating transactions undo earlier changes in reverse order. In Choreography-based sagas, services listen to message broker events directly. In Orchestration-based sagas, a centralized state machine sends explicit commands and manages compensating rollbacks, providing better visibility for complex multi-step workflows.",
    "evaluationCriteria": "Differentiates 2PC vs Saga, explains compensating rollbacks, and contrasts Choreography vs Orchestration.",
    "tags": [
      "Microservices",
      "Saga Pattern",
      "Distributed Transactions",
      "Kafka"
    ],
    "source": "Microservices Patterns (Chris Richardson)"
  },
  {
    "id": "jb-core-04",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Core Java & OOP",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain Java 8 Streams API: intermediate vs terminal operations, lazy evaluation, and short-circuiting.",
    "expectedPoints": [
      "Intermediate operations (filter, map, sorted, flatMap) are lazy and return a new Stream without executing until a terminal operation is called.",
      "Terminal operations (collect, forEach, reduce, count) trigger pipeline execution and produce a result or side-effect.",
      "Short-circuiting operations (findFirst, anyMatch, limit) can terminate stream processing early without evaluating all elements."
    ],
    "sampleAnswer": "Java Streams process collections declaratively. Intermediate operations (e.g. map, filter) build an execution pipeline lazily without computing elements immediately. When a terminal operation (e.g. collect, reduce) is invoked, the JVM optimizes the pipeline, fusing operations and processing elements one-by-one. Short-circuiting operations like findFirst() or anyMatch() stop evaluation as soon as the condition is satisfied, avoiding unnecessary computations.",
    "evaluationCriteria": "Accurately defines lazy pipeline construction, terminal trigger, and short-circuit optimization.",
    "tags": [
      "Java",
      "Streams",
      "Functional Programming",
      "Java 8"
    ],
    "source": "Java Functional Programming"
  },
  {
    "id": "jb-spring-04",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Spring Boot",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you handle global exception handling and structured API error responses in Spring Boot using @RestControllerAdvice and @ExceptionHandler?",
    "expectedPoints": [
      "Annotate a class with @RestControllerAdvice to intercept exceptions thrown across all @RestControllers.",
      "Define @ExceptionHandler methods for specific exceptions (ResourceNotFoundException, MethodArgumentNotValidException).",
      "Return standardized ResponseEntity<ErrorResponse> containing timestamp, status code, error code, message, and field validation errors."
    ],
    "sampleAnswer": "I create a GlobalExceptionHandler class annotated with @RestControllerAdvice. Inside, I write methods annotated with @ExceptionHandler for specific exceptions (e.g., ResourceNotFoundException -> 404, MethodArgumentNotValidException -> 400). The handler maps errors to a standard ErrorResponse DTO containing timestamp, HTTP status, error message, and a list of field-level validation errors, ensuring uniform JSON error contracts across the API.",
    "evaluationCriteria": "Covers @RestControllerAdvice, specific exception mapping, validation error extraction, and standard JSON error response structures.",
    "tags": [
      "Spring Boot",
      "Exception Handling",
      "REST",
      "API Design"
    ],
    "source": "Spring Boot REST Best Practices"
  },
  {
    "id": "jb-jvm-03",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "JVM Internals",
    "difficulty": "Advanced",
    "type": "Debugging",
    "question": "How do you capture and analyze a Java Thread Dump to identify Deadlocks and CPU-hogging threads?",
    "expectedPoints": [
      "Generate thread dumps using jcmd <PID> Thread.print, jstack <PID>, or kill -3 <PID>.",
      "Inspect thread states: RUNNABLE, BLOCKED (waiting on monitor lock), WAITING, TIMED_WAITING.",
      "The JVM automatically includes a 'Found one Java-level deadlock' summary section at the bottom of the dump identifying circular lock dependencies.",
      "Match high-CPU thread TID from top -H -p <PID> (converted to hex) with the nid (native thread ID) in the thread dump."
    ],
    "sampleAnswer": "I capture thread dumps using jcmd <PID> Thread.print. To diagnose high CPU, I run 'top -H -p <PID>' to find the busy thread PID, convert that decimal PID to hexadecimal, and search for that 'nid=0x...' in the thread dump to see the exact executing Java line. To find deadlocks, I check the bottom of the thread dump where the JVM prints an explicit deadlock analysis report showing which threads hold locks and what locks they are waiting for.",
    "evaluationCriteria": "Explains jcmd/jstack generation, converting top thread ID to hex nid, thread states, and automated JVM deadlock detection.",
    "tags": [
      "Java",
      "JVM",
      "Thread Dump",
      "Deadlocks",
      "Debugging"
    ],
    "source": "JVM Troubleshooting & Diagnostics"
  },
  {
    "id": "jb-col-04",
    "role": "Java Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Collections Framework",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between Comparable and Comparator interfaces in Java with practical code examples.",
    "expectedPoints": [
      "Comparable: Defines natural ordering inside the class itself via int compareTo(T o); modifies the class definition.",
      "Comparator: Defines custom/multiple external sorting strategies via int compare(T o1, T o2); does not modify original class.",
      "Java 8 Comparator.comparing() and .thenComparing() allow expressive chaining of sorting criteria."
    ],
    "sampleAnswer": "Comparable provides natural ordering by having the entity class implement compareTo(T o) (e.g. Employee sorting by ID). Comparator allows defining multiple external, flexible sorting rules without modifying the entity class (e.g., Comparator.comparing(Employee::getSalary).reversed().thenComparing(Employee::getName)). Collections.sort() or List.sort() accepts custom Comparators for dynamic runtime sorting.",
    "evaluationCriteria": "Differentiates single natural ordering vs multiple external strategies, method signatures, and Java 8 chaining.",
    "tags": [
      "Java",
      "Collections",
      "Comparable",
      "Comparator",
      "Sorting"
    ],
    "source": "Core Java Best Practices"
  },
  {
    "id": "da-sql-05",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "SQL",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "Write an SQL query to calculate the MoM (Month-over-Month) revenue growth percentage using LAG().",
    "expectedPoints": [
      "Aggregate monthly revenue with DATE_TRUNC('month', order_date) and SUM(amount).",
      "Use LAG(monthly_rev) OVER (ORDER BY month) to fetch previous month's revenue.",
      "Compute ((current_rev - prev_rev) / prev_rev) * 100 with NULL / zero division handling."
    ],
    "sampleAnswer": "WITH MonthlyRevenue AS (SELECT DATE_TRUNC('month', created_at) AS month, SUM(amount) AS revenue FROM orders GROUP BY 1) SELECT month, revenue, LAG(revenue) OVER (ORDER BY month) AS prev_month_rev, ROUND(((revenue - LAG(revenue) OVER (ORDER BY month)) / LAG(revenue) OVER (ORDER BY month)) * 100, 2) AS mom_growth_pct FROM MonthlyRevenue;",
    "evaluationCriteria": "Uses CTE, DATE_TRUNC, LAG() window function, and accurate growth rate calculation formula.",
    "tags": [
      "SQL",
      "Window Functions",
      "LAG",
      "Revenue Analytics"
    ],
    "source": "Data Analyst Case Study"
  },
  {
    "id": "da-stat-04",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Statistics & Probability",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between Correlation and Causation with a practical business example, and how do you prove causation?",
    "expectedPoints": [
      "Correlation: Statistical association/co-occurrence between two variables (e.g. ice cream sales and shark attacks both rise in summer due to temperature).",
      "Causation: A change in variable X directly causes a change in variable Y.",
      "To prove causation: Run controlled Randomized Controlled Trials (A/B Tests), or use quasi-experimental methods like Difference-in-Differences (DiD) or Instrumental Variables."
    ],
    "sampleAnswer": "Correlation indicates two variables move together, while causation proves one directly produces changes in the other. For example, marketing email opens and subscription renewals may correlate because loyal users open emails, not necessarily because the email caused the renewal. The gold standard to prove causality is a Randomized Controlled Trial (A/B Testing), where confounding variables are eliminated by randomly assigning users to control and treatment groups.",
    "evaluationCriteria": "Clear explanation of confounding variables, realistic business example, and randomized experiments for causal inference.",
    "tags": [
      "Statistics",
      "Causation",
      "Correlation",
      "Experimentation"
    ],
    "source": "Quantitative Analysis Interview"
  },
  {
    "id": "da-py-03",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Pandas & Python",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you detect and handle missing data in Pandas (dropna vs fillna, imputation strategies)?",
    "expectedPoints": [
      "Detection: df.isna().sum(), df.info(), or visualizing missingness with missingno.",
      "Removal: df.dropna(subset=['critical_col']) when missingness is low and random (<2%).",
      "Imputation: Mean/Median for numerical skewed distributions, Mode for categorical, or predictive imputation (KNNImputer) for complex multi-variable relationships."
    ],
    "sampleAnswer": "I identify missing values using df.isna().sum(). If missing data is under 2% and completely at random, dropping rows with dropna() is acceptable. Otherwise, I apply imputation: for skewed numerical features, fill with median (df['age'].fillna(df['age'].median())) to resist outliers; for categorical features, fill with mode or 'Unknown'; and for time-series, use forward fill (ffill). In advanced modeling, I use Scikit-Learn's KNNImputer.",
    "evaluationCriteria": "Differentiates deletion vs imputation strategies, median vs mean for skewed data, and time-series forward filling.",
    "tags": [
      "Pandas",
      "Python",
      "Data Cleaning",
      "Imputation"
    ],
    "source": "Data Cleaning & Preprocessing"
  },
  {
    "id": "da-viz-03",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Data Visualization",
    "difficulty": "Intermediate",
    "type": "Scenario-Based",
    "question": "How do you design an Executive KPI Dashboard in Power BI or Tableau that enables actionable drill-downs?",
    "expectedPoints": [
      "Top-level Summary: Place primary North Star KPIs (MRR, Active Users, Churn Rate) in big bold numbers at the top.",
      "Visual Hierarchy: Use 3-5 high-level charts in the center showing trendlines and dimensional breakdown (region, segment).",
      "Interactivity & Drill-down: Implement cross-filtering, date range slicers, and hierarchical drill-downs (Year -> Quarter -> Month -> SKU) rather than cluttering the screen.",
      "Actionability: Add benchmark/target variance indicators (red/green delta vs quota)."
    ],
    "sampleAnswer": "I structure executive dashboards following visual hierarchy: high-level KPI cards at the top showing current metrics against targets with color-coded trend deltas (+5% vs Q1). The main canvas has 3 to 4 clean charts (e.g., monthly revenue trend and product category distribution). I enable cross-filtering and interactive drill-downs (e.g., clicking a region filters product SKUs) to let stakeholders investigate root causes without overwhelming them with raw tables.",
    "evaluationCriteria": "Focuses on executive glanceability, KPI cards with target variance, clean color palettes, and interactive drill-down workflows.",
    "tags": [
      "Power BI",
      "Tableau",
      "Dashboard Design",
      "KPIs"
    ],
    "source": "BI & Dashboard Architecture"
  },
  {
    "id": "da-biz-03",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Business Analysis & Metrics",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "Explain Retention Cohort Analysis and how you identify product-market fit or user churn inflection points.",
    "expectedPoints": [
      "Cohort: Group of users who performed a common action in a given timeframe (e.g., signed up in January 2024).",
      "Retention Matrix: Tracks percentage of active users across Day 1, Day 7, Day 30, Month 1, Month 2...",
      "Product-Market Fit is indicated when the retention curve flattens asymptotically parallel to the X-axis rather than dropping to zero."
    ],
    "sampleAnswer": "A retention cohort groups users by their signup month and tracks the percentage who remain active in subsequent months (Month 1, Month 2, Month 3). When visualized as a triangle heatmap or line chart, a healthy product with product-market fit shows retention curves that flatten out to a stable plateau (e.g., 25% recurring active users). A curve that continues declining toward zero indicates ongoing product leaks or bad acquisition channels.",
    "evaluationCriteria": "Explains cohort definition, retention decay curve flattening as product-market fit indicator, and churn diagnosis.",
    "tags": [
      "Cohort Analysis",
      "Retention",
      "SaaS",
      "Product Analytics"
    ],
    "source": "Growth & Product Analytics"
  },
  {
    "id": "da-sql-06",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "SQL",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is the difference between INNER JOIN, LEFT JOIN, FULL OUTER JOIN, and CROSS JOIN?",
    "expectedPoints": [
      "INNER JOIN: Returns only matching rows present in both tables.",
      "LEFT JOIN: Returns all rows from left table and matching rows from right table (NULL if no match).",
      "FULL OUTER JOIN: Returns all rows when there is a match in either left or right table.",
      "CROSS JOIN: Cartesian product of all rows from both tables (N × M rows)."
    ],
    "sampleAnswer": "INNER JOIN selects records with matching values in both tables. LEFT JOIN returns all rows from the left table alongside matching right-table rows, populating NULLs for non-matches (useful for finding inactive users: WHERE right.id IS NULL). FULL OUTER JOIN combines all rows from both tables, filling NULLs on either side where matches fail. CROSS JOIN computes the Cartesian product, multiplying every row in table A with every row in table B.",
    "evaluationCriteria": "Accurately defines row matching, NULL filling behavior, and practical use cases.",
    "tags": [
      "SQL",
      "Joins",
      "Database",
      "Analytics"
    ],
    "source": "SQL Fundamentals for Analysts"
  },
  {
    "id": "da-stat-05",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Statistics & Probability",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is a p-value in hypothesis testing and what does it mean if p < 0.05?",
    "expectedPoints": [
      "p-value is the probability of obtaining test results at least as extreme as observed results, assuming the null hypothesis is true.",
      "p < 0.05 (alpha threshold) means there is less than a 5% chance the observed difference occurred purely by random chance.",
      "We reject the null hypothesis and declare the result statistically significant."
    ],
    "sampleAnswer": "A p-value measures the probability of observing our sample data (or something more extreme) assuming that the null hypothesis (no real effect) is true. If p < 0.05, it indicates that the observed difference is unlikely to be the result of random sampling variation alone (less than 5% probability), leading us to reject the null hypothesis in favor of the alternative hypothesis with 95% confidence.",
    "evaluationCriteria": "Provides precise definition (conditional on null hypothesis being true) and avoids common misconceptions.",
    "tags": [
      "Statistics",
      "p-value",
      "Hypothesis Testing",
      "Significance"
    ],
    "source": "Statistical Foundations"
  },
  {
    "id": "da-py-04",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Pandas & Python",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you use groupby() and agg() in Pandas to compute multi-column custom summary statistics?",
    "expectedPoints": [
      "Use df.groupby(['category', 'region']).agg(...) syntax.",
      "Pass dictionaries of column to list of aggregation functions (e.g. {'revenue': ['sum', 'mean'], 'order_id': 'nunique'}).",
      "Flatten resulting multi-level hierarchical columns using df.columns = ['_'.join(c) for c in df.columns]."
    ],
    "sampleAnswer": "In Pandas, we group data across dimensions and apply multiple aggregate functions simultaneously: df.groupby(['region', 'category']).agg(total_sales=('revenue', 'sum'), avg_order=('revenue', 'mean'), unique_customers=('user_id', 'nunique')).reset_index(). Named aggregation creates clean, single-level column headers directly without having to manually flatten multi-index columns.",
    "evaluationCriteria": "Demonstrates groupby syntax, named aggregation tuples or dictionary mappings, and index resetting.",
    "tags": [
      "Pandas",
      "Python",
      "Aggregation",
      "Data Manipulation"
    ],
    "source": "Data Wrangling with Python"
  },
  {
    "id": "da-biz-04",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Business Analysis & Metrics",
    "difficulty": "Intermediate",
    "type": "Scenario-Based",
    "question": "How do you conduct Funnel Conversion Analysis for an e-commerce checkout flow to identify major drop-off points?",
    "expectedPoints": [
      "Define sequential funnel stages: Homepage -> Product Page -> Add to Cart -> Initiate Checkout -> Payment -> Order Complete.",
      "Calculate step-to-step conversion rate (Users in Step N / Users in Step N-1) and overall conversion rate.",
      "Segment drop-offs by device (Mobile vs Desktop), browser, and traffic source to identify checkout UX or technical bottlenecks."
    ],
    "sampleAnswer": "I map out the user conversion funnel: Product View -> Add to Cart -> Begin Checkout -> Payment Complete. For each step, I measure both the drop-off count and stage conversion rate. If the data shows a 70% drop-off between Add to Cart and Payment, I segment by device type, payment gateway, and page load speed to uncover whether form friction, unexpected shipping fees, or mobile checkout bugs are causing the loss.",
    "evaluationCriteria": "Identifies sequential funnel stages, step-by-step conversion formulas, and diagnostic segmentation.",
    "tags": [
      "Funnel Analysis",
      "Conversion Rate",
      "E-Commerce",
      "Product Analytics"
    ],
    "source": "E-Commerce Growth Analytics"
  },
  {
    "id": "fe-html-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "HTML & CSS",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain the CSS Box Model and the practical differences between content-box and border-box sizing.",
    "expectedPoints": [
      "Box model consists of content, padding, border, and margin.",
      "content-box calculates width = content only; padding and borders add onto the element total width.",
      "border-box includes padding and border within the declared width/height, preventing layout overflow bugs."
    ],
    "sampleAnswer": "The CSS Box Model defines how elements render in space: Content, Padding, Border, and Margin. With the default content-box, specifying width: 300px means any added padding or borders expand the physical space taken up on screen. In contrast, box-sizing: border-box absorbs padding and border into the 300px width, which makes responsive grid calculations far more predictable and prevents unintentional row breaks.",
    "evaluationCriteria": "Clearly explains padding/border inclusion, total width calculation, and why universal border-box reset is standard.",
    "tags": [
      "CSS",
      "Box Model",
      "Layout",
      "Web Basics"
    ],
    "source": "Core Frontend Fundamentals"
  },
  {
    "id": "fe-html-02",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "HTML & CSS",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How does CSS Flexbox differ from CSS Grid, and what architectural rule determines when to use each?",
    "expectedPoints": [
      "Flexbox is one-dimensional (handles content in a single row OR single column).",
      "Grid is two-dimensional (handles layout across rows AND columns simultaneously).",
      "Use Flexbox for component-level alignment (navbars, button groups); use Grid for macro page layouts and card galleries."
    ],
    "sampleAnswer": "Flexbox is designed for 1-dimensional layout distribution along either the main axis or cross axis, making it ideal for flexible component bars, tabs, or vertically centering items. CSS Grid is 2-dimensional, allowing you to define precise tracks across rows and columns at the same time. The standard rule of thumb is: use Grid for page-level structural framing and multi-row card layouts, and Flexbox for aligning content inside individual components.",
    "evaluationCriteria": "Identifies 1D vs 2D paradigm and provides clear component vs macro layout heuristics.",
    "tags": [
      "CSS",
      "Flexbox",
      "CSS Grid",
      "Responsive Design"
    ],
    "source": "Industry Standard Layout Architecture"
  },
  {
    "id": "fe-html-03",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "HTML & CSS",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is CSS Specificity, how is it calculated, and how do you avoid specificity wars in large codebases?",
    "expectedPoints": [
      "Specificity hierarchy: Inline styles (1000) > IDs (100) > Classes/attributes/pseudo-classes (10) > Elements/pseudo-elements (1).",
      "!important overrides normal cascades but creates maintainability hazards.",
      "Avoid specificity wars using methodologies like BEM (Block Element Modifier), CSS Modules, or CSS-in-JS utility classes."
    ],
    "sampleAnswer": "CSS Specificity determines which styling rule wins when multiple rules target the same element. It calculates as a tuple: inline styles have highest weight (1,0,0,0), followed by ID selectors (0,1,0,0), class/attribute selectors (0,0,1,0), and tag selectors (0,0,0,1). To avoid specificity debt in team codebases, avoid nesting ID selectors, keep selectors flat, adopt BEM naming conventions, and use scoped CSS Modules instead of cascading global overrides.",
    "evaluationCriteria": "Explains specificity weights accurately and proposes modular CSS architectures.",
    "tags": [
      "CSS",
      "Specificity",
      "Cascade",
      "BEM"
    ],
    "source": "Frontend Technical Interview"
  },
  {
    "id": "fe-perf-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "Frontend Performance",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "What are Core Web Vitals (LCP, INP, CLS), and what actionable engineering strategies improve each metric?",
    "expectedPoints": [
      "LCP (Largest Contentful Paint) measures perceived loading speed; target < 2.5s.",
      "INP (Interaction to Next Paint) replaces FID, measuring responsiveness to user interactions; target < 200ms.",
      "CLS (Cumulative Layout Shift) measures visual stability; target < 0.1.",
      "Fixes: LCP -> optimize hero images/fonts/SSR; INP -> yield to main thread with requestIdleCallback; CLS -> reserve aspect-ratio spaces for images and ads."
    ],
    "sampleAnswer": "Core Web Vitals are Google-standard user experience metrics: 1) LCP measures loading time of the largest viewport element, optimized via CDN caching, preloading hero assets, and server-side rendering. 2) INP evaluates user input lag across the entire page lifecycle, improved by breaking long JS tasks into micro-chunks with scheduler.yield() or requestIdleCallback. 3) CLS measures unexpected layout jumps, solved by defining explicit width/height or aspect-ratio on images and dynamic embeds.",
    "evaluationCriteria": "Correctly identifies all 3 metrics with thresholds and provides concrete code/architecture remediations.",
    "tags": [
      "Performance",
      "Core Web Vitals",
      "LCP",
      "CLS",
      "INP"
    ],
    "source": "Advanced Frontend Architecture"
  },
  {
    "id": "fe-perf-02",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "Frontend Performance",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain Critical Rendering Path (CRP) and how HTML, CSSOM, and JS parsing affect First Contentful Paint (FCP).",
    "expectedPoints": [
      "Steps: DOM construction, CSSOM construction, Render Tree creation, Layout (Reflow), and Paint.",
      "CSS is render-blocking; browsers pause rendering until all stylesheet links in <head> are downloaded and parsed.",
      "JavaScript is parser-blocking by default; script execution pauses HTML tokenizer unless marked with async or defer."
    ],
    "sampleAnswer": "The Critical Rendering Path is the sequence of steps browsers take to convert code into screen pixels: DOM + CSSOM -> Render Tree -> Layout -> Paint. CSS blocks rendering because the browser refuses to render unstyled content (FOUC). JavaScript tags block DOM parsing unless marked with defer (executes in order after DOM parsing) or async (executes immediately upon download), which keeps the main thread unblocked for rapid FCP.",
    "evaluationCriteria": "Covers DOM/CSSOM render tree construction and blocking nature of stylesheets and scripts.",
    "tags": [
      "Browser Internals",
      "CRP",
      "Rendering",
      "Performance"
    ],
    "source": "Web Performance Interview"
  },
  {
    "id": "fe-ts-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "TypeScript",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is the difference between \"interface\" and \"type\" in TypeScript, and when should you choose one over the other?",
    "expectedPoints": [
      "Interfaces are extendable via declaration merging; types cannot be reopened once defined.",
      "Types can define union types, primitives, tuples, and mapped types directly.",
      "Use interfaces for public object contracts/APIs and component props that benefit from extension; use types for complex unions, intersections, and utility types."
    ],
    "sampleAnswer": "Both can shape object structures, but interfaces support declaration merging (multiple declarations with the same name merge automatically) and clean OOP extension with \"extends\". Type aliases are more versatile for composing union types (A | B), tuples, primitives, and conditional mapped types. In production codebases, interfaces are preferred for public domain models and component props, while type aliases handle transformations and union discriminators.",
    "evaluationCriteria": "Identifies declaration merging, union types, and architectural guidelines.",
    "tags": [
      "TypeScript",
      "Types",
      "Interfaces",
      "Static Typing"
    ],
    "source": "TypeScript Interview Question"
  },
  {
    "id": "fe-a11y-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "Accessibility",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is semantic HTML and how does it impact screen readers, keyboard navigation, and SEO?",
    "expectedPoints": [
      "Semantic elements (<main>, <nav>, <article>, <button>) communicate meaning and purpose to the browser and accessibility tree.",
      "Screen readers navigate via landmark roles automatically created by semantic tags.",
      "Standard buttons provide native keyboard focus and Enter/Space trigger handling that <div> tags lack unless heavily retrofitted with tabindex and ARIA."
    ],
    "sampleAnswer": "Semantic HTML uses elements according to their intended meaning rather than generic <div> tags. For example, using <button> rather than <div onClick> gives free keyboard accessibility (Tab focusability and Enter/Space event triggering) and exposes the \"button\" role to the accessibility tree. Assistive technologies use semantic landmarks (<nav>, <main>, <header>) to let visually impaired users jump directly to sections, while search engine crawlers use semantic structure to index page hierarchy accurately.",
    "evaluationCriteria": "Contrasts native semantic element benefits with inaccessible div tags and mentions accessibility tree and keyboard support.",
    "tags": [
      "Accessibility",
      "ARIA",
      "Semantic HTML",
      "WCAG"
    ],
    "source": "Accessibility & Design Systems"
  },
  {
    "id": "do-cicd-01",
    "role": "DevOps Engineer",
    "domain": "DevOps Engineering",
    "topic": "CI/CD",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Describe the differences between Continuous Integration, Continuous Delivery, and Continuous Deployment.",
    "expectedPoints": [
      "Continuous Integration (CI): Developers merge code frequently; automated builds and tests run on every commit.",
      "Continuous Delivery (CD): Code changes are automatically built, tested, and staged for release, but deployment to production requires manual human approval.",
      "Continuous Deployment: Every change that passes automated test stages is released directly to production automatically with zero manual gates."
    ],
    "sampleAnswer": "Continuous Integration focuses on automated build validation, linting, and unit tests whenever branches are merged to detect integration bugs early. Continuous Delivery takes verified code and packages it into deployable artifacts (like Docker images) deployed to staging, where a human product owner clicks \"Approve\" for production release. Continuous Deployment eliminates that manual gate: every green pipeline commit automatically deploys straight to production servers.",
    "evaluationCriteria": "Distinguishes automated testing vs automated staging vs zero-manual-gate production rollout.",
    "tags": [
      "CI/CD",
      "DevOps",
      "Automation",
      "Release Management"
    ],
    "source": "Core DevOps Concepts"
  },
  {
    "id": "do-obs-01",
    "role": "DevOps Engineer",
    "domain": "DevOps Engineering",
    "topic": "Observability",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain the Three Pillars of Observability (Metrics, Logs, Traces) and how distributed tracing works across microservices.",
    "expectedPoints": [
      "Metrics: Numeric aggregated data over time (CPU %, request count, latency percentiles p95/p99).",
      "Logs: Discrete timestamped text events recording what happened.",
      "Traces: Tracks request lifecycle across distributed service boundaries using correlation IDs (TraceId, SpanId).",
      "Distributed tracing injects context headers (e.g., W3C Trace Context) into HTTP/gRPC requests, assembling a timeline visualization of downstream latency."
    ],
    "sampleAnswer": "Metrics give system-level health trends (like a spike in 5xx error rate or 99th percentile response times). Logs tell you exactly what occurred at a specific moment with stack traces. Traces provide the end-to-end journey of a single user request as it traverses API gateways, auth microservices, and databases. Distributed tracing assigns a unique Trace ID at the entry point and propagates Span IDs in HTTP headers (traceparent) so tools like OpenTelemetry and Jaeger can reconstruct the exact call tree and spot bottleneck services.",
    "evaluationCriteria": "Defines all three pillars with clear operational contexts and explains trace context propagation mechanisms.",
    "tags": [
      "Observability",
      "OpenTelemetry",
      "Metrics",
      "Distributed Tracing"
    ],
    "source": "Site Reliability Engineering"
  },
  {
    "id": "do-k8s-01",
    "role": "DevOps Engineer",
    "domain": "DevOps Engineering",
    "topic": "Kubernetes",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How do Kubernetes Deployments, ReplicaSets, and Pods relate to one another during a rolling update?",
    "expectedPoints": [
      "Pod is the smallest deployable compute unit containing one or more containers.",
      "ReplicaSet ensures a specified number of identical Pod replicas are running at any given time.",
      "Deployment is a higher-level controller that manages ReplicaSets declaratively, creating a new ReplicaSet during updates and gradually scaling down the old one."
    ],
    "sampleAnswer": "In Kubernetes, a Pod is the atomic container instance. A ReplicaSet manages the lifecycle and replication count of a set of identical Pods. A Deployment manages ReplicaSets. When you update an image tag in a Deployment manifest, the Deployment controller creates a brand new ReplicaSet with the new image, scales up new Pods incrementally, and once readiness probes pass, scales down Pods from the old ReplicaSet. This ensures zero downtime during application upgrades.",
    "evaluationCriteria": "Explains the 3-tier hierarchy and the dual ReplicaSet rolling transition mechanism.",
    "tags": [
      "Kubernetes",
      "Pods",
      "Deployments",
      "RollingUpdate"
    ],
    "source": "Container Orchestration Interview"
  },
  {
    "id": "da-bi-01",
    "role": "Data Analyst",
    "domain": "Data Analytics",
    "topic": "Data Visualization",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "When should you use a Bar Chart versus a Line Chart, Scatter Plot, or Heatmap when communicating insights to business executives?",
    "expectedPoints": [
      "Bar Chart: Comparing discrete categorical groups or ranking magnitudes.",
      "Line Chart: Displaying continuous trends, change over time, or temporal progression.",
      "Scatter Plot: Identifying relationships, correlations, and outliers between two continuous variables.",
      "Heatmap: Displaying high-density cross-tabulations or matrix correlations through color intensity."
    ],
    "sampleAnswer": "Visual chart selection depends on the data relationship: 1) Use Bar Charts for comparing discrete discrete categories (e.g. revenue by region or department rankings). 2) Use Line Charts for showing continuous changes over chronological time (e.g. monthly churn trends or daily active users). 3) Use Scatter Plots to analyze correlation and anomalies between two numerical variables (e.g. customer tenure vs lifetime value). 4) Use Heatmaps for multi-dimensional matrix distributions (e.g. hour-of-day vs day-of-week server load).",
    "evaluationCriteria": "Provides distinct visual heuristics and articulates communication clarity for decision makers.",
    "tags": [
      "Data Visualization",
      "Power BI",
      "Executive Reporting",
      "Dashboarding"
    ],
    "source": "Data Storytelling & Visualization"
  },
  {
    "id": "jb-jvm-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend Engineering",
    "topic": "JVM Internals",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain JVM Memory Architecture: Heap (Young, Old Generation), Metaspace, Stack, and how Garbage Collection occurs in G1GC.",
    "expectedPoints": [
      "Heap stores all instantiated objects; split into Young (Eden, Survivor spaces S0/S1) and Old/Tenured generation.",
      "Metaspace stores class metadata, method bytecode, and static variables outside the heap in native memory.",
      "Thread Stack stores local primitive variables, method frame calls, and object references.",
      "G1GC divides the heap into equal-sized virtual regions, prioritizing regions with the most garbage first for predictable low-pause sweeps."
    ],
    "sampleAnswer": "The JVM divides memory into: 1) Thread Stack: stores local primitives and frame pointers per thread, destroyed automatically when methods return. 2) Heap: shared memory holding object instances. Young gen holds new objects; survivors move between S0/S1 and promote to Old Gen after a threshold age (MaxTenuringThreshold). 3) Metaspace: native memory holding class definitions and constants. G1 Garbage Collector partitions the heap into hundreds of 1-32MB regions and collects regions with the highest garbage density first to maintain tight pause time targets (MaxGCPauseMillis).",
    "evaluationCriteria": "Clearly diagrams Stack vs Heap vs Metaspace and explains generational promotion and G1GC region-based collection.",
    "tags": [
      "Java",
      "JVM",
      "Garbage Collection",
      "Memory Architecture"
    ],
    "source": "Senior Java Backend Interview"
  },
  {
    "id": "jb-micro-01",
    "role": "Java Backend Developer",
    "domain": "Java Backend Engineering",
    "topic": "Microservices",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "How do you implement the Saga Pattern in distributed microservices to maintain eventual consistency without two-phase commit (2PC)?",
    "expectedPoints": [
      "2PC causes database locking and scalability bottlenecks across distributed systems.",
      "Saga pattern organizes a distributed transaction into a sequence of local transactions in individual services.",
      "Choreography: Services publish domain events and listen to other service events asynchronously.",
      "Orchestration: A central Saga Orchestrator coordinates transaction steps and initiates Compensating Transactions on failure."
    ],
    "sampleAnswer": "Because two-phase commit locks database tables across network partitions, modern microservices use the Saga Pattern. A Saga executes local ACID transactions in sequence. If step 3 (e.g. payment processing) fails, the system triggers backward Compensating Transactions to reverse steps 1 and 2 (e.g. release reserved inventory). Sagas can be Orchestrated (a state machine coordinator sends direct commands to microservices) or Choreographed (services publish and react to events via message brokers like Kafka).",
    "evaluationCriteria": "Explains failure handling via compensating transactions and contrasts Orchestration with Choreography.",
    "tags": [
      "Microservices",
      "Distributed Systems",
      "Saga Pattern",
      "Architecture"
    ],
    "source": "Enterprise System Design"
  },
  {
    "id": "mern-fs-js-01",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain the difference between var, let, and const in JavaScript, focusing on scope, hoisting, and reassignability.",
    "expectedPoints": [
      "var is function-scoped while let and const are block-scoped.",
      "var is hoisted and initialized with undefined; let and const are hoisted into the Temporal Dead Zone (TDZ).",
      "const variables cannot be reassigned (though object properties remain mutable)."
    ],
    "sampleAnswer": "var is scoped to the enclosing function and hoisted with undefined. let and const are block-scoped ({}) and enter a Temporal Dead Zone from the start of the block until declaration. const additionally prevents variable identifier reassignment.",
    "evaluationCriteria": "Accurately distinguishes lexical block scoping, TDZ behavior, and reference vs value immutability.",
    "tags": [
      "JavaScript",
      "Scope",
      "Hoisting",
      "ES6"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "mern-fs-js-02",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "How do JavaScript closures work and what is a practical real-world use case for them in modern web development?",
    "expectedPoints": [
      "A closure is the combination of a function bundled together with references to its lexical environment.",
      "Inner functions retain access to outer function variables even after the outer function has executed and returned.",
      "Practical use cases include data privacy (private state/factory functions), memoization, and partial application/currying."
    ],
    "sampleAnswer": "A closure occurs when an inner function retains access to the variables of its outer enclosing scope even after the outer function has returned. A classic real-world use case is encapsulating private state in module factories or event handlers where specific state must be remembered across asynchronous events without polluting the global scope.",
    "evaluationCriteria": "Mentions lexical scoping, garbage collection retention, and practical patterns like private variables or handlers.",
    "tags": [
      "JavaScript",
      "Closures",
      "Scope",
      "Encapsulation"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "mern-fs-js-03",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the JavaScript Event Loop, Call Stack, Task Queue (Macrotasks), and Microtask Queue with execution order.",
    "expectedPoints": [
      "JavaScript is single-threaded; asynchronous operations are managed by the host environment and event loop.",
      "Call stack executes synchronous code to completion.",
      "Microtasks (Promise.then, MutationObserver, queueMicrotask) take priority and are completely drained after each macrotask before processing the next macrotask (setTimeout, setInterval, I/O)."
    ],
    "sampleAnswer": "The Event Loop coordinates the Call Stack and task queues. When synchronous code runs on the Call Stack, async tasks are delegated to Web APIs. When resolved, Promise callbacks enter the Microtask Queue while timer callbacks enter the Macrotask Queue. Once the call stack empties, the event loop drains ALL microtasks first before executing the next macrotask.",
    "evaluationCriteria": "Clearly explains synchronous execution on call stack, priority of microtask queue over macrotask queue, and non-blocking I/O.",
    "tags": [
      "JavaScript",
      "Event Loop",
      "Async",
      "Microtasks"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "mern-fs-js-04",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is prototypal inheritance in JavaScript and how does it differ from classical class-based inheritance in Java or C++?",
    "expectedPoints": [
      "Objects inherit directly from other objects via their [[Prototype]] internal link (__proto__).",
      "Property lookup travels up the prototype chain until found or null is reached.",
      "ES6 class syntax is syntactic sugar over prototype chains, rather than creating separate blueprint classes."
    ],
    "sampleAnswer": "In JavaScript, objects have an internal link to a prototype object. When accessing a property, the runtime checks the instance first, then its prototype, up to Object.prototype. Unlike classical languages where classes define blueprints and copy structures at instantiation, JS objects link dynamically in memory.",
    "evaluationCriteria": "Understands dynamic property resolution, prototype chain hierarchy, and the syntactic sugar nature of ES6 classes.",
    "tags": [
      "JavaScript",
      "Prototypes",
      "OOP",
      "Inheritance"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "mern-fs-js-05",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "How does garbage collection work in V8 engine and what are common sources of memory leaks in single page applications?",
    "expectedPoints": [
      "V8 uses Mark-and-Sweep with generational collection (Young generation Scavenge vs Old generation Mark-Sweep-Compact).",
      "Memory leaks arise from uncleared timers (setInterval), forgotten event listeners on unmounted elements, detached DOM nodes held in closures, and growing global caches."
    ],
    "sampleAnswer": "V8 manages memory using Generational Garbage Collection: short-lived objects live in the Nursery and are quickly collected using Scavenger, while surviving objects are promoted to the Old Space and collected via Mark-Sweep-Compact. Common frontend memory leaks happen when unmounted React components leave active event listeners, intervals, or detached DOM references inside closures.",
    "evaluationCriteria": "Discusses generational collection, mark-sweep algorithm, and identifies tangible leak causes in modern SPAs.",
    "tags": [
      "JavaScript",
      "V8",
      "Performance",
      "Memory Management"
    ],
    "source": "Advanced Technical Interview Question"
  },
  {
    "id": "mern-fs-js-06",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you implement a debounce function from scratch in JavaScript, and in what frontend scenarios is it essential?",
    "expectedPoints": [
      "Debouncing delays function execution until a specified quiet period has elapsed without any new invocations.",
      "Implemented using setTimeout, clearTimeout, and returning a closure that preserves \"this\" and arguments.",
      "Key use cases: Search autocomplete inputs, window resize listeners, and form auto-save triggers."
    ],
    "sampleAnswer": "A debounce function takes a callback and delay in milliseconds, returning a wrapper function that clears the previous timer with clearTimeout and schedules a new setTimeout. Essential for live search inputs to prevent making 20 API requests while the user types \"laptop\".",
    "evaluationCriteria": "Explains timer clearing mechanism, closures for timeout ID retention, and search input optimization use case.",
    "tags": [
      "JavaScript",
      "Debounce",
      "Optimization",
      "DOM Events"
    ],
    "source": "Coding & Practical Interview Question"
  },
  {
    "id": "mern-fs-js-07",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Advanced",
    "type": "Debugging",
    "question": "Debug this async snippet: Why does a forEach loop with async/await execute all iterations concurrently instead of sequentially, and how do you fix it?",
    "expectedPoints": [
      "Array.prototype.forEach does not await the returned Promises from its callback; it fires callbacks synchronously without waiting.",
      "Fix using a standard for...of loop or for loop which pauses each iteration with await.",
      "Alternative: Use Promise.all if parallel execution is explicitly desired."
    ],
    "sampleAnswer": "Array.prototype.forEach executes its callback synchronously for each item and ignores the Promise returned by an async callback. To run async operations sequentially in order, use a modern for...of loop with await inside the loop body, or use reduce chaining.",
    "evaluationCriteria": "Identifies forEach lack of Promise handling and provides for...of sequential solution or Promise.all parallel solution.",
    "tags": [
      "JavaScript",
      "Async/Await",
      "Debugging",
      "Promises"
    ],
    "source": "Real-world Debugging Scenario"
  },
  {
    "id": "mern-fs-js-08",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "What is the difference between shallow copy and deep copy in JavaScript, and what are the best ways to achieve each?",
    "expectedPoints": [
      "Shallow copy clones top-level properties; nested objects/arrays retain references to the original.",
      "Deep copy recursively duplicates all nested references into entirely new objects.",
      "Shallow methods: Spread operator ({...obj}), Object.assign(). Deep methods: structuredClone(), JSON.parse(JSON.stringify()) (with limitations on Dates/functions)."
    ],
    "sampleAnswer": "A shallow copy copies only top-level properties; nested objects still share memory references. A deep copy clones the full nested hierarchy. In modern JavaScript, structuredClone() is the native, reliable standard for deep cloning without the serialization bugs of JSON.parse(JSON.stringify()).",
    "evaluationCriteria": "Accurately explains reference sharing in nested structures and identifies structuredClone() and spread operators.",
    "tags": [
      "JavaScript",
      "Objects",
      "Immutability",
      "Memory"
    ],
    "source": "Core Fundamentals Question"
  },
  {
    "id": "mern-fs-js-09",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain how Promises work under the hood, including the three Promise states, chaining, and error propagation.",
    "expectedPoints": [
      "States: Pending, Fulfilled, Rejected. Once settled, state is immutable.",
      ".then() returns a new Promise, allowing chaining and transformation of resolved values.",
      "Errors bubble down the chain until caught by a .catch() handler or unhandledrejection."
    ],
    "sampleAnswer": "A Promise is an object representing the eventual completion or failure of an async operation. It starts in Pending and transitions once to Fulfilled or Rejected. Each .then() callback returns a new Promise, allowing linear async pipelines where any unhandled rejection skips ahead to the nearest .catch() handler.",
    "evaluationCriteria": "Explains state transitions, Promise chaining returning new promises, and catch bubbling.",
    "tags": [
      "JavaScript",
      "Promises",
      "Async",
      "Error Handling"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "mern-fs-js-10",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "JavaScript",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain the differences between CommonJS (require/module.exports) and ES Modules (import/export) in Node.js and browser runtimes.",
    "expectedPoints": [
      "CommonJS is synchronous and resolves modules at runtime; ES Modules are asynchronous and statically analyzed at parse/compile time.",
      "ES Modules enable tree-shaking (dead code elimination) because dependencies are known before execution.",
      "Top-level await is natively supported in ESM but not in CommonJS."
    ],
    "sampleAnswer": "CommonJS loads modules synchronously at runtime using require(), which means imports can be dynamic but prevents static analysis. ES Modules use static import syntax parsed before execution, enabling build tools to perform tree-shaking and dead-code elimination. ESM also natively supports top-level await and runs in strict mode by default.",
    "evaluationCriteria": "Highlights static analysis vs dynamic runtime loading, tree-shaking capabilities, and synchronous vs asynchronous evaluation.",
    "tags": [
      "JavaScript",
      "Modules",
      "ESM",
      "CommonJS",
      "Node.js"
    ],
    "source": "Modern JavaScript Architecture"
  },
  {
    "id": "mern-fs-react-01",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "How does the React Virtual DOM work, and how does the reconciliation algorithm update the real DOM efficiently?",
    "expectedPoints": [
      "Virtual DOM is a lightweight in-memory JavaScript representation of the actual DOM tree.",
      "When state/props change, React renders a new VDOM tree and diffs it against the previous tree using heuristic O(n) reconciliation.",
      "Batched updates are applied to the real browser DOM in a single pass to minimize costly layout reflows and repaints."
    ],
    "sampleAnswer": "React maintains a Virtual DOM in memory. When state updates occur, React computes a new virtual tree and runs its Diffing Algorithm (React Fiber) to detect exact changes. It then batches only the modified nodes to the real DOM, avoiding full page recalculations and minimizing expensive browser reflows.",
    "evaluationCriteria": "Explains in-memory representation, diffing heuristics (keys, element types), and batched DOM mutations.",
    "tags": [
      "React",
      "Virtual DOM",
      "Reconciliation",
      "Fiber"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "mern-fs-react-02",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "What are the rules of React Hooks and why must hooks never be called inside loops, conditions, or nested functions?",
    "expectedPoints": [
      "Rules: 1) Only call hooks at the top level of functional components or custom hooks; 2) Do not call inside loops/conditions/nested functions.",
      "React relies on the exact invocation order of hooks across renders to match state variables to their corresponding internal Fiber linked-list nodes."
    ],
    "sampleAnswer": "React relies on call order to track hook state internally. Each component Fiber maintains a linked list of hook records. If a hook is inside an \"if\" statement that evaluates to false on a subsequent render, the hook index misaligns, corrupting the entire component state.",
    "evaluationCriteria": "Mentions top-level invocation rule and Fiber internal linked-list indexing based on call order.",
    "tags": [
      "React",
      "Hooks",
      "Fiber",
      "State Management"
    ],
    "source": "Core React Fundamentals"
  },
  {
    "id": "mern-fs-react-03",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between useEffect, useLayoutEffect, and useMemo, with appropriate production use cases for each.",
    "expectedPoints": [
      "useEffect runs asynchronously after the browser paints, suitable for data fetching, subscriptions, and non-blocking side effects.",
      "useLayoutEffect runs synchronously immediately after DOM mutations but before the browser paints, preventing visual layout flickering.",
      "useMemo memoizes computed values across renders to avoid expensive recalculations unless dependencies change."
    ],
    "sampleAnswer": "useEffect runs asynchronously after paint, ideal for API calls and analytics. useLayoutEffect runs synchronously before browser paint, essential for measuring DOM elements (e.g. tooltip placement) to prevent visual layout shift. useMemo caches computed data (like sorting 10,000 items) to prevent recalculation on unrelated renders.",
    "evaluationCriteria": "Differentiates render timing (before paint vs after paint), layout shift avoidance, and computational memoization.",
    "tags": [
      "React",
      "Hooks",
      "useEffect",
      "Performance"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "mern-fs-react-04",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you prevent unnecessary re-renders in a deeply nested React component hierarchy?",
    "expectedPoints": [
      "Wrap pure presentational components in React.memo() with shallow prop comparison.",
      "Stabilize callbacks with useCallback() and complex calculated objects with useMemo().",
      "Push state down closer to where it is consumed, or lift state out into localized context / atomic stores."
    ],
    "sampleAnswer": "To eliminate redundant re-renders: 1) Wrap child components in React.memo(); 2) Wrap event handler functions passed as props in useCallback() so reference identities stay stable; 3) Localize state so updating an input does not trigger parent container re-renders; 4) Use children prop composition to bypass intermediate renders.",
    "evaluationCriteria": "Covers React.memo, useCallback reference stabilization, state colocation, and component composition.",
    "tags": [
      "React",
      "Optimization",
      "useCallback",
      "React.memo"
    ],
    "source": "Frontend Performance & Architecture"
  },
  {
    "id": "mern-fs-react-05",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "How does React Context API compare with dedicated state management libraries like Redux Toolkit or Zustand in high-frequency update apps?",
    "expectedPoints": [
      "Context API causes all consuming components to re-render whenever the context value changes, making it inefficient for high-frequency state updates.",
      "Redux Toolkit and Zustand support granular selector-based subscriptions, re-rendering only the specific component subscribing to the updated slice of state.",
      "Context is ideal for low-frequency global data (auth user, theme, locale); Zustand/Redux for dynamic interactive application state."
    ],
    "sampleAnswer": "Context API triggers re-renders across all consumer components whenever its value reference changes, which degrades performance in high-frequency updates (e.g., animations, live tables). Zustand and Redux Toolkit use selector subscriptions outside the React render tree, ensuring only components subscribed to the modified property re-render.",
    "evaluationCriteria": "Explains Context re-render propagation and compares selector subscriptions in Zustand/Redux for high-throughput UIs.",
    "tags": [
      "React",
      "State Management",
      "Redux",
      "Zustand",
      "Context API"
    ],
    "source": "Senior Frontend Architecture Question"
  },
  {
    "id": "mern-fs-react-06",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Debugging",
    "question": "A component fetching data in useEffect causes an infinite loop. What is the root cause and how do you diagnose and resolve it?",
    "expectedPoints": [
      "Root cause: Updating state inside useEffect without a dependency array, or passing an unstable object/array reference into the dependency array that gets recreated on every render.",
      "Fix: Provide an explicit dependency array ([] for mount only), use primitive dependencies, or wrap object/function dependencies in useMemo/useCallback."
    ],
    "sampleAnswer": "An infinite loop happens when state is updated inside useEffect, which triggers a re-render. If useEffect has no dependency array or depends on an object/array created in the component body whose reference changes every render, the effect runs again indefinitely. Fix by passing an empty dependency array for mount or stabilizing dependencies with useCallback/useMemo.",
    "evaluationCriteria": "Explains state update triggering render cycle, dependency reference inequality, and stabilization remedies.",
    "tags": [
      "React",
      "useEffect",
      "Debugging",
      "Infinite Loop"
    ],
    "source": "Common Frontend Bug Resolution"
  },
  {
    "id": "mern-fs-react-07",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "Explain React Server Components (RSC) vs Client Components in Next.js App Router and how data fetching differs.",
    "expectedPoints": [
      "Server Components execute exclusively on the server, have zero client bundle size impact, and can access databases and backend secrets directly.",
      "Client Components (marked with \"use client\") execute on both server (SSR) and client, handling browser events, useState, and useEffect.",
      "RSC streams HTML and serialized component trees to the browser without client-side hydration overhead for static UI."
    ],
    "sampleAnswer": "React Server Components render entirely on the server and send a serialized UI stream to the client without sending JS bundle code for dependencies. They can directly query databases without API endpoints. Client Components (\"use client\") are hydrated on the browser to handle interactivity, state, and browser APIs.",
    "evaluationCriteria": "Highlights bundle reduction, direct server resource access, and selective hydration boundaries.",
    "tags": [
      "React",
      "Next.js",
      "Server Components",
      "SSR",
      "Architecture"
    ],
    "source": "Modern Full Stack Architecture"
  },
  {
    "id": "mern-fs-react-08",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Beginner",
    "type": "Practical",
    "question": "What is the purpose of React Error Boundaries and how do you implement them in a production application?",
    "expectedPoints": [
      "Error Boundaries catch JavaScript runtime errors anywhere in their child component tree, log the error, and display a fallback UI.",
      "Implemented using class components with componentDidCatch and static getDerivedStateFromError, or libraries like react-error-boundary.",
      "They prevent the entire white-screen crash of single page applications."
    ],
    "sampleAnswer": "Error boundaries catch JavaScript errors in child component trees during rendering, lifecycle methods, and constructors, preventing the whole app from crashing to a white screen. They implement static getDerivedStateFromError to render a fallback UI and componentDidCatch to report errors to monitoring services like Sentry.",
    "evaluationCriteria": "Explains graceful crash handling, getDerivedStateFromError fallback rendering, and production error monitoring.",
    "tags": [
      "React",
      "Error Boundaries",
      "Resilience",
      "UX"
    ],
    "source": "Production React Standards"
  },
  {
    "id": "mern-fs-node-01",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "How does Node.js handle thousands of concurrent client connections with a single main JavaScript thread?",
    "expectedPoints": [
      "Node.js uses an event-driven, non-blocking asynchronous I/O architecture powered by the libuv C++ library.",
      "Network sockets and file operations are delegated to OS asynchronous APIs (epoll/kqueue) or the libuv thread pool.",
      "The main thread remains free to accept incoming connections and processes callbacks when I/O completes."
    ],
    "sampleAnswer": "Node.js runs JavaScript on a single thread but delegates I/O operations (file system, DNS, crypto, database network sockets) to libuv and OS asynchronous mechanisms like epoll. When I/O completes, callbacks are queued to the event loop, allowing the main thread to serve thousands of connections without thread-per-request overhead.",
    "evaluationCriteria": "Mentions single-threaded JS execution, libuv event loop, non-blocking I/O, and OS kernel delegation.",
    "tags": [
      "Node.js",
      "libuv",
      "Event Loop",
      "Concurrency",
      "Async"
    ],
    "source": "Industry Standard Technical Question"
  },
  {
    "id": "mern-fs-node-02",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the Express.js middleware pipeline, next() propagation, and how to write a centralized error handling middleware.",
    "expectedPoints": [
      "Middleware functions have access to (req, res, next) and execute sequentially in order of registration.",
      "Calling next() forwards control; passing an argument next(err) jumps immediately to error-handling middleware.",
      "Error middleware requires 4 parameters: (err, req, res, next)."
    ],
    "sampleAnswer": "Express middleware runs in an onion/pipeline model where each handler inspects or transforms req/res before invoking next(). If an error occurs, passing the error to next(err) bypasses regular handlers and routes directly to centralized error middleware defined with 4 arguments: (err, req, res, next), which formats standard JSON error responses.",
    "evaluationCriteria": "Identifies 4-parameter signature for error handlers, next() execution chain, and centralized logging.",
    "tags": [
      "Express.js",
      "Middleware",
      "Error Handling",
      "Node.js"
    ],
    "source": "Core Backend Development"
  },
  {
    "id": "mern-fs-node-03",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do Node.js Streams and Buffers work, and why should you use streams over fs.readFile when handling large file uploads/downloads?",
    "expectedPoints": [
      "Buffers hold raw binary chunks in memory outside V8 heap.",
      "Streams process data chunk by chunk sequentially without loading the entire file into RAM.",
      "fs.readFile loads the whole file into memory at once, which will exhaust RAM (OutOfMemory) with multi-gigabyte files; streams maintain low memory footprint via pipe() and backpressure handling."
    ],
    "sampleAnswer": "Buffers are chunks of raw binary data allocated outside the V8 heap. Streams allow processing data in sequential chunks as it arrives. Using fs.readFile loads the entire file into RAM, crashing the server if multiple users download 500MB files simultaneously. Streams pipe data directly from disk to network sockets with constant memory usage and automatic backpressure.",
    "evaluationCriteria": "Explains memory allocation differences, chunked data pipelines, and backpressure management.",
    "tags": [
      "Node.js",
      "Streams",
      "Buffers",
      "Memory",
      "Performance"
    ],
    "source": "Backend Performance & Scaling"
  },
  {
    "id": "mern-fs-node-04",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "How do you scale a CPU-intensive Node.js application without blocking the main event loop?",
    "expectedPoints": [
      "Offload heavy computation using Node.js Worker Threads (worker_threads module) to run JS on separate OS threads.",
      "Use the cluster module to fork multiple Node.js OS processes sharing the same server port across CPU cores.",
      "Offload tasks to background message queue workers (BullMQ, Redis, RabbitMQ)."
    ],
    "sampleAnswer": "Because CPU-bound operations block the single event loop, solutions include: 1) Worker Threads (worker_threads) for sharing memory and executing CPU tasks on dedicated threads; 2) The Cluster module to spawn worker processes per CPU core; 3) Asynchronous job queues with Redis/BullMQ to process tasks out-of-band on dedicated worker nodes.",
    "evaluationCriteria": "Identifies event loop blocking vulnerability and explains Worker Threads, Cluster module, and async message queues.",
    "tags": [
      "Node.js",
      "Scaling",
      "Worker Threads",
      "Cluster",
      "BullMQ"
    ],
    "source": "Senior Backend Engineering"
  },
  {
    "id": "mern-fs-auth-01",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Authentication & JWT",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain the structure of a JSON Web Token (JWT) and how stateless authentication works between frontend and backend.",
    "expectedPoints": [
      "JWT consists of three Base64URL-encoded parts: Header (algorithm & token type), Payload (claims/user data), and Signature (secret verification hash).",
      "Stateless: The server does not maintain session records in database/memory; it verifies the signature mathematically using the server secret.",
      "The client transmits the token in the Authorization header (Bearer token) or HttpOnly cookie."
    ],
    "sampleAnswer": "A JWT is composed of Header, Payload, and Signature separated by dots. In stateless auth, the server signs user payload data on login and returns the token. On subsequent requests, the server validates the cryptographic signature using its secret key without looking up active sessions in a database, allowing horizontal scaling across multiple servers.",
    "evaluationCriteria": "Details the 3 JWT segments, signature verification mechanism, and advantages of stateless scaling.",
    "tags": [
      "Authentication",
      "JWT",
      "Security",
      "REST APIs"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "mern-fs-auth-02",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Authentication & JWT",
    "difficulty": "Intermediate",
    "type": "Security",
    "question": "Where should JWT tokens be stored on the client (LocalStorage vs HttpOnly Cookie) and how do you protect against XSS and CSRF attacks?",
    "expectedPoints": [
      "LocalStorage is vulnerable to Cross-Site Scripting (XSS) because any injected JavaScript can read localStorage.getItem().",
      "HttpOnly cookies cannot be read by JavaScript, mitigating XSS token theft.",
      "Cookies are vulnerable to Cross-Site Request Forgery (CSRF), mitigated using SameSite=Strict/Lax flags and CSRF anti-forgery tokens."
    ],
    "sampleAnswer": "Storing tokens in localStorage leaves them vulnerable to XSS attacks where malicious scripts extract the credentials. Storing tokens in HttpOnly, Secure, SameSite=Strict cookies prevents JavaScript access, completely mitigating XSS token theft. CSRF risks are neutralized using SameSite cookie attributes and CSRF anti-forgery double-submit tokens.",
    "evaluationCriteria": "Contrasts XSS vulnerabilities of localStorage with CSRF vulnerabilities of cookies and prescribes SameSite + HttpOnly mitigations.",
    "tags": [
      "Security",
      "XSS",
      "CSRF",
      "JWT",
      "Cookies"
    ],
    "source": "Web Security Standard"
  },
  {
    "id": "mern-fs-auth-03",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Authentication & JWT",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "How do you implement a secure Access Token + Refresh Token rotation flow with token revocation capabilities?",
    "expectedPoints": [
      "Short-lived Access Token (e.g. 15 mins) kept in memory or cookie for fast stateless API auth.",
      "Long-lived Refresh Token (e.g. 7 days) stored in HttpOnly cookie and tracked in a Redis/MongoDB whitelist or revocation blacklist.",
      "When the access token expires, client hits /refresh; the server validates the refresh token, revokes the old refresh token, and issues a new pair (Refresh Token Rotation)."
    ],
    "sampleAnswer": "Use short-lived Access Tokens (15 min) for API authorization and long-lived Refresh Tokens (7 days) stored in HttpOnly cookies. When refreshing, the server validates the refresh token against a database whitelist, invalidates the old token, and issues a new pair. If an already-used refresh token is reused, all tokens for that user session are immediately revoked to prevent replay attacks.",
    "evaluationCriteria": "Explains short vs long token lifetimes, token rotation mechanics, reuse detection, and revocation store (Redis/DB).",
    "tags": [
      "JWT",
      "Refresh Token",
      "Architecture",
      "OAuth2",
      "Security"
    ],
    "source": "Enterprise Security Architecture"
  },
  {
    "id": "mern-fs-rest-01",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "REST APIs",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "What makes an API truly RESTful and what is the difference between PUT and PATCH HTTP methods?",
    "expectedPoints": [
      "REST (Representational State Transfer) uses stateless client-server communication, standard HTTP verbs, and URI resources.",
      "PUT replaces the entire resource representation (idempotent); missing fields are reset or overwritten.",
      "PATCH applies partial modifications to a resource (updates only supplied fields)."
    ],
    "sampleAnswer": "A RESTful API organizes operations around resources identified by URIs using standard HTTP verbs (GET, POST, PUT, PATCH, DELETE). PUT is idempotent and replaces the entire target resource with the payload provided. PATCH applies partial modifications to specific fields without overwriting unmodified properties.",
    "evaluationCriteria": "Explains REST principles and clearly contrasts full resource replacement (PUT) with partial delta updates (PATCH).",
    "tags": [
      "REST APIs",
      "HTTP",
      "Web Architecture",
      "API Design"
    ],
    "source": "Core API Standards"
  },
  {
    "id": "mern-fs-db-01",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "MongoDB",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "In MongoDB schema design, when should you choose Document Embedding versus Document Referencing ($lookup)?",
    "expectedPoints": [
      "Embedding: One-to-one or one-to-few bounded relationships where data is frequently retrieved together in a single read (e.g. order items, user address). Limited by 16MB document size.",
      "Referencing: One-to-many or many-to-many unbounded relationships (e.g. log streams, comments on viral posts) or data updated independently by multiple entities.",
      "Embedding provides atomic single-document writes without joins; referencing avoids data duplication and document growth limit."
    ],
    "sampleAnswer": "Choose embedding for bounded 1-to-few relationships where child data is tightly coupled and always read with the parent (e.g. order items inside an Order), ensuring atomic single-read/write performance. Choose referencing for unbounded 1-to-many relationships (e.g. comments, analytics logs) to avoid exceeding MongoDB's 16MB BSON document limit.",
    "evaluationCriteria": "Compares 16MB limit, query access patterns, atomicity of single-document writes, and join overhead.",
    "tags": [
      "MongoDB",
      "NoSQL",
      "Database Design",
      "Aggregation"
    ],
    "source": "Database Architecture Standard"
  },
  {
    "id": "mern-fs-db-02",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "SQL",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain SQL ACID properties and how database indexing (B-Tree) speeds up query performance with write trade-offs.",
    "expectedPoints": [
      "ACID: Atomicity (all-or-nothing), Consistency (schema constraints preserved), Isolation (concurrent transactions don't interfere), Durability (committed data survives crashes).",
      "B-Tree indexes provide O(log n) search/range traversal instead of O(n) full table scans.",
      "Trade-off: Each index adds storage overhead and slows down INSERT/UPDATE/DELETE because index trees must be rebalanced on write."
    ],
    "sampleAnswer": "ACID guarantees reliable transactions: Atomicity (all-or-nothing execution), Consistency (integrity constraints enforced), Isolation (transaction isolation levels like Read Committed or Serializable), and Durability (WAL write-ahead logs persist commits). B-Trees enable O(log n) binary lookups on indexed columns, but every extra index adds overhead to INSERT/UPDATE statements.",
    "evaluationCriteria": "Accurately defines all 4 ACID pillars and explains B-Tree indexing benefits and write throughput trade-offs.",
    "tags": [
      "SQL",
      "ACID",
      "Indexing",
      "Databases",
      "Transactions"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "mern-fs-git-01",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Git and GitHub",
    "difficulty": "Beginner",
    "type": "Practical",
    "question": "Explain the difference between git merge and git rebase, and when you should avoid rebasing shared branches.",
    "expectedPoints": [
      "git merge creates a new merge commit preserving full branching history and chronological context.",
      "git rebase rewrites project history by replaying commits from the feature branch on top of the target base branch, creating a linear history.",
      "Golden rule: Never rebase shared public branches (like main or develop) because rewritten commit SHAs cause conflicts for other collaborators."
    ],
    "sampleAnswer": "git merge combines branches by creating a merge commit, preserving the exact non-destructive history. git rebase moves your feature branch commits to the tip of the target branch, rewriting commit SHAs to produce a clean linear history. Never rebase shared remote branches because rewriting shared history disrupts other developers' working trees.",
    "evaluationCriteria": "Contrasts merge commits vs linear commit replay and emphasizes the rule against rebasing shared branches.",
    "tags": [
      "Git",
      "GitHub",
      "Version Control",
      "Workflow"
    ],
    "source": "Industry Standard Workflow Question"
  },
  {
    "id": "mern-fs-sys-01",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "System Design Basics",
    "difficulty": "Intermediate",
    "type": "Architecture",
    "question": "How would you design a URL Shortener service (like bit.ly) considering hashing, database selection, redirect caching, and collision handling?",
    "expectedPoints": [
      "Base62 encoding (a-z, A-Z, 0-9) of an auto-incrementing 64-bit ID or counter to generate compact short codes (e.g. 7 chars = 3.5 trillion URLs).",
      "Fast read redirects (HTTP 301 Permanent vs 302 Temporary) cached in Redis for high read:write ratio (100:1).",
      "Relational (PostgreSQL) or NoSQL (DynamoDB/MongoDB) database mapping short_code -> original_url with unique index."
    ],
    "sampleAnswer": "A URL shortener utilizes Base62 encoding on unique distributed sequence IDs to generate 6-7 character hashes without collisions. Since read traffic outnumbers writes by 100:1, route redirects through Redis caching. Return HTTP 302 if analytics tracking is required, or HTTP 301 for browser-cached redirects to minimize backend load.",
    "evaluationCriteria": "Proposes Base62 encoding, Redis caching layer, 301 vs 302 redirect trade-offs, and database storage estimation.",
    "tags": [
      "System Design",
      "Caching",
      "Redis",
      "Architecture",
      "Base62"
    ],
    "source": "Classic System Design Question"
  },
  {
    "id": "mern-fs-beh-01",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Behavioral & HR",
    "difficulty": "Intermediate",
    "type": "Behavioral",
    "question": "Describe a situation where a critical production bug occurred in your application. How did you diagnose, communicate, and resolve it?",
    "expectedPoints": [
      "Use STAR method (Situation, Task, Action, Result).",
      "Immediate mitigation: Rollback or feature flag toggle before deep code diagnosis.",
      "Post-mortem: Root cause analysis, automated regression test creation, and process improvement to prevent recurrence."
    ],
    "sampleAnswer": "When a deployment caused checkout failures, I immediately verified APM error logs and executed a blue-green deployment rollback within 4 minutes to restore customer availability. I then identified an unhandled null in an API response in staging, patched the parsing with a fallback, added end-to-end Cypress regression tests, and published an internal post-mortem.",
    "evaluationCriteria": "Follows STAR format, prioritizes customer mitigation (rollback) over blame, and includes long-term automated prevention.",
    "tags": [
      "Behavioral",
      "STAR",
      "Incident Management",
      "Production"
    ],
    "source": "Engineering Behavioral Question"
  },
  {
    "id": "jd-java-core-01",
    "role": "Java Developer",
    "domain": "Java Backend",
    "topic": "Core Java & OOP",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain the four core principles of Object-Oriented Programming (OOP) in Java and how polymorphism is achieved at runtime versus compile-time.",
    "expectedPoints": [
      "Encapsulation (data hiding via private fields and getters/setters), Abstraction (hiding implementation details via interfaces/abstract classes).",
      "Inheritance (code reuse via extends/implements), Polymorphism (one interface, multiple behaviors).",
      "Compile-time polymorphism = Method Overloading (same method name, different signatures); Runtime polymorphism = Method Overriding (@Override with dynamic method dispatch)."
    ],
    "sampleAnswer": "The four OOP pillars are Encapsulation (protecting state), Abstraction (exposing contracts via interfaces), Inheritance (reusing parent class structures), and Polymorphism. Compile-time polymorphism is achieved through method overloading resolved by parameter signatures. Runtime polymorphism occurs through method overriding resolved dynamically via the virtual method table (vtable).",
    "evaluationCriteria": "Clearly explains all 4 pillars and distinguishes method overloading from dynamic method dispatch overriding.",
    "tags": [
      "Java",
      "OOP",
      "Polymorphism",
      "Encapsulation",
      "Core Java"
    ],
    "source": "Java Technical Foundations"
  },
  {
    "id": "jd-java-coll-01",
    "role": "Java Developer",
    "domain": "Java Backend",
    "topic": "Collections Framework",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the internal working of Java HashMap (Java 8+), collision handling with balanced trees (Red-Black Trees), and why overriding equals() requires overriding hashCode().",
    "expectedPoints": [
      "HashMap uses an array of Node buckets: index = (n - 1) & hash(key).",
      "Collisions are stored in linked lists until chain length exceeds TREEIFY_THRESHOLD (8), where it converts into a Red-Black Tree for O(log n) performance.",
      "Contract: If two objects are equal by equals(), they must produce identical hashCode() values; otherwise, get(key) will look in the wrong bucket and return null."
    ],
    "sampleAnswer": "In Java 8+, HashMap calculates bucket index using key hash bit-shifting. When collisions occur, elements are stored in a linked list until reaching 8 elements and 64 bucket capacity, where it converts into a Red-Black Tree (O(log n) lookup). If equals() is overridden without hashCode(), two equal keys land in different buckets, breaking get() retrieval.",
    "evaluationCriteria": "Details bucket indexing, treeification at threshold 8, and the equals/hashCode bucket lookup contract.",
    "tags": [
      "Java",
      "Collections",
      "HashMap",
      "Data Structures"
    ],
    "source": "Frequently Reported Technical Question"
  },
  {
    "id": "jd-java-multi-01",
    "role": "Java Developer",
    "domain": "Java Backend",
    "topic": "Multithreading & Concurrency",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain the Java Memory Model, volatile keyword, synchronized blocks, and how ConcurrentHashMap achieves thread safety without table-wide locks.",
    "expectedPoints": [
      "volatile guarantees visibility across CPU core caches and prevents instruction reordering, but does NOT guarantee atomicity for compound operations (like count++).",
      "synchronized provides mutual exclusion and visibility by acquiring intrinsic object monitor locks.",
      "ConcurrentHashMap (Java 8) uses lock-free Compare-And-Swap (CAS) for empty bucket insertions and synchronized locks on individual bucket head nodes rather than locking the entire map."
    ],
    "sampleAnswer": "The Java Memory Model defines how threads interact through main memory and local CPU caches. volatile ensures direct memory read/writes and prevents compiler reordering. ConcurrentHashMap achieves high concurrent throughput by using CAS (Compare-And-Swap) for empty bucket writes and fine-grained synchronized locking on only the specific bucket head node being modified.",
    "evaluationCriteria": "Explains cache visibility vs atomicity, CAS lock-free operations, and bucket-level granularity in ConcurrentHashMap.",
    "tags": [
      "Java",
      "Concurrency",
      "Multithreading",
      "volatile",
      "CAS"
    ],
    "source": "Advanced Java Concurrency"
  },
  {
    "id": "jd-java-jvm-01",
    "role": "Java Developer",
    "domain": "Java Backend",
    "topic": "JVM Internals",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain JVM memory structure (Heap, Stack, Metaspace, Program Counter) and how the G1 Garbage Collector manages memory.",
    "expectedPoints": [
      "Heap: Shared storage for objects and instances. Divided into Eden, Survivor (S0/S1), and Tenured/Old generation.",
      "Stack: Thread-private storage for local variables, method frames, and primitive values.",
      "Metaspace: Native OS memory storing class metadata and reflection structures (replaces PermGen).",
      "G1 GC divides heap into equal regions (~1MB to 32MB) and collects regions with the most garbage first (Garbage-First) to meet user-defined pause targets."
    ],
    "sampleAnswer": "JVM memory separates thread-private stacks (call frames and local variables) from the shared Heap (object instances). Metaspace holds class metadata in native OS memory. G1 GC splits the heap into 2048 non-contiguous regions. It performs concurrent marking and prioritizes collecting regions containing the highest density of reclaimable garbage (Garbage-First), satisfying predictable latency targets.",
    "evaluationCriteria": "Explains Heap vs Stack vs Metaspace and describes G1 GC region-based collection and pause time goals.",
    "tags": [
      "Java",
      "JVM",
      "Garbage Collection",
      "G1GC",
      "Memory"
    ],
    "source": "JVM Internals & Performance"
  },
  {
    "id": "jd-java-spring-01",
    "role": "Java Developer",
    "domain": "Java Backend",
    "topic": "Spring Boot",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain Dependency Injection and Inversion of Control (IoC) in Spring Boot, and why Constructor Injection is preferred over Field Injection (@Autowired on field).",
    "expectedPoints": [
      "IoC transfers object lifecycle and dependency management to the Spring IoC Container.",
      "Field injection hides dependencies, prevents making fields \"final\" (immutable), and makes unit testing difficult without starting Spring context/reflection.",
      "Constructor injection enforces mandatory dependencies, supports immutable \"final\" fields, and enables clean POJO unit tests with Mockito."
    ],
    "sampleAnswer": "IoC delegates object creation and lifecycle management to the Spring Container. Constructor Injection is strongly preferred over field injection because: 1) It allows declaring dependencies as \"final\" for true immutability; 2) It prevents NullPointerExceptions by guaranteeing dependencies at instantiation; 3) It allows instant unit testing with plain mock objects without starting Spring runners.",
    "evaluationCriteria": "Articulates IoC container role, final field immutability, and unit testability benefits of constructor injection.",
    "tags": [
      "Spring Boot",
      "Dependency Injection",
      "IoC",
      "Testing"
    ],
    "source": "Enterprise Spring Standards"
  },
  {
    "id": "jd-java-jpa-01",
    "role": "Java Developer",
    "domain": "Java Backend",
    "topic": "Hibernate & JPA",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "What is the N+1 Query Problem in Hibernate/JPA, and what are the primary techniques to detect and eliminate it in production?",
    "expectedPoints": [
      "N+1 occurs when fetching a parent entity issues 1 query, and accessing a lazy-loaded child collection in a loop triggers N additional SQL queries.",
      "Detection: Hibernate SQL query logging or tools like QuickPerf and datasource-proxy.",
      "Solutions: Use JOIN FETCH in JPQL queries, @EntityGraph annotations, or batch fetching (hibernate.default_batch_fetch_size)."
    ],
    "sampleAnswer": "The N+1 problem occurs when fetching 100 User records executes 1 SQL query, and accessing each user's Orders in a loop fires 100 individual queries (1 + N = 101 queries). Fix this using \"JOIN FETCH u.orders\" in JPQL, applying @EntityGraph on repository methods, or configuring batch fetching with hibernate.default_batch_fetch_size.",
    "evaluationCriteria": "Explains query explosion mechanics, JOIN FETCH solution, @EntityGraph, and batch fetching.",
    "tags": [
      "JPA",
      "Hibernate",
      "Performance",
      "SQL",
      "Spring Data"
    ],
    "source": "Senior Java Backend Interview"
  },
  {
    "id": "jd-java-sec-01",
    "role": "Java Developer",
    "domain": "Java Backend",
    "topic": "Authentication & Security",
    "difficulty": "Intermediate",
    "type": "Security",
    "question": "Explain how Spring Security SecurityFilterChain processes incoming requests with JWT authentication filter and UserDetailsService.",
    "expectedPoints": [
      "Spring Security uses a chain of servlet filter beans (FilterChainProxy).",
      "Custom OncePerRequestFilter intercepts requests, extracts Bearer JWT token from Authorization header, and validates signature.",
      "Upon valid token, creates UsernamePasswordAuthenticationToken and sets it in SecurityContextHolder.getContext().setAuthentication()."
    ],
    "sampleAnswer": "Spring Security routes HTTP requests through the SecurityFilterChain. A custom JWT filter extending OncePerRequestFilter extracts the Bearer token, validates the HMAC/RSA signature, extracts the user details and granted authorities, and sets an Authentication token in SecurityContextHolder, allowing @PreAuthorize method-level role checks.",
    "evaluationCriteria": "Traces the filter chain lifecycle, OncePerRequestFilter token extraction, and SecurityContextHolder authentication registration.",
    "tags": [
      "Spring Security",
      "JWT",
      "Security",
      "Authentication",
      "Java"
    ],
    "source": "Enterprise Security Architecture"
  },
  {
    "id": "jd-java-micro-01",
    "role": "Java Developer",
    "domain": "Java Backend",
    "topic": "Microservices",
    "difficulty": "Advanced",
    "type": "Architecture",
    "question": "How do you handle distributed transactions and data consistency across microservices using the Saga Pattern (Choreography vs Orchestration)?",
    "expectedPoints": [
      "Two-Phase Commit (2PC) does not scale well in distributed microservices due to blocking locks and tight coupling.",
      "Saga Pattern executes a sequence of local transactions across services; if a step fails, compensating transactions are executed in reverse to roll back state.",
      "Choreography: Services listen to events (Kafka/RabbitMQ) and react autonomously. Orchestration: A centralized coordinator service executes and directs each transaction step."
    ],
    "sampleAnswer": "In distributed systems, the Saga pattern manages transactions through a sequence of local database transactions. If payment fails after order creation, compensating transactions undo earlier actions. Choreography relies on event brokers (Kafka) where services publish and subscribe to domain events. Orchestration uses a central coordinator (like Camunda or Temporal) to command each service explicitly.",
    "evaluationCriteria": "Contrasts 2PC limitations with Saga compensating transactions, and clearly distinguishes event-driven Choreography from Orchestrator coordination.",
    "tags": [
      "Microservices",
      "Saga Pattern",
      "Distributed Systems",
      "Kafka",
      "Architecture"
    ],
    "source": "Senior Microservices Architecture"
  },
  {
    "id": "mern-fs-react-09",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Beginner",
    "type": "Conceptual",
    "question": "What is the Virtual DOM in React, and how does the reconciliation algorithm update the real DOM efficiently?",
    "expectedPoints": [
      "Virtual DOM is an in-memory lightweight representation of the actual DOM tree.",
      "When state/props change, React renders a new virtual DOM tree and diffs it with the previous snapshot.",
      "The diffing algorithm uses heuristics (keys, element types) to batch and apply minimal DOM operations."
    ],
    "sampleAnswer": "The Virtual DOM is a lightweight JavaScript representation of the actual DOM maintained in memory. When state updates, React creates a new virtual tree, runs a diffing algorithm (reconciliation) against the previous tree, calculates the minimal set of mutations required, and batches those changes to the browser DOM.",
    "evaluationCriteria": "Explains in-memory diffing, heuristic rules (keys, tags), and batching updates to minimize expensive real DOM operations.",
    "tags": [
      "React",
      "Virtual DOM",
      "Reconciliation",
      "Performance"
    ],
    "source": "Frontend Engineering Interview Standard"
  },
  {
    "id": "mern-fs-react-10",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "Explain the difference between useMemo and useCallback, and when would using them actually hurt performance?",
    "expectedPoints": [
      "useMemo caches the result of a computation; useCallback caches the function instance itself.",
      "Both require dependency array checks and memory overhead on every render.",
      "Overusing them for trivial calculations or components without React.memo adds unnecessary memory and comparison overhead."
    ],
    "sampleAnswer": "useMemo memoizes the computed return value of an expensive calculation, while useCallback memoizes a callback function reference across re-renders to prevent child components wrapped in React.memo from re-rendering. Overusing them on simple primitives or functions adds GC overhead and comparison costs without any performance gain.",
    "evaluationCriteria": "Differentiates value vs function memoization and explains premature optimization overheads.",
    "tags": [
      "React",
      "Hooks",
      "useMemo",
      "useCallback",
      "Optimization"
    ],
    "source": "Senior React Developer Interview"
  },
  {
    "id": "mern-fs-react-11",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Debugging",
    "question": "How do you diagnose and fix unnecessary component re-renders in a large React application?",
    "expectedPoints": [
      "Use React DevTools Profiler to record render cycles and inspect 'Why did this render?'.",
      "Check for unstable object/array/function literals passed as props.",
      "Leverage state colocation, React.memo, useCallback, or context splitting to isolate changes."
    ],
    "sampleAnswer": "I use React DevTools Profiler to identify components re-rendering frequently and analyze why they rendered. Common culprits include creating object or function references inline in JSX, global context thrashing, or lifting state too high. Solutions include splitting context into smaller providers, passing primitives, memoizing callbacks, or colocating state closer to where it is consumed.",
    "evaluationCriteria": "Mentions React DevTools Profiler, reference stability, state colocation, and Context API splitting.",
    "tags": [
      "React",
      "Performance",
      "Debugging",
      "Profiler"
    ],
    "source": "React Production Architecture Question"
  },
  {
    "id": "mern-fs-react-12",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "React",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "How does React Server Components (RSC) differ from traditional Client-Side Rendering (CSR) and Server-Side Rendering (SSR) in Next.js?",
    "expectedPoints": [
      "CSR fetches bundle and renders on client; SSR sends initial HTML then hydrates full JS bundle.",
      "RSC executes exclusively on the server, streams rendered UI primitives, and sends zero JavaScript bundle for server components.",
      "Client components handle interactivity and state, while RSC handles data fetching and secrets directly without API boilerplate."
    ],
    "sampleAnswer": "Traditional SSR generates HTML on the server but still ships all component JavaScript to the client for hydration. React Server Components execute exclusively on the server, directly accessing databases or backend resources, and stream a serialized component tree without adding any JS bundle weight to the client. Client components are used at the leaves of the tree for interactivity.",
    "evaluationCriteria": "Accurately contrasts hydration, bundle size reduction, direct backend data access, and the client/server boundary.",
    "tags": [
      "React",
      "Next.js",
      "RSC",
      "SSR",
      "Architecture"
    ],
    "source": "Modern Full Stack System Design"
  },
  {
    "id": "mern-fs-node-05",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "Explain Node.js Streams and how you would process a 10GB CSV file without causing an Out-Of-Memory (OOM) error.",
    "expectedPoints": [
      "Streams process data chunk-by-chunk in buffers rather than loading the whole file into RAM.",
      "Readable, Writable, Transform, and Duplex streams allow pipeline composition.",
      "Use fs.createReadStream, csv-parser, and pipeline with proper backpressure handling."
    ],
    "sampleAnswer": "Instead of fs.readFile which buffers the entire file into V8 memory, I use fs.createReadStream with a streaming parser (e.g., csv-parser) piped to a Transform stream using stream.promises.pipeline. This handles backpressure automatically, pausing the read stream when downstream processing is busy, keeping memory usage constant regardless of file size.",
    "evaluationCriteria": "Demonstrates understanding of buffers, chunks, backpressure management, and stream pipelines.",
    "tags": [
      "Node.js",
      "Streams",
      "Performance",
      "Memory"
    ],
    "source": "Backend Scalability Interview"
  },
  {
    "id": "mern-fs-node-06",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "How do you handle CPU-intensive tasks (e.g., image resizing or cryptography) in Node.js without blocking the Event Loop?",
    "expectedPoints": [
      "Node.js event loop runs on a single thread; heavy synchronous computations block all incoming I/O requests.",
      "Use the worker_threads module to offload CPU work to separate V8 isolates with shared memory (SharedArrayBuffer).",
      "Alternatively, delegate heavy tasks to background worker queues (BullMQ/Redis) or dedicated microservices."
    ],
    "sampleAnswer": "Because synchronous CPU computations block the single-threaded Event Loop, I offload intensive tasks using Node.js worker_threads (Piscina pool) or delegate them asynchronously to a background task queue (BullMQ + Redis worker processes). For image processing, native C++ libuv bindings like Sharp handle operations off the main loop.",
    "evaluationCriteria": "Distinguishes I/O non-blocking behavior from CPU blocking, mentions worker_threads and background job queues.",
    "tags": [
      "Node.js",
      "Concurrency",
      "Worker Threads",
      "Event Loop"
    ],
    "source": "Node.js Concurrency Question"
  },
  {
    "id": "mern-fs-api-02",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "REST APIs",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is API Idempotency and how would you implement idempotent payment processing in a RESTful API?",
    "expectedPoints": [
      "An idempotent HTTP method produces the same server state regardless of how many times it is executed (e.g., GET, PUT, DELETE).",
      "POST is not inherently idempotent; duplicate network retries can double-charge users.",
      "Implement idempotency keys (Idempotency-Key header) cached in Redis with transaction locks and unique database constraints."
    ],
    "sampleAnswer": "Idempotency means making multiple identical requests has the same effect as making a single request. For payment POST endpoints, the client generates a unique UUID (Idempotency-Key). The server uses Redis with atomic SETNX to check if that key exists. If in-progress or completed, it returns the stored cached response rather than re-executing the charge.",
    "evaluationCriteria": "Explains HTTP method semantics, unique client keys, atomic caching in Redis, and avoiding race conditions.",
    "tags": [
      "REST",
      "API Design",
      "Idempotency",
      "Payments"
    ],
    "source": "FinTech & E-Commerce Technical Question"
  },
  {
    "id": "mern-fs-api-03",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "REST APIs",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "Compare REST, GraphQL, and gRPC. In what scenarios would you choose each for a full-stack architecture?",
    "expectedPoints": [
      "REST: Standard HTTP verbs, great for public APIs, caching with HTTP headers, simple tooling.",
      "GraphQL: Solves over-fetching and under-fetching, client-driven queries, ideal for complex frontend dashboards and mobile apps.",
      "gRPC: HTTP/2 binary Protocol Buffers, ultra-fast low-latency RPC, streaming, ideal for internal microservice-to-microservice communication."
    ],
    "sampleAnswer": "REST is best for public-facing third-party APIs and standard CRUD services with HTTP caching. GraphQL is ideal when client applications (web/mobile) need heterogeneous data from multiple entities in a single round-trip without over-fetching. gRPC is the best choice for high-throughput, low-latency microservice-to-microservice communication using compact Protobuf binary serialization over HTTP/2.",
    "evaluationCriteria": "Provides nuanced trade-offs across over-fetching, caching, serialization protocol overhead, and architectural fit.",
    "tags": [
      "API",
      "REST",
      "GraphQL",
      "gRPC",
      "Architecture"
    ],
    "source": "System Design & API Architecture"
  },
  {
    "id": "mern-fs-sd-02",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "System Design Basics",
    "difficulty": "Intermediate",
    "type": "Scenario-Based",
    "question": "Design a URL shortening service like Bit.ly. Explain the database schema, ID generation strategy, and caching layer.",
    "expectedPoints": [
      "Schema: original_url, short_code, user_id, created_at, expiration, click_count.",
      "Encoding: Base62 encoding (a-z, A-Z, 0-9) over auto-incrementing 64-bit integer IDs or distributed Snowflake IDs.",
      "Caching: Redis LRU cache for high-read redirect lookups (80/20 rule), HTTP 301 vs 302 redirects."
    ],
    "sampleAnswer": "I would use a distributed sequence generator (Snowflake) or auto-incrementing 64-bit ID converted to Base62 (e.g. 62^7 gives ~3.5 trillion URLs). The primary store can be a key-value or relational database. For fast redirects, URLs are cached in Redis with an LRU policy. Redirects use HTTP 302 for tracking analytics or 301 for browser caching.",
    "evaluationCriteria": "Addresses Base62 collision-free generation, read-heavy caching with Redis, and 301 vs 302 redirect trade-offs.",
    "tags": [
      "System Design",
      "URL Shortener",
      "Redis",
      "Base62"
    ],
    "source": "Standard System Design Interview"
  },
  {
    "id": "mern-fs-sd-03",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "System Design Basics",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "Explain the differences between Cache-Aside, Write-Through, and Write-Behind caching strategies with trade-offs.",
    "expectedPoints": [
      "Cache-Aside (Lazy Loading): App checks cache; if miss, queries DB and populates cache. Simple, but initial requests are slow and data can be stale.",
      "Write-Through: App writes to cache, and cache synchronously writes to DB. Consistent data, but higher write latency.",
      "Write-Behind (Write-Back): App writes to cache immediately; cache asynchronously flushes writes in batch to DB. Fast writes, but risk of data loss on cache crash."
    ],
    "sampleAnswer": "In Cache-Aside, the application coordinates between cache and DB on read misses. In Write-Through, writes are synchronously saved to cache and DB together, ensuring strong consistency at the expense of write latency. In Write-Behind, writes are saved only to cache and flushed asynchronously to DB in batches, giving extreme write speed but risking data loss if the cache fails before persisting.",
    "evaluationCriteria": "Clearly contrasts consistency, write latency, failure tolerance, and cache invalidation mechanics.",
    "tags": [
      "System Design",
      "Caching",
      "Redis",
      "Distributed Systems"
    ],
    "source": "Distributed Systems Architecture"
  },
  {
    "id": "mern-fs-hr-02",
    "role": "MERN Stack Developer",
    "domain": "Software Engineering",
    "topic": "Behavioral & HR",
    "difficulty": "Intermediate",
    "type": "Behavioral",
    "question": "Describe a situation where a critical bug you wrote reached production. How did you respond, resolve it, and prevent recurrence?",
    "expectedPoints": [
      "Use STAR format (Situation, Task, Action, Result).",
      "Immediate rollback/mitigation, incident communication, root cause analysis (5 Whys), and blameless post-mortem.",
      "Added automated integration tests, lint checks, or monitoring alerts to guarantee the bug cannot happen again."
    ],
    "sampleAnswer": "In a previous release, an unhandled null pointer in a payment webhook caused checkout failures. I immediately acknowledged the incident on our incident channel, rolled back to the previous stable release within 4 minutes, and verified traffic stabilized. I then conducted a root cause analysis, added strict schema validation (Zod) and end-to-end integration tests in CI/CD, and established a synthetic monitoring alert.",
    "evaluationCriteria": "Demonstrates accountability, calm incident triage, rapid mitigation, and systemic prevention rather than blame.",
    "tags": [
      "Behavioral",
      "STAR",
      "Incidents",
      "Post-Mortem"
    ],
    "source": "Senior Engineering Behavioral Interview"
  },
  {
    "id": "jd-jb-core-02",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Core Java & OOP",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Why is String immutable in Java, and what is the String Constant Pool?",
    "expectedPoints": [
      "Security: Strings are used for DB connection URLs, network sockets, and credentials; mutability would allow malicious modification.",
      "Thread safety: Immutable objects are inherently thread-safe without synchronization.",
      "Caching / Performance: String Constant Pool in Heap allows reusing identical string literals to save memory.",
      "HashCode caching: String caches its hash code during instantiation, making it ideal for HashMap keys."
    ],
    "sampleAnswer": "Strings are immutable in Java for security (preventing tampering with file/network parameters), thread safety (safe sharing without locks), and performance optimization. The String Constant Pool is a special memory region in the Heap where Java stores unique string literals. When a new literal is created, the JVM returns the existing reference instead of allocating new memory. Immutability also allows caching hash codes for fast HashMap lookups.",
    "evaluationCriteria": "Explains memory sharing in String Pool, security implications, thread safety, and HashCode caching.",
    "tags": [
      "Java",
      "String Pool",
      "Immutability",
      "JVM"
    ],
    "source": "Core Java Technical Interview"
  },
  {
    "id": "jd-jb-core-03",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Core Java & OOP",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the contract between equals() and hashCode() in Java. What happens if you override equals() without hashCode()?",
    "expectedPoints": [
      "Contract: If a.equals(b) is true, then a.hashCode() MUST equal b.hashCode().",
      "If hashCode() is not overridden, two logically equal objects will have different memory identity hashCodes.",
      "When used as keys in a HashMap or elements in a HashSet, the object will be placed in the wrong bucket and get() will fail to find it."
    ],
    "sampleAnswer": "The Java contract requires that if two objects are equal according to equals(), they must produce the same integer hashCode(). If you override equals() but fail to override hashCode(), HashMap will calculate different bucket indexes for logically identical keys. Consequently, put() and get() will operate on different buckets, leading to duplicate keys in HashSets and null returns in HashMaps.",
    "evaluationCriteria": "Clearly describes bucket hashing, memory vs logical equality, and HashMap lookup breakdown.",
    "tags": [
      "Java",
      "Collections",
      "equals",
      "hashCode"
    ],
    "source": "Java Backend Core Questions"
  },
  {
    "id": "jd-jb-col-02",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Collections Framework",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How does HashMap work internally in Java 8+? Explain collision resolution and TreeNode conversion.",
    "expectedPoints": [
      "Backed by an array of Node<K,V> buckets (default capacity 16, load factor 0.75).",
      "Index calculation: (n - 1) & hash(key).",
      "Collisions use linked list chaining; in Java 8, when a bucket has >= 8 elements (and array capacity >= 64), it converts from LinkedList (O(N)) to Red-Black Tree (O(log N))."
    ],
    "sampleAnswer": "HashMap uses an array of buckets indexed via (n - 1) & hash(key). When hash collisions occur, entries are chained into a linked list. In Java 8+, if a single bucket reaches 8 entries (TREEIFY_THRESHOLD) and table length is at least 64, the linked list transforms into a Red-Black Tree, improving worst-case search complexity from O(N) to O(log N). If elements drop to 6, it untreeifies back to a list.",
    "evaluationCriteria": "Explains bitwise index calculation, bucket array, load factor resizing, and Java 8 Red-Black treeification.",
    "tags": [
      "Java",
      "Collections",
      "HashMap",
      "Data Structures"
    ],
    "source": "Java Collections Deep Dive"
  },
  {
    "id": "jd-jb-col-03",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Collections Framework",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Compare HashMap, ConcurrentHashMap, and Collections.synchronizedMap(). How does ConcurrentHashMap achieve high concurrency in Java 8?",
    "expectedPoints": [
      "Collections.synchronizedMap locks the entire map on every operation, creating high lock contention.",
      "Java 7 ConcurrentHashMap used Segment Locking (ReentrantLock on 16 segments).",
      "Java 8+ ConcurrentHashMap eliminates segments, using CAS (Compare-And-Swap) for empty bucket insertions and synchronized locks only on the individual bucket head node."
    ],
    "sampleAnswer": "Collections.synchronizedMap synchronizes all read/write operations on a single global mutex, severely bottlenecking multi-threaded applications. ConcurrentHashMap in Java 8+ provides lock-free reads and fine-grained locking on writes: it uses lock-free CAS for inserting the first node of a bucket, and synchronizes only on the head node of that specific bucket for updates, allowing concurrent writes to different buckets without blocking.",
    "evaluationCriteria": "Contrasts table-level locking vs bucket-level locking and explains CAS operations.",
    "tags": [
      "Java",
      "Concurrency",
      "ConcurrentHashMap",
      "Multithreading"
    ],
    "source": "High Performance Java Concurrency"
  },
  {
    "id": "jd-jb-thread-02",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Multithreading & Concurrency",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the purpose of the 'volatile' keyword in Java and how it relates to CPU caches and the Java Memory Model (JMM).",
    "expectedPoints": [
      "Ensures visibility: Writes to a volatile variable are immediately flushed to main memory and subsequent reads fetch from main memory rather than CPU L1/L2 caches.",
      "Prevents instruction reordering: Inserts memory barriers (happens-before relationship).",
      "Does NOT guarantee atomicity (e.g., count++ is still not thread-safe and requires AtomicInteger or synchronization)."
    ],
    "sampleAnswer": "The volatile keyword guarantees visibility and ordering across threads under the Java Memory Model. It instructs the JVM and CPU to read the variable directly from main RAM instead of thread-local CPU caches, ensuring changes made by one thread are immediately visible to others. It also prevents compiler instruction reordering. However, it does not provide atomicity for compound operations like count++.",
    "evaluationCriteria": "Differentiates visibility and ordering from atomicity; explains CPU cache coherency and happens-before relationship.",
    "tags": [
      "Java",
      "Multithreading",
      "volatile",
      "JMM",
      "Concurrency"
    ],
    "source": "Java Concurrency in Practice"
  },
  {
    "id": "jd-jb-thread-03",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Multithreading & Concurrency",
    "difficulty": "Advanced",
    "type": "Practical",
    "question": "How do you configure ThreadPoolExecutor in Java, and what are the 4 standard RejectedExecutionHandler policies?",
    "expectedPoints": [
      "Parameters: corePoolSize, maximumPoolSize, keepAliveTime, TimeUnit, BlockingQueue<Runnable>, ThreadFactory, RejectedExecutionHandler.",
      "Execution flow: core threads -> queue capacity -> max threads -> reject.",
      "4 Rejection Policies: AbortPolicy (throws exception), CallerRunsPolicy (caller thread executes task), DiscardPolicy (silent drop), DiscardOldestPolicy (drops oldest unhandled task)."
    ],
    "sampleAnswer": "ThreadPoolExecutor manages worker threads with corePoolSize, maximumPoolSize, and a BlockingQueue. When core threads are busy, tasks buffer in the queue. When the queue fills, it spawns up to maximumPoolSize threads. If both max threads and queue are full, it triggers a RejectedExecutionHandler: 1) AbortPolicy (throws RejectedExecutionException), 2) CallerRunsPolicy (executes task in calling thread, providing natural backpressure), 3) DiscardPolicy (silently drops task), or 4) DiscardOldestPolicy.",
    "evaluationCriteria": "Walks through task submission lifecycle, queue filling, and the four rejection policies.",
    "tags": [
      "Java",
      "ThreadPoolExecutor",
      "Concurrency",
      "Executors"
    ],
    "source": "Senior Java Engineer Concurrency"
  },
  {
    "id": "jd-jb-spring-02",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Spring Boot",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How does Spring Boot Autoconfiguration work (@EnableAutoConfiguration / @SpringBootApplication)?",
    "expectedPoints": [
      "Spring Boot scans classpath using META-INF/spring.factories or META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports.",
      "Conditional annotations evaluate context: @ConditionalOnClass, @ConditionalOnMissingBean, @ConditionalOnProperty.",
      "If conditions match, configuration beans are registered automatically unless overridden by user beans."
    ],
    "sampleAnswer": "Spring Boot Autoconfiguration looks at JAR dependencies present on the classpath. During startup, it reads auto-configuration classes listed in Spring Boot metadata. Each configuration class uses @Conditional annotations (e.g. @ConditionalOnClass(DataSource.class) and @ConditionalOnMissingBean) to instantiate default infrastructure beans only if the library is present and the developer has not supplied their own custom bean definition.",
    "evaluationCriteria": "Explains conditional annotations (@ConditionalOnMissingBean, @ConditionalOnClass) and auto-configuration discovery.",
    "tags": [
      "Spring Boot",
      "Autoconfiguration",
      "Spring",
      "Annotations"
    ],
    "source": "Spring Boot Architecture Interview"
  },
  {
    "id": "jd-jb-spring-03",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Spring Boot",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "How does @Transactional work under the hood in Spring? What causes self-invocation transactional failure?",
    "expectedPoints": [
      "Spring creates dynamic AOP proxies (CGLIB or JDK dynamic proxies) around the @Transactional bean.",
      "Proxy intercepts method call, opens transaction via PlatformTransactionManager, executes target method, and commits/rollbacks on RuntimeException.",
      "Self-invocation (calling methodA -> @Transactional methodB within the same class) bypasses the proxy, causing the transaction to be ignored."
    ],
    "sampleAnswer": "Spring uses Aspect-Oriented Programming (AOP) proxies to wrap @Transactional beans. When an external caller invokes a method, the proxy intercepts the call, starts a database transaction, invokes the target method, and commits or rolls back based on exceptions. If a non-transactional method calls a @Transactional method within the same class (this.methodB()), the call bypasses the Spring proxy and executes directly, resulting in no transaction being started.",
    "evaluationCriteria": "Mentions AOP proxies, PlatformTransactionManager, rollback rules, and why internal self-calls bypass the proxy.",
    "tags": [
      "Spring",
      "Transactions",
      "AOP",
      "Proxies",
      "Hibernate"
    ],
    "source": "Spring Enterprise Architecture"
  },
  {
    "id": "jd-jb-micro-02",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Microservices",
    "difficulty": "Intermediate",
    "type": "Scenario-Based",
    "question": "How does the Circuit Breaker pattern (Resilience4j) prevent cascading failures in a microservices ecosystem?",
    "expectedPoints": [
      "Monitors failure rates of downstream service calls across a sliding time/count window.",
      "Three States: CLOSED (normal traffic), OPEN (downstream failing, immediately returns fallback without calling service), HALF-OPEN (allows limited test requests).",
      "Protects calling service thread pools and gives failing downstream services time to recover."
    ],
    "sampleAnswer": "A Circuit Breaker prevents a failing downstream service from exhausting thread pools of upstream callers. In the CLOSED state, requests pass normally. If error rates exceed a threshold (e.g., 50% failures), it transitions to OPEN, failing fast or returning cached fallback responses without making network calls. After a wait duration, it enters HALF-OPEN, allowing trial requests to verify if the downstream service has recovered before switching back to CLOSED.",
    "evaluationCriteria": "Accurately details the 3 states (Closed, Open, Half-Open), failure thresholds, and thread exhaustion prevention.",
    "tags": [
      "Microservices",
      "Circuit Breaker",
      "Resilience4j",
      "Distributed Systems"
    ],
    "source": "Microservices Resiliency Interview"
  },
  {
    "id": "jd-jb-jvm-02",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "JVM Internals",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the JVM Garbage Collection Generational Hypothesis and compare the G1 GC with ZGC.",
    "expectedPoints": [
      "Generational Hypothesis: Most objects die young (Eden & Survivor spaces in Young Gen; Tenured in Old Gen).",
      "G1 GC: Divides heap into regional blocks, does concurrent marking, and collects regions with the most garbage first (Garbage-First) with target pause times (e.g. 200ms).",
      "ZGC: Low-latency GC doing almost all work (marking, relocation) concurrently using colored pointers and load barriers, keeping pause times < 1ms on TB heaps."
    ],
    "sampleAnswer": "The Generational Hypothesis observes that most objects become unreachable shortly after creation. JVM divides the Heap into Young (Eden, S0, S1) and Old generations. G1 GC partitions the heap into equal regions and prioritizes collecting regions containing the highest density of dead objects with predictable pause times. ZGC is an ultra-low-latency concurrent GC using colored pointers and memory load barriers to achieve sub-millisecond pauses even on terabyte-scale heaps.",
    "evaluationCriteria": "Differentiates Young vs Old generation collection, G1 regional compaction, and ZGC concurrent colored pointers.",
    "tags": [
      "Java",
      "JVM",
      "Garbage Collection",
      "G1GC",
      "ZGC"
    ],
    "source": "JVM Performance Tuning"
  },
  {
    "id": "jd-jb-jpa-02",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Hibernate & JPA",
    "difficulty": "Intermediate",
    "type": "Debugging",
    "question": "What is the JPA N+1 Select Problem and what are the 3 best ways to solve it?",
    "expectedPoints": [
      "N+1 occurs when fetching N parent entities triggers N additional separate queries to load a lazy-loaded child collection.",
      "Solution 1: JOIN FETCH in JPQL query.",
      "Solution 2: @EntityGraph annotation defining attribute paths to fetch eagerly.",
      "Solution 3: @BatchSize(size = 25) on the entity collection to load children in batches via SQL 'IN' clauses."
    ],
    "sampleAnswer": "The N+1 problem occurs when querying a parent table (e.g. 1 query for 100 Orders) executes 100 subsequent queries to load each order's Customer entity when accessed lazily. We resolve it using: 1) JPQL 'JOIN FETCH o.customer', 2) JPA @EntityGraph on the Spring Data repository method, or 3) Hibernate @BatchSize(size = 20) which collapses individual queries into SQL 'IN (?, ?, ?)' batch queries.",
    "evaluationCriteria": "Explains lazy loading trigger, SQL explosion, and concrete fixes (JOIN FETCH, EntityGraph, BatchSize).",
    "tags": [
      "Hibernate",
      "JPA",
      "SQL",
      "Performance",
      "N+1"
    ],
    "source": "High-Performance Java Persistence"
  },
  {
    "id": "jd-jb-sec-02",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Authentication & Security",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the Spring Security Filter Chain architecture and how JWT authentication is implemented as a OncePerRequestFilter.",
    "expectedPoints": [
      "Spring Security delegates incoming servlet requests through a chain of Security Filters (DelegatingFilterProxy -> SecurityFilterChain).",
      "Custom JwtAuthenticationFilter extends OncePerRequestFilter, extracts 'Authorization: Bearer <token>', and validates signature/claims.",
      "On success, creates UsernamePasswordAuthenticationToken and stores it in SecurityContextHolder.getContext().setAuthentication()."
    ],
    "sampleAnswer": "Spring Security routes requests through a chain of filters managed by SecurityFilterChain. To implement JWT auth, we create a custom filter extending OncePerRequestFilter placed before UsernamePasswordAuthenticationFilter. It parses the Bearer header, validates JWT signature and expiration via jjwt, extracts user authorities, constructs an Authentication object, and populates SecurityContextHolder to authenticate the current thread request.",
    "evaluationCriteria": "Walks through Filter Chain delegation, OncePerRequestFilter subclassing, and SecurityContextHolder authentication population.",
    "tags": [
      "Spring Security",
      "JWT",
      "Java",
      "Security",
      "Filters"
    ],
    "source": "Spring Security Enterprise Guide"
  },
  {
    "id": "jd-jb-micro-03",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Microservices",
    "difficulty": "Advanced",
    "type": "Scenario-Based",
    "question": "How do you implement distributed transactions across microservices using the Saga Pattern (Choreography vs Orchestration)?",
    "expectedPoints": [
      "Distributed 2PC (Two-Phase Commit) doesn't scale in microservices; Sagas break transactions into local ACID transactions with compensating actions on failure.",
      "Choreography: Services publish domain events to Kafka/RabbitMQ and react asynchronously. Simple, but hard to trace in complex flows.",
      "Orchestration: Central Saga Orchestrator (e.g. Temporal, Camunda, or dedicated Spring service) coordinates commands, tracks state, and triggers compensating rollbacks."
    ],
    "sampleAnswer": "Because distributed 2PC locks resources and creates tight coupling, we use the Saga pattern where each service executes a local transaction and publishes an event. If a step fails, compensating transactions undo earlier changes in reverse order. In Choreography-based sagas, services listen to message broker events directly. In Orchestration-based sagas, a centralized state machine sends explicit commands and manages compensating rollbacks, providing better visibility for complex multi-step workflows.",
    "evaluationCriteria": "Differentiates 2PC vs Saga, explains compensating rollbacks, and contrasts Choreography vs Orchestration.",
    "tags": [
      "Microservices",
      "Saga Pattern",
      "Distributed Transactions",
      "Kafka"
    ],
    "source": "Microservices Patterns (Chris Richardson)"
  },
  {
    "id": "jd-jb-core-04",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Core Java & OOP",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain Java 8 Streams API: intermediate vs terminal operations, lazy evaluation, and short-circuiting.",
    "expectedPoints": [
      "Intermediate operations (filter, map, sorted, flatMap) are lazy and return a new Stream without executing until a terminal operation is called.",
      "Terminal operations (collect, forEach, reduce, count) trigger pipeline execution and produce a result or side-effect.",
      "Short-circuiting operations (findFirst, anyMatch, limit) can terminate stream processing early without evaluating all elements."
    ],
    "sampleAnswer": "Java Streams process collections declaratively. Intermediate operations (e.g. map, filter) build an execution pipeline lazily without computing elements immediately. When a terminal operation (e.g. collect, reduce) is invoked, the JVM optimizes the pipeline, fusing operations and processing elements one-by-one. Short-circuiting operations like findFirst() or anyMatch() stop evaluation as soon as the condition is satisfied, avoiding unnecessary computations.",
    "evaluationCriteria": "Accurately defines lazy pipeline construction, terminal trigger, and short-circuit optimization.",
    "tags": [
      "Java",
      "Streams",
      "Functional Programming",
      "Java 8"
    ],
    "source": "Java Functional Programming"
  },
  {
    "id": "jd-jb-spring-04",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Spring Boot",
    "difficulty": "Intermediate",
    "type": "Practical",
    "question": "How do you handle global exception handling and structured API error responses in Spring Boot using @RestControllerAdvice and @ExceptionHandler?",
    "expectedPoints": [
      "Annotate a class with @RestControllerAdvice to intercept exceptions thrown across all @RestControllers.",
      "Define @ExceptionHandler methods for specific exceptions (ResourceNotFoundException, MethodArgumentNotValidException).",
      "Return standardized ResponseEntity<ErrorResponse> containing timestamp, status code, error code, message, and field validation errors."
    ],
    "sampleAnswer": "I create a GlobalExceptionHandler class annotated with @RestControllerAdvice. Inside, I write methods annotated with @ExceptionHandler for specific exceptions (e.g., ResourceNotFoundException -> 404, MethodArgumentNotValidException -> 400). The handler maps errors to a standard ErrorResponse DTO containing timestamp, HTTP status, error message, and a list of field-level validation errors, ensuring uniform JSON error contracts across the API.",
    "evaluationCriteria": "Covers @RestControllerAdvice, specific exception mapping, validation error extraction, and standard JSON error response structures.",
    "tags": [
      "Spring Boot",
      "Exception Handling",
      "REST",
      "API Design"
    ],
    "source": "Spring Boot REST Best Practices"
  },
  {
    "id": "jd-jb-jvm-03",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "JVM Internals",
    "difficulty": "Advanced",
    "type": "Debugging",
    "question": "How do you capture and analyze a Java Thread Dump to identify Deadlocks and CPU-hogging threads?",
    "expectedPoints": [
      "Generate thread dumps using jcmd <PID> Thread.print, jstack <PID>, or kill -3 <PID>.",
      "Inspect thread states: RUNNABLE, BLOCKED (waiting on monitor lock), WAITING, TIMED_WAITING.",
      "The JVM automatically includes a 'Found one Java-level deadlock' summary section at the bottom of the dump identifying circular lock dependencies.",
      "Match high-CPU thread TID from top -H -p <PID> (converted to hex) with the nid (native thread ID) in the thread dump."
    ],
    "sampleAnswer": "I capture thread dumps using jcmd <PID> Thread.print. To diagnose high CPU, I run 'top -H -p <PID>' to find the busy thread PID, convert that decimal PID to hexadecimal, and search for that 'nid=0x...' in the thread dump to see the exact executing Java line. To find deadlocks, I check the bottom of the thread dump where the JVM prints an explicit deadlock analysis report showing which threads hold locks and what locks they are waiting for.",
    "evaluationCriteria": "Explains jcmd/jstack generation, converting top thread ID to hex nid, thread states, and automated JVM deadlock detection.",
    "tags": [
      "Java",
      "JVM",
      "Thread Dump",
      "Deadlocks",
      "Debugging"
    ],
    "source": "JVM Troubleshooting & Diagnostics"
  },
  {
    "id": "jd-jb-col-04",
    "role": "Java Developer",
    "domain": "Backend Engineering",
    "topic": "Collections Framework",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between Comparable and Comparator interfaces in Java with practical code examples.",
    "expectedPoints": [
      "Comparable: Defines natural ordering inside the class itself via int compareTo(T o); modifies the class definition.",
      "Comparator: Defines custom/multiple external sorting strategies via int compare(T o1, T o2); does not modify original class.",
      "Java 8 Comparator.comparing() and .thenComparing() allow expressive chaining of sorting criteria."
    ],
    "sampleAnswer": "Comparable provides natural ordering by having the entity class implement compareTo(T o) (e.g. Employee sorting by ID). Comparator allows defining multiple external, flexible sorting rules without modifying the entity class (e.g., Comparator.comparing(Employee::getSalary).reversed().thenComparing(Employee::getName)). Collections.sort() or List.sort() accepts custom Comparators for dynamic runtime sorting.",
    "evaluationCriteria": "Differentiates single natural ordering vs multiple external strategies, method signatures, and Java 8 chaining.",
    "tags": [
      "Java",
      "Collections",
      "Comparable",
      "Comparator",
      "Sorting"
    ],
    "source": "Core Java Best Practices"
  },
  {
    "id": "jd-jb-jvm-01",
    "role": "Java Developer",
    "domain": "Java Backend Engineering",
    "topic": "JVM Internals",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "Explain JVM Memory Architecture: Heap (Young, Old Generation), Metaspace, Stack, and how Garbage Collection occurs in G1GC.",
    "expectedPoints": [
      "Heap stores all instantiated objects; split into Young (Eden, Survivor spaces S0/S1) and Old/Tenured generation.",
      "Metaspace stores class metadata, method bytecode, and static variables outside the heap in native memory.",
      "Thread Stack stores local primitive variables, method frame calls, and object references.",
      "G1GC divides the heap into equal-sized virtual regions, prioritizing regions with the most garbage first for predictable low-pause sweeps."
    ],
    "sampleAnswer": "The JVM divides memory into: 1) Thread Stack: stores local primitives and frame pointers per thread, destroyed automatically when methods return. 2) Heap: shared memory holding object instances. Young gen holds new objects; survivors move between S0/S1 and promote to Old Gen after a threshold age (MaxTenuringThreshold). 3) Metaspace: native memory holding class definitions and constants. G1 Garbage Collector partitions the heap into hundreds of 1-32MB regions and collects regions with the highest garbage density first to maintain tight pause time targets (MaxGCPauseMillis).",
    "evaluationCriteria": "Clearly diagrams Stack vs Heap vs Metaspace and explains generational promotion and G1GC region-based collection.",
    "tags": [
      "Java",
      "JVM",
      "Garbage Collection",
      "Memory Architecture"
    ],
    "source": "Senior Java Backend Interview"
  },
  {
    "id": "jd-jb-micro-01",
    "role": "Java Developer",
    "domain": "Java Backend Engineering",
    "topic": "Microservices",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "How do you implement the Saga Pattern in distributed microservices to maintain eventual consistency without two-phase commit (2PC)?",
    "expectedPoints": [
      "2PC causes database locking and scalability bottlenecks across distributed systems.",
      "Saga pattern organizes a distributed transaction into a sequence of local transactions in individual services.",
      "Choreography: Services publish domain events and listen to other service events asynchronously.",
      "Orchestration: A central Saga Orchestrator coordinates transaction steps and initiates Compensating Transactions on failure."
    ],
    "sampleAnswer": "Because two-phase commit locks database tables across network partitions, modern microservices use the Saga Pattern. A Saga executes local ACID transactions in sequence. If step 3 (e.g. payment processing) fails, the system triggers backward Compensating Transactions to reverse steps 1 and 2 (e.g. release reserved inventory). Sagas can be Orchestrated (a state machine coordinator sends direct commands to microservices) or Choreographed (services publish and react to events via message brokers like Kafka).",
    "evaluationCriteria": "Explains failure handling via compensating transactions and contrasts Orchestration with Choreography.",
    "tags": [
      "Microservices",
      "Distributed Systems",
      "Saga Pattern",
      "Architecture"
    ],
    "source": "Enterprise System Design"
  },
  {
    "id": "fed-html-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "HTML & CSS",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain the CSS box model and how \"box-sizing: border-box\" changes the calculation of an element's total width and height.",
    "expectedPoints": [
      "Box model consists of content, padding, border, and margin.",
      "Default content-box adds padding and border to the specified width/height.",
      "border-box absorbs padding and border into the specified width/height, preventing layout breakage."
    ],
    "sampleAnswer": "The CSS box model defines how element dimensions are computed: content -> padding -> border -> margin. Under the default content-box, width: 200px with 20px padding results in 240px rendered width. With box-sizing: border-box, the 200px width includes padding and border, greatly simplifying responsive layouts.",
    "evaluationCriteria": "Clearly explains all four box model components and contrasts content-box with border-box arithmetic.",
    "tags": [
      "CSS",
      "Box Model",
      "Layout",
      "Responsive"
    ],
    "source": "Frontend Core Fundamentals"
  },
  {
    "id": "fed-html-02",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "HTML & CSS",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Compare CSS Flexbox and CSS Grid. When would you choose one over the other in a modern responsive application?",
    "expectedPoints": [
      "Flexbox is one-dimensional (row OR column); Grid is two-dimensional (rows AND columns simultaneously).",
      "Flexbox is content-first (items dictate layout along an axis); Grid is layout-first (container defines tracks/areas).",
      "Use Flexbox for navbars, button groups, and linear alignment; use Grid for page-level layouts, photo galleries, and dashboard cards."
    ],
    "sampleAnswer": "Flexbox is designed for 1D layouts along a main axis, ideal for aligning UI controls, toolbars, and dynamic item rows. CSS Grid is designed for 2D spatial layouts where both columns and rows must align simultaneously, such as complex dashboard grids or responsive cards.",
    "evaluationCriteria": "Highlights dimensionality, content vs container flow, and practical application examples.",
    "tags": [
      "CSS",
      "Flexbox",
      "CSS Grid",
      "Responsive"
    ],
    "source": "Modern Web Layout Architecture"
  },
  {
    "id": "fed-html-03",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "HTML & CSS",
    "difficulty": "Advanced",
    "type": "Scenario",
    "question": "How do you structure CSS for a massive enterprise frontend to prevent specificity conflicts and dead code accumulation?",
    "expectedPoints": [
      "Use modern CSS methodologies like BEM (Block Element Modifier), CSS Modules, or CSS-in-JS/Tailwind.",
      "Leverage CSS Cascade Layers (@layer) to manage precedence explicitly.",
      "Employ CSS Custom Properties (variables) for design tokens (colors, spacing, typography).",
      "Set up PurgeCSS or unCSS in build pipelines to prune unused selectors."
    ],
    "sampleAnswer": "I isolate component styles using CSS Modules or scoped styled-components to avoid global namespace collisions. For global design systems, I define CSS custom properties for design tokens and utilize modern @layer to structure reset, base, component, and utility precedence cleanly, combined with build-time tree shaking.",
    "evaluationCriteria": "Mentions modularity, cascade management, design tokens, and build-time optimization.",
    "tags": [
      "CSS Architecture",
      "BEM",
      "Design Systems",
      "Maintainability"
    ],
    "source": "Enterprise Frontend Architecture"
  },
  {
    "id": "fed-js-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "JavaScript",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain Event Delegation in JavaScript. How does it leverage Event Bubbling to optimize memory and performance?",
    "expectedPoints": [
      "Event delegation attaches a single event listener to an ancestor rather than individual child elements.",
      "It relies on Event Bubbling (events propagate up the DOM tree from target to document).",
      "Event target (e.target) identifies which child was clicked.",
      "Saves memory by avoiding hundreds of listeners on dynamic lists."
    ],
    "sampleAnswer": "Event delegation places a single event listener on a parent container rather than each child node. When a child is clicked, the event bubbles up to the parent where e.target identifies the clicked element. This dramatically reduces memory footprint and automatically handles dynamically added child elements without reattaching handlers.",
    "evaluationCriteria": "Explains bubbling mechanism, e.target vs e.currentTarget, and memory benefits for dynamic lists.",
    "tags": [
      "JavaScript",
      "DOM",
      "Event Delegation",
      "Performance"
    ],
    "source": "Browser DOM Deep Dive"
  },
  {
    "id": "fed-js-02",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "JavaScript",
    "difficulty": "Intermediate",
    "type": "Debugging",
    "question": "What is the Event Loop in JavaScript? Explain the execution order between synchronous code, microtasks (Promises), and macrotasks (setTimeout).",
    "expectedPoints": [
      "Call stack executes synchronous code first.",
      "Microtask queue (Promise callbacks, queueMicrotask, MutationObserver) executes immediately when the stack empties before rendering.",
      "Macrotask queue (setTimeout, setInterval, I/O) executes one task per loop iteration after all microtasks are drained.",
      "Order: Synchronous -> All Microtasks -> Rendering -> Next Macrotask."
    ],
    "sampleAnswer": "The Event Loop coordinates code execution between the call stack, microtask queue, and macrotask queue. Synchronous code runs first on the call stack. When cleared, the engine drains ALL pending microtasks (Promise.then, queueMicrotask). Only after microtasks are empty and UI rendering occurs does the engine take the next macrotask (setTimeout).",
    "evaluationCriteria": "Correctly details the priority order: Sync -> Microtask queue (drained fully) -> Macrotask queue.",
    "tags": [
      "JavaScript",
      "Event Loop",
      "Asynchronous",
      "Microtasks"
    ],
    "source": "V8 Engine Internals"
  },
  {
    "id": "fed-js-03",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "JavaScript",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "How does garbage collection work in modern JavaScript V8 engines, and what are the most common causes of client-side memory leaks?",
    "expectedPoints": [
      "V8 uses generational Mark-and-Sweep garbage collection (Young/Old generation).",
      "Objects reachable from root references (window, active stack frames) are retained.",
      "Common memory leaks: forgotten global variables, uncleared setInterval/setTimeout timers, retained detached DOM nodes, and lingering event listeners in closures."
    ],
    "sampleAnswer": "V8 uses generational mark-and-sweep GC. Objects are marked as reachable from root references; unreachable objects are swept. Memory leaks occur when references linger unintentionally: e.g. uncleared timers retaining closure variables, forgotten global variables, event listeners on unmounted elements, or detached DOM trees referenced in JavaScript variables.",
    "evaluationCriteria": "Covers reachability algorithm, mark-sweep concept, and at least 3 concrete leak causes with remediation.",
    "tags": [
      "JavaScript",
      "Memory Leaks",
      "Garbage Collection",
      "V8"
    ],
    "source": "Advanced JavaScript Engineering"
  },
  {
    "id": "fed-react-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "React",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "What is the Virtual DOM and reconciliation in React, and how does the \"key\" prop optimize list rendering?",
    "expectedPoints": [
      "Virtual DOM is a lightweight in-memory JavaScript representation of the real DOM tree.",
      "Reconciliation (diffing algorithm) calculates the minimal set of real DOM mutations.",
      "The \"key\" prop gives items stable identity across renders, allowing React to move or preserve nodes rather than re-creating them from scratch."
    ],
    "sampleAnswer": "The Virtual DOM is an in-memory tree representation of real DOM nodes. When state changes, React builds a new Virtual DOM tree and diffs it against the previous tree (reconciliation). The \"key\" prop provides a unique, persistent identifier for list items, allowing React to match elements between renders and only update changed items without re-mounting the entire list.",
    "evaluationCriteria": "Explains diffing process, real DOM minimization, and key stability for list updates.",
    "tags": [
      "React",
      "Virtual DOM",
      "Reconciliation",
      "Keys"
    ],
    "source": "React Core Architecture"
  },
  {
    "id": "fed-react-02",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "React",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Compare React.memo, useMemo, and useCallback. When should you use each, and when is premature memoization counterproductive?",
    "expectedPoints": [
      "React.memo is a higher-order component that skips re-rendering a component if its props have not changed (shallow comparison).",
      "useMemo memoizes the result of an expensive calculation between renders.",
      "useCallback memoizes function instance references to prevent re-instantiating callbacks passed to memoized children.",
      "Overuse adds memory overhead and comparison cost for trivial calculations."
    ],
    "sampleAnswer": "React.memo wraps child components to skip re-renders if props are shallowly equal. useMemo caches expensive computed values (e.g. filtering 10,000 items), while useCallback stabilizes function identity across renders to prevent breaking React.memo on child props. Premature memoization adds memory overhead and unnecessary comparison cycles for trivial operations.",
    "evaluationCriteria": "Contrasts HOC vs hook usage, explains function reference stability, and acknowledges overhead trade-offs.",
    "tags": [
      "React",
      "Performance",
      "useMemo",
      "useCallback",
      "React.memo"
    ],
    "source": "React Performance Engineering"
  },
  {
    "id": "fed-react-03",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "React",
    "difficulty": "Advanced",
    "type": "Scenario",
    "question": "How would you architect state management for a high-frequency live dashboard updating 50 times per second without locking the browser UI thread?",
    "expectedPoints": [
      "Isolate high-frequency state to local leaf components or canvas/WebGL layers instead of top-level context.",
      "Use React 18 Concurrent features (useTransition, useDeferredValue) to keep input responsive.",
      "Throttle or batch incoming WebSocket updates via requestAnimationFrame.",
      "Utilize external state stores (Zustand, Valtio) with selective selector subscriptions to avoid re-rendering unaffected components."
    ],
    "sampleAnswer": "I would avoid storing rapid updates in root Context. Instead, I would use an external store with atomic selector subscriptions (like Zustand) so only the specific metrics widgets re-render. I would batch incoming WebSocket messages using requestAnimationFrame, and leverage React 18 useDeferredValue or useTransition so user interactions maintain high priority.",
    "evaluationCriteria": "Addresses context performance limitations, batching strategies, selective subscriptions, and Concurrent React.",
    "tags": [
      "React",
      "State Management",
      "Concurrent Mode",
      "High Frequency"
    ],
    "source": "High-Scale Frontend Systems"
  },
  {
    "id": "fed-ts-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "TypeScript",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between type and interface in TypeScript, and when you should prefer one over the other.",
    "expectedPoints": [
      "Both define shape of objects and can be extended.",
      "Interfaces support declaration merging (useful for public APIs and library augmentation).",
      "Type aliases support unions, intersections, primitives, tuples, and mapped/conditional types.",
      "Prefer interface for object models and component prop contracts; use type for unions and complex utility transformations."
    ],
    "sampleAnswer": "Interfaces define object contracts and support declaration merging, making them ideal for object models and public library typings. Type aliases are more expressive, supporting union types (A | B), primitives, tuples, and mapped types. Modern practice typically uses interfaces for component props and entity models, and types for unions and data transformations.",
    "evaluationCriteria": "Highlights declaration merging, union/mapped type capabilities, and best practice recommendations.",
    "tags": [
      "TypeScript",
      "Types",
      "Interfaces",
      "Type Safety"
    ],
    "source": "TypeScript Best Practices"
  },
  {
    "id": "fed-perf-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "Frontend Performance",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What are Core Web Vitals (LCP, INP, CLS)? What strategies do you use to diagnose and optimize poor metrics?",
    "expectedPoints": [
      "LCP (Largest Contentful Paint): measures loading speed of main content; optimize via image compression, CDN caching, and preloading hero images.",
      "INP (Interaction to Next Paint): measures interaction responsiveness; optimize by breaking long tasks, debouncing, and web workers.",
      "CLS (Cumulative Layout Shift): measures visual stability; optimize by reserving image/ad dimensions and avoiding dynamic content injections above the fold."
    ],
    "sampleAnswer": "Core Web Vitals quantify real user experience. LCP measures when the main hero element renders (target < 2.5s); optimize by preloading critical images and using CDN edge delivery. INP measures UI responsiveness (target < 200ms); optimize by eliminating long JavaScript tasks. CLS measures unexpected layout movement (target < 0.1); optimize by reserving width/height on images and dynamic banners.",
    "evaluationCriteria": "Clearly defines each metric with thresholds and actionable optimization tactics for each.",
    "tags": [
      "Core Web Vitals",
      "LCP",
      "INP",
      "CLS",
      "Performance"
    ],
    "source": "Web Vitals Performance Guide"
  },
  {
    "id": "fed-a11y-01",
    "role": "Frontend Developer",
    "domain": "Frontend Engineering",
    "topic": "Accessibility",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What are WAI-ARIA roles, states, and properties? Why is semantic HTML preferred over ARIA attributes?",
    "expectedPoints": [
      "ARIA bridges accessibility gaps for custom dynamic widgets (e.g. role=\"dialog\", aria-expanded=\"true\").",
      "The first rule of ARIA: Do not use ARIA if a native HTML5 element (e.g. <button>, <dialog>, <nav>) already exists.",
      "Native elements provide built-in keyboard navigation, focus management, and screen reader announcements automatically without extra code."
    ],
    "sampleAnswer": "WAI-ARIA provides attributes to describe custom interactive widgets to screen readers. However, native HTML elements like <button> or <dialog> have built-in keyboard navigation (Tab, Enter, Space) and accessible semantics out-of-the-box. The first rule of ARIA is to always prefer semantic HTML, using ARIA only when native elements cannot satisfy custom design requirements.",
    "evaluationCriteria": "Mentions \"First Rule of ARIA\", keyboard accessibility, and state management (aria-expanded, aria-hidden).",
    "tags": [
      "Accessibility",
      "a11y",
      "WAI-ARIA",
      "WCAG"
    ],
    "source": "Accessibility Guidelines"
  },
  {
    "id": "dev-k8s-01",
    "role": "DevOps Engineer",
    "domain": "DevOps Engineering",
    "topic": "Kubernetes",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "Explain the core Kubernetes architecture: Control Plane (API Server, etcd, Scheduler, Controller Manager) vs Worker Nodes (Kubelet, Kube-proxy, Container Runtime).",
    "expectedPoints": [
      "Control plane manages cluster state: API server is the REST gateway; etcd is the distributed key-value store; Scheduler assigns pods to nodes; Controller Manager reconciles desired vs actual state.",
      "Worker nodes run workloads: Kubelet ensures containers run in pods; Kube-proxy manages network routing/rules; Container Runtime (containerd) executes containers."
    ],
    "sampleAnswer": "The Kubernetes Control Plane governs the cluster: the API Server handles requests, etcd persists cluster state, the Scheduler assigns pods based on resource constraints, and the Controller Manager maintains desired state loops. Worker nodes host workloads: Kubelet communicates with the API server to run pods, container runtime executes them, and kube-proxy handles network service routing.",
    "evaluationCriteria": "Correctly identifies responsibilities of all 4 control plane components and worker node components.",
    "tags": [
      "Kubernetes",
      "Architecture",
      "Control Plane",
      "Kubelet"
    ],
    "source": "Kubernetes Core Architecture"
  },
  {
    "id": "dev-k8s-02",
    "role": "DevOps Engineer",
    "domain": "DevOps Engineering",
    "topic": "Kubernetes",
    "difficulty": "Intermediate",
    "type": "Scenario",
    "question": "How do you diagnose and troubleshoot a Kubernetes Pod stuck in \"CrashLoopBackOff\" status?",
    "expectedPoints": [
      "Run \"kubectl describe pod <pod>\" to inspect events, exit codes, and health check failures.",
      "Check logs using \"kubectl logs <pod> --previous\" to see exit stack traces before restart.",
      "Verify container resource limits (OOMKilled exit code 137).",
      "Check configuration maps, secrets, and environment variable bindings.",
      "Debug interactively using \"kubectl run debug --rm -it\" or ephemeral containers."
    ],
    "sampleAnswer": "I run \"kubectl describe pod\" to view termination reasons (e.g. exit code 137 indicates OOMKilled). Next, I inspect previous crash logs with \"kubectl logs <pod> --previous\" to locate unhandled runtime exceptions. If related to missing configs, I check Secrets/ConfigMaps. For network/connectivity issues, I attach an ephemeral debug container to test DNS and service endpoints.",
    "evaluationCriteria": "Systematic workflow: describe events -> logs --previous -> exit codes (137 vs 1) -> config verification.",
    "tags": [
      "Kubernetes",
      "Troubleshooting",
      "CrashLoopBackOff",
      "Debugging"
    ],
    "source": "Kubernetes Production Operations"
  },
  {
    "id": "dev-cicd-01",
    "role": "DevOps Engineer",
    "domain": "DevOps Engineering",
    "topic": "CI/CD Pipelines",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the difference between Blue-Green Deployment, Rolling Updates, and Canary Deployments in cloud delivery.",
    "expectedPoints": [
      "Rolling Update: Gradually replaces old pods with new ones; zero downtime, low extra resource cost, but runs mixed versions simultaneously.",
      "Blue-Green: Runs two identical environments; switches router/load balancer instantly to Green once verified; fast instant rollback, but requires 2x infrastructure resources.",
      "Canary: Routes a small percentage (e.g. 5%) of real traffic to new version; monitors error rates and latency before wider rollout; safest blast radius."
    ],
    "sampleAnswer": "Rolling updates replace pods incrementally, avoiding downtime with minimal extra resource overhead, but temporarily run mixed versions. Blue-Green runs two identical environments and switches traffic at the router instantly, providing clean verification and instant rollback at the cost of double compute resources. Canary routes 5-10% of real user traffic to the new version to evaluate metrics safely before 100% rollout.",
    "evaluationCriteria": "Compares infrastructure cost, rollback speed, blast radius, and version coexistence for all three.",
    "tags": [
      "CI/CD",
      "Blue-Green",
      "Canary",
      "Deployment Strategies"
    ],
    "source": "Modern Delivery Pipelines"
  },
  {
    "id": "dev-iac-01",
    "role": "DevOps Engineer",
    "domain": "DevOps Engineering",
    "topic": "Terraform & IaC",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How does Terraform manage state? What are the risks of state file corruption and how do remote backends with locking prevent them?",
    "expectedPoints": [
      "State file (terraform.tfstate) maps declared code resources to real cloud provider resource IDs and attributes.",
      "Concurrent runs without locking can overwrite state, causing orphaned or duplicate cloud infrastructure.",
      "Remote backends (e.g. AWS S3 with DynamoDB locking, or Terraform Cloud) enforce state locking to serialize execution and encrypt state at rest."
    ],
    "sampleAnswer": "Terraform uses state files to record mappings between declared HCL resources and real cloud infrastructure IDs. If multiple team members or CI pipelines run simultaneously without state locking, state files can corrupt or overwrite each other. Remote backends (like S3 + DynamoDB) store state securely in a shared location and acquire a lock before plan/apply, serializing execution.",
    "evaluationCriteria": "Explains state purpose, concurrency race conditions, and how remote locks (DynamoDB) resolve them.",
    "tags": [
      "Terraform",
      "State Locking",
      "Infrastructure as Code",
      "AWS S3"
    ],
    "source": "IaC Production Best Practices"
  },
  {
    "id": "dev-obs-01",
    "role": "DevOps Engineer",
    "domain": "DevOps Engineering",
    "topic": "Observability & Monitoring",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the Three Pillars of Observability: Metrics, Logs, and Distributed Tracing. How do they complement each other during an incident?",
    "expectedPoints": [
      "Metrics (Prometheus/CloudWatch): Numeric aggregated timeseries data showing THAT a problem exists (e.g. error rate spike, CPU 95%).",
      "Logs (ELK/Loki): Detailed timestamped event messages showing WHY a problem happened (e.g. stack traces, query errors).",
      "Distributed Traces (Jaeger/OpenTelemetry): Request lifecycle across microservices showing WHERE latency or failures occurred.",
      "Workflow: Metric alert fires -> Trace isolates failing service -> Logs pinpoint exact code error."
    ],
    "sampleAnswer": "Metrics notify you THAT something is wrong via numeric aggregations (e.g. 5xx rate > 2%). Distributed tracing reveals WHERE the issue is occurring across microservices by tracking trace IDs through RPC calls. Logs explain WHY it failed by providing granular context and stack traces. During an incident, an alert triggers from metrics, tracing pinpoints the slow service, and logs reveal the root error.",
    "evaluationCriteria": "Defines all three pillars and articulates the incident investigation workflow combining them.",
    "tags": [
      "Observability",
      "Prometheus",
      "Distributed Tracing",
      "OpenTelemetry"
    ],
    "source": "SRE Observability Handbook"
  },
  {
    "id": "bed-node-01",
    "role": "Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Node.js & Express",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "How does the Node.js module system work? Explain the difference between CommonJS (require/module.exports) and ES Modules (import/export).",
    "expectedPoints": [
      "CommonJS is synchronous, runtime loading; exports are dynamic and can occur inside conditions.",
      "ES Modules are static, asynchronous loading; imports must be top-level (unless using dynamic import()), allowing build-time tree shaking.",
      "Node.js distinguishes them via file extensions (.cjs vs .mjs) or \"type\": \"module\" in package.json."
    ],
    "sampleAnswer": "CommonJS uses require() and module.exports, executing synchronously at runtime, which allows dynamic conditional imports. ES Modules (ESM) use static import/export statements parsed before evaluation, enabling dead-code elimination (tree-shaking) and native browser interoperability. In Node.js, setting \"type\": \"module\" in package.json enables ESM across the project.",
    "evaluationCriteria": "Contrasts runtime/sync loading with static/async analysis and explains tree-shaking benefits.",
    "tags": [
      "Node.js",
      "CommonJS",
      "ESM",
      "Modules"
    ],
    "source": "Node.js Architecture"
  },
  {
    "id": "bed-sys-01",
    "role": "Backend Developer",
    "domain": "Backend Engineering",
    "topic": "System Design",
    "difficulty": "Intermediate",
    "type": "System Design",
    "question": "How do you design a high-throughput URL shortening service (like Bitly) handling 100M new URLs per month and 10B clicks per month?",
    "expectedPoints": [
      "Capacity estimation: 100M writes/month (~40 writes/sec), 10B reads/month (~4,000 reads/sec) - highly read-heavy (100:1 read/write ratio).",
      "Shortening strategy: Base62 encoding (a-z, A-Z, 0-9) using a 7-character hash providing 62^7 (~3.5 trillion) unique URLs.",
      "Collision prevention: Distributed ID generator (Snowflake or pre-allocated range counter service) rather than MD5 hash truncation.",
      "Caching: Redis caching the top 20% high-frequency URLs (80/20 rule) to absorb 99% of read traffic.",
      "Database: NoSQL key-value/document store (DynamoDB or Cassandra) for fast O(1) single-key lookups."
    ],
    "sampleAnswer": "With a 100:1 read-to-write ratio, I would use Base62 encoding on a 64-bit unique ID generated by a distributed counter service to yield a 7-character alias without hash collisions. I would store mappings in a distributed key-value store like DynamoDB for fast O(1) reads. I would deploy a Redis cluster in front of the database caching hot URLs with an LRU eviction policy, easily serving 4,000+ reads/sec with sub-5ms latency.",
    "evaluationCriteria": "Calculates read/write ratios, details Base62 encoding, explains unique ID generation, and designs Redis caching.",
    "tags": [
      "System Design",
      "URL Shortener",
      "Base62",
      "Redis",
      "Caching"
    ],
    "source": "System Design Interview Essentials"
  },
  {
    "id": "bed-db-01",
    "role": "Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Databases & SQL",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What are database indexes? Explain the difference between Clustered and Non-Clustered indexes in SQL databases.",
    "expectedPoints": [
      "An index is an auxiliary B+ Tree data structure that accelerates row retrieval without scanning the whole table.",
      "Clustered Index: Determines the physical order of data in the table; only 1 clustered index per table (usually primary key).",
      "Non-Clustered Index: Stored separately with pointers back to the clustered index/row locator; multiple non-clustered indexes allowed."
    ],
    "sampleAnswer": "A database index uses B+ Trees to allow logarithmic O(log N) searches instead of full table scans (O(N)). A Clustered Index dictates the physical ordering of records on disk; hence, only one clustered index exists per table (typically the primary key). Non-clustered indexes maintain an independent structure containing the indexed column and a pointer back to the primary key row locator.",
    "evaluationCriteria": "Distinguishes physical ordering vs pointer structure and notes single vs multiple index limits.",
    "tags": [
      "SQL",
      "Indexing",
      "B+ Tree",
      "Performance"
    ],
    "source": "Database Internals"
  },
  {
    "id": "bed-auth-01",
    "role": "Backend Developer",
    "domain": "Backend Engineering",
    "topic": "Authentication & Security",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How do Refresh Tokens work in JWT authentication? Why is using an Access Token + Refresh Token pattern safer than long-lived Access Tokens?",
    "expectedPoints": [
      "Access tokens are short-lived (e.g. 15 minutes) and sent in HTTP Authorization headers for stateless verification.",
      "Refresh tokens are long-lived (e.g. 7-30 days) and stored securely in HttpOnly, Secure cookies, used only to mint new access tokens.",
      "Limits exposure: If an access token leaks, it expires quickly. Refresh tokens can be revoked in the database via token blacklisting/rotation."
    ],
    "sampleAnswer": "Short-lived access tokens (15 mins) minimize damage if intercepted because they expire quickly. When expired, the client presents the refresh token—stored securely in an HttpOnly cookie immune to JavaScript XSS—to a dedicated refresh endpoint. The server verifies the refresh token against a database session table, enabling immediate revocation if suspicious activity occurs.",
    "evaluationCriteria": "Explains short vs long TTL, HttpOnly protection against XSS, and server-side revocation mechanisms.",
    "tags": [
      "Security",
      "JWT",
      "Refresh Tokens",
      "Authentication"
    ],
    "source": "Web Security Best Practices"
  },
  {
    "id": "swe-dsa-01",
    "role": "Software Developer",
    "domain": "Software Engineering",
    "topic": "Data Structures & Algorithms",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the Two Pointers technique. In what algorithmic scenarios does it reduce time complexity from O(N^2) to O(N)?",
    "expectedPoints": [
      "Two pointers navigate an array or list from opposite ends or at differing speeds (slow/fast).",
      "Common scenarios: searching for pairs in a sorted array (e.g. Two Sum II, 3Sum), reversing strings in-place, and removing duplicates.",
      "Fast & slow pointers (Floyd's Tortoise and Hare) detect cycles in linked lists or find the middle node in a single pass."
    ],
    "sampleAnswer": "The Two Pointers technique tracks two indices to scan an array concurrently. In sorted arrays, moving left/right pointers toward each other based on comparison sum eliminates nested loops, reducing O(N^2) brute force to O(N). Fast and slow pointer variations (Floyd's algorithm) detect linked list cycles and find midpoints in O(N) time with O(1) auxiliary space.",
    "evaluationCriteria": "Covers opposite-end pointers on sorted arrays and fast/slow pointer cycle detection.",
    "tags": [
      "DSA",
      "Two Pointers",
      "Algorithms",
      "Optimization"
    ],
    "source": "Coding Patterns Handbook"
  },
  {
    "id": "swe-oop-01",
    "role": "Software Developer",
    "domain": "Software Engineering",
    "topic": "OOP & Design Patterns",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain the SOLID principles of Object-Oriented Design and provide a practical example of violating and fixing the Open/Closed Principle.",
    "expectedPoints": [
      "S: Single Responsibility, O: Open/Closed (open for extension, closed for modification), L: Liskov Substitution, I: Interface Segregation, D: Dependency Inversion.",
      "OCP violation: A payment processor using switch(paymentType) that requires editing the class every time a new payment method (e.g. Crypto) is added.",
      "OCP fix: Create a PaymentStrategy interface with a pay() method, allowing new payment implementations without modifying existing classes."
    ],
    "sampleAnswer": "SOLID principles guide maintainable OOP design. The Open/Closed Principle states classes should be open for extension but closed for modification. A common violation is a function with nested switch statements checking payment types. Fixing this involves creating a PaymentMethod interface with an execute() method, allowing new payment strategies to be added without touching the existing processor.",
    "evaluationCriteria": "Lists all 5 principles and gives a concrete violation and interface/polymorphic refactoring.",
    "tags": [
      "OOP",
      "SOLID",
      "Design Patterns",
      "Architecture"
    ],
    "source": "Clean Architecture Principles"
  },
  {
    "id": "swe-sys-01",
    "role": "Software Developer",
    "domain": "Software Engineering",
    "topic": "System Design",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is Database Sharding vs Partitioning? How do you choose a Shard Key and handle cross-shard queries?",
    "expectedPoints": [
      "Partitioning divides a table into smaller sets on the same database server (e.g. range by date).",
      "Sharding distributes database partitions horizontally across multiple physical server nodes.",
      "A good shard key distributes read/write traffic evenly (high cardinality, uniform distribution, avoids hotspots).",
      "Cross-shard queries require scatter-gather queries which increase latency and should be minimized."
    ],
    "sampleAnswer": "Partitioning splits large tables into segments on a single database instance, whereas Sharding distributes data horizontally across multiple physical database instances. Choosing a good shard key requires high cardinality and uniform access patterns (e.g. User ID) to prevent hot shards. Cross-shard joins require scatter-gather queries across all nodes, so schemas are denormalized to ensure related data resides on the same shard.",
    "evaluationCriteria": "Explains single vs multi-node distinction, shard key distribution criteria, and scatter-gather query drawbacks.",
    "tags": [
      "System Design",
      "Databases",
      "Sharding",
      "Scalability"
    ],
    "source": "High-Scale Data Systems"
  },
  {
    "id": "qa-auto-01",
    "role": "QA Automation Engineer",
    "domain": "Quality Assurance Engineering",
    "topic": "Automation Fundamentals",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "What is the Test Automation Pyramid and what proportion of tests should reside at Unit, Integration, and UI levels?",
    "expectedPoints": [
      "Pyramid base: Unit Tests (~70%) - fast, isolated, inexpensive to maintain.",
      "Pyramid middle: Integration/API Tests (~20%) - test service communication and business flows.",
      "Pyramid top: End-to-End / UI Tests (~10%) - test critical user journeys in real browsers; slow and susceptible to flakiness.",
      "Inverted pyramid (ice cream cone anti-pattern) causes brittle, slow test runs."
    ],
    "sampleAnswer": "The Test Automation Pyramid recommends structuring automated testing with ~70% unit tests at the base for speed and pinpoint failure isolation, ~20% API and integration tests to verify component contracts, and ~10% end-to-end UI tests for critical user journeys. Relying primarily on UI tests creates a slow, brittle test suite with high maintenance costs.",
    "evaluationCriteria": "Articulates the 70/20/10 ratio, explains execution speed and cost trade-offs, and mentions anti-patterns.",
    "tags": [
      "QA",
      "Test Pyramid",
      "Test Strategy",
      "Automation"
    ],
    "source": "Modern Testing Principles"
  },
  {
    "id": "qa-sel-01",
    "role": "QA Automation Engineer",
    "domain": "Quality Assurance Engineering",
    "topic": "Selenium & Playwright",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Why is Playwright gaining popularity over legacy Selenium for modern single-page web applications?",
    "expectedPoints": [
      "Auto-waiting: Playwright automatically waits for elements to be actionable (visible, stable, enabled) before clicking, eliminating arbitrary sleeps.",
      "Fast execution: Communicates directly via browser WebSocket devtools protocol rather than HTTP WebDriver translation.",
      "Built-in features: Native network mocking, multi-tab/multi-origin contexts, tracing, and video recording without third-party plugins.",
      "Fast browser contexts: Isolated browser contexts spin up in milliseconds without relaunching the browser process."
    ],
    "sampleAnswer": "Playwright communicates directly over browser WebSocket protocols rather than legacy HTTP WebDriver commands, dramatically improving execution speed. Crucially, Playwright features built-in auto-waiting for actionability (visibility, stability) before actions, eliminating the primary cause of flaky tests in Selenium. It also supports instant isolated browser contexts and native network request interception.",
    "evaluationCriteria": "Highlights auto-waiting, WebSocket protocol vs WebDriver HTTP, and isolated browser contexts.",
    "tags": [
      "Playwright",
      "Selenium",
      "Automation Testing",
      "UI Testing"
    ],
    "source": "Test Automation Tooling"
  },
  {
    "id": "qa-api-01",
    "role": "QA Automation Engineer",
    "domain": "Quality Assurance Engineering",
    "topic": "API Testing",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "How do you design a comprehensive automated API test suite using tools like REST Assured or Postman/Newman?",
    "expectedPoints": [
      "Status code and response time validation.",
      "JSON Schema validation to verify data contracts and types.",
      "Header verification (Content-Type, security headers).",
      "Negative and edge cases: invalid payloads (400), unauthorized tokens (401), missing resources (404), and rate limits (429).",
      "Data cleanup: teardown fixtures to delete created test records."
    ],
    "sampleAnswer": "A robust API test suite asserts HTTP status codes, latency thresholds, and validates the response body against a strict JSON schema contract. It tests positive scenarios and comprehensive boundary cases: missing required fields (400), expired JWTs (401), and SQL injection attempts. Tests should run with dynamic test data in isolated environments and execute teardown calls to keep state clean.",
    "evaluationCriteria": "Covers schema validation, positive and negative assertions, and test data lifecycle management.",
    "tags": [
      "API Testing",
      "REST Assured",
      "Schema Validation",
      "Postman"
    ],
    "source": "API Quality Engineering"
  },
  {
    "id": "qa-bdd-01",
    "role": "QA Automation Engineer",
    "domain": "Quality Assurance Engineering",
    "topic": "Automation Fundamentals",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "What is Behavior-Driven Development (BDD) and how do Cucumber/Gherkin Given-When-Then syntax bridges business and engineering?",
    "expectedPoints": [
      "Gherkin provides human-readable scenario syntax",
      "Given establishes preconditions, When specifies action, Then asserts outcome",
      "Step definitions map Gherkin statements to automation code"
    ],
    "sampleAnswer": "BDD uses human-readable Gherkin syntax (Given-When-Then) so product managers, developers, and QA share a single executable specification. Automation runners like Cucumber map these sentences directly to step definitions that execute UI or API tests.",
    "evaluationCriteria": "Explains Given-When-Then purpose, step definitions, and cross-functional alignment.",
    "tags": [
      "BDD",
      "Cucumber",
      "Gherkin",
      "Automation"
    ],
    "source": "QA Best Practices"
  },
  {
    "id": "qa-ci-01",
    "role": "QA Automation Engineer",
    "domain": "Quality Assurance Engineering",
    "topic": "CI/CD",
    "difficulty": "Advanced",
    "type": "Scenario",
    "question": "How do you execute 2,000 Selenium/Playwright UI tests in parallel within 10 minutes in a CI/CD pipeline?",
    "expectedPoints": [
      "Test sharding across multiple container runners",
      "Headless execution",
      "Docker Selenium Grid or cloud browser providers",
      "Disable unnecessary media/analytics assets during runs"
    ],
    "sampleAnswer": "I would shard test files across parallel CI runner matrix jobs (e.g. 10 workers each running 200 tests). I would run browsers in headless mode with video/tracing enabled only on failure, block third-party analytics scripts via browser request interception, and use dockerized browser containers to eliminate VM spin-up overhead.",
    "evaluationCriteria": "Covers test sharding matrix, headless mode, asset blocking, and failure-only tracing.",
    "tags": [
      "CI/CD",
      "Parallel Execution",
      "Test Sharding",
      "Performance"
    ],
    "source": "Enterprise Test Infrastructure"
  },
  {
    "id": "qa-strat-01",
    "role": "QA Automation Engineer",
    "domain": "Quality Assurance Engineering",
    "topic": "QA Strategy & Bug Tracking",
    "difficulty": "Intermediate",
    "type": "Scenario",
    "question": "What is the difference between Severity and Priority of a defect? Provide an example of high severity but low priority, and vice versa.",
    "expectedPoints": [
      "Severity is technical impact on the system; Priority is urgency of fixing for business.",
      "High severity, low priority: System crashes when an obscure, rarely used legacy export feature is clicked by 0.01% users.",
      "Low severity, high priority: Company logo is misspelled or broken on the public home page."
    ],
    "sampleAnswer": "Severity measures the technical degree of system impact (e.g. crash, data loss). Priority indicates business urgency for remediation. High severity / low priority: a critical crash in a legacy report accessed once a year by 1 internal admin. Low severity / high priority: a typo in the main corporate logo on the login page—no data is lost, but the brand image requires immediate fix.",
    "evaluationCriteria": "Accurately defines both and gives realistic inverted examples.",
    "tags": [
      "QA Strategy",
      "Defect Management",
      "Severity",
      "Priority"
    ],
    "source": "Software Testing Standards"
  },
  {
    "id": "qa-loc-01",
    "role": "QA Automation Engineer",
    "domain": "Quality Assurance Engineering",
    "topic": "Selenium & Playwright",
    "difficulty": "Beginner",
    "type": "Technical",
    "question": "What locator strategies are most reliable in UI automation, and why should absolute XPaths be avoided?",
    "expectedPoints": [
      "Best: unique test IDs (data-testid), accessible role names (getByRole), or stable unique IDs.",
      "Avoid absolute XPaths because any minor DOM hierarchy change (e.g. wrapping in a div) immediately breaks the locator."
    ],
    "sampleAnswer": "The most resilient locators use dedicated test identifiers like data-testid or accessible attributes like role and label text (getByRole), which mirror user interaction. Absolute XPaths (e.g. /html/body/div[2]/div/span) should strictly be avoided because any minor layout adjustment or wrapper component breaks the entire test script.",
    "evaluationCriteria": "Recommends data-testid and accessible roles while explaining fragile DOM coupling of absolute XPaths.",
    "tags": [
      "Playwright",
      "Locators",
      "Selenium",
      "Resilience"
    ],
    "source": "UI Test Engineering"
  },
  {
    "id": "swe-dsa-02",
    "role": "Software Developer",
    "domain": "Software Engineering",
    "topic": "Data Structures & Algorithms",
    "difficulty": "Intermediate",
    "type": "Technical",
    "question": "Explain how a Hash Table handles collisions using Separate Chaining vs Open Addressing (Linear Probing).",
    "expectedPoints": [
      "Separate Chaining stores colliding keys in a linked list or balanced tree at the bucket index.",
      "Open Addressing probes for the next available empty slot in the table array.",
      "Load factor dictates when rehashing/resizing occurs."
    ],
    "sampleAnswer": "In Separate Chaining, each array index holds a linked list or tree of entries mapping to that hash bucket. In Open Addressing, all items reside directly within the array; when a collision occurs, the algorithm probes adjacent slots (linear or quadratic probing) until an empty cell is found. When the load factor exceeds a threshold (e.g. 0.75), the table rehashes into a larger array.",
    "evaluationCriteria": "Explains bucket chaining vs probe searching and mentions load factor resizing.",
    "tags": [
      "DSA",
      "Hash Table",
      "Collision Resolution"
    ],
    "source": "Algorithms & Data Structures"
  },
  {
    "id": "swe-dsa-03",
    "role": "Software Developer",
    "domain": "Software Engineering",
    "topic": "Data Structures & Algorithms",
    "difficulty": "Advanced",
    "type": "Technical",
    "question": "What is Dynamic Programming? What is the difference between Memoization (Top-Down) and Tabulation (Bottom-Up)?",
    "expectedPoints": [
      "Applies to problems with Optimal Substructure and Overlapping Subproblems.",
      "Memoization (Top-Down): Recursive with a cache to avoid recomputing identical states.",
      "Tabulation (Bottom-Up): Iterative; fills a table starting from base cases, often saving space."
    ],
    "sampleAnswer": "Dynamic Programming optimizes problems exhibiting overlapping subproblems and optimal substructure. Top-Down (Memoization) starts with the main problem recursively and caches solved subproblem results in a hash map or array. Bottom-Up (Tabulation) starts from base cases iteratively filling a table, often allowing space optimization from O(N) to O(1) by retaining only recent state variables.",
    "evaluationCriteria": "Identifies the two core DP prerequisites and contrasts recursive caching with iterative base-up table filling.",
    "tags": [
      "DSA",
      "Dynamic Programming",
      "Memoization",
      "Tabulation"
    ],
    "source": "Algorithm Design Manual"
  }
];

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
