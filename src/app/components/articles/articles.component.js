
'use strict'

import template from './articles.html';

export const ArticlesComponent = {
	template,
	controller: class ArticlesComponent {
		constructor(ArticlesService) {
			this.ArticlesService = ArticlesService;

			this.ArticlesService.getArticles().then((res) => {
				this.articles = res;
			});

			this.articlesTitle = "Carnet de voyage";			
		}
	}
};


