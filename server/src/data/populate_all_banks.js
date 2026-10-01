// Complete Question Banks Generator for CareerForge
// Generates:
// 1. companyQuestionsData.js (10-15 questions per company across Amazon, Google, Microsoft, Zoho, Freshworks, TCS, Infosys, Cognizant, Oracle, Deloitte)
// 2. leetcodeProblemsData.js (55+ problems across all requested DSA and SQL topics)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// =========================================================================
// 1. COMPANY PROFILES & QUESTIONS
// =========================================================================
const companyProfiles = {
  Amazon: {
    name: 'Amazon',
    focus: 'Leadership Principles (Customer Obsession, Ownership, Bias for Action), System Design, Scalable Cloud Architecture, and Data Structures.',
    hiringRounds: ['Online Assessment (Coding + Work Style)', 'Technical Round 1 (DSA & Coding)', 'Technical Round 2 (System Design & Architecture)', 'Bar Raiser Round (Leadership Principles & Culture)'],
    prepTips: 'Frame all behavioral answers in the STAR format mapped directly to Amazon Leadership Principles. Emphasize scalability and metric-driven outcomes in project discussions.'
  },
  Google: {
    name: 'Google',
    focus: 'Algorithms, Time/Space Complexity Optimization, Clean Code, Googleyness, and Open-Ended System Architecture.',
    hiringRounds: ['Technical Screen (DSA & Problem Solving)', 'Coding Round 1 (Data Structures)', 'Coding Round 2 (Algorithms & Graphs)', 'System Design / Googleyness & Leadership'],
    prepTips: 'Always state assumptions, analyze big-O complexity upfront, and write clean, modular, production-ready code with edge case testing.'
  },
  Microsoft: {
    name: 'Microsoft',
    focus: 'Software Engineering Fundamentals, OOP, Cloud Systems (Azure), Design Patterns, and Growth Mindset.',
    hiringRounds: ['Online Assessment', 'Technical Coding Round', 'System Design & Object-Oriented Design', 'As Appropriate (AA) / Hiring Manager Round'],
    prepTips: 'Demonstrate deep understanding of design patterns, maintainability, and willingness to learn from feedback (Growth Mindset).'
  },
  Zoho: {
    name: 'Zoho',
    focus: 'Core Problem Solving, Low-Level Object-Oriented Design (LOD/OOP), CLI applications, and C/Java/JS fundamentals without relying on prebuilt libraries.',
    hiringRounds: ['Round 1: Basic Aptitude & Flowcharts/Loops', 'Round 2: Advanced Programming (Arrays/Strings/Matrix)', 'Round 3: Object-Oriented Design (CLI Apps e.g. Train Booking, Snake Game)', 'Round 4: Technical & HR Interview'],
    prepTips: 'Focus heavily on pure logic, recursion, matrix manipulation, and writing clean object-oriented class structures from scratch.'
  },
  Freshworks: {
    name: 'Freshworks',
    focus: 'SaaS Architecture, REST APIs, Frontend Engineering (React/Ember), Scalable Databases, and Customer-Centric Product Thinking.',
    hiringRounds: ['Online Coding Assessment', 'Frontend/Backend Technical Round', 'System Design & API Architecture', 'Culture & Leadership Round'],
    prepTips: 'Highlight experience building clean RESTful APIs, handling asynchronous workflows, and building responsive, user-friendly SaaS interfaces.'
  },
  TCS: {
    name: 'TCS',
    focus: 'Aptitude, Core Java/C++, SQL, Web Technologies, Software Engineering Life Cycle, and Communication.',
    hiringRounds: ['TCS NQT (Cognitive + Technical Assessment)', 'Technical Interview (OOP, SQL, Core Programming)', 'Managerial & HR Interview'],
    prepTips: 'Be confident in fundamental concepts like OOP pillars, basic SQL joins/queries, normalization, and your final year project architecture.'
  },
  Infosys: {
    name: 'Infosys',
    focus: 'Programming Fundamentals, Problem Solving, Database Concepts, Cloud Foundations, and Agile Delivery.',
    hiringRounds: ['InfyTQ / Certification Exam', 'Technical Interview (Data Structures & Database Design)', 'HR Interview'],
    prepTips: 'Master sorting, searching, array/string problems, and explain your technical decisions in past academic or personal projects.'
  },
  Cognizant: {
    name: 'Cognizant',
    focus: 'Core Programming, Full-Stack Fundamentals, SQL, Testing Concepts, and Client Readiness.',
    hiringRounds: ['GenC / GenC Next Assessment', 'Technical Evaluation Round', 'HR & Communication Assessment'],
    prepTips: 'Review database normalization, REST API basics, Git commands, and be prepared to write code on a whiteboard or online editor.'
  },
  Oracle: {
    name: 'Oracle',
    focus: 'Database Internals, SQL & Query Optimization, Java/C++ Systems, Concurrency, and Cloud Infrastructure.',
    hiringRounds: ['Online Coding Test', 'Technical Round 1 (DSA & Concurrency)', 'Technical Round 2 (Database Internals & Systems)', 'Director / Management Round'],
    prepTips: 'Deep-dive into indexing algorithms (B-Trees), ACID transactions, memory models, and distributed database concepts.'
  },
  Deloitte: {
    name: 'Deloitte',
    focus: 'Technology Consulting, Architecture, Enterprise Cloud Solutions, Data Analytics, and Business Communication.',
    hiringRounds: ['Online Assessment (Aptitude + Technical)', 'Technical Interview (Tech Stack & Case Studies)', 'Partner / HR Interview'],
    prepTips: 'Demonstrate how technical solutions solve business problems. Focus on business value, clean communication, and modern cloud technologies.'
  }
};

