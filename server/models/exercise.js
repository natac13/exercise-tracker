import mongoose, { Schema } from 'mongoose';

const ExerciseSchema = new Schema({
  userId: String,
  description: String,
  duration: Number,
  date: Date,
});

export default mongoose.model('Exercise', ExerciseSchema);
