// Curated LeetCode Problem Bank with public metadata and practice links
export const leetcodeProblems = [
  {
    "id": "lc-01",
    "title": "Two Sum",
    "slug": "two-sum",
    "difficulty": "Easy",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Hash Table"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Cloud Engineer",
      "Data Analyst"
    ],
    "descriptionSummary": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    "whyRecommended": "Essential foundation for hash table lookups and achieving O(N) time complexity over brute force O(N^2).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/two-sum/"
  },
  {
    "id": "lc-02",
    "title": "Contains Duplicate",
    "slug": "contains-duplicate",
    "difficulty": "Easy",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Hash Set"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "whyRecommended": "Tests understanding of Set data structures and trade-offs between sorting and hash sets.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/contains-duplicate/"
  },
  {
    "id": "lc-03",
    "title": "Valid Anagram",
    "slug": "valid-anagram",
    "difficulty": "Easy",
    "topic": "Arrays & Hashing",
    "tags": [
      "Hash Table",
      "String",
      "Sorting"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    "whyRecommended": "Core character frequency array / hash map counting pattern.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/"
  },
  {
    "id": "lc-04",
    "title": "Group Anagrams",
    "slug": "group-anagrams",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Hash Table",
      "String",
      "Sorting"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    "whyRecommended": "Tests character frequency counting or sorted string hashing as map keys in real-world data deduplication.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/group-anagrams/"
  },
  {
    "id": "lc-05",
    "title": "Top K Frequent Elements",
    "slug": "top-k-frequent-elements",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Hash Table",
      "Bucket Sort",
      "Heap"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Given an integer array nums and an integer k, return the k most frequent elements.",
    "whyRecommended": "Frequently asked in Amazon and Google interviews to evaluate bucket sort and min-heap frequency ranking.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/"
  },
  {
    "id": "lc-06",
    "title": "Product of Array Except Self",
    "slug": "product-of-array-except-self",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Prefix Sum"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements of nums except nums[i] in O(N) without division.",
    "whyRecommended": "Classic prefix and suffix product multiplication pattern essential for algorithmic problem solving.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/"
  },
  {
    "id": "lc-07",
    "title": "Longest Consecutive Sequence",
    "slug": "longest-consecutive-sequence",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Hash Table",
      "Union Find"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence in O(N) time.",
    "whyRecommended": "Mastery of intelligent HashSet boundary checks to achieve linear time on unsorted sequences.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/"
  },
  {
    "id": "lc-08",
    "title": "Encode and Decode Strings",
    "slug": "encode-and-decode-strings",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "String",
      "Design"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Design an algorithm to encode a list of strings to a string and decode that string back to the original list.",
    "whyRecommended": "Tests chunked length-prefix serialization used in network protocols and databases.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/encode-and-decode-strings/"
  },
  {
    "id": "lc-09",
    "title": "Sort Colors",
    "slug": "sort-colors",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent.",
    "whyRecommended": "Dutch National Flag algorithm partitioning three values in one pass O(N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/sort-colors/"
  },
  {
    "id": "lc-10",
    "title": "Subarray Sum Equals K",
    "slug": "subarray-sum-equals-k",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Hash Table",
      "Prefix Sum"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.",
    "whyRecommended": "Combines prefix sum computation with hash map frequency lookups in O(N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/"
  },
  {
    "id": "lc-11",
    "title": "First Missing Positive",
    "slug": "first-missing-positive",
    "difficulty": "Hard",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Hash Table"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an unsorted integer array nums, return the smallest missing positive integer in O(N) time and O(1) auxiliary space.",
    "whyRecommended": "Advanced array index cycle placement technique for in-place constant space indexing.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/first-missing-positive/"
  },
  {
    "id": "lc-12",
    "title": "Merge Intervals",
    "slug": "merge-intervals",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Sorting"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Cloud Engineer"
    ],
    "descriptionSummary": "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
    "whyRecommended": "Critical interval scheduling and sorting pattern frequently asked in system telemetry design.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/"
  },
  {
    "id": "lc-13",
    "title": "Valid Palindrome",
    "slug": "valid-palindrome",
    "difficulty": "Easy",
    "topic": "Two Pointers",
    "tags": [
      "Two Pointers",
      "String"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "A phrase is a palindrome if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.",
    "whyRecommended": "Core two-pointer convergence pattern verifying character validity and boundary checks.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/"
  },
  {
    "id": "lc-14",
    "title": "Two Sum II - Input Array Is Sorted",
    "slug": "two-sum-ii-input-array-is-sorted",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "tags": [
      "Array",
      "Two Pointers",
      "Binary Search"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.",
    "whyRecommended": "Two-pointer inward scanning leveraging sorted array properties in O(N) and O(1) space.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
  },
  {
    "id": "lc-15",
    "title": "3Sum",
    "slug": "3sum",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "tags": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that they add up to 0 without duplicates.",
    "whyRecommended": "High-frequency interview question combining array sorting with two-pointer inward scanning and duplicate avoidance.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/3sum/"
  },
  {
    "id": "lc-16",
    "title": "Container With Most Water",
    "slug": "container-with-most-water",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "tags": [
      "Array",
      "Two Pointers",
      "Greedy"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    "whyRecommended": "Classic greedy two-pointer problem testing area calculation and optimal boundary shrinkage.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/"
  },
  {
    "id": "lc-17",
    "title": "Trapping Rain Water",
    "slug": "trapping-rain-water",
    "difficulty": "Hard",
    "topic": "Two Pointers",
    "tags": [
      "Array",
      "Two Pointers",
      "Dynamic Programming",
      "Stack"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    "whyRecommended": "High-frequency Google/Amazon hard problem using two pointers tracking leftMax and rightMax in O(N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/"
  },
  {
    "id": "lc-18",
    "title": "Move Zeroes",
    "slug": "move-zeroes",
    "difficulty": "Easy",
    "topic": "Two Pointers",
    "tags": [
      "Array",
      "Two Pointers"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements in-place.",
    "whyRecommended": "Fast/slow pointer array mutation pattern.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/move-zeroes/"
  },
  {
    "id": "lc-19",
    "title": "Remove Duplicates from Sorted Array",
    "slug": "remove-duplicates-from-sorted-array",
    "difficulty": "Easy",
    "topic": "Two Pointers",
    "tags": [
      "Array",
      "Two Pointers"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums sorted in non-decreasing order, remove duplicates in-place such that each unique element appears only once.",
    "whyRecommended": "Core slow-pointer unique overwrite technique in sorted sequences.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
  },
  {
    "id": "lc-20",
    "title": "4Sum",
    "slug": "4sum",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "tags": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] that add up to target.",
    "whyRecommended": "Generalized k-Sum recursion reducing k-Sum to 2-Sum via sorting and two pointers.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/4sum/"
  },
  {
    "id": "lc-21",
    "title": "Best Time to Buy and Sell Stock",
    "slug": "best-time-to-buy-and-sell-stock",
    "difficulty": "Easy",
    "topic": "Sliding Window",
    "tags": [
      "Array",
      "Dynamic Programming",
      "Sliding Window"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
    "whyRecommended": "Introductory sliding window / prefix minimum tracking pattern.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
  },
  {
    "id": "lc-22",
    "title": "Longest Substring Without Repeating Characters",
    "slug": "longest-substring-without-repeating-characters",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "tags": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a string s, find the length of the longest substring without repeating characters.",
    "whyRecommended": "The quintessential dynamic sliding window pattern using hash map / frequency index tracking.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
  },
  {
    "id": "lc-23",
    "title": "Longest Repeating Character Replacement",
    "slug": "longest-repeating-character-replacement",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "tags": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character at most k times.",
    "whyRecommended": "Window condition: window_len - max_frequency <= k.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/"
  },
  {
    "id": "lc-24",
    "title": "Permutation in String",
    "slug": "permutation-in-string",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "tags": [
      "Hash Table",
      "Two Pointers",
      "String",
      "Sliding Window"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.",
    "whyRecommended": "Fixed-size sliding window frequency matching in O(26 * N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/permutation-in-string/"
  },
  {
    "id": "lc-25",
    "title": "Minimum Window Substring",
    "slug": "minimum-window-substring",
    "difficulty": "Hard",
    "topic": "Sliding Window",
    "tags": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.",
    "whyRecommended": "Advanced sliding window mastery with two frequency tables and dynamic contract expansion.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/"
  },
  {
    "id": "lc-26",
    "title": "Sliding Window Maximum",
    "slug": "sliding-window-maximum",
    "difficulty": "Hard",
    "topic": "Sliding Window",
    "tags": [
      "Array",
      "Queue",
      "Sliding Window",
      "Monotonic Queue"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. Return max in each window.",
    "whyRecommended": "Monotonic Decreasing Deque maintaining window maximums in amortized O(N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/sliding-window-maximum/"
  },
  {
    "id": "lc-27",
    "title": "Minimum Size Subarray Sum",
    "slug": "minimum-size-subarray-sum",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "tags": [
      "Array",
      "Binary Search",
      "Sliding Window"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target.",
    "whyRecommended": "Dynamic window expansion and contraction on positive integer sums.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-size-subarray-sum/"
  },
  {
    "id": "lc-28",
    "title": "Find All Anagrams in a String",
    "slug": "find-all-anagrams-in-a-string",
    "difficulty": "Medium",
    "topic": "Sliding Window",
    "tags": [
      "Hash Table",
      "String",
      "Sliding Window"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given two strings s and p, return an array of all the start indices of p's anagrams in s.",
    "whyRecommended": "Standard fixed-size sliding window with running character match count.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/find-all-anagrams-in-a-string/"
  },
  {
    "id": "lc-29",
    "title": "Valid Parentheses",
    "slug": "valid-parentheses",
    "difficulty": "Easy",
    "topic": "Stack & Queue",
    "tags": [
      "String",
      "Stack"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a string s containing just the characters \"(\", \")\", \"{\", \"}\", \"[\" and \"]\", determine if the input string is valid.",
    "whyRecommended": "Standard stack application for parsing nested brackets and matching grammar syntax.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/"
  },
  {
    "id": "lc-30",
    "title": "Min Stack",
    "slug": "min-stack",
    "difficulty": "Medium",
    "topic": "Stack & Queue",
    "tags": [
      "Stack",
      "Design"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1).",
    "whyRecommended": "Fundamental data structure design pairing auxiliary minimum tracking with LIFO stack operations.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/min-stack/"
  },
  {
    "id": "lc-31",
    "title": "Evaluate Reverse Polish Notation",
    "slug": "evaluate-reverse-polish-notation",
    "difficulty": "Medium",
    "topic": "Stack & Queue",
    "tags": [
      "Array",
      "Math",
      "Stack"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Evaluate the value of an arithmetic expression in Reverse Polish Notation (postfix notation).",
    "whyRecommended": "Stack-based operand evaluation used in compilers and expression parsers.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/evaluate-reverse-polish-notation/"
  },
  {
    "id": "lc-32",
    "title": "Generate Parentheses",
    "slug": "generate-parentheses",
    "difficulty": "Medium",
    "topic": "Stack & Queue",
    "tags": [
      "String",
      "Dynamic Programming",
      "Backtracking"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    "whyRecommended": "Backtracking with open/close stack constraints.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/generate-parentheses/"
  },
  {
    "id": "lc-33",
    "title": "Daily Temperatures",
    "slug": "daily-temperatures",
    "difficulty": "Medium",
    "topic": "Stack & Queue",
    "tags": [
      "Array",
      "Stack",
      "Monotonic Stack"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an array of integers temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.",
    "whyRecommended": "Core monotonic decreasing stack pattern for finding the next greater element in O(N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/"
  },
  {
    "id": "lc-34",
    "title": "Car Fleet",
    "slug": "car-fleet",
    "difficulty": "Medium",
    "topic": "Stack & Queue",
    "tags": [
      "Array",
      "Stack",
      "Sorting",
      "Monotonic Stack"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "There are n cars at given miles away from the starting mile 0, travelling towards a mile target. Return the number of car fleets that will arrive at the destination.",
    "whyRecommended": "Sort by position descending and use monotonic stack comparing arrival times.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/car-fleet/"
  },
  {
    "id": "lc-35",
    "title": "Largest Rectangle in Histogram",
    "slug": "largest-rectangle-in-histogram",
    "difficulty": "Hard",
    "topic": "Stack & Queue",
    "tags": [
      "Array",
      "Stack",
      "Monotonic Stack"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    "whyRecommended": "The definitive monotonic stack problem calculating maximal area bounds in O(N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
  },
  {
    "id": "lc-36",
    "title": "Implement Queue using Stacks",
    "slug": "implement-queue-using-stacks",
    "difficulty": "Easy",
    "topic": "Stack & Queue",
    "tags": [
      "Stack",
      "Design",
      "Queue"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Implement a first in first out (FIFO) queue using only two stacks.",
    "whyRecommended": "Classic interview problem illustrating amortized O(1) transfer between input and output stacks.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/implement-queue-using-stacks/"
  },
  {
    "id": "lc-37",
    "title": "Reverse Linked List",
    "slug": "reverse-linked-list",
    "difficulty": "Easy",
    "topic": "Linked Lists",
    "tags": [
      "Linked List",
      "Recursion"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    "whyRecommended": "Essential pointer manipulation foundation tested across almost every technical interview.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/"
  },
  {
    "id": "lc-38",
    "title": "Merge Two Sorted Lists",
    "slug": "merge-two-sorted-lists",
    "difficulty": "Easy",
    "topic": "Linked Lists",
    "tags": [
      "Linked List",
      "Recursion"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.",
    "whyRecommended": "Fundamental merge step used in MergeSort and multi-stream data assimilation.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/"
  },
  {
    "id": "lc-39",
    "title": "Reorder List",
    "slug": "reorder-list",
    "difficulty": "Medium",
    "topic": "Linked Lists",
    "tags": [
      "Linked List",
      "Two Pointers",
      "Stack"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given the head of a singly linked-list: L0 → L1 → … → Ln - 1 → Ln. Reorder the list to: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …",
    "whyRecommended": "Combines finding middle node (fast/slow pointer), reversing second half, and interweaving lists.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/reorder-list/"
  },
  {
    "id": "lc-40",
    "title": "Remove Nth Node From End of List",
    "slug": "remove-nth-node-from-end-of-list",
    "difficulty": "Medium",
    "topic": "Linked Lists",
    "tags": [
      "Linked List",
      "Two Pointers"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    "whyRecommended": "Two-pointer offset gap technique in a single traversal pass.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
  },
  {
    "id": "lc-41",
    "title": "Copy List with Random Pointer",
    "slug": "copy-list-with-random-pointer",
    "difficulty": "Medium",
    "topic": "Linked Lists",
    "tags": [
      "Hash Table",
      "Linked List"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Deep copy the list.",
    "whyRecommended": "Deep cloning graph-like linked lists using hash map or in-place node interweaving.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/copy-list-with-random-pointer/"
  },
  {
    "id": "lc-42",
    "title": "Add Two Numbers",
    "slug": "add-two-numbers",
    "difficulty": "Medium",
    "topic": "Linked Lists",
    "tags": [
      "Linked List",
      "Math",
      "Recursion"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order. Add the two numbers and return the sum as a linked list.",
    "whyRecommended": "Fundamental simulation of big-integer addition with carry propagation.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/add-two-numbers/"
  },
  {
    "id": "lc-43",
    "title": "Linked List Cycle",
    "slug": "linked-list-cycle",
    "difficulty": "Easy",
    "topic": "Linked Lists",
    "tags": [
      "Linked List",
      "Two Pointers"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given head, the head of a linked list, determine if the linked list has a cycle in it using O(1) memory.",
    "whyRecommended": "Floyd's Cycle-Finding Algorithm (Tortoise and Hare fast & slow pointers).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/"
  },
  {
    "id": "lc-44",
    "title": "Merge k Sorted Lists",
    "slug": "merge-k-sorted-lists",
    "difficulty": "Hard",
    "topic": "Linked Lists",
    "tags": [
      "Linked List",
      "Divide and Conquer",
      "Heap",
      "Merge Sort"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.",
    "whyRecommended": "High-frequency Amazon/Google question utilizing Min-Heap / Divide and Conquer in O(N log k).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/merge-k-sorted-lists/"
  },
  {
    "id": "lc-45",
    "title": "Binary Search",
    "slug": "binary-search",
    "difficulty": "Easy",
    "topic": "Binary Search",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums in O(log N).",
    "whyRecommended": "Clean implementation of logarithmic search avoiding integer overflow in midpoint calculation.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/binary-search/"
  },
  {
    "id": "lc-46",
    "title": "Search a 2D Matrix",
    "slug": "search-a-2d-matrix",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "tags": [
      "Array",
      "Binary Search",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Write an efficient algorithm that searches for a value target in an m x n integer matrix where each row is sorted and first integer of each row is greater than the previous row.",
    "whyRecommended": "Treating a 2D matrix as a flat virtual 1D array with row = mid / n and col = mid % n.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/search-a-2d-matrix/"
  },
  {
    "id": "lc-47",
    "title": "Koko Eating Bananas",
    "slug": "koko-eating-bananas",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Koko loves to eat bananas. There are n piles of bananas. Return the minimum integer k such that she can eat all the bananas within h hours.",
    "whyRecommended": "Binary Search on Answer range [1, max(piles)] with feasibility validation function.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/koko-eating-bananas/"
  },
  {
    "id": "lc-48",
    "title": "Find Minimum in Rotated Sorted Array",
    "slug": "find-minimum-in-rotated-sorted-array",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the sorted rotated array nums of unique elements, return the minimum element of this array.",
    "whyRecommended": "Tests binary search boundary conditions when comparing against the rightmost element.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
  },
  {
    "id": "lc-49",
    "title": "Search in Rotated Sorted Array",
    "slug": "search-in-rotated-sorted-array",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.",
    "whyRecommended": "Advanced binary search determining sorted inflection halves in O(log N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
  },
  {
    "id": "lc-50",
    "title": "Time Based Key-Value Store",
    "slug": "time-based-key-value-store",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "tags": [
      "Hash Table",
      "String",
      "Binary Search",
      "Design"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.",
    "whyRecommended": "Combines Hash Maps of arrays with binary search (upper_bound) on timestamps.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/time-based-key-value-store/"
  },
  {
    "id": "lc-51",
    "title": "Median of Two Sorted Arrays",
    "slug": "median-of-two-sorted-arrays",
    "difficulty": "Hard",
    "topic": "Binary Search",
    "tags": [
      "Array",
      "Binary Search",
      "Divide and Conquer"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays in O(log (m+n)) runtime.",
    "whyRecommended": "Partitioning binary search on the smaller array; one of the most famous Google hard questions.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
  },
  {
    "id": "lc-52",
    "title": "Capacity To Ship Packages Within D Days",
    "slug": "capacity-to-ship-packages-within-d-days",
    "difficulty": "Medium",
    "topic": "Binary Search",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "A conveyor belt has packages that must be shipped within days days. Return the least weight capacity of the ship that will result in all packages being shipped.",
    "whyRecommended": "Classic binary search on monotonic capacity search space.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
  },
  {
    "id": "lc-53",
    "title": "Invert Binary Tree",
    "slug": "invert-binary-tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary tree, invert the tree, and return its root.",
    "whyRecommended": "Classic tree transformation problem testing recursive left/right subtree swapping.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/invert-binary-tree/"
  },
  {
    "id": "lc-54",
    "title": "Maximum Depth of Binary Tree",
    "slug": "maximum-depth-of-binary-tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary tree, return its maximum depth.",
    "whyRecommended": "Core tree recursion and BFS level-order traversal practice.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
  },
  {
    "id": "lc-55",
    "title": "Diameter of Binary Tree",
    "slug": "diameter-of-binary-tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary tree, return the length of the diameter of the tree (longest path between any two nodes).",
    "whyRecommended": "Bottom-up DFS calculating height while updating global maximum diameter.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/diameter-of-binary-tree/"
  },
  {
    "id": "lc-56",
    "title": "Balanced Binary Tree",
    "slug": "balanced-binary-tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a binary tree, determine if it is height-balanced (depth of the two subtrees of every node never differs by more than 1).",
    "whyRecommended": "Bottom-up post-order traversal with -1 height sentinel for early exit.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/balanced-binary-tree/"
  },
  {
    "id": "lc-57",
    "title": "Same Tree",
    "slug": "same-tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the roots of two binary trees p and q, write a function to check if they are the same or not.",
    "whyRecommended": "Dual-tree structural and value equality recursion.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/same-tree/"
  },
  {
    "id": "lc-58",
    "title": "Subtree of Another Tree",
    "slug": "subtree-of-another-tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot.",
    "whyRecommended": "Nested tree traversal combining DFS with identical tree validation.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/subtree-of-another-tree/"
  },
  {
    "id": "lc-59",
    "title": "Lowest Common Ancestor of a BST",
    "slug": "lowest-common-ancestor-of-a-binary-search-tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.",
    "whyRecommended": "Leverages BST ordering properties (left < root < right) to traverse without full tree scanning.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
  },
  {
    "id": "lc-60",
    "title": "Binary Tree Level Order Traversal",
    "slug": "binary-tree-level-order-traversal",
    "difficulty": "Medium",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    "whyRecommended": "Standard Queue BFS recording size of each level per iteration.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
  },
  {
    "id": "lc-61",
    "title": "Validate Binary Search Tree",
    "slug": "validate-binary-search-tree",
    "difficulty": "Medium",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    "whyRecommended": "Recursive boundary propagation (min < node.val < max) or in-order strictly increasing check.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/"
  },
  {
    "id": "lc-62",
    "title": "Binary Tree Maximum Path Sum",
    "slug": "binary-tree-maximum-path-sum",
    "difficulty": "Hard",
    "topic": "Trees",
    "tags": [
      "Dynamic Programming",
      "Tree",
      "Depth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "A path in a binary tree is a sequence of nodes. Return the maximum path sum of any non-empty path.",
    "whyRecommended": "High-frequency hard tree problem combining maximum branch gain with split-path updates.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
  },
  {
    "id": "lc-63",
    "title": "Kth Largest Element in a Stream",
    "slug": "kth-largest-element-in-a-stream",
    "difficulty": "Easy",
    "topic": "Heaps",
    "tags": [
      "Tree",
      "Design",
      "Binary Search Tree",
      "Heap"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Design a class to find the kth largest element in a stream.",
    "whyRecommended": "Min-Heap of fixed size k maintaining top k elements in O(log k) per addition.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-a-stream/"
  },
  {
    "id": "lc-64",
    "title": "Last Stone Weight",
    "slug": "last-stone-weight",
    "difficulty": "Easy",
    "topic": "Heaps",
    "tags": [
      "Array",
      "Heap"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an array of integers stones where stones[i] is the weight of the ith stone. Simulate smashing the two heaviest stones until at most 1 stone remains.",
    "whyRecommended": "Max-Heap simulation popping top two elements in O(N log N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/last-stone-weight/"
  },
  {
    "id": "lc-65",
    "title": "K Closest Points to Origin",
    "slug": "k-closest-points-to-origin",
    "difficulty": "Medium",
    "topic": "Heaps",
    "tags": [
      "Array",
      "Math",
      "Divide and Conquer",
      "Geometry",
      "Sorting",
      "Heap"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).",
    "whyRecommended": "Max-Heap of size k or QuickSelect finding top k elements in O(N log k).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/k-closest-points-to-origin/"
  },
  {
    "id": "lc-66",
    "title": "Kth Largest Element in an Array",
    "slug": "kth-largest-element-in-an-array",
    "difficulty": "Medium",
    "topic": "Heaps",
    "tags": [
      "Array",
      "Divide and Conquer",
      "Sorting",
      "Heap",
      "Quickselect"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums and an integer k, return the kth largest element in the array without full sorting.",
    "whyRecommended": "Quickselect algorithm achieving average O(N) or Min-Heap in O(N log k).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
  },
  {
    "id": "lc-67",
    "title": "Task Scheduler",
    "slug": "task-scheduler",
    "difficulty": "Medium",
    "topic": "Heaps",
    "tags": [
      "Array",
      "Hash Table",
      "Greedy",
      "Sorting",
      "Heap"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Cloud Engineer"
    ],
    "descriptionSummary": "Given a characters array tasks and a cooling interval n, return the least number of CPU intervals that the CPU will take to finish all the given tasks.",
    "whyRecommended": "Max-Heap with waiting Queue simulating CPU cooling cycles.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/task-scheduler/"
  },
  {
    "id": "lc-68",
    "title": "Find Median from Data Stream",
    "slug": "find-median-from-data-stream",
    "difficulty": "Hard",
    "topic": "Heaps",
    "tags": [
      "Two Pointers",
      "Design",
      "Sorting",
      "Heap",
      "Data Stream"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "The median is the middle value in an ordered integer list. Design a data structure that supports adding numbers and finding the current median in O(1).",
    "whyRecommended": "Two-Heap balance technique: Max-Heap for lower half, Min-Heap for upper half.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/"
  },
  {
    "id": "lc-69",
    "title": "Number of Islands",
    "slug": "number-of-islands",
    "difficulty": "Medium",
    "topic": "Graphs",
    "tags": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Union Find",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an m x n 2D binary grid grid which represents a map of \"1\"s (land) and \"0\"s (water), return the number of islands.",
    "whyRecommended": "The gold standard 2D grid graph traversal problem using DFS/BFS connected components.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/"
  },
  {
    "id": "lc-70",
    "title": "Clone Graph",
    "slug": "clone-graph",
    "difficulty": "Medium",
    "topic": "Graphs",
    "tags": [
      "Hash Table",
      "Depth-First Search",
      "Breadth-First Search",
      "Graph"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.",
    "whyRecommended": "Graph deep copy maintaining a visited HashMap mapping old nodes to new nodes.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/clone-graph/"
  },
  {
    "id": "lc-71",
    "title": "Max Area of Island",
    "slug": "max-area-of-island",
    "difficulty": "Medium",
    "topic": "Graphs",
    "tags": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an m x n binary matrix grid. An island is a group of 1's connected 4-directionally. Return the maximum area of an island in grid.",
    "whyRecommended": "DFS returning component sizes with in-place visited marking.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/max-area-of-island/"
  },
  {
    "id": "lc-72",
    "title": "Pacific Atlantic Water Flow",
    "slug": "pacific-atlantic-water-flow",
    "difficulty": "Medium",
    "topic": "Graphs",
    "tags": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. Return coordinates from which rain water can flow to both oceans.",
    "whyRecommended": "Reverse reachability BFS/DFS starting from ocean boundaries inwards.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/pacific-atlantic-water-flow/"
  },
  {
    "id": "lc-73",
    "title": "Course Schedule",
    "slug": "course-schedule",
    "difficulty": "Medium",
    "topic": "Graphs",
    "tags": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph",
      "Topological Sort"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. Return true if you can finish all courses.",
    "whyRecommended": "Essential topological sorting and cycle detection algorithm in Directed Acyclic Graphs (DAGs).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/course-schedule/"
  },
  {
    "id": "lc-74",
    "title": "Course Schedule II",
    "slug": "course-schedule-ii",
    "difficulty": "Medium",
    "topic": "Graphs",
    "tags": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph",
      "Topological Sort"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Return the ordering of courses you should take to finish all courses using Kahn's Algorithm (indegree queue BFS).",
    "whyRecommended": "Topological order reconstruction with cycle validation.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/"
  },
  {
    "id": "lc-75",
    "title": "Rotting Oranges",
    "slug": "rotting-oranges",
    "difficulty": "Medium",
    "topic": "Graphs",
    "tags": [
      "Array",
      "Breadth-First Search",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an m x n grid where each cell has 0 (empty), 1 (fresh), or 2 (rotten). Return the minimum number of minutes that must elapse until no cell has a fresh orange.",
    "whyRecommended": "Multi-source simultaneous BFS level tracking in grid matrices.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/rotting-oranges/"
  },
  {
    "id": "lc-76",
    "title": "Word Ladder",
    "slug": "word-ladder",
    "difficulty": "Hard",
    "topic": "Graphs",
    "tags": [
      "Hash Table",
      "String",
      "Breadth-First Search"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "A transformation sequence from word beginWord to word endWord using a dictionary wordList. Return the number of words in the shortest transformation sequence.",
    "whyRecommended": "Shortest path in unweighted state-space graph using bidirectional BFS.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/word-ladder/"
  },
  {
    "id": "lc-77",
    "title": "Climbing Stairs",
    "slug": "climbing-stairs",
    "difficulty": "Easy",
    "topic": "Dynamic Programming",
    "tags": [
      "Math",
      "Dynamic Programming",
      "Memoization"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    "whyRecommended": "Introductory 1D dynamic programming transitioning from Fibonacci recursion to memoization.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/"
  },
  {
    "id": "lc-78",
    "title": "Min Cost Climbing Stairs",
    "slug": "min-cost-climbing-stairs",
    "difficulty": "Easy",
    "topic": "Dynamic Programming",
    "tags": [
      "Array",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Return minimum cost to reach the top.",
    "whyRecommended": "1D DP state transition: dp[i] = cost[i] + min(dp[i+1], dp[i+2]).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/min-cost-climbing-stairs/"
  },
  {
    "id": "lc-79",
    "title": "House Robber",
    "slug": "house-robber",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Array",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are a professional robber planning to rob houses along a street. Adjacent houses have security systems. Maximize stolen money without robbing adjacent houses.",
    "whyRecommended": "Classic decision DP: rob1 vs rob2 + num with O(1) rolling variables.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/house-robber/"
  },
  {
    "id": "lc-80",
    "title": "House Robber II",
    "slug": "house-robber-ii",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Array",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "All houses at this place are arranged in a circle. Maximize stolen loot without robbing adjacent houses in a circular array.",
    "whyRecommended": "Splits circular dependency into two linear subproblems: nums[0..n-2] and nums[1..n-1].",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/house-robber-ii/"
  },
  {
    "id": "lc-81",
    "title": "Longest Palindromic Substring",
    "slug": "longest-palindromic-substring",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a string s, return the longest palindromic substring in s.",
    "whyRecommended": "Expand around center in O(N^2) or 2D DP matrix memoization.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/longest-palindromic-substring/"
  },
  {
    "id": "lc-82",
    "title": "Coin Change",
    "slug": "coin-change",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Array",
      "Dynamic Programming",
      "Breadth-First Search"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an integer array coins representing coins of different denominations and an integer amount. Return the fewest number of coins that you need to make up that amount.",
    "whyRecommended": "Classic unbounded knapsack bottom-up DP state equation dp[i] = min(dp[i], dp[i - coin] + 1).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/coin-change/"
  },
  {
    "id": "lc-83",
    "title": "Longest Increasing Subsequence",
    "slug": "longest-increasing-subsequence",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Array",
      "Binary Search",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums, return the length of the longest strictly increasing subsequence in O(N log N) time.",
    "whyRecommended": "Patience sorting with binary search (Piles / tails array) for O(N log N) optimization.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-subsequence/"
  },
  {
    "id": "lc-84",
    "title": "Unique Paths",
    "slug": "unique-paths",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Math",
      "Dynamic Programming",
      "Combinatorics"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "There is a robot on an m x n grid. The robot can only move down or right. Find the number of possible unique paths to the bottom-right corner.",
    "whyRecommended": "2D grid DP transition dp[r][c] = dp[r+1][c] + dp[r][c+1] optimized to a 1D rolling array.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/unique-paths/"
  },
  {
    "id": "lc-85",
    "title": "Longest Common Subsequence",
    "slug": "longest-common-subsequence",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "String",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
    "whyRecommended": "Foundational 2D string DP used in diff algorithms (git diff) and DNA alignment.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/"
  },
  {
    "id": "lc-86",
    "title": "Edit Distance",
    "slug": "edit-distance",
    "difficulty": "Hard",
    "topic": "Dynamic Programming",
    "tags": [
      "String",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2 (insert, delete, replace).",
    "whyRecommended": "Levenshtein distance algorithm essential for NLP spell-checkers and search engines.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/edit-distance/"
  },
  {
    "id": "lc-87",
    "title": "Subsets",
    "slug": "subsets",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "tags": [
      "Array",
      "Backtracking",
      "Bit Manipulation"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums of unique elements, return all possible subsets (the power set).",
    "whyRecommended": "Standard backtracking decision tree pattern (include or exclude each element).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/subsets/"
  },
  {
    "id": "lc-88",
    "title": "Combination Sum",
    "slug": "combination-sum",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "tags": [
      "Array",
      "Backtracking"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations where the chosen numbers sum to target.",
    "whyRecommended": "Backtracking allowing repeated element selection while avoiding permutation duplicates.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum/"
  },
  {
    "id": "lc-89",
    "title": "Permutations",
    "slug": "permutations",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "tags": [
      "Array",
      "Backtracking"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.",
    "whyRecommended": "Backtracking with boolean visited array or in-place element swapping.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/permutations/"
  },
  {
    "id": "lc-90",
    "title": "Word Search",
    "slug": "word-search",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "tags": [
      "Array",
      "String",
      "Backtracking",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
    "whyRecommended": "2D matrix DFS backtracking with character matching and state restoration.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/word-search/"
  },
  {
    "id": "lc-91",
    "title": "Letter Combinations of a Phone Number",
    "slug": "letter-combinations-of-a-phone-number",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "tags": [
      "Hash Table",
      "String",
      "Backtracking"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent (telephone keypad mapping).",
    "whyRecommended": "Multi-branch recursive tree traversal mapping keypad mappings.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"
  },
  {
    "id": "lc-92",
    "title": "N-Queens",
    "slug": "n-queens",
    "difficulty": "Hard",
    "topic": "Backtracking",
    "tags": [
      "Array",
      "Backtracking"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Return all distinct board solutions.",
    "whyRecommended": "Mastery of diagonal hash sets (r + c, r - c) and column validation in backtracking.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/n-queens/"
  },
  {
    "id": "lc-93",
    "title": "Maximum Subarray",
    "slug": "maximum-subarray",
    "difficulty": "Medium",
    "topic": "Greedy",
    "tags": [
      "Array",
      "Divide and Conquer",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Given an integer array nums, find the subarray with the largest sum, and return its sum (Kadane's Algorithm).",
    "whyRecommended": "Kadane's linear time algorithm resetting negative running sum.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/"
  },
  {
    "id": "lc-94",
    "title": "Jump Game",
    "slug": "jump-game",
    "difficulty": "Medium",
    "topic": "Greedy",
    "tags": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an integer array nums. You are initially positioned at the array's first index. Determine if you are able to reach the last index.",
    "whyRecommended": "Backward goalpost greedy tracking in O(N) time and O(1) space.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/jump-game/"
  },
  {
    "id": "lc-95",
    "title": "Gas Station",
    "slug": "gas-station",
    "difficulty": "Medium",
    "topic": "Greedy",
    "tags": [
      "Array",
      "Greedy"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "There are n gas stations along a circular route. Return the starting gas station's index if you can travel around the circuit once, or -1.",
    "whyRecommended": "Greedy running total reset when local tank runs dry in O(N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/gas-station/"
  },
  {
    "id": "lc-96",
    "title": "Single Number",
    "slug": "single-number",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "tags": [
      "Array",
      "Bit Manipulation"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one using O(1) extra space.",
    "whyRecommended": "Bitwise XOR property (x ^ x = 0, x ^ 0 = x) for O(N) time and O(1) memory.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/single-number/"
  },
  {
    "id": "lc-97",
    "title": "Number of 1 Bits",
    "slug": "number-of-1-bits",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "tags": [
      "Divide and Conquer",
      "Bit Manipulation"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Cloud Engineer"
    ],
    "descriptionSummary": "Write a function that takes the binary representation of a positive integer and returns the number of set bits (Hamming weight).",
    "whyRecommended": "Brian Kernighan's bit-trick n = n & (n - 1) clearing lowest set bit.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/number-of-1-bits/"
  },
  {
    "id": "lc-98",
    "title": "Counting Bits",
    "slug": "counting-bits",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "tags": [
      "Dynamic Programming",
      "Bit Manipulation"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.",
    "whyRecommended": "Bit DP relation dp[i] = dp[i >> 1] + (i & 1) computing bits in O(N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/counting-bits/"
  },
  {
    "id": "lc-99",
    "title": "Combine Two Tables",
    "slug": "combine-two-tables",
    "difficulty": "Easy",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Join"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to report the first name, last name, city, and state of each person in the Person table using LEFT JOIN.",
    "whyRecommended": "Fundamental SQL outer join ensuring all records from primary table are preserved.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/combine-two-tables/"
  },
  {
    "id": "lc-100",
    "title": "Second Highest Salary",
    "slug": "second-highest-salary",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Subquery"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to report the second highest distinct salary from the Employee table. If there is no second highest salary, return null.",
    "whyRecommended": "Evaluates subqueries, window functions (DENSE_RANK), and IFNULL handling in SQL.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/second-highest-salary/"
  },
  {
    "id": "lc-101",
    "title": "Nth Highest Salary",
    "slug": "nth-highest-salary",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Function",
      "Offset"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to report the nth highest distinct salary from the Employee table via a custom function or DENSE_RANK.",
    "whyRecommended": "Custom function declaration and dynamic OFFSET parameter indexing in SQL.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/nth-highest-salary/"
  },
  {
    "id": "lc-102",
    "title": "Rank Scores",
    "slug": "rank-scores",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Window Functions"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to rank the scores. The ranking should not have holes for ties (DENSE_RANK).",
    "whyRecommended": "Core window function DENSE_RANK() OVER (ORDER BY score DESC).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/rank-scores/"
  },
  {
    "id": "lc-103",
    "title": "Consecutive Numbers",
    "slug": "consecutive-numbers",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Window Functions",
      "Lead/Lag"
    ],
    "roles": [
      "Data Analyst",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Find all numbers that appear at least three times consecutively in a log table.",
    "whyRecommended": "Tests SQL LEAD() / LAG() window functions or self-joins for consecutive temporal events.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/consecutive-numbers/"
  },
  {
    "id": "lc-104",
    "title": "Employees Earning More Than Their Managers",
    "slug": "employees-earning-more-than-their-managers",
    "difficulty": "Easy",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Self Join"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to find the employees who earn more than their managers using self-joins.",
    "whyRecommended": "Classic self-join matching managerId to id in hierarchical relational tables.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/employees-earning-more-than-their-managers/"
  },
  {
    "id": "lc-105",
    "title": "Duplicate Emails",
    "slug": "duplicate-emails",
    "difficulty": "Easy",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Group By",
      "Having"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to report all the duplicate emails in a table.",
    "whyRecommended": "GROUP BY with HAVING COUNT(email) > 1 clause.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/duplicate-emails/"
  },
  {
    "id": "lc-106",
    "title": "Customers Who Never Order",
    "slug": "customers-who-never-order",
    "difficulty": "Easy",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Subquery",
      "Left Join"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to report all customers who never order anything using LEFT JOIN WHERE Orders.id IS NULL or NOT IN subquery.",
    "whyRecommended": "Anti-join pattern testing null-checking optimization.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/customers-who-never-order/"
  },
  {
    "id": "lc-107",
    "title": "Department Highest Salary",
    "slug": "department-highest-salary",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Window Functions"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to find employees who have the highest salary in each of the departments.",
    "whyRecommended": "High-frequency interview question combining DENSE_RANK() OVER (PARTITION BY departmentId ORDER BY salary DESC) with joins.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/department-highest-salary/"
  },
  {
    "id": "lc-108",
    "title": "Department Top Three Salaries",
    "slug": "department-top-three-salaries",
    "difficulty": "Hard",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Window Functions",
      "Dense Rank"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "A company's executives are interested in seeing who earns the most money in each of the company's departments. Find top 3 unique salaries per department.",
    "whyRecommended": "Advanced DENSE_RANK() partition filtering WHERE rank_num <= 3.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/department-top-three-salaries/"
  },
  {
    "id": "lc-109",
    "title": "Delete Duplicate Emails",
    "slug": "delete-duplicate-emails",
    "difficulty": "Easy",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "DML"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to delete all the duplicate emails, keeping only one unique email with the smallest id.",
    "whyRecommended": "DML DELETE with self-join DELETE p1 FROM Person p1, Person p2 WHERE p1.email = p2.email AND p1.id > p2.id.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/delete-duplicate-emails/"
  },
  {
    "id": "lc-110",
    "title": "Rising Temperature",
    "slug": "rising-temperature",
    "difficulty": "Easy",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Date Functions"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer",
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to find all dates' Id with higher temperatures compared to its previous dates (yesterday).",
    "whyRecommended": "Cross-date join using DATEDIFF(w1.recordDate, w2.recordDate) = 1.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/rising-temperature/"
  },
  {
    "id": "lc-111",
    "title": "Trips and Users",
    "slug": "trips-and-users",
    "difficulty": "Hard",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Aggregation",
      "Case When"
    ],
    "roles": [
      "Data Analyst"
    ],
    "descriptionSummary": "Write an SQL query to find the cancellation rate of requests with unbanned users each day between two dates.",
    "whyRecommended": "Advanced business analytics query utilizing conditional aggregation (ROUND(SUM(CASE WHEN status ...)), 2) and filtering.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/trips-and-users/"
  },
  {
    "id": "lc-112",
    "title": "Game Play Analysis IV",
    "slug": "game-play-analysis-iv",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Date Functions",
      "Window Functions"
    ],
    "roles": [
      "Data Analyst",
      "Full Stack Developer"
    ],
    "descriptionSummary": "Write an SQL query to report the fraction of players that logged in again on the day after the day they first logged in (Day 1 Retention Rate).",
    "whyRecommended": "Essential product retention metric calculation joining first login date with next day activity.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/game-play-analysis-iv/"
  },
  {
    "id": "lc-113",
    "title": "Market Analysis I",
    "slug": "market-analysis-i",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Left Join",
      "Group By"
    ],
    "roles": [
      "Data Analyst",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Write an SQL query to find for each user, the join date and the number of orders they made as a buyer in 2019.",
    "whyRecommended": "LEFT JOIN with conditional ON filters vs WHERE clause retention.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/market-analysis-i/"
  },
  {
    "id": "lc-114",
    "title": "Subsets II",
    "slug": "subsets-ii",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "tags": [
      "Array",
      "Backtracking",
      "Bit Manipulation"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums that may contain duplicates, return all possible subsets without containing duplicate subsets.",
    "whyRecommended": "Essential backtracking pattern for deduplicating states using sorting and skipped indices.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/"
  },
  {
    "id": "lc-115",
    "title": "Combination Sum II",
    "slug": "combination-sum-ii",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "tags": [
      "Array",
      "Backtracking"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations where candidate numbers sum to target, using each number once.",
    "whyRecommended": "Tests decision trees with duplicate frequency controls.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/combination-sum-ii/"
  },
  {
    "id": "lc-116",
    "title": "Permutations II",
    "slug": "permutations-ii",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "tags": [
      "Array",
      "Backtracking"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.",
    "whyRecommended": "Standard backtracking with boolean visited arrays and duplicate skips.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/permutations-ii/"
  },
  {
    "id": "lc-117",
    "title": "Kth Smallest Element in a BST",
    "slug": "kth-smallest-element-in-a-bst",
    "difficulty": "Medium",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
    "whyRecommended": "Mastering Inorder Traversal property of Binary Search Trees.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
  },
  {
    "id": "lc-118",
    "title": "Convert Sorted Array to Binary Search Tree",
    "slug": "convert-sorted-array-to-binary-search-tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "tags": [
      "Array",
      "Divide and Conquer",
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.",
    "whyRecommended": "Divide and conquer recursive construction of balanced BSTs.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"
  },
  {
    "id": "lc-119",
    "title": "Delete Node in a BST",
    "slug": "delete-node-in-a-bst",
    "difficulty": "Medium",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Binary Search Tree",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference of the BST.",
    "whyRecommended": "Crucial BST manipulation handling zero, one, and two children replacements (inorder successor).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/delete-node-in-a-bst/"
  },
  {
    "id": "lc-120",
    "title": "Binary Tree Zigzag Level Order Traversal",
    "slug": "binary-tree-zigzag-level-order-traversal",
    "difficulty": "Medium",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary tree, return the zigzag level order traversal of its nodes' values (i.e., from left to right, then right to left for the next level and alternate between).",
    "whyRecommended": "Extends standard BFS queue traversal with alternating deque insertions.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
  },
  {
    "id": "lc-121",
    "title": "Populating Next Right Pointers in Each Node",
    "slug": "populating-next-right-pointers-in-each-node",
    "difficulty": "Medium",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given a perfect binary tree where all leaves are on the same level. Populate each next pointer to point to its next right node.",
    "whyRecommended": "Constant space pointer linking across tree levels.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"
  },
  {
    "id": "lc-122",
    "title": "Longest Common Prefix",
    "slug": "longest-common-prefix",
    "difficulty": "Easy",
    "topic": "Arrays & Hashing",
    "tags": [
      "String",
      "Trie"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
    "whyRecommended": "Fundamental string iteration, vertical scanning, and horizontal reduction.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/longest-common-prefix/"
  },
  {
    "id": "lc-123",
    "title": "Reverse Words in a String",
    "slug": "reverse-words-in-a-string",
    "difficulty": "Medium",
    "topic": "Two Pointers",
    "tags": [
      "Two Pointers",
      "String"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an input string s, reverse the order of the words. A word is defined as a sequence of non-space characters with words separated by at least one space.",
    "whyRecommended": "In-place string transformation and two-pointer word reversal.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-words-in-a-string/"
  },
  {
    "id": "lc-124",
    "title": "Valid Palindrome II",
    "slug": "valid-palindrome-ii",
    "difficulty": "Easy",
    "topic": "Two Pointers",
    "tags": [
      "Two Pointers",
      "String",
      "Greedy"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a string s, return true if the s can be palindrome after deleting at most one character from it.",
    "whyRecommended": "Tests greedy two-pointer branch evaluation on mismatch.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome-ii/"
  },
  {
    "id": "lc-125",
    "title": "Jump Game II",
    "slug": "jump-game-ii",
    "difficulty": "Medium",
    "topic": "Greedy",
    "tags": [
      "Array",
      "Dynamic Programming",
      "Greedy"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given a 0-indexed array of integers nums of length n. Return the minimum number of jumps to reach nums[n - 1].",
    "whyRecommended": "BFS window-based greedy range optimization in O(N).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/jump-game-ii/"
  },
  {
    "id": "lc-126",
    "title": "Partition Labels",
    "slug": "partition-labels",
    "difficulty": "Medium",
    "topic": "Greedy",
    "tags": [
      "Hash Table",
      "Two Pointers",
      "String",
      "Greedy"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.",
    "whyRecommended": "Greedy interval expansion based on last-occurrence hash maps.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/partition-labels/"
  },
  {
    "id": "lc-127",
    "title": "Assign Cookies",
    "slug": "assign-cookies",
    "difficulty": "Easy",
    "topic": "Greedy",
    "tags": [
      "Array",
      "Two Pointers",
      "Greedy",
      "Sorting"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Assume you are an awesome parent and want to give your children some cookies. Each child i has a greed factor g[i], and each cookie j has a size s[j]. Maximize the number of content children.",
    "whyRecommended": "Classic introductory greedy two-pointer sorting problem.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/assign-cookies/"
  },
  {
    "id": "lc-128",
    "title": "Candy",
    "slug": "candy",
    "difficulty": "Hard",
    "topic": "Greedy",
    "tags": [
      "Array",
      "Greedy"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings. Return the minimum number of candies you need to have to distribute the candies to the children.",
    "whyRecommended": "Two-pass (left-to-right, right-to-left) greedy slope optimization.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/candy/"
  },
  {
    "id": "lc-129",
    "title": "Reverse Bits",
    "slug": "reverse-bits",
    "difficulty": "Easy",
    "topic": "Bit Manipulation",
    "tags": [
      "Divide and Conquer",
      "Bit Manipulation"
    ],
    "roles": [
      "Full Stack Developer",
      "Cloud Engineer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Reverse bits of a given 32 bits unsigned integer.",
    "whyRecommended": "Mastering bit shifts (<<, >>) and bitwise OR (|) operators.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/reverse-bits/"
  },
  {
    "id": "lc-130",
    "title": "Single Number II",
    "slug": "single-number-ii",
    "difficulty": "Medium",
    "topic": "Bit Manipulation",
    "tags": [
      "Array",
      "Bit Manipulation"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.",
    "whyRecommended": "Digital logic gate simulation with bit counting or state machines.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/single-number-ii/"
  },
  {
    "id": "lc-131",
    "title": "Bitwise AND of Numbers Range",
    "slug": "bitwise-and-of-numbers-range",
    "difficulty": "Medium",
    "topic": "Bit Manipulation",
    "tags": [
      "Bit Manipulation"
    ],
    "roles": [
      "Full Stack Developer",
      "Cloud Engineer"
    ],
    "descriptionSummary": "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
    "whyRecommended": "Finding common bit prefixes between upper and lower boundaries.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/bitwise-and-of-numbers-range/"
  },
  {
    "id": "lc-132",
    "title": "Exchange Seats",
    "slug": "exchange-seats",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Window Functions"
    ],
    "roles": [
      "Data Analyst",
      "Java Backend Developer",
      "Full Stack Developer"
    ],
    "descriptionSummary": "Write a solution to swap the seat id of every two consecutive students. If the number of students is odd, the id of the last student is not swapped.",
    "whyRecommended": "Tests CASE statements with MOD, LEAD, and LAG window functions.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/exchange-seats/"
  },
  {
    "id": "lc-133",
    "title": "Movie Rating",
    "slug": "movie-rating",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "UNION ALL"
    ],
    "roles": [
      "Data Analyst",
      "Java Backend Developer",
      "Full Stack Developer"
    ],
    "descriptionSummary": "Find the name of the user who has rated the greatest number of movies and find the movie name with the highest average rating in February 2020.",
    "whyRecommended": "Tests complex UNION ALL multi-criteria subqueries with ORDER BY and LIMIT.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/movie-rating/"
  },
  {
    "id": "lc-134",
    "title": "Restaurant Growth",
    "slug": "restaurant-growth",
    "difficulty": "Medium",
    "topic": "SQL",
    "tags": [
      "Database",
      "SQL",
      "Window Functions"
    ],
    "roles": [
      "Data Analyst",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Compute the moving average of how much the customer paid in a seven days window (i.e., current day + 6 days before).",
    "whyRecommended": "Tests 7-day rolling window calculations (ROWS BETWEEN 6 PRECEDING AND CURRENT ROW).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/restaurant-growth/"
  },
  {
    "id": "lc-135",
    "title": "Network Delay Time",
    "slug": "network-delay-time",
    "difficulty": "Medium",
    "topic": "Graphs",
    "tags": [
      "Depth-First Search",
      "Breadth-First Search",
      "Graph",
      "Heap (Priority Queue)",
      "Shortest Path"
    ],
    "roles": [
      "Cloud Engineer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given a network of n nodes, labeled from 1 to n. Return the minimum time it takes for all the n nodes to receive the signal using Dijkstra algorithm.",
    "whyRecommended": "Classic Dijkstra shortest path algorithm with min-heaps in distributed systems.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/network-delay-time/"
  },
  {
    "id": "lc-136",
    "title": "Palindromic Substrings",
    "slug": "palindromic-substrings",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Two Pointers",
      "String",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a string s, return the number of palindromic substrings in it.",
    "whyRecommended": "Expand around center technique and 2D DP matrix memoization.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/palindromic-substrings/"
  },
  {
    "id": "lc-137",
    "title": "Implement Stack using Queues",
    "slug": "implement-stack-using-queues",
    "difficulty": "Easy",
    "topic": "Stack & Queue",
    "tags": [
      "Stack",
      "Design",
      "Queue"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).",
    "whyRecommended": "Understanding FIFO to LIFO queue rotation invariants.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/implement-stack-using-queues/"
  },
  {
    "id": "lc-138",
    "title": "Minimum Path Sum",
    "slug": "minimum-path-sum",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Array",
      "Dynamic Programming",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.",
    "whyRecommended": "Classic grid dynamic programming with path accumulation.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/minimum-path-sum/"
  },
  {
    "id": "lc-139",
    "title": "Target Sum",
    "slug": "target-sum",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Array",
      "Dynamic Programming",
      "Backtracking"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an integer array nums and an integer target. Build an expression using '+' and '-' before each integer so that expression evaluates to target.",
    "whyRecommended": "0/1 Knapsack reduction and subset sum partitioning.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/target-sum/"
  },
  {
    "id": "lc-140",
    "title": "Decode Ways",
    "slug": "decode-ways",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "String",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "A message containing letters from A-Z can be encoded into numbers using mapping 'A' -> '1', ..., 'Z' -> '26'. Given a string s containing only digits, return the number of ways to decode it.",
    "whyRecommended": "1D DP with single-digit and double-digit validity lookbacks.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/decode-ways/"
  },
  {
    "id": "lc-141",
    "title": "Maximum Product Subarray",
    "slug": "maximum-product-subarray",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Array",
      "Dynamic Programming"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an integer array nums, find a subarray that has the largest product, and return the product.",
    "whyRecommended": "DP tracking both minimum and maximum products to handle negative multipliers.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/"
  },
  {
    "id": "lc-142",
    "title": "Surrounded Regions",
    "slug": "surrounded-regions",
    "difficulty": "Medium",
    "topic": "Graphs",
    "tags": [
      "Array",
      "Depth-First Search",
      "Breadth-First Search",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.",
    "whyRecommended": "Boundary flood fill traversal with state marking.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/surrounded-regions/"
  },
  {
    "id": "lc-143",
    "title": "Word Break",
    "slug": "word-break",
    "difficulty": "Medium",
    "topic": "Dynamic Programming",
    "tags": [
      "Hash Table",
      "String",
      "Dynamic Programming",
      "Trie",
      "Memoization"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    "whyRecommended": "Prefix segmentation DP and hash set dictionary lookups.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/word-break/"
  },
  {
    "id": "lc-144",
    "title": "Rotate Image",
    "slug": "rotate-image",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Math",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise) in-place.",
    "whyRecommended": "In-place matrix transposition followed by row reflections.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/rotate-image/"
  },
  {
    "id": "lc-145",
    "title": "Spiral Matrix",
    "slug": "spiral-matrix",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an m x n matrix, return all elements of the matrix in spiral order.",
    "whyRecommended": "Matrix boundary index tracking (top, bottom, left, right).",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/spiral-matrix/"
  },
  {
    "id": "lc-146",
    "title": "Set Matrix Zeroes",
    "slug": "set-matrix-zeroes",
    "difficulty": "Medium",
    "topic": "Arrays & Hashing",
    "tags": [
      "Array",
      "Hash Table",
      "Matrix"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's in place using O(1) space.",
    "whyRecommended": "Using first row and column as memory markers to achieve O(1) auxiliary space.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    "id": "lc-147",
    "title": "Palindrome Partitioning",
    "slug": "palindrome-partitioning",
    "difficulty": "Medium",
    "topic": "Backtracking",
    "tags": [
      "String",
      "Dynamic Programming",
      "Backtracking"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",
    "whyRecommended": "Backtracking with substring palindrome verification.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/palindrome-partitioning/"
  },
  {
    "id": "lc-148",
    "title": "Path Sum",
    "slug": "path-sum",
    "difficulty": "Easy",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.",
    "whyRecommended": "Fundamental recursive tree traversal with target subtraction.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/path-sum/"
  },
  {
    "id": "lc-149",
    "title": "Symmetric Tree",
    "slug": "symmetric-tree",
    "difficulty": "Easy",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    "whyRecommended": "Dual-node recursive helper function comparing left.val == right.val and cross children.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/symmetric-tree/"
  },
  {
    "id": "lc-150",
    "title": "Binary Tree Right Side View",
    "slug": "binary-tree-right-side-view",
    "difficulty": "Medium",
    "topic": "Trees",
    "tags": [
      "Tree",
      "Depth-First Search",
      "Breadth-First Search",
      "Binary Tree"
    ],
    "roles": [
      "Full Stack Developer",
      "Java Backend Developer"
    ],
    "descriptionSummary": "Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.",
    "whyRecommended": "BFS level-order traversal taking the last element of each level queue.",
    "practicePlatform": "LeetCode",
    "leetcodeUrl": "https://leetcode.com/problems/binary-tree-right-side-view/"
  }
];

// Helper to filter and prioritize LeetCode problems with adaptive weak-topic boosting
export function getFilteredLeetCodeProblems({ topic, difficulty, role, search, statusFilter, recommendedOnly, solvedIds = [], attemptedIds = [], weakTopics = [] } = {}) {
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
      if (statusFilter && statusFilter !== 'All' && problem.status.toLowerCase() !== statusFilter.toLowerCase()) return false;
      if (recommendedOnly && !problem.isWeakTopic) return false;
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
