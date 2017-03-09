// app/components/back/back.module.js

'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { BackComponent } from './back.component';
import './back.css';

export const BackModule = angular 
	.module('backComponent', [
		uiRouter
		])
	.component('backComponent', BackComponent)
	.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
		$stateProvider
			.state('back', {
				url: '/back',
				template: '<back-component></back-component>'
			});
			$urlRouterProvider.otherwise('/');
			$locationProvider.html5Mode(true);
	}).name;