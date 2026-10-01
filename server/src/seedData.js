export const companies = [
  ['Freshworks', 'Product SaaS', 'Chennai', 'https://www.freshworks.com/company/careers/'],
  ['Zoho', 'Product Software & Cloud Suites', 'Chennai', 'https://www.zoho.com/careers/'],
  ['Amazon', 'Cloud Infrastructure & E-commerce', 'Bengaluru / Chennai / Hyderabad', 'https://www.amazon.jobs/'],
  ['Google', 'Cloud, Distributed Systems & Search', 'Bengaluru / Hyderabad', 'https://careers.google.com/'],
  ['Microsoft', 'Enterprise Software & Azure Cloud', 'Bengaluru / Hyderabad / Noida', 'https://careers.microsoft.com/'],
  ['TCS', 'Global Technology Services & Consulting', 'Pan-India', 'https://www.tcs.com/careers'],
  ['Infosys', 'Digital Services & Consulting', 'Bengaluru / Pune / Chennai', 'https://www.infosys.com/careers/'],
  ['Cognizant', 'Enterprise Digital Transformation', 'Chennai / Bengaluru / Pune', 'https://careers.cognizant.com/'],
  ['Oracle', 'Database Systems & Enterprise Cloud', 'Bengaluru / Hyderabad', 'https://www.oracle.com/careers/'],
  ['Deloitte', 'Technology Consulting & Advisory', 'Hyderabad / Bengaluru / Mumbai', 'https://jobs2.deloitte.com/'],
  ['Accenture', 'Technology Consulting & Systems Integration', 'Bengaluru / Chennai', 'https://www.accenture.com/careers'],
  ['Wipro', 'Information Technology & Cloud Solutions', 'Bengaluru / Chennai', 'https://careers.wipro.com/'],
  ['HCLTech', 'Digital Engineering & Infrastructure Services', 'Noida / Chennai', 'https://www.hcltech.com/careers'],
  ['Capgemini', 'Global Engineering & Cloud Consulting', 'Mumbai / Bengaluru / Pune', 'https://www.capgemini.com/careers/'],
  ['Tech Mahindra', 'Telecom, Cloud & IT Services', 'Pune / Hyderabad', 'https://www.techmahindra.com/careers/'],
  ['LTIMindtree', 'Digital Transformation & Cloud Services', 'Bengaluru / Mumbai', 'https://www.ltimindtree.com/careers/'],
  ['IBM', 'Hybrid Cloud & Enterprise AI', 'Bengaluru / Kochi', 'https://www.ibm.com/careers'],
  ['Chargebee', 'Subscription Billing & SaaS Fintech', 'Chennai', 'https://www.chargebee.com/careers/'],
  ['Hexaware', 'Automation & Digital IT Services', 'Chennai / Mumbai', 'https://hexaware.com/careers/']
].map(([name, industry, location, careersUrl], index) => ({
  id: String(index + 1),
  name,
  industry,
  locations: [location],
  careersUrl,
  description: `Preparation hub for ${name} candidates with verified hiring rounds, technical tracks, and interview checklists.`,
  sourceType: 'editorial',
  sourceTitle: 'CareerForge curated company preparation profile',
  confidence: 'high'
}));

export const roles = [
  'Full Stack Developer',
  'Cloud Engineer',
  'Java Backend Developer',
  'Data Analyst',
  'Frontend Developer',
  'DevOps Engineer',
  'Backend Developer',
  'MERN Stack Developer',
  'Java Developer',
  'Software Developer',
  'Python Developer',
  'QA Automation Engineer'
];

export const requirements = [
  ['JavaScript', 5, 1.2, 1],
  ['React', 5, 1.2, 1],
  ['Node.js', 4, 1.3, 1],
  ['REST APIs', 4, 1.3, 1],
  ['MongoDB', 3, 1, 1],
  ['SQL', 4, 1.1, 1],
  ['DSA', 4, 1.2, 1],
  ['Git', 3, 1, 1],
  ['HTML & CSS', 4, 1, 1],
  ['Authentication', 3, 1.2, 1]
].map(([skill, requiredLevel, companyWeight, roleWeight]) => ({ skill, requiredLevel, companyWeight, roleWeight }));

