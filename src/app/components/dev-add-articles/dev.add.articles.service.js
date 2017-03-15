// app/components/admin-articles/admin.articles.service.js

'use strict'

export class DevAddArticlesService {
	constructor($http) {
		this.$http = $http;
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
}
