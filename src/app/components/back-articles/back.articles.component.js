'use strict'

import template from './back.articles.html';

export const BackArticlesComponent = {
	template,
	controller: class BackArticlesComponent {
		constructor(BackArticlesService) {
      this.BackArticlesService = BackArticlesService;

			this.articleId = '';
			this.formData = {};

			this.BackArticlesService.getArticles().then((res) => {
			    this.articles = res;
			});
		}

		selectArticle(id) {
			this.BackArticlesService.selectArticle(id).then((res) => {
					this.formData = res;
			});
			this.articleId = id;
		}

		action() {
			if(this.articleId === '') {
				this.BackArticlesService.createArticle(this.formData).then((res) => {
			  	  this.articles = res;
				});
			}
			else {
				this.BackArticlesService.updateArticle(this.articleId, this.formData).then((res) => {
			  	  this.articles = res;
				});
				this.articleId = '';
				this.formData = {};
			}
		}

		deleteArticle(id) {
			this.BackArticlesService.deleteArticle(id).then((res) => {
					this.articles = res;
			});	
		}
	}
};
