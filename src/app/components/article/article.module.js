
'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';
import './article.css';

export const ArticleModule = angular
.module('articleComponent', [
	uiRouter
	])	
.service('ArticleService', ArticleService)
.component('articleComponent', ArticleComponent)
.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$stateProvider
	.state('article', {
		url: '/article/:articleId',
		template: '<article-component class="Component__article"></article-component>'
	});
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
})
.name;