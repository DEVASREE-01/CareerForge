import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { companyProfiles as existingProfiles, companyQuestions as existingQuestions } from './companyQuestionsData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Comprehensive profiles for all 19 supported companies
const allCompanyProfiles = {
  ...existingProfiles,
  Accenture: {
    name: 'Accenture',
    focus: 'Enterprise Systems Integration, Cloud Migration (AWS/Azure), Agile Methodologies, and Full-Stack Development.',
    hiringRounds: ['Cognitive and Technical Assessment', 'Coding Assessment', 'Technical Interview', 'HR Round'],
    prepTips: 'Emphasize client-facing communication, modern cloud solutions, clean code standards, and agile sprint delivery.'
  },
  Wipro: {
    name: 'Wipro',
    focus: 'Core Java/Python Programming, Database Design, Cloud Fundamentals, and Analytical Reasoning.',
    hiringRounds: ['Wipro Elite National Talent Hunt (NTH)', 'Technical Interview', 'HR Discussion'],
    prepTips: 'Master OOP pillars, SQL joins and aggregation, basic sorting and searching algorithms, and your capstone project.'
  },
  HCLTech: {
    name: 'HCLTech',
    focus: 'Digital Engineering, Infrastructure Services, REST APIs, Automation, and Problem Solving.',
    hiringRounds: ['Online Assessment (Aptitude + Technical)', 'Technical Interview (Core Concepts & Coding)', 'HR Interview'],
    prepTips: 'Review networking fundamentals, Linux commands, REST API principles, and database normalization.'
  },
  Capgemini: {
    name: 'Capgemini',
    focus: 'Software Engineering, Full Stack Web Technologies, Cloud Platforms, and Pseudocode Logic.',
    hiringRounds: ['Pseudocode and Technical Assessment', 'Coding Test', 'Spoken English & Communication Test', 'Technical & HR Interview'],
    prepTips: 'Practice pseudocode tracing, output prediction questions, data structures, and clear English articulation.'
  },
  'Tech Mahindra': {
    name: 'Tech Mahindra',
    focus: 'Telecom Networks, Cloud Technologies, Enterprise Software, and Logical Reasoning.',
    hiringRounds: ['Aptitude & Technical Online Test', 'Coding Round', 'Technical Interview', 'HR Round'],
    prepTips: 'Brush up on basic networking protocols (TCP/IP, HTTP), core programming syntax, and communication skills.'
  },
  LTIMindtree: {
    name: 'LTIMindtree',
    focus: 'Digital Transformation, Cloud Services, Microservices, and Modern Web Applications.',
    hiringRounds: ['Online Cognitive & Technical Test', 'Coding Assessment', 'Technical Interview', 'HR Interview'],
    prepTips: 'Focus on full-stack architecture, relational database queries, DSA problem solving, and API design.'
  },
  IBM: {
    name: 'IBM',
    focus: 'Hybrid Cloud (Red Hat OpenShift), Enterprise AI, Linux Systems, Distributed Computing, and Java.',
    hiringRounds: ['Online Coding Assessment (HackerRank)', 'Technical Round 1 (Architecture & Systems)', 'Technical Round 2 (DSA & Core Tech)', 'HR Interview'],
    prepTips: 'Deep understanding of Linux, containerization basics, cloud principles, and algorithmic problem solving.'
  },
  Chargebee: {
    name: 'Chargebee',
    focus: 'SaaS Fintech, Subscription Billing, High-Concurrency APIs, PostgreSQL/MySQL, and Idempotency.',
    hiringRounds: ['Online Coding Challenge', 'Technical Round 1 (Data Structures & Backend)', 'Technical Round 2 (System Design & DB Schema)', 'Culture Fit Round'],
    prepTips: 'Understand distributed payment idempotency, database transactions, webhook reliability, and SaaS metrics like MRR/churn.'
  },
  Hexaware: {
    name: 'Hexaware',
    focus: 'Automation Testing, Cloud Transformation, Enterprise Java/Full Stack, and Database Design.',
    hiringRounds: ['Aptitude & Domain Specific Test', 'Coding Round', 'Technical Interview', 'HR Interview'],
    prepTips: 'Review Java OOP, SQL window functions, web application basics, and automated testing concepts.'
  }
};

