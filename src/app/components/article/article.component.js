
'use strict'

import template from './article.html';

export const ArticleComponent = {
	template,
	controller: class ArticleComponent {
		constructor(ArticleService) {
			this.ArticleService = ArticleService;

			this.ArticleService.getArticle(id).then((res) => {
				this.article = res;
			});

			this.articleTitle = "Carnet de voyage";			
		}
	}
};
