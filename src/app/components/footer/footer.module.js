import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { FooterComponent } from './footer.component';
import './footer.css';

export const FooterModule = angular
.module('footerComponent', [
	uiRouter
	])
.component('footerComponent', FooterComponent)
.config(($stateProvider, $urlRouterProvider) => {
	$stateProvider
	.state('footer', {
		url: '/footer',
		template: '<footer-component></footer-component>'
	});
	$urlRouterProvider.otherwise('/');
})
.name;