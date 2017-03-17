// importation search.html
import template from './search.html';

export const SearchComponent = {
	template,
	controller: class SearchComponent {
		constructor(SearchService) {
			this.SearchService = SearchService;

			// this.SearchService.getSearch().then((res) => {
			// 	this.search = res;
			this.result = '';
			this.searchInput = function () {
				this.result = this.searchTitle;
				console.log('input est '+this.result);
			}
		};
	}
};




