'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { BackArticlesComponent } from './back.articles.component';
import './back.articles.css';

export const BackArticlesModule = angular
	.module('backArticlesComponent', [
			uiRouter
		])
	.component('backArticlesComponent', BackArticlesComponent)
	.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
		$stateProvider
			.state('back-articles', {
				url: '/back-articles',
				template: '<back-articles-component></back-articles-component>'
			});
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	})
	.name;