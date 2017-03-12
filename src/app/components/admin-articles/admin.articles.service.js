// app/components/admin-articles/admin.articles.service.js

'use strict'

export class AdminArticlesService {
	constructor($http) {
		this.$http = $http;
	}

	// Return all articles
	getArticles() {
		return this.$http({
			method: 'GET',
			url: '/api/articles/fetchAll'
		}).then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
  }

	// Get the article to update and populate the form
	selectArticle(id) {
		return this.$http({
			method: 'GET',
			url: '/api/articles/fetchId/' + id
		}).then((res) => {
			return res.data;
		}).catch((err) => {
			console.log(err);
		});
	}

	// Create an article
	// Send the text to the node API
	createArticle(formData) {
		return this.$http({
			method: 'POST',
			data: formData,
			url: '/api/articles/save'
		}).then((res) => {
			return res.data;
		}).catch((err) => {
			console.log(err);
		});
	}

	// Update an article
	// Send the text to the node API
	updateArticle(id, formData) {
		return this.$http({
			method: 'PUT',
			data: formData,
			url: '/api/articles/update/' + id
		}).then((res) => {
			return res.data;
		}).catch((err) => {
			console.log(err);
		});
	}

	// Delete an article
	deleteArticle(id) {
		return this.$http({
			method: 'DELETE',
			url: '/api/articles/delete/' + id
		}).then((res) => {
			return res.data;
		}).catch((err) => {
			console.log(err);
		});
	}
}
