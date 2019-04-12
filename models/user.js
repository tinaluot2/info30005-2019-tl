const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  name: String,
  username: String,
  password: String,
  age: Number,
  birthday: String,
  gender: String,
  email: String
});

module.exports = mongoose.model('User', userSchema);
