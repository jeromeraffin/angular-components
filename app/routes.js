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
			// Return all articles in JSON format 
			res.json(articles);
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
			});
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

	// app.get('/*', function(req, res) {
	//   var url = path.resolve(__dirname + '/../public/index.html');
	//   res.sendFile(url, null, function(err) {
	//     if (err) res.status(500).send(err);
	//     else res.status(200).end();
	//   });
	// });
};