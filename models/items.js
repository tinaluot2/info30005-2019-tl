const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
	itemID: mongoose.Schema.ObjectId,
	itemTitle: String,
	creatorID: Number,
	creatorName: String,
	material: [],
	createdAt: Date,
	likeCount: Number,
	images: { type: String },
	description: String,
	isLiked: Boolean,
	isBookmarked: Boolean
});

module.exports = mongoose.model('Item', itemSchema);