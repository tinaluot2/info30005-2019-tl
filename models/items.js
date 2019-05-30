const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
	itemTitle: String,
	creatorID: Number,
	creatorName: String,
	material: [String],
	createdAt: Date,
	likeCount: { type: Number, default: 0 },
	images: [String],
	description: String,
	comments: []
});

module.exports = mongoose.model('Item', itemSchema);
