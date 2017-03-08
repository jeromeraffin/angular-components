import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const loginFormModule = angular
  .module('loginFormModule', [
      uiRouter
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('login-form', {
        url: '/login-form',
        template: `<div class="Component__form">
            <h1 style="font-family:'Roboto'; text-align: center; margin: 0 0 2rem; text-transform: uppercase; font-size: 1.4rem;">My Website</h1>
            <input-component class="Input__component" label="Email" type="text"></input-component>
            <input-component class="Input__component" label="Password" type="password"></input-component>

            <div class="Button__container">
                <button-component class="Button__component" label="Se connecter" color="primary" link="#" ng-click="$ctrl.addCookie()"></button-component>
                <button-component class="Button__component" label="S'inscrire" color="secondary" link="#"></button-component>
            </div>
        </div>`
      });
    $urlRouterProvider.otherwise('/');
  })
  .name;
