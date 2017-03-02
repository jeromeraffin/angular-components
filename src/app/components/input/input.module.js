import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { InputComponent } from './input.component';
import './input.css';

export const InputModule = angular
  .module('inputComponent', [
      
  ])
  .component('inputComponent', InputComponent)
  .name;
