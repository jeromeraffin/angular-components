import template from './articles.html';

export const ArticlesComponent = {
	template,
	controller: class ArticlesComponent {
		constructor() {
			this.articlesTitle = "Carnet de voyage";

			this.articles = [
				{
					'title': 'Mon titre d\'article',
					'excerpt': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',	
					'date': '07 mars 2017',
					'img': 'http://change.news/wp-content/uploads/2015/08/Green-Nature-Trees-l.jpg',
					'imgAlt': 'nature'
				},
				{
					'title': 'Mon 2° titre d\'article',
					'excerpt': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',	
					'date': '06 mars 2017',
					'img': 'http://www.mediaterre.org/users/Redaction_Mediaterre/images/nature.jpg',
					'imgAlt': 'nature 2'
				}
			];
				
		}
	}
};