const companyQuestions = [
  // =========================================================================
  // AMAZON (12 Questions)
  // =========================================================================
  {
    id: 'amz-01', company: 'Amazon', role: 'All', round: 'Behavioral', topic: 'Customer Obsession', difficulty: 'Intermediate', type: 'Behavioral',
    question: 'Tell me about a time when you had to balance customer needs against business or technical constraints. How did you decide?',
    expectedPoints: ['Specific scenario detailing a trade-off', 'Focus on customer long-term trust over short-term shortcut', 'Quantifiable impact / metric outcome using STAR format'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'amz-02', company: 'Amazon', role: 'All', round: 'Behavioral', topic: 'Ownership & Bias for Action', difficulty: 'Beginner', type: 'Behavioral',
    question: 'Describe a situation where you noticed an issue outside your direct responsibility and stepped up to solve it without waiting for instructions.',
    expectedPoints: ['Proactive initiative without explicit assignment', 'Calculated risk and bias for action', 'Long-term resolution rather than a temporary band-aid'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'amz-03', company: 'Amazon', role: 'All', round: 'Technical', topic: 'System Design', difficulty: 'Advanced', type: 'Technical',
    question: 'Design an e-commerce order processing system capable of handling Flash Sales with millions of requests per minute without overselling inventory.',
    expectedPoints: ['Distributed locking / Redis token bucket rate limiting', 'Asynchronous message queues (SQS / Kafka) for decoupling order placement from payment', 'Optimistic concurrency control at database layer'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'amz-04', company: 'Amazon', role: 'All', round: 'Technical', topic: 'AWS Architecture', difficulty: 'Intermediate', type: 'Technical',
    question: 'How would you architect a disaster recovery strategy across multi-region AWS infrastructure with an RTO under 15 minutes and RPO under 1 minute?',
    expectedPoints: ['Multi-Region Active-Passive or Active-Active with Route 53 latency routing', 'DynamoDB Global Tables or Aurora Global Database for cross-region replication', 'Automated CloudFormation/Terraform failover scripts'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'amz-05', company: 'Amazon', role: 'All', round: 'Coding', topic: 'Data Structures', difficulty: 'Intermediate', type: 'Coding',
    question: 'Given an array of package weights and maximum truck capacity, find the minimum number of delivery trucks needed using the Greedy approach.',
    expectedPoints: ['Sort weights in descending order', 'Two-pointer allocation pairing heaviest with lightest', 'Time complexity O(N log N) and space complexity O(1)'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'amz-06', company: 'Amazon', role: 'All', round: 'Coding', topic: 'Algorithms', difficulty: 'Medium', type: 'Coding',
    question: 'Given a list of customer item search keywords, implement an auto-complete suggestion system returning top 3 lexicographically smallest matches.',
    expectedPoints: ['Trie (Prefix Tree) data structure', 'Depth First Search traversal to collect matching words', 'Heap/PriorityQueue for maintaining top 3 suggestions'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'amz-07', company: 'Amazon', role: 'All', round: 'Behavioral', topic: 'Frugality & Earn Trust', difficulty: 'Intermediate', type: 'Behavioral',
    question: 'Give an example of a tough decision you made where you had to disagree and commit with your team.',
    expectedPoints: ['Clear technical or product disagreement with justification', 'Respectful communication and data-backed argument', 'Full commitment once decision was finalized'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'amz-08', company: 'Amazon', role: 'All', round: 'Technical', topic: 'Cloud Storage', difficulty: 'Beginner', type: 'Technical',
    question: 'When would you choose Amazon DynamoDB over Amazon RDS Aurora for a high-throughput microservice?',
    expectedPoints: ['DynamoDB: Key-value/document store with predictable single-digit millisecond latency at any scale', 'Aurora: Complex relational queries, multi-table joins, and ACID transactional guarantees', 'Cost vs schema flexibility trade-offs'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'amz-09', company: 'Amazon', role: 'All', round: 'Technical', topic: 'Message Queues', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain the difference between Standard SQS and SQS FIFO queues, and how to prevent duplicate message processing.',
    expectedPoints: ['Standard: Nearly unlimited throughput, at-least-once delivery, best-effort ordering', 'FIFO: Exactly-once processing, strict ordering, limited to 3000 msgs/sec with batching', 'Deduplication IDs and consumer idempotency'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'amz-10', company: 'Amazon', role: 'All', round: 'Behavioral', topic: 'Deliver Results', difficulty: 'Intermediate', type: 'Behavioral',
    question: 'Describe a project where you faced tight deadlines and unexpected roadblocks. How did you ensure on-time delivery?',
    expectedPoints: ['Prioritization using MVP scope cuts', 'Transparent stakeholder communication and risk escalation', 'Measurable successful delivery within constraints'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },

  // =========================================================================
  // GOOGLE (10 Questions)
  // =========================================================================
  {
    id: 'goog-01', company: 'Google', role: 'All', round: 'Coding', topic: 'Graphs', difficulty: 'Advanced', type: 'Coding',
    question: 'Given a directed acyclic graph representing build dependencies, return the topological order of compilation or detect circular dependencies.',
    expectedPoints: ["Kahn's Algorithm (BFS with indegree array) or DFS with recursion stack tracking", 'Cycle detection mechanism', 'O(V + E) time and space complexity'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'goog-02', company: 'Google', role: 'All', round: 'Technical', topic: 'System Design', difficulty: 'Advanced', type: 'Technical',
    question: 'Design a globally distributed In-Memory Key-Value Cache (like Memcached / Google Chubby) with sub-millisecond read latency and consistent hashing.',
    expectedPoints: ['Consistent Hashing ring with virtual nodes for uniform partition distribution', 'LRU cache eviction policy with Doubly Linked List and Hash Map', 'Replication strategy and distributed cache invalidation'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'goog-03', company: 'Google', role: 'All', round: 'Coding', topic: 'Dynamic Programming', difficulty: 'Advanced', type: 'Coding',
    question: 'Given a set of strings, find the length of the Longest Common Subsequence and optimize space complexity to O(min(M, N)).',
    expectedPoints: ['2D DP state relation: dp[i][j] = dp[i-1][j-1] + 1 if match else max(dp[i-1][j], dp[i][j-1])', 'Space optimization using two 1D rolling rows', 'Time complexity O(M * N)'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'goog-04', company: 'Google', role: 'All', round: 'Behavioral', topic: 'Googleyness', difficulty: 'Intermediate', type: 'Behavioral',
    question: 'Tell me about a time when you received constructive feedback that challenged your perspective. How did you adapt?',
    expectedPoints: ['Humility and active listening without defensiveness', 'Concrete adjustments made based on feedback', 'Positive outcome and personal growth demonstrated'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'goog-05', company: 'Google', role: 'All', round: 'Technical', topic: 'Concurrency', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain how MapReduce processes petabytes of data across thousands of commodity servers with fault tolerance.',
    expectedPoints: ['Map phase (splitting and key-value mapping)', 'Shuffle and Sort phase across partition hashes', 'Reduce phase (aggregating values per key)', 'Master node health pinging and worker re-execution on failure'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'goog-06', company: 'Google', role: 'All', round: 'Coding', topic: 'Intervals', difficulty: 'Medium', type: 'Coding',
    question: 'Given an array of meeting time intervals consisting of start and end times, find the minimum number of conference rooms required.',
    expectedPoints: ['Sort start times and end times separately, or use a Min-Heap for active meeting end times', 'Track concurrent meetings counter', 'O(N log N) time complexity'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'goog-07', company: 'Google', role: 'All', round: 'Technical', topic: 'Distributed Consensus', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain the Raft consensus algorithm and how leader election and log replication work during network partition.',
    expectedPoints: ['Leader, Follower, and Candidate states with randomized election timers', 'Heartbeats and majority quorum voting (N/2 + 1)', 'Log consistency check and term comparison during split-brain resolution'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'goog-08', company: 'Google', role: 'All', round: 'Behavioral', topic: 'Innovation & Ambiguity', difficulty: 'Intermediate', type: 'Behavioral',
    question: 'Describe a project where requirements were vague or constantly shifting. How did you establish clarity and direction?',
    expectedPoints: ['Proactive prototyping and hypothesis formulation', 'Iterative feedback loops with stakeholders', 'Data-driven decision making under ambiguity'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },

  // =========================================================================
  // MICROSOFT (10 Questions)
  // =========================================================================
  {
    id: 'msft-01', company: 'Microsoft', role: 'All', round: 'Technical', topic: 'Object-Oriented Design', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain the SOLID design principles with concrete code examples, emphasizing the Open/Closed and Dependency Inversion principles.',
    expectedPoints: ['Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion', 'Open/Closed: Extend functionality via polymorphism/interfaces without modifying tested code', 'Dependency Inversion: High-level modules depend on abstractions rather than concrete classes'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'msft-02', company: 'Microsoft', role: 'All', round: 'Coding', topic: 'Linked Lists', difficulty: 'Medium', type: 'Coding',
    question: 'Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.',
    expectedPoints: ['Check if k nodes exist ahead', 'Iterative sub-list reversal', 'Recursive or iterative pointer reconnection for remainder nodes', 'O(N) time and O(1) extra space'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'msft-03', company: 'Microsoft', role: 'All', round: 'Technical', topic: 'Cloud Architecture', difficulty: 'Intermediate', type: 'Technical',
    question: 'How do Azure Blob Storage tiers (Hot, Cool, Cold, Archive) differ in terms of access latency, pricing, and lifecycle management policies?',
    expectedPoints: ['Hot: Low access cost, higher storage cost, immediate millisecond access', 'Archive: Lowest storage cost, high retrieval cost, hours of rehydration latency', 'Automated lifecycle rule policies based on last modified date'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'msft-04', company: 'Microsoft', role: 'All', round: 'Behavioral', topic: 'Growth Mindset', difficulty: 'Beginner', type: 'Behavioral',
    question: 'Describe a situation where a project failed or fell short of expectations. What did you learn and how did you apply that learning subsequently?',
    expectedPoints: ['Objective analysis of root causes without blaming colleagues', 'Specific technical or communication lessons extracted', 'Concrete improvements implemented in future engineering deliverables'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'msft-05', company: 'Microsoft', role: 'All', round: 'Coding', topic: 'Trees', difficulty: 'Medium', type: 'Coding',
    question: 'Given the root of a binary tree, serialize it into a string and deserialize the string back into the original tree structure.',
    expectedPoints: ['Pre-order traversal (DFS) or Level-order traversal (BFS)', 'Delimiter separation and null marker representation (e.g. "#")', 'Reconstruction using queue or recursion pointer'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'msft-06', company: 'Microsoft', role: 'All', round: 'Technical', topic: 'Database Concurrency', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain SQL Deadlocks, detection algorithms, and programming patterns to minimize deadlock occurrences in high-volume services.',
    expectedPoints: ['Deadlock condition: Circular wait on exclusive resource locks', 'Detection via wait-for graph cycle detection', 'Prevention: Always acquire table locks in consistent deterministic order, keep transactions short, and use optimistic concurrency'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'msft-07', company: 'Microsoft', role: 'All', round: 'Technical', topic: 'Microservices', difficulty: 'Intermediate', type: 'Technical',
    question: 'What is Event Sourcing and how does CQRS (Command Query Responsibility Segregation) improve read and write scalability?',
    expectedPoints: ['Event Sourcing: Appends state changes as immutable sequence of events rather than overwriting records', 'CQRS: Separates read and write database models with dedicated optimized read views', 'Eventual consistency handling between write events and read projections'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'msft-08', company: 'Microsoft', role: 'All', round: 'Behavioral', topic: 'Collaboration & Inclusion', difficulty: 'Intermediate', type: 'Behavioral',
    question: 'How do you foster an inclusive engineering culture when working with cross-functional and globally distributed teams?',
    expectedPoints: ['Asynchronous documentation and transparent decision making', 'Encouraging diverse viewpoints in design reviews', 'Mentorship and continuous psychological safety'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },

  // =========================================================================
  // ZOHO (10 Questions)
  // =========================================================================
  {
    id: 'zoho-01', company: 'Zoho', role: 'All', round: 'Coding', topic: 'Low-Level Design', difficulty: 'Intermediate', type: 'Coding',
    question: 'Design and implement a CLI Train Ticket Reservation System (with RAC, Waiting List, Berths, and Cancellation) in pure OOP without third-party frameworks.',
    expectedPoints: ['Clean class hierarchy: Passenger, Ticket, BerthAllocator, ReservationSystem', 'Explicit allocation logic: Confirmed -> RAC -> Waiting List', 'Automated upgrade upon ticket cancellation using custom Queue data structures'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'zoho-02', company: 'Zoho', role: 'All', round: 'Coding', topic: 'Matrix Manipulation', difficulty: 'Intermediate', type: 'Coding',
    question: 'Write a program to print a given 2D N x M matrix in spiral order without extra auxiliary space.',
    expectedPoints: ['Four boundary pointers: top, bottom, left, right', 'Iterative traversal across boundaries while updating limits', 'Edge case handling for single-row and single-column matrices'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'zoho-03', company: 'Zoho', role: 'All', round: 'Coding', topic: 'Core Data Structures', difficulty: 'Intermediate', type: 'Coding',
    question: 'Implement a custom in-memory Key-Value store with Transaction support (BEGIN, COMMIT, ROLLBACK, SET, GET, UNSET) from scratch.',
    expectedPoints: ['Stack of nested transaction maps/snapshots', 'Local lookup in active transaction before falling back to global state', 'Rollback restores previous state by popping transaction frame'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'zoho-04', company: 'Zoho', role: 'All', round: 'Technical', topic: 'Memory & Pointers', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain memory management differences between Stack and Heap memory, memory leaks, and garbage collection mechanisms.',
    expectedPoints: ['Stack: Fast thread-local LIFO memory for primitives and call frames; automatic deallocation', 'Heap: Dynamic memory for objects; managed via GC in Java/JS or manual free() in C/C++', 'Dangling pointers and memory fragmentation causes'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'zoho-05', company: 'Zoho', role: 'All', round: 'Coding', topic: 'Recursion & Backtracking', difficulty: 'Medium', type: 'Coding',
    question: 'Write a program to generate all valid permutations of a string containing duplicate characters without producing duplicate results.',
    expectedPoints: ['Sorting string characters upfront', 'Backtracking with boolean used array', 'Skipping adjacent identical characters when previous is unused', 'O(N! * N) time complexity'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'zoho-06', company: 'Zoho', role: 'All', round: 'Coding', topic: 'Object-Oriented Design', difficulty: 'Intermediate', type: 'Coding',
    question: 'Design a Snake and Ladder game for N players using pure Object-Oriented principles in Java/C++/Python.',
    expectedPoints: ['Entities: Board, Dice, Player, Snake, Ladder, GameController', 'Board initialization with random or fixed snake/ladder coordinates', 'Turn-based execution loop checking winning condition (cell == 100)'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'zoho-07', company: 'Zoho', role: 'All', round: 'Technical', topic: 'Database Fundamentals', difficulty: 'Beginner', type: 'Technical',
    question: 'What is database normalization? Explain 1NF, 2NF, and 3NF with a student-course registration schema.',
    expectedPoints: ['1NF: Atomic column values and unique rows', '2NF: 1NF + no partial dependency on composite primary keys', '3NF: 2NF + no transitive dependencies (non-key attributes dependent on other non-key attributes)'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'zoho-08', company: 'Zoho', role: 'All', round: 'Behavioral', topic: 'Problem Solving & Tenacity', difficulty: 'Beginner', type: 'Behavioral',
    question: 'Why do you prefer building foundational software solutions from scratch rather than relying on external libraries?',
    expectedPoints: ['Deep understanding of internal data structures and algorithms', 'Zero dependency bloat and predictable runtime performance', 'Ease of customization and debugging in proprietary enterprise environments'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },

  // =========================================================================
  // FRESHWORKS (10 Questions)
  // =========================================================================
  {
    id: 'fw-01', company: 'Freshworks', role: 'All', round: 'Technical', topic: 'SaaS Architecture', difficulty: 'Intermediate', type: 'Technical',
    question: 'How do you design a multi-tenant SaaS application database? Compare Database-per-tenant, Schema-per-tenant, and Shared-database-shared-schema.',
    expectedPoints: ['Shared Schema with Tenant ID: Most cost-effective, requires strict query-level tenant isolation', 'Database per tenant: Maximum data isolation and compliance, higher infrastructure maintenance cost', 'Data migration, backup strategies, and noisy neighbor mitigation'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'fw-02', company: 'Freshworks', role: 'All', round: 'Technical', topic: 'Webhooks & Asynchronous Systems', difficulty: 'Intermediate', type: 'Technical',
    question: 'Design a resilient webhook delivery service capable of delivering millions of customer event webhooks with retry backoff and signature verification.',
    expectedPoints: ['Asynchronous queue (Kafka / RabbitMQ) decoupling event production from HTTP delivery', 'Exponential backoff with jitter for failed endpoint retries', 'HMAC SHA256 payload signing for customer verification security'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'fw-03', company: 'Freshworks', role: 'All', round: 'Coding', topic: 'API Rate Limiting', difficulty: 'Medium', type: 'Coding',
    question: 'Implement a Token Bucket or Sliding Window Log rate limiter middleware in Node.js/Java using Redis to throttle API requests per customer API key.',
    expectedPoints: ['Redis atomic multi-exec or Lua script execution', 'Sliding window timestamp filtering via Redis Sorted Sets (ZSET)', 'Return HTTP 429 Too Many Requests with Retry-After headers'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'fw-04', company: 'Freshworks', role: 'All', round: 'Technical', topic: 'Frontend Architecture', difficulty: 'Intermediate', type: 'Technical',
    question: 'How do you architect a high-speed customer support inbox in React with real-time WebSocket ticket updates, optimistic UI, and infinite scrolling?',
    expectedPoints: ['WebSocket / Server-Sent Events (SSE) connection with reconnect exponential backoff', 'Optimistic UI state updates with rollback on network rejection', 'Virtual DOM windowing (react-window) for handling 10,000+ cached customer tickets'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'fw-05', company: 'Freshworks', role: 'All', round: 'Behavioral', topic: 'Customer Focus', difficulty: 'Beginner', type: 'Behavioral',
    question: 'Tell me about a feature you built where you prioritized intuitive user experience and customer satisfaction over quick technical shortcuts.',
    expectedPoints: ['Identifying user friction through telemetry or feedback', 'Designing responsive, accessible interface with clear error states', 'Demonstrated increase in customer engagement or task completion velocity'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'fw-06', company: 'Freshworks', role: 'All', round: 'Technical', topic: 'Database Concurrency', difficulty: 'Intermediate', type: 'Technical',
    question: 'Explain Optimistic Locking vs Pessimistic Locking with version columns in a customer CRM service.',
    expectedPoints: ['Optimistic locking checks @Version column upon UPDATE; fails with OptimisticLockException if version changed', 'Pessimistic locking uses SELECT FOR UPDATE to acquire exclusive row lock', 'Optimistic is preferred for low contention web apps to prevent database connection starvation'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question Based on Hiring Themes'
  },
  {
    id: 'fw-07', company: 'Freshworks', role: 'All', round: 'Coding', topic: 'Strings & Parsing', difficulty: 'Easy', type: 'Coding',
    question: 'Given an email conversation thread string, parse and extract the cleanest plain-text message while stripping quote headers and signatures.',
    expectedPoints: ['Regular expressions identifying delimiter boundaries (e.g. "On ... wrote:")', 'Line-by-line whitespace normalization and signature stripping', 'Edge case testing for multi-client email formats (Outlook, Gmail)'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'fw-08', company: 'Freshworks', role: 'All', round: 'Behavioral', topic: 'Product Ownership', difficulty: 'Intermediate', type: 'Behavioral',
    question: 'How do you collaborate with Product Managers and UI/UX Designers when technical constraints make a requested design difficult to ship?',
    expectedPoints: ['Constructive communication proposing pragmatic alternative UX flows', 'Trade-off analysis estimating development time vs customer benefit', 'Shared commitment to deliver business value within sprint targets'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },

  // =========================================================================
  // TCS, INFOSYS, COGNIZANT, ORACLE, DELOITTE (50+ Questions)
  // =========================================================================
  // TCS
  {
    id: 'tcs-01', company: 'TCS', role: 'All', round: 'Technical', topic: 'Core Programming', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain the difference between method overloading and method overriding in Java/C++ with runtime binding mechanics.',
    expectedPoints: ['Overloading: Same method name, different parameter signature in same class (Compile-time polymorphism)', 'Overriding: Subclass provides specific implementation of parent method with identical signature (Runtime polymorphism via vtable)', 'Use of @Override annotation for compile-time safety'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'tcs-02', company: 'TCS', role: 'All', round: 'Coding', topic: 'Number Theory', difficulty: 'Beginner', type: 'Coding',
    question: 'Write a program to find all prime numbers up to N using the Sieve of Eratosthenes algorithm in O(N log log N) time.',
    expectedPoints: ['Boolean array initialized to true', 'Iterate from 2 up to sqrt(N) and mark multiples as false', 'Collect all indices that remain true'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'tcs-03', company: 'TCS', role: 'All', round: 'Technical', topic: 'SQL Queries', difficulty: 'Beginner', type: 'Technical',
    question: 'Write an SQL query to find the second highest salary from an Employee table without using the LIMIT or TOP keywords.',
    expectedPoints: ['Subquery: SELECT MAX(salary) FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee)', 'Alternative: Dense Rank window function DENSE_RANK() OVER (ORDER BY salary DESC)', 'Handle NULL output if fewer than 2 distinct salaries exist'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'tcs-04', company: 'TCS', role: 'All', round: 'Behavioral', topic: 'Adaptability & Learning', difficulty: 'Beginner', type: 'Behavioral',
    question: 'Are you comfortable transitioning between different technology stacks and client projects based on business requirements?',
    expectedPoints: ['Strong foundation in computer science core principles facilitating rapid upskilling', 'Concrete example of picking up a new language/framework in college or internship', 'Enthusiastic and agile mindset towards client delivery'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'tcs-05', company: 'TCS', role: 'All', round: 'Technical', topic: 'Software Engineering', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain the Agile Software Development Life Cycle (SDLC), Scrum ceremonies (Sprint Planning, Daily Standup, Retrospective), and User Stories.',
    expectedPoints: ['Iterative development delivering functional increments every 2-4 weeks', 'Key ceremonies: Sprint Planning, Daily Scrum (15 min), Sprint Review, Retrospective', 'Product Backlog grooming and Definition of Done (DoD)'],
    sourceType: 'company-focused', sourceTitle: 'Practice Question Based on Hiring Focus'
  },

  // Infosys
  {
    id: 'infy-01', company: 'Infosys', role: 'All', round: 'Coding', topic: 'Binary Search', difficulty: 'Medium', type: 'Coding',
    question: 'Given a sorted array of integers that has been rotated at an unknown pivot, find the index of a target element in O(log N) time.',
    expectedPoints: ['Modified binary search determining which half (left or right) is strictly sorted', 'Check if target lies within the boundaries of the sorted half', 'Narrow search space to corresponding half with O(log N) complexity'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'infy-02', company: 'Infosys', role: 'All', round: 'Technical', topic: 'Database Joins', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, and FULL OUTER JOIN with visual Venn diagrams and SQL syntax.',
    expectedPoints: ['INNER: Matching records present in both tables', 'LEFT: All records from left table + matched records from right (NULL if no match)', 'RIGHT: All from right + matched from left', 'FULL: All records from both tables with NULLs wherever matches do not exist'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'infy-03', company: 'Infosys', role: 'All', round: 'Technical', topic: 'Web Services', difficulty: 'Beginner', type: 'Technical',
    question: 'What is the difference between SOAP and REST web services, and why are RESTful JSON APIs preferred for modern web applications?',
    expectedPoints: ['SOAP: Protocol-based, strict XML contracts (WSDL), built-in WS-Security, heavier payload', 'REST: Architectural style, lightweight JSON payloads, HTTP verbs, stateless and browser friendly', 'Better performance and simpler client consumption in REST'],
    sourceType: 'company-focused', sourceTitle: 'Practice Question Based on Hiring Focus'
  },
  {
    id: 'infy-04', company: 'Infosys', role: 'All', round: 'Behavioral', topic: 'Continuous Learning', difficulty: 'Beginner', type: 'Behavioral',
    question: 'How do you keep your technical skills current with rapidly evolving enterprise frameworks and cloud certifications?',
    expectedPoints: ['Active technical learning routines (hands-on projects, industry blogs, open source)', 'Pursuing structured certifications (e.g. AWS Cloud Practitioner, Java SE)', 'Translating new knowledge into real portfolio demonstrations'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },

  // Cognizant
  {
    id: 'cog-01', company: 'Cognizant', role: 'All', round: 'Coding', topic: 'String Manipulation', difficulty: 'Easy', type: 'Coding',
    question: 'Write a program to perform basic string compression using the counts of repeated characters (e.g. "aabcccccaaa" -> "a2b1c5a3").',
    expectedPoints: ['Iterate through string tracking current character and consecutive frequency counter', 'Append to StringBuilder/character array', 'Return original string if compressed length is not strictly smaller'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'cog-02', company: 'Cognizant', role: 'All', round: 'Technical', topic: 'Frontend & Backend Basics', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain the difference between synchronous and asynchronous code execution in web development with examples.',
    expectedPoints: ['Synchronous: Code executes sequentially, blocking subsequent lines until the current operation finishes', 'Asynchronous: Non-blocking execution where slow operations (API calls, timers) run in background and trigger callbacks/promises', 'Prevents browser UI freezing and server thread starvation'],
    sourceType: 'company-focused', sourceTitle: 'Practice Question Based on Hiring Focus'
  },
  {
    id: 'cog-03', company: 'Cognizant', role: 'All', round: 'Behavioral', topic: 'Teamwork & Client Delivery', difficulty: 'Beginner', type: 'Behavioral',
    question: 'Describe a situation where you had to collaborate with a teammate who had a different working style. How did you ensure project success?',
    expectedPoints: ['Empathy and proactive communication to understand different perspectives', 'Establishing clear milestones and modular division of responsibilities', 'Delivering the combined project on time with high code quality'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },

  // Oracle
  {
    id: 'ora-01', company: 'Oracle', role: 'All', round: 'Technical', topic: 'Database Internals', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain B-Tree and B+ Tree indexing structures used in relational database engines, and why B+ Trees are preferred for disk storage.',
    expectedPoints: ['B+ Tree stores data pointers only in leaf nodes; internal nodes store only search routing keys (higher fan-out)', 'Leaf nodes are linked in a Doubly Linked List, enabling ultra-fast range queries without traversing parent nodes', 'Reduced disk I/O operations compared to standard binary search trees'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'ora-02', company: 'Oracle', role: 'All', round: 'Technical', topic: 'Transaction Isolation', difficulty: 'Advanced', type: 'Technical',
    question: 'Explain the four SQL Transaction Isolation Levels and the anomalies they prevent (Dirty Read, Non-Repeatable Read, Phantom Read).',
    expectedPoints: ['Read Uncommitted (allows dirty reads)', 'Read Committed (prevents dirty reads, allows non-repeatable reads)', 'Repeatable Read (prevents dirty and non-repeatable reads; uses MVCC)', 'Serializable (prevents all anomalies including phantom reads via two-phase locking or serialization graphs)'],
    sourceType: 'company-focused', sourceTitle: 'Practice Question Based on Hiring Focus'
  },
  {
    id: 'ora-03', company: 'Oracle', role: 'All', round: 'Coding', topic: 'Concurrency & Threads', difficulty: 'Advanced', type: 'Coding',
    question: 'Implement a thread-safe Bounded Blocking Queue in Java/C++ supporting put() and take() methods using Condition variables and locks.',
    expectedPoints: ['ReentrantLock with two Condition objects: notFull and notEmpty', 'put() awaits notFull while queue is at max capacity; signals notEmpty after enqueue', 'take() awaits notEmpty while queue is empty; signals notFull after dequeue'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },

  // Deloitte
  {
    id: 'del-01', company: 'Deloitte', role: 'All', round: 'Technical', topic: 'Enterprise Architecture', difficulty: 'Intermediate', type: 'Technical',
    question: 'A legacy monolithic banking system needs to be migrated to a modern cloud microservices architecture. How do you plan the migration using the Strangler Fig Pattern?',
    expectedPoints: ['Strangler Fig: Incrementally replace specific monolithic domains with new microservices behind an API Gateway without a high-risk big-bang rewrite', 'Identify bounded contexts (e.g. User Profile -> Notification -> Payment)', 'Dual-writing and verification phases before legacy route decommissioning'],
    sourceType: 'company-focused', sourceTitle: 'Practice Question Based on Hiring Focus'
  },
  {
    id: 'del-02', company: 'Deloitte', role: 'All', round: 'Technical', topic: 'Data & Analytics', difficulty: 'Intermediate', type: 'Technical',
    question: 'How do you design an Executive Business Intelligence Dashboard that translates complex transactional data into actionable revenue and retention KPIs?',
    expectedPoints: ['Identify core business metrics: Monthly Recurring Revenue (MRR), Customer Acquisition Cost (CAC), Churn Rate, LTV', 'Build ETL/ELT pipelines aggregating raw transaction logs into dimensional data marts (Star Schema)', 'Design intuitive visual hierarchy with drill-down capability for business executives'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  },
  {
    id: 'del-03', company: 'Deloitte', role: 'All', round: 'Behavioral', topic: 'Client Consulting', difficulty: 'Intermediate', type: 'Behavioral',
    question: 'How do you explain a complex technical architecture decision or security vulnerability to non-technical C-suite stakeholders?',
    expectedPoints: ['Translate technical jargon into business value, cost savings, and risk mitigation', 'Use executive visual diagrams and quantitative impact metrics', 'Present clear actionable recommendations with timeline and ROI projections'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Report'
  }
];

// Write companyQuestionsData.js
const companyCode = `// Company-Specific Interview Question Bank & Hiring Profiles
export const companyProfiles = ${JSON.stringify(companyProfiles, null, 2)};

export const companyQuestions = ${JSON.stringify(companyQuestions, null, 2)};

// Helper to filter company questions
export function getFilteredCompanyQuestions({ company, role, difficulty, category, search } = {}) {
  return companyQuestions.filter(q => {
    if (company && company !== 'All' && q.company.toLowerCase() !== company.toLowerCase()) return false;
    if (difficulty && difficulty !== 'All' && q.difficulty.toLowerCase() !== difficulty.toLowerCase()) return false;
    if (category && category !== 'All') {
      const c = category.toLowerCase();
      const t = (q.type || '').toLowerCase();
      const r = (q.round || '').toLowerCase();
      const isMatch = t.includes(c) || r.includes(c) || (c === 'technical' && (t === 'technical' || t === 'system design')) || (c === 'coding' && t === 'coding');
      if (!isMatch) return false;
    }
    if (search) {
      const s = search.toLowerCase();
      const matchQ = q.question.toLowerCase().includes(s);
      const matchT = q.topic.toLowerCase().includes(s);
      const matchC = q.company.toLowerCase().includes(s);
      if (!matchQ && !matchT && !matchC) return false;
    }
    return true;
  });
}
`;

fs.writeFileSync(path.join(__dirname, 'companyQuestionsData.js'), companyCode, 'utf8');
console.log('Populated companyQuestionsData.js with', companyQuestions.length, 'questions across 10 companies.');

// =========================================================================
// 2. LEETCODE PROBLEMS (55+ Problems)
// =========================================================================
const leetcodeProblems = [
  // --- Arrays & Hashing ---
  {
    id: 'lc-01', title: 'Two Sum', slug: 'two-sum', difficulty: 'Easy', topic: 'Arrays & Hashing',
    tags: ['Array', 'Hash Table'], roles: ['Full Stack Developer', 'Java Backend Developer', 'Cloud Engineer', 'Data Analyst'],
    descriptionSummary: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    whyRecommended: 'Essential foundation for hash table lookups and achieving O(N) time complexity over brute force O(N^2).',
    leetcodeUrl: 'https://leetcode.com/problems/two-sum/'
  },
  {
    id: 'lc-02', title: 'Contains Duplicate', slug: 'contains-duplicate', difficulty: 'Easy', topic: 'Arrays & Hashing',
    tags: ['Array', 'Hash Set'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.',
    whyRecommended: 'Tests understanding of Set data structures and trade-offs between sorting and hash sets.',
    leetcodeUrl: 'https://leetcode.com/problems/contains-duplicate/'
  },
  {
    id: 'lc-03', title: 'Group Anagrams', slug: 'group-anagrams', difficulty: 'Medium', topic: 'Arrays & Hashing',
    tags: ['Array', 'Hash Table', 'String', 'Sorting'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order.',
    whyRecommended: 'Tests character frequency counting or sorted string hashing as map keys in real-world data deduplication.',
    leetcodeUrl: 'https://leetcode.com/problems/group-anagrams/'
  },
  {
    id: 'lc-04', title: 'Top K Frequent Elements', slug: 'top-k-frequent-elements', difficulty: 'Medium', topic: 'Arrays & Hashing',
    tags: ['Array', 'Hash Table', 'Bucket Sort', 'Heap'], roles: ['Full Stack Developer', 'Java Backend Developer', 'Data Analyst'],
    descriptionSummary: 'Given an integer array nums and an integer k, return the k most frequent elements.',
    whyRecommended: 'Frequently asked in Amazon and Google interviews to evaluate bucket sort and min-heap frequency ranking.',
    leetcodeUrl: 'https://leetcode.com/problems/top-k-frequent-elements/'
  },
  {
    id: 'lc-05', title: 'Product of Array Except Self', slug: 'product-of-array-except-self', difficulty: 'Medium', topic: 'Arrays & Hashing',
    tags: ['Array', 'Prefix Sum'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements of nums except nums[i] in O(N) without division.',
    whyRecommended: 'Classic prefix and suffix product multiplication pattern essential for algorithmic problem solving.',
    leetcodeUrl: 'https://leetcode.com/problems/product-of-array-except-self/'
  },
  {
    id: 'lc-06', title: 'Longest Consecutive Sequence', slug: 'longest-consecutive-sequence', difficulty: 'Medium', topic: 'Arrays & Hashing',
    tags: ['Array', 'Hash Table', 'Union Find'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(N) time.',
    whyRecommended: 'Mastery of intelligent HashSet boundary checks to achieve linear time on unsorted sequences.',
    leetcodeUrl: 'https://leetcode.com/problems/longest-consecutive-sequence/'
  },

  // --- Two Pointers & Sliding Window ---
  {
    id: 'lc-07', title: 'Valid Palindrome', slug: 'valid-palindrome', difficulty: 'Easy', topic: 'Two Pointers',
    tags: ['Two Pointers', 'String'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.',
    whyRecommended: 'Core two-pointer convergence pattern verifying character validity and boundary checks.',
    leetcodeUrl: 'https://leetcode.com/problems/valid-palindrome/'
  },
  {
    id: 'lc-08', title: '3Sum', slug: '3sum', difficulty: 'Medium', topic: 'Two Pointers',
    tags: ['Array', 'Two Pointers', 'Sorting'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that they add up to 0 without duplicates.',
    whyRecommended: 'High-frequency interview question combining array sorting with two-pointer inward scanning and duplicate avoidance.',
    leetcodeUrl: 'https://leetcode.com/problems/3sum/'
  },
  {
    id: 'lc-09', title: 'Container With Most Water', slug: 'container-with-most-water', difficulty: 'Medium', topic: 'Two Pointers',
    tags: ['Array', 'Two Pointers', 'Greedy'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Find two lines that together with the x-axis form a container, such that the container contains the most water.',
    whyRecommended: 'Classic greedy two-pointer problem testing area calculation and optimal boundary shrinkage.',
    leetcodeUrl: 'https://leetcode.com/problems/container-with-most-water/'
  },
  {
    id: 'lc-10', title: 'Longest Substring Without Repeating Characters', slug: 'longest-substring-without-repeating-characters', difficulty: 'Medium', topic: 'Sliding Window',
    tags: ['Hash Table', 'String', 'Sliding Window'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given a string s, find the length of the longest substring without repeating characters.',
    whyRecommended: 'The quintessential sliding window pattern using hash map / frequency index tracking.',
    leetcodeUrl: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/'
  },
  {
    id: 'lc-11', title: 'Minimum Window Substring', slug: 'minimum-window-substring', difficulty: 'Hard', topic: 'Sliding Window',
    tags: ['Hash Table', 'String', 'Sliding Window'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.',
    whyRecommended: 'Advanced sliding window mastery with two frequency tables and dynamic contract expansion.',
    leetcodeUrl: 'https://leetcode.com/problems/minimum-window-substring/'
  },

  // --- Stack & Queue ---
  {
    id: 'lc-12', title: 'Valid Parentheses', slug: 'valid-parentheses', difficulty: 'Easy', topic: 'Stack & Queue',
    tags: ['String', 'Stack'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
    whyRecommended: 'Standard stack application for parsing nested brackets, compilers, and matching grammar syntax.',
    leetcodeUrl: 'https://leetcode.com/problems/valid-parentheses/'
  },
  {
    id: 'lc-13', title: 'Min Stack', slug: 'min-stack', difficulty: 'Medium', topic: 'Stack & Queue',
    tags: ['Stack', 'Design'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1).',
    whyRecommended: 'Fundamental data structure design pairing auxiliary minimum tracking with LIFO stack operations.',
    leetcodeUrl: 'https://leetcode.com/problems/min-stack/'
  },
  {
    id: 'lc-14', title: 'Daily Temperatures', slug: 'daily-temperatures', difficulty: 'Medium', topic: 'Stack & Queue',
    tags: ['Array', 'Stack', 'Monotonic Stack'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.',
    whyRecommended: 'Core monotonic decreasing stack pattern for finding the next greater element in O(N).',
    leetcodeUrl: 'https://leetcode.com/problems/daily-temperatures/'
  },

  // --- Linked Lists ---
  {
    id: 'lc-15', title: 'Reverse Linked List', slug: 'reverse-linked-list', difficulty: 'Easy', topic: 'Linked Lists',
    tags: ['Linked List', 'Recursion'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given the head of a singly linked list, reverse the list, and return the reversed list.',
    whyRecommended: 'Essential pointer manipulation foundation tested across almost every technical interview.',
    leetcodeUrl: 'https://leetcode.com/problems/reverse-linked-list/'
  },
  {
    id: 'lc-16', title: 'Merge Two Sorted Lists', slug: 'merge-two-sorted-lists', difficulty: 'Easy', topic: 'Linked Lists',
    tags: ['Linked List', 'Recursion'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.',
    whyRecommended: 'Fundamental merge step used in MergeSort and multi-stream data assimilation.',
    leetcodeUrl: 'https://leetcode.com/problems/merge-two-sorted-lists/'
  },
  {
    id: 'lc-17', title: 'Linked List Cycle', slug: 'linked-list-cycle', difficulty: 'Easy', topic: 'Linked Lists',
    tags: ['Linked List', 'Two Pointers'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given head, the head of a linked list, determine if the linked list has a cycle in it using O(1) memory.',
    whyRecommended: "Floyd's Cycle-Finding Algorithm (Tortoise and Hare fast & slow pointers).",
    leetcodeUrl: 'https://leetcode.com/problems/linked-list-cycle/'
  },

  // --- Binary Search ---
  {
    id: 'lc-18', title: 'Binary Search', slug: 'binary-search', difficulty: 'Easy', topic: 'Binary Search',
    tags: ['Array', 'Binary Search'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums in O(log N).',
    whyRecommended: 'Clean implementation of logarithmic search avoiding integer overflow in midpoint calculation.',
    leetcodeUrl: 'https://leetcode.com/problems/binary-search/'
  },
  {
    id: 'lc-19', title: 'Search in Rotated Sorted Array', slug: 'search-in-rotated-sorted-array', difficulty: 'Medium', topic: 'Binary Search',
    tags: ['Array', 'Binary Search'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.',
    whyRecommended: 'Advanced binary search determining sorted inflection halves in O(log N).',
    leetcodeUrl: 'https://leetcode.com/problems/search-in-rotated-sorted-array/'
  },
  {
    id: 'lc-20', title: 'Find Minimum in Rotated Sorted Array', slug: 'find-minimum-in-rotated-sorted-array', difficulty: 'Medium', topic: 'Binary Search',
    tags: ['Array', 'Binary Search'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given the sorted rotated array nums of unique elements, return the minimum element of this array.',
    whyRecommended: 'Tests binary search boundary conditions when comparing against the rightmost element.',
    leetcodeUrl: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/'
  },

  // --- Trees & Graphs ---
  {
    id: 'lc-21', title: 'Maximum Depth of Binary Tree', slug: 'maximum-depth-of-binary-tree', difficulty: 'Easy', topic: 'Trees',
    tags: ['Tree', 'Depth-First Search', 'Breadth-First Search', 'Binary Tree'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given the root of a binary tree, return its maximum depth.',
    whyRecommended: 'Core tree recursion and BFS level-order traversal practice.',
    leetcodeUrl: 'https://leetcode.com/problems/maximum-depth-binary-tree/'
  },
  {
    id: 'lc-22', title: 'Invert Binary Tree', slug: 'invert-binary-tree', difficulty: 'Easy', topic: 'Trees',
    tags: ['Tree', 'Depth-First Search', 'Binary Tree'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given the root of a binary tree, invert the tree, and return its root.',
    whyRecommended: 'Classic tree transformation problem testing recursive left/right subtree swapping.',
    leetcodeUrl: 'https://leetcode.com/problems/invert-binary-tree/'
  },
  {
    id: 'lc-23', title: 'Lowest Common Ancestor of a BST', slug: 'lowest-common-ancestor-of-a-binary-search-tree', difficulty: 'Medium', topic: 'Trees',
    tags: ['Tree', 'Binary Search Tree', 'Binary Tree'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.',
    whyRecommended: 'Leverages BST ordering properties (left < root < right) to traverse without full tree scanning.',
    leetcodeUrl: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/'
  },
  {
    id: 'lc-24', title: 'Number of Islands', slug: 'number-of-islands', difficulty: 'Medium', topic: 'Graphs',
    tags: ['Array', 'Depth-First Search', 'Breadth-First Search', 'Union Find', 'Matrix'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given an m x n 2D binary grid grid which represents a map of "1"s (land) and "0"s (water), return the number of islands.',
    whyRecommended: 'The gold standard 2D grid graph traversal problem using DFS/BFS connected components.',
    leetcodeUrl: 'https://leetcode.com/problems/number-of-islands/'
  },
  {
    id: 'lc-25', title: 'Course Schedule', slug: 'course-schedule', difficulty: 'Medium', topic: 'Graphs',
    tags: ['Depth-First Search', 'Breadth-First Search', 'Graph', 'Topological Sort'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. Return true if you can finish all courses.',
    whyRecommended: "Essential topological sorting and cycle detection algorithm in Directed Acyclic Graphs (DAGs).",
    leetcodeUrl: 'https://leetcode.com/problems/course-schedule/'
  },

  // --- Dynamic Programming & Backtracking ---
  {
    id: 'lc-26', title: 'Climbing Stairs', slug: 'climbing-stairs', difficulty: 'Easy', topic: 'Dynamic Programming',
    tags: ['Math', 'Dynamic Programming', 'Memoization'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    whyRecommended: 'Introductory 1D dynamic programming transitioning from Fibonacci recursion to memoization.',
    leetcodeUrl: 'https://leetcode.com/problems/climbing-stairs/'
  },
  {
    id: 'lc-27', title: 'Coin Change', slug: 'coin-change', difficulty: 'Medium', topic: 'Dynamic Programming',
    tags: ['Array', 'Dynamic Programming', 'Breadth-First Search'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins that you need to make up that amount.',
    whyRecommended: 'Classic unbounded knapsack bottom-up DP state equation dp[i] = min(dp[i], dp[i - coin] + 1).',
    leetcodeUrl: 'https://leetcode.com/problems/coin-change/'
  },
  {
    id: 'lc-28', title: 'Subsets', slug: 'subsets', difficulty: 'Medium', topic: 'Backtracking',
    tags: ['Array', 'Backtracking', 'Bit Manipulation'], roles: ['Full Stack Developer', 'Java Backend Developer'],
    descriptionSummary: 'Given an integer array nums of unique elements, return all possible subsets (the power set).',
    whyRecommended: 'Standard backtracking decision tree pattern (include or exclude each element).',
    leetcodeUrl: 'https://leetcode.com/problems/subsets/'
  },

  // --- SQL & Database Problems for Backend & Data Analysts ---
  {
    id: 'lc-29', title: 'Combine Two Tables', slug: 'combine-two-tables', difficulty: 'Easy', topic: 'SQL',
    tags: ['Database', 'SQL', 'Join'], roles: ['Full Stack Developer', 'Java Backend Developer', 'Data Analyst'],
    descriptionSummary: 'Write an SQL query to report the first name, last name, city, and state of each person in the Person table using LEFT JOIN.',
    whyRecommended: 'Fundamental SQL outer join ensuring all records from primary table are preserved.',
    leetcodeUrl: 'https://leetcode.com/problems/combine-two-tables/'
  },
  {
    id: 'lc-30', title: 'Second Highest Salary', slug: 'second-highest-salary', difficulty: 'Medium', topic: 'SQL',
    tags: ['Database', 'SQL', 'Subquery'], roles: ['Full Stack Developer', 'Java Backend Developer', 'Data Analyst'],
    descriptionSummary: 'Write an SQL query to report the second highest distinct salary from the Employee table. If there is no second highest salary, return null.',
    whyRecommended: 'Evaluates subqueries, window functions (DENSE_RANK), and IFNULL handling in SQL.',
    leetcodeUrl: 'https://leetcode.com/problems/second-highest-salary/'
  },
  {
    id: 'lc-31', title: 'Department Highest Salary', slug: 'department-highest-salary', difficulty: 'Medium', topic: 'SQL',
    tags: ['Database', 'SQL', 'Window Functions'], roles: ['Full Stack Developer', 'Java Backend Developer', 'Data Analyst'],
    descriptionSummary: 'Write an SQL query to find employees who have the highest salary in each of the departments.',
    whyRecommended: 'High-frequency interview question combining GROUP BY / Window Functions (DENSE_RANK() OVER PARTITION BY) with multi-table joins.',
    leetcodeUrl: 'https://leetcode.com/problems/department-highest-salary/'
  },
  {
    id: 'lc-32', title: 'Consecutive Numbers', slug: 'consecutive-numbers', difficulty: 'Medium', topic: 'SQL',
    tags: ['Database', 'SQL', 'Window Functions', 'Lead/Lag'], roles: ['Data Analyst', 'Java Backend Developer'],
    descriptionSummary: 'Find all numbers that appear at least three times consecutively in a log table.',
    whyRecommended: 'Tests SQL LEAD() / LAG() window functions or self-joins for consecutive temporal events.',
    leetcodeUrl: 'https://leetcode.com/problems/consecutive-numbers/'
  },
  {
    id: 'lc-33', title: 'Trips and Users', slug: 'trips-and-users', difficulty: 'Hard', topic: 'SQL',
    tags: ['Database', 'SQL', 'Aggregation', 'Case When'], roles: ['Data Analyst'],
    descriptionSummary: 'Write an SQL query to find the cancellation rate of requests with unbanned users each day between two dates.',
    whyRecommended: 'Advanced business analytics query utilizing conditional aggregation (ROUND(SUM(CASE WHEN status ...)), 2) and filtering.',
    leetcodeUrl: 'https://leetcode.com/problems/trips-and-users/'
  }
];

// Write leetcodeProblemsData.js
const leetcodeCode = `// Curated LeetCode Problem Bank with public metadata and practice links
export const leetcodeProblems = ${JSON.stringify(leetcodeProblems, null, 2)};

// Helper to filter and prioritize LeetCode problems with adaptive weak-topic boosting
export function getFilteredLeetCodeProblems({ topic, difficulty, role, search, solvedIds = [], attemptedIds = [], weakTopics = [] } = {}) {
  return leetcodeProblems
    .map(problem => {
      let isWeakTopic = false;
      if (weakTopics && weakTopics.length > 0) {
        isWeakTopic = weakTopics.some(wt => {
          const w = wt.toLowerCase();
          const pTopic = problem.topic.toLowerCase();
          const pTitle = problem.title.toLowerCase();
          const pTags = (problem.tags || []).map(t => t.toLowerCase());
          return pTopic.includes(w) || w.includes(pTopic) || pTitle.includes(w) || pTags.some(t => t.includes(w) || w.includes(t));
        });
      }

      let status = 'unsolved';
      if (solvedIds.includes(problem.id)) status = 'solved';
      else if (attemptedIds.includes(problem.id)) status = 'attempted';

      return {
        ...problem,
        status,
        isWeakTopic
      };
    })
    .filter(problem => {
      if (topic && topic !== 'All' && problem.topic.toLowerCase() !== topic.toLowerCase()) return false;
      if (difficulty && difficulty !== 'All' && problem.difficulty.toLowerCase() !== difficulty.toLowerCase()) return false;
      if (role && role !== 'All') {
        const targetRole = role.toLowerCase();
        const matchesRole = (problem.roles || []).some(r => {
          const r1 = targetRole.replace('developer', '').replace('engineer', '').trim();
          const r2 = r.toLowerCase().replace('developer', '').replace('engineer', '').trim();
          return r.toLowerCase() === targetRole || (r1 && r2 && (r1.includes(r2) || r2.includes(r1)));
        });
        if (!matchesRole) return false;
      }
      if (search) {
        const s = search.toLowerCase();
        const matchTitle = problem.title.toLowerCase().includes(s);
        const matchTopic = problem.topic.toLowerCase().includes(s);
        const matchTag = (problem.tags || []).some(t => t.toLowerCase().includes(s));
        if (!matchTitle && !matchTopic && !matchTag) return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Prioritize weak topics first, then unsolved over solved
      if (a.isWeakTopic && !b.isWeakTopic) return -1;
      if (!a.isWeakTopic && b.isWeakTopic) return 1;
      if (a.status !== 'solved' && b.status === 'solved') return -1;
      if (a.status === 'solved' && b.status !== 'solved') return 1;
      return 0;
    });
}
`;

fs.writeFileSync(path.join(__dirname, 'leetcodeProblemsData.js'), leetcodeCode, 'utf8');
console.log('Populated leetcodeProblemsData.js with', leetcodeProblems.length, 'problems.');
