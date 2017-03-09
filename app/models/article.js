// app/models/article.js

'use strict'

// Load mongoose to define the model
let mongoose = require('mongoose');

module.exports = mongoose.model('Article', {
	title: String,
	content: String,
	date: String,
	excerpt: String,
	img: String,
	imgAlt: String
});