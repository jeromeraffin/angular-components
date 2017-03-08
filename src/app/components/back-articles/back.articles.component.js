'use strict'

import template from './back.articles.html'

export const BackArticlesComponent = {
	template,
	controller: class BackArticlesComponent {
		constructor($http) {

			//this.formData = {};

			// When landing on the page display all articles
			$http({
				method: 'GET',
				url: '/api/articles/fetchAll'
			}).then((res) => {
				this.articles = res.data;
			}).catch((err) => {
				console.log(err);
			});

			// add an article
			// When submitting the add form, send the text to the node API
			this.addArticle = () => {
				$http({
					method: 'POST',
					data: this.formData,
					url: '/api/articles/save'
				}).then((res) => {
					this.articles = res.data;
				}).catch((err) => {
					console.log(err);
				});
			}
		
			//delete an article
			this.deleteArticle = (id) => {
				$http({
					method: 'DELETE',
					url: '/api/articles/delete/' + id
				}).then((res) => {
					this.articles = res.data;
				}).catch((err) => {
					console.log(err);
				});
			}
		}
	}
};
