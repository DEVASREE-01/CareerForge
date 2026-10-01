<p align="center">
  <h1 align="center">🚀 CareerForge</h1>
  <p align="center">
    <strong>Personalized Career Preparation Platform</strong>
    <br />
    <em>Learn → Practice → Assess → Interview → Build & Prove</em>
  </p>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-8-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Node.js-20+-339933?logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="License" />
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Problem Statement](#-problem-statement)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Running the Application](#-running-the-application)
- [Testing](#-testing)
- [Security](#-security)
- [Future Enhancements](#-future-enhancements)

---

## 🌟 Overview

CareerForge is a full-stack career preparation platform designed for students and fresh graduates. It transforms a career goal (target company + role) into a structured, personalized preparation journey spanning skill-gap analysis, curated roadmaps, coding practice, aptitude training, AI-powered mock interviews, GitHub profile analysis, and job-readiness scoring.

The platform follows a **Learn → Practice → Assess → Interview → Build & Prove** workflow, guiding users from identifying their skill gaps all the way to proving their readiness through real projects and mock interviews.

---

## 🎯 Problem Statement

Students and fresh graduates face fragmented career preparation — scattered resources, no structured plan, and no way to measure readiness. CareerForge solves this by providing:

- **Personalized, role-specific preparation** instead of one-size-fits-all content
- **Quantified skill-gap analysis** using weighted importance scoring
- **Structured, stage-based roadmaps** with prerequisite-aware learning paths
- **Integrated practice tools** (coding, aptitude, interviews) in a single platform
- **Objective readiness scoring** so users know when they're prepared

---

## ✨ Key Features

### 🔐 Authentication & Security
- **Email/Password registration** with bcrypt hashing and JWT authorization
- **Email verification** via 6-digit OTP (SHA-256 HMAC, timing-safe comparison, rate-limited)
- **Google OAuth 2.0 / OpenID Connect** social login
- **GitHub OAuth 2.0** social login
- **Forgot/Reset password** with single-use 64-character tokens
- **HttpOnly session cookies** + Bearer token dual-auth
- **Configurable rate limiting** per authentication endpoint

### 📊 Skill-Gap Analysis
- Weighted skill priority calculation: `gap × company importance × role importance`
- Role-specific skill requirements sourced from domain profiles
- Visual gap identification with severity levels

### 🗺️ Personalized Roadmap
- Multi-stage, prerequisite-aware learning roadmaps tailored to target role
- Per-stage activities with curated learning resources
- Stage assessments with MCQ quizzes from a large question bank
- Project milestones with GitHub integration
- Progress tracking per stage and activity

### 💻 Coding Practice
- 500+ LeetCode-style problems organized by topic, difficulty, and company tags
- Problem status tracking (solved, attempted, bookmarked)
- Filtered views by difficulty, topic, and company relevance
- Daily coding challenges

### 🧮 Aptitude Practice
- 1000+ aptitude questions across multiple categories (Quantitative, Logical Reasoning, Verbal, Data Interpretation)
- Category-based practice sessions with configurable difficulty
- Detailed answer evaluation and explanation
- Performance tracking per category

### 🎤 AI Mock Interviews
- Gemini AI-powered mock interview sessions
- Role-specific and topic-specific interview question generation
- Real-time answer evaluation with scoring and feedback
- Interview history tracking and performance trends
- Behavioral + Technical interview support

### 🐙 GitHub Profile Analysis
- Repository analysis with language detection and quality metrics
- Contribution pattern evaluation
- Profile completeness scoring
- Actionable improvement suggestions
- Strengths and weaknesses identification

### 🏢 Company Preparation
- Company-specific interview question banks with source labels
- Company profiles with culture and hiring process insights
- Role-specific preparation within target companies
- Questions categorized by type (behavioral, technical, system design)

### 📚 Interview Preparation
- Topic-based technical interview question banks
- Answer evaluation with detailed feedback
- Organized by role relevance and difficulty
- Project-specific interview preparation

### 📈 Readiness Scoring
- Multi-dimensional readiness score: Skills (35%) + Projects (20%) + DSA (15%) + Interview (20%) + Consistency (10%)
- Detailed progress reports with per-dimension breakdown
- Progress tracking across all preparation activities

### 🎓 Learning Resources
- YouTube video search integration (with graceful fallback)
- Curated certification recommendations
- Stage-specific resource suggestions

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18, React Router, Recharts, Lucide Icons |
| **Build Tool** | Vite |
| **Backend** | Node.js, Express |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | JWT, bcryptjs, Google OAuth 2.0, GitHub OAuth 2.0 |
| **Email** | Resend, SendGrid, Nodemailer (SMTP) |
| **AI** | Google Gemini API |
| **External APIs** | YouTube Data API, GitHub API |

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Client (Vite + React)             │
│                  http://localhost:5173                │
│                                                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐  │
│  │   Auth   │ │Dashboard │ │ Roadmap  │ │Practice│  │
│  │  Portal  │ │  & Gaps  │ │ Stages   │ │ Tools  │  │
│  └──────────┘ └──────────┘ └──────────┘ └────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────┐  │
│  │  Mock    │ │  GitHub  │ │ Company  │ │Progress│  │
│  │Interview │ │ Analysis │ │   Prep   │ │& Score │  │
│  └──────────┘ └──────────┘ └──────────┘ └────────┘  │
└───────────────────┬─────────────────────────────────┘
                    │  Vite Proxy /api → :5000
┌───────────────────▼─────────────────────────────────┐
│              Server (Express API)                    │
│              http://localhost:5000                    │
│                                                      │
│  ┌──────────────────────────────────────────────┐    │
│  │  Auth Routes (Register, Login, OAuth, OTP,   │    │
│  │  Password Reset, Session, Rate Limiting)      │    │
│  └──────────────────────────────────────────────┘    │
│  ┌──────────────────────────────────────────────┐    │
│  │  Core API (Users, Roadmap, Gaps, Projects,   │    │
│  │  Interviews, Coding, Aptitude, Progress)      │    │
│  └──────────────────────────────────────────────┘    │
│  ┌──────────────────────────────────────────────┐    │
│  │  External Integrations (Gemini AI, YouTube,  │    │
│  │  GitHub API)                                  │    │
│  └──────────────────────────────────────────────┘    │
└───────────────────┬─────────────────────────────────┘
                    │
┌───────────────────▼─────────────────────────────────┐
│           MongoDB (or In-Memory Demo Mode)           │
└─────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
CAREERFORGE/
├── client/                          # Frontend (Vite + React)
│   ├── src/
│   │   └── components/
│   │       └── auth/
│   │           ├── AuthPortal.jsx   # Authentication UI (login, register, OAuth, OTP, reset)
│   │           └── OtpInput.jsx     # 6-digit OTP input component
│   ├── src.jsx                      # Main application (all pages and components)
│   ├── style.css                    # Global styles
│   ├── index.html                   # HTML entry point
│   ├── vite.config.js               # Vite configuration with API proxy
│   └── package.json
│
├── server/                          # Backend (Express API)
│   ├── src/
│   │   ├── index.js                 # Express server, all API routes
│   │   ├── db.js                    # MongoDB connection manager
│   │   ├── seedData.js              # Company, role, and project seed data
│   │   ├── domainProfiles.js        # Role-specific skill profiles and requirements
│   │   ├── data/
│   │   │   ├── interviewQuestionsData.js   # Interview question bank
│   │   │   ├── companyQuestionsData.js     # Company-specific questions
│   │   │   ├── leetcodeProblemsData.js     # Coding problem bank
│   │   │   ├── aptitudeQuestionsData.js    # Aptitude question bank
│   │   │   └── stageMcqData.js             # Stage assessment MCQs
│   │   ├── models/
│   │   │   ├── User.js              # User schema (profile, progress, skills)
│   │   │   └── MockInterview.js     # Mock interview session schema
│   │   ├── routes/
│   │   │   └── authRoutes.js        # Authentication routes (register, login, OAuth, OTP)
│   │   ├── services/
│   │   │   ├── emailService.js      # Multi-provider email service (Resend/SendGrid/SMTP)
│   │   │   └── oauthService.js      # Google & GitHub OAuth service
│   │   ├── middleware/
│   │   │   └── rateLimiter.js       # Per-endpoint rate limiting
│   │   └── utils/
│   │       └── crypto.js            # OTP hashing and verification utilities
│   ├── test_*.js                    # Backend test suites
│   └── package.json
│
├── .env.example                     # Environment variable template (safe to commit)
├── .gitignore
├── SETUP_AUTH.md                    # Detailed authentication setup guide
├── README.md                        # This file
└── package.json                     # Root workspace (concurrently runs client + server)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20+)
- **npm** 9+
- **MongoDB** 6+ (optional — the app runs in demo mode without a database)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/careerforge.git
cd careerforge

# 2. Install root dependencies
npm install

# 3. Install client dependencies
npm install --prefix client

# 4. Install server dependencies
npm install --prefix server

# 5. Set up environment variables
cp .env.example .env
# Edit .env with your actual configuration (see below)
```

---

## 🔑 Environment Variables

Copy `.env.example` to `.env` in the project root and configure:

| Variable | Required | Description |
|---|---|---|
| `MONGODB_URI` | Recommended | MongoDB connection string. Without it, the app runs in in-memory demo mode. |
| `PORT` | No | API server port (default: `5000`) |
| `APP_URL` | No | Frontend URL (default: `http://localhost:5173`) |
| `JWT_SECRET` | **Yes** | Secret for signing JWTs. Generate with: `node -e "console.log(crypto.randomBytes(32).toString('hex'))"` |
| `OTP_PEPPER` | Recommended | Additional secret for OTP hashing |
| `EMAIL_FROM` | No | Sender address for emails |
| `EMAIL_PROVIDER` | No | `resend`, `sendgrid`, `smtp`, or `dev` |
| `RESEND_API_KEY` | No | Resend API key for email delivery |
| `SENDGRID_API_KEY` | No | SendGrid API key (alternative to Resend) |
| `SMTP_HOST/PORT/USER/PASS` | No | Custom SMTP configuration |
| `GOOGLE_CLIENT_ID` | No | Google OAuth 2.0 Client ID |
| `GOOGLE_CLIENT_SECRET` | No | Google OAuth 2.0 Client Secret |
| `GITHUB_CLIENT_ID` | No | GitHub OAuth App Client ID |
| `GITHUB_CLIENT_SECRET` | No | GitHub OAuth App Client Secret |
| `GEMINI_API_KEY` | No | Google Gemini API key for AI mock interviews |
| `YOUTUBE_API_KEY` | No | YouTube Data API key for video search |
| `GITHUB_TOKEN` | No | GitHub Personal Access Token for profile analysis |

> **Note:** In development without email credentials, CareerForge prints OTP codes and email content directly to the server console. See [SETUP_AUTH.md](SETUP_AUTH.md) for detailed OAuth and email configuration guides.

---

## ▶️ Running the Application

### Development (Client + Server concurrently)

```bash
npm run dev
```

This starts:
- **Frontend** → `http://localhost:5173`
- **API Server** → `http://localhost:5000`

The Vite dev server proxies `/api` requests to the Express backend automatically.

### Run individually

```bash
# Frontend only
npm run dev --prefix client

# Backend only
npm run dev --prefix server
```

### Seed the database (optional)

```bash
npm run seed
```

---

## 🧪 Testing

### Frontend Build Verification

```bash
npm run build --prefix client
```

### Backend Syntax Check

```bash
node --check server/src/index.js
```

### Backend Test Suites

```bash
cd server

# Authentication tests (requires MongoDB running)
node test_auth_real.js

# Frontend integration tests (requires both client and server running)
node test_frontend_integration.js

# Core enhancement tests
node test_core_enhancements.js

# Comprehensive SaaS tests
node test_comprehensive_saas.js

# Workflow tests
node test_workflow.js
```

---

## 🔒 Security

- **Passwords** are hashed with bcrypt (10+ salt rounds)
- **OTPs** are stored as salted SHA-256 HMACs — never in plain text
- **OTP verification** uses `crypto.timingSafeEqual` to prevent timing attacks
- **JWT tokens** are signed with a configurable secret and expire after 7 days
- **Rate limiting** is enforced per endpoint (login, register, OTP request/verify, password reset)
- **Password reset tokens** are single-use, hashed, and expire after 15 minutes
- **Account enumeration** is prevented with uniform response messages
- **API keys** are never exposed to the frontend — all external API calls go through the server
- **CORS** is configured to allow only the specified frontend origin
- **HttpOnly cookies** provide CSRF-resistant session management
- **`.env` files are gitignored** — only `.env.example` with placeholder values is committed

---

## 🔮 Future Enhancements

- Gemini-powered answer evaluation for interview and aptitude responses
- Admin dashboard with CRUD management for companies, roles, and questions
- Video resource caching and recommendation engine
- Candidate experience moderation and community features
- Resume analysis and ATS compatibility scoring
- Collaborative study groups and peer mock interviews
- Mobile-responsive progressive web app (PWA)
- Deployment guides for Vercel, Railway, and Docker

---

## 📄 License

This project is built for educational and portfolio purposes.

---

<p align="center">
  <strong>Built with ❤️ for aspiring developers</strong>
  <br />
  <em>CareerForge — Your personalized path to career readiness</em>
</p>
