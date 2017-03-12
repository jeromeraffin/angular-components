'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AdminArticlesComponent } from './admin.articles.component';
import { AdminArticlesService } from './admin.articles.service';
import './admin.articles.css';

export const AdminArticlesModule = angular
	.module('adminArticlesComponent', [
			uiRouter
		])
	.service('AdminArticlesService', AdminArticlesService)
	.component('adminArticlesComponent', AdminArticlesComponent)
	.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
		$stateProvider
			.state('admin-articles', {
				url: '/admin-articles',
				template: '<admin-articles-component></admin-articles-component>'
			});
		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	})
	.name;
