'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ArticlesComponent } from './articles.component'
import './articles.css';

export const ArticlesModule = angular
	.module('articlesComponent', [
			uiRouter
		])	
	.component('articlesComponent', ArticlesComponent)
	.config(($stateProvider, $urlRouterProvider) => {
		$stateProvider
			.state('articles', {
				url: '/articles',
				template: '<articles-component class="Component__articles"></articles-component>'
			});
		$urlRouterProvider.otherwise('/');
	})
	.name;