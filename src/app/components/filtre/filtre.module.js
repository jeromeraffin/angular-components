
'use strict'

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { FiltreComponent } from './filtre.component';
import { FiltreService } from './filtre.service';
import './filtre.css';

export const FiltreModule = angular
.module('filtreComponent', [
	uiRouter
	])
.service('filtreService', FiltreService)
.component('filtreComponent', FiltreComponent)
.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	$stateProvider
	.state('filtre', {
		url: '/filtre',
		template: '<filtre-component class="Component__filtre"></filtre-component>'
	});
	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
})
.name;