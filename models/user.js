const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: { type: String, required: true },
  age: Number,
  birthday: String,
  gender: String
});

module.exports = mongoose.model('User', userSchema);
