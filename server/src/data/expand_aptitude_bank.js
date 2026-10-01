import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { aptitudeQuestions as currentQuestions, aptitudeCategories as currentCats } from './aptitudeQuestionsData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const newAptitudeQuestions = [
  // --- Quantitative: Average (20 questions) ---
  ...Array.from({ length: 20 }, (_, i) => {
    const n = i + 1;
    const s1 = 20 + n * 2;
    const s2 = 24 + n * 2;
    const s3 = 28 + n * 2;
    const s4 = 32 + n * 2;
    const avg = (s1 + s2 + s3 + s4) / 4;
    return {
      id: `apt-qua-avg-${n}`,
      category: 'quantitative',
      topic: 'Average',
      difficulty: n <= 7 ? 'Beginner' : n <= 14 ? 'Intermediate' : 'Advanced',
      question: `The marks obtained by 4 students in an assessment are ${s1}, ${s2}, ${s3}, and ${s4}. What is the average score of the group?`,
      options: [
        `${avg - 2}`,
        `${avg}`,
        `${avg + 2}`,
        `${avg + 4}`
      ],
      answer: 1,
      explanation: `Sum of observations = ${s1} + ${s2} + ${s3} + ${s4} = ${s1 + s2 + s3 + s4}. Number of observations = 4. Average = ${s1 + s2 + s3 + s4} / 4 = ${avg}.`,
      conceptOrFormula: 'Average = (Sum of Observations) / (Total Number of Observations)',
      tags: ['Average', 'Arithmetic', 'Quantitative']
    };
  }),

  // --- Quantitative: Probability (20 questions) ---
  ...Array.from({ length: 20 }, (_, i) => {
    const n = i + 1;
    const red = 3 + (n % 4);
    const blue = 4 + (n % 3);
    const green = 5 + (n % 5);
    const total = red + blue + green;
    return {
      id: `apt-qua-prob-${n}`,
      category: 'quantitative',
      topic: 'Probability',
      difficulty: n <= 7 ? 'Beginner' : n <= 14 ? 'Intermediate' : 'Advanced',
      question: `A bag contains ${red} red balls, ${blue} blue balls, and ${green} green balls. If one ball is drawn at random, what is the probability that it is NOT red?`,
      options: [
        `${red}/${total}`,
        `${blue + green}/${total}`,
        `${blue}/${total}`,
        `${green}/${total}`
      ],
      answer: 1,
      explanation: `Total favorable outcomes (blue or green) = ${blue} + ${green} = ${blue + green}. Total possible outcomes = ${total}. Probability = ${blue + green}/${total}.`,
      conceptOrFormula: 'P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes',
      tags: ['Probability', 'Combinatorics', 'Quantitative']
    };
  }),

  // --- Logical: Syllogism (20 questions) ---
  ...Array.from({ length: 20 }, (_, i) => {
    const n = i + 1;
    const subjects = ['artists', 'engineers', 'scientists', 'doctors', 'analysts', 'writers', 'designers'];
    const sA = subjects[(n) % subjects.length];
    const sB = subjects[(n + 1) % subjects.length];
    const sC = subjects[(n + 2) % subjects.length];
    return {
      id: `apt-log-syl-${n}`,
      category: 'logical',
      topic: 'Syllogism',
      difficulty: n <= 7 ? 'Beginner' : n <= 14 ? 'Intermediate' : 'Advanced',
      question: `Statements:\n1. All ${sA} are ${sB}.\n2. Some ${sB} are ${sC}.\nConclusions:\nI. Some ${sA} are ${sC}.\nII. Some ${sB} are ${sA}.`,
      options: [
        'Only Conclusion I follows',
        'Only Conclusion II follows',
        'Either Conclusion I or II follows',
        'Neither Conclusion I nor II follows'
      ],
      answer: 1,
      explanation: `From Statement 1, 'All ${sA} are ${sB}', the immediate conversion is 'Some ${sB} are ${sA}' (Conclusion II valid). There is no guaranteed intersection between ${sA} and ${sC} (Conclusion I invalid).`,
      conceptOrFormula: 'Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).',
      tags: ['Syllogism', 'Deductive Logic', 'Logical Reasoning']
    };
  }),

  // --- Logical: Clocks and Calendars (20 questions) ---
  ...Array.from({ length: 20 }, (_, i) => {
    const n = i + 1;
    const hour = (n % 12) || 12;
    const minute = (n * 5) % 60;
    const hourAngle = hour * 30 + minute * 0.5;
    const minAngle = minute * 6;
    let diff = Math.abs(hourAngle - minAngle);
    if (diff > 180) diff = 360 - diff;
    return {
      id: `apt-log-clock-${n}`,
      category: 'logical',
      topic: 'Clocks and Calendars',
      difficulty: n <= 7 ? 'Beginner' : n <= 14 ? 'Intermediate' : 'Advanced',
      question: `What is the angle between the hour hand and minute hand of a clock at ${hour}:${minute < 10 ? '0' + minute : minute}?`,
      options: [
        `${Math.round(diff)}°`,
        `${Math.round(diff) + 15}°`,
        `${Math.round(diff) - 10 > 0 ? Math.round(diff) - 10 : Math.round(diff) + 20}°`,
        `${Math.round(diff) + 30}°`
      ],
      answer: 0,
      explanation: `Angle = |(30 × H) - (11/2 × M)| = |(30 × ${hour}) - (5.5 × ${minute})| = ${diff}°.`,
      conceptOrFormula: 'Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)',
      tags: ['Clocks and Calendars', 'Angles', 'Logical Reasoning']
    };
  }),

  // --- Verbal: Reading Comprehension (20 questions) ---
  ...Array.from({ length: 20 }, (_, i) => {
    const n = i + 1;
    const themes = [
      { topic: 'Cloud Computing Elasticity', passage: 'Cloud computing allows systems to dynamically provision resources in real-time, decoupling capital infrastructure expenditure from volatile customer request spikes.', q: 'According to the passage, what is the primary benefit of dynamic resource provisioning?', opt: ['Eliminates need for software testing', 'Decouples capital hardware spending from demand volatility', 'Guarantees zero network latency', 'Prevents all cybersecurity threats'], ans: 1, exp: 'The passage explicitly states that dynamic provisioning decouples capital expenditure from volatile customer request spikes.' },
      { topic: 'Distributed Microservices', passage: 'While microservices grant independent team deployability, they dramatically introduce operational complexity through network partitions, latency cascades, and distributed transaction boundaries.', q: 'Which trade-off is emphasized regarding microservices architecture?', opt: ['Higher operational complexity despite team deployability', 'Single points of failure in databases', 'Inability to scale horizontally', 'Zero developer autonomy'], ans: 0, exp: 'The text highlights that team deployability is accompanied by operational complexity across network boundaries.' },
      { topic: 'Data-Driven Decision Making', passage: 'A common cognitive trap in organizational data analysis is survivorship bias, where analysts evaluate successful outcomes while overlooking failures that fell outside the sample population.', q: 'What defines survivorship bias in the context of the text?', opt: ['Overestimating data collection costs', 'Focusing only on successful outcomes while omitting unobserved failures', 'Relying exclusively on median metrics', 'Using unencrypted data pipelines'], ans: 1, exp: 'Survivorship bias occurs when analysis focuses solely on surviving successes while ignoring failed instances outside the cohort.' }
    ];
    const th = themes[n % themes.length];
    return {
      id: `apt-ver-rc-${n}`,
      category: 'verbal',
      topic: 'Reading Comprehension',
      difficulty: n <= 7 ? 'Beginner' : n <= 14 ? 'Intermediate' : 'Advanced',
      question: `Passage: "${th.passage}"\n\nQuestion: ${th.q}`,
      options: th.opt,
      answer: th.ans,
      explanation: th.exp,
      conceptOrFormula: 'Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.',
      tags: ['Reading Comprehension', 'Verbal Ability', 'Inference']
    };
  })
];

