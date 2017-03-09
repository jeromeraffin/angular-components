import angular from 'angular';
import { ButtonModule } from './button/button.module';
import { InputModule } from './input/input.module';
import { loginFormModule } from './login-form/login-form.module';
import { CardModule } from './card/card.module';
//importation du module header
import { HeaderModule } from './header/header.module';


export const ComponentsModule = angular
.module('app.components', [
	ButtonModule, InputModule, loginFormModule, CardModule, HeaderModule
	])
.name;
