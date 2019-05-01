const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
	itemID: mongoose.Schema.ObjectId,
	itemTitle: String,
	creatorID: Number,
	creatorUsername: String,
	material: String,
	likeCount: Number,
	images: Array,
	isLiked: Boolean,
	isBookmarked: Boolean
});

module.exports = mongoose.model('Item', itemSchema);
