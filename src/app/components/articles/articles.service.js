// app/components/articles/articles.service.js

'use strict'

export class ArticlesService {
	constructor($http) {
		this.$http = $http;
		this.getArticles();
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
}