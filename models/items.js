const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  itemID: mongoose.Schema.ObjectId,
  itemTitle: String,
  itemCreator: String,
  creatorID: Number,
  itemCategory: String,
  likeCount: Number,
  itemImageURL: String,
  isLiked: Boolean,
  isBookmarked: Boolean
});

module.exports = mongoose.model('Item', itemSchema);
