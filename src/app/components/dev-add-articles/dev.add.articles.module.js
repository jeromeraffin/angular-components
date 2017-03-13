'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { DevAddArticlesComponent } from './dev.add.articles.component';
import { DevAddArticlesService } from './dev.add.articles.service';
import './dev.add.articles.css';

export const DevAddArticlesModule = angular
	.module('devAddArticlesComponent', [
			uiRouter
		])
	.service('DevAddArticlesService', DevAddArticlesService)
	.component('devAddArticlesComponent', DevAddArticlesComponent)
	.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
		$stateProvider
			.state('dev-add-articles', {
				url: '/dev-add-articles',
				template: '<dev-add-articles-component></dev-add-articles-component>'
			});
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	})
	.name;
