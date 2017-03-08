'use strict'

import template from './back.articles.html'

export const BackArticlesComponent = {
	template,
	controller: class BackArticlesComponent {
		constructor($http) {
			this.articleId = '';
			this.formData = {};

			// When landing on the page display all articles
			$http({
				method: 'GET',
				url: '/api/articles/fetchAll'
			}).then((res) => {
				this.articles = res.data;
			}).catch((err) => {
				console.log(err);
			});

			// Get the article to update and populate the form
			this.updateArticle = (id) => {
				$http({
					method: 'GET',
					url: '/api/articles/fetch/' + id
				}).then((res) => {
					this.formData = res.data;
				}).catch((err) => {
					console.log(err);
				});		
				this.articleId = id;		
			}

			// Create or update an article
			// When submitting the form, send the text to the node API
			this.action = () => {
				if(this.articleId === '') {
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
				else {
					$http({
						method: 'PUT',
						data: this.formData,
						url: '/api/articles/update/' + this.articleId
					}).then((res) => {
						this.articles = res.data;
					}).catch((err) => {
						console.log(err);
					});
				}
				this.articleId = '';
				this.formData = {};
			}
		
			// Delete an article
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
