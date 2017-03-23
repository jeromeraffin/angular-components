// app/routes.js

'use strict'

// path
let path = require('path');

// Load the config
const config = require('../config/config.js');

// Load the Article model
let Article = require('./models/article.js');

// var multiparty = require('connect-multiparty');
// var multipartyMiddleware = multiparty();

// Expose the routes to our app with module.exports
module.exports = (app) => {



  // // Example endpoint
  // app.post('/api/upload', multipartyMiddleware, (req, res) => {
  //
  //       // We are able to access req.files.file thanks to
  //       // the multiparty middleware
  //       var file = req.files.file;
  //       console.log(file.name);
  //       console.log(file.type);
  //
  //
  // });







	// Get all articles
	app.get('/api/articles/fetchAll', (req, res) => {


// Delete an Article and send back all remaining articles

		// Count and return the articles
		// Use mongoose to count all articles in the database
		Article.count((err, count) => {
			if(err) {
				res.send(err);
			}
			// Get and return the articles
			// Use mongoose to get articles in the database
			Article.find((err, articles) => {
				// If there is an error retriving, send the error. Nothing after res.send(err) will excute
				if(err) {
					res.send(err);
				}

				// console.log(req);

				// Return articles in JSON format
				res.json({count: count, articles: articles});
			}).limit(config.nbOfArticles);
		});
	});

	// Create article and send back all articles after creation
	app.post('/api/articles/save', (req, res) => {
		// Create a Article, informtion come from AJAX request from angular
		Article.create({
			title: req.body.title,
			content: req.body.content,
			excerpt: req.body.excerpt,
			date: req.body.date,
			img: req.body.img,
			imgAlt: req.body.imgAlt
		}, (err, article) => {
			if(err) {
				res.send(err);
			}

			// Get and return all the articles after you create another
			Article.find((err, articles) => {
				if(err) {
					res.send(err);
				}
				res.json(articles);
			}).limit(config.nbOfArticles);
		});
	});

	// Update an Article and send back all articles
	app.put('/api/articles/update/:article_id', (req, res) => {
		Article.update({
			_id: req.params.article_id
		}, {
			title: req.body.title,
			content: req.body.content,
			excerpt: req.body.excerpt,
			date: req.body.date,
			img: req.body.img,
			imgAlt: req.body.imgAlt
		}, (err, article) => {
			if(err) {
				res.send(err);
			}
			// Get and return all the articles after the delete operation to make sure that the article got deleted
			Article.find((err, articles) => {
				if(err) {
					res.send(err);
				}
				res.json(articles);
			}).limit(config.nbOfArticles);
		});
	});

	// Get one article with _id
	app.get('/api/articles/fetchId/:article_id', (req, res) => {
		Article.findOne({
			_id: req.params.article_id
		}, (err, article) => {
			if(err) {
				res.send(err);
			}
			else {
				res.json(article);
			}
		});
	});

  // Get one article with slug
  app.get('/api/articles/fetchSlug/:slug', (req, res) => {
    //console.log(req.params.slug);
    Article.findOne({
      slug: req.params.slug
    }, (err, article) => {
      if(err) {
        res.send(err);
      }
      else {
        res.json(article);
      }
    });
  });

	// Delete an Article and send back all remaining articles
	app.delete('/api/articles/delete/:article_id', (req, res) => {
		Article.remove({
			_id: req.params.article_id
		}, (err, article) => {
			if(err) {
				res.send(err);
			}
			Article.find((err, articles) => {
				// If there is an error retriving, send the error. Nothing after res.send(err) will excute
				if(err) {
					res.send(err);
				}
				// Return articles in JSON format
				res.json(articles);
			}).limit(config.nbOfArticles);
		});
	});
};
