const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
	itemID: mongoose.Schema.ObjectId,
	itemTitle: String,
	creatorID: Number,
	creatorName: String,
	material: Array,
	createdAt: Date,
	likeCount: Number,
	images: Array,
	description: String,
	isLiked: Boolean,
	isBookmarked: Boolean
});

module.exports = mongoose.model('Item', itemSchema);
