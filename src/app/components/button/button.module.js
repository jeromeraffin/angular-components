import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ButtonComponent } from './button.component';
import './button.css';

export const ButtonModule = angular
  .module('buttonComponent', [
      uiRouter
  ])
  .component('buttonComponent', ButtonComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('button', {
        url: '/button',
        template: '<br><button-component class="Button__component" label="Example" color="primary"></button-component>'
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;
