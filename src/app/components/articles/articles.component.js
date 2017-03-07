import template from './articles.html';

export const ArticlesComponent = {
	bindings: {
	},
	template,
	controller: class ArticlesComponent {
		constructor() {
			this.articlesTitle = 'Hello';

		}
	}
};