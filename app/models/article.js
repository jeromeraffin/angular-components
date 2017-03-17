// app/models/article.js

'use strict'

// Load mongoose to define the model
let mongoose = require('mongoose');
// Load mongoose-slug-generator
let slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

let ArticleSchema = new mongoose.Schema({  
	lang: String,
	timestamps: Boolean,
  title: String,
  content: String,
  excerpt: String,
  img: String,
  categories: Array,
  visible: Boolean,
  social_network: Boolean,
  comments: Boolean,
  slug: {
    type: String,
    slug: "title",
    slug_padding_size: 2,
    unique: true
  }
}, {
   timestamps: true
});

module.exports = mongoose.model('Article', ArticleSchema);  