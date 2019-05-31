const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: { type: String, required: true },
  username: {
    type: String,
    required: true
  },
  name: String,
  location: String,
  dateJoined: Date,
  projects: [String],
  bookmarks: [String],
  likes: [String],
  description: String
});

module.exports = mongoose.model('User', userSchema);
