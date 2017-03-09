import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import './app.css';

export const AppModule = angular
  .module('app', [
    ComponentsModule,
    uiRouter
  ])
  .component('app', AppComponent)
  // .config(($locationProvider, $urlRouterProvider) => {
  
  //   $locationProvider.html5Mode(true);
  // })
  .name;
