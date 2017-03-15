// app/components/admin/admin.module.js

'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AdminComponent } from './admin.component';
import './admin.css';

export const AdminModule = angular
	.module('adminComponent', [
		uiRouter
		])
	.component('adminComponent', AdminComponent)
	.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
		$stateProvider
			.state('admin', {
				url: '/admin',
				template: '<admin-component></admin-component>'
			})
      .state('admin.articles', {
				url: '/admin-articles',
				template: '<admin-articles-component></admin-articles-component>'
			});
			$urlRouterProvider.otherwise('/');
			$locationProvider.html5Mode(true);
	}).name;
