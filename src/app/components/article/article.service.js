// app/components/articles/articles.service.js

'use strict'

export class ArticleService {
	constructor($http) {
		this.$http = $http;
		this.getArticle();
	}

	// Return all articles
	getArticle(id) {	
		return this.$http({
			method: 'GET',
			url: '/api/articles/fetch/'+id
		}).then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
	}
}