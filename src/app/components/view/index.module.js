import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { IndexComponent } from './index.component';
import './index.css';

export const IndexModule = angular
  .module('indexComponent', [
      uiRouter
  ])
  .component('indexComponent', IndexComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('index', {
        url: '/index',
        template: '<index-component></index-component>'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;
