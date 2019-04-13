const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  itemName: String,
  itemDescription: String,
  itemCategory: String,
  itemHashtags: Array,
  itemImage: String,
});

module.exports = mongoose.model('Item', itemSchema);
