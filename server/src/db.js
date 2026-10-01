import mongoose from 'mongoose';
export let databaseReady=false;
export async function connectDatabase(){
  if(!process.env.MONGODB_URI){console.warn('MONGODB_URI not set: starting with demo in-memory storage');return false}
  try{await mongoose.connect(process.env.MONGODB_URI);databaseReady=true;console.log('MongoDB connected');return true}
  catch(error){console.error('MongoDB connection failed; starting in demo mode:',error.message);return false}
}
