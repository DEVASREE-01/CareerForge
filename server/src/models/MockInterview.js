import mongoose from 'mongoose';
const answerSchema = new mongoose.Schema({
  question: String,
  topic: String,
  difficulty: String,
  answer: String,
  evaluation: {
    score: Number,
    technicalCorrectness: Number,
    clarity: Number,
    depth: Number,
    practicalUnderstanding: Number,
    strengths: [String],
    weaknesses: [String],
    missingPoints: [String],
    suggestions: [String],
    sampleAnswer: String,
    source: String
  }
}, { _id: false });

const mockInterviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: String,
  role: String,
  difficulty: { type: String, default: 'Intermediate' },
  topic: { type: String, default: 'General' },
  status: { type: String, enum: ['active', 'completed'], default: 'active' },
  currentIndex: { type: Number, default: 0 },
  questions: [{ question: String, topic: String, difficulty: String, sourceType: String }],
  answers: { type: [answerSchema], default: [] },
  averageScore: { type: Number, default: 0 }
}, { timestamps: true });
export default mongoose.models.MockInterview||mongoose.model('MockInterview',mockInterviewSchema);
