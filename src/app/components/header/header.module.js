import angular from 'angular';
import uiRouter from 'angular-ui-router';
//importation du component
import { HeaderComponent } from './header.component';
import './header.css';

//HeadeModule - nom de component, angular - 1 migne import(program), uiRouter - 2 ligne 
export const HeaderModule = angular.module('headerComponent', [ uiRouter ])
// headerComponent - nom de comonent
// HeaderComponent - nome de class dans le component
.component('headerComponent', HeaderComponent)
.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
  .state('header', {
    url: '/header',
    template: '<header-component></header-component>'
  });
  $urlRouterProvider.otherwise('/');
})
.name;