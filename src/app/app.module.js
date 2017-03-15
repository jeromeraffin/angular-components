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
  // Disable debug infos (ng-scope, etc...)
  .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    }])
  .name;
