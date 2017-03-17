// app/components/articles/articles.service.js

'use strict'

export class ArticlesService {
	constructor($http) {
		this.$http = $http;
	}

	// Return articles
	getArticles(lastArticleDate) {	
		return this.$http({
			method: 'GET',
			url: '/api/articles/fetchAll',
			params: {lastArticleDate: lastArticleDate}
		}).then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
  }
}