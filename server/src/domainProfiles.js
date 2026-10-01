export const roleProfiles = {
  'Frontend Developer': {
    domain: 'Frontend Engineering',
    skills: [['HTML & CSS', 5], ['JavaScript', 5], ['TypeScript', 4], ['React', 5], ['Accessibility', 4], ['Frontend Performance', 4], ['Testing', 3], ['Git', 3]],
    topics: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React', 'Accessibility', 'Frontend Performance'],
    projectTags: ['frontend'],
    videoTopics: ['React', 'JavaScript', 'TypeScript'],
    interviewTopics: ['DOM', 'Accessibility', 'React', 'Performance', 'JavaScript']
  },
  'Cloud Engineer': {
    domain: 'Cloud Engineering',
    skills: [['Linux', 4], ['Networking', 4], ['AWS', 5], ['Docker', 4], ['Kubernetes', 3], ['Terraform', 4], ['CI/CD', 4], ['Python', 3], ['Git', 3]],
    topics: ['Linux', 'Networking', 'AWS', 'Docker', 'Terraform', 'CI/CD'],
    projectTags: ['cloud'],
    videoTopics: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    interviewTopics: ['Cloud architecture', 'Networking', 'IAM', 'Containers', 'Infrastructure as Code']
  },
  'DevOps Engineer': {
    domain: 'DevOps Engineering',
    skills: [['Linux', 4], ['Docker', 4], ['Kubernetes', 4], ['Terraform', 4], ['CI/CD', 5], ['AWS', 4], ['Networking', 3], ['Python', 3], ['Git', 4]],
    topics: ['Linux', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'AWS'],
    projectTags: ['cloud'],
    videoTopics: ['Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    interviewTopics: ['CI/CD', 'Containers', 'Infrastructure as Code', 'Observability', 'Linux']
  },
  'Data Analyst': {
    domain: 'Data Analytics',
    skills: [['SQL', 5], ['Excel', 4], ['Python', 4], ['Statistics', 4], ['Power BI', 4], ['Data Visualization', 4], ['Git', 2]],
    topics: ['SQL', 'Excel', 'Python', 'Statistics', 'Power BI', 'Data Visualization'],
    projectTags: ['data'],
    videoTopics: ['SQL', 'Python', 'Power BI', 'Statistics'],
    interviewTopics: ['SQL', 'Statistics', 'Dashboards', 'Data Cleaning', 'Business Analytics']
  },
  'Backend Developer': {
    domain: 'Backend Engineering',
    skills: [['JavaScript', 4], ['Node.js', 5], ['REST APIs', 5], ['SQL', 4], ['MongoDB', 4], ['Authentication', 4], ['System Design', 3], ['Git', 3]],
    topics: ['Node.js', 'REST APIs', 'SQL', 'MongoDB', 'Authentication', 'System Design'],
    projectTags: ['backend'],
    videoTopics: ['Node.js', 'REST APIs', 'SQL', 'System Design'],
    interviewTopics: ['APIs', 'Databases', 'Authentication', 'System Design', 'Caching']
  },
  'Full Stack Developer': {
    domain: 'Full Stack Engineering',
    skills: [['JavaScript', 5], ['React', 5], ['Node.js', 4], ['REST APIs', 4], ['MongoDB', 3], ['SQL', 3], ['DSA', 4], ['Git', 3], ['HTML & CSS', 4], ['Authentication', 3]],
    topics: ['JavaScript', 'React', 'Node.js', 'REST APIs', 'MongoDB', 'SQL'],
    projectTags: ['frontend', 'backend'],
    videoTopics: ['React', 'JavaScript', 'REST APIs', 'Node.js'],
    interviewTopics: ['JavaScript', 'React', 'APIs', 'Databases', 'Authentication', 'DSA']
  },
  'MERN Stack Developer': {
    domain: 'Full Stack Development',
    skills: [['HTML & CSS', 4], ['JavaScript', 5], ['React', 5], ['Node.js', 5], ['Express.js', 4], ['MongoDB', 4], ['REST APIs', 4], ['Authentication', 4], ['Testing', 3], ['Deployment', 3], ['Git', 3]],
    topics: ['HTML & CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'Deployment'],
    projectTags: ['mern', 'frontend', 'backend'],
    videoTopics: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    interviewTopics: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Authentication']
  },
  'Java Backend Developer': {
    domain: 'Java Backend Engineering',
    skills: [['Java', 5], ['OOP', 5], ['Collections', 4], ['Exception Handling', 4], ['Spring Boot', 5], ['REST APIs', 4], ['JPA/Hibernate', 4], ['SQL', 4], ['Authentication', 3], ['Git', 3]],
    topics: ['Java', 'OOP', 'Collections', 'Exception Handling', 'Spring Boot', 'REST APIs', 'JPA/Hibernate', 'SQL', 'Authentication'],
    projectTags: ['java', 'backend'],
    videoTopics: ['Java', 'Spring Boot', 'SQL', 'JPA/Hibernate'],
    interviewTopics: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate', 'SQL', 'Multithreading']
  },
  'Java Developer': {
    domain: 'Java Backend Engineering',
    skills: [['Java', 5], ['OOP', 5], ['Collections', 4], ['Exception Handling', 4], ['Spring Boot', 5], ['REST APIs', 4], ['JPA/Hibernate', 4], ['SQL', 4], ['Authentication', 3], ['Git', 3]],
    topics: ['Java', 'OOP', 'Collections', 'Exception Handling', 'Spring Boot', 'REST APIs', 'JPA/Hibernate', 'SQL', 'Authentication'],
    projectTags: ['java', 'backend'],
    videoTopics: ['Java', 'Spring Boot', 'SQL'],
    interviewTopics: ['Java', 'Spring Boot', 'REST APIs', 'Hibernate', 'SQL']
  },
  'Software Developer': {
    domain: 'Software Engineering',
    skills: [['Programming', 4], ['DSA', 4], ['OOP', 4], ['SQL', 4], ['Git', 3], ['System Design', 3], ['REST APIs', 3]],
    topics: ['DSA', 'OOP', 'SQL', 'Programming', 'Git', 'System Design'],
    projectTags: ['backend', 'frontend'],
    videoTopics: ['DSA', 'OOP', 'SQL'],
    interviewTopics: ['Programming', 'DSA', 'OOP', 'SQL', 'System Design']
  },
  'Python Developer': {
    domain: 'Python & Backend Engineering',
    skills: [['Python', 5], ['OOP', 4], ['FastAPI / Django', 4], ['REST APIs', 4], ['SQL', 4], ['Git', 3], ['Data Structures', 3]],
    topics: ['Python', 'OOP', 'FastAPI / Django', 'REST APIs', 'SQL'],
    projectTags: ['backend', 'data'],
    videoTopics: ['Python', 'Django', 'FastAPI'],
    interviewTopics: ['Python', 'OOP', 'REST APIs', 'SQL', 'Asyncio']
  },
  'QA Automation Engineer': {
    domain: 'Quality Assurance Engineering',
    skills: [['Automation Testing', 5], ['Selenium / Playwright', 5], ['Java / Python', 4], ['API Testing', 4], ['CI/CD', 3], ['SQL', 3], ['Git', 3]],
    topics: ['Automation Testing', 'Selenium / Playwright', 'API Testing', 'SQL', 'CI/CD'],
    projectTags: ['qa', 'backend'],
    videoTopics: ['Automation Testing', 'Selenium', 'Playwright'],
    interviewTopics: ['Test Frameworks', 'API Testing', 'Automation', 'CI/CD']
  }
};

export const domains = [
  { id: 'fullstack', name: 'Full Stack Engineering', defaultRole: 'Full Stack Developer', roles: ['Full Stack Developer', 'MERN Stack Developer'] },
  { id: 'backend', name: 'Backend Engineering', defaultRole: 'Java Backend Developer', roles: ['Java Backend Developer', 'Backend Developer', 'Java Developer', 'Python Developer'] },
  { id: 'frontend', name: 'Frontend Engineering', defaultRole: 'Frontend Developer', roles: ['Frontend Developer'] },
  { id: 'cloud', name: 'Cloud & DevOps Engineering', defaultRole: 'Cloud Engineer', roles: ['Cloud Engineer', 'DevOps Engineer'] },
  { id: 'data', name: 'Data Analytics', defaultRole: 'Data Analyst', roles: ['Data Analyst'] },
  { id: 'software', name: 'Software Engineering', defaultRole: 'Software Developer', roles: ['Software Developer', 'QA Automation Engineer'] }
];

const fallback = {
  domain: 'Software Engineering',
  skills: [['Programming', 4], ['DSA', 4], ['OOP', 4], ['Git', 3], ['SQL', 3]],
  topics: ['Programming', 'DSA', 'OOP', 'SQL'],
  projectTags: ['backend'],
  videoTopics: ['JavaScript', 'DSA'],
  interviewTopics: ['Programming', 'DSA', 'OOP']
};

export function getRoleProfile(role) {
  return roleProfiles[role] || fallback;
}

export function requirementsForRole(role) {
  return getRoleProfile(role).skills.map(([skill, requiredLevel]) => ({
    skill,
    requiredLevel,
    companyWeight: requiredLevel >= 4 ? 1.3 : 1,
    roleWeight: 1
  }));
}

export function roadmapForRole(role) {
  const profile = getRoleProfile(role);
  return profile.topics.map((topic, index) => ({
    id: `${role.toLowerCase().replaceAll(' ', '-')}-${topic.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`,
    title: topic,
    description: `Build practical ${topic} capability for ${profile.domain}.`,
    prerequisites: index ? [`${role.toLowerCase().replaceAll(' ', '-')}-${profile.topics[index - 1].toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`] : [],
    topics: [topic]
  })).concat([{
    id: `${role.toLowerCase().replaceAll(' ', '-')}-interview`,
    title: 'Role-focused interview readiness',
    description: `Practice ${profile.interviewTopics.join(', ')} for ${role} interviews.`,
    prerequisites: profile.topics.length ? [`${role.toLowerCase().replaceAll(' ', '-')}-${profile.topics.at(-1).toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}`] : [],
    topics: profile.interviewTopics.slice(0, 2)
  }]);
}

export function roadmapStagesForRole(role) {
  const profile = getRoleProfile(role);
  const stageSets = {
    'Cloud Engineer': [
      ['cloud-foundations', 'Linux & Networking Foundations', ['Linux', 'Networking']],
      ['cloud-fundamentals', 'Cloud Fundamentals', ['AWS']],
      ['aws-core', 'AWS Core Services', ['AWS', 'Networking']],
      ['cloud-automation', 'Infrastructure & Automation', ['Terraform', 'Docker', 'CI/CD']],
      ['cloud-project', 'Real-world Cloud Project', ['AWS', 'Terraform', 'Docker'], true],
      ['cloud-interview', 'Cloud Engineer Interview Readiness', ['Cloud architecture', 'Networking', 'IAM', 'Containers']]
    ],
    'Full Stack Developer': [
      ['web-js', 'Web & JavaScript Foundations', ['HTML & CSS', 'JavaScript', 'Git']],
      ['react-frontend', 'React Frontend', ['React', 'JavaScript']],
      ['backend-apis', 'Backend & APIs', ['Node.js', 'REST APIs']],
      ['data-auth', 'Database & Authentication', ['MongoDB', 'SQL', 'Authentication']],
      ['fullstack-project', 'Production Full Stack Project', ['React', 'Node.js', 'MongoDB', 'Authentication'], true],
      ['fullstack-interview', 'Full Stack Interview Readiness', ['JavaScript', 'React', 'APIs', 'DSA']]
    ],
    'Data Analyst': [
      ['data-foundations', 'Data Foundations', ['Excel', 'Statistics']],
      ['sql-analysis', 'SQL Analysis', ['SQL']],
      ['python-analysis', 'Python & Data Cleaning', ['Python']],
      ['data-visualization', 'Visualization & Storytelling', ['Power BI', 'Data Visualization']],
      ['analytics-project', 'Business Analytics Project', ['SQL', 'Python', 'Power BI'], true],
      ['data-interview', 'Data Analyst Interview Readiness', ['SQL', 'Statistics', 'Dashboards']]
    ],
    'Java Backend Developer': [
      ['java-foundations', 'Java & OOP Foundations', ['Java', 'OOP']],
      ['java-collections', 'Collections & Exception Handling', ['Collections', 'Exception Handling']],
      ['spring-boot', 'Spring Boot & REST APIs', ['Spring Boot', 'REST APIs']],
      ['jpa-hibernate', 'JPA & Hibernate ORM', ['JPA/Hibernate', 'SQL']],
      ['java-project', 'Enterprise Backend Project', ['Spring Boot', 'JPA/Hibernate', 'SQL', 'Authentication'], true],
      ['java-interview', 'Java Backend Interview Readiness', ['Java', 'Spring Boot', 'REST APIs', 'testing', 'deployment']]
    ],
    'Java Developer': [
      ['java-foundations', 'Java & OOP Foundations', ['Java', 'OOP']],
      ['java-collections', 'Collections & Exception Handling', ['Collections', 'Exception Handling']],
      ['spring-boot', 'Spring Boot & REST APIs', ['Spring Boot', 'REST APIs']],
      ['jpa-hibernate', 'JPA & Hibernate ORM', ['JPA/Hibernate', 'SQL']],
      ['java-project', 'Enterprise Backend Project', ['Spring Boot', 'JPA/Hibernate', 'SQL', 'Authentication'], true],
      ['java-interview', 'Java Backend Interview Readiness', ['Java', 'Spring Boot', 'REST APIs', 'testing', 'deployment']]
    ],
    'Frontend Developer': [
      ['frontend-foundations', 'HTML, CSS & Modern Layouts', ['HTML & CSS', 'Accessibility']],
      ['js-core', 'Modern JavaScript & DOM', ['JavaScript', 'Git']],
      ['react-ecosystem', 'React Components & State', ['React', 'TypeScript']],
      ['frontend-perf', 'Performance & Testing', ['Frontend Performance', 'Testing']],
      ['frontend-project', 'High-Performance Web App', ['React', 'TypeScript', 'Frontend Performance'], true],
      ['frontend-interview', 'Frontend Interview Readiness', ['DOM', 'Accessibility', 'React', 'Performance']]
    ],
    'Backend Developer': [
      ['backend-foundations', 'Server Architecture & Node.js', ['Node.js', 'JavaScript']],
      ['rest-apis', 'RESTful API Architecture', ['REST APIs', 'Authentication']],
      ['databases-storage', 'Database Design & Querying', ['SQL', 'MongoDB']],
      ['system-design', 'System Design & Scaling', ['System Design', 'REST APIs']],
      ['backend-project', 'Scalable Microservices API', ['Node.js', 'REST APIs', 'MongoDB', 'SQL'], true],
      ['backend-interview', 'Backend Interview Readiness', ['APIs', 'Databases', 'Authentication', 'System Design']]
    ],
    'DevOps Engineer': [
      ['devops-foundations', 'Linux & Shell Automation', ['Linux', 'Networking']],
      ['containerization', 'Docker & Containerization', ['Docker']],
      ['orchestration', 'Kubernetes & Orchestration', ['Kubernetes']],
      ['iac-cicd', 'Terraform & CI/CD Pipelines', ['Terraform', 'CI/CD']],
      ['devops-project', 'Automated GitOps Cloud Pipeline', ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'], true],
      ['devops-interview', 'DevOps Interview Readiness', ['CI/CD', 'Containers', 'Infrastructure as Code']]
    ],
    'MERN Stack Developer': [
      ['mern-foundations', 'JavaScript & Web Foundations', ['HTML & CSS', 'JavaScript']],
      ['react-ui', 'React SPA Development', ['React', 'JavaScript']],
      ['node-express', 'Node.js & Express REST APIs', ['Node.js', 'Express.js', 'REST APIs']],
      ['mongo-auth', 'MongoDB & JWT Authentication', ['MongoDB', 'Authentication']],
      ['mern-project', 'Production MERN Application', ['React', 'Node.js', 'MongoDB', 'Authentication'], true],
      ['mern-interview', 'MERN Stack Interview Readiness', ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Authentication']]
    ],
    'Software Developer': [
      ['se-foundations', 'Programming & OOP Fundamentals', ['Programming', 'OOP']],
      ['dsa-core', 'Data Structures & Algorithms', ['DSA']],
      ['sql-data', 'Relational Databases & SQL', ['SQL']],
      ['system-arch', 'System Design & REST APIs', ['System Design', 'REST APIs']],
      ['se-project', 'Full-Cycle Software Project', ['DSA', 'SQL', 'REST APIs'], true],
      ['se-interview', 'Software Engineering Interview Readiness', ['Programming', 'DSA', 'OOP', 'SQL']]
    ],
    'Python Developer': [
      ['python-foundations', 'Python & OOP Foundations', ['Python', 'OOP']],
      ['python-web', 'FastAPI & REST APIs', ['FastAPI / Django', 'REST APIs']],
      ['python-data', 'Databases & ORM', ['SQL']],
      ['python-project', 'Production Python Microservice', ['Python', 'FastAPI / Django', 'SQL'], true],
      ['python-interview', 'Python Interview Readiness', ['Python', 'OOP', 'REST APIs', 'SQL']]
    ],
    'QA Automation Engineer': [
      ['qa-foundations', 'Software Testing Principles', ['Automation Testing']],
      ['ui-automation', 'Selenium & Playwright Automation', ['Selenium / Playwright']],
      ['api-testing', 'REST API Testing & CI Integration', ['API Testing', 'CI/CD']],
      ['qa-project', 'End-to-End Automation Framework', ['Selenium / Playwright', 'API Testing', 'CI/CD'], true],
      ['qa-interview', 'QA Automation Interview Readiness', ['Automation Testing', 'API Testing', 'CI/CD']]
    ]
  };

  const selected = stageSets[role] || profile.topics.map((topic, index) => [
    `stage-${index + 1}`,
    topic,
    [topic],
    false
  ]).concat([['interview-readiness', 'Role Interview Readiness', profile.interviewTopics, false]]);

  return selected.map(([id, title, topics, project], index) => ({
    id,
    title,
    topics,
    project: Boolean(project),
    number: index + 1,
    description: `Build practical ${topics.join(', ')} capability for ${profile.domain}.`
  }));
}