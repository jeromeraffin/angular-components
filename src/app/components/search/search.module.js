import angular from 'angular';
import uiRouter from 'angular-ui-router';
//importation du component
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import './search.css';

//SearchModule - nom de component, angular - 1 migne import(program), uiRouter - 2 ligne 
// searchComponent - nom de component
// SearchComponent - nome de class dans le component
export const SearchModule = angular
.module('searchComponent', [ 
	uiRouter 
	])
.service('SearchService', SearchService)
.component('searchComponent', SearchComponent)
.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$stateProvider
	.state('search', {
		url: '/search',
		template: '<search-component></search-component>'
	});
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
})
.name;