const combined = [...currentQuestions, ...newAptitudeQuestions];

const updatedCategories = {
  ...currentCats,
  quantitative: {
    ...currentCats.quantitative,
    topics: [
      ...currentCats.quantitative.topics,
      'Average',
      'Probability'
    ]
  },
  logical: {
    ...currentCats.logical,
    topics: [
      ...currentCats.logical.topics,
      'Syllogism',
      'Clocks and Calendars'
    ]
  },
  verbal: {
    ...currentCats.verbal,
    topics: [
      ...currentCats.verbal.topics,
      'Reading Comprehension'
    ]
  }
};

const output = `// Placement Aptitude Question Bank for CareerForge (500+ Questions)
export const aptitudeQuestions = ${JSON.stringify(combined, null, 2)};

export const aptitudeCategories = ${JSON.stringify(updatedCategories, null, 2)};

// Helper: Filter questions
export function getFilteredAptitudeQuestions({ category, topic, difficulty, search } = {}) {
  return aptitudeQuestions.filter(q => {
    if (category && category !== 'All' && q.category.toLowerCase() !== category.toLowerCase()) return false;
    if (topic && topic !== 'All' && q.topic.toLowerCase() !== topic.toLowerCase()) return false;
    if (difficulty && difficulty !== 'All' && q.difficulty.toLowerCase() !== difficulty.toLowerCase()) return false;
    if (search) {
      const s = search.toLowerCase();
      const matchQ = q.question.toLowerCase().includes(s);
      const matchT = q.topic.toLowerCase().includes(s);
      const matchC = (q.conceptOrFormula || '').toLowerCase().includes(s);
      if (!matchQ && !matchT && !matchC) return false;
    }
    return true;
  });
}
`;

fs.writeFileSync(path.join(__dirname, 'aptitudeQuestionsData.js'), output, 'utf8');
console.log('Successfully expanded aptitudeQuestionsData.js to', combined.length, 'questions across', Object.values(updatedCategories).flatMap(c => c.topics).length, 'topics.');
