'use strict'

import template from './admin.articles.html';

export const AdminArticlesComponent = {
	template,
	controller: class AdminArticlesComponent {
		constructor(AdminArticlesService) {
      this.AdminArticlesService = AdminArticlesService;

			this.articleId = '';
			this.formData = {};

			this.AdminArticlesService.getArticles().then((res) => {
			    this.articles = res;
			});
		}

		selectArticle(id) {
			this.AdminArticlesService.selectArticle(id).then((res) => {
					this.formData = res;
			});
			this.articleId = id;
		}

		action() {
			if(this.articleId === '') {
				this.AdminArticlesService.createArticle(this.formData).then((res) => {
			  	  this.articles = res;
				});
			}
			else {
				this.AdminArticlesService.updateArticle(this.articleId, this.formData).then((res) => {
			  	  this.articles = res;
				});
				this.articleId = '';
				this.formData = {};
			}
		}

		deleteArticle(id) {
			this.AdminArticlesService.deleteArticle(id).then((res) => {
					this.articles = res;
			});
		}
	}
};
