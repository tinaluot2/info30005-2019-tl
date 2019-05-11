const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
	itemID: mongoose.Schema.ObjectId,
	itemTitle: String,
	creatorID: Number,
	creatorName: String,
	material: [],
	createdAt: Date,
	likeCount: { type: Number, default: 0 },
	images: [String],
	description: String,
	isLiked: { type: Boolean, default: false },
	isBookmarked: { type: Boolean, default: false }
});

module.exports = mongoose.model('Item', itemSchema);