export const roadmap = [
  { id: 'web-foundations', title: 'Programming & Web Foundations', description: 'HTML, CSS, Git and modern JavaScript fundamentals.', prerequisites: [], topics: ['HTML & CSS', 'Git', 'JavaScript'] },
  { id: 'js-core', title: 'Modern JavaScript & Async Execution', description: 'Closures, Event Loop, Promises, ES6+ modules, and DOM APIs.', prerequisites: ['web-foundations'], topics: ['JavaScript'] },
  { id: 'react', title: 'React SPA & Component Architecture', description: 'Component state, hooks, forms, reconciliation, and routing.', prerequisites: ['js-core'], topics: ['React'] },
  { id: 'backend', title: 'Server Architecture & REST APIs', description: 'Express.js routes, middleware, JWT auth, validation, and error handling.', prerequisites: ['js-core'], topics: ['Node.js', 'REST APIs', 'Authentication'] },
  { id: 'data', title: 'Databases & Data Modeling', description: 'Schema design, indexing, ACID transactions, and query optimization.', prerequisites: ['backend'], topics: ['MongoDB', 'SQL'] },
  { id: 'capstone', title: 'Production Capstone Project', description: 'Build, containerize, deploy, and defend an end-to-end full-stack app.', prerequisites: ['react', 'backend', 'data'], topics: ['React', 'Node.js', 'MongoDB', 'Authentication'] },
  { id: 'interview', title: 'Interview & Placement Readiness', description: 'Technical explanations, system design tradeoffs, and HR practice.', prerequisites: ['capstone'], topics: ['DSA', 'System Design'] }
];

