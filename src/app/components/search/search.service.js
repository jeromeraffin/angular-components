// app/components/search/search.service.js

'use strict'

export class SearchService {
	constructor($http) {
		this.$http = $http;
		this.getSearch();
	}

	// Return all articles
	getSearch() {	
		return this.$http({
			method: 'GET',
			url: '/api/search/search'
		}).then((res) => {
			console.log("title est", res.data[0].title);
			return res.data;
		})
		.catch((err) => {
			console.log(err);
		});
	}
}