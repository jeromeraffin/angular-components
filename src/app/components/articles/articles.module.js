
'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ArticlesComponent } from './articles.component';
import { ArticlesService } from './articles.service';
import './articles.css';

export const ArticlesModule = angular
.module('articlesComponent', [
	uiRouter
	])	
.service('ArticlesService', ArticlesService)
.component('articlesComponent', ArticlesComponent)
.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$stateProvider
	.state('articles', {
		url: '/articles',
		template: '<articles-component class="Component__articles"></articles-component>'
	})
	.state('articles-page', {
		url: '/articles/page/:page',
		template: '<articles-component class="Component__articles"></articles-component>'
	});
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
})
.name;

