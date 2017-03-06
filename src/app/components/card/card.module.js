import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { CardComponent } from './card.component';
import './card.css';

export const CardModule = angular
  .module('cardComponent', [
      uiRouter
  ])
  .component('cardComponent', CardComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('card', {
        url: '/card',
        template: '<card-component></card-component>'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;
