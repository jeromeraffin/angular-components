
'use strict'

import template from './article.html';

export const ArticleComponent = {
	template,
	controller: class ArticleComponent {
		constructor(ArticleService, $stateParams) {
			this.ArticleService = ArticleService;

			this.ArticleService.getArticle($stateParams.slug).then((res) => {
				this.article = res;
			});
		}
	}
};
