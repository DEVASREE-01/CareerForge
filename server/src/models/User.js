import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, select: false },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  
  // Real-world Authentication Lifecycle Fields
  emailVerified: { type: Boolean, default: false },
  emailVerifiedAt: { type: Date },
  authProvider: { type: String, enum: ['local', 'google', 'github'], default: 'local' },
  providerId: { type: String },
  picture: { type: String },
  
  // OTP Verification Fields
  otpHash: { type: String, select: false },
  otpExpiresAt: { type: Date, select: false },
  otpAttempts: { type: Number, default: 0, select: false },
  otpLastSentAt: { type: Date, select: false },
  
  // Password Reset Fields
  passwordResetTokenHash: { type: String, select: false },
  passwordResetExpiresAt: { type: Date, select: false },
  passwordResetAttempts: { type: Number, default: 0, select: false },
  
  // Audit and Activity
  lastLoginAt: { type: Date },

  profile: {
    college: { type: String, trim: true },
    graduationYear: Number,
    targetCompany: String,
    targetRole: String,
    targetDomain: String,
    preferredTechnologies: { type: [String], default: [] },
    preparationGoals: { type: [String], default: [] },
    githubUsername: String,
    skills: { type: Map, of: Number, default: {} },
    onboardingCompleted: { type: Boolean, default: false }
  },

  progress: {
    completedRoadmapItems: { type: [String], default: [] },
    completedTasks: { type: [String], default: [] },
    dsaScore: { type: Number, default: 0 },
    projectScore: { type: Number, default: 0 },
    interviewScore: { type: Number, default: 0 },
    certificationScore: { type: Number, default: 0 },
    consistencyScore: { type: Number, default: 0 },
    mockInterviewCount: { type: Number, default: 0 },
    lastMockScore: { type: Number, default: 0 },
    roadmapProgress: { type: [mongoose.Schema.Types.Mixed], default: [] },
    weakTopics: { type: [String], default: [] },
    weakInterviewTopics: { type: [String], default: [] },
    weakAssessmentTopics: { type: [String], default: [] },
    weakAptitudeTopics: { type: [String], default: [] },
    interviewQuestionAttempts: { type: [mongoose.Schema.Types.Mixed], default: [] },
    readinessAudit: { type: [mongoose.Schema.Types.Mixed], default: [] },
    assessmentHistory: { type: [mongoose.Schema.Types.Mixed], default: [] },
    interviewHistory: { type: [mongoose.Schema.Types.Mixed], default: [] },
    readinessHistory: { type: [mongoose.Schema.Types.Mixed], default: [] },
    recentActivity: { type: [mongoose.Schema.Types.Mixed], default: [] },
    dailyChallengeStreak: { type: Number, default: 0 },
    dailyChallengeLastCompleted: { type: String, default: '' },
    completedDailyChallenges: { type: [String], default: [] },
    dailyChallengeHistory: { type: [mongoose.Schema.Types.Mixed], default: [] },
    aptitudeProgress: { type: Map, of: mongoose.Schema.Types.Mixed, default: {} },
    codingPractice: {
      solved: { type: [String], default: [] },
      attempted: { type: [String], default: [] }
    }
  }
}, { timestamps: true });

userSchema.index({ authProvider: 1, providerId: 1 });

export default mongoose.models.User || mongoose.model('User', userSchema);
