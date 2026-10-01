import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = await import('./companyQuestionsData.js');
const companyQuestions = data.companyQuestions;

const extraCompanyQuestions = [
  {
    id: 'tm-01', company: 'Tech Mahindra', role: 'All', round: 'Technical', topic: 'Telecommunications & Cloud',
    difficulty: 'Intermediate', type: 'Technical', question: 'How do you architect a scalable microservice handling real-time IoT and telecom telemetry streams with 50,000 events/sec?',
    expectedPoints: ['Use Apache Kafka or AWS Kinesis as distributed event buffer', 'Stream processing via Flink or Spark Streaming', 'Timeseries storage (TimescaleDB/InfluxDB) or Cassandra for write throughput'],
    sourceType: 'company-interview-pattern', sourceTitle: 'Tech Mahindra Technical Assessment'
  },
  {
    id: 'tm-02', company: 'Tech Mahindra', role: 'All', round: 'Coding', topic: 'String Manipulation',
    difficulty: 'Beginner', type: 'Coding', question: 'Write a program to reverse the words in a given sentence without using built-in reverse functions (e.g. "CareerForge rocks" yields "rocks CareerForge").',
    expectedPoints: ['Split into words by whitespace or reverse individual words in-place then reverse whole string', 'Handle multiple consecutive spaces gracefully', 'O(N) time complexity and O(1) auxiliary space if in-place'],
    sourceType: 'coding-round', sourceTitle: 'Tech Mahindra Coding Round'
  },
  {
    id: 'tm-03', company: 'Tech Mahindra', role: 'All', round: 'Behavioral', topic: 'Client Delivery',
    difficulty: 'Beginner', type: 'Behavioral', question: 'Describe a project where you faced a tight client deadline. How did you prioritize features and communicate progress?',
    expectedPoints: ['STAR format (Situation, Task, Action, Result)', 'Prioritized critical path MVP deliverables via MoSCoW method', 'Proactive stakeholder communication with daily burn-down updates'],
    sourceType: 'hr-round', sourceTitle: 'Tech Mahindra HR Interview'
  },
  {
    id: 'lti-01', company: 'LTIMindtree', role: 'All', round: 'Technical', topic: 'Java & Spring Boot',
    difficulty: 'Intermediate', type: 'Technical', question: 'Explain how Spring Boot handles distributed tracing across microservices using Micrometer Tracing and Zipkin.',
    expectedPoints: ['Assigns Trace ID across whole request lifecycle and Span ID per service hop', 'Propagates trace context in HTTP headers (W3C tracecontext or B3)', 'Zipkin UI visualizes end-to-end latency breakdowns'],
    sourceType: 'company-interview-pattern', sourceTitle: 'LTIMindtree Digital Assessment'
  },
  {
    id: 'lti-02', company: 'LTIMindtree', role: 'All', round: 'Coding', topic: 'Arrays & Math',
    difficulty: 'Intermediate', type: 'Coding', question: 'Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum (Kadane\'s Algorithm).',
    expectedPoints: ['Maintain currentMax = max(nums[i], currentMax + nums[i]) and globalMax', 'O(N) single pass time complexity', 'O(1) auxiliary space complexity'],
    sourceType: 'coding-round', sourceTitle: 'LTIMindtree Technical Coding'
  },
  {
    id: 'lti-03', company: 'LTIMindtree', role: 'All', round: 'System Design', topic: 'Database Migration',
    difficulty: 'Advanced', type: 'System Design', question: 'How would you migrate a legacy on-premise monolithic SQL database to AWS RDS PostgreSQL with zero downtime?',
    expectedPoints: ['Initial bulk data snapshot and restore', 'Continuous Change Data Capture (CDC) replication via AWS DMS', 'Dual writing or validation dry-run, then fast DNS cutover'],
    sourceType: 'client-architecture', sourceTitle: 'LTIMindtree Enterprise Migration'
  },
  {
    id: 'hex-02', company: 'Hexaware', role: 'All', round: 'Coding', topic: 'Sorting & Arrays',
    difficulty: 'Beginner', type: 'Coding', question: 'Write code to find the second largest element in an unsorted integer array in a single traversal.',
    expectedPoints: ['Track largest and secondLargest in one pass', 'Update secondLargest when a new largest is found or when nums[i] > secondLargest', 'O(N) time and O(1) space'],
    sourceType: 'coding-round', sourceTitle: 'Hexaware Coding Round'
  },
  {
    id: 'hex-03', company: 'Hexaware', role: 'All', round: 'Technical', topic: 'Automation & Cloud',
    difficulty: 'Intermediate', type: 'Technical', question: 'What is Test-Driven Development (TDD) and how does Red-Green-Refactor cycle improve software delivery velocity?',
    expectedPoints: ['Red: Write failing test first', 'Green: Write minimum code to pass', 'Refactor: Clean code without altering behavior', 'Prevents regressions and yields high test coverage naturally'],
    sourceType: 'technical-round', sourceTitle: 'Hexaware Technical Round'
  },
  {
    id: 'chg-02', company: 'Chargebee', role: 'All', round: 'System Design', topic: 'Subscription Billing & Idempotency',
    difficulty: 'Advanced', type: 'System Design', question: 'How do you design an idempotent payment processing API to guarantee a customer is never double-billed during network timeouts?',
    expectedPoints: ['Client sends unique Idempotency-Key header on checkout request', 'Server stores key in Redis/DB with distributed lock during processing', 'Subsequent duplicate calls with same key return cached result without re-billing card'],
    sourceType: 'system-design', sourceTitle: 'Chargebee FinTech Architecture'
  },
  {
    id: 'chg-03', company: 'Chargebee', role: 'All', round: 'Technical', topic: 'Webhooks & Reliability',
    difficulty: 'Intermediate', type: 'Technical', question: 'How do you design a reliable Webhook delivery system that notifies merchant endpoints with retry policies and HMAC verification?',
    expectedPoints: ['Queue webhook events in RabbitMQ/SQS', 'Exponential backoff with jitter on delivery failure', 'Sign payloads with shared HMAC secret in X-Signature header to verify authenticity', 'Dead Letter Queue (DLQ) after max retries'],
    sourceType: 'technical-round', sourceTitle: 'Chargebee Core Platform'
  }
];

extraCompanyQuestions.forEach(q => {
  if (!companyQuestions.some(x => x.id === q.id)) {
    companyQuestions.push(q);
  }
});

const targetFile = path.join(__dirname, 'companyQuestionsData.js');
const content = fs.readFileSync(targetFile, 'utf8');
const updatedContent = content.replace(/export const companyQuestions = \[[\s\S]*?\];\n\nexport function getFilteredCompanyQuestions/, 'export const companyQuestions = ' + JSON.stringify(companyQuestions, null, 2) + ';\n\nexport function getFilteredCompanyQuestions');
fs.writeFileSync(targetFile, updatedContent, 'utf8');
console.log('companyQuestionsData.js updated! Total company questions now:', companyQuestions.length);
