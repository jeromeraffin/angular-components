// app/components/articles/articles.service.js

'use strict'

export class ArticleService {
	constructor($http) {
		this.$http = $http;
	}

	// Return one article
	getArticle(slug) {
		return this.$http({
			method: 'GET',
			url: '/api/articles/fetchSlug/' + slug
		}).then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
	}
}
