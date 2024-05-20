// models/User.js
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
  },
});

let User;

try {
  // Check if the model is already defined
  User = mongoose.model('User');
} catch {
  // If not, define the model
  User = mongoose.model('User', userSchema);
}

export default User;