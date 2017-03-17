
'use strict'

import template from './articles.html';

// Load the config
const config = require('../../../../config/config.js');

export const ArticlesComponent = {
	template,
	controller: class ArticlesComponent {
		constructor(ArticlesService) {
			this.ArticlesService = ArticlesService;

			this.articlesTitle = "Carnet de voyage";

			this.lastArticleDate = '';

			this.ArticlesService.getArticles(this.lastArticleDate).then((res) => {
				this.articles = res.articles;

				this.nbOfPages = Math.floor(res.count / config.nbOfArticles);
				this.lastArticleDate = this.articles[this.articles.length - 1].updatedAt;
			});	
		}
	}
};


