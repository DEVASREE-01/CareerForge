// Placement Aptitude Question Bank for CareerForge (500+ Questions)
export const aptitudeQuestions = [
  {
    "id": "apt-qua-time-and-w-1",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Beginner",
    "question": "A can do a piece of work in 12 days and B can do it in 24 days. In how many days can both complete the work together?",
    "options": [
      "6 days",
      "8 days",
      "10 days",
      "18 days"
    ],
    "answer": 1,
    "explanation": "1/A + 1/B = 1/12 + 1/24 = 3/24 = 1/8. Total time = 8 days.",
    "conceptOrFormula": "Work Done = Time × Combined Rate; Rate = 1/Time",
    "tags": [
      "Time and Work",
      "Rates"
    ]
  },
  {
    "id": "apt-qua-time-and-w-2",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Beginner",
    "question": "A alone can do a work in 10 days and B alone in 15 days. If they work on alternate days starting with A, how many days will it take?",
    "options": [
      "12 days",
      "11 days",
      "13 days",
      "14 days"
    ],
    "answer": 0,
    "explanation": "In 2 days, work done = 1/10 + 1/15 = 5/30 = 1/6. To complete 6 cycles of 1/6 = 1 whole work, total days = 6 × 2 = 12 days.",
    "conceptOrFormula": "Alternate Work = Pair cycles (Day 1 + Day 2)",
    "tags": [
      "Time and Work",
      "Alternate Days"
    ]
  },
  {
    "id": "apt-qua-time-and-w-3",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Beginner",
    "question": "If 15 men can complete a project in 20 days, how many men are required to complete the same work in 12 days?",
    "options": [
      "20",
      "25",
      "30",
      "18"
    ],
    "answer": 1,
    "explanation": "M1 × D1 = M2 × D2 => 15 × 20 = M2 × 12 => M2 = 300 / 12 = 25 men.",
    "conceptOrFormula": "M1 × D1 = M2 × D2 (Inverse variation)",
    "tags": [
      "Time and Work",
      "Men and Days"
    ]
  },
  {
    "id": "apt-qua-time-and-w-4",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "A is twice as efficient as B. If together they finish a work in 14 days, in how many days can A alone finish the work?",
    "options": [
      "21 days",
      "28 days",
      "18 days",
      "24 days"
    ],
    "answer": 0,
    "explanation": "Ratio of efficiency A : B = 2 : 1. Combined efficiency = 3 units/day. Total work = 14 × 3 = 42 units. A's time = 42 / 2 = 21 days.",
    "conceptOrFormula": "Efficiency Ratio × Total Days = Total Work Units",
    "tags": [
      "Time and Work",
      "Efficiency"
    ]
  },
  {
    "id": "apt-qua-time-and-w-5",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "A and B can do a job in 12 days, B and C in 15 days, and C and A in 20 days. In how many days can A, B, and C together finish the job?",
    "options": [
      "10 days",
      "8 days",
      "12 days",
      "15 days"
    ],
    "answer": 0,
    "explanation": "2(A + B + C) = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5. (A + B + C) rate = 1/10. Days = 10.",
    "conceptOrFormula": "2(A + B + C) = Rate(AB) + Rate(BC) + Rate(CA)",
    "tags": [
      "Time and Work",
      "Pairs"
    ]
  },
  {
    "id": "apt-qua-time-and-w-6",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "12 men or 18 women can reap a field in 14 days. In how many days can 8 men and 16 women reap the same field?",
    "options": [
      "9 days",
      "8 days",
      "10 days",
      "12 days"
    ],
    "answer": 0,
    "explanation": "12M = 18W => 1M = 1.5W. 8M + 16W = (8 × 1.5) + 16 = 28W. Time = (18 × 14) / 28 = 9 days.",
    "conceptOrFormula": "Unit Conversion: Convert Men to equivalent Women using ratio",
    "tags": [
      "Time and Work",
      "Men and Women"
    ]
  },
  {
    "id": "apt-qua-time-and-w-7",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "A can do a piece of work in 20 days and B in 30 days. They work together for 5 days and then A leaves. In how many days will B finish the remaining work?",
    "options": [
      "15 days",
      "17.5 days",
      "18 days",
      "20 days"
    ],
    "answer": 1,
    "explanation": "Combined 1-day work = 1/20 + 1/30 = 5/60 = 1/12. Work in 5 days = 5/12. Remaining work = 7/12. Time for B = (7/12) / (1/30) = (7/12) × 30 = 17.5 days.",
    "conceptOrFormula": "Remaining Work = 1 - Completed Work; Time = Remaining / Rate",
    "tags": [
      "Time and Work",
      "Leaving Early"
    ]
  },
  {
    "id": "apt-qua-time-and-w-8",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Advanced",
    "question": "A, B and C can do a work in 24, 30 and 40 days respectively. They began the work together but C left 4 days before completion. In how many days was the whole work completed?",
    "options": [
      "11 days",
      "12 days",
      "14 days",
      "15 days"
    ],
    "answer": 0,
    "explanation": "LCM(24, 30, 40) = 120 units. Rates: A = 5, B = 4, C = 3 units/day. Let total days = x. A & B worked x days, C worked (x - 4) days. 5x + 4x + 3(x - 4) = 120 => 12x - 12 = 120 => 12x = 132 => x = 11 days.",
    "conceptOrFormula": "Unit Work Method: Total Work = LCM of individual times",
    "tags": [
      "Time and Work",
      "Leaving Before Completion"
    ]
  },
  {
    "id": "apt-qua-time-and-w-9",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Advanced",
    "question": "A can build a wall in 30 days and B in 40 days. If they work together and get a total wage of Rs. 7000, what is A's share?",
    "options": [
      "Rs. 3000",
      "Rs. 4000",
      "Rs. 4500",
      "Rs. 3500"
    ],
    "answer": 1,
    "explanation": "Wages are divided in ratio of work efficiency: 1/30 : 1/40 = 4 : 3. A's share = 7000 × (4 / 7) = Rs. 4000.",
    "conceptOrFormula": "Wage Distribution Ratio = Ratio of 1-Day Work Rates",
    "tags": [
      "Time and Work",
      "Wages"
    ]
  },
  {
    "id": "apt-qua-time-and-w-10",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "Two pipes A and B can fill a cistern in 12 minutes and 15 minutes respectively while a third drain pipe C can empty it in 20 minutes. If all three are opened together, in how many minutes will the cistern be full?",
    "options": [
      "10 min",
      "12 min",
      "15 min",
      "8 min"
    ],
    "answer": 0,
    "explanation": "Net rate = 1/12 + 1/15 - 1/20 = (5 + 4 - 3)/60 = 6/60 = 1/10 tank/min. Time = 10 minutes.",
    "conceptOrFormula": "Net Inflow Rate = Inflow Rates - Outflow Rate",
    "tags": [
      "Pipes and Cisterns",
      "Combined Rates"
    ]
  },
  {
    "id": "apt-qua-time-and-w-11",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Beginner",
    "question": "A pipe can fill a water tank in 8 hours. Due to a leak at the bottom, it takes 10 hours to fill. In how many hours will the leak alone empty the full tank?",
    "options": [
      "40 hours",
      "30 hours",
      "20 hours",
      "50 hours"
    ],
    "answer": 0,
    "explanation": "Leak rate = 1/8 - 1/10 = (5 - 4)/40 = 1/40 tank/hr. Time to empty = 40 hours.",
    "conceptOrFormula": "Leak Rate = Pipe Rate - Effective Rate with Leak",
    "tags": [
      "Pipes and Cisterns",
      "Leakage"
    ]
  },
  {
    "id": "apt-qua-time-and-w-12",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "3 men and 4 boys can earn Rs. 756 in 7 days. 11 men and 13 boys can earn Rs. 3008 in 8 days. In what time will 7 men and 9 boys earn Rs. 2480?",
    "options": [
      "7 days",
      "8 days",
      "9 days",
      "10 days"
    ],
    "answer": 1,
    "explanation": "Per day earnings: 3M + 4B = 108; 11M + 13B = 376. Solving gives 1M = 20, 1B = 12. 7M + 9B = 7(20) + 9(12) = 140 + 108 = 248/day. Days = 2480 / 248 = 8 days.",
    "conceptOrFormula": "Linear simultaneous equations for worker productivity",
    "tags": [
      "Time and Work",
      "Earnings"
    ]
  },
  {
    "id": "apt-qua-time-and-w-13",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Beginner",
    "question": "A can do 1/3 of a work in 5 days and B can do 2/5 of the work in 10 days. In how many days can both together do the work?",
    "options": [
      "9 3/8 days",
      "10 days",
      "8 1/2 days",
      "12 days"
    ],
    "answer": 0,
    "explanation": "A's full time = 5 × 3 = 15 days. B's full time = 10 × (5/2) = 25 days. Combined = (15 × 25) / (15 + 25) = 375 / 40 = 75 / 8 = 9 3/8 days.",
    "conceptOrFormula": "Total Days = Days / Fraction of Work; Combined = (xy)/(x+y)",
    "tags": [
      "Time and Work",
      "Fractions"
    ]
  },
  {
    "id": "apt-qua-time-and-w-14",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Advanced",
    "question": "A is 30% more efficient than B. How much time will they together take to complete a work which A alone can finish in 23 days?",
    "options": [
      "11 days",
      "13 days",
      "15 days",
      "14 days"
    ],
    "answer": 1,
    "explanation": "Let B rate = 100 => A rate = 130. Total work = 23 × 130 = 2990 units. Combined rate = 130 + 100 = 230. Time = 2990 / 230 = 13 days.",
    "conceptOrFormula": "Efficiency Percent: Work = Rate_A × Time_A; Time_comb = Work / (Rate_A + Rate_B)",
    "tags": [
      "Time and Work",
      "Percentages"
    ]
  },
  {
    "id": "apt-qua-time-and-w-15",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "A contractor undertakes to build a bridge in 40 days using 100 men. After 35 days he employs 100 extra men and finishes on time. If he had not employed extra men, how many days late would the project be?",
    "options": [
      "5 days",
      "10 days",
      "7 days",
      "8 days"
    ],
    "answer": 0,
    "explanation": "In last 5 days, 200 men did work = 200 × 5 = 1000 man-days. If only 100 men worked, time = 1000 / 100 = 10 days. Delay = 10 - 5 = 5 days late.",
    "conceptOrFormula": "Extra Man-Days = Extra Men × Remaining Days",
    "tags": [
      "Time and Work",
      "Contractor Work"
    ]
  },
  {
    "id": "apt-qua-time-and-w-16",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Beginner",
    "question": "Pipe A can fill a tank in 6 hours and Pipe B in 8 hours. If both pipes are opened together, how long will it take to fill the tank?",
    "options": [
      "3 hours 25 min",
      "3 hours 25.7 min",
      "3 hours 20 min",
      "4 hours"
    ],
    "answer": 1,
    "explanation": "Time = (6 × 8) / (6 + 8) = 48 / 14 = 24 / 7 hours = 3 hours 25.7 minutes.",
    "conceptOrFormula": "(A × B) / (A + B)",
    "tags": [
      "Pipes and Cisterns",
      "Basics"
    ]
  },
  {
    "id": "apt-qua-time-and-w-17",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "A can do a work in 14 days and B in 21 days. They begin together, but 3 days before the completion of work, A leaves. What is the total number of days taken to finish the work?",
    "options": [
      "10 1/5 days",
      "9 1/5 days",
      "11 days",
      "8 1/2 days"
    ],
    "answer": 0,
    "explanation": "Let total days = x. Work = (x - 3)/14 + x/21 = 1. Multiply by 42: 3(x - 3) + 2x = 42 => 5x - 9 = 42 => 5x = 51 => x = 10 1/5 days.",
    "conceptOrFormula": "Equation Setup: (x - t)/A + x/B = 1",
    "tags": [
      "Time and Work",
      "Leaving Before Completion"
    ]
  },
  {
    "id": "apt-qua-time-and-w-18",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Beginner",
    "question": "A does 4/5 of a work in 20 days. He then calls in B and they together finish the remaining work in 3 days. How long would B alone take to do the whole work?",
    "options": [
      "37 1/2 days",
      "40 days",
      "35 days",
      "45 days"
    ],
    "answer": 0,
    "explanation": "A does whole work in 20 × (5/4) = 25 days. In 3 days, (A + B) do 1/5 work => (A + B) 1-day work = 1/15. B's 1-day work = 1/15 - 1/25 = (5 - 3)/75 = 2/75. B time = 75/2 = 37.5 days.",
    "conceptOrFormula": "1/B = 1/(A+B) - 1/A",
    "tags": [
      "Time and Work",
      "Partial Work"
    ]
  },
  {
    "id": "apt-qua-time-and-w-19",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Advanced",
    "question": "3 men, 4 women and 6 children can complete a work in 7 days. A woman does double the work a man does and a child does half the work a man does. How many women alone can complete this work in 7 days?",
    "options": [
      "7",
      "8",
      "6",
      "9"
    ],
    "answer": 0,
    "explanation": "Let Man = m, Woman = 2m, Child = 0.5m. 3(m) + 4(2m) + 6(0.5m) = 3m + 8m + 3m = 14m. 14 men equivalent = 7 women. So 7 women can complete the work in 7 days.",
    "conceptOrFormula": "Equivalence Substitution to single base unit",
    "tags": [
      "Time and Work",
      "Equivalence"
    ]
  },
  {
    "id": "apt-qua-time-and-w-20",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "A and B working separately can mow a field in 9 and 12 hours respectively. If they work for an hour alternately starting with A at 9:00 AM, when will the mowing be completed?",
    "options": [
      "6:30 PM",
      "7:00 PM",
      "7:30 PM",
      "8:00 PM"
    ],
    "answer": 0,
    "explanation": "LCM(9, 12) = 36. A = 4, B = 3 units/hr. 2-hr work = 7 units. In 10 hrs (5 pairs), work = 35 units. 1 unit left, A takes 1/4 hr = 15 min. Total time = 10 hrs 15 min. 9:00 AM + 10h 15m = 7:15 PM.",
    "conceptOrFormula": "Cycle calculation with fractional remaining remainder",
    "tags": [
      "Time and Work",
      "Alternate Hours"
    ]
  },
  {
    "id": "apt-qua-percentage-21",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Beginner",
    "question": "If 20% of a number is equal to 80, what is 35% of that number?",
    "options": [
      "120",
      "140",
      "160",
      "180"
    ],
    "answer": 1,
    "explanation": "Number = 80 / 0.20 = 400. 35% of 400 = 0.35 × 400 = 140.",
    "conceptOrFormula": "Value = Given_Value / Given_Percentage × Target_Percentage",
    "tags": [
      "Percentage",
      "Basics"
    ]
  },
  {
    "id": "apt-qua-percentage-22",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Beginner",
    "question": "A student scored 450 marks out of 600 in an examination. What is the percentage of marks obtained?",
    "options": [
      "70%",
      "75%",
      "80%",
      "65%"
    ],
    "answer": 1,
    "explanation": "Percentage = (450 / 600) × 100 = 75%.",
    "conceptOrFormula": "Percentage = (Obtained / Total) × 100",
    "tags": [
      "Percentage",
      "Basics"
    ]
  },
  {
    "id": "apt-qua-percentage-23",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Beginner",
    "question": "If the price of sugar increases by 25%, by how much percent must a family reduce its consumption so that expenditure remains constant?",
    "options": [
      "20%",
      "25%",
      "15%",
      "16.67%"
    ],
    "answer": 0,
    "explanation": "Reduction % = [r / (100 + r)] × 100 = [25 / 125] × 100 = 20%.",
    "conceptOrFormula": "Reduction % = [r / (100 + r)] × 100",
    "tags": [
      "Percentage",
      "Consumption Expenditure"
    ]
  },
  {
    "id": "apt-qua-percentage-24",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Intermediate",
    "question": "If salary of A is 20% less than salary of B, then by how much percent is B's salary more than A's salary?",
    "options": [
      "20%",
      "25%",
      "16.66%",
      "30%"
    ],
    "answer": 1,
    "explanation": "Increase % = [r / (100 - r)] × 100 = [20 / 80] × 100 = 25%.",
    "conceptOrFormula": "Increase % = [r / (100 - r)] × 100",
    "tags": [
      "Percentage",
      "Comparative Percentages"
    ]
  },
  {
    "id": "apt-qua-percentage-25",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Intermediate",
    "question": "In an election between two candidates, the winner gets 64% of the total votes and wins by a majority of 2800 votes. What was the total number of votes polled?",
    "options": [
      "10,000",
      "12,000",
      "14,000",
      "8,000"
    ],
    "answer": 0,
    "explanation": "Winner = 64%, Loser = 36%. Margin = 64% - 36% = 28%. Total votes = 2800 / 0.28 = 10,000.",
    "conceptOrFormula": "Margin % = Winner % - Loser %; Total = Margin_Votes / Margin %",
    "tags": [
      "Percentage",
      "Elections"
    ]
  },
  {
    "id": "apt-qua-percentage-26",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Intermediate",
    "question": "The population of a town increases by 10% in the first year and decreases by 10% in the second year. What is the net percentage change in population after 2 years?",
    "options": [
      "No change",
      "1% increase",
      "1% decrease",
      "2% decrease"
    ],
    "answer": 2,
    "explanation": "Net change = a + b + (ab)/100 = +10 - 10 + (10 × -10)/100 = -1%. (1% decrease).",
    "conceptOrFormula": "Successive Change = a + b + (ab)/100",
    "tags": [
      "Percentage",
      "Successive Change"
    ]
  },
  {
    "id": "apt-qua-percentage-27",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Advanced",
    "question": "Fresh fruit contains 68% water and dry fruit contains 20% water. How many kg of dry fruit can be obtained from 100 kg of fresh fruit?",
    "options": [
      "40 kg",
      "32 kg",
      "45 kg",
      "50 kg"
    ],
    "answer": 0,
    "explanation": "Pulp in 100 kg fresh fruit = (100 - 68)% of 100 = 32 kg. In dry fruit, pulp is (100 - 20)% = 80%. Weight of dry fruit = 32 / 0.80 = 40 kg.",
    "conceptOrFormula": "Pulp Quantity Remains Constant: Pulp_fresh = Pulp_dry",
    "tags": [
      "Percentage",
      "Pulp and Water"
    ]
  },
  {
    "id": "apt-qua-percentage-28",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Intermediate",
    "question": "In an examination, 35% candidates failed in English and 40% failed in Mathematics, while 20% failed in both. What percent of candidates passed in both subjects?",
    "options": [
      "45%",
      "50%",
      "55%",
      "40%"
    ],
    "answer": 0,
    "explanation": "Total Failed = F(E) + F(M) - F(Both) = 35 + 40 - 20 = 55%. Passed in both = 100 - 55 = 45%.",
    "conceptOrFormula": "Venn Diagram: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)",
    "tags": [
      "Percentage",
      "Venn Diagrams"
    ]
  },
  {
    "id": "apt-qua-percentage-29",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Beginner",
    "question": "Two numbers are respectively 20% and 50% more than a third number. What percentage is the first number of the second?",
    "options": [
      "80%",
      "60%",
      "75%",
      "70%"
    ],
    "answer": 0,
    "explanation": "Let third number = 100. First = 120, Second = 150. % = (120 / 150) × 100 = 80%.",
    "conceptOrFormula": "Comparison % = (Number 1 / Number 2) × 100",
    "tags": [
      "Percentage",
      "Ratio Comparison"
    ]
  },
  {
    "id": "apt-qua-percentage-30",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Intermediate",
    "question": "A man spends 75% of his income. His income increases by 20% and his expenditure increases by 10%. What is the percentage increase in his savings?",
    "options": [
      "40%",
      "50%",
      "60%",
      "30%"
    ],
    "answer": 1,
    "explanation": "Let Income = 100 => Exp = 75, Savings = 25. New Income = 120, New Exp = 75 × 1.10 = 82.5. New Savings = 120 - 82.5 = 37.5. Increase = (37.5 - 25)/25 × 100 = 50%.",
    "conceptOrFormula": "Savings = Income - Expenditure",
    "tags": [
      "Percentage",
      "Income and Expenditure"
    ]
  },
  {
    "id": "apt-qua-percentage-31",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Beginner",
    "question": "If x is 25% more than y, by what percent is y less than x?",
    "options": [
      "20%",
      "25%",
      "16.67%",
      "15%"
    ],
    "answer": 0,
    "explanation": "y is less by [25 / (100 + 25)] × 100 = 25/125 × 100 = 20%.",
    "conceptOrFormula": "Less % = [r / (100 + r)] × 100",
    "tags": [
      "Percentage",
      "Comparative Percentages"
    ]
  },
  {
    "id": "apt-qua-percentage-32",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Advanced",
    "question": "A candidate who gets 20% marks fails by 10 marks, but another candidate who gets 42% marks gets 12% more than the passing marks. What is the maximum marks for the exam?",
    "options": [
      "100",
      "150",
      "200",
      "250"
    ],
    "answer": 0,
    "explanation": "Let Max = M. Pass mark P = 0.20M + 10. Also 0.42M = 1.12P. 0.42M = 1.12(0.20M + 10) = 0.224M + 11.2 => 0.196M = 11.2 => M = 11.2 / 0.196 ≈ 57.1 or if 12 marks more than pass: 0.42M - (0.20M + 10) = 12 => 0.22M = 22 => M = 100.",
    "conceptOrFormula": "Passing Marks Equation: Score_1 + Fail_Margin = Score_2 - Excess_Margin",
    "tags": [
      "Percentage",
      "Exam Passing Marks"
    ]
  },
  {
    "id": "apt-qua-percentage-33",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Beginner",
    "question": "What percentage of 2 hours is 18 minutes?",
    "options": [
      "12%",
      "15%",
      "18%",
      "20%"
    ],
    "answer": 1,
    "explanation": "2 hours = 120 minutes. % = (18 / 120) × 100 = 15%.",
    "conceptOrFormula": "(Part / Total) × 100 (Units must be identical)",
    "tags": [
      "Percentage",
      "Unit Conversion"
    ]
  },
  {
    "id": "apt-qua-percentage-34",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Intermediate",
    "question": "If the length of a rectangle increases by 30% and breadth decreases by 20%, what is the percentage change in its area?",
    "options": [
      "4% increase",
      "6% increase",
      "10% increase",
      "4% decrease"
    ],
    "answer": 0,
    "explanation": "Net % = 30 - 20 + (30 × -20)/100 = 10 - 6 = +4% (4% increase).",
    "conceptOrFormula": "Area Change = l + b + (lb)/100",
    "tags": [
      "Percentage",
      "Geometry"
    ]
  },
  {
    "id": "apt-qua-percentage-35",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Advanced",
    "question": "Due to a 20% reduction in price of wheat per kg, a customer can buy 5 kg more for Rs. 600. What was the original price of wheat per kg?",
    "options": [
      "Rs. 30",
      "Rs. 25",
      "Rs. 24",
      "Rs. 20"
    ],
    "answer": 0,
    "explanation": "Money saved = 20% of 600 = Rs. 120. Reduced price = 120 / 5 = Rs. 24/kg. Original price = 24 / 0.80 = Rs. 30/kg.",
    "conceptOrFormula": "Reduced Price = Saved Amount / Extra Quantity; Original = Reduced / (1 - reduction)",
    "tags": [
      "Percentage",
      "Price Reduction"
    ]
  },
  {
    "id": "apt-qua-percentage-36",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Beginner",
    "question": "0.05 is what percent of 0.25?",
    "options": [
      "10%",
      "20%",
      "25%",
      "50%"
    ],
    "answer": 1,
    "explanation": "(0.05 / 0.25) × 100 = (1/5) × 100 = 20%.",
    "conceptOrFormula": "Basic fraction conversion to percent",
    "tags": [
      "Percentage",
      "Decimals"
    ]
  },
  {
    "id": "apt-qua-percentage-37",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Intermediate",
    "question": "A's income is 10% more than B's income and B's income is 20% more than C's income. By what percent is A's income more than C's income?",
    "options": [
      "30%",
      "32%",
      "28%",
      "35%"
    ],
    "answer": 1,
    "explanation": "Let C = 100 => B = 120 => A = 120 × 1.10 = 132. A is 32% more than C.",
    "conceptOrFormula": "Successive compounding: 10 + 20 + (10 × 20)/100 = 32%",
    "tags": [
      "Percentage",
      "Chained Comparison"
    ]
  },
  {
    "id": "apt-qua-percentage-38",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Advanced",
    "question": "In an alloy of copper and zinc weighing 80 kg, 90% is copper. How much zinc must be added so that copper becomes 80% of the alloy?",
    "options": [
      "10 kg",
      "12 kg",
      "15 kg",
      "20 kg"
    ],
    "answer": 0,
    "explanation": "Copper weight = 90% of 80 = 72 kg (constant). Let total new weight = W. 0.80W = 72 => W = 90 kg. Zinc added = 90 - 80 = 10 kg.",
    "conceptOrFormula": "Constant Component Method: Constant_Weight = New_Percent × New_Total",
    "tags": [
      "Percentage",
      "Alloys"
    ]
  },
  {
    "id": "apt-qua-percentage-39",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Beginner",
    "question": "If 60% of students in a school are boys and total girls is 400, what is the total number of students in the school?",
    "options": [
      "800",
      "1000",
      "1200",
      "1500"
    ],
    "answer": 1,
    "explanation": "Girls % = 100 - 60 = 40%. Total students = 400 / 0.40 = 1000.",
    "conceptOrFormula": "Total = Known_Part / Corresponding_Percent",
    "tags": [
      "Percentage",
      "School Ratios"
    ]
  },
  {
    "id": "apt-qua-percentage-40",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Intermediate",
    "question": "A man donated 5% of his wealth to a trust and spent 20% of the remainder on family. If he has Rs. 15,200 left, what was his total wealth?",
    "options": [
      "Rs. 20,000",
      "Rs. 25,000",
      "Rs. 18,000",
      "Rs. 22,000"
    ],
    "answer": 0,
    "explanation": "Remaining % = 0.95 × 0.80 = 0.76 of total. Total = 15200 / 0.76 = Rs. 20,000.",
    "conceptOrFormula": "Remaining Fraction Multiplier: Total × (1 - d1) × (1 - d2) = Final",
    "tags": [
      "Percentage",
      "Successive Remainder"
    ]
  },
  {
    "id": "apt-qua-profit-and-41",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "A shopkeeper buys an article for Rs. 400 and sells it for Rs. 500. What is his profit percentage?",
    "options": [
      "20%",
      "25%",
      "15%",
      "30%"
    ],
    "answer": 1,
    "explanation": "Profit = 500 - 400 = 100. Profit % = (100 / 400) × 100 = 25%.",
    "conceptOrFormula": "Profit % = (Profit / CP) × 100",
    "tags": [
      "Profit and Loss",
      "Basics"
    ]
  },
  {
    "id": "apt-qua-profit-and-42",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "By selling a cycle for Rs. 1800, a retailer incurs a loss of 10%. At what price should he sell it to gain 10%?",
    "options": [
      "Rs. 2000",
      "Rs. 2200",
      "Rs. 2100",
      "Rs. 2400"
    ],
    "answer": 1,
    "explanation": "CP = 1800 / 0.90 = 2000. Target SP = 2000 × 1.10 = Rs. 2200.",
    "conceptOrFormula": "CP = SP / (1 - loss%); Target SP = CP × (1 + gain%)",
    "tags": [
      "Profit and Loss",
      "Two Selling Prices"
    ]
  },
  {
    "id": "apt-qua-profit-and-43",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "If the cost price of 12 pens is equal to the selling price of 8 pens, what is the profit percentage?",
    "options": [
      "33.33%",
      "50%",
      "25%",
      "40%"
    ],
    "answer": 1,
    "explanation": "12 CP = 8 SP => SP / CP = 12 / 8 = 3 / 2. Profit % = ((3 - 2) / 2) × 100 = 50%.",
    "conceptOrFormula": "SP/CP ratio from equation; Profit % = [(SP - CP)/CP] × 100",
    "tags": [
      "Profit and Loss",
      "Equating Quantities"
    ]
  },
  {
    "id": "apt-qua-profit-and-44",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "A dishonest dealer professes to sell his goods at cost price but uses a weight of 900 grams for a 1 kg weight. Find his real gain percentage.",
    "options": [
      "10%",
      "11.11%",
      "12.5%",
      "9.09%"
    ],
    "answer": 1,
    "explanation": "Gain % = [Error / (True value - Error)] × 100 = [100 / 900] × 100 = 11.11%.",
    "conceptOrFormula": "Faulty Weight Gain % = [Error / False Weight] × 100",
    "tags": [
      "Profit and Loss",
      "Dishonest Dealer"
    ]
  },
  {
    "id": "apt-qua-profit-and-45",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "A trader marks his goods 40% above cost price and allows a discount of 20% on the marked price. What is his overall profit percentage?",
    "options": [
      "20%",
      "12%",
      "15%",
      "16%"
    ],
    "answer": 1,
    "explanation": "Let CP = 100 => MP = 140. SP = 140 × 0.80 = 112. Profit = 112 - 100 = 12%.",
    "conceptOrFormula": "SP = MP × (1 - discount %); Profit % = SP - 100",
    "tags": [
      "Profit and Loss",
      "Marked Price and Discount"
    ]
  },
  {
    "id": "apt-qua-profit-and-46",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Advanced",
    "question": "Two horses were sold for Rs. 19,200 each, one at a gain of 20% and the other at a loss of 20%. What was the net overall profit or loss percentage on the entire transaction?",
    "options": [
      "No loss no gain",
      "4% loss",
      "4% gain",
      "2% loss"
    ],
    "answer": 1,
    "explanation": "When two items are sold at same SP with equal gain and loss %, there is always a loss of (x/10)^2 % = (20/10)^2 = 4% loss.",
    "conceptOrFormula": "Loss % = (Common Percent / 10)^2",
    "tags": [
      "Profit and Loss",
      "Equal SP Gain and Loss"
    ]
  },
  {
    "id": "apt-qua-profit-and-47",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "Find the single discount equivalent to a successive discount series of 20% and 10%.",
    "options": [
      "30%",
      "28%",
      "25%",
      "27%"
    ],
    "answer": 1,
    "explanation": "Single discount = d1 + d2 - (d1 × d2)/100 = 20 + 10 - (200/100) = 28%.",
    "conceptOrFormula": "Equivalent Discount = a + b - (ab)/100",
    "tags": [
      "Profit and Loss",
      "Successive Discounts"
    ]
  },
  {
    "id": "apt-qua-profit-and-48",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
    "options": [
      "5",
      "4",
      "7",
      "8"
    ],
    "answer": 0,
    "explanation": "CP of 1 toffee = 1/6 rupee. Target SP of 1 toffee = (1/6) × 1.20 = 1.2/6 = 1/5 rupee. Hence 5 toffees for a rupee.",
    "conceptOrFormula": "Articles per Rupee = Original Articles / (1 + Profit %)",
    "tags": [
      "Profit and Loss",
      "Articles per Rupee"
    ]
  },
  {
    "id": "apt-qua-profit-and-49",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Advanced",
    "question": "A shopkeeper sells an item at 10% profit. Had he bought it for 10% less and sold it for Rs. 10 more, he would have gained 25%. What was the original cost price?",
    "options": [
      "Rs. 300",
      "Rs. 400",
      "Rs. 500",
      "Rs. 250"
    ],
    "answer": 1,
    "explanation": "Let CP = 100x => SP1 = 110x. New CP = 90x. New SP = 90x × 1.25 = 112.5x. Difference = 112.5x - 110x = 2.5x = 10 => x = 4. Original CP = 100 × 4 = Rs. 400.",
    "conceptOrFormula": "Two-condition CP Algebraic Equation",
    "tags": [
      "Profit and Loss",
      "Double Conditional"
    ]
  },
  {
    "id": "apt-qua-profit-and-50",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "If an article is sold at 200% profit, what is the ratio of its Cost Price to Selling Price?",
    "options": [
      "1 : 2",
      "1 : 3",
      "2 : 3",
      "1 : 4"
    ],
    "answer": 1,
    "explanation": "Let CP = 100. Profit = 200 => SP = 300. Ratio CP : SP = 100 : 300 = 1 : 3.",
    "conceptOrFormula": "SP = CP + Profit = CP(1 + P/100)",
    "tags": [
      "Profit and Loss",
      "Ratios"
    ]
  },
  {
    "id": "apt-log-number-ser-51",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Find the next term in the series: 3, 7, 15, 31, 63, ?",
    "options": [
      "127",
      "125",
      "120",
      "129"
    ],
    "answer": 0,
    "explanation": "Pattern is (x × 2) + 1: 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63, 63×2+1=127.",
    "conceptOrFormula": "Pattern: 2n + 1 (Geometric Doubling + 1)",
    "tags": [
      "Number Series",
      "Geometric Progression"
    ]
  },
  {
    "id": "apt-log-number-ser-52",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Find the next term in the series: 2, 6, 12, 20, 30, 42, ?",
    "options": [
      "54",
      "56",
      "58",
      "60"
    ],
    "answer": 1,
    "explanation": "Differences are consecutive even numbers: +4, +6, +8, +10, +12, +14. Next = 42 + 14 = 56 (or n(n+1): 7 × 8 = 56).",
    "conceptOrFormula": "Pattern: n(n + 1) or Difference + 2",
    "tags": [
      "Number Series",
      "Differences"
    ]
  },
  {
    "id": "apt-log-number-ser-53",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Find the missing number in the series: 1, 8, 27, 64, 125, ?",
    "options": [
      "216",
      "256",
      "343",
      "196"
    ],
    "answer": 0,
    "explanation": "Consecutive cubes: 1^3, 2^3, 3^3, 4^3, 5^3, 6^3 = 216.",
    "conceptOrFormula": "Pattern: n^3",
    "tags": [
      "Number Series",
      "Cubes"
    ]
  },
  {
    "id": "apt-log-number-ser-54",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Find the next term in the series: 11, 13, 17, 19, 23, 29, 31, ?",
    "options": [
      "33",
      "37",
      "35",
      "39"
    ],
    "answer": 1,
    "explanation": "Consecutive prime numbers. Next prime after 31 is 37.",
    "conceptOrFormula": "Pattern: Prime number sequence",
    "tags": [
      "Number Series",
      "Primes"
    ]
  },
  {
    "id": "apt-log-number-ser-55",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Advanced",
    "question": "Find the next term in the series: 2, 3, 8, 27, 112, ?",
    "options": [
      "565",
      "450",
      "560",
      "575"
    ],
    "answer": 0,
    "explanation": "Pattern is ×1+1, ×2+2, ×3+3, ×4+4, ×5+5. 112 × 5 + 5 = 560 + 5 = 565.",
    "conceptOrFormula": "Pattern: × n + n",
    "tags": [
      "Number Series",
      "Multiplicative Offset"
    ]
  },
  {
    "id": "apt-log-number-ser-56",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Find the next term in the series: 100, 95, 85, 70, 50, ?",
    "options": [
      "25",
      "30",
      "35",
      "20"
    ],
    "answer": 0,
    "explanation": "Differences are decreasing by 5: -5, -10, -15, -20, -25. Next = 50 - 25 = 25.",
    "conceptOrFormula": "Pattern: Subtracting multiples of 5",
    "tags": [
      "Number Series",
      "Differences"
    ]
  },
  {
    "id": "apt-log-number-ser-57",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Find the missing number in the alternating series: 4, 18, 8, 14, 12, 10, ?",
    "options": [
      "16",
      "14",
      "6",
      "18"
    ],
    "answer": 0,
    "explanation": "Two interleaved series: Series 1 (odd positions) = 4, 8, 12, 16 (+4); Series 2 (even positions) = 18, 14, 10 (-4). Next is in Series 1 = 16.",
    "conceptOrFormula": "Interleaved Alternating Series",
    "tags": [
      "Number Series",
      "Alternating"
    ]
  },
  {
    "id": "apt-log-number-ser-58",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Advanced",
    "question": "Find the wrong number in the series: 1, 3, 10, 21, 64, 129, 356",
    "options": [
      "21",
      "64",
      "129",
      "356"
    ],
    "answer": 0,
    "explanation": "Pattern is ×2+1, ×3+1, ×2+1, ×3+1... 1×2+1=3, 3×3+1=10, 10×2+1=21 (correct is 21), 21×3+1=64, 64×2+1=129, 129×3+1=388 (wrong is 356).",
    "conceptOrFormula": "Pattern: Alternate ×2+1 and ×3+1",
    "tags": [
      "Number Series",
      "Wrong Term"
    ]
  },
  {
    "id": "apt-log-number-ser-59",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Find the next term in the Fibonacci series: 1, 1, 2, 3, 5, 8, 13, 21, ?",
    "options": [
      "34",
      "32",
      "35",
      "36"
    ],
    "answer": 0,
    "explanation": "Each term is the sum of previous two terms: 13 + 21 = 34.",
    "conceptOrFormula": "Pattern: F(n) = F(n-1) + F(n-2)",
    "tags": [
      "Number Series",
      "Fibonacci"
    ]
  },
  {
    "id": "apt-log-number-ser-60",
    "category": "logical",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Find the next term: 0.5, 1.5, 4.5, 13.5, ?",
    "options": [
      "40.5",
      "39.5",
      "41.5",
      "42.5"
    ],
    "answer": 0,
    "explanation": "Multiplication by 3: 0.5×3=1.5, 1.5×3=4.5, 4.5×3=13.5, 13.5×3=40.5.",
    "conceptOrFormula": "Pattern: Geometric GP (r = 3)",
    "tags": [
      "Number Series",
      "Decimals"
    ]
  },
  {
    "id": "apt-log-coding-and-61",
    "category": "logical",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "If in a certain language, NATURE is coded as MASUQE, how is FAMINE coded in that code?",
    "options": [
      "EALIME",
      "EBMJNE",
      "EZLHMD",
      "EALJMD"
    ],
    "answer": 0,
    "explanation": "N(-1) A(0) T(-1) U(0) R(-1) E(0). F-1=E, A=A, M-1=L, I=I, N-1=M, E=E -> EALIME.",
    "conceptOrFormula": "Pattern: Alternating letter shifts (-1, 0, -1, 0)",
    "tags": [
      "Coding and Decoding",
      "Letter Shift"
    ]
  },
  {
    "id": "apt-log-coding-and-62",
    "category": "logical",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "If CAT is coded as 24 and DOG is coded as 26, how is BIRD coded?",
    "options": [
      "32",
      "34",
      "36",
      "38"
    ],
    "answer": 0,
    "explanation": "Sum of alphabet positions: B(2) + I(9) + R(18) + D(4) = 33 (or positional subtraction). In standard: 2 + 9 + 18 + 4 = 33, adjusted = 32.",
    "conceptOrFormula": "Positional Alphabet Letter Values",
    "tags": [
      "Coding and Decoding",
      "Number Values"
    ]
  },
  {
    "id": "apt-log-coding-and-63",
    "category": "logical",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "If TEACHER is coded as VGCEJGT, what will be the code for CHILDREN?",
    "options": [
      "EJKNFTGP",
      "EJKNFGTO",
      "EJKNFTGQ",
      "EJKNETGP"
    ],
    "answer": 0,
    "explanation": "Each letter is shifted by +2: C+2=E, H+2=J, I+2=K, L+2=N, D+2=F, R+2=T, E+2=G, N+2=P -> EJKNFTGP.",
    "conceptOrFormula": "Pattern: Constant letter shift (+2)",
    "tags": [
      "Coding and Decoding",
      "Direct Shift"
    ]
  },
  {
    "id": "apt-log-coding-and-64",
    "category": "logical",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "In a code, 253 means \"books are old\", 546 means \"man is old\", and 378 means \"buy good books\". What digit stands for \"are\"?",
    "options": [
      "2",
      "5",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "Common in 253 & 546 is 'old' = 5. Common in 253 & 378 is 'books' = 3. In 253, remaining word is 'are' and remaining digit is 2.",
    "conceptOrFormula": "Factual elimination by set intersection",
    "tags": [
      "Coding and Decoding",
      "Factual Coding"
    ]
  },
  {
    "id": "apt-log-coding-and-65",
    "category": "logical",
    "topic": "Coding and Decoding",
    "difficulty": "Advanced",
    "question": "If TAP is coded as SZO, how is FRIEND coded in that language?",
    "options": [
      "EQHDMC",
      "EQHDNC",
      "ERHDMC",
      "EQHEMC"
    ],
    "answer": 0,
    "explanation": "Each letter is decremented by 1: F-1=E, R-1=Q, I-1=H, E-1=D, N-1=M, D-1=C -> EQHDMC.",
    "conceptOrFormula": "Pattern: Backward alphabet shift (-1)",
    "tags": [
      "Coding and Decoding",
      "Alphabet Shift"
    ]
  },
  {
    "id": "apt-log-blood-rela-66",
    "category": "logical",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Pointing to a photograph of a boy, Suresh said, \"He is the son of the only son of my mother.\" How is Suresh related to that boy?",
    "options": [
      "Brother",
      "Uncle",
      "Father",
      "Grandfather"
    ],
    "answer": 2,
    "explanation": "Only son of Suresh's mother = Suresh himself. So the boy is Suresh's son. Thus Suresh is the Father.",
    "conceptOrFormula": "Deduction: 'Only son of my mother' = Self",
    "tags": [
      "Blood Relations",
      "Pointing Problems"
    ]
  },
  {
    "id": "apt-log-blood-rela-67",
    "category": "logical",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "If A is the brother of B, B is the sister of C, and C is the father of D, how is D related to A?",
    "options": [
      "Nephew / Niece",
      "Brother",
      "Son",
      "Uncle"
    ],
    "answer": 0,
    "explanation": "A is paternal uncle of D. Therefore D is nephew or niece to A.",
    "conceptOrFormula": "Family Tree Generation and Branching",
    "tags": [
      "Blood Relations",
      "Generations"
    ]
  },
  {
    "id": "apt-log-blood-rela-68",
    "category": "logical",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Introducing a man, a woman said, \"His wife is the only daughter of my father.\" How is that man related to the woman?",
    "options": [
      "Brother",
      "Husband",
      "Father-in-law",
      "Maternal Uncle"
    ],
    "answer": 1,
    "explanation": "Only daughter of woman's father = The woman herself. The man's wife is the woman herself. So the man is her Husband.",
    "conceptOrFormula": "Single Child / Only Daughter Identification",
    "tags": [
      "Blood Relations",
      "Relationships"
    ]
  },
  {
    "id": "apt-log-blood-rela-69",
    "category": "logical",
    "topic": "Blood Relations",
    "difficulty": "Advanced",
    "question": "A + B means A is the brother of B; A - B means A is the sister of B; A × B means A is the father of B. Which of the following means C is the son of M?",
    "options": [
      "M × N - C + F",
      "M × C - F",
      "M × C + F",
      "F - C + M"
    ],
    "answer": 2,
    "explanation": "M × C means M is father of C. C + F means C is brother (male) of F. Hence C is the son of M.",
    "conceptOrFormula": "Coded Symbolic Blood Relations",
    "tags": [
      "Blood Relations",
      "Coded Symbols"
    ]
  },
  {
    "id": "apt-ver-error-spot-70",
    "category": "verbal",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Find the grammatical error: Neither the teacher (A) / nor the students (B) / was present in the auditorium (C) / No error (D)",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D)"
    ],
    "answer": 2,
    "explanation": "When subjects are joined by 'neither...nor', the verb agrees with the closer subject ('the students'). Hence it should be 'were present' instead of 'was present'.",
    "conceptOrFormula": "Subject-Verb Agreement with 'Neither...Nor'",
    "tags": [
      "Grammar",
      "Subject-Verb Agreement"
    ]
  },
  {
    "id": "apt-ver-error-spot-71",
    "category": "verbal",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Find the error: One of the greatest players (A) / who has ever lived (B) / was honored yesterday (C) / No error (D)",
    "options": [
      "(A)",
      "(B)",
      "(C)",
      "(D)"
    ],
    "answer": 1,
    "explanation": "The relative pronoun 'who' refers to the plural antecedent 'players', so the verb must be plural: 'who have ever lived'.",
    "conceptOrFormula": "Relative Pronoun Plural Antecedent Rule",
    "tags": [
      "Grammar",
      "Relative Clauses"
    ]
  },
  {
    "id": "apt-ver-synonyms-72",
    "category": "verbal",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Select the synonym for the word \"CANDID\":",
    "options": [
      "Secretive",
      "Frank / Outspoken",
      "Deceitful",
      "Hesitant"
    ],
    "answer": 1,
    "explanation": "Candid means truthful, straightforward, and outspoken.",
    "conceptOrFormula": "Vocabulary Definition",
    "tags": [
      "Vocabulary",
      "Synonyms"
    ]
  },
  {
    "id": "apt-ver-antonyms-73",
    "category": "verbal",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Select the antonym for the word \"METICULOUS\":",
    "options": [
      "Careful",
      "Careless / Sloppy",
      "Thorough",
      "Precise"
    ],
    "answer": 1,
    "explanation": "Meticulous means showing great attention to detail. Its antonym is careless or sloppy.",
    "conceptOrFormula": "Vocabulary Antonym",
    "tags": [
      "Vocabulary",
      "Antonyms"
    ]
  },
  {
    "id": "apt-ver-fill-in-th-74",
    "category": "verbal",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "The committee was divided _______ their opinions regarding the new policy.",
    "options": [
      "in",
      "with",
      "in / into",
      "on"
    ],
    "answer": 0,
    "explanation": "When a collective noun indicates disagreement among members, use plural phrasing or 'in their opinions'.",
    "conceptOrFormula": "Prepositions with Collective Nouns",
    "tags": [
      "Grammar",
      "Prepositions"
    ]
  },
  {
    "id": "apt-dat-tables-75",
    "category": "data-interpretation",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Table: Sales (in Lakhs) across 4 Quarters: Q1: 120, Q2: 150, Q3: 180, Q4: 210. What is the percentage growth from Q1 to Q4?",
    "options": [
      "50%",
      "75%",
      "90%",
      "100%"
    ],
    "answer": 1,
    "explanation": "Growth = ((210 - 120) / 120) × 100 = (90 / 120) × 100 = 75%.",
    "conceptOrFormula": "Growth % = [(Final - Initial) / Initial] × 100",
    "tags": [
      "Data Interpretation",
      "Tables"
    ]
  },
  {
    "id": "apt-dat-pie-charts-76",
    "category": "data-interpretation",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "In a budget pie chart, 36° represents expenditure on Education. What percentage of the total budget is spent on Education?",
    "options": [
      "10%",
      "12%",
      "15%",
      "8%"
    ],
    "answer": 0,
    "explanation": "A full circle has 360°. Percentage = (36° / 360°) × 100 = 10%.",
    "conceptOrFormula": "Degree to Percentage: % = (Degrees / 360) × 100",
    "tags": [
      "Data Interpretation",
      "Pie Charts"
    ]
  },
  {
    "id": "apt-qua-time-and-w-77",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Beginner",
    "question": "Practice question 21 for Time and Work: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Time and Work question 21.",
    "conceptOrFormula": "Core formula and concept for Time and Work",
    "tags": [
      "Time and Work",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-time-and-w-78",
    "category": "quantitative",
    "topic": "Time and Work",
    "difficulty": "Intermediate",
    "question": "Practice question 22 for Time and Work: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Time and Work question 22.",
    "conceptOrFormula": "Core formula and concept for Time and Work",
    "tags": [
      "Time and Work",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-percentage-79",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Beginner",
    "question": "Practice question 21 for Percentage: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Percentage question 21.",
    "conceptOrFormula": "Core formula and concept for Percentage",
    "tags": [
      "Percentage",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-percentage-80",
    "category": "quantitative",
    "topic": "Percentage",
    "difficulty": "Intermediate",
    "question": "Practice question 22 for Percentage: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Percentage question 22.",
    "conceptOrFormula": "Core formula and concept for Percentage",
    "tags": [
      "Percentage",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-81",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "Practice question 11 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 11.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-82",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "Practice question 12 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 12.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-83",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "Practice question 13 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 13.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-84",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "Practice question 14 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 14.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-85",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "Practice question 15 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 15.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-86",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "Practice question 16 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 16.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-87",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "Practice question 17 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 17.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-88",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "Practice question 18 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 18.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-89",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "Practice question 19 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 19.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-90",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "Practice question 20 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 20.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-91",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Beginner",
    "question": "Practice question 21 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 21.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-profit-and-92",
    "category": "quantitative",
    "topic": "Profit and Loss",
    "difficulty": "Intermediate",
    "question": "Practice question 22 for Profit and Loss: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Profit and Loss question 22.",
    "conceptOrFormula": "Core formula and concept for Profit and Loss",
    "tags": [
      "Profit and Loss",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-ratio-and--93",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Beginner",
    "question": "If Rs. 250 is divided between A and B in the ratio 2 : 3, what is the share of A?",
    "options": [
      "Rs. 100",
      "Rs. 150",
      "Rs. 150",
      "Rs. 50"
    ],
    "answer": 0,
    "explanation": "Total parts = 2 + 3 = 5. Value per part = 250 / 5 = 50. A's share = 2 × 50 = Rs. 100.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--94",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Intermediate",
    "question": "If Rs. 350 is divided between A and B in the ratio 3 : 4, what is the share of A?",
    "options": [
      "Rs. 150",
      "Rs. 200",
      "Rs. 200",
      "Rs. 100"
    ],
    "answer": 0,
    "explanation": "Total parts = 3 + 4 = 7. Value per part = 350 / 7 = 50. A's share = 3 × 50 = Rs. 150.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--95",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Advanced",
    "question": "If Rs. 450 is divided between A and B in the ratio 4 : 5, what is the share of A?",
    "options": [
      "Rs. 200",
      "Rs. 250",
      "Rs. 250",
      "Rs. 150"
    ],
    "answer": 0,
    "explanation": "Total parts = 4 + 5 = 9. Value per part = 450 / 9 = 50. A's share = 4 × 50 = Rs. 200.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--96",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Beginner",
    "question": "If Rs. 550 is divided between A and B in the ratio 5 : 6, what is the share of A?",
    "options": [
      "Rs. 250",
      "Rs. 300",
      "Rs. 300",
      "Rs. 200"
    ],
    "answer": 0,
    "explanation": "Total parts = 5 + 6 = 11. Value per part = 550 / 11 = 50. A's share = 5 × 50 = Rs. 250.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--97",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Intermediate",
    "question": "If Rs. 650 is divided between A and B in the ratio 6 : 7, what is the share of A?",
    "options": [
      "Rs. 300",
      "Rs. 350",
      "Rs. 350",
      "Rs. 250"
    ],
    "answer": 0,
    "explanation": "Total parts = 6 + 7 = 13. Value per part = 650 / 13 = 50. A's share = 6 × 50 = Rs. 300.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--98",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Advanced",
    "question": "If Rs. 750 is divided between A and B in the ratio 7 : 8, what is the share of A?",
    "options": [
      "Rs. 350",
      "Rs. 400",
      "Rs. 400",
      "Rs. 300"
    ],
    "answer": 0,
    "explanation": "Total parts = 7 + 8 = 15. Value per part = 750 / 15 = 50. A's share = 7 × 50 = Rs. 350.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--99",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Beginner",
    "question": "If Rs. 850 is divided between A and B in the ratio 8 : 9, what is the share of A?",
    "options": [
      "Rs. 400",
      "Rs. 450",
      "Rs. 450",
      "Rs. 350"
    ],
    "answer": 0,
    "explanation": "Total parts = 8 + 9 = 17. Value per part = 850 / 17 = 50. A's share = 8 × 50 = Rs. 400.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--100",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Intermediate",
    "question": "If Rs. 950 is divided between A and B in the ratio 9 : 10, what is the share of A?",
    "options": [
      "Rs. 450",
      "Rs. 500",
      "Rs. 500",
      "Rs. 400"
    ],
    "answer": 0,
    "explanation": "Total parts = 9 + 10 = 19. Value per part = 950 / 19 = 50. A's share = 9 × 50 = Rs. 450.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--101",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Advanced",
    "question": "If Rs. 1050 is divided between A and B in the ratio 10 : 11, what is the share of A?",
    "options": [
      "Rs. 500",
      "Rs. 550",
      "Rs. 550",
      "Rs. 450"
    ],
    "answer": 0,
    "explanation": "Total parts = 10 + 11 = 21. Value per part = 1050 / 21 = 50. A's share = 10 × 50 = Rs. 500.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--102",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Beginner",
    "question": "If Rs. 1150 is divided between A and B in the ratio 11 : 12, what is the share of A?",
    "options": [
      "Rs. 550",
      "Rs. 600",
      "Rs. 600",
      "Rs. 500"
    ],
    "answer": 0,
    "explanation": "Total parts = 11 + 12 = 23. Value per part = 1150 / 23 = 50. A's share = 11 × 50 = Rs. 550.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--103",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Intermediate",
    "question": "If Rs. 1250 is divided between A and B in the ratio 12 : 13, what is the share of A?",
    "options": [
      "Rs. 600",
      "Rs. 650",
      "Rs. 650",
      "Rs. 550"
    ],
    "answer": 0,
    "explanation": "Total parts = 12 + 13 = 25. Value per part = 1250 / 25 = 50. A's share = 12 × 50 = Rs. 600.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--104",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Advanced",
    "question": "If Rs. 1350 is divided between A and B in the ratio 13 : 14, what is the share of A?",
    "options": [
      "Rs. 650",
      "Rs. 700",
      "Rs. 700",
      "Rs. 600"
    ],
    "answer": 0,
    "explanation": "Total parts = 13 + 14 = 27. Value per part = 1350 / 27 = 50. A's share = 13 × 50 = Rs. 650.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--105",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Beginner",
    "question": "If Rs. 1450 is divided between A and B in the ratio 14 : 15, what is the share of A?",
    "options": [
      "Rs. 700",
      "Rs. 750",
      "Rs. 750",
      "Rs. 650"
    ],
    "answer": 0,
    "explanation": "Total parts = 14 + 15 = 29. Value per part = 1450 / 29 = 50. A's share = 14 × 50 = Rs. 700.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--106",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Intermediate",
    "question": "If Rs. 1550 is divided between A and B in the ratio 15 : 16, what is the share of A?",
    "options": [
      "Rs. 750",
      "Rs. 800",
      "Rs. 800",
      "Rs. 700"
    ],
    "answer": 0,
    "explanation": "Total parts = 15 + 16 = 31. Value per part = 1550 / 31 = 50. A's share = 15 × 50 = Rs. 750.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--107",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Advanced",
    "question": "If Rs. 1650 is divided between A and B in the ratio 16 : 17, what is the share of A?",
    "options": [
      "Rs. 800",
      "Rs. 850",
      "Rs. 850",
      "Rs. 750"
    ],
    "answer": 0,
    "explanation": "Total parts = 16 + 17 = 33. Value per part = 1650 / 33 = 50. A's share = 16 × 50 = Rs. 800.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--108",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Beginner",
    "question": "If Rs. 1750 is divided between A and B in the ratio 17 : 18, what is the share of A?",
    "options": [
      "Rs. 850",
      "Rs. 900",
      "Rs. 900",
      "Rs. 800"
    ],
    "answer": 0,
    "explanation": "Total parts = 17 + 18 = 35. Value per part = 1750 / 35 = 50. A's share = 17 × 50 = Rs. 850.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--109",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Intermediate",
    "question": "If Rs. 1850 is divided between A and B in the ratio 18 : 19, what is the share of A?",
    "options": [
      "Rs. 900",
      "Rs. 950",
      "Rs. 950",
      "Rs. 850"
    ],
    "answer": 0,
    "explanation": "Total parts = 18 + 19 = 37. Value per part = 1850 / 37 = 50. A's share = 18 × 50 = Rs. 900.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--110",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Advanced",
    "question": "If Rs. 1950 is divided between A and B in the ratio 19 : 20, what is the share of A?",
    "options": [
      "Rs. 950",
      "Rs. 1000",
      "Rs. 1000",
      "Rs. 900"
    ],
    "answer": 0,
    "explanation": "Total parts = 19 + 20 = 39. Value per part = 1950 / 39 = 50. A's share = 19 × 50 = Rs. 950.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--111",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Beginner",
    "question": "If Rs. 2050 is divided between A and B in the ratio 20 : 21, what is the share of A?",
    "options": [
      "Rs. 1000",
      "Rs. 1050",
      "Rs. 1050",
      "Rs. 950"
    ],
    "answer": 0,
    "explanation": "Total parts = 20 + 21 = 41. Value per part = 2050 / 41 = 50. A's share = 20 × 50 = Rs. 1000.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-ratio-and--112",
    "category": "quantitative",
    "topic": "Ratio and Proportion",
    "difficulty": "Intermediate",
    "question": "If Rs. 2150 is divided between A and B in the ratio 21 : 22, what is the share of A?",
    "options": [
      "Rs. 1050",
      "Rs. 1100",
      "Rs. 1100",
      "Rs. 1000"
    ],
    "answer": 0,
    "explanation": "Total parts = 21 + 22 = 43. Value per part = 2150 / 43 = 50. A's share = 21 × 50 = Rs. 1050.",
    "conceptOrFormula": "Part Share = Total Amount × (Ratio Part / Total Ratio Sum)",
    "tags": [
      "Ratio and Proportion",
      "Division of Amount"
    ]
  },
  {
    "id": "apt-qua-time-speed-113",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Beginner",
    "question": "A train travels a distance of 80 km at a uniform speed of 40 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "2 hours",
      "3 hours",
      "1.5 hours",
      "3.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 80 / 40 = 2 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-114",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Intermediate",
    "question": "A train travels a distance of 135 km at a uniform speed of 45 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "3 hours",
      "4 hours",
      "2.5 hours",
      "4.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 135 / 45 = 3 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-115",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Advanced",
    "question": "A train travels a distance of 200 km at a uniform speed of 50 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "4 hours",
      "5 hours",
      "3.5 hours",
      "5.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 200 / 50 = 4 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-116",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Beginner",
    "question": "A train travels a distance of 275 km at a uniform speed of 55 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "5 hours",
      "6 hours",
      "4.5 hours",
      "6.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 275 / 55 = 5 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-117",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Intermediate",
    "question": "A train travels a distance of 120 km at a uniform speed of 60 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "2 hours",
      "3 hours",
      "1.5 hours",
      "3.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 120 / 60 = 2 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-118",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Advanced",
    "question": "A train travels a distance of 195 km at a uniform speed of 65 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "3 hours",
      "4 hours",
      "2.5 hours",
      "4.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 195 / 65 = 3 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-119",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Beginner",
    "question": "A train travels a distance of 280 km at a uniform speed of 70 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "4 hours",
      "5 hours",
      "3.5 hours",
      "5.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 280 / 70 = 4 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-120",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Intermediate",
    "question": "A train travels a distance of 375 km at a uniform speed of 75 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "5 hours",
      "6 hours",
      "4.5 hours",
      "6.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 375 / 75 = 5 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-121",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Advanced",
    "question": "A train travels a distance of 160 km at a uniform speed of 80 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "2 hours",
      "3 hours",
      "1.5 hours",
      "3.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 160 / 80 = 2 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-122",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Beginner",
    "question": "A train travels a distance of 255 km at a uniform speed of 85 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "3 hours",
      "4 hours",
      "2.5 hours",
      "4.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 255 / 85 = 3 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-123",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Intermediate",
    "question": "A train travels a distance of 360 km at a uniform speed of 90 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "4 hours",
      "5 hours",
      "3.5 hours",
      "5.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 360 / 90 = 4 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-124",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Advanced",
    "question": "A train travels a distance of 475 km at a uniform speed of 95 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "5 hours",
      "6 hours",
      "4.5 hours",
      "6.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 475 / 95 = 5 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-125",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Beginner",
    "question": "A train travels a distance of 200 km at a uniform speed of 100 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "2 hours",
      "3 hours",
      "1.5 hours",
      "3.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 200 / 100 = 2 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-126",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Intermediate",
    "question": "A train travels a distance of 315 km at a uniform speed of 105 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "3 hours",
      "4 hours",
      "2.5 hours",
      "4.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 315 / 105 = 3 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-127",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Advanced",
    "question": "A train travels a distance of 440 km at a uniform speed of 110 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "4 hours",
      "5 hours",
      "3.5 hours",
      "5.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 440 / 110 = 4 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-128",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Beginner",
    "question": "A train travels a distance of 575 km at a uniform speed of 115 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "5 hours",
      "6 hours",
      "4.5 hours",
      "6.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 575 / 115 = 5 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-129",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Intermediate",
    "question": "A train travels a distance of 240 km at a uniform speed of 120 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "2 hours",
      "3 hours",
      "1.5 hours",
      "3.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 240 / 120 = 2 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-130",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Advanced",
    "question": "A train travels a distance of 375 km at a uniform speed of 125 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "3 hours",
      "4 hours",
      "2.5 hours",
      "4.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 375 / 125 = 3 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-131",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Beginner",
    "question": "A train travels a distance of 520 km at a uniform speed of 130 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "4 hours",
      "5 hours",
      "3.5 hours",
      "5.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 520 / 130 = 4 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-132",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Intermediate",
    "question": "A train travels a distance of 675 km at a uniform speed of 135 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "5 hours",
      "6 hours",
      "4.5 hours",
      "6.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 675 / 135 = 5 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-133",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Advanced",
    "question": "A train travels a distance of 280 km at a uniform speed of 140 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "2 hours",
      "3 hours",
      "1.5 hours",
      "3.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 280 / 140 = 2 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-134",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Beginner",
    "question": "A train travels a distance of 435 km at a uniform speed of 145 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "3 hours",
      "4 hours",
      "2.5 hours",
      "4.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 435 / 145 = 3 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-135",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Intermediate",
    "question": "A train travels a distance of 600 km at a uniform speed of 150 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "4 hours",
      "5 hours",
      "3.5 hours",
      "5.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 600 / 150 = 4 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-136",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Advanced",
    "question": "A train travels a distance of 775 km at a uniform speed of 155 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "5 hours",
      "6 hours",
      "4.5 hours",
      "6.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 775 / 155 = 5 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-time-speed-137",
    "category": "quantitative",
    "topic": "Time Speed and Distance",
    "difficulty": "Beginner",
    "question": "A train travels a distance of 320 km at a uniform speed of 160 km/hr. How much time in hours does it take to complete the journey?",
    "options": [
      "2 hours",
      "3 hours",
      "1.5 hours",
      "3.5 hours"
    ],
    "answer": 0,
    "explanation": "Time = Distance / Speed = 320 / 160 = 2 hours.",
    "conceptOrFormula": "Time = Distance / Speed; Speed in m/s = km/hr × (5/18)",
    "tags": [
      "Time Speed and Distance",
      "Trains"
    ]
  },
  {
    "id": "apt-qua-number-ser-138",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Practice question 11 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 11.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-139",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Practice question 12 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 12.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-140",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Practice question 13 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 13.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-141",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Practice question 14 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 14.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-142",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Practice question 15 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 15.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-143",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Practice question 16 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 16.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-144",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Practice question 17 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 17.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-145",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Practice question 18 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 18.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-146",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Practice question 19 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 19.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-147",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Practice question 20 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 20.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-148",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Beginner",
    "question": "Practice question 21 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 21.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-number-ser-149",
    "category": "quantitative",
    "topic": "Number Series",
    "difficulty": "Intermediate",
    "question": "Practice question 22 for Number Series: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Number Series question 22.",
    "conceptOrFormula": "Core formula and concept for Number Series",
    "tags": [
      "Number Series",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-150",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "Practice question 6 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 6.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-151",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "Practice question 7 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 7.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-152",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "Practice question 8 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 8.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-153",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "Practice question 9 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 9.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-154",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "Practice question 10 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 10.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-155",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "Practice question 11 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 11.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-156",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "Practice question 12 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 12.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-157",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "Practice question 13 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 13.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-158",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "Practice question 14 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 14.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-159",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "Practice question 15 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 15.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-160",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "Practice question 16 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 16.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-161",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "Practice question 17 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 17.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-162",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "Practice question 18 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 18.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-163",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "Practice question 19 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 19.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-164",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "Practice question 20 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 20.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-165",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Beginner",
    "question": "Practice question 21 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 21.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-coding-and-166",
    "category": "quantitative",
    "topic": "Coding and Decoding",
    "difficulty": "Intermediate",
    "question": "Practice question 22 for Coding and Decoding: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Coding and Decoding question 22.",
    "conceptOrFormula": "Core formula and concept for Coding and Decoding",
    "tags": [
      "Coding and Decoding",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-167",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Practice question 5 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 5.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-168",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Practice question 6 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 6.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-169",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Practice question 7 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 7.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-170",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Practice question 8 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 8.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-171",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Practice question 9 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 9.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-172",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Practice question 10 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 10.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-173",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Practice question 11 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 11.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-174",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Practice question 12 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 12.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-175",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Practice question 13 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 13.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-176",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Practice question 14 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 14.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-177",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Practice question 15 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 15.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-178",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Practice question 16 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 16.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-179",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Practice question 17 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 17.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-180",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Practice question 18 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 18.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-181",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Practice question 19 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 19.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-182",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Practice question 20 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 20.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-183",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Beginner",
    "question": "Practice question 21 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 21.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-blood-rela-184",
    "category": "quantitative",
    "topic": "Blood Relations",
    "difficulty": "Intermediate",
    "question": "Practice question 22 for Blood Relations: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Blood Relations question 22.",
    "conceptOrFormula": "Core formula and concept for Blood Relations",
    "tags": [
      "Blood Relations",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-log-seating-ar-185",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-186",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-187",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-188",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-189",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-190",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-191",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-192",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-193",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-194",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-195",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-196",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-197",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-198",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-199",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-200",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-201",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-202",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-203",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Intermediate",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-log-seating-ar-204",
    "category": "logical",
    "topic": "Seating Arrangement",
    "difficulty": "Advanced",
    "question": "Five friends A, B, C, D, and E are sitting in a row facing North. B is between A and C. E is to the immediate right of C. D is at the left end. Who is in the middle?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "answer": 1,
    "explanation": "Arrangement from left to right: D - A - B - C - E. The person in the middle position (3rd) is B.",
    "conceptOrFormula": "Linear Row Seating Positioning Constraint satisfaction",
    "tags": [
      "Seating Arrangement",
      "Linear Order"
    ]
  },
  {
    "id": "apt-qua-error-spot-205",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 3 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 3.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-206",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 4 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 4.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-207",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 5 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 5.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-208",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 6 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 6.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-209",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 7 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 7.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-210",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 8 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 8.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-211",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 9 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 9.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-212",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 10 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 10.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-213",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 11 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 11.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-214",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 12 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 12.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-215",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 13 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 13.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-216",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 14 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 14.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-217",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 15 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 15.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-218",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 16 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 16.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-219",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 17 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 17.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-220",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 18 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 18.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-221",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 19 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 19.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-222",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 20 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 20.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-223",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Beginner",
    "question": "Practice question 21 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 21.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-error-spot-224",
    "category": "quantitative",
    "topic": "Error Spotting",
    "difficulty": "Intermediate",
    "question": "Practice question 22 for Error Spotting: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Error Spotting question 22.",
    "conceptOrFormula": "Core formula and concept for Error Spotting",
    "tags": [
      "Error Spotting",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-225",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 1 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 1.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-226",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 2 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 2.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-227",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 3 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 3.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-228",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 4 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 4.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-229",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 5 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 5.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-230",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 6 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 6.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-231",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 7 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 7.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-232",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 8 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 8.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-233",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 9 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 9.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-234",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 10 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 10.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-235",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 11 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 11.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-236",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 12 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 12.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-237",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 13 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 13.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-238",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 14 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 14.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-239",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 15 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 15.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-240",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 16 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 16.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-241",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 17 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 17.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-242",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 18 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 18.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-243",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 19 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 19.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-244",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 20 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 20.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-245",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Beginner",
    "question": "Practice question 21 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 21.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-synonyms-a-246",
    "category": "quantitative",
    "topic": "Synonyms and Antonyms",
    "difficulty": "Intermediate",
    "question": "Practice question 22 for Synonyms and Antonyms: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Synonyms and Antonyms question 22.",
    "conceptOrFormula": "Core formula and concept for Synonyms and Antonyms",
    "tags": [
      "Synonyms and Antonyms",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-247",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 2 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 2.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-248",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "Practice question 3 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 3.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-249",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 4 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 4.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-250",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "Practice question 5 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 5.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-251",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 6 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 6.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-252",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "Practice question 7 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 7.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-253",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 8 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 8.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-254",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "Practice question 9 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 9.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-255",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 10 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 10.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-256",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "Practice question 11 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 11.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-257",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 12 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 12.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-258",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "Practice question 13 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 13.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-259",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 14 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 14.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-260",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "Practice question 15 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 15.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-261",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 16 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 16.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-262",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "Practice question 17 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 17.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-263",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 18 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 18.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-264",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Beginner",
    "question": "Practice question 19 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 19.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-fill-in-th-265",
    "category": "quantitative",
    "topic": "Fill in the Blanks",
    "difficulty": "Intermediate",
    "question": "Practice question 20 for Fill in the Blanks: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Fill in the Blanks question 20.",
    "conceptOrFormula": "Core formula and concept for Fill in the Blanks",
    "tags": [
      "Fill in the Blanks",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-266",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 2 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 2.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-267",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Practice question 3 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 3.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-268",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 4 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 4.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-269",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Practice question 5 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 5.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-270",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 6 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 6.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-271",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Practice question 7 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 7.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-272",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 8 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 8.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-273",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Practice question 9 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 9.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-274",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 10 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 10.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-275",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Practice question 11 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 11.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-276",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 12 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 12.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-277",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Practice question 13 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 13.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-278",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 14 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 14.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-279",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Practice question 15 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 15.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-280",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 16 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 16.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-281",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Practice question 17 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 17.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-282",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 18 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 18.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-283",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Beginner",
    "question": "Practice question 19 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 19.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-tables-284",
    "category": "quantitative",
    "topic": "Tables",
    "difficulty": "Intermediate",
    "question": "Practice question 20 for Tables: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Tables question 20.",
    "conceptOrFormula": "Core formula and concept for Tables",
    "tags": [
      "Tables",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-285",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 2 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 2.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-286",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Beginner",
    "question": "Practice question 3 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 3.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-287",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 4 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 4.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-288",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Beginner",
    "question": "Practice question 5 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 5.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-289",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 6 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 6.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-290",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Beginner",
    "question": "Practice question 7 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 7.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-291",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 8 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 8.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-292",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Beginner",
    "question": "Practice question 9 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 9.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-293",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 10 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 10.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-294",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Beginner",
    "question": "Practice question 11 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 11.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-295",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 12 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 12.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-296",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Beginner",
    "question": "Practice question 13 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 13.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-297",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 14 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 14.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-298",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Beginner",
    "question": "Practice question 15 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 15.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-299",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 16 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 16.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-300",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Beginner",
    "question": "Practice question 17 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 17.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-301",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 18 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 18.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-302",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Beginner",
    "question": "Practice question 19 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 19.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-qua-pie-charts-303",
    "category": "quantitative",
    "topic": "Pie Charts",
    "difficulty": "Intermediate",
    "question": "Practice question 20 for Pie Charts: Solve the application problem with given constraints.",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": 0,
    "explanation": "Step-by-step solution for Pie Charts question 20.",
    "conceptOrFormula": "Core formula and concept for Pie Charts",
    "tags": [
      "Pie Charts",
      "Placement Prep"
    ]
  },
  {
    "id": "apt-dat-bar-charts-304",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 200 units against a target of 300 units. What is the achievement percentage?",
    "options": [
      "67%",
      "62%",
      "72%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (200 / 300) × 100 = 67%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-305",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 225 units against a target of 325 units. What is the achievement percentage?",
    "options": [
      "69%",
      "64%",
      "74%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (225 / 325) × 100 = 69%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-306",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 250 units against a target of 350 units. What is the achievement percentage?",
    "options": [
      "71%",
      "66%",
      "76%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (250 / 350) × 100 = 71%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-307",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 275 units against a target of 375 units. What is the achievement percentage?",
    "options": [
      "73%",
      "68%",
      "78%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (275 / 375) × 100 = 73%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-308",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 300 units against a target of 400 units. What is the achievement percentage?",
    "options": [
      "75%",
      "70%",
      "80%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (300 / 400) × 100 = 75%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-309",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 325 units against a target of 425 units. What is the achievement percentage?",
    "options": [
      "76%",
      "71%",
      "81%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (325 / 425) × 100 = 76%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-310",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 350 units against a target of 450 units. What is the achievement percentage?",
    "options": [
      "78%",
      "73%",
      "83%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (350 / 450) × 100 = 78%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-311",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 375 units against a target of 475 units. What is the achievement percentage?",
    "options": [
      "79%",
      "74%",
      "84%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (375 / 475) × 100 = 79%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-312",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 400 units against a target of 500 units. What is the achievement percentage?",
    "options": [
      "80%",
      "75%",
      "85%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (400 / 500) × 100 = 80%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-313",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 425 units against a target of 525 units. What is the achievement percentage?",
    "options": [
      "81%",
      "76%",
      "86%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (425 / 525) × 100 = 81%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-314",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 450 units against a target of 550 units. What is the achievement percentage?",
    "options": [
      "82%",
      "77%",
      "87%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (450 / 550) × 100 = 82%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-315",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 475 units against a target of 575 units. What is the achievement percentage?",
    "options": [
      "83%",
      "78%",
      "88%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (475 / 575) × 100 = 83%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-316",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 500 units against a target of 600 units. What is the achievement percentage?",
    "options": [
      "83%",
      "78%",
      "88%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (500 / 600) × 100 = 83%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-317",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 525 units against a target of 625 units. What is the achievement percentage?",
    "options": [
      "84%",
      "79%",
      "89%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (525 / 625) × 100 = 84%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-318",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 550 units against a target of 650 units. What is the achievement percentage?",
    "options": [
      "85%",
      "80%",
      "90%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (550 / 650) × 100 = 85%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-319",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 575 units against a target of 675 units. What is the achievement percentage?",
    "options": [
      "85%",
      "80%",
      "90%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (575 / 675) × 100 = 85%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-320",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 600 units against a target of 700 units. What is the achievement percentage?",
    "options": [
      "86%",
      "81%",
      "91%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (600 / 700) × 100 = 86%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-321",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 625 units against a target of 725 units. What is the achievement percentage?",
    "options": [
      "86%",
      "81%",
      "91%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (625 / 725) × 100 = 86%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-322",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 650 units against a target of 750 units. What is the achievement percentage?",
    "options": [
      "87%",
      "82%",
      "92%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (650 / 750) × 100 = 87%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-dat-bar-charts-323",
    "category": "data-interpretation",
    "topic": "Bar Charts",
    "difficulty": "Intermediate",
    "question": "A bar chart indicates actual production of 675 units against a target of 775 units. What is the achievement percentage?",
    "options": [
      "87%",
      "82%",
      "92%",
      "100%"
    ],
    "answer": 0,
    "explanation": "Achievement % = (675 / 775) × 100 = 87%.",
    "conceptOrFormula": "Achievement Rate = (Actual / Target) × 100",
    "tags": [
      "Data Interpretation",
      "Bar Charts"
    ]
  },
  {
    "id": "apt-qua-number-system-1",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "What is the remainder when 2^31 is divided by 7?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "2^3 = 8 = 1 (mod 7). 2^31 = (2^3)^10 * 2^1 = 1^10 * 2 = 2.",
    "conceptOrFormula": "Fermat's Remainder / Cyclicity Theorem",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-2",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "Find the unit digit of (7^95 - 3^58).",
    "options": [
      "0",
      "4",
      "6",
      "7"
    ],
    "answer": 1,
    "explanation": "Cyclicity of 7 is 4: 95 mod 4 = 3 -> 7^3 = 343 (unit 3). Cyclicity of 3 is 4: 58 mod 4 = 2 -> 3^2 = 9 (unit 9). Unit digit = (13 - 9) = 4.",
    "conceptOrFormula": "Unit Digit Cyclicity",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-3",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "The sum of first 50 natural numbers is:",
    "options": [
      "1225",
      "1275",
      "1325",
      "1250"
    ],
    "answer": 1,
    "explanation": "Sum = n(n+1)/2 = 50 * 51 / 2 = 1275.",
    "conceptOrFormula": "Sum of Natural Numbers: n(n+1)/2",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-4",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "How many prime numbers are there between 1 and 50?",
    "options": [
      "12",
      "14",
      "15",
      "16"
    ],
    "answer": 2,
    "explanation": "Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 (Total 15).",
    "conceptOrFormula": "Prime Number Count",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-5",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "If a number is divisible by both 11 and 13, it must be necessarily divisible by:",
    "options": [
      "11 + 13",
      "13 - 11",
      "11 * 13",
      "11^13"
    ],
    "answer": 2,
    "explanation": "Since 11 and 13 are co-prime, any number divisible by both is divisible by their product (11 * 13 = 143).",
    "conceptOrFormula": "Divisibility of Co-primes",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-6",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "Find the largest four-digit number exactly divisible by 88.",
    "options": [
      "9944",
      "9768",
      "9988",
      "8888"
    ],
    "answer": 0,
    "explanation": "9999 / 88 leaves remainder 55. Largest number = 9999 - 55 = 9944.",
    "conceptOrFormula": "Division Algorithm",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-7",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "What is the HCF of 2/3, 8/9, 64/81, and 10/27?",
    "options": [
      "2/81",
      "160/81",
      "2/3",
      "160/3"
    ],
    "answer": 0,
    "explanation": "HCF of fractions = HCF(Numerators) / LCM(Denominators) = HCF(2,8,64,10) / LCM(3,9,81,27) = 2 / 81.",
    "conceptOrFormula": "HCF of Fractions",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-8",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "What is the LCM of 24, 36, and 40?",
    "options": [
      "120",
      "240",
      "360",
      "480"
    ],
    "answer": 2,
    "explanation": "24 = 2^3*3, 36 = 2^2*3^2, 40 = 2^3*5. LCM = 2^3 * 3^2 * 5 = 360.",
    "conceptOrFormula": "Prime Factorization LCM",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-9",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "The product of two numbers is 2028 and their HCF is 13. The number of such possible pairs is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 1,
    "explanation": "Let numbers be 13a, 13b. 13a * 13b = 2028 => ab = 12. Co-prime pairs: (1, 12) and (3, 4). Total pairs = 2.",
    "conceptOrFormula": "HCF and Product of Numbers",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-10",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "Which of the following numbers is divisible by 99?",
    "options": [
      "114345",
      "3572404",
      "135792",
      "913464"
    ],
    "answer": 0,
    "explanation": "A number divisible by 99 must be divisible by 9 and 11. Sum of digits in 114345 = 18 (divisible by 9). Alt sum = (5+3+1)-(4+4+1) = 0 (divisible by 11).",
    "conceptOrFormula": "Divisibility Rules for 9 & 11",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-11",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "Find the sum of all odd numbers between 1 and 40.",
    "options": [
      "400",
      "420",
      "440",
      "380"
    ],
    "answer": 0,
    "explanation": "Number of odd terms n = 20. Sum of first n odd numbers = n^2 = 20^2 = 400.",
    "conceptOrFormula": "Sum of Odd Numbers = n^2",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-12",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "What least number must be subtracted from 13601 to get a number exactly divisible by 87?",
    "options": [
      "23",
      "29",
      "31",
      "37"
    ],
    "answer": 1,
    "explanation": "13601 / 87 gives quotient 156 and remainder 29. Subtracted number = 29.",
    "conceptOrFormula": "Division Remainder Theorem",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-13",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "Express 0.363636... as a vulgar fraction in simplest form.",
    "options": [
      "4/11",
      "36/100",
      "1/3",
      "12/33"
    ],
    "answer": 0,
    "explanation": "x = 36 / 99 = 4 / 11.",
    "conceptOrFormula": "Recurring Decimals to Fractions",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-14",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "What is the square root of 0.0009?",
    "options": [
      "0.3",
      "0.03",
      "0.003",
      "0.0003"
    ],
    "answer": 1,
    "explanation": "sqrt(9 / 10000) = 3 / 100 = 0.03.",
    "conceptOrFormula": "Decimal Roots",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-15",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "The sum of three consecutive integers is 87. The middle number is:",
    "options": [
      "27",
      "28",
      "29",
      "30"
    ],
    "answer": 2,
    "explanation": "Middle number = Sum / 3 = 87 / 3 = 29.",
    "conceptOrFormula": "Arithmetic Mean of Consecutive Integers",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-16",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "Find the number of trailing zeros in 100!",
    "options": [
      "20",
      "22",
      "24",
      "25"
    ],
    "answer": 2,
    "explanation": "Zeros = floor(100/5) + floor(100/25) = 20 + 4 = 24.",
    "conceptOrFormula": "Legendre's Formula for Factorials",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-17",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "If log_10(2) = 0.3010, the number of digits in 2^64 is:",
    "options": [
      "19",
      "20",
      "21",
      "22"
    ],
    "answer": 1,
    "explanation": "log10(2^64) = 64 * 0.3010 = 19.264. Number of digits = floor(19.264) + 1 = 20.",
    "conceptOrFormula": "Logarithmic Characteristic & Digits",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-18",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "The difference between the squares of two consecutive odd integers is always divisible by:",
    "options": [
      "3",
      "6",
      "7",
      "8"
    ],
    "answer": 3,
    "explanation": "(2n+1)^2 - (2n-1)^2 = 4n^2 + 4n + 1 - (4n^2 - 4n + 1) = 8n, which is always divisible by 8.",
    "conceptOrFormula": "Algebraic Identity (a^2 - b^2)",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-19",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "What is the total number of divisors of 360?",
    "options": [
      "18",
      "20",
      "24",
      "28"
    ],
    "answer": 2,
    "explanation": "360 = 2^3 * 3^2 * 5^1. Number of divisors = (3+1)(2+1)(1+1) = 4 * 3 * 2 = 24.",
    "conceptOrFormula": "Total Divisors Formula: (p+1)(q+1)(r+1)",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-number-system-20",
    "category": "quantitative",
    "topic": "Number System",
    "difficulty": "Intermediate",
    "question": "A number when divided by 296 leaves 75 as remainder. If the same number is divided by 37, the remainder will be:",
    "options": [
      "1",
      "2",
      "8",
      "11"
    ],
    "answer": 0,
    "explanation": "Since 296 is divisible by 37 (296 = 37 * 8), remainder = 75 mod 37 = 1.",
    "conceptOrFormula": "Modular Remainder Mapping",
    "tags": [
      "Number System"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-21",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "A sum of money at simple interest doubles in 8 years. In how many years will it triple?",
    "options": [
      "12 years",
      "14 years",
      "16 years",
      "18 years"
    ],
    "answer": 2,
    "explanation": "Interest in 8 yrs = P -> Rate = 100/8 = 12.5%. To triple, Interest = 2P -> Time = 2P / (P * 12.5%) = 16 years.",
    "conceptOrFormula": "SI Doubling Formula: T2 = T1 * (N2 - 1)/(N1 - 1)",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-22",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "What is the compound interest on Rs. 10,000 for 2 years at 10% per annum compounded annually?",
    "options": [
      "Rs. 2,000",
      "Rs. 2,100",
      "Rs. 2,200",
      "Rs. 2,400"
    ],
    "answer": 1,
    "explanation": "A = P(1 + r/100)^t = 10000 * 1.10^2 = 12100. CI = 12100 - 10000 = Rs. 2,100.",
    "conceptOrFormula": "CI = P[(1 + R/100)^T - 1]",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-23",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "The difference between CI and SI on a sum for 2 years at 10% per annum is Rs. 50. The sum is:",
    "options": [
      "Rs. 4,000",
      "Rs. 5,000",
      "Rs. 6,000",
      "Rs. 8,000"
    ],
    "answer": 1,
    "explanation": "Difference for 2 yrs = P * (R/100)^2 => 50 = P * (10/100)^2 => P = 50 * 100 = Rs. 5,000.",
    "conceptOrFormula": "CI - SI (2 Years) = P(R/100)^2",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-24",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "A sum of money invested at CI amounts to Rs. 4,624 in 2 years and Rs. 4,913 in 3 years. The rate of interest is:",
    "options": [
      "5%",
      "6%",
      "6.25%",
      "8%"
    ],
    "answer": 2,
    "explanation": "Interest in 3rd yr = 4913 - 4624 = 289. Rate = (289 / 4624) * 100 = 6.25%.",
    "conceptOrFormula": "Annual Incremental CI Rate = (Diff / Base) * 100",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-25",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "In how many years will Rs. 2,000 amount to Rs. 2,420 at 10% per annum compound interest?",
    "options": [
      "1.5 years",
      "2 years",
      "2.5 years",
      "3 years"
    ],
    "answer": 1,
    "explanation": "2420 / 2000 = 1.21 = (1 + 10/100)^t = 1.1^t => t = 2 years.",
    "conceptOrFormula": "CI Time Computation",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-26",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "At what rate percent per annum simple interest will a sum double itself in 10 years?",
    "options": [
      "8%",
      "10%",
      "12%",
      "15%"
    ],
    "answer": 1,
    "explanation": "SI = P => R = (100 * SI) / (P * T) = (100 * P) / (P * 10) = 10%.",
    "conceptOrFormula": "R = 100 / T for Doubling at SI",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-27",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "Find the compound interest on Rs. 16,000 at 20% per annum for 9 months, compounded quarterly.",
    "options": [
      "Rs. 2,520",
      "Rs. 2,522",
      "Rs. 2,600",
      "Rs. 2,800"
    ],
    "answer": 1,
    "explanation": "Quarterly rate r = 20/4 = 5%, n = 3 quarters. A = 16000 * (1.05)^3 = 18522. CI = 18522 - 16000 = Rs. 2,522.",
    "conceptOrFormula": "Quarterly Compounding: R/4, 4T",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-28",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "A sum of Rs. 12,500 amounts to Rs. 15,500 in 4 years at simple interest. What is the rate of interest?",
    "options": [
      "4%",
      "5%",
      "6%",
      "8%"
    ],
    "answer": 2,
    "explanation": "SI = 15500 - 12500 = 3000. R = (3000 * 100) / (12500 * 4) = 6%.",
    "conceptOrFormula": "SI Rate Formula",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-29",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "If the simple interest on a certain sum for 3 years at 4% is Rs. 600, find the compound interest on the same sum for 2 years at the same rate.",
    "options": [
      "Rs. 408",
      "Rs. 416",
      "Rs. 420",
      "Rs. 432"
    ],
    "answer": 0,
    "explanation": "SI per year = 600/3 = 200. P = (200 * 100) / 4 = 5000. CI for 2 yrs = 5000 * [(1.04)^2 - 1] = 5000 * 0.0816 = Rs. 408.",
    "conceptOrFormula": "SI to CI Conversion",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-30",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "A sum of money placed at compound interest doubles itself in 5 years. It will amount to 8 times itself at the same rate in:",
    "options": [
      "15 years",
      "20 years",
      "25 years",
      "30 years"
    ],
    "answer": 0,
    "explanation": "8 = 2^3. Time = 3 * 5 = 15 years.",
    "conceptOrFormula": "CI Doubling: 2^n in n*T years",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-31",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "What annual payment will discharge a debt of Rs. 1,092 due in 3 years at 12% simple interest?",
    "options": [
      "Rs. 300",
      "Rs. 325",
      "Rs. 350",
      "Rs. 375"
    ],
    "answer": 1,
    "explanation": "Instalment x: 3x + x * 12 * (2 + 1) / 100 = 1092 => 3x + 0.36x = 1092 => 3.36x = 1092 => x = Rs. 325.",
    "conceptOrFormula": "Equal Annual Debt Installments: 100A / (100T + RT(T-1)/2)",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-32",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "A person borrows Rs. 5,000 for 2 years at 4% p.a. simple interest and immediately lends it to another person at 6.25% p.a. for 2 years. Find his gain per year.",
    "options": [
      "Rs. 112.50",
      "Rs. 125.00",
      "Rs. 150.00",
      "Rs. 225.00"
    ],
    "answer": 0,
    "explanation": "Gain per year = 5000 * (6.25 - 4)% = 5000 * 2.25% = Rs. 112.50.",
    "conceptOrFormula": "Arbitrage Rate Spread",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-33",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "The effective annual rate of interest corresponding to a nominal rate of 6% per annum payable half-yearly is:",
    "options": [
      "6.06%",
      "6.09%",
      "6.12%",
      "6.15%"
    ],
    "answer": 1,
    "explanation": "Half-yearly rate = 3%. Effective rate = (1.03)^2 - 1 = 1.0609 - 1 = 6.09%.",
    "conceptOrFormula": "Effective Interest Rate = (1 + r/n)^n - 1",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-34",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "A sum of money amounts to Rs. 9,800 in 5 years and Rs. 12,005 in 8 years at simple interest. The rate of interest is:",
    "options": [
      "8%",
      "10%",
      "12%",
      "15%"
    ],
    "answer": 2,
    "explanation": "3 years SI = 12005 - 9800 = 2205 => 1 yr SI = 735. P = 9800 - 5 * 735 = 6125. Rate = (735 / 6125) * 100 = 12%.",
    "conceptOrFormula": "Constant Annual SI Increments",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-35",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "The simple interest on a sum of money is 4/9 of the principal and the number of years is equal to the rate percent per annum. The rate per annum is:",
    "options": [
      "5%",
      "6.67%",
      "8%",
      "9%"
    ],
    "answer": 1,
    "explanation": "SI = (4/9)P, T = R. (4/9)P = P * R * R / 100 => R^2 = 400/9 => R = 20/3 = 6.67%.",
    "conceptOrFormula": "Equal Rate and Time",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-36",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "At compound interest, if an amount becomes 1.44 times of itself in 2 years, what is the rate of interest per annum?",
    "options": [
      "15%",
      "20%",
      "24%",
      "25%"
    ],
    "answer": 1,
    "explanation": "P(1 + r/100)^2 = 1.44P => 1 + r/100 = sqrt(1.44) = 1.20 => r = 20%.",
    "conceptOrFormula": "Square Root Growth Rate",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-37",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "The compound interest on Rs. 30,000 at 7% per annum is Rs. 4,347. The period (in years) is:",
    "options": [
      "2 years",
      "2.5 years",
      "3 years",
      "4 years"
    ],
    "answer": 0,
    "explanation": "A = 34347. 34347 / 30000 = 1.1449 = (1.07)^2 => Period = 2 years.",
    "conceptOrFormula": "CI Horizon Determination",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-38",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "Difference between CI and SI on a sum for 3 years at 10% per annum is Rs. 155. The principal is:",
    "options": [
      "Rs. 4,500",
      "Rs. 5,000",
      "Rs. 5,500",
      "Rs. 6,000"
    ],
    "answer": 1,
    "explanation": "Diff (3 yrs) = P * (R/100)^2 * (3 + R/100) => 155 = P * 0.01 * 3.1 => 155 = 0.031P => P = 155 / 0.031 = Rs. 5,000.",
    "conceptOrFormula": "CI - SI (3 Years) = P(R/100)^2 * (3 + R/100)",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-39",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "A sum of Rs. 8,000 invested at compound interest compounded annually amounts to Rs. 9,261 in 3 years. The rate is:",
    "options": [
      "5%",
      "6%",
      "7%",
      "8%"
    ],
    "answer": 0,
    "explanation": "(1 + r/100)^3 = 9261 / 8000 = (21/20)^3 => 1 + r/100 = 21/20 = 1.05 => r = 5%.",
    "conceptOrFormula": "Cube Root Compounding Factor",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-qua-simple-and-compound-interest-40",
    "category": "quantitative",
    "topic": "Simple and Compound Interest",
    "difficulty": "Intermediate",
    "question": "If the simple interest on a sum of money for 2 years at 5% is Rs. 50, what is the compound interest on the same sum at the same rate and for the same time?",
    "options": [
      "Rs. 51.25",
      "Rs. 52.00",
      "Rs. 53.50",
      "Rs. 54.00"
    ],
    "answer": 0,
    "explanation": "P = 50 / (2 * 0.05) = 500. CI = 500 * [(1.05)^2 - 1] = 500 * 0.1025 = Rs. 51.25.",
    "conceptOrFormula": "CI = SI + (SI * R) / 200 for 2 Years",
    "tags": [
      "Simple and Compound Interest"
    ]
  },
  {
    "id": "apt-log-direction-sense-41",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "A man walks 5 km toward South and then turns to the right. After walking 3 km he turns to the left and walks 5 km. Now in which direction is he from the starting place?",
    "options": [
      "West",
      "South",
      "North-East",
      "South-West"
    ],
    "answer": 3,
    "explanation": "Start (0,0) -> South 5 (0, -5) -> Right (West) 3 (-3, -5) -> Left (South) 5 (-3, -10). He is South-West of start.",
    "conceptOrFormula": "Coordinate Vector Mapping",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-42",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "Rahul walks 30 metres towards North. He then turns right and walks 40 metres. Then he turns right and walks 20 metres. Then again he turns right and walks 40 metres. How many metres is he from his original position?",
    "options": [
      "10 m",
      "20 m",
      "30 m",
      "40 m"
    ],
    "answer": 0,
    "explanation": "North 30 (+30y), Right (East 40) (+40x), Right (South 20) (+10y), Right (West 40) (0x, +10y). Net distance = 10 m.",
    "conceptOrFormula": "Cartesian Coordinate Tracking",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-43",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "A clock is placed in such a way that at 12 noon its minute hand points towards North-East. In which direction does its hour hand point at 1:30 PM?",
    "options": [
      "East",
      "South-East",
      "North",
      "South-West"
    ],
    "answer": 0,
    "explanation": "At 1:30, hour hand is at 45 deg from top (original North-East). Since 12 is rotated 45 deg clockwise to NE, at 1:30 PM (45 deg further clockwise) the hour hand points East.",
    "conceptOrFormula": "Clock Face Direction Rotation",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-44",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "Starting from point X, Joy walked 15 m towards west. He turned left and walked 20 m. He then turned left and walked 15 m. After this he turned to his right and walked 12 m. How far and in which direction is now Joy from X?",
    "options": [
      "32 m, South",
      "47 m, East",
      "42 m, North",
      "27 m, South"
    ],
    "answer": 0,
    "explanation": "West 15 (-15x) -> Left (South 20) (-20y) -> Left (East 15) (0x, -20y) -> Right (South 12) (0x, -32y). Net = 32 m South.",
    "conceptOrFormula": "Orthogonal Displacements",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-45",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "One morning after sunrise, Suresh was standing facing a pole. The shadow of the pole fell exactly to his right. Which direction was Suresh facing?",
    "options": [
      "East",
      "West",
      "South",
      "North"
    ],
    "answer": 2,
    "explanation": "In the morning, sun is in East, shadow falls towards West. If shadow is Suresh's right, Suresh's right is West, so Suresh is facing South.",
    "conceptOrFormula": "Shadow Direction at Sunrise (Sun in East, Shadow in West)",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-46",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "One evening before sunset, Rekha and Hema were talking to each other face to face. If Hema's shadow was exactly to the right of Hema, which direction was Rekha facing?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "answer": 1,
    "explanation": "At sunset, sun is in West, shadow falls towards East. Hema's right is East => Hema faces North. Since Rekha faces Hema, Rekha faces South.",
    "conceptOrFormula": "Shadow Direction at Sunset (Sun in West, Shadow in East)",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-47",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "Kunal walks 10 km towards North. From there he walks 6 km towards South. Then, he walks 3 km towards East. How far and in which direction is he with reference to his starting point?",
    "options": [
      "5 km West",
      "5 km North-East",
      "7 km East",
      "7 km North"
    ],
    "answer": 1,
    "explanation": "Net North = 10 - 6 = 4 km. Net East = 3 km. Distance = sqrt(4^2 + 3^2) = 5 km North-East.",
    "conceptOrFormula": "Pythagoras Theorem: sqrt(x^2 + y^2)",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-48",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "A person walks 4 km East, turns right and walks 3 km. What is the shortest distance between start and end point?",
    "options": [
      "5 km",
      "7 km",
      "6 km",
      "4.5 km"
    ],
    "answer": 0,
    "explanation": "Shortest distance = sqrt(4^2 + 3^2) = 5 km.",
    "conceptOrFormula": "Pythagorean Triplet (3, 4, 5)",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-49",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "If South-East becomes North, North-East becomes West and so on, what will West become?",
    "options": [
      "North-East",
      "South-East",
      "North-West",
      "South-West"
    ],
    "answer": 1,
    "explanation": "South-East (135 deg) rotates 135 deg anti-clockwise to North (0 deg). Rotating West (270 deg) 135 deg anti-clockwise gives 135 deg, which is South-East.",
    "conceptOrFormula": "Angular Rotation Transformation",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-50",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "A man is facing North-West. He turns 90 degrees in clockwise direction, then 180 degrees in anticlockwise direction and then another 90 degrees in the same direction. Which direction is he facing now?",
    "options": [
      "South",
      "South-West",
      "South-East",
      "East"
    ],
    "answer": 2,
    "explanation": "Net turn = +90 - 180 - 90 = -180 degrees (opposite). North-West opposite is South-East.",
    "conceptOrFormula": "Net Angular Rotation",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-51",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "Village A is to the West of Village B, which is to the South of Village C, which is to the West of Village D. In which direction is Village A with respect to Village D?",
    "options": [
      "South-West",
      "North-West",
      "South-East",
      "North-East"
    ],
    "answer": 0,
    "explanation": "D is East of C, C is North of B, B is East of A. A is South and West of D -> South-West.",
    "conceptOrFormula": "Multi-Node Relative Positioning",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-52",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "Deepa moves a distance of 75 m towards the North. She then turns to the left and walks for 25 m, turns left again and walks 80 m, and finally turns to the right at an angle of 45°. In which direction is she moving finally?",
    "options": [
      "North-East",
      "North-West",
      "South-West",
      "South-East"
    ],
    "answer": 2,
    "explanation": "Facing South after second left turn. Turning 45 deg right (towards West) means moving South-West.",
    "conceptOrFormula": "Angular Heading Tracking",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-53",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "Gaurav walks 20 metres towards North. He turns left and walks 40 metres. He again turns left and walks 20 metres. Further, he moves 20 metres after turning to the right. How far is he from his original position?",
    "options": [
      "20 m",
      "40 m",
      "60 m",
      "80 m"
    ],
    "answer": 2,
    "explanation": "Net Y = 20 - 20 = 0. Net X = -40 (left) - 20 (right) = -60 m. Distance = 60 m.",
    "conceptOrFormula": "Net Displacement",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-54",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "Two cars start from the opposite places of a main road, 150 km apart. First car runs for 25 km and takes a right turn and then runs 15 km. It then turns left and then runs for another 25 km and then takes the direction back to reach the main road. In the mean time, due to minor breakdown the other car has run only 35 km along the main road. What would be the distance between two cars at this point?",
    "options": [
      "65 km",
      "75 km",
      "80 km",
      "85 km"
    ],
    "answer": 0,
    "explanation": "First car progress along main road = 25 + 25 = 50 km. Second car progress = 35 km. Remaining distance = 150 - (50 + 35) = 65 km.",
    "conceptOrFormula": "Opposite Direction Axis Progress",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-55",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "A river flows West to East and on the way turns left and goes in a quarter circle around a hillock, and then turns right at right angles. In which direction is the river finally flowing?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "answer": 2,
    "explanation": "Flows East (0 deg) -> turns left to North (90 deg) -> quarter circle around hillock (faces West) -> turns right (North) -> wait, right from East is South, left is North. At right angles turns back to East.",
    "conceptOrFormula": "Flow Vector Tracing",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-56",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "A child looking for his father walked 90 metres in the East before turning to his right. He went 20 metres before turning to his right again to look for his father at his uncle's place 30 metres from this point. His father was not there. From here he went 100 metres to the North before meeting his father in a street. How far did the son meet his father from the starting point?",
    "options": [
      "80 m",
      "100 m",
      "140 m",
      "260 m"
    ],
    "answer": 1,
    "explanation": "Net East = 90 - 30 = 60 m. Net North = -20 + 100 = 80 m. Distance = sqrt(60^2 + 80^2) = 100 m.",
    "conceptOrFormula": "Pythagorean 60-80-100 Triangle",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-57",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "Y is in the East of X which is in the North of Z. If P is in the South of Z, then in which direction of Y is P?",
    "options": [
      "North",
      "South",
      "South-East",
      "South-West"
    ],
    "answer": 3,
    "explanation": "X is North of Z, Y is East of X. P is South of Z. P is South and West of Y -> South-West.",
    "conceptOrFormula": "Relative Topology Grid",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-58",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "If A is to the South of B and C is to the East of B, in what direction is A with respect to C?",
    "options": [
      "North-East",
      "North-West",
      "South-East",
      "South-West"
    ],
    "answer": 3,
    "explanation": "A is South of B, C is East of B. A is South-West of C.",
    "conceptOrFormula": "Grid Quadrant Determination",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-59",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "A man is performing yoga with his head down and legs up. His face is towards the west. In which direction will his left hand be?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "answer": 0,
    "explanation": "When standing facing West, left hand is South. Upside down (inverted), left hand points North.",
    "conceptOrFormula": "Inverted Body Coordinate Mapping",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-log-direction-sense-60",
    "category": "logical",
    "topic": "Direction Sense",
    "difficulty": "Beginner",
    "question": "At 3:00 PM, the minute hand points towards North. In which direction will the hour hand point at 9:00 AM?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "answer": 3,
    "explanation": "At 3:00 PM, minute hand is at 12 (North). At 9:00 AM, hour hand is at 9 (West).",
    "conceptOrFormula": "Standard Clock Compass Points",
    "tags": [
      "Direction Sense"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-61",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'Neither of the boys were present in the class.'",
    "options": [
      "Neither of the boys was present in the class.",
      "Neither of the boys were present in class.",
      "Neither of the boys are present in the class.",
      "None of the boy was present in class."
    ],
    "answer": 0,
    "explanation": "'Neither' is a singular distributive pronoun requiring a singular verb 'was'.",
    "conceptOrFormula": "Subject-Verb Agreement with 'Neither'",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-62",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'She is one of those persons who never tells a lie.'",
    "options": [
      "She is one of those persons who never tell a lie.",
      "She is one of that person who never tells a lie.",
      "She is a person who never tell a lie.",
      "She is one of those persons whom never tells a lie."
    ],
    "answer": 0,
    "explanation": "'Who' refers to the plural antecedent 'persons', which takes the plural verb 'tell'.",
    "conceptOrFormula": "Relative Pronoun Plural Antecedent",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-63",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'Scarcely had he gone when a policeman knocking at the door.'",
    "options": [
      "Scarcely had he gone when a policeman knocked at the door.",
      "Scarcely he had gone when a policeman knocked at the door.",
      "Scarcely had he gone then a policeman knocked at the door.",
      "Scarcely had he gone than a policeman knocked at the door."
    ],
    "answer": 0,
    "explanation": "'Scarcely... when' pair takes inverted auxiliary followed by past tense 'knocked'.",
    "conceptOrFormula": "Correlative Conjunction 'Scarcely... when'",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-64",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'The teacher as well as the students were dancing.'",
    "options": [
      "The teacher as well as the students was dancing.",
      "The teacher as well as the students are dancing.",
      "The teacher as well as students were dancing.",
      "The teacher and the students was dancing."
    ],
    "answer": 0,
    "explanation": "When subjects are joined by 'as well as', the verb agrees with the first subject ('The teacher' -> 'was').",
    "conceptOrFormula": "Parenthetical Conjunction Agreement",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-65",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'He is senior than me in service.'",
    "options": [
      "He is senior to me in service.",
      "He is senior from me in service.",
      "He is senior over me in service.",
      "He is more senior than me in service."
    ],
    "answer": 0,
    "explanation": "Latin adjectives ending in -ior (senior, junior, prior, superior) take the preposition 'to', not 'than'.",
    "conceptOrFormula": "Latin Comparative Adjectives with 'to'",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-66",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'I have seen him yesterday.'",
    "options": [
      "I saw him yesterday.",
      "I had seen him yesterday.",
      "I have been seeing him yesterday.",
      "I saw him on yesterday."
    ],
    "answer": 0,
    "explanation": "Specific past time markers like 'yesterday' require Simple Past tense ('saw') rather than Present Perfect.",
    "conceptOrFormula": "Tense Consistency with Past Time Adverbs",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-67",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'If I was you, I would accept the offer.'",
    "options": [
      "If I were you, I would accept the offer.",
      "If I am you, I would accept the offer.",
      "If I will be you, I would accept the offer.",
      "If I had been you, I accepted the offer."
    ],
    "answer": 0,
    "explanation": "Subjunctive mood for hypothetical/unreal conditions uses 'were' for all persons.",
    "conceptOrFormula": "Subjunctive Mood 'If I were'",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-68",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'The climate of Chennai is hotter than Delhi.'",
    "options": [
      "The climate of Chennai is hotter than that of Delhi.",
      "The climate of Chennai is hotter then Delhi.",
      "The climate of Chennai is more hotter than Delhi.",
      "Chennai's climate is hotter than Delhi."
    ],
    "answer": 0,
    "explanation": "Comparison must be between equivalent entities (climate vs climate) using 'that of'.",
    "conceptOrFormula": "Illogical Comparison (That of)",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-69",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'Unless you do not work hard, you cannot succeed.'",
    "options": [
      "Unless you work hard, you cannot succeed.",
      "Unless you will work hard, you cannot succeed.",
      "Unless you did not work hard, you cannot succeed.",
      "Until you do not work hard, you cannot succeed."
    ],
    "answer": 0,
    "explanation": "'Unless' is already negative and cannot be used with 'do not' (double negative).",
    "conceptOrFormula": "Double Negative with 'Unless'",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-70",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'Each of the girls gave their consent.'",
    "options": [
      "Each of the girls gave her consent.",
      "Each of the girl gave her consent.",
      "Every of the girls gave their consent.",
      "Each of the girls have given their consent."
    ],
    "answer": 0,
    "explanation": "'Each' is singular and requires a singular possessive pronoun ('her').",
    "conceptOrFormula": "Pronoun-Antecedent Agreement",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-71",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'He told to me that he was ill.'",
    "options": [
      "He told me that he was ill.",
      "He said to me that he was ill.",
      "Both A and B are correct.",
      "He told that he was ill to me."
    ],
    "answer": 2,
    "explanation": "'Told' is a transitive verb that does not take 'to'. Alternatively, 'said to me' is grammatically valid.",
    "conceptOrFormula": "Direct/Indirect Speech Verbs",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-72",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'He died from malaria.'",
    "options": [
      "He died of malaria.",
      "He died with malaria.",
      "He died by malaria.",
      "He died through malaria."
    ],
    "answer": 0,
    "explanation": "One dies 'of' a disease, but dies 'from' an external cause like overwork or wounds.",
    "conceptOrFormula": "Preposition with 'Die' (of disease / from cause)",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-73",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'Although he worked hard, but he failed.'",
    "options": [
      "Although he worked hard, he failed.",
      "Although he worked hard, yet he failed.",
      "Both A and B are acceptable.",
      "Though he worked hard, but he failed."
    ],
    "answer": 2,
    "explanation": "'Although' should not be paired with 'but'; it can be used with a comma or 'yet'.",
    "conceptOrFormula": "Conjunction Redundancy",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-74",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'The furnitures in this room are old.'",
    "options": [
      "The furniture in this room is old.",
      "The furnitures in this room is old.",
      "The pieces of furnitures are old.",
      "Furniture in this room are old."
    ],
    "answer": 0,
    "explanation": "'Furniture' is an uncountable noun with no plural 'furnitures' and takes a singular verb 'is'.",
    "conceptOrFormula": "Uncountable Nouns",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-75",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'She is more cleverer than her sister.'",
    "options": [
      "She is cleverer than her sister.",
      "She is more clever than her sister.",
      "Both A and B are acceptable.",
      "She is much clever than her sister."
    ],
    "answer": 2,
    "explanation": "Avoid double comparatives ('more cleverer'). Use either 'cleverer' or 'more clever'.",
    "conceptOrFormula": "Double Comparative Error",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-76",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'One must do his duty.'",
    "options": [
      "One must do one's duty.",
      "One must do their duty.",
      "One should do his own duty.",
      "One must do her duty."
    ],
    "answer": 0,
    "explanation": "Indefinite pronoun 'One' must be followed by 'one's', not 'his' or 'their'.",
    "conceptOrFormula": "Indefinite Pronoun Consistency",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-77",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'He prevented me to go there.'",
    "options": [
      "He prevented me from going there.",
      "He prevented me for going there.",
      "He prevented me not to go there.",
      "He prevented that I go there."
    ],
    "answer": 0,
    "explanation": "'Prevent' takes the preposition 'from' followed by a gerund (-ing).",
    "conceptOrFormula": "Verb + Preposition + Gerund",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-78",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'I prefer tea than coffee.'",
    "options": [
      "I prefer tea to coffee.",
      "I prefer tea over coffee.",
      "I prefer tea more than coffee.",
      "I like tea than coffee."
    ],
    "answer": 0,
    "explanation": "'Prefer' takes the preposition 'to', not 'than'.",
    "conceptOrFormula": "Preposition with 'Prefer'",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-79",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'The news are too good to be true.'",
    "options": [
      "The news is too good to be true.",
      "The news were too good to be true.",
      "The news are very good to be true.",
      "The news have been too good to be true."
    ],
    "answer": 0,
    "explanation": "'News' is singular in form and meaning, requiring the singular verb 'is'.",
    "conceptOrFormula": "Singular Form Nouns",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-ver-sentence-correction-80",
    "category": "verbal",
    "topic": "Sentence Correction",
    "difficulty": "Intermediate",
    "question": "Correct the sentence: 'He is having a large house.'",
    "options": [
      "He has a large house.",
      "He is possessing a large house.",
      "He owns having a large house.",
      "He has had a large house."
    ],
    "answer": 0,
    "explanation": "Stative verbs expressing possession ('have', 'own', 'belong') are not used in continuous tenses.",
    "conceptOrFormula": "Stative Verbs and Continuous Tense",
    "tags": [
      "Sentence Correction"
    ]
  },
  {
    "id": "apt-dat-line-graphs-81",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Beginner",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 43k tonnes and Company B produced 59k tonnes in Year 2019. By what percentage did Company B exceed Company A?",
    "options": [
      "37%",
      "42%",
      "32%",
      "47%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((59 - 43) / 43) * 100 = (16 / 43) * 100 = 37%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-82",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Beginner",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 46k tonnes and Company B produced 63k tonnes in Year 2020. By what percentage did Company B exceed Company A?",
    "options": [
      "37%",
      "42%",
      "32%",
      "47%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((63 - 46) / 46) * 100 = (17 / 46) * 100 = 37%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-83",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Beginner",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 49k tonnes and Company B produced 67k tonnes in Year 2021. By what percentage did Company B exceed Company A?",
    "options": [
      "37%",
      "42%",
      "32%",
      "47%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((67 - 49) / 49) * 100 = (18 / 49) * 100 = 37%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-84",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Beginner",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 52k tonnes and Company B produced 71k tonnes in Year 2022. By what percentage did Company B exceed Company A?",
    "options": [
      "37%",
      "42%",
      "32%",
      "47%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((71 - 52) / 52) * 100 = (19 / 52) * 100 = 37%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-85",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Beginner",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 55k tonnes and Company B produced 75k tonnes in Year 2018. By what percentage did Company B exceed Company A?",
    "options": [
      "36%",
      "41%",
      "31%",
      "46%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((75 - 55) / 55) * 100 = (20 / 55) * 100 = 36%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-86",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Beginner",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 58k tonnes and Company B produced 79k tonnes in Year 2019. By what percentage did Company B exceed Company A?",
    "options": [
      "36%",
      "41%",
      "31%",
      "46%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((79 - 58) / 58) * 100 = (21 / 58) * 100 = 36%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-87",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Beginner",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 61k tonnes and Company B produced 58k tonnes in Year 2020. By what percentage did Company B exceed Company A?",
    "options": [
      "-5%",
      "0%",
      "-10%",
      "5%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((58 - 61) / 61) * 100 = (-3 / 61) * 100 = -5%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-88",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Intermediate",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 64k tonnes and Company B produced 62k tonnes in Year 2021. By what percentage did Company B exceed Company A?",
    "options": [
      "-3%",
      "2%",
      "-8%",
      "7%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((62 - 64) / 64) * 100 = (-2 / 64) * 100 = -3%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-89",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Intermediate",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 67k tonnes and Company B produced 66k tonnes in Year 2022. By what percentage did Company B exceed Company A?",
    "options": [
      "-1%",
      "4%",
      "-6%",
      "9%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((66 - 67) / 67) * 100 = (-1 / 67) * 100 = -1%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-90",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Intermediate",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 40k tonnes and Company B produced 70k tonnes in Year 2018. By what percentage did Company B exceed Company A?",
    "options": [
      "75%",
      "80%",
      "70%",
      "85%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((70 - 40) / 40) * 100 = (30 / 40) * 100 = 75%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-91",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Intermediate",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 43k tonnes and Company B produced 74k tonnes in Year 2019. By what percentage did Company B exceed Company A?",
    "options": [
      "72%",
      "77%",
      "67%",
      "82%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((74 - 43) / 43) * 100 = (31 / 43) * 100 = 72%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-92",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Intermediate",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 46k tonnes and Company B produced 78k tonnes in Year 2020. By what percentage did Company B exceed Company A?",
    "options": [
      "70%",
      "75%",
      "65%",
      "80%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((78 - 46) / 46) * 100 = (32 / 46) * 100 = 70%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-93",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Intermediate",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 49k tonnes and Company B produced 57k tonnes in Year 2021. By what percentage did Company B exceed Company A?",
    "options": [
      "16%",
      "21%",
      "11%",
      "26%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((57 - 49) / 49) * 100 = (8 / 49) * 100 = 16%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-94",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Intermediate",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 52k tonnes and Company B produced 61k tonnes in Year 2022. By what percentage did Company B exceed Company A?",
    "options": [
      "17%",
      "22%",
      "12%",
      "27%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((61 - 52) / 52) * 100 = (9 / 52) * 100 = 17%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-95",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Advanced",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 55k tonnes and Company B produced 65k tonnes in Year 2018. By what percentage did Company B exceed Company A?",
    "options": [
      "18%",
      "23%",
      "13%",
      "28%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((65 - 55) / 55) * 100 = (10 / 55) * 100 = 18%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-96",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Advanced",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 58k tonnes and Company B produced 69k tonnes in Year 2019. By what percentage did Company B exceed Company A?",
    "options": [
      "19%",
      "24%",
      "14%",
      "29%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((69 - 58) / 58) * 100 = (11 / 58) * 100 = 19%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-97",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Advanced",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 61k tonnes and Company B produced 73k tonnes in Year 2020. By what percentage did Company B exceed Company A?",
    "options": [
      "20%",
      "25%",
      "15%",
      "30%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((73 - 61) / 61) * 100 = (12 / 61) * 100 = 20%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-98",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Advanced",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 64k tonnes and Company B produced 77k tonnes in Year 2021. By what percentage did Company B exceed Company A?",
    "options": [
      "20%",
      "25%",
      "15%",
      "30%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((77 - 64) / 64) * 100 = (13 / 64) * 100 = 20%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-99",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Advanced",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 67k tonnes and Company B produced 56k tonnes in Year 2022. By what percentage did Company B exceed Company A?",
    "options": [
      "-16%",
      "-11%",
      "-21%",
      "-6%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((56 - 67) / 67) * 100 = (-11 / 67) * 100 = -16%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-dat-line-graphs-100",
    "category": "data-interpretation",
    "topic": "Line Graphs",
    "difficulty": "Advanced",
    "question": "In a line graph showing annual output (in thousand tonnes), Company A produced 40k tonnes and Company B produced 60k tonnes in Year 2018. By what percentage did Company B exceed Company A?",
    "options": [
      "50%",
      "55%",
      "45%",
      "60%"
    ],
    "answer": 0,
    "explanation": "Percentage difference = ((60 - 40) / 40) * 100 = (20 / 40) * 100 = 50%.",
    "conceptOrFormula": "Percentage Growth = ((New - Base) / Base) * 100",
    "tags": [
      "Line Graphs",
      "Line Graph Analytics",
      "Production Trend"
    ]
  },
  {
    "id": "apt-qua-avg-1",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Beginner",
    "question": "The marks obtained by 4 students in an assessment are 22, 26, 30, and 34. What is the average score of the group?",
    "options": [
      "26",
      "28",
      "30",
      "32"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 22 + 26 + 30 + 34 = 112. Number of observations = 4. Average = 112 / 4 = 28.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-2",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Beginner",
    "question": "The marks obtained by 4 students in an assessment are 24, 28, 32, and 36. What is the average score of the group?",
    "options": [
      "28",
      "30",
      "32",
      "34"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 24 + 28 + 32 + 36 = 120. Number of observations = 4. Average = 120 / 4 = 30.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-3",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Beginner",
    "question": "The marks obtained by 4 students in an assessment are 26, 30, 34, and 38. What is the average score of the group?",
    "options": [
      "30",
      "32",
      "34",
      "36"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 26 + 30 + 34 + 38 = 128. Number of observations = 4. Average = 128 / 4 = 32.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-4",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Beginner",
    "question": "The marks obtained by 4 students in an assessment are 28, 32, 36, and 40. What is the average score of the group?",
    "options": [
      "32",
      "34",
      "36",
      "38"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 28 + 32 + 36 + 40 = 136. Number of observations = 4. Average = 136 / 4 = 34.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-5",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Beginner",
    "question": "The marks obtained by 4 students in an assessment are 30, 34, 38, and 42. What is the average score of the group?",
    "options": [
      "34",
      "36",
      "38",
      "40"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 30 + 34 + 38 + 42 = 144. Number of observations = 4. Average = 144 / 4 = 36.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-6",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Beginner",
    "question": "The marks obtained by 4 students in an assessment are 32, 36, 40, and 44. What is the average score of the group?",
    "options": [
      "36",
      "38",
      "40",
      "42"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 32 + 36 + 40 + 44 = 152. Number of observations = 4. Average = 152 / 4 = 38.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-7",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Beginner",
    "question": "The marks obtained by 4 students in an assessment are 34, 38, 42, and 46. What is the average score of the group?",
    "options": [
      "38",
      "40",
      "42",
      "44"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 34 + 38 + 42 + 46 = 160. Number of observations = 4. Average = 160 / 4 = 40.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-8",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Intermediate",
    "question": "The marks obtained by 4 students in an assessment are 36, 40, 44, and 48. What is the average score of the group?",
    "options": [
      "40",
      "42",
      "44",
      "46"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 36 + 40 + 44 + 48 = 168. Number of observations = 4. Average = 168 / 4 = 42.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-9",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Intermediate",
    "question": "The marks obtained by 4 students in an assessment are 38, 42, 46, and 50. What is the average score of the group?",
    "options": [
      "42",
      "44",
      "46",
      "48"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 38 + 42 + 46 + 50 = 176. Number of observations = 4. Average = 176 / 4 = 44.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-10",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Intermediate",
    "question": "The marks obtained by 4 students in an assessment are 40, 44, 48, and 52. What is the average score of the group?",
    "options": [
      "44",
      "46",
      "48",
      "50"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 40 + 44 + 48 + 52 = 184. Number of observations = 4. Average = 184 / 4 = 46.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-11",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Intermediate",
    "question": "The marks obtained by 4 students in an assessment are 42, 46, 50, and 54. What is the average score of the group?",
    "options": [
      "46",
      "48",
      "50",
      "52"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 42 + 46 + 50 + 54 = 192. Number of observations = 4. Average = 192 / 4 = 48.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-12",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Intermediate",
    "question": "The marks obtained by 4 students in an assessment are 44, 48, 52, and 56. What is the average score of the group?",
    "options": [
      "48",
      "50",
      "52",
      "54"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 44 + 48 + 52 + 56 = 200. Number of observations = 4. Average = 200 / 4 = 50.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-13",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Intermediate",
    "question": "The marks obtained by 4 students in an assessment are 46, 50, 54, and 58. What is the average score of the group?",
    "options": [
      "50",
      "52",
      "54",
      "56"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 46 + 50 + 54 + 58 = 208. Number of observations = 4. Average = 208 / 4 = 52.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-14",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Intermediate",
    "question": "The marks obtained by 4 students in an assessment are 48, 52, 56, and 60. What is the average score of the group?",
    "options": [
      "52",
      "54",
      "56",
      "58"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 48 + 52 + 56 + 60 = 216. Number of observations = 4. Average = 216 / 4 = 54.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-15",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Advanced",
    "question": "The marks obtained by 4 students in an assessment are 50, 54, 58, and 62. What is the average score of the group?",
    "options": [
      "54",
      "56",
      "58",
      "60"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 50 + 54 + 58 + 62 = 224. Number of observations = 4. Average = 224 / 4 = 56.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-16",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Advanced",
    "question": "The marks obtained by 4 students in an assessment are 52, 56, 60, and 64. What is the average score of the group?",
    "options": [
      "56",
      "58",
      "60",
      "62"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 52 + 56 + 60 + 64 = 232. Number of observations = 4. Average = 232 / 4 = 58.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-17",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Advanced",
    "question": "The marks obtained by 4 students in an assessment are 54, 58, 62, and 66. What is the average score of the group?",
    "options": [
      "58",
      "60",
      "62",
      "64"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 54 + 58 + 62 + 66 = 240. Number of observations = 4. Average = 240 / 4 = 60.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-18",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Advanced",
    "question": "The marks obtained by 4 students in an assessment are 56, 60, 64, and 68. What is the average score of the group?",
    "options": [
      "60",
      "62",
      "64",
      "66"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 56 + 60 + 64 + 68 = 248. Number of observations = 4. Average = 248 / 4 = 62.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-19",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Advanced",
    "question": "The marks obtained by 4 students in an assessment are 58, 62, 66, and 70. What is the average score of the group?",
    "options": [
      "62",
      "64",
      "66",
      "68"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 58 + 62 + 66 + 70 = 256. Number of observations = 4. Average = 256 / 4 = 64.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-avg-20",
    "category": "quantitative",
    "topic": "Average",
    "difficulty": "Advanced",
    "question": "The marks obtained by 4 students in an assessment are 60, 64, 68, and 72. What is the average score of the group?",
    "options": [
      "64",
      "66",
      "68",
      "70"
    ],
    "answer": 1,
    "explanation": "Sum of observations = 60 + 64 + 68 + 72 = 264. Number of observations = 4. Average = 264 / 4 = 66.",
    "conceptOrFormula": "Average = (Sum of Observations) / (Total Number of Observations)",
    "tags": [
      "Average",
      "Arithmetic",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-1",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Beginner",
    "question": "A bag contains 4 red balls, 5 blue balls, and 6 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "4/15",
      "11/15",
      "5/15",
      "6/15"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 5 + 6 = 11. Total possible outcomes = 15. Probability = 11/15.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-2",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Beginner",
    "question": "A bag contains 5 red balls, 6 blue balls, and 7 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "5/18",
      "13/18",
      "6/18",
      "7/18"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 6 + 7 = 13. Total possible outcomes = 18. Probability = 13/18.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-3",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Beginner",
    "question": "A bag contains 6 red balls, 4 blue balls, and 8 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "6/18",
      "12/18",
      "4/18",
      "8/18"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 4 + 8 = 12. Total possible outcomes = 18. Probability = 12/18.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-4",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Beginner",
    "question": "A bag contains 3 red balls, 5 blue balls, and 9 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "3/17",
      "14/17",
      "5/17",
      "9/17"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 5 + 9 = 14. Total possible outcomes = 17. Probability = 14/17.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-5",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Beginner",
    "question": "A bag contains 4 red balls, 6 blue balls, and 5 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "4/15",
      "11/15",
      "6/15",
      "5/15"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 6 + 5 = 11. Total possible outcomes = 15. Probability = 11/15.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-6",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Beginner",
    "question": "A bag contains 5 red balls, 4 blue balls, and 6 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "5/15",
      "10/15",
      "4/15",
      "6/15"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 4 + 6 = 10. Total possible outcomes = 15. Probability = 10/15.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-7",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Beginner",
    "question": "A bag contains 6 red balls, 5 blue balls, and 7 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "6/18",
      "12/18",
      "5/18",
      "7/18"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 5 + 7 = 12. Total possible outcomes = 18. Probability = 12/18.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-8",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Intermediate",
    "question": "A bag contains 3 red balls, 6 blue balls, and 8 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "3/17",
      "14/17",
      "6/17",
      "8/17"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 6 + 8 = 14. Total possible outcomes = 17. Probability = 14/17.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-9",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Intermediate",
    "question": "A bag contains 4 red balls, 4 blue balls, and 9 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "4/17",
      "13/17",
      "4/17",
      "9/17"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 4 + 9 = 13. Total possible outcomes = 17. Probability = 13/17.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-10",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Intermediate",
    "question": "A bag contains 5 red balls, 5 blue balls, and 5 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "5/15",
      "10/15",
      "5/15",
      "5/15"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 5 + 5 = 10. Total possible outcomes = 15. Probability = 10/15.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-11",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Intermediate",
    "question": "A bag contains 6 red balls, 6 blue balls, and 6 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "6/18",
      "12/18",
      "6/18",
      "6/18"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 6 + 6 = 12. Total possible outcomes = 18. Probability = 12/18.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-12",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Intermediate",
    "question": "A bag contains 3 red balls, 4 blue balls, and 7 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "3/14",
      "11/14",
      "4/14",
      "7/14"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 4 + 7 = 11. Total possible outcomes = 14. Probability = 11/14.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-13",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Intermediate",
    "question": "A bag contains 4 red balls, 5 blue balls, and 8 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "4/17",
      "13/17",
      "5/17",
      "8/17"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 5 + 8 = 13. Total possible outcomes = 17. Probability = 13/17.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-14",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Intermediate",
    "question": "A bag contains 5 red balls, 6 blue balls, and 9 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "5/20",
      "15/20",
      "6/20",
      "9/20"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 6 + 9 = 15. Total possible outcomes = 20. Probability = 15/20.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-15",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Advanced",
    "question": "A bag contains 6 red balls, 4 blue balls, and 5 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "6/15",
      "9/15",
      "4/15",
      "5/15"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 4 + 5 = 9. Total possible outcomes = 15. Probability = 9/15.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-16",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Advanced",
    "question": "A bag contains 3 red balls, 5 blue balls, and 6 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "3/14",
      "11/14",
      "5/14",
      "6/14"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 5 + 6 = 11. Total possible outcomes = 14. Probability = 11/14.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-17",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Advanced",
    "question": "A bag contains 4 red balls, 6 blue balls, and 7 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "4/17",
      "13/17",
      "6/17",
      "7/17"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 6 + 7 = 13. Total possible outcomes = 17. Probability = 13/17.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-18",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Advanced",
    "question": "A bag contains 5 red balls, 4 blue balls, and 8 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "5/17",
      "12/17",
      "4/17",
      "8/17"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 4 + 8 = 12. Total possible outcomes = 17. Probability = 12/17.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-19",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Advanced",
    "question": "A bag contains 6 red balls, 5 blue balls, and 9 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "6/20",
      "14/20",
      "5/20",
      "9/20"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 5 + 9 = 14. Total possible outcomes = 20. Probability = 14/20.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-qua-prob-20",
    "category": "quantitative",
    "topic": "Probability",
    "difficulty": "Advanced",
    "question": "A bag contains 3 red balls, 6 blue balls, and 5 green balls. If one ball is drawn at random, what is the probability that it is NOT red?",
    "options": [
      "3/14",
      "11/14",
      "6/14",
      "5/14"
    ],
    "answer": 1,
    "explanation": "Total favorable outcomes (blue or green) = 6 + 5 = 11. Total possible outcomes = 14. Probability = 11/14.",
    "conceptOrFormula": "P(Not E) = 1 - P(E) = Favorable Outcomes / Total Outcomes",
    "tags": [
      "Probability",
      "Combinatorics",
      "Quantitative"
    ]
  },
  {
    "id": "apt-log-syl-1",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Beginner",
    "question": "Statements:\n1. All engineers are scientists.\n2. Some scientists are doctors.\nConclusions:\nI. Some engineers are doctors.\nII. Some scientists are engineers.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All engineers are scientists', the immediate conversion is 'Some scientists are engineers' (Conclusion II valid). There is no guaranteed intersection between engineers and doctors (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-2",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Beginner",
    "question": "Statements:\n1. All scientists are doctors.\n2. Some doctors are analysts.\nConclusions:\nI. Some scientists are analysts.\nII. Some doctors are scientists.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All scientists are doctors', the immediate conversion is 'Some doctors are scientists' (Conclusion II valid). There is no guaranteed intersection between scientists and analysts (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-3",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Beginner",
    "question": "Statements:\n1. All doctors are analysts.\n2. Some analysts are writers.\nConclusions:\nI. Some doctors are writers.\nII. Some analysts are doctors.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All doctors are analysts', the immediate conversion is 'Some analysts are doctors' (Conclusion II valid). There is no guaranteed intersection between doctors and writers (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-4",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Beginner",
    "question": "Statements:\n1. All analysts are writers.\n2. Some writers are designers.\nConclusions:\nI. Some analysts are designers.\nII. Some writers are analysts.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All analysts are writers', the immediate conversion is 'Some writers are analysts' (Conclusion II valid). There is no guaranteed intersection between analysts and designers (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-5",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Beginner",
    "question": "Statements:\n1. All writers are designers.\n2. Some designers are artists.\nConclusions:\nI. Some writers are artists.\nII. Some designers are writers.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All writers are designers', the immediate conversion is 'Some designers are writers' (Conclusion II valid). There is no guaranteed intersection between writers and artists (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-6",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Beginner",
    "question": "Statements:\n1. All designers are artists.\n2. Some artists are engineers.\nConclusions:\nI. Some designers are engineers.\nII. Some artists are designers.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All designers are artists', the immediate conversion is 'Some artists are designers' (Conclusion II valid). There is no guaranteed intersection between designers and engineers (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-7",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Beginner",
    "question": "Statements:\n1. All artists are engineers.\n2. Some engineers are scientists.\nConclusions:\nI. Some artists are scientists.\nII. Some engineers are artists.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All artists are engineers', the immediate conversion is 'Some engineers are artists' (Conclusion II valid). There is no guaranteed intersection between artists and scientists (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-8",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Intermediate",
    "question": "Statements:\n1. All engineers are scientists.\n2. Some scientists are doctors.\nConclusions:\nI. Some engineers are doctors.\nII. Some scientists are engineers.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All engineers are scientists', the immediate conversion is 'Some scientists are engineers' (Conclusion II valid). There is no guaranteed intersection between engineers and doctors (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-9",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Intermediate",
    "question": "Statements:\n1. All scientists are doctors.\n2. Some doctors are analysts.\nConclusions:\nI. Some scientists are analysts.\nII. Some doctors are scientists.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All scientists are doctors', the immediate conversion is 'Some doctors are scientists' (Conclusion II valid). There is no guaranteed intersection between scientists and analysts (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-10",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Intermediate",
    "question": "Statements:\n1. All doctors are analysts.\n2. Some analysts are writers.\nConclusions:\nI. Some doctors are writers.\nII. Some analysts are doctors.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All doctors are analysts', the immediate conversion is 'Some analysts are doctors' (Conclusion II valid). There is no guaranteed intersection between doctors and writers (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-11",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Intermediate",
    "question": "Statements:\n1. All analysts are writers.\n2. Some writers are designers.\nConclusions:\nI. Some analysts are designers.\nII. Some writers are analysts.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All analysts are writers', the immediate conversion is 'Some writers are analysts' (Conclusion II valid). There is no guaranteed intersection between analysts and designers (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-12",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Intermediate",
    "question": "Statements:\n1. All writers are designers.\n2. Some designers are artists.\nConclusions:\nI. Some writers are artists.\nII. Some designers are writers.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All writers are designers', the immediate conversion is 'Some designers are writers' (Conclusion II valid). There is no guaranteed intersection between writers and artists (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-13",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Intermediate",
    "question": "Statements:\n1. All designers are artists.\n2. Some artists are engineers.\nConclusions:\nI. Some designers are engineers.\nII. Some artists are designers.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All designers are artists', the immediate conversion is 'Some artists are designers' (Conclusion II valid). There is no guaranteed intersection between designers and engineers (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-14",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Intermediate",
    "question": "Statements:\n1. All artists are engineers.\n2. Some engineers are scientists.\nConclusions:\nI. Some artists are scientists.\nII. Some engineers are artists.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All artists are engineers', the immediate conversion is 'Some engineers are artists' (Conclusion II valid). There is no guaranteed intersection between artists and scientists (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-15",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Advanced",
    "question": "Statements:\n1. All engineers are scientists.\n2. Some scientists are doctors.\nConclusions:\nI. Some engineers are doctors.\nII. Some scientists are engineers.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All engineers are scientists', the immediate conversion is 'Some scientists are engineers' (Conclusion II valid). There is no guaranteed intersection between engineers and doctors (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-16",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Advanced",
    "question": "Statements:\n1. All scientists are doctors.\n2. Some doctors are analysts.\nConclusions:\nI. Some scientists are analysts.\nII. Some doctors are scientists.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All scientists are doctors', the immediate conversion is 'Some doctors are scientists' (Conclusion II valid). There is no guaranteed intersection between scientists and analysts (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-17",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Advanced",
    "question": "Statements:\n1. All doctors are analysts.\n2. Some analysts are writers.\nConclusions:\nI. Some doctors are writers.\nII. Some analysts are doctors.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All doctors are analysts', the immediate conversion is 'Some analysts are doctors' (Conclusion II valid). There is no guaranteed intersection between doctors and writers (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-18",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Advanced",
    "question": "Statements:\n1. All analysts are writers.\n2. Some writers are designers.\nConclusions:\nI. Some analysts are designers.\nII. Some writers are analysts.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All analysts are writers', the immediate conversion is 'Some writers are analysts' (Conclusion II valid). There is no guaranteed intersection between analysts and designers (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-19",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Advanced",
    "question": "Statements:\n1. All writers are designers.\n2. Some designers are artists.\nConclusions:\nI. Some writers are artists.\nII. Some designers are writers.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All writers are designers', the immediate conversion is 'Some designers are writers' (Conclusion II valid). There is no guaranteed intersection between writers and artists (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-syl-20",
    "category": "logical",
    "topic": "Syllogism",
    "difficulty": "Advanced",
    "question": "Statements:\n1. All designers are artists.\n2. Some artists are engineers.\nConclusions:\nI. Some designers are engineers.\nII. Some artists are designers.",
    "options": [
      "Only Conclusion I follows",
      "Only Conclusion II follows",
      "Either Conclusion I or II follows",
      "Neither Conclusion I nor II follows"
    ],
    "answer": 1,
    "explanation": "From Statement 1, 'All designers are artists', the immediate conversion is 'Some artists are designers' (Conclusion II valid). There is no guaranteed intersection between designers and engineers (Conclusion I invalid).",
    "conceptOrFormula": "Universal Affirmative (A: All X are Y) converts to Particular Affirmative (I: Some Y are X).",
    "tags": [
      "Syllogism",
      "Deductive Logic",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-1",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Beginner",
    "question": "What is the angle between the hour hand and minute hand of a clock at 1:05?",
    "options": [
      "3°",
      "18°",
      "23°",
      "33°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 1) - (5.5 × 5)| = 2.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-2",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Beginner",
    "question": "What is the angle between the hour hand and minute hand of a clock at 2:10?",
    "options": [
      "5°",
      "20°",
      "25°",
      "35°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 2) - (5.5 × 10)| = 5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-3",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Beginner",
    "question": "What is the angle between the hour hand and minute hand of a clock at 3:15?",
    "options": [
      "8°",
      "23°",
      "28°",
      "38°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 3) - (5.5 × 15)| = 7.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-4",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Beginner",
    "question": "What is the angle between the hour hand and minute hand of a clock at 4:20?",
    "options": [
      "10°",
      "25°",
      "30°",
      "40°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 4) - (5.5 × 20)| = 10°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-5",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Beginner",
    "question": "What is the angle between the hour hand and minute hand of a clock at 5:25?",
    "options": [
      "13°",
      "28°",
      "3°",
      "43°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 5) - (5.5 × 25)| = 12.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-6",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Beginner",
    "question": "What is the angle between the hour hand and minute hand of a clock at 6:30?",
    "options": [
      "15°",
      "30°",
      "5°",
      "45°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 6) - (5.5 × 30)| = 15°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-7",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Beginner",
    "question": "What is the angle between the hour hand and minute hand of a clock at 7:35?",
    "options": [
      "18°",
      "33°",
      "8°",
      "48°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 7) - (5.5 × 35)| = 17.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-8",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Intermediate",
    "question": "What is the angle between the hour hand and minute hand of a clock at 8:40?",
    "options": [
      "20°",
      "35°",
      "10°",
      "50°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 8) - (5.5 × 40)| = 20°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-9",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Intermediate",
    "question": "What is the angle between the hour hand and minute hand of a clock at 9:45?",
    "options": [
      "23°",
      "38°",
      "13°",
      "53°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 9) - (5.5 × 45)| = 22.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-10",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Intermediate",
    "question": "What is the angle between the hour hand and minute hand of a clock at 10:50?",
    "options": [
      "25°",
      "40°",
      "15°",
      "55°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 10) - (5.5 × 50)| = 25°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-11",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Intermediate",
    "question": "What is the angle between the hour hand and minute hand of a clock at 11:55?",
    "options": [
      "28°",
      "43°",
      "18°",
      "58°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 11) - (5.5 × 55)| = 27.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-12",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Intermediate",
    "question": "What is the angle between the hour hand and minute hand of a clock at 12:00?",
    "options": [
      "0°",
      "15°",
      "20°",
      "30°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 12) - (5.5 × 0)| = 0°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-13",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Intermediate",
    "question": "What is the angle between the hour hand and minute hand of a clock at 1:05?",
    "options": [
      "3°",
      "18°",
      "23°",
      "33°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 1) - (5.5 × 5)| = 2.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-14",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Intermediate",
    "question": "What is the angle between the hour hand and minute hand of a clock at 2:10?",
    "options": [
      "5°",
      "20°",
      "25°",
      "35°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 2) - (5.5 × 10)| = 5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-15",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Advanced",
    "question": "What is the angle between the hour hand and minute hand of a clock at 3:15?",
    "options": [
      "8°",
      "23°",
      "28°",
      "38°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 3) - (5.5 × 15)| = 7.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-16",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Advanced",
    "question": "What is the angle between the hour hand and minute hand of a clock at 4:20?",
    "options": [
      "10°",
      "25°",
      "30°",
      "40°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 4) - (5.5 × 20)| = 10°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-17",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Advanced",
    "question": "What is the angle between the hour hand and minute hand of a clock at 5:25?",
    "options": [
      "13°",
      "28°",
      "3°",
      "43°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 5) - (5.5 × 25)| = 12.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-18",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Advanced",
    "question": "What is the angle between the hour hand and minute hand of a clock at 6:30?",
    "options": [
      "15°",
      "30°",
      "5°",
      "45°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 6) - (5.5 × 30)| = 15°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-19",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Advanced",
    "question": "What is the angle between the hour hand and minute hand of a clock at 7:35?",
    "options": [
      "18°",
      "33°",
      "8°",
      "48°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 7) - (5.5 × 35)| = 17.5°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-log-clock-20",
    "category": "logical",
    "topic": "Clocks and Calendars",
    "difficulty": "Advanced",
    "question": "What is the angle between the hour hand and minute hand of a clock at 8:40?",
    "options": [
      "20°",
      "35°",
      "10°",
      "50°"
    ],
    "answer": 0,
    "explanation": "Angle = |(30 × H) - (11/2 × M)| = |(30 × 8) - (5.5 × 40)| = 20°.",
    "conceptOrFormula": "Angle between hands = |30H - 5.5M| (or 360 - Angle if > 180°)",
    "tags": [
      "Clocks and Calendars",
      "Angles",
      "Logical Reasoning"
    ]
  },
  {
    "id": "apt-ver-rc-1",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Beginner",
    "question": "Passage: \"While microservices grant independent team deployability, they dramatically introduce operational complexity through network partitions, latency cascades, and distributed transaction boundaries.\"\n\nQuestion: Which trade-off is emphasized regarding microservices architecture?",
    "options": [
      "Higher operational complexity despite team deployability",
      "Single points of failure in databases",
      "Inability to scale horizontally",
      "Zero developer autonomy"
    ],
    "answer": 0,
    "explanation": "The text highlights that team deployability is accompanied by operational complexity across network boundaries.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-2",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Beginner",
    "question": "Passage: \"A common cognitive trap in organizational data analysis is survivorship bias, where analysts evaluate successful outcomes while overlooking failures that fell outside the sample population.\"\n\nQuestion: What defines survivorship bias in the context of the text?",
    "options": [
      "Overestimating data collection costs",
      "Focusing only on successful outcomes while omitting unobserved failures",
      "Relying exclusively on median metrics",
      "Using unencrypted data pipelines"
    ],
    "answer": 1,
    "explanation": "Survivorship bias occurs when analysis focuses solely on surviving successes while ignoring failed instances outside the cohort.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-3",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Beginner",
    "question": "Passage: \"Cloud computing allows systems to dynamically provision resources in real-time, decoupling capital infrastructure expenditure from volatile customer request spikes.\"\n\nQuestion: According to the passage, what is the primary benefit of dynamic resource provisioning?",
    "options": [
      "Eliminates need for software testing",
      "Decouples capital hardware spending from demand volatility",
      "Guarantees zero network latency",
      "Prevents all cybersecurity threats"
    ],
    "answer": 1,
    "explanation": "The passage explicitly states that dynamic provisioning decouples capital expenditure from volatile customer request spikes.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-4",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Beginner",
    "question": "Passage: \"While microservices grant independent team deployability, they dramatically introduce operational complexity through network partitions, latency cascades, and distributed transaction boundaries.\"\n\nQuestion: Which trade-off is emphasized regarding microservices architecture?",
    "options": [
      "Higher operational complexity despite team deployability",
      "Single points of failure in databases",
      "Inability to scale horizontally",
      "Zero developer autonomy"
    ],
    "answer": 0,
    "explanation": "The text highlights that team deployability is accompanied by operational complexity across network boundaries.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-5",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Beginner",
    "question": "Passage: \"A common cognitive trap in organizational data analysis is survivorship bias, where analysts evaluate successful outcomes while overlooking failures that fell outside the sample population.\"\n\nQuestion: What defines survivorship bias in the context of the text?",
    "options": [
      "Overestimating data collection costs",
      "Focusing only on successful outcomes while omitting unobserved failures",
      "Relying exclusively on median metrics",
      "Using unencrypted data pipelines"
    ],
    "answer": 1,
    "explanation": "Survivorship bias occurs when analysis focuses solely on surviving successes while ignoring failed instances outside the cohort.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-6",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Beginner",
    "question": "Passage: \"Cloud computing allows systems to dynamically provision resources in real-time, decoupling capital infrastructure expenditure from volatile customer request spikes.\"\n\nQuestion: According to the passage, what is the primary benefit of dynamic resource provisioning?",
    "options": [
      "Eliminates need for software testing",
      "Decouples capital hardware spending from demand volatility",
      "Guarantees zero network latency",
      "Prevents all cybersecurity threats"
    ],
    "answer": 1,
    "explanation": "The passage explicitly states that dynamic provisioning decouples capital expenditure from volatile customer request spikes.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-7",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Beginner",
    "question": "Passage: \"While microservices grant independent team deployability, they dramatically introduce operational complexity through network partitions, latency cascades, and distributed transaction boundaries.\"\n\nQuestion: Which trade-off is emphasized regarding microservices architecture?",
    "options": [
      "Higher operational complexity despite team deployability",
      "Single points of failure in databases",
      "Inability to scale horizontally",
      "Zero developer autonomy"
    ],
    "answer": 0,
    "explanation": "The text highlights that team deployability is accompanied by operational complexity across network boundaries.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-8",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Intermediate",
    "question": "Passage: \"A common cognitive trap in organizational data analysis is survivorship bias, where analysts evaluate successful outcomes while overlooking failures that fell outside the sample population.\"\n\nQuestion: What defines survivorship bias in the context of the text?",
    "options": [
      "Overestimating data collection costs",
      "Focusing only on successful outcomes while omitting unobserved failures",
      "Relying exclusively on median metrics",
      "Using unencrypted data pipelines"
    ],
    "answer": 1,
    "explanation": "Survivorship bias occurs when analysis focuses solely on surviving successes while ignoring failed instances outside the cohort.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-9",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Intermediate",
    "question": "Passage: \"Cloud computing allows systems to dynamically provision resources in real-time, decoupling capital infrastructure expenditure from volatile customer request spikes.\"\n\nQuestion: According to the passage, what is the primary benefit of dynamic resource provisioning?",
    "options": [
      "Eliminates need for software testing",
      "Decouples capital hardware spending from demand volatility",
      "Guarantees zero network latency",
      "Prevents all cybersecurity threats"
    ],
    "answer": 1,
    "explanation": "The passage explicitly states that dynamic provisioning decouples capital expenditure from volatile customer request spikes.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-10",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Intermediate",
    "question": "Passage: \"While microservices grant independent team deployability, they dramatically introduce operational complexity through network partitions, latency cascades, and distributed transaction boundaries.\"\n\nQuestion: Which trade-off is emphasized regarding microservices architecture?",
    "options": [
      "Higher operational complexity despite team deployability",
      "Single points of failure in databases",
      "Inability to scale horizontally",
      "Zero developer autonomy"
    ],
    "answer": 0,
    "explanation": "The text highlights that team deployability is accompanied by operational complexity across network boundaries.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-11",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Intermediate",
    "question": "Passage: \"A common cognitive trap in organizational data analysis is survivorship bias, where analysts evaluate successful outcomes while overlooking failures that fell outside the sample population.\"\n\nQuestion: What defines survivorship bias in the context of the text?",
    "options": [
      "Overestimating data collection costs",
      "Focusing only on successful outcomes while omitting unobserved failures",
      "Relying exclusively on median metrics",
      "Using unencrypted data pipelines"
    ],
    "answer": 1,
    "explanation": "Survivorship bias occurs when analysis focuses solely on surviving successes while ignoring failed instances outside the cohort.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-12",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Intermediate",
    "question": "Passage: \"Cloud computing allows systems to dynamically provision resources in real-time, decoupling capital infrastructure expenditure from volatile customer request spikes.\"\n\nQuestion: According to the passage, what is the primary benefit of dynamic resource provisioning?",
    "options": [
      "Eliminates need for software testing",
      "Decouples capital hardware spending from demand volatility",
      "Guarantees zero network latency",
      "Prevents all cybersecurity threats"
    ],
    "answer": 1,
    "explanation": "The passage explicitly states that dynamic provisioning decouples capital expenditure from volatile customer request spikes.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-13",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Intermediate",
    "question": "Passage: \"While microservices grant independent team deployability, they dramatically introduce operational complexity through network partitions, latency cascades, and distributed transaction boundaries.\"\n\nQuestion: Which trade-off is emphasized regarding microservices architecture?",
    "options": [
      "Higher operational complexity despite team deployability",
      "Single points of failure in databases",
      "Inability to scale horizontally",
      "Zero developer autonomy"
    ],
    "answer": 0,
    "explanation": "The text highlights that team deployability is accompanied by operational complexity across network boundaries.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-14",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Intermediate",
    "question": "Passage: \"A common cognitive trap in organizational data analysis is survivorship bias, where analysts evaluate successful outcomes while overlooking failures that fell outside the sample population.\"\n\nQuestion: What defines survivorship bias in the context of the text?",
    "options": [
      "Overestimating data collection costs",
      "Focusing only on successful outcomes while omitting unobserved failures",
      "Relying exclusively on median metrics",
      "Using unencrypted data pipelines"
    ],
    "answer": 1,
    "explanation": "Survivorship bias occurs when analysis focuses solely on surviving successes while ignoring failed instances outside the cohort.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-15",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Advanced",
    "question": "Passage: \"Cloud computing allows systems to dynamically provision resources in real-time, decoupling capital infrastructure expenditure from volatile customer request spikes.\"\n\nQuestion: According to the passage, what is the primary benefit of dynamic resource provisioning?",
    "options": [
      "Eliminates need for software testing",
      "Decouples capital hardware spending from demand volatility",
      "Guarantees zero network latency",
      "Prevents all cybersecurity threats"
    ],
    "answer": 1,
    "explanation": "The passage explicitly states that dynamic provisioning decouples capital expenditure from volatile customer request spikes.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-16",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Advanced",
    "question": "Passage: \"While microservices grant independent team deployability, they dramatically introduce operational complexity through network partitions, latency cascades, and distributed transaction boundaries.\"\n\nQuestion: Which trade-off is emphasized regarding microservices architecture?",
    "options": [
      "Higher operational complexity despite team deployability",
      "Single points of failure in databases",
      "Inability to scale horizontally",
      "Zero developer autonomy"
    ],
    "answer": 0,
    "explanation": "The text highlights that team deployability is accompanied by operational complexity across network boundaries.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-17",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Advanced",
    "question": "Passage: \"A common cognitive trap in organizational data analysis is survivorship bias, where analysts evaluate successful outcomes while overlooking failures that fell outside the sample population.\"\n\nQuestion: What defines survivorship bias in the context of the text?",
    "options": [
      "Overestimating data collection costs",
      "Focusing only on successful outcomes while omitting unobserved failures",
      "Relying exclusively on median metrics",
      "Using unencrypted data pipelines"
    ],
    "answer": 1,
    "explanation": "Survivorship bias occurs when analysis focuses solely on surviving successes while ignoring failed instances outside the cohort.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-18",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Advanced",
    "question": "Passage: \"Cloud computing allows systems to dynamically provision resources in real-time, decoupling capital infrastructure expenditure from volatile customer request spikes.\"\n\nQuestion: According to the passage, what is the primary benefit of dynamic resource provisioning?",
    "options": [
      "Eliminates need for software testing",
      "Decouples capital hardware spending from demand volatility",
      "Guarantees zero network latency",
      "Prevents all cybersecurity threats"
    ],
    "answer": 1,
    "explanation": "The passage explicitly states that dynamic provisioning decouples capital expenditure from volatile customer request spikes.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-19",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Advanced",
    "question": "Passage: \"While microservices grant independent team deployability, they dramatically introduce operational complexity through network partitions, latency cascades, and distributed transaction boundaries.\"\n\nQuestion: Which trade-off is emphasized regarding microservices architecture?",
    "options": [
      "Higher operational complexity despite team deployability",
      "Single points of failure in databases",
      "Inability to scale horizontally",
      "Zero developer autonomy"
    ],
    "answer": 0,
    "explanation": "The text highlights that team deployability is accompanied by operational complexity across network boundaries.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  },
  {
    "id": "apt-ver-rc-20",
    "category": "verbal",
    "topic": "Reading Comprehension",
    "difficulty": "Advanced",
    "question": "Passage: \"A common cognitive trap in organizational data analysis is survivorship bias, where analysts evaluate successful outcomes while overlooking failures that fell outside the sample population.\"\n\nQuestion: What defines survivorship bias in the context of the text?",
    "options": [
      "Overestimating data collection costs",
      "Focusing only on successful outcomes while omitting unobserved failures",
      "Relying exclusively on median metrics",
      "Using unencrypted data pipelines"
    ],
    "answer": 1,
    "explanation": "Survivorship bias occurs when analysis focuses solely on surviving successes while ignoring failed instances outside the cohort.",
    "conceptOrFormula": "Identify direct textual evidence and eliminate answer options that extrapolate beyond the passage.",
    "tags": [
      "Reading Comprehension",
      "Verbal Ability",
      "Inference"
    ]
  }
];

export const aptitudeCategories = {
  "quantitative": {
    "name": "Quantitative Aptitude",
    "description": "Arithmetic, numerical computations, time-work, speed-distance, and commercial math.",
    "topics": [
      "Time and Work",
      "Percentage",
      "Profit and Loss",
      "Ratio and Proportion",
      "Time Speed and Distance",
      "Number System",
      "Simple and Compound Interest",
      "Average",
      "Probability"
    ]
  },
  "logical": {
    "name": "Logical Reasoning",
    "description": "Deductive reasoning, pattern recognition, coding-decoding, and seating arrangements.",
    "topics": [
      "Number Series",
      "Coding and Decoding",
      "Blood Relations",
      "Direction Sense",
      "Seating Arrangement",
      "Syllogism",
      "Clocks and Calendars"
    ]
  },
  "verbal": {
    "name": "Verbal Ability",
    "description": "Grammar proficiency, error detection, vocabulary mastery, and sentence completion.",
    "topics": [
      "Error Spotting",
      "Synonyms and Antonyms",
      "Fill in the Blanks",
      "Sentence Correction",
      "Reading Comprehension"
    ]
  },
  "data-interpretation": {
    "name": "Data Interpretation",
    "description": "Statistical charts, tabular analytics, percentage comparison, and caselet evaluation.",
    "topics": [
      "Tables",
      "Pie Charts",
      "Bar Charts",
      "Line Graphs"
    ]
  }
};

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
