import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  }
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;