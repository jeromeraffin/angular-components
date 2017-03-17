// app/routes.js

'use strict'

// path
let path = require('path');

// Load the Article model
let Article = require('./models/article.js');

// Expose the routes to our app with module.exports
module.exports = (app) => {
	// Get all articles
	app.get('/api/articles/fetchAll', (req, res) => {
		// Use mongoose to get all article in the database
		Article.find((err, articles) => {
			// If there is an error retriving, send the error. Nothing after res.send(err) will excute
			if(err) {
				res.send(err);
			}

			console.log('test');
			// Return all articles in JSON format
			res.json(articles);
		}).limit(20);
	});

	app.get('/api/articles/search/:search', (req, res) => {
		// Use mongoose to get all article in the database
		Search.find( {title: { "$regex": "EEE", "$options": "i" }} , (errs, search) => {
			if(errs){
				res.send(errs);	
			}
			res.json(search);
		}).limit(20);;

		// search.find((err, articles) => {
		// 	// If there is an error retriving, send the error. Nothing after res.send(err) will excute
		// 	if(err) {
		// 		res.send(err);
		// 	}
		// 	// Return all articles in JSON format
		// 	res.json(articles); 
		// }).limit(20);
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
			});
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
			});
		});
	});

	// Get one article with _id
	app.get('/api/articles/fetchId/:article_title', (req, res) => {
		Article.find({
			title: req.params.article_title
		}, (err, article) => {
			if(err) {
				res.send(err);
			}
			else {
				res.json(article);
			}
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
			// Get and return all the articles after the delete operation to make sure that the article got deleted
			Article.find((err, articles) => {
				if(err) {
					res.send(err);
				}
				res.json(articles);
			});
		});
	});
};