export const projects = [
  // Full Stack / MERN
  {
    id: 'hireflow',
    name: 'HireFlow — SaaS Job & Candidate Tracking Platform',
    domain: 'Full Stack Engineering',
    skills: ['React', 'Node.js', 'REST APIs', 'MongoDB', 'Authentication'],
    difficulty: 'Intermediate',
    time: '2–3 weeks',
    tags: ['frontend', 'backend', 'mern'],
    companyRelevance: ['Freshworks', 'Zoho', 'Chargebee'],
    objective: 'Build a production-grade multi-tenant hiring tracker with role-based access control and interview stage pipelines.',
    problemStatement: 'Recruiters often struggle with fragmented spreadsheets. HireFlow centralizes candidates with Kanban boards, audit logs, and automated email reminders.',
    features: ['JWT authentication with refresh tokens', 'Interactive drag-and-drop Kanban candidate pipeline', 'Resume file metadata viewer and tagging', 'Audit log tracking candidate stage transitions'],
    milestones: ['Set up schema models with Mongoose & Express API', 'Build React Kanban board with responsive drag states', 'Implement secure JWT auth with HTTP-only cookies', 'Deploy with Docker and automated smoke tests'],
    deliverables: ['Production GitHub repository with modular MVC architecture', 'Live deployed frontend & backend URLs', 'Comprehensive README with architecture diagram and API spec'],
    interviewDefense: [
      { category: 'Architecture', question: 'How did you structure the candidate state machine between Application and Offer stages?' },
      { category: 'Database Design', question: 'Why choose MongoDB for candidate resumes and activity logs over a strict relational schema?' },
      { category: 'Security', question: 'How do you safeguard candidate PII and prevent privilege escalation between recruiter and interviewer roles?' }
    ]
  },
  {
    id: 'mern-commerce',
    name: 'OmniStore — Full-Stack E-Commerce Platform with Payment & Inventory',
    domain: 'Full Stack Engineering',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
    difficulty: 'Advanced',
    time: '3–4 weeks',
    tags: ['mern', 'frontend', 'backend'],
    companyRelevance: ['Amazon', 'Freshworks', 'Zoho'],
    objective: 'Engineer an end-to-end e-commerce store with optimistic cart updates, inventory reservation, and webhook order verification.',
    problemStatement: 'E-commerce requires high consistency in inventory counts while maintaining sub-100ms catalog search times.',
    features: ['Category filtering, pagination, and text search', 'Optimistic UI updates for shopping cart operations', 'JWT authentication and admin dashboard for inventory management', 'Stripe checkout integration with webhook verification'],
    milestones: ['Design normalized product, order, and user schemas', 'Implement rate-limited checkout API with transaction rollbacks', 'Build responsive mobile-first React storefront', 'Add Redis caching for top product category listings'],
    deliverables: ['Clean GitHub repo with ESLint, Prettier, and Vitest suite', 'Postman / OpenAPI collection documented', 'Architecture diagram explaining order flow'],
    interviewDefense: [
      { category: 'Concurrency', question: 'How do you prevent overselling if two users purchase the last item at the same microsecond?' },
      { category: 'Scalability', question: 'Where would you introduce Redis caching in the catalog and cart pipelines?' },
      { category: 'Reliability', question: 'How do you handle missed payment webhooks during temporary server downtime?' }
    ]
  },
  {
    id: 'devpulse',
    name: 'DevPulse — Developer Velocity & GitHub Analytics Engine',
    domain: 'Full Stack Engineering',
    skills: ['React', 'REST APIs', 'DSA', 'Git', 'Node.js'],
    difficulty: 'Advanced',
    time: '3 weeks',
    tags: ['frontend', 'backend'],
    companyRelevance: ['Amazon', 'Google', 'Deloitte'],
    objective: 'Build an engineering team metrics dashboard that analyzes public GitHub activity to surface PR cycle times and code review health.',
    problemStatement: 'Engineering leads lack visibility into PR bottlenecks and review turnaround times.',
    features: ['GitHub API integration with rate-limit queue management', 'PR turnaround time calculations using sliding windows', 'Interactive Recharts graphs for commit frequency and language breakdown', 'Personalized contributor scorecards'],
    milestones: ['Implement server-side GitHub API client with caching', 'Design algorithmic aggregation for commit trends', 'Build modern dark-mode interactive charts with Recharts', 'Set up GitHub Actions CI for unit testing'],
    deliverables: ['Tested Node.js / React repository with 80%+ test coverage', 'Live interactive demo URL'],
    interviewDefense: [
      { category: 'Algorithms', question: 'Explain the algorithmic time complexity of computing rolling PR cycle times.' },
      { category: 'Resilience', question: 'How did you handle the GitHub unauthenticated 60 req/hr rate limit gracefully?' }
    ]
  },

  // Cloud & DevOps Engineering
  {
    id: 'aws-vpc',
    name: 'Enterprise Multi-Tier AWS VPC & Bastion Infrastructure Blueprint',
    domain: 'Cloud Engineering',
    skills: ['AWS', 'Networking', 'Terraform', 'Linux'],
    difficulty: 'Intermediate',
    time: '2 weeks',
    tags: ['cloud'],
    companyRelevance: ['Amazon', 'Microsoft', 'Oracle', 'Deloitte'],
    objective: 'Provision an automated, secure multi-AZ AWS VPC architecture using Terraform with public/private subnet isolation and bastion hosts.',
    problemStatement: 'Production databases must never be directly accessible from the public internet, requiring secure jump hosts and NAT gateways.',
    features: ['Multi-AZ VPC with 2 public subnets and 2 private subnets', 'NAT Gateway for private outbound internet routing', 'Hardened Linux Bastion jump server with key-based SSH ingress', 'Stateful Security Groups and stateless NACL perimeter defenses'],
    milestones: ['Write modular Terraform configurations for VPC, subnets, and routes', 'Configure security groups following principle of least privilege', 'Automate bastion user creation using cloud-init Bash scripts', 'Verify zero inbound public reachability to private DB subnets'],
    deliverables: ['Clean Terraform repository with tfvars and remote state backend spec', 'VPC network architecture diagram', 'Security audit verification checklist'],
    interviewDefense: [
      { category: 'Networking', question: 'Walk me through the path a packet takes from a private EC2 instance to the public internet.' },
      { category: 'Security', question: 'What is the security justification for placing databases in private subnets with NACLs?' },
      { category: 'IaC', question: 'How do you handle Terraform state locking in team environments?' }
    ]
  },
  {
    id: 'k8s-gitops-pipeline',
    name: 'GitOps Continuous Delivery Pipeline with Docker & Kubernetes',
    domain: 'Cloud Engineering',
    skills: ['Linux', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    difficulty: 'Advanced',
    time: '3 weeks',
    tags: ['cloud'],
    companyRelevance: ['Amazon', 'Google', 'Microsoft', 'Cognizant'],
    objective: 'Implement an automated zero-downtime rolling deployment pipeline for containerized microservices using GitHub Actions and Kubernetes.',
    problemStatement: 'Manual server deployments cause downtime, configuration drift, and lack rollback mechanisms.',
    features: ['Multi-stage Dockerfile optimizing image size from 800MB to 45MB', 'Kubernetes Deployment manifests with RollingUpdate strategy', 'Liveness and readiness probes ensuring traffic switches only to healthy pods', 'Horizontal Pod Autoscaler (HPA) responding to CPU/memory metrics'],
    milestones: ['Containerize a REST API with non-root security context', 'Set up local minikube / k3s cluster with ingress controller', 'Write GitHub Actions workflow to build, test, and push images', 'Implement automated canary rollback if health checks fail'],
    deliverables: ['Repository with Dockerfile, k8s manifests, and GitHub Actions workflow', 'Zero-downtime deployment demonstration recording or logs'],
    interviewDefense: [
      { category: 'Kubernetes', question: 'What is the exact distinction between readinessProbe and livenessProbe?' },
      { category: 'Containers', question: 'Why are multi-stage Docker builds critical in cloud security and performance?' }
    ]
  },

  // Java Backend Engineering
  {
    id: 'java-bank-ledger',
    name: 'VaultPay — High-Throughput Distributed Banking Ledger',
    domain: 'Java Backend Engineering',
    skills: ['Java', 'Spring Boot', 'JPA/Hibernate', 'SQL', 'Authentication'],
    difficulty: 'Advanced',
    time: '3 weeks',
    tags: ['java', 'backend'],
    companyRelevance: ['Zoho', 'Oracle', 'Amazon', 'TCS'],
    objective: 'Build an enterprise double-entry financial ledger service with optimistic locking to prevent double-spending under concurrent transfers.',
    problemStatement: 'Concurrent balance updates in financial software cause race conditions and balance discrepancies if not isolated correctly.',
    features: ['Spring Boot 3 REST API with Swagger/OpenAPI documentation', 'JPA optimistic locking (@Version) on account balances', 'Spring Security with JWT authentication and RBAC', 'Database transaction rollback with @Transactional propagation'],
    milestones: ['Design double-entry ledger schema (Debits must equal Credits)', 'Implement transfer service with optimistic locking and retry policy', 'Write JUnit 5 & Mockito integration tests for race conditions', 'Profile query execution plans to avoid N+1 Hibernate queries'],
    deliverables: ['Maven / Gradle Spring Boot project repository', 'Postman collection with positive and concurrent race tests', 'Entity relationship diagram (ERD)'],
    interviewDefense: [
      { category: 'Concurrency', question: 'How does optimistic locking compare to pessimistic row-level locking for financial transactions?' },
      { category: 'ORM', question: 'How did you eliminate the N+1 select problem when fetching transaction histories?' },
      { category: 'Transactions', question: 'What happens if a network timeout occurs right after debiting but before crediting?' }
    ]
  },

  // Data Analytics
  {
    id: 'sales-insights',
    name: 'RetailPulse — Enterprise Sales & Customer Churn Analytics Hub',
    domain: 'Data Analytics',
    skills: ['SQL', 'Excel', 'Python', 'Power BI', 'Data Visualization', 'Statistics'],
    difficulty: 'Intermediate',
    time: '2–3 weeks',
    tags: ['data'],
    companyRelevance: ['Deloitte', 'TCS', 'Infosys', 'Amazon'],
    objective: 'Build an end-to-end data pipeline cleaning 250,000+ retail transactions with Python/Pandas, performing SQL cohort analysis, and publishing an executive Power BI dashboard.',
    problemStatement: 'Retail leadership requires clear segmentation of churn risks and regional profit leakages to guide discounting strategies.',
    features: ['Data cleaning pipeline resolving missing values, outliers, and data types', 'Complex SQL queries using Window Functions, CTEs, and RFM segmentation', 'Interactive Power BI / Tableau dashboard with drill-down KPIs', 'Executive slide deck narrative summarizing actionable business takeaways'],
    milestones: ['Write Pandas ETL script cleaning raw transaction CSV data', 'Execute SQL queries identifying top 10% customers and churn rates', 'Build interactive visual dashboard with cross-filtering', 'Draft executive summary with quantified ROI recommendations'],
    deliverables: ['Python Jupyter notebook / ETL script with markdown documentation', 'SQL query file containing window functions and RFM analysis', 'Power BI / Tableau dashboard export or interactive screenshots'],
    interviewDefense: [
      { category: 'SQL', question: 'Explain how you used Window Functions (ROW_NUMBER vs DENSE_RANK) in cohort analysis.' },
      { category: 'Business Metrics', question: 'How do you differentiate correlation from causation in customer retention drops?' },
      { category: 'Data Modeling', question: 'Explain your star schema design with Fact and Dimension tables.' }
    ]
  },

  // Frontend Engineering
  {
    id: 'fluid-canvas-workspace',
    name: 'TaskFlow — High-Performance Kanban & Project Workspace',
    domain: 'Frontend Engineering',
    skills: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Frontend Performance', 'Testing'],
    difficulty: 'Advanced',
    time: '2–3 weeks',
    tags: ['frontend'],
    companyRelevance: ['Freshworks', 'Zoho', 'Google', 'Microsoft'],
    objective: 'Engineer a sub-second, accessible project workspace in React & TypeScript featuring virtualized lists and keyboard-driven navigation.',
    problemStatement: 'Rendering thousands of interactive cards causes DOM lag and degraded frame rates in complex web tools.',
    features: ['Virtual list rendering supporting 10,000+ items without DOM lag', 'WCAG 2.1 AA accessible with complete keyboard ARIA navigation', 'Custom state management with zero unnecessary component re-renders', 'Comprehensive Vitest and React Testing Library test suite'],
    milestones: ['Set up Vite + TypeScript with strict type checking', 'Implement windowing / virtualization for large column lists', 'Add keyboard shortcuts (Cmd+K modal, j/k navigation)', 'Optimize Lighthouse score to 95+ performance & accessibility'],
    deliverables: ['GitHub repository with clean component directory structure', 'Lighthouse 95+ audit report', 'Live Vercel / Netlify deployment'],
    interviewDefense: [
      { category: 'Performance', question: 'How did you profile and eliminate unnecessary React re-renders in the card list?' },
      { category: 'Accessibility', question: 'How did you ensure full screen reader and keyboard accessibility for drag interactions?' }
    ]
  }
];

export const certifications = [
  {
    id: 'aws-ccp',
    name: 'AWS Certified Cloud Practitioner (CLF-C02)',
    provider: 'Amazon Web Services',
    domain: 'Cloud',
    difficulty: 'Beginner',
    time: '4–6 weeks',
    costCategory: 'Paid ($100)',
    roles: ['Cloud Engineer', 'DevOps Engineer', 'Full Stack Developer', 'Software Developer'],
    officialUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    description: 'Validates overall understanding of AWS Cloud platform, core services, security, architecture, and billing models.'
  },
  {
    id: 'aws-saa',
    name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    provider: 'Amazon Web Services',
    domain: 'Cloud',
    difficulty: 'Intermediate',
    time: '8–10 weeks',
    costCategory: 'Paid ($150)',
    roles: ['Cloud Engineer', 'DevOps Engineer', 'Backend Developer'],
    officialUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    description: 'Comprehensive certification demonstrating skills in designing secure, high-performing, and cost-optimized cloud architectures.'
  },
  {
    id: 'meta-fe',
    name: 'Meta Front-End Developer Professional Certificate',
    provider: 'Meta',
    domain: 'Frontend',
    difficulty: 'Beginner',
    time: '3–4 months',
    costCategory: 'Subscription / Financial Aid',
    roles: ['Frontend Developer', 'Full Stack Developer'],
    officialUrl: 'https://www.coursera.org/professional-certificates/meta-front-end-developer',
    description: 'Industry-accredited program covering HTML, CSS, JavaScript, React, UI/UX design, and Git.'
  },
  {
    id: 'oracle-java-assoc',
    name: 'Oracle Certified Associate, Java SE 11/17 Programmer',
    provider: 'Oracle',
    domain: 'Java Backend',
    difficulty: 'Intermediate',
    time: '6–8 weeks',
    costCategory: 'Paid ($245)',
    roles: ['Java Backend Developer', 'Java Developer', 'Software Developer'],
    officialUrl: 'https://education.oracle.com/java-se-11-developer/pexam_1Z0-819',
    description: 'Gold standard qualification testing deep understanding of Java OOP, multithreading, collections, streams, and module systems.'
  },
  {
    id: 'oracle-sql',
    name: 'Oracle Database SQL Certified Associate (1Z0-071)',
    provider: 'Oracle',
    domain: 'Data',
    difficulty: 'Intermediate',
    time: '6 weeks',
    costCategory: 'Paid ($245)',
    roles: ['Data Analyst', 'Backend Developer', 'Java Backend Developer'],
    officialUrl: 'https://education.oracle.com/oracle-database-sql/pexam_1Z0-071',
    description: 'Demonstrates deep mastery of SQL query writing, relational modeling, DDL/DML operations, joins, subqueries, and views.'
  },
  {
    id: 'google-data-analytics',
    name: 'Google Data Analytics Professional Certificate',
    provider: 'Google',
    domain: 'Data',
    difficulty: 'Beginner',
    time: '3–4 months',
    costCategory: 'Subscription / Financial Aid',
    roles: ['Data Analyst'],
    officialUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    description: 'Rigorous curriculum covering data cleaning, analysis, SQL, R programming, Tableau, and stakeholder presentation.'
  },
  {
    id: 'azure-fundamentals',
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    provider: 'Microsoft',
    domain: 'Cloud',
    difficulty: 'Beginner',
    time: '4–5 weeks',
    costCategory: 'Paid ($99)',
    roles: ['Cloud Engineer', 'DevOps Engineer', 'Full Stack Developer'],
    officialUrl: 'https://learn.microsoft.com/credentials/certifications/azure-fundamentals/',
    description: 'Foundational knowledge of Azure cloud services, networking, governance, privacy, and compliance.'
  },
  {
    id: 'cka',
    name: 'Certified Kubernetes Administrator (CKA)',
    provider: 'Cloud Native Computing Foundation (CNCF)',
    domain: 'DevOps',
    difficulty: 'Advanced',
    time: '2–3 months',
    costCategory: 'Paid ($395)',
    roles: ['DevOps Engineer', 'Cloud Engineer'],
    officialUrl: 'https://www.cncf.io/certification/cka/',
    description: 'Hands-on performance-based exam verifying skills in Kubernetes installation, configuration, networking, and troubleshooting.'
  }
];

export const questions = [
  { id: 'q1', company: 'Freshworks', role: 'Full Stack Developer', round: 'Technical', topic: 'REST APIs', difficulty: 'medium', type: 'Technical', question: 'Explain idempotency in REST APIs and when you would use PUT versus PATCH.', sourceType: 'candidate-reported', sourceTitle: 'Candidate interview experience', confidence: 'medium' },
  { id: 'q2', company: 'Freshworks', role: 'Full Stack Developer', round: 'Technical', topic: 'JavaScript', difficulty: 'medium', type: 'Technical', question: 'Explain the event loop and how it affects an API call in a React application.', sourceType: 'frequently-reported', sourceTitle: 'Aggregated candidate reports', confidence: 'medium' },
  { id: 'q3', company: 'Zoho', role: 'Full Stack Developer', round: 'Coding', topic: 'DSA', difficulty: 'medium', type: 'Coding', question: 'Given a string, find the length of the longest substring without repeating characters.', sourceType: 'candidate-reported', sourceTitle: 'Candidate interview experience', confidence: 'medium' },
  { id: 'q4', company: 'TCS', role: 'Software Developer', round: 'Technical', topic: 'OOP', difficulty: 'easy', type: 'Technical', question: 'Describe inheritance, polymorphism and a practical use case for each.', sourceType: 'frequently-reported', sourceTitle: 'Aggregated candidate reports', confidence: 'medium' },
  { id: 'q5', company: 'All', role: 'All', round: 'HR', topic: 'Behavioral', difficulty: 'easy', type: 'HR', question: 'Tell me about a time you received difficult feedback and what you changed.', sourceType: 'platform-generated', sourceTitle: 'CareerForge practice library', confidence: 'practice' }
];

export const fallbackVideos = {
  'JavaScript': [{ title: 'JavaScript Full Course for Beginners', channel: 'freeCodeCamp.org', watchUrl: 'https://www.youtube.com/results?search_query=javascript+full+course+beginners' }],
  'React': [{ title: 'React for Beginners — Complete Tutorial', channel: 'freeCodeCamp.org', watchUrl: 'https://www.youtube.com/results?search_query=react+for+beginners' }],
  'REST APIs': [{ title: 'REST API Crash Course & Best Practices', channel: 'Traversy Media', watchUrl: 'https://www.youtube.com/results?search_query=rest+api+crash+course' }],
  'Node.js': [{ title: 'Node.js and Express.js Full Course', channel: 'freeCodeCamp.org', watchUrl: 'https://www.youtube.com/results?search_query=nodejs+express+full+course' }],
  'MongoDB': [{ title: 'MongoDB Tutorial for Beginners', channel: 'freeCodeCamp.org', watchUrl: 'https://www.youtube.com/results?search_query=mongodb+tutorial+beginners' }],
  'SQL': [{ title: 'SQL Tutorial — Full Database Course for Beginners', channel: 'freeCodeCamp.org', watchUrl: 'https://www.youtube.com/results?search_query=sql+full+database+course+beginners' }],
  'AWS': [{ title: 'AWS Certified Cloud Practitioner Full Course', channel: 'freeCodeCamp.org', watchUrl: 'https://www.youtube.com/results?search_query=aws+certified+cloud+practitioner+full+course' }],
  'Linux': [{ title: 'Linux Operating System Fundamentals', channel: 'freeCodeCamp.org', watchUrl: 'https://www.youtube.com/results?search_query=linux+fundamentals+full+course' }],
  'Docker': [{ title: 'Docker Tutorial for Beginners', channel: 'Programming with Mosh', watchUrl: 'https://www.youtube.com/results?search_query=docker+tutorial+beginners' }],
  'Kubernetes': [{ title: 'Kubernetes Course for Beginners', channel: 'TechWorld with Nana', watchUrl: 'https://www.youtube.com/results?search_query=kubernetes+tutorial+beginners' }],
  'Terraform': [{ title: 'Terraform Course — Automate your AWS Cloud Infrastructure', channel: 'freeCodeCamp.org', watchUrl: 'https://www.youtube.com/results?search_query=terraform+aws+full+course' }],
  'Java': [{ title: 'Java Tutorial for Beginners', channel: 'Programming with Mosh', watchUrl: 'https://www.youtube.com/results?search_query=java+tutorial+beginners' }],
  'Spring Boot': [{ title: 'Spring Boot Tutorial for Beginners', channel: 'Amigoscode', watchUrl: 'https://www.youtube.com/results?search_query=spring+boot+tutorial+beginners' }],
  'Python': [{ title: 'Python for Beginners — Full Course', channel: 'Programming with Mosh', watchUrl: 'https://www.youtube.com/results?search_query=python+for+beginners+full+course' }],
  'Power BI': [{ title: 'Power BI Full Course — Learn Power BI in 4 Hours', channel: 'Edureka', watchUrl: 'https://www.youtube.com/results?search_query=power+bi+full+course' }],
  'DSA': [{ title: 'Data Structures and Algorithms for Beginners', channel: 'freeCodeCamp.org', watchUrl: 'https://www.youtube.com/results?search_query=data+structures+algorithms+full+course' }]
};