// Additional questions for companies
const newCompanyQuestions = [
  // Accenture
  {
    id: 'acc-01', company: 'Accenture', role: 'All', round: 'Technical', topic: 'Cloud & Architecture', difficulty: 'Intermediate', type: 'Technical',
    question: 'How do you design an API gateway for microservices to handle authentication, rate limiting, and request routing?',
    expectedPoints: ['Centralized JWT validation at gateway', 'Rate limiting via Redis token bucket algorithm', 'Path-based reverse proxy routing to downstream microservices'],
    sourceType: 'company-focused', sourceTitle: 'Company-Focused Practice Question'
  },
  {
    id: 'acc-02', company: 'Accenture', role: 'All', round: 'Technical', topic: 'SQL & Data', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain the difference between INNER JOIN, LEFT JOIN, and FULL OUTER JOIN with practical examples.',
    expectedPoints: ['INNER JOIN returns only matching rows', 'LEFT JOIN returns all rows from left table and matching from right', 'FULL OUTER JOIN returns all rows with NULL for non-matches'],
    sourceType: 'company-focused', sourceTitle: 'Frequently Reported Question'
  },
  // Wipro
  {
    id: 'wip-01', company: 'Wipro', role: 'All', round: 'Technical', topic: 'OOP', difficulty: 'Beginner', type: 'Technical',
    question: 'What is method overriding in Java, and why cannot static methods be overridden?',
    expectedPoints: ['Overriding provides subclass-specific behavior with @Override', 'Static methods are bound at compile time (static binding) based on reference type, not runtime object instance'],
    sourceType: 'company-focused', sourceTitle: 'Frequently Reported Question'
  },
  {
    id: 'wip-02', company: 'Wipro', role: 'All', round: 'Coding', topic: 'Arrays', difficulty: 'Easy', type: 'Coding',
    question: 'Write a program to reverse an array in-place without using extra array memory.',
    expectedPoints: ['Two pointers starting from start (0) and end (n-1)', 'Swap elements and move pointers inward', 'Time complexity O(N/2), Space complexity O(1)'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Experience'
  },
  // HCLTech
  {
    id: 'hcl-01', company: 'HCLTech', role: 'All', round: 'Technical', topic: 'Linux & Networking', difficulty: 'Intermediate', type: 'Technical',
    question: 'How do you troubleshoot a web server returning 502 Bad Gateway versus 504 Gateway Timeout?',
    expectedPoints: ['502 Bad Gateway means upstream application server crashed, refused connection, or died', '504 Gateway Timeout means upstream server is alive but took longer than gateway proxy_read_timeout to respond'],
    sourceType: 'company-focused', sourceTitle: 'Technical Support & Systems Question'
  },
  // Capgemini
  {
    id: 'cap-01', company: 'Capgemini', role: 'All', round: 'Technical', topic: 'Web Development', difficulty: 'Beginner', type: 'Technical',
    question: 'Explain CORS (Cross-Origin Resource Sharing) and why browsers block cross-origin requests by default.',
    expectedPoints: ['Same-Origin Policy security restriction in browsers', 'Preflight OPTIONS request sent for non-simple methods', 'Access-Control-Allow-Origin response header required'],
    sourceType: 'candidate-reported', sourceTitle: 'Candidate Interview Experience'
  },
  // IBM
  {
    id: 'ibm-01', company: 'IBM', role: 'All', round: 'Technical', topic: 'Containers & Cloud', difficulty: 'Intermediate', type: 'Technical',
    question: 'What is container orchestration, and how does Kubernetes differ from Docker Swarm for enterprise hybrid clouds?',
    expectedPoints: ['Automated scaling, self-healing, rolling updates, and service discovery', 'Kubernetes provides advanced auto-scaling, richer ecosystem, CRDs, and multi-cloud portability'],
    sourceType: 'company-focused', sourceTitle: 'Enterprise Hybrid Cloud Question'
  },
  // Chargebee
  {
    id: 'chg-01', company: 'Chargebee', role: 'All', round: 'Technical', topic: 'SaaS Architecture', difficulty: 'Advanced', type: 'Technical',
    question: 'How do you design an idempotent payment processing API to guarantee a customer is never billed twice even under network retries?',
    expectedPoints: ['Idempotency-Key header passed by client', 'Server checks Redis/DB for key before executing charge', 'Store processing status and cached response for immediate return on duplicate requests'],
    sourceType: 'company-focused', sourceTitle: 'SaaS Fintech Technical Standard'
  },
  // Hexaware
  {
    id: 'hex-01', company: 'Hexaware', role: 'All', round: 'Technical', topic: 'Testing & Automation', difficulty: 'Beginner', type: 'Technical',
    question: 'What is the Page Object Model (POM) in test automation and what are its main maintenance benefits?',
    expectedPoints: ['Separates test logic from UI locators/page interactions', 'Single source of truth for element selectors', 'Reduces code duplication across test scripts'],
    sourceType: 'company-focused', sourceTitle: 'Automation Engineering Standard'
  }
];

const combinedCompanyQuestions = [...existingQuestions, ...newCompanyQuestions];

const code = `// Curated Company Interview Profiles and Question Banks
export const companyProfiles = ${JSON.stringify(allCompanyProfiles, null, 2)};

export const companyQuestions = ${JSON.stringify(combinedCompanyQuestions, null, 2)};

export function getFilteredCompanyQuestions({ company, role, difficulty, category, search } = {}) {
  return companyQuestions.filter(q => {
    if (company && company !== 'All') {
      if ((q.company || '').toLowerCase() !== company.toLowerCase()) return false;
    }
    if (role && role !== 'All' && q.role !== 'All') {
      const targetRole = role.toLowerCase();
      const questionRole = (q.role || '').toLowerCase();
      const r1 = targetRole.replace('developer', '').replace('engineer', '').trim();
      const r2 = questionRole.replace('developer', '').replace('engineer', '').trim();
      const isRoleMatch = questionRole === targetRole || (r1 && r2 && (r1.includes(r2) || r2.includes(r1)));
      if (!isRoleMatch) return false;
    }
    if (difficulty && difficulty !== 'All' && (q.difficulty || '').toLowerCase() !== difficulty.toLowerCase()) return false;
    if (category && category !== 'All') {
      const qRound = (q.round || '').toLowerCase();
      const qType = (q.type || '').toLowerCase();
      const targetCat = category.toLowerCase();
      if (!qRound.includes(targetCat) && !qType.includes(targetCat)) return false;
    }
    if (search) {
      const s = search.toLowerCase();
      const matchQ = (q.question || '').toLowerCase().includes(s);
      const matchT = (q.topic || '').toLowerCase().includes(s);
      if (!matchQ && !matchT) return false;
    }
    return true;
  });
}
`;

fs.writeFileSync(path.join(__dirname, 'companyQuestionsData.js'), code, 'utf8');
console.log('Successfully updated companyQuestionsData.js with', Object.keys(allCompanyProfiles).length, 'companies and', combinedCompanyQuestions.length, 'questions.');